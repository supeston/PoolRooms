import * as THREE from 'three';
import { LevelFieldData, WATER_LEVEL } from './types';

export interface PoolMaterialSet {
  whiteTile: THREE.MeshPhysicalMaterial;
  ceilingTile: THREE.MeshPhysicalMaterial;
  accentTile: THREE.MeshPhysicalMaterial;
  cobaltMosaicTile: THREE.MeshPhysicalMaterial;
  glassBlock: THREE.MeshPhysicalMaterial;
  chromeMetal: THREE.MeshStandardMaterial;
  weatheredSteel: THREE.MeshStandardMaterial;
  stainlessGrate: THREE.MeshStandardMaterial;
  darkTrussMetal: THREE.MeshStandardMaterial;
  cubeFrameMat: THREE.MeshStandardMaterial;
  waterSheetMat: THREE.ShaderMaterial;
  brushedBrass: THREE.MeshStandardMaterial;
  paintedDoor: THREE.MeshPhysicalMaterial;
  configureForLevel: (params: {
    tileTint: number;
    accentTint: number;
    wetBandHeight: number;
    causticStrength: number;
    wallBounceCaustic: number;
    waveAmplitude: number;
    grimeStrength: number;
    causticColor: THREE.Color;
    glassGlowColor: number;
    glassGlowIntensity: number;
    heightMistColor: number;
    heightMistStartY: number;
    heightMistEndY: number;
    heightMistStrength: number;
    fieldData: LevelFieldData;
  }) => void;
  update: (elapsedTime: number) => void;
  dispose: () => void;
}

const yieldChunk = (): Promise<void> =>
  new Promise((resolve) => {
    requestAnimationFrame(() => {
      window.setTimeout(resolve, 0);
    });
  });

function hash2D(x: number, y: number, seed = 1337): number {
  let n = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 1442695041);
  n = (n ^ (n >>> 13)) * 1274126177;
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

interface PorcelainTextureBundle {
  albedoMap: THREE.CanvasTexture;
  normalMap: THREE.DataTexture;
  roughnessMap: THREE.CanvasTexture;
}

