import * as THREE from 'three';
import {
  BlendFunction,
  BloomEffect,
  Effect,
  EffectAttribute,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  ToneMappingEffect,
  ToneMappingMode
} from 'postprocessing';

const ARCHITECTURAL_GTAO_HDR_SHADER =  `
uniform float uTime;
uniform float uExposure;
uniform float uWarmthGrade;
uniform float uUnderwater;
uniform float uSsaoIntensity;
uniform float uTanHalfFov;
uniform float uAspect;
uniform vec3 uUnderwaterTint;

float ignHash(vec2 pixel) {
  return fract(52.9829189 * fract(dot(pixel, vec2(0.06711056, 0.00583715))));
}

float linearizeViewZ(float rawDepth) {

  float zNdc = rawDepth * 2.0 - 1.0;
  return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - zNdc * (cameraFar - cameraNear));
}

vec3 reconstructViewPos(vec2 uv, float viewDist) {
  vec2 ndc = uv * 2.0 - 1.0;
  return vec3(ndc.x * uAspect * uTanHalfFov * viewDist, ndc.y * uTanHalfFov * viewDist, -viewDist);
}

float computeArchitecturalAO(vec2 uv, float centerDepthRaw) {
  if (centerDepthRaw >= 0.9998 || uSsaoIntensity < 0.01) return 1.0;

  float viewZ = linearizeViewZ(centerDepthRaw);
  if (viewZ > 85.0) return 1.0;

  vec3 P = reconstructViewPos(uv, viewZ);

  vec2 px = texelSize;
  vec3 Pr = reconstructViewPos(uv + vec2(px.x, 0.0), linearizeViewZ(readDepth(uv + vec2(px.x, 0.0))));
  vec3 Pl = reconstructViewPos(uv - vec2(px.x, 0.0), linearizeViewZ(readDepth(uv - vec2(px.x, 0.0))));
  vec3 Pu = reconstructViewPos(uv + vec2(0.0, px.y), linearizeViewZ(readDepth(uv + vec2(0.0, px.y))));
  vec3 Pd = reconstructViewPos(uv - vec2(0.0, px.y), linearizeViewZ(readDepth(uv - vec2(0.0, px.y))));

  vec3 dPdx = (abs(Pr.z - P.z) < abs(P.z - Pl.z)) ? (Pr - P) : (P - Pl);
  vec3 dPdy = (abs(Pu.z - P.z) < abs(P.z - Pd.z)) ? (Pu - P) : (P - Pd);
  vec3 N = normalize(cross(dPdx, dPdy));

  float jitter = ignHash(uv * resolution) * 6.2831853;

  float projScale = 0.5 / max(uTanHalfFov, 0.25);
  float worldRadius = mix(0.42, 1.35, clamp(viewZ / 24.0, 0.0, 1.0));
  vec2 baseUvRad = vec2(worldRadius * projScale / max(viewZ, 0.65)) * vec2(1.0 / max(uAspect, 0.5), 1.0);
  baseUvRad = clamp(baseUvRad, px * 2.5, vec2(0.065));

  float occ = 0.0;
  const int SAMPLES = 12;
  for (int i = 0; i < SAMPLES; i++) {
    float fi = float(i);
    float rNorm = sqrt((fi + 0.5) / float(SAMPLES));
    float ang = fi * 2.39996323 + jitter;
    vec2 sUv = uv + vec2(cos(ang), sin(ang)) * baseUvRad * rNorm;
    if (sUv.x < 0.001 || sUv.x > 0.999 || sUv.y < 0.001 || sUv.y > 0.999) continue;

    float sRaw = readDepth(sUv);
    if (sRaw >= 0.9998) continue;

    float sViewZ = linearizeViewZ(sRaw);
    vec3 S = reconstructViewPos(sUv, sViewZ);
    vec3 V = S - P;
    float dist2 = dot(V, V);
    float dist = sqrt(max(dist2, 1e-6));

    float nDotV = dot(N, V / dist) - 0.065;

    float rangeWeight = smoothstep(worldRadius * 2.1, worldRadius * 0.35, dist);
    occ += max(0.0, nDotV) * rangeWeight;
  }

  float rawAo = 1.0 - (occ / float(SAMPLES)) * 1.95 * uSsaoIntensity;
  float distFade = 1.0 - smoothstep(48.0, 85.0, viewZ);
  return mix(1.0, clamp(rawAo, 0.28, 1.0), distFade);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, const in float depth, out vec4 outputColor) {
  vec3 col = inputColor.rgb;

  float lumaRaw = dot(col, vec3(0.2126, 0.7152, 0.0722));
  float emitterMask = 1.0 - smoothstep(0.95, 2.4, lumaRaw);
  float aoStrengthMask = emitterMask * (1.0 - uUnderwater * 0.65);
  if (aoStrengthMask > 0.02) {
    float ao = computeArchitecturalAO(uv, depth);

    vec3 aoColor = mix(vec3(ao * 0.95, ao * 0.97, ao), vec3(ao), 0.65);
    col *= mix(vec3(1.0), aoColor, aoStrengthMask);
  }

  col *= uExposure;

  if (uWarmthGrade > 0.01) {
    vec3 warmTint = col * vec3(1.055, 1.008, 0.935) + vec3(0.007, 0.004, 0.0005);
    col = mix(col, warmTint, uWarmthGrade * 0.74);
  }

  if (uUnderwater > 0.001) {
    vec3 uwColor =
      col * mix(vec3(0.46, 0.86, 0.92), uUnderwaterTint * 4.0 + vec3(0.32, 0.72, 0.78), 0.45) +
      uUnderwaterTint * 0.34;
    float topShimmer = smoothstep(0.30, 1.0, uv.y)
      * (0.5 + 0.5 * sin(uv.x * 15.0 + uTime * 2.1) * cos(uv.y * 8.5 - uTime * 1.6));
    uwColor += vec3(0.022, 0.065, 0.076) * topShimmer * 0.42;
    col = mix(col, uwColor, uUnderwater * 0.84);
  }

  float peak = max(col.r, max(col.g, col.b));
  if (peak > 3.6) {
    float knee = 3.6 + log(1.0 + (peak - 3.6)) * 0.95;
    col *= (knee / peak);
  }

  outputColor = vec4(max(col, vec3(0.0)), inputColor.a);
}
`;

