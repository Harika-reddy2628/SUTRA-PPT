import React, { useState, useEffect } from 'react';

interface AuditSource {
  badge: string;
  category: string;
  headline: string;
  quote: string;
  ref: string;
  badgeBg: string;
  imageSrc: string;
  imageAlt: string;
}

const AUDIT_SOURCES: AuditSource[] = [
  {
    badge: 'GOVT DISASTER AUDIT',
    category: 'NDMA REPORT',
    headline: '70% of single drones failed in mountain rescue operations.',
    quote: '“In the Kedarnath and Wayanad rescue missions, single commercial drones lost connection behind ridges and crashed under thick tree canopy.”',
    ref: 'Ref: National Disaster Management Authority (NDMA)',
    badgeBg: 'bg-[#0A1628]',
    imageSrc: '/assets/disaster/wayanad_rescue.jpg',
    imageAlt: 'Wayanad Landslide Search 2024',
  },
  {
    badge: 'PEER-REVIEWED SCIENCE',
    category: 'IEEE TCCN JOURNAL',
    headline: 'Standard drone video feeds drop completely in weak signals.',
    quote: '“Traditional digital video (H.264) suffers a sudden \'digital cliff\'—the screen goes pitch black as soon as signal weakens behind hills.”',
    ref: 'Ref: IEEE Trans. Cognitive Comms (Bourtsoulatze et al.)',
    badgeBg: 'bg-slate-900',
    imageSrc: '/assets/disaster/disaster_rescue_1.jpg',
    imageAlt: 'High-Altitude Mountain Search',
  },
  {
    badge: 'PUBLIC RTI PROCUREMENT',
    category: 'CAG AUDIT',
    headline: 'Military-grade drones cost $50,000 to $250,000 each.',
    quote: '“High airframe costs prevent deploying swarms, while single ground-station links cause entire missions to shut down if disconnected.”',
    ref: 'Ref: CAG Defense Audit & Public RTI Records',
    badgeBg: 'bg-emerald-700',
    imageSrc: '/assets/disaster/disaster_rescue_2.jpg',
    imageAlt: 'Disaster Response Airframe Fleet',
  },
];

