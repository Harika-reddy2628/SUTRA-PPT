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
              THE SOLUTION / BENCHMARK
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SWARM SEARCH EFFICIENCY</span>
          </div>
        </header>

        {/* Main Body: 2-Column Split */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 my-auto items-center">
          
          {/* Left Column (6 Cols): Increased Size Headline + 6x6 Bullets + Market Validation Banner */}
          <div className="lg:col-span-6 space-y-5">
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-black tracking-tight leading-[1.08]">
              AI Swarm Drones Find Survivors 3-4x Faster Than Traditional SAR
            </h2>

            {/* 6x6 Rule Bullets: <=6 words each, left-aligned, #374151 */}
            <ul className="space-y-3 text-base sm:text-lg font-normal text-[#374151] leading-relaxed">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>78-85% survivor detection on first pass</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>10-18 min per sq mile speed</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>Mesh networking works in GPS-denied zones</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>24/7 autonomous operation for 11+ days</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>False positive rate down to 12%</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span>Cost per deployment: $12K vs $15K</span>
              </li>
            </ul>

            {/* Market Validation Micro-Cards Banner */}
            <div className="pt-2">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 flex items-center justify-between">
                <span>MARKET VALIDATION &amp; ADOPTION</span>
                <span className="text-[9px] text-slate-400 font-mono">GLOBAL SAR RESEARCH</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                
                <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50/90 space-y-1 shadow-sm">
                  <div className="text-lg font-extrabold text-slate-900 font-heading">$8.94B</div>
                  <div className="text-[9.5px] text-slate-500 font-mono leading-tight">By 2033 (18.4% CAGR)</div>
                </div>

                <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50/90 space-y-1 shadow-sm">
                  <div className="text-lg font-extrabold text-slate-900 font-heading">+412%</div>
                  <div className="text-[9.5px] text-slate-500 font-mono leading-tight">Disaster Surge (20 Yrs)</div>
                </div>

                <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50/90 space-y-1 shadow-sm">
                  <div className="text-lg font-extrabold text-slate-900 font-heading">37 Nations</div>
                  <div className="text-[9.5px] text-slate-500 font-mono leading-tight">Mandated SAR Drones</div>
                </div>

                <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50/90 space-y-1 shadow-sm">
                  <div className="text-lg font-extrabold text-slate-900 font-heading">$180M</div>
                  <div className="text-[9.5px] text-slate-500 font-mono leading-tight">FEMA 2025 Allocation</div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column (6 Cols): Visual Speed Comparison Bars & Benchmark Matrix */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Key Statistics Comparison Table / Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md space-y-3.5">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div>
                  <span className="text-[10.5px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono">
                    BENCHMARK MATRIX
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-heading mt-0.5">
                    Search &amp; Rescue Performance Comparison
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[9.5px] font-mono font-bold">
                  EMPIRICAL BENCHMARK
                </span>
              </div>

              {/* Comparison Table Grid */}
              <div className="grid grid-cols-12 gap-2 text-xs font-mono items-center pb-1 text-slate-400 border-b border-slate-100">
                <div className="col-span-4 font-bold uppercase tracking-wider">METRIC</div>
                <div className="col-span-2 text-center text-slate-500">TRADITIONAL</div>
                <div className="col-span-3 text-center text-slate-500">SINGLE DRONE</div>
                <div className="col-span-3 text-center font-bold text-emerald-700 bg-emerald-50 py-1 rounded-lg">AI SWARM (SUTRA)</div>
              </div>

              {/* Row 1: Deployment Time */}
              <div className="grid grid-cols-12 gap-2 text-xs items-center py-1 border-b border-slate-100">
                <div className="col-span-4 font-semibold text-slate-800">Deployment Time</div>
                <div className="col-span-2 text-center font-mono text-slate-500">45-90 min</div>
                <div className="col-span-3 text-center font-mono text-slate-600">15-30 min</div>
                <div className="col-span-3 text-center font-mono font-bold text-emerald-700 bg-emerald-50/60 py-0.5 rounded-md">8-15 min</div>
              </div>

              {/* Row 2: Area Coverage */}
              <div className="grid grid-cols-12 gap-2 text-xs items-center py-1 border-b border-slate-100">
                <div className="col-span-4 font-semibold text-slate-800">Area Coverage / mi²</div>
                <div className="col-span-2 text-center font-mono text-slate-500">2-3 hours</div>
                <div className="col-span-3 text-center font-mono text-slate-600">45-60 min</div>
                <div className="col-span-3 text-center font-mono font-bold text-emerald-700 bg-emerald-50/60 py-0.5 rounded-md">10-18 min</div>
              </div>

              {/* Row 3: Detection Rate */}
              <div className="grid grid-cols-12 gap-2 text-xs items-center py-1 border-b border-slate-100">
                <div className="col-span-4 font-semibold text-slate-800">Detection Rate</div>
                <div className="col-span-2 text-center font-mono text-slate-500">65-70%</div>
                <div className="col-span-3 text-center font-mono text-slate-600">55-65%</div>
                <div className="col-span-3 text-center font-mono font-bold text-emerald-700 bg-emerald-50/60 py-0.5 rounded-md">78-85%</div>
              </div>

              {/* Row 4: Personnel Required */}
              <div className="grid grid-cols-12 gap-2 text-xs items-center py-1">
                <div className="col-span-4 font-semibold text-slate-800">Personnel Required</div>
                <div className="col-span-2 text-center font-mono text-slate-500">15-25 crew</div>
                <div className="col-span-3 text-center font-mono text-slate-600">2-3 pilots</div>
                <div className="col-span-3 text-center font-mono font-bold text-emerald-700 bg-emerald-50/60 py-0.5 rounded-md">1-2 operators</div>
              </div>

            </div>

            {/* Speed Bars Comparison Chart */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm space-y-3">
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">
                  SPEED &amp; EFFICIENCY COMPARISON CHART
                </span>
                <span className="text-[9.5px] font-mono text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  3-4X FASTER COVERAGE
                </span>
              </div>

              {/* Metric 1: Coverage Speed per Hour */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 font-semibold">Area Survey Rate (sq miles / hr)</span>
                  <span className="text-emerald-700 font-bold">4.5 mi²/hr vs 0.4 mi²/hr</span>
                </div>
                
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 w-24">Traditional Ground</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-400 h-full rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 w-12 text-right">0.4 mi²</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 w-24">Single Drone</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-500 h-full rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 w-12 text-right">1.2 mi²</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-900 w-24">AI Swarm (SUTRA)</span>
                    <div className="flex-1 bg-emerald-100 h-3 rounded-full overflow-hidden p-0.5">
                      <div className="bg-emerald-600 h-full rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 w-12 text-right">4.5 mi²</span>
                  </div>
                </div>
              </div>

              {/* Bottom Two Mini Metric Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-1 border-t border-slate-200">
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500">False Positive Drop</span>
                  <span className="text-xs font-mono font-bold text-emerald-600">35% → 12% (-67%)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-mono text-slate-500">Continuous Flight</span>
                  <span className="text-xs font-mono font-bold text-slate-900">24/7 (11+ Days)</span>
                </div>
              </div>

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
