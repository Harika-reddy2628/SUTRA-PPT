import React, { useState, useEffect } from 'react';

interface AuditCard {
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  label: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const AUDIT_CARDS: AuditCard[] = [
  {
    badge: 'GOVT DISASTER AUDIT',
    category: 'NDMA REPORT',
    title: 'Wayanad Landslide Search',
    subtitle: 'Western Ghats • NDMA Official Disaster Review',
    label: 'FIELD BOTTLENECK',
    text: '“70% of commercial drones lost connection behind mountain ridges and crashed under thick tree canopy.”',
    imageSrc: '/assets/disaster/wayanad_rescue.jpg',
    imageAlt: 'Wayanad Landslide Search 2024',
  },
  {
    badge: 'PEER-REVIEWED SCIENCE',
    category: 'IEEE TCCN JOURNAL',
    title: 'Himalayan Gorge RF Blackout',
    subtitle: 'High-Altitude Search • IEEE TCCN Journal',
    label: 'DIGITAL CLIFF EFFECT',
    text: '“Standard drone video feeds drop to complete black the moment radio signal weakens behind mountain walls.”',
    imageSrc: '/assets/disaster/disaster_rescue_1.jpg',
    imageAlt: 'High-Altitude Mountain Search',
  },
  {
    badge: 'PUBLIC RTI PROCUREMENT',
    category: 'CAG AUDIT',
    title: 'Tactical Airframe Constraints',
    subtitle: 'CAG Defense Audit • Centralized Ground Station',
    label: 'COST & SINGLE POINT FAILURE',
    text: '“Military drones cost $50,000–$250,000 each and abort missions if the single pilot control link drops.”',
    imageSrc: '/assets/disaster/disaster_rescue_2.jpg',
    imageAlt: 'Disaster Response Airframe Fleet',
  },
];

export const Slide02Problem: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AUDIT_CARDS.length);
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
        
        {/* Top Header: Left Accent Bar + Increased Size Slide Title */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3.5">
            <div className="w-2 h-7 bg-[#0A1628] rounded-full"></div>
            <div className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#0A1628]">
              THE PROBLEM
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-black uppercase tracking-[0.18em] text-slate-600 font-mono">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>RESCUE DRONE FAILURE MODES</span>
          </div>
        </header>

        {/* Main Body: 2-Column Split */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 my-auto items-center">
          
          {/* Left Column (7 Cols): Simple Conclusion Headline + 6x6 Bullets + Figma Illustrations */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Simple Conclusion-Style Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-black tracking-tight leading-[1.12]">
              GPS Loss and Radio Blackouts Cripple Disaster Rescue
            </h2>

            {/* 6x6 Rule Bullets: Simple Words, <=6 words each, left-aligned, #374151 */}
            <ul className="space-y-3 text-base sm:text-lg font-normal text-[#374151] leading-relaxed">
              
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

            {/* Figma-Styled Vector Illustrations Strip */}
            <div className="pt-2">
              <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-2.5 flex items-center justify-between">
                <span>TACTICAL FAILURE ILLUSTRATIONS</span>
                <span className="text-[9px] text-slate-400 font-mono">FIGMA VECTOR SET</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3.5">
                
                {/* Illustration 1: Mountain RF Blockage */}
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white transition-all space-y-2.5 shadow-sm">
                  <div className="h-16 w-full rounded-xl bg-white border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 120 60" fill="none" className="w-full h-full">
                      <path d="M10 52 L35 22 L55 42 L80 14 L110 52 Z" fill="#E2E8F0" opacity="0.8"/>
                      <path d="M25 52 L50 26 L75 52 Z" fill="#CBD5E1"/>
                      <path d="M20 18 C30 14, 40 18, 48 25" stroke="#D71920" strokeWidth="2.5" strokeDasharray="3 3"/>
                      <circle cx="18" cy="18" r="3" fill="#0A1628"/>
                      <path d="M88 12 L96 12 M92 8 L92 16 M85 10 L99 14" stroke="#0A1628" strokeWidth="1.8" strokeLinecap="round"/>
                      <circle cx="92" cy="12" r="2.5" fill="#D71920"/>
                      <circle cx="58" cy="22" r="7" fill="#FEE2E2"/>
                      <path d="M55 19 L61 25 M61 19 L55 25" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-slate-900 leading-tight">RF Ridge Shadow</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">Video Stream Severance</div>
                  </div>
                </div>

                {/* Illustration 2: Forest Canopy GPS Shadow */}
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white transition-all space-y-2.5 shadow-sm">
                  <div className="h-16 w-full rounded-xl bg-white border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 120 60" fill="none" className="w-full h-full">
                      <rect x="18" y="10" width="10" height="7" rx="1.5" fill="#0A1628"/>
                      <line x1="12" y1="13.5" x2="18" y2="13.5" stroke="#0A1628" strokeWidth="2"/>
                      <line x1="28" y1="13.5" x2="34" y2="13.5" stroke="#0A1628" strokeWidth="2"/>
                      <path d="M23 18 L55 35" stroke="#059669" strokeWidth="2" strokeDasharray="3 2"/>
                      <path d="M55 35 L80 48" stroke="#D71920" strokeWidth="2" strokeDasharray="2 2"/>
                      <circle cx="60" cy="42" r="12" fill="#10B981" opacity="0.85"/>
                      <circle cx="75" cy="45" r="10" fill="#059669" opacity="0.9"/>
                      <circle cx="48" cy="46" r="9" fill="#047857" opacity="0.8"/>
                      <circle cx="92" cy="40" r="7" fill="#FEF3C7"/>
                      <text x="88.5" y="44" fill="#D97706" fontSize="10" fontWeight="bold" fontFamily="sans-serif">!</text>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-slate-900 leading-tight">Canopy Shadow</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">GNSS Multi-Path Drift</div>
                  </div>
                </div>

                {/* Illustration 3: Single Point Comms Loss */}
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white transition-all space-y-2.5 shadow-sm">
                  <div className="h-16 w-full rounded-xl bg-white border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 120 60" fill="none" className="w-full h-full">
                      <polygon points="18,52 26,18 34,52" stroke="#0A1628" strokeWidth="2" fill="#F1F5F9"/>
                      <line x1="21" y1="36" x2="31" y2="36" stroke="#0A1628" strokeWidth="1.8"/>
                      <line x1="26" y1="18" x2="26" y2="10" stroke="#0A1628" strokeWidth="2.5"/>
                      <circle cx="26" cy="10" r="3" fill="#D71920"/>
                      <path d="M32 14 L55 22" stroke="#D71920" strokeWidth="2" strokeDasharray="3 3"/>
                      <line x1="60" y1="16" x2="70" y2="28" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="70" y1="16" x2="60" y2="28" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="98" cy="22" r="10" fill="#F1F5F9" stroke="#94A3B8" strokeDasharray="2 2"/>
                      <circle cx="98" cy="22" r="3" fill="#94A3B8"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11.5px] font-bold text-slate-900 leading-tight">Central Link Loss</div>
                    <div className="text-[9.5px] text-slate-500 font-mono mt-0.5">Single Point Abort</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Big Full-Bleed Image Card Carousel */}
          <div className="lg:col-span-5 relative">
            
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-2.5 font-mono">
              <span className="text-[10.5px] font-black uppercase tracking-[0.25em] text-slate-400">
                REAL DISASTER FIELD EVIDENCE
              </span>
              <span className="text-[10.5px] font-bold text-slate-500">
                SOURCE 0{currentIndex + 1} / 0{AUDIT_CARDS.length}
              </span>
            </div>

            {/* 3D Stacked Container (450px High Full Bleed) */}
            <div className="relative w-full h-[450px]">
              
              {AUDIT_CARDS.map((card, idx) => {
                const offset = (idx - currentIndex + AUDIT_CARDS.length) % AUDIT_CARDS.length;
                
                let transformStyle = 'translateY(0px) scale(1)';
                let opacityStyle = 1;
                let zIndex = 20;
                let shadowStyle = '0 24px 48px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)';

                if (offset === 1) {
                  transformStyle = 'translateY(16px) scale(0.95)';
                  opacityStyle = 0.5;
                  zIndex = 10;
                  shadowStyle = '0 16px 32px -8px rgba(0, 0, 0, 0.25)';
                } else if (offset === 2) {
                  transformStyle = 'translateY(30px) scale(0.90)';
                  opacityStyle = 0.22;
                  zIndex = 5;
                  shadowStyle = '0 8px 20px -4px rgba(0, 0, 0, 0.15)';
                }

                return (
                  <div 
                    key={idx}
                    className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden origin-top transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: transformStyle,
                      opacity: opacityStyle,
                      zIndex,
                      boxShadow: shadowStyle,
                      pointerEvents: offset === 0 ? 'auto' : 'none',
                    }}
                  >
                    <img 
                      src={card.imageSrc} 
                      alt={card.imageAlt} 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Cinematic Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent"></div>

                    {/* Top Floating Glassmorphism Badge */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <polygon points="12 2 2 7 12 12 22 7 12 2" />
                          <polyline points="2 17 12 22 22 17" />
                          <polyline points="2 12 12 17 22 12" />
                        </svg>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9.5px] font-black uppercase tracking-wider font-mono">
                        {card.badge}
                      </span>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 text-white">
                      <h3 className="text-2xl font-extrabold tracking-tight leading-tight">
                        {card.title}
                      </h3>
                      <div className="text-xs font-mono text-slate-300">
                        {card.subtitle}
                      </div>
                      
                      <div className="pt-2">
                        <div className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                          {card.label}
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed font-normal mt-0.5">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Continuous Indicator Dots */}
            <div className="flex items-center justify-between mt-5 font-mono">
              <div className="flex items-center gap-2">
                {AUDIT_CARDS.map((_, idx) => (
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
        <footer className="pt-3 border-t border-[#E5E7EB] flex justify-between items-center font-mono text-xs text-[#6B7280]">
          <div>PAGE 02</div>
          <div className="font-semibold uppercase tracking-wider text-[#0A1628]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};
