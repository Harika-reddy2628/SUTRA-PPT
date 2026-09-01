import React from 'react';
import { 
  CheckCircle2, 
  DollarSign, 
  Award, 
  ArrowUpRight, 
  ShieldCheck, 
  Terminal, 
  Radio, 
  MapPin, 
  MonitorPlay,
  TrendingDown
} from 'lucide-react';
import { SplitFlapText } from '../ui/SplitFlapText';

export const Slide07Scorecard: React.FC = () => {
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
              EMPIRICAL SCORECARD // VERIFICATION &amp; ECONOMICS
            </div>
          </div>

          {/* Interactive Mechanical Split-Flap Ticker + Status Chips */}
          <div className="flex items-center gap-3">
            <SplitFlapText
              words={["232 / 232 PASSED", "100X COST MOAT", "100% EMPIRICAL", "JURY BENCHMARK"]}
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
              <ShieldCheck className="w-4 h-4" />
              <span>TESTS: 232 / 232 OK</span>
            </div>
            <div className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#006C4C] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full border border-[#C8E6C9] hidden sm:flex items-center gap-2 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006C4C] animate-pulse"></span>
              <span>100% ZERO-MOCK PASS</span>
            </div>
          </div>
        </header>

        {/* Big Headline Row */}
        <div className="pt-1 pb-1">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black text-[#191C1E] tracking-tight leading-none font-sans">
            Empirical Validation &amp; <span className="text-[#006C4C] underline decoration-[#81C784] decoration-4 underline-offset-4">100X Radical Hardware Economics</span>
          </h2>
        </div>

        {/* Main Content: 2-Column M3 Grid */}
        <div className="w-full flex-1 my-2 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch overflow-hidden">
          
          {/* LEFT (7 Cols): Empirical Subsystem Scorecard Table */}
          <div className="lg:col-span-7 rounded-[26px] bg-white border border-[#E1E3E8] p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            
            <div>
              <div className="flex justify-between items-center pb-2.5 border-b border-[#F1F5F9] mb-3">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black text-[#191C1E] uppercase">
                  <Terminal className="w-4 h-4 text-[#006C4C]" />
                  <span>EMPIRICAL BENCHMARK SCORECARD (LIVE PYTEST STDOUT)</span>
                </div>
                <span className="font-mono text-xs font-black text-[#006C4C] bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#C8E6C9]">
                  232 / 232 PASSED (100%)
                </span>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-2 pb-2 text-[11px] font-mono font-black text-[#64748B] uppercase tracking-wider border-b border-[#E2E8F0]">
                <div className="col-span-4">Subsystem &amp; Feature</div>
                <div className="col-span-4 text-center">Standard Baseline</div>
                <div className="col-span-4 text-right">SUTRA Measured Result</div>
              </div>

              {/* Scorecard Rows */}
              <div className="space-y-2 pt-2 font-mono text-xs sm:text-sm">
                
                {/* Row 1: Subsystem A */}
                <div className="grid grid-cols-12 gap-2 p-3 rounded-[16px] bg-[#FAFBFD] border border-[#E1E3E8] items-center">
                  <div className="col-span-4 flex items-center gap-2 font-bold text-[#191C1E]">
                    <div className="w-2 h-2 rounded-full bg-[#006C4C]" />
                    <span>Subsystem A (GNC/FSD)</span>
                  </div>
                  <div className="col-span-4 text-center text-[#BA1A1A] font-semibold text-xs">
                    Multi-Drone Bottleneck Drift
                  </div>
                  <div className="col-span-4 text-right font-black text-[#006C4C] text-xs sm:text-sm">
                    0 Collisions (d ≥ 3.80m)
                  </div>
                </div>

                {/* Row 2: Subsystem B */}
                <div className="grid grid-cols-12 gap-2 p-3 rounded-[16px] bg-[#FAFBFD] border border-[#E1E3E8] items-center">
                  <div className="col-span-4 flex items-center gap-2 font-bold text-[#191C1E]">
                    <Radio className="w-4 h-4 text-[#006C4C]" />
                    <span>Subsystem B (Deep JSCC)</span>
                  </div>
                  <div className="col-span-4 text-center text-[#BA1A1A] font-semibold text-xs">
                    Freezes at &gt;5% Loss (0 dB)
                  </div>
                  <div className="col-span-4 text-right font-black text-[#006C4C] text-xs sm:text-sm">
                    46.5 dB PSNR @ -5 dB SNR
                  </div>
                </div>

                {/* Row 3: Subsystem C */}
                <div className="grid grid-cols-12 gap-2 p-3 rounded-[16px] bg-[#FAFBFD] border border-[#E1E3E8] items-center">
                  <div className="col-span-4 flex items-center gap-2 font-bold text-[#191C1E]">
                    <MapPin className="w-4 h-4 text-[#006C4C]" />
                    <span>Subsystem C (Perception)</span>
                  </div>
                  <div className="col-span-4 text-center text-[#BA1A1A] font-semibold text-xs">
                    2.54m Slope Flat Error
                  </div>
                  <div className="col-span-4 text-right font-black text-[#006C4C] text-xs sm:text-sm">
                    3.59 cm WGS84 DEM Match
                  </div>
                </div>

                {/* Row 4: Subsystem D */}
                <div className="grid grid-cols-12 gap-4 p-3 rounded-[16px] bg-[#FAFBFD] border border-[#E1E3E8] items-center">
                  <div className="col-span-4 flex items-center gap-2 font-bold text-[#191C1E]">
                    <MonitorPlay className="w-4 h-4 text-[#006C4C]" />
                    <span>Subsystem D (WebGPU GCS)</span>
                  </div>
                  <div className="col-span-4 text-center text-[#D97706] font-semibold text-xs">
                    14–18 FPS UI Lag
                  </div>
                  <div className="col-span-4 text-right font-black text-[#006C4C] text-xs sm:text-sm">
                    Locked 60.0 FPS Buffers
                  </div>
                </div>

              </div>
            </div>

            {/* Live PyTest Runner Badge */}
            <div className="p-3 rounded-[16px] bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-between text-xs text-[#006C4C] font-mono font-bold shadow-2xs">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#006C4C]" />
                TOTAL SUITE: 232 / 232 PASSING IN 3.10 SECONDS
              </span>
              <span className="text-[#2E7D32]">ZERO MOCKS · 100% EMPIRICAL</span>
            </div>

          </div>

          {/* RIGHT (5 Cols): Radical 100X Hardware Economics */}
          <div className="lg:col-span-5 rounded-[26px] bg-white border border-[#E1E3E8] p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2.5 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black text-[#191C1E] uppercase">
                  <DollarSign className="w-4 h-4 text-[#006C4C]" />
                  <span>RADICAL HARDWARE ECONOMICS</span>
                </div>
                <span className="font-mono text-xs font-black text-[#006C4C] bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#C8E6C9] flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>100X COST CUT</span>
                </span>
              </div>

              {/* Hardware Card 1: Micro Swarm */}
              <div className="p-3.5 rounded-[18px] bg-[#FAFBFD] border border-[#E1E3E8] space-y-1 shadow-2xs">
                <div className="font-mono font-black text-sm text-[#191C1E] flex justify-between items-center">
                  <span>ESP32-S3 Micro Swarm Node</span>
                  <span className="text-[#006C4C] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full border border-[#C8E6C9] font-black text-sm">
                    $145 / UAV
                  </span>
                </div>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Ultra-lightweight indoor &amp; canopy mesh drone with onboard optical flow tracking and Deep JSCC neural video compression.
                </p>
              </div>

              {/* Hardware Card 2: Tactical F450 */}
              <div className="p-3.5 rounded-[18px] bg-[#FAFBFD] border border-[#E1E3E8] space-y-1 shadow-2xs">
                <div className="font-mono font-black text-sm text-[#191C1E] flex justify-between items-center">
                  <span>F450 Tactical Heavy Rig</span>
                  <span className="text-[#006C4C] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full border border-[#C8E6C9] font-black text-sm">
                    $269 / UAV
                  </span>
                </div>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Industrial PX4 Autopilot + Jetson Orin Nano edge AI computer + FLIR LWIR thermal camera with 30m AGL survivor lock.
                </p>
              </div>

              {/* Comparison vs Military Baselines */}
              <div className="p-3 rounded-[16px] bg-[#FFDAD6]/40 border border-[#FFDAD6] flex justify-between items-center font-mono text-xs">
                <span className="text-[#93000A] font-bold">Standard Military Drones:</span>
                <span className="text-[#BA1A1A] font-black">$50,000 – $250,000 / Unit</span>
              </div>
            </div>

            {/* Grand Finals Deployment Seal */}
            <div className="mt-3 p-3.5 rounded-[18px] bg-[#003824] text-[#80E4B7] flex justify-between items-center font-mono text-xs shadow-md">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#80E4B7]" />
                <span className="font-black">GRAND FINALS 2026 DEPLOYMENT READY</span>
              </div>
              <div className="flex items-center gap-1 font-bold text-white">
                <span>READY FOR LIVE JURY</span>
                <ArrowUpRight className="w-4 h-4 text-[#80E4B7]" />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Verification Footer: M3 Status Bar */}
        <footer className="pt-2 border-t border-[#E1E3E8] flex flex-col gap-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono">
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">AUDIT STATUS</span>
              <span className="text-sm font-black text-[#006C4C] font-sans">232 / 232 Verified (100%)</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">HIL EXECUTION</span>
              <span className="text-sm font-black text-[#191C1E] font-sans">Rohith Kumar (HIL Runner)</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">QA ARCHITECT</span>
              <span className="text-sm font-black text-[#191C1E] font-sans">Harika (Subsystem E Lead)</span>
            </div>
            <div className="p-2 rounded-[14px] bg-[#FFFFFF] border border-[#E1E3E8] flex justify-between items-center shadow-2xs">
              <span className="text-xs font-bold text-[#74777F] uppercase tracking-wider">OVERALL VERDICT</span>
              <span className="text-sm font-black text-[#006C4C] font-sans">Grand Finals Winner Ready</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs text-[#74777F]">
            <div className="flex items-center gap-2">
              <span className="font-black">PAGE 08</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-[#006C4C] font-black">GRAND FINALS SCORECARD &amp; HARDWARE BOM</span>
            </div>
            <div className="font-black uppercase tracking-widest text-[#191C1E]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default Slide07Scorecard;
