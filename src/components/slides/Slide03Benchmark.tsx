import React from 'react';

export const Slide03Benchmark: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#000000] font-sans flex flex-col justify-between p-10 lg:p-14 select-none overflow-hidden border border-slate-200">
      
      {/* Subtle Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Left Accent Bar + Slide Title */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3.5">
            <div className="w-2 h-7 bg-[#0A1628] rounded-full"></div>
            <div className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#0A1628]">
              THE SOLUTION — SUBSYSTEM MOATS
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SWARM SEARCH EFFICIENCY</span>
          </div>
        </header>

        {/* Main Body: Clean, Focused Layout */}
        <main className="space-y-6 lg:space-y-8 my-auto">
          
          {/* Large Headline */}
          <div className="max-w-5xl">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[52px] font-extrabold text-black tracking-tight leading-[1.08]">
              AI Swarm Drones Find Survivors 3-4x Faster Than Traditional SAR
            </h2>
          </div>

          {/* 6x6 Rule Bullets (Spacious 2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5 max-w-5xl">
            
            <div className="flex items-center gap-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span>78-85% survivor detection on first pass</span>
            </div>

            <div className="flex items-center gap-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span>10-18 min per sq mile speed</span>
            </div>

            <div className="flex items-center gap-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span>Mesh networking works in GPS-denied zones</span>
            </div>

            <div className="flex items-center gap-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span>24/7 autonomous operation for 11+ days</span>
            </div>

            <div className="flex items-center gap-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span>False positive rate down to 12%</span>
            </div>

            <div className="flex items-center gap-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span>Cost per deployment: $12K vs $15K</span>
            </div>

          </div>

          {/* 3 Subsystem Solutional Moats Cards (Full Width 3-Column Grid) */}
          <div className="pt-2">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 flex items-center justify-between">
              <span>PROJECT SUTRA SUBSYSTEM SOLUTIONAL MOATS</span>
              <span className="text-[10px] text-emerald-700 font-mono font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                3 CORE ENGINEERING MOATS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              
              {/* Moat 1: GNC */}
              <div className="p-5 lg:p-6 rounded-3xl border border-emerald-200 bg-emerald-50/40 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                    SUBSYSTEM A MOAT
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                    50Hz OFFBOARD
                  </span>
                </div>
                <div className="text-lg lg:text-xl font-bold text-slate-900 font-heading mt-1">
                  PX4 + VIO EKF2 Autopilot
                </div>
                <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-normal">
                  Decentralized 3D ORCA anti-collision and offboard setpoint streaming without ground control tower dependency.
                </p>
              </div>

              {/* Moat 2: Deep JSCC */}
              <div className="p-5 lg:p-6 rounded-3xl border border-emerald-200 bg-emerald-50/40 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                    SUBSYSTEM B MOAT
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                    -5dB RESILIENT
                  </span>
                </div>
                <div className="text-lg lg:text-xl font-bold text-slate-900 font-heading mt-1">
                  Deep JSCC Neural Video
                </div>
                <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-normal">
                  Zero-cliff neural semantic video encoding that degrades gracefully under extreme radio jamming and ravine occlusion.
                </p>
              </div>

              {/* Moat 3: 3D DEM AI */}
              <div className="p-5 lg:p-6 rounded-3xl border border-emerald-200 bg-emerald-50/40 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                    SUBSYSTEM C/D MOAT
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                    3.59cm ACCURACY
                  </span>
                </div>
                <div className="text-lg lg:text-xl font-bold text-slate-900 font-heading mt-1">
                  3D DEM Terrain Raycasting
                </div>
                <p className="text-xs lg:text-sm text-slate-600 leading-relaxed font-normal">
                  Sub-15ms edge YOLOv8-Pose with WGS84 elevation raycasting, eliminating 15-30m flat-Earth geolocation errors.
                </p>
              </div>

            </div>
          </div>

          {/* Market Validation Banner (Bottom Row) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 pt-1 font-mono">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg lg:text-xl font-bold text-slate-900 font-heading">$8.94B</div>
              <div className="text-[9.5px] lg:text-[10px] text-slate-500 mt-0.5">Market by 2033 (18.4% CAGR)</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg lg:text-xl font-bold text-emerald-700 font-heading">+412%</div>
              <div className="text-[9.5px] lg:text-[10px] text-slate-500 mt-0.5">Disaster Surge in 20 Yrs</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg lg:text-xl font-bold text-slate-900 font-heading">37 Nations</div>
              <div className="text-[9.5px] lg:text-[10px] text-slate-500 mt-0.5">Mandating SAR Drones</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-lg lg:text-xl font-bold text-emerald-700 font-heading">$180M</div>
              <div className="text-[9.5px] lg:text-[10px] text-slate-500 mt-0.5">FEMA 2025 Allocation</div>
            </div>
          </div>

        </main>

        {/* Bottom Standard Slide Footer */}
        <footer className="pt-3 border-t border-[#E5E7EB] flex justify-between items-center font-mono text-xs text-[#6B7280]">
          <div>PAGE 03</div>
          <div className="font-semibold uppercase tracking-wider text-[#0A1628]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};
