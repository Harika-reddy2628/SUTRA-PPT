import React from 'react';
import { Plane, Radio, Mountain } from 'lucide-react';

export const Slide03Benchmark: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#000000] font-sans flex flex-col justify-between p-8 lg:p-12 select-none overflow-hidden border border-[#E4E4E7]">
      
      {/* Subtle Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Left Accent Bar + Header Title */}
        <header className="flex justify-between items-center pb-3 border-b border-[#E4E4E7]">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#09090B] rounded-sm"></div>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#09090B]">
              THE SOLUTION — SUBSYSTEM MOATS
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-300 bg-emerald-50 text-[10.5px] font-bold uppercase tracking-[0.15em] text-emerald-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SWARM SEARCH EFFICIENCY</span>
          </div>
        </header>

        {/* Main Body: Compact Scaled Headline + 2-Column Precision Grid */}
        <main className="flex-1 flex flex-col justify-center py-4 space-y-5">
          
          {/* Headline */}
          <div className="max-w-4xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#09090B] tracking-tight leading-tight">
              AI Swarm Drones Find Survivors <span className="text-emerald-600">3-4x Faster</span> Than Traditional SAR
            </h2>
          </div>

          {/* 2-Column Telemetry & Subsystems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column (5 Cols): System Performance Telemetry Matrix */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <span>SYSTEM PERFORMANCE TELEMETRY</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">6x6 VERIFIED</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 flex-1">
                
                {/* Tile 1: Detection Rate */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-wider">Detection Rate</span>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold font-mono text-emerald-700">78-85%</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">First-pass probability</div>
                  </div>
                </div>

                {/* Tile 2: Scan Speed */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-wider">Area Speed</span>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold font-mono text-slate-900">10-18 min</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">Per sq mile (vs 2-3 hrs)</div>
                  </div>
                </div>

                {/* Tile 3: Mesh Comms */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-wider">Comms Protocol</span>
                  <div>
                    <div className="text-base lg:text-lg font-bold font-mono text-slate-900">Mesh Net</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">GPS-Denied Autonomous</div>
                  </div>
                </div>

                {/* Tile 4: Autonomy */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-wider">Sustained Autonomy</span>
                  <div>
                    <div className="text-base lg:text-lg font-bold font-mono text-slate-900">24/7 (11+ Days)</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">Continuous field sorties</div>
                  </div>
                </div>

                {/* Tile 5: False Positives */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-wider">False Positives</span>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold font-mono text-emerald-700">12%</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">Down from 35% legacy</div>
                  </div>
                </div>

                {/* Tile 6: Deployment Cost */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                  <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-wider">Deployment Cost</span>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold font-mono text-slate-900">$12K <span className="text-xs line-through text-slate-400 font-normal">$15K</span></div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">Per sortie deployment</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column (7 Cols): Subsystem Moat Architecture Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <span>SUBSYSTEM MOAT ARCHITECTURE</span>
                <span className="text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[10px] font-mono">3 CORE ENGINEERING MOATS</span>
              </div>

              <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                
                {/* Card 1: GNC Moat */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all flex items-start gap-3.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm lg:text-base font-bold text-slate-900 font-heading">
                        Subsystem A Moat: PX4 + VIO EKF2 Autopilot
                      </h3>
                      <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        50Hz OFFBOARD
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-mono mt-0.5 leading-relaxed">
                      Decentralized 3D ORCA anti-collision with zero tower reliance and active GPS-denied flocking algorithms.
                    </p>
                  </div>
                </div>

                {/* Card 2: Deep JSCC Moat */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all flex items-start gap-3.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm lg:text-base font-bold text-slate-900 font-heading">
                        Subsystem B Moat: Deep JSCC Neural Video
                      </h3>
                      <span className="text-[9px] font-mono font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                        -5dB RESILIENT
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-mono mt-0.5 leading-relaxed">
                      Zero-cliff neural semantic video encoding with graceful degradation under severe mountain ravine occlusion.
                    </p>
                  </div>
                </div>

                {/* Card 3: 3D DEM Moat */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all flex items-start gap-3.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                    <Mountain className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm lg:text-base font-bold text-slate-900 font-heading">
                        Subsystem C/D Moat: 3D DEM Terrain Raycasting
                      </h3>
                      <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        3.59cm ACCURACY
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-mono mt-0.5 leading-relaxed">
                      Sub-15ms edge YOLOv8-Pose with WGS84 elevation raycasting, eliminating 15-30m flat-Earth geolocation errors.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Market Validation Banner (Bottom Row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1 font-mono">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">TAM PROJECTION</span>
              <span className="text-xs font-bold text-slate-900">$8.94B Market 2033</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">DEMAND DELTA</span>
              <span className="text-xs font-bold text-emerald-700">+412% Surge</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">REGULATORY</span>
              <span className="text-xs font-bold text-slate-900">37 Nations Mandate</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">FEMA ALLOCATION</span>
              <span className="text-xs font-bold text-emerald-700">$180M in 2025</span>
            </div>
          </div>

        </main>

        {/* Bottom Standard Slide Footer */}
        <footer className="pt-2.5 border-t border-[#E4E4E7] flex justify-between items-center font-mono text-xs text-[#6B7280]">
          <div>PAGE 03</div>
          <div className="font-semibold uppercase tracking-wider text-[#0A1628]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};