async function generatePorcelainTileMapsAsync(
  size = 1024,
  tilesPerSide = 6,
  baseRgb: [number, number, number] = [243, 245, 244],
  groutRgb: [number, number, number] = [148, 156, 159],
  normalStrength = 1.65,
  paletteVariants?: ReadonlyArray<[number, number, number]>,
  onProgress?: (t: number) => void
): Promise<PorcelainTextureBundle> {
  const tilePx = size / tilesPerSide;
  const groutHalfPx = Math.max(1.8, tilePx * 0.024);
  const bevelPx = Math.max(5.5, tilePx * 0.115);

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = size;
  albedoCanvas.height = size;
  const aCtx = albedoCanvas.getContext('2d')!;
  const aImg = aCtx.createImageData(size, size);
  const aData = aImg.data;

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext('2d')!;
  const rImg = rCtx.createImageData(size, size);
  const rData = rImg.data;

  const heights = new Float32Array(size * size);

  const count = tilesPerSide * tilesPerSide;
  const tileTone = new Float32Array(count);
  const tileWarm = new Float32Array(count);
  const tileRough = new Float32Array(count);
  const tileTiltX = new Float32Array(count);
  const tileTiltY = new Float32Array(count);
  const tilePhase = new Float32Array(count);
  const tileBaseR = new Float32Array(count);
  const tileBaseG = new Float32Array(count);
  const tileBaseB = new Float32Array(count);

  for (let ty = 0; ty < tilesPerSide; ty++) {
    for (let tx = 0; tx < tilesPerSide; tx++) {
      const idx = ty * tilesPerSide + tx;
      tileTone[idx] = (hash2D(tx, ty, 19) - 0.5) * 6.5;
      tileWarm[idx] = (hash2D(tx, ty, 41) - 0.5) * 3.4;
      tileRough[idx] = (hash2D(tx, ty, 73) - 0.5) * 0.028;
      tileTiltX[idx] = (hash2D(tx, ty, 97) - 0.5) * 0.015;
      tileTiltY[idx] = (hash2D(tx, ty, 131) - 0.5) * 0.015;
      tilePhase[idx] = hash2D(tx, ty, 193) * Math.PI * 2;
      if (paletteVariants && paletteVariants.length > 0) {
        const pick = Math.floor(hash2D(tx, ty, 311) * paletteVariants.length) % paletteVariants.length;
        const c = paletteVariants[pick];
        tileBaseR[idx] = c[0];
        tileBaseG[idx] = c[1];
        tileBaseB[idx] = c[2];
      } else {
        tileBaseR[idx] = baseRgb[0];
        tileBaseG[idx] = baseRgb[1];
        tileBaseB[idx] = baseRgb[2];
      }
    }
  }

  const rowChunk = 128;
  for (let yStart = 0; yStart < size; yStart += rowChunk) {
    const yEnd = Math.min(size, yStart + rowChunk);
    for (let y = yStart; y < yEnd; y++) {
      const tileYFloat = y / tilePx;
      const ty = Math.floor(tileYFloat) % tilesPerSide;
      const ly = (tileYFloat - Math.floor(tileYFloat)) * tilePx;
      const distY = Math.min(ly, tilePx - ly);

      for (let x = 0; x < size; x++) {
        const tileXFloat = x / tilePx;
        const tx = Math.floor(tileXFloat) % tilesPerSide;
        const lx = (tileXFloat - Math.floor(tileXFloat)) * tilePx;
        const distX = Math.min(lx, tilePx - lx);

        const tileIdx = ty * tilesPerSide + tx;
        const pIdx = y * size + x;
        const rgbaIdx = pIdx * 4;

        const edgeDist = Math.min(distX, distY);
        const nx = lx / tilePx - 0.5;
        const ny = ly / tilePx - 0.5;

        const dxIn = Math.max(0, bevelPx - Math.max(0, distX - groutHalfPx));
        const dyIn = Math.max(0, bevelPx - Math.max(0, distY - groutHalfPx));
        const cornerDist = Math.hypot(dxIn, dyIn);
        const tRaw = Math.max(0, Math.min(1, 1.0 - cornerDist / bevelPx));
        const pillowProfile = tRaw * tRaw * (3.0 - 2.0 * tRaw);

        const gRaw = Math.max(0, Math.min(1, (edgeDist - groutHalfPx) / 2.4));
        const groutBlend = gRaw * gRaw * (3.0 - 2.0 * gRaw);

        const mortarTex = (hash2D(x, y, 509) - 0.5) * 7.0;
        const groutCavity = 0.84 + 0.16 * Math.min(1, edgeDist / Math.max(1, groutHalfPx));
        const gr = (groutRgb[0] + mortarTex) * groutCavity;
        const gg = (groutRgb[1] + mortarTex) * groutCavity;
        const gb = (groutRgb[2] + mortarTex) * groutCavity;

        const grooveAO = 0.90 + 0.10 * pillowProfile;
        const tone = tileTone[tileIdx];
        const warm = tileWarm[tileIdx];

        const tr = Math.max(0, Math.min(255, (tileBaseR[tileIdx] + tone + warm) * grooveAO));
        const tg = Math.max(0, Math.min(255, (tileBaseG[tileIdx] + tone) * grooveAO));
        const tb = Math.max(0, Math.min(255, (tileBaseB[tileIdx] + tone - warm * 0.45) * grooveAO));

        aData[rgbaIdx] = Math.round(gr + (tr - gr) * groutBlend);
        aData[rgbaIdx + 1] = Math.round(gg + (tg - gg) * groutBlend);
        aData[rgbaIdx + 2] = Math.round(gb + (tb - gb) * groutBlend);
        aData[rgbaIdx + 3] = 255;

        const ph = tilePhase[tileIdx];
        const glazeWave =
          Math.sin(nx * 5.2 + ph) * Math.cos(ny * 4.8 - ph * 0.7) * 0.009 * pillowProfile;

        const groutH = 0.08 + 0.06 * Math.sin(Math.min(1, edgeDist / Math.max(1, groutHalfPx)) * Math.PI * 0.5);
        const centerDome = (1.0 - (nx * nx + ny * ny) * 0.48) * 0.036;
        const tileH =
          0.30 +
          0.58 * pillowProfile +
          centerDome +
          glazeWave +
          tileTiltX[tileIdx] * nx +
          tileTiltY[tileIdx] * ny;
        heights[pIdx] = Math.max(0, Math.min(1, groutH + (tileH - groutH) * groutBlend));

        const groutR = 0.88;
        const tileR = 0.13 + tileRough[tileIdx] + (1.0 - pillowProfile) * 0.075;
        const rByte = Math.round(
          Math.max(22, Math.min(242, (groutR + (tileR - groutR) * groutBlend) * 255))
        );
        rData[rgbaIdx] = rByte;
        rData[rgbaIdx + 1] = rByte;
        rData[rgbaIdx + 2] = rByte;
        rData[rgbaIdx + 3] = 255;
      }
    }
    onProgress?.((yEnd / size) * 0.65);
    await yieldChunk();
  }

  aCtx.putImageData(aImg, 0, 0);
  rCtx.putImageData(rImg, 0, 0);

  const normalData = new Uint8Array(size * size * 4);
  for (let yStart = 0; yStart < size; yStart += rowChunk * 2) {
    const yEnd = Math.min(size, yStart + rowChunk * 2);
    for (let y = yStart; y < yEnd; y++) {
      const ym = (y - 1 + size) % size;
      const yp = (y + 1) % size;
      for (let x = 0; x < size; x++) {
        const xm = (x - 1 + size) % size;
        const xp = (x + 1) % size;

        const tl = heights[ym * size + xm];
        const t = heights[ym * size + x];
        const tr = heights[ym * size + xp];
        const l = heights[y * size + xm];
        const r = heights[y * size + xp];
        const bl = heights[yp * size + xm];
        const b = heights[yp * size + x];
        const br = heights[yp * size + xp];

        const dX = (3 * tr + 10 * r + 3 * br - (3 * tl + 10 * l + 3 * bl)) * 0.0625;
        const dY = (3 * bl + 10 * b + 3 * br - (3 * tl + 10 * t + 3 * tr)) * 0.0625;

        let nx = -dX * normalStrength * 3.2;
        let ny = -dY * normalStrength * 3.2;
        let nz = 1.0;
        const invLen = 1.0 / Math.hypot(nx, ny, nz);
        nx *= invLen;
        ny *= invLen;
        nz *= invLen;

        const idx = (y * size + x) * 4;
        normalData[idx] = Math.round((nx * 0.5 + 0.5) * 255);
        normalData[idx + 1] = Math.round((ny * 0.5 + 0.5) * 255);
        normalData[idx + 2] = Math.round((nz * 0.5 + 0.5) * 255);
        normalData[idx + 3] = 255;
      }
    }
    onProgress?.(0.65 + (yEnd / size) * 0.35);
    await yieldChunk();
  }

  const albedoMap = new THREE.CanvasTexture(albedoCanvas);
  albedoMap.colorSpace = THREE.SRGBColorSpace;
  albedoMap.wrapS = THREE.RepeatWrapping;
  albedoMap.wrapT = THREE.RepeatWrapping;
  albedoMap.anisotropy = 16;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.anisotropy = 16;

  const normalMap = new THREE.DataTexture(normalData, size, size, THREE.RGBAFormat);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.anisotropy = 16;
  normalMap.generateMipmaps = true;
  normalMap.minFilter = THREE.LinearMipmapLinearFilter;
  normalMap.magFilter = THREE.LinearFilter;
  normalMap.needsUpdate = true;

  return { albedoMap, normalMap, roughnessMap };
}

