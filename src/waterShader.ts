import * as THREE from 'three';
import { LevelFieldData, WATER_LEVEL, WaterVisualStyle } from './types';

class WaveField2D {
  readonly size = 160;
  readonly worldSpan = 26.0;
  readonly texture: THREE.DataTexture;

  private curr: Float32Array;
  private prev: Float32Array;
  private next: Float32Array;
  private readonly texData: Uint16Array;

  centerX = 0;
  centerZ = 0;
  private simAccum = 0;

  constructor() {
    const n = this.size * this.size;
    this.curr = new Float32Array(n);
    this.prev = new Float32Array(n);
    this.next = new Float32Array(n);
    this.texData = new Uint16Array(n * 4);

    const zeroHalf = THREE.DataUtils.toHalfFloat(0);
    const oneHalf = THREE.DataUtils.toHalfFloat(1);
    for (let i = 0; i < n; i++) {
      const k = i * 4;
      this.texData[k] = zeroHalf;
      this.texData[k + 1] = zeroHalf;
      this.texData[k + 2] = zeroHalf;
      this.texData[k + 3] = oneHalf;
    }

    this.texture = new THREE.DataTexture(
      this.texData as Uint16Array<ArrayBuffer>,
      this.size,
      this.size,
      THREE.RGBAFormat,
      THREE.HalfFloatType
    );
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.ClampToEdgeWrapping;
    this.texture.needsUpdate = true;
  }

  reset(x: number, z: number): void {
    this.curr.fill(0);
    this.prev.fill(0);
    this.next.fill(0);
    this.centerX = x;
    this.centerZ = z;
    this.uploadTexture();
  }

  recenter(targetX: number, targetZ: number): void {
    const cellSize = this.worldSpan / this.size;
    const shiftX = Math.round((targetX - this.centerX) / cellSize);
    const shiftZ = Math.round((targetZ - this.centerZ) / cellSize);
    if (shiftX === 0 && shiftZ === 0) return;

    const S = this.size;
    const shiftBuf = (src: Float32Array): Float32Array => {
      const dst = new Float32Array(S * S);
      for (let z = 0; z < S; z++) {
        const srcZ = z + shiftZ;
        if (srcZ < 0 || srcZ >= S) continue;
        const dstRow = z * S;
        const srcRow = srcZ * S;
        for (let x = 0; x < S; x++) {
          const srcX = x + shiftX;
          if (srcX < 0 || srcX >= S) continue;
          dst[dstRow + x] = src[srcRow + srcX];
        }
      }
      return dst;
    };

    this.curr = shiftBuf(this.curr);
    this.prev = shiftBuf(this.prev);
    this.centerX += shiftX * cellSize;
    this.centerZ += shiftZ * cellSize;
  }

  addImpulse(worldX: number, worldZ: number, strength: number, radiusMeters = 0.44): void {
    const cellSize = this.worldSpan / this.size;
    const fx = (worldX - this.centerX) / cellSize + this.size * 0.5;
    const fz = (worldZ - this.centerZ) / cellSize + this.size * 0.5;
    const radCells = Math.max(1.8, radiusMeters / cellSize);
    const rCeil = Math.ceil(radCells * 2.4);

    const cx = Math.floor(fx);
    const cz = Math.floor(fz);
    const S = this.size;

    for (let dz = -rCeil; dz <= rCeil; dz++) {
      const z = cz + dz;
      if (z <= 1 || z >= S - 2) continue;
      for (let dx = -rCeil; dx <= rCeil; dx++) {
        const x = cx + dx;
        if (x <= 1 || x >= S - 2) continue;
        const dist2 = (x - fx) * (x - fx) + (z - fz) * (z - fz);
        const w = Math.exp(-dist2 / (radCells * radCells * 0.85));
        if (w > 0.004) {
          const idx = z * S + x;
          this.curr[idx] = Math.max(-1.8, Math.min(1.8, this.curr[idx] - strength * w * 0.68));
        }
      }
    }
  }

  step(dt: number): void {
    const fixedDt = 1 / 60;
    this.simAccum = Math.min(this.simAccum + dt, 0.05);
    const S = this.size;
    const c2 = 0.24;
    const damping = 0.986;

    let stepped = false;
    while (this.simAccum >= fixedDt) {
      this.simAccum -= fixedDt;
      stepped = true;

      for (let z = 1; z < S - 1; z++) {
        const row = z * S;
        const rowUp = (z - 1) * S;
        const rowDn = (z + 1) * S;
        for (let x = 1; x < S - 1; x++) {
          const i = row + x;
          const lap =
            this.curr[i - 1] +
            this.curr[i + 1] +
            this.curr[rowUp + x] +
            this.curr[rowDn + x] -
            4.0 * this.curr[i];

          let h = (2.0 * this.curr[i] - this.prev[i] + c2 * lap) * damping;

          const edgeDist = Math.min(x, z, S - 1 - x, S - 1 - z);
          if (edgeDist < 10) {
            h *= 0.84 + (edgeDist / 10) * 0.16;
          }
          this.next[i] = Math.max(-2.0, Math.min(2.0, h));
        }
      }

      const tmp = this.prev;
      this.prev = this.curr;
      this.curr = this.next;
      this.next = tmp;
    }

    if (stepped) {
      this.uploadTexture();
    }
  }

