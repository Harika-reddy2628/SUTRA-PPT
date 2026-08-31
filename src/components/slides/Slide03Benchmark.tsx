import React from 'react';
import { Plane, Radio, Mountain, Terminal } from 'lucide-react';

export const Slide03Benchmark: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#09090B] font-sans flex flex-col justify-between p-7 lg:p-11 select-none overflow-hidden border border-[#E4E4E7]">
      
      {/* Hallmark Tactical Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header */}
        <header className="flex justify-between items-center pb-3 border-b border-[#E4E4E7]">
          <div className="flex items-center gap-3.5">
            <div className="w-1.5 h-6 bg-[#09090B] rounded-sm"></div>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#09090B]">
              THE SOLUTION — 4 CORE SUBSYSTEM MOATS
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-300 bg-emerald-50 text-[10.5px] font-bold uppercase tracking-[0.18em] text-emerald-800 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>SWARM ARCHITECTURE</span>
            </div>
          </div>
        </header>

        {/* Main Headline & Quick Telemetry Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pt-1 gap-2">
          <div className="max-w-4xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09090B] tracking-tight leading-tight">
              AI Swarm Drones Find Survivors <span className="text-emerald-700">3-4x Faster</span> Than Traditional SAR
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10.5px] text-slate-700">
            <span className="px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E4E4E7]">10-18 MIN/MI²</span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">78-85% DETECTION</span>
            <span className="px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E4E4E7]">12% FALSE ALARMS</span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">$12K SORTIE</span>
          </div>
        </div>

        {/* 4-Column Subsystem Architecture Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch my-auto">
          
          {/* Column 1: Subsystem A (GNC) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-emerald-500 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Plane className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  50Hz OFFBOARD
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM A // GNC</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  SUTRA-FSD GNC &amp; 3D ORCA
                </h3>
              </div>

              {/* Problem Solved Pill */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">SOLVES PROBLEM VOID:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">Canopy GPS Multi-Path Drift &amp; Crashes</div>
              </div>

              {/* Technological Moat */}
              <div className="p-2 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-emerald-800 uppercase">SOLUTIONAL MOAT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Decentralized 3D velocity obstacle collision avoidance + PX4 MicroXRCE 50Hz offboard setpoint streaming.
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">0.05s</div>
                  <div className="text-[8px] text-slate-500">Response Latency</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-emerald-700">0 Tower</div>
                  <div className="text-[8px] text-slate-500">Dependency</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>DECENTRALIZED VIO</span>
              <span className="text-emerald-700 font-bold">50Hz RATE</span>
            </div>
            <div className="h-1 w-full bg-emerald-500 absolute bottom-0 left-0"></div>
          </div>

          {/* Column 2: Subsystem B (Wireless Comms) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-emerald-500 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex items-center justify-center text-slate-700">
                  <Radio className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-[#09090B] bg-[#F9FAFB] border border-[#E4E4E7] px-2 py-0.5 rounded">
                  -5dB RESILIENT
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM B // COMMS</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  Deep JSCC Neural Video
                </h3>
              </div>

              {/* Problem Solved Pill */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">SOLVES PROBLEM VOID:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">Mountain Ravine RF Ridge Blackout</div>
              </div>

              {/* Technological Moat */}
              <div className="p-2 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-800 uppercase">SOLUTIONAL MOAT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Differentiable joint source-channel coding yielding zero digital cliff and graceful video degradation down to -5dB.
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">-5dB</div>
                  <div className="text-[8px] text-slate-500">SNR Threshold</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-emerald-700">0 Cliff</div>
                  <div className="text-[8px] text-slate-500">Degradation</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>SEMANTIC COMMS</span>
              <span className="text-[#09090B] font-bold">EDGE TPU</span>
            </div>
            <div className="h-1 w-full bg-[#09090B] absolute bottom-0 left-0"></div>
          </div>

          {/* Column 3: Subsystem C (AI Perception) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-emerald-500 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Mountain className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  3.59cm ACCURACY
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM C // VISION</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  3D DEM AI Geolocation
                </h3>
              </div>

              {/* Problem Solved Pill */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">SOLVES PROBLEM VOID:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">35% False Alarms &amp; Flat GPS Drift</div>
              </div>

              {/* Technological Moat */}
              <div className="p-2 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-emerald-800 uppercase">SOLUTIONAL MOAT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Sub-15ms edge YOLOv8-Pose with real-time WGS84 elevation raycasting, eliminating 15-30m calculation errors.
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">&lt;15ms</div>
                  <div className="text-[8px] text-slate-500">Inference Time</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-emerald-700">3.59cm</div>
                  <div className="text-[8px] text-slate-500">Geo Error</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>ELEVATION CORRECTED</span>
              <span className="text-emerald-700 font-bold">JETSON ORIN</span>
            </div>
            <div className="h-1 w-full bg-emerald-500 absolute bottom-0 left-0"></div>
          </div>

          {/* Column 4: Subsystem D (Tactical C2) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-emerald-500 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex items-center justify-center text-slate-700">
                  <Terminal className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-[#09090B] bg-[#F9FAFB] border border-[#E4E4E7] px-2 py-0.5 rounded">
                  1-2 OPERATORS
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM D // C2 GCS</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  Pegasus 3D WebGPU GCS
                </h3>
              </div>

              {/* Problem Solved Pill */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">SOLVES PROBLEM VOID:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">15-25 Ground Crew Cognitive Overload</div>
              </div>

              {/* Technological Moat */}
              <div className="p-2 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-800 uppercase">SOLUTIONAL MOAT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Offline tactical 3D digital twin + ATAK plugin, empowering 1-2 operators to orchestrate full drone swarms.
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">1-2 Ops</div>
                  <div className="text-[8px] text-slate-500">Crew Size</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-emerald-700">100%</div>
                  <div className="text-[8px] text-slate-500">Offline ATAK</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>ATAK INTEGRATION</span>
              <span className="text-[#09090B] font-bold">WEBGPU 3D</span>
            </div>
            <div className="h-1 w-full bg-[#09090B] absolute bottom-0 left-0"></div>
          </div>

        </main>

        {/* Market Validation Banner (Bottom Row) */}
        <footer className="pt-2.5 border-t border-[#E4E4E7] flex flex-col gap-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">TAM PROJECTION</span>
              <span className="text-xs font-bold text-[#09090B]">$8.94B Market 2033</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">DEMAND DELTA</span>
              <span className="text-xs font-bold text-emerald-700">+412% Surge</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">REGULATORY</span>
              <span className="text-xs font-bold text-[#09090B]">37 Nations Mandate</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">FEMA ALLOCATION</span>
              <span className="text-xs font-bold text-emerald-700">$180M in 2025</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs text-slate-500">
            <div>PAGE 03</div>
            <div className="font-semibold uppercase tracking-wider text-[#09090B]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};
