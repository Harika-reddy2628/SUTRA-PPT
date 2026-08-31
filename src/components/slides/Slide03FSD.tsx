import React from 'react';
import { ShieldCheck, Box, Activity, Wind } from 'lucide-react';

export const Slide03FSD: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            SUBSYSTEM A · GNC & AUTOPILOT
          </span>
          <span className="font-mono text-xs text-slate-400">
            PX4 OFFBOARD @ 50HZ + SUTRA-FSD 3D OCCUPANCY & ORCA 3D
          </span>
        </div>
        <div className="font-mono text-xs text-slate-500">SECTION 02 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left 6 cols */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              Tesla-Style Autonomous Flight
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
              SUTRA-FSD Spatio-Temporal Planning
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-slate-300">
            
            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Box className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">32×32×16 Metric Voxel Grid (Decay λ = 0.92)</strong>
                Discretizes local 3D volume around each UAV. Transient noise (dust, leaves, rain) decays automatically within 3–5 cycles via log-odds mapping.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Activity className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">5th-Order Quintic Polynomial Splines (Jerk &lt; 4.20 m/s³)</strong>
                Continuous C² derivative optimization eliminates sharp motor torque spikes and prevents electronic speed controller (ESC) thermal shutdown.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Wind className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">SutraNeuroFlight Dynamic Inversion (0.04 ms Latency)</strong>
                Edge neural network predicts non-linear aerodynamic crosswinds in real-time, rejecting extreme 18.0 m/s mountain wind gusts.
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 cols: ORCA 3D + Echelons Diagram */}
        <div className="col-span-6">
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-2xl relative">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ORCA 3D SOLVER + CBF HARD SAFETY SHIELD
              </div>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                ZERO COLLISIONS
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-cyan-400 font-bold mb-1">1. Static Penetration Push (u = n · v_push - v_rel)</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Solves parallel-flight singularity where relative velocity approaches 0. Injects normal repulsion whenever drone distance d &lt; 2.80m.
                </p>
              </div>

              <div className="p-3 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 font-bold mb-1">2. Multi-Layer 3D Echelon Cruise Altitudes</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Assigns staggered vertical layers (3.50m to 4.60m) during multi-agent ring-crossing to guarantee vertical clearance across trajectory intersections.
                </p>
              </div>

              <div className="p-3 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-sky-400 font-bold mb-1">3. Control Barrier Function (CBF) Hard Shield</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Enforces forward-invariant safety set h(x) ≥ 0, guaranteeing dynamic clearance of 3.80m–7.44m across 5 simultaneous UAV trajectories.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] font-mono text-slate-400">
              <span>PX4 Offboard Mode: <strong className="text-emerald-400">50 Hz Locked</strong></span>
              <span>Tested Vectors: <strong className="text-white">120 / 120 Passed</strong></span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center font-mono text-xs text-slate-400">
        <div>Lead Architect: <strong className="text-white">Nikhil (Tech Lead)</strong> • Source: <code className="text-cyan-400">sutra_ws/src/sutra_gnc/</code></div>
        <div className="text-emerald-400 font-bold">120 / 120 Unit & SITL Tests Verified</div>
      </footer>

    </div>
  );
};
