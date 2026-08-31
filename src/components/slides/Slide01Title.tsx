import React from 'react';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FAF7F2] text-[#183A2B] font-sans flex flex-col justify-between p-16 lg:p-20 select-none overflow-hidden">
      
      {/* Subtle Radial Dot Pattern Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(24, 58, 43, 0.16) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, transparent 85%)'
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Team Offgrid & Classification */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-earth-forest flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="font-mono text-xs font-bold tracking-wider uppercase text-sandstone-muted">
              TEAM OFFGRID <span className="mx-2 text-sandstone-border">•</span> DEFENSE &amp; DISASTER ROBOTICS
            </div>
          </div>

          <div className="font-mono text-xs font-semibold text-sandstone-muted">
            August 2026
          </div>
        </div>

        {/* Center Formula Block: [Context] -> [Accent Line] -> [Main Title] -> [Subtitle] */}
        <div className="max-w-4xl space-y-6 my-auto">
          
          {/* 1. Context / Tagline */}
          <div className="font-mono text-sm lg:text-base font-bold tracking-widest uppercase text-earth-terracotta">
            AUTONOMOUS MULTI-UAV SWARM ARCHITECTURE
          </div>

          {/* 2. Accent Line (2pt visual separator) */}
          <div className="w-24 h-[3px] bg-earth-terracotta rounded-full"></div>

          {/* 3. Main Title */}
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-earth-forest uppercase leading-none">
            PROJECT SUTRA
          </h1>

          {/* 4. Subtitle / One-Liner */}
          <p className="font-sans text-xl sm:text-2xl text-sandstone-muted font-medium max-w-3xl leading-relaxed">
            Swarm Unified Tactical Reconnaissance Architecture for GPS-Denied and Jammed Mountain Environments.
          </p>

        </div>

        {/* Bottom Bar: Complete Team Offgrid Subsystem Roster */}
        <div className="pt-6 border-t border-sandstone-border">
          <div className="font-mono text-[11px] font-bold text-earth-terracotta uppercase tracking-wider mb-3">
            CORE ARCHITECTURE TEAM (TEAM OFFGRID)
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 font-mono text-xs">
            
            <div className="space-y-0.5">
              <div className="font-bold text-earth-forest text-sm">Nikhil</div>
              <div className="text-[11px] text-sandstone-muted">Tech Lead · Subsys A &amp; B</div>
              <div className="text-[10px] text-earth-sage font-medium">GNC, FSD &amp; Deep JSCC</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-earth-forest text-sm">Vedanth Sai Ram</div>
              <div className="text-[11px] text-sandstone-muted">Lead · Subsystem C</div>
              <div className="text-[10px] text-earth-sage font-medium">Tri-Modal AI &amp; Geolocation</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-earth-forest text-sm">Siva Kesava</div>
              <div className="text-[11px] text-sandstone-muted">Lead · Subsystem D</div>
              <div className="text-[10px] text-earth-sage font-medium">3D GIS GCS &amp; WebGPU</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-earth-forest text-sm">Harika</div>
              <div className="text-[11px] text-sandstone-muted">Lead · Subsystem E</div>
              <div className="text-[10px] text-earth-sage font-medium">Verification &amp; Pitch QA</div>
            </div>

            <div className="space-y-0.5">
              <div className="font-bold text-earth-forest text-sm">Rohith Kumar</div>
              <div className="text-[11px] text-sandstone-muted">Lead · Subsystem F</div>
              <div className="text-[10px] text-earth-sage font-medium">NDMA CONOPS &amp; Ops</div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