const LDR_BODYCAM_OPTICS_SHADER =  `
uniform float uTime;
uniform float uUnderwater;
uniform float uWetLens;
uniform float uDistortion;
uniform float uChromatic;
uniform float uGrain;
uniform float uVignette;

float filmHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

vec2 barrelDistort(vec2 uv, float k) {
  vec2 centered = uv - 0.5;
  float r2 = dot(centered, centered);
  vec2 distorted = centered * (1.0 + k * r2 + k * 0.28 * r2 * r2);
  distorted /= (1.0 + k * 0.23);
  return distorted + 0.5;
}

vec2 computeLensDroplets(vec2 uv, float t, float wetAmount) {
  if (wetAmount < 0.01) return vec2(0.0);

  vec2 grid = uv * vec2(11.0, 6.5);
  grid.y += t * 0.42;
  vec2 cellId = floor(grid);
  vec2 local = fract(grid) - 0.5;

  vec2 rnd = hash22(cellId);
  float activeMask = step(0.42, rnd.x);
  vec2 dropPos = (rnd - 0.5) * 0.52;
  dropPos.y += sin(t * 1.4 + rnd.y * 6.2831) * 0.08;

  vec2 diff = local - dropPos;
  diff.y *= 0.62;
  float dist = length(diff);
  float radius = mix(0.08, 0.23, rnd.y) * wetAmount;

  float dropMask = smoothstep(radius, radius * 0.25, dist) * activeMask;
  float trailMask = smoothstep(0.09, 0.0, abs(local.x - dropPos.x))
                  * smoothstep(dropPos.y, dropPos.y + 0.42, local.y)
                  * smoothstep(dropPos.y + 0.48, dropPos.y + 0.1, local.y)
                  * activeMask * 0.35;

  vec2 normalOffset = normalize(diff + 0.0001) * dropMask * 0.015 + vec2(0.0, trailMask * 0.004);
  return normalOffset * wetAmount;
}

void mainUv(inout vec2 uv) {
  uv = barrelDistort(uv, uDistortion);

  if (uUnderwater > 0.001) {
    float wx = sin(uv.y * 13.0 + uTime * 2.1) * 0.0034 + sin(uv.y * 25.0 - uTime * 2.7) * 0.0013;
    float wy = cos(uv.x * 11.0 + uTime * 1.8) * 0.0030 + cos(uv.x * 21.0 + uTime * 2.5) * 0.0012;
    uv += vec2(wx, wy) * uUnderwater;
  }

  if (uWetLens > 0.01) {
    uv += computeLensDroplets(uv, uTime, uWetLens);
  }
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 centered = uv - 0.5;
  float r2 = dot(centered, centered);

  float caStrength = (uChromatic + uUnderwater * 0.0005 + uWetLens * 0.0007) * (0.15 + r2 * 1.75);
  vec2 caOffset = centered * caStrength;

  float r = texture2D(inputBuffer, clamp(uv + caOffset, 0.001, 0.999)).r;
  float g = inputColor.g;
  float b = texture2D(inputBuffer, clamp(uv - caOffset, 0.001, 0.999)).b;
  vec3 col = vec3(r, g, b);

  if (uWetLens > 0.04) {
    vec2 px = texelSize;
    float blurRad = uWetLens * 2.1;
    vec3 blurSum =
      texture2D(inputBuffer, clamp(uv + px * vec2(blurRad, blurRad), 0.001, 0.999)).rgb +
      texture2D(inputBuffer, clamp(uv + px * vec2(-blurRad, blurRad), 0.001, 0.999)).rgb +
      texture2D(inputBuffer, clamp(uv + px * vec2(blurRad, -blurRad), 0.001, 0.999)).rgb +
      texture2D(inputBuffer, clamp(uv - px * vec2(-blurRad, -blurRad), 0.001, 0.999)).rgb;
    col = mix(col, blurSum * 0.25, uWetLens * 0.30);
  }

  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  float shadowIso = mix(1.35, 0.26, clamp(luma * 2.3, 0.0, 1.0));
  float grain = (filmHash(uv * resolution + fract(uTime * 37.13) * 100.0) - 0.5) * uGrain * shadowIso;
  col += grain;

  float vigAmount = uVignette + uUnderwater * 0.12;
  float vig = smoothstep(0.96, 0.26, length(centered) * (1.12 + vigAmount * 0.40));
  col *= mix(1.0 - vigAmount, 1.0, vig);

  outputColor = vec4(clamp(col, 0.0, 1.0), inputColor.a);
}
`;

