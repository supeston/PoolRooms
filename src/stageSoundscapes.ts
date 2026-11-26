export type SpatialEmitterKind =
  | 'water-lap'
  | 'wave-surge'
  | 'abyss-resonance'
  | 'waterfall-curtain'
  | 'skylight-hum'
  | 'wind-draft'
  | 'ocean-swell'
  | 'cube-void-hum'
  | 'cathedral-stillness'
  | 'zenith-air';

export interface SpatialEmitterSpec {
  id: string;
  kind: SpatialEmitterKind;
  x: number;
  y: number;
  z: number;
  gain: number;
  refDistance: number;
  maxDistance: number;
  rolloffFactor: number;
  reverbSend: number;
  orbitRadius?: number;
  orbitSpeed?: number;
  orbitPhase?: number;
  pitchScale?: number;
}

export function getStageSoundscapeEmitters(stageIndex: number): ReadonlyArray<SpatialEmitterSpec> {
  switch (stageIndex) {
    case 0:
      return [
        { id: 's1-lap-n', kind: 'water-lap', x: -11.5, y: 0.1, z: -12.0, gain: 0.44, refDistance: 4.5, maxDistance: 42, rolloffFactor: 1.25, reverbSend: 0.58, orbitRadius: 3.5, orbitSpeed: 0.14, orbitPhase: 0.0 },
        { id: 's1-lap-s', kind: 'water-lap', x: 11.5, y: 0.1, z: -28.0, gain: 0.44, refDistance: 4.5, maxDistance: 42, rolloffFactor: 1.25, reverbSend: 0.58, orbitRadius: 3.5, orbitSpeed: -0.12, orbitPhase: 1.9 },
        { id: 's1-lap-basin-w', kind: 'water-lap', x: -7.5, y: 0.1, z: -60.0, gain: 0.48, refDistance: 5.0, maxDistance: 48, rolloffFactor: 1.2, reverbSend: 0.65, orbitRadius: 2.5, orbitSpeed: 0.16, orbitPhase: 3.1 },
        { id: 's1-lap-basin-e', kind: 'water-lap', x: 7.5, y: 0.1, z: -78.0, gain: 0.48, refDistance: 5.0, maxDistance: 48, rolloffFactor: 1.2, reverbSend: 0.65, orbitRadius: 2.5, orbitSpeed: -0.15, orbitPhase: 4.8 },
        { id: 's1-glass-w', kind: 'skylight-hum', x: -16.5, y: 4.2, z: -14.0, gain: 0.20, refDistance: 3.5, maxDistance: 30, rolloffFactor: 1.4, reverbSend: 0.35, pitchScale: 1.0 },
        { id: 's1-glass-e', kind: 'skylight-hum', x: 16.5, y: 4.2, z: -26.0, gain: 0.20, refDistance: 3.5, maxDistance: 30, rolloffFactor: 1.4, reverbSend: 0.35, pitchScale: 1.04 },
        { id: 's1-sky-mid', kind: 'skylight-hum', x: 0.0, y: 9.4, z: -68.0, gain: 0.22, refDistance: 5.0, maxDistance: 38, rolloffFactor: 1.25, reverbSend: 0.48, pitchScale: 0.96 },
        { id: 's1-atrium-air', kind: 'cathedral-stillness', x: 0.0, y: 5.5, z: -95.0, gain: 0.24, refDistance: 6.0, maxDistance: 36, rolloffFactor: 1.2, reverbSend: 0.65, pitchScale: 1.12 },
        { id: 's1-corridor-hum', kind: 'skylight-hum', x: 0.0, y: 3.4, z: -116.0, gain: 0.20, refDistance: 3.0, maxDistance: 24, rolloffFactor: 1.5, reverbSend: 0.42, pitchScale: 0.92 }
      ];

    case 1:
      return [
        { id: 's2-shelf-lap', kind: 'water-lap', x: 0.0, y: 0.1, z: -36.0, gain: 0.48, refDistance: 5.5, maxDistance: 48, rolloffFactor: 1.15, reverbSend: 0.65 },
        { id: 's2-surge-w', kind: 'wave-surge', x: -54.0, y: 0.4, z: -78.0, gain: 0.68, refDistance: 12.0, maxDistance: 140, rolloffFactor: 1.0, reverbSend: 0.85, orbitRadius: 10.0, orbitSpeed: 0.11, orbitPhase: 0.0 },
        { id: 's2-surge-e', kind: 'wave-surge', x: 54.0, y: 0.4, z: -96.0, gain: 0.68, refDistance: 12.0, maxDistance: 140, rolloffFactor: 1.0, reverbSend: 0.85, orbitRadius: 10.0, orbitSpeed: -0.10, orbitPhase: 2.1 },
        { id: 's2-surge-n', kind: 'wave-surge', x: 0.0, y: 0.4, z: -168.0, gain: 0.66, refDistance: 14.0, maxDistance: 150, rolloffFactor: 1.0, reverbSend: 0.88, orbitRadius: 12.0, orbitSpeed: 0.09, orbitPhase: 4.2 },
        { id: 's2-surge-mid', kind: 'wave-surge', x: 0.0, y: 0.3, z: -102.0, gain: 0.64, refDistance: 11.0, maxDistance: 130, rolloffFactor: 1.05, reverbSend: 0.82, orbitRadius: 16.0, orbitSpeed: 0.13, orbitPhase: 1.1 },
        { id: 's2-abyss-deep', kind: 'abyss-resonance', x: 0.0, y: -16.0, z: -102.0, gain: 0.62, refDistance: 16.0, maxDistance: 145, rolloffFactor: 0.9, reverbSend: 0.72, pitchScale: 0.95 },
        { id: 's2-draft-w', kind: 'wind-draft', x: -58.0, y: 20.0, z: -102.0, gain: 0.36, refDistance: 10.0, maxDistance: 85, rolloffFactor: 1.1, reverbSend: 0.68, pitchScale: 0.92 },
        { id: 's2-draft-e', kind: 'wind-draft', x: 58.0, y: 20.0, z: -102.0, gain: 0.36, refDistance: 10.0, maxDistance: 85, rolloffFactor: 1.1, reverbSend: 0.68, pitchScale: 1.06 },
        { id: 's2-draft-high', kind: 'wind-draft', x: 0.0, y: 40.0, z: -172.0, gain: 0.44, refDistance: 14.0, maxDistance: 100, rolloffFactor: 1.05, reverbSend: 0.76, pitchScale: 1.12 }
      ];

    case 2:
      return [
        { id: 's3-surge-n', kind: 'wave-surge', x: 0.0, y: 0.4, z: -40.0, gain: 0.70, refDistance: 12.0, maxDistance: 175, rolloffFactor: 0.95, reverbSend: 0.92, orbitRadius: 8.0, orbitSpeed: 0.12, orbitPhase: 0.0 },
        { id: 's3-surge-s', kind: 'wave-surge', x: 0.0, y: 0.4, z: 38.0, gain: 0.68, refDistance: 12.0, maxDistance: 175, rolloffFactor: 0.95, reverbSend: 0.92, orbitRadius: 8.0, orbitSpeed: -0.11, orbitPhase: 2.4 },
        { id: 's3-surge-e', kind: 'wave-surge', x: 40.0, y: 0.4, z: 0.0, gain: 0.68, refDistance: 12.0, maxDistance: 175, rolloffFactor: 0.95, reverbSend: 0.92, orbitRadius: 7.0, orbitSpeed: 0.10, orbitPhase: 1.2 },
        { id: 's3-surge-w', kind: 'wave-surge', x: -40.0, y: 0.4, z: 0.0, gain: 0.68, refDistance: 12.0, maxDistance: 175, rolloffFactor: 0.95, reverbSend: 0.92, orbitRadius: 7.0, orbitSpeed: -0.13, orbitPhase: 4.1 },
        { id: 's3-abyss-pit', kind: 'abyss-resonance', x: 0.0, y: -18.0, z: 0.0, gain: 0.66, refDistance: 18.0, maxDistance: 180, rolloffFactor: 0.85, reverbSend: 0.78, pitchScale: 0.88 },
        { id: 's3-updraft-mid', kind: 'wind-draft', x: 0.0, y: 54.0, z: 0.0, gain: 0.40, refDistance: 18.0, maxDistance: 120, rolloffFactor: 1.0, reverbSend: 0.82, orbitRadius: 16.0, orbitSpeed: 0.08, orbitPhase: 0.5, pitchScale: 0.90 },
        { id: 's3-bridge-wind-w', kind: 'wind-draft', x: -18.0, y: 97.5, z: 0.0, gain: 0.58, refDistance: 10.0, maxDistance: 75, rolloffFactor: 1.1, reverbSend: 0.72, pitchScale: 1.18 },
        { id: 's3-bridge-wind-e', kind: 'wind-draft', x: 18.0, y: 97.5, z: 0.0, gain: 0.58, refDistance: 10.0, maxDistance: 75, rolloffFactor: 1.1, reverbSend: 0.72, pitchScale: 1.08 },
        { id: 's3-apex-wind', kind: 'zenith-air', x: 0.0, y: 157.0, z: 0.0, gain: 0.52, refDistance: 12.0, maxDistance: 85, rolloffFactor: 1.05, reverbSend: 0.78, pitchScale: 1.15 },
        { id: 's3-cube-void-a', kind: 'cube-void-hum', x: 96.0, y: 46.0, z: -6.0, gain: 0.54, refDistance: 12.0, maxDistance: 72, rolloffFactor: 1.15, reverbSend: 0.72, pitchScale: 1.0 },
        { id: 's3-cube-void-b', kind: 'cube-void-hum', x: 118.0, y: 52.0, z: 8.0, gain: 0.50, refDistance: 14.0, maxDistance: 78, rolloffFactor: 1.15, reverbSend: 0.76, pitchScale: 1.19 }
      ];

    case 3:
      return [
        { id: 's4-wind-alpha', kind: 'wind-draft', x: 24.0, y: 30.0, z: -18.0, gain: 0.62, refDistance: 14.0, maxDistance: 145, rolloffFactor: 0.95, reverbSend: 0.30, orbitRadius: 18.0, orbitSpeed: 0.09, orbitPhase: 0.0, pitchScale: 1.04 },
        { id: 's4-wind-bridge1', kind: 'wind-draft', x: -16.0, y: 29.0, z: -48.0, gain: 0.64, refDistance: 12.0, maxDistance: 125, rolloffFactor: 1.0, reverbSend: 0.28, orbitRadius: 14.0, orbitSpeed: -0.11, orbitPhase: 1.6, pitchScale: 0.94 },
        { id: 's4-wind-bridge2', kind: 'wind-draft', x: -58.0, y: 45.0, z: -116.0, gain: 0.72, refDistance: 16.0, maxDistance: 160, rolloffFactor: 0.92, reverbSend: 0.26, orbitRadius: 22.0, orbitSpeed: 0.08, orbitPhase: 3.1, pitchScale: 1.16 },
        { id: 's4-wind-gamma', kind: 'wind-draft', x: -112.0, y: 46.0, z: -172.0, gain: 0.70, refDistance: 16.0, maxDistance: 165, rolloffFactor: 0.95, reverbSend: 0.28, pitchScale: 1.10 },
        { id: 's4-ocean-1', kind: 'ocean-swell', x: 0.0, y: 0.5, z: -45.0, gain: 0.76, refDistance: 18.0, maxDistance: 190, rolloffFactor: 0.9, reverbSend: 0.34, orbitRadius: 24.0, orbitSpeed: 0.07, orbitPhase: 0.4 },
        { id: 's4-ocean-2', kind: 'ocean-swell', x: -52.0, y: 0.5, z: -130.0, gain: 0.78, refDistance: 18.0, maxDistance: 195, rolloffFactor: 0.9, reverbSend: 0.34, orbitRadius: 26.0, orbitSpeed: -0.06, orbitPhase: 2.2 },
        { id: 's4-ocean-3', kind: 'ocean-swell', x: -84.0, y: 0.5, z: -215.0, gain: 0.80, refDistance: 16.0, maxDistance: 170, rolloffFactor: 0.95, reverbSend: 0.38, orbitRadius: 14.0, orbitSpeed: 0.10, orbitPhase: 4.0 },
        { id: 's4-delta-shaft', kind: 'abyss-resonance', x: -84.0, y: -6.0, z: -242.0, gain: 0.58, refDistance: 10.0, maxDistance: 72, rolloffFactor: 1.1, reverbSend: 0.78, pitchScale: 1.06 }
      ];

    case 4:
    default:
      return [
        { id: 's5-colonnade-1', kind: 'cathedral-stillness', x: 0.0, y: 24.0, z: -24.0, gain: 0.48, refDistance: 18.0, maxDistance: 140, rolloffFactor: 0.95, reverbSend: 0.92, pitchScale: 0.96 },
        { id: 's5-colonnade-2', kind: 'cathedral-stillness', x: 0.0, y: 24.0, z: -84.0, gain: 0.48, refDistance: 18.0, maxDistance: 140, rolloffFactor: 0.95, reverbSend: 0.92, pitchScale: 1.04 },
        { id: 's5-lap-col-w', kind: 'water-lap', x: -24.0, y: 0.2, z: -48.0, gain: 0.44, refDistance: 10.0, maxDistance: 85, rolloffFactor: 1.15, reverbSend: 0.82, orbitRadius: 8.0, orbitSpeed: 0.09, orbitPhase: 0.5 },
        { id: 's5-lap-col-e', kind: 'water-lap', x: 24.0, y: 0.2, z: -72.0, gain: 0.44, refDistance: 10.0, maxDistance: 85, rolloffFactor: 1.15, reverbSend: 0.82, orbitRadius: 8.0, orbitSpeed: -0.08, orbitPhase: 2.6 },
        { id: 's5-crypt-deep', kind: 'abyss-resonance', x: 0.0, y: -14.0, z: -56.0, gain: 0.56, refDistance: 14.0, maxDistance: 105, rolloffFactor: 0.95, reverbSend: 0.80, pitchScale: 0.90 },
        { id: 's5-casc-ne', kind: 'waterfall-curtain', x: 28.0, y: 6.5, z: -152.0, gain: 0.56, refDistance: 9.0, maxDistance: 82, rolloffFactor: 1.12, reverbSend: 0.88, pitchScale: 1.0 },
        { id: 's5-casc-e', kind: 'waterfall-curtain', x: 35.0, y: 6.5, z: -180.0, gain: 0.58, refDistance: 9.0, maxDistance: 82, rolloffFactor: 1.12, reverbSend: 0.88, pitchScale: 1.06 },
        { id: 's5-casc-se', kind: 'waterfall-curtain', x: 28.0, y: 6.5, z: -208.0, gain: 0.56, refDistance: 9.0, maxDistance: 82, rolloffFactor: 1.12, reverbSend: 0.88, pitchScale: 0.95 },
        { id: 's5-casc-nw', kind: 'waterfall-curtain', x: -28.0, y: 6.5, z: -152.0, gain: 0.56, refDistance: 9.0, maxDistance: 82, rolloffFactor: 1.12, reverbSend: 0.88, pitchScale: 1.03 },
        { id: 's5-casc-w', kind: 'waterfall-curtain', x: -35.0, y: 6.5, z: -180.0, gain: 0.58, refDistance: 9.0, maxDistance: 82, rolloffFactor: 1.12, reverbSend: 0.88, pitchScale: 0.98 },
        { id: 's5-casc-sw', kind: 'waterfall-curtain', x: -28.0, y: 6.5, z: -208.0, gain: 0.56, refDistance: 9.0, maxDistance: 82, rolloffFactor: 1.12, reverbSend: 0.88, pitchScale: 1.08 },
        { id: 's5-rotunda-pit', kind: 'abyss-resonance', x: 0.0, y: -16.0, z: -180.0, gain: 0.52, refDistance: 16.0, maxDistance: 95, rolloffFactor: 1.0, reverbSend: 0.84, pitchScale: 0.84 },
        { id: 's5-zenith-air', kind: 'zenith-air', x: 0.0, y: 42.0, z: -318.0, gain: 0.52, refDistance: 14.0, maxDistance: 95, rolloffFactor: 1.0, reverbSend: 0.85, pitchScale: 1.0 }
      ];
  }
}
