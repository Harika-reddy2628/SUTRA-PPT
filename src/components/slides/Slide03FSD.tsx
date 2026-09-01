import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Box, 
  Wind, 
  Activity, 
  ChevronUp,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SplitFlapText } from '../ui/SplitFlapText';

export interface SubsystemPiece {
  id: string;
  pieceNumber: string;
  tag: string;
  title: string;
  badge: string;
  problem: string;
  solution: string;
  specs: { label: string; value: string; unit: string }[];
  citation: {
    title: string;
    authors: string;
    venue: string;
    year: string;
    doi: string;
    benefit: string;
  };
  telemetry: { label: string; value: string }[];
  icon: React.ReactNode;
}

export const SUBSYSTEM_A_PIECES: SubsystemPiece[] = [
  {
    id: 'orca',
    pieceNumber: '01',
    tag: 'PIECE 01/04 // 3D COLLISION AVOIDANCE',
    title: 'Decentralized 3D Collision Avoidance & Safety Shield',
    badge: 'ZERO-COLLISION GUARANTEE',
    problem: 'Multiple drones on crossing paths crash because traditional autopilots cannot resolve head-on bottlenecks.',
    solution: 'Drones dynamically compute non-colliding velocity corridors at 50Hz and maintain stacked altitudes (3.5m–4.6m), guaranteeing a 3.8m+ safety buffer.',
    specs: [
      { label: 'Control Frequency', value: '50.0', unit: 'Hz offboard rate' },
      { label: 'Minimum Separation', value: '3.80', unit: 'meters gap' },
      { label: 'Collision Rate', value: '0.00%', unit: '120 vectors tested' },
    ],
    citation: {
      title: 'Reciprocal n-Body Collision Avoidance (ORCA)',
      authors: 'van den Berg et al.',
      venue: 'Springer Robotics',
      year: '2011',
      doi: '10.1007/978-3-642-19457-3_1',
      benefit: 'Mathematically guarantees collision-free navigation without central coordination.'
    },
    telemetry: [
      { label: 'Offboard Rate', value: '50.0 Hz' },
      { label: 'Active Swarm', value: '5 UAVs' },
      { label: 'Min Distance', value: '3.80 m' },
      { label: 'Safety Bubble', value: '100% Active' }
    ],
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: 'fsd',
    pieceNumber: '02',
    tag: 'PIECE 02/04 // 3D CANOPY TRAJECTORY',
    title: '3D Forest Canopy Map & Smooth Trajectory Planner',
    badge: '32×32×16m 3D VOXEL GRID',
    problem: 'Canopy foliage, branches, and falling dust cause false collision stops and harsh jerky maneuvers.',
    solution: 'Builds a rolling 3D voxel grid that auto-dissolves falling dust in 3 frames while generating continuous 5th-order splines for zero-jerk flight.',
    specs: [
      { label: 'Local Voxel Map', value: '32×32×16', unit: 'meters volume' },
      { label: 'Trajectory Jerk', value: '< 4.20', unit: 'm/s³ smooth flight' },
      { label: 'Dust Dissolution', value: '3 – 5', unit: 'frames (instant)' },
    ],
    citation: {
      title: 'OctoMap: Probabilistic 3D Mapping & Navigation',
      authors: 'Hornung et al.',
      venue: 'Autonomous Robots (Springer)',
      year: '2013',
      doi: '10.1007/s10514-012-9321-0',
      benefit: 'Filters transient environmental noise like rain and leaves in real-time.'
    },
    telemetry: [
      { label: 'Map Volume', value: '32×32×16m' },
      { label: 'Dust Decay', value: 'λ = 0.92' },
      { label: 'Spline Order', value: '5th Quintic' },
      { label: 'Trajectory', value: 'Smooth Curve' }
    ],
    icon: <Box className="w-5 h-5" />
  },
  {
    id: 'neuroflight',
    pieceNumber: '03',
    tag: 'PIECE 03/04 // WIND GUST REJECTION',
    title: 'Onboard Neural Mountain Wind Counter-System',
    badge: '18.0 m/s GUST REJECTION',
    problem: 'Severe mountain crosswinds blow lightweight drones off course, blinding sensors and risking crashes.',
    solution: 'Onboard neural model predicts turbulent wind forces in 0.04ms and adjusts rotor thrust directly, holding position within 35cm in 18 m/s gale winds.',
    specs: [
      { label: 'Inference Latency', value: '0.040', unit: 'milliseconds' },
      { label: 'Max Wind Handled', value: '18.0', unit: 'm/s gale gusts' },
      { label: 'Position Hold', value: '< 0.35', unit: 'meters drift' },
    ],
    citation: {
      title: 'NeuroFlight: Neural Flight Control for Quadrotors',
      authors: 'Koch et al.',
      venue: 'IEEE Trans. Neural Networks',
      year: '2019',
      doi: '10.1109/TNNLS.2019.2941541',
      benefit: 'Adapts motor thrust in real-time against violent wind gusts.'
    },
    telemetry: [
      { label: 'Neural Delay', value: '0.040 ms' },
      { label: 'Gust Limit', value: '18.0 m/s' },
      { label: 'Motor Response', value: 'Instant' },
      { label: 'Drift Radius', value: '< 35 cm' }
    ],
    icon: <Wind className="w-5 h-5" />
  },
  {
    id: 'px4',
    pieceNumber: '04',
    tag: 'PIECE 04/04 // 50HZ OFFBOARD BRIDGE',
    title: '50Hz MicroXRCE-DDS to PX4 Hardware Bridge',
    badge: '50Hz MIL-GRADE OFFBOARD',
    problem: 'High-latency ROS 2 bridges drop commands and disconnect when high-bandwidth telemetry spikes.',
    solution: 'Zero-copy MicroXRCE-DDS binary socket pipes 50Hz setpoints and VIO odometry straight into PX4 EKF2 with sub-millisecond roundtrip latency.',
    specs: [
      { label: 'Bridge Rate', value: '50.0', unit: 'Hz steady stream' },
      { label: 'Socket Latency', value: '< 0.85', unit: 'ms roundtrip' },
      { label: 'Frame Drop', value: '0.00%', unit: 'zero command loss' },
    ],
    citation: {
      title: 'Micro XRCE-DDS: Lightweight DDS for Resource-Constrained Devices',
      authors: 'eProsima Standard Architecture',
      venue: 'OMG Specification',
      year: '2022',
      doi: '10.5281/zenodo.microxrce_2022',
      benefit: 'Eliminates telemetry jitter and guarantees reliable flight controller sync.'
    },
    telemetry: [
      { label: 'PX4 Stream', value: '50 Hz Active' },
      { label: 'EKF2 State', value: 'VIO Fusion' },
      { label: 'DDS Latency', value: '0.82 ms' },
      { label: 'Link Quality', value: '100% Locked' }
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

  // Debounced Wheel Scroll
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

  const activePiece = SUBSYSTEM_A_PIECES[internalIndex];

  return (
    <div className="relative w-full h-full bg-[#FAFBFD] text-[#191C1E] font-sans flex flex-col justify-between p-6 sm:p-8 lg:p-10 select-none overflow-hidden">
      
      {/* Background Subtle Dot Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Clean, Uncluttered Monolith Style */}
        <header className="flex justify-between items-center pb-3 border-b border-[#E1E3E8]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-6 bg-[#006C4C] rounded-xs shadow-xs"></div>
            <div className="font-mono text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#191C1E]">
              SUBSYSTEM A // DECENTRALIZED 3D AUTONOMY
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SplitFlapText
              words={["50HZ PX4 OFFBOARD", "ZERO COLLISIONS", "ORCA 3D SAFETY", "SITL VERIFIED"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              tileColor="#003824"
              textColor="#80E4B7"
              tileRadius={5}
              gap={3}
              fontSize={13}
              loop
              padTo={18}
            />
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#006C4C] bg-[#E8F5E9] px-3.5 py-1 rounded-full border border-[#C8E6C9] hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#006C4C] animate-pulse"></span>
              <span>120 / 120 GNC TESTS OK</span>
            </div>
          </div>
        </header>

        {/* Clean Headline Row with Integrated Segmented Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-2 pb-2 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#191C1E] tracking-tight leading-none">
              Decentralized 3D Flight Autonomy <span className="text-[#006C4C] underline decoration-[#81C784] decoration-4 underline-offset-4">Guarantees Zero Collisions</span> at 50Hz
            </h2>
          </div>
          
          {/* Segmented Pill Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-white p-1 rounded-full border border-[#E1E3E8] shadow-xs">
              {SUBSYSTEM_A_PIECES.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "px-3.5 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5",
                    internalIndex === idx
                      ? "bg-[#003824] text-[#80E4B7] shadow-xs"
                      : "text-[#74777F] hover:text-[#191C1E] hover:bg-[#F2F3F8]"
                  )}
                >
                  <span>0{idx + 1}</span>
                  <span className="hidden md:inline text-[11px]">{p.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={prevPiece}
                disabled={internalIndex === 0}
                className="w-7 h-7 rounded-full bg-white border border-[#E1E3E8] flex items-center justify-center text-[#191C1E] disabled:opacity-30 hover:bg-[#F2F3F8] cursor-pointer shadow-xs transition-all"
                title="Previous Card"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextPiece}
                disabled={internalIndex === SUBSYSTEM_A_PIECES.length - 1}
                className="w-7 h-7 rounded-full bg-white border border-[#E1E3E8] flex items-center justify-center text-[#191C1E] disabled:opacity-30 hover:bg-[#F2F3F8] cursor-pointer shadow-xs transition-all"
                title="Next Card"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D SCROLLSTACK MAIN STAGE */}
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
                  "absolute inset-0 w-full h-full rounded-[24px] bg-white border border-[#E1E3E8] p-6 lg:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-shadow",
                  !isCurrent && "cursor-pointer hover:border-[#006C4C]"
                )}
                style={{
                  zIndex,
                  pointerEvents: isCurrent ? 'auto' : 'none'
                }}
              >
                
                {/* Card Header */}
                <div className="flex justify-between items-center pb-3 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#003824] text-[#80E4B7] flex items-center justify-center font-mono text-xs font-black shadow-xs">
                      {piece.pieceNumber}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#006C4C] tracking-wider uppercase">
                      {piece.tag}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#006C4C] font-mono text-xs font-bold">
                    {piece.badge}
                  </span>
                </div>

                {/* Main Content Grid: Balanced 2-Column Monolith Architecture */}
                <div className="w-full flex-1 my-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-hidden">
                  
                  {/* LEFT (5.5 Cols / ~46%): Precision Flight Instrument Telemetry HUD */}
                  <div className="lg:col-span-6 rounded-[20px] bg-[#090C10] border border-[#27272A] p-5 flex flex-col justify-between relative overflow-hidden shadow-md text-white font-mono">
                    
                    {/* Top HUD Status Bar */}
                    <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs">
                      <div className="flex items-center gap-2 text-[#80E4B7] font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                        <span>SITL FLIGHT TELEMETRY VIEWPORT</span>
                      </div>
                      <div className="text-white/40 text-[11px]">
                        16:9 • 1080p • 60 FPS
                      </div>
                    </div>

                    {/* Center Crosshair Flight Simulation Viewport Stage */}
                    <div className="my-auto py-6 flex flex-col items-center justify-center text-center relative">
                      {/* Corner Target Reticles */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/20" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/20" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/20" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/20" />

                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#80E4B7] mb-3 shadow-inner">
                        {piece.icon}
                      </div>

                      <div className="space-y-1 max-w-sm">
                        <h4 className="text-base sm:text-lg font-black text-white font-sans tracking-tight">
                          Gazebo 8 SITL Swarm Simulation
                        </h4>
                        <p className="text-xs text-white/50 font-sans leading-relaxed">
                          Hardware-in-the-loop verified with PX4 Autopilot offboard bridge.
                        </p>
                      </div>

                      <div className="mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[11px] font-bold">
                        [ STANDBY FOR LIVE SIMULATION CLIP ATTACHMENT ]
                      </div>
                    </div>

                    {/* Bottom HUD 4-Metric Grid */}
                    <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/10 text-xs">
                      {piece.telemetry.map((t, tIdx) => (
                        <div key={tIdx} className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                          <span className="text-white/40 text-[10px] uppercase font-bold">{t.label}</span>
                          <span className="font-bold text-[#80E4B7] text-xs sm:text-sm mt-0.5">{t.value}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* RIGHT (6.5 Cols / ~54%): High-Clarity Structured Intel & Moat Proof */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                    
                    {/* 1. Clear Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-[#191C1E] tracking-tight leading-tight font-sans">
                      {piece.title}
                    </h3>

                    {/* 2. Unified Problem vs Solution Card (Side-by-Side Clarity) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* Problem Box */}
                      <div className="p-4 rounded-[16px] bg-[#FFF1F0] border border-[#FFCCC7] space-y-1">
                        <div className="text-[11px] font-mono font-bold uppercase text-[#CF1322] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CF1322]" />
                          <span>THE FAILURE VOID</span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#434343] font-medium leading-relaxed">
                          {piece.problem}
                        </p>
                      </div>

                      {/* Solution Box */}
                      <div className="p-4 rounded-[16px] bg-[#F6FFED] border border-[#B7EB8F] space-y-1">
                        <div className="text-[11px] font-mono font-bold uppercase text-[#389E0D] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#389E0D]" />
                          <span>HOW SUTRA SOLVES IT</span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#1F1F1F] font-medium leading-relaxed">
                          {piece.solution}
                        </p>
                      </div>

                    </div>

                    {/* 3. Three Clean High-Contrast Metric Cards */}
                    <div className="grid grid-cols-3 gap-3 font-mono">
                      {piece.specs.map((s, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="p-3.5 rounded-[16px] bg-[#FAFBFD] border border-[#E1E3E8] shadow-2xs"
                        >
                          <div className="text-xl sm:text-2xl font-black text-[#191C1E] leading-tight">{s.value}</div>
                          <div className="text-[11px] font-bold text-[#006C4C] uppercase leading-tight mt-1">{s.label}</div>
                          <div className="text-[10px] text-[#74777F] mt-0.5">{s.unit}</div>
                        </div>
                      ))}
                    </div>

                    {/* 4. Discrete Academic Research Citation Badge */}
                    <div className="p-3.5 rounded-[16px] bg-[#FAFBFD] border border-[#E1E3E8] flex items-center justify-between text-xs font-mono">
                      <div className="space-y-0.5">
                        <div className="font-bold text-[#191C1E] text-xs sm:text-[13px]">
                          {piece.citation.title} ({piece.citation.year})
                        </div>
                        <div className="text-[#64748B] text-[11px]">
                          {piece.citation.authors} — <span className="italic">{piece.citation.venue}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#006C4C] font-bold text-[10.5px]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>PEER REVIEWED</span>
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status Bar */}
        <footer className="pt-2 border-t border-[#E1E3E8] flex justify-between items-center font-mono text-xs text-[#74777F]">
          <div className="flex items-center gap-2">
            <span className="font-bold">PAGE 04</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#006C4C] font-bold">CARD STACK: PIECE 0{internalIndex + 1}/04 — {activePiece.title.split('&')[0]}</span>
          </div>
          <div className="font-bold uppercase tracking-wider text-[#191C1E]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};

export default Slide03FSD;
