import * as THREE from 'three';
import { BuiltLevel, ZoneDefinition } from '../types';
import { PoolMaterialSet } from '../tileMaterial';
import { PoolLevelBuilder, yieldBuildFrame } from './levelUtils';

export async function buildStage02PerforatedAbyss(
  materials: PoolMaterialSet,
  onProgress?: (t: number, msg: string) => void
): Promise<BuiltLevel> {
  onProgress?.(0.04, 'CONSTRUCTING ENTRY CORRIDOR & TURQUOISE SHELF...');
  const b = new PoolLevelBuilder(materials, new THREE.Color(2.15, 2.30, 2.38));

  const shadowRig = b.createShadowKeyLight({
    color: 0xd8eaf2,
    intensity: 2.45,
    offsetX: -36,
    offsetY: 96,
    offsetZ: 28,
    frustumHalfSize: 88
  });

  const abyssFloorY = -36.0;
  const wallTopY = 114.0;
  const atriumMinX = -62.0;
  const atriumMaxX = 62.0;
  const atriumSouthZ = -24.0;
  const atriumNorthZ = -180.0;

  b.addBlock(-2.6, 2.6, -1.2, -0.38, -24.0, 18.0, materials.whiteTile, { climbable: false });
  b.addBlock(-4.4, -2.4, -1.2, 4.4, -24.0, 18.0, materials.whiteTile, { climbable: false });
  b.addBlock(2.4, 4.4, -1.2, 4.4, -24.0, 18.0, materials.whiteTile, { climbable: false });
  b.addBlock(-4.4, 4.4, 3.85, 4.8, -24.0, 18.0, materials.whiteTile, { climbable: false, blocksWater: false });
  b.addBlock(-4.4, 4.4, -1.2, 4.8, 17.2, 18.6, materials.whiteTile, { climbable: false });

  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.85, z: 12.0, w: 1.5, d: 3.0, color: 0xf0f9fc, intensity: 30, distance: 20 });
  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.85, z: -2.0, w: 1.5, d: 3.0, color: 0xeaf6fb, intensity: 30, distance: 20 });
  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.85, z: -15.5, w: 1.5, d: 3.0, color: 0xdcf4fa, intensity: 36, distance: 22 });

  b.addBlock(-24.0, 24.0, abyssFloorY, -0.44, -44.0, -24.0, materials.whiteTile, { climbable: true });
  b.addBlock(-24.0, 24.0, -0.44, 0.36, -44.0, -41.6, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '-Z',
    startPos: -39.2,
    endPos: -41.6,
    crossMin: -16.0,
    crossMax: 16.0,
    startY: -0.44,
    endY: 0.36,
    baseY: -0.5,
    steps: 3
  });

  b.addBlock(atriumMinX, -24.0, abyssFloorY, -0.44, -31.5, -24.0, materials.whiteTile, { climbable: true });
  b.addBlock(24.0, atriumMaxX, abyssFloorY, -0.44, -31.5, -24.0, materials.whiteTile, { climbable: true });

  b.addRecessedUnderwaterLamp({ x: -11.0, y: -0.22, z: -24.05, normalX: 0, normalZ: -1, color: 0x70f2ee, intensity: 34, distance: 28, withBeam: false });
  b.addRecessedUnderwaterLamp({ x: 11.0, y: -0.22, z: -24.05, normalX: 0, normalZ: -1, color: 0x70f2ee, intensity: 34, distance: 28, withBeam: false });

  const shelfGlow = new THREE.PointLight(0xc8f4f8, 78, 52, 1.3);
  shelfGlow.position.set(0, 9.5, -34.0);
  b.group.add(shelfGlow);
  b.registerWaterLight(0, -34.0, 28.0, 1.0);

  b.addChromePoolLadder({ x: -9.5, z: -44.0, normalX: 0, normalZ: -1, minY: -6.5, maxY: 0.36, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });
  b.addChromePoolLadder({ x: 9.5, z: -44.0, normalX: 0, normalZ: -1, minY: -6.5, maxY: 0.36, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });

  b.addBlock(atriumMinX - 4.0, atriumMaxX + 4.0, abyssFloorY - 2.0, abyssFloorY, atriumNorthZ - 4.0, atriumSouthZ + 4.0, materials.accentTile, { climbable: false });

  onProgress?.(0.16, 'CARVING THOUSANDS OF RECESSED TILED WINDOW CAVITIES...');
  await yieldBuildFrame();

  b.addBlock(atriumMinX - 3.0, -2.4, abyssFloorY, 4.2, atriumSouthZ - 2.4, atriumSouthZ + 0.4, materials.whiteTile, { climbable: false });
  b.addBlock(2.4, atriumMaxX + 3.0, abyssFloorY, 4.2, atriumSouthZ - 2.4, atriumSouthZ + 0.4, materials.whiteTile, { climbable: false });

  b.addBlock(atriumMinX - 3.0, atriumMinX, abyssFloorY, 4.2, atriumNorthZ - 2.4, atriumSouthZ + 0.4, materials.whiteTile, { climbable: false });
  b.addBlock(atriumMaxX, atriumMaxX + 3.0, abyssFloorY, 4.2, atriumNorthZ - 2.4, atriumSouthZ + 0.4, materials.whiteTile, { climbable: false });

  b.addBlock(atriumMinX - 3.0, -4.0, abyssFloorY, 4.2, atriumNorthZ - 2.4, atriumNorthZ, materials.whiteTile, { climbable: false });
  b.addBlock(4.0, atriumMaxX + 3.0, abyssFloorY, 4.2, atriumNorthZ - 2.4, atriumNorthZ, materials.whiteTile, { climbable: false });

  b.colliders.push(
    { minX: atriumMinX - 2.4, maxX: atriumMaxX + 2.4, minY: 4.2, maxY: wallTopY, minZ: atriumSouthZ - 2.4, maxZ: atriumSouthZ, climbable: false },
    { minX: atriumMinX - 2.4, maxX: atriumMinX, minY: 4.2, maxY: 18.0, minZ: atriumNorthZ, maxZ: atriumSouthZ, climbable: false },
    { minX: atriumMinX - 2.4, maxX: atriumMinX, minY: 22.8, maxY: wallTopY, minZ: atriumNorthZ, maxZ: atriumSouthZ, climbable: false },
    { minX: atriumMinX - 2.4, maxX: atriumMinX, minY: 18.0, maxY: 22.8, minZ: -64.0, maxZ: atriumSouthZ, climbable: false },
    { minX: atriumMinX - 2.4, maxX: atriumMinX, minY: 18.0, maxY: 22.8, minZ: -136.0, maxZ: -70.0, climbable: false },
    { minX: atriumMinX - 2.4, maxX: atriumMinX, minY: 18.0, maxY: 22.8, minZ: atriumNorthZ, maxZ: -142.0, climbable: false },
    { minX: atriumMaxX, maxX: atriumMaxX + 2.4, minY: 4.2, maxY: 18.0, minZ: atriumNorthZ, maxZ: atriumSouthZ, climbable: false },
    { minX: atriumMaxX, maxX: atriumMaxX + 2.4, minY: 22.8, maxY: wallTopY, minZ: atriumNorthZ, maxZ: atriumSouthZ, climbable: false },
    { minX: atriumMaxX, maxX: atriumMaxX + 2.4, minY: 18.0, maxY: 22.8, minZ: -64.0, maxZ: atriumSouthZ, climbable: false },
    { minX: atriumMaxX, maxX: atriumMaxX + 2.4, minY: 18.0, maxY: 22.8, minZ: -136.0, maxZ: -70.0, climbable: false },
    { minX: atriumMaxX, maxX: atriumMaxX + 2.4, minY: 18.0, maxY: 22.8, minZ: atriumNorthZ, maxZ: -142.0, climbable: false },
    { minX: atriumMinX - 2.4, maxX: atriumMaxX + 2.4, minY: 4.2, maxY: 36.0, minZ: atriumNorthZ - 2.4, maxZ: atriumNorthZ, climbable: false },
    { minX: atriumMinX - 2.4, maxX: 46.0, minY: 36.0, maxY: 41.2, minZ: atriumNorthZ - 2.4, maxZ: atriumNorthZ, climbable: false },
    { minX: 54.0, maxX: atriumMaxX + 2.4, minY: 36.0, maxY: 41.2, minZ: atriumNorthZ - 2.4, maxZ: atriumNorthZ, climbable: false },
    { minX: atriumMinX - 2.4, maxX: atriumMaxX + 2.4, minY: 41.2, maxY: wallTopY, minZ: atriumNorthZ - 2.4, maxZ: atriumNorthZ, climbable: false }
  );

  b.addRecessedTiledWallGrid({
    axis: 'X',
    wallFacePos: atriumSouthZ - 0.02,
    inwardSign: -1,
    alongMin: atriumMinX,
    alongMax: atriumMaxX,
    minY: 4.2,
    maxY: wallTopY,
    stepAlong: 2.8,
    stepY: 2.8,
    winW: 1.08,
    winH: 1.08,
    recessDepth: 2.2
  });

  onProgress?.(0.24, 'CARVING NORTH & LATERAL PERFORATED MONOLITHS...');
  await yieldBuildFrame();

  b.addRecessedTiledWallGrid({
    axis: 'X',
    wallFacePos: atriumNorthZ + 0.02,
    inwardSign: 1,
    alongMin: atriumMinX,
    alongMax: atriumMaxX,
    minY: 4.2,
    maxY: wallTopY,
    stepAlong: 2.8,
    stepY: 2.8,
    winW: 1.08,
    winH: 1.08,
    recessDepth: 2.2,
    exclusions: [{ aMin: 46.0, aMax: 54.0, yMin: 35.8, yMax: 41.6, solidFill: false }]
  });

  b.addRecessedTiledWallGrid({
    axis: 'Z',
    wallFacePos: atriumMinX + 0.02,
    inwardSign: 1,
    alongMin: atriumNorthZ,
    alongMax: atriumSouthZ,
    minY: 4.2,
    maxY: wallTopY,
    stepAlong: 2.8,
    stepY: 2.8,
    winW: 1.08,
    winH: 1.08,
    recessDepth: 2.2,
    exclusions: [
      { aMin: -70.0, aMax: -64.0, yMin: 17.8, yMax: 23.0, solidFill: false },
      { aMin: -142.0, aMax: -136.0, yMin: 17.8, yMax: 23.0, solidFill: false },
      { aMin: -70.5, aMax: -63.5, yMin: 4.2, yMax: 17.8, solidFill: true },
      { aMin: -142.5, aMax: -135.5, yMin: 23.0, yMax: 36.8, solidFill: true }
    ]
  });

  b.addRecessedTiledWallGrid({
    axis: 'Z',
    wallFacePos: atriumMaxX - 0.02,
    inwardSign: -1,
    alongMin: atriumNorthZ,
    alongMax: atriumSouthZ,
    minY: 4.2,
    maxY: wallTopY,
    stepAlong: 2.8,
    stepY: 2.8,
    winW: 1.08,
    winH: 1.08,
    recessDepth: 2.2,
    exclusions: [
      { aMin: -70.0, aMax: -64.0, yMin: 17.8, yMax: 23.0, solidFill: false },
      { aMin: -142.0, aMax: -136.0, yMin: 17.8, yMax: 23.0, solidFill: false },
      { aMin: -70.5, aMax: -63.5, yMin: 4.2, yMax: 17.8, solidFill: true }
    ]
  });

  onProgress?.(0.38, 'BUILDING ABYSSAL PIERS, LADDERS & HIGH GALLERIES...');
  await yieldBuildFrame();

  for (const px of [-26.0, 26.0]) {
    b.addBlock(px - 4.2, px + 4.2, abyssFloorY, 0.72, -108.0, -99.6, materials.whiteTile, { climbable: true });
    b.addBlock(px - 3.4, px + 3.4, 0.72, 24.0, -107.2, -100.4, materials.whiteTile, { climbable: false });
    b.addChromePoolLadder({ x: px, z: -99.6, normalX: 0, normalZ: 1, minY: -5.5, maxY: 0.72, topExitOffset: 0.75, deckReturn: true, style: 'chrome' });
    b.addRecessedUnderwaterLamp({ x: px, y: -6.5, z: -99.55, normalX: 0, normalZ: 1, color: 0x4ae0dc, intensity: 36, distance: 34 });
    b.addRecessedUnderwaterLamp({ x: px, y: -13.0, z: -108.05, normalX: 0, normalZ: -1, color: 0x3ecad4, intensity: 36, distance: 34 });
  }
  b.addSmoothArchedWall({
    orientation: 'Z',
    planeMin: -106.2,
    planeMax: -101.4,
    spanMin: -22.5,
    spanMax: 22.5,
    openCenter: 0,
    openWidth: 26.0,
    floorY: -18.5,
    springY: -11.5,
    topY: -3.6,
    mat: materials.whiteTile
  });

  b.addBlock(atriumMinX, -56.5, abyssFloorY, 0.72, -78.0, -31.5, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '-Z',
    startPos: -31.5,
    endPos: -35.5,
    crossMin: atriumMinX,
    crossMax: -56.5,
    startY: -0.44,
    endY: 0.72,
    baseY: -0.7,
    steps: 4
  });
  b.addChromePoolLadder({ x: -56.5, z: -50.0, normalX: 1, normalZ: 0, minY: -5.5, maxY: 0.72, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });

  b.addBlock(56.5, atriumMaxX, abyssFloorY, 0.72, -78.0, -31.5, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '-Z',
    startPos: -31.5,
    endPos: -35.5,
    crossMin: 56.5,
    crossMax: atriumMaxX,
    startY: -0.44,
    endY: 0.72,
    baseY: -0.7,
    steps: 4
  });
  b.addChromePoolLadder({ x: 56.5, z: -50.0, normalX: -1, normalZ: 0, minY: -5.5, maxY: 0.72, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });

  b.addBlock(atriumMinX, -55.5, 17.1, 18.0, -72.0, -62.0, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addChromePoolLadder({ x: atriumMinX + 0.04, z: -67.0, normalX: 1, normalZ: 0, minY: 0.72, maxY: 18.0, topExitX: -59.5, topExitZ: -64.0, deckReturn: false, style: 'steel' });

  b.addBlock(55.5, atriumMaxX, 17.1, 18.0, -72.0, -62.0, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addChromePoolLadder({ x: atriumMaxX - 0.04, z: -67.0, normalX: -1, normalZ: 0, minY: 0.72, maxY: 18.0, topExitX: 59.5, topExitZ: -64.0, deckReturn: false, style: 'steel' });

  b.addBlock(atriumMinX - 9.0, atriumMinX, 17.1, 18.0, -145.0, -60.0, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addBlock(atriumMinX - 10.2, atriumMinX - 9.0, 17.1, 23.6, -145.0, -60.0, materials.whiteTile, { climbable: false });
  b.addBlock(atriumMinX - 10.2, atriumMinX, 22.8, 23.8, -145.0, -60.0, materials.whiteTile, { climbable: false, blocksWater: false });
  b.addBlock(atriumMinX - 10.2, atriumMinX, 17.1, 23.8, -61.0, -60.0, materials.whiteTile, { climbable: false });
  b.addBlock(atriumMinX - 10.2, atriumMinX, 17.1, 23.8, -146.0, -145.0, materials.whiteTile, { climbable: false });

  b.addBlock(atriumMaxX, atriumMaxX + 9.0, 17.1, 18.0, -145.0, -60.0, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addBlock(atriumMaxX + 9.0, atriumMaxX + 10.2, 17.1, 23.6, -145.0, -60.0, materials.whiteTile, { climbable: false });
  b.addBlock(atriumMaxX, atriumMaxX + 10.2, 22.8, 23.8, -145.0, -60.0, materials.whiteTile, { climbable: false, blocksWater: false });
  b.addBlock(atriumMaxX, atriumMaxX + 10.2, 17.1, 23.8, -61.0, -60.0, materials.whiteTile, { climbable: false });
  b.addBlock(atriumMaxX, atriumMaxX + 10.2, 17.1, 23.8, -146.0, -145.0, materials.whiteTile, { climbable: false });

  for (const gz of [-68.0, -90.0, -112.0, -134.0]) {
    b.addRecessedCeilingLight({ x: atriumMinX - 4.5, ceilingY: 22.8, z: gz, w: 1.8, d: 2.8, color: 0xe0f2f8, intensity: 28, distance: 26 });
    b.addRecessedCeilingLight({ x: atriumMaxX + 4.5, ceilingY: 22.8, z: gz, w: 1.8, d: 2.8, color: 0xe0f2f8, intensity: 28, distance: 26 });
  }

  b.addBlock(atriumMinX, -54.5, 17.1, 18.0, -144.0, -134.0, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addBlock(54.5, atriumMaxX, 17.1, 18.0, -144.0, -134.0, materials.whiteTile, { climbable: true, blocksWater: false });

  b.addBlock(atriumMinX, -55.5, 35.1, 36.0, atriumNorthZ, -132.0, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addBlock(atriumMinX, atriumMaxX, 35.1, 36.0, atriumNorthZ, -173.5, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addChromeHandrail({ axis: 'X', crossPos: -173.8, startAlong: -55.2, endAlong: 55.2, deckY: 36.0, collide: true });

  b.addChromePoolLadder({ x: atriumMinX + 0.04, z: -139.0, normalX: 1, normalZ: 0, minY: 18.0, maxY: 36.0, topExitX: -59.5, topExitZ: -135.5, deckReturn: false, style: 'steel' });

  onProgress?.(0.52, 'CONSTRUCTING NORTH DESCENT & COFFERED SKYLIGHT ROOF...');
  await yieldBuildFrame();

  b.addBlock(45.5, 55.0, 35.1, 36.0, -190.0, atriumNorthZ, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addBlock(44.5, 45.5, -1.0, 42.0, -192.0, atriumNorthZ, materials.whiteTile, { climbable: false });
  b.addBlock(55.0, 56.2, -1.0, 42.0, -192.0, atriumNorthZ, materials.whiteTile, { climbable: false });
  b.addBlock(44.5, 56.2, -1.0, 42.0, -193.2, -192.0, materials.whiteTile, { climbable: false });
  b.addBlock(44.5, 56.2, 41.2, 42.2, -193.2, atriumNorthZ, materials.whiteTile, { climbable: false, blocksWater: false });

  b.addStaircase({
    axis: '-X',
    startPos: 48.0,
    endPos: 14.0,
    crossMin: -189.0,
    crossMax: -182.5,
    startY: 36.0,
    endY: 18.0,
    baseY: 17.0,
    steps: 52
  });
  b.addBlock(5.0, 14.5, 17.0, 18.0, -189.5, -182.0, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addBlock(5.0, 56.0, 17.0, 42.0, -190.5, -189.5, materials.whiteTile, { climbable: false });
  b.addBlock(5.0, 56.0, 41.0, 42.0, -190.5, -181.5, materials.whiteTile, { climbable: false, blocksWater: false });

  b.addStaircase({
    axis: '-Z',
    startPos: -189.5,
    endPos: -214.0,
    crossMin: 5.5,
    crossMax: 13.5,
    startY: 18.0,
    endY: 0.72,
    baseY: -0.8,
    steps: 50
  });
  b.addBlock(4.5, 5.5, -1.0, 23.0, -216.0, -181.5, materials.whiteTile, { climbable: false });
  b.addBlock(13.5, 14.5, -1.0, 23.0, -216.0, -189.5, materials.whiteTile, { climbable: false });
  b.addBlock(4.5, 14.5, 22.5, 23.5, -216.0, -189.5, materials.whiteTile, { climbable: false, blocksWater: false });

  b.addBlock(-12.0, 12.0, abyssFloorY, 0.72, atriumNorthZ, -172.0, materials.whiteTile, { climbable: true });
  b.addChromePoolLadder({ x: 0.0, z: -172.0, normalX: 0, normalZ: 1, minY: -5.5, maxY: 0.72, topExitOffset: 0.9, deckReturn: true, style: 'chrome' });

  b.addBlock(-4.5, 14.5, -1.2, 0.72, -216.0, atriumNorthZ, materials.whiteTile, { climbable: true });
  b.addStaircase({
    axis: '-Z',
    startPos: -190.0,
    endPos: -196.0,
    crossMin: -3.5,
    crossMax: 3.5,
    startY: 0.72,
    endY: -0.52,
    baseY: -1.4,
    steps: 5
  });
  b.addBlock(-3.8, 3.8, -1.6, -0.52, -216.0, -196.0, materials.whiteTile, { climbable: false });
  b.addBlock(-4.8, -3.6, -1.6, 4.8, -216.0, atriumNorthZ, materials.whiteTile, { climbable: false });
  b.addBlock(3.6, 4.8, -1.6, 4.8, -216.0, -206.0, materials.whiteTile, { climbable: false });
  b.addBlock(-4.8, 4.8, 3.9, 4.8, -216.0, atriumNorthZ, materials.whiteTile, { climbable: false, blocksWater: false });
  b.addBlock(-4.8, 4.8, -1.6, 4.8, -217.2, -216.0, materials.whiteTile, { climbable: false });

  b.addRecessedCeilingLight({ x: 30.0, ceilingY: 40.9, z: -185.8, w: 2.2, d: 2.2, color: 0xe4f4fa, intensity: 36, distance: 32 });
  b.addRecessedCeilingLight({ x: 9.5, ceilingY: 22.4, z: -202.0, w: 2.2, d: 2.2, color: 0xe4f4fa, intensity: 36, distance: 30 });
  b.addRecessedCeilingLight({ x: 0.0, ceilingY: 3.9, z: -194.0, w: 1.6, d: 2.6, color: 0xc2eef6, intensity: 30, distance: 22 });
  b.addRecessedCeilingLight({ x: 0.0, ceilingY: 3.9, z: -209.0, w: 1.6, d: 2.6, color: 0xa4e6f2, intensity: 34, distance: 22 });

  b.addCofferedWhiteSkylightGrid({
    ceilingY: wallTopY,
    spacing: 22.0,
    panelSize: 15.5,
    gridHalfCount: 4,
    centerX: 0,
    centerZ: -102,
    beamDepth: 2.4,
    panelColor: new THREE.Color(1.95, 2.12, 2.20)
  });

  for (const lz of [-56, -102, -148]) {
    const atriumLight = new THREE.PointLight(0xc2dce4, 240, 155, 1.12);
    atriumLight.position.set(0, 68.0, lz);
    b.group.add(atriumLight);
    b.registerWaterLight(0, lz, 58.0, 0.78);
  }

  const fieldData = await b.bakeLevelFieldAsync(
    (t) => onProgress?.(0.60 + t * 0.40, 'BAKING ABYSSAL DEPTH & WAVE FIELD...'),
    { centerX: 0, centerZ: -102, sizeX: 164, sizeZ: 256 }
  );

  const zones: ZoneDefinition[] = [
    { id: 's2-entry', label: 'STAGE 02 · WHITE-TILED APPROACH', minX: -5, maxX: 5, minZ: -24, maxZ: 18 },
    { id: 's2-shelf', label: 'STAGE 02 · LUMINOUS TURQUOISE SHELF', minX: -26, maxX: 26, minZ: -44, maxZ: -24, maxY: 5 },
    { id: 's2-high', label: 'STAGE 02 · HIGH PERFORATED OVERLOOK', minX: -74, maxX: 74, minZ: -195, maxZ: -24, minY: 30 },
    { id: 's2-mid', label: 'STAGE 02 · RECESSED MONOLITH GALLERIES', minX: -74, maxX: 74, minZ: -195, maxZ: -24, minY: 14, maxY: 30 },
    { id: 's2-exit', label: 'STAGE 02 · FLOODED DRAIN TUNNEL', minX: -6, maxX: 16, minZ: -218, maxZ: -180, maxY: 10 },
    { id: 's2-abyss', label: 'STAGE 02 · THE PERFORATED ABYSS', minX: -68, maxX: 68, minZ: -184, maxZ: -24 }
  ];

  return {
    index: 1,
    code: 'STAGE 02',
    title: 'THE PERFORATED ABYSS',
    subtitle: 'MEGALOPHOBIC WAVE ATRIUM // BOTTOMLESS DROP-OFF',
    group: b.group,
    colliders: b.colliders,
    cylinders: b.cylinders,
    ladders: b.ladders,
    currents: b.currents,
    zones,
    exitTrigger: {
      minX: -3.8,
      maxX: 3.8,
      minY: -1.6,
      maxY: 4.2,
      minZ: -216.5,
      maxZ: -210.0,
      nextLevelIndex: 2
    },
    spawnPosition: new THREE.Vector3(0, -0.36, 13.5),
    spawnYaw: 0,
    fieldData,
    shadowRig,
    waterStyle: {
      absorption: [0.82, 0.24, 0.20],
      deepColor: [0.003, 0.022, 0.030],
      shallowColor: [0.08, 0.58, 0.60],
      reflectionTint: [0.92, 0.96, 1.0],
      waveAmplitude: 0.25,
      choppiness: 0.34,
      waveSpeed: 1.05,
      turbulence: 0.74,
      depthWaveDamping: 0.45,
      foamStrength: 0.0,
      sunDirection: [-0.30, 0.94, 0.14],
      sunSpecularColor: [0.90, 0.98, 1.04],
      specularIntensity: 0.92,
      wetBandHeight: 0.72,
      causticStrength: 0.68,
      wallBounceCaustic: 0.26,
      underwaterFogColor: 0x021216,
      underwaterFogDensity: 0.112,
      planeCenter: [0, -102],
      planeSize: [180, 260]
    },
    envStyle: {
      fogColor: 0x9ab0b8,
      fogDensity: 0.0052,
      heightMistColor: 0xd6e2e6,
      heightMistStartY: 36.0,
      heightMistEndY: 112.0,
      heightMistStrength: 0.80,
      indirectFillColor: 0xb6c8d0,
      indirectFillIntensity: 0.075,
      envPreset: 'abyss-courtyard',
      envIntensity: 0.28,
      baseExposure: 0.98,
      warmthGrade: 0.0,
      grimeStrength: 0.08,
      glassGlowColor: 0xc8eaf2,
      glassGlowIntensity: 0.55,
      ssaoIntensity: 0.95,
      bloomIntensity: 0.34,
      audioProfile: 'stage02-perforated-abyss',
      tileTint: 0xf2f7f9,
      accentTint: 0x5c727a,
      causticTint: 0x72e8e6,
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