  private uploadTexture(): void {
    const S = this.size;
    const data = this.texData;
    const curr = this.curr;
    const toHalf = THREE.DataUtils.toHalfFloat;

    for (let z = 1; z < S - 1; z++) {
      const row = z * S;
      const rowUp = (z - 1) * S;
      const rowDn = (z + 1) * S;
      for (let x = 1; x < S - 1; x++) {
        const i = row + x;
        const h = curr[i];
        const dhdx = (curr[i + 1] - curr[i - 1]) * 0.5;
        const dhdz = (curr[rowDn + x] - curr[rowUp + x]) * 0.5;

        const k = i * 4;
        data[k] = toHalf(h);
        data[k + 1] = toHalf(dhdx);
        data[k + 2] = toHalf(dhdz);
      }
    }
    this.texture.needsUpdate = true;
  }

  dispose(): void {
    this.texture.dispose();
  }
}

function createRadialWaterGeometry(segments = 296): THREE.BufferGeometry {
  const geo = new THREE.PlaneGeometry(1, 1, segments, segments);
  geo.rotateX(-Math.PI / 2);

  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const u = pos.getX(i) * 2.0;
    const v = pos.getZ(i) * 2.0;
    const ax = Math.abs(u);
    const az = Math.abs(v);

    const wu = Math.sign(u) * (0.20 * ax + 0.80 * ax * ax) * 0.5;
    const wv = Math.sign(v) * (0.20 * az + 0.80 * az * az) * 0.5;
    pos.setX(i, wu);
    pos.setZ(i, wv);
  }
  pos.needsUpdate = true;
  return geo;
}

const POOL_SPLASH_TRAINS: ReadonlyArray<[number, number, number, number, number]> = [
  [0.866, 0.500, 0.92, 2.35, 0.195],
  [-0.866, 0.500, 1.04, 2.52, 0.175],
  [0.258, -0.966, 1.18, 2.74, 0.150],
  [-0.500, -0.866, 1.38, 2.98, 0.125],
  [0.966, -0.258, 1.66, 3.28, 0.100],
  [-0.342, 0.940, 1.98, 3.62, 0.082],
  [0.707, 0.707, 2.42, 4.02, 0.062],
  [-0.940, -0.342, 2.92, 4.45, 0.048]
];

const WATER_SPECTRUM_GLSL = `
struct WaveEval {
  vec3 offset;
  vec2 slope;
  float crest;
};

WaveEval evaluateWaveSpectrum(
  vec2 worldXZ,
  float t,
  float amp,
  float chop,
  float spd,
  float turb,
  vec2 flowVel,
  float wallProximity
) {
  vec2 p = worldXZ - flowVel * t * 0.45;
  float tt = t * spd;

  vec2 horizDisp = vec2(0.0);
  float heightSum = 0.0;
  vec2 gradSum = vec2(0.0);

  float reboundBoost = 1.0 + wallProximity * (0.34 + turb * 0.36);
  float effAmp = amp * reboundBoost;

  vec2 dirs[8];
  dirs[0] = vec2(0.866, 0.500);
  dirs[1] = vec2(-0.866, 0.500);
  dirs[2] = vec2(0.258, -0.966);
  dirs[3] = vec2(-0.500, -0.866);
  dirs[4] = vec2(0.966, -0.258);
  dirs[5] = vec2(-0.342, 0.940);
  dirs[6] = vec2(0.707, 0.707);
  dirs[7] = vec2(-0.940, -0.342);

  float ks[8];
  ks[0] = 0.92; ks[1] = 1.04; ks[2] = 1.18; ks[3] = 1.38;
  ks[4] = 1.66; ks[5] = 1.98; ks[6] = 2.42; ks[7] = 2.92;

  float omegas[8];
  omegas[0] = 2.35; omegas[1] = 2.52; omegas[2] = 2.74; omegas[3] = 2.98;
  omegas[4] = 3.28; omegas[5] = 3.62; omegas[6] = 4.02; omegas[7] = 4.45;

  float weights[8];
  weights[0] = 0.195; weights[1] = 0.175; weights[2] = 0.150; weights[3] = 0.125;
  weights[4] = 0.100; weights[5] = 0.082; weights[6] = 0.062; weights[7] = 0.048;

  for (int i = 0; i < 8; i++) {
    float a = weights[i] * effAmp;
    float k = ks[i];
    vec2 d = dirs[i];
    float phase = dot(p, d) * k + tt * omegas[i] + float(i) * 1.67;
    float s = sin(phase);
    float c = cos(phase);

    float steep = chop * 0.48 / max(k * a * 6.0, 1.0);
    horizDisp -= d * (steep * a * c);

    float hWave = a * (s + chop * 0.22 * (s * s - 0.5));
    float dhPhase = a * k * (c + chop * 0.44 * s * c);

    heightSum += hWave;
    gradSum += d * dhPhase;
  }

  vec2 c1 = p - vec2(4.2, -3.5);
  float r1 = length(mod(c1 + 9.0, 18.0) - 9.0) + 0.08;
  float env1 = exp(-r1 * 0.24);
  float ph1 = r1 * 2.55 - tt * 3.85;
  float spAmp1 = effAmp * 0.18 * env1 * (0.45 + 0.55 * turb);
  vec2 radDir1 = (mod(c1 + 9.0, 18.0) - 9.0) / r1;
  heightSum += sin(ph1) * spAmp1;
  gradSum += radDir1 * (cos(ph1) * 2.55 * spAmp1);

  vec2 c2 = p - vec2(-6.5, 5.8);
  float r2 = length(mod(c2 + 11.0, 22.0) - 11.0) + 0.08;
  float env2 = exp(-r2 * 0.20);
  float ph2 = r2 * 2.15 - tt * 3.42 + 2.1;
  float spAmp2 = effAmp * 0.16 * env2 * (0.45 + 0.55 * turb);
  vec2 radDir2 = (mod(c2 + 11.0, 22.0) - 11.0) / r2;
  heightSum += sin(ph2) * spAmp2;
  gradSum += radDir2 * (cos(ph2) * 2.15 * spAmp2);

  float standA = sin(p.x * 1.48 - tt * 2.65) * cos(p.y * 1.42 + tt * 2.48);
  float standAmp = effAmp * (0.10 + wallProximity * 0.22) * (0.5 + 0.5 * turb);
  heightSum += standA * standAmp;
  gradSum.x += 1.48 * cos(p.x * 1.48 - tt * 2.65) * cos(p.y * 1.42 + tt * 2.48) * standAmp;
  gradSum.y -= 1.42 * sin(p.x * 1.48 - tt * 2.65) * sin(p.y * 1.42 + tt * 2.48) * standAmp;

  WaveEval res;
  res.offset = vec3(horizDisp.x, heightSum, horizDisp.y);
  res.slope = gradSum;
  float maxPossible = max(0.06, effAmp * 0.92);
  res.crest = clamp(heightSum / maxPossible * 0.5 + 0.5, 0.0, 1.0);
  return res;
}
`;