class ArchitecturalGtaoHdrEffect extends Effect {
  constructor() {
    super('ArchitecturalGtaoHdrEffect', ARCHITECTURAL_GTAO_HDR_SHADER, {
      blendFunction: BlendFunction.NORMAL,
      attributes: EffectAttribute.DEPTH,
      uniforms: new Map<string, THREE.Uniform<unknown>>([
        ['uTime', new THREE.Uniform(0)],
        ['uExposure', new THREE.Uniform(1.0)],
        ['uWarmthGrade', new THREE.Uniform(0.0)],
        ['uUnderwater', new THREE.Uniform(0)],
        ['uSsaoIntensity', new THREE.Uniform(0.85)],
        ['uTanHalfFov', new THREE.Uniform(Math.tan(THREE.MathUtils.degToRad(37)))],
        ['uAspect', new THREE.Uniform(16 / 9)],
        ['uUnderwaterTint', new THREE.Uniform(new THREE.Color(0x010c10))]
      ])
    });
  }

  updateParams(
    elapsedTime: number,
    exposure: number,
    warmthGrade: number,
    underwaterBlend: number,
    ssaoIntensity: number,
    camera: THREE.PerspectiveCamera,
    underwaterFogHex: number
  ): void {
    this.uniforms.get('uTime')!.value = elapsedTime;
    this.uniforms.get('uExposure')!.value = exposure;
    this.uniforms.get('uWarmthGrade')!.value = warmthGrade;
    this.uniforms.get('uUnderwater')!.value = underwaterBlend;
    this.uniforms.get('uSsaoIntensity')!.value = ssaoIntensity;
    this.uniforms.get('uTanHalfFov')!.value = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5));
    this.uniforms.get('uAspect')!.value = camera.aspect;
    (this.uniforms.get('uUnderwaterTint')!.value as THREE.Color).setHex(underwaterFogHex);
  }
}

