import React from 'react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Radio, 
  Eye, 
  Layers 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-28 px-6 max-w-7xl mx-auto z-10">
      
      {/* Spacious Hero Container */}
      <div className="max-w-5xl space-y-9 mb-24">
        
        {/* Subtle Category Overline */}
        <div className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-earth-terracotta">
          <span className="w-8 h-[2px] bg-earth-terracotta"></span>
          <span>AUTONOMOUS MULTI-AGENT SWARM ARCHITECTURE</span>
        </div>

        {/* Grand Display Headline */}
        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black text-earth-forest tracking-tight uppercase leading-[0.98]">
          PROJECT SUTRA
        </h1>

        {/* Serif Subtitle */}
        <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-earth-sage font-semibold leading-snug">
          Swarm Unified Tactical Reconnaissance Architecture
        </p>

        {/* Core Mission Thesis */}
        <p className="text-sandstone-muted text-lg sm:text-xl leading-relaxed max-w-3xl font-normal">
          A decentralized, fault-tolerant multi-UAV swarm engineered from first principles for{' '}
          <strong className="text-earth-forest font-semibold">GPS-denied deep mountain valleys</strong>,{' '}
          <strong className="text-earth-forest font-semibold">-5 dB RF jamming resilience</strong>, and{' '}
          sub-meter survivor geolocation under dense forest canopies.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#fsd"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-earth-forest text-white font-mono text-xs font-bold shadow-lg hover:bg-earth-terracotta transition-all hover:shadow-xl group"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>EXPLORE AUTONOMOUS FSD</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#benchmarks"
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white border border-sandstone-border text-earth-forest font-mono text-xs font-bold hover:bg-canvas-raised transition-all shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>232 / 232 VERIFIED TESTS</span>
          </a>
        </div>

      </div>

      {/* 4 Spacious Architectural Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-7 rounded-3xl bg-white/95 border border-sandstone-border shadow-card-light space-y-3 hover:shadow-card-hover transition-all">
          <div className="flex items-center gap-2.5 text-earth-forest">
            <Compass className="w-5 h-5 text-earth-forest" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">01. Autopilot &amp; GNC</span>
          </div>
          <p className="text-sm text-sandstone-muted leading-relaxed">
            PX4 50Hz Offboard, 3D Voxel Cost-Volume &amp; ORCA 3D Collision Shield with hard CBF safety bounds.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white/95 border border-sandstone-border shadow-card-light space-y-3 hover:shadow-card-hover transition-all">
          <div className="flex items-center gap-2.5 text-earth-terracotta">
            <Radio className="w-5 h-5 text-earth-terracotta" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">02. Neural Comms</span>
          </div>
          <p className="text-sm text-sandstone-muted leading-relaxed">
            Deep JSCC Autoencoder with 96.9% compression &amp; -5 dB jamming survival without digital cliff.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white/95 border border-sandstone-border shadow-card-light space-y-3 hover:shadow-card-hover transition-all">
          <div className="flex items-center gap-2.5 text-earth-sage">
            <Eye className="w-5 h-5 text-earth-sage" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">03. AI Perception</span>
          </div>
          <p className="text-sm text-sandstone-muted leading-relaxed">
            Tri-Modal RGB/FLIR/mmWave with 3.59cm terrain-corrected DEM raycasting over steep mountain slopes.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white/95 border border-sandstone-border shadow-card-light space-y-3 hover:shadow-card-hover transition-all">
          <div className="flex items-center gap-2.5 text-elemental-sky">
            <Layers className="w-5 h-5 text-elemental-sky" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">04. Tactical GCS</span>
          </div>
          <p className="text-sm text-sandstone-muted leading-relaxed">
            Pegasus 3D GIS with 60 FPS WebGPU pipeline &amp; broadcast-ready MIL-STD-2525 ATAK CoT XML.
          </p>
        </div>

      </div>

    </section>
  );
};
