import React from 'react';
import { Radio, ShieldAlert, Network, Zap } from 'lucide-react';

export const Slide04DeepJSCC: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14 text-earth-forest">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-sandstone-border/80">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-earth-terracottaSoft border border-earth-terracotta/25 text-earth-terracotta">
            SUBSYSTEM B · COMMS &amp; CONSENSUS
          </span>
          <span className="font-mono text-xs text-sandstone-muted font-medium">
            DEEP JSCC NEURAL AUTOENCODER + SWARMRAFT DISTRIBUTED STATE MACHINE
          </span>
        </div>
        <div className="font-mono text-xs text-sandstone-faint font-semibold">SECTION 03 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Column: Deep JSCC Breakthrough */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-earth-terracotta uppercase tracking-wider mb-1">
              Zero-Cliff Neural Video Streaming
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-earth-forest uppercase tracking-tight">
              Deep Joint Source-Channel Coding
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-sandstone-muted">
            
            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-terracottaSoft flex items-center justify-center text-earth-terracotta shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">96.9% Deep Latent Compression (512 KB → 16 KB)</strong>
                Directly maps raw 1080p RGB &amp; Thermal tensors into analog I/Q constellation symbols, bypassing brittle digital bitstream parsing.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-sageSoft flex items-center justify-center text-earth-sage shrink-0 mt-0.5">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">Graceful Analog Degradation Down to -5.0 dB SNR</strong>
                Where H.264/H.265 abruptly freezes into black screens, Deep JSCC delivers soft analog blur, preserving thermal human heat signatures in severe jamming.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-ochreSoft flex items-center justify-center text-earth-ochre shrink-0 mt-0.5">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">SwarmRAFT Decentralized Quorum Consensus</strong>
                Strict majority quorum Q = ⌊N/2⌋ + 1 prevents split-brain state during leader drone destruction, electing a new swarm leader in &lt; 50ms.
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Comparative Metrics Card */}
        <div className="col-span-6">
          <div className="p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-hover">
            <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-4">
              <div className="font-mono text-xs font-bold text-earth-forest uppercase flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-earth-terracotta" />
                EMPIRICAL RF JAMMING STRESS TEST
              </div>
              <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-forestSoft px-2.5 py-0.5 rounded-full border border-earth-forest/20">
                AWGN / RAYLEIGH
              </span>
            </div>

            {/* Comparison Table */}
            <div className="font-mono text-xs space-y-3">
              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-sandstone-border text-sandstone-faint text-[10px] uppercase font-bold">
                <div>Channel Condition</div>
                <div>Standard H.264 / RTSP</div>
                <div>SUTRA Deep JSCC</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-canvas-raised border border-sandstone-border items-center">
                <div className="text-earth-forest font-bold">+15 dB (Clean Sky)</div>
                <div className="text-sandstone-muted">44.2 dB PSNR (60 FPS)</div>
                <div className="text-earth-forest font-bold">46.5 dB PSNR (60 FPS)</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-canvas-raised border border-sandstone-border items-center">
                <div className="text-earth-forest font-bold">+5 dB (Canopy Loss)</div>
                <div className="text-earth-terracotta font-medium">22.1 dB (Severe Stutter)</div>
                <div className="text-earth-sage font-bold">43.8 dB PSNR (Smooth)</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-canvas-raised border border-sandstone-border items-center">
                <div className="text-earth-terracotta font-bold">-5 dB (Jamming)</div>
                <div className="text-earth-terracotta font-bold">0.0 dB (BLACKOUT)</div>
                <div className="text-earth-forest font-bold">41.8 dB PSNR (Target Clear)</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sandstone-border grid grid-cols-2 gap-3 text-center font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-sandstone-muted text-[10px] font-bold">FRAME TRANSMIT TIME</div>
                <div className="text-earth-forest font-bold text-sm">2.4 ms / Frame</div>
              </div>
              <div className="p-2.5 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-sandstone-muted text-[10px] font-bold">CONSENSUS RE-ELECTION</div>
                <div className="text-earth-forest font-bold text-sm">&lt; 50 ms Failover</div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex justify-between items-center font-mono text-xs text-sandstone-muted">
        <div>Lead Architect: <strong className="text-earth-forest">Nikhil (Tech Lead)</strong> • Source: <code className="text-earth-terracotta font-bold">sutra_ws/src/sutra_comms/</code></div>
        <div className="text-earth-forest font-bold">PyTorch &amp; ONNX Verified • 0 Frame Dropped</div>
      </footer>

    </div>
  );
};
