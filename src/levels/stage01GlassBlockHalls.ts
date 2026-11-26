import * as THREE from 'three';
import { BuiltLevel, ZoneDefinition } from '../types';
import { PoolMaterialSet } from '../tileMaterial';
import { PoolLevelBuilder, yieldBuildFrame } from './levelUtils';

export async function buildStage01GlassBlockHalls(
  materials: PoolMaterialSet,
  onProgress?: (t: number, msg: string) => void
): Promise<BuiltLevel> {
  onProgress?.(0.05, 'CONSTRUCTING GLASS-BLOCK NATATORIUM...');
  const b = new PoolLevelBuilder(materials, new THREE.Color(1.75, 1.98, 2.08));

  const shadowRig = b.createShadowKeyLight({
    color: 0xdff0f6,
    intensity: 2.95,
    offsetX: -18,
    offsetY: 28,
    offsetZ: 8,
    frustumHalfSize: 42
  });

  const ceilY = 9.2;

  b.addBlock(-18.0, 18.0, -1.6, -0.48, -40.5, 15.0, materials.whiteTile, { climbable: false });
  b.addBlock(-18.2, 18.2, -1.5, ceilY + 0.6, 13.8, 15.2, materials.whiteTile, { climbable: false });

  b.addBlock(-7.5, 7.5, -0.48, 0.75, 6.5, 13.8, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '-Z',
    startPos: 6.5,
    endPos: 2.2,
    crossMin: -4.0,
    crossMax: 4.0,
    startY: 0.75,
    endY: -0.42,
    baseY: -0.5,
    steps: 5
  });

  for (const seg of [
    [-36.0, -20.0],
    [-16.0, 0.0],
    [3.0, 13.5]
  ] as const) {
    b.addGlassBlockWall({
      axis: 'Z',
      planePos: -16.8,
      startAlong: seg[0],
      endAlong: seg[1],
      minY: 0.4,
      maxY: 7.8,
      lightColor: 0xdcf0f6,
      lightIntensity: 34,
      lightDistance: 24,
      inwardSign: 1
    });
    b.addGlassBlockWall({
      axis: 'Z',
      planePos: 16.8,
      startAlong: seg[0],
      endAlong: seg[1],
      minY: 0.4,
      maxY: 7.8,
      lightColor: 0xdcf0f6,
      lightIntensity: 34,
      lightDistance: 24,
      inwardSign: -1
    });
  }

  b.addBlock(-17.6, -16.4, -1.2, 0.45, -40.0, 14.0, materials.whiteTile, { climbable: false });
  b.addBlock(16.4, 17.6, -1.2, 0.45, -40.0, 14.0, materials.whiteTile, { climbable: false });
  b.addBlock(-17.6, -16.4, 7.75, ceilY + 0.6, -40.0, 14.0, materials.whiteTile, { climbable: false });
  b.addBlock(16.4, 17.6, 7.75, ceilY + 0.6, -40.0, 14.0, materials.whiteTile, { climbable: false });
  for (const [z0, z1] of [
    [0.0, 3.0],
    [-20.0, -16.0],
    [-40.0, -36.0]
  ] as const) {
    b.addBlock(-17.6, -16.2, -1.2, ceilY + 0.6, z0, z1, materials.whiteTile, { climbable: false });
    b.addBlock(16.2, 17.6, -1.2, ceilY + 0.6, z0, z1, materials.whiteTile, { climbable: false });
  }

  for (const cz of [0.0, -12.0, -24.0, -36.0]) {
    b.addCylinderColumn(-7.2, cz, 0.60, -0.5, ceilY, materials.whiteTile, true, true);
    b.addCylinderColumn(7.2, cz, 0.60, -0.5, ceilY, materials.whiteTile, true, true);
    b.addSubmergedPoolDrain(0, -0.48, cz - 5.5, 1.45);
  }

  onProgress?.(0.24, 'CONSTRUCTING DEEP BASIN & WALKWAYS...');
  await yieldBuildFrame();

  b.addSmoothArchedWall({
    orientation: 'Z',
    planeMin: -40.8,
    planeMax: -39.4,
    spanMin: -17.4,
    spanMax: 17.4,
    openCenter: 0,
    openWidth: 11.4,
    floorY: -0.48,
    springY: 3.2,
    topY: ceilY
  });

  b.addBlock(-18.2, -16.8, -4.2, ceilY + 0.6, -90.0, -39.4, materials.whiteTile, { climbable: false });
  b.addBlock(16.8, 18.2, -4.2, ceilY + 0.6, -90.0, -39.4, materials.whiteTile, { climbable: false });

  b.addBlock(-9.0, 9.0, -4.4, -3.45, -90.0, -39.4, materials.accentTile, { climbable: false });
  b.addSubmergedPoolDrain(0, -3.45, -52.0, 1.6);
  b.addSubmergedPoolDrain(0, -3.45, -76.0, 1.6);

  b.addRecessedUnderwaterLamp({ x: -8.6, y: -1.65, z: -56.0, normalX: 1, normalZ: 0, color: 0x8ef2f8, intensity: 22, distance: 20 });
  b.addRecessedUnderwaterLamp({ x: 8.6, y: -1.65, z: -74.0, normalX: -1, normalZ: 0, color: 0x8ef2f8, intensity: 22, distance: 20 });

  b.addBlock(-16.8, 16.8, -3.45, -0.42, -45.5, -40.5, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '-Z',
    startPos: -45.5,
    endPos: -52.0,
    crossMin: -4.2,
    crossMax: 4.2,
    startY: -0.42,
    endY: -3.35,
    baseY: -3.45,
    steps: 10
  });
  b.addStaircase({
    axis: '-Z',
    startPos: -45.5,
    endPos: -54.5,
    crossMin: -16.4,
    crossMax: -10.4,
    startY: -0.42,
    endY: 2.35,
    baseY: -3.45,
    steps: 11
  });
  b.addStaircase({
    axis: '-Z',
    startPos: -45.5,
    endPos: -54.5,
    crossMin: 10.4,
    crossMax: 16.4,
    startY: -0.42,
    endY: 2.35,
    baseY: -3.45,
    steps: 11
  });

  b.addBlock(-16.8, -8.6, -3.45, 2.35, -88.5, -54.5, materials.whiteTile, { climbable: true });
  b.addBlock(8.6, 16.8, -3.45, 2.35, -88.5, -54.5, materials.whiteTile, { climbable: true });

  b.addChromeHandrail({ axis: 'Z', crossPos: -8.78, startAlong: -60.1, endAlong: -55.0, deckY: 2.35, collide: true });
  b.addChromeHandrail({ axis: 'Z', crossPos: -8.78, startAlong: -65.4, endAlong: -61.9, deckY: 2.35, collide: true });
  b.addChromeHandrail({ axis: 'Z', crossPos: -8.78, startAlong: -86.0, endAlong: -70.6, deckY: 2.35, collide: true });

  b.addChromeHandrail({ axis: 'Z', crossPos: 8.78, startAlong: -65.4, endAlong: -55.0, deckY: 2.35, collide: true });
  b.addChromeHandrail({ axis: 'Z', crossPos: 8.78, startAlong: -77.1, endAlong: -70.6, deckY: 2.35, collide: true });
  b.addChromeHandrail({ axis: 'Z', crossPos: 8.78, startAlong: -86.0, endAlong: -78.9, deckY: 2.35, collide: true });

  b.addBlock(-8.6, 8.6, 1.75, 2.35, -70.4, -65.6, materials.whiteTile, {
    climbable: true,
    blocksWater: false
  });
  b.addChromeHandrail({ axis: 'X', crossPos: -65.75, startAlong: -8.4, endAlong: 8.4, deckY: 2.35, collide: true });
  b.addChromeHandrail({ axis: 'X', crossPos: -70.25, startAlong: -8.4, endAlong: 8.4, deckY: 2.35, collide: true });

  b.addChromePoolLadder({ x: -8.6, z: -61.0, normalX: 1, normalZ: 0, minY: -2.9, maxY: 2.35, topExitOffset: 0.92, deckReturn: true, style: 'chrome' });
  b.addChromePoolLadder({ x: 8.6, z: -78.0, normalX: -1, normalZ: 0, minY: -2.9, maxY: 2.35, topExitOffset: 0.92, deckReturn: true, style: 'chrome' });

  b.addGlassBlockWall({
    axis: 'Z',
    planePos: -16.8,
    startAlong: -84.0,
    endAlong: -56.0,
    minY: 5.2,
    maxY: 8.6,
    lightColor: 0xd8eef5,
    lightIntensity: 32,
    lightDistance: 24,
    inwardSign: 1
  });
  b.addGlassBlockWall({
    axis: 'Z',
    planePos: 16.8,
    startAlong: -84.0,
    endAlong: -56.0,
    minY: 5.2,
    maxY: 8.6,
    lightColor: 0xd8eef5,
    lightIntensity: 32,
    lightDistance: 24,
    inwardSign: -1
  });
  b.addLonelyDoor({ x: -16.75, floorY: 2.35, z: -68.0, normalX: 1, normalZ: 0 });
  b.addLonelyDoor({ x: 16.75, floorY: 2.35, z: -68.0, normalX: -1, normalZ: 0 });
  b.addWallVentGrate(-16.75, 4.3, -60.0, 1, 0, 1.3, 0.55);
  b.addWallVentGrate(16.75, 4.3, -76.0, -1, 0, 1.3, 0.55);

  onProgress?.(0.45, 'INSTALLING SKYLIGHT WELLS & TRANSITION CORRIDOR...');
  await yieldBuildFrame();

  b.addCeilingWithCutouts(-17.8, 17.8, -101.2, 14.5, ceilY, [
    { cx: 0, cz: -16.0, w: 6.4, d: 10.0 },
    { cx: 0, cz: -68.0, w: 7.2, d: 12.0 },
    { cx: 0, cz: -94.5, w: 6.8, d: 6.8 }
  ]);
  for (const [cz, d] of [
    [-16.0, 10.0],
    [-68.0, 12.0],
    [-94.5, 6.8]
  ] as const) {
    b.addSkylightWell({
      cx: 0,
      cz,
      w: 6.6,
      d,
      ceilingY: ceilY,
      wellHeight: 1.8,
      beamLength: 9.6,
      lightColor: 0xdcf0f6,
      lightIntensity: 88,
      lightDistance: 32,
      shaftColor: 0xd6eef6,
      shaftOpacity: 0.095,
      underwaterBeamDepth: 2.4,
      useGlassBlocks: true
    });
  }

  b.addBlock(-16.8, 16.8, -3.45, 0.85, -100.0, -88.5, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '+Z',
    startPos: -88.5,
    endPos: -81.0,
    crossMin: -4.0,
    crossMax: 4.0,
    startY: 0.85,
    endY: -3.30,
    baseY: -3.45,
    steps: 13
  });
  b.addStaircase({
    axis: '-Z',
    startPos: -88.5,
    endPos: -93.5,
    crossMin: -14.8,
    crossMax: -10.4,
    startY: 2.35,
    endY: 0.85,
    baseY: 0.2,
    steps: 5
  });
  b.addStaircase({
    axis: '-Z',
    startPos: -88.5,
    endPos: -93.5,
    crossMin: 10.4,
    crossMax: 14.8,
    startY: 2.35,
    endY: 0.85,
    baseY: 0.2,
    steps: 5
  });
  b.addBlock(-18.2, -16.8, -1.0, ceilY + 0.6, -101.2, -89.5, materials.whiteTile, { climbable: false });
  b.addBlock(16.8, 18.2, -1.0, ceilY + 0.6, -101.2, -89.5, materials.whiteTile, { climbable: false });

  b.addSmoothArchedWall({
    orientation: 'Z',
    planeMin: -101.2,
    planeMax: -99.8,
    spanMin: -17.4,
    spanMax: 17.4,
    openCenter: 0,
    openWidth: 4.8,
    floorY: 0.85,
    springY: 3.4,
    topY: ceilY + 0.6
  });

  b.addBlock(-2.6, 2.6, -0.8, 0.85, -104.0, -99.8, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '-Z',
    startPos: -104.0,
    endPos: -108.5,
    crossMin: -2.4,
    crossMax: 2.4,
    startY: 0.85,
    endY: -0.38,
    baseY: -1.0,
    steps: 5
  });
  b.addBlock(-2.6, 2.6, -1.2, -0.38, -126.0, -108.5, materials.whiteTile, { climbable: false });
  b.addBlock(-3.6, -2.4, -1.2, 4.4, -126.0, -99.8, materials.whiteTile, { climbable: false });
  b.addBlock(2.4, 3.6, -1.2, 4.4, -126.0, -99.8, materials.whiteTile, { climbable: false });
  b.addBlock(-3.6, 3.6, 3.85, 4.4, -126.0, -99.8, materials.whiteTile, { climbable: false, blocksWater: false });
  b.addBlock(-3.6, 3.6, -1.2, 4.4, -126.8, -125.8, materials.glassBlock, { climbable: false, castShadow: false });

  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.85, z: -106.0, w: 1.4, d: 2.8, color: 0xe6f8fc, intensity: 26, distance: 18 });
  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.85, z: -116.0, w: 1.4, d: 2.8, color: 0xd0f4f8, intensity: 28, distance: 20 });
  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.85, z: -123.5, w: 1.8, d: 2.2, color: 0x9ef0f5, intensity: 34, distance: 22 });

  const fieldData = await b.bakeLevelFieldAsync((t) =>
    onProgress?.(0.50 + t * 0.50, 'BAKING HYDRODYNAMIC LIGHT FIELD...')
  );

  const zones: ZoneDefinition[] = [
    { id: 's1-natatorium', label: 'STAGE 01 · GLASS-BLOCK NATATORIUM', minX: -19, maxX: 19, minZ: -40, maxZ: 16 },
    { id: 's1-basin', label: 'STAGE 01 · PERIMETER WALKWAYS & BASIN', minX: -19, maxX: 19, minZ: -89, maxZ: -40 },
    { id: 's1-atrium', label: 'STAGE 01 · FROSTED MIST ATRIUM', minX: -19, maxX: 19, minZ: -101, maxZ: -89 },
    { id: 's1-corridor', label: 'STAGE 01 · DESCENT THRESHOLD CORRIDOR', minX: -6, maxX: 6, minZ: -128, maxZ: -101 }
  ];

  return {
    index: 0,
    code: 'STAGE 01',
    title: 'GLASS-BLOCK HALLS',
    subtitle: 'LIMINAL THRESHOLD // DIFFUSED NATATORIUM',
    group: b.group,
    colliders: b.colliders,
    cylinders: b.cylinders,
    ladders: b.ladders,
    currents: b.currents,
    zones,
    exitTrigger: {
      minX: -2.6,
      maxX: 2.6,
      minY: -1.0,
      maxY: 4.0,
      minZ: -126.0,
      maxZ: -121.5,
      nextLevelIndex: 1
    },
    spawnPosition: new THREE.Vector3(0, 0.75, 10.8),
    spawnYaw: 0,
    fieldData,
    shadowRig,
    waterStyle: {
      absorption: [0.58, 0.13, 0.14],
      deepColor: [0.02, 0.18, 0.22],
      shallowColor: [0.09, 0.46, 0.50],
      reflectionTint: [0.96, 0.99, 1.0],
      waveAmplitude: 0.13,
      choppiness: 0.24,
      waveSpeed: 0.92,
      turbulence: 0.42,
      foamStrength: 0.0,
      sunDirection: [-0.45, 0.84, 0.18],
      sunSpecularColor: [0.95, 1.05, 1.10],
      specularIntensity: 0.85,
      wetBandHeight: 0.42,
      causticStrength: 0.66,
      wallBounceCaustic: 0.30,
      underwaterFogColor: 0x0a3840,
      underwaterFogDensity: 0.082,
      planeCenter: [0, -54],
      planeSize: [48, 152]
    },
    envStyle: {
      fogColor: 0xc2d4da,
      fogDensity: 0.0118,
      indirectFillColor: 0xdde8ec,
      indirectFillIntensity: 0.065,
      envPreset: 'overcast-mist',
      envIntensity: 0.25,
      baseExposure: 0.98,
      warmthGrade: 0.06,
      grimeStrength: 0.04,
      glassGlowColor: 0xdcf0f6,
      glassGlowIntensity: 0.62,
      ssaoIntensity: 0.90,
      bloomIntensity: 0.36,
      audioProfile: 'stage01-glass-halls',
      tileTint: 0xf4f8f9,
      accentTint: 0x7e99a2,
      causticTint: 0x98ebf2,
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
