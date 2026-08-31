import React from 'react';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#000000] text-[#FFFFFF] font-sans flex flex-col justify-between p-16 lg:p-24 select-none overflow-hidden border border-neutral-900">
      
      {/* Nothing OS Subtle Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)'
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Nothing OS Status Bar Style */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3.5">
            <div className="w-3 h-3 rounded-full bg-[#D71920] shadow-[0_0_8px_#D71920] animate-pulse"></div>
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-400">
              (TEAM OFFGRID) <span className="mx-2 text-neutral-600">/</span> DEFENSE &amp; DISASTER ROBOTICS
            </div>
          </div>

          <div className="font-mono text-xs font-semibold tracking-wider text-neutral-400">
            AUG 2026 <span className="mx-2 text-neutral-600">•</span> REV 1.0
          </div>
        </header>

        {/* Center Formula: [Context] -> [Accent Line] -> [Main Title in NDot] -> [Subtitle] */}
        <main className="max-w-4xl space-y-7 my-auto">
          
          {/* 1. Context Tagline */}
          <div className="font-mono text-xs lg:text-sm font-semibold tracking-widest uppercase text-neutral-400">
            [ AUTONOMOUS MULTI-UAV SWARM ARCHITECTURE ]
          </div>

          {/* 2. Nothing Minimalist Accent Separator */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-[2px] bg-[#D71920]"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-8 h-[2px] bg-neutral-700"></div>
          </div>

          {/* 3. Main Title in Nothing NDot Font */}
          <h1 className="font-ndot text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase leading-none">
            PROJECT SUTRA
          </h1>

          {/* 4. Subtitle in Space Grotesk */}
          <p className="text-xl sm:text-2xl text-neutral-400 font-normal max-w-3xl leading-relaxed">
            Swarm Unified Tactical Reconnaissance Architecture for GPS-Denied and Jammed Mountain Environments.
          </p>

        </main>

        {/* Bottom Bar: Nothing Minimalist Subsystem Roster */}
        <footer className="pt-6 border-t border-neutral-800">
          <div className="font-mono text-[11px] font-bold text-[#D71920] uppercase tracking-widest mb-3">
            CORE ARCHITECTURE TEAM (OFFGRID)
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 font-mono text-xs">
            
            <div className="space-y-1">
              <div className="font-bold text-white text-base">Nikhil</div>
              <div className="text-xs text-neutral-400">Tech Lead · Subsys A &amp; B</div>
              <div className="text-[11px] text-neutral-500 font-medium">GNC, FSD &amp; Deep JSCC</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-white text-base">Vedanth Sai Ram</div>
              <div className="text-xs text-neutral-400">Lead · Subsystem C</div>
              <div className="text-[11px] text-neutral-500 font-medium">Tri-Modal AI &amp; DEM</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-white text-base">Siva Kesava</div>
              <div className="text-xs text-neutral-400">Lead · Subsystem D</div>
              <div className="text-[11px] text-neutral-500 font-medium">3D GIS GCS &amp; WebGPU</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-white text-base">Harika</div>
              <div className="text-xs text-neutral-400">Lead · Subsystem E</div>
              <div className="text-[11px] text-neutral-500 font-medium">Verification &amp; Pitch QA</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-white text-base">Rohith Kumar</div>
              <div className="text-xs text-neutral-400">Lead · Subsystem F</div>
              <div className="text-[11px] text-neutral-500 font-medium">NDMA CONOPS &amp; Ops</div>
            </div>

          </div>
        </footer>

      </div>

    </div>
  );
};
