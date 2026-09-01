import React from 'react';
import { Layers, ShieldCheck, Clock } from 'lucide-react';
import { SplitFlapText } from '../ui/SplitFlapText';

export const Slide01Title: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#000000] font-sans flex flex-col justify-between p-8 sm:p-10 lg:p-14 select-none overflow-hidden border border-slate-200">
      
      {/* Background Grid & Subtle Orbital Aura */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div 
        className="absolute w-[650px] h-[650px] rounded-full border border-slate-900/5 -top-[120px] -right-[120px] pointer-events-none z-0"
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-[100px] rotate-45 border border-slate-900/[0.04] -bottom-[120px] -left-[100px] pointer-events-none z-0"
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Authority & Psychological Urgency */}
        <header className="flex justify-between items-center pb-3 border-b border-slate-100">
          
          {/* Left: Organization / Defense Category */}
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white font-mono font-bold text-xs shadow-xs">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-800 font-mono">
              TEAM OFFGRID <span className="mx-2 text-slate-300">/</span> DEFENSE &amp; DISASTER ROBOTICS
            </div>
          </div>

          {/* Right: Mechanical Split-Flap Status + Golden Hour Life Badge */}
          <div className="flex items-center gap-3">
            <SplitFlapText
              words={["GOLDEN HOUR READY", "SWARM SYNC ONLINE", "SIGNAL LIVE -5DB", "50HZ PX4 LOCKED"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              tileColor="#111827"
              textColor="#F8FAFC"
              tileRadius={5}
              gap={3}
              fontSize={13}
              loop
              padTo={18}
            />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[10.5px] font-mono font-black uppercase tracking-wider text-emerald-800 hidden sm:inline-flex shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>AUTONOMOUS SWARM</span>
            </div>
          </div>

        </header>

        {/* Center Hero Section: Psychological Hook & Irresistible Visual Contrast */}
        <main className="max-w-5xl my-auto py-3">
          
          {/* 1. Visceral Human Empathy Hook (Loss Aversion & Golden Hour Urgency) */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              <span>THE 72-HOUR GOLDEN RESCUE WINDOW</span>
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold hidden md:inline">
              Every minute lost to drone signal drop is a life lost in disaster rubble.
            </span>
          </div>

          {/* 2. Emotional Serif Vision Quote */}
          <blockquote className="text-2xl sm:text-3xl lg:text-[32px] font-serif italic text-slate-900 font-normal leading-snug mb-4">
            “When GPS vanishes and radio links jam, SUTRA’s autonomous drone swarm locates survivors in real-time.”
          </blockquote>

          {/* 3. Monumental Headline with L-Bracket Precision Framing */}
          <div className="relative inline-block my-1">
            <div className="absolute -top-5 -left-5 w-8 h-8 border-t-2 border-l-2 border-black"></div>
            <div className="absolute -bottom-5 -right-5 w-8 h-8 border-b-2 border-r-2 border-black"></div>

            <h1 className="text-7xl sm:text-8xl lg:text-[96px] font-black uppercase tracking-tighter text-black leading-[0.88] select-none">
              PROJECT<br/>
              <span className="italic font-light opacity-80">SUTRA.</span>
            </h1>
          </div>

          {/* 4. One-Liner Description */}
          <p className="text-base sm:text-lg font-medium text-slate-600 max-w-3xl leading-relaxed mt-4">
            Swarm Unified Tactical Reconnaissance Architecture — decentralized multi-UAV flight, Deep JSCC neural zero-cliff video, and 3.59cm terrain-corrected DEM survivor geolocation.
          </p>

          {/* 5. 3 High-Impact Von Restorff Isolation Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mt-5 font-mono">
            
            {/* Card 1: 50Hz GNC */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-black hover:shadow-md">
              <span className="pointer-events-none absolute -right-1 -top-2 font-mono text-5xl font-black leading-none text-slate-100 select-none">
                01
              </span>
              <div className="relative z-10 space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-black text-white text-[9px] font-black uppercase tracking-wider">
                  DECENTRALIZED GNC
                </span>
                <div className="flex items-baseline gap-1.5 pt-1">
                  <span className="text-3xl font-black text-black tracking-tight leading-none">50<span className="text-xl">Hz</span></span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Offboard Rate</span>
                </div>
                <p className="text-xs text-slate-500 font-sans font-medium leading-snug pt-0.5">
                  Zero collision guarantee across dense swarms
                </p>
              </div>
            </div>

            {/* Card 2: -5dB Deep JSCC */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-black hover:shadow-md">
              <span className="pointer-events-none absolute -right-1 -top-2 font-mono text-5xl font-black leading-none text-slate-100 select-none">
                02
              </span>
              <div className="relative z-10 space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-wider">
                  NEURAL RF LIFELINE
                </span>
                <div className="flex items-baseline gap-1.5 pt-1">
                  <span className="text-3xl font-black text-black tracking-tight leading-none">-5<span className="text-xl">dB</span></span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Jam Resilience</span>
                </div>
                <p className="text-xs text-slate-500 font-sans font-medium leading-snug pt-0.5">
                  Deep JSCC zero-cliff video in heavy noise
                </p>
              </div>
            </div>

            {/* Card 3: 3.59cm Geolocation */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-black hover:shadow-md">
              <span className="pointer-events-none absolute -right-1 -top-2 font-mono text-5xl font-black leading-none text-slate-100 select-none">
                03
              </span>
              <div className="relative z-10 space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#006C4C] text-white text-[9px] font-black uppercase tracking-wider">
                  TERRAIN GEOLOCATION
                </span>
                <div className="flex items-baseline gap-1.5 pt-1">
                  <span className="text-3xl font-black text-[#006C4C] tracking-tight leading-none">3.59<span className="text-xl">cm</span></span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Geo-Accuracy</span>
                </div>
                <p className="text-xs text-slate-500 font-sans font-medium leading-snug pt-0.5">
                  WGS84 3D DEM terrain raycasting on slopes
                </p>
              </div>
            </div>

          </div>

        </main>

        {/* Bottom Bar: Complete Team Offgrid Subsystem Roster */}
        <footer className="pt-3.5 border-t border-slate-200">
          <div className="flex justify-between items-center mb-2.5 font-mono">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              CORE ARCHITECTURE TEAM (OFFGRID)
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#006C4C] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#006C4C]" />
              <span>EMPIRICALLY VALIDATED · 232 / 232 UNIT TESTS PASSING</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            
            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-0.5">
              <div className="font-black text-black text-xs sm:text-sm">Nikhil</div>
              <div className="text-[10.5px] text-slate-600 font-semibold">Tech Lead · Subsys A &amp; B</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-black text-white text-[8px] font-black tracking-wider uppercase">
                GNC &amp; JSCC
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-0.5">
              <div className="font-black text-black text-xs sm:text-sm">Vedanth Sai Ram</div>
              <div className="text-[10.5px] text-slate-600 font-semibold">Lead · Subsystem C</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8px] font-black tracking-wider uppercase">
                AI PERCEPTION
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-0.5">
              <div className="font-black text-black text-xs sm:text-sm">Siva Kesava</div>
              <div className="text-[10.5px] text-slate-600 font-semibold">Lead · Subsystem D</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8px] font-black tracking-wider uppercase">
                3D GIS GCS
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-0.5">
              <div className="font-black text-black text-xs sm:text-sm">Harika</div>
              <div className="text-[10.5px] text-slate-600 font-semibold">Lead · Subsystem E</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8px] font-black tracking-wider uppercase">
                VERIFICATION QA
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-0.5">
              <div className="font-black text-black text-xs sm:text-sm">Rohith Kumar</div>
              <div className="text-[10.5px] text-slate-600 font-semibold">Lead · Subsystem F</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[8px] font-black tracking-wider uppercase">
                NDMA CONOPS
              </div>
            </div>

          </div>
        </footer>

      </div>

    </div>
  );
};

export default Slide01Title;
