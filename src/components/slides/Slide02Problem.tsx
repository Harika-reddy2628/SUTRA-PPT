import React from 'react';
import { Compass, Radio, Mountain, Users, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SplitFlapText } from '../ui/SplitFlapText';

export interface SubsystemVoidData {
  id: string;
  subsysTag: string;
  title: string;
  badge: string;
  problemTag: string;
  incidentLocation: string;
  illustration: string;
  realLife: string;
  storyNarrative: string;
  mechanism: string;
  impact: string;
  spec1Val: string;
  spec1Lbl: string;
  spec2Val: string;
  spec2Lbl: string;
  target: string;
  lead: string;
  icon: React.ReactNode;
}

export const SUBSYSTEM_VOIDS: SubsystemVoidData[] = [
  {
    id: '01',
    subsysTag: 'SUBSYSTEM A // GNC',
    title: 'Wayanad Canopy Crash',
    badge: 'GPS MULTI-PATH',
    problemTag: 'PROBLEM 01',
    incidentLocation: 'Wayanad 2024 Landslide Audit',
    illustration: 'assets/illustrations/portrait_canopy_shadow.jpg',
    realLife: 'assets/disaster/portrait_wayanad_rescue.jpg',
    storyNarrative: 'Dense monsoon rainforest canopies blinded satellite GNSS signals, causing commercial drones to lose position hold, drift helplessly into trees, and shatter rotors.',
    mechanism: 'Foliage multipath blocks satellite GNSS positioning',
    impact: 'Commercial drones lose position lock, drifting into tree canopies and causing catastrophic rotor loss.',
    spec1Val: '70% Loss',
    spec1Lbl: 'Canopy Sorties',
    spec2Val: '0 Hold',
    spec2Lbl: 'Non-GPS Stability',
    target: 'Target: PX4 & 3D ORCA GNC',
    lead: 'LEAD: NIKHIL',
    icon: <Compass className="w-4 h-4" />,
  },
  {
    id: '02',
    subsysTag: 'SUBSYSTEM B // COMMS',
    title: 'Chamoli Gorge RF Cut',
    badge: 'DIGITAL CLIFF',
    problemTag: 'PROBLEM 02',
    incidentLocation: 'Chamoli Himalayan Ravine Search',
    illustration: 'assets/illustrations/portrait_rf_mountain.jpg',
    realLife: 'assets/disaster/portrait_disaster_rescue_1.jpg',
    storyNarrative: 'Steep mountain ridges severed direct line-of-sight RF waves, causing standard H.264 digital video to instantly blackout below 5dB SNR, blinding tactical squads.',
    mechanism: 'Mountain ridgelines sever line-of-sight RF communications',
    impact: 'Conventional H.264 digital video completely cuts out below 5dB SNR, causing total tactical blindness.',
    spec1Val: '<5dB SNR',
    spec1Lbl: 'Video Blackout',
    spec2Val: '0 Relay',
    spec2Lbl: 'Single-Drone Link',
    target: 'Target: Deep JSCC Neural Mesh',
    lead: 'LEAD: NIKHIL',
    icon: <Radio className="w-4 h-4" />,
  },
  {
    id: '03',
    subsysTag: 'SUBSYSTEM C // VISION',
    title: 'Sikkim Slope Geo Error',
    badge: '35% FALSE ALARM',
    problemTag: 'PROBLEM 03',
    incidentLocation: 'Sikkim Flash Flood Slopes',
    illustration: 'assets/illustrations/portrait_elevation_raycast.jpg',
    realLife: 'assets/disaster/portrait_disaster_rescue_2.jpg',
    storyNarrative: 'Standard 2D flat-earth raycasts miscalculated survivor positions by 15–30m on steep gradients, mistakenly dispatching ground NDRF squads to empty ravines.',
    mechanism: '2D flat-plane raycasts ignore real 3D mountain elevation',
    impact: 'Sloping terrains produce 15–30m coordinate errors, routing ground rescue teams to empty ravines.',
    spec1Val: '15–30m',
    spec1Lbl: 'Location Drift',
    spec2Val: '35%',
    spec2Lbl: 'False Alarm Rate',
    target: 'Target: 3D DEM Elevation Raycast',
    lead: 'LEAD: VEDANTH',
    icon: <Mountain className="w-4 h-4" />,
  },
  {
    id: '04',
    subsysTag: 'SUBSYSTEM D // C2 GCS',
    title: 'Central Link Abort',
    badge: '15-25 CREW LOAD',
    problemTag: 'PROBLEM 04',
    incidentLocation: 'NDMA Field Swarm Operations',
    illustration: 'assets/illustrations/portrait_single_link_loss.jpg',
    realLife: 'assets/disaster/portrait_disaster_rescue_5.jpg',
    storyNarrative: 'Multi-drone deployments required 15–25 crew members; when a single manual pilot link dropped in torrential conditions, the entire search operation aborted.',
    mechanism: '1-pilot-per-drone manual radio link single-point-of-failure',
    impact: 'Requires 15–25 personnel & 45–90 min setup; sortie completely aborts if single pilot link drops.',
    spec1Val: '2–3 Hrs',
    spec1Lbl: 'Search Time / mi²',
    spec2Val: '₹12.5L',
    spec2Lbl: 'Cost / Sortie',
    target: 'Target: WebGPU ATAK Digital Twin',
    lead: 'LEAD: SIVA',
    icon: <Users className="w-4 h-4" />,
  },
];

