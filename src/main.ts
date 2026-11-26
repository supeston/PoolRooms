import * as THREE from 'three';
import './style.css';
import { BuiltLevel, EnvPreset, LevelEnvironmentStyle, ShadowRig, WATER_LEVEL } from './types';
import { createPoolMaterialsAsync, PoolMaterialSet } from './tileMaterial';
import { createDarkWaterSystem } from './waterShader';
import { BodycamPlayerController } from './playerController';
import { PoolAudioEngine } from './audioEngine';
import { createPostProcessingPipeline } from './postProcessing';

import { buildStage01GlassBlockHalls } from './levels/stage01GlassBlockHalls';
import { buildStage02PerforatedAbyss } from './levels/stage02PerforatedAbyss';
import { buildStage03SunkenPurgatory } from './levels/stage03SunkenPurgatory';
import { buildStage04AzureMonolithSpires } from './levels/stage04AzureMonolithSpires';
import { buildStage05AbyssalBasilica } from './levels/stage05AbyssalBasilica';

interface StageRegistryEntry {
  shortName: string;
  tag: string;
  build: (
    materials: PoolMaterialSet,
    onProgress?: (t: number, msg: string) => void
  ) => Promise<BuiltLevel>;
}

const STAGE_REGISTRY: ReadonlyArray<StageRegistryEntry> = [
  { shortName: 'Glass-Block Halls', tag: 'THRESHOLD', build: buildStage01GlassBlockHalls },
  { shortName: 'The Perforated Abyss', tag: 'WAVE ATRIUM', build: buildStage02PerforatedAbyss },
  { shortName: 'The Sunken Purgatory', tag: 'ENDLESS SILO', build: buildStage03SunkenPurgatory },
  { shortName: 'The Azure Monolith Spires', tag: 'OPEN HORIZON', build: buildStage04AzureMonolithSpires },
  { shortName: 'The Abyssal Basilica', tag: 'CATHEDRAL FINALE', build: buildStage05AbyssalBasilica }
];

const nextPaintFrame = (): Promise<void> =>
  new Promise((resolve) => {
    requestAnimationFrame(() => {
      window.setTimeout(resolve, 0);
    });
  });

function createPresetEnvMap(renderer: THREE.WebGLRenderer, preset: EnvPreset): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();

  const palette: Record<
    EnvPreset,
    { bg: number; wall: number; bounceFloor: number; panel: number; grid: boolean }
  > = {
    'overcast-mist': { bg: 0xa4b4ba, wall: 0xa0b0b6, bounceFloor: 0x8fa0a6, panel: 0xe8f6fa, grid: false },
    'abyss-courtyard': { bg: 0x94aab2, wall: 0x98aeb6, bounceFloor: 0x162c32, panel: 0xe6f4f8, grid: true },
    'silo-purgatory': { bg: 0x9cb0b8, wall: 0xa4b6be, bounceFloor: 0x122228, panel: 0xf0f8fc, grid: true },
    'azure-horizon': { bg: 0x8698a4, wall: 0x728896, bounceFloor: 0x1a3040, panel: 0xd4e0e6, grid: false },
    'basilica-zenith': { bg: 0xb4c0c4, wall: 0xb0bcc0, bounceFloor: 0x6e8c94, panel: 0xfff8ee, grid: false }
  };

  const p = palette[preset];
  envScene.background = new THREE.Color(p.bg);

  const skyMat = new THREE.MeshBasicMaterial({ color: p.panel });
  const wallMat = new THREE.MeshBasicMaterial({ color: p.wall });
  const floorMat = new THREE.MeshBasicMaterial({ color: p.bounceFloor });

  const panelSize = p.grid ? 3.8 : 9.6;
  const panelGeo = new THREE.PlaneGeometry(panelSize, panelSize);
  if (p.grid) {
    for (const gx of [-5.2, 0, 5.2]) {
      for (const gz of [-5.2, 0, 5.2]) {
        const m = new THREE.Mesh(panelGeo, skyMat);
        m.position.set(gx, 6.2, gz);
        m.rotation.x = Math.PI / 2;
        envScene.add(m);
      }
    }
  } else {
    const top = new THREE.Mesh(panelGeo, skyMat);
    top.position.set(0, 6.2, -1.5);
    top.rotation.x = Math.PI / 2;
    envScene.add(top);
  }

  const wallGeo = new THREE.PlaneGeometry(18, 12);
  for (const [wx, wz, ry] of [
    [-8.5, 0, Math.PI / 2],
    [8.5, 0, -Math.PI / 2],
    [0, -8.5, 0],
    [0, 8.5, Math.PI]
  ] as const) {
    const w = new THREE.Mesh(wallGeo, wallMat);
    w.position.set(wx, 0.5, wz);
    w.rotation.y = ry;
    envScene.add(w);
  }

  const floorGeo = new THREE.PlaneGeometry(18, 18);
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.position.set(0, -5.2, 0);
  floor.rotation.x = -Math.PI / 2;
  envScene.add(floor);

  const rt = pmrem.fromScene(envScene, 0.045);
  panelGeo.dispose();
  wallGeo.dispose();
  floorGeo.dispose();
  skyMat.dispose();
  wallMat.dispose();
  floorMat.dispose();
  pmrem.dispose();
  return rt.texture;
}

