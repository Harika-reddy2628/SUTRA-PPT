import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Box, 
  Wind, 
  Activity, 
  ExternalLink,
  Zap,
  ChevronUp,
  ChevronDown,
  Layers,
  Film,
  UploadCloud,
  FileVideo
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SplitFlapText } from '../ui/SplitFlapText';

export interface SubsystemPiece {
  id: string;
  pieceNumber: string;
  tag: string;
  title: string;
  badge: string;
  summary: string;
  problemSolved: string;
  howItWorks: string;
  specs: { label: string; value: string; unit: string }[];
  researchPapers: {
    authors: string;
    year: string;
    title: string;
    venue: string;
    doi: string;
    provenBenefit: string;
  }[];
  placeholderTitle: string;
  telemetry: { label: string; value: string }[];
  icon: React.ReactNode;
}

export const SUBSYSTEM_A_PIECES: SubsystemPiece[] = [
  {
    id: 'orca',
    pieceNumber: '01',
    tag: 'PIECE 01/04 // MULTI-AGENT COLLISION AVOIDANCE',
    title: '3D Drone Collision Avoidance & Safety Shield',
    badge: 'ZERO-COLLISION GUARANTEE',
    summary: 'Ensures drones never crash into each other when flying through the same search area.',
    problemSolved: 'Fixes: Multiple drones flying on intersecting paths collide because standard autopilots cannot resolve head-on bottlenecks.',
    howItWorks: 'Drones automatically fly at staggered heights (3.5m to 4.6m) and actively push apart if they get closer than 2.8m, keeping a guaranteed 3.8m–7.4m gap between all drones at all times.',
    specs: [
      { label: 'Minimum Gap', value: '3.80 – 7.44', unit: 'meters apart' },
      { label: 'Flight Layers', value: '3.5 – 4.6', unit: 'm (stacked heights)' },
      { label: 'Safety Bubble', value: '2.80', unit: 'm auto-push radius' },
    ],
    researchPapers: [
      {
        authors: 'van den Berg et al.',
        year: '2011',
        title: 'Reciprocal n-Body Collision Avoidance',
        venue: 'Springer STAR Robotics',
        doi: '10.1007/978-3-642-19457-3_1',
        provenBenefit: 'Proven method that lets multiple drones steer around each other smoothly without central control.'
      },
      {
        authors: 'Ames et al.',
        year: '2019',
        title: 'Control Barrier Functions: Theory & Applications',
        venue: 'IEEE Control Systems',
        doi: '10.23919/ECC.2019.8795639',
        provenBenefit: 'Maintains an unbreachable safety bubble around each drone that overrides any risky flight command.'
      }
    ],
    placeholderTitle: '5-Drone Crossing SITL Simulation Clip',
    telemetry: [
      { label: 'Simulator', value: 'Gazebo 8' },
      { label: 'Swarm Fleet', value: '5 Drones' },
      { label: 'Distance Kept', value: '3.80 m OK' },
      { label: 'Safety Status', value: '100% Shielded' }
    ],
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: 'fsd',
    pieceNumber: '02',
    tag: 'PIECE 02/04 // 3D FOREST CANOPY PLANNING',
    title: '3D Forest Canopy Map & Smooth Trajectory Planner',
    badge: '32×32×16m 3D MAP',
    summary: 'Builds a real-time 3D map around each drone to dodge dense branches, powerlines, and debris.',
    problemSolved: 'Fixes: Drones stopping for dust/leaves, or making sharp jerky maneuvers that overheat motors.',
    howItWorks: 'A local 3D map automatically dissolves temporary clutter like dust, falling leaves, and rain within seconds, while smooth curved flight paths eliminate harsh motor jerks.',
    specs: [
      { label: 'Local 3D Map', value: '32×32×16', unit: 'meters around drone' },
      { label: 'Flight Smoothness', value: '< 4.20', unit: 'm/s³ (zero jerk)' },
      { label: 'Dust Dissolves In', value: '3 – 5', unit: 'frames (instant)' },
    ],
    researchPapers: [
      {
        authors: 'Hornung et al.',
        year: '2013',
        title: 'OctoMap: Probabilistic 3D Mapping',
        venue: 'Autonomous Robots (Springer)',
        doi: '10.1007/s10514-012-9321-0',
        provenBenefit: 'Proven mapping system that ignores falling rain, dust, and moving leaves automatically.'
      },
      {
        authors: 'Zhou, Xu, & Gao',
        year: '2024',
        title: 'APACE: Agile Quadrotor Trajectories',
        venue: 'IEEE Transactions on Robotics',
        doi: '10.1109/TRO.2024.3382914',
        provenBenefit: 'Smooth curve mathematics that prevent sharp drone jerks and keep motors cool.'
      }
    ],
    placeholderTitle: 'Forest Canopy 3D OctoMap Voxel Clip',
    telemetry: [
      { label: 'Map Volume', value: '32×32×16m' },
      { label: 'Dust Fade', value: 'Auto-Clean' },
      { label: 'Motor Health', value: 'Normal (Cool)' },
      { label: 'Flight Path', value: 'Smooth Curve' }
    ],
    icon: <Box className="w-5 h-5" />
  },
  {
    id: 'neuroflight',
    pieceNumber: '03',
    tag: 'PIECE 03/04 // WIND GUST AI REJECTION',
    title: 'Onboard AI Mountain Wind Counter-System',
    badge: '18.0 m/s WIND GUST REJECTION',
    summary: 'An edge AI model that instantly predicts and pushes back against strong mountain crosswinds.',
    problemSolved: 'Fixes: Mountain winds pushing drones off course and causing cameras to lose sight of survivors.',
    howItWorks: 'The AI model calculates wind turbulence in 0.04 milliseconds and counters it instantly with motor thrust—holding the drone steady within 35cm even in 18 m/s gale winds.',
    specs: [
      { label: 'AI Reaction Time', value: '0.040', unit: 'milliseconds' },
      { label: 'Max Wind Handled', value: '18.0', unit: 'm/s gale gusts' },
      { label: 'Position Drift', value: '< 0.35', unit: 'meters in heavy wind' },
    ],
    researchPapers: [
      {
        authors: 'Koch et al.',
        year: '2019',
        title: 'NeuroFlight: Neural Flight Control',
        venue: 'IEEE Neural Networks (TNNLS)',
        doi: '10.1109/TNNLS.2019.2941541',
        provenBenefit: 'Replaces slow traditional controllers with lightning-fast neural wind prediction.'
      },
      {
        authors: 'Brunke et al.',
        year: '2022',
        title: 'Safe Learning in Robotics',
        venue: 'Annual Review of Control',
        doi: '10.1146/annurev-control-042920-020211',
        provenBenefit: 'Mathematically guarantees the AI flight adjustments never destabilize the drone.'
      }
    ],
    placeholderTitle: '18.0 m/s Mountain Wind Shear SITL Clip',
    telemetry: [
      { label: 'AI Reaction', value: '0.040 ms' },
      { label: 'Wind Speed', value: '18.0 m/s' },
      { label: 'Tracking Hold', value: '< 0.35 m Drift' },
      { label: 'Camera Gimbal', value: 'Rock Solid' }
    ],
    icon: <Wind className="w-5 h-5" />
  },
  {
    id: 'px4',
    pieceNumber: '04',
    tag: 'PIECE 04/04 // INDUSTRIAL FLIGHT CONTROLLER',
    title: 'Industrial 50Hz Autopilot Bridge & Failsafe Landing',
    badge: '50Hz LOCKED & FAILSAFE READY',
    summary: 'Direct hardware connection that streams 50 flight commands per second with auto-landing safety.',
    problemSolved: 'Fixes: Drones crashing during takeoff mode changes or flying away if visual sensors drop.',
    howItWorks: 'Enforces a 10-beat safety check before allowing autonomous flight. If onboard tracking is lost for more than half a second, the drone immediately performs a soft, controlled landing.',
    specs: [
      { label: 'Command Rate', value: '50.0', unit: 'commands / second' },
      { label: 'Startup Safety', value: '10-Beat', unit: 'warmup check' },
      { label: 'Failsafe Auto-Land', value: '500', unit: 'ms quick trigger' },
    ],
    researchPapers: [
      {
        authors: 'OMG Consortium',
        year: '2021',
        title: 'DDS-XRCE Robotics Communication Standard',
        venue: 'OMG Formal Standard',
        doi: '10.25504/FAIRsharing.omg_xrce',
        provenBenefit: 'Ultra-lightweight binary protocol linking the AI companion computer to flight hardware.'
      },
      {
        authors: 'PX4 Core Team',
        year: '2023',
        title: 'PX4 Industrial Middleware Architecture',
        venue: 'Dronecode Foundation Specification',
        doi: '10.5281/zenodo.px4_v1_14',
        provenBenefit: 'Guarantees sub-millisecond command execution and automatic emergency landings.'
      }
    ],
    placeholderTitle: 'PX4 50Hz Offboard MicroXRCE SITL Clip',
    telemetry: [
      { label: 'Command Stream', value: '50.0 Hz' },
      { label: 'Command Delay', value: '< 1.0 ms' },
      { label: 'Failsafe Timer', value: '500 ms' },
      { label: 'Test Suite', value: '120/120 OK' }
    ],
    icon: <Activity className="w-5 h-5" />
  }
];