interface Slide02ProblemProps {
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
}

export const Slide02Problem: React.FC<Slide02ProblemProps> = ({
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
            <div className="w-2.5 h-6 bg-red-600 rounded-xs"></div>
            <div className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#09090B]">
              THE PROBLEM // 4 CRITICAL FAILURE VOIDS
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SplitFlapText
              words={["THE PROBLEM", "CRITICAL VOIDS", "DISASTER AUDIT", "SYSTEM FAILURE"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              tileColor="#18181B"
              textColor="#FB7185"
              tileRadius={5}
              gap={3}
              fontSize={13}
              loop
              padTo={14}
            />
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-red-600 hidden md:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>FIELD DISASTER AUDIT</span>
            </div>
          </div>
        </header>

        {/* Main Headline & Minimal Text-Only Telemetry */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-2 pb-1 gap-3">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#09090B] tracking-tight leading-none font-sans">
              Traditional Search &amp; Rescue Collapses Across <span className="text-red-600 underline decoration-red-300 decoration-4 underline-offset-4">4 Critical Voids</span>
            </h2>
          </div>
          
          {/* Minimalist Text-Only Metrics (No chunky chips) */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm font-bold text-slate-700 shrink-0">
            <span className="text-red-600">70% CANOPY CRASHES</span>
            <span className="text-slate-300">•</span>
            <span>15–30m GEO ERROR</span>
            <span className="text-slate-300">•</span>
            <span>2–3H DELAY</span>
            <span className="text-slate-300">•</span>
            <span className="text-red-600">₹40L+ AIRFRAMES</span>
          </div>
        </div>

        {/* Full-Screen Elastic Expanding Gallery */}
        <main className="w-full flex-1 my-2 flex items-center">
          <div className="flex h-full min-h-[480px] lg:min-h-[540px] xl:min-h-[600px] w-full flex-col gap-2 md:flex-row md:gap-3.5">
            {SUBSYSTEM_VOIDS.map((subsys, idx) => {
              const isActive = currentIndex === idx;

              return (
                <div
                  key={subsys.id}
                  onMouseEnter={() => handleSelect(idx)}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "relative cursor-pointer overflow-hidden rounded-[24px] border border-neutral-800 bg-[#090C10]",
                    // Elastic Flex Transition
                    "transition-[flex,filter,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isActive
                      ? "flex-[4.6] shadow-2xl ring-2 ring-red-500/40 brightness-100"
                      : "flex-[1] brightness-65 hover:brightness-85"
                  )}
                >
                  {isActive ? (
                    /* EXPANDED ACTIVE CARD: Clean Uncropped Frame + Big Narrative Panel */
                    <div className="flex h-full w-full flex-col md:flex-row p-4 lg:p-5 gap-5 lg:gap-6 items-stretch">
                      
                      {/* Left Side: Uncropped Image Stage */}
                      <div className="relative h-full w-full md:w-[42%] lg:w-[40%] rounded-2xl overflow-hidden bg-black border border-white/20 flex items-center justify-center shadow-inner group/img">
                        
                        {/* Ambient subtle blur backing */}
                        <img
                          src={subCarouselMode === 'illustration' ? subsys.illustration : subsys.realLife}
                          alt={subsys.title}
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 pointer-events-none"
                        />

                        {/* Uncropped 3D Illustration */}
                        <img
                          src={subsys.illustration}
                          alt={`${subsys.title} - 3D Simulation`}
                          className={cn(
                            "relative z-10 w-full h-full object-contain p-2 transition-all duration-700",
                            subCarouselMode === 'illustration'
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 pointer-events-none absolute"
                          )}
                        />

                        {/* Uncropped Real Life Field Photo */}
                        <img
                          src={subsys.realLife}
                          alt={`${subsys.title} - Real Field Disaster`}
                          className={cn(
                            "relative z-10 w-full h-full object-contain p-2 transition-all duration-700",
                            subCarouselMode === 'real_life'
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 pointer-events-none absolute"
                          )}
                        />

                        {/* Minimalist Top Bar: Problem Tag & Text-Only Toggle */}
                        <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center pointer-events-auto">
                          <div className="font-mono text-xs sm:text-sm font-black tracking-widest text-white drop-shadow-md flex items-center gap-1.5">
                            {subsys.icon}
                            <span>{subsys.problemTag}</span>
                          </div>

                          {/* Minimal Text Toggle */}
                          <div className="flex items-center gap-2 font-mono text-xs font-bold drop-shadow-md bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSubCarouselMode('illustration');
                              }}
                              className={cn(
                                "transition-all",
                                subCarouselMode === 'illustration'
                                  ? "text-white font-black underline underline-offset-4 decoration-red-500 decoration-2"
                                  : "text-white/60 hover:text-white"
                              )}
                            >
                              3D SIM
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
                                  ? "text-red-400 font-black underline underline-offset-4 decoration-red-500 decoration-2"
                                  : "text-white/60 hover:text-white"
                              )}
                            >
                              REAL FIELD
                            </button>
                          </div>
                        </div>

                        {/* Minimalist Bottom Caption */}
                        <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white font-mono text-xs shadow-md">
                          <span className="text-slate-200 font-semibold truncate mr-2">{subsys.incidentLocation}</span>
                          <span className="text-red-400 font-bold uppercase shrink-0">{subCarouselMode === 'illustration' ? '3D SIM' : 'FIELD AUDIT'}</span>
                        </div>
                      </div>

                      {/* Right Side: Much Bigger Story & Intelligence Panel */}
                      <div className="flex-1 h-full flex flex-col justify-between py-1 pr-1 text-white z-10">
                        <div className="space-y-4">
                          
                          {/* Minimalist Subsystem Label & Failure Keyword */}
                          <div className="flex items-center justify-between font-mono text-xs sm:text-sm font-bold tracking-wider">
                            <span className="text-red-400 uppercase">
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

                          {/* Story Narrative Box (Much Bigger) */}
                          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 space-y-1.5 shadow-inner">
                            <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
                              FIELD FAILURE CASE:
                            </div>
                            <p className="text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-sans text-slate-100 font-normal leading-relaxed">
                              “{subsys.storyNarrative}”
                            </p>
                          </div>

                          {/* Empirical Failure Specs (Much Bigger) */}
                          <div className="grid grid-cols-2 gap-4 font-mono">
                            <div className="p-4 rounded-2xl bg-black/60 border border-white/20 shadow-md">
                              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black text-red-400 leading-none">{subsys.spec1Val}</div>
                              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mt-1.5">{subsys.spec1Lbl}</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-black/60 border border-white/20 shadow-md">
                              <div className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white leading-none">{subsys.spec2Val}</div>
                              <div className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider mt-1.5">{subsys.spec2Lbl}</div>
                            </div>
                          </div>

                          {/* Core Failure Mechanism */}
                          <div className="px-4 py-2.5 rounded-xl bg-black/60 border border-white/20 text-xs sm:text-sm font-mono text-slate-200">
                            <span className="text-red-400 font-black uppercase mr-2">CORE VOID:</span>
                            {subsys.mechanism}
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
                    /* INACTIVE CARD: Minimalist Vertical Peek with Problem Tag & Title */
                    <div className="relative h-full w-full flex flex-col justify-between p-4 lg:p-5 items-center">
                      <img
                        src={subsys.illustration}
                        alt={subsys.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-35"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/50" />
                      
                      {/* Top Minimal Problem ID */}
                      <div className="relative z-10 font-mono text-xs font-black text-white tracking-widest">
                        {subsys.problemTag.replace('PROBLEM ', 'P')}
                      </div>

                      {/* Monumental Vertical Title */}
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="whitespace-nowrap text-base sm:text-lg font-black uppercase tracking-[0.25em] text-white [writing-mode:vertical-rl] rotate-180 drop-shadow-md">
                          {subsys.title}
                        </span>
                      </div>

                      {/* Bottom Minimal Keyword Text */}
                      <div className="relative z-10 text-xs font-mono font-bold text-red-400 uppercase tracking-wider text-center">
                        {subsys.badge}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>

        {/* Disaster Field Audit (Bottom Row) */}
        <footer className="pt-3 border-t border-[#E4E4E7] flex flex-col gap-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">FIELD EVIDENCE</span>
              <span className="text-sm sm:text-base font-bold text-[#09090B] font-sans">Wayanad Landslide Audit</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">AUDIT FINDING</span>
              <span className="text-sm sm:text-base font-bold text-red-700 font-sans">70% RF/GPS Disconnect</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">COST PENALTY</span>
              <span className="text-sm sm:text-base font-bold text-[#09090B] font-sans">₹40L Military Airframes</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">SURVIVOR RISK</span>
              <span className="text-sm sm:text-base font-bold text-red-700 font-sans">412% Disaster Surge</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-bold">PAGE 02</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs sm:text-sm text-red-700 font-bold">PROBLEM 0{currentIndex + 1}/04</span>
            </div>
            <div className="font-bold uppercase tracking-widest text-[#09090B]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default Slide02Problem;