async function generateGlassBlockMapsAsync(size = 512, blocksPerSide = 4): Promise<PorcelainTextureBundle> {
  const blockPx = size / blocksPerSide;
  const mortarHalfPx = blockPx * 0.045;

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = size;
  albedoCanvas.height = size;
  const aCtx = albedoCanvas.getContext('2d')!;
  const aImg = aCtx.createImageData(size, size);
  const aData = aImg.data;

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext('2d')!;
  const rImg = rCtx.createImageData(size, size);
  const rData = rImg.data;

  const heights = new Float32Array(size * size);

  for (let yStart = 0; yStart < size; yStart += 128) {
    const yEnd = Math.min(size, yStart + 128);
    for (let y = yStart; y < yEnd; y++) {
      const byFloat = y / blockPx;
      const by = Math.floor(byFloat) % blocksPerSide;
      const ly = (byFloat - Math.floor(byFloat)) * blockPx;
      const distY = Math.min(ly, blockPx - ly);

      for (let x = 0; x < size; x++) {
        const bxFloat = x / blockPx;
        const bx = Math.floor(bxFloat) % blocksPerSide;
        const lx = (bxFloat - Math.floor(bxFloat)) * blockPx;
        const distX = Math.min(lx, blockPx - lx);

        const edgeDist = Math.min(distX, distY);
        const pIdx = y * size + x;
        const rgbaIdx = pIdx * 4;

        const glassMask = Math.max(0, Math.min(1, (edgeDist - mortarHalfPx) / 3.0));
        const innerRim = Math.max(0, Math.min(1, (edgeDist - mortarHalfPx * 2.2) / (blockPx * 0.14)));

        const ph = hash2D(bx, by, 307) * 6.283;
        const nx = lx / blockPx - 0.5;
        const ny = ly / blockPx - 0.5;
        const glassWave =
          Math.sin(nx * 9.4 + ph) * 0.35 +
          Math.cos(ny * 9.4 - ph * 0.8) * 0.35 +
          Math.sin((nx + ny) * 6.2 + ph) * 0.22;

        const mr = 172;
        const mg = 179;
        const mb = 181;

        const rimShade = 0.76 + 0.24 * innerRim + glassWave * 0.06;
        const gr = Math.min(255, 212 * rimShade);
        const gg = Math.min(255, 236 * rimShade);
        const gb = Math.min(255, 239 * rimShade);

        aData[rgbaIdx] = Math.round(mr + (gr - mr) * glassMask);
        aData[rgbaIdx + 1] = Math.round(mg + (gg - mg) * glassMask);
        aData[rgbaIdx + 2] = Math.round(mb + (gb - mb) * glassMask);
        aData[rgbaIdx + 3] = 255;

        heights[pIdx] = glassMask * (0.45 + 0.35 * innerRim + glassWave * 0.14 * innerRim);

        const rVal = 0.90 + (0.09 - 0.90) * glassMask + (1.0 - innerRim) * 0.12 * glassMask;
        const rByte = Math.round(Math.max(18, Math.min(240, rVal * 255)));
        rData[rgbaIdx] = rByte;
        rData[rgbaIdx + 1] = rByte;
        rData[rgbaIdx + 2] = rByte;
        rData[rgbaIdx + 3] = 255;
      }
    }
    await yieldChunk();
  }

  aCtx.putImageData(aImg, 0, 0);
  rCtx.putImageData(rImg, 0, 0);

  const normalData = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    const ym = (y - 1 + size) % size;
    const yp = (y + 1) % size;
    for (let x = 0; x < size; x++) {
      const xm = (x - 1 + size) % size;
      const xp = (x + 1) % size;
      const dX = heights[y * size + xp] - heights[y * size + xm];
      const dY = heights[yp * size + x] - heights[ym * size + x];
      let nx = -dX * 3.8;
      let ny = -dY * 3.8;
      let nz = 1.0;
      const inv = 1.0 / Math.hypot(nx, ny, nz);
      nx *= inv;
      ny *= inv;
      nz *= inv;
      const idx = (y * size + x) * 4;
      normalData[idx] = Math.round((nx * 0.5 + 0.5) * 255);
      normalData[idx + 1] = Math.round((ny * 0.5 + 0.5) * 255);
      normalData[idx + 2] = Math.round((nz * 0.5 + 0.5) * 255);
      normalData[idx + 3] = 255;
    }
  }

  const albedoMap = new THREE.CanvasTexture(albedoCanvas);
  albedoMap.colorSpace = THREE.SRGBColorSpace;
  albedoMap.wrapS = THREE.RepeatWrapping;
  albedoMap.wrapT = THREE.RepeatWrapping;
  albedoMap.anisotropy = 8;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;

  const normalMap = new THREE.DataTexture(normalData, size, size, THREE.RGBAFormat);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.generateMipmaps = true;
  normalMap.minFilter = THREE.LinearMipmapLinearFilter;
  normalMap.needsUpdate = true;

  return { albedoMap, normalMap, roughnessMap };
}

