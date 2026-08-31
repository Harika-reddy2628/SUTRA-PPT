import React from 'react';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#191516] font-sans flex flex-col justify-between p-16 lg:p-24 select-none overflow-hidden border border-[#EAE5E1]">
      
      {/* Nothing OS Light Dot Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(25, 21, 22, 0.12) 1.4px, transparent 1.4px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)'
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Nothing OS Light Status Bar */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3.5">
            <div className="w-3 h-3 rounded-full bg-[#D71920] shadow-[0_0_8px_#D71920] animate-pulse"></div>
            <div className="font-syncopate text-[10px] font-bold tracking-[0.2em] uppercase text-[#7A7576]">
              TEAM OFFGRID <span className="mx-2 text-[#CCC6C2]">/</span> DEFENSE &amp; DISASTER ROBOTICS
            </div>
          </div>

          <div className="font-mono text-xs font-semibold tracking-wider text-[#7A7576]">
            AUG 2026 <span className="mx-2 text-[#CCC6C2]">•</span> REV 1.0
          </div>
        </header>

        {/* Center Formula: [Context in Syncopate] -> [Accent Line] -> [Main Title in Syncopate] -> [Subtitle] */}
        <main className="max-w-5xl space-y-6 my-auto">
          
          {/* 1. Context Tagline in Syncopate */}
          <div className="font-syncopate text-xs font-bold tracking-[0.25em] uppercase text-[#7A7576]">
            [ AUTONOMOUS MULTI-UAV SWARM ARCHITECTURE ]
          </div>

          {/* 2. Nothing Minimalist Accent Separator */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-[2px] bg-[#D71920]"></div>
            <div className="w-2 h-2 rounded-full bg-[#191516]"></div>
            <div className="w-8 h-[2px] bg-[#D0CAC5]"></div>
          </div>

          {/* 3. Main Title in Syncopate Font (#191516) */}
          <h1 className="font-syncopate text-6xl sm:text-7xl lg:text-[76px] font-bold tracking-tight text-[#191516] uppercase leading-[1.05]">
            PROJECT SUTRA
          </h1>

          {/* 4. Subtitle in Space Grotesk */}
          <p className="text-xl sm:text-2xl text-[#7A7576] font-normal max-w-3xl leading-relaxed">
            Swarm Unified Tactical Reconnaissance Architecture for GPS-Denied and Jammed Mountain Environments.
          </p>

        </main>

        {/* Bottom Bar: Complete Team Offgrid Subsystem Roster */}
        <footer className="pt-6 border-t border-[#E8E3DF]">
          <div className="font-syncopate text-[10px] font-bold text-[#D71920] uppercase tracking-[0.2em] mb-3">
            CORE ARCHITECTURE TEAM (OFFGRID)
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 font-mono text-xs">
            
            <div className="space-y-1">
              <div className="font-bold text-[#191516] text-base">Nikhil</div>
              <div className="text-xs text-[#7A7576]">Tech Lead · Subsys A &amp; B</div>
              <div className="text-[11px] text-[#A09A97] font-medium">GNC, FSD &amp; Deep JSCC</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#191516] text-base">Vedanth Sai Ram</div>
              <div className="text-xs text-[#7A7576]">Lead · Subsystem C</div>
              <div className="text-[11px] text-[#A09A97] font-medium">Tri-Modal AI &amp; DEM</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#191516] text-base">Siva Kesava</div>
              <div className="text-xs text-[#7A7576]">Lead · Subsystem D</div>
              <div className="text-[11px] text-[#A09A97] font-medium">3D GIS GCS &amp; WebGPU</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#191516] text-base">Harika</div>
              <div className="text-xs text-[#7A7576]">Lead · Subsystem E</div>
              <div className="text-[11px] text-[#A09A97] font-medium">Verification &amp; Pitch QA</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#191516] text-base">Rohith Kumar</div>
              <div className="text-xs text-[#7A7576]">Lead · Subsystem F</div>
              <div className="text-[11px] text-[#A09A97] font-medium">NDMA CONOPS &amp; Ops</div>
            </div>

          </div>
        </footer>

      </div>

    </div>
  );
};
