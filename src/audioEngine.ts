import * as THREE from 'three';
import { AudioProfile, ColliderBox, ColliderCylinder } from './types';
import {
  AcousticEnvironmentProbe,
  computeAcousticOcclusion,
  probeAcousticEnvironment
} from './acousticSpatializer';
import {
  getStageSoundscapeEmitters,
  SpatialEmitterKind,
  SpatialEmitterSpec
} from './stageSoundscapes';

interface LiveSpatialEmitter {
  spec: SpatialEmitterSpec;
  panner: PannerNode;
  occlusionFilter: BiquadFilterNode;
  directGain: GainNode;
  reverbSendGain: GainNode;
  sources: AudioScheduledSourceNode[];
  nodes: AudioNode[];
  smoothedOcclusion: number;
  baseDirectGain: number;
  baseReverbSend: number;
}

export class PoolAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private underwaterFilter: BiquadFilterNode | null = null;
  private dryBus: GainNode | null = null;
  private reverbInputBus: GainNode | null = null;
  private reverbColorFilter: BiquadFilterNode | null = null;
  private reverbMasterGain: GainNode | null = null;
  private underwaterDirectBus: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;

  private tightGain: GainNode | null = null;
  private mediumGain: GainNode | null = null;
  private colossalGain: GainNode | null = null;
  private openAirGain: GainNode | null = null;

  private erLeftDelay: DelayNode | null = null;
  private erRightDelay: DelayNode | null = null;
  private erCeilDelay: DelayNode | null = null;
  private erGain: GainNode | null = null;

  private underwaterPressureGain: GainNode | null = null;
  private underwaterStructureGain: GainNode | null = null;
  private roomToneGain: GainNode | null = null;

  private liveEmitters: LiveSpatialEmitter[] = [];
  private activeStageIndex = 0;
  private currentProfile: AudioProfile = 'stage01-glass-halls';
  private initialized = false;

  private currentUnderwater = 0;
  private currentWaterDepth = 0;
  private smoothedDarkThreshold = 0;
  private probeAccum = 0;
  private occlusionAccum = 0;
  private underwaterBubbleTimer = 1.4;
  private waveSlapTimer = 2.4;

  private readonly listenerPos = new THREE.Vector3();
  private readonly listenerForward = new THREE.Vector3(0, 0, -1);
  private readonly listenerUp = new THREE.Vector3(0, 1, 0);
  private readonly listenerRight = new THREE.Vector3(1, 0, 0);

  private currentProbe: AcousticEnvironmentProbe = {
    widthMeters: 16,
    lengthMeters: 28,
    leftDist: 8,
    rightDist: 8,
    ceilingDist: 9,
    openSkyRatio: 0,
    enclosureRatio: 0.9,
    inDarkThreshold: 0,
    averageRadius: 12
  };

  init(): void {
    if (this.initialized) {
      if (this.ctx && this.ctx.state === 'suspended') {
        void this.ctx.resume();
      }
      return;
    }

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    this.ctx = ctx;

    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -15;
    compressor.knee.value = 18;
    compressor.ratio.value = 3.8;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.22;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.88, ctx.currentTime + 1.1);
    this.masterGain = masterGain;

    const underwaterFilter = ctx.createBiquadFilter();
    underwaterFilter.type = 'lowpass';
    underwaterFilter.frequency.value = 18500;
    underwaterFilter.Q.value = 0.76;

    const dryBus = ctx.createGain();
    dryBus.gain.value = 0.92;

    const reverbInputBus = ctx.createGain();
    reverbInputBus.gain.value = 1.0;

    const reverbColorFilter = ctx.createBiquadFilter();
    reverbColorFilter.type = 'lowpass';
    reverbColorFilter.frequency.value = 14500;
    reverbColorFilter.Q.value = 0.65;

    const reverbMasterGain = ctx.createGain();
    reverbMasterGain.gain.value = 0.78;

    const underwaterDirectBus = ctx.createGain();
    underwaterDirectBus.gain.value = 1.0;

    const tightConv = ctx.createConvolver();
    tightConv.buffer = this.createArchitecturalIR(ctx, 0.78, 4.4, 0.52, 0.0, 0.008);
    const tightGain = ctx.createGain();
    tightGain.gain.value = 0.12;

    const mediumConv = ctx.createConvolver();
    mediumConv.buffer = this.createArchitecturalIR(ctx, 2.65, 1.55, 0.44, 0.06, 0.018);
    const mediumGain = ctx.createGain();
    mediumGain.gain.value = 0.65;

    const colossalConv = ctx.createConvolver();
    colossalConv.buffer = this.createArchitecturalIR(ctx, 6.85, 0.68, 0.36, 0.22, 0.052);
    const colossalGain = ctx.createGain();
    colossalGain.gain.value = 0.15;

    const openAirConv = ctx.createConvolver();
    openAirConv.buffer = this.createArchitecturalIR(ctx, 1.45, 2.35, 0.26, 0.0, 0.082);
    const openAirGain = ctx.createGain();
    openAirGain.gain.value = 0.02;

    reverbInputBus.connect(reverbColorFilter);
    reverbColorFilter.connect(tightConv);
    reverbColorFilter.connect(mediumConv);
    reverbColorFilter.connect(colossalConv);
    reverbColorFilter.connect(openAirConv);

    tightConv.connect(tightGain);
    mediumConv.connect(mediumGain);
    colossalConv.connect(colossalGain);
    openAirConv.connect(openAirGain);

    tightGain.connect(reverbMasterGain);
    mediumGain.connect(reverbMasterGain);
    colossalGain.connect(reverbMasterGain);
    openAirGain.connect(reverbMasterGain);

    const erGain = ctx.createGain();
    erGain.gain.value = 0.22;
    const erFilter = ctx.createBiquadFilter();
    erFilter.type = 'bandpass';
    erFilter.frequency.value = 1850;
    erFilter.Q.value = 0.7;

    const erLeftDelay = ctx.createDelay(0.35);
    erLeftDelay.delayTime.value = 0.028;
    const erLeftPan = ctx.createStereoPanner();
    erLeftPan.pan.value = -0.82;

    const erRightDelay = ctx.createDelay(0.35);
    erRightDelay.delayTime.value = 0.032;
    const erRightPan = ctx.createStereoPanner();
    erRightPan.pan.value = 0.82;

    const erCeilDelay = ctx.createDelay(0.35);
    erCeilDelay.delayTime.value = 0.045;

    reverbColorFilter.connect(erFilter);
    erFilter.connect(erLeftDelay);
    erFilter.connect(erRightDelay);
    erFilter.connect(erCeilDelay);

    erLeftDelay.connect(erLeftPan);
    erRightDelay.connect(erRightPan);
    erLeftPan.connect(erGain);
    erRightPan.connect(erGain);
    erCeilDelay.connect(erGain);
    erGain.connect(underwaterFilter);

    dryBus.connect(underwaterFilter);
    reverbMasterGain.connect(underwaterFilter);
    underwaterFilter.connect(compressor);
    underwaterDirectBus.connect(compressor);
    compressor.connect(masterGain);
    masterGain.connect(ctx.destination);

    this.underwaterFilter = underwaterFilter;
    this.dryBus = dryBus;
    this.reverbInputBus = reverbInputBus;
    this.reverbColorFilter = reverbColorFilter;
    this.reverbMasterGain = reverbMasterGain;
    this.underwaterDirectBus = underwaterDirectBus;
    this.tightGain = tightGain;
    this.mediumGain = mediumGain;
    this.colossalGain = colossalGain;
    this.openAirGain = openAirGain;
    this.erLeftDelay = erLeftDelay;
    this.erRightDelay = erRightDelay;
    this.erCeilDelay = erCeilDelay;
    this.erGain = erGain;

    this.noiseBuffer = this.createWhiteNoiseBuffer(ctx, 4.5);
    this.startCoreSubmergedAndRoomTone(ctx);
    this.initialized = true;
    this.rebuildStageEmitters(this.activeStageIndex);
  }

  setProfile(profile: AudioProfile, stageIndex = 0): void {
    this.currentProfile = profile;
    this.activeStageIndex = stageIndex;
    if (this.initialized && this.ctx) {
      if (this.masterGain) {
        this.masterGain.gain.setTargetAtTime(0.88, this.ctx.currentTime, 0.32);
      }
      this.rebuildStageEmitters(stageIndex);
    }
  }

  fadeOutToSilence(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.55);
  }

  private createArchitecturalIR(
    ctx: AudioContext,
    durationSec: number,
    decayRate: number,
    brightness: number,
    flutterAmount: number,
    preDelaySec: number
  ): AudioBuffer {
    const sampleRate = ctx.sampleRate;
    const length = Math.floor(sampleRate * durationSec);
    const preSamples = Math.floor(sampleRate * preDelaySec);
    const ir = ctx.createBuffer(2, length, sampleRate);

    for (let ch = 0; ch < 2; ch++) {
      const data = ir.getChannelData(ch);
      let lp = 0;
      for (let i = preSamples; i < length; i++) {
        const t = (i - preSamples) / sampleRate;
        const env = Math.exp(-t * decayRate) * (1 - Math.exp(-t * 48));
        const flutter = flutterAmount > 0.01 ? 1.0 + flutterAmount * Math.sin(t * 52.0 + ch * 0.85) : 1.0;
        const white = Math.random() * 2 - 1;
        const alpha = Math.max(0.035, brightness - t * 0.055);
        lp += (white - lp) * alpha;
        data[i] = lp * env * flutter * 0.44;
      }

      const tapBase = preDelaySec + 0.006;
      const earlyTaps = [0.008, 0.019, 0.034, 0.052, 0.076, 0.108, 0.148];
      for (let k = 0; k < earlyTaps.length; k++) {
        const offset = Math.floor((tapBase + earlyTaps[k] + ch * 0.0048) * sampleRate);
        if (offset < length) {
          const amp = (0.26 / (k + 1)) * (k % 2 === 0 ? 1 : -1);
          data[offset] += amp;
        }
      }
    }
    return ir;
  }

  private createWhiteNoiseBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
    const length = Math.floor(ctx.sampleRate * seconds);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  private startCoreSubmergedAndRoomTone(ctx: AudioContext): void {
    if (!this.dryBus || !this.underwaterDirectBus || !this.noiseBuffer) return;

    const toneSrc = ctx.createBufferSource();
    toneSrc.buffer = this.noiseBuffer;
    toneSrc.loop = true;
    const toneFilter = ctx.createBiquadFilter();
    toneFilter.type = 'lowpass';
    toneFilter.frequency.value = 140;
    toneFilter.Q.value = 0.8;
    const toneGain = ctx.createGain();
    toneGain.gain.value = 0.025;
    this.roomToneGain = toneGain;
    toneSrc.connect(toneFilter);
    toneFilter.connect(toneGain);
    toneGain.connect(this.dryBus);
    toneSrc.start();

    const hydroSrc = ctx.createBufferSource();
    hydroSrc.buffer = this.noiseBuffer;
    hydroSrc.loop = true;
    const hydroFilter = ctx.createBiquadFilter();
    hydroFilter.type = 'lowpass';
    hydroFilter.frequency.value = 98;
    hydroFilter.Q.value = 1.95;
    const hydroGain = ctx.createGain();
    hydroGain.gain.value = 0.0001;
    this.underwaterPressureGain = hydroGain;
    hydroSrc.connect(hydroFilter);
    hydroFilter.connect(hydroGain);
    hydroGain.connect(this.underwaterDirectBus);
    hydroSrc.start();

    const uwStructFilter = ctx.createBiquadFilter();
    uwStructFilter.type = 'lowpass';
    uwStructFilter.frequency.value = 118;
    uwStructFilter.Q.value = 2.4;
    const uwStructGain = ctx.createGain();
    uwStructGain.gain.value = 0.0001;
    this.underwaterStructureGain = uwStructGain;

    const uwLfo = ctx.createOscillator();
    uwLfo.frequency.value = 0.08;
    const uwLfoG = ctx.createGain();
    uwLfoG.gain.value = 22;
    uwLfo.connect(uwLfoG);
    uwLfoG.connect(uwStructFilter.frequency);
    uwLfo.start();

    for (const [idx, freq] of [34.0, 51.2, 68.4].entries()) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = idx === 0 ? 0.52 : 0.22;
      osc.connect(g);
      g.connect(uwStructFilter);
      osc.start();
    }
    uwStructFilter.connect(uwStructGain);
    uwStructGain.connect(this.underwaterDirectBus);
  }

  private clearStageEmitters(): void {
    for (let i = 0; i < this.liveEmitters.length; i++) {
      const em = this.liveEmitters[i];
      for (const s of em.sources) {
        try {
          s.stop();
        } catch {}
      }
      for (const n of em.nodes) {
        try {
          n.disconnect();
        } catch {}
      }
    }
    this.liveEmitters = [];
  }

  private createEmitterSource(
    ctx: AudioContext,
    kind: SpatialEmitterKind,
    pitchScale = 1.0
  ): { output: AudioNode; sources: AudioScheduledSourceNode[]; nodes: AudioNode[] } {
    const sources: AudioScheduledSourceNode[] = [];
    const nodes: AudioNode[] = [];
    const out = ctx.createGain();
    out.gain.value = 1.0;
    nodes.push(out);

    const nb = this.noiseBuffer!;

    if (kind === 'water-lap') {
      const src = ctx.createBufferSource();
      src.buffer = nb;
      src.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 460 * pitchScale;
      bp.Q.value = 1.75;
      const modGain = ctx.createGain();
      modGain.gain.value = 0.36;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.26 + Math.random() * 0.14;
      const lfoAmp = ctx.createGain();
      lfoAmp.gain.value = 0.22;
      lfo.connect(lfoAmp);
      lfoAmp.connect(modGain.gain);
      src.connect(bp);
      bp.connect(modGain);
      modGain.connect(out);
      src.start(0, Math.random() * 2.5);
      lfo.start();
      sources.push(src, lfo);
      nodes.push(src, bp, modGain, lfo, lfoAmp);
    } else if (kind === 'wave-surge' || kind === 'ocean-swell') {
      const src = ctx.createBufferSource();
      src.buffer = nb;
      src.loop = true;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = (kind === 'ocean-swell' ? 280 : 390) * pitchScale;
      lp.Q.value = 1.15;
      const modGain = ctx.createGain();
      modGain.gain.value = 0.48;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = (kind === 'ocean-swell' ? 0.14 : 0.34) + Math.random() * 0.12;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.30;
      const lfoFreq = ctx.createGain();
      lfoFreq.gain.value = kind === 'ocean-swell' ? 160 : 250;
      lfo.connect(lfoGain);
      lfoGain.connect(modGain.gain);
      lfo.connect(lfoFreq);
      lfoFreq.connect(lp.frequency);
      src.connect(lp);
      lp.connect(modGain);
      modGain.connect(out);
      src.start(0, Math.random() * 2.5);
      lfo.start();
      sources.push(src, lfo);
      nodes.push(src, lp, modGain, lfo, lfoGain, lfoFreq);
    } else if (kind === 'waterfall-curtain') {
      const src = ctx.createBufferSource();
      src.buffer = nb;
      src.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 920 * pitchScale;
      bp.Q.value = 0.72;
      const shelf = ctx.createBiquadFilter();
      shelf.type = 'lowpass';
      shelf.frequency.value = 3400;
      const g = ctx.createGain();
      g.gain.value = 0.34;
      src.connect(bp);
      bp.connect(shelf);
      shelf.connect(g);
      g.connect(out);
      src.start(0, Math.random() * 2.5);
      sources.push(src);
      nodes.push(src, bp, shelf, g);
    } else if (kind === 'wind-draft' || kind === 'zenith-air') {
      const src = ctx.createBufferSource();
      src.buffer = nb;
      src.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = (kind === 'zenith-air' ? 520 : 340) * pitchScale;
      bp.Q.value = kind === 'zenith-air' ? 1.8 : 1.35;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.11 + Math.random() * 0.08;
      const lfoF = ctx.createGain();
      lfoF.gain.value = 145;
      lfo.connect(lfoF);
      lfoF.connect(bp.frequency);
      const g = ctx.createGain();
      g.gain.value = 0.34;
      src.connect(bp);
      bp.connect(g);
      g.connect(out);
      src.start(0, Math.random() * 2.5);
      lfo.start();
      sources.push(src, lfo);
      nodes.push(src, bp, lfo, lfoF, g);
    } else if (kind === 'skylight-hum') {
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 320;
      const g = ctx.createGain();
      g.gain.value = 0.16;
      lp.connect(g);
      g.connect(out);
      nodes.push(lp, g);
      for (const [i, f] of [60.0, 120.0, 180.4].entries()) {
        const osc = ctx.createOscillator();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.value = f * pitchScale;
        const og = ctx.createGain();
        og.gain.value = i === 0 ? 0.55 : i === 1 ? 0.26 : 0.12;
        osc.connect(og);
        og.connect(lp);
        osc.start();
        sources.push(osc);
        nodes.push(osc, og);
      }
    } else if (kind === 'abyss-resonance') {
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 115;
      lp.Q.value = 1.6;
      const g = ctx.createGain();
      g.gain.value = 0.36;
      lp.connect(g);
      g.connect(out);
      nodes.push(lp, g);
      for (const [i, f] of [36.0, 48.0, 54.3].entries()) {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = f * pitchScale;
        const og = ctx.createGain();
        og.gain.value = i === 0 ? 0.55 : 0.24;
        osc.connect(og);
        og.connect(lp);
        osc.start();
        sources.push(osc);
        nodes.push(osc, og);
      }
    } else if (kind === 'cube-void-hum') {
      const lp = ctx.createBiquadFilter();
      lp.type = 'bandpass';
      lp.frequency.value = 360 * pitchScale;
      lp.Q.value = 2.6;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.17;
      const lfoG = ctx.createGain();
      lfoG.gain.value = 95;
      lfo.connect(lfoG);
      lfoG.connect(lp.frequency);
      const g = ctx.createGain();
      g.gain.value = 0.24;
      lp.connect(g);
      g.connect(out);
      lfo.start();
      sources.push(lfo);
      nodes.push(lp, lfo, lfoG, g);
      for (const f of [146.83, 220.0, 221.4, 329.63]) {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = f * pitchScale;
        const og = ctx.createGain();
        og.gain.value = 0.22;
        osc.connect(og);
        og.connect(lp);
        osc.start();
        sources.push(osc);
        nodes.push(osc, og);
      }
    } else {
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 460;
      const g = ctx.createGain();
      g.gain.value = 0.22;
      lp.connect(g);
      g.connect(out);
      nodes.push(lp, g);
      for (const f of [130.81, 196.0, 246.94, 293.66]) {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = f * pitchScale;
        const og = ctx.createGain();
        og.gain.value = 0.18;
        osc.connect(og);
        og.connect(lp);
        osc.start();
        sources.push(osc);
        nodes.push(osc, og);
      }
    }

    return { output: out, sources, nodes };
  }

  private rebuildStageEmitters(stageIndex: number): void {
    if (!this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;
    this.clearStageEmitters();

    const ctx = this.ctx;
    const specs = getStageSoundscapeEmitters(stageIndex);

    for (let i = 0; i < specs.length; i++) {
      const spec = specs[i];
      const built = this.createEmitterSource(ctx, spec.kind, spec.pitchScale ?? 1.0);

      const occlusionFilter = ctx.createBiquadFilter();
      occlusionFilter.type = 'lowpass';
      occlusionFilter.frequency.value = 16000;
      occlusionFilter.Q.value = 0.7;

      const directGain = ctx.createGain();
      directGain.gain.value = spec.gain;

      const panner = ctx.createPanner();
      panner.panningModel = 'HRTF';
      panner.distanceModel = 'inverse';
      panner.refDistance = spec.refDistance;
      panner.maxDistance = spec.maxDistance;
      panner.rolloffFactor = spec.rolloffFactor;
      panner.coneInnerAngle = 360;
      panner.coneOuterAngle = 360;
      panner.positionX.value = spec.x;
      panner.positionY.value = spec.y;
      panner.positionZ.value = spec.z;

      const reverbSendGain = ctx.createGain();
      reverbSendGain.gain.value = spec.gain * spec.reverbSend * 0.42;

      built.output.connect(occlusionFilter);
      occlusionFilter.connect(directGain);
      directGain.connect(panner);
      panner.connect(this.dryBus);

      built.output.connect(reverbSendGain);
      reverbSendGain.connect(this.reverbInputBus);

      built.nodes.push(occlusionFilter, directGain, panner, reverbSendGain);

      this.liveEmitters.push({
        spec,
        panner,
        occlusionFilter,
        directGain,
        reverbSendGain,
        sources: built.sources,
        nodes: built.nodes,
        smoothedOcclusion: 0,
        baseDirectGain: spec.gain,
        baseReverbSend: spec.gain * spec.reverbSend * 0.42
      });
    }
  }

  private createOneShotPanner(
    ctx: AudioContext,
    x: number,
    y: number,
    z: number,
    refDist = 1.6,
    maxDist = 65,
    rolloff = 1.15
  ): PannerNode {
    const panner = ctx.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = refDist;
    panner.maxDistance = maxDist;
    panner.rolloffFactor = rolloff;
    panner.positionX.setValueAtTime(x, ctx.currentTime);
    panner.positionY.setValueAtTime(y, ctx.currentTime);
    panner.positionZ.setValueAtTime(z, ctx.currentTime);
    return panner;
  }

  updateSpatial(params: {
    camera: THREE.PerspectiveCamera;
    isUnderwater: boolean;
    waterDepthAtFeet: number;
    dt: number;
    elapsedTime: number;
    waveAmplitude: number;
    hasOpenSky: boolean;
    colliders: ReadonlyArray<ColliderBox>;
    cylinders: ReadonlyArray<ColliderCylinder>;
  }): void {
    const {
      camera,
      isUnderwater,
      waterDepthAtFeet,
      dt,
      elapsedTime,
      waveAmplitude,
      hasOpenSky,
      colliders,
      cylinders
    } = params;

    this.currentWaterDepth = waterDepthAtFeet;

    if (!this.initialized || !this.ctx || !this.underwaterFilter) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const clampedDt = Math.min(dt, 0.05);

    this.listenerPos.copy(camera.position);
    camera.getWorldDirection(this.listenerForward);
    this.listenerUp.set(0, 1, 0).applyQuaternion(camera.quaternion).normalize();
    this.listenerRight.crossVectors(this.listenerForward, this.listenerUp).normalize();

    const listener = ctx.listener;
    if (listener.positionX) {
      listener.positionX.setTargetAtTime(this.listenerPos.x, now, 0.015);
      listener.positionY.setTargetAtTime(this.listenerPos.y, now, 0.015);
      listener.positionZ.setTargetAtTime(this.listenerPos.z, now, 0.015);
      listener.forwardX.setTargetAtTime(this.listenerForward.x, now, 0.015);
      listener.forwardY.setTargetAtTime(this.listenerForward.y, now, 0.015);
      listener.forwardZ.setTargetAtTime(this.listenerForward.z, now, 0.015);
      listener.upX.setTargetAtTime(this.listenerUp.x, now, 0.015);
      listener.upY.setTargetAtTime(this.listenerUp.y, now, 0.015);
      listener.upZ.setTargetAtTime(this.listenerUp.z, now, 0.015);
    }

    const targetUw = isUnderwater ? 1 : 0;
    this.currentUnderwater += (targetUw - this.currentUnderwater) * (1 - Math.exp(-9.5 * clampedDt));

    const cutoff = 195 * Math.pow(18500 / 195, 1 - this.currentUnderwater);
    this.underwaterFilter.frequency.setTargetAtTime(cutoff, now, 0.032);
    this.underwaterFilter.Q.setTargetAtTime(0.76 + this.currentUnderwater * 1.45, now, 0.045);

    if (this.underwaterPressureGain) {
      this.underwaterPressureGain.gain.setTargetAtTime(
        0.0001 + this.currentUnderwater * 0.36,
        now,
        0.065
      );
    }
    if (this.underwaterStructureGain) {
      this.underwaterStructureGain.gain.setTargetAtTime(
        0.0001 + this.currentUnderwater * 0.16,
        now,
        0.11
      );
    }

    this.probeAccum += clampedDt;
    if (this.probeAccum >= 0.055) {
      this.probeAccum = 0;
      this.currentProbe = probeAcousticEnvironment(
        this.listenerPos,
        this.listenerRight,
        this.listenerForward,
        colliders,
        cylinders,
        hasOpenSky
      );
    }

    const p = this.currentProbe;
    this.smoothedDarkThreshold +=
      (p.inDarkThreshold - this.smoothedDarkThreshold) * (1 - Math.exp(-6.5 * clampedDt));

    const openWeight = THREE.MathUtils.smoothstep(p.openSkyRatio, 0.32, 0.85);
    const enclosedFactor = 1.0 - openWeight;
    const tightFactor =
      THREE.MathUtils.clamp((7.5 - p.widthMeters) / 4.8, 0, 1) *
      THREE.MathUtils.clamp((8.0 - p.ceilingDist) / 4.5, 0, 1);
    const colossalFactor =
      THREE.MathUtils.smoothstep(p.averageRadius, 16.0, 44.0) * 0.55 +
      THREE.MathUtils.smoothstep(p.ceilingDist, 18.0, 58.0) * 0.45;

    const darkBoost = this.smoothedDarkThreshold;
    const wTight = THREE.MathUtils.clamp(
      (tightFactor * 0.72 + darkBoost * 0.65) * enclosedFactor,
      0.02,
      0.92
    );
    const wColossal = THREE.MathUtils.clamp(
      colossalFactor * enclosedFactor * (1.0 - darkBoost * 0.82),
      0.02,
      0.98
    );
    const wMedium = THREE.MathUtils.clamp(
      (1.0 - Math.max(tightFactor, colossalFactor * 0.85)) * enclosedFactor * (1.0 - darkBoost * 0.72),
      0.04,
      0.85
    );
    const wOpenAir = THREE.MathUtils.clamp(openWeight * (1.0 - darkBoost), 0.01, 0.72);

    this.tightGain?.gain.setTargetAtTime(wTight, now, 0.14);
    this.mediumGain?.gain.setTargetAtTime(wMedium, now, 0.14);
    this.colossalGain?.gain.setTargetAtTime(wColossal, now, 0.18);
    this.openAirGain?.gain.setTargetAtTime(wOpenAir, now, 0.14);

    if (this.reverbColorFilter) {
      const targetColorHz = THREE.MathUtils.lerp(14800, 960, darkBoost);
      this.reverbColorFilter.frequency.setTargetAtTime(targetColorHz, now, 0.12);
    }
    if (this.reverbMasterGain) {
      const baseWet = THREE.MathUtils.lerp(0.84, 0.34, openWeight);
      const darkAtten = THREE.MathUtils.lerp(1.0, 0.42, darkBoost);
      const uwAtten = 1.0 - this.currentUnderwater * 0.74;
      this.reverbMasterGain.gain.setTargetAtTime(baseWet * darkAtten * uwAtten, now, 0.08);
    }

    if (this.erLeftDelay && this.erRightDelay && this.erCeilDelay && this.erGain) {
      const speedOfSound = 343.0;
      const dL = THREE.MathUtils.clamp((p.leftDist * 2.0) / speedOfSound, 0.004, 0.24);
      const dR = THREE.MathUtils.clamp((p.rightDist * 2.0) / speedOfSound, 0.004, 0.24);
      const dC = THREE.MathUtils.clamp((p.ceilingDist * 2.0) / speedOfSound, 0.006, 0.28);
      this.erLeftDelay.delayTime.setTargetAtTime(dL, now, 0.08);
      this.erRightDelay.delayTime.setTargetAtTime(dR, now, 0.08);
      this.erCeilDelay.delayTime.setTargetAtTime(dC, now, 0.08);
      const erLevel = (0.28 * enclosedFactor + 0.05) * (1.0 - darkBoost * 0.65) * (1.0 - this.currentUnderwater * 0.85);
      this.erGain.gain.setTargetAtTime(erLevel, now, 0.09);
    }

    if (this.roomToneGain) {
      const baseTone = this.currentProfile === 'stage04-azure-spires' ? 0.015 : 0.028;
      this.roomToneGain.gain.setTargetAtTime(baseTone * (1.0 - this.currentUnderwater * 0.85), now, 0.15);
    }

    this.occlusionAccum += clampedDt;
    const runOcclusion = this.occlusionAccum >= 0.075;
    if (runOcclusion) this.occlusionAccum = 0;

    for (let i = 0; i < this.liveEmitters.length; i++) {
      const em = this.liveEmitters[i];
      const sp = em.spec;

      let ex = sp.x;
      const ey = sp.y;
      let ez = sp.z;
      if (sp.orbitRadius && sp.orbitSpeed) {
        const ang = elapsedTime * sp.orbitSpeed + (sp.orbitPhase ?? 0);
        ex += Math.cos(ang) * sp.orbitRadius;
        ez += Math.sin(ang) * sp.orbitRadius;
        em.panner.positionX.setTargetAtTime(ex, now, 0.05);
        em.panner.positionY.setTargetAtTime(ey, now, 0.05);
        em.panner.positionZ.setTargetAtTime(ez, now, 0.05);
      }

      const dist = Math.hypot(ex - this.listenerPos.x, ey - this.listenerPos.y, ez - this.listenerPos.z);

      if (runOcclusion) {
        const targetOcc =
          dist < sp.maxDistance * 1.15
            ? computeAcousticOcclusion(
                this.listenerPos.x,
                this.listenerPos.y,
                this.listenerPos.z,
                ex,
                ey,
                ez,
                colliders,
                cylinders
              )
            : 1.0;
        em.smoothedOcclusion += (targetOcc - em.smoothedOcclusion) * 0.42;
      }

      const effOcc = Math.max(em.smoothedOcclusion, darkBoost * 0.88);
      const airCutoff = THREE.MathUtils.clamp(18000 * Math.exp(-dist * 0.015), 1150, 18000);
      const occludedCutoff = THREE.MathUtils.lerp(airCutoff, 420, effOcc);
      em.occlusionFilter.frequency.setTargetAtTime(occludedCutoff, now, 0.08);

      const directAtten = THREE.MathUtils.lerp(1.0, 0.22, effOcc) * (1.0 - darkBoost * 0.62);
      em.directGain.gain.setTargetAtTime(em.baseDirectGain * directAtten, now, 0.08);

      const distFactor = 1.0 / (1.0 + (dist / Math.max(1.0, sp.refDistance)) * 0.65);
      const cornerBleed = THREE.MathUtils.lerp(1.0, 0.72, effOcc) * (1.0 - darkBoost * 0.75);
      em.reverbSendGain.gain.setTargetAtTime(em.baseReverbSend * distFactor * cornerBleed, now, 0.1);
    }

    if (isUnderwater) {
      this.underwaterBubbleTimer -= clampedDt;
      if (this.underwaterBubbleTimer <= 0) {
        this.underwaterBubbleTimer = 1.1 + Math.random() * 2.4;
        this.playUnderwaterAmbientBubble();
      }
    } else if (waveAmplitude > 0.20) {
      this.waveSlapTimer -= clampedDt;
      if (this.waveSlapTimer <= 0) {
        this.waveSlapTimer = 1.8 + Math.random() * 3.1;
        this.playDirectionalWaveWallSlap(waveAmplitude);
      }
    }
  }

  private playUnderwaterAmbientBubble(): void {
    if (!this.ctx || !this.underwaterDirectBus) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const count = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const delay = i * (0.06 + Math.random() * 0.09);
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      const f0 = 220 + Math.random() * 210;
      osc.frequency.setValueAtTime(f0, now + delay);
      osc.frequency.exponentialRampToValueAtTime(f0 * 1.85, now + delay + 0.065);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, now + delay);
      g.gain.linearRampToValueAtTime(0.022, now + delay + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.075);

      const pan = ctx.createStereoPanner();
      pan.pan.value = (Math.random() - 0.5) * 1.4;
      osc.connect(g);
      g.connect(pan);
      pan.connect(this.underwaterDirectBus);
      osc.start(now + delay);
      osc.stop(now + delay + 0.09);
    }
  }

  private playDirectionalWaveWallSlap(waveAmplitude: number): void {
    if (!this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;
    if (this.smoothedDarkThreshold > 0.65) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const ang = Math.random() * Math.PI * 2;
    const dist = 8.0 + Math.random() * 26.0;
    const sx = this.listenerPos.x + Math.cos(ang) * dist;
    const sz = this.listenerPos.z + Math.sin(ang) * dist;
    const sy = 0.25;

    const panner = this.createOneShotPanner(ctx, sx, sy, sz, 6.0, 95, 1.05);
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(240 + Math.random() * 140, now);
    bp.frequency.exponentialRampToValueAtTime(680 + Math.random() * 220, now + 0.16);
    bp.frequency.exponentialRampToValueAtTime(180, now + 0.72);
    bp.Q.value = 1.25;

    const intensity = Math.min(0.32, 0.14 + waveAmplitude * 0.48);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.linearRampToValueAtTime(intensity, now + 0.11);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.78);

    const revSend = ctx.createGain();
    revSend.gain.value = 0.62;

    src.connect(bp);
    bp.connect(g);
    g.connect(panner);
    panner.connect(this.dryBus);
    g.connect(revSend);
    revSend.connect(this.reverbInputBus);

    src.start(now, Math.random() * 2.2, 0.82);
  }

  playSubmerge(speed: number): void {
    if (!this.initialized || !this.ctx || !this.underwaterDirectBus || !this.noiseBuffer) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const scale = Math.min(1.15, Math.max(0.5, speed * 0.36));

    const thump = ctx.createOscillator();
    thump.type = 'sine';
    thump.frequency.setValueAtTime(132, now);
    thump.frequency.exponentialRampToValueAtTime(38, now + 0.26);
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(0.34 * scale, now);
    tg.gain.exponentialRampToValueAtTime(0.0001, now + 0.30);
    thump.connect(tg);
    tg.connect(this.underwaterDirectBus);
    thump.start(now);
    thump.stop(now + 0.32);

    const rush = ctx.createBufferSource();
    rush.buffer = this.noiseBuffer;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(720, now);
    lp.frequency.exponentialRampToValueAtTime(125, now + 0.56);
    lp.Q.value = 1.75;
    const rg = ctx.createGain();
    rg.gain.setValueAtTime(0.001, now);
    rg.gain.linearRampToValueAtTime(0.30 * scale, now + 0.05);
    rg.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    rush.connect(lp);
    lp.connect(rg);
    rg.connect(this.underwaterDirectBus);
    rush.start(now, Math.random() * 1.5, 0.66);

    for (let i = 0; i < 4; i++) {
      const d = 0.08 + i * 0.085 + Math.random() * 0.04;
      const bub = ctx.createOscillator();
      bub.type = 'sine';
      const f0 = 190 + Math.random() * 180;
      bub.frequency.setValueAtTime(f0, now + d);
      bub.frequency.exponentialRampToValueAtTime(f0 * 1.9, now + d + 0.07);
      const bg = ctx.createGain();
      bg.gain.setValueAtTime(0.0001, now + d);
      bg.gain.linearRampToValueAtTime(0.036 * scale, now + d + 0.015);
      bg.gain.exponentialRampToValueAtTime(0.0001, now + d + 0.08);
      bub.connect(bg);
      bg.connect(this.underwaterDirectBus);
      bub.start(now + d);
      bub.stop(now + d + 0.09);
    }
  }

  playEmerge(): void {
    if (!this.initialized || !this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const shed = ctx.createBufferSource();
    shed.buffer = this.noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(320, now);
    bp.frequency.exponentialRampToValueAtTime(1850, now + 0.14);
    bp.frequency.exponentialRampToValueAtTime(580, now + 0.56);
    bp.Q.value = 1.1;
    const sg = ctx.createGain();
    sg.gain.setValueAtTime(0.001, now);
    sg.gain.linearRampToValueAtTime(0.28, now + 0.045);
    sg.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    shed.connect(bp);
    bp.connect(sg);
    sg.connect(this.dryBus);
    sg.connect(this.reverbInputBus);
    shed.start(now, Math.random() * 1.4, 0.66);

    for (let i = 0; i < 3; i++) {
      const d = 0.14 + i * 0.11 + Math.random() * 0.05;
      this.playSpatialWaterDrip(
        this.listenerPos.x + (Math.random() - 0.5) * 0.6,
        this.listenerPos.y - 1.1,
        this.listenerPos.z + (Math.random() - 0.5) * 0.6,
        d,
        0.034
      );
    }
  }

  private playSpatialWaterDrip(x: number, y: number, z: number, delaySec: number, amp: number): void {
    if (!this.ctx || !this.dryBus || !this.reverbInputBus) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + delaySec;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    const f = 980 + Math.random() * 880;
    osc.frequency.setValueAtTime(f, t0);
    osc.frequency.exponentialRampToValueAtTime(f * 1.65, t0 + 0.042);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(amp, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.055);

    const panner = this.createOneShotPanner(ctx, x, y, z, 1.2, 24, 1.3);
    osc.connect(g);
    g.connect(panner);
    panner.connect(this.dryBus);
    g.connect(this.reverbInputBus);
    osc.start(t0);
    osc.stop(t0 + 0.065);
  }

  playFootstep(speed: number, isWet: boolean, stepSide = 1): void {
    if (this.currentUnderwater > 0.08 || this.currentWaterDepth > 0.06) return;
    if (!this.initialized || !this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const velScale = Math.min(1.15, Math.max(0.32, speed / 4.3));
    const jitter = 0.86 + Math.random() * 0.28;

    const fx = this.listenerPos.x + this.listenerRight.x * 0.16 * stepSide;
    const fy = this.listenerPos.y - 1.5;
    const fz = this.listenerPos.z + this.listenerRight.z * 0.16 * stepSide;
    const panner = this.createOneShotPanner(ctx, fx, fy, fz, 1.2, 36, 1.25);

    const knock = ctx.createOscillator();
    knock.type = 'triangle';
    knock.frequency.setValueAtTime(340 * jitter, now);
    knock.frequency.exponentialRampToValueAtTime(94 * jitter, now + 0.048);
    const kGain = ctx.createGain();
    kGain.gain.setValueAtTime(0.11 * velScale, now);
    kGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.058);

    const sole = ctx.createBufferSource();
    sole.buffer = this.noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = (isWet ? 2350 : 1680) * jitter;
    bp.Q.value = isWet ? 1.85 : 2.9;
    const sGain = ctx.createGain();
    sGain.gain.setValueAtTime((isWet ? 0.145 : 0.085) * velScale, now);
    sGain.gain.exponentialRampToValueAtTime(0.0001, now + (isWet ? 0.082 : 0.046));

    const revSend = ctx.createGain();
    revSend.gain.value = 0.72;

    knock.connect(kGain);
    sole.connect(bp);
    bp.connect(sGain);
    kGain.connect(panner);
    sGain.connect(panner);
    panner.connect(this.dryBus);

    kGain.connect(revSend);
    sGain.connect(revSend);
    revSend.connect(this.reverbInputBus);

    knock.start(now);
    knock.stop(now + 0.065);
    sole.start(now, Math.random() * 2.0, 0.095);
  }

  playWadeStep(speed: number, depth: number, stepSide = 1): void {
    if (this.currentUnderwater > 0.12) return;
    if (!this.initialized || !this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const depthNorm = THREE.MathUtils.clamp(depth / 0.85, 0.12, 1.0);
    const intensity = Math.min(1.15, (0.38 + speed * 0.16) * (0.58 + depthNorm * 0.64));

    const wx = this.listenerPos.x + this.listenerRight.x * 0.2 * stepSide;
    const wy = this.listenerPos.y - 1.35;
    const wz = this.listenerPos.z + this.listenerRight.z * 0.2 * stepSide;
    const panner = this.createOneShotPanner(ctx, wx, wy, wz, 1.6, 44, 1.2);

    const glug = ctx.createOscillator();
    glug.type = 'sine';
    const baseF = 165 + Math.random() * 85 - depthNorm * 35;
    glug.frequency.setValueAtTime(baseF, now);
    glug.frequency.exponentialRampToValueAtTime(baseF * 1.9, now + 0.085);
    glug.frequency.exponentialRampToValueAtTime(baseF * 0.68, now + 0.26);
    const gg = ctx.createGain();
    gg.gain.setValueAtTime(0.001, now);
    gg.gain.linearRampToValueAtTime(0.105 * intensity, now + 0.03);
    gg.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    const dragSrc = ctx.createBufferSource();
    dragSrc.buffer = this.noiseBuffer;
    const dragBp = ctx.createBiquadFilter();
    dragBp.type = 'bandpass';
    dragBp.frequency.setValueAtTime(240 + Math.random() * 90, now);
    dragBp.frequency.exponentialRampToValueAtTime(640 + speed * 90, now + 0.14);
    dragBp.frequency.exponentialRampToValueAtTime(190, now + 0.44);
    dragBp.Q.value = 1.5;
    const dg = ctx.createGain();
    dg.gain.setValueAtTime(0.001, now);
    dg.gain.linearRampToValueAtTime(0.24 * intensity, now + 0.055);
    dg.gain.exponentialRampToValueAtTime(0.0001, now + 0.46);

    const revSend = ctx.createGain();
    revSend.gain.value = 0.68;

    glug.connect(gg);
    dragSrc.connect(dragBp);
    dragBp.connect(dg);
    gg.connect(panner);
    dg.connect(panner);
    panner.connect(this.dryBus);

    gg.connect(revSend);
    dg.connect(revSend);
    revSend.connect(this.reverbInputBus);

    glug.start(now);
    glug.stop(now + 0.30);
    dragSrc.start(now, Math.random() * 2.0, 0.48);

    if (speed > 1.8) {
      const spSrc = ctx.createBufferSource();
      spSrc.buffer = this.noiseBuffer;
      const spBp = ctx.createBiquadFilter();
      spBp.type = 'bandpass';
      spBp.frequency.setValueAtTime(1350 + Math.random() * 350, now + 0.03);
      spBp.frequency.exponentialRampToValueAtTime(520, now + 0.28);
      spBp.Q.value = 1.4;
      const sg = ctx.createGain();
      sg.gain.setValueAtTime(0.001, now + 0.025);
      sg.gain.linearRampToValueAtTime(0.095 * intensity, now + 0.06);
      sg.gain.exponentialRampToValueAtTime(0.0001, now + 0.30);
      spSrc.connect(spBp);
      spBp.connect(sg);
      sg.connect(panner);
      sg.connect(revSend);
      spSrc.start(now + 0.025, Math.random() * 2.0, 0.32);
    }
  }

  playSwimStroke(speed: number, underwater: boolean): void {
    if (!this.initialized || !this.ctx || !this.dryBus || !this.reverbInputBus || !this.underwaterDirectBus || !this.noiseBuffer) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const intensity = Math.min(1.15, 0.42 + speed * 0.16);

    if (underwater) {
      const hydro = ctx.createBufferSource();
      hydro.buffer = this.noiseBuffer;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(92, now);
      lp.frequency.exponentialRampToValueAtTime(240 + Math.random() * 50, now + 0.20);
      lp.frequency.exponentialRampToValueAtTime(76, now + 0.64);
      lp.Q.value = 1.65;

      const g1 = ctx.createGain();
      g1.gain.setValueAtTime(0.001, now);
      g1.gain.linearRampToValueAtTime(0.32 * intensity, now + 0.15);
      g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.68);

      const pan = ctx.createStereoPanner();
      pan.pan.value = (Math.random() - 0.5) * 0.55;

      hydro.connect(lp);
      lp.connect(g1);
      g1.connect(pan);
      pan.connect(this.underwaterDirectBus);
      hydro.start(now, Math.random() * 1.8, 0.72);

      for (let b = 0; b < 3; b++) {
        const delay = 0.07 + b * 0.12 + Math.random() * 0.05;
        const bub = ctx.createOscillator();
        bub.type = 'sine';
        const f0 = 195 + Math.random() * 160;
        bub.frequency.setValueAtTime(f0, now + delay);
        bub.frequency.exponentialRampToValueAtTime(f0 * 1.82, now + delay + 0.068);
        const bg = ctx.createGain();
        bg.gain.setValueAtTime(0.0001, now + delay);
        bg.gain.linearRampToValueAtTime(0.032 * intensity, now + delay + 0.014);
        bg.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.078);
        const bPan = ctx.createStereoPanner();
        bPan.pan.value = (Math.random() - 0.5) * 1.1;
        bub.connect(bg);
        bg.connect(bPan);
        bPan.connect(this.underwaterDirectBus);
        bub.start(now + delay);
        bub.stop(now + delay + 0.09);
      }
      return;
    }

    const sx = this.listenerPos.x + this.listenerForward.x * 0.45;
    const sy = this.listenerPos.y - 0.45;
    const sz = this.listenerPos.z + this.listenerForward.z * 0.45;
    const panner = this.createOneShotPanner(ctx, sx, sy, sz, 1.5, 42, 1.2);

    const pushSrc = ctx.createBufferSource();
    pushSrc.buffer = this.noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(220, now);
    bp.frequency.exponentialRampToValueAtTime(620, now + 0.22);
    bp.frequency.exponentialRampToValueAtTime(155, now + 0.58);
    bp.Q.value = 1.3;

    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0.001, now);
    g1.gain.linearRampToValueAtTime(0.28 * intensity, now + 0.14);
    g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.60);

    const revSend = ctx.createGain();
    revSend.gain.value = 0.65;

    pushSrc.connect(bp);
    bp.connect(g1);
    g1.connect(panner);
    panner.connect(this.dryBus);
    g1.connect(revSend);
    revSend.connect(this.reverbInputBus);
    pushSrc.start(now, Math.random() * 1.8, 0.64);
  }

  playLadderStep(isWet: boolean, material: 'chrome' | 'steel', isFootStep: boolean): void {
    if (!this.initialized || !this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const side = isFootStep ? -1 : 1;
    const lx = this.listenerPos.x + this.listenerForward.x * 0.42 + this.listenerRight.x * 0.22 * side;
    const ly = this.listenerPos.y + (isFootStep ? -1.15 : -0.15);
    const lz = this.listenerPos.z + this.listenerForward.z * 0.42 + this.listenerRight.z * 0.22 * side;
    const panner = this.createOneShotPanner(ctx, lx, ly, lz, 1.2, 48, 1.2);
    const revSend = ctx.createGain();
    revSend.gain.value = 0.72;

    const isSteel = material === 'steel';
    const basePitch = (isSteel ? 0.74 : 1.0) * (isFootStep ? 0.88 : 1.08) * (0.90 + Math.random() * 0.20);

    const thud = ctx.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime((isFootStep ? 162 : 205) * basePitch, now);
    thud.frequency.exponentialRampToValueAtTime(58 * basePitch, now + 0.068);
    const thudG = ctx.createGain();
    thudG.gain.setValueAtTime(isFootStep ? 0.16 : 0.085, now);
    thudG.gain.exponentialRampToValueAtTime(0.0001, now + 0.078);
    thud.connect(thudG);
    thudG.connect(panner);
    thudG.connect(revSend);
    thud.start(now);
    thud.stop(now + 0.088);

    const modes: Array<[number, number, number]> = isSteel
      ? [
          [410 * basePitch, 0.082, 0.14],
          [920 * basePitch, 0.044, 0.10],
          [1740 * basePitch, 0.022, 0.065]
        ]
      : [
          [555 * basePitch, 0.070, 0.13],
          [1220 * basePitch, 0.040, 0.092],
          [2240 * basePitch, 0.019, 0.058]
        ];

    for (const [freq, amp, dur] of modes) {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      const jitter = 0.95 + Math.random() * 0.10;
      osc.frequency.setValueAtTime(freq * jitter, now);
      const g = ctx.createGain();
      g.gain.setValueAtTime(amp * (isFootStep ? 1.15 : 0.76), now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur * (0.85 + Math.random() * 0.3));
      osc.connect(g);
      g.connect(panner);
      g.connect(revSend);
      osc.start(now);
      osc.stop(now + dur + 0.03);
    }

    const slide = ctx.createBufferSource();
    slide.buffer = this.noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime((isWet ? 2150 : 1520) * (0.88 + Math.random() * 0.24), now);
    bp.frequency.exponentialRampToValueAtTime(920, now + 0.085);
    bp.Q.value = isWet ? 2.1 : 3.2;
    const gg = ctx.createGain();
    gg.gain.setValueAtTime(isWet ? 0.105 : 0.065, now);
    gg.gain.exponentialRampToValueAtTime(0.0001, now + (isWet ? 0.082 : 0.052));
    slide.connect(bp);
    bp.connect(gg);
    gg.connect(panner);
    gg.connect(revSend);
    slide.start(now, Math.random() * 2.0, 0.095);

    panner.connect(this.dryBus);
    revSend.connect(this.reverbInputBus);

    if (isWet && Math.random() < 0.72) {
      this.playSpatialWaterDrip(
        lx + (Math.random() - 0.5) * 0.3,
        ly - 0.4,
        lz + (Math.random() - 0.5) * 0.3,
        0.06 + Math.random() * 0.12,
        0.032
      );
    }
  }

  playSplash(intensity: number): void {
    if (!this.initialized || !this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const amp = Math.min(1.0, Math.max(0.25, intensity));

    const panner = this.createOneShotPanner(
      ctx,
      this.listenerPos.x,
      this.listenerPos.y - 1.2,
      this.listenerPos.z,
      1.8,
      54,
      1.15
    );
    const revSend = ctx.createGain();
    revSend.gain.value = 0.74;

    const thump = ctx.createOscillator();
    thump.type = 'sine';
    thump.frequency.setValueAtTime(140, now);
    thump.frequency.exponentialRampToValueAtTime(36, now + 0.19);
    const tGain = ctx.createGain();
    tGain.gain.setValueAtTime(0.30 * amp, now);
    tGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.23);
    thump.connect(tGain);
    tGain.connect(panner);
    tGain.connect(revSend);
    thump.start(now);
    thump.stop(now + 0.25);

    const spray = ctx.createBufferSource();
    spray.buffer = this.noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(1280, now);
    bp.frequency.exponentialRampToValueAtTime(340, now + 0.58);
    bp.Q.value = 0.88;
    const sGain = ctx.createGain();
    sGain.gain.setValueAtTime(0.001, now);
    sGain.gain.linearRampToValueAtTime(0.34 * amp, now + 0.025);
    sGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    spray.connect(bp);
    bp.connect(sGain);
    sGain.connect(panner);
    sGain.connect(revSend);
    spray.start(now, Math.random() * 1.4, 0.66);

    panner.connect(this.dryBus);
    revSend.connect(this.reverbInputBus);
  }

  playMantle(fromWater = false): void {
    if (!this.initialized || !this.ctx || !this.dryBus || !this.reverbInputBus || !this.noiseBuffer) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const mx = this.listenerPos.x + this.listenerForward.x * 0.45;
    const my = this.listenerPos.y - 0.25;
    const mz = this.listenerPos.z + this.listenerForward.z * 0.45;
    const panner = this.createOneShotPanner(ctx, mx, my, mz, 1.4, 38, 1.2);
    const revSend = ctx.createGain();
    revSend.gain.value = 0.68;

    const slap = ctx.createBufferSource();
    slap.buffer = this.noiseBuffer;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(fromWater ? 1180 : 880, now);
    bp.frequency.exponentialRampToValueAtTime(310, now + 0.15);
    bp.Q.value = 1.45;
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(fromWater ? 0.24 : 0.18, now);
    g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.17);
    slap.connect(bp);
    bp.connect(g1);
    g1.connect(panner);
    g1.connect(revSend);
    slap.start(now, Math.random() * 1.2, 0.19);

    const thud = ctx.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(104, now + 0.28);
    thud.frequency.exponentialRampToValueAtTime(44, now + 0.44);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, now + 0.27);
    g2.gain.linearRampToValueAtTime(0.16, now + 0.30);
    g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.46);
    thud.connect(g2);
    g2.connect(panner);
    thud.start(now + 0.27);
    thud.stop(now + 0.48);

    panner.connect(this.dryBus);
    revSend.connect(this.reverbInputBus);

    if (fromWater) {
      this.playSpatialWaterDrip(mx - 0.2, my - 0.5, mz, 0.18, 0.036);
      this.playSpatialWaterDrip(mx + 0.25, my - 0.6, mz, 0.34, 0.030);
    }
  }

  playLevelTransition(): void {
    if (!this.initialized || !this.ctx || !this.reverbInputBus) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    for (const [i, freq] of [110, 164.81, 220].entries()) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(i === 0 ? 0.15 : 0.075, now + 0.35);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
      osc.connect(g);
      g.connect(this.reverbInputBus);
      osc.start(now);
      osc.stop(now + 2.5);
    }
  }

  playFlashlightClick(): void {
    if (!this.initialized || !this.ctx || !this.dryBus || !this.noiseBuffer) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 2600;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.14, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);
    src.connect(hp);
    hp.connect(g);
    g.connect(this.dryBus);
    src.start(now, 0.2, 0.03);
  }

  dispose(): void {
    this.clearStageEmitters();
    if (this.ctx) {
      void this.ctx.close();
      this.ctx = null;
    }
    this.initialized = false;
  }
}
