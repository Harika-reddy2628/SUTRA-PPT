import React from 'react';
import { ShieldCheck, Box, Activity, Wind } from 'lucide-react';

export const Slide03FSD: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14 text-earth-forest">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-sandstone-border/80">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-earth-sageSoft border border-earth-sage/30 text-earth-forest">
            SUBSYSTEM A · GNC &amp; AUTOPILOT
          </span>
          <span className="font-mono text-xs text-sandstone-muted font-medium">
            PX4 OFFBOARD @ 50HZ + SUTRA-FSD 3D OCCUPANCY &amp; ORCA 3D
          </span>
        </div>
        <div className="font-mono text-xs text-sandstone-faint font-semibold">SECTION 02 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left 6 cols */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-earth-sage uppercase tracking-wider mb-1">
              Tesla-Style Autonomous Flight
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-earth-forest uppercase tracking-tight">
              SUTRA-FSD Spatio-Temporal Planning
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-sandstone-muted">
            
            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-sageSoft flex items-center justify-center text-earth-forest shrink-0 mt-0.5">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">32×32×16 Metric Voxel Grid (Decay λ = 0.92)</strong>
                Discretizes local 3D volume around each UAV. Transient noise (dust, leaves, rain) decays automatically within 3–5 cycles via log-odds mapping.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-forestSoft flex items-center justify-center text-earth-forest shrink-0 mt-0.5">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">5th-Order Quintic Polynomial Splines (Jerk &lt; 4.20 m/s³)</strong>
                Continuous C² derivative optimization eliminates sharp motor torque spikes and prevents electronic speed controller (ESC) thermal shutdown.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-elemental-skySoft flex items-center justify-center text-elemental-sky shrink-0 mt-0.5">
                <Wind className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">SutraNeuroFlight Dynamic Inversion (0.04 ms Latency)</strong>
                Edge neural network predicts non-linear aerodynamic crosswinds in real-time, rejecting extreme 18.0 m/s mountain wind gusts.
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 cols: ORCA 3D + Echelons Diagram */}
        <div className="col-span-6">
          <div className="p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-hover relative">
            <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-earth-forest">
                <ShieldCheck className="w-4 h-4 text-earth-sage" />
                ORCA 3D SOLVER + CBF HARD SAFETY SHIELD
              </div>
              <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-sageSoft px-2.5 py-0.5 rounded-full border border-earth-sage/30">
                ZERO COLLISIONS
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-forest font-bold mb-1">1. Static Penetration Push (u = n · v_push - v_rel)</div>
                <p className="text-sandstone-muted text-[11px] leading-relaxed font-sans font-medium">
                  Solves parallel-flight singularity where relative velocity approaches 0. Injects normal repulsion whenever drone distance d &lt; 2.80m.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-sage font-bold mb-1">2. Multi-Layer 3D Echelon Cruise Altitudes</div>
                <p className="text-sandstone-muted text-[11px] leading-relaxed font-sans font-medium">
                  Assigns staggered vertical layers (3.50m to 4.60m) during multi-agent ring-crossing to guarantee vertical clearance across trajectory intersections.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-elemental-sky font-bold mb-1">3. Control Barrier Function (CBF) Hard Shield</div>
                <p className="text-sandstone-muted text-[11px] leading-relaxed font-sans font-medium">
                  Enforces forward-invariant safety set h(x) ≥ 0, guaranteeing dynamic clearance of 3.80m–7.44m across 5 simultaneous UAV trajectories.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sandstone-border flex justify-between items-center text-[11px] font-mono text-sandstone-muted">
              <span>PX4 Offboard Mode: <strong className="text-earth-forest">50 Hz Locked</strong></span>
              <span>Tested Vectors: <strong className="text-earth-forest">120 / 120 Passed</strong></span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex justify-between items-center font-mono text-xs text-sandstone-muted">
        <div>Lead Architect: <strong className="text-earth-forest">Nikhil (Tech Lead)</strong> • Source: <code className="text-earth-sage font-bold">sutra_ws/src/sutra_gnc/</code></div>
        <div className="text-earth-forest font-bold">120 / 120 Unit &amp; SITL Tests Verified</div>
      </footer>

    </div>
  );
};
