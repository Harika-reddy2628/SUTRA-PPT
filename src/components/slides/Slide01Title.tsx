import React from 'react';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FAF7F2] text-[#183A2B] font-sans flex flex-col justify-between p-20 lg:p-24 select-none">
      
      {/* Top Left Optional Logo / Tag */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-earth-forest flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-sandstone-muted">
          DEFENSE &amp; DISASTER ROBOTICS
        </span>
      </div>

      {/* Center Formula Block: [Subtitle/Context] -> [Accent Line] -> [Main Title] -> [Subtitle Description] */}
      <div className="max-w-4xl space-y-6 my-auto">
        
        {/* 1. Context / Subtitle (small, muted) */}
        <div className="font-mono text-sm lg:text-base font-bold tracking-widest uppercase text-earth-terracotta">
          AUTONOMOUS MULTI-UAV SWARM ARCHITECTURE
        </div>

        {/* 2. Accent Line (2pt visual separator) */}
        <div className="w-24 h-[3px] bg-earth-terracotta rounded-full"></div>

        {/* 3. Main Title (Big, bold, dark — largest element) */}
        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-earth-forest uppercase leading-none">
          PROJECT SUTRA
        </h1>

        {/* 4. Subtitle / One-Liner (18-22pt, muted) */}
        <p className="font-sans text-xl sm:text-2xl text-sandstone-muted font-medium max-w-2xl leading-relaxed">
          Swarm Unified Tactical Reconnaissance Architecture for GPS-Denied and Jammed Mountain Environments.
        </p>

      </div>

      {/* Bottom Bar: [Author | Date] */}
      <div className="pt-8 border-t border-sandstone-border flex justify-between items-center font-mono text-xs text-sandstone-muted">
        <div>
          <span className="font-bold text-earth-forest text-sm">Nikhil Sai Kilani</span>
          <span className="mx-3 text-sandstone-border">•</span>
          <span>Lead Architect</span>
        </div>

        <div className="font-semibold text-earth-forest">
          August 2026
        </div>
      </div>

    </div>
  );
};
