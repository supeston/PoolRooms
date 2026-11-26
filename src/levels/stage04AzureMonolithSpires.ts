import * as THREE from 'three';
import { BuiltLevel, ZoneDefinition } from '../types';
import { PoolMaterialSet } from '../tileMaterial';
import { PoolLevelBuilder, yieldBuildFrame } from './levelUtils';

export async function buildStage04AzureMonolithSpires(
  materials: PoolMaterialSet,
  onProgress?: (t: number, msg: string) => void
): Promise<BuiltLevel> {
  onProgress?.(0.04, 'SCULPTING COBALT MOSAIC ENTRY CANYON...');
  const b = new PoolLevelBuilder(materials, new THREE.Color(1.45, 1.65, 1.80));
  const mosaic = materials.cobaltMosaicTile;

  const shadowRig = b.createShadowKeyLight({
    color: 0xd8e6f0,
    intensity: 2.4,
    offsetX: 76,
    offsetY: 145,
    offsetZ: 54,
    frustumHalfSize: 120
  });

  const seaFloorY = -36.0;
  const deck1Y = 26.0;
  const deck2Y = 42.0;

  b.addBlock(-520, 520, seaFloorY - 2.0, seaFloorY, -540, 260, materials.accentTile, { climbable: false });

  b.addBlock(-3.4, 4.4, deck1Y - 1.0, deck1Y, 18.0, 62.0, mosaic, { climbable: true, blocksWater: false });
  b.addCurvedWallArc({
    cx: 28.0,
    cz: 40.0,
    rInner: 24.4,
    rOuter: 26.6,
    startAngle: Math.PI * 0.72,
    endAngle: Math.PI * 1.18,
    minY: deck1Y - 1.0,
    maxY: deck1Y + 28.0,
    segments: 24,
    mat: mosaic,
    collide: true
  });
  b.addCurvedWallArc({
    cx: 28.0,
    cz: 40.0,
    rInner: 30.8,
    rOuter: 33.0,
    startAngle: Math.PI * 0.72,
    endAngle: Math.PI * 1.18,
    minY: deck1Y - 1.0,
    maxY: deck1Y + 28.0,
    segments: 24,
    mat: mosaic,
    collide: true
  });
  b.addBlock(-4.5, 5.0, deck1Y, deck1Y + 28.0, 58.0, 60.2, mosaic, { climbable: false });

  b.addBlock(-3.0, 3.0, deck1Y - 1.0, deck1Y, 0.0, 24.0, mosaic, { climbable: true, blocksWater: false });

  b.addSmoothArchedWall({
    orientation: 'Z',
    planeMin: 18.8,
    planeMax: 21.6,
    spanMin: -5.5,
    spanMax: 5.5,
    openCenter: 0,
    openWidth: 5.4,
    floorY: deck1Y,
    springY: deck1Y + 2.8,
    topY: deck1Y + 26.0,
    mat: mosaic
  });

  const alphaR = 20.0;
  const alphaH = 148.0;
  b.addHollowCylinderShell({
    cx: 0,
    cz: 0,
    radius: alphaR,
    thickness: 2.0,
    minY: seaFloorY,
    maxY: deck1Y + 6.5,
    segments: 60,
    mat: mosaic,
    openings: [
      { angle: Math.PI * 0.5, halfArc: 0.16, minY: deck1Y, maxY: deck1Y + 5.6 },
      { angle: -Math.PI * 0.5, halfArc: 0.16, minY: deck1Y, maxY: deck1Y + 5.6 },
      { angle: 0.0, halfArc: 0.16, minY: deck1Y, maxY: deck1Y + 5.6 }
    ],
    collide: true
  });
  b.addCylinderColumn(0, 0, 12.2, seaFloorY, alphaH, mosaic, true, true, false, 40);
  b.addRecessedCylinderWallGrid({
    cx: 0,
    cz: 0,
    radius: alphaR + 2.0,
    facingInward: false,
    minY: deck1Y + 6.5,
    maxY: alphaH,
    stepY: 4.2,
    countPerRing: 36,
    winW: 1.55,
    winH: 1.85,
    recessDepth: 2.4,
    mat: mosaic
  });
  b.addCircularWalkwayRing({
    cx: 0,
    cz: 0,
    rInner: 12.2,
    rOuter: alphaR + 0.15,
    minY: deck1Y - 0.85,
    maxY: deck1Y,
    segments: 56,
    mat: mosaic,
    collide: true,
    blocksWater: false
  });
  b.addCircularWalkwayRing({
    cx: 0,
    cz: 0,
    rInner: alphaR + 1.8,
    rOuter: alphaR + 6.8,
    minY: deck1Y - 0.85,
    maxY: deck1Y,
    startAngle: -Math.PI * 0.65,
    endAngle: Math.PI * 0.45,
    segments: 48,
    mat: mosaic,
    collide: true,
    blocksWater: false
  });

  b.addCircularWalkwayRing({
    cx: 0,
    cz: 0,
    rInner: alphaR - 0.2,
    rOuter: alphaR + 2.3,
    minY: deck1Y + 6.2,
    maxY: deck1Y + 6.8,
    segments: 48,
    mat: mosaic,
    collide: false
  });
  for (const ry of [48, 72, 96, 120, 140]) {
    b.addCircularWalkwayRing({
      cx: 0,
      cz: 0,
      rInner: alphaR + 1.8,
      rOuter: alphaR + 5.2,
      minY: ry - 0.8,
      maxY: ry,
      segments: 40,
      mat: mosaic,
      collide: false
    });
  }

  onProgress?.(0.18, 'BRIDGING SKYWALK I & 50-STORY SPIRE BETA...');
  await yieldBuildFrame();

  b.addBlock(-2.8, 2.8, deck1Y - 0.95, deck1Y, -72.0, -21.5, mosaic, { climbable: true, blocksWater: false });
  b.addBlock(-3.0, -2.5, deck1Y, deck1Y + 0.62, -72.0, -21.5, mosaic, { climbable: false, blocksWater: false });
  b.addBlock(2.5, 3.0, deck1Y, deck1Y + 0.62, -72.0, -21.5, mosaic, { climbable: false, blocksWater: false });
  b.addSmoothArchedWall({
    orientation: 'X',
    planeMin: -2.6,
    planeMax: 2.6,
    spanMin: -72.0,
    spanMax: -21.5,
    openCenter: -46.75,
    openWidth: 42.0,
    floorY: deck1Y - 12.5,
    springY: deck1Y - 10.0,
    topY: deck1Y - 0.9,
    mat: mosaic,
    collide: false
  });

  const betaZ = -96.0;
  const betaR = 24.0;
  const betaH = 176.0;
  const betaOpenings: Array<{ angle: number; halfArc: number; minY: number; maxY: number }> = [
    { angle: Math.PI * 0.5, halfArc: 0.14, minY: deck1Y, maxY: deck1Y + 5.8 },
    { angle: Math.PI, halfArc: 0.14, minY: deck2Y, maxY: deck2Y + 5.8 }
  ];
  for (let w = 0; w < 12; w++) {
    const a = (w / 12) * Math.PI * 2 + 0.26;
    betaOpenings.push({ angle: a, halfArc: 0.085, minY: deck1Y + 1.1, maxY: deck1Y + 6.8 });
    betaOpenings.push({ angle: a, halfArc: 0.085, minY: deck2Y + 1.1, maxY: deck2Y + 6.8 });
  }

  b.addHollowCylinderShell({
    cx: 0,
    cz: betaZ,
    radius: betaR,
    thickness: 2.0,
    minY: seaFloorY,
    maxY: deck2Y + 8.5,
    segments: 64,
    mat: mosaic,
    openings: betaOpenings,
    collide: true
  });
  b.addCylinderColumn(0, betaZ, 15.6, seaFloorY, betaH, mosaic, true, true, false, 44);
  b.addRecessedCylinderWallGrid({
    cx: 0,
    cz: betaZ,
    radius: betaR + 2.0,
    facingInward: false,
    minY: deck2Y + 8.5,
    maxY: betaH,
    stepY: 4.2,
    countPerRing: 42,
    winW: 1.65,
    winH: 1.90,
    recessDepth: 2.5,
    mat: mosaic
  });

  b.addCircularWalkwayRing({
    cx: 0,
    cz: betaZ,
    rInner: 15.6,
    rOuter: betaR + 0.15,
    minY: deck1Y - 0.85,
    maxY: deck1Y,
    segments: 60,
    mat: mosaic,
    collide: true,
    blocksWater: false
  });
  b.addCircularWalkwayRing({
    cx: 0,
    cz: betaZ,
    rInner: 15.6,
    rOuter: betaR + 0.15,
    minY: deck2Y - 0.85,
    maxY: deck2Y,
    startAngle: Math.PI * 0.45,
    endAngle: Math.PI * 1.65,
    segments: 44,
    mat: mosaic,
    collide: true,
    blocksWater: false
  });

  b.addSpiralStaircase({
    cx: 0,
    cz: betaZ,
    coreRadius: 15.7,
    outerRadius: betaR - 0.15,
    startAngle: -Math.PI * 0.40,
    totalAngle: Math.PI * 0.88,
    startY: deck1Y,
    endY: deck2Y,
    steps: 44,
    mat: mosaic
  });

  b.addCircularWalkwayRing({
    cx: 0,
    cz: betaZ,
    rInner: betaR - 0.2,
    rOuter: betaR + 2.3,
    minY: deck2Y + 8.2,
    maxY: deck2Y + 8.8,
    segments: 48,
    mat: mosaic,
    collide: false
  });
  for (const ry of [deck1Y, deck2Y, 72, 102, 132, 162]) {
    b.addCircularWalkwayRing({
      cx: 0,
      cz: betaZ,
      rInner: betaR + 1.8,
      rOuter: betaR + 5.6,
      minY: ry - 0.85,
      maxY: ry,
      segments: 44,
      mat: mosaic,
      collide: false
    });
  }

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const pt = new THREE.PointLight(0xc2dcec, 42, 34, 1.35);
    pt.position.set(Math.cos(a) * 19.6, deck1Y + 5.2, betaZ + Math.sin(a) * 19.6);
    b.group.add(pt);
  }

  onProgress?.(0.34, 'BRIDGING SKYWALK II & 55-STORY SPIRE GAMMA...');
  await yieldBuildFrame();

  const gammaX = -84.0;
  const gammaZ = -172.0;
  const gammaR = 24.0;
  const gammaH = 194.0;

  b.addBlock(gammaX - 3.2, -23.5, deck2Y - 0.95, deck2Y, betaZ - 2.8, betaZ + 2.8, mosaic, { climbable: true, blocksWater: false });
  b.addBlock(gammaX - 3.2, -23.5, deck2Y, deck2Y + 0.62, betaZ - 3.0, betaZ - 2.5, mosaic, { climbable: false, blocksWater: false });
  b.addBlock(gammaX + 3.2, -23.5, deck2Y, deck2Y + 0.62, betaZ + 2.5, betaZ + 3.0, mosaic, { climbable: false, blocksWater: false });

  b.addBlock(gammaX - 3.0, gammaX + 3.0, deck2Y - 0.95, deck2Y, gammaZ + gammaR - 0.5, betaZ + 2.8, mosaic, { climbable: true, blocksWater: false });
  b.addBlock(gammaX - 3.2, gammaX - 2.7, deck2Y, deck2Y + 0.62, gammaZ + gammaR - 0.5, betaZ + 2.8, mosaic, { climbable: false, blocksWater: false });
  b.addBlock(gammaX + 2.7, gammaX + 3.2, deck2Y, deck2Y + 0.62, gammaZ + gammaR - 0.5, betaZ - 2.8, mosaic, { climbable: false, blocksWater: false });

  const gammaOpenings: Array<{ angle: number; halfArc: number; minY: number; maxY: number }> = [
    { angle: Math.PI * 0.5, halfArc: 0.16, minY: deck2Y, maxY: deck2Y + 5.8 },
    { angle: -Math.PI * 0.5, halfArc: 0.16, minY: 1.8, maxY: 7.4 },
    { angle: Math.PI, halfArc: 0.16, minY: deck2Y, maxY: deck2Y + 5.8 }
  ];
  for (let w = 0; w < 10; w++) {
    const a = (w / 10) * Math.PI * 2 + 0.31;
    gammaOpenings.push({ angle: a, halfArc: 0.09, minY: deck2Y + 1.1, maxY: deck2Y + 6.8 });
  }

  b.addHollowCylinderShell({
    cx: gammaX,
    cz: gammaZ,
    radius: gammaR,
    thickness: 2.0,
    minY: seaFloorY,
    maxY: deck2Y + 8.5,
    segments: 64,
    mat: mosaic,
    openings: gammaOpenings,
    collide: true
  });
  b.addCylinderColumn(gammaX, gammaZ, 15.2, seaFloorY, gammaH, mosaic, true, true, false, 44);
  b.addRecessedCylinderWallGrid({
    cx: gammaX,
    cz: gammaZ,
    radius: gammaR + 2.0,
    facingInward: false,
    minY: deck2Y + 8.5,
    maxY: gammaH,
    stepY: 4.2,
    countPerRing: 42,
    winW: 1.65,
    winH: 1.90,
    recessDepth: 2.5,
    mat: mosaic
  });

  b.addCircularWalkwayRing({
    cx: gammaX,
    cz: gammaZ,
    rInner: 15.2,
    rOuter: gammaR + 0.15,
    minY: deck2Y - 0.85,
    maxY: deck2Y,
    startAngle: -Math.PI * 0.05,
    endAngle: Math.PI * 1.38,
    segments: 44,
    mat: mosaic,
    collide: true,
    blocksWater: false
  });
  b.addCircularWalkwayRing({
    cx: gammaX,
    cz: gammaZ,
    rInner: gammaR + 1.8,
    rOuter: gammaR + 7.2,
    minY: deck2Y - 0.85,
    maxY: deck2Y,
    startAngle: Math.PI * 0.65,
    endAngle: Math.PI * 1.35,
    segments: 32,
    mat: mosaic,
    collide: true,
    blocksWater: false
  });

  const midGammaY = 22.0;
  b.addSpiralStaircase({
    cx: gammaX,
    cz: gammaZ,
    coreRadius: 15.3,
    outerRadius: gammaR - 0.15,
    startAngle: Math.PI * 1.36,
    totalAngle: Math.PI * 0.86,
    startY: deck2Y,
    endY: midGammaY,
    steps: 52,
    mat: mosaic
  });
  b.addCircularWalkwayRing({
    cx: gammaX,
    cz: gammaZ,
    rInner: 15.2,
    rOuter: gammaR + 0.15,
    minY: midGammaY - 0.85,
    maxY: midGammaY,
    startAngle: Math.PI * 0.20,
    endAngle: Math.PI * 0.76,
    segments: 24,
    mat: mosaic,
    collide: true,
    blocksWater: false
  });
  b.addSpiralStaircase({
    cx: gammaX,
    cz: gammaZ,
    coreRadius: 15.3,
    outerRadius: gammaR - 0.15,
    startAngle: Math.PI * 0.72,
    totalAngle: Math.PI * 0.82,
    startY: midGammaY,
    endY: 2.0,
    steps: 52,
    mat: mosaic
  });
  b.addCircularWalkwayRing({
    cx: gammaX,
    cz: gammaZ,
    rInner: 15.2,
    rOuter: gammaR + 0.15,
    minY: 0.4,
    maxY: 2.0,
    segments: 56,
    mat: mosaic,
    collide: true,
    blocksWater: true
  });

  b.addCircularWalkwayRing({
    cx: gammaX,
    cz: gammaZ,
    rInner: gammaR - 0.2,
    rOuter: gammaR + 2.3,
    minY: deck2Y + 8.2,
    maxY: deck2Y + 8.8,
    segments: 48,
    mat: mosaic,
    collide: false
  });
  for (const ry of [74, 108, 142, 176]) {
    b.addCircularWalkwayRing({
      cx: gammaX,
      cz: gammaZ,
      rInner: gammaR + 1.8,
      rOuter: gammaR + 5.8,
      minY: ry - 0.85,
      maxY: ry,
      segments: 40,
      mat: mosaic,
      collide: false
    });
  }

  onProgress?.(0.50, 'ERECTING 35-55 STORY COBALT SKYSCRAPER SEA...');
  await yieldBuildFrame();

  const deltaX = gammaX;
  const deltaZ = -242.0;
  const deltaR = 16.0;
  b.addBlock(gammaX - 3.2, gammaX + 3.2, 0.4, 2.0, deltaZ + deltaR - 0.5, gammaZ - gammaR + 0.5, mosaic, { climbable: true, blocksWater: true });

  b.addHollowCylinderShell({
    cx: deltaX,
    cz: deltaZ,
    radius: deltaR,
    thickness: 2.0,
    minY: seaFloorY,
    maxY: 16.0,
    segments: 52,
    mat: mosaic,
    openings: [{ angle: Math.PI * 0.5, halfArc: 0.22, minY: 1.4, maxY: 7.4 }],
    collide: true
  });
  b.addRecessedCylinderWallGrid({
    cx: deltaX,
    cz: deltaZ,
    radius: deltaR + 2.0,
    facingInward: false,
    minY: 16.0,
    maxY: 132.0,
    stepY: 4.4,
    countPerRing: 32,
    winW: 1.5,
    winH: 1.85,
    recessDepth: 2.2,
    mat: mosaic
  });
  b.addCircularWalkwayRing({
    cx: deltaX,
    cz: deltaZ,
    rInner: deltaR - 0.2,
    rOuter: deltaR + 2.3,
    minY: 15.7,
    maxY: 16.3,
    segments: 40,
    mat: mosaic,
    collide: false
  });
  b.addCircularWalkwayRing({
    cx: deltaX,
    cz: deltaZ,
    rInner: 6.4,
    rOuter: deltaR + 0.15,
    minY: -16.0,
    maxY: 2.0,
    segments: 44,
    mat: mosaic,
    collide: true,
    blocksWater: true
  });
  b.addChromePoolLadder({
    x: deltaX,
    z: deltaZ + 6.4,
    normalX: 0,
    normalZ: -1,
    minY: -5.5,
    maxY: 2.0,
    topExitOffset: 1.0,
    deckReturn: true,
    style: 'chrome'
  });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    b.addRecessedUnderwaterLamp({
      x: deltaX + Math.cos(a) * 6.35,
      y: -7.5,
      z: deltaZ + Math.sin(a) * 6.35,
      normalX: -Math.cos(a),
      normalZ: -Math.sin(a),
      color: 0x54e4f4,
      intensity: 44,
      distance: 28
    });
  }
  const deltaLight = new THREE.PointLight(0x88e6f4, 62, 46, 1.3);
  deltaLight.position.set(deltaX, 16.0, deltaZ);
  b.group.add(deltaLight);

  const horizonSpires: ReadonlyArray<[number, number, number, number]> = [
    [-74, 18, 17, 134],
    [68, -14, 21, 162],
    [88, -82, 19, 178],
    [-64, -48, 16, 126],
    [66, -148, 24, 194],
    [136, -142, 22, 152],
    [-148, -84, 25, 184],
    [-162, -164, 21, 158],
    [-26, -196, 19, 144],
    [46, -224, 27, 198],
    [128, -238, 22, 168],
    [-156, -248, 24, 188],
    [-218, -118, 28, 192],
    [-228, -218, 23, 164],
    [192, -62, 25, 176],
    [206, -178, 28, 196],
    [176, -310, 24, 162],
    [68, -328, 26, 184],
    [-28, -344, 22, 154],
    [-172, -356, 27, 194],
    [-268, -316, 25, 174],
    [-276, -42, 22, 148],
    [148, 54, 20, 138],
    [-152, 46, 22, 146],
    [248, -288, 29, 198],
    [-318, -186, 28, 188],
    [-212, -418, 26, 176],
    [28, -428, 30, 196],
    [146, -408, 25, 172],
    [-108, -424, 24, 166]
  ];

  for (let si = 0; si < horizonSpires.length; si++) {
    const [sx, sz, sr, sh] = horizonSpires[si];
    b.addCylinderColumn(sx, sz, sr - 2.3, seaFloorY, sh, mosaic, false, false, false, 24);
    b.addRecessedCylinderWallGrid({
      cx: sx,
      cz: sz,
      radius: sr,
      facingInward: false,
      minY: -6.0,
      maxY: sh,
      stepY: 6.4,
      countPerRing: Math.max(16, Math.round(sr * 1.15)),
      winW: 2.1,
      winH: 2.5,
      recessDepth: 2.3,
      mat: mosaic
    });
    const tierStep = 26.0;
    for (let ty = 22.0; ty < sh - 8.0; ty += tierStep) {
      b.addCircularWalkwayRing({
        cx: sx,
        cz: sz,
        rInner: sr - 0.1,
        rOuter: sr + 3.4,
        minY: ty - 0.85,
        maxY: ty,
        segments: 24,
        mat: mosaic,
        collide: false,
        castShadow: false
      });
    }
    if (si % 6 === 5) {
      onProgress?.(0.52 + (si / horizonSpires.length) * 0.18, 'CARVING RECESSED WINDOWS ON COBALT MONOLITHS...');
      await yieldBuildFrame();
    }
  }

  b.setGlobalWaterIllumination(0.66);

  const fieldData = await b.bakeLevelFieldAsync(
    (t) => onProgress?.(0.72 + t * 0.28, 'BAKING OCEANIC HORIZON FIELD...'),
    { centerX: -34, centerZ: -128, sizeX: 420, sizeZ: 440 }
  );

  const zones: ZoneDefinition[] = [
    { id: 's4-canyon', label: 'STAGE 04 · COBALT MOSAIC CANYON', minX: -16, maxX: 16, minZ: 18, maxZ: 64 },
    { id: 's4-alpha', label: 'STAGE 04 · SPIRE ALPHA CANTILEVER (26M)', minX: -32, maxX: 32, minZ: -32, maxZ: 24 },
    { id: 's4-beta', label: 'STAGE 04 · SPIRE BETA RING-CORRIDOR', minX: -34, maxX: 34, minZ: -128, maxZ: -64 },
    { id: 's4-gamma', label: 'STAGE 04 · SPIRE GAMMA OVERLOOK (42M)', minX: -120, maxX: -48, minZ: -206, maxZ: -138 },
    { id: 's4-delta', label: 'STAGE 04 · SUBMERGED DESCENT SHAFT', minX: -108, maxX: -60, minZ: -268, maxZ: -216 },
    { id: 's4-sea', label: 'STAGE 04 · THE AZURE MONOLITH SPIRES', minX: -420, maxX: 420, minZ: -460, maxZ: 220 }
  ];

  return {
    index: 3,
    code: 'STAGE 04',
    title: 'THE AZURE MONOLITH SPIRES',
    subtitle: 'DROWNED OPEN-AIR HORIZON // 50-STORY COBALT SEA',
    group: b.group,
    colliders: b.colliders,
    cylinders: b.cylinders,
    ladders: b.ladders,
    currents: b.currents,
    zones,
    exitTrigger: {
      minX: deltaX - 6.8,
      maxX: deltaX + 6.8,
      minY: -16.0,
      maxY: -5.5,
      minZ: deltaZ - 6.8,
      maxZ: deltaZ + 6.8,
      nextLevelIndex: 4
    },
    spawnPosition: new THREE.Vector3(0.4, deck1Y, 52.0),
    spawnYaw: 0,
    fieldData,
    shadowRig,
    waterStyle: {
      absorption: [0.76, 0.28, 0.16],
      deepColor: [0.005, 0.018, 0.036],
      shallowColor: [0.020, 0.082, 0.130],
      reflectionTint: [0.92, 0.96, 1.0],
      waveAmplitude: 0.30,
      choppiness: 0.35,
      waveSpeed: 1.06,
      turbulence: 0.76,
      depthWaveDamping: 0.0,
      foamStrength: 0.0,
      sunDirection: [0.35, 0.72, 0.28],
      sunSpecularColor: [0.85, 0.92, 0.98],
      specularIntensity: 0.78,
      wetBandHeight: 0.82,
      causticStrength: 0.48,
      wallBounceCaustic: 0.20,
      underwaterFogColor: 0x031826,
      underwaterFogDensity: 0.088,
      planeCenter: [-35, -130],
      planeSize: [1100, 1100]
    },
    envStyle: {
      fogColor: 0x8a9aa4,
      fogDensity: 0.0028,
      heightMistColor: 0x9aa9b2,
      heightMistStartY: 95.0,
      heightMistEndY: 210.0,
      heightMistStrength: 0.42,
      indirectFillColor: 0xb2c2cc,
      indirectFillIntensity: 0.16,
      envPreset: 'azure-horizon',
      envIntensity: 0.38,
      baseExposure: 1.02,
      warmthGrade: 0.0,
      grimeStrength: 0.06,
      glassGlowColor: 0x9ce2f4,
      glassGlowIntensity: 0.55,
      ssaoIntensity: 0.84,
      bloomIntensity: 0.28,
      audioProfile: 'stage04-azure-spires',
      hasSkyDome: true,
      skyTopColor: 0x5c6a74,
      skyHorizonColor: 0x9aa9b2,
      skySunColor: 0xd0dce2,
      skySunDir: [0.35, 0.72, 0.28],
      skyCloudCoverage: 1.0,
      tileTint: 0xeaf4fa,
      accentTint: 0x264b6e,
      causticTint: 0x72d8f0,
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
