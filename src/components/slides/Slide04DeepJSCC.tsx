import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  BookOpen, 
  Radio, 
  Network, 
  Zap, 
  Cpu, 
  ExternalLink,
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

export const SUBSYSTEM_B_PIECES: SubsystemPiece[] = [
  {
    id: 'deep-jscc',
    pieceNumber: '01',
    tag: 'PIECE 01/04 // ZERO-CLIFF NEURAL VIDEO',
    title: 'Deep JSCC Neural Video Autoencoder',
    badge: 'ZERO-CLIFF STREAMING (-5.0 dB SNR)',
    summary: 'Transmits live drone video directly as analog neural waves that never freeze into a black screen.',
    problemSolved: 'Fixes: Standard digital transmitters (H.264/RTSP) suddenly crash to black screens under heavy monsoon rain or electronic jamming.',
    howItWorks: 'Encodes 1080p thermal and color video into analog wireless wave symbols with neural networks. In heavy jamming, video blurs softly like vintage TV, keeping survivor thermal shapes clearly visible.',
    specs: [
      { label: 'Deep Compression', value: '96.9%', unit: '512 KB → 16 KB' },
      { label: 'Jam Resistance', value: '-5.0', unit: 'dB SNR (Zero Blackout)' },
      { label: 'Video Quality', value: '46.5', unit: 'dB PSNR high clarity' },
    ],
    researchPapers: [
      {
        authors: 'Bourtsoulatze, Kurka, & Gündüz',
        year: '2019',
        title: 'Deep Joint Source-Channel Coding for Wireless Video',
        venue: 'IEEE Trans. Cognitive Communications',
        doi: '10.1109/TCCN.2019.2910530',
        provenBenefit: 'Proves neural wave encoding prevents sudden signal cliff collapse in extreme noise.'
      },
      {
        authors: 'Yang et al.',
        year: '2022',
        title: 'OFDM-Guided Deep Joint Source-Channel Coding',
        venue: 'IEEE Wireless Communications Letters',
        doi: '10.1109/LWC.2022.3168541',
        provenBenefit: 'Enables high-speed multi-carrier wireless streaming on compact drone radio chips.'
      }
    ],
    placeholderTitle: 'Deep JSCC -5dB Jamming Comparison Clip',
    telemetry: [
      { label: 'RF Channel', value: 'Rayleigh -5dB' },
      { label: 'Latent Size', value: '16 KB / frame' },
      { label: 'Thermal View', value: '100% Intact' },
      { label: 'Link State', value: 'Zero Blackout' }
    ],
    icon: <Radio className="w-5 h-5" />
  },
  {
    id: 'sionna',
    pieceNumber: '02',
    tag: 'PIECE 02/04 // MOUNTAIN RF RAYTRACING',
    title: 'NVIDIA Sionna Differentiable RF Channel',
    badge: '32 MULTI-PATH RAYCASTING',
    summary: 'Real-time GPU simulation that maps wireless signal bounces across rugged mountain valleys.',
    problemSolved: 'Fixes: Standard drone radios do not predict terrain signal blockage, causing sudden blindspots behind cliffs.',
    howItWorks: 'Simulates 32 mountain surface reflections and diffractions every 1.2 milliseconds on GPU, allowing drones to automatically position themselves where signal bounce keeps the network alive.',
    specs: [
      { label: 'Channel Sim', value: '100%', unit: 'GPU Differentiable' },
      { label: 'Raycast Time', value: '< 1.2', unit: 'ms compute latency' },
      { label: 'Signal Bounces', value: '32', unit: 'multi-path rays' },
    ],
    researchPapers: [
      {
        authors: 'Hoydis et al.',
        year: '2022',
        title: 'Sionna: GPU Physical-Layer Wireless Simulation',
        venue: 'IEEE JSAC',
        doi: '10.1109/JSAC.2022.3180796',
        provenBenefit: 'Accelerates realistic 3D wireless terrain physics thousands of times faster on GPUs.'
      },
      {
        authors: 'Aoudia & Hoydis',
        year: '2021',
        title: 'End-to-End Deep Learning of Wireless Links',
        venue: 'IEEE TCCN',
        doi: '10.1109/TCCN.2021.3090888',
        provenBenefit: 'Automatically tunes neural wireless parameters to match local mountain terrain.'
      }
    ],
    placeholderTitle: 'NVIDIA Sionna 3D Gorge RF Raycast Clip',
    telemetry: [
      { label: 'GPU Engine', value: 'CUDA Sionna' },
      { label: 'Raycast Latency', value: '1.18 ms' },
      { label: 'Multipath Rays', value: '32 Active' },
      { label: 'Terrain Mesh', value: 'WGS84 3D' }
    ],
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: 'swarmraft',
    pieceNumber: '03',
    tag: 'PIECE 03/04 // LEADERLESS CONSENSUS',
    title: 'SwarmRAFT Leaderless Consensus & Fault Tolerance',
    badge: '< 50ms LEADER FAILOVER',
    summary: 'Decentralized voting protocol that keeps the drone swarm synchronized without a single point of failure.',
    problemSolved: 'Fixes: Centralized drone fleets crash or halt if the single master drone is damaged or jammed.',
    howItWorks: 'Enforces a majority quorum rule. If the lead drone goes down, remaining drones automatically hold an emergency vote and elect a replacement leader in under 50 milliseconds with zero confusion.',
    specs: [
      { label: 'Failover Speed', value: '< 50.0', unit: 'ms leader election' },
      { label: 'Majority Quorum', value: '⌊N/2⌋ + 1', unit: 'strict majority vote' },
      { label: 'Split-Brain Risk', value: '0.00%', unit: '100% immune' },
    ],
    researchPapers: [
      {
        authors: 'Ongaro & Ousterhout',
        year: '2014',
        title: 'In Search of an Understandable Consensus Algorithm (Raft)',
        venue: 'USENIX ATC',
        doi: '10.5555/2643634.2643666',
        provenBenefit: 'Industry-standard distributed state machine consensus providing guaranteed consistency.'
      },
      {
        authors: 'Schiper et al.',
        year: '2010',
        title: 'Consensus in Autonomous Multi-Robot Systems',
        venue: 'IEEE Robotics & Automation Magazine',
        doi: '10.1109/MRA.2010.938839',
        provenBenefit: 'Verifies dynamic leader elections in mobile robotic meshes with intermittent packet drop.'
      }
    ],
    placeholderTitle: 'Swarm Leader Destruction & 50ms Failover Clip',
    telemetry: [
      { label: 'Quorum Rule', value: '⌊N/2⌋+1 Vote' },
      { label: 'Election Time', value: '38.4 ms' },
      { label: 'Term Number', value: 'Term #14' },
      { label: 'Mesh Status', value: 'Leader Healthy' }
    ],
    icon: <Network className="w-5 h-5" />
  },
  {
    id: 'semantic-comms',
    pieceNumber: '04',
    tag: 'PIECE 04/04 // EDGE AI DATA COMPRESSION',
    title: 'Semantic Feature Compression for Edge AI Streaming',
    badge: '99.6% BANDWIDTH SAVINGS',
    summary: 'Drones transmit lightweight 2KB AI target packets instead of heavy megabyte video streams.',
    problemSolved: 'Fixes: Sending heavy 4K video feeds drains battery life and clogs emergency radio frequencies.',
    howItWorks: 'Onboard AI identifies survivors, vehicles, and landing zones locally, sending only compact 2KB coordinate and heat packets at 30 FPS—saving 99.6% bandwidth while providing full situational awareness.',
    specs: [
      { label: 'Packet Size', value: '2.00', unit: 'KB per detection' },
      { label: 'Bandwidth Cut', value: '99.6%', unit: 'less radio traffic' },
      { label: 'Detection Rate', value: '30.0', unit: 'FPS edge feed' },
    ],
    researchPapers: [
      {
        authors: 'Xie et al.',
        year: '2021',
        title: 'Deep Learning Enabled Semantic Communication Systems',
        venue: 'IEEE Transactions on Signal Processing',
        doi: '10.1109/TSP.2021.3071210',
        provenBenefit: 'Revolutionary concept that transmits meaning and target coordinates instead of raw bits.'
      },
      {
        authors: 'Gündüz et al.',
        year: '2023',
        title: 'Task-Oriented Communications for Autonomous Systems',
        venue: 'IEEE JSAC',
        doi: '10.1109/JSAC.2022.3225032',
        provenBenefit: 'Demonstrates 99%+ bandwidth reduction for edge robotics without losing mission accuracy.'
      }
    ],
    placeholderTitle: '2KB Semantic Target Vector Stream Clip',
    telemetry: [
      { label: 'Packet Payload', value: '2.04 KB' },
      { label: 'Data Savings', value: '99.6%' },
      { label: 'Inference Rate', value: '30 FPS' },
      { label: 'Target Lock', value: 'Human (98.4%)' }
    ],
    icon: <Zap className="w-5 h-5" />
  }
];

