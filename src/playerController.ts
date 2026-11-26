import * as THREE from 'three';
import {
  ColliderBox,
  ColliderCylinder,
  LadderZone,
  PlayerMotionState,
  PlayerStateSnapshot,
  WATER_LEVEL,
  WaterCurrentZone,
  ZoneDefinition
} from './types';
import { WavePhysicsSample } from './waterShader';

export interface PlayerControllerCallbacks {
  onRipple?: (x: number, z: number, strength: number, radius?: number) => void;
  onFootstep?: (speed: number, isWet: boolean, stepSide: number) => void;
  onWadeStep?: (speed: number, depth: number, stepSide: number) => void;
  onSwimStroke?: (speed: number, underwater: boolean) => void;
  onWaterSplash?: (intensity: number) => void;
  onSubmerge?: (speed: number) => void;
  onEmerge?: () => void;
  onLadderStep?: (isWet: boolean, material: 'chrome' | 'steel', isFootStep: boolean) => void;
  onMantle?: (fromWater: boolean) => void;
  onFlashlightToggle?: (on: boolean) => void;
  onPointerLockChange?: (locked: boolean) => void;
}

const PLAYER_RADIUS = 0.36;
const PLAYER_HEIGHT = 1.72;
const EYE_HEIGHT = 1.54;
const STEP_HEIGHT = 0.38;
const MAX_MANTLE_HEIGHT = 1.56;
const GRAVITY = 16.0;
const RUNG_SPACING = 0.32;

