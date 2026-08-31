import React from 'react';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#070707] text-[#FFFFFF] font-sans flex flex-col justify-between p-16 lg:p-20 select-none overflow-hidden">
      
      {/* Subtle Radial Dot Pattern Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 45%, black 35%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 35%, transparent 80%)'
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Team Offgrid & Classification */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-black font-mono font-bold text-sm shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="font-mono text-xs font-bold tracking-wider uppercase text-neutral-400">
              TEAM OFFGRID <span className="mx-2 text-neutral-700">•</span> DEFENSE &amp; DISASTER ROBOTICS
            </div>
          </div>

          <div className="font-mono text-xs font-semibold text-neutral-400">
            August 2026
          </div>
        </div>

        {/* Center Formula Block: [Context] -> [Accent Line] -> [Main Title] -> [Subtitle] */}
        <div className="max-w-4xl space-y-6 my-auto">
          
          {/* 1. Context / Tagline */}
          <div className="font-mono text-sm lg:text-base font-bold tracking-widest uppercase text-neutral-400">
            AUTONOMOUS MULTI-UAV SWARM ARCHITECTURE
          </div>

          {/* 2. Accent Line */}
          <div className="w-24 h-[2px] bg-white rounded-full"></div>

          {/* 3. Main Title */}
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
            PROJECT SUTRA
          </h1>

          {/* 4. Subtitle / One-Liner */}
          <p className="font-sans text-xl sm:text-2xl text-neutral-400 font-normal max-w-3xl leading-relaxed">
            Swarm Unified Tactical Reconnaissance Architecture for GPS-Denied and Jammed Mountain Environments.
          </p>

        </div>

        {/* Bottom Bar: Complete Team Offgrid Subsystem Roster */}
        <div className="pt-6 border-t border-neutral-800">
          <div className="font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
            CORE ARCHITECTURE TEAM (TEAM OFFGRID)
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 font-mono text-xs">
            
            <div className="space-y-0.5">
              <div className="font-bold text-white text-sm">Nikhil</div>
              <div className="text-[11px] text-neutral-400">Tech Lead · Subsys A &amp; B</div>
              <div className="text-[10px] text-neutral-300 font-medium">GNC, FSD &amp; Deep JSCC</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-white text-sm">Vedanth Sai Ram</div>
              <div className="text-[11px] text-neutral-400">Lead · Subsystem C</div>
              <div className="text-[10px] text-neutral-300 font-medium">Tri-Modal AI &amp; Geolocation</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-white text-sm">Siva Kesava</div>
              <div className="text-[11px] text-neutral-400">Lead · Subsystem D</div>
              <div className="text-[10px] text-neutral-300 font-medium">3D GIS GCS &amp; WebGPU</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-white text-sm">Harika</div>
              <div className="text-[11px] text-neutral-400">Lead · Subsystem E</div>
              <div className="text-[10px] text-neutral-300 font-medium">Verification &amp; Pitch QA</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-white text-sm">Rohith Kumar</div>
              <div className="text-[11px] text-neutral-400">Lead · Subsystem F</div>
              <div className="text-[10px] text-neutral-300 font-medium">NDMA CONOPS &amp; Ops</div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