function generateStainlessGrateTexture(size = 256): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#adb8be';
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = '#7c888f';
  ctx.lineWidth = 16;
  ctx.strokeRect(8, 8, size - 16, size - 16);

  ctx.fillStyle = '#0b1216';
  const rows = 2;
  const slotsPerRow = 9;
  const padX = 28;
  const padY = 30;
  const rowGap = 20;
  const slotH = (size - padY * 2 - rowGap) / rows;
  const stepX = (size - padX * 2) / slotsPerRow;

  for (let r = 0; r < rows; r++) {
    const sy = padY + r * (slotH + rowGap);
    for (let s = 0; s < slotsPerRow; s++) {
      const sx = padX + s * stepX + 4;
      const sw = stepX - 8;
      ctx.beginPath();
      ctx.roundRect(sx, sy, sw, slotH, 4);
      ctx.fill();
    }
  }

  ctx.fillStyle = '#5e6a70';
  for (const [cx, cy] of [
    [16, 16],
    [size - 16, 16],
    [16, size - 16],
    [size - 16, size - 16]
  ]) {
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

function generateArchitecturalDoorTexture(
  baseTop: string,
  baseBot: string,
  trimStroke: string,
  highlightStroke: string
): THREE.CanvasTexture {
  const w = 512;
  const h = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, baseTop);
  grad.addColorStop(1, baseBot);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const drawRecessedPanel = (px: number, py: number, pw: number, ph: number) => {
    ctx.strokeStyle = trimStroke;
    ctx.lineWidth = 11;
    ctx.strokeRect(px, py, pw, ph);
    ctx.strokeStyle = highlightStroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(px + 9, py + 9, pw - 18, ph - 18);
  };

  drawRecessedPanel(68, 82, 376, 356);
  drawRecessedPanel(68, 508, 376, 424);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function createDefaultFieldTexture(): LevelFieldData {
  const data = new Uint8Array(4 * 4 * 4);
  for (let i = 0; i < 16; i++) {
    data[i * 4] = 255;
    data[i * 4 + 1] = 180;
    data[i * 4 + 2] = 255;
    data[i * 4 + 3] = 128;
  }
  const texture = new THREE.DataTexture(data, 4, 4, THREE.RGBAFormat);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return { texture, centerX: 0, centerZ: 0, sizeX: 400, sizeZ: 400 };
}

function createWaterSheetMaterial(uPoolTime: { value: number }): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: uPoolTime,
      uTint: { value: new THREE.Color(0xcff2f6) }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      void main() {
        vUv = uv;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormalView = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPos.xyz);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uTint;
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      void main() {
        float flow1 = sin(vUv.y * 28.0 + uTime * 4.2 + sin(vUv.x * 16.0) * 1.4) * 0.5 + 0.5;
        float flow2 = sin(vUv.y * 52.0 + uTime * 6.8 - vUv.x * 9.0) * 0.5 + 0.5;
        float sheen = pow(flow1 * 0.65 + flow2 * 0.35, 2.2);
        float fres = pow(1.0 - abs(dot(vNormalView, vViewDir)), 2.0);
        float edgeMask = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
        float endFade = smoothstep(0.0, 0.14, vUv.y) * smoothstep(1.0, 0.90, vUv.y);
        vec3 col = uTint * (0.62 + sheen * 0.68 + fres * 0.55);
        float alpha = (0.24 + sheen * 0.22 + fres * 0.24) * edgeMask * endFade;
        gl_FragColor = vec4(col, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide
  });
}

const TRIPLANAR_PORCELAIN_GLSL = `
uniform float uPoolTime;
uniform float uWaterLevel;
uniform float uWetBandHeight;
uniform float uCausticStrength;
uniform float uWallBounceCaustic;
uniform float uWaveSplashScale;
uniform float uGrimeStrength;
uniform vec3 uCausticColor;
uniform vec3 uHeightMistColor;
uniform float uHeightMistStartY;
uniform float uHeightMistEndY;
uniform float uHeightMistStrength;
uniform sampler2D uFieldMap;
uniform vec2 uFieldCenter;
uniform vec2 uFieldSize;

varying vec3 vPoolWorldPos;
varying vec3 vPoolWorldNormal;

vec2 poolHash22(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453123);
}

float poolValueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = fract(sin(dot(i + vec2(0.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
  float b = fract(sin(dot(i + vec2(1.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
  float c = fract(sin(dot(i + vec2(0.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  float d = fract(sin(dot(i + vec2(1.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float poolCausticLayer(vec2 uv, float t) {
  vec2 n = floor(uv);
  vec2 f = fract(uv);
  float md1 = 8.0;
  float md2 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = poolHash22(n + g);
      o = 0.5 + 0.42 * sin(t * 0.85 + 6.28318 * o);
      vec2 r = g + o - f;
      float d = dot(r, r);
      if (d < md1) {
        md2 = md1;
        md1 = d;
      } else if (d < md2) {
        md2 = d;
      }
    }
  }
  float edge = sqrt(md2) - sqrt(md1);
  return pow(clamp(1.0 - edge * 2.45, 0.0, 1.0), 3.8);
}

float computePoolCaustics(vec3 wp, vec3 wn, float t) {
  vec2 proj = wp.xz * 0.58 + wp.y * 0.19;
  float c1 = poolCausticLayer(proj + vec2(t * 0.055, -t * 0.042), t);
  float c2 = poolCausticLayer(proj * 1.52 - vec2(t * 0.046, t * 0.068) + 4.3, t * 1.08);
  float net = clamp(c1 * 0.62 + c2 * 0.55, 0.0, 1.0);
  float upMask = clamp(wn.y * 0.58 + 0.44, 0.10, 1.0);
  return net * upMask;
}

vec4 sampleLevelField(vec2 xz) {
  vec2 uv = (xz - uFieldCenter) / max(uFieldSize, vec2(1.0)) + 0.5;
  return texture2D(uFieldMap, clamp(uv, 0.002, 0.998));
}

float computeWetFactor(vec3 wp, float waterPresence) {
  if (waterPresence < 0.02) return 0.0;
  float hAbove = wp.y - uWaterLevel;
  if (hAbove < 0.0) return waterPresence;
  float tide1 = poolValueNoise(wp.xz * 1.15 + vec2(wp.x * 0.18, wp.z * 0.18));
  float drip = poolValueNoise(vec2((wp.x + wp.z) * 3.6, wp.y * 0.48));
  float band = (uWetBandHeight + tide1 * (0.14 + uWaveSplashScale * 0.25) + drip * 0.08) * waterPresence;
  return (1.0 - smoothstep(-0.015, max(0.04, band), hAbove)) * waterPresence;
}

vec3 computeTriplanarWeights(vec3 wn) {
  vec3 w = pow(abs(wn), vec3(8.0));
  return w / max(w.x + w.y + w.z, 1e-5);
}

vec3 sampleTriplanarWorldNormal(sampler2D nMap, vec3 wp, vec3 wn, vec3 tw, vec2 scale, float invTile) {
  vec3 tnX = texture2D(nMap, wp.zy * invTile).xyz * 2.0 - 1.0;
  vec3 tnY = texture2D(nMap, wp.xz * invTile).xyz * 2.0 - 1.0;
  vec3 tnZ = texture2D(nMap, wp.xy * invTile).xyz * 2.0 - 1.0;

  tnX.xy *= scale;
  tnY.xy *= scale;
  tnZ.xy *= scale;

  vec3 wX = vec3(wn.x, wn.y + tnX.y * sign(wn.x + 1e-5), wn.z + tnX.x);
  vec3 wY = vec3(wn.x + tnY.x, wn.y, wn.z + tnY.y * sign(wn.y + 1e-5));
  vec3 wZ = vec3(wn.x + tnZ.x * sign(wn.z + 1e-5), wn.y + tnZ.y, wn.z);
  return normalize(wX * tw.x + wY * tw.y + wZ * tw.z);
}
`;