function normalizeAngleDiff(a: number, b: number): number {
  let d = (a - b) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export class BodycamPlayerController {
  readonly camera: THREE.PerspectiveCamera;
  readonly flashlight: THREE.SpotLight;
  readonly flashlightTarget: THREE.Object3D;

  readonly position = new THREE.Vector3();
  readonly velocity = new THREE.Vector3();

  private colliders: ColliderBox[];
  private cylinders: ColliderCylinder[];
  private ladders: LadderZone[];
  private currents: WaterCurrentZone[];
  private zones: ZoneDefinition[];
  private readonly callbacks: PlayerControllerCallbacks;
  private readonly domElement: HTMLElement;

  private readonly keys = new Set<string>();
  private isLocked = false;
  private isPlaying = false;
  private isDragLooking = false;
  private yaw = 0;
  private pitch = -0.04;

  private smoothedYawVel = 0;
  private smoothedPitchVel = 0;
  private smoothedRoll = 0;
  private visualYOffset = 0;
  private bobPhase = 0;
  private stepAccum = 0;
  private stepParity = 1;
  private swimStrokeAccum = 0;
  private swimPulse = 0;

  private ladderRungAccum = 0;
  private ladderCyclePhase = 0;
  private ladderStepCount = 0;
  private ladderMountElapsed = 0;
  private ladderDismountCooldown = 0;
  private ladderCamOffsetX = 0;
  private ladderCamOffsetY = 0;
  private ladderCamRoll = 0;
  private ladderCamPitch = 0;

  private mantling = false;
  private mantleElapsed = 0;
  private mantleDuration = 0.48;
  private mantleFromLadder = false;
  private readonly mantleStart = new THREE.Vector3();
  private readonly mantleEnd = new THREE.Vector3();

  private activeLadder: LadderZone | null = null;
  private nearLadder = false;

  private grounded = false;
  private wasInWater = false;
  private wasUnderwater = false;
  private wetLensIntensity = 0;
  private motionState: PlayerMotionState = 'dry';
  private isUnderwater = false;
  private waterDepthAtFeet = 0;

  private flashlightOn = false;
  private flashlightBlend = 0;

  private readonly forwardVec = new THREE.Vector3();
  private readonly rightVec = new THREE.Vector3();
  private readonly moveDir = new THREE.Vector3();
  private readonly flashlightLagPos = new THREE.Vector3();
  private readonly flashlightLagDir = new THREE.Vector3(0, 0, -1);
  private readonly desiredLookDir = new THREE.Vector3();
  private readonly flTargetScratch = new THREE.Vector3();

  private readonly boundKeyDown: (e: KeyboardEvent) => void;
  private readonly boundKeyUp: (e: KeyboardEvent) => void;
  private readonly boundMouseMove: (e: MouseEvent) => void;
  private readonly boundMouseDown: (e: MouseEvent) => void;
  private readonly boundMouseUp: () => void;
  private readonly boundPointerLockChange: () => void;

  constructor(
    camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    domElement: HTMLElement,
    spawnPosition: THREE.Vector3,
    colliders: ColliderBox[],
    cylinders: ColliderCylinder[],
    ladders: LadderZone[],
    currents: WaterCurrentZone[],
    zones: ZoneDefinition[],
    callbacks: PlayerControllerCallbacks = {}
  ) {
    this.camera = camera;
    this.domElement = domElement;
    this.colliders = colliders;
    this.cylinders = cylinders;
    this.ladders = ladders;
    this.currents = currents;
    this.zones = zones;
    this.callbacks = callbacks;

    this.position.copy(spawnPosition);
    this.position.y += 0.04;
    this.camera.position.set(this.position.x, this.position.y + EYE_HEIGHT, this.position.z);
    this.camera.rotation.order = 'YXZ';

    this.flashlight = new THREE.SpotLight(0xe6f6f9, 0.0, 44, Math.PI * 0.25, 0.74, 1.45);
    this.flashlight.visible = true;
    this.flashlight.castShadow = true;
    this.flashlight.shadow.mapSize.set(1024, 1024);
    this.flashlight.shadow.bias = -0.00045;
    this.flashlight.shadow.normalBias = 0.03;
    this.flashlight.shadow.camera.near = 0.16;
    this.flashlight.shadow.camera.far = 44;

    this.flashlightTarget = new THREE.Object3D();
    scene.add(this.flashlight, this.flashlightTarget);
    this.flashlight.target = this.flashlightTarget;
    this.flashlightLagPos.copy(this.camera.position);

    this.boundKeyDown = this.handleKeyDown.bind(this);
    this.boundKeyUp = this.handleKeyUp.bind(this);
    this.boundMouseMove = this.handleMouseMove.bind(this);
    this.boundMouseDown = this.handleMouseDown.bind(this);
    this.boundMouseUp = this.handleMouseUp.bind(this);
    this.boundPointerLockChange = this.handlePointerLockChange.bind(this);

    window.addEventListener('keydown', this.boundKeyDown);
    window.addEventListener('keyup', this.boundKeyUp);
    window.addEventListener('mousemove', this.boundMouseMove);
    this.domElement.addEventListener('mousedown', this.boundMouseDown);
    window.addEventListener('mouseup', this.boundMouseUp);
    document.addEventListener('pointerlockchange', this.boundPointerLockChange);
  }

  loadLevel(
    colliders: ColliderBox[],
    cylinders: ColliderCylinder[],
    ladders: LadderZone[],
    currents: WaterCurrentZone[],
    zones: ZoneDefinition[],
    spawnPosition: THREE.Vector3,
    spawnYaw: number,
    defaultFlashlightOn: boolean
  ): void {
    this.colliders = colliders;
    this.cylinders = cylinders;
    this.ladders = ladders;
    this.currents = currents;
    this.zones = zones;
    this.position.copy(spawnPosition);
    this.position.y += 0.04;
    this.velocity.set(0, 0, 0);
    this.yaw = spawnYaw;
    this.pitch = -0.04;
    this.mantling = false;
    this.activeLadder = null;
    this.nearLadder = false;
    this.ladderMountElapsed = 0;
    this.ladderDismountCooldown = 0;
    this.ladderCamOffsetX = 0;
    this.ladderCamOffsetY = 0;
    this.ladderCamRoll = 0;
    this.ladderCamPitch = 0;
    this.visualYOffset = 0;
    this.grounded = false;
    this.wasInWater = false;
    this.wasUnderwater = false;
    this.wetLensIntensity = 0;
    this.stepAccum = 0;
    this.stepParity = 1;
    this.swimStrokeAccum = 0;
    this.flashlightOn = defaultFlashlightOn;
    this.flashlightBlend = defaultFlashlightOn ? 1 : 0;
    this.camera.position.set(spawnPosition.x, spawnPosition.y + EYE_HEIGHT, spawnPosition.z);
    this.flashlightLagPos.copy(this.camera.position);
  }

  setPlayingState(playing: boolean): void {
    if (this.isPlaying === playing) return;
    this.isPlaying = playing;
    if (!playing) {
      this.keys.clear();
      this.isDragLooking = false;
    }
    this.callbacks.onPointerLockChange?.(this.isPlaying);
  }

  enterAndLock(): void {
    this.setPlayingState(true);
    if (
      document.pointerLockElement !== this.domElement &&
      typeof this.domElement.requestPointerLock === 'function'
    ) {
      try {
        const result = this.domElement.requestPointerLock() as unknown as Promise<void> | undefined;
        if (result && typeof result.catch === 'function') {
          result.catch(() => {});
        }
      } catch {}
    }
  }

  get playing(): boolean {
    return this.isPlaying;
  }

  get locked(): boolean {
    return this.isLocked;
  }

  getFlashlightNormalizedIntensity(): number {
    return this.flashlightBlend;
  }

  private handlePointerLockChange(): void {
    const nowLocked = document.pointerLockElement === this.domElement;
    const wasLocked = this.isLocked;
    this.isLocked = nowLocked;
    if (nowLocked) {
      this.setPlayingState(true);
    } else if (wasLocked) {
      this.setPlayingState(false);
    }
  }

  private handleMouseDown(e: MouseEvent): void {
    if (e.button === 0 && this.isPlaying && !this.isLocked) {
      this.isDragLooking = true;
    }
  }

  private handleMouseUp(): void {
    this.isDragLooking = false;
  }

  private handleKeyDown(e: KeyboardEvent): void {
    const code = e.code;
    if (
      code === 'Space' ||
      code === 'ArrowUp' ||
      code === 'ArrowDown' ||
      code === 'ArrowLeft' ||
      code === 'ArrowRight'
    ) {
      if (this.isPlaying) e.preventDefault();
    }
    this.keys.add(code);

    if (code === 'KeyF' && this.isPlaying && !e.repeat) {
      this.flashlightOn = !this.flashlightOn;
      this.callbacks.onFlashlightToggle?.(this.flashlightOn);
    }
  }

  private handleKeyUp(e: KeyboardEvent): void {
    this.keys.delete(e.code);
  }

  private handleMouseMove(e: MouseEvent): void {
    if (!this.isLocked && !this.isDragLooking) return;
    const sensitivity = 0.00205;
    const dx = Math.max(-120, Math.min(120, e.movementX));
    const dy = Math.max(-120, Math.min(120, e.movementY));

    this.yaw -= dx * sensitivity;
    this.pitch = Math.max(-1.46, Math.min(1.46, this.pitch - dy * sensitivity));
    this.smoothedYawVel = THREE.MathUtils.clamp(
      this.smoothedYawVel + dx * 0.00125,
      -0.085,
      0.085
    );
    this.smoothedPitchVel = THREE.MathUtils.clamp(
      this.smoothedPitchVel + dy * 0.00055,
      -0.04,
      0.04
    );
  }

  private overlapsBox(x: number, feetY: number, z: number): ColliderBox | null {
    const minX = x - PLAYER_RADIUS;
    const maxX = x + PLAYER_RADIUS;
    const minY = feetY + 0.02;
    const maxY = feetY + PLAYER_HEIGHT;
    const minZ = z - PLAYER_RADIUS;
    const maxZ = z + PLAYER_RADIUS;

    for (let i = 0; i < this.colliders.length; i++) {
      const b = this.colliders[i];
      if (
        maxX > b.minX &&
        minX < b.maxX &&
        maxY > b.minY &&
        minY < b.maxY &&
        maxZ > b.minZ &&
        minZ < b.maxZ
      ) {
        return b;
      }
    }
    return null;
  }

  private resolveCylinders(): void {
    const feetY = this.position.y + 0.04;
    const headY = this.position.y + PLAYER_HEIGHT;

    for (let i = 0; i < this.cylinders.length; i++) {
      const c = this.cylinders[i];
      if (headY <= c.minY || feetY >= c.maxY) continue;

      const dx = this.position.x - c.cx;
      const dz = this.position.z - c.cz;
      const dist = Math.hypot(dx, dz);

      if (!c.inverted) {
        const minDist = c.radius + PLAYER_RADIUS;
        if (dist < minDist) {
          const nx = dist > 1e-5 ? dx / dist : 1;
          const nz = dist > 1e-5 ? dz / dist : 0;
          this.position.x = c.cx + nx * minDist;
          this.position.z = c.cz + nz * minDist;
        }
      } else {
        const rIn = c.radius;
        const rOut = c.radius + (c.thickness ?? 1.0);
        const ang = Math.atan2(dz, dx);

        if (c.openings) {
          let inOpening = false;
          for (let k = 0; k < c.openings.length; k++) {
            const op = c.openings[k];
            if (
              feetY >= op.minY - 0.15 &&
              headY <= op.maxY + 0.15 &&
              Math.abs(normalizeAngleDiff(ang, op.angle)) <= op.halfArc
            ) {
              inOpening = true;
              break;
            }
          }
          if (inOpening) continue;
        }

        const midShell = (rIn + rOut) * 0.5;
        if (dist < midShell && dist > rIn - PLAYER_RADIUS) {
          const nx = dist > 1e-5 ? dx / dist : 1;
          const nz = dist > 1e-5 ? dz / dist : 0;
          this.position.x = c.cx + nx * (rIn - PLAYER_RADIUS);
          this.position.z = c.cz + nz * (rIn - PLAYER_RADIUS);
        } else if (dist >= midShell && dist < rOut + PLAYER_RADIUS) {
          const nx = dist > 1e-5 ? dx / dist : 1;
          const nz = dist > 1e-5 ? dz / dist : 0;
          this.position.x = c.cx + nx * (rOut + PLAYER_RADIUS);
          this.position.z = c.cz + nz * (rOut + PLAYER_RADIUS);
        }
      }
    }
  }

  private findNearbyLadder(): LadderZone | null {
    let best: LadderZone | null = null;
    let bestDist = 1.18;
    for (let i = 0; i < this.ladders.length; i++) {
      const l = this.ladders[i];
      if (this.position.y + PLAYER_HEIGHT < l.minY - 0.45 || this.position.y > l.maxY + 0.42) continue;
      const d = Math.hypot(this.position.x - l.x, this.position.z - l.z);
      if (d < bestDist) {
        bestDist = d;
        best = l;
      }
    }
    return best;
  }

  private tryStartMantle(): boolean {
    const probeDist = PLAYER_RADIUS + 0.46;
    const probeX = this.position.x + this.forwardVec.x * probeDist;
    const probeZ = this.position.z + this.forwardVec.z * probeDist;

    let bestLedge: ColliderBox | null = null;
    let bestTop = -Infinity;

    for (let i = 0; i < this.colliders.length; i++) {
      const b = this.colliders[i];
      if (b.climbable === false) continue;
      if (probeX < b.minX - 0.16 || probeX > b.maxX + 0.16) continue;
      if (probeZ < b.minZ - 0.16 || probeZ > b.maxZ + 0.16) continue;

      const rise = b.maxY - this.position.y;
      if (rise >= STEP_HEIGHT * 0.82 && rise <= MAX_MANTLE_HEIGHT) {
        if (b.maxY > bestTop) {
          bestTop = b.maxY;
          bestLedge = b;
        }
      }
    }

    if (!bestLedge) return false;

    const landX = THREE.MathUtils.clamp(
      this.position.x + this.forwardVec.x * 0.68,
      bestLedge.minX + PLAYER_RADIUS * 0.55,
      bestLedge.maxX - PLAYER_RADIUS * 0.55
    );
    const landZ = THREE.MathUtils.clamp(
      this.position.z + this.forwardVec.z * 0.68,
      bestLedge.minZ + PLAYER_RADIUS * 0.55,
      bestLedge.maxZ - PLAYER_RADIUS * 0.55
    );
    const landY = bestLedge.maxY + 0.01;

    if (this.overlapsBox(landX, landY, landZ)) return false;

    const fromWater = this.waterDepthAtFeet > 0.25;
    this.mantling = true;
    this.mantleFromLadder = false;
    this.mantleDuration = fromWater ? 0.52 : 0.44;
    this.mantleElapsed = 0;
    this.mantleStart.copy(this.position);
    this.mantleEnd.set(landX, landY, landZ);
    this.velocity.set(0, 0, 0);
    this.callbacks.onMantle?.(fromWater);
    return true;
  }

  private moveHorizontal(dx: number, dz: number): void {
    const prevY = this.position.y;

    if (Math.abs(dx) > 1e-6) {
      const nextX = this.position.x + dx;
      const hit = this.overlapsBox(nextX, this.position.y, this.position.z);
      if (!hit) {
        this.position.x = nextX;
      } else {
        const stepDelta = hit.maxY - this.position.y;
        if (
          stepDelta > 0 &&
          stepDelta <= STEP_HEIGHT &&
          !this.overlapsBox(nextX, hit.maxY + 0.005, this.position.z)
        ) {
          this.position.x = nextX;
          this.position.y = hit.maxY;
        } else {
          this.velocity.x = 0;
        }
      }
    }

    if (Math.abs(dz) > 1e-6) {
      const nextZ = this.position.z + dz;
      const hit = this.overlapsBox(this.position.x, this.position.y, nextZ);
      if (!hit) {
        this.position.z = nextZ;
      } else {
        const stepDelta = hit.maxY - this.position.y;
        if (
          stepDelta > 0 &&
          stepDelta <= STEP_HEIGHT &&
          !this.overlapsBox(this.position.x, hit.maxY + 0.005, nextZ)
        ) {
          this.position.z = nextZ;
          this.position.y = hit.maxY;
        } else {
          this.velocity.z = 0;
        }
      }
    }

    this.resolveCylinders();

    const stepped = this.position.y - prevY;
    if (stepped > 0.005) {
      this.visualYOffset -= stepped;
    }
  }

  private moveVertical(dy: number): void {
    const nextY = this.position.y + dy;
    const minX = this.position.x - PLAYER_RADIUS;
    const maxX = this.position.x + PLAYER_RADIUS;
    const minZ = this.position.z - PLAYER_RADIUS;
    const maxZ = this.position.z + PLAYER_RADIUS;

    this.grounded = false;

    if (dy <= 0) {
      let bestFloor = -Infinity;
      for (let i = 0; i < this.colliders.length; i++) {
        const b = this.colliders[i];
        if (maxX > b.minX && minX < b.maxX && maxZ > b.minZ && minZ < b.maxZ) {
          if (b.maxY <= this.position.y + 0.09 && b.maxY >= nextY - 0.001) {
            if (b.maxY > bestFloor) bestFloor = b.maxY;
          }
        }
      }
      if (bestFloor > -Infinity) {
        this.position.y = bestFloor;
        this.velocity.y = 0;
        this.grounded = true;
      } else {
        this.position.y = nextY;
      }
    } else {
      let lowestCeiling = Infinity;
      const headNow = this.position.y + PLAYER_HEIGHT;
      const headNext = nextY + PLAYER_HEIGHT;
      for (let i = 0; i < this.colliders.length; i++) {
        const b = this.colliders[i];
        if (maxX > b.minX && minX < b.maxX && maxZ > b.minZ && minZ < b.maxZ) {
          if (b.minY >= headNow - 0.08 && b.minY <= headNext + 0.001) {
            if (b.minY < lowestCeiling) lowestCeiling = b.minY;
          }
        }
      }
      if (lowestCeiling < Infinity) {
        this.position.y = lowestCeiling - PLAYER_HEIGHT;
        this.velocity.y = 0;
      } else {
        this.position.y = nextY;
      }
    }
  }

  private getFloorBeneath(): number {
    const minX = this.position.x - PLAYER_RADIUS * 0.85;
    const maxX = this.position.x + PLAYER_RADIUS * 0.85;
    const minZ = this.position.z - PLAYER_RADIUS * 0.85;
    const maxZ = this.position.z + PLAYER_RADIUS * 0.85;
    let best = -48;
    for (let i = 0; i < this.colliders.length; i++) {
      const b = this.colliders[i];
      if (maxX > b.minX && minX < b.maxX && maxZ > b.minZ && minZ < b.maxZ) {
        if (b.maxY <= this.position.y + 0.25 && b.maxY > best) {
          best = b.maxY;
        }
      }
    }
    return best;
  }

  private getLocalCurrent(x: number, z: number): { vx: number; vz: number } {
    let vx = 0;
    let vz = 0;
    for (let i = 0; i < this.currents.length; i++) {
      const c = this.currents[i];
      if (x >= c.minX && x <= c.maxX && z >= c.minZ && z <= c.maxZ) {
        vx += c.vx;
        vz += c.vz;
      }
    }
    return { vx, vz };
  }

  update(
    dt: number,
    elapsedTime: number,
    sampleWavePhysics: (x: number, z: number, t: number) => WavePhysicsSample,
    levelBaseLuminance = 0.35
  ): PlayerStateSnapshot {
    const clampedDt = Math.min(dt, 0.05);
    if (this.ladderDismountCooldown > 0) {
      this.ladderDismountCooldown = Math.max(0, this.ladderDismountCooldown - clampedDt);
    }

    const forwardInput =
      (this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0) -
      (this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0);
    const strafeInput =
      (this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0) -
      (this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0);
    const sprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight');
    const ascend = this.keys.has('Space');
    const dive =
      this.keys.has('KeyC') || this.keys.has('ControlLeft') || this.keys.has('ControlRight');

    this.forwardVec.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this.rightVec.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    this.moveDir.set(0, 0, 0);
    if (this.isPlaying) {
      this.moveDir
        .addScaledVector(this.forwardVec, forwardInput)
        .addScaledVector(this.rightVec, strafeInput);
      if (this.moveDir.lengthSq() > 0.001) {
        this.moveDir.normalize();
      }
    }

    const wavePhys = sampleWavePhysics(this.position.x, this.position.z, elapsedTime);
    const localWaterY = wavePhys.height;
    const localCurr = this.getLocalCurrent(this.position.x, this.position.z);

    const floorY = this.getFloorBeneath();
    const waterColumnDepth = localWaterY - floorY;
    this.waterDepthAtFeet = Math.max(0, localWaterY - this.position.y);
    const eyeWorldY = this.position.y + EYE_HEIGHT;
    this.isUnderwater = eyeWorldY < localWaterY - 0.03;

    if (!this.wasUnderwater && this.isUnderwater) {
      this.callbacks.onSubmerge?.(Math.abs(this.velocity.y) + 1.0);
      this.callbacks.onRipple?.(this.position.x, this.position.z, 0.9, 0.55);
    } else if (this.wasUnderwater && !this.isUnderwater) {
      this.wetLensIntensity = 1.0;
      this.callbacks.onEmerge?.();
      this.callbacks.onRipple?.(this.position.x, this.position.z, 1.0, 0.58);
    } else if (
      !this.isUnderwater &&
      localWaterY > WATER_LEVEL + 0.24 &&
      this.position.y < localWaterY + 0.45
    ) {
      this.wetLensIntensity = Math.max(this.wetLensIntensity, 0.52);
    }
    this.wasUnderwater = this.isUnderwater;

    if (this.isUnderwater) {
      this.wetLensIntensity = 0;
    } else if (this.wetLensIntensity > 0) {
      this.wetLensIntensity = Math.max(0, this.wetLensIntensity - clampedDt * 0.22);
    }

    const nearbyLadder = this.findNearbyLadder();
    this.nearLadder = nearbyLadder !== null;

    if (
      !this.activeLadder &&
      !this.mantling &&
      this.ladderDismountCooldown <= 0 &&
      nearbyLadder &&
      this.isPlaying
    ) {
      const facingLadder =
        this.forwardVec.x * -nearbyLadder.normalX + this.forwardVec.z * -nearbyLadder.normalZ;
      const wantsClimbUp = (forwardInput > 0 && facingLadder > 0.20) || (ascend && facingLadder > -0.15);
      const wantsClimbDown =
        (forwardInput < 0 || dive) &&
        this.position.y > nearbyLadder.maxY - 0.85 &&
        Math.hypot(this.position.x - nearbyLadder.x, this.position.z - nearbyLadder.z) < 1.1;

      if (wantsClimbUp || wantsClimbDown) {
        this.activeLadder = nearbyLadder;
        this.ladderMountElapsed = 0;
        this.ladderRungAccum = 0;
        this.velocity.set(0, 0, 0);
        this.grounded = false;
        const wet = this.position.y < WATER_LEVEL + 1.8;
        this.callbacks.onLadderStep?.(wet, nearbyLadder.material ?? 'chrome', false);
      }
    }

    const inDeepWater = this.waterDepthAtFeet > 0.88 && waterColumnDepth > 1.02;
    const isSwimming = !this.activeLadder && (inDeepWater || this.isUnderwater);
    const isWading = !this.activeLadder && !isSwimming && this.waterDepthAtFeet > 0.06;

    const nowInWater = this.waterDepthAtFeet > 0.14;
    if (nowInWater && !this.wasInWater && this.velocity.y < -0.55) {
      const impact = THREE.MathUtils.clamp(Math.abs(this.velocity.y) / 6.0, 0.35, 1.0);
      this.callbacks.onWaterSplash?.(impact);
      this.callbacks.onRipple?.(this.position.x, this.position.z, 0.95 + impact * 0.55, 0.58);
      if (impact > 0.5) {
        this.wetLensIntensity = Math.max(this.wetLensIntensity, impact * 0.6);
      }
    }
    this.wasInWater = nowInWater;

    let mantlePitchOffset = 0;
    let mantleRollOffset = 0;
    let targetLadderX = 0;
    let targetLadderY = 0;
    let targetLadderRoll = 0;
    let targetLadderPitch = 0;

    if (this.activeLadder) {
      this.motionState = 'climbing';
      const lad = this.activeLadder;
      this.grounded = false;
      this.ladderMountElapsed += clampedDt;

      const mountEase = Math.min(1, this.ladderMountElapsed / 0.28);
      const alignRate = THREE.MathUtils.lerp(7.0, 11.5, mountEase);
      const align = 1 - Math.exp(-alignRate * clampedDt);
      this.position.x = THREE.MathUtils.lerp(this.position.x, lad.x, align);
      this.position.z = THREE.MathUtils.lerp(this.position.z, lad.z, align);

      const climbDir = (forwardInput > 0 || ascend ? 1 : 0) - (forwardInput < 0 || dive ? 1 : 0);
      const baseSpeed = sprint ? 1.56 : 1.18;
      const pullCurve = 0.78 + 0.44 * Math.pow(Math.sin(this.ladderCyclePhase), 2);
      const climbSpeed = baseSpeed * pullCurve * climbDir * THREE.MathUtils.smoothstep(mountEase, 0, 1);

      this.position.y += climbSpeed * clampedDt;
      this.velocity.set(0, climbSpeed, 0);

      if (Math.abs(climbDir) > 0) {
        const distStep = Math.abs(climbSpeed) * clampedDt;
        this.ladderRungAccum += distStep;
        this.ladderCyclePhase += (distStep / RUNG_SPACING) * Math.PI;

        const swayWave = Math.sin(this.ladderCyclePhase * 0.5);
        const pullWave = Math.sin(this.ladderCyclePhase);
        targetLadderX = swayWave * 0.036;
        targetLadderY = pullWave * 0.028;
        targetLadderRoll = -swayWave * 0.022;
        targetLadderPitch = Math.cos(this.ladderCyclePhase) * 0.016 * climbDir;

        if (this.ladderRungAccum >= RUNG_SPACING) {
          this.ladderRungAccum -= RUNG_SPACING;
          this.ladderStepCount++;
          const isWet = this.position.y < WATER_LEVEL + 2.2;
          const isFootStep = this.ladderStepCount % 2 === 1;
          this.callbacks.onLadderStep?.(isWet, lad.material ?? 'chrome', isFootStep);
          if (this.waterDepthAtFeet > 0.05 && this.waterDepthAtFeet < 1.8) {
            this.callbacks.onRipple?.(this.position.x, this.position.z, 0.36, 0.38);
          }
        }
      } else {
        targetLadderPitch = -0.015 * Math.sin(this.ladderMountElapsed * 1.6);
      }

      if (this.position.y >= lad.maxY - 0.16 && climbDir >= 0) {
        this.activeLadder = null;
        this.mantling = true;
        this.mantleFromLadder = true;
        this.mantleDuration = 0.56;
        this.mantleElapsed = 0;
        this.mantleStart.copy(this.position);
        this.mantleEnd.set(lad.topExitX, lad.topExitY, lad.topExitZ);
        this.callbacks.onMantle?.(false);
      } else if (
        (this.position.y < lad.minY - 0.18 && climbDir <= 0) ||
        (Math.abs(strafeInput) > 0 && climbDir === 0 && this.ladderMountElapsed > 0.25)
      ) {
        this.activeLadder = null;
        this.ladderDismountCooldown = 0.38;
        this.velocity.set(lad.normalX * 1.25, 0.12, lad.normalZ * 1.25);
      }
    } else if (this.mantling) {
      this.motionState = 'mantling';
      this.mantleElapsed += clampedDt;
      const t = Math.min(1, this.mantleElapsed / this.mantleDuration);

      const yPhase = this.mantleFromLadder ? THREE.MathUtils.clamp(t / 0.62, 0, 1) : THREE.MathUtils.clamp(t / 0.68, 0, 1);
      const xzPhase = this.mantleFromLadder
        ? THREE.MathUtils.clamp((t - 0.24) / 0.76, 0, 1)
        : THREE.MathUtils.clamp((t - 0.18) / 0.82, 0, 1);

      const easeY = 1 - Math.pow(1 - yPhase, 3);
      const easeXZ = xzPhase * xzPhase * (3 - 2 * xzPhase);

      this.position.x = THREE.MathUtils.lerp(this.mantleStart.x, this.mantleEnd.x, easeXZ);
      this.position.z = THREE.MathUtils.lerp(this.mantleStart.z, this.mantleEnd.z, easeXZ);
      this.position.y = THREE.MathUtils.lerp(this.mantleStart.y, this.mantleEnd.y, easeY);

      mantlePitchOffset = -Math.sin(t * Math.PI) * (this.mantleFromLadder ? 0.11 : 0.085);
      mantleRollOffset = Math.sin(t * Math.PI * 2) * 0.026;

      if (t >= 1) {
        this.mantling = false;
        this.grounded = true;
      }
    } else if (isSwimming) {
      this.motionState = this.isUnderwater ? 'underwater' : 'swimming';

      if (this.isPlaying && ascend && !this.isUnderwater && this.tryStartMantle()) {
      } else {
        this.swimPulse *= Math.exp(-3.2 * clampedDt);
        const baseSwimSpeed = sprint ? 3.85 : 2.55;
        const pulsedSpeed = baseSwimSpeed * (0.86 + this.swimPulse * 0.34);

        const subAtten = this.isUnderwater
          ? Math.exp(-Math.max(0, localWaterY - eyeWorldY) * 0.45)
          : 1.0;
        const surgeVx = wavePhys.surgeVx * 0.55 * subAtten + localCurr.vx;
        const surgeVz = wavePhys.surgeVz * 0.55 * subAtten + localCurr.vz;

        const waterAccel = 3.8;
        const targetVx = this.moveDir.x * pulsedSpeed + surgeVx;
        const targetVz = this.moveDir.z * pulsedSpeed + surgeVz;
        let targetVy = 0;

        if (this.isPlaying) {
          if (ascend) {
            targetVy = sprint ? 2.65 : 1.95;
          } else if (dive) {
            targetVy = sprint ? -2.65 : -1.95;
          } else if (this.isUnderwater && Math.abs(forwardInput) > 0) {
            targetVy = Math.sin(this.pitch) * forwardInput * pulsedSpeed * 0.88 - 0.08;
          } else {
            const surfaceFloatFeetY = localWaterY - 1.24;
            const floatErr = surfaceFloatFeetY - this.position.y;
            targetVy = THREE.MathUtils.clamp(floatErr * 3.2, -1.75, 1.95);
          }
        }

        if (this.position.y > localWaterY - 1.04 && targetVy > 0 && !this.grounded) {
          targetVy = ascend ? 2.35 : Math.min(targetVy, 0.35);
        }

        const blend = 1 - Math.exp(-waterAccel * clampedDt);
        this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, targetVx, blend);
        this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, targetVz, blend);
        this.velocity.y = THREE.MathUtils.lerp(this.velocity.y, targetVy, blend);

        this.moveHorizontal(this.velocity.x * clampedDt, this.velocity.z * clampedDt);
        this.moveVertical(this.velocity.y * clampedDt);
      }
    } else {
      this.motionState = isWading ? 'wading' : 'dry';

      const depthNorm = THREE.MathUtils.clamp(this.waterDepthAtFeet / 0.96, 0, 1);
      const dragFactor = isWading
        ? THREE.MathUtils.lerp(0.89, 0.48, depthNorm * depthNorm * 0.5 + depthNorm * 0.5)
        : 1.0;
      const baseSpeed = (sprint ? 5.6 : 3.55) * dragFactor;
      const accel = this.grounded
        ? isWading
          ? THREE.MathUtils.lerp(9.2, 4.5, depthNorm)
          : 14.5
        : 3.5;

      const wadeSurge = isWading ? depthNorm * 0.42 : 0;
      const targetVx = this.moveDir.x * baseSpeed + (wavePhys.surgeVx + localCurr.vx) * wadeSurge;
      const targetVz = this.moveDir.z * baseSpeed + (wavePhys.surgeVz + localCurr.vz) * wadeSurge;
      const blend = 1 - Math.exp(-accel * clampedDt);

      this.velocity.x = THREE.MathUtils.lerp(this.velocity.x, targetVx, blend);
      this.velocity.z = THREE.MathUtils.lerp(this.velocity.z, targetVz, blend);

      if (ascend && this.isPlaying) {
        if ((this.grounded || this.velocity.y > -2.5) && this.tryStartMantle()) {
        } else if (this.grounded) {
          this.velocity.y = isWading ? THREE.MathUtils.lerp(5.25, 4.05, depthNorm) : 5.8;
          this.grounded = false;
          if (isWading) {
            this.callbacks.onWaterSplash?.(0.42);
            this.callbacks.onRipple?.(this.position.x, this.position.z, 0.78, 0.52);
          }
        }
      }

      if (!this.mantling) {
        this.velocity.y -= GRAVITY * clampedDt;
        this.moveHorizontal(this.velocity.x * clampedDt, this.velocity.z * clampedDt);
        this.moveVertical(this.velocity.y * clampedDt);
      }
    }

    const horizSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    const totalSpeed = this.velocity.length();

    if (this.motionState === 'swimming' || this.motionState === 'underwater' || this.isUnderwater) {
      this.stepAccum = 0;
      if (totalSpeed > 0.32) {
        this.swimStrokeAccum += totalSpeed * clampedDt;
        if (this.swimStrokeAccum >= 1.92) {
          this.swimStrokeAccum = 0;
          this.swimPulse = 1.0;
          this.callbacks.onSwimStroke?.(totalSpeed, this.isUnderwater);
          if (!this.isUnderwater) {
            this.callbacks.onRipple?.(
              this.position.x,
              this.position.z,
              0.72 + Math.min(0.42, totalSpeed * 0.12),
              0.52
            );
          }
        }
      }
    } else if (
      this.motionState === 'wading' &&
      !this.isUnderwater &&
      this.waterDepthAtFeet > 0.04 &&
      this.waterDepthAtFeet <= 0.88
    ) {
      this.swimStrokeAccum = 0;
      if (this.grounded && horizSpeed > 0.28) {
        this.stepAccum += horizSpeed * clampedDt;
        if (this.stepAccum >= 1.48) {
          this.stepAccum = 0;
          this.stepParity = -this.stepParity;
          this.callbacks.onWadeStep?.(horizSpeed, this.waterDepthAtFeet, this.stepParity);
          this.callbacks.onRipple?.(
            this.position.x,
            this.position.z,
            0.55 + Math.min(0.45, horizSpeed * 0.13),
            0.46
          );
        }
      }
    } else if (this.motionState === 'dry' && !this.isUnderwater && this.waterDepthAtFeet <= 0.04) {
      this.swimStrokeAccum = 0;
      if (this.grounded && horizSpeed > 0.3) {
        const strideLen = sprint ? 2.15 : 1.72;
        this.stepAccum += horizSpeed * clampedDt;
        if (this.stepAccum >= strideLen) {
          this.stepAccum = 0;
          this.stepParity = -this.stepParity;
          const isDampTile = this.position.y - localWaterY < 0.85;
          this.callbacks.onFootstep?.(horizSpeed, isDampTile, this.stepParity);
        }
      }
    }

    const ladderCamSmooth = 1 - Math.exp(-9.0 * clampedDt);
    this.ladderCamOffsetX = THREE.MathUtils.lerp(this.ladderCamOffsetX, targetLadderX, ladderCamSmooth);
    this.ladderCamOffsetY = THREE.MathUtils.lerp(this.ladderCamOffsetY, targetLadderY, ladderCamSmooth);
    this.ladderCamRoll = THREE.MathUtils.lerp(this.ladderCamRoll, targetLadderRoll, ladderCamSmooth);
    this.ladderCamPitch = THREE.MathUtils.lerp(this.ladderCamPitch, targetLadderPitch, ladderCamSmooth);

    this.visualYOffset *= Math.exp(-14.5 * clampedDt);

    let bobY = this.ladderCamOffsetY;
    let bobX = this.ladderCamOffsetX;
    let bobRoll = this.ladderCamRoll;
    if (this.motionState === 'swimming' || this.motionState === 'underwater') {
      bobY = Math.sin(elapsedTime * 1.75) * 0.044;
      bobX = Math.cos(elapsedTime * 1.05) * 0.028;
      bobRoll = Math.sin(elapsedTime * 1.25) * 0.018 + wavePhys.surgeVx * 0.012;
    } else if (
      this.grounded &&
      (this.motionState === 'dry' || this.motionState === 'wading') &&
      horizSpeed > 0.2
    ) {
      const bobFreq = this.motionState === 'wading' ? 6.4 : sprint ? 11.2 : 8.2;
      this.bobPhase += clampedDt * bobFreq * Math.min(1.15, horizSpeed / 3.3);
      const bobAmp =
        Math.min(1.0, horizSpeed / 3.2) *
        (this.motionState === 'wading' ? 0.042 : sprint ? 0.046 : 0.03);
      bobY = Math.sin(this.bobPhase * 2) * bobAmp;
      bobX = Math.cos(this.bobPhase) * bobAmp * 0.65;
      bobRoll = Math.cos(this.bobPhase) * (this.motionState === 'wading' ? 0.014 : 0.008);
    } else if (this.motionState !== 'climbing') {
      bobY += Math.sin(elapsedTime * 1.25) * 0.006;
    }

    this.smoothedYawVel *= Math.exp(-9.2 * clampedDt);
    this.smoothedPitchVel *= Math.exp(-10.0 * clampedDt);
    const targetRoll =
      -strafeInput * 0.018 - this.smoothedYawVel * 0.68 + bobRoll + mantleRollOffset;
    this.smoothedRoll = THREE.MathUtils.lerp(
      this.smoothedRoll,
      targetRoll,
      1 - Math.exp(-10.5 * clampedDt)
    );

    this.camera.position.set(
      this.position.x + this.rightVec.x * bobX,
      this.position.y + EYE_HEIGHT + this.visualYOffset + bobY,
      this.position.z + this.rightVec.z * bobX
    );
    this.camera.rotation.set(
      this.pitch + mantlePitchOffset + this.ladderCamPitch - this.smoothedPitchVel * 0.3,
      this.yaw,
      this.smoothedRoll,
      'YXZ'
    );

    const targetFl = this.flashlightOn ? 1.0 : 0.0;
    this.flashlightBlend += (targetFl - this.flashlightBlend) * (1 - Math.exp(-24.0 * clampedDt));

    this.camera.getWorldDirection(this.desiredLookDir);
    const flLag = 1 - Math.exp(-13.5 * clampedDt);
    this.flTargetScratch.set(
      this.camera.position.x + this.rightVec.x * 0.16,
      this.camera.position.y - 0.14,
      this.camera.position.z + this.rightVec.z * 0.16
    );
    this.flashlightLagPos.lerp(this.flTargetScratch, flLag);
    this.flashlightLagDir.lerp(this.desiredLookDir, flLag).normalize();

    this.flashlight.position.copy(this.flashlightLagPos);
    this.flashlightTarget.position
      .copy(this.flashlightLagPos)
      .addScaledVector(this.flashlightLagDir, 8.0);
    const maxFlIntensity = this.isUnderwater ? 12.5 : 18.0;
    this.flashlight.intensity = this.flashlightBlend * maxFlIntensity;
    this.flashlight.color.setHex(this.isUnderwater ? 0x92eaf5 : 0xeaf7fa);

    const lookingUpBoost = Math.max(0, Math.sin(this.pitch)) * 0.38;
    const underwaterDarken = this.isUnderwater ? -0.20 : 0;
    const flashlightBoost = this.flashlightBlend * 0.06;
    const estimatedLuminance = THREE.MathUtils.clamp(
      levelBaseLuminance + lookingUpBoost + underwaterDarken + flashlightBoost,
      0.08,
      1.25
    );

    let zoneLabel = this.zones[0]?.label ?? 'POOLROOMS';
    for (const z of this.zones) {
      const yOk =
        (z.minY === undefined || this.position.y >= z.minY) &&
        (z.maxY === undefined || this.position.y <= z.maxY);
      if (
        yOk &&
        this.position.x >= z.minX &&
        this.position.x <= z.maxX &&
        this.position.z >= z.minZ &&
        this.position.z <= z.maxZ
      ) {
        zoneLabel = z.label;
        break;
      }
    }

    return {
      position: { x: this.position.x, y: this.position.y, z: this.position.z },
      velocity: { x: this.velocity.x, y: this.velocity.y, z: this.velocity.z },
      horizontalSpeed: horizSpeed,
      motionState: this.motionState,
      isUnderwater: this.isUnderwater,
      nearLadder: this.nearLadder && !this.activeLadder,
      waterDepthAtFeet: this.waterDepthAtFeet,
      flashlightOn: this.flashlightOn,
      zoneLabel,
      wetLensIntensity: this.wetLensIntensity,
      estimatedLuminance
    };
  }

  getFlashlightWorldDirection(target: THREE.Vector3): THREE.Vector3 {
    return target.copy(this.flashlightLagDir);
  }

  dispose(): void {
    window.removeEventListener('keydown', this.boundKeyDown);
    window.removeEventListener('keyup', this.boundKeyUp);
    window.removeEventListener('mousemove', this.boundMouseMove);
    this.domElement.removeEventListener('mousedown', this.boundMouseDown);
    window.removeEventListener('mouseup', this.boundMouseUp);
    document.removeEventListener('pointerlockchange', this.boundPointerLockChange);
  }
}
