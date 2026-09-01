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
  Sparkles,
  Layers
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

// Rich Animated Tactical Simulation Canvas for Subsystem A
const TacticalSimulationStage: React.FC<{ pieceId: string }> = ({ pieceId }) => {
  return (
    <div className="relative w-full h-full min-h-[340px] lg:min-h-[380px] bg-[#070A0E] rounded-[22px] border border-[#1E293B] p-4 flex flex-col justify-between overflow-hidden shadow-2xl font-mono text-white select-none">
      
      {/* Background Radar Grid & Concentric Scanning Circles */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px), linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px, 32px 32px, 32px 32px',
        }}
      />

      {/* Top Tactical HUD Header */}
      <div className="relative z-10 flex justify-between items-center pb-2.5 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2 text-[#80E4B7] font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="tracking-wider">TACTICAL SIMULATION // GAZEBO 8 SITL</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-white/50">
          <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-[#38BDF8] border border-white/10 font-bold">
            50Hz OFFBOARD
          </span>
          <span className="hidden sm:inline">1080p • 60 FPS</span>
        </div>
      </div>

      {/* Center Dynamic SVG Stage Based on Selected Piece */}
      <div className="relative z-10 my-auto py-2 flex items-center justify-center">
        
        {/* PIECE 01: ORCA 3D Collision Avoidance Simulation */}
        {pieceId === 'orca' && (
          <div className="relative w-full max-w-[440px] h-[220px] flex items-center justify-center">
            
            {/* Animated Radar Sweep */}
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Concentric Safety Rings */}
              <circle cx="200" cy="100" r="85" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeDasharray="4 4" />
              <circle cx="200" cy="100" r="55" fill="none" stroke="rgba(56, 189, 248, 0.25)" />
              <circle cx="200" cy="100" r="25" fill="none" stroke="rgba(16, 185, 129, 0.3)" />

              {/* Crosshairs */}
              <line x1="20" y1="100" x2="380" y2="100" stroke="rgba(255,255,255,0.08)" />
              <line x1="200" y1="10" x2="200" y2="190" stroke="rgba(255,255,255,0.08)" />

              {/* Drone 1 (Alpha - Center Top) */}
              <g className="animate-pulse">
                <circle cx="160" cy="65" r="22" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="160" cy="65" r="5" fill="#10B981" />
                <text x="168" y="60" fill="#80E4B7" fontSize="9" fontWeight="bold">UAV-01 [3.5m]</text>
                <line x1="160" y1="65" x2="190" y2="45" stroke="#38BDF8" strokeWidth="1.5" markerEnd="url(#arrow)" />
              </g>

              {/* Drone 2 (Bravo - Center Right) */}
              <g>
                <circle cx="250" cy="85" r="22" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="250" cy="85" r="5" fill="#10B981" />
                <text x="258" y="80" fill="#80E4B7" fontSize="9" fontWeight="bold">UAV-02 [4.0m]</text>
                <line x1="250" y1="85" x2="280" y2="110" stroke="#38BDF8" strokeWidth="1.5" />
              </g>

              {/* Drone 3 (Charlie - Center Bottom) */}
              <g>
                <circle cx="210" cy="145" r="22" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="210" cy="145" r="5" fill="#10B981" />
                <text x="218" y="155" fill="#80E4B7" fontSize="9" fontWeight="bold">UAV-03 [4.6m]</text>
                <line x1="210" y1="145" x2="170" y2="165" stroke="#38BDF8" strokeWidth="1.5" />
              </g>

              {/* Drone 4 (Delta - Left) */}
              <g>
                <circle cx="110" cy="115" r="22" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="110" cy="115" r="5" fill="#10B981" />
                <text x="75" y="135" fill="#80E4B7" fontSize="9" fontWeight="bold">UAV-04 [3.8m]</text>
                <line x1="110" y1="115" x2="80" y2="90" stroke="#38BDF8" strokeWidth="1.5" />
              </g>

              {/* Distance Intersect Measurement Line */}
              <line x1="160" y1="65" x2="250" y2="85" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="185" y="66" width="56" height="14" rx="4" fill="#0F172A" stroke="#F59E0B" strokeWidth="0.8" />
              <text x="190" y="76" fill="#F59E0B" fontSize="8.5" fontWeight="bold">d = 3.82m</text>
            </svg>

            {/* Corner Live Status Pill */}
            <div className="absolute bottom-1 right-2 px-2.5 py-1 rounded-md bg-[#003824] border border-[#006C4C] text-[#80E4B7] text-[10px] font-bold flex items-center gap-1.5 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ORCA-3D: ZERO BOTTLENECK</span>
            </div>
          </div>
        )}

        {/* PIECE 02: 3D OctoMap Voxel Raymarching */}
        {pieceId === 'fsd' && (
          <div className="relative w-full max-w-[440px] h-[220px] flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Isometric 3D Voxel Grid Blocks */}
              <g opacity="0.85">
                {/* Tree/Canopy Voxels (Green/Amber) */}
                <polygon points="120,130 145,115 170,130 145,145" fill="rgba(16, 185, 129, 0.4)" stroke="#10B981" />
                <polygon points="120,130 120,155 145,170 145,145" fill="rgba(16, 185, 129, 0.25)" stroke="#10B981" />
                <polygon points="170,130 170,155 145,170 145,145" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" />

                <polygon points="260,110 285,95 310,110 285,125" fill="rgba(245, 158, 11, 0.4)" stroke="#F59E0B" />
                <polygon points="260,110 260,135 285,150 285,125" fill="rgba(245, 158, 11, 0.25)" stroke="#F59E0B" />
                <polygon points="310,110 310,135 285,150 285,125" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" />

                {/* Free Space Voxel (Cyan) */}
                <polygon points="190,80 215,65 240,80 215,95" fill="rgba(56, 189, 248, 0.2)" stroke="#38BDF8" strokeDasharray="2 2" />
              </g>

              {/* 5th-Order Quintic Spline Flight Trajectory */}
              <path d="M 60,150 Q 140,50 215,75 T 350,60" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 3" />

              {/* Drone On Trajectory */}
              <circle cx="215" cy="75" r="7" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="215" cy="75" r="18" fill="none" stroke="#80E4B7" strokeWidth="1" strokeDasharray="3 3" />
              <text x="180" y="50" fill="#80E4B7" fontSize="9" fontWeight="bold">DRONE [SPLINE LOCK]</text>

              {/* Decay Indicator */}
              <text x="60" y="175" fill="#94A3B8" fontSize="8.5">VOXEL MAP: 32×32×16m • DUST DECAY λ=0.92</text>
            </svg>

            <div className="absolute bottom-1 right-2 px-2.5 py-1 rounded-md bg-[#003824] border border-[#006C4C] text-[#80E4B7] text-[10px] font-bold flex items-center gap-1.5 shadow-md">
              <Box className="w-3.5 h-3.5" />
              <span>OCTOMAP: ZERO-JERK TRAJECTORY</span>
            </div>
          </div>
        )}

        {/* PIECE 03: NeuroFlight Wind Turbulence Counter */}
        {pieceId === 'neuroflight' && (
          <div className="relative w-full max-w-[440px] h-[220px] flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Wind Vector Streamlines (Red/Amber) */}
              <path d="M 30,50 L 140,65" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 20,95 L 150,105" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="4 4" />
              <path d="M 35,145 L 145,150" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
              
              <text x="30" y="40" fill="#EF4444" fontSize="9" fontWeight="bold">MOUNTAIN GALE: 18.0 m/s</text>

              {/* Quadrotor Cross Section Tilted */}
              <g transform="rotate(-12 210 100)">
                <rect x="160" y="96" width="100" height="8" rx="4" fill="#334155" stroke="#94A3B8" />
                <circle cx="170" cy="94" r="6" fill="#10B981" />
                <circle cx="250" cy="94" r="6" fill="#10B981" />
                
                {/* Neural Thrust Counter Vectors (Cyan Upward Arrows) */}
                <line x1="170" y1="94" x2="170" y2="55" stroke="#38BDF8" strokeWidth="3" markerEnd="url(#arrow)" />
                <line x1="250" y1="94" x2="250" y2="45" stroke="#38BDF8" strokeWidth="3" markerEnd="url(#arrow)" />
                <text x="155" y="40" fill="#38BDF8" fontSize="8.5" fontWeight="bold">NEURAL THRUST +14.2N</text>
              </g>

              {/* Position Stabilizer Error Ring */}
              <circle cx="210" cy="100" r="32" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />
              <text x="250" y="145" fill="#80E4B7" fontSize="8.5" fontWeight="bold">DRIFT &lt; 0.35m (0.04ms)</text>
            </svg>

            <div className="absolute bottom-1 right-2 px-2.5 py-1 rounded-md bg-[#003824] border border-[#006C4C] text-[#80E4B7] text-[10px] font-bold flex items-center gap-1.5 shadow-md">
              <Wind className="w-3.5 h-3.5" />
              <span>NEUROFLIGHT: 18 m/s GALE LOCKED</span>
            </div>
          </div>
        )}

        {/* PIECE 04: 50Hz MicroXRCE-DDS Hardware Bridge */}
        {pieceId === 'px4' && (
          <div className="relative w-full max-w-[440px] h-[220px] flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* High-Tech DDS Pipeline */}
              {/* Block 1: ROS 2 Humble Swarm Node */}
              <rect x="30" y="70" width="90" height="60" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="42" y="95" fill="#FFFFFF" fontSize="8.5" fontWeight="bold">ROS 2 Humble</text>
              <text x="46" y="110" fill="#38BDF8" fontSize="7.5">Swarm Agent</text>

              {/* Data Arrow 1 */}
              <line x1="120" y1="100" x2="160" y2="100" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />
              <text x="125" y="90" fill="#10B981" fontSize="7.5" fontWeight="bold">50Hz DDS</text>

              {/* Block 2: MicroXRCE Agent */}
              <rect x="160" y="65" width="85" height="70" rx="8" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
              <text x="170" y="92" fill="#80E4B7" fontSize="8.5" fontWeight="bold">MicroXRCE</text>
              <text x="175" y="105" fill="#94A3B8" fontSize="7.5">Zero-Copy</text>
              <text x="175" y="120" fill="#38BDF8" fontSize="7.5">&lt; 0.85ms</text>

              {/* Data Arrow 2 */}
              <line x1="245" y1="100" x2="285" y2="100" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2" />

              {/* Block 3: PX4 Autopilot EKF2 */}
              <rect x="285" y="70" width="85" height="60" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="298" y="95" fill="#FFFFFF" fontSize="8.5" fontWeight="bold">PX4 EKF2</text>
              <text x="296" y="110" fill="#F59E0B" fontSize="7.5">VIO Fusion</text>
            </svg>

            <div className="absolute bottom-1 right-2 px-2.5 py-1 rounded-md bg-[#003824] border border-[#006C4C] text-[#80E4B7] text-[10px] font-bold flex items-center gap-1.5 shadow-md">
              <Activity className="w-3.5 h-3.5" />
              <span>50Hz PX4 DDS: 0% PACKET LOSS</span>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Telemetry HUD Chips */}
      <div className="relative z-10 grid grid-cols-4 gap-2 pt-2.5 border-t border-white/10 text-xs">
        {SUBSYSTEM_A_PIECES.find(p => p.id === pieceId)?.telemetry.map((t, tIdx) => (
          <div key={tIdx} className="p-2 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <span className="text-white/40 text-[9.5px] uppercase font-bold">{t.label}</span>
            <span className="font-bold text-[#80E4B7] text-xs sm:text-[13px] mt-0.5">{t.value}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

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
    <div className="relative w-full h-full bg-[#FAFBFD] text-[#191C1E] font-sans flex flex-col justify-between p-4 sm:p-5 lg:p-6 select-none overflow-hidden">
      
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header: Elevated App Bar */}
        <header className="flex justify-between items-center pb-2.5 border-b border-[#E1E3E8]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-7 bg-[#006C4C] rounded-full shadow-xs"></div>
            <div className="font-mono text-sm sm:text-base font-black uppercase tracking-[0.25em] text-[#191C1E]">
              SUBSYSTEM A DEEP DIVE // DECENTRALIZED 3D GNC
            </div>
          </div>

          <div className="flex items-center gap-3">
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

        {/* Headline Row with Segmented Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-1 pb-1.5 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black text-[#191C1E] tracking-tight leading-none">
              Decentralized 3D Flight Autonomy <span className="text-[#006C4C] underline decoration-[#81C784] decoration-4 underline-offset-4">Guarantees Zero Collisions</span> at 50Hz
            </h2>
          </div>
          
          {/* Segmented Pill Navigation */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-white p-1 rounded-full border border-[#E1E3E8] shadow-xs">
              {SUBSYSTEM_A_PIECES.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-mono font-black transition-all cursor-pointer flex items-center gap-1.5",
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
                  "absolute inset-0 w-full h-full rounded-[28px] bg-white border border-[#E1E3E8] p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-shadow",
                  !isCurrent && "cursor-pointer hover:border-[#006C4C]"
                )}
                style={{
                  zIndex,
                  pointerEvents: isCurrent ? 'auto' : 'none'
                }}
              >
                
                {/* Individual Card Header */}
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

                {/* Main Content Grid: 50% Rich Tactical Simulation + 50% Structured Intel */}
                <div className="w-full flex-1 my-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch overflow-hidden">
                  
                  {/* LEFT (6 Cols / 50%): Rich Animated Tactical Simulation Stage */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <TacticalSimulationStage pieceId={piece.id} />
                  </div>

                  {/* RIGHT (6 Cols / 50%): High-Clarity Intel & Moat Proof */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                    
                    {/* Monumental Piece Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#191C1E] tracking-tight leading-tight font-sans">
                      {piece.title}
                    </h3>

                    {/* Side-by-Side Problem & Solution Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* Problem Box */}
                      <div className="p-3.5 rounded-[18px] bg-[#FFF1F0] border border-[#FFCCC7] space-y-1 shadow-2xs">
                        <div className="text-xs font-mono font-black uppercase text-[#CF1322] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#CF1322]" />
                          <span>THE FAILURE VOID</span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#434343] font-medium leading-relaxed">
                          {piece.problem}
                        </p>
                      </div>

                      {/* Solution Box */}
                      <div className="p-3.5 rounded-[18px] bg-[#F6FFED] border border-[#B7EB8F] space-y-1 shadow-2xs">
                        <div className="text-xs font-mono font-black uppercase text-[#389E0D] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#389E0D]" />
                          <span>HOW SUTRA SOLVES IT</span>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#1F1F1F] font-medium leading-relaxed">
                          {piece.solution}
                        </p>
                      </div>

                    </div>

                    {/* 3 High-Impact Spec Tiles */}
                    <div className="grid grid-cols-3 gap-3 font-mono">
                      {piece.specs.map((s, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="p-3 rounded-[18px] bg-[#F8FAFD] border border-[#E1E3E8] shadow-2xs"
                        >
                          <div className="text-xl sm:text-2xl font-black text-[#191C1E] leading-tight">{s.value}</div>
                          <div className="text-[11px] font-black text-[#006C4C] uppercase leading-tight mt-1">{s.label}</div>
                          <div className="text-[10px] text-[#74777F] mt-0.5">{s.unit}</div>
                        </div>
                      ))}
                    </div>

                    {/* Academic Authority Citation Badge */}
                    <div className="p-3 rounded-[18px] bg-[#E8F5E9]/60 border border-[#C8E6C9] flex items-center justify-between text-xs font-mono shadow-2xs">
                      <div className="space-y-0.5">
                        <div className="font-bold text-[#191C1E] text-xs sm:text-[13px]">
                          {piece.citation.title} ({piece.citation.year})
                        </div>
                        <div className="text-[#44474E] text-[11px]">
                          {piece.citation.authors} — <span className="italic font-semibold">{piece.citation.venue}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C8E6C9] text-[#006C4C] font-black text-xs shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-[#006C4C]" />
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
            <span className="font-black">PAGE 04</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-[#006C4C] font-black">CARD STACK: PIECE 0{internalIndex + 1}/04 — {activePiece.title.split('&')[0]}</span>
          </div>
          <div className="font-black uppercase tracking-widest text-[#191C1E]">TEAM OFFGRID — PROJECT SUTRA</div>
        </footer>

      </div>

    </div>
  );
};

export default Slide03FSD;