const WATER_VERTEX_SHADER = `
uniform float uTime;
uniform float uWaveAmp;
uniform float uChoppiness;
uniform float uWaveSpeed;
uniform float uTurbulence;
uniform float uDepthWaveDamping;
uniform vec2 uFlowVel;
uniform vec2 uSimCenter;
uniform float uSimSpan;
uniform sampler2D tWaveSim;
uniform sampler2D uFieldMap;
uniform vec2 uFieldCenter;
uniform vec2 uFieldSize;

varying vec3 vWorldPos;
varying vec3 vUndisplacedWorldPos;
varying vec4 vScreenClip;

${WATER_SPECTRUM_GLSL}

void main() {
  vec4 baseWp = modelMatrix * vec4(position, 1.0);
  vUndisplacedWorldPos = baseWp.xyz;

  vec2 fieldUV = (baseWp.xz - uFieldCenter) / max(uFieldSize, vec2(1.0)) + 0.5;
  vec4 field = texture2D(uFieldMap, clamp(fieldUV, 0.002, 0.998));

  float wallProx = smoothstep(0.05, 0.45, field.r) * (1.0 - smoothstep(0.55, 0.98, field.r));
  float depthAtten = mix(1.0, mix(0.42, 1.0, smoothstep(0.04, 0.24, field.a)), uDepthWaveDamping);
  float localAmp = uWaveAmp * depthAtten;

  WaveEval wv = evaluateWaveSpectrum(
    baseWp.xz,
    uTime,
    localAmp,
    uChoppiness,
    uWaveSpeed,
    uTurbulence,
    uFlowVel,
    wallProx
  );

  vec2 simUv = (baseWp.xz - uSimCenter) / uSimSpan + 0.5;
  float simH = 0.0;
  if (simUv.x > 0.02 && simUv.x < 0.98 && simUv.y > 0.02 && simUv.y < 0.98) {
    float edgeFade = smoothstep(0.02, 0.14, simUv.x) * smoothstep(0.98, 0.86, simUv.x)
                   * smoothstep(0.02, 0.14, simUv.y) * smoothstep(0.98, 0.86, simUv.y);
    simH = texture2D(tWaveSim, simUv).r * 0.085 * edgeFade;
  }

  vec4 displacedWp = vec4(
    baseWp.x + wv.offset.x,
    baseWp.y + wv.offset.y + simH,
    baseWp.z + wv.offset.z,
    1.0
  );

  vWorldPos = displacedWp.xyz;
  vec4 clipPos = projectionMatrix * viewMatrix * displacedWp;
  vScreenClip = clipPos;
  gl_Position = clipPos;
}
`;