export const Slide02Problem: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AUDIT_SOURCES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 my-auto items-center">
          
          {/* Left Column (7 Cols): Simple Conclusion Headline + 6x6 Bullets + Schematic Illustrations */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Simple Conclusion-Style Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-black tracking-tight leading-[1.12]">
              GPS Loss and Radio Blackouts Cripple Disaster Rescue
            </h2>

            {/* 6x6 Rule Bullets: Simple Words, <=6 words each, left-aligned, #374151 */}
            <ul className="space-y-2.5 text-base sm:text-lg font-normal text-[#374151] leading-relaxed">
              
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

            {/* Technical Vector Schematic Illustration Strip */}
            <div className="pt-2">
              <div className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                TACTICAL FAILURE SCHEMATICS
              </div>
              
              <div className="grid grid-cols-3 gap-2.5">
                
                {/* Schematic 1: Mountain RF Blockage */}
                <div className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/70 flex items-center gap-2.5">
                  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="shrink-0">
                    <rect width="36" height="36" rx="8" fill="#F1F5F9" />
                    <polygon points="4,30 16,12 28,30" fill="#94A3B8" />
                    <polygon points="18,30 26,18 34,30" fill="#CBD5E1" />
                    <path d="M6 10 C10 8, 14 10, 16 14" stroke="#D71920" strokeWidth="1.8" strokeDasharray="2 2" />
                    <circle cx="28" cy="14" r="2.5" fill="#0A1628" />
                  </svg>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold text-slate-800 leading-tight">RF Ridge Shadow</div>
                    <div className="text-[8.5px] text-slate-500 font-mono">Video Stream Drop</div>
                  </div>
                </div>

                {/* Schematic 2: Forest Canopy GPS Shadow */}
                <div className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/70 flex items-center gap-2.5">
                  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="shrink-0">
                    <rect width="36" height="36" rx="8" fill="#F1F5F9" />
                    <rect x="6" y="6" width="6" height="4" rx="1" fill="#0A1628" />
                    <line x1="9" y1="12" x2="16" y2="20" stroke="#D71920" strokeWidth="1.8" strokeDasharray="2 2" />
                    <circle cx="20" cy="22" r="6" fill="#059669" opacity="0.8" />
                    <circle cx="26" cy="24" r="5" fill="#10B981" opacity="0.8" />
                  </svg>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold text-slate-800 leading-tight">Canopy Shadow</div>
                    <div className="text-[8.5px] text-slate-500 font-mono">GNSS Multi-Path</div>
                  </div>
                </div>

                {/* Schematic 3: Single Point Comms Loss */}
                <div className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/70 flex items-center gap-2.5">
                  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="shrink-0">
                    <rect width="36" height="36" rx="8" fill="#F1F5F9" />
                    <polygon points="12,30 18,12 24,30" stroke="#0A1628" strokeWidth="1.5" />
                    <line x1="18" y1="12" x2="28" y2="8" stroke="#D71920" strokeWidth="1.5" strokeDasharray="2 2" />
                    <text x="22" y="18" fill="#D71920" fontSize="10" fontWeight="bold">✕</text>
                  </svg>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-bold text-slate-800 leading-tight">Central Link Loss</div>
                    <div className="text-[8.5px] text-slate-500 font-mono">Single Point Abort</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Smooth Continuous Parallax Dossier Stack with Real Photos */}
          <div className="lg:col-span-5 relative">
            
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-2 font-mono">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                OFFICIAL EVIDENCE &amp; DISASTER CLIPPINGS
              </span>
              <span className="text-[10px] font-bold text-slate-500">
                SOURCE 0{currentIndex + 1} / 0{AUDIT_SOURCES.length}
              </span>
            </div>

            {/* 3D Stacked Container */}
            <div className="relative w-full h-[360px]">
              
              {/* Metallic Paperclip (Anchored seamlessly on the top edge of active card) */}
              <div className="absolute -top-3.5 right-8 z-30 pointer-events-none drop-shadow-md">
                <svg width="28" height="44" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M7 13V6a5 5 0 0 1 10 0v20a7 7 0 0 1-14 0V9a3.5 3.5 0 0 1 7 0v16a1 1 0 0 0 2 0V11" 
                    stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.2"
                  />
                  <path 
                    d="M7 12V6a5 5 0 0 1 10 0v20a7 7 0 0 1-14 0V9a3.5 3.5 0 0 1 7 0v16a1 1 0 0 0 2 0V11" 
                    stroke="#475569" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <path 
                    d="M7 12V6a5 5 0 0 1 10 0v20a7 7 0 0 1-14 0V9a3.5 3.5 0 0 1 7 0v16a1 1 0 0 0 2 0V11" 
                    stroke="#CBD5E1" strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Stacked Parallax Cards */}
              {AUDIT_SOURCES.map((source, idx) => {
                const offset = (idx - currentIndex + AUDIT_SOURCES.length) % AUDIT_SOURCES.length;
                
                let transformStyle = 'translateY(0px) scale(1)';
                let opacityStyle = 1;
                let zIndex = 20;
                let shadowStyle = '0 20px 40px -12px rgba(10, 22, 40, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.9)';

                if (offset === 1) {
                  transformStyle = 'translateY(16px) scale(0.95)';
                  opacityStyle = 0.45;
                  zIndex = 10;
                  shadowStyle = '0 12px 24px -8px rgba(10, 22, 40, 0.06), 0 0 0 1px rgba(226, 232, 240, 0.6)';
                } else if (offset === 2) {
                  transformStyle = 'translateY(30px) scale(0.90)';
                  opacityStyle = 0.18;
                  zIndex = 5;
                  shadowStyle = '0 6px 16px -4px rgba(10, 22, 40, 0.04), 0 0 0 1px rgba(226, 232, 240, 0.4)';
                }

                return (
                  <div 
                    key={idx}
                    className="absolute inset-0 rounded-2xl bg-white p-5 space-y-2.5 origin-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: transformStyle,
                      opacity: opacityStyle,
                      zIndex,
                      boxShadow: shadowStyle,
                      pointerEvents: offset === 0 ? 'auto' : 'none',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full ${source.badgeBg} text-white text-[8.5px] font-black uppercase tracking-wider font-mono`}>
                        {source.badge}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono font-semibold">
                        {source.category}
                      </span>
                    </div>

                    <div className="flex gap-3 items-center">
                      <img 
                        src={source.imageSrc} 
                        alt={source.imageAlt} 
                        className="w-24 h-16 rounded-xl object-cover border border-slate-200 shadow-sm shrink-0" 
                      />
                      <div className="text-sm font-bold text-black leading-snug">
                        {source.headline}
                      </div>
                    </div>

                    <p className="text-[11.5px] text-[#4B5563] leading-relaxed bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 italic">
                      {source.quote}
                    </p>

                    <div className="pt-1 text-[10.5px] font-mono text-slate-500">
                      {source.ref}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Continuous Indicator Dots */}
            <div className="flex items-center justify-between mt-6 font-mono">
              <div className="flex items-center gap-2">
                {AUDIT_SOURCES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === currentIndex ? 'w-8 bg-black' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                CONTINUOUS LOOP
              </div>
            </div>

          </div>

        </main>

        {/* Bottom Standard Slide Footer */}
        <footer className="pt-3.5 border-t border-[#E5E7EB] flex justify-between items-center font-mono text-xs text-[#6B7280]">
          <div>PAGE 02</div>
          <div className="font-semibold uppercase tracking-wider text-[#0A1628]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};