function createAtmosphericSkyDome() {
  const geo = new THREE.SphereGeometry(1050, 36, 24);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uTopColor: { value: new THREE.Color(0x5c6a74) },
      uHorizonColor: { value: new THREE.Color(0x9aa9b2) },
      uSunColor: { value: new THREE.Color(0xd0dce2) },
      uSunDir: { value: new THREE.Vector3(0.35, 0.72, 0.28).normalize() },
      uCloudCoverage: { value: 0.0 }
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uTopColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uSunColor;
      uniform vec3 uSunDir;
      uniform float uCloudCoverage;
      varying vec3 vDir;

      float skyHash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float skyNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(skyHash(i), skyHash(i + vec2(1.0, 0.0)), u.x),
          mix(skyHash(i + vec2(0.0, 1.0)), skyHash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float skyFbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * skyNoise(p);
          p = p * 2.04 + vec2(13.7, -9.2);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        vec3 sky = mix(uHorizonColor, uTopColor, pow(h, 0.55));

        if (uCloudCoverage > 0.01) {
          vec2 cloudUv = d.xz / (max(d.y, 0.06) + 0.16) * 1.45 + vec2(uTime * 0.008, -uTime * 0.005);
          float c1 = skyFbm(cloudUv);
          float c2 = skyFbm(cloudUv * 2.15 - vec2(uTime * 0.006, uTime * 0.004));
          float cloudDensity = smoothstep(0.28, 0.82, c1 * 0.68 + c2 * 0.32);
          vec3 cloudDark = uTopColor * 0.72;
          vec3 cloudLight = mix(uHorizonColor, uSunColor, 0.35) * 1.04;
          vec3 cloudCol = mix(cloudLight, cloudDark, cloudDensity);
          float horizonFade = smoothstep(0.01, 0.24, h);
          sky = mix(sky, cloudCol, horizonFade * uCloudCoverage * 0.86);
        }

        float sunAmt = max(dot(d, normalize(uSunDir)), 0.0);
        float diffuseBreak = mix(0.38, 0.14, uCloudCoverage);
        sky += uSunColor * pow(sunAmt, 6.0) * diffuseBreak;
        gl_FragColor = vec4(sky, 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.visible = false;
  mesh.frustumCulled = false;

  return {
    mesh,
    configure(style: LevelEnvironmentStyle) {
      mesh.visible = Boolean(style.hasSkyDome);
      if (style.hasSkyDome) {
        if (style.skyTopColor !== undefined) mat.uniforms.uTopColor.value.setHex(style.skyTopColor);
        if (style.skyHorizonColor !== undefined) mat.uniforms.uHorizonColor.value.setHex(style.skyHorizonColor);
        if (style.skySunColor !== undefined) mat.uniforms.uSunColor.value.setHex(style.skySunColor);
        if (style.skySunDir) mat.uniforms.uSunDir.value.set(...style.skySunDir).normalize();
        mat.uniforms.uCloudCoverage.value = style.skyCloudCoverage ?? 0.0;
      }
    },
    update(elapsedTime: number) {
      if (mesh.visible) {
        mat.uniforms.uTime.value = elapsedTime;
      }
    },
    dispose() {
      geo.dispose();
      mat.dispose();
    }
  };
}

function createUnderwaterParticles(scene: THREE.Scene) {
  const count = 560;
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  const phases = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = -Math.random() * 14.0 - 0.08;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    speeds[i] = 0.06 + Math.random() * 0.20;
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const spriteCanvas = document.createElement('canvas');
  spriteCanvas.width = 64;
  spriteCanvas.height = 64;
  const sCtx = spriteCanvas.getContext('2d')!;
  const grad = sCtx.createRadialGradient(32, 32, 2, 32, 32, 30);
  grad.addColorStop(0, 'rgba(220, 250, 255, 0.95)');
  grad.addColorStop(0.45, 'rgba(135, 218, 228, 0.45)');
  grad.addColorStop(1, 'rgba(60, 140, 155, 0.0)');
  sCtx.fillStyle = grad;
  sCtx.fillRect(0, 0, 64, 64);

  const spriteTex = new THREE.CanvasTexture(spriteCanvas);

  const mat = new THREE.PointsMaterial({
    map: spriteTex,
    size: 0.055,
    transparent: true,
    opacity: 0.0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: new THREE.Color(0xa6ebf2)
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);

  return {
    update(dt: number, elapsedTime: number, anchorPos: THREE.Vector3, underwaterBlend: number) {
      mat.opacity = underwaterBlend * 0.56;
      points.visible = underwaterBlend > 0.01;
      if (!points.visible) return;

      const attr = geo.attributes.position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      const span = 14.0;
      const half = span * 0.5;

      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        let x = arr[ix];
        let y = arr[ix + 1];
        let z = arr[ix + 2];

        y += speeds[i] * dt;
        x += Math.sin(elapsedTime * 0.78 + phases[i]) * 0.06 * dt;
        z += Math.cos(elapsedTime * 0.68 + phases[i]) * 0.06 * dt;

        if (x - anchorPos.x > half) x -= span;
        if (x - anchorPos.x < -half) x += span;
        if (z - anchorPos.z > half) z -= span;
        if (z - anchorPos.z < -half) z += span;
        if (y > WATER_LEVEL - 0.06) y = Math.max(-36.0, anchorPos.y - 5.2);
        if (y < anchorPos.y - 6.0) y = Math.min(WATER_LEVEL - 0.14, anchorPos.y + 4.8);

        arr[ix] = x;
        arr[ix + 1] = y;
        arr[ix + 2] = z;
      }
      attr.needsUpdate = true;
    },
    dispose() {
      geo.dispose();
      mat.dispose();
      spriteTex.dispose();
    }
  };
}

const _lightDir = new THREE.Vector3();
const _lightUp = new THREE.Vector3(0, 1, 0);
const _lightRight = new THREE.Vector3();
const _lightTrueUp = new THREE.Vector3();
const _snappedTarget = new THREE.Vector3();

function updateTexelSnappedShadowRig(rig: ShadowRig | undefined, focusPos: THREE.Vector3): void {
  if (!rig) return;
  const mapW = rig.light.shadow.mapSize.x || 4096;
  const worldUnitsPerTexel = (rig.frustumHalfSize * 2.0) / mapW;

  _lightDir.copy(rig.offset).normalize().negate();
  _lightRight.crossVectors(_lightDir, _lightUp);
  if (_lightRight.lengthSq() < 1e-4) _lightRight.set(1, 0, 0);
  else _lightRight.normalize();
  _lightTrueUp.crossVectors(_lightRight, _lightDir).normalize();

  const u = Math.round(focusPos.dot(_lightRight) / worldUnitsPerTexel) * worldUnitsPerTexel;
  const v = Math.round(focusPos.dot(_lightTrueUp) / worldUnitsPerTexel) * worldUnitsPerTexel;
  const w = focusPos.dot(_lightDir);

  _snappedTarget
    .set(0, 0, 0)
    .addScaledVector(_lightRight, u)
    .addScaledVector(_lightTrueUp, v)
    .addScaledVector(_lightDir, w);

  rig.light.target.position.copy(_snappedTarget);
  rig.light.position.copy(_snappedTarget).add(rig.offset);
  rig.light.target.updateMatrixWorld();
}

function formatBodycamTime(totalSeconds: number): string {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = Math.floor(totalSeconds % 60);
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

async function compileSceneNonBlocking(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
): Promise<void> {
  if (typeof renderer.compileAsync === 'function') {
    await renderer.compileAsync(scene, camera);
  } else {
    renderer.compile(scene, camera);
  }
}

async function bootstrap(): Promise<void> {
  const appEl = document.getElementById('app') as HTMLDivElement;
  const canvas = document.getElementById('scene-canvas') as HTMLCanvasElement;
  const loader = document.getElementById('loader') as HTMLDivElement;
  const loaderFill = document.getElementById('loader-fill') as HTMLDivElement;
  const loaderPct = document.getElementById('loader-pct') as HTMLDivElement;
  const loaderStatus = document.getElementById('loader-status') as HTMLDivElement;
  const overlay = document.getElementById('overlay') as HTMLDivElement;
  const glassCard = document.getElementById('glass-card') as HTMLDivElement;
  const enterBtn = document.getElementById('enter-btn') as HTMLButtonElement;
  const levelGrid = document.getElementById('level-grid') as HTMLDivElement;
  const camHud = document.getElementById('cam-hud') as HTMLDivElement;
  const camZone = document.getElementById('cam-zone') as HTMLSpanElement;
  const camTime = document.getElementById('cam-time') as HTMLSpanElement;
  const hintBar = document.getElementById('hint-bar') as HTMLDivElement;
  const ladderHint = document.getElementById('ladder-hint') as HTMLDivElement;
  const transitionVeil = document.getElementById('transition-veil') as HTMLDivElement;
  const transitionStageLabel = document.getElementById('transition-stage-label') as HTMLDivElement;
  const transitionFill = document.getElementById('transition-fill') as HTMLDivElement;
  const transitionPct = document.getElementById('transition-pct') as HTMLDivElement;
  const transitionStatus = document.getElementById('transition-status') as HTMLDivElement;
  const chapterBanner = document.getElementById('chapter-banner') as HTMLDivElement;
  const chapterCode = document.getElementById('chapter-code') as HTMLParagraphElement;
  const chapterTitle = document.getElementById('chapter-title') as HTMLHeadingElement;
  const chapterSub = document.getElementById('chapter-sub') as HTMLParagraphElement;
  const finaleCard = document.getElementById('finale-card') as HTMLDivElement;

  const setLoadProgress = (pct: number, msg: string) => {
    const clamped = Math.max(0, Math.min(100, Math.round(pct)));
    loaderFill.style.width = `${clamped}%`;
    loaderPct.textContent = `${clamped}%`;
    loaderStatus.textContent = msg;
  };

  const setTransitionProgress = (pct: number, msg: string) => {
    const clamped = Math.max(0, Math.min(100, Math.round(pct)));
    transitionFill.style.width = `${clamped}%`;
    transitionPct.textContent = `${clamped}%`;
    transitionStatus.textContent = msg;
  };

  setLoadProgress(2, 'INITIALIZING WEBGL2 HDR PIPELINE...');
  await nextPaintFrame();

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.localClippingEnabled = true;

  const scene = new THREE.Scene();
  const airFogColor = new THREE.Color(0xc2d4da);
  const underwaterFogColor = new THREE.Color(0x0a3840);
  let airFogDensity = 0.0118;
  let underwaterFogDensity = 0.082;

  const fog = new THREE.FogExp2(airFogColor.getHex(), airFogDensity);
  scene.fog = fog;
  scene.background = airFogColor.clone();

  const indirectFillLight = new THREE.AmbientLight(0xdde8ec, 0.065);
  scene.add(indirectFillLight);

  const skyDome = createAtmosphericSkyDome();
  scene.add(skyDome.mesh);

  const camera = new THREE.PerspectiveCamera(
    74,
    window.innerWidth / window.innerHeight,
    0.08,
    1200
  );

  setLoadProgress(6, 'SYNTHESIZING GLAZED PORCELAIN & MOSAIC MAPS...');
  await nextPaintFrame();

  const materials = await createPoolMaterialsAsync((frac, label) => {
    setLoadProgress(6 + frac * 38, label);
  });

  setLoadProgress(46, 'INITIALIZING HYDRODYNAMIC WAVE & POST-PROCESSING PIPELINE...');
  await nextPaintFrame();

  const water = createDarkWaterSystem(
    window.innerWidth,
    window.innerHeight,
    airFogColor,
    airFogDensity
  );
  scene.add(water.mesh);

  const underwaterParticles = createUnderwaterParticles(scene);
  const audio = new PoolAudioEngine();
  const post = createPostProcessingPipeline(renderer, scene, camera);

  const envCache = new Map<EnvPreset, THREE.Texture>();
  const getEnvMap = (preset: EnvPreset): THREE.Texture => {
    let tex = envCache.get(preset);
    if (!tex) {
      tex = createPresetEnvMap(renderer, preset);
      envCache.set(preset, tex);
    }
    return tex;
  };

  const urlParams = new URLSearchParams(window.location.search);
  const initialParam = parseInt(urlParams.get('level') ?? urlParams.get('stage') ?? '1', 10);
  const startIdx = Number.isFinite(initialParam)
    ? THREE.MathUtils.clamp(initialParam - 1, 0, STAGE_REGISTRY.length - 1)
    : 0;

  let activeLevel: BuiltLevel = await STAGE_REGISTRY[startIdx].build(materials, (t, msg) => {
    setLoadProgress(48 + t * 32, msg);
  });
  scene.add(activeLevel.group);

  let currentExposure = 1.0;
  let levelBaseExposure = 1.0;
  let levelBaseLuminance = 0.56;
  let levelWarmthGrade = 0.06;
  let levelSsaoIntensity = 0.90;
  let levelBloomIntensity = 0.36;
  let isTransitioning = false;
  let finaleTriggered = false;
  let hintTimeoutId: number | null = null;
  let chapterTimeoutId: number | null = null;
  let hasEnteredOnce = false;
  let simulationPaused = false;

  const levelButtons: HTMLButtonElement[] = [];
  const syncActiveLevelButton = () => {
    for (let i = 0; i < levelButtons.length; i++) {
      levelButtons[i].classList.toggle('active', i === activeLevel.index);
    }
  };

  STAGE_REGISTRY.forEach((entry, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'level-pill';
    const mainWrap = document.createElement('span');
    mainWrap.className = 'level-pill-main';
    const numSpan = document.createElement('span');
    numSpan.className = 'level-num';
    numSpan.textContent = String(idx + 1).padStart(2, '0');
    const nameSpan = document.createElement('span');
    nameSpan.className = 'level-name';
    nameSpan.textContent = entry.shortName;
    mainWrap.append(numSpan, nameSpan);
    const tagSpan = document.createElement('span');
    tagSpan.className = 'level-tag';
    tagSpan.textContent = entry.tag;
    btn.append(mainWrap, tagSpan);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      audio.init();
      if (idx !== activeLevel.index) {
        void transitionToLevel(idx, true);
      } else {
        controller.enterAndLock();
      }
    });
    levelButtons.push(btn);
    levelGrid.appendChild(btn);
  });

  glassCard.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  const showChapterBanner = (lvl: BuiltLevel) => {
    chapterCode.textContent = lvl.code;
    chapterTitle.textContent = lvl.title;
    chapterSub.textContent = lvl.subtitle;
    chapterBanner.classList.remove('hidden');
    if (chapterTimeoutId !== null) window.clearTimeout(chapterTimeoutId);
    chapterTimeoutId = window.setTimeout(() => {
      chapterBanner.classList.add('hidden');
    }, 3800);
  };

  const applyLevelEnvironment = (lvl: BuiltLevel) => {
    const env = lvl.envStyle;
    const ws = lvl.waterStyle;

    airFogColor.setHex(env.fogColor);
    airFogDensity = env.fogDensity;
    underwaterFogColor.setHex(ws.underwaterFogColor);
    underwaterFogDensity = ws.underwaterFogDensity;

    indirectFillLight.color.setHex(env.indirectFillColor);
    indirectFillLight.intensity = env.indirectFillIntensity;

    scene.environment = getEnvMap(env.envPreset);
    scene.environmentIntensity = env.envIntensity;

    skyDome.configure(env);
    water.applyStyle(ws, lvl.fieldData, lvl.spawnPosition.x, lvl.spawnPosition.z);

    materials.configureForLevel({
      tileTint: env.tileTint,
      accentTint: env.accentTint,
      wetBandHeight: ws.wetBandHeight,
      causticStrength: ws.causticStrength,
      wallBounceCaustic: ws.wallBounceCaustic,
      waveAmplitude: ws.waveAmplitude,
      grimeStrength: env.grimeStrength,
      causticColor: new THREE.Color(env.causticTint ?? 0x7ae8df),
      glassGlowColor: env.glassGlowColor ?? 0xd8eef4,
      glassGlowIntensity: env.glassGlowIntensity ?? 0.55,
      heightMistColor: env.heightMistColor ?? env.fogColor,
      heightMistStartY: env.heightMistStartY ?? 45.0,
      heightMistEndY: env.heightMistEndY ?? 150.0,
      heightMistStrength: env.heightMistStrength ?? 0.0,
      fieldData: lvl.fieldData
    });

    audio.setProfile(env.audioProfile, lvl.index);
    levelBaseExposure = env.baseExposure;
    levelWarmthGrade = env.warmthGrade;
    levelSsaoIntensity = env.ssaoIntensity ?? 0.90;
    levelBloomIntensity = env.bloomIntensity ?? 0.36;
    levelBaseLuminance = env.hasSkyDome
      ? 0.62
      : env.envPreset === 'overcast-mist' || env.envPreset === 'basilica-zenith'
        ? 0.56
        : 0.34;

    updateTexelSnappedShadowRig(lvl.shadowRig, lvl.spawnPosition);
    syncActiveLevelButton();
  };

  setLoadProgress(82, 'GENERATING ENVIRONMENT REFLECTION CUBEMAPS...');
  await nextPaintFrame();

  applyLevelEnvironment(activeLevel);

  const controller = new BodycamPlayerController(
    camera,
    scene,
    canvas,
    activeLevel.spawnPosition,
    activeLevel.colliders,
    activeLevel.cylinders,
    activeLevel.ladders,
    activeLevel.currents,
    activeLevel.zones,
    {
      onRipple: (x, z, strength, radius) => water.addRipple(x, z, strength, radius),
      onFootstep: (speed, isWet, stepSide) => audio.playFootstep(speed, isWet, stepSide),
      onWadeStep: (speed, depth, stepSide) => audio.playWadeStep(speed, depth, stepSide),
      onSwimStroke: (speed, underwater) => audio.playSwimStroke(speed, underwater),
      onWaterSplash: (intensity) => audio.playSplash(intensity),
      onSubmerge: (speed) => audio.playSubmerge(speed),
      onEmerge: () => audio.playEmerge(),
      onLadderStep: (isWet, material, isFootStep) => audio.playLadderStep(isWet, material, isFootStep),
      onMantle: (fromWater) => audio.playMantle(fromWater),
      onFlashlightToggle: () => audio.playFlashlightClick(),
      onPointerLockChange: (playing) => {
        if (playing) {
          overlay.classList.add('hidden');
          camHud.classList.remove('hidden');
          enterBtn.textContent = '[ RESUME EXPLORATION ]';

          if (!hasEnteredOnce) {
            hasEnteredOnce = true;
            showChapterBanner(activeLevel);
            hintBar.classList.remove('hidden');
            if (hintTimeoutId !== null) window.clearTimeout(hintTimeoutId);
            hintTimeoutId = window.setTimeout(() => {
              hintBar.classList.add('hidden');
            }, 7200);
          }
        } else {
          if (!finaleTriggered) overlay.classList.remove('hidden');
          camHud.classList.add('hidden');
          hintBar.classList.add('hidden');
          ladderHint.classList.add('hidden');
        }
      }
    }
  );

  setLoadProgress(88, 'PRE-COMPILING GPU SHADERS...');
  await nextPaintFrame();

  await compileSceneNonBlocking(renderer, scene, camera);

  setLoadProgress(94, 'WARMING REFLECTION & POST-PROCESSING TARGETS...');
  await nextPaintFrame();

  const warmDir = new THREE.Vector3(0, 0, -1);
  water.update(
    renderer,
    scene,
    camera,
    0.016,
    0,
    controller.position,
    controller.velocity,
    0,
    controller.flashlight.position,
    warmDir,
    0
  );
  post.update(
    0,
    0,
    0,
    currentExposure,
    levelWarmthGrade,
    activeLevel.waterStyle.underwaterFogColor,
    levelSsaoIntensity,
    levelBloomIntensity
  );
  post.render(0.016);

  setLoadProgress(100, 'FIVE-STAGE ARCHIVE READY');
  await nextPaintFrame();

  overlay.classList.remove('hidden');
  loader.classList.add('done');
  window.setTimeout(() => {
    loader.remove();
  }, 600);

  async function transitionToLevel(nextIndex: number, enterImmediately = false): Promise<void> {
    if (isTransitioning || nextIndex < 0 || nextIndex >= STAGE_REGISTRY.length) return;
    isTransitioning = true;
    finaleTriggered = false;
    finaleCard.classList.add('hidden');
    ladderHint.classList.add('hidden');
    audio.playLevelTransition();

    const targetEntry = STAGE_REGISTRY[nextIndex];
    transitionStageLabel.textContent = `STAGE 0${nextIndex + 1} · ${targetEntry.shortName.toUpperCase()}`;
    setTransitionProgress(4, 'PREPARING STAGE TRANSITION...');

    if (enterImmediately) {
      controller.enterAndLock();
    }

    transitionVeil.classList.remove('hidden');
    transitionVeil.classList.add('active');
    await nextPaintFrame();
    await new Promise<void>((r) => window.setTimeout(r, 220));

    setTransitionProgress(12, 'RELEASING PREVIOUS ARCHITECTURE...');
    await nextPaintFrame();
    scene.remove(activeLevel.group);
    activeLevel.dispose();

    const nextLevel = await targetEntry.build(materials, (t, msg) => {
      setTransitionProgress(14 + t * 62, msg);
    });

    activeLevel = nextLevel;
    scene.add(activeLevel.group);

    setTransitionProgress(80, 'CONFIGURING ACOUSTICS & ENVIRONMENT...');
    await nextPaintFrame();
    applyLevelEnvironment(activeLevel);

    controller.loadLevel(
      activeLevel.colliders,
      activeLevel.cylinders,
      activeLevel.ladders,
      activeLevel.currents,
      activeLevel.zones,
      activeLevel.spawnPosition,
      activeLevel.spawnYaw,
      activeLevel.envStyle.defaultFlashlightOn
    );

    setTransitionProgress(88, 'PRE-COMPILING STAGE SHADERS...');
    await nextPaintFrame();
    await compileSceneNonBlocking(renderer, scene, camera);

    setTransitionProgress(95, 'WARMING PLANAR WATER & SHADOW RIG...');
    await nextPaintFrame();
    water.update(
      renderer,
      scene,
      camera,
      0.016,
      0,
      controller.position,
      controller.velocity,
      0,
      controller.flashlight.position,
      warmDir,
      0
    );
    post.render(0.016);

    setTransitionProgress(100, 'STAGE READY');
    await nextPaintFrame();

    transitionVeil.classList.remove('active');
    transitionVeil.classList.add('hidden');
    showChapterBanner(activeLevel);
    isTransitioning = false;
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyR' && finaleTriggered) {
      finaleTriggered = false;
      finaleCard.classList.add('hidden');
      void transitionToLevel(0, true);
      return;
    }
    if (e.code === 'BracketLeft' && !e.repeat) {
      const prev = (activeLevel.index - 1 + STAGE_REGISTRY.length) % STAGE_REGISTRY.length;
      void transitionToLevel(prev, controller.playing);
      return;
    }
    if (e.code === 'BracketRight' && !e.repeat) {
      const next = (activeLevel.index + 1) % STAGE_REGISTRY.length;
      void transitionToLevel(next, controller.playing);
      return;
    }
    if (e.altKey && e.code.startsWith('Digit')) {
      const digit = parseInt(e.code.replace('Digit', ''), 10);
      const idx = digit - 1;
      if (idx >= 0 && idx < STAGE_REGISTRY.length && idx !== activeLevel.index) {
        e.preventDefault();
        void transitionToLevel(idx, controller.playing);
      }
    }
  });

  const enterExperience = () => {
    audio.init();
    controller.enterAndLock();
  };
  enterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    enterExperience();
  });
  overlay.addEventListener('click', enterExperience);
  canvas.addEventListener('click', () => {
    if (!finaleTriggered) {
      enterExperience();
    }
  });

  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    water.resize(w, h);
    post.resize(w, h);
  });

  document.addEventListener('visibilitychange', () => {
    simulationPaused = document.hidden;
    if (!simulationPaused) clock.getDelta();
  });
  appEl.addEventListener('contentvisibilityautostatechange', (event: Event) => {
    const cvEvent = event as Event & { skipped?: boolean };
    if (typeof cvEvent.skipped === 'boolean') {
      simulationPaused = cvEvent.skipped;
      if (!simulationPaused) clock.getDelta();
    }
  });

  const clock = new THREE.Clock();
  let underwaterBlend = 0;
  let lastZoneLabel = '';
  let lastSecondShown = -1;
  let lastNearLadder = false;
  const flashlightDir = new THREE.Vector3();

  const animate = () => {
    requestAnimationFrame(animate);
    if (simulationPaused || isTransitioning) return;

    const dt = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.elapsedTime;

    materials.update(elapsed);
    skyDome.update(elapsed);
    activeLevel.update(elapsed, camera.position);

    const snapshot = controller.update(
      dt,
      elapsed,
      (x, z, t) => water.sampleWavePhysics(x, z, t),
      levelBaseLuminance
    );

    if (!controller.playing && !finaleTriggered) {
      camera.rotation.y = activeLevel.spawnYaw + Math.sin(elapsed * 0.22) * 0.06;
      camera.rotation.x = -0.04 + Math.cos(elapsed * 0.17) * 0.02;
    }

    updateTexelSnappedShadowRig(activeLevel.shadowRig, camera.position);

    if (!isTransitioning && !finaleTriggered && controller.playing) {
      const ex = activeLevel.exitTrigger;
      const p = snapshot.position;
      if (
        p.x >= ex.minX &&
        p.x <= ex.maxX &&
        p.y >= ex.minY &&
        p.y <= ex.maxY &&
        p.z >= ex.minZ &&
        p.z <= ex.maxZ
      ) {
        if (ex.nextLevelIndex >= 0) {
          void transitionToLevel(ex.nextLevelIndex);
        } else {
          finaleTriggered = true;
          audio.fadeOutToSilence();
          camHud.classList.add('hidden');
          ladderHint.classList.add('hidden');
          finaleCard.classList.remove('hidden');
        }
      }
    }

    const showLadder = controller.playing && snapshot.nearLadder && !finaleTriggered;
    if (showLadder !== lastNearLadder) {
      lastNearLadder = showLadder;
      ladderHint.classList.toggle('hidden', !showLadder);
    }

    const targetUw = snapshot.isUnderwater ? 1 : 0;
    underwaterBlend += (targetUw - underwaterBlend) * (1 - Math.exp(-9.0 * dt));

    fog.color.copy(airFogColor).lerp(underwaterFogColor, underwaterBlend);
    fog.density = THREE.MathUtils.lerp(airFogDensity, underwaterFogDensity, underwaterBlend);
    if (scene.background instanceof THREE.Color) {
      scene.background.copy(fog.color);
    }

    if (skyDome.mesh.visible) {
      skyDome.mesh.position.copy(camera.position);
    }

    const targetExposure = THREE.MathUtils.clamp(
      levelBaseExposure * (0.98 / (0.62 + snapshot.estimatedLuminance * 0.68)),
      0.74,
      1.34
    );
    currentExposure += (targetExposure - currentExposure) * (1 - Math.exp(-1.55 * dt));

    underwaterParticles.update(dt, elapsed, camera.position, underwaterBlend);
    audio.updateSpatial({
      camera,
      isUnderwater: snapshot.isUnderwater,
      waterDepthAtFeet: snapshot.waterDepthAtFeet,
      dt,
      elapsedTime: elapsed,
      waveAmplitude: activeLevel.waterStyle.waveAmplitude,
      hasOpenSky: Boolean(activeLevel.envStyle.hasSkyDome),
      colliders: activeLevel.colliders,
      cylinders: activeLevel.cylinders
    });

    const playerInWater = snapshot.waterDepthAtFeet > 0.06 ? 1.0 : 0.0;
    controller.getFlashlightWorldDirection(flashlightDir);

    water.update(
      renderer,
      scene,
      camera,
      dt,
      elapsed,
      controller.position,
      controller.velocity,
      playerInWater,
      controller.flashlight.position,
      flashlightDir,
      controller.getFlashlightNormalizedIntensity()
    );

    post.update(
      elapsed,
      underwaterBlend,
      snapshot.wetLensIntensity,
      currentExposure,
      levelWarmthGrade,
      activeLevel.waterStyle.underwaterFogColor,
      levelSsaoIntensity,
      levelBloomIntensity
    );
    post.render(dt);

    if (snapshot.zoneLabel !== lastZoneLabel) {
      lastZoneLabel = snapshot.zoneLabel;
      camZone.textContent = snapshot.zoneLabel;
    }
    const secInt = Math.floor(elapsed);
    if (secInt !== lastSecondShown) {
      lastSecondShown = secInt;
      camTime.textContent = formatBodycamTime(secInt);
    }
  };

  animate();
}

void bootstrap();
