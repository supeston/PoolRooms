import * as THREE from 'three';
import {
  ColliderBox,
  ColliderCylinder,
  LadderZone,
  LevelFieldData,
  ShadowRig,
  WATER_LEVEL,
  WaterCurrentZone
} from '../types';
import { PoolMaterialSet } from '../tileMaterial';

export const TILE_WORLD_SCALE = 2.4;

export const yieldBuildFrame = (): Promise<void> =>
  new Promise((resolve) => {
    requestAnimationFrame(() => {
      window.setTimeout(resolve, 0);
    });
  });

export function applyWorldTileUVsAndAO(
  geo: THREE.BufferGeometry,
  worldOffsetX: number,
  worldOffsetY: number,
  worldOffsetZ: number,
  aoMinY: number,
  aoMaxY: number,
  aoBottom = 0.86,
  aoTop = 0.96
): THREE.BufferGeometry {
  geo.computeVertexNormals();
  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  const uvArr = new Float32Array(pos.count * 2);
  const colArr = new Float32Array(pos.count * 3);
  const spanY = Math.max(0.15, aoMaxY - aoMinY);

  for (let i = 0; i < pos.count; i++) {
    const lx = pos.getX(i);
    const ly = pos.getY(i);
    const lz = pos.getZ(i);
    const wx = lx + worldOffsetX;
    const wy = ly + worldOffsetY;
    const wz = lz + worldOffsetZ;

    const nx = Math.abs(norm.getX(i));
    const ny = Math.abs(norm.getY(i));
    const nz = Math.abs(norm.getZ(i));

    let u = 0;
    let v = 0;
    if (ny > 0.65) {
      u = wx / TILE_WORLD_SCALE;
      v = wz / TILE_WORLD_SCALE;
    } else if (nx >= nz) {
      u = wz / TILE_WORLD_SCALE;
      v = wy / TILE_WORLD_SCALE;
    } else {
      u = wx / TILE_WORLD_SCALE;
      v = wy / TILE_WORLD_SCALE;
    }
    uvArr[i * 2] = u;
    uvArr[i * 2 + 1] = v;

    const tY = THREE.MathUtils.clamp((wy - aoMinY) / spanY, 0, 1);
    const bShade = THREE.MathUtils.lerp(aoBottom, 1.0, THREE.MathUtils.smoothstep(tY, 0.0, 0.35));
    const tShade = THREE.MathUtils.lerp(1.0, aoTop, THREE.MathUtils.smoothstep(tY, 0.72, 1.0));
    const ao = bShade * tShade;

    colArr[i * 3] = ao;
    colArr[i * 3 + 1] = ao;
    colArr[i * 3 + 2] = ao;
  }

  geo.setAttribute('uv', new THREE.BufferAttribute(uvArr, 2));
  geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
  return geo;
}

function createRecessedCavityModuleGeometry(
  cellW: number,
  cellH: number,
  openW: number,
  openH: number,
  depth: number,
  openBottom = false,
  includeBackWall = true,
  backAo = 0.0,
  curveRadius = 0,
  curveInward = true
): THREE.BufferGeometry {
  const cw = cellW * 0.5;
  const ch = cellH * 0.5;
  const hw = Math.min(openW * 0.5, cw - 0.06);
  const yBot = openBottom ? -ch + 0.006 : -Math.min(openH * 0.5, ch - 0.06);
  const yTop = openBottom ? Math.min(-ch + openH, ch - 0.06) : Math.min(openH * 0.5, ch - 0.06);

  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];

  const sagittaZ = (x: number): number => {
    if (curveRadius <= 0.1) return 0;
    const clamped = Math.min(Math.abs(x), curveRadius * 0.95);
    const dz = curveRadius - Math.sqrt(Math.max(0.01, curveRadius * curveRadius - clamped * clamped));
    return curveInward ? dz : -dz;
  };

  const frontNormal = (x: number): [number, number, number] => {
    if (curveRadius <= 0.1) return [0, 0, 1];
    const sign = curveInward ? -1 : 1;
    const nx = (sign * x) / curveRadius;
    const nz = Math.sqrt(Math.max(0.01, 1.0 - nx * nx));
    return [nx, 0, nz];
  };

  const pushQuad = (
    p0: [number, number, number],
    p1: [number, number, number],
    p2: [number, number, number],
    p3: [number, number, number],
    nx: number,
    ny: number,
    nz: number,
    ao0: number,
    ao1: number,
    ao2: number,
    ao3: number
  ) => {
    const verts: Array<[[number, number, number], number]> = [
      [p0, ao0],
      [p1, ao1],
      [p2, ao2],
      [p0, ao0],
      [p2, ao2],
      [p3, ao3]
    ];
    for (const [p, ao] of verts) {
      positions.push(p[0], p[1], p[2]);
      normals.push(nx, ny, nz);
      if (Math.abs(ny) > 0.5) {
        uvs.push(p[0] / TILE_WORLD_SCALE, p[2] / TILE_WORLD_SCALE);
      } else if (Math.abs(nx) > 0.5) {
        uvs.push(p[2] / TILE_WORLD_SCALE, p[1] / TILE_WORLD_SCALE);
      } else {
        uvs.push(p[0] / TILE_WORLD_SCALE, p[1] / TILE_WORLD_SCALE);
      }
      colors.push(ao, ao, ao);
    }
  };

  const pushCurvedFrontStrip = (x0: number, x1: number, y0: number, y1: number, segs: number) => {
    const step = (x1 - x0) / segs;
    for (let s = 0; s < segs; s++) {
      const ax = x0 + s * step;
      const bx = x0 + (s + 1) * step;
      const az = sagittaZ(ax);
      const bz = sagittaZ(bx);
      const midN = frontNormal((ax + bx) * 0.5);
      pushQuad(
        [ax, y0, az],
        [bx, y0, bz],
        [bx, y1, bz],
        [ax, y1, az],
        midN[0],
        midN[1],
        midN[2],
        0.96,
        0.96,
        0.96,
        0.96
      );
    }
  };

  const frontSegsSide = curveRadius > 0.1 ? 3 : 1;
  const frontSegsMid = curveRadius > 0.1 ? 2 : 1;

  if (!openBottom && yBot > -ch + 0.005) {
    pushCurvedFrontStrip(-cw, -hw, -ch, yBot, frontSegsSide);
    pushCurvedFrontStrip(-hw, hw, -ch, yBot, frontSegsMid);
    pushCurvedFrontStrip(hw, cw, -ch, yBot, frontSegsSide);
  }
  pushCurvedFrontStrip(-cw, -hw, yTop, ch, frontSegsSide);
  pushCurvedFrontStrip(-hw, hw, yTop, ch, frontSegsMid);
  pushCurvedFrontStrip(hw, cw, yTop, ch, frontSegsSide);
  pushCurvedFrontStrip(-cw, -hw, yBot, yTop, frontSegsSide);
  pushCurvedFrontStrip(hw, cw, yBot, yTop, frontSegsSide);

  const zEdge = sagittaZ(hw);
  const zBack = -depth;

  const zSlices: Array<[number, number]> = [];
  if (backAo <= 0.12) {
    const d1 = Math.min(depth * 0.35, 0.52);
    const d2 = Math.min(depth * 0.65, 0.98);
    const d3 = Math.min(depth * 0.85, 1.32);

    zSlices.push([zEdge, 0.96]);
    zSlices.push([zEdge - d1, 0.76]);
    zSlices.push([zEdge - d2, 0.12]);
    if (depth > 1.38) {
      zSlices.push([zEdge - d3, 0.0]);
      zSlices.push([zBack, 0.0]);
    } else {
      zSlices.push([zBack, 0.0]);
    }
  } else {
    zSlices.push([zEdge, 0.96]);
    zSlices.push([zBack, backAo]);
  }

  for (let i = 0; i < zSlices.length - 1; i++) {
    const [zNear, aoNear] = zSlices[i];
    const [zFar, aoFar] = zSlices[i + 1];

    pushQuad(
      [-hw, yBot, zFar],
      [-hw, yBot, zNear],
      [hw, yBot, zNear],
      [hw, yBot, zFar],
      0,
      1,
      0,
      aoFar,
      aoNear,
      aoNear,
      aoFar
    );

    pushQuad(
      [-hw, yTop, zNear],
      [-hw, yTop, zFar],
      [hw, yTop, zFar],
      [hw, yTop, zNear],
      0,
      -1,
      0,
      aoNear * 0.92,
      aoFar * 0.92,
      aoFar * 0.92,
      aoNear * 0.92
    );

    pushQuad(
      [-hw, yBot, zFar],
      [-hw, yTop, zFar],
      [-hw, yTop, zNear],
      [-hw, yBot, zNear],
      1,
      0,
      0,
      aoFar * 0.95,
      aoFar * 0.95,
      aoNear * 0.95,
      aoNear * 0.95
    );

    pushQuad(
      [hw, yBot, zNear],
      [hw, yTop, zNear],
      [hw, yTop, zFar],
      [hw, yBot, zFar],
      -1,
      0,
      0,
      aoNear * 0.95,
      aoNear * 0.95,
      aoFar * 0.95,
      aoFar * 0.95
    );
  }

  if (includeBackWall) {
    pushQuad(
      [-hw, yBot, zBack],
      [hw, yBot, zBack],
      [hw, yTop, zBack],
      [-hw, yTop, zBack],
      0,
      0,
      1,
      backAo,
      backAo,
      backAo,
      backAo
    );
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  return geo;
}

