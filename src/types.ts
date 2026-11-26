import * as THREE from 'three';

export const WATER_LEVEL = 0.0;

export interface ColliderBox {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  surface?: 'tile' | 'stone' | 'metal' | 'wood' | 'glass';
  climbable?: boolean;
  blocksWater?: boolean;
}

export interface ColliderCylinder {
  cx: number;
  cz: number;
  radius: number;
  minY: number;
  maxY: number;
  inverted?: boolean;
  thickness?: number;
  openings?: Array<{ angle: number; halfArc: number; minY: number; maxY: number }>;
}

export interface LadderZone {
  x: number;
  z: number;
  normalX: number;
  normalZ: number;
  minY: number;
  maxY: number;
  topExitX: number;
  topExitY: number;
  topExitZ: number;
  material?: 'chrome' | 'steel';
}

export interface WaterCurrentZone {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  vx: number;
  vz: number;
}

export interface ZoneDefinition {
  id: string;
  label: string;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  minY?: number;
  maxY?: number;
}

export interface ExitTrigger {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  nextLevelIndex: number;
}

export interface LevelFieldData {
  texture: THREE.DataTexture;
  centerX: number;
  centerZ: number;
  sizeX: number;
  sizeZ: number;
  depthGrid?: Float32Array;
  gridRes?: number;
}

export interface WaterVisualStyle {
  absorption: [number, number, number];
  deepColor: [number, number, number];
  shallowColor: [number, number, number];
  reflectionTint: [number, number, number];
  waveAmplitude: number;
  choppiness: number;
  waveSpeed: number;
  turbulence?: number;
  depthWaveDamping?: number;
  foamStrength: number;
  sunDirection: [number, number, number];
  sunSpecularColor: [number, number, number];
  specularIntensity?: number;
  wetBandHeight: number;
  causticStrength: number;
  wallBounceCaustic: number;
  underwaterFogColor: number;
  underwaterFogDensity: number;
  planeCenter: [number, number];
  planeSize: [number, number];
  flowVelocity?: [number, number];
}

export type EnvPreset =
  | 'overcast-mist'
  | 'abyss-courtyard'
  | 'silo-purgatory'
  | 'azure-horizon'
  | 'basilica-zenith';

export type AudioProfile =
  | 'stage01-glass-halls'
  | 'stage02-perforated-abyss'
  | 'stage03-sunken-purgatory'
  | 'stage04-azure-spires'
  | 'stage05-abyssal-basilica';

export interface LevelEnvironmentStyle {
  fogColor: number;
  fogDensity: number;
  heightMistColor?: number;
  heightMistStartY?: number;
  heightMistEndY?: number;
  heightMistStrength?: number;
  indirectFillColor: number;
  indirectFillIntensity: number;
  envPreset: EnvPreset;
  envIntensity: number;
  baseExposure: number;
  warmthGrade: number;
  grimeStrength: number;
  glassGlowColor?: number;
  glassGlowIntensity?: number;
  ssaoIntensity?: number;
  bloomIntensity?: number;
  audioProfile: AudioProfile;
  hasSkyDome?: boolean;
  skyTopColor?: number;
  skyHorizonColor?: number;
  skySunColor?: number;
  skySunDir?: [number, number, number];
  skyCloudCoverage?: number;
  tileTint: number;
  accentTint: number;
  causticTint?: number;
  defaultFlashlightOn: boolean;
}

export interface ShadowRig {
  light: THREE.DirectionalLight;
  offset: THREE.Vector3;
  frustumHalfSize: number;
}

export interface BuiltLevel {
  index: number;
  code: string;
  title: string;
  subtitle: string;
  group: THREE.Group;
  colliders: ColliderBox[];
  cylinders: ColliderCylinder[];
  ladders: LadderZone[];
  currents: WaterCurrentZone[];
  zones: ZoneDefinition[];
  exitTrigger: ExitTrigger;
  spawnPosition: THREE.Vector3;
  spawnYaw: number;
  fieldData: LevelFieldData;
  shadowRig?: ShadowRig;
  waterStyle: WaterVisualStyle;
  envStyle: LevelEnvironmentStyle;
  update: (elapsedTime: number, cameraPos: THREE.Vector3) => void;
  dispose: () => void;
}

export type PlayerMotionState =
  | 'dry'
  | 'wading'
  | 'swimming'
  | 'underwater'
  | 'climbing'
  | 'mantling';

export interface PlayerStateSnapshot {
  position: { x: number; y: number; z: number };
  velocity: { x: number; y: number; z: number };
  horizontalSpeed: number;
  motionState: PlayerMotionState;
  isUnderwater: boolean;
  nearLadder: boolean;
  waterDepthAtFeet: number;
  flashlightOn: boolean;
  zoneLabel: string;
  wetLensIntensity: number;
  estimatedLuminance: number;
}
