import * as THREE from 'three';
import { ColliderBox, ColliderCylinder } from './types';

export interface AcousticEnvironmentProbe {
  widthMeters: number;
  lengthMeters: number;
  leftDist: number;
  rightDist: number;
  ceilingDist: number;
  openSkyRatio: number;
  enclosureRatio: number;
  inDarkThreshold: number;
  averageRadius: number;
}

const MAX_PROBE_DIST = 120.0;

function normalizeAngleDiff(a: number, b: number): number {
  let d = (a - b) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return Math.abs(d);
}

function intersectRayBox(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  b: ColliderBox,
  maxT: number
): number {
  let tmin = 0.0;
  let tmax = maxT;

  if (Math.abs(dx) < 1e-6) {
    if (ox < b.minX || ox > b.maxX) return -1;
  } else {
    const inv = 1.0 / dx;
    let t1 = (b.minX - ox) * inv;
    let t2 = (b.maxX - ox) * inv;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return -1;
  }

  if (Math.abs(dy) < 1e-6) {
    if (oy < b.minY || oy > b.maxY) return -1;
  } else {
    const inv = 1.0 / dy;
    let t1 = (b.minY - oy) * inv;
    let t2 = (b.maxY - oy) * inv;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return -1;
  }

  if (Math.abs(dz) < 1e-6) {
    if (oz < b.minZ || oz > b.maxZ) return -1;
  } else {
    const inv = 1.0 / dz;
    let t1 = (b.minZ - oz) * inv;
    let t2 = (b.maxZ - oz) * inv;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return -1;
  }

  return tmin > 0.04 ? tmin : -1;
}

function intersectRayCylinder(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  c: ColliderCylinder,
  maxT: number
): number {
  const rx = ox - c.cx;
  const rz = oz - c.cz;
  const a = dx * dx + dz * dz;
  if (a < 1e-7) return -1;

  const bTerm = 2.0 * (rx * dx + rz * dz);
  const r = c.radius;
  const cTerm = rx * rx + rz * rz - r * r;
  const disc = bTerm * bTerm - 4.0 * a * cTerm;
  if (disc < 0) return -1;

  const sqrtD = Math.sqrt(disc);
  const inv2a = 0.5 / a;
  const t0 = (-bTerm - sqrtD) * inv2a;
  const t1 = (-bTerm + sqrtD) * inv2a;

  const candidates = t0 > 0.05 ? [t0, t1] : [t1];
  for (let i = 0; i < candidates.length; i++) {
    const t = candidates[i];
    if (t <= 0.05 || t >= maxT) continue;
    const hy = oy + dy * t;
    if (hy < c.minY || hy > c.maxY) continue;

    if (c.inverted && c.openings && c.openings.length > 0) {
      const hx = ox + dx * t;
      const hz = oz + dz * t;
      const ang = Math.atan2(hz - c.cz, hx - c.cx);
      let inOpening = false;
      for (let k = 0; k < c.openings.length; k++) {
        const op = c.openings[k];
        if (hy >= op.minY && hy <= op.maxY && normalizeAngleDiff(ang, op.angle) <= op.halfArc) {
          inOpening = true;
          break;
        }
      }
      if (inOpening) continue;
    }

    return t;
  }

  return -1;
}

export function castAcousticRay(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  maxDist: number,
  colliders: ReadonlyArray<ColliderBox>,
  cylinders: ReadonlyArray<ColliderCylinder>
): number {
  let closest = maxDist;

  for (let i = 0; i < colliders.length; i++) {
    const t = intersectRayBox(ox, oy, oz, dx, dy, dz, colliders[i], closest);
    if (t > 0 && t < closest) {
      closest = t;
    }
  }

  for (let i = 0; i < cylinders.length; i++) {
    const t = intersectRayCylinder(ox, oy, oz, dx, dy, dz, cylinders[i], closest);
    if (t > 0 && t < closest) {
      closest = t;
    }
  }

  return closest;
}

export function computeAcousticOcclusion(
  lx: number,
  ly: number,
  lz: number,
  ex: number,
  ey: number,
  ez: number,
  colliders: ReadonlyArray<ColliderBox>,
  cylinders: ReadonlyArray<ColliderCylinder>
): number {
  const vx = ex - lx;
  const vy = ey - ly;
  const vz = ez - lz;
  const dist = Math.hypot(vx, vy, vz);
  if (dist < 0.65) return 0.0;

  const invD = 1.0 / dist;
  const dx = vx * invD;
  const dy = vy * invD;
  const dz = vz * invD;
  const targetDist = Math.max(0.2, dist - 0.35);

  let blocked = 0;
  const centerHit = castAcousticRay(lx, ly, lz, dx, dy, dz, targetDist, colliders, cylinders);
  if (centerHit < targetDist - 0.15) blocked += 1.0;

  const px = -dz;
  const pz = dx;
  const pLen = Math.hypot(px, pz);
  if (pLen > 0.01) {
    const ox = (px / pLen) * 0.42;
    const oz = (pz / pLen) * 0.42;
    const leftHit = castAcousticRay(lx + ox, ly, lz + oz, dx, dy, dz, targetDist, colliders, cylinders);
    if (leftHit < targetDist - 0.15) blocked += 0.5;
    const rightHit = castAcousticRay(lx - ox, ly, lz - oz, dx, dy, dz, targetDist, colliders, cylinders);
    if (rightHit < targetDist - 0.15) blocked += 0.5;
  } else {
    blocked *= 2.0;
  }

  return THREE.MathUtils.clamp(blocked * 0.5, 0.0, 1.0);
}