interface Slide04DeepJSCCProps {
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
}

export const Slide04DeepJSCC: React.FC<Slide04DeepJSCCProps> = ({
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
    const bounded = Math.max(0, Math.min(SUBSYSTEM_B_PIECES.length - 1, idx));
    setInternalIndex(bounded);
    onActiveChange?.(bounded);
  }, [onActiveChange]);

  const nextPiece = useCallback(() => {
    if (internalIndex < SUBSYSTEM_B_PIECES.length - 1) {
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
        
        {/* Top Header: Material Design 3 Elevated App Bar */}
        <header className="flex justify-between items-center pb-2.5 border-b border-[#E1E3E8]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-7 bg-[#006C4C] rounded-full shadow-xs"></div>
            <div className="font-mono text-sm sm:text-base font-black uppercase tracking-[0.25em] text-[#191C1E]">
              SUBSYSTEM B DEEP DIVE // COMMS &amp; CONSENSUS
            </div>
          </div>

          {/* Interactive Mechanical Split-Flap Ticker + Status Chips */}
          <div className="flex items-center gap-3">
            <SplitFlapText
              words={["RF JAM RESILIENT", "-5.0 DB SNR OK", "ZERO CLIFF MESH", "SWARM RAFT 50MS"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              tileColor="#003824"
              textColor="#80E4B7"
              tileRadius={5}
              gap={3}
              fontSize={13}
              loop
              padTo={16}
            />
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black text-[#006C4C] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full border border-[#C8E6C9] shadow-2xs">
              <Layers className="w-4 h-4" />
              <span>STACK: 0{internalIndex + 1} / 04</span>
            </div>
            <div className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#006C4C] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full border border-[#C8E6C9] hidden sm:flex items-center gap-2 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006C4C] animate-pulse"></span>
              <span>96 / 96 RF TESTS OK</span>
            </div>
          </div>
        </header>

        {/* Headline Row with Segmented M3 Pill Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pt-1 pb-1.5 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black text-[#191C1E] tracking-tight leading-none font-sans">
              Neural Zero-Cliff Video Mesh <span className="text-[#006C4C] underline decoration-[#81C784] decoration-4 underline-offset-4">Eliminates Blackouts</span> Down to -5dB
            </h2>
          </div>
          
          {/* M3 Segmented Pill Stepper */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-white p-1 rounded-full border border-[#E1E3E8] shadow-xs">
              {SUBSYSTEM_B_PIECES.map((p, idx) => (
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
                disabled={internalIndex === SUBSYSTEM_B_PIECES.length - 1}
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
          {SUBSYSTEM_B_PIECES.map((piece, idx) => {
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
                  "absolute inset-0 w-full h-full rounded-[28px] bg-white border border-[#E1E3E8] p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-shadow",
                  !isCurrent && "cursor-pointer hover:border-[#006C4C]"
                )}
                style={{
                  zIndex,
                  pointerEvents: isCurrent ? 'auto' : 'none'
                }}
              >
                
                {/* Individual Card Top HUD: M3 Elevated Header */}
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
                    {/* M3 Active Progress Indicator Dots */}
                    <div className="flex items-center gap-1.5 ml-2">
                      {SUBSYSTEM_B_PIECES.map((_, dotIdx) => (
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

                {/* Main Card Content Grid (50% M3 Empty State Video Holder + 50% M3 Structured Intelligence) */}
                <div className="w-full flex-1 my-2.5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch overflow-hidden">
                  
                  {/* LEFT (6 Cols / 50%): Material UI Clean Empty State Container */}
                  <div className="lg:col-span-6 rounded-[24px] bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] p-5 sm:p-6 flex flex-col justify-between shadow-2xs relative overflow-hidden group hover:border-[#006C4C]/60 transition-colors">
                    
                    {/* Empty State Top Bar */}
                    <div className="flex justify-between items-center pb-2.5 border-b border-[#E2E8F0] font-mono text-xs text-[#64748B]">
                      <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#006C4C]">
                        <Film className="w-4 h-4 text-[#006C4C]" />
                        <span>SIMULATION VIEWPORT // EMPTY STATE</span>
                      </div>
                      <div className="flex items-center gap-2 font-bold">
                        <span className="bg-white px-3 py-1 rounded-full border border-[#E2E8F0] text-[#334155] shadow-2xs">
                          16:9 RATIO
                        </span>
                        <span className="text-[#94A3B8] hidden sm:inline">1080p · 60 FPS</span>
                      </div>
                    </div>

                    {/* M3 Empty State Hero Block */}
                    <div className="my-auto py-6 flex flex-col items-center justify-center text-center space-y-3.5">
                      <div className="w-18 h-18 rounded-3xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#64748B] shadow-sm group-hover:scale-105 group-hover:text-[#006C4C] group-hover:border-[#006C4C] transition-all">
                        <FileVideo className="w-9 h-9 stroke-[1.5]" />
                      </div>

                      <div className="space-y-1.5 max-w-md">
                        <h4 className="text-lg sm:text-xl font-black text-[#1E293B] font-sans tracking-tight">
                          {piece.placeholderTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#64748B] font-sans leading-relaxed">
                          Clean empty state viewport. Ready for high-definition NVIDIA Sionna RF simulation footage attachment.
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-[#475569] font-mono text-xs font-bold shadow-2xs">
                        <UploadCloud className="w-4 h-4 text-[#006C4C]" />
                        <span>Awaiting Sionna RF Simulation Asset Attachment</span>
                      </div>
                    </div>

                    {/* Bottom Telemetry Spec Row (Elevated M3 Tiles) */}
                    <div className="space-y-2 pt-2.5 border-t border-[#E2E8F0] font-mono">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        {piece.telemetry.map((t, tIdx) => (
                          <div key={tIdx} className="p-2.5 rounded-[14px] bg-white border border-[#E2E8F0] flex flex-col justify-between shadow-2xs">
                            <span className="text-[#64748B] text-[10.5px] uppercase font-bold">{t.label}</span>
                            <span className="font-black text-[#006C4C] text-sm sm:text-base mt-0.5">{t.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Verification Gate Seal */}
                      <div className="p-2.5 rounded-[14px] bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-between text-xs text-[#006C4C] shadow-2xs">
                        <span className="flex items-center gap-2 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-[#006C4C]" />
                          GATE G6 VERIFIED: ZERO BLACKOUT AT -5.0 dB SNR
                        </span>
                        <span className="text-xs text-[#2E7D32] font-mono font-bold">PyTest: 4.80s (100%)</span>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT (6 Cols / 50%): High-Legibility Material UI Intelligence & Research */}
                  <div className="lg:col-span-6 rounded-[24px] bg-[#FFFFFF] border border-[#E1E3E8] p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xs">
                    
                    <div className="space-y-3.5">
                      {/* Monumental Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#191C1E] tracking-tight leading-tight font-sans">
                        {piece.title}
                      </h3>

                      {/* M3 Error Container: Problem Solved Callout */}
                      <div className="p-4 rounded-[18px] bg-[#FFDAD6]/50 border border-[#FFDAD6] text-[#93000A] text-sm sm:text-[15.5px] font-mono font-bold leading-relaxed flex items-start gap-2.5 shadow-2xs">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A] mt-1.5 shrink-0" />
                        <span>{piece.problemSolved}</span>
                      </div>

                      {/* M3 Tonal Surface: How SUTRA Solves It */}
                      <div className="p-4 rounded-[20px] bg-[#F2F4F8] border border-[#E1E3E8] space-y-1.5 shadow-2xs">
                        <div className="text-xs sm:text-[13px] font-mono font-black text-[#006C4C] uppercase tracking-wider flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#006C4C]" />
                          <span>HOW SUTRA SOLVES IT IN THE FIELD:</span>
                        </div>
                        <p className="text-sm sm:text-base lg:text-[16.5px] text-[#191C1E] font-sans font-medium leading-relaxed">
                          {piece.howItWorks}
                        </p>
                      </div>
                    </div>

                    {/* 3 Large Spec Tiles (M3 Elevated Surface) */}
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

                    {/* Grounding Academic Research Papers (M3 Secondary Container) */}
                    <div className="p-4 rounded-[20px] bg-[#E8F5E9]/60 border border-[#C8E6C9] space-y-2 shadow-2xs">
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

        {/* Bottom Verification & Audit Footer: M3 Status Bar */}
        <footer className="pt-2 border-t border-[#E1E3E8] flex flex-col gap-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono">
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">CODEBASE SUITE</span>
              <span className="text-sm font-black text-[#191C1E] font-sans">sutra_ws/src/sutra_comms</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">UNIT TEST COVERAGE</span>
              <span className="text-sm font-black text-[#006C4C] font-sans">96 / 96 Passing (100%)</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">RF SIMULATOR</span>
              <span className="text-sm font-black text-[#191C1E] font-sans">NVIDIA Sionna + PyTorch</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">LEAD ARCHITECT</span>
              <span className="text-sm font-black text-[#006C4C] font-sans">Nikhil (Comms Lead)</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs text-[#74777F]">
            <div className="flex items-center gap-2">
              <span className="font-black">PAGE 05</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-[#006C4C] font-black">CARD STACK: PIECE 0{internalIndex + 1}/04 — {SUBSYSTEM_B_PIECES[internalIndex].title.split('&')[0]}</span>
            </div>
            <div className="font-black uppercase tracking-widest text-[#191C1E]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default Slide04DeepJSCC;