export function createVolumetricShaftMaterial(
  colorHex: number,
  opacity: number,
  isUnderwater = false
): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(colorHex) },
      uOpacity: { value: opacity },
      uTime: { value: 0 },
      uShimmer: { value: isUnderwater ? 1.0 : 0.0 }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      varying float vViewDist;
      void main() {
        vUv = uv;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormalView = normalize(normalMatrix * normal);
        vViewDist = length(mvPos.xyz);
        vViewDir = -mvPos.xyz / max(vViewDist, 0.001);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uTime;
      uniform float uShimmer;
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      varying float vViewDist;
      void main() {
        float topFade = smoothstep(1.0, 0.80, vUv.y);
        float bottomFade = smoothstep(0.0, 0.76, vUv.y);
        float fresnelEdge = pow(abs(dot(vNormalView, vViewDir)), 2.05);

        float camFade = smoothstep(0.6, 2.8, vViewDist);
        float streak = 1.0;
        if (uShimmer > 0.5) {
          float s1 = 0.68 + 0.32 * sin(vUv.x * 34.0 + uTime * 1.05);
          float s2 = 0.74 + 0.26 * sin(vUv.x * 58.0 - uTime * 1.45 + vUv.y * 3.8);
          streak = s1 * s2;
        } else {
          streak = 0.86 + 0.14 * sin(vUv.x * 18.0 + uTime * 0.28 + vUv.y * 2.5);
        }
        float alpha = topFade * bottomFade * fresnelEdge * camFade * streak * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
}

interface WaterLightZone {
  x: number;
  z: number;
  radius: number;
  strength: number;
}

export class PoolLevelBuilder {
  readonly group = new THREE.Group();
  readonly colliders: ColliderBox[] = [];
  readonly cylinders: ColliderCylinder[] = [];
  readonly ladders: LadderZone[] = [];
  readonly currents: WaterCurrentZone[] = [];
  readonly disposables: Array<{ dispose: () => void }> = [];
  readonly animatedShaftMats: THREE.ShaderMaterial[] = [];

  private readonly waterLights: WaterLightZone[] = [];
  private globalWaterSunlit = 0.0;

  readonly materials: PoolMaterialSet;
  readonly skylightMat: THREE.MeshBasicMaterial;

  constructor(materials: PoolMaterialSet, skylightHdrColor = new THREE.Color(1.65, 1.95, 2.08)) {
    this.materials = materials;
    this.skylightMat = new THREE.MeshBasicMaterial({
      color: skylightHdrColor,
      toneMapped: false
    });
    this.disposables.push(this.skylightMat);
  }

  registerWaterLight(x: number, z: number, radius: number, strength = 1.0): void {
    this.waterLights.push({ x, z, radius, strength });
  }

  setGlobalWaterIllumination(strength: number): void {
    this.globalWaterSunlit = THREE.MathUtils.clamp(strength, 0, 1);
  }

  createShadowKeyLight(params: {
    color: number;
    intensity: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    frustumHalfSize?: number;
    mapSize?: number;
  }): ShadowRig {
    const {
      color,
      intensity,
      offsetX,
      offsetY,
      offsetZ,
      frustumHalfSize = 48,
      mapSize = 4096
    } = params;

    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(offsetX, offsetY, offsetZ);
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.mapSize.set(mapSize, mapSize);
    light.shadow.camera.left = -frustumHalfSize;
    light.shadow.camera.right = frustumHalfSize;
    light.shadow.camera.top = frustumHalfSize;
    light.shadow.camera.bottom = -frustumHalfSize;
    light.shadow.camera.near = 2;
    light.shadow.camera.far = Math.hypot(offsetX, offsetY, offsetZ) + frustumHalfSize * 1.8;
    light.shadow.bias = -0.00035;
    light.shadow.normalBias = 0.032;
    this.group.add(light, light.target);

    return {
      light,
      offset: new THREE.Vector3(offsetX, offsetY, offsetZ),
      frustumHalfSize
    };
  }

  addBlock(
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    minZ: number,
    maxZ: number,
    mat: THREE.Material = this.materials.whiteTile,
    options: {
      collide?: boolean;
      castShadow?: boolean;
      receiveShadow?: boolean;
      surface?: 'tile' | 'stone' | 'metal' | 'wood' | 'glass';
      climbable?: boolean;
      blocksWater?: boolean;
      aoBottom?: number;
      aoTop?: number;
    } = {}
  ): THREE.Mesh {
    const {
      collide = true,
      castShadow = true,
      receiveShadow = true,
      surface = 'tile',
      climbable = true,
      blocksWater = true,
      aoBottom = 0.86,
      aoTop = 0.96
    } = options;

    const w = maxX - minX;
    const h = maxY - minY;
    const d = maxZ - minZ;
    const cx = (minX + maxX) * 0.5;
    const cy = (minY + maxY) * 0.5;
    const cz = (minZ + maxZ) * 0.5;

    const geo = new THREE.BoxGeometry(w, h, d);
    applyWorldTileUVsAndAO(geo, cx, cy, cz, minY, maxY, aoBottom, aoTop);
    this.disposables.push(geo);

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(cx, cy, cz);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    this.group.add(mesh);

    if (collide) {
      this.colliders.push({ minX, maxX, minY, maxY, minZ, maxZ, surface, climbable, blocksWater });
    }
    return mesh;
  }

  addCylinderColumn(
    cx: number,
    cz: number,
    radius: number,
    minY: number,
    maxY: number,
    mat: THREE.Material = this.materials.whiteTile,
    collide = true,
    castShadow = true,
    withArchitecturalCollar = true,
    radialSegments = 32
  ): THREE.Mesh {
    const h = maxY - minY;
    const cy = (minY + maxY) * 0.5;
    const geo = new THREE.CylinderGeometry(radius, radius, h, radialSegments, 1);

    const pos = geo.attributes.position;
    const uv = geo.attributes.uv;
    const colArr = new Float32Array(pos.count * 3);
    const circum = 2 * Math.PI * radius;
    const uScale = Math.max(1, Math.round(circum / TILE_WORLD_SCALE));
    const vScale = h / TILE_WORLD_SCALE;

    for (let i = 0; i < pos.count; i++) {
      uv.setXY(i, uv.getX(i) * uScale, uv.getY(i) * vScale);
      const wy = pos.getY(i) + cy;
      const tY = THREE.MathUtils.clamp((wy - minY) / Math.max(0.1, h), 0, 1);
      const ao =
        THREE.MathUtils.lerp(0.84, 1.0, THREE.MathUtils.smoothstep(tY, 0, 0.25)) *
        THREE.MathUtils.lerp(1.0, 0.92, THREE.MathUtils.smoothstep(tY, 0.82, 1.0));
      colArr[i * 3] = ao;
      colArr[i * 3 + 1] = ao;
      colArr[i * 3 + 2] = ao;
    }
    uv.needsUpdate = true;
    geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
    this.disposables.push(geo);

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(cx, cy, cz);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    if (withArchitecturalCollar && h > 2.2) {
      const baseGeo = new THREE.CylinderGeometry(radius * 1.14, radius * 1.18, 0.34, radialSegments);
      applyWorldTileUVsAndAO(baseGeo, cx, minY + 0.17, cz, minY, minY + 0.4, 0.85, 0.96);
      const capGeo = new THREE.CylinderGeometry(radius * 1.18, radius * 1.12, 0.32, radialSegments);
      applyWorldTileUVsAndAO(capGeo, cx, maxY - 0.16, cz, maxY - 0.4, maxY, 0.92, 0.95);
      this.disposables.push(baseGeo, capGeo);

      const baseMesh = new THREE.Mesh(baseGeo, mat);
      baseMesh.position.set(cx, minY + 0.17, cz);
      baseMesh.castShadow = castShadow;
      baseMesh.receiveShadow = true;

      const capMesh = new THREE.Mesh(capGeo, mat);
      capMesh.position.set(cx, maxY - 0.16, cz);
      capMesh.castShadow = castShadow;
      capMesh.receiveShadow = true;

      this.group.add(baseMesh, capMesh);
    }

    if (collide) {
      this.cylinders.push({ cx, cz, radius, minY, maxY });
    }
    return mesh;
  }

  addRecessedTiledWallGrid(params: {
    axis: 'X' | 'Z';
    wallFacePos: number;
    inwardSign: 1 | -1;
    alongMin: number;
    alongMax: number;
    minY: number;
    maxY: number;
    stepAlong: number;
    stepY: number;
    winW: number;
    winH: number;
    recessDepth?: number;
    mat?: THREE.Material;
    exclusions?: Array<{ aMin: number; aMax: number; yMin: number; yMax: number; solidFill?: boolean }>;
  }): void {
    const {
      axis,
      wallFacePos,
      inwardSign,
      alongMin,
      alongMax,
      minY,
      maxY,
      stepAlong,
      stepY,
      winW,
      winH,
      recessDepth = 2.0,
      mat = this.materials.whiteTile,
      exclusions = []
    } = params;

    const cols = Math.max(1, Math.round((alongMax - alongMin) / stepAlong));
    const rows = Math.max(1, Math.round((maxY - minY) / stepY));
    const cellW = (alongMax - alongMin) / cols;
    const cellH = (maxY - minY) / rows;

    const modGeo = createRecessedCavityModuleGeometry(
      cellW + 0.01,
      cellH + 0.01,
      winW,
      winH,
      recessDepth,
      false,
      true,
      0.0,
      0,
      true
    );
    const solidGeo = new THREE.BoxGeometry(cellW + 0.01, cellH + 0.01, 0.35);
    applyWorldTileUVsAndAO(solidGeo, 0, 0, 0, -cellH * 0.5, cellH * 0.5, 0.94, 0.96);
    this.disposables.push(modGeo, solidGeo);

    const rotY =
      axis === 'X'
        ? inwardSign > 0
          ? 0
          : Math.PI
        : inwardSign > 0
          ? Math.PI * 0.5
          : -Math.PI * 0.5;

    const windowMatrices: THREE.Matrix4[] = [];
    const solidMatrices: THREE.Matrix4[] = [];
    const dummy = new THREE.Object3D();

    for (let r = 0; r < rows; r++) {
      const cy = minY + (r + 0.5) * cellH;
      for (let c = 0; c < cols; c++) {
        const ca = alongMin + (c + 0.5) * cellW;

        let matchedEx: { aMin: number; aMax: number; yMin: number; yMax: number; solidFill?: boolean } | null = null;
        for (let e = 0; e < exclusions.length; e++) {
          const ex = exclusions[e];
          if (ca + cellW * 0.48 > ex.aMin && ca - cellW * 0.48 < ex.aMax && cy + cellH * 0.48 > ex.yMin && cy - cellH * 0.48 < ex.yMax) {
            matchedEx = ex;
            break;
          }
        }

        if (axis === 'X') {
          dummy.position.set(ca, cy, wallFacePos);
        } else {
          dummy.position.set(wallFacePos, cy, ca);
        }
        dummy.rotation.set(0, rotY, 0);
        dummy.scale.set(1, 1, 1);

        if (!matchedEx) {
          dummy.updateMatrix();
          windowMatrices.push(dummy.matrix.clone());
        } else if (matchedEx.solidFill) {
          if (axis === 'X') {
            dummy.position.set(ca, cy, wallFacePos - inwardSign * 0.175);
          } else {
            dummy.position.set(wallFacePos - inwardSign * 0.175, cy, ca);
          }
          dummy.updateMatrix();
          solidMatrices.push(dummy.matrix.clone());
        }
      }
    }

    if (windowMatrices.length > 0) {
      const inst = new THREE.InstancedMesh(modGeo, mat, windowMatrices.length);
      for (let i = 0; i < windowMatrices.length; i++) inst.setMatrixAt(i, windowMatrices[i]);
      inst.instanceMatrix.needsUpdate = true;
      inst.receiveShadow = true;
      inst.frustumCulled = false;
      this.group.add(inst);
    }

    if (solidMatrices.length > 0) {
      const instS = new THREE.InstancedMesh(solidGeo, mat, solidMatrices.length);
      for (let i = 0; i < solidMatrices.length; i++) instS.setMatrixAt(i, solidMatrices[i]);
      instS.instanceMatrix.needsUpdate = true;
      instS.receiveShadow = true;
      instS.frustumCulled = false;
      this.group.add(instS);
    }
  }

  addRecessedCylinderWallGrid(params: {
    cx: number;
    cz: number;
    radius: number;
    facingInward: boolean;
    minY: number;
    maxY: number;
    stepY: number;
    countPerRing: number;
    winW: number;
    winH: number;
    recessDepth?: number;
    mat?: THREE.Material;
    excludeAngles?: Array<{ angle: number; halfArc: number; minY: number; maxY: number }>;
    pinpointLightEveryN?: number;
    pinpointColor?: number;
  }): void {
    const {
      cx,
      cz,
      radius,
      facingInward,
      minY,
      maxY,
      stepY,
      countPerRing,
      winW,
      winH,
      recessDepth = 2.0,
      mat = this.materials.whiteTile,
      excludeAngles = [],
      pinpointLightEveryN = 0,
      pinpointColor = 0xf2f8fc
    } = params;

    const rows = Math.max(1, Math.round((maxY - minY) / stepY));
    const cellH = (maxY - minY) / rows;
    const chordW = 2.0 * radius * Math.sin(Math.PI / countPerRing) + 0.06;
    const clampedWinW = Math.min(winW, chordW - 0.35);
    const clampedWinH = Math.min(winH, cellH - 0.35);

    const modGeo = createRecessedCavityModuleGeometry(
      chordW,
      cellH + 0.02,
      clampedWinW,
      clampedWinH,
      recessDepth,
      false,
      true,
      0.0,
      radius,
      facingInward
    );
    this.disposables.push(modGeo);

    const normalizeDiff = (a: number, b: number) => {
      let d = (a - b) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      return Math.abs(d);
    };

    const matrices: THREE.Matrix4[] = [];
    const lightTransforms: Array<{ x: number; y: number; z: number; rotY: number }> = [];
    const dummy = new THREE.Object3D();

    for (let r = 0; r < rows; r++) {
      const cy = minY + (r + 0.5) * cellH;
      for (let i = 0; i < countPerRing; i++) {
        const ang = (i / countPerRing) * Math.PI * 2;
        let skip = false;
        for (const ex of excludeAngles) {
          if (cy + cellH * 0.45 > ex.minY && cy - cellH * 0.45 < ex.maxY && normalizeDiff(ang, ex.angle) < ex.halfArc) {
            skip = true;
            break;
          }
        }
        if (skip) continue;

        const wx = cx + Math.cos(ang) * radius;
        const wz = cz + Math.sin(ang) * radius;
        const nx = facingInward ? -Math.cos(ang) : Math.cos(ang);
        const nz = facingInward ? -Math.sin(ang) : Math.sin(ang);
        const rotY = Math.atan2(nx, nz);

        dummy.position.set(wx, cy, wz);
        dummy.rotation.set(0, rotY, 0);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        if (pinpointLightEveryN > 0 && (i + r * 5) % pinpointLightEveryN === 0) {
          const lr = facingInward ? radius + recessDepth * 0.65 : radius - recessDepth * 0.65;
          lightTransforms.push({
            x: cx + Math.cos(ang) * lr,
            y: cy,
            z: cz + Math.sin(ang) * lr,
            rotY
          });
        }
      }
    }

    if (matrices.length > 0) {
      const inst = new THREE.InstancedMesh(modGeo, mat, matrices.length);
      for (let i = 0; i < matrices.length; i++) inst.setMatrixAt(i, matrices[i]);
      inst.instanceMatrix.needsUpdate = true;
      inst.receiveShadow = true;
      inst.frustumCulled = false;
      this.group.add(inst);
    }

    if (lightTransforms.length > 0) {
      const lGeo = new THREE.PlaneGeometry(clampedWinW * 0.55, clampedWinH * 0.42);
      const c = new THREE.Color(pinpointColor);
      const lMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(c.r * 2.1, c.g * 2.1, c.b * 2.1),
        toneMapped: false
      });
      this.disposables.push(lGeo, lMat);
      const instL = new THREE.InstancedMesh(lGeo, lMat, lightTransforms.length);
      for (let i = 0; i < lightTransforms.length; i++) {
        const t = lightTransforms[i];
        dummy.position.set(t.x, t.y, t.z);
        dummy.rotation.set(0, t.rotY, 0);
        dummy.updateMatrix();
        instL.setMatrixAt(i, dummy.matrix);
      }
      instL.instanceMatrix.needsUpdate = true;
      instL.frustumCulled = false;
      this.group.add(instL);
    }
  }

  addRecessedBalconyCorridorRing(params: {
    cx: number;
    cz: number;
    radius: number;
    floorY: number;
    bandHeight: number;
    count: number;
    doorW: number;
    doorH: number;
    corridorDepth: number;
    mat?: THREE.Material;
    openAngles?: Array<{ angle: number; halfArc: number }>;
  }): void {
    const {
      cx,
      cz,
      radius,
      floorY,
      bandHeight,
      count,
      doorW,
      doorH,
      corridorDepth,
      mat = this.materials.whiteTile,
      openAngles = []
    } = params;

    const chordW = 2.0 * radius * Math.sin(Math.PI / count) + 0.08;
    const modGeo = createRecessedCavityModuleGeometry(
      chordW,
      bandHeight + 0.02,
      doorW,
      doorH,
      corridorDepth,
      true,
      true,
      0.0,
      radius,
      true
    );
    const openModGeo = createRecessedCavityModuleGeometry(
      chordW,
      bandHeight + 0.02,
      doorW,
      doorH,
      corridorDepth,
      true,
      false,
      0.0,
      radius,
      true
    );
    this.disposables.push(modGeo, openModGeo);

    const normalizeDiff = (a: number, b: number) => {
      let d = (a - b) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      return Math.abs(d);
    };

    const closedMatrices: THREE.Matrix4[] = [];
    const openMatrices: THREE.Matrix4[] = [];
    const dummy = new THREE.Object3D();
    const cy = floorY + bandHeight * 0.5;

    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2;
      const isOpen = openAngles.some((o) => normalizeDiff(ang, o.angle) <= o.halfArc);

      const wx = cx + Math.cos(ang) * radius;
      const wz = cz + Math.sin(ang) * radius;
      const rotY = Math.atan2(-Math.cos(ang), -Math.sin(ang));

      dummy.position.set(wx, cy, wz);
      dummy.rotation.set(0, rotY, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();

      if (isOpen) {
        openMatrices.push(dummy.matrix.clone());
      } else {
        closedMatrices.push(dummy.matrix.clone());
      }
    }

    if (closedMatrices.length > 0) {
      const inst = new THREE.InstancedMesh(modGeo, mat, closedMatrices.length);
      for (let i = 0; i < closedMatrices.length; i++) inst.setMatrixAt(i, closedMatrices[i]);
      inst.instanceMatrix.needsUpdate = true;
      inst.receiveShadow = true;
      inst.frustumCulled = false;
      this.group.add(inst);
    }

    if (openMatrices.length > 0) {
      const instO = new THREE.InstancedMesh(openModGeo, mat, openMatrices.length);
      for (let i = 0; i < openMatrices.length; i++) instO.setMatrixAt(i, openMatrices[i]);
      instO.instanceMatrix.needsUpdate = true;
      instO.receiveShadow = true;
      instO.frustumCulled = false;
      this.group.add(instO);
    }

    const halfAng = Math.PI / count;
    const pillarR = Math.max(0.42, ((2.0 * radius * Math.sin(halfAng) - doorW) * 0.5) * 0.48);
    const depthSteps = Math.max(2, Math.ceil(corridorDepth / 2.2));
    for (let i = 0; i < count; i++) {
      const sepAng = ((i + 0.5) / count) * Math.PI * 2;
      const cA = Math.cos(sepAng);
      const sA = Math.sin(sepAng);
      for (let d = 1; d <= depthSteps; d++) {
        const rr = radius + (corridorDepth * d) / depthSteps;
        this.cylinders.push({
          cx: cx + cA * rr,
          cz: cz + sA * rr,
          radius: pillarR,
          minY: floorY,
          maxY: floorY + doorH
        });
      }
    }
  }

  addCofferedWhiteSkylightGrid(params: {
    ceilingY: number;
    spacing: number;
    panelSize: number;
    gridHalfCount: number;
    centerX: number;
    centerZ: number;
    clipRadius?: number;
    panelColor?: THREE.Color;
    beamDepth?: number;
    beamMat?: THREE.Material;
  }): void {
    const {
      ceilingY,
      spacing,
      panelSize,
      gridHalfCount,
      centerX,
      centerZ,
      clipRadius,
      panelColor = new THREE.Color().setRGB(2.35, 2.48, 2.55),
      beamDepth = 1.6,
      beamMat = this.materials.whiteTile
    } = params;

    const coords: Array<[number, number]> = [];
    for (let gz = -gridHalfCount; gz <= gridHalfCount; gz++) {
      for (let gx = -gridHalfCount; gx <= gridHalfCount; gx++) {
        const px = centerX + gx * spacing;
        const pz = centerZ + gz * spacing;
        if (clipRadius && Math.hypot(px - centerX, pz - centerZ) > clipRadius + spacing * 0.4) {
          continue;
        }
        coords.push([px, pz]);
      }
    }

    if (coords.length === 0) return;

    const cofferGeo = createRecessedCavityModuleGeometry(
      spacing + 0.02,
      spacing + 0.02,
      panelSize,
      panelSize,
      beamDepth,
      false,
      false,
      0.85
    );
    cofferGeo.rotateX(Math.PI / 2);

    const panelGeo = new THREE.PlaneGeometry(panelSize + 0.04, panelSize + 0.04);
    panelGeo.rotateX(Math.PI / 2);
    const panelMat = new THREE.MeshBasicMaterial({
      color: panelColor,
      toneMapped: false
    });
    this.disposables.push(cofferGeo, panelGeo, panelMat);

    const instCoffers = new THREE.InstancedMesh(cofferGeo, beamMat, coords.length);
    const instPanels = new THREE.InstancedMesh(panelGeo, panelMat, coords.length);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < coords.length; i++) {
      const [px, pz] = coords[i];
      dummy.position.set(px, ceilingY, pz);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      instCoffers.setMatrixAt(i, dummy.matrix);

      dummy.position.set(px, ceilingY + beamDepth - 0.04, pz);
      dummy.updateMatrix();
      instPanels.setMatrixAt(i, dummy.matrix);
    }

    instCoffers.instanceMatrix.needsUpdate = true;
    instPanels.instanceMatrix.needsUpdate = true;
    instCoffers.frustumCulled = false;
    instPanels.frustumCulled = false;
    this.group.add(instCoffers, instPanels);

    this.setGlobalWaterIllumination(0.62);
  }

  addHollowCylinderShell(params: {
    cx: number;
    cz: number;
    radius: number;
    thickness: number;
    minY: number;
    maxY: number;
    segments?: number;
    mat?: THREE.Material;
    openings?: Array<{ angle: number; halfArc: number; minY: number; maxY: number }>;
    collide?: boolean;
    castShadow?: boolean;
  }): void {
    const {
      cx,
      cz,
      radius,
      thickness,
      minY,
      maxY,
      segments = 72,
      mat = this.materials.whiteTile,
      openings = [],
      collide = true,
      castShadow = false
    } = params;

    const rIn = radius;
    const rOut = radius + thickness;

    if (openings.length === 0) {
      this.addCurvedWallArc({
        cx,
        cz,
        rInner: rIn,
        rOuter: rOut,
        startAngle: 0,
        endAngle: Math.PI * 2,
        minY,
        maxY,
        segments,
        mat,
        collide: false,
        castShadow
      });
    } else {
      const yBreaks = new Set<number>([minY, maxY]);
      for (const op of openings) {
        yBreaks.add(THREE.MathUtils.clamp(op.minY, minY, maxY));
        yBreaks.add(THREE.MathUtils.clamp(op.maxY, minY, maxY));
      }
      const ys = Array.from(yBreaks).sort((a, b) => a - b);

      for (let yi = 0; yi < ys.length - 1; yi++) {
        const y0 = ys[yi];
        const y1 = ys[yi + 1];
        if (y1 - y0 < 0.05) continue;
        const yMid = (y0 + y1) * 0.5;

        const activeOps = openings
          .filter((op) => yMid > op.minY + 0.01 && yMid < op.maxY - 0.01)
          .map((op) => {
            let a0 = op.angle - op.halfArc;
            let a1 = op.angle + op.halfArc;
            while (a0 < 0) {
              a0 += Math.PI * 2;
              a1 += Math.PI * 2;
            }
            return { a0, a1 };
          })
          .sort((a, b) => a.a0 - b.a0);

        if (activeOps.length === 0) {
          this.addCurvedWallArc({
            cx,
            cz,
            rInner: rIn,
            rOuter: rOut,
            startAngle: 0,
            endAngle: Math.PI * 2,
            minY: y0,
            maxY: y1,
            segments,
            mat,
            collide: false,
            castShadow
          });
        } else {
          const splitIntervals: Array<[number, number]> = [];
          for (const op of activeOps) {
            if (op.a1 > Math.PI * 2) {
              splitIntervals.push([op.a0, Math.PI * 2]);
              splitIntervals.push([0, op.a1 - Math.PI * 2]);
            } else {
              splitIntervals.push([op.a0, op.a1]);
            }
          }
          splitIntervals.sort((a, b) => a[0] - b[0]);

          const merged: Array<[number, number]> = [];
          for (const iv of splitIntervals) {
            if (merged.length === 0 || iv[0] > merged[merged.length - 1][1]) {
              merged.push([iv[0], iv[1]]);
            } else {
              merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], iv[1]);
            }
          }

          let cursor = 0;
          for (const [o0, o1] of merged) {
            if (o0 - cursor > 0.01) {
              const segCount = Math.max(4, Math.ceil(((o0 - cursor) / (Math.PI * 2)) * segments));
              this.addCurvedWallArc({
                cx,
                cz,
                rInner: rIn,
                rOuter: rOut,
                startAngle: cursor,
                endAngle: o0,
                minY: y0,
                maxY: y1,
                segments: segCount,
                mat,
                collide: false,
                castShadow
              });
            }
            cursor = Math.max(cursor, o1);
          }
          if (Math.PI * 2 - cursor > 0.01) {
            const segCount = Math.max(4, Math.ceil(((Math.PI * 2 - cursor) / (Math.PI * 2)) * segments));
            this.addCurvedWallArc({
              cx,
              cz,
              rInner: rIn,
              rOuter: rOut,
              startAngle: cursor,
              endAngle: Math.PI * 2,
              minY: y0,
              maxY: y1,
              segments: segCount,
              mat,
              collide: false,
              castShadow
            });
          }
        }
      }
    }

    if (collide) {
      this.cylinders.push({
        cx,
        cz,
        radius: rIn,
        minY,
        maxY,
        inverted: true,
        thickness,
        openings
      });
    }
  }

  addCircularWalkwayRing(params: {
    cx: number;
    cz: number;
    rInner: number;
    rOuter: number;
    minY: number;
    maxY: number;
    startAngle?: number;
    endAngle?: number;
    segments?: number;
    mat?: THREE.Material;
    collide?: boolean;
    blocksWater?: boolean;
    castShadow?: boolean;
    visual?: boolean;
  }): THREE.Mesh | null {
    const {
      cx,
      cz,
      rInner,
      rOuter,
      minY,
      maxY,
      startAngle = 0,
      endAngle = Math.PI * 2,
      segments = 56,
      mat = this.materials.whiteTile,
      collide = true,
      blocksWater = false,
      castShadow = true,
      visual = true
    } = params;

    const mesh = visual
      ? this.addCurvedWallArc({
          cx,
          cz,
          rInner,
          rOuter,
          startAngle,
          endAngle,
          minY,
          maxY,
          segments,
          mat,
          collide: false,
          castShadow
        })
      : null;

    if (collide) {
      const spanAngle = endAngle - startAngle;
      const midR = (rInner + rOuter) * 0.5;
      const radialW = rOuter - rInner;
      const arcSteps = Math.max(12, Math.ceil((Math.abs(spanAngle) * midR) / Math.max(1.25, radialW * 0.55)));
      const dA = spanAngle / arcSteps;
      for (let i = 0; i < arcSteps; i++) {
        const a0 = startAngle + i * dA;
        const a1 = a0 + dA;
        const aMid = (a0 + a1) * 0.5;
        const px = cx + Math.cos(aMid) * midR;
        const pz = cz + Math.sin(aMid) * midR;
        const chord = Math.abs(dA) * rOuter;
        const halfBox = Math.max(radialW * 0.52, chord * 0.56);
        const radScaleX = Math.abs(Math.cos(aMid)) * (radialW * 0.5) + Math.abs(Math.sin(aMid)) * (chord * 0.55);
        const radScaleZ = Math.abs(Math.sin(aMid)) * (radialW * 0.5) + Math.abs(Math.cos(aMid)) * (chord * 0.55);
        const hx = Math.min(halfBox, Math.max(0.55, radScaleX));
        const hz = Math.min(halfBox, Math.max(0.55, radScaleZ));
        this.colliders.push({
          minX: px - hx,
          maxX: px + hx,
          minY,
          maxY,
          minZ: pz - hz,
          maxZ: pz + hz,
          climbable: true,
          blocksWater
        });
      }
    }

    return mesh;
  }

  addWaterCascadeSheet(params: {
    x: number;
    z: number;
    width: number;
    topY: number;
    bottomY: number;
    rotY: number;
  }): THREE.Mesh {
    const { x, z, width, topY, bottomY, rotY } = params;
    const h = Math.max(0.2, topY - bottomY);
    const geo = new THREE.PlaneGeometry(width, h, 8, 8);
    this.disposables.push(geo);
    const mesh = new THREE.Mesh(geo, this.materials.waterSheetMat);
    mesh.position.set(x, (topY + bottomY) * 0.5, z);
    mesh.rotation.y = rotY;
    mesh.renderOrder = 3;
    this.group.add(mesh);
    return mesh;
  }

  addSmoothArchedWall(params: {
    orientation: 'Z' | 'X';
    planeMin: number;
    planeMax: number;
    spanMin: number;
    spanMax: number;
    openCenter: number;
    openWidth: number;
    floorY: number;
    springY: number;
    topY: number;
    mat?: THREE.Material;
    castShadow?: boolean;
    collide?: boolean;
  }): void {
    const {
      orientation,
      planeMin,
      planeMax,
      spanMin,
      spanMax,
      openCenter,
      openWidth,
      floorY,
      springY,
      topY,
      mat = this.materials.whiteTile,
      castShadow = true,
      collide = true
    } = params;

    const halfW = openWidth * 0.5;
    const thickness = planeMax - planeMin;
    const openMin = openCenter - halfW;
    const openMax = openCenter + halfW;
    const archTopY = Math.min(topY - 0.12, springY + halfW);

    const shape = new THREE.Shape();
    shape.moveTo(spanMin, floorY);
    shape.lineTo(openMin, floorY);
    shape.lineTo(openMin, springY);
    shape.absarc(openCenter, springY, halfW, Math.PI, 0, true);
    shape.lineTo(openMax, floorY);
    shape.lineTo(spanMax, floorY);
    shape.lineTo(spanMax, topY);
    shape.lineTo(spanMin, topY);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: thickness,
      bevelEnabled: false,
      curveSegments: 28
    });

    if (orientation === 'Z') {
      geo.translate(0, 0, planeMin);
      applyWorldTileUVsAndAO(geo, 0, 0, 0, floorY, topY, 0.86, 0.96);
      this.disposables.push(geo);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = castShadow;
      mesh.receiveShadow = true;
      this.group.add(mesh);

      if (collide) {
        if (openMin > spanMin + 0.05) {
          this.colliders.push({ minX: spanMin, maxX: openMin, minY: floorY, maxY: topY, minZ: planeMin, maxZ: planeMax, climbable: false });
        }
        if (spanMax > openMax + 0.05) {
          this.colliders.push({ minX: openMax, maxX: spanMax, minY: floorY, maxY: topY, minZ: planeMin, maxZ: planeMax, climbable: false });
        }
        this.colliders.push({ minX: openMin, maxX: openMax, minY: archTopY - 0.12, maxY: topY, minZ: planeMin, maxZ: planeMax, climbable: false, blocksWater: false });
      }
      return;
    }

    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const sx = p.getX(i);
      const sy = p.getY(i);
      const sz = p.getZ(i);
      p.setXYZ(i, planeMin + sz, sy, sx);
    }
    if (geo.index) {
      const idx = geo.index;
      for (let i = 0; i < idx.count; i += 3) {
        const b = idx.getX(i + 1);
        const c = idx.getX(i + 2);
        idx.setX(i + 1, c);
        idx.setX(i + 2, b);
      }
    } else {
      for (let i = 0; i < p.count; i += 3) {
        const x1 = p.getX(i + 1), y1 = p.getY(i + 1), z1 = p.getZ(i + 1);
        const x2 = p.getX(i + 2), y2 = p.getY(i + 2), z2 = p.getZ(i + 2);
        p.setXYZ(i + 1, x2, y2, z2);
        p.setXYZ(i + 2, x1, y1, z1);
      }
    }
    p.needsUpdate = true;
    applyWorldTileUVsAndAO(geo, 0, 0, 0, floorY, topY, 0.86, 0.96);
    this.disposables.push(geo);

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    if (collide) {
      if (openMin > spanMin + 0.05) {
        this.colliders.push({ minX: planeMin, maxX: planeMax, minY: floorY, maxY: topY, minZ: spanMin, maxZ: openMin, climbable: false });
      }
      if (spanMax > openMax + 0.05) {
        this.colliders.push({ minX: planeMin, maxX: planeMax, minY: floorY, maxY: topY, minZ: openMax, maxZ: spanMax, climbable: false });
      }
      this.colliders.push({ minX: planeMin, maxX: planeMax, minY: archTopY - 0.12, maxY: topY, minZ: openMin, maxZ: openMax, climbable: false, blocksWater: false });
    }
  }

  addCurvedWallArc(params: {
    cx: number;
    cz: number;
    rInner: number;
    rOuter: number;
    startAngle: number;
    endAngle: number;
    minY: number;
    maxY: number;
    segments?: number;
    mat?: THREE.Material;
    collide?: boolean;
    castShadow?: boolean;
  }): THREE.Mesh {
    const {
      cx,
      cz,
      rInner,
      rOuter,
      startAngle,
      endAngle,
      minY,
      maxY,
      segments = 28,
      mat = this.materials.whiteTile,
      collide = true,
      castShadow = true
    } = params;

    const height = maxY - minY;
    const shape = new THREE.Shape();
    const totalAngle = endAngle - startAngle;
    const steps = Math.max(8, segments);

    for (let i = 0; i <= steps; i++) {
      const a = startAngle + (totalAngle * i) / steps;
      const x = Math.cos(a) * rOuter;
      const y = -Math.sin(a) * rOuter;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    for (let i = steps; i >= 0; i--) {
      const a = startAngle + (totalAngle * i) / steps;
      const x = Math.cos(a) * rInner;
      const y = -Math.sin(a) * rInner;
      shape.lineTo(x, y);
    }
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: height,
      bevelEnabled: false,
      curveSegments: 1
    });
    geo.rotateX(-Math.PI / 2);
    geo.translate(cx, minY, cz);

    geo.computeVertexNormals();
    const pos = geo.attributes.position;
    const norm = geo.attributes.normal;
    const uvArr = new Float32Array(pos.count * 2);
    const colArr = new Float32Array(pos.count * 3);
    const midR = (rInner + rOuter) * 0.5;

    for (let i = 0; i < pos.count; i++) {
      const wx = pos.getX(i);
      const wy = pos.getY(i);
      const wz = pos.getZ(i);
      const ny = Math.abs(norm.getY(i));

      if (ny > 0.65) {
        uvArr[i * 2] = wx / TILE_WORLD_SCALE;
        uvArr[i * 2 + 1] = wz / TILE_WORLD_SCALE;
      } else {
        const ang = Math.atan2(wz - cz, wx - cx);
        const arcLen = ang * midR;
        uvArr[i * 2] = arcLen / TILE_WORLD_SCALE;
        uvArr[i * 2 + 1] = wy / TILE_WORLD_SCALE;
      }

      const tY = THREE.MathUtils.clamp((wy - minY) / Math.max(0.1, height), 0, 1);
      const ao =
        THREE.MathUtils.lerp(0.85, 1.0, THREE.MathUtils.smoothstep(tY, 0, 0.32)) *
        THREE.MathUtils.lerp(1.0, 0.94, THREE.MathUtils.smoothstep(tY, 0.78, 1.0));
      colArr[i * 3] = ao;
      colArr[i * 3 + 1] = ao;
      colArr[i * 3 + 2] = ao;
    }

    geo.setAttribute('uv', new THREE.BufferAttribute(uvArr, 2));
    geo.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
    this.disposables.push(geo);

    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    if (collide) {
      const thick = Math.max(0.25, rOuter - rInner);
      const colR = thick * 0.52;
      const arcDist = Math.abs(totalAngle) * midR;
      const numPosts = Math.max(4, Math.ceil(arcDist / Math.max(0.35, colR * 1.1)));
      for (let i = 0; i <= numPosts; i++) {
        const a = startAngle + (totalAngle * i) / numPosts;
        this.cylinders.push({
          cx: cx + Math.cos(a) * midR,
          cz: cz + Math.sin(a) * midR,
          radius: colR,
          minY,
          maxY
        });
      }
    }

    return mesh;
  }

  addGlassBlockWall(params: {
    axis: 'X' | 'Z';
    planePos: number;
    thickness?: number;
    startAlong: number;
    endAlong: number;
    minY: number;
    maxY: number;
    lightColor?: number;
    lightIntensity?: number;
    lightDistance?: number;
    inwardSign?: 1 | -1;
    withLights?: boolean;
  }): void {
    const {
      axis,
      planePos,
      thickness = 0.28,
      startAlong,
      endAlong,
      minY,
      maxY,
      lightColor = 0xdff2f6,
      lightIntensity = 28,
      lightDistance = 22,
      inwardSign = 1,
      withLights = true
    } = params;

    const aMin = Math.min(startAlong, endAlong);
    const aMax = Math.max(startAlong, endAlong);
    const halfT = thickness * 0.5;
    const frameW = 0.28;

    if (axis === 'Z') {
      this.addBlock(planePos - halfT - 0.06, planePos + halfT + 0.06, minY, minY + frameW, aMin, aMax, this.materials.whiteTile, { climbable: false });
      this.addBlock(planePos - halfT - 0.06, planePos + halfT + 0.06, maxY - frameW, maxY, aMin, aMax, this.materials.whiteTile, { climbable: false });
      this.addBlock(planePos - halfT, planePos + halfT, minY + frameW, maxY - frameW, aMin, aMax, this.materials.glassBlock, {
        climbable: false,
        surface: 'glass',
        castShadow: false
      });

      if (withLights) {
        const span = aMax - aMin;
        const numLights = Math.max(1, Math.round(span / 8.5));
        for (let i = 0; i < numLights; i++) {
          const lz = aMin + ((i + 0.5) / numLights) * span;
          const lx = planePos + inwardSign * 1.4;
          const pt = new THREE.PointLight(lightColor, lightIntensity, lightDistance, 1.45);
          pt.position.set(lx, (minY + maxY) * 0.5, lz);
          this.group.add(pt);
          this.registerWaterLight(lx + inwardSign * 2.5, lz, lightDistance * 0.65, 0.85);
        }
      }
    } else {
      this.addBlock(aMin, aMax, minY, minY + frameW, planePos - halfT - 0.06, planePos + halfT + 0.06, this.materials.whiteTile, { climbable: false });
      this.addBlock(aMin, aMax, maxY - frameW, maxY, planePos - halfT - 0.06, planePos + halfT + 0.06, this.materials.whiteTile, { climbable: false });
      this.addBlock(aMin, aMax, minY + frameW, maxY - frameW, planePos - halfT, planePos + halfT, this.materials.glassBlock, {
        climbable: false,
        surface: 'glass',
        castShadow: false
      });

      if (withLights) {
        const span = aMax - aMin;
        const numLights = Math.max(1, Math.round(span / 8.5));
        for (let i = 0; i < numLights; i++) {
          const lx = aMin + ((i + 0.5) / numLights) * span;
          const lz = planePos + inwardSign * 1.4;
          const pt = new THREE.PointLight(lightColor, lightIntensity, lightDistance, 1.45);
          pt.position.set(lx, (minY + maxY) * 0.5, lz);
          this.group.add(pt);
          this.registerWaterLight(lx, lz + inwardSign * 2.5, lightDistance * 0.65, 0.85);
        }
      }
    }
  }

  addStaircase(params: {
    axis: '-Z' | '+Z' | '-X' | '+X';
    startPos: number;
    endPos: number;
    crossMin: number;
    crossMax: number;
    startY: number;
    endY: number;
    baseY: number;
    steps: number;
    mat?: THREE.Material;
    castShadow?: boolean;
  }): void {
    const {
      axis,
      startPos,
      endPos,
      crossMin,
      crossMax,
      startY,
      endY,
      baseY,
      steps,
      mat = this.materials.whiteTile,
      castShadow = true
    } = params;

    const run = (endPos - startPos) / steps;
    const rise = (endY - startY) / steps;

    for (let i = 0; i < steps; i++) {
      const p0 = startPos + i * run;
      const p1 = startPos + (i + 1) * run;
      const aMin = Math.min(p0, p1);
      const aMax = Math.max(p0, p1);
      const stepTop = startY + (i + 1) * rise;

      if (axis === '-Z' || axis === '+Z') {
        this.addBlock(crossMin, crossMax, baseY, stepTop, aMin, aMax, mat, {
          collide: true,
          castShadow,
          climbable: true,
          aoBottom: 0.86,
          aoTop: 0.98
        });
      } else {
        this.addBlock(aMin, aMax, baseY, stepTop, crossMin, crossMax, mat, {
          collide: true,
          castShadow,
          climbable: true,
          aoBottom: 0.86,
          aoTop: 0.98
        });
      }
    }
  }

  addSpiralStaircase(params: {
    cx: number;
    cz: number;
    coreRadius: number;
    outerRadius: number;
    startAngle: number;
    totalAngle: number;
    startY: number;
    endY: number;
    steps: number;
    mat?: THREE.Material;
  }): void {
    const {
      cx,
      cz,
      coreRadius,
      outerRadius,
      startAngle,
      totalAngle,
      startY,
      endY,
      steps,
      mat = this.materials.whiteTile
    } = params;

    const dA = totalAngle / steps;
    const rise = (endY - startY) / steps;

    for (let i = 0; i < steps; i++) {
      const a0 = startAngle + i * dA;
      const a1 = a0 + dA * 1.08;
      const stepTop = startY + (i + 1) * rise;
      const stepBot = i < 4 ? Math.min(startY - 0.6, -1.2) : stepTop - Math.max(0.62, Math.abs(rise) * 2.6);

      const sAng = Math.min(a0, a1);
      const eAng = Math.max(a0, a1);

      this.addCurvedWallArc({
        cx,
        cz,
        rInner: coreRadius * 0.96,
        rOuter: outerRadius,
        startAngle: sAng,
        endAngle: eAng,
        minY: stepBot,
        maxY: stepTop,
        segments: 5,
        mat,
        collide: false,
        castShadow: true
      });

      const midA = (a0 + a1) * 0.5;
      const midR = (coreRadius + outerRadius) * 0.5;
      const sx = cx + Math.cos(midA) * midR;
      const sz = cz + Math.sin(midA) * midR;
      const halfSpan = Math.max(0.65, (outerRadius - coreRadius) * 0.48);
      this.colliders.push({
        minX: sx - halfSpan,
        maxX: sx + halfSpan,
        minY: stepBot,
        maxY: stepTop,
        minZ: sz - halfSpan,
        maxZ: sz + halfSpan,
        climbable: true
      });
    }
  }

  addChromePoolLadder(params: {
    x: number;
    z: number;
    normalX: number;
    normalZ: number;
    minY: number;
    maxY: number;
    topExitOffset?: number;
    topExitX?: number;
    topExitZ?: number;
    deckReturn?: boolean;
    style?: 'chrome' | 'steel';
  }): void {
    const {
      x,
      z,
      normalX,
      normalZ,
      minY,
      maxY,
      topExitOffset = 0.85,
      topExitX,
      topExitZ,
      deckReturn = true,
      style = 'chrome'
    } = params;

    const mat = style === 'steel' ? this.materials.weatheredSteel : this.materials.chromeMetal;
    const len = Math.hypot(normalX, normalZ) || 1;
    const nx = normalX / len;
    const nz = normalZ / len;

    const ladderWidth = style === 'steel' ? 0.54 : 0.58;
    const standoff = 0.18;
    const railRadius = style === 'steel' ? 0.028 : 0.025;
    const rungRadius = style === 'steel' ? 0.017 : 0.018;
    const hookRadius = 0.24;
    const hookCenterY = maxY + 0.54;
    const rearLegZ = standoff - hookRadius * 2.0;

    const holder = new THREE.Group();
    this.group.add(holder);
    holder.position.set(x, 0, z);
    holder.rotation.y = Math.atan2(nx, nz);

    const railTopY = deckReturn ? hookCenterY : maxY + 0.92;
    const railHeight = railTopY - minY;
    const railGeo = new THREE.CylinderGeometry(railRadius, railRadius, railHeight, 12);
    const rungGeo = new THREE.CylinderGeometry(rungRadius, rungRadius, ladderWidth, 10);
    rungGeo.rotateZ(Math.PI / 2);

    const bracketLen = standoff + 0.05;
    const bracketGeo = new THREE.CylinderGeometry(railRadius * 0.72, railRadius * 0.72, bracketLen, 10);
    bracketGeo.rotateX(Math.PI / 2);
    const wallFlangeGeo = new THREE.CylinderGeometry(0.058, 0.062, 0.028, 14);
    wallFlangeGeo.rotateX(Math.PI / 2);
    const capGeo = new THREE.SphereGeometry(railRadius, 10, 8);

    this.disposables.push(railGeo, rungGeo, bracketGeo, wallFlangeGeo, capGeo);

    let hookGeo: THREE.TorusGeometry | null = null;
    let rearLegGeo: THREE.CylinderGeometry | null = null;
    let deckFlangeGeo: THREE.CylinderGeometry | null = null;

    if (deckReturn) {
      hookGeo = new THREE.TorusGeometry(hookRadius, railRadius, 12, 22, Math.PI);
      const rearLegHeight = hookCenterY - (maxY - 0.02);
      rearLegGeo = new THREE.CylinderGeometry(railRadius, railRadius, rearLegHeight, 12);
      deckFlangeGeo = new THREE.CylinderGeometry(0.062, 0.068, 0.032, 16);
      this.disposables.push(hookGeo, rearLegGeo, deckFlangeGeo);
    }

    const mountYs: number[] = [];
    const spanY = maxY - minY;
    const mountSteps = Math.max(2, Math.ceil(spanY / 2.6) + 1);
    for (let m = 0; m < mountSteps; m++) {
      const t = mountSteps === 1 ? 0.5 : m / (mountSteps - 1);
      mountYs.push(THREE.MathUtils.lerp(minY + 0.16, maxY - 0.14, t));
    }

    for (const side of [-1, 1] as const) {
      const rx = side * (ladderWidth * 0.5);

      const rail = new THREE.Mesh(railGeo, mat);
      rail.position.set(rx, (minY + railTopY) * 0.5, standoff);
      rail.castShadow = true;
      holder.add(rail);

      const botCap = new THREE.Mesh(capGeo, mat);
      botCap.position.set(rx, minY, standoff);
      holder.add(botCap);

      if (deckReturn && hookGeo && rearLegGeo && deckFlangeGeo) {
        const hook = new THREE.Mesh(hookGeo, mat);
        hook.rotation.y = Math.PI / 2;
        hook.position.set(rx, hookCenterY, standoff - hookRadius);
        hook.castShadow = true;
        holder.add(hook);

        const rearLegHeight = hookCenterY - (maxY - 0.02);
        const rearLeg = new THREE.Mesh(rearLegGeo, mat);
        rearLeg.position.set(rx, maxY - 0.02 + rearLegHeight * 0.5, rearLegZ);
        rearLeg.castShadow = true;
        holder.add(rearLeg);

        const deckFlange = new THREE.Mesh(deckFlangeGeo, mat);
        deckFlange.position.set(rx, maxY + 0.014, rearLegZ);
        holder.add(deckFlange);
      } else {
        const topCap = new THREE.Mesh(capGeo, mat);
        topCap.position.set(rx, railTopY, standoff);
        holder.add(topCap);
      }

      for (const my of mountYs) {
        const bracket = new THREE.Mesh(bracketGeo, mat);
        bracket.position.set(rx, my, (standoff - 0.05) * 0.5);
        bracket.castShadow = true;
        holder.add(bracket);

        const wallFlange = new THREE.Mesh(wallFlangeGeo, mat);
        wallFlange.position.set(rx, my, 0.012);
        holder.add(wallFlange);
      }
    }

    const rungStep = 0.32;
    const rungCount = Math.max(3, Math.floor((maxY - minY - 0.22) / rungStep));
    for (let i = 0; i <= rungCount; i++) {
      const ry = minY + 0.24 + i * rungStep;
      if (ry > maxY - 0.08) break;
      const rung = new THREE.Mesh(rungGeo, mat);
      rung.position.set(0, ry, standoff);
      rung.castShadow = true;
      holder.add(rung);
    }

    this.ladders.push({
      x: x + nx * (standoff + 0.42),
      z: z + nz * (standoff + 0.42),
      normalX: nx,
      normalZ: nz,
      minY,
      maxY,
      topExitX: topExitX ?? x - nx * topExitOffset,
      topExitY: maxY + 0.02,
      topExitZ: topExitZ ?? z - nz * topExitOffset,
      material: style
    });
  }

  addChromeHandrail(params: {
    axis: 'X' | 'Z';
    crossPos: number;
    startAlong: number;
    endAlong: number;
    deckY: number;
    height?: number;
    collide?: boolean;
  }): void {
    const { axis, crossPos, startAlong, endAlong, deckY, height = 1.04, collide = false } = params;
    const aMin = Math.min(startAlong, endAlong);
    const aMax = Math.max(startAlong, endAlong);
    const len = aMax - aMin;
    if (len < 0.3) return;

    const mat = this.materials.chromeMetal;
    const railGeo = new THREE.CylinderGeometry(0.024, 0.024, len, 10);
    const midGeo = new THREE.CylinderGeometry(0.016, 0.016, len, 8);
    if (axis === 'X') {
      railGeo.rotateZ(Math.PI / 2);
      midGeo.rotateZ(Math.PI / 2);
    } else {
      railGeo.rotateX(Math.PI / 2);
      midGeo.rotateX(Math.PI / 2);
    }
    const postGeo = new THREE.CylinderGeometry(0.022, 0.022, height, 10);
    const flangeGeo = new THREE.CylinderGeometry(0.052, 0.056, 0.024, 12);
    this.disposables.push(railGeo, midGeo, postGeo, flangeGeo);

    const midAlong = (aMin + aMax) * 0.5;
    const topRail = new THREE.Mesh(railGeo, mat);
    const midRail = new THREE.Mesh(midGeo, mat);
    if (axis === 'X') {
      topRail.position.set(midAlong, deckY + height, crossPos);
      midRail.position.set(midAlong, deckY + height * 0.52, crossPos);
    } else {
      topRail.position.set(crossPos, deckY + height, midAlong);
      midRail.position.set(crossPos, deckY + height * 0.52, midAlong);
    }
    topRail.castShadow = true;
    this.group.add(topRail, midRail);

    const posts = Math.max(2, Math.ceil(len / 2.6) + 1);
    for (let i = 0; i < posts; i++) {
      const pPos = aMin + (len * i) / (posts - 1);
      const post = new THREE.Mesh(postGeo, mat);
      const flange = new THREE.Mesh(flangeGeo, mat);
      if (axis === 'X') {
        post.position.set(pPos, deckY + height * 0.5, crossPos);
        flange.position.set(pPos, deckY + 0.012, crossPos);
      } else {
        post.position.set(crossPos, deckY + height * 0.5, pPos);
        flange.position.set(crossPos, deckY + 0.012, pPos);
      }
      post.castShadow = true;
      this.group.add(post, flange);
    }

    if (collide) {
      if (axis === 'X') {
        this.colliders.push({ minX: aMin, maxX: aMax, minY: deckY, maxY: deckY + height, minZ: crossPos - 0.08, maxZ: crossPos + 0.08, climbable: false, blocksWater: false });
      } else {
        this.colliders.push({ minX: crossPos - 0.08, maxX: crossPos + 0.08, minY: deckY, maxY: deckY + height, minZ: aMin, maxZ: aMax, climbable: false, blocksWater: false });
      }
    }
  }

  addSubmergedPoolDrain(cx: number, floorY: number, cz: number, size = 1.35): void {
    const rimGeo = new THREE.PlaneGeometry(size + 0.28, size + 0.28);
    rimGeo.rotateX(-Math.PI / 2);
    applyWorldTileUVsAndAO(rimGeo, cx, floorY + 0.008, cz, floorY, floorY + 0.2, 0.9, 0.95);
    const grateGeo = new THREE.PlaneGeometry(size, size);
    grateGeo.rotateX(-Math.PI / 2);
    this.disposables.push(rimGeo, grateGeo);

    const rim = new THREE.Mesh(rimGeo, this.materials.accentTile);
    rim.position.set(cx, floorY + 0.008, cz);
    rim.receiveShadow = true;

    const grate = new THREE.Mesh(grateGeo, this.materials.stainlessGrate);
    grate.position.set(cx, floorY + 0.014, cz);
    grate.receiveShadow = true;

    this.group.add(rim, grate);
  }

  addWallVentGrate(
    x: number,
    y: number,
    z: number,
    normalX: number,
    normalZ: number,
    w = 1.1,
    h = 0.52
  ): void {
    const geo = new THREE.PlaneGeometry(w, h);
    this.disposables.push(geo);
    const mesh = new THREE.Mesh(geo, this.materials.stainlessGrate);
    mesh.position.set(x + normalX * 0.02, y, z + normalZ * 0.02);
    mesh.rotation.y = Math.atan2(normalX, normalZ);
    mesh.receiveShadow = true;
    this.group.add(mesh);
  }

  addRecessedUnderwaterLamp(params: {
    x: number;
    y: number;
    z: number;
    normalX: number;
    normalZ: number;
    color?: number;
    intensity?: number;
    distance?: number;
    withBeam?: boolean;
  }): void {
    const {
      x,
      y,
      z,
      normalX,
      normalZ,
      color = 0x80f0f8,
      intensity = 18,
      distance = 18,
      withBeam = true
    } = params;

    const bezelGeo = new THREE.RingGeometry(0.18, 0.26, 20);
    const lensGeo = new THREE.CircleGeometry(0.18, 20);
    const c = new THREE.Color(color);
    const lensMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(c.r * 2.1, c.g * 2.1, c.b * 2.1),
      toneMapped: false
    });
    this.disposables.push(bezelGeo, lensGeo, lensMat);

    const rotY = Math.atan2(normalX, normalZ);
    const bezel = new THREE.Mesh(bezelGeo, this.materials.chromeMetal);
    bezel.position.set(x + normalX * 0.02, y, z + normalZ * 0.02);
    bezel.rotation.y = rotY;

    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.set(x + normalX * 0.024, y, z + normalZ * 0.024);
    lens.rotation.y = rotY;
    this.group.add(bezel, lens);

    const pt = new THREE.PointLight(color, intensity, distance, 1.5);
    pt.position.set(x + normalX * 0.45, y, z + normalZ * 0.45);
    this.group.add(pt);
    this.registerWaterLight(x + normalX * 2.2, z + normalZ * 2.2, distance * 0.65, 0.65);

    if (withBeam) {
      const coneLen = Math.min(9.5, distance * 0.48);
      const coneGeo = new THREE.CylinderGeometry(0.18, 1.45, coneLen, 18, 1, true);
      coneGeo.rotateX(Math.PI / 2);
      const coneMat = createVolumetricShaftMaterial(color, 0.11, true);
      this.disposables.push(coneGeo, coneMat);
      this.animatedShaftMats.push(coneMat);

      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.set(x + normalX * (coneLen * 0.5 + 0.08), y, z + normalZ * (coneLen * 0.5 + 0.08));
      cone.rotation.y = rotY;
      cone.renderOrder = 1;
      this.group.add(cone);
    }
  }

  addLonelyDoor(params: {
    x: number;
    floorY: number;
    z: number;
    normalX: number;
    normalZ: number;
    ajarAngle?: number;
    glowColor?: number;
    glowIntensity?: number;
  }): THREE.Group {
    const {
      x,
      floorY,
      z,
      normalX,
      normalZ,
      ajarAngle = 0,
      glowColor = 0xffe6b8,
      glowIntensity = 0
    } = params;

    const holder = new THREE.Group();
    holder.position.set(x, floorY, z);
    holder.rotation.y = Math.atan2(normalX, normalZ);
    this.group.add(holder);

    const doorW = 1.48;
    const doorH = 2.68;
    const halfW = doorW * 0.5;

    const jambGeo = new THREE.BoxGeometry(0.18, doorH + 0.18, 0.28);
    const headGeo = new THREE.BoxGeometry(doorW + 0.36, 0.18, 0.28);
    const leafGeo = new THREE.BoxGeometry(doorW - 0.04, doorH - 0.03, 0.09);
    const knobGeo = new THREE.SphereGeometry(0.052, 14, 10);
    this.disposables.push(jambGeo, headGeo, leafGeo, knobGeo);

    const jL = new THREE.Mesh(jambGeo, this.materials.chromeMetal);
    jL.position.set(-halfW - 0.09, (doorH + 0.18) * 0.5, 0.04);
    jL.castShadow = true;
    const jR = new THREE.Mesh(jambGeo, this.materials.chromeMetal);
    jR.position.set(halfW + 0.09, (doorH + 0.18) * 0.5, 0.04);
    jR.castShadow = true;
    const hd = new THREE.Mesh(headGeo, this.materials.chromeMetal);
    hd.position.set(0, doorH + 0.09, 0.04);
    hd.castShadow = true;
    holder.add(jL, jR, hd);

    const pivot = new THREE.Group();
    pivot.position.set(-halfW + 0.02, 0, 0.06);
    pivot.rotation.y = ajarAngle;
    holder.add(pivot);

    const leaf = new THREE.Mesh(leafGeo, this.materials.paintedDoor);
    leaf.position.set(halfW - 0.02, doorH * 0.5, 0);
    leaf.castShadow = true;
    leaf.receiveShadow = true;

    const knob = new THREE.Mesh(knobGeo, this.materials.brushedBrass);
    knob.position.set(doorW - 0.20, 1.12, 0.08);
    pivot.add(leaf, knob);

    if (glowIntensity > 0.1) {
      const pt = new THREE.PointLight(glowColor, glowIntensity, 16, 1.45);
      pt.position.set(0, 1.8, 0.65);
      holder.add(pt);
    }

    return pivot;
  }

  addSkylightWell(params: {
    cx: number;
    cz: number;
    w: number;
    d: number;
    ceilingY: number;
    wellHeight: number;
    beamLength: number;
    lightColor?: number;
    lightIntensity: number;
    lightDistance: number;
    bounceColor?: number;
    bounceIntensity?: number;
    shaftColor?: number;
    shaftOpacity?: number;
    castShadow?: boolean;
    tiltX?: number;
    tiltZ?: number;
    underwaterBeamDepth?: number;
    useGlassBlocks?: boolean;
  }): void {
    const {
      cx,
      cz,
      w,
      d,
      ceilingY,
      wellHeight,
      beamLength,
      lightColor = 0xfff0dc,
      lightIntensity,
      lightDistance,
      bounceColor = 0xe8efe9,
      bounceIntensity = 4.2,
      shaftColor = 0xffebd0,
      shaftOpacity = 0.11,
      castShadow = false,
      tiltX = 0,
      tiltZ = 0,
      underwaterBeamDepth = 0,
      useGlassBlocks = false
    } = params;

    const wallT = 0.36;
    const topY = ceilingY + wellHeight;
    this.addBlock(cx - w / 2 - wallT, cx - w / 2, ceilingY, topY, cz - d / 2, cz + d / 2, this.materials.whiteTile, { collide: false });
    this.addBlock(cx + w / 2, cx + w / 2 + wallT, ceilingY, topY, cz - d / 2, cz + d / 2, this.materials.whiteTile, { collide: false });
    this.addBlock(cx - w / 2 - wallT, cx + w / 2 + wallT, ceilingY, topY, cz - d / 2 - wallT, cz - d / 2, this.materials.whiteTile, { collide: false });
    this.addBlock(cx - w / 2 - wallT, cx + w / 2 + wallT, ceilingY, topY, cz + d / 2, cz + d / 2 + wallT, this.materials.whiteTile, { collide: false });

    const panelGeo = new THREE.PlaneGeometry(w, d);
    panelGeo.rotateX(Math.PI / 2);
    this.disposables.push(panelGeo);
    const panel = new THREE.Mesh(
      panelGeo,
      useGlassBlocks ? this.materials.glassBlock : this.skylightMat
    );
    panel.position.set(cx, topY - 0.04, cz);
    this.group.add(panel);

    const spot = new THREE.SpotLight(lightColor, lightIntensity, lightDistance, Math.PI * 0.44, 0.82, 1.45);
    spot.position.set(cx, ceilingY + wellHeight * 0.45, cz);
    const hitX = cx + tiltX * beamLength;
    const hitZ = cz + tiltZ * beamLength;
    spot.target.position.set(hitX, -1.2, hitZ);
    if (castShadow) {
      spot.castShadow = true;
      spot.shadow.mapSize.set(1024, 1024);
      spot.shadow.bias = -0.00042;
      spot.shadow.normalBias = 0.032;
      spot.shadow.camera.near = 0.8;
      spot.shadow.camera.far = lightDistance;
    }
    this.group.add(spot, spot.target);

    this.registerWaterLight(hitX, hitZ, Math.max(w, d) * 1.45 + 6.5, 1.0);

    if (bounceIntensity > 0.1) {
      const bounce = new THREE.PointLight(bounceColor, bounceIntensity, lightDistance * 0.85, 1.5);
      bounce.position.set(cx + tiltX * 2.2, Math.min(ceilingY - 2.0, 4.0), cz + tiltZ * 2.2);
      this.group.add(bounce);
    }

    if (shaftOpacity > 0.005) {
      const rTop = Math.min(w, d) * 0.46;
      const rBot = rTop * 1.85;
      const coneGeo = new THREE.CylinderGeometry(rTop, rBot, beamLength, 24, 1, true);
      const shaftMat = createVolumetricShaftMaterial(shaftColor, shaftOpacity, false);
      this.disposables.push(coneGeo, shaftMat);
      this.animatedShaftMats.push(shaftMat);
      const beam = new THREE.Mesh(coneGeo, shaftMat);
      beam.position.set(
        cx + tiltX * beamLength * 0.45,
        ceilingY - beamLength * 0.5 + 0.2,
        cz + tiltZ * beamLength * 0.45
      );
      beam.rotation.z = -tiltX * 0.45;
      beam.rotation.x = tiltZ * 0.45;
      beam.renderOrder = 3;
      this.group.add(beam);

      if (underwaterBeamDepth > 0.2) {
        const uwGeo = new THREE.CylinderGeometry(rTop * 1.15, rTop * 2.05, underwaterBeamDepth, 24, 1, true);
        const uwMat = createVolumetricShaftMaterial(shaftColor, Math.min(0.22, shaftOpacity * 1.35), true);
        this.disposables.push(uwGeo, uwMat);
        this.animatedShaftMats.push(uwMat);
        const uwBeam = new THREE.Mesh(uwGeo, uwMat);
        uwBeam.position.set(
          cx + tiltX * beamLength * 0.65,
          -underwaterBeamDepth * 0.5 - 0.04,
          cz + tiltZ * beamLength * 0.65
        );
        uwBeam.renderOrder = 1;
        this.group.add(uwBeam);
      }
    }
  }

  addRecessedCeilingLight(params: {
    x: number;
    ceilingY: number;
    z: number;
    w?: number;
    d?: number;
    color?: number;
    intensity?: number;
    distance?: number;
    hdrScale?: number;
    circular?: boolean;
  }): THREE.PointLight | null {
    const {
      x,
      ceilingY,
      z,
      w = 1.8,
      d = 1.8,
      color = 0xeaf6fa,
      intensity = 28,
      distance = 24,
      hdrScale = 1.9,
      circular = false
    } = params;

    const c = new THREE.Color(color);
    const panelMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(c.r * hdrScale, c.g * hdrScale, c.b * hdrScale),
      toneMapped: false
    });

    if (circular) {
      const r = w * 0.5;
      const bezelGeo = new THREE.RingGeometry(r, r + 0.09, 20);
      bezelGeo.rotateX(Math.PI / 2);
      const panelGeo = new THREE.CircleGeometry(r, 20);
      panelGeo.rotateX(Math.PI / 2);
      this.disposables.push(bezelGeo, panelGeo, panelMat);
      const bezel = new THREE.Mesh(bezelGeo, this.materials.chromeMetal);
      bezel.position.set(x, ceilingY - 0.015, z);
      const panel = new THREE.Mesh(panelGeo, panelMat);
      panel.position.set(x, ceilingY - 0.022, z);
      this.group.add(bezel, panel);
    } else {
      const bezelGeo = new THREE.BoxGeometry(w + 0.22, 0.10, d + 0.22);
      const panelGeo = new THREE.PlaneGeometry(w, d);
      panelGeo.rotateX(Math.PI / 2);
      this.disposables.push(bezelGeo, panelGeo, panelMat);
      const bezel = new THREE.Mesh(bezelGeo, this.materials.chromeMetal);
      bezel.position.set(x, ceilingY + 0.02, z);
      const panel = new THREE.Mesh(panelGeo, panelMat);
      panel.position.set(x, ceilingY - 0.032, z);
      this.group.add(bezel, panel);
    }

    if (intensity > 0.1) {
      const pt = new THREE.PointLight(color, intensity, distance, 1.48);
      pt.position.set(x, ceilingY - 0.55, z);
      this.group.add(pt);
      this.registerWaterLight(x, z, distance * 0.55, Math.min(0.85, intensity / 42));
      return pt;
    }
    return null;
  }

  addCeilingWithCutouts(
    minX: number,
    maxX: number,
    minZ: number,
    maxZ: number,
    ceilingY: number,
    cutouts: Array<{ cx: number; cz: number; w: number; d: number }>,
    mat: THREE.Material = this.materials.whiteTile
  ): void {
    const thick = 0.72;
    if (cutouts.length === 0) {
      this.addBlock(minX, maxX, ceilingY, ceilingY + thick, minZ, maxZ, mat, {
        collide: true,
        climbable: false,
        blocksWater: false
      });
      return;
    }

    const xs = new Set<number>([minX, maxX]);
    const zs = new Set<number>([minZ, maxZ]);
    for (const c of cutouts) {
      xs.add(THREE.MathUtils.clamp(c.cx - c.w * 0.5, minX, maxX));
      xs.add(THREE.MathUtils.clamp(c.cx + c.w * 0.5, minX, maxX));
      zs.add(THREE.MathUtils.clamp(c.cz - c.d * 0.5, minZ, maxZ));
      zs.add(THREE.MathUtils.clamp(c.cz + c.d * 0.5, minZ, maxZ));
    }
    const xArr = Array.from(xs).sort((a, b) => a - b);
    const zArr = Array.from(zs).sort((a, b) => a - b);

    for (let iz = 0; iz < zArr.length - 1; iz++) {
      const z0 = zArr[iz];
      const z1 = zArr[iz + 1];
      if (z1 - z0 < 0.02) continue;
      const zMid = (z0 + z1) * 0.5;

      let runStart: number | null = null;
      for (let ix = 0; ix < xArr.length - 1; ix++) {
        const x0 = xArr[ix];
        const x1 = xArr[ix + 1];
        if (x1 - x0 < 0.02) continue;
        const xMid = (x0 + x1) * 0.5;

        const insideCutout = cutouts.some(
          (c) =>
            xMid > c.cx - c.w * 0.5 + 0.005 &&
            xMid < c.cx + c.w * 0.5 - 0.005 &&
            zMid > c.cz - c.d * 0.5 + 0.005 &&
            zMid < c.cz + c.d * 0.5 - 0.005
        );

        if (!insideCutout) {
          if (runStart === null) runStart = x0;
        } else if (runStart !== null) {
          this.addBlock(runStart, x0, ceilingY, ceilingY + thick, z0, z1, mat, {
            collide: true,
            climbable: false,
            blocksWater: false
          });
          runStart = null;
        }
      }
      if (runStart !== null) {
        this.addBlock(runStart, xArr[xArr.length - 1], ceilingY, ceilingY + thick, z0, z1, mat, {
          collide: true,
          climbable: false,
          blocksWater: false
        });
      }
    }
  }

  async bakeLevelFieldAsync(
    onProgress?: (t: number) => void,
    customBounds?: {
      centerX: number;
      centerZ: number;
      sizeX: number;
      sizeZ: number;
    }
  ): Promise<LevelFieldData> {
    const N = 192;
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;

    if (customBounds) {
      minX = customBounds.centerX - customBounds.sizeX * 0.5;
      maxX = customBounds.centerX + customBounds.sizeX * 0.5;
      minZ = customBounds.centerZ - customBounds.sizeZ * 0.5;
      maxZ = customBounds.centerZ + customBounds.sizeZ * 0.5;
    } else {
      for (const b of this.colliders) {
        if (b.maxX - b.minX > 360) continue;
        minX = Math.min(minX, b.minX - 8);
        maxX = Math.max(maxX, b.maxX + 8);
        minZ = Math.min(minZ, b.minZ - 8);
        maxZ = Math.max(maxZ, b.maxZ + 8);
      }
      if (!Number.isFinite(minX)) {
        minX = -160;
        maxX = 160;
        minZ = -160;
        maxZ = 160;
      }
    }

    const centerX = (minX + maxX) * 0.5;
    const centerZ = (minZ + maxZ) * 0.5;
    const sizeX = Math.max(40, maxX - minX);
    const sizeZ = Math.max(40, maxZ - minZ);

    const rawWater = new Float32Array(N * N);
    const rawLitWater = new Float32Array(N * N);
    const rawOpenness = new Float32Array(N * N);
    const rawDepth = new Float32Array(N * N);

    const waterBlockers = this.colliders.filter(
      (b) => b.blocksWater !== false && b.maxY > WATER_LEVEL - 0.04 && b.minY < WATER_LEVEL + 0.6
    );
    const floorBoxes = this.colliders.filter((b) => b.maxY <= WATER_LEVEL + 0.02);
    const lowCeilings = this.colliders.filter((b) => b.minY > 1.8 && b.minY < 7.2 && b.maxX - b.minX < 280);

    const rowChunk = 32;
    for (let zStart = 0; zStart < N; zStart += rowChunk) {
      const zEnd = Math.min(N, zStart + rowChunk);
      for (let iz = zStart; iz < zEnd; iz++) {
        const wz = centerZ + ((iz + 0.5) / N - 0.5) * sizeZ;
        for (let ix = 0; ix < N; ix++) {
          const wx = centerX + ((ix + 0.5) / N - 0.5) * sizeX;
          const idx = iz * N + ix;

          let floorY = -36.0;
          for (let k = 0; k < floorBoxes.length; k++) {
            const b = floorBoxes[k];
            if (wx >= b.minX && wx <= b.maxX && wz >= b.minZ && wz <= b.maxZ) {
              if (b.maxY > floorY) floorY = b.maxY;
            }
          }

          let blocked = false;
          for (let k = 0; k < waterBlockers.length; k++) {
            const b = waterBlockers[k];
            if (wx >= b.minX && wx <= b.maxX && wz >= b.minZ && wz <= b.maxZ) {
              blocked = true;
              break;
            }
          }
          if (!blocked) {
            for (let k = 0; k < this.cylinders.length; k++) {
              const c = this.cylinders[k];
              if (c.maxY > WATER_LEVEL - 0.04 && c.minY < WATER_LEVEL + 0.6 && !c.inverted) {
                const dx = wx - c.cx;
                const dz = wz - c.cz;
                if (dx * dx + dz * dz <= c.radius * c.radius) {
                  blocked = true;
                  break;
                }
              }
            }
          }

          const waterDepth = Math.max(0, WATER_LEVEL - floorY);
          const isOpenWater = !blocked && waterDepth > 0.04 ? 1.0 : 0.0;
          rawWater[idx] = isOpenWater;
          rawDepth[idx] = THREE.MathUtils.clamp(waterDepth / 12.0, 0, 1);

          let lit = this.globalWaterSunlit;
          for (let k = 0; k < this.waterLights.length; k++) {
            const wl = this.waterLights[k];
            const d2 = (wx - wl.x) * (wx - wl.x) + (wz - wl.z) * (wz - wl.z);
            const r2 = wl.radius * wl.radius;
            if (d2 < r2) {
              const fall = 1.0 - Math.sqrt(d2 / r2);
              lit = Math.max(lit, fall * fall * wl.strength);
            }
          }
          rawLitWater[idx] = isOpenWater * THREE.MathUtils.clamp(lit, 0, 1);

          let enclosure = 0.94;
          for (let k = 0; k < lowCeilings.length; k++) {
            const c = lowCeilings[k];
            if (wx >= c.minX && wx <= c.maxX && wz >= c.minZ && wz <= c.maxZ) {
              const hFactor = THREE.MathUtils.clamp((c.minY - 2.2) / 5.0, 0, 1);
              enclosure = Math.min(enclosure, 0.72 + 0.22 * hFactor);
            }
          }

          enclosure = Math.min(1.0, enclosure + lit * 0.14);
          rawOpenness[idx] = enclosure;
        }
      }
      onProgress?.((zEnd / N) * 0.78);
      await yieldBuildFrame();
    }

    const blurChannel = (src: Float32Array, passes: number): Float32Array => {
      let a = src;
      let b = new Float32Array(N * N);
      for (let p = 0; p < passes; p++) {
        for (let z = 0; z < N; z++) {
          const row = z * N;
          for (let x = 0; x < N; x++) {
            const xm2 = Math.max(0, x - 2);
            const xm1 = Math.max(0, x - 1);
            const xp1 = Math.min(N - 1, x + 1);
            const xp2 = Math.min(N - 1, x + 2);
            b[row + x] =
              a[row + xm2] * 0.0625 +
              a[row + xm1] * 0.25 +
              a[row + x] * 0.375 +
              a[row + xp1] * 0.25 +
              a[row + xp2] * 0.0625;
          }
        }
        for (let z = 0; z < N; z++) {
          const zm2 = Math.max(0, z - 2) * N;
          const zm1 = Math.max(0, z - 1) * N;
          const z0 = z * N;
          const zp1 = Math.min(N - 1, z + 1) * N;
          const zp2 = Math.min(N - 1, z + 2) * N;
          for (let x = 0; x < N; x++) {
            a[z0 + x] =
              b[zm2 + x] * 0.0625 +
              b[zm1 + x] * 0.25 +
              b[z0 + x] * 0.375 +
              b[zp1 + x] * 0.25 +
              b[zp2 + x] * 0.0625;
          }
        }
      }
      return a;
    };

    const smoothWater = blurChannel(rawWater, 2);
    const smoothLit = blurChannel(rawLitWater, 3);
    const smoothOpen = blurChannel(rawOpenness, 3);
    const smoothDepth = blurChannel(rawDepth, 2);
    onProgress?.(0.95);
    await yieldBuildFrame();

    const rgba = new Uint8Array(N * N * 4);
    for (let i = 0; i < N * N; i++) {
      const k = i * 4;
      rgba[k] = Math.round(THREE.MathUtils.clamp(smoothWater[i], 0, 1) * 255);
      rgba[k + 1] = Math.round(THREE.MathUtils.clamp(smoothLit[i], 0, 1) * 255);
      rgba[k + 2] = Math.round(THREE.MathUtils.clamp(smoothOpen[i], 0, 1) * 255);
      rgba[k + 3] = Math.round(THREE.MathUtils.clamp(smoothDepth[i], 0, 1) * 255);
    }

    const texture = new THREE.DataTexture(rgba, N, N, THREE.RGBAFormat);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    this.disposables.push(texture);
    onProgress?.(1.0);

    return { texture, centerX, centerZ, sizeX, sizeZ, depthGrid: smoothDepth, gridRes: N };
  }

  updateAnimatedShafts(elapsedTime: number): void {
    for (let i = 0; i < this.animatedShaftMats.length; i++) {
      this.animatedShaftMats[i].uniforms.uTime.value = elapsedTime;
    }
  }

  dispose(): void {
    for (const d of this.disposables) {
      d.dispose();
    }
  }
}