const WATER_FRAGMENT_SHADER = `
precision highp float;

uniform float uTime;
uniform float uWaterLevel;
uniform float uNear;
uniform float uFar;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uCameraPos;
uniform mat4 uReflectionMatrix;
uniform vec2 uReflTexelSize;

uniform vec2 uSimCenter;
uniform float uSimSpan;
uniform vec3 uFlashlightPos;
uniform vec3 uFlashlightDir;
uniform float uFlashlightIntensity;

uniform vec3 uAbsorption;
uniform vec3 uDeepColor;
uniform vec3 uShallowColor;
uniform vec3 uReflectionTint;
uniform float uWaveAmp;
uniform float uChoppiness;
uniform float uWaveSpeed;
uniform float uTurbulence;
uniform float uDepthWaveDamping;
uniform vec2 uFlowVel;
uniform vec3 uSunDir;
uniform vec3 uSunSpecColor;
uniform float uSpecularIntensity;

uniform sampler2D tWaveSim;
uniform sampler2D tReflection;
uniform sampler2D tRefraction;
uniform sampler2D tDepth;
uniform sampler2D uFieldMap;
uniform vec2 uFieldCenter;
uniform vec2 uFieldSize;

varying vec3 vWorldPos;
varying vec3 vUndisplacedWorldPos;
varying vec4 vScreenClip;

${WATER_SPECTRUM_GLSL}

float linearizeDepth(float depthSample) {
  float z = depthSample * 2.0 - 1.0;
  return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
}

vec2 computeLiquidRippleNormals(vec2 p, float t, float strength) {
  vec2 g = vec2(0.0);

  vec2 rDirs[6];
  rDirs[0] = vec2(0.924, 0.383);
  rDirs[1] = vec2(-0.383, 0.924);
  rDirs[2] = vec2(-0.809, -0.588);
  rDirs[3] = vec2(0.588, -0.809);
  rDirs[4] = vec2(0.174, 0.985);
  rDirs[5] = vec2(-0.985, 0.174);

  float rKs[6];
  rKs[0] = 3.8; rKs[1] = 4.6; rKs[2] = 5.9;
  rKs[3] = 7.4; rKs[4] = 9.2; rKs[5] = 11.4;

  float rOm[6];
  rOm[0] = 4.2; rOm[1] = 4.8; rOm[2] = 5.5;
  rOm[3] = 6.3; rOm[4] = 7.1; rOm[5] = 7.9;

  float rW[6];
  rW[0] = 0.036; rW[1] = 0.030; rW[2] = 0.024;
  rW[3] = 0.018; rW[4] = 0.013; rW[5] = 0.009;

  for (int i = 0; i < 6; i++) {
    float ph = dot(p, rDirs[i]) * rKs[i] + t * rOm[i] + float(i) * 2.17;
    float s = sin(ph);
    float c = cos(ph);
    float amp = rW[i] * strength;
    g += rDirs[i] * (amp * rKs[i] * (c + 0.28 * s * c));
  }
  return g;
}

void main() {
  vec3 viewVec = uCameraPos - vWorldPos;
  float viewDist = length(viewVec);
  vec3 V = viewVec / max(viewDist, 0.0001);

  vec2 fieldUV = (vUndisplacedWorldPos.xz - uFieldCenter) / max(uFieldSize, vec2(1.0)) + 0.5;
  vec4 field = texture2D(uFieldMap, clamp(fieldUV, 0.002, 0.998));
  float wallProx = smoothstep(0.04, 0.42, field.r) * (1.0 - smoothstep(0.56, 0.98, field.r));
  float depthAtten = mix(1.0, mix(0.42, 1.0, smoothstep(0.04, 0.24, field.a)), uDepthWaveDamping);
  float localAmp = uWaveAmp * depthAtten;

  WaveEval wv = evaluateWaveSpectrum(
    vUndisplacedWorldPos.xz,
    uTime,
    localAmp,
    uChoppiness,
    uWaveSpeed,
    uTurbulence,
    uFlowVel,
    wallProx
  );

  float distAtten = exp(-viewDist * 0.014);
  float rippleStrength = clamp(localAmp * 2.4 + 0.18 + wallProx * 0.28, 0.14, 1.15) * distAtten;
  vec2 liquidRipples = computeLiquidRippleNormals(vUndisplacedWorldPos.xz, uTime * uWaveSpeed, rippleStrength);
  vec2 totalSlope = wv.slope + liquidRipples;

  vec2 simUv = (vUndisplacedWorldPos.xz - uSimCenter) / uSimSpan + 0.5;
  if (simUv.x > 0.02 && simUv.x < 0.98 && simUv.y > 0.02 && simUv.y < 0.98) {
    float edgeFade = smoothstep(0.02, 0.14, simUv.x) * smoothstep(0.98, 0.86, simUv.x)
                   * smoothstep(0.02, 0.14, simUv.y) * smoothstep(0.98, 0.86, simUv.y);
    vec3 simSample = texture2D(tWaveSim, simUv).rgb;
    totalSlope += simSample.gb * 1.45 * edgeFade;
  }

  vec3 N = normalize(vec3(-totalSlope.x, 1.0, -totalSlope.y));
  bool fromBelow = !gl_FrontFacing || (uCameraPos.y < uWaterLevel - 0.02);

  vec2 screenUV = (vScreenClip.xy / vScreenClip.w) * 0.5 + 0.5;

  vec4 flatMirrorClip = uReflectionMatrix * vec4(vWorldPos.x, uWaterLevel, vWorldPos.z, 1.0);
  vec2 reflUV = (flatMirrorClip.xy / max(0.0001, flatMirrorClip.w)) * 0.5 + 0.5;

  if (fromBelow) {
    vec3 Ndown = -N;
    float cosTheta = clamp(dot(Ndown, V), 0.0, 1.0);
    float snellWindow = smoothstep(0.56, 0.76, cosTheta);

    vec2 refrUV = clamp(screenUV + N.xz * 0.068, vec2(0.002), vec2(0.998));
    vec3 aboveColor = texture2D(tRefraction, refrUV).rgb;
    vec3 tirColor = uDeepColor * 1.55 + uShallowColor * 0.48 * pow(1.0 - cosTheta, 2.2);
    vec3 col = mix(tirColor, aboveColor * vec3(0.84, 0.98, 1.02) * 1.18, snellWindow);

    float rim = smoothstep(0.50, 0.66, cosTheta) * (1.0 - smoothstep(0.66, 0.84, cosTheta));
    col += uShallowColor * 2.5 * rim;

    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * viewDist * viewDist);
    col = mix(col, uFogColor, clamp(fogFactor, 0.0, 1.0));
    gl_FragColor = vec4(col, 0.96);
    return;
  }

  float waterLinearDepth = linearizeDepth(gl_FragCoord.z);
  float rawSceneDepth = texture2D(tDepth, clamp(screenUV, 0.001, 0.999)).r;
  float sceneLinearDepth = linearizeDepth(rawSceneDepth);
  float rayWaterDist = max(0.0, sceneLinearDepth - waterLinearDepth);

  float edgeFade = smoothstep(0.0, 0.055, screenUV.x) * smoothstep(1.0, 0.945, screenUV.x)
                 * smoothstep(0.0, 0.055, screenUV.y) * smoothstep(1.0, 0.945, screenUV.y);
  float shallowDamp = clamp(rayWaterDist * 1.55, 0.0, 1.0);
  float distortScale = (0.082 + uChoppiness * 0.028) / (1.0 + viewDist * 0.015);
  vec2 distort = N.xz * distortScale * shallowDamp * edgeFade;
  vec2 refrUV = clamp(screenUV + distort, vec2(0.002), vec2(0.998));

  float refrRawDepth = texture2D(tDepth, refrUV).r;
  float refrLinearDepth = linearizeDepth(refrRawDepth);
  if (refrLinearDepth < waterLinearDepth + 0.012) {
    refrUV = clamp(screenUV, vec2(0.002), vec2(0.998));
    refrLinearDepth = sceneLinearDepth;
  }

  float effectiveDist = max(0.0, refrLinearDepth - waterLinearDepth);
  float effVertDepth = effectiveDist * max(0.32, abs(V.y));

  vec2 dispOff = N.xz * 0.0028 * shallowDamp * edgeFade;
  vec3 underwaterScene = vec3(
    texture2D(tRefraction, clamp(refrUV + dispOff, 0.002, 0.998)).r,
    texture2D(tRefraction, refrUV).g,
    texture2D(tRefraction, clamp(refrUV - dispOff, 0.002, 0.998)).b
  );

  float abyssDrop = smoothstep(1.10, 4.6, effVertDepth);
  vec3 transmittance = exp(-effVertDepth * uAbsorption * mix(1.08, 1.98, abyssDrop));
  vec3 waterBodyColor = mix(uShallowColor, uDeepColor, smoothstep(0.32, 3.4, effVertDepth));

  float sssCrest = pow(clamp(wv.crest, 0.0, 1.0), 2.4) * clamp(1.0 - V.y, 0.15, 1.0) * (1.0 - abyssDrop * 0.65);
  waterBodyColor += mix(uDeepColor, uShallowColor, 0.40) * sssCrest * 0.26;

  float clarity = clamp(max(transmittance.g, transmittance.b) * 0.98, 0.0, 1.0);
  vec3 refractedColor = mix(waterBodyColor, underwaterScene * transmittance, clarity);

  float reflScale = (0.115 + uChoppiness * 0.055) / (1.0 + viewDist * 0.010);
  vec2 reflDistort = vec2(N.x * reflScale, N.z * reflScale * 1.38);
  vec2 sampleReflUV = clamp(reflUV + reflDistort, vec2(0.002), vec2(0.998));

  float slopeMag = length(N.xz);
  float blurSpread = slopeMag * 0.85 * (0.3 + viewDist * 0.012);
  vec2 offX = vec2(uReflTexelSize.x * blurSpread, 0.0);
  vec2 offY = vec2(0.0, uReflTexelSize.y * blurSpread * 1.25);
  vec3 reflCenter = texture2D(tReflection, sampleReflUV).rgb;
  vec3 reflFiltered = (
    reflCenter * 4.0 +
    texture2D(tReflection, clamp(sampleReflUV + offX, vec2(0.002), vec2(0.998))).rgb +
    texture2D(tReflection, clamp(sampleReflUV - offX, vec2(0.002), vec2(0.998))).rgb +
    texture2D(tReflection, clamp(sampleReflUV + offY, vec2(0.002), vec2(0.998))).rgb +
    texture2D(tReflection, clamp(sampleReflUV - offY, vec2(0.002), vec2(0.998))).rgb
  ) / 8.0;
  vec3 reflectionColor = mix(reflCenter, reflFiltered, clamp(slopeMag * 0.65, 0.0, 0.55)) * uReflectionTint;

  float reflPeak = max(reflectionColor.r, max(reflectionColor.g, reflectionColor.b));
  if (reflPeak > 3.2) {
    reflectionColor *= (3.2 + log(1.0 + reflPeak - 3.2) * 0.9) / reflPeak;
  }

  float NdotV = clamp(dot(N, V), 0.0, 1.0);
  const float F0 = 0.0204;
  float fresnel = F0 + (1.0 - F0) * pow(1.0 - NdotV, 5.0);
  fresnel = clamp(fresnel * 1.06, 0.0204, 0.985);

  vec3 surfaceColor = mix(refractedColor, reflectionColor, fresnel);

  if (uSpecularIntensity > 0.01) {
    vec3 Lsun = normalize(uSunDir);
    vec3 Hsun = normalize(Lsun + V);
    float NdotH = max(dot(N, Hsun), 0.0);
    float specTight = pow(NdotH, 340.0) * 1.35;
    float specBroad = pow(NdotH, 48.0) * 0.16;
    surfaceColor += uSunSpecColor * (specTight + specBroad) * uSpecularIntensity;
  }

  if (uFlashlightIntensity > 0.01) {
    vec3 toLight = uFlashlightPos - vWorldPos;
    float lDist = length(toLight);
    vec3 L = toLight / max(lDist, 0.001);
    float cone = dot(-L, normalize(uFlashlightDir));
    float spot = smoothstep(0.79, 0.96, cone);
    float atten = 1.0 / (1.0 + lDist * lDist * 0.044);
    vec3 Hfl = normalize(L + V);
    float flSpec = pow(max(dot(N, Hfl), 0.0), 180.0) * spot * atten;
    float flScatter = spot * atten * 0.075;
    surfaceColor += vec3(0.78, 0.93, 0.97) * flSpec * 0.78 * uFlashlightIntensity;
    surfaceColor += (uShallowColor * 1.3 + vec3(0.02, 0.05, 0.06)) * flScatter * uFlashlightIntensity;
  }

  float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * viewDist * viewDist);
  surfaceColor = mix(surfaceColor, uFogColor, clamp(fogFactor, 0.0, 1.0));

  float edgeAlpha = smoothstep(0.0, 0.024, rayWaterDist + 0.004);
  gl_FragColor = vec4(surfaceColor, max(edgeAlpha, 0.968));
}
`;

