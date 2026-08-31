import React from 'react';
import { ShieldCheck, Compass, Radio, Eye, Layers } from 'lucide-react';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-14 lg:p-16 text-earth-forest bg-[#FAF7F2]">
      
      {/* Top Header Bar - Spacious & Clean */}
      <header className="flex justify-between items-center pb-6 border-b border-sandstone-border">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-terracottaSoft border border-earth-terracotta/20 text-earth-terracotta">
            <span className="w-1.5 h-1.5 rounded-full bg-earth-terracotta"></span>
            <span>DEFENSE &amp; DISASTER ROBOTICS</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-sageSoft border border-earth-sage/25 text-earth-forest">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>SWARM STATE: 5/5 ACTIVE</span>
          </div>
        </div>

        <div className="font-mono text-xs text-sandstone-muted font-medium tracking-wide">
          SECTOR: KEDARNATH VALLEY (30.73° N, 79.06° E)
        </div>
      </header>

      {/* Hero Center - Pure Typography & Breathable Spacing */}
      <main className="my-auto max-w-5xl space-y-6">
        
        <div className="font-mono text-xs font-bold tracking-widest uppercase text-earth-terracotta flex items-center gap-2">
          <span className="w-8 h-[2px] bg-earth-terracotta"></span>
          <span>AUTONOMOUS MULTI-AGENT SWARM ARCHITECTURE</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-earth-forest uppercase leading-none">
          PROJECT SUTRA
        </h1>

        <h2 className="font-serif italic text-2xl sm:text-3xl text-earth-sage font-semibold tracking-tight">
          Swarm Unified Tactical Reconnaissance Architecture
        </h2>

        <p className="text-sandstone-muted text-base sm:text-lg leading-relaxed font-normal max-w-3xl pt-1">
          A decentralized, fault-tolerant multi-UAV swarm engineered from first principles for{' '}
          <strong className="text-earth-forest font-semibold">GPS-denied deep mountain valleys</strong>,{' '}
          <strong className="text-earth-forest font-semibold">-5 dB RF jamming resilience</strong>, and{' '}
          sub-meter survivor geolocation under dense forest canopies.
        </p>

        {/* 4 Architectural Pillars - Clean Porcelain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          
          <div className="p-5 rounded-2xl bg-white border border-sandstone-border shadow-card-light space-y-2 hover:shadow-card-hover transition-all">
            <div className="flex items-center gap-2 text-earth-forest">
              <Compass className="w-4 h-4 text-earth-forest" />
              <span className="font-mono text-xs font-bold uppercase">01. Autopilot &amp; GNC</span>
            </div>
            <p className="text-xs text-sandstone-muted leading-relaxed">
              PX4 50Hz Offboard, 3D Voxel Cost-Volume &amp; ORCA 3D Collision Shield.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sandstone-border shadow-card-light space-y-2 hover:shadow-card-hover transition-all">
            <div className="flex items-center gap-2 text-earth-terracotta">
              <Radio className="w-4 h-4 text-earth-terracotta" />
              <span className="font-mono text-xs font-bold uppercase">02. Neural Comms</span>
            </div>
            <p className="text-xs text-sandstone-muted leading-relaxed">
              Deep JSCC Autoencoder with 96.9% compression &amp; -5 dB jamming survival.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sandstone-border shadow-card-light space-y-2 hover:shadow-card-hover transition-all">
            <div className="flex items-center gap-2 text-earth-sage">
              <Eye className="w-4 h-4 text-earth-sage" />
              <span className="font-mono text-xs font-bold uppercase">03. AI Perception</span>
            </div>
            <p className="text-xs text-sandstone-muted leading-relaxed">
              Tri-Modal RGB/FLIR/mmWave with 3.59cm terrain-corrected DEM raycasting.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-sandstone-border shadow-card-light space-y-2 hover:shadow-card-hover transition-all">
            <div className="flex items-center gap-2 text-elemental-sky">
              <Layers className="w-4 h-4 text-elemental-sky" />
              <span className="font-mono text-xs font-bold uppercase">04. Tactical GCS</span>
            </div>
            <p className="text-xs text-sandstone-muted leading-relaxed">
              Pegasus 3D GIS with 60 FPS WebGPU pipeline &amp; MIL-STD-2525 ATAK CoT XML.
            </p>
          </div>

        </div>

      </main>

      {/* Footer Attribution - Simple & Spacious */}
      <footer className="pt-6 border-t border-sandstone-border flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-xs text-sandstone-muted">
        <div>
          Nikhil (Tech Lead) • Vedanth Sai Ram • Siva Kesava • Harika • Rohith Kumar
        </div>
        <div className="flex items-center gap-2 text-earth-forest font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>NDMA / DARPA-TIER OPEN ARCHITECTURE · GRAND FINALS 2026</span>
        </div>
      </footer>

    </div>
  );
};
