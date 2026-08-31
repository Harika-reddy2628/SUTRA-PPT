import React from 'react';
import { Layers } from 'lucide-react';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#000000] font-sans flex flex-col justify-between p-12 lg:p-20 select-none overflow-hidden border border-slate-200">
      
      {/* Web Aura Background Grid & Orbital Rings */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div 
        className="absolute w-[600px] h-[600px] rounded-full border border-slate-900/5 -top-[100px] -right-[100px] pointer-events-none z-0"
      />
      <div 
        className="absolute w-[450px] h-[450px] rounded-[90px] rotate-45 border border-slate-900/[0.04] -bottom-[100px] -left-[80px] pointer-events-none z-0"
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Split Header: Web Aura Style */}
        <header className="flex justify-between items-center">
          
          {/* Left: Status & Category */}
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-800 font-mono">
              TEAM OFFGRID <span className="mx-2 text-slate-300">/</span> DEFENSE &amp; DISASTER ROBOTICS
            </div>
          </div>

          {/* Center / Right Pill Tag */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>AUTONOMOUS SWARM</span>
            </div>
            <div className="font-mono text-xs font-semibold tracking-wider text-slate-500">
              AUG 2026 <span className="mx-1 text-slate-300">•</span> REV 1.0
            </div>
          </div>

        </header>

        {/* Center Hero Section: Web Aura Peak Craft Formula */}
        <main className="max-w-5xl my-auto py-6">
          
          {/* 1. Serif Hook Quote */}
          <blockquote className="text-2xl sm:text-3xl font-serif italic text-black/80 font-normal leading-snug mb-8">
            “When GPS fails and RF links jam, SUTRA geonavigates and locates survivors in real-time.”
          </blockquote>

          {/* 2. Monumental Headline with L-Bracket Corner Frame */}
          <div className="relative inline-block my-2">
            {/* Top-Left Corner Bracket */}
            <div className="absolute -top-6 -left-6 w-8 h-8 border-t-2 border-l-2 border-black"></div>
            {/* Bottom-Right Corner Bracket */}
            <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b-2 border-r-2 border-black"></div>

            <h1 className="text-8xl sm:text-9xl lg:text-[116px] font-black uppercase tracking-tighter text-black leading-[0.88] select-none">
              PROJECT<br/>
              <span className="italic font-light opacity-80">SUTRA.</span>
            </h1>
          </div>

          {/* 3. Subtitle / One-Liner Description */}
          <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-3xl leading-relaxed mt-8">
            Swarm Unified Tactical Reconnaissance Architecture — decentralized multi-UAV flight, Deep JSCC neural zero-cliff video, and 3.59cm terrain-corrected DEM survivor geolocation.
          </p>

        </main>

        {/* Bottom Bar: Complete Team Offgrid Subsystem Roster (Web Aura Card Row Style) */}
        <footer className="pt-6 border-t border-slate-200">
          <div className="flex justify-between items-center mb-4 font-mono">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              CORE ARCHITECTURE TEAM (OFFGRID)
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              RESEARCH-BACKED &amp; EMPIRICALLY VALIDATED
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <div className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 space-y-1">
              <div className="font-black text-black text-sm">Nikhil</div>
              <div className="text-[11px] text-slate-600 font-semibold">Tech Lead · Subsys A &amp; B</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-black text-white text-[8.5px] font-black tracking-wider uppercase mt-1">
                GNC &amp; JSCC
              </div>
            </div>

            <div className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 space-y-1">
              <div className="font-black text-black text-sm">Vedanth Sai Ram</div>
              <div className="text-[11px] text-slate-600 font-semibold">Lead · Subsystem C</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8.5px] font-black tracking-wider uppercase mt-1">
                AI PERCEPTION
              </div>
            </div>

            <div className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 space-y-1">
              <div className="font-black text-black text-sm">Siva Kesava</div>
              <div className="text-[11px] text-slate-600 font-semibold">Lead · Subsystem D</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8.5px] font-black tracking-wider uppercase mt-1">
                3D GIS GCS
              </div>
            </div>

            <div className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 space-y-1">
              <div className="font-black text-black text-sm">Harika</div>
              <div className="text-[11px] text-slate-600 font-semibold">Lead · Subsystem E</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8.5px] font-black tracking-wider uppercase mt-1">
                VERIFICATION QA
              </div>
            </div>

            <div className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 space-y-1">
              <div className="font-black text-black text-sm">Rohith Kumar</div>
              <div className="text-[11px] text-slate-600 font-semibold">Lead · Subsystem F</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8.5px] font-black tracking-wider uppercase mt-1">
                NDMA CONOPS
              </div>
            </div>

          </div>
        </footer>

      </div>

    </div>
  );
};