interface SharedTileUniforms {
  uPoolTime: { value: number };
  uWaterLevel: { value: number };
  uWetBandHeight: { value: number };
  uCausticStrength: { value: number };
  uWallBounceCaustic: { value: number };
  uWaveSplashScale: { value: number };
  uGrimeStrength: { value: number };
  uCausticColor: { value: THREE.Color };
  uHeightMistColor: { value: THREE.Color };
  uHeightMistStartY: { value: number };
  uHeightMistEndY: { value: number };
  uHeightMistStrength: { value: number };
  uFieldMap: { value: THREE.DataTexture };
  uFieldCenter: { value: THREE.Vector2 };
  uFieldSize: { value: THREE.Vector2 };
}

function injectTriplanarPorcelainShader(
  material: THREE.MeshPhysicalMaterial | THREE.MeshStandardMaterial,
  shared: SharedTileUniforms,
  invTileScale: number,
  causticMultiplier = 1.0
): void {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uPoolTime = shared.uPoolTime;
    shader.uniforms.uWaterLevel = shared.uWaterLevel;
    shader.uniforms.uWetBandHeight = shared.uWetBandHeight;
    shader.uniforms.uCausticStrength = shared.uCausticStrength;
    shader.uniforms.uWallBounceCaustic = shared.uWallBounceCaustic;
    shader.uniforms.uWaveSplashScale = shared.uWaveSplashScale;
    shader.uniforms.uGrimeStrength = shared.uGrimeStrength;
    shader.uniforms.uCausticColor = shared.uCausticColor;
    shader.uniforms.uHeightMistColor = shared.uHeightMistColor;
    shader.uniforms.uHeightMistStartY = shared.uHeightMistStartY;
    shader.uniforms.uHeightMistEndY = shared.uHeightMistEndY;
    shader.uniforms.uHeightMistStrength = shared.uHeightMistStrength;
    shader.uniforms.uFieldMap = shared.uFieldMap;
    shader.uniforms.uFieldCenter = shared.uFieldCenter;
    shader.uniforms.uFieldSize = shared.uFieldSize;

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vPoolWorldPos;
        varying vec3 vPoolWorldNormal;`
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
        vec4 poolWp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          poolWp = instanceMatrix * poolWp;
        #endif
        poolWp = modelMatrix * poolWp;
        vPoolWorldPos = poolWp.xyz;
        mat3 poolNormMat = mat3(modelMatrix);
        #ifdef USE_INSTANCING
          poolNormMat = poolNormMat * mat3(instanceMatrix);
        #endif
        vPoolWorldNormal = normalize(poolNormMat * objectNormal);`
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        ${TRIPLANAR_PORCELAIN_GLSL}`
      )
      .replace(
        '#include <clipping_planes_fragment>',
        `#include <clipping_planes_fragment>
        vec3 triWn = normalize(vPoolWorldNormal);
        vec3 triW = computeTriplanarWeights(triWn);

        vec4 poolField = sampleLevelField(vPoolWorldPos.xz + triWn.xz * 0.68);
        vec4 poolFieldSelf = sampleLevelField(vPoolWorldPos.xz);
        float poolWaterNear = max(poolField.r, poolFieldSelf.r * 0.85);
        float poolSunlitWater = max(poolField.g, poolFieldSelf.g * 0.65);
        float poolWet = computeWetFactor(vPoolWorldPos, poolWaterNear);
        vec3 poolPerturbedWorldN = triWn;`
      );

    if (invTileScale > 0) {
      const invStr = invTileScale.toFixed(6);
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <map_fragment>',
          `#ifdef USE_MAP
            const float poolInvTile = ${invStr};
            vec4 triCol =
              texture2D(map, vPoolWorldPos.zy * poolInvTile) * triW.x +
              texture2D(map, vPoolWorldPos.xz * poolInvTile) * triW.y +
              texture2D(map, vPoolWorldPos.xy * poolInvTile) * triW.z;
            diffuseColor *= triCol;
          #endif`
        )
        .replace(
          '#include <roughnessmap_fragment>',
          `float roughnessFactor = roughness;
          #ifdef USE_ROUGHNESSMAP
            const float poolInvTileR = ${invStr};
            float triRough =
              texture2D(roughnessMap, vPoolWorldPos.zy * poolInvTileR).g * triW.x +
              texture2D(roughnessMap, vPoolWorldPos.xz * poolInvTileR).g * triW.y +
              texture2D(roughnessMap, vPoolWorldPos.xy * poolInvTileR).g * triW.z;
            roughnessFactor *= triRough;
          #endif`
        )
        .replace(
          '#include <normal_fragment_maps>',
          `#ifdef USE_NORMALMAP_TANGENTSPACE
            poolPerturbedWorldN = sampleTriplanarWorldNormal(normalMap, vPoolWorldPos, triWn, triW, normalScale, ${invStr});
            normal = normalize((viewMatrix * vec4(poolPerturbedWorldN, 0.0)).xyz);
          #endif

          vec3 dndu = dFdx(poolPerturbedWorldN);
          vec3 dndv = dFdy(poolPerturbedWorldN);
          float normVariance = 0.42 * (dot(dndu, dndu) + dot(dndv, dndv));
          float kernelRough2 = min(2.0 * normVariance, 0.22);
          roughnessFactor = sqrt(clamp(roughnessFactor * roughnessFactor + kernelRough2, 0.004, 1.0));`
        )
        .replace(
          '#include <clearcoat_normal_fragment_maps>',
          `#ifdef USE_CLEARCOAT_NORMALMAP
            vec3 ccWorldN = sampleTriplanarWorldNormal(clearcoatNormalMap, vPoolWorldPos, triWn, triW, clearcoatNormalScale, ${invStr});
            clearcoatNormal = normalize((viewMatrix * vec4(ccWorldN, 0.0)).xyz);
          #endif`
        );
    }

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>

        float macroEnclosureAO = mix(0.76, 1.0, poolFieldSelf.b);
        diffuseColor.rgb *= macroEnclosureAO;

        if (uGrimeStrength > 0.01) {
          float dampPatch = poolValueNoise(vPoolWorldPos.xz * 0.32 + vPoolWorldPos.y * 0.34);
          float verticalStreak = poolValueNoise(vec2((vPoolWorldPos.x + vPoolWorldPos.z) * 1.75, vPoolWorldPos.y * 0.15));
          float grimeMask = clamp((dampPatch * 0.62 + verticalStreak * 0.56 - 0.36) * 1.55, 0.0, 1.0) * uGrimeStrength;
          float grimeHeight = mix(0.42, 1.0, poolWet) * grimeMask;
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.24, 0.30, 0.28), grimeHeight * 0.72);
        }

        diffuseColor.rgb *= mix(1.0, 0.64, poolWet * 0.85);

        float subD = max(0.0, uWaterLevel - vPoolWorldPos.y) * poolWaterNear;
        if (subD > 0.001) {
          vec3 subAbsorb = exp(-subD * vec3(0.48, 0.20, 0.17));
          float abyssFade = exp(-max(0.0, subD - 1.8) * 0.19);
          diffuseColor.rgb *= mix(vec3(1.0), subAbsorb * abyssFade, 0.92);
        }`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>

        roughnessFactor = mix(roughnessFactor, 0.056, poolWet * 0.90);`
      )
      .replace(
        '#include <lights_fragment_end>',
        `#include <lights_fragment_end>

        float directLitLuma = dot(reflectedLight.directDiffuse, vec3(0.3333));
        float lightGate = clamp(0.16 + directLitLuma * 1.35, 0.0, 1.35);

        float subDepthC = uWaterLevel - vPoolWorldPos.y;
        if (subDepthC > -0.04 && poolWaterNear > 0.1) {
          float underMask = smoothstep(-0.03, 0.14, subDepthC) * poolWaterNear;
          float depthFade = exp(-max(0.0, subDepthC) * 0.20);
          float caust = computePoolCaustics(vPoolWorldPos, triWn, uPoolTime);
          reflectedLight.directDiffuse += uCausticColor * caust * underMask * depthFade * lightGate * uCausticStrength * ${causticMultiplier.toFixed(3)};
        }

        float aboveH = vPoolWorldPos.y - uWaterLevel;
        if (aboveH > 0.0 && aboveH < 4.5 && poolSunlitWater > 0.02) {
          float heightFade = pow(1.0 - smoothstep(0.0, 4.5, aboveH), 1.65);

          float bounceAngleMask = clamp(0.68 - triWn.y * 0.48, 0.08, 1.0);
          float bCaust = computePoolCaustics(
            vPoolWorldPos * 0.88 + vec3(0.0, -aboveH * 0.30, 0.0),
            vec3(0.0, 1.0, 0.0),
            uPoolTime * 0.84
          );
          float bounceEnergy = poolSunlitWater * pow(poolWaterNear, 1.15) * heightFade * bounceAngleMask;
          reflectedLight.indirectDiffuse += uCausticColor * bCaust * bounceEnergy * uWallBounceCaustic * ${causticMultiplier.toFixed(3)};

          reflectedLight.indirectDiffuse += diffuseColor.rgb * uCausticColor * (0.08 * bounceEnergy);
        }

        float specPeak = max(reflectedLight.directSpecular.r, max(reflectedLight.directSpecular.g, reflectedLight.directSpecular.b));
        if (specPeak > 2.6) {
          float clampedPeak = 2.6 + log(1.0 + (specPeak - 2.6)) * 0.85;
          reflectedLight.directSpecular *= (clampedPeak / specPeak);
        }
        float indSpecPeak = max(reflectedLight.indirectSpecular.r, max(reflectedLight.indirectSpecular.g, reflectedLight.indirectSpecular.b));
        if (indSpecPeak > 2.2) {
          float clampedInd = 2.2 + log(1.0 + (indSpecPeak - 2.2)) * 0.75;
          reflectedLight.indirectSpecular *= (clampedInd / indSpecPeak);
        }`
      )
      .replace(
        '#include <fog_fragment>',
        `#include <fog_fragment>
        if (uHeightMistStrength > 0.005) {
          float hmVert = smoothstep(uHeightMistStartY, uHeightMistEndY, vPoolWorldPos.y);
          float hmDist = smoothstep(26.0, 138.0, length(cameraPosition - vPoolWorldPos));
          float hmBlend = clamp(hmVert * hmDist * uHeightMistStrength, 0.0, 0.88);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uHeightMistColor, hmBlend);
        }
        #ifdef USE_COLOR
          float thresholdLightMask = smoothstep(0.03, 0.72, vColor.r);
          gl_FragColor.rgb *= thresholdLightMask;
        #endif`
      );
  };

  material.customProgramCacheKey = () =>
    `triplanar-porcelain-v5-${invTileScale.toFixed(4)}-${causticMultiplier.toFixed(2)}`;
}

