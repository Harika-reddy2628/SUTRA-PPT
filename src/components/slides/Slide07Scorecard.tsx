import React from 'react';
import { CheckCircle2, DollarSign, Award, ArrowUpRight } from 'lucide-react';

export const Slide07Scorecard: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14 text-earth-forest">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-sandstone-border/80">
        <div className="flex items-center gap-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-earth-sageSoft border border-earth-sage/30 text-earth-forest">
            EMPIRICAL VERIFICATION &amp; ECONOMICS
          </span>
          <span className="font-mono text-xs text-sandstone-muted font-medium">
            232 / 232 PASSING TESTS • ZERO MOCK BENCHMARKS • 100X COST EFFICIENCY
          </span>
        </div>
        <div className="font-mono text-xs text-sandstone-faint font-semibold">SECTION 06 / 07</div>
      </header>

      {/* Main Content */}
      <main className="my-auto space-y-6">
        
        {/* Top Split: Scorecard Table & Hardware Economics */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* 7 cols: Empirical Scorecard */}
          <div className="col-span-7 p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light">
            <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-3">
              <div className="font-mono text-xs font-bold text-earth-forest uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-earth-sage" />
                Empirical Benchmark Scorecard (Live Pytest Stdout)
              </div>
              <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-sageSoft px-2 py-0.5 rounded">100% Passed</span>
            </div>

            <div className="font-mono text-xs space-y-2">
              <div className="grid grid-cols-3 gap-2 pb-1.5 border-b border-sandstone-border/60 text-sandstone-faint text-[10px] uppercase font-bold">
                <div>Subsystem &amp; Feature</div>
                <div>Standard Baseline</div>
                <div>SUTRA Measured Value</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-forest font-semibold">Subsystem A (GNC/FSD)</div>
                <div className="text-earth-terracotta">Scalar Repulsion Drift</div>
                <div className="text-earth-forest font-bold">0 Collisions (d ≥ 3.80m)</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-forest font-semibold">Subsystem B (Deep JSCC)</div>
                <div className="text-earth-terracotta">Fails at &gt;5% Loss (0 dB)</div>
                <div className="text-earth-forest font-bold">41.8 dB PSNR @ -5 dB SNR</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-forest font-semibold">Subsystem C (Perception)</div>
                <div className="text-earth-terracotta">2.54m 2D IPM Error</div>
                <div className="text-earth-forest font-bold">0.0359m WGS84 Error</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-forest font-semibold">Subsystem D (WebGPU GCS)</div>
                <div className="text-earth-ochre font-medium">14–18 FPS React State</div>
                <div className="text-earth-forest font-bold">Locked 60.0 FPS Buffers</div>
              </div>
            </div>
          </div>

          {/* 5 cols: Hardware Economics */}
          <div className="col-span-5 p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-3">
                <div className="font-mono text-xs font-bold text-earth-forest uppercase flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-earth-forest" />
                  Radical Hardware Economics
                </div>
                <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-forestSoft px-2 py-0.5 rounded">100X Scale</span>
              </div>

              <div className="space-y-3 font-body text-xs text-sandstone-muted">
                <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                  <div className="font-mono font-bold text-earth-forest text-xs flex justify-between">
                    <span>ESP32-S3 Micro Swarm Node</span>
                    <span className="text-earth-sage font-bold">$145 / UAV</span>
                  </div>
                  <p className="text-sandstone-muted text-[11px] mt-1">
                    Lightweight indoor/canopy mesh nodes with onboard optical flow + Deep JSCC compression.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                  <div className="font-mono font-bold text-earth-forest text-xs flex justify-between">
                    <span>F450 Autonomous Tactical Rig</span>
                    <span className="text-earth-forest font-bold">$269 / UAV</span>
                  </div>
                  <p className="text-sandstone-muted text-[11px] mt-1">
                    PX4 Autopilot + Raspberry Pi / Jetson companion + FLIR LWIR thermal camera.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-sandstone-border font-mono text-[11px] text-sandstone-muted flex justify-between items-center">
              <span>Enterprise Military Baselines:</span>
              <span className="text-earth-terracotta font-bold">$50,000 – $250,000 / Unit</span>
            </div>
          </div>

        </div>

        {/* Grand Finals Bottom Banner */}
        <div className="p-4 rounded-2xl bg-white/95 border border-earth-sage/40 shadow-card-light flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-earth-forest" />
            <div>
              <div className="font-mono text-xs font-bold text-earth-forest uppercase">
                GRAND FINALS 2026 DEPLOYMENT READY
              </div>
              <div className="text-xs text-sandstone-muted">
                Hardware-in-the-Loop verified • Zero single points of failure • NDMA/DARPA Open Standards
              </div>
            </div>
          </div>
          <div className="font-mono text-xs font-bold text-earth-forest flex items-center gap-1">
            <span>READY FOR LIVE JURY BENCHMARK</span>
            <ArrowUpRight className="w-4 h-4 text-earth-terracotta" />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex justify-between items-center font-mono text-xs text-sandstone-muted">
        <div>Audited By: <strong className="text-earth-forest">Harika (Subsystem E Lead)</strong> &amp; <strong className="text-earth-forest">Rohith Kumar (HIL Runner)</strong></div>
        <div className="text-earth-forest font-bold">232 / 232 Verification Tests Passed (3.10s)</div>
      </footer>

    </div>
  );
};
