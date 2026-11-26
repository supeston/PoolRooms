import * as THREE from 'three';
import { BuiltLevel, ZoneDefinition } from '../types';
import { PoolMaterialSet } from '../tileMaterial';
import { PoolLevelBuilder, yieldBuildFrame } from './levelUtils';

export async function buildStage05AbyssalBasilica(
  materials: PoolMaterialSet,
  onProgress?: (t: number, msg: string) => void
): Promise<BuiltLevel> {
  onProgress?.(0.04, 'RAISING 68M SUBMERGED HYPOSTYLE COLONNADE...');
  const b = new PoolLevelBuilder(materials, new THREE.Color(2.05, 2.18, 2.22));

  const shadowRig = b.createShadowKeyLight({
    color: 0xeef6fa,
    intensity: 2.75,
    offsetX: -32,
    offsetY: 88,
    offsetZ: -24,
    frustumHalfSize: 96
  });

  const deepFloorY = -24.0;
  const basilicaCeilY = 68.0;

  b.addBlock(-14.0, 14.0, deepFloorY, 0.92, 22.0, 38.0, materials.whiteTile, { climbable: true });
  b.addBlock(-65.5, 65.5, deepFloorY, basilicaCeilY + 1.5, 37.5, 40.0, materials.whiteTile, { climbable: false });
  b.addBlock(-67.0, -64.0, deepFloorY, basilicaCeilY + 1.5, -126.0, 40.0, materials.whiteTile, { climbable: false });
  b.addBlock(64.0, 67.0, deepFloorY, basilicaCeilY + 1.5, -126.0, 40.0, materials.whiteTile, { climbable: false });
  b.addBlock(-65.5, 65.5, deepFloorY - 2.0, deepFloorY, -126.0, 38.0, materials.accentTile, { climbable: false });

  b.addStaircase({
    axis: '-Z',
    startPos: 22.0,
    endPos: 18.0,
    crossMin: -5.5,
    crossMax: 5.5,
    startY: 0.92,
    endY: 0.62,
    baseY: -1.0,
    steps: 2
  });

  b.addBlock(-3.6, 3.6, -0.45, 0.62, -124.0, 18.0, materials.whiteTile, {
    climbable: true,
    blocksWater: false
  });
  for (const cz of [0, -24, -48, -72, -96]) {
    b.addBlock(-15.5, 15.5, -0.45, 0.62, cz - 2.4, cz + 2.4, materials.whiteTile, {
      climbable: true,
      blocksWater: false
    });
  }
  b.addChromePoolLadder({ x: -3.6, z: -12.0, normalX: -1, normalZ: 0, minY: -6.8, maxY: 0.62, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });
  b.addChromePoolLadder({ x: 3.6, z: -60.0, normalX: 1, normalZ: 0, minY: -6.8, maxY: 0.62, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });
  b.addChromePoolLadder({ x: -3.6, z: -108.0, normalX: -1, normalZ: 0, minY: -6.8, maxY: 0.62, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });

  const colXs = [-42.0, -16.5, 16.5, 42.0];
  const colZs = [4.0, -20.0, -44.0, -68.0, -92.0, -114.0];
  for (const cx of colXs) {
    for (const cz of colZs) {
      b.addCylinderColumn(cx, cz, 2.85, deepFloorY, basilicaCeilY, materials.whiteTile, true, true, true, 32);
    }
  }

  b.addBlock(-64.0, -28.0, deepFloorY, -8.5, -114.0, 10.0, materials.whiteTile, { climbable: true });
  b.addBlock(28.0, 64.0, deepFloorY, -8.5, -114.0, 10.0, materials.whiteTile, { climbable: true });
  b.addBlock(-28.0, 28.0, deepFloorY, -16.0, -120.0, 6.0, materials.whiteTile, { climbable: true });

  for (const uz of [-18.0, -54.0, -90.0]) {
    b.addSmoothArchedWall({
      orientation: 'Z',
      planeMin: uz - 2.0,
      planeMax: uz + 2.0,
      spanMin: -28.0,
      spanMax: 28.0,
      openCenter: 0,
      openWidth: 18.0,
      floorY: -16.0,
      springY: -8.5,
      topY: -2.2,
      mat: materials.whiteTile
    });
    b.addRecessedUnderwaterLamp({ x: -27.8, y: -10.5, z: uz + 10.0, normalX: 1, normalZ: 0, color: 0x76e8f2, intensity: 46, distance: 38 });
    b.addRecessedUnderwaterLamp({ x: 27.8, y: -10.5, z: uz + 10.0, normalX: -1, normalZ: 0, color: 0x76e8f2, intensity: 46, distance: 38 });
  }

  onProgress?.(0.22, 'PIERCING CATHEDRAL OCULI & MONUMENTAL VAULTED PORTAL...');
  await yieldBuildFrame();

  const oculusCutouts = [
    { cx: 0, cz: -8.0, w: 11.0, d: 11.0 },
    { cx: 0, cz: -56.0, w: 11.0, d: 11.0 },
    { cx: 0, cz: -104.0, w: 11.0, d: 11.0 },
    { cx: -29.0, cz: -32.0, w: 8.5, d: 8.5 },
    { cx: 29.0, cz: -32.0, w: 8.5, d: 8.5 },
    { cx: -29.0, cz: -80.0, w: 8.5, d: 8.5 },
    { cx: 29.0, cz: -80.0, w: 8.5, d: 8.5 }
  ];
  b.addCeilingWithCutouts(-65.5, 65.5, -126.0, 38.5, basilicaCeilY, oculusCutouts, materials.whiteTile);

  for (const oc of oculusCutouts) {
    b.addSkylightWell({
      cx: oc.cx,
      cz: oc.cz,
      w: oc.w,
      d: oc.d,
      ceilingY: basilicaCeilY,
      wellHeight: 4.5,
      beamLength: basilicaCeilY + 1.0,
      lightColor: 0xe2f2fa,
      lightIntensity: 260,
      lightDistance: 112,
      bounceColor: 0xb2e4ee,
      bounceIntensity: 34,
      shaftColor: 0xd8f2fa,
      shaftOpacity: 0.088,
      underwaterBeamDepth: 18.0
    });
  }

  b.addSmoothArchedWall({
    orientation: 'Z',
    planeMin: -126.8,
    planeMax: -122.8,
    spanMin: -65.5,
    spanMax: 65.5,
    openCenter: 0,
    openWidth: 24.0,
    floorY: -2.0,
    springY: 16.5,
    topY: basilicaCeilY + 1.5,
    mat: materials.whiteTile
  });
  b.addSmoothArchedWall({
    orientation: 'Z',
    planeMin: -126.8,
    planeMax: -122.8,
    spanMin: -65.5,
    spanMax: 65.5,
    openCenter: 0,
    openWidth: 15.0,
    floorY: deepFloorY,
    springY: -11.0,
    topY: -2.0,
    mat: materials.whiteTile
  });

  onProgress?.(0.38, 'SHAPING 108M INVERTED STEPWELL ROTUNDA...');
  await yieldBuildFrame();

  const rotZ = -180.0;
  const rotOuterR = 54.0;
  const rotCeilY = 74.0;
  const rotAbyssY = -34.0;

  b.addBlock(-rotOuterR - 6, rotOuterR + 6, rotAbyssY - 2.0, rotAbyssY, rotZ - rotOuterR - 6, rotZ + rotOuterR + 6, materials.accentTile, { climbable: false });

  b.addHollowCylinderShell({
    cx: 0,
    cz: rotZ,
    radius: rotOuterR,
    thickness: 2.8,
    minY: rotAbyssY,
    maxY: rotCeilY + 2.0,
    segments: 80,
    mat: materials.whiteTile,
    openings: [
      { angle: Math.PI * 0.5, halfArc: 0.24, minY: -18.0, maxY: 28.0 },
      { angle: -Math.PI * 0.5, halfArc: 0.24, minY: 13.8, maxY: 48.0 }
    ],
    collide: true,
    castShadow: false
  });

  b.addCircularWalkwayRing({
    cx: 0,
    cz: rotZ,
    rInner: 43.0,
    rOuter: rotOuterR + 0.2,
    minY: 9.0,
    maxY: 14.0,
    segments: 72,
    mat: materials.whiteTile,
    collide: true,
    blocksWater: false
  });
  b.addCircularWalkwayRing({
    cx: 0,
    cz: rotZ,
    rInner: 35.0,
    rOuter: 43.3,
    minY: 4.5,
    maxY: 9.0,
    segments: 64,
    mat: materials.whiteTile,
    collide: true,
    blocksWater: false
  });
  b.addCircularWalkwayRing({
    cx: 0,
    cz: rotZ,
    rInner: 26.5,
    rOuter: 35.3,
    minY: 0.62,
    maxY: 4.5,
    segments: 60,
    mat: materials.whiteTile,
    collide: true,
    blocksWater: false
  });
  b.addCircularWalkwayRing({
    cx: 0,
    cz: rotZ,
    rInner: 20.5,
    rOuter: 26.8,
    minY: -5.0,
    maxY: 0.62,
    segments: 56,
    mat: materials.whiteTile,
    collide: true,
    blocksWater: true
  });

  b.addCircularWalkwayRing({
    cx: 0,
    cz: rotZ,
    rInner: 15.5,
    rOuter: 20.8,
    minY: -12.0,
    maxY: -5.0,
    segments: 48,
    mat: materials.whiteTile,
    collide: true,
    blocksWater: false
  });
  b.addCircularWalkwayRing({
    cx: 0,
    cz: rotZ,
    rInner: 11.0,
    rOuter: 15.8,
    minY: -20.5,
    maxY: -12.0,
    segments: 44,
    mat: materials.accentTile,
    collide: true,
    blocksWater: false
  });

  b.addBlock(-9.5, 9.5, -0.45, 0.62, rotZ + 26.0, -123.5, materials.whiteTile, { climbable: true, blocksWater: false });

  b.addChromePoolLadder({ x: 0, z: rotZ + 20.5, normalX: 0, normalZ: -1, minY: -6.5, maxY: 0.62, topExitOffset: 1.0, deckReturn: true, style: 'chrome' });

  b.addSpiralStaircase({
    cx: 0,
    cz: rotZ,
    coreRadius: 26.8,
    outerRadius: 34.8,
    startAngle: Math.PI * 0.42,
    totalAngle: -Math.PI * 0.22,
    startY: 0.62,
    endY: 4.5,
    steps: 14,
    mat: materials.whiteTile
  });
  b.addSpiralStaircase({
    cx: 0,
    cz: rotZ,
    coreRadius: 35.2,
    outerRadius: 42.8,
    startAngle: Math.PI * 0.16,
    totalAngle: -Math.PI * 0.22,
    startY: 4.5,
    endY: 9.0,
    steps: 16,
    mat: materials.whiteTile
  });
  b.addSpiralStaircase({
    cx: 0,
    cz: rotZ,
    coreRadius: 43.2,
    outerRadius: 50.8,
    startAngle: -Math.PI * 0.08,
    totalAngle: -Math.PI * 0.22,
    startY: 9.0,
    endY: 14.0,
    steps: 18,
    mat: materials.whiteTile
  });

  b.addSpiralStaircase({
    cx: 0,
    cz: rotZ,
    coreRadius: 26.8,
    outerRadius: 34.8,
    startAngle: Math.PI * 0.58,
    totalAngle: Math.PI * 0.22,
    startY: 0.62,
    endY: 4.5,
    steps: 14,
    mat: materials.whiteTile
  });
  b.addSpiralStaircase({
    cx: 0,
    cz: rotZ,
    coreRadius: 35.2,
    outerRadius: 42.8,
    startAngle: Math.PI * 0.84,
    totalAngle: Math.PI * 0.22,
    startY: 4.5,
    endY: 9.0,
    steps: 16,
    mat: materials.whiteTile
  });
  b.addSpiralStaircase({
    cx: 0,
    cz: rotZ,
    coreRadius: 43.2,
    outerRadius: 50.8,
    startAngle: Math.PI * 1.08,
    totalAngle: Math.PI * 0.22,
    startY: 9.0,
    endY: 14.0,
    steps: 18,
    mat: materials.whiteTile
  });

  for (const bandY of [20.0, 34.0, 48.0, 60.0]) {
    b.addCurvedWallArc({
      cx: 0,
      cz: rotZ,
      rInner: rotOuterR - 0.22,
      rOuter: rotOuterR + 0.06,
      startAngle: -Math.PI * 0.22,
      endAngle: Math.PI * 0.26,
      minY: bandY,
      maxY: bandY + 2.6,
      segments: 28,
      mat: materials.glassBlock,
      collide: false,
      castShadow: false
    });
    b.addCurvedWallArc({
      cx: 0,
      cz: rotZ,
      rInner: rotOuterR - 0.22,
      rOuter: rotOuterR + 0.06,
      startAngle: Math.PI * 0.74,
      endAngle: Math.PI * 1.22,
      minY: bandY,
      maxY: bandY + 2.6,
      segments: 28,
      mat: materials.glassBlock,
      collide: false,
      castShadow: false
    });
  }

  for (let wi = 0; wi < 12; wi++) {
    const a = (wi / 12) * Math.PI * 2 + Math.PI * 0.083;
    if (Math.abs(Math.sin(a)) > 0.90) continue;
    const nx = -Math.cos(a);
    const nz = -Math.sin(a);
    const rotY = Math.atan2(nx, nz);

    b.addWaterCascadeSheet({
      x: Math.cos(a) * 42.8,
      z: rotZ + Math.sin(a) * 42.8,
      width: 5.2,
      topY: 14.05,
      bottomY: 8.95,
      rotY
    });
    b.addWaterCascadeSheet({
      x: Math.cos(a) * 34.8,
      z: rotZ + Math.sin(a) * 34.8,
      width: 4.8,
      topY: 9.05,
      bottomY: 4.45,
      rotY
    });
    b.addWaterCascadeSheet({
      x: Math.cos(a) * 26.3,
      z: rotZ + Math.sin(a) * 26.3,
      width: 4.4,
      topY: 4.55,
      bottomY: 0.0,
      rotY
    });
  }

  b.addCeilingWithCutouts(-58.0, 58.0, rotZ - 58.0, rotZ + 58.0, rotCeilY, [
    { cx: 0, cz: rotZ, w: 30.0, d: 30.0 }
  ], materials.whiteTile);
  b.addSkylightWell({
    cx: 0,
    cz: rotZ,
    w: 30.0,
    d: 30.0,
    ceilingY: rotCeilY,
    wellHeight: 6.0,
    beamLength: rotCeilY + 4.0,
    lightColor: 0xf6f8f4,
    lightIntensity: 340,
    lightDistance: 145,
    bounceColor: 0xdcf0f4,
    bounceIntensity: 48,
    shaftColor: 0xf4f8f5,
    shaftOpacity: 0.085,
    underwaterBeamDepth: 22.0
  });

  onProgress?.(0.56, 'RAISING FLOODED GRAND STAIRCASE & ZENITH SANCTUARY...');
  await yieldBuildFrame();

  const stairStartZ = rotZ - rotOuterR + 2.5;
  const stairEndZ = stairStartZ - 72.0;
  const zenithY = 38.0;
  const zenithCeilY = 76.0;

  b.addBlock(-16.0, 16.0, 12.2, 14.0, stairStartZ - 2.0, rotZ - 42.5, materials.whiteTile, {
    climbable: true,
    blocksWater: false
  });

  b.addStaircase({
    axis: '-Z',
    startPos: stairStartZ,
    endPos: stairEndZ,
    crossMin: -10.0,
    crossMax: 10.0,
    startY: 14.0,
    endY: zenithY,
    baseY: 11.8,
    steps: 64,
    mat: materials.whiteTile
  });

  b.addBlock(-20.0, -10.0, 11.8, zenithCeilY + 1.5, stairEndZ - 42.0, stairStartZ + 3.0, materials.whiteTile, { climbable: false });
  b.addBlock(10.0, 20.0, 11.8, zenithCeilY + 1.5, stairEndZ - 42.0, stairStartZ + 3.0, materials.whiteTile, { climbable: false });

  for (let si = 0; si < 6; si++) {
    const pz = stairStartZ - 8.0 - si * 11.8;
    const py = THREE.MathUtils.lerp(15.5, zenithY, (si + 0.5) / 6);
    b.addCylinderColumn(-9.1, pz, 1.15, py - 3.0, zenithCeilY, materials.whiteTile, true, true, true, 24);
    b.addCylinderColumn(9.1, pz, 1.15, py - 3.0, zenithCeilY, materials.whiteTile, true, true, true, 24);
    b.addGlassBlockWall({
      axis: 'Z',
      planePos: -9.95,
      startAlong: pz - 4.0,
      endAlong: pz + 4.0,
      minY: py + 0.8,
      maxY: py + 14.5,
      lightColor: 0xfff5e6,
      lightIntensity: 48,
      lightDistance: 32,
      inwardSign: 1
    });
    b.addGlassBlockWall({
      axis: 'Z',
      planePos: 9.95,
      startAlong: pz - 4.0,
      endAlong: pz + 4.0,
      minY: py + 0.8,
      maxY: py + 14.5,
      lightColor: 0xfff5e6,
      lightIntensity: 48,
      lightDistance: 32,
      inwardSign: -1
    });
  }

  const sanctStartZ = stairEndZ;
  const sanctEndZ = sanctStartZ - 38.0;
  b.addBlock(-18.0, 18.0, zenithY - 1.8, zenithY, sanctEndZ, sanctStartZ, materials.whiteTile, {
    climbable: true,
    blocksWater: false
  });
  b.addBlock(-19.5, 19.5, zenithY - 1.8, zenithCeilY + 1.5, sanctEndZ - 2.4, sanctEndZ, materials.whiteTile, { climbable: false });

  b.addSmoothArchedWall({
    orientation: 'Z',
    planeMin: sanctEndZ - 0.8,
    planeMax: sanctEndZ + 1.8,
    spanMin: -18.0,
    spanMax: 18.0,
    openCenter: 0,
    openWidth: 10.5,
    floorY: zenithY,
    springY: zenithY + 10.5,
    topY: zenithCeilY + 1.5,
    mat: materials.whiteTile
  });
  b.addBlock(-5.6, 5.6, zenithY, zenithY + 16.5, sanctEndZ - 0.6, sanctEndZ + 0.3, materials.glassBlock, {
    climbable: false,
    castShadow: false
  });

  const oculusZ = (sanctStartZ + sanctEndZ) * 0.5 + 6.0;
  b.addCeilingWithCutouts(-21.5, 21.5, sanctEndZ - 3.0, stairStartZ + 5.0, zenithCeilY, [
    { cx: 0, cz: oculusZ, w: 20.0, d: 34.0 }
  ], materials.whiteTile);
  b.addSkylightWell({
    cx: 0,
    cz: oculusZ,
    w: 20.0,
    d: 34.0,
    ceilingY: zenithCeilY,
    wellHeight: 6.5,
    beamLength: 42.0,
    lightColor: 0xfff7ec,
    lightIntensity: 380,
    lightDistance: 120,
    bounceColor: 0xfff3e2,
    bounceIntensity: 68,
    shaftColor: 0xfff8ee,
    shaftOpacity: 0.12,
    useGlassBlocks: false
  });

  const thresholdGlow = new THREE.PointLight(0xfff5e4, 110, 52, 1.25);
  thresholdGlow.position.set(0, zenithY + 7.2, sanctEndZ + 3.8);
  b.group.add(thresholdGlow);

  b.setGlobalWaterIllumination(0.75);

  const fieldData = await b.bakeLevelFieldAsync(
    (t) => onProgress?.(0.64 + t * 0.36, 'BAKING CATHEDRAL CAUSTIC & LIGHT FIELD...'),
    { centerX: 0, centerZ: -154, sizeX: 168, sizeZ: 400 }
  );

  const zones: ZoneDefinition[] = [
    { id: 's5-vestibule', label: 'STAGE 05 · BASILICA THRESHOLD', minX: -18, maxX: 18, minZ: 18, maxZ: 42 },
    { id: 's5-submerged', label: 'STAGE 05 · SUBMERGED COLONNADE CRYPT', minX: -68, maxX: 68, minZ: -126, maxZ: 20, maxY: -1.5 },
    { id: 's5-colonnade', label: 'STAGE 05 · 68M HYPOSTYLE COLONNADE', minX: -68, maxX: 68, minZ: -126, maxZ: 20 },
    { id: 's5-stepwell', label: 'STAGE 05 · INVERTED STEPWELL ROTUNDA', minX: -60, maxX: 60, minZ: -236, maxZ: -126 },
    { id: 's5-stair', label: 'STAGE 05 · FLOODED GRAND STAIRCASE', minX: -24, maxX: 24, minZ: stairEndZ, maxZ: -232 },
    { id: 's5-zenith', label: 'STAGE 05 · THE ZENITH SANCTUARY', minX: -24, maxX: 24, minZ: sanctEndZ - 6, maxZ: stairEndZ }
  ];

  return {
    index: 4,
    code: 'STAGE 05',
    title: 'THE ABYSSAL BASILICA',
    subtitle: 'SUBTERRANEAN CATHEDRAL // ZENITH SANCTUARY',
    group: b.group,
    colliders: b.colliders,
    cylinders: b.cylinders,
    ladders: b.ladders,
    currents: b.currents,
    zones,
    exitTrigger: {
      minX: -5.8,
      maxX: 5.8,
      minY: zenithY - 0.5,
      maxY: zenithY + 14.0,
      minZ: sanctEndZ - 1.5,
      maxZ: sanctEndZ + 5.5,
      nextLevelIndex: -1
    },
    spawnPosition: new THREE.Vector3(0, 0.92, 30.5),
    spawnYaw: 0,
    fieldData,
    shadowRig,
    waterStyle: {
      absorption: [0.44, 0.10, 0.11],
      deepColor: [0.006, 0.068, 0.092],
      shallowColor: [0.08, 0.50, 0.54],
      reflectionTint: [0.98, 0.99, 1.0],
      waveAmplitude: 0.18,
      choppiness: 0.28,
      waveSpeed: 0.96,
      turbulence: 0.56,
      depthWaveDamping: 0.0,
      foamStrength: 0.0,
      sunDirection: [-0.25, 0.94, -0.22],
      sunSpecularColor: [1.0, 0.98, 0.94],
      specularIntensity: 0.94,
      wetBandHeight: 0.52,
      causticStrength: 0.80,
      wallBounceCaustic: 0.34,
      underwaterFogColor: 0x052a34,
      underwaterFogDensity: 0.044,
      planeCenter: [0, -108],
      planeSize: [220, 320]
    },
    envStyle: {
      fogColor: 0xc6d4d8,
      fogDensity: 0.0038,
      heightMistColor: 0xe6eeef,
      heightMistStartY: 36.0,
      heightMistEndY: 74.0,
      heightMistStrength: 0.45,
      indirectFillColor: 0xe8eeec,
      indirectFillIntensity: 0.082,
      envPreset: 'basilica-zenith',
      envIntensity: 0.30,
      baseExposure: 1.00,
      warmthGrade: 0.14,
      grimeStrength: 0.03,
      glassGlowColor: 0xf4f2e8,
      glassGlowIntensity: 0.78,
      ssaoIntensity: 0.88,
      bloomIntensity: 0.42,
      audioProfile: 'stage05-abyssal-basilica',
      tileTint: 0xf7f6f2,
      accentTint: 0x768b92,
      causticTint: 0x8ef0f2,
      defaultFlashlightOn: false
    },
    update(elapsedTime: number) {
      b.updateAnimatedShafts(elapsedTime);
    },
    dispose() {
      b.dispose();
    }
  };
}