export async function createPoolMaterialsAsync(
  onProgress?: (fraction: number, label: string) => void
): Promise<PoolMaterialSet> {
  onProgress?.(0.02, 'SYNTHESIZING GLAZED PORCELAIN TILE MAPS...');
  const whiteMaps = await generatePorcelainTileMapsAsync(
    1024,
    6,
    [243, 245, 244],
    [148, 156, 159],
    1.55,
    undefined,
    (t) => onProgress?.(0.02 + t * 0.30, 'SYNTHESIZING GLAZED PORCELAIN TILE MAPS...')
  );

  onProgress?.(0.34, 'SYNTHESIZING ARCHITECTURAL MOSAIC TRIM MAPS...');
  const accentMaps = await generatePorcelainTileMapsAsync(
    1024,
    8,
    [118, 136, 140],
    [64, 74, 78],
    1.45,
    undefined,
    (t) => onProgress?.(0.34 + t * 0.24, 'SYNTHESIZING ARCHITECTURAL MOSAIC TRIM MAPS...')
  );

  onProgress?.(0.60, 'SYNTHESIZING COBALT & AZURE MOSAIC MAPS...');
  const cobaltPalette: ReadonlyArray<[number, number, number]> = [
    [26, 86, 148],
    [34, 108, 168],
    [22, 68, 128],
    [48, 136, 182],
    [18, 56, 108],
    [62, 154, 194],
    [30, 96, 158]
  ];
  const cobaltMaps = await generatePorcelainTileMapsAsync(
    1024,
    10,
    [32, 98, 156],
    [20, 42, 64],
    1.62,
    cobaltPalette,
    (t) => onProgress?.(0.60 + t * 0.28, 'SYNTHESIZING COBALT & AZURE MOSAIC MAPS...')
  );

  onProgress?.(0.90, 'SYNTHESIZING GLASS-BLOCK & HARDWARE MAPS...');
  const glassMaps = await generateGlassBlockMapsAsync(512, 4);
  const grateTex = generateStainlessGrateTexture(256);
  const archDoorTex = generateArchitecturalDoorTexture(
    '#cfd8dc',
    '#b2bec4',
    'rgba(72, 84, 90, 0.68)',
    'rgba(248, 252, 254, 0.45)'
  );

  const defaultField = createDefaultFieldTexture();

  const shared: SharedTileUniforms = {
    uPoolTime: { value: 0 },
    uWaterLevel: { value: WATER_LEVEL },
    uWetBandHeight: { value: 0.44 },
    uCausticStrength: { value: 0.65 },
    uWallBounceCaustic: { value: 0.28 },
    uWaveSplashScale: { value: 0.2 },
    uGrimeStrength: { value: 0.0 },
    uCausticColor: { value: new THREE.Color(0x7ae8df) },
    uHeightMistColor: { value: new THREE.Color(0xd8e4e8) },
    uHeightMistStartY: { value: 45.0 },
    uHeightMistEndY: { value: 145.0 },
    uHeightMistStrength: { value: 0.0 },
    uFieldMap: { value: defaultField.texture },
    uFieldCenter: { value: new THREE.Vector2(defaultField.centerX, defaultField.centerZ) },
    uFieldSize: { value: new THREE.Vector2(defaultField.sizeX, defaultField.sizeZ) }
  };

  const whiteTile = new THREE.MeshPhysicalMaterial({
    map: whiteMaps.albedoMap,
    normalMap: whiteMaps.normalMap,
    normalScale: new THREE.Vector2(0.58, 0.58),
    roughnessMap: whiteMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.0,
    clearcoat: 0.90,
    clearcoatRoughness: 0.068,
    clearcoatNormalMap: whiteMaps.normalMap,
    clearcoatNormalScale: new THREE.Vector2(0.42, 0.42),
    ior: 1.53,
    vertexColors: true
  });
  injectTriplanarPorcelainShader(whiteTile, shared, 1.0 / 2.4, 1.0);

  const accentTile = new THREE.MeshPhysicalMaterial({
    map: accentMaps.albedoMap,
    normalMap: accentMaps.normalMap,
    normalScale: new THREE.Vector2(0.54, 0.54),
    roughnessMap: accentMaps.roughnessMap,
    roughness: 0.98,
    metalness: 0.02,
    clearcoat: 0.88,
    clearcoatRoughness: 0.072,
    clearcoatNormalMap: accentMaps.normalMap,
    clearcoatNormalScale: new THREE.Vector2(0.38, 0.38),
    ior: 1.53,
    vertexColors: true
  });
  injectTriplanarPorcelainShader(accentTile, shared, 1.0 / 1.6, 0.88);

  const cobaltMosaicTile = new THREE.MeshPhysicalMaterial({
    map: cobaltMaps.albedoMap,
    normalMap: cobaltMaps.normalMap,
    normalScale: new THREE.Vector2(0.64, 0.64),
    roughnessMap: cobaltMaps.roughnessMap,
    roughness: 0.92,
    metalness: 0.04,
    clearcoat: 0.94,
    clearcoatRoughness: 0.055,
    clearcoatNormalMap: cobaltMaps.normalMap,
    clearcoatNormalScale: new THREE.Vector2(0.46, 0.46),
    ior: 1.54,
    vertexColors: true
  });
  injectTriplanarPorcelainShader(cobaltMosaicTile, shared, 1.0 / 1.4, 0.92);

  const glassBlock = new THREE.MeshPhysicalMaterial({
    map: glassMaps.albedoMap,
    normalMap: glassMaps.normalMap,
    normalScale: new THREE.Vector2(0.75, 0.75),
    roughnessMap: glassMaps.roughnessMap,
    roughness: 0.32,
    metalness: 0.0,
    clearcoat: 0.95,
    clearcoatRoughness: 0.06,
    ior: 1.52,
    emissive: new THREE.Color(0xd2eaef),
    emissiveMap: glassMaps.albedoMap,
    emissiveIntensity: 0.45
  });
  injectTriplanarPorcelainShader(glassBlock, shared, 1.0 / 0.88, 0.35);

  const chromeMetal = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xe2eaee),
    roughness: 0.13,
    metalness: 0.95
  });

  const weatheredSteel = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x566268),
    roughness: 0.34,
    metalness: 0.88
  });

  const stainlessGrate = new THREE.MeshStandardMaterial({
    map: grateTex,
    roughness: 0.32,
    metalness: 0.88,
    color: new THREE.Color(0xd8e2e6)
  });

  const darkTrussMetal = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x1f2b30),
    roughness: 0.54,
    metalness: 0.80
  });

  const cubeFrameMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x0d1216),
    roughness: 0.36,
    metalness: 0.48
  });

  const waterSheetMat = createWaterSheetMaterial(shared.uPoolTime);

  const brushedBrass = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xdcb46c),
    roughness: 0.24,
    metalness: 0.90
  });

  const paintedDoor = new THREE.MeshPhysicalMaterial({
    map: archDoorTex,
    roughness: 0.34,
    metalness: 0.08,
    clearcoat: 0.55,
    clearcoatRoughness: 0.16
  });

  onProgress?.(1.0, 'MATERIALS INITIALIZED');

  return {
    whiteTile,
    ceilingTile: whiteTile,
    accentTile,
    cobaltMosaicTile,
    glassBlock,
    chromeMetal,
    weatheredSteel,
    stainlessGrate,
    darkTrussMetal,
    cubeFrameMat,
    waterSheetMat,
    brushedBrass,
    paintedDoor,

    configureForLevel({
      tileTint,
      accentTint,
      wetBandHeight,
      causticStrength,
      wallBounceCaustic,
      waveAmplitude,
      grimeStrength,
      causticColor,
      glassGlowColor,
      glassGlowIntensity,
      heightMistColor,
      heightMistStartY,
      heightMistEndY,
      heightMistStrength,
      fieldData
    }) {
      whiteTile.color.setHex(tileTint);
      accentTile.color.setHex(accentTint);
      glassBlock.emissive.setHex(glassGlowColor);
      glassBlock.emissiveIntensity = glassGlowIntensity;

      shared.uWetBandHeight.value = wetBandHeight;
      shared.uCausticStrength.value = causticStrength;
      shared.uWallBounceCaustic.value = wallBounceCaustic;
      shared.uWaveSplashScale.value = Math.max(0.0, waveAmplitude - 0.3);
      shared.uGrimeStrength.value = grimeStrength;
      shared.uCausticColor.value.copy(causticColor);
      shared.uHeightMistColor.value.setHex(heightMistColor);
      shared.uHeightMistStartY.value = heightMistStartY;
      shared.uHeightMistEndY.value = heightMistEndY;
      shared.uHeightMistStrength.value = heightMistStrength;
      shared.uFieldMap.value = fieldData.texture;
      shared.uFieldCenter.value.set(fieldData.centerX, fieldData.centerZ);
      shared.uFieldSize.value.set(fieldData.sizeX, fieldData.sizeZ);
    },

    update(elapsedTime: number) {
      shared.uPoolTime.value = elapsedTime;
    },

    dispose() {
      defaultField.texture.dispose();
      whiteMaps.albedoMap.dispose();
      whiteMaps.normalMap.dispose();
      whiteMaps.roughnessMap.dispose();
      accentMaps.albedoMap.dispose();
      accentMaps.normalMap.dispose();
      accentMaps.roughnessMap.dispose();
      cobaltMaps.albedoMap.dispose();
      cobaltMaps.normalMap.dispose();
      cobaltMaps.roughnessMap.dispose();
      glassMaps.albedoMap.dispose();
      glassMaps.normalMap.dispose();
      glassMaps.roughnessMap.dispose();
      grateTex.dispose();
      archDoorTex.dispose();
      whiteTile.dispose();
      accentTile.dispose();
      cobaltMosaicTile.dispose();
      glassBlock.dispose();
      chromeMetal.dispose();
      weatheredSteel.dispose();
      stainlessGrate.dispose();
      darkTrussMetal.dispose();
      cubeFrameMat.dispose();
      waterSheetMat.dispose();
      brushedBrass.dispose();
      paintedDoor.dispose();
    }
  };
}
