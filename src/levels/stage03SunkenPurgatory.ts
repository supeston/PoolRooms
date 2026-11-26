import * as THREE from 'three';
import { BuiltLevel, ZoneDefinition } from '../types';
import { PoolMaterialSet } from '../tileMaterial';
import { PoolLevelBuilder, yieldBuildFrame } from './levelUtils';

export async function buildStage03SunkenPurgatory(
  materials: PoolMaterialSet,
  onProgress?: (t: number, msg: string) => void
): Promise<BuiltLevel> {
  onProgress?.(0.04, 'EXCAVATING 54-STORY CYLINDRICAL SILO...');
  const b = new PoolLevelBuilder(materials, new THREE.Color(2.25, 2.38, 2.46));

  const shadowRig = b.createShadowKeyLight({
    color: 0xe2f0f6,
    intensity: 2.35,
    offsetX: -18,
    offsetY: 148,
    offsetZ: 18,
    frustumHalfSize: 72
  });

  const siloR = 48.0;
  const balconyInR = 41.2;
  const corridorDepth = 11.0;
  const abyssY = -36.0;
  const ceilY = 162.0;
  const ringHeights = [16.0, 36.0, 56.0, 76.0, 96.0];
  const doorBandH = 5.2;

  b.addBlock(-2.6, 2.6, -1.8, -0.45, siloR - 0.5, siloR + 18.0, materials.whiteTile, { climbable: false });
  b.addBlock(-4.2, -2.4, -1.8, 3.8, siloR - 0.5, siloR + 18.0, materials.whiteTile, { climbable: false });
  b.addBlock(2.4, 4.2, -1.8, 3.8, siloR - 0.5, siloR + 18.0, materials.whiteTile, { climbable: false });
  b.addBlock(-4.2, 4.2, 3.05, 4.0, siloR - 0.5, siloR + 18.0, materials.whiteTile, { climbable: false, blocksWater: false });
  b.addBlock(-4.2, 4.2, -1.8, 4.0, siloR + 17.2, siloR + 18.6, materials.whiteTile, { climbable: false });
  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.05, z: siloR + 12.0, w: 1.5, d: 2.4, color: 0xecf6fa, intensity: 26, distance: 18 });
  b.addRecessedCeilingLight({ x: 0, ceilingY: 3.05, z: siloR + 3.5, w: 1.5, d: 2.4, color: 0xe2f3fa, intensity: 28, distance: 18 });

  b.addBlock(-siloR - 6.0, siloR + 6.0, abyssY - 2.0, abyssY, -siloR - 6.0, siloR + 6.0, materials.accentTile, { climbable: false });

  b.addCircularWalkwayRing({
    cx: 0,
    cz: 0,
    rInner: balconyInR + 2.0,
    rOuter: siloR + 0.4,
    minY: abyssY,
    maxY: -0.36,
    segments: 72,
    mat: materials.whiteTile,
    collide: true,
    blocksWater: false
  });

  b.addHollowCylinderShell({
    cx: 0,
    cz: 0,
    radius: siloR,
    thickness: 2.4,
    minY: abyssY,
    maxY: 4.4,
    segments: 72,
    mat: materials.whiteTile,
    openings: [{ angle: Math.PI * 0.5, halfArc: 0.056, minY: -1.6, maxY: 3.2 }],
    collide: true,
    castShadow: false
  });
  b.addCurvedWallArc({
    cx: 0,
    cz: 0,
    rInner: siloR - 0.06,
    rOuter: siloR + 0.65,
    startAngle: 0,
    endAngle: Math.PI * 2,
    minY: 4.25,
    maxY: 4.55,
    segments: 72,
    mat: materials.whiteTile,
    collide: false,
    castShadow: false
  });

  const mainShellOpenings: Array<{ angle: number; halfArc: number; minY: number; maxY: number }> = [];
  const corridorCount = 24;
  for (let ri = 0; ri < ringHeights.length; ri++) {
    const ry = ringHeights[ri];
    for (let ci = 0; ci < corridorCount; ci++) {
      const ang = (ci / corridorCount) * Math.PI * 2;
      mainShellOpenings.push({
        angle: ang,
        halfArc: 0.025,
        minY: ry - 0.1,
        maxY: ry + 3.55
      });
    }
  }

  b.cylinders.push({
    cx: 0,
    cz: 0,
    radius: siloR,
    minY: 4.4,
    maxY: ceilY + 2.0,
    inverted: true,
    thickness: 2.2,
    openings: mainShellOpenings
  });

  b.cylinders.push({
    cx: 0,
    cz: 0,
    radius: siloR + corridorDepth - 0.4,
    minY: 14.0,
    maxY: 104.0,
    inverted: true,
    thickness: 1.6,
    openings: [
      { angle: 0.0, halfArc: 0.06, minY: 35.5, maxY: 40.5 },
      { angle: 0.0, halfArc: 0.06, minY: 55.5, maxY: 60.5 }
    ]
  });

  onProgress?.(0.18, 'CARVING RECESSED TILED WINDOW BANDS & BALCONY CORRIDORS...');
  await yieldBuildFrame();

  const windowBands: Array<[number, number]> = [
    [4.4, ringHeights[0] - 0.85],
    [ringHeights[0] + doorBandH, ringHeights[1] - 0.85],
    [ringHeights[1] + doorBandH, ringHeights[2] - 0.85],
    [ringHeights[2] + doorBandH, ringHeights[3] - 0.85],
    [ringHeights[3] + doorBandH, ringHeights[4] - 0.85],
    [ringHeights[4] + doorBandH, ceilY]
  ];

  for (let bi = 0; bi < windowBands.length; bi++) {
    const [y0, y1] = windowBands[bi];
    b.addRecessedCylinderWallGrid({
      cx: 0,
      cz: 0,
      radius: siloR,
      facingInward: true,
      minY: y0,
      maxY: y1,
      stepY: 3.0,
      countPerRing: 72,
      winW: 1.25,
      winH: 1.60,
      recessDepth: 2.2,
      mat: materials.whiteTile,
      pinpointLightEveryN: 13,
      pinpointColor: 0xf4fafc
    });
    if (bi === 3) {
      onProgress?.(0.28, 'CARVING UPPER SILO TIERS...');
      await yieldBuildFrame();
    }
  }

  const lampRingGeo = new THREE.CircleGeometry(0.58, 20);
  lampRingGeo.rotateX(Math.PI / 2);
  const lampBezelGeo = new THREE.RingGeometry(0.58, 0.68, 20);
  lampBezelGeo.rotateX(Math.PI / 2);
  const lampMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(2.2, 2.35, 2.45),
    toneMapped: false
  });
  b.disposables.push(lampRingGeo, lampBezelGeo, lampMat);

  const lampMatrices: THREE.Matrix4[] = [];
  const dummy = new THREE.Object3D();

  for (let ri = 0; ri < ringHeights.length; ri++) {
    const ry = ringHeights[ri];

    b.addCircularWalkwayRing({
      cx: 0,
      cz: 0,
      rInner: balconyInR,
      rOuter: siloR + 0.06,
      minY: ry - 0.85,
      maxY: ry,
      segments: 72,
      mat: materials.whiteTile,
      collide: true,
      blocksWater: false
    });
    b.addCircularWalkwayRing({
      cx: 0,
      cz: 0,
      rInner: siloR - 0.2,
      rOuter: siloR + corridorDepth + 0.5,
      minY: ry - 0.85,
      maxY: ry,
      segments: 48,
      mat: materials.whiteTile,
      collide: true,
      blocksWater: false,
      visual: false
    });
    b.addCurvedWallArc({
      cx: 0,
      cz: 0,
      rInner: siloR - 0.08,
      rOuter: siloR + 0.65,
      startAngle: 0,
      endAngle: Math.PI * 2,
      minY: ry - 0.88,
      maxY: ry - 0.45,
      segments: 72,
      mat: materials.whiteTile,
      collide: false,
      castShadow: false
    });
    b.addCurvedWallArc({
      cx: 0,
      cz: 0,
      rInner: siloR - 0.08,
      rOuter: siloR + 0.65,
      startAngle: 0,
      endAngle: Math.PI * 2,
      minY: ry + doorBandH - 0.14,
      maxY: ry + doorBandH + 0.16,
      segments: 72,
      mat: materials.whiteTile,
      collide: false,
      castShadow: false
    });

    const openAngles = ri === 1 || ri === 2 ? [{ angle: 0.0, halfArc: 0.08 }] : [];
    b.addRecessedBalconyCorridorRing({
      cx: 0,
      cz: 0,
      radius: siloR,
      floorY: ry,
      bandHeight: doorBandH,
      count: corridorCount,
      doorW: 1.95,
      doorH: 3.45,
      corridorDepth,
      mat: materials.whiteTile,
      openAngles
    });

    const lampCount = 36;
    const lampR = (balconyInR + siloR) * 0.5;
    for (let li = 0; li < lampCount; li++) {
      const ang = ((li + 0.5) / lampCount) * Math.PI * 2;
      dummy.position.set(Math.cos(ang) * lampR, ry - 0.87, Math.sin(ang) * lampR);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      lampMatrices.push(dummy.matrix.clone());
    }

    for (let pi = 0; pi < 6; pi++) {
      const pAng = (pi / 6) * Math.PI * 2 + ri * 0.3;
      const pt = new THREE.PointLight(0xe4f2f8, 48, 38, 1.32);
      pt.position.set(Math.cos(pAng) * lampR, ry + 3.6, Math.sin(pAng) * lampR);
      b.group.add(pt);
    }
  }

  const instLamps = new THREE.InstancedMesh(lampRingGeo, lampMat, lampMatrices.length);
  const instBezels = new THREE.InstancedMesh(lampBezelGeo, materials.chromeMetal, lampMatrices.length);
  for (let i = 0; i < lampMatrices.length; i++) {
    instLamps.setMatrixAt(i, lampMatrices[i]);
    instBezels.setMatrixAt(i, lampMatrices[i]);
  }
  instLamps.instanceMatrix.needsUpdate = true;
  instBezels.instanceMatrix.needsUpdate = true;
  instLamps.frustumCulled = false;
  instBezels.frustumCulled = false;
  b.group.add(instBezels, instLamps);

  onProgress?.(0.42, 'ANCHORING LONG WEATHERED-STEEL VERTICAL LADDERS...');
  await yieldBuildFrame();

  const ladderAngles = [0.30 * Math.PI, 0.78 * Math.PI, 1.26 * Math.PI, 1.74 * Math.PI, 0.14 * Math.PI];
  for (let li = 0; li < ringHeights.length; li++) {
    const ang = ladderAngles[li];
    const minY = li === 0 ? -4.0 : ringHeights[li - 1];
    const maxY = ringHeights[li];
    const cosA = Math.cos(ang);
    const sinA = Math.sin(ang);

    const pilasterR = balconyInR + 0.65;
    const pilX = cosA * pilasterR;
    const pilZ = sinA * pilasterR;
    const pilMinY = li === 0 ? abyssY : minY - 0.85;

    b.addCylinderColumn(pilX, pilZ, 0.72, pilMinY, maxY, materials.whiteTile, true, true, false, 18);

    const mountX = cosA * (pilasterR - 0.68);
    const mountZ = sinA * (pilasterR - 0.68);
    const exitR = balconyInR + 1.85;

    b.addChromePoolLadder({
      x: mountX,
      z: mountZ,
      normalX: -cosA,
      normalZ: -sinA,
      minY,
      maxY,
      topExitX: cosA * exitR,
      topExitZ: sinA * exitR,
      deckReturn: true,
      style: 'steel'
    });
  }

  onProgress?.(0.52, 'CONSTRUCTING NON-EUCLIDEAN FLOATING CUBE VOID...');
  await yieldBuildFrame();

  const voidLowY = ringHeights[1];
  const voidHighY = ringHeights[2];

  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidLowY - 0.8, voidLowY, -2.2, 2.2, materials.whiteTile, {
    climbable: true,
    blocksWater: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });
  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidLowY, voidLowY + 4.4, -3.2, -2.0, materials.whiteTile, {
    climbable: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });
  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidLowY, voidLowY + 4.4, 2.0, 3.2, materials.whiteTile, {
    climbable: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });
  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidLowY + 3.6, voidLowY + 4.4, -3.2, 3.2, materials.whiteTile, {
    climbable: false,
    blocksWater: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });

  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidHighY - 0.8, voidHighY, -2.2, 2.2, materials.whiteTile, {
    climbable: true,
    blocksWater: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });
  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidHighY, voidHighY + 4.4, -3.2, -2.0, materials.whiteTile, {
    climbable: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });
  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidHighY, voidHighY + 4.4, 2.0, 3.2, materials.whiteTile, {
    climbable: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });
  b.addBlock(siloR + corridorDepth - 1.0, siloR + 24.0, voidHighY + 3.6, voidHighY + 4.4, -3.2, 3.2, materials.whiteTile, {
    climbable: false,
    blocksWater: false,
    aoBottom: 0.0,
    aoTop: 0.0
  });

  const cubeBaseX = siloR + 26.0;
  const cubeSteps = 26;
  const cubeWalkPath: Array<[number, number, number, number]> = [];
  for (let i = 0; i <= cubeSteps; i++) {
    const t = i / cubeSteps;
    const ang = t * Math.PI * 2;
    const cx = cubeBaseX + Math.sin(t * Math.PI) * 42.0;
    const cz = -Math.sin(ang) * 18.0;
    const ty = THREE.MathUtils.lerp(voidLowY, voidHighY, t);
    cubeWalkPath.push([cx, ty, cz, 4.4]);
  }

  const edgeLineMat = new THREE.LineBasicMaterial({ color: 0x0b0f12 });
  b.disposables.push(edgeLineMat);
  for (const [cx, ty, cz, sz] of cubeWalkPath) {
    const hs = sz * 0.5;
    b.addBlock(cx - hs, cx + hs, ty - sz, ty, cz - hs, cz + hs, materials.whiteTile, {
      collide: true,
      climbable: true,
      blocksWater: false,
      castShadow: false
    });
    const edgeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(sz + 0.05, sz + 0.05, sz + 0.05));
    b.disposables.push(edgeGeo);
    const lines = new THREE.LineSegments(edgeGeo, edgeLineMat);
    lines.position.set(cx, ty - hs, cz);
    b.group.add(lines);
  }

  const decCubeGeo = new THREE.BoxGeometry(4.6, 4.6, 4.6);
  const decEdgeGeo = new THREE.BoxGeometry(4.78, 0.22, 4.78);
  b.disposables.push(decCubeGeo, decEdgeGeo);
  const decCoords: Array<[number, number, number, number]> = [];
  for (let ix = 0; ix < 8; ix++) {
    for (let iz = -5; iz <= 5; iz++) {
      for (let iy = 0; iy < 6; iy++) {
        const px = cubeBaseX + 4.0 + ix * 14.0 + ((iy * 7 + iz * 3) % 3) * 2.1;
        const py = 12.0 + iy * 14.5 + ((ix + iz) % 2) * 3.0;
        const pz = iz * 13.5 + ((ix * 5) % 3) * 1.8;
        let nearPath = false;
        for (const [wx, wy, wz] of cubeWalkPath) {
          if (Math.hypot(px - wx, py - (wy - 2.2), pz - wz) < 8.5) {
            nearPath = true;
            break;
          }
        }
        if (nearPath || (px < cubeBaseX + 6 && Math.abs(pz) < 8)) continue;
        decCoords.push([px, py, pz, 0.72 + ((ix * 3 + iy * 5 + Math.abs(iz)) % 5) * 0.28]);
      }
    }
  }
  const instDecCubes = new THREE.InstancedMesh(decCubeGeo, materials.whiteTile, decCoords.length);
  const instDecEdges = new THREE.InstancedMesh(decEdgeGeo, materials.cubeFrameMat, decCoords.length);
  for (let i = 0; i < decCoords.length; i++) {
    const [px, py, pz, sc] = decCoords[i];
    dummy.position.set(px, py, pz);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.setScalar(sc);
    dummy.updateMatrix();
    instDecCubes.setMatrixAt(i, dummy.matrix);
    dummy.position.set(px, py + 2.3 * sc, pz);
    dummy.scale.setScalar(sc);
    dummy.updateMatrix();
    instDecEdges.setMatrixAt(i, dummy.matrix);
  }
  instDecCubes.instanceMatrix.needsUpdate = true;
  instDecEdges.instanceMatrix.needsUpdate = true;
  instDecCubes.frustumCulled = false;
  instDecEdges.frustumCulled = false;
  b.group.add(instDecCubes, instDecEdges);

  for (const [lx, ly, lz] of [
    [cubeBaseX + 18, 46, -12],
    [cubeBaseX + 44, 52, 0],
    [cubeBaseX + 24, 60, 14]
  ] as const) {
    const cvL = new THREE.PointLight(0xe4f4fa, 110, 75, 1.2);
    cvL.position.set(lx, ly, lz);
    b.group.add(cvL);
  }

  onProgress?.(0.64, 'SPANNING 83M RAILINGLESS SKYBRIDGE & COFFERED SKYLIGHT APEX...');
  await yieldBuildFrame();

  const bridgeY = ringHeights[4];
  b.addBlock(-balconyInR - 0.6, balconyInR + 0.6, bridgeY - 0.75, bridgeY, -0.82, 0.82, materials.whiteTile, {
    climbable: true,
    blocksWater: false
  });

  b.addCylinderColumn(0, 0, 4.2, bridgeY - 1.2, bridgeY, materials.whiteTile, false, true, false, 36);
  b.addBlock(-3.4, 3.4, bridgeY - 1.2, bridgeY, -3.4, 3.4, materials.whiteTile, {
    collide: true,
    climbable: true,
    blocksWater: false,
    castShadow: false
  });

  const apexY = 155.5;
  b.addBlock(-0.62, 0.62, bridgeY, apexY, -1.85, -0.62, materials.whiteTile, { climbable: false, blocksWater: false });
  b.addChromePoolLadder({
    x: 0.0,
    z: -0.62,
    normalX: 0,
    normalZ: 1,
    minY: bridgeY,
    maxY: apexY,
    topExitX: 0.0,
    topExitZ: -2.0,
    deckReturn: true,
    style: 'steel'
  });

  b.addBlock(-4.4, 4.4, apexY - 0.75, apexY, -4.4, 0.3, materials.whiteTile, { climbable: true, blocksWater: false });
  b.addChromeHandrail({ axis: 'X', crossPos: -4.2, startAlong: -4.2, endAlong: 4.2, deckY: apexY, collide: true });
  b.addChromeHandrail({ axis: 'Z', crossPos: -4.2, startAlong: -4.2, endAlong: 0.1, deckY: apexY, collide: true });
  b.addChromeHandrail({ axis: 'Z', crossPos: 4.2, startAlong: -4.2, endAlong: 0.1, deckY: apexY, collide: true });

  b.addBlock(-2.8, 2.8, apexY, ceilY, -4.5, -4.0, materials.glassBlock, { climbable: false, castShadow: false });
  b.addSubmergedPoolDrain(0, apexY + 0.01, -2.4, 2.2);

  b.addCofferedWhiteSkylightGrid({
    ceilingY: ceilY,
    spacing: 11.5,
    panelSize: 7.8,
    gridHalfCount: 5,
    centerX: 0,
    centerZ: 0,
    clipRadius: siloR + 2.0,
    beamDepth: 2.0,
    panelColor: new THREE.Color(2.45, 2.55, 2.62)
  });

  const zenithLight = new THREE.PointLight(0xf0f8fc, 380, 210, 1.08);
  zenithLight.position.set(0, ceilY - 8.0, 0);
  b.group.add(zenithLight);

  const upperMidLight = new THREE.PointLight(0xd2e4ec, 240, 160, 1.15);
  upperMidLight.position.set(0, 92.0, 0);
  b.group.add(upperMidLight);

  const lowerMidLight = new THREE.PointLight(0xb2ced8, 165, 130, 1.2);
  lowerMidLight.position.set(0, 36.0, 0);
  b.group.add(lowerMidLight);

  const waterLight = new THREE.PointLight(0x8cc2ce, 90, 90, 1.25);
  waterLight.position.set(0, 8.0, 0);
  b.group.add(waterLight);
  b.registerWaterLight(0, 0, siloR, 0.88);

  const fieldData = await b.bakeLevelFieldAsync(
    (t) => onProgress?.(0.68 + t * 0.32, 'BAKING SILO DEPTH & ACOUSTIC FIELD...'),
    { centerX: 48, centerZ: 4, sizeX: 240, sizeZ: 150 }
  );

  const zones: ZoneDefinition[] = [
    { id: 's3-tunnel', label: 'STAGE 03 · FLOODED ENTRY TUNNEL', minX: -6, maxX: 6, minZ: siloR - 1, maxZ: siloR + 20, maxY: 6 },
    { id: 's3-cube-void', label: 'STAGE 03 · TESSELLATED CUBE VOID', minX: siloR + 10, maxX: 220, minZ: -90, maxZ: 90 },
    { id: 's3-zenith', label: 'STAGE 03 · SKYLIGHT GRID APEX', minX: -54, maxX: 54, minZ: -54, maxZ: 54, minY: 142 },
    { id: 's3-skybridge', label: 'STAGE 03 · RAILINGLESS SKYBRIDGE (96M)', minX: -54, maxX: 54, minZ: -54, maxZ: 54, minY: 92, maxY: 142 },
    { id: 's3-balconies', label: 'STAGE 03 · OVERHANGING BALCONY RINGS', minX: -62, maxX: 62, minZ: -62, maxZ: 62, minY: 12, maxY: 92 },
    { id: 's3-silo', label: 'STAGE 03 · THE SUNKEN PURGATORY', minX: -56, maxX: 56, minZ: -56, maxZ: 56 }
  ];

  return {
    index: 2,
    code: 'STAGE 03',
    title: 'THE SUNKEN PURGATORY',
    subtitle: '54-STORY CYLINDRICAL SILO // VERTICAL VERTIGO',
    group: b.group,
    colliders: b.colliders,
    cylinders: b.cylinders,
    ladders: b.ladders,
    currents: b.currents,
    zones,
    exitTrigger: {
      minX: -4.0,
      maxX: 4.0,
      minY: apexY - 0.5,
      maxY: ceilY,
      minZ: -4.6,
      maxZ: -1.4,
      nextLevelIndex: 3
    },
    spawnPosition: new THREE.Vector3(0, -0.40, siloR + 14.0),
    spawnYaw: 0,
    fieldData,
    shadowRig,
    waterStyle: {
      absorption: [0.85, 0.25, 0.21],
      deepColor: [0.002, 0.018, 0.024],
      shallowColor: [0.05, 0.36, 0.40],
      reflectionTint: [0.90, 0.95, 0.98],
      waveAmplitude: 0.28,
      choppiness: 0.36,
      waveSpeed: 1.08,
      turbulence: 0.80,
      depthWaveDamping: 0.38,
      foamStrength: 0.0,
      sunDirection: [0.1, 0.98, 0.1],
      sunSpecularColor: [0.92, 0.98, 1.05],
      specularIntensity: 0.90,
      wetBandHeight: 0.78,
      causticStrength: 0.58,
      wallBounceCaustic: 0.26,
      underwaterFogColor: 0x021014,
      underwaterFogDensity: 0.122,
      planeCenter: [0, 0],
      planeSize: [140, 140]
    },
    envStyle: {
      fogColor: 0xa4b6be,
      fogDensity: 0.0046,
      heightMistColor: 0xe0eaee,
      heightMistStartY: 40.0,
      heightMistEndY: 158.0,
      heightMistStrength: 0.86,
      indirectFillColor: 0xbacbd2,
      indirectFillIntensity: 0.082,
      envPreset: 'silo-purgatory',
      envIntensity: 0.28,
      baseExposure: 1.0,
      warmthGrade: 0.0,
      grimeStrength: 0.12,
      glassGlowColor: 0xd8f2fa,
      glassGlowIntensity: 0.78,
      ssaoIntensity: 0.94,
      bloomIntensity: 0.42,
      audioProfile: 'stage03-sunken-purgatory',
      tileTint: 0xf0f5f8,
      accentTint: 0x566a74,
      causticTint: 0x70e0e4,
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