export interface WavePhysicsSample {
  height: number;
  surgeVx: number;
  surgeVz: number;
}

export interface DarkWaterSystem {
  mesh: THREE.Mesh;
  material: THREE.ShaderMaterial;
  applyStyle: (
    style: WaterVisualStyle,
    fieldData: LevelFieldData,
    spawnX: number,
    spawnZ: number
  ) => void;
  sampleWaveHeight: (x: number, z: number, elapsedTime: number) => number;
  sampleWavePhysics: (x: number, z: number, elapsedTime: number) => WavePhysicsSample;
  addRipple: (x: number, z: number, strength?: number, radiusMeters?: number) => void;
  update: (
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    dt: number,
    elapsedTime: number,
    playerPos: THREE.Vector3,
    playerVel: THREE.Vector3,
    playerInWater: number,
    flashlightPos: THREE.Vector3,
    flashlightDir: THREE.Vector3,
    flashlightNormIntensity: number
  ) => void;
  resize: (width: number, height: number) => void;
  dispose: () => void;
}

export function createDarkWaterSystem(
  width: number,
  height: number,
  fogColor: THREE.Color,
  fogDensity: number
): DarkWaterSystem {
  const computeTargetSizes = (w: number, h: number) => ({
    reflW: Math.max(640, Math.floor(w * 0.84)),
    reflH: Math.max(640, Math.floor(h * 0.84)),
    refrW: Math.max(640, Math.floor(w * 0.86)),
    refrH: Math.max(640, Math.floor(h * 0.86))
  });

  const initSizes = computeTargetSizes(width, height);

  const reflectionTarget = new THREE.WebGLRenderTarget(initSizes.reflW, initSizes.reflH, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType,
    depthBuffer: true
  });

  const depthTexture = new THREE.DepthTexture(initSizes.refrW, initSizes.refrH);
  depthTexture.type = THREE.UnsignedIntType;
  depthTexture.format = THREE.DepthFormat;

  const refractionTarget = new THREE.WebGLRenderTarget(initSizes.refrW, initSizes.refrH, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType,
    depthBuffer: true,
    depthTexture
  });

  const waveSim = new WaveField2D();

  let currentWaveAmp = 0.24;
  let currentChop = 0.28;
  let currentWaveSpeed = 1.0;
  let currentTurbulence = 0.65;
  let currentDepthDamping = 0.0;
  let currentFlowVx = 0;
  let currentFlowVz = 0;
  let meshFollowCamera = true;
  let basePlaneCenter: [number, number] = [0, 0];
  let basePlaneSize: [number, number] = [680, 680];
  let wakeTimer = 0;
  let activeFieldData: LevelFieldData | null = null;

  const fallbackField = new THREE.DataTexture(
    new Uint8Array([255, 180, 255, 128]),
    1,
    1,
    THREE.RGBAFormat
  );
  fallbackField.needsUpdate = true;

  const reflectionCamera = new THREE.PerspectiveCamera();
  const reflectionMatrix = new THREE.Matrix4();
  const aboveWaterClipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -WATER_LEVEL + 0.05);

  const uniforms = {
    uTime: { value: 0 },
    uWaterLevel: { value: WATER_LEVEL },
    uNear: { value: 0.08 },
    uFar: { value: 1200 },
    uFogColor: { value: fogColor.clone() },
    uFogDensity: { value: fogDensity },
    uCameraPos: { value: new THREE.Vector3() },
    uReflectionMatrix: { value: reflectionMatrix },
    uReflTexelSize: { value: new THREE.Vector2(1 / initSizes.reflW, 1 / initSizes.reflH) },
    uSimCenter: { value: new THREE.Vector2(0, 0) },
    uSimSpan: { value: waveSim.worldSpan },
    uFlashlightPos: { value: new THREE.Vector3() },
    uFlashlightDir: { value: new THREE.Vector3(0, 0, -1) },
    uFlashlightIntensity: { value: 0 },
    uAbsorption: { value: new THREE.Vector3(0.60, 0.13, 0.14) },
    uDeepColor: { value: new THREE.Vector3(0.02, 0.22, 0.24) },
    uShallowColor: { value: new THREE.Vector3(0.08, 0.54, 0.52) },
    uReflectionTint: { value: new THREE.Vector3(0.96, 0.98, 1.0) },
    uWaveAmp: { value: currentWaveAmp },
    uChoppiness: { value: currentChop },
    uWaveSpeed: { value: currentWaveSpeed },
    uTurbulence: { value: currentTurbulence },
    uDepthWaveDamping: { value: currentDepthDamping },
    uFlowVel: { value: new THREE.Vector2(0, 0) },
    uSunDir: { value: new THREE.Vector3(0.4, 0.85, -0.3) },
    uSunSpecColor: { value: new THREE.Vector3(1.0, 0.95, 0.82) },
    uSpecularIntensity: { value: 1.0 },
    tWaveSim: { value: waveSim.texture },
    tReflection: { value: reflectionTarget.texture },
    tRefraction: { value: refractionTarget.texture },
    tDepth: { value: depthTexture },
    uFieldMap: { value: fallbackField },
    uFieldCenter: { value: new THREE.Vector2(0, 0) },
    uFieldSize: { value: new THREE.Vector2(400, 400) }
  };

  const material = new THREE.ShaderMaterial({
    vertexShader: WATER_VERTEX_SHADER,
    fragmentShader: WATER_FRAGMENT_SHADER,
    uniforms,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: true
  });

  const geometry = createRadialWaterGeometry(296);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, WATER_LEVEL, 0);
  mesh.scale.set(680, 1, 680);
  mesh.renderOrder = 2;
  mesh.frustumCulled = false;

  const camRight = new THREE.Vector3();
  const camUp = new THREE.Vector3();
  const camBack = new THREE.Vector3();
  const reflRight = new THREE.Vector3();
  const reflUp = new THREE.Vector3();
  const reflBack = new THREE.Vector3();
  const reflRotMatrix = new THREE.Matrix4();
  const prevClipPlanes: THREE.Plane[] = [];

  const sampleDepthAtten = (x: number, z: number): number => {
    if (currentDepthDamping < 0.01 || !activeFieldData?.depthGrid || !activeFieldData.gridRes) {
      return 1.0;
    }
    const N = activeFieldData.gridRes;
    const u = THREE.MathUtils.clamp((x - activeFieldData.centerX) / activeFieldData.sizeX + 0.5, 0, 0.999);
    const v = THREE.MathUtils.clamp((z - activeFieldData.centerZ) / activeFieldData.sizeZ + 0.5, 0, 0.999);
    const ix = Math.floor(u * N);
    const iz = Math.floor(v * N);
    const normD = activeFieldData.depthGrid[iz * N + ix];
    const t = THREE.MathUtils.smoothstep(normD, 0.04, 0.24);
    const damped = THREE.MathUtils.lerp(0.42, 1.0, t);
    return THREE.MathUtils.lerp(1.0, damped, currentDepthDamping);
  };

  const evalPhysicsInternal = (x: number, z: number, elapsedTime: number): WavePhysicsSample => {
    const px = x - currentFlowVx * elapsedTime * 0.45;
    const pz = z - currentFlowVz * elapsedTime * 0.45;
    const tt = elapsedTime * currentWaveSpeed;
    const effAmp = currentWaveAmp * sampleDepthAtten(x, z);

    let h = 0;
    let vx = currentFlowVx;
    let vz = currentFlowVz;

    for (let i = 0; i < POOL_SPLASH_TRAINS.length; i++) {
      const [dx, dz, k, omega, wgt] = POOL_SPLASH_TRAINS[i];
      const a = wgt * effAmp;
      const phase = (px * dx + pz * dz) * k + tt * omega + i * 1.67;
      const s = Math.sin(phase);
      const c = Math.cos(phase);
      h += a * (s + currentChop * 0.22 * (s * s - 0.5));
      const orbitalSpeed = a * omega * currentWaveSpeed * 0.85 * c;
      vx -= dx * orbitalSpeed;
      vz -= dz * orbitalSpeed;
    }

    const standA = Math.sin(px * 1.48 - tt * 2.65) * Math.cos(pz * 1.42 + tt * 2.48);
    h += standA * effAmp * 0.14 * (0.5 + 0.5 * currentTurbulence);

    return { height: WATER_LEVEL + h, surgeVx: vx, surgeVz: vz };
  };

  return {
    mesh,
    material,

    applyStyle(style, fieldData, spawnX, spawnZ) {
      activeFieldData = fieldData;
      uniforms.uAbsorption.value.set(...style.absorption);
      uniforms.uDeepColor.value.set(...style.deepColor);
      uniforms.uShallowColor.value.set(...style.shallowColor);
      uniforms.uReflectionTint.value.set(...style.reflectionTint);
      uniforms.uWaveAmp.value = style.waveAmplitude;
      uniforms.uChoppiness.value = style.choppiness;
      uniforms.uWaveSpeed.value = style.waveSpeed;

      currentTurbulence = style.turbulence ?? 0.65;
      uniforms.uTurbulence.value = currentTurbulence;

      currentDepthDamping = style.depthWaveDamping ?? 0.0;
      uniforms.uDepthWaveDamping.value = currentDepthDamping;

      currentFlowVx = style.flowVelocity?.[0] ?? 0;
      currentFlowVz = style.flowVelocity?.[1] ?? 0;
      uniforms.uFlowVel.value.set(currentFlowVx, currentFlowVz);

      uniforms.uSunDir.value.set(...style.sunDirection).normalize();
      uniforms.uSunSpecColor.value.set(...style.sunSpecularColor);
      uniforms.uSpecularIntensity.value = style.specularIntensity ?? 1.0;

      uniforms.uFieldMap.value = fieldData.texture;
      uniforms.uFieldCenter.value.set(fieldData.centerX, fieldData.centerZ);
      uniforms.uFieldSize.value.set(fieldData.sizeX, fieldData.sizeZ);

      currentWaveAmp = style.waveAmplitude;
      currentChop = style.choppiness;
      currentWaveSpeed = style.waveSpeed;

      basePlaneCenter = [style.planeCenter[0], style.planeCenter[1]];
      basePlaneSize = [Math.max(240, style.planeSize[0]), Math.max(240, style.planeSize[1])];
      meshFollowCamera = basePlaneSize[0] >= 360 || basePlaneSize[1] >= 360;

      mesh.position.set(spawnX, WATER_LEVEL, spawnZ);
      mesh.scale.set(Math.max(basePlaneSize[0], 560), 1, Math.max(basePlaneSize[1], 560));

      waveSim.reset(spawnX, spawnZ);
      uniforms.uSimCenter.value.set(waveSim.centerX, waveSim.centerZ);
    },

    sampleWaveHeight(x, z, elapsedTime) {
      return evalPhysicsInternal(x, z, elapsedTime).height;
    },

    sampleWavePhysics(x, z, elapsedTime) {
      return evalPhysicsInternal(x, z, elapsedTime);
    },

    addRipple(x, z, strength = 0.9, radiusMeters = 0.44) {
      waveSim.addImpulse(x, z, strength, radiusMeters);
    },

    update(
      renderer,
      scene,
      camera,
      dt,
      elapsedTime,
      playerPos,
      playerVel,
      playerInWater,
      flashlightPos,
      flashlightDir,
      flashlightNormIntensity
    ) {
      if (meshFollowCamera) {
        const snap = 0.5;
        mesh.position.set(
          Math.round(camera.position.x / snap) * snap,
          WATER_LEVEL,
          Math.round(camera.position.z / snap) * snap
        );
      } else {
        mesh.position.set(
          THREE.MathUtils.clamp(camera.position.x, basePlaneCenter[0] - 120, basePlaneCenter[0] + 120),
          WATER_LEVEL,
          THREE.MathUtils.clamp(camera.position.z, basePlaneCenter[1] - 120, basePlaneCenter[1] + 120)
        );
      }

      waveSim.recenter(playerPos.x, playerPos.z);

      const horizSpeed = Math.hypot(playerVel.x, playerVel.z);
      if (playerInWater > 0.1 && horizSpeed > 0.18) {
        wakeTimer += dt * (2.6 + horizSpeed * 2.2);
        if (wakeTimer >= 0.28) {
          wakeTimer = 0;
          waveSim.addImpulse(
            playerPos.x,
            playerPos.z,
            Math.min(1.0, 0.28 + horizSpeed * 0.18),
            0.44
          );
        }
      }
      waveSim.step(dt);

      uniforms.uTime.value = elapsedTime;
      uniforms.uNear.value = camera.near;
      uniforms.uFar.value = camera.far;
      uniforms.uCameraPos.value.copy(camera.position);
      uniforms.uSimCenter.value.set(waveSim.centerX, waveSim.centerZ);
      uniforms.uFlashlightPos.value.copy(flashlightPos);
      uniforms.uFlashlightDir.value.copy(flashlightDir);
      uniforms.uFlashlightIntensity.value = flashlightNormIntensity;

      if (scene.fog instanceof THREE.FogExp2) {
        uniforms.uFogColor.value.copy(scene.fog.color);
        uniforms.uFogDensity.value = scene.fog.density;
      }

      const prevTarget = renderer.getRenderTarget();
      const prevXrEnabled = renderer.xr.enabled;
      const prevShadowAutoUpdate = renderer.shadowMap.autoUpdate;
      prevClipPlanes.length = 0;
      for (const p of renderer.clippingPlanes) prevClipPlanes.push(p);

      renderer.xr.enabled = false;
      renderer.shadowMap.autoUpdate = false;
      mesh.visible = false;

      renderer.clippingPlanes = [];
      renderer.setRenderTarget(refractionTarget);
      renderer.clear();
      renderer.render(scene, camera);

      if (camera.position.y >= WATER_LEVEL - 0.30) {
        camera.updateMatrixWorld();
        camera.matrixWorld.extractBasis(camRight, camUp, camBack);

        reflectionCamera.fov = camera.fov;
        reflectionCamera.aspect = camera.aspect;
        reflectionCamera.near = camera.near;
        reflectionCamera.far = camera.far;
        reflectionCamera.updateProjectionMatrix();

        reflectionCamera.position.set(
          camera.position.x,
          2 * WATER_LEVEL - camera.position.y,
          camera.position.z
        );

        reflRight.set(camRight.x, -camRight.y, camRight.z).normalize();
        reflBack.set(camBack.x, -camBack.y, camBack.z).normalize();
        reflUp.crossVectors(reflBack, reflRight).normalize();

        reflRotMatrix.makeBasis(reflRight, reflUp, reflBack);
        reflectionCamera.quaternion.setFromRotationMatrix(reflRotMatrix);
        reflectionCamera.updateMatrixWorld(true);

        reflectionMatrix.multiplyMatrices(
          reflectionCamera.projectionMatrix,
          reflectionCamera.matrixWorldInverse
        );

        const troughMargin = Math.max(0.14, currentWaveAmp * 1.15);
        aboveWaterClipPlane.constant = -WATER_LEVEL + troughMargin;
        renderer.clippingPlanes = [aboveWaterClipPlane];
        renderer.setRenderTarget(reflectionTarget);
        renderer.clear();
        renderer.render(scene, reflectionCamera);
      }

      mesh.visible = true;
      renderer.clippingPlanes = prevClipPlanes.slice();
      renderer.shadowMap.autoUpdate = prevShadowAutoUpdate;
      renderer.xr.enabled = prevXrEnabled;
      renderer.setRenderTarget(prevTarget);
    },

    resize(newWidth, newHeight) {
      const s = computeTargetSizes(newWidth, newHeight);
      reflectionTarget.setSize(s.reflW, s.reflH);
      refractionTarget.setSize(s.refrW, s.refrH);
      uniforms.uReflTexelSize.value.set(1 / s.reflW, 1 / s.reflH);
    },

    dispose() {
      fallbackField.dispose();
      waveSim.dispose();
      geometry.dispose();
      material.dispose();
      reflectionTarget.dispose();
      refractionTarget.dispose();
      depthTexture.dispose();
    }
  };
}
