import React from 'react';
import { Plane, Radio, Mountain, Terminal, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SplitFlapText } from '../ui/SplitFlapText';

export interface SubsystemSolutionData {
  id: string;
  subsysTag: string;
  title: string;
  badge: string;
  solutionTag: string;
  subsystemDomain: string;
  illustration: string;
  benchmarkImage: string;
  storyNarrative: string;
  voidSolved: string;
  spec1Val: string;
  spec1Lbl: string;
  spec2Val: string;
  spec2Lbl: string;
  target: string;
  lead: string;
  icon: React.ReactNode;
}

export const SUBSYSTEM_SOLUTIONS: SubsystemSolutionData[] = [
  {
    id: '01',
    subsysTag: 'SUBSYSTEM A // FLIGHT AUTONOMY',
    title: 'Decentralized Swarm Flight',
    badge: '50Hz REFRESH',
    solutionTag: 'SOLUTION 01',
    subsystemDomain: 'Autonomous Drone Flight',
    illustration: 'assets/illustrations/solution_gnc_orca_swarm.jpg',
    benchmarkImage: 'assets/disaster/portrait_disaster_rescue_3.jpg',
    storyNarrative: 'AI keeps drones stable and prevents tree collisions under thick forest canopies—even with zero GPS signal.',
    voidSolved: 'Fixes: Drones crashing into trees when GPS drops',
    spec1Val: '50Hz',
    spec1Lbl: 'Control Refresh',
    spec2Val: '0',
    spec2Lbl: 'GPS Signal Needed',
    target: 'Moat: Decentralized 3D Collision Avoidance',
    lead: 'LEAD: NIKHIL',
    icon: <Plane className="w-4 h-4" />,
  },
  {
    id: '02',
    subsysTag: 'SUBSYSTEM B // COMMUNICATIONS',
    title: 'Zero-Blackout Video Mesh',
    badge: '-5dB RESILIENT',
    solutionTag: 'SOLUTION 02',
    subsystemDomain: 'Continuous Video Mesh',
    illustration: 'assets/illustrations/solution_deep_jscc_mesh.jpg',
    benchmarkImage: 'assets/disaster/portrait_disaster_rescue_4.jpg',
    storyNarrative: 'Drones relay live video across each other. Rescue teams maintain crystal-clear video feeds even inside deep mountain gorges.',
    voidSolved: 'Fixes: Video feeds cutting out behind mountains',
    spec1Val: '-5dB',
    spec1Lbl: 'Weak Signal Limit',
    spec2Val: '100%',
    spec2Lbl: 'Video Uptime in Gorges',
    target: 'Moat: Differentiable Neural Video Mesh',
    lead: 'LEAD: NIKHIL',
    icon: <Radio className="w-4 h-4" />,
  },
  {
    id: '03',
    subsysTag: 'SUBSYSTEM C // AI VISION',
    title: '3D Terrain Geolocation',
    badge: '3.59cm ACCURACY',
    solutionTag: 'SOLUTION 03',
    subsystemDomain: 'Precision Victim Location',
    illustration: 'assets/illustrations/solution_3d_dem_perception.jpg',
    benchmarkImage: 'assets/disaster/portrait_disaster_rescue_2.jpg',
    storyNarrative: 'On-drone AI spots victims in under 15ms and projects exact 3D coordinates onto mountain terrain, cutting location error to 3.6 cm.',
    voidSolved: 'Fixes: False survivor locations on steep slopes',
    spec1Val: '<15ms',
    spec1Lbl: 'AI Detection Speed',
    spec2Val: '3.59cm',
    spec2Lbl: 'Coordinate Precision',
    target: 'Moat: Edge AI + 3D Elevation Raycast',
    lead: 'LEAD: VEDANTH',
    icon: <Mountain className="w-4 h-4" />,
  },
  {
    id: '04',
    subsysTag: 'SUBSYSTEM D // COMMAND & CONTROL',
    title: '1-Click Swarm Command',
    badge: '1–2 CREW',
    solutionTag: 'SOLUTION 04',
    subsystemDomain: 'Tactical Swarm Control',
    illustration: 'assets/illustrations/solution_webgpu_atak_gcs.jpg',
    benchmarkImage: 'assets/disaster/portrait_disaster_rescue_5.jpg',
    storyNarrative: 'A single tactical 3D map lets just 1–2 operators control the entire drone fleet offline, cutting manpower by 90%.',
    voidSolved: 'Fixes: Needing 20+ pilots to control multiple drones',
    spec1Val: '1–2',
    spec1Lbl: 'Operators Needed',
    spec2Val: '100%',
    spec2Lbl: 'Offline Operation',
    target: 'Moat: WebGPU 3D Tactical Digital Twin',
    lead: 'LEAD: SIVA',
    icon: <Terminal className="w-4 h-4" />,
  },
];

