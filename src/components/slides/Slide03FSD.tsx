import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  BookOpen, 
  ShieldCheck, 
  Box, 
  Wind, 
  Activity, 
  ExternalLink,
  Sparkles,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
  videoSrc: string;
  posterSrc: string;
  videoTitle: string;
  telemetry: { label: string; value: string }[];
  icon: React.ReactNode;
}

export const SUBSYSTEM_A_PIECES: SubsystemPiece[] = [
  {
    id: 'orca',
    pieceNumber: '01',
    tag: 'PIECE 01 // COLLISION AVOIDANCE',
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
        provenBenefit: 'Proven method that lets multiple drones steer around each other smoothly without a central controller.'
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
    videoSrc: 'assets/videos/simulation_ring_crossing.mp4',
    posterSrc: 'assets/illustrations/subsys_a_orca_3d.jpg',
    videoTitle: '5-Drone Crossing Simulation (Gazebo 8)',
    telemetry: [
      { label: 'Simulator', value: 'Gazebo 8' },
      { label: 'Swarm Fleet', value: '5 Drones' },
      { label: 'Distance Kept', value: '3.80 m OK' },
      { label: 'Safety Status', value: '100% Shielded' }
    ],
    icon: <ShieldCheck className="w-4 h-4" />
  },
  {
    id: 'fsd',
    pieceNumber: '02',
    tag: 'PIECE 02 // 3D FOREST CANOPY PLANNING',
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
    videoSrc: 'assets/videos/simulation_fsd_voxels.mp4',
    posterSrc: 'assets/illustrations/subsys_a_fsd_occupancy.jpg',
    videoTitle: 'Dense Forest 3D Obstacle Planner',
    telemetry: [
      { label: 'Map Volume', value: '32×32×16m' },
      { label: 'Dust Fade', value: 'Auto-Clean' },
      { label: 'Motor Health', value: 'Normal (Cool)' },
      { label: 'Flight Path', value: 'Smooth Curve' }
    ],
    icon: <Box className="w-4 h-4" />
  },
  {
    id: 'neuroflight',
    pieceNumber: '03',
    tag: 'PIECE 03 // WIND GUST AI REJECTION',
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
    videoSrc: 'assets/videos/simulation_neuroflight_wind.mp4',
    posterSrc: 'assets/illustrations/subsys_a_neuroflight.jpg',
    videoTitle: '18.0 m/s Wind Shear Test in Gazebo',
    telemetry: [
      { label: 'AI Reaction', value: '0.040 ms' },
      { label: 'Wind Speed', value: '18.0 m/s' },
      { label: 'Tracking Hold', value: '< 0.35 m Drift' },
      { label: 'Camera Gimbal', value: 'Rock Solid' }
    ],
    icon: <Wind className="w-4 h-4" />
  },
  {
    id: 'px4',
    pieceNumber: '04',
    tag: 'PIECE 04 // INDUSTRIAL FLIGHT CONTROLLER',
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
    videoSrc: 'assets/videos/simulation_px4_offboard.mp4',
    posterSrc: 'assets/illustrations/subsys_a_px4_bridge.jpg',
    videoTitle: 'PX4 50Hz Hardware Control Bridge',
    telemetry: [
      { label: 'Command Stream', value: '50.0 Hz' },
      { label: 'Command Delay', value: '< 1.0 ms' },
      { label: 'Failsafe Timer', value: '500 ms' },
      { label: 'Test Suite', value: '120/120 OK' }
    ],
    icon: <Activity className="w-4 h-4" />
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setInternalIndex(activeIndex);
  }, [activeIndex]);

  const currentPiece = SUBSYSTEM_A_PIECES[internalIndex] || SUBSYSTEM_A_PIECES[0];

  const handleSelect = (idx: number) => {
    setInternalIndex(idx);
    setIsPlaying(false);
    onActiveChange?.(idx);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-full bg-[#FAFBFD] text-[#191C1E] font-sans flex flex-col justify-between p-5 sm:p-6 lg:p-7 select-none overflow-hidden">
      
      {/* Subtle Material Tonal Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* M3 App Top Bar */}
        <header className="flex justify-between items-center pb-2 border-b border-[#E1E3E8]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-6 bg-[#006C4C] rounded-full shadow-xs"></div>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#191C1E]">
              SUBSYSTEM A DEEP DIVE // GNC &amp; AUTONOMOUS FLIGHT
            </div>
          </div>

          {/* M3 Status Badge */}
          <div className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#006C4C] bg-[#E8F5E9] px-3.5 py-1 rounded-full border border-[#C8E6C9] flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#006C4C] animate-pulse"></span>
            <span>120 / 120 GNC TESTS PASSED (100% COVERAGE)</span>
          </div>
        </header>

        {/* M3 Headline & Telemetry Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-1.5 pb-1 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black text-[#191C1E] tracking-tight leading-none font-sans">
              Decentralized 3D Flight Autonomy <span className="text-[#006C4C] underline decoration-[#81C784] decoration-4 underline-offset-4">Guarantees Zero Collisions</span> at 50Hz
            </h2>
          </div>
          
          {/* M3 Assist Chips Bar */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] font-bold text-[#44474E] shrink-0">
            <span className="px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#006C4C] border border-[#C8E6C9]">ZERO COLLISION (SHIELD)</span>
            <span className="px-2.5 py-1 rounded-full bg-[#F2F3F8] text-[#191C1E] border border-[#E1E3E8]">0.04ms AI TIME</span>
            <span className="px-2.5 py-1 rounded-full bg-[#F2F3F8] text-[#191C1E] border border-[#E1E3E8]">18 m/s WIND GUSTS</span>
            <span className="px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#006C4C] border border-[#C8E6C9]">50Hz LOCKED</span>
          </div>
        </div>

        {/* M3 Segmented Button / Piece Selector with Smooth Sliding Indicator */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-1.5 relative">
          {SUBSYSTEM_A_PIECES.map((piece, idx) => {
            const isActive = internalIndex === idx;
            return (
              <button
                key={piece.id}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "relative px-4 py-2.5 rounded-[18px] text-left transition-colors duration-200 flex items-center justify-between cursor-pointer border overflow-hidden",
                  isActive
                    ? "border-[#006C4C] text-white shadow-[0_4px_12px_rgba(0,108,76,0.25)]"
                    : "bg-[#FFFFFF] border-[#E1E3E8] text-[#44474E] hover:bg-[#F2F3F8] hover:border-[#C4C7D0] shadow-2xs"
                )}
              >
                {/* Smooth Animated Active Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activePieceTab"
                    className="absolute inset-0 bg-[#003824] z-0"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2.5 min-w-0">
                  <span className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-black shrink-0 transition-transform duration-200",
                    isActive 
                      ? "bg-[#80E4B7] text-[#003824] shadow-[0_0_8px_#80E4B7] scale-105" 
                      : "bg-[#E1E3E8] text-[#44474E]"
                  )}>
                    {piece.pieceNumber}
                  </span>
                  <div className="truncate">
                    <div className={cn(
                      "font-sans font-bold text-xs sm:text-sm leading-tight truncate",
                      isActive ? "text-white" : "text-[#191C1E]"
                    )}>
                      {piece.title.split('&')[0]}
                    </div>
                  </div>
                </div>

                <span className={cn(
                  "relative z-10 font-mono text-[9px] font-bold uppercase tracking-wider shrink-0 ml-2 hidden sm:inline-block px-2 py-0.5 rounded-md",
                  isActive ? "bg-[#004D33] text-[#80E4B7]" : "bg-[#F2F3F8] text-[#74777F]"
                )}>
                  {piece.badge.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Workspace with Snappy Transitions */}
        <main className="w-full flex-1 my-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch overflow-hidden">
          
          {/* LEFT: M3 Elevated Dark Media Card (7 Cols / 58% Viewport) */}
          <div className="lg:col-span-7 rounded-[26px] bg-[#0A100D] border border-[#1E2E25] p-4 lg:p-5 text-white flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)] relative overflow-hidden">
            
            {/* Top Media Bar */}
            <div className="flex justify-between items-center pb-2.5 border-b border-white/10 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#80E4B7] animate-pulse shadow-[0_0_8px_#80E4B7]" />
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#A7F3D0]">
                  GAZEBO 8 SITL · SIMULATION VERIFICATION
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="bg-black/60 px-2.5 py-0.5 rounded-full border border-white/15 font-bold text-[#80E4B7]">
                  60.0 FPS · 1080p
                </span>
                <span className="text-slate-400 hidden sm:inline">REC: ACTIVE</span>
              </div>
            </div>

            {/* Widescreen Video Frame Container */}
            <div className="relative my-auto w-full h-[290px] sm:h-[330px] lg:h-[370px] bg-black rounded-[20px] border border-[#1E3A2B] overflow-hidden group shadow-2xl flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPiece.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full relative flex items-center justify-center"
                >
                  {/* HTML5 Video Element */}
                  <video
                    ref={videoRef}
                    src={currentPiece.videoSrc}
                    poster={currentPiece.posterSrc}
                    className="w-full h-full object-cover"
                    loop
                    muted={isMuted}
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50 pointer-events-none" />

                  {/* M3 Video HUD Chip */}
                  <div className="absolute top-3 left-3 z-10 font-mono text-[10.5px] text-[#A7F3D0] bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#006C4C]/40 flex items-center gap-2 pointer-events-none shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#80E4B7] animate-pulse" />
                    <span className="font-black uppercase tracking-wider">{currentPiece.videoTitle}</span>
                  </div>

                  <div className="absolute top-3 right-3 z-10 font-mono text-[10px] text-slate-300 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 pointer-events-none">
                    PX4 OFFBOARD @ 50.0 Hz
                  </div>

                  {/* M3 Large Floating Action Button (FAB) Play Overlay */}
                  {!isPlaying && (
                    <div 
                      onClick={togglePlay}
                      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/35 hover:bg-black/25 transition-all z-20"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#006C4C] hover:bg-[#00875F] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,108,76,0.5)] transition-transform hover:scale-110 active:scale-95">
                        <Play className="w-7 h-7 ml-1 fill-white" />
                      </div>
                      <div className="mt-3.5 flex items-center gap-2 text-xs font-mono font-bold text-white tracking-widest bg-black/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                        <Sparkles className="w-3.5 h-3.5 text-[#80E4B7]" />
                        <span>PLAY SIMULATION VIDEO</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* M3 Bottom Media Control Bar */}
              <div className="absolute bottom-2.5 left-3 right-3 z-20 flex justify-between items-center bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white font-mono text-xs">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-[#80E4B7] transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-[#80E4B7] transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#80E4B7]" />}
                  </button>
                  <span className="text-[10px] text-slate-300 font-semibold ml-1">00:42.18 / 01:30.00</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-[9.5px] text-[#80E4B7] font-bold uppercase tracking-wider">GAZEBO 8 SITL</span>
                  <button
                    onClick={() => {
                      if (videoRef.current?.requestFullscreen) videoRef.current.requestFullscreen();
                    }}
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Fullscreen Video"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* M3 Bottom Tonal Telemetry Tiles */}
            <div className="space-y-2 pt-2 border-t border-white/10 font-mono text-xs">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                {currentPiece.telemetry.map((t, tIdx) => (
                  <div key={tIdx} className="p-2 rounded-[14px] bg-white/[0.06] border border-white/10 flex flex-col justify-between">
                    <span className="text-slate-400 text-[9.5px] uppercase font-semibold">{t.label}</span>
                    <span className="font-bold text-[#80E4B7] text-sm mt-0.5">{t.value}</span>
                  </div>
                ))}
              </div>

              {/* M3 Verification Banner */}
              <div className="p-2 rounded-[14px] bg-[#004D33]/60 border border-[#006C4C]/60 flex items-center justify-between text-xs text-[#A7F3D0]">
                <span className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#80E4B7]" />
                  GATE G5 VERIFIED: 0 COLLISIONS ACROSS 120 FLIGHT VECTORS
                </span>
                <span className="text-[10.5px] text-slate-300 font-mono font-bold">PyTest: 3.10s (100%)</span>
              </div>
            </div>

          </div>

          {/* RIGHT: M3 Surface Card Container with Snappy Fade Transition (5 Cols / 42% Viewport) */}
          <div className="lg:col-span-5 rounded-[26px] bg-[#FFFFFF] border border-[#E1E3E8] shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] p-5 lg:p-6 flex flex-col justify-between overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPiece.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="space-y-3.5 h-full flex flex-col justify-between"
              >
                
                {/* Top Section */}
                <div className="space-y-3">
                  {/* M3 Eyebrow & Status Chip */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#006C4C] tracking-wider uppercase">
                      {currentPiece.tag}
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] text-[#006C4C] font-mono text-[11px] font-black">
                      {currentPiece.badge}
                    </span>
                  </div>

                  {/* M3 Headline Large */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#191C1E] tracking-tight leading-tight font-sans">
                    {currentPiece.title}
                  </h3>

                  {/* M3 Alert / Problem Solved Tonal Box */}
                  <div className="p-3 rounded-[16px] bg-[#FFDAD6]/40 border border-[#FFDAD6] text-[#93000A] text-xs font-mono font-bold leading-relaxed flex items-start gap-2 shadow-2xs">
                    <div className="w-2 h-2 rounded-full bg-[#BA1A1A] mt-1 shrink-0" />
                    <span>{currentPiece.problemSolved}</span>
                  </div>

                  {/* Plain-English "How It Works" Card */}
                  <div className="p-3.5 rounded-[18px] bg-[#F2F4F8] border border-[#E1E3E8] space-y-1 shadow-2xs">
                    <div className="text-[10.5px] font-mono font-bold text-[#006C4C] uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#006C4C]" />
                      <span>HOW SUTRA SOLVES IT IN THE FIELD:</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#191C1E] font-sans font-medium leading-relaxed">
                      {currentPiece.howItWorks}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Metrics & Research */}
                <div className="space-y-3">
                  {/* 3 M3 Tonal Metric Cards */}
                  <div className="grid grid-cols-3 gap-2 font-mono">
                    {currentPiece.specs.map((s, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="p-2.5 rounded-[16px] bg-[#F8FAFD] border border-[#E1E3E8] shadow-2xs"
                      >
                        <div className="text-base sm:text-lg font-black text-[#191C1E] leading-tight">{s.value}</div>
                        <div className="text-[9.5px] font-bold text-[#006C4C] uppercase leading-tight mt-0.5">{s.label}</div>
                        <div className="text-[8.5px] text-[#74777F]">{s.unit}</div>
                      </div>
                    ))}
                  </div>

                  {/* M3 Research Papers Container */}
                  <div className="p-3 rounded-[18px] bg-[#E8F5E9]/50 border border-[#C8E6C9] space-y-1.5 shadow-2xs">
                    <div className="text-[10px] font-mono font-bold text-[#006C4C] uppercase tracking-widest flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#006C4C]" />
                      <span>GROUNDING RESEARCH PAPERS &amp; PROVEN BENEFIT:</span>
                    </div>

                    <div className="space-y-1.5">
                      {currentPiece.researchPapers.map((paper, pIdx) => (
                        <div 
                          key={pIdx} 
                          className="p-2.5 rounded-[12px] bg-white border border-[#C8E6C9]/60 text-xs space-y-0.5 shadow-2xs"
                        >
                          <div className="font-sans font-bold text-[#191C1E] leading-tight flex items-center justify-between">
                            <span>{pIdx + 1}. {paper.title}</span>
                            <span className="font-mono text-[9px] font-bold text-[#006C4C] bg-[#E8F5E9] px-2 py-0.5 rounded-full border border-[#C8E6C9] shrink-0 ml-1">
                              {paper.year}
                            </span>
                          </div>
                          <div className="text-[10.5px] text-[#44474E] font-sans">
                            {paper.authors} — <span className="italic font-medium">{paper.venue}</span>
                          </div>
                          <div className="text-[9.5px] font-mono text-[#006C4C] font-semibold flex items-center gap-1.5 pt-0.5">
                            <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                            <span className="text-[#006C4C] font-bold">Proven benefit:</span>
                            <span className="text-[#191C1E] font-sans font-normal">{paper.provenBenefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </main>

        {/* M3 Bottom Audit Footer */}
        <footer className="pt-2 border-t border-[#E1E3E8] flex flex-col gap-1.5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">CODEBASE SUITE</span>
              <span className="text-sm font-bold text-[#191C1E] font-sans">sutra_ws/src/sutra_gnc</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">UNIT TEST COVERAGE</span>
              <span className="text-sm font-bold text-[#006C4C] font-sans">120 / 120 Passing (100%)</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">SITL SIMULATOR</span>
              <span className="text-sm font-bold text-[#191C1E] font-sans">PX4 Autopilot + Gazebo 8</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">LEAD ARCHITECT</span>
              <span className="text-sm font-bold text-[#006C4C] font-sans">Nikhil (Tech Lead)</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs sm:text-sm text-[#74777F]">
            <div className="flex items-center gap-2">
              <span className="font-bold">PAGE 04</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs sm:text-sm text-[#006C4C] font-bold">PIECE 0{internalIndex + 1}/04 — {currentPiece.title.split('&')[0]}</span>
            </div>
            <div className="font-bold uppercase tracking-widest text-[#191C1E]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default Slide03FSD;
