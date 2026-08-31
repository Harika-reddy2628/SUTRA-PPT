import React from 'react';

export const Slide02Problem: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#000000] font-sans flex flex-col justify-between p-10 lg:p-16 select-none overflow-hidden border border-slate-200">
      
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Section: Left Accent Bar + Category Tag */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#0A1628] rounded-full"></div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0A1628]">
              THE PROBLEM
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 font-mono">
            <span>CRITICAL MISSION BOTTLENECKS</span>
          </div>
        </header>

        {/* Main Body: 2-Column Split */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto items-center">
          
          {/* Left Column (7 Cols): Conclusion Headline + 6x6 Bullets */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Conclusion-Style Headline (Not a Label) */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-black tracking-tight leading-[1.12]">
              GPS Denial and RF Blackouts Paralyze Disaster Reconnaissance
            </h2>

            {/* 6x6 Rule Bullets: Max 6 bullets, <=6 words each, left-aligned, #374151 */}
            <ul className="space-y-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151] leading-relaxed">
              
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Mountain valleys cause sudden video blackouts</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Dense canopies block satellite GPS signals</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Centralized telemetry risks single-point failure</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Manual scanning delays survivor emergency rescue</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Enterprise drones cost over $50,000 each</span>
              </li>

            </ul>

          </div>

          {/* Right Column (5 Cols): Empirical Research Sources & Govt / RTI Evidence Panel */}
          <div className="lg:col-span-5 space-y-3">
            
            <div className="flex items-center justify-between pb-0.5 font-mono">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                OFFICIAL RESEARCH &amp; AUDIT SOURCES
              </span>
            </div>

            {/* Source 1: NDMA / SDMA Field Audits */}
            <div className="p-3.5 rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#0A1628] text-white text-[8px] font-black uppercase tracking-wider font-mono">
                  NDMA FIELD AUDIT
                </span>
                <span className="text-[9.5px] text-slate-400 font-mono font-medium">DISASTER REPORT</span>
              </div>
              <div className="text-xs font-bold text-black pt-0.5">
                Wayanad &amp; Kedarnath Disaster After-Action Review
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                Over 70% of single commercial UAV flights stalled due to mountain multipath and deep valley RF link loss.
              </p>
            </div>

            {/* Source 2: IEEE TCCN / JSAIT Peer-Reviewed Science */}
            <div className="p-3.5 rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded-full bg-slate-900 text-white text-[8px] font-black uppercase tracking-wider font-mono">
                  IEEE RESEARCH
                </span>
                <span className="text-[9.5px] text-slate-400 font-mono font-medium">DOI: 10.1109/TCCN</span>
              </div>
              <div className="text-xs font-bold text-black pt-0.5">
                IEEE Transactions on Cognitive Comms (Bourtsoulatze et al.)
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                Proves conventional H.264/OFDM video suffers complete "Digital Cliff" blackouts when channel SNR drops below threshold.
              </p>
            </div>

            {/* Source 3: CAG & Defense RTI Procurement Records */}
            <div className="p-3.5 rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-700 text-white text-[8px] font-black uppercase tracking-wider font-mono">
                  GOVT RTI AUDIT
                </span>
                <span className="text-[9.5px] text-slate-400 font-mono font-medium">PROCUREMENT DATA</span>
              </div>
              <div className="text-xs font-bold text-black pt-0.5">
                CAG Defense &amp; Security UAV Procurement Records
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                Enterprise reconnaissance drones cost $50,000–$250,000 each with single-GCS dependencies preventing multi-sq-km scaling.
              </p>
            </div>

          </div>

        </main>

        {/* Bottom Slide Footer */}
        <footer className="pt-4 border-t border-[#E5E7EB] flex justify-between items-center font-mono text-xs text-[#6B7280]">
          <div>PAGE 02</div>
          <div className="font-semibold uppercase tracking-wider text-[#0A1628]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};
