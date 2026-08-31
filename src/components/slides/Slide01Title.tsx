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
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14">
      
      {/* TOP TELEMETRY BAR */}
      <header className="flex justify-between items-center pb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-rose-500/10 border border-rose-500/30 text-rose-300">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>DEFENSE & DISASTER ROBOTICS</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse"></span>
            <span>SWARM STATE: 5/5 NODES ACTIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
          <div>SECTOR: <span className="text-cyan-400 font-semibold">KEDARNATH VALLEY (30.7346° N, 79.0669° E)</span></div>
          <div>MISSION: <span className="text-cyan-400 font-semibold">RAPID-RECON-SURVIVOR-GEO</span></div>
          <div className="text-slate-500">CLOCK: <span className="text-slate-300">{clock}</span></div>
        </div>
      </header>

      {/* HERO DIPTYCH */}
      <main className="grid grid-cols-12 gap-10 items-center my-auto">
        
        {/* Left Column: Mission Thesis */}
        <div className="col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-cyan-400">
            <span className="w-6 h-[2px] bg-cyan-400"></span>
            Autonomous Multi-Agent Aerial Swarm Architecture
          </div>

          <h1 className="font-heading text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            PROJECT SUTRA
          </h1>

          <h2 className="text-xl lg:text-2xl font-semibold text-sky-400 tracking-tight leading-snug">
            Swarm Unified Tactical Reconnaissance Architecture
          </h2>

          <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-xl">
            A decentralized, fault-tolerant multi-UAV swarm engineered from first principles for{' '}
            <strong className="text-white font-semibold">GPS-denied deep mountain valleys, heavy RF jamming (-5 dB SNR)</strong>, and{' '}
            sub-meter survivor geolocation under dense forest canopies.
          </p>

          {/* 4 Subsystems Ribbon */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            
            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
                SUBSYS A
              </span>
              <span className="text-xs text-slate-200 font-medium leading-tight">
                PX4 50Hz Offboard + SUTRA-FSD 3D Occupancy & ORCA 3D
              </span>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
                SUBSYS B
              </span>
              <span className="text-xs text-slate-200 font-medium leading-tight">
                Deep JSCC Neural Transceiver (96.9% Video Compression)
              </span>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
                SUBSYS C
              </span>
              <span className="text-xs text-slate-200 font-medium leading-tight">
                Tri-Modal RGB/Thermal Edge AI + 3.59cm WGS84 Raycaster
              </span>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-colors">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
                SUBSYS D
              </span>
              <span className="text-xs text-slate-200 font-medium leading-tight">
                Pegasus 3D GIS GCS + WebGPU 60 FPS Multi-Stream & ATAK CoT
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: Tactical Live Telemetry HUD */}
        <div className="col-span-5 relative">
          <div className="relative rounded-xl p-6 bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            {/* HUD Header */}
            <div className="flex justify-between items-center pb-3.5 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-slate-200">
                <Activity className="w-4 h-4 text-cyan-400" />
                TACTICAL MESH TELEMETRY (GAZEBO SIM 8)
              </div>
              <div className="px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                SWARM-RAFT LOCKED
              </div>
            </div>

            {/* Live Stream Data */}
            <div className="space-y-2.5 font-mono text-xs">
              
              <div className="flex justify-between items-center p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <span className="text-slate-400">LEADER (UAV-01)</span>
                <span className="text-emerald-400 font-semibold">
                  ORCA 3D ACTIVE | Z = {alt}m | V = 3.20 m/s
                </span>
              </div>

              <div className="flex justify-between items-center p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <span className="text-slate-400">ECHELON FOLLOWER (UAV 02-05)</span>
                <span className="text-cyan-400 font-semibold">
                  CBF BARRIER: 4.12m &gt; 2.80m SAFE
                </span>
              </div>

              <div className="flex justify-between items-center p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <span className="text-slate-400">NEURAL LINK (DEEP JSCC)</span>
                <span className="text-emerald-400 font-semibold">
                  -5.0 dB SNR JAMMING | {psnr} dB PSNR
                </span>
              </div>

              <div className="flex justify-between items-center p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <span className="text-slate-400">EDGE NEUROFLIGHT INVERSION</span>
                <span className="text-cyan-400 font-semibold">
                  0.04 ms INFERENCE | 18.0 m/s GUST REJECTION
                </span>
              </div>

              <div className="flex justify-between items-center p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <span className="text-slate-400">CONSENSUS STATE</span>
                <span className="text-amber-400 font-semibold">
                  QUORUM 5/5 | TERM 14 | ZERO SPLIT-BRAIN
                </span>
              </div>

            </div>

            {/* Target Acquired Box */}
            <div className="mt-4 p-3 rounded-lg bg-slate-950/80 border border-dashed border-cyan-500/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-sm">
                  <Crosshair className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                    SURVIVOR TARGET ACQUIRED
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-100">
                    WGS84: 30.73462° N, 79.06691° E
                  </div>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded bg-rose-500/20 border border-rose-500 text-rose-300 font-mono text-[11px] font-bold">
                ERR: 0.0359m
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* BOTTOM BENCHMARK RIBBON */}
      <section className="grid grid-cols-4 gap-5 pt-6 border-t border-slate-800">
        
        <div className="relative p-4 rounded-xl bg-slate-900/70 border border-slate-800 overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-cyan-400"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-black text-white">
            232/232 <span className="font-mono text-xs text-slate-400 font-bold">TESTS</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-slate-200 mt-1">
            Zero-Mock Verification
          </div>
          <div className="text-xs text-slate-400 mt-0.5 leading-snug">
            100% automated pytest suite passing with live telemetry stdout
          </div>
        </div>

        <div className="relative p-4 rounded-xl bg-slate-900/70 border border-slate-800 overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-emerald-400"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-black text-white">
            96.9% <span className="font-mono text-xs text-slate-400 font-bold">BW SAVED</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-slate-200 mt-1">
            Deep JSCC Compression
          </div>
          <div className="text-xs text-slate-400 mt-0.5 leading-snug">
            512 KB → 16 KB frames surviving extreme -5 dB jamming without cliff
          </div>
        </div>

        <div className="relative p-4 rounded-xl bg-slate-900/70 border border-slate-800 overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-sky-400"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-black text-white">
            3.59 <span className="font-mono text-xs text-slate-400 font-bold">CM</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-slate-200 mt-1">
            WGS84 DEM Geolocation
          </div>
          <div className="text-xs text-slate-400 mt-0.5 leading-snug">
            Terrain-corrected raycaster error from 30m altitude over mountain slopes
          </div>
        </div>

        <div className="relative p-4 rounded-xl bg-slate-900/70 border border-slate-800 overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-rose-500"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-3xl font-black text-white">
            60.0 <span className="font-mono text-xs text-slate-400 font-bold">FPS</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-slate-200 mt-1">
            WebGPU Multi-Stream
          </div>
          <div className="text-xs text-slate-400 mt-0.5 leading-snug">
            Locked 60 FPS zero frame-drop tactical 3D GIS Ground Control Station
          </div>
        </div>

      </section>

      {/* FOOTER ATTRIBUTION BAR */}
      <footer className="flex justify-between items-center pt-4 text-xs font-mono text-slate-400 border-t border-slate-800/40">
        <div className="flex items-center gap-3">
          <span><strong className="text-slate-200">Nikhil</strong> (Tech Lead · GNC/JSCC)</span>
          <span>•</span>
          <span><strong className="text-slate-200">Vedanth Sai Ram</strong> (Perception)</span>
          <span>•</span>
          <span><strong className="text-slate-200">Siva Kesava</strong> (3D GIS GCS)</span>
          <span>•</span>
          <span><strong className="text-slate-200">Harika</strong> (QA & Pitch)</span>
          <span>•</span>
          <span><strong className="text-slate-200">Rohith Kumar</strong> (HIL Compute)</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          <span>NDMA / DARPA-TIER OPEN ARCHITECTURE · GRAND FINALS 2026</span>
        </div>
      </footer>

    </div>
  );
};
