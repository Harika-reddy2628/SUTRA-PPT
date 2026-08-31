import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Activity, 
  Crosshair
} from 'lucide-react';

export const Slide01Title: React.FC = () => {
  const [clock, setClock] = useState('2026-08-31 11:22:19 UTC+05:30');
  const [psnr, setPsnr] = useState(41.8);
  const [alt, setAlt] = useState(4.60);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setClock(`2026-08-31 ${d.toTimeString().split(' ')[0]} UTC+05:30`);
      setPsnr(+(41.5 + Math.random() * 0.6).toFixed(1));
      setAlt(+(4.58 + Math.random() * 0.05).toFixed(2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14 text-earth-forest">
      
      {/* TOP TELEMETRY BAR */}
      <header className="flex justify-between items-center pb-5 border-b border-sandstone-border/80">
        <div className="flex items-center gap-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-terracottaSoft border border-earth-terracotta/25 text-earth-terracotta shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-earth-terracotta" />
            <span>DEFENSE & DISASTER ROBOTICS</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-sageSoft border border-earth-sage/30 text-earth-forest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_8px_#059669] animate-pulse"></span>
            <span>SWARM STATE: 5/5 ACTIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-sandstone-muted">
          <div>SECTOR: <span className="text-earth-forest font-semibold">KEDARNATH VALLEY (30.73° N, 79.06° E)</span></div>
          <div>MISSION: <span className="text-earth-sage font-semibold">RECON-SURVIVOR-GEO</span></div>
          <div className="text-sandstone-faint">CLOCK: <span className="text-earth-forest font-medium">{clock}</span></div>
        </div>
      </header>

      {/* HERO DIPTYCH */}
      <main className="grid grid-cols-12 gap-10 items-center my-auto">
        
        {/* Left Column: Mission Thesis */}
        <div className="col-span-7 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-earth-terracotta">
            <span className="w-6 h-[2px] bg-earth-terracotta"></span>
            <span>Autonomous Multi-Agent Aerial Swarm Architecture</span>
          </div>

          <h1 className="font-heading text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-none text-earth-forest">
            PROJECT SUTRA
          </h1>

          <h2 className="text-xl lg:text-2xl font-semibold text-earth-sage tracking-tight font-serif italic leading-snug">
            Swarm Unified Tactical Reconnaissance Architecture
          </h2>

          <p className="text-sandstone-muted text-base lg:text-lg leading-relaxed max-w-xl">
            A decentralized, fault-tolerant multi-UAV swarm engineered from first principles for{' '}
            <strong className="text-earth-forest font-semibold">GPS-denied deep mountain valleys, heavy RF jamming (-5 dB SNR)</strong>, and{' '}
            sub-meter survivor geolocation under dense forest canopies.
          </p>

          {/* 4 Subsystems Ribbon */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-sandstone-border shadow-card-light hover:border-earth-sage/40 transition-all hover:shadow-card-hover">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-earth-forest text-white">
                SUBSYS A
              </span>
              <span className="text-xs text-earth-forest font-semibold leading-tight">
                PX4 50Hz Offboard + SUTRA-FSD 3D Occupancy & ORCA 3D
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-sandstone-border shadow-card-light hover:border-earth-terracotta/40 transition-all hover:shadow-card-hover">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-earth-terracotta text-white">
                SUBSYS B
              </span>
              <span className="text-xs text-earth-forest font-semibold leading-tight">
                Deep JSCC Neural Transceiver (96.9% Video Compression)
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-sandstone-border shadow-card-light hover:border-earth-sage/40 transition-all hover:shadow-card-hover">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-earth-sage text-white">
                SUBSYS C
              </span>
              <span className="text-xs text-earth-forest font-semibold leading-tight">
                Tri-Modal RGB/Thermal Edge AI + 3.59cm WGS84 Raycaster
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-sandstone-border shadow-card-light hover:border-elemental-sky/40 transition-all hover:shadow-card-hover">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-elemental-sky text-white">
                SUBSYS D
              </span>
              <span className="text-xs text-earth-forest font-semibold leading-tight">
                Pegasus 3D GIS GCS + WebGPU 60 FPS Multi-Stream & ATAK CoT
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: Tactical Live Telemetry HUD */}
        <div className="col-span-5 relative">
          <div className="relative rounded-2xl p-6 bg-white/95 border border-sandstone-border shadow-card-hover backdrop-blur-md overflow-hidden">
            
            {/* Top Accent Gradient */}
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-earth-forest via-earth-sage to-earth-terracotta"></div>

            {/* HUD Header */}
            <div className="flex justify-between items-center pb-3.5 border-b border-sandstone-border mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-earth-forest">
                <Activity className="w-4 h-4 text-earth-sage" />
                <span>TACTICAL MESH TELEMETRY (GAZEBO SIM 8)</span>
              </div>
              <div className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold text-earth-forest bg-earth-sageSoft border border-earth-sage/30">
                SWARM-RAFT LOCKED
              </div>
            </div>

            {/* Live Stream Data */}
            <div className="space-y-2.5 font-mono text-xs">
              
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-canvas-raised/80 border border-sandstone-border">
                <span className="text-sandstone-muted">LEADER (UAV-01)</span>
                <span className="text-earth-forest font-bold">
                  ORCA 3D ACTIVE | Z = {alt}m | V = 3.20 m/s
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-canvas-raised/80 border border-sandstone-border">
                <span className="text-sandstone-muted">ECHELON FOLLOWER (UAV 02-05)</span>
                <span className="text-earth-sage font-bold">
                  CBF BARRIER: 4.12m &gt; 2.80m SAFE
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-canvas-raised/80 border border-sandstone-border">
                <span className="text-sandstone-muted">NEURAL LINK (DEEP JSCC)</span>
                <span className="text-earth-forest font-bold">
                  -5.0 dB SNR JAMMING | {psnr} dB PSNR
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-canvas-raised/80 border border-sandstone-border">
                <span className="text-sandstone-muted">EDGE NEUROFLIGHT INVERSION</span>
                <span className="text-elemental-sky font-bold">
                  0.04 ms INFERENCE | 18.0 m/s GUST REJECTION
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 rounded-lg bg-canvas-raised/80 border border-sandstone-border">
                <span className="text-sandstone-muted">CONSENSUS STATE</span>
                <span className="text-earth-ochre font-bold">
                  QUORUM 5/5 | TERM 14 | ZERO SPLIT-BRAIN
                </span>
              </div>

            </div>

            {/* Target Acquired Box */}
            <div className="mt-4 p-3.5 rounded-xl bg-canvas-raised border border-dashed border-earth-sage/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-earth-sage/15 border border-earth-sage/40 flex items-center justify-center text-earth-forest text-sm">
                  <Crosshair className="w-4 h-4 animate-spin text-earth-forest" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-sandstone-muted tracking-wider font-bold">
                    SURVIVOR TARGET ACQUIRED
                  </div>
                  <div className="font-mono text-xs font-bold text-earth-forest">
                    WGS84: 30.73462° N, 79.06691° E
                  </div>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-earth-terracottaSoft border border-earth-terracotta/30 text-earth-terracotta font-mono text-[11px] font-bold">
                ERR: 0.0359m
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* BOTTOM BENCHMARK RIBBON */}
      <section className="grid grid-cols-4 gap-5 pt-6 border-t border-sandstone-border/80">
        
        <div className="relative p-5 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-earth-forest"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-extrabold text-earth-forest">
            232/232 <span className="font-mono text-xs text-sandstone-muted font-bold">TESTS</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-1">
            Zero-Mock Verification
          </div>
          <div className="text-xs text-sandstone-muted mt-0.5 leading-snug">
            100% automated pytest suite passing with live telemetry stdout
          </div>
        </div>

        <div className="relative p-5 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-earth-terracotta"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-extrabold text-earth-terracotta">
            96.9% <span className="font-mono text-xs text-sandstone-muted font-bold">BW SAVED</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-1">
            Deep JSCC Compression
          </div>
          <div className="text-xs text-sandstone-muted mt-0.5 leading-snug">
            512 KB → 16 KB frames surviving extreme -5 dB jamming without cliff
          </div>
        </div>

        <div className="relative p-5 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-earth-sage"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-extrabold text-earth-sage">
            3.59 <span className="font-mono text-xs text-sandstone-muted font-bold">CM</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-1">
            WGS84 DEM Geolocation
          </div>
          <div className="text-xs text-sandstone-muted mt-0.5 leading-snug">
            Terrain-corrected raycaster error from 30m altitude over mountain slopes
          </div>
        </div>

        <div className="relative p-5 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-elemental-sky"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-extrabold text-elemental-sky">
            60.0 <span className="font-mono text-xs text-sandstone-muted font-bold">FPS</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-1">
            WebGPU Multi-Stream
          </div>
          <div className="text-xs text-sandstone-muted mt-0.5 leading-snug">
            Locked 60 FPS zero frame-drop tactical 3D GIS Ground Control Station
          </div>
        </div>

      </section>

      {/* FOOTER ATTRIBUTION BAR */}
      <footer className="flex justify-between items-center pt-4 text-xs font-mono text-sandstone-muted border-t border-sandstone-border/60">
        <div className="flex items-center gap-3">
          <span><strong className="text-earth-forest">Nikhil</strong> (Tech Lead · GNC/JSCC)</span>
          <span>•</span>
          <span><strong className="text-earth-forest">Vedanth Sai Ram</strong> (Perception)</span>
          <span>•</span>
          <span><strong className="text-earth-forest">Siva Kesava</strong> (3D GIS GCS)</span>
          <span>•</span>
          <span><strong className="text-earth-forest">Harika</strong> (QA & Pitch)</span>
          <span>•</span>
          <span><strong className="text-earth-forest">Rohith Kumar</strong> (HIL Compute)</span>
        </div>

        <div className="flex items-center gap-2 text-earth-forest font-semibold">
          <span className="w-2 h-2 rounded-full bg-earth-terracotta"></span>
          <span>NDMA / DARPA-TIER OPEN ARCHITECTURE · GRAND FINALS 2026</span>
        </div>
      </footer>

    </div>
  );
};
