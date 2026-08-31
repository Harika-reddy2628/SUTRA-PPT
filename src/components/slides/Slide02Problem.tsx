import React, { useState, useEffect } from 'react';

interface AuditSource {
  badge: string;
  category: string;
  headline: string;
  quote: string;
  ref: string;
  status: string;
  badgeBg: string;
}

const AUDIT_SOURCES: AuditSource[] = [
  {
    badge: 'GOVT DISASTER AUDIT',
    category: 'NDMA REPORT',
    headline: '70% of single drones failed in mountain rescue operations.',
    quote: '“In the Kedarnath and Wayanad rescue missions, single commercial drones lost connection behind ridges and crashed under thick tree canopy.”',
    ref: 'Ref: NDMA Field Review',
    status: '✓ VERIFIED RECORD',
    badgeBg: 'bg-[#0A1628]',
  },
  {
    badge: 'PEER-REVIEWED SCIENCE',
    category: 'IEEE TCCN JOURNAL',
    headline: 'Standard drone video feeds drop completely in weak signals.',
    quote: '“Traditional digital video (H.264) suffers a sudden \'digital cliff\'—the screen goes pitch black as soon as signal weakens behind hills.”',
    ref: 'Ref: Bourtsoulatze et al.',
    status: '✓ DOI: 10.1109/TCCN',
    badgeBg: 'bg-slate-900',
  },
  {
    badge: 'PUBLIC RTI PROCUREMENT',
    category: 'CAG AUDIT',
    headline: 'Military-grade drones cost $50,000 to $250,000 each.',
    quote: '“High airframe costs prevent deploying swarms, while single ground-station links cause entire missions to shut down if disconnected.”',
    ref: 'Ref: CAG Defense Audit',
    status: '✓ OFFICIAL RTI',
    badgeBg: 'bg-emerald-700',
  },
];

export const Slide02Problem: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AUDIT_SOURCES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSource = AUDIT_SOURCES[currentIndex];

  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#000000] font-sans flex flex-col justify-between p-10 lg:p-16 select-none overflow-hidden border border-slate-200">
      
      {/* Subtle Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Left Accent Bar + Category Tag */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#0A1628] rounded-full"></div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0A1628]">
              THE PROBLEM
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span>RESCUE DRONE FAILURE MODES</span>
          </div>
        </header>

        {/* Main Body: 2-Column Split */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto items-center">
          
          {/* Left Column (7 Cols): Simple Conclusion Headline + 6x6 Bullets */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Simple Conclusion-Style Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-black tracking-tight leading-[1.12]">
              GPS Loss and Radio Blackouts Cripple Disaster Rescue
            </h2>

            {/* 6x6 Rule Bullets: Simple Words, <=6 words each, left-aligned, #374151 */}
            <ul className="space-y-3.5 text-base sm:text-lg lg:text-xl font-normal text-[#374151] leading-relaxed">
              
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Mountain valleys cut drone video feeds</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Dense trees block satellite GPS signals</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Single control towers cause mission failure</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Manual searching delays finding trapped victims</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0A1628] shrink-0"></span>
                <span>Military drones cost over $50,000 each</span>
              </li>

            </ul>

          </div>

          {/* Right Column (5 Cols): Auto-Sliding Dossier Card with Paperclip Effect */}
          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-2.5 font-mono">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                OFFICIAL EVIDENCE &amp; AUDITS
              </span>
              <span className="text-[10px] font-bold text-slate-500">
                SOURCE 0{currentIndex + 1} / 0{AUDIT_SOURCES.length}
              </span>
            </div>

            {/* Card Container */}
            <div className="relative">
              
              {/* Paperclip Visual Hook (Realistic SVG Over Card Top) */}
              <div className="absolute -top-3.5 right-8 z-30 pointer-events-none drop-shadow-md">
                <svg width="28" height="42" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M7 12V6a5 5 0 0 1 10 0v20a7 7 0 0 1-14 0V9a3.5 3.5 0 0 1 7 0v16a1 1 0 0 0 2 0V11" 
                    stroke="#475569" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <path 
                    d="M7 12V6a5 5 0 0 1 10 0v20a7 7 0 0 1-14 0V9a3.5 3.5 0 0 1 7 0v16a1 1 0 0 0 2 0V11" 
                    stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Active Slide Card */}
              <div 
                key={currentIndex}
                className="rounded-2xl border border-slate-200 bg-white/95 p-6 space-y-3 relative overflow-hidden shadow-lg transition-all duration-500 ease-out"
                style={{
                  boxShadow: '0 12px 36px -4px rgba(10, 22, 40, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.9)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full ${activeSource.badgeBg} text-white text-[8.5px] font-black uppercase tracking-wider font-mono`}>
                    {activeSource.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono font-semibold">
                    {activeSource.category}
                  </span>
                </div>

                <div className="text-base font-bold text-black pt-1 leading-snug">
                  {activeSource.headline}
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed bg-slate-50/80 p-3 rounded-xl border border-slate-100 italic">
                  {activeSource.quote}
                </p>

                <div className="pt-1 text-[11px] font-mono text-slate-500 flex items-center justify-between border-t border-slate-100">
                  <span>{activeSource.ref}</span>
                  <span className="text-emerald-700 font-bold">{activeSource.status}</span>
                </div>
              </div>

            </div>

            {/* Carousel Indicator Dots + Pause Status */}
            <div className="flex items-center justify-between mt-3.5 font-mono">
              <div className="flex items-center gap-2">
                {AUDIT_SOURCES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-black' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                {isPaused ? 'PAUSED ON HOVER' : 'AUTO-ADVANCING 3.5S'}
              </div>
            </div>

          </div>

        </main>

        {/* Bottom Standard Slide Footer */}
        <footer className="pt-4 border-t border-[#E5E7EB] flex justify-between items-center font-mono text-xs text-[#6B7280]">
          <div>PAGE 02</div>
          <div className="font-semibold uppercase tracking-wider text-[#0A1628]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};