interface Slide03BenchmarkProps {
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
}

export const Slide03Benchmark: React.FC<Slide03BenchmarkProps> = ({
  activeIndex = 0,
  onActiveChange,
}) => {
  const [internalIndex, setInternalIndex] = React.useState(activeIndex);
  const [subCarouselMode, setSubCarouselMode] = React.useState<'illustration' | 'real_life'>('illustration');

  React.useEffect(() => {
    setInternalIndex(activeIndex);
  }, [activeIndex]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSubCarouselMode((prev) => (prev === 'illustration' ? 'real_life' : 'illustration'));
    }, 4000);
    return () => clearInterval(timer);
  }, [internalIndex]);

  const handleSelect = (idx: number) => {
    setInternalIndex(idx);
    onActiveChange?.(idx);
  };

  const currentIndex = internalIndex;

  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#09090B] font-sans flex flex-col justify-between p-6 sm:p-8 lg:p-10 select-none overflow-hidden border border-[#E4E4E7]">
      
      {/* Hallmark Tactical Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header */}
        <header className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-6 bg-emerald-600 rounded-xs"></div>
            <div className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#09090B]">
              THE SOLUTION // 4 CORE AI SWARM MOATS
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SplitFlapText
              words={["THE SOLUTION", "MISSION MOATS", "SWARM READY", "ZERO COLLISION"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              tileColor="#003824"
              textColor="#80E4B7"
              tileRadius={5}
              gap={3}
              fontSize={13}
              loop
              padTo={14}
            />
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>PROVEN SYSTEM ARCHITECTURE</span>
            </div>
          </div>
        </header>

        {/* Main Headline & Minimal Text-Only Telemetry */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-2 pb-1 gap-3">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#09090B] tracking-tight leading-none font-sans">
              AI Drone Swarms Find Survivors <span className="text-emerald-700 underline decoration-emerald-300 decoration-4 underline-offset-4">3–4x Faster</span> with Zero Blind Spots
            </h2>
          </div>
          
          {/* Minimalist Text-Only Metrics */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm font-bold text-slate-700 shrink-0">
            <span>10–18 MIN / SQ MILE</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700">85% DETECTION RATE</span>
            <span className="text-slate-300">•</span>
            <span>90% FEWER CREW</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700">₹95,000 / SORTIE</span>
          </div>
        </div>

        {/* Full-Screen Elastic Expanding Gallery */}
        <main className="w-full flex-1 my-2 flex items-center">
          <div className="flex h-full min-h-[480px] lg:min-h-[540px] xl:min-h-[600px] w-full flex-col gap-2 md:flex-row md:gap-3.5">
            {SUBSYSTEM_SOLUTIONS.map((subsys, idx) => {
              const isActive = currentIndex === idx;

              return (
                <div
                  key={subsys.id}
                  onMouseEnter={() => handleSelect(idx)}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "relative cursor-pointer overflow-hidden rounded-[24px] border border-neutral-800 bg-[#06120C]",
                    // Elastic Flex Transition
                    "transition-[flex,filter,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isActive
                      ? "flex-[4.6] shadow-2xl ring-2 ring-emerald-500/40 brightness-100"
                      : "flex-[1] brightness-65 hover:brightness-85"
                  )}
                >
                  {isActive ? (
                    /* EXPANDED ACTIVE CARD: Clean Uncropped Frame + Big Solution Panel */
                    <div className="flex h-full w-full flex-col md:flex-row p-4 lg:p-5 gap-5 lg:gap-6 items-stretch">
                      
                      {/* Left Side: Uncropped Image Stage */}
                      <div className="relative h-full w-full md:w-[42%] lg:w-[40%] rounded-2xl overflow-hidden bg-[#030B07] border border-emerald-500/30 flex items-center justify-center shadow-inner group/img">
                        
                        {/* Ambient subtle blur backing */}
                        <img
                          src={subCarouselMode === 'illustration' ? subsys.illustration : subsys.benchmarkImage}
                          alt={subsys.title}
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 pointer-events-none"
                        />

                        {/* Uncropped 3D Technical Moat Image */}
                        <img
                          src={subsys.illustration}
                          alt={`${subsys.title} - 3D Architecture`}
                          className={cn(
                            "relative z-10 w-full h-full object-contain p-2 transition-all duration-700",
                            subCarouselMode === 'illustration'
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 pointer-events-none absolute"
                          )}
                        />

                        {/* Uncropped Real-World Validation Image */}
                        <img
                          src={subsys.benchmarkImage}
                          alt={`${subsys.title} - Field Validation`}
                          className={cn(
                            "relative z-10 w-full h-full object-contain p-2 transition-all duration-700",
                            subCarouselMode === 'real_life'
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 pointer-events-none absolute"
                          )}
                        />

                        {/* Minimalist Top Bar: Solution Tag & Text-Only Toggle */}
                        <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center pointer-events-auto">
                          <div className="font-mono text-xs sm:text-sm font-black tracking-widest text-emerald-300 drop-shadow-md flex items-center gap-1.5">
                            {subsys.icon}
                            <span>{subsys.solutionTag}</span>
                          </div>

                          {/* Minimal Text Toggle */}
                          <div className="flex items-center gap-2 font-mono text-xs font-bold drop-shadow-md bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSubCarouselMode('illustration');
                              }}
                              className={cn(
                                "transition-all",
                                subCarouselMode === 'illustration'
                                  ? "text-emerald-300 font-black underline underline-offset-4 decoration-emerald-400 decoration-2"
                                  : "text-white/60 hover:text-white"
                              )}
                            >
                              3D MOAT
                            </button>
                            <span className="text-white/30">/</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSubCarouselMode('real_life');
                              }}
                              className={cn(
                                "transition-all",
                                subCarouselMode === 'real_life'
                                  ? "text-emerald-400 font-black underline underline-offset-4 decoration-emerald-400 decoration-2"
                                  : "text-white/60 hover:text-white"
                              )}
                            >
                              FIELD PROOF
                            </button>
                          </div>
                        </div>

                        {/* Minimalist Bottom Caption */}
                        <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-emerald-500/30 text-white font-mono text-xs shadow-md">
                          <span className="text-slate-200 font-semibold truncate mr-2">{subsys.subsystemDomain}</span>
                          <span className="text-emerald-400 font-bold uppercase shrink-0">{subCarouselMode === 'illustration' ? '3D DESIGN' : 'PROVEN'}</span>
                        </div>
                      </div>

                      {/* Right Side: Much Bigger Solution & Moat Panel */}
                      <div className="flex-1 h-full flex flex-col justify-between py-1 pr-1 text-white z-10">
                        <div className="space-y-4">
                          
                          {/* Minimalist Subsystem Label & Moat Keyword */}
                          <div className="flex items-center justify-between font-mono text-xs sm:text-sm font-bold tracking-wider">
                            <span className="text-emerald-400 uppercase">
                              {subsys.subsysTag}
                            </span>
                            <span className="text-slate-300 uppercase">
                              {subsys.badge}
                            </span>
                          </div>

                          {/* Monumental Title (Much Bigger) */}
                          <h3 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-white leading-none font-sans tracking-tight">
                            {subsys.title}
                          </h3>

                          {/* Problem Solved Badge (Clear & Simple) */}
                          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-mono font-bold shadow-xs">
                            {subsys.voidSolved}
                          </div>

                          {/* Solution Narrative Box (Clear & Simple) */}
                          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 space-y-1.5 shadow-inner">
                            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                              CORE ADVANTAGE:
                            </div>
                            <p className="text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-sans text-slate-100 font-normal leading-relaxed">
                              {subsys.storyNarrative}
                            </p>
                          </div>

                          {/* Empirical Specs (Much Bigger) */}
                          <div className="grid grid-cols-2 gap-4 font-mono">
                            <div className="p-4 rounded-2xl bg-black/60 border border-white/20 shadow-md">
                              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-none">{subsys.spec1Val}</div>
                              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mt-1.5">{subsys.spec1Lbl}</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-black/60 border border-white/20 shadow-md">
                              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black text-emerald-400 leading-none">{subsys.spec2Val}</div>
                              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mt-1.5">{subsys.spec2Lbl}</div>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="mt-3 w-full bg-white/20 hover:bg-white/30 active:scale-[0.98] backdrop-blur-md border border-white/30 rounded-xl px-5 py-3.5 text-white flex items-center justify-between text-sm sm:text-base font-bold tracking-wider uppercase transition-all shadow-xl group/btn cursor-pointer">
                          <span className="font-sans text-white">
                            {subsys.target}
                          </span>
                          <ArrowRight className="w-5 h-5 text-white transition-transform group-hover/btn:translate-x-1.5" />
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* INACTIVE CARD: Minimalist Vertical Peek with Solution Tag & Title */
                    <div className="relative h-full w-full flex flex-col justify-between p-4 lg:p-5 items-center">
                      <img
                        src={subsys.illustration}
                        alt={subsys.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/50" />
                      
                      {/* Top Minimal Solution ID */}
                      <div className="relative z-10 font-mono text-xs font-black text-white tracking-widest">
                        {subsys.solutionTag.replace('SOLUTION ', 'S')}
                      </div>

                      {/* Monumental Vertical Title */}
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="whitespace-nowrap text-base sm:text-lg font-black uppercase tracking-[0.25em] text-white [writing-mode:vertical-rl] rotate-180 drop-shadow-md">
                          {subsys.title}
                        </span>
                      </div>

                      {/* Bottom Minimal Keyword Text */}
                      <div className="relative z-10 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider text-center">
                        {subsys.badge}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>

        {/* Market Validation Banner (Bottom Row) */}
        <footer className="pt-3 border-t border-[#E4E4E7] flex flex-col gap-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">MARKET SIZE</span>
              <span className="text-sm sm:text-base font-bold text-[#09090B] font-sans">₹74,500 Cr Addressable</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">SEARCH SPEED</span>
              <span className="text-sm sm:text-base font-bold text-emerald-700 font-sans">3–4x Faster Than Manual</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">COST SAVINGS</span>
              <span className="text-sm sm:text-base font-bold text-[#09090B] font-sans">13x Cheaper (₹95K vs ₹12.5L)</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">SYSTEM READINESS</span>
              <span className="text-sm sm:text-base font-bold text-emerald-700 font-sans">100% Offline &amp; Autonomous</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-bold">PAGE 03</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs sm:text-sm text-emerald-700 font-bold">SOLUTION 0{currentIndex + 1}/04</span>
            </div>
            <div className="font-bold uppercase tracking-widest text-[#09090B]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default Slide03Benchmark;
