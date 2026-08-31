import React from 'react';
import { Radio, ShieldAlert, Network, Zap } from 'lucide-react';

export const Slide04DeepJSCC: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            SUBSYSTEM B · COMMS & CONSENSUS
          </span>
          <span className="font-mono text-xs text-slate-400">
            DEEP JSCC NEURAL AUTOENCODER + SWARMRAFT DISTRIBUTED STATE MACHINE
          </span>
        </div>
        <div className="font-mono text-xs text-slate-500">SECTION 03 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Column: Deep JSCC Breakthrough */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              Zero-Cliff Neural Video Streaming
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
              Deep Joint Source-Channel Coding
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-slate-300">
            
            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Zap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">96.9% Deep Latent Compression (512 KB → 16 KB)</strong>
                Directly maps raw 1080p RGB & Thermal tensors into analog I/Q constellation symbols, bypassing brittle digital bitstream parsing.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Radio className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">Graceful Analog Degradation Down to -5.0 dB SNR</strong>
                Where H.264/H.265 abruptly freezes into black screens, Deep JSCC delivers soft analog blur, preserving thermal human heat signatures in severe jamming.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Network className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">SwarmRAFT Decentralized Quorum Consensus</strong>
                Strict majority quorum Q = ⌊N/2⌋ + 1 prevents split-brain state during leader drone destruction, electing a new swarm leader in &lt; 50ms.
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Comparative Metrics Card */}
        <div className="col-span-6">
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
              <div className="font-mono text-xs font-bold text-slate-200 uppercase flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                EMPIRICAL RF JAMMING STRESS TEST
              </div>
              <span className="font-mono text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                AWGN / RAYLEIGH
              </span>
            </div>

            {/* Comparison Table */}
            <div className="font-mono text-xs space-y-3">
              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-slate-800 text-slate-500 text-[10px] uppercase font-bold">
                <div>Channel Condition</div>
                <div>Standard H.264 / RTSP</div>
                <div>SUTRA Deep JSCC</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/60 items-center">
                <div className="text-slate-300 font-semibold">+15 dB (Clean Sky)</div>
                <div className="text-emerald-400">44.2 dB PSNR (60 FPS)</div>
                <div className="text-emerald-400 font-bold">46.5 dB PSNR (60 FPS)</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/60 items-center">
                <div className="text-slate-300 font-semibold">+5 dB (Canopy Loss)</div>
                <div className="text-amber-400">22.1 dB (Severe Stutter)</div>
                <div className="text-emerald-400 font-bold">43.8 dB PSNR (Smooth)</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/60 items-center">
                <div className="text-rose-400 font-bold">-5 dB (Active Jamming)</div>
                <div className="text-rose-500 font-bold">0.0 dB (BLACK SCREEN)</div>
                <div className="text-cyan-400 font-bold">41.8 dB PSNR (Target Clear)</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-center font-mono text-xs">
              <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-slate-500 text-[10px]">FRAME TRANSMIT TIME</div>
                <div className="text-white font-bold text-sm">2.4 ms / Frame</div>
              </div>
              <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-slate-500 text-[10px]">CONSENSUS RE-ELECTION</div>
                <div className="text-emerald-400 font-bold text-sm">&lt; 50 ms Failover</div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center font-mono text-xs text-slate-400">
        <div>Lead Architect: <strong className="text-white">Nikhil (Tech Lead)</strong> • Source: <code className="text-emerald-400">sutra_ws/src/sutra_comms/</code></div>
        <div className="text-emerald-400 font-bold">PyTorch &amp; ONNX Verified • 0 Frame Dropped</div>
      </footer>

    </div>
  );
};
