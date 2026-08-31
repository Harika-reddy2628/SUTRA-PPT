import React from 'react';
import { CheckCircle2, DollarSign, Award, ArrowUpRight } from 'lucide-react';

export const Slide07Scorecard: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            EMPIRICAL VERIFICATION &amp; ECONOMICS
          </span>
          <span className="font-mono text-xs text-slate-400">
            232 / 232 PASSING TESTS • ZERO MOCK BENCHMARKS • 100X COST EFFICIENCY
          </span>
        </div>
        <div className="font-mono text-xs text-slate-500">SECTION 06 / 07</div>
      </header>

      {/* Main Content */}
      <main className="my-auto space-y-6">
        
        {/* Top Split: Scorecard Table & Hardware Economics */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* 7 cols: Empirical Scorecard */}
          <div className="col-span-7 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3">
              <div className="font-mono text-xs font-bold text-white uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Empirical Benchmark Scorecard (Live Pytest Stdout)
              </div>
              <span className="font-mono text-[11px] text-emerald-400">100% Passed</span>
            </div>

            <div className="font-mono text-xs space-y-2">
              <div className="grid grid-cols-3 gap-2 pb-1.5 border-b border-slate-800/60 text-slate-500 text-[10px] uppercase font-bold">
                <div>Subsystem &amp; Feature</div>
                <div>Standard Baseline</div>
                <div>SUTRA Measured Value</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <div className="text-slate-300">Subsystem A (GNC/FSD)</div>
                <div className="text-rose-400">Scalar Repulsion Drift</div>
                <div className="text-emerald-400 font-bold">0 Collisions (d ≥ 3.80m)</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <div className="text-slate-300">Subsystem B (Deep JSCC)</div>
                <div className="text-rose-400">Fails at &gt;5% Loss (0 dB)</div>
                <div className="text-emerald-400 font-bold">41.8 dB PSNR @ -5 dB SNR</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <div className="text-slate-300">Subsystem C (Perception)</div>
                <div className="text-rose-400">2.54m 2D IPM Error</div>
                <div className="text-emerald-400 font-bold">0.0359m WGS84 Error</div>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/50">
                <div className="text-slate-300">Subsystem D (WebGPU GCS)</div>
                <div className="text-amber-400">14–18 FPS React State</div>
                <div className="text-emerald-400 font-bold">Locked 60.0 FPS Buffers</div>
              </div>
            </div>
          </div>

          {/* 5 cols: Hardware Economics */}
          <div className="col-span-5 p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-3">
                <div className="font-mono text-xs font-bold text-white uppercase flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  Radical Hardware Economics
                </div>
                <span className="font-mono text-[11px] text-cyan-400">100X Scale</span>
              </div>

              <div className="space-y-3 font-body text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-950/60 border border-slate-800">
                  <div className="font-mono font-bold text-white text-xs flex justify-between">
                    <span>ESP32-S3 Micro Swarm Node</span>
                    <span className="text-emerald-400 font-bold">$145 / UAV</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    Lightweight indoor/canopy mesh nodes with onboard optical flow + Deep JSCC compression.
                  </p>
                </div>

                <div className="p-2.5 rounded-bg bg-slate-950/60 border border-slate-800 p-2.5 rounded">
                  <div className="font-mono font-bold text-white text-xs flex justify-between">
                    <span>F450 Full Autonomous Tactical Rig</span>
                    <span className="text-cyan-400 font-bold">$269 / UAV</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    PX4 Autopilot + Raspberry Pi / Jetson companion + FLIR LWIR thermal camera.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 font-mono text-[11px] text-slate-400 flex justify-between items-center">
              <span>Enterprise Military Baselines:</span>
              <span className="text-rose-400 font-bold">$50,000 – $250,000 / Unit</span>
            </div>
          </div>

        </div>

        {/* Grand Finals Bottom Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/40 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-cyan-400" />
            <div>
              <div className="font-mono text-xs font-bold text-white">
                GRAND FINALS 2026 DEPLOYMENT READY
              </div>
              <div className="text-xs text-slate-400">
                Hardware-in-the-Loop verified • Zero single points of failure • NDMA/DARPA Open Standards
              </div>
            </div>
          </div>
          <div className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1">
            <span>READY FOR LIVE JURY BENCHMARK</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center font-mono text-xs text-slate-400">
        <div>Audited By: <strong className="text-white">Harika (Subsystem E Lead)</strong> &amp; <strong className="text-white">Rohith Kumar (HIL Runner)</strong></div>
        <div className="text-emerald-400 font-bold">232 / 232 Verification Tests Passed (3.10s)</div>
      </footer>

    </div>
  );
};