const UP_DIAG_DIRS: ReadonlyArray<[number, number, number]> = [
  [0, 1, 0],
  [0.55, 0.835, 0],
  [-0.55, 0.835, 0],
  [0, 0.835, 0.55],
  [0, 0.835, -0.55]
];

export function probeAcousticEnvironment(
  listenerPos: THREE.Vector3,
  listenerRight: THREE.Vector3,
  listenerForward: THREE.Vector3,
  colliders: ReadonlyArray<ColliderBox>,
  cylinders: ReadonlyArray<ColliderCylinder>,
  hasOpenSky: boolean
): AcousticEnvironmentProbe {
  const ox = listenerPos.x;
  const oy = listenerPos.y;
  const oz = listenerPos.z;

  const rx = listenerRight.x;
  const rz = listenerRight.z;
  const rLen = Math.hypot(rx, rz) || 1;
  const rnx = rx / rLen;
  const rnz = rz / rLen;

  const fx = listenerForward.x;
  const fz = listenerForward.z;
  const fLen = Math.hypot(fx, fz) || 1;
  const fnx = fx / fLen;
  const fnz = fz / fLen;

  const rightDist = castAcousticRay(ox, oy, oz, rnx, 0, rnz, MAX_PROBE_DIST, colliders, cylinders);
  const leftDist = castAcousticRay(ox, oy, oz, -rnx, 0, -rnz, MAX_PROBE_DIST, colliders, cylinders);
  const frontDist = castAcousticRay(ox, oy, oz, fnx, 0, fnz, MAX_PROBE_DIST, colliders, cylinders);
  const backDist = castAcousticRay(ox, oy, oz, -fnx, 0, -fnz, MAX_PROBE_DIST, colliders, cylinders);

  const d1 = castAcousticRay(ox, oy, oz, 0.7071, 0, 0.7071, MAX_PROBE_DIST, colliders, cylinders);
  const d2 = castAcousticRay(ox, oy, oz, -0.7071, 0, 0.7071, MAX_PROBE_DIST, colliders, cylinders);
  const d3 = castAcousticRay(ox, oy, oz, 0.7071, 0, -0.7071, MAX_PROBE_DIST, colliders, cylinders);
  const d4 = castAcousticRay(ox, oy, oz, -0.7071, 0, -0.7071, MAX_PROBE_DIST, colliders, cylinders);

  const widthMeters = leftDist + rightDist;
  const lengthMeters = frontDist + backDist;
  const averageRadius = (leftDist + rightDist + frontDist + backDist + d1 + d2 + d3 + d4) / 8.0;

  let openRays = 0;
  let ceilingSum = 0;
  for (let i = 0; i < UP_DIAG_DIRS.length; i++) {
    const [ux, uy, uz] = UP_DIAG_DIRS[i];
    const hit = castAcousticRay(ox, oy, oz, ux, uy, uz, MAX_PROBE_DIST, colliders, cylinders);
    ceilingSum += hit;
    if (hit >= MAX_PROBE_DIST - 2.0) openRays++;
  }
  const ceilingDist = ceilingSum / UP_DIAG_DIRS.length;
  const openSkyRatio = hasOpenSky ? openRays / UP_DIAG_DIRS.length : (openRays / UP_DIAG_DIRS.length) * 0.25;

  let enclosedWalls = 0;
  const hRays = [leftDist, rightDist, frontDist, backDist, d1, d2, d3, d4];
  for (let i = 0; i < hRays.length; i++) {
    if (hRays[i] < 48.0) enclosedWalls++;
  }
  const enclosureRatio = THREE.MathUtils.clamp((enclosedWalls / 8.0) * (1.0 - openSkyRatio * 0.75), 0.0, 1.0);

  let inDarkThreshold = 0.0;
  const tightPassage = widthMeters < 3.4 && ceilingDist < 5.5;
  if (tightPassage) {
    const minSide = Math.min(leftDist, rightDist);
    const deadEndClose = Math.min(frontDist, backDist) < 12.0;
    if (minSide < 1.35 && deadEndClose) {
      inDarkThreshold = THREE.MathUtils.clamp((3.4 - widthMeters) / 1.6, 0.0, 1.0);
    }
  }

  for (let i = 0; i < cylinders.length; i++) {
    const c = cylinders[i];
    if (c.inverted && c.radius > 30.0 && c.radius < 55.0) {
      const radialDist = Math.hypot(ox - c.cx, oz - c.cz);
      if (radialDist > c.radius + 0.75 && oy > 10.0 && oy < 110.0) {
        const depthIn = radialDist - c.radius;
        const darkMix = THREE.MathUtils.smoothstep(depthIn, 0.75, 2.1);
        inDarkThreshold = Math.max(inDarkThreshold, darkMix);
      }
    }
  }

  return {
    widthMeters,
    lengthMeters,
    leftDist,
    rightDist,
    ceilingDist,
    openSkyRatio,
    enclosureRatio,
    inDarkThreshold,
    averageRadius
  };
}
