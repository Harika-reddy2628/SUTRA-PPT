import React from 'react';

export const Slide02Problem: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#000000] font-sans flex flex-col justify-between p-12 lg:p-20 select-none overflow-hidden border border-slate-200">
      
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Section: Left Accent Bar + Category */}
        <header className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[#0A1628] rounded-full"></div>
          <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0A1628]">
            THE PROBLEM
          </div>
        </header>

        {/* Main Body: Conclusion Headline + 6x6 Bullets */}
        <main className="max-w-4xl space-y-10 my-auto">
          
          {/* Conclusion-Style Headline (Not a Label) */}
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1]">
            GPS Denial and RF Blackouts Paralyze Disaster Reconnaissance
          </h2>

          {/* 6x6 Rule Bullets: <=6 words per bullet, left-aligned, #374151 */}
          <ul className="space-y-5 text-lg sm:text-xl lg:text-2xl font-normal text-[#374151] leading-relaxed">
            
            <li className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A1628] shrink-0"></span>
              <span>Mountain valleys cause sudden video blackouts</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A1628] shrink-0"></span>
              <span>Dense canopies block satellite GPS signals</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A1628] shrink-0"></span>
              <span>Centralized telemetry risks single-point failure</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A1628] shrink-0"></span>
              <span>Manual scanning delays survivor emergency rescue</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A1628] shrink-0"></span>
              <span>Enterprise drones cost over $50,000 each</span>
            </li>

          </ul>

        </main>

        {/* Bottom Slide Footer */}
        <footer className="pt-6 border-t border-slate-200 flex justify-between items-center font-mono text-xs text-slate-500">
          <div>PAGE 02</div>
          <div className="font-semibold uppercase tracking-wider text-[#0A1628]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};