class LdrBodycamOpticsEffect extends Effect {
  constructor() {
    super('LdrBodycamOpticsEffect', LDR_BODYCAM_OPTICS_SHADER, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map<string, THREE.Uniform<unknown>>([
        ['uTime', new THREE.Uniform(0)],
        ['uUnderwater', new THREE.Uniform(0)],
        ['uWetLens', new THREE.Uniform(0)],
        ['uDistortion', new THREE.Uniform(0.048)],
        ['uChromatic', new THREE.Uniform(0.00048)],
        ['uGrain', new THREE.Uniform(0.018)],
        ['uVignette', new THREE.Uniform(0.28)]
      ])
    });
  }

  updateParams(elapsedTime: number, underwaterBlend: number, wetLens: number): void {
    this.uniforms.get('uTime')!.value = elapsedTime;
    this.uniforms.get('uUnderwater')!.value = underwaterBlend;
    this.uniforms.get('uWetLens')!.value = wetLens;
  }
}

export interface PostProcessingPipeline {
  composer: EffectComposer;
  update: (
    elapsedTime: number,
    underwaterBlend: number,
    wetLens: number,
    exposure: number,
    warmthGrade: number,
    underwaterFogHex: number,
    ssaoIntensity?: number,
    bloomIntensity?: number
  ) => void;
  render: (dt: number) => void;
  resize: (width: number, height: number) => void;
  dispose: () => void;
}

export function createPostProcessingPipeline(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
): PostProcessingPipeline {
  const composer = new EffectComposer(renderer, {
    frameBufferType: THREE.HalfFloatType
  });

  const renderPass = new RenderPass(scene, camera);

  const gtaoHdrEffect = new ArchitecturalGtaoHdrEffect();
  const bloomEffect = new BloomEffect({
    intensity: 0.36,
    luminanceThreshold: 1.02,
    luminanceSmoothing: 0.35,
    mipmapBlur: true
  });
  const hdrPass = new EffectPass(camera, gtaoHdrEffect, bloomEffect);

  const toneMappingEffect = new ToneMappingEffect({
    mode: ToneMappingMode.ACES_FILMIC
  });
  const toneMapPass = new EffectPass(camera, toneMappingEffect);

  const opticsEffect = new LdrBodycamOpticsEffect();
  const ldrOpticsPass = new EffectPass(camera, opticsEffect);

  const smaaEffect = new SMAAEffect();
  const aaPass = new EffectPass(camera, smaaEffect);

  composer.addPass(renderPass);
  composer.addPass(hdrPass);
  composer.addPass(toneMapPass);
  composer.addPass(ldrOpticsPass);
  composer.addPass(aaPass);

  return {
    composer,
    update(
      elapsedTime,
      underwaterBlend,
      wetLens,
      exposure,
      warmthGrade,
      underwaterFogHex,
      ssaoIntensity = 0.85,
      bloomIntensity = 0.36
    ) {
      gtaoHdrEffect.updateParams(
        elapsedTime,
        exposure,
        warmthGrade,
        underwaterBlend,
        ssaoIntensity,
        camera,
        underwaterFogHex
      );
      bloomEffect.intensity = bloomIntensity;
      opticsEffect.updateParams(elapsedTime, underwaterBlend, wetLens);
    },
    render(dt: number) {
      composer.render(dt);
    },
    resize(width: number, height: number) {
      composer.setSize(width, height);
    },
    dispose() {
      composer.dispose();
    }
  };
}