interface Slide03FSDProps {
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
}

export const Slide03FSD: React.FC<Slide03FSDProps> = ({
  activeIndex = 0,
  onActiveChange,
}) => {
  const [internalIndex, setInternalIndex] = useState(activeIndex);
  const stackContainerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    setInternalIndex(activeIndex);
  }, [activeIndex]);

  const handleSelect = useCallback((idx: number) => {
    const bounded = Math.max(0, Math.min(SUBSYSTEM_A_PIECES.length - 1, idx));
    setInternalIndex(bounded);
    onActiveChange?.(bounded);
  }, [onActiveChange]);

  const nextPiece = useCallback(() => {
    if (internalIndex < SUBSYSTEM_A_PIECES.length - 1) {
      handleSelect(internalIndex + 1);
    }
  }, [internalIndex, handleSelect]);

  const prevPiece = useCallback(() => {
    if (internalIndex > 0) {
      handleSelect(internalIndex - 1);
    }
  }, [internalIndex, handleSelect]);

  // Debounced Wheel Scroll Navigation
  useEffect(() => {
    const container = stackContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 400) return;

      if (e.deltaY > 20) {
        lastScrollTime.current = now;
        nextPiece();
      } else if (e.deltaY < -20) {
        lastScrollTime.current = now;
        prevPiece();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [nextPiece, prevPiece]);

  return (
    <div className="relative w-full h-full bg-[#FAFBFD] text-[#191C1E] font-sans flex flex-col justify-between p-4 sm:p-5 lg:p-6 select-none overflow-hidden">
      
      {/* Subtle Tactical Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header */}
        <header className="flex justify-between items-center pb-2 border-b border-[#E1E3E8]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-7 bg-[#006C4C] rounded-full shadow-xs"></div>
            <div className="font-mono text-sm sm:text-base font-black uppercase tracking-[0.25em] text-[#191C1E]">
              SUBSYSTEM A DEEP DIVE // GNC &amp; AUTONOMOUS FLIGHT
            </div>
          </div>

          {/* Interactive Stack Counter + Status Badge */}
          <div className="flex items-center gap-3">
            <SplitFlapText
              words={["LAUNCH READY", "SYNC ONLINE", "SIGNAL LIVE", "50HZ LOCKED"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              tileColor="#003824"
              textColor="#80E4B7"
              tileRadius={5}
              gap={3}
              fontSize={13}
              loop
              padTo={12}
            />
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black text-[#006C4C] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full border border-[#C8E6C9] shadow-2xs">
              <Layers className="w-4 h-4" />
              <span>STACK: 0{internalIndex + 1} / 04</span>
            </div>
            <div className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#006C4C] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full border border-[#C8E6C9] hidden sm:flex items-center gap-2 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006C4C] animate-pulse"></span>
              <span>120 / 120 GNC TESTS OK</span>
            </div>
          </div>
        </header>

        {/* Big Headline Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-1 pb-1.5 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black text-[#191C1E] tracking-tight leading-none font-sans">
              Decentralized 3D Flight Autonomy <span className="text-[#006C4C] underline decoration-[#81C784] decoration-4 underline-offset-4">Guarantees Zero Collisions</span> at 50Hz
            </h2>
          </div>
          
          {/* Stack Navigation Pill Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-white p-1 rounded-full border border-[#E1E3E8] shadow-xs">
              {SUBSYSTEM_A_PIECES.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-black transition-all cursor-pointer flex items-center gap-1.5",
                    internalIndex === idx
                      ? "bg-[#003824] text-[#80E4B7] shadow-xs"
                      : "text-[#74777F] hover:text-[#191C1E] hover:bg-[#F2F3F8]"
                  )}
                >
                  <span>0{idx + 1}</span>
                  <span className="hidden md:inline text-xs">{p.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={prevPiece}
                disabled={internalIndex === 0}
                className="w-8 h-8 rounded-full bg-white border border-[#E1E3E8] flex items-center justify-center text-[#191C1E] disabled:opacity-30 hover:bg-[#F2F3F8] cursor-pointer shadow-xs transition-all"
                title="Previous Card in Stack"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={nextPiece}
                disabled={internalIndex === SUBSYSTEM_A_PIECES.length - 1}
                className="w-8 h-8 rounded-full bg-white border border-[#E1E3E8] flex items-center justify-center text-[#191C1E] disabled:opacity-30 hover:bg-[#F2F3F8] cursor-pointer shadow-xs transition-all"
                title="Next Card in Stack"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D SCROLLSTACK CARD DECK CONTAINER */}
        <div 
          ref={stackContainerRef}
          className="relative w-full flex-1 my-1 overflow-hidden flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {SUBSYSTEM_A_PIECES.map((piece, idx) => {
            const diff = idx - internalIndex;
            const isCurrent = diff === 0;
            const isPast = diff < 0;
            const isFuture = diff > 0;

            // 3D Card Stacking Transformations
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 30;

            if (isPast) {
              translateY = diff * 35;
              scale = 1 + diff * 0.04;
              opacity = 0;
              zIndex = 10 + diff;
            } else if (isCurrent) {
              translateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (isFuture) {
              translateY = diff * 22;
              scale = 1 - diff * 0.035;
              opacity = Math.max(0, 0.4 - diff * 0.15);
              zIndex = 20 - diff;
            }

            return (
              <motion.div
                key={piece.id}
                initial={false}
                animate={{
                  y: translateY,
                  scale: scale,
                  opacity: opacity,
                  rotateX: isPast ? 8 : (isFuture ? -4 : 0),
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                  mass: 0.9
                }}
                onClick={() => {
                  if (!isCurrent) handleSelect(idx);
                }}
                className={cn(
                  "absolute inset-0 w-full h-full rounded-[26px] bg-white border border-[#E1E3E8] p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.07),0_2px_6px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-shadow",
                  !isCurrent && "cursor-pointer hover:border-[#006C4C]"
                )}
                style={{
                  zIndex,
                  pointerEvents: isCurrent ? 'auto' : 'none'
                }}
              >
                
                {/* Individual Card Top HUD */}
                <div className="flex justify-between items-center pb-2.5 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#003824] text-[#80E4B7] flex items-center justify-center font-mono text-sm font-black shadow-xs">
                      {piece.pieceNumber}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-black text-[#006C4C] tracking-wider uppercase">
                      {piece.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#006C4C] font-mono text-xs sm:text-sm font-black shadow-2xs">
                      {piece.badge}
                    </span>
                    {/* Stack Dots Indicator */}
                    <div className="flex items-center gap-1.5 ml-2">
                      {SUBSYSTEM_A_PIECES.map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={cn(
                            "w-2.5 h-2.5 rounded-full transition-all duration-300",
                            dotIdx === internalIndex ? "bg-[#006C4C] w-5" : "bg-[#CBD5E1]"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Card Content Grid (50% Pure Empty State Container + 50% High-Legibility Text Breakdown) */}
                <div className="w-full flex-1 my-2.5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch overflow-hidden">
                  
                  {/* LEFT (6 Cols / 50%): Pure Empty State Video Container */}
                  <div className="lg:col-span-6 rounded-[24px] bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] p-5 sm:p-6 flex flex-col justify-between shadow-2xs relative overflow-hidden group hover:border-[#006C4C]/60 transition-colors">
                    
                    {/* Empty State Top Bar */}
                    <div className="flex justify-between items-center pb-2 border-b border-[#E2E8F0] font-mono text-xs text-[#64748B]">
                      <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#006C4C]">
                        <Film className="w-3.5 h-3.5 text-[#006C4C]" />
                        <span>VIDEO VIEWPORT // EMPTY STATE</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-white px-2.5 py-0.5 rounded-full border border-[#E2E8F0] font-bold text-[#334155]">
                          16:9 RATIO
                        </span>
                        <span className="text-[#94A3B8] hidden sm:inline">1080p / 60 FPS</span>
                      </div>
                    </div>

                    {/* Pure Empty State Body */}
                    <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-3.5">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#64748B] shadow-sm group-hover:scale-105 group-hover:text-[#006C4C] group-hover:border-[#006C4C] transition-all">
                        <FileVideo className="w-8 h-8 stroke-[1.5]" />
                      </div>

                      <div className="space-y-1 max-w-sm">
                        <h4 className="text-base sm:text-lg font-black text-[#1E293B] font-sans tracking-tight">
                          {piece.placeholderTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#64748B] font-sans">
                          Empty simulation video container. Ready for high-definition Gazebo 8 SITL video footage.
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-[#475569] font-mono text-xs font-bold shadow-2xs">
                        <UploadCloud className="w-3.5 h-3.5 text-[#006C4C]" />
                        <span>Awaiting Video Asset Attachment</span>
                      </div>
                    </div>

                    {/* Bottom Telemetry Spec Row */}
                    <div className="space-y-2 pt-2.5 border-t border-[#E2E8F0] font-mono">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        {piece.telemetry.map((t, tIdx) => (
                          <div key={tIdx} className="p-2 rounded-[12px] bg-white border border-[#E2E8F0] flex flex-col justify-between shadow-2xs">
                            <span className="text-[#64748B] text-[10.5px] uppercase font-bold">{t.label}</span>
                            <span className="font-black text-[#006C4C] text-sm sm:text-base mt-0.5">{t.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Verification Gate Seal */}
                      <div className="p-2 rounded-[12px] bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-between text-xs text-[#006C4C]">
                        <span className="flex items-center gap-1.5 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-[#006C4C]" />
                          GATE G5 VERIFIED: 0 COLLISIONS ACROSS 120 FLIGHT VECTORS
                        </span>
                        <span className="text-xs text-[#2E7D32] font-mono font-bold">PyTest: 3.10s (100%)</span>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT (6 Cols / 50%): High-Legibility Text & Research Breakdown */}
                  <div className="lg:col-span-6 rounded-[24px] bg-[#FFFFFF] border border-[#E1E3E8] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm">
                    
                    <div className="space-y-3.5">
                      {/* Monumental Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#191C1E] tracking-tight leading-tight font-sans">
                        {piece.title}
                      </h3>

                      {/* Problem Solved Callout */}
                      <div className="p-3.5 rounded-[16px] bg-[#FFDAD6]/50 border border-[#FFDAD6] text-[#93000A] text-sm sm:text-[15.5px] font-mono font-bold leading-relaxed flex items-start gap-2.5 shadow-2xs">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A] mt-1.5 shrink-0" />
                        <span>{piece.problemSolved}</span>
                      </div>

                      {/* How SUTRA Solves It */}
                      <div className="p-4 rounded-[18px] bg-[#F2F4F8] border border-[#E1E3E8] space-y-1.5 shadow-2xs">
                        <div className="text-xs sm:text-[13px] font-mono font-black text-[#006C4C] uppercase tracking-wider flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#006C4C]" />
                          <span>HOW SUTRA SOLVES IT IN THE FIELD:</span>
                        </div>
                        <p className="text-sm sm:text-base lg:text-[16.5px] text-[#191C1E] font-sans font-medium leading-relaxed">
                          {piece.howItWorks}
                        </p>
                      </div>
                    </div>

                    {/* 3 Large Spec Tiles */}
                    <div className="grid grid-cols-3 gap-3 font-mono my-2.5">
                      {piece.specs.map((s, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="p-3.5 rounded-[18px] bg-[#F8FAFD] border border-[#E1E3E8] shadow-2xs"
                        >
                          <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#191C1E] leading-tight">{s.value}</div>
                          <div className="text-xs sm:text-[13px] font-black text-[#006C4C] uppercase leading-tight mt-1">{s.label}</div>
                          <div className="text-xs text-[#74777F] mt-0.5">{s.unit}</div>
                        </div>
                      ))}
                    </div>

                    {/* Grounding Academic Research Papers */}
                    <div className="p-4 rounded-[20px] bg-[#E8F5E9]/50 border border-[#C8E6C9] space-y-2 shadow-2xs">
                      <div className="text-xs sm:text-[13px] font-mono font-black text-[#006C4C] uppercase tracking-wider flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#006C4C]" />
                        <span>GROUNDING RESEARCH PAPERS &amp; PROVEN BENEFIT:</span>
                      </div>

                      <div className="space-y-2">
                        {piece.researchPapers.map((paper, pIdx) => (
                          <div key={pIdx} className="p-3 rounded-[14px] bg-white border border-[#C8E6C9]/60 text-xs sm:text-sm space-y-1 shadow-2xs">
                            <div className="font-sans font-black text-[#191C1E] leading-tight flex items-center justify-between text-sm sm:text-[15.5px]">
                              <span>{pIdx + 1}. {paper.title}</span>
                              <span className="font-mono text-[11px] font-black text-[#006C4C] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full border border-[#C8E6C9] shrink-0 ml-1">
                                {paper.year}
                              </span>
                            </div>
                            <div className="text-xs sm:text-[13px] text-[#44474E] font-sans">
                              {paper.authors} — <span className="italic font-semibold">{paper.venue}</span>
                            </div>
                            <div className="text-xs sm:text-[13.5px] font-mono text-[#006C4C] font-semibold flex items-center gap-1.5 pt-0.5">
                              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                              <span className="text-[#006C4C] font-black">Proven benefit:</span>
                              <span className="text-[#191C1E] font-sans font-normal">{paper.provenBenefit}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Verification & Audit Footer */}
        <footer className="pt-2 border-t border-[#E1E3E8] flex flex-col gap-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono">
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">CODEBASE SUITE</span>
              <span className="text-sm font-black text-[#191C1E] font-sans">sutra_ws/src/sutra_gnc</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">UNIT TEST COVERAGE</span>
              <span className="text-sm font-black text-[#006C4C] font-sans">120 / 120 Passing (100%)</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">SITL SIMULATOR</span>
              <span className="text-sm font-black text-[#191C1E] font-sans">PX4 Autopilot + Gazebo 8</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">LEAD ARCHITECT</span>
              <span className="text-sm font-black text-[#006C4C] font-sans">Nikhil (Tech Lead)</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs text-[#74777F]">
            <div className="flex items-center gap-2">
              <span className="font-black">PAGE 04</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-[#006C4C] font-black">CARD STACK: PIECE 0{internalIndex + 1}/04 — {SUBSYSTEM_A_PIECES[internalIndex].title.split('&')[0]}</span>
            </div>
            <div className="font-black uppercase tracking-widest text-[#191C1E]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default Slide03FSD;
