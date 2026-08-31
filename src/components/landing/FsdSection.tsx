import React, { useState } from 'react';
import { 
  Box, 
  Activity, 
  Wind, 
  ShieldCheck
} from 'lucide-react';

export const FsdSection: React.FC = () => {
  const [separation, setSeparation] = useState<number>(2.4);

  const staticPushActive = separation < 2.80;
  const pushForce = staticPushActive ? ((2.80 - separation) * 1.8).toFixed(2) : '0.00';

  return (
    <section id="fsd" className="py-28 px-6 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-sageSoft border border-earth-sage/30 text-earth-forest">
          <Box className="w-3.5 h-3.5" />
          <span>SUBSYSTEM A · GNC &amp; AUTONOMOUS FLIGHT</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-earth-forest uppercase tracking-tight">
          SUTRA-FSD &amp; ORCA 3D Autopilot
        </h2>
        <p className="text-sandstone-muted text-base sm:text-lg font-serif italic">
          Tesla-style 3D metric voxel occupancy grids, smooth 5th-order quintic splines, and Control Barrier Function collision shielding.
        </p>
      </div>

      {/* 3 Pillars Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* Card 1: 3D Voxel Grid */}
        <div className="p-8 rounded-3xl bg-white border border-sandstone-border shadow-card-light flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-earth-sageSoft flex items-center justify-center text-earth-forest mb-6">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
              32×32×16 Voxel Grid
            </h3>
            <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
              Discretizes local 3D volume around each drone with 0.10m resolution. Temporal log-odds decay (λ = 0.92) clears false dust and leaf reflections within 3–5 sensor frames.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-canvas-raised border border-sandstone-border font-mono text-xs text-earth-forest space-y-1.5">
            <div className="flex justify-between"><span>Voxel Volume:</span><strong>16,384 Cells</strong></div>
            <div className="flex justify-between"><span>Decay Constant:</span><strong>λ = 0.92</strong></div>
            <div className="flex justify-between"><span>Memory Footprint:</span><strong>&lt; 64 KB RAM</strong></div>
          </div>
        </div>

        {/* Card 2: Quintic Polynomial Splines */}
        <div className="p-8 rounded-3xl bg-white border border-sandstone-border shadow-card-light flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-earth-forestSoft flex items-center justify-center text-earth-forest mb-6">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
              C² Quintic Polynomials
            </h3>
            <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
              5th-order splines guarantee continuous acceleration and bounded jerk (&lt; 4.20 m/s³), eliminating aggressive motor current spikes and preventing mid-flight ESC thermal shutdowns.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-canvas-raised border border-sandstone-border font-mono text-xs text-earth-forest space-y-1.5">
            <div className="flex justify-between"><span>Peak Jerk:</span><strong>&lt; 4.20 m/s³</strong></div>
            <div className="flex justify-between"><span>Trajectory Order:</span><strong>5th-Order C²</strong></div>
            <div className="flex justify-between"><span>Max Acceleration:</span><strong>2.50 m/s² Bounded</strong></div>
          </div>
        </div>

        {/* Card 3: NeuroFlight Dynamic Inversion */}
        <div className="p-8 rounded-3xl bg-white border border-sandstone-border shadow-card-light flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-elemental-skySoft flex items-center justify-center text-elemental-sky mb-6">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
              0.04ms NeuroFlight
            </h3>
            <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
              Deep neural dynamic inversion model running in 0.04ms ONNX engine on edge Jetson/RTX hardware compensates for non-linear ground effects and rejects 18.0 m/s mountain wind gusts.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-canvas-raised border border-sandstone-border font-mono text-xs text-earth-forest space-y-1.5">
            <div className="flex justify-between"><span>Inference Latency:</span><strong>0.04 ms Locked</strong></div>
            <div className="flex justify-between"><span>Gust Rejection:</span><strong>18.0 m/s Crosswinds</strong></div>
            <div className="flex justify-between"><span>Runtime Target:</span><strong>ONNX / TensorRT Edge</strong></div>
          </div>
        </div>

      </div>

      {/* Interactive ORCA 3D Penetration Push Calculator */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sandstone-border shadow-card-hover">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-sandstone-border mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-earth-sage uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>ORCA 3D MATHEMATICAL SOLVER + CONTROL BARRIER FUNCTION (CBF)</span>
            </div>
            <h3 className="font-heading text-2xl font-extrabold text-earth-forest mt-1">
              Static Penetration Push &amp; Parallel Flight Singularity Solver
            </h3>
          </div>
          <div className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-earth-sageSoft text-earth-forest border border-earth-sage/30">
            ZERO COLLISIONS (120/120 TESTS)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-5 rounded-2xl bg-canvas-raised border border-sandstone-border">
              <div className="flex justify-between text-xs font-mono font-bold mb-2 text-earth-forest">
                <span>DRONE SEPARATION DISTANCE (d):</span>
                <span className="text-sm font-black">{separation.toFixed(2)} m</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="5.0"
                step="0.05"
                value={separation}
                onChange={(e) => setSeparation(parseFloat(e.target.value))}
                className="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer accent-earth-forest border border-sandstone-border"
              />
              <div className="flex justify-between text-[10px] font-mono text-sandstone-muted mt-2">
                <span className="text-earth-terracotta">Critical Danger (&lt; 2.80m)</span>
                <span className="text-emerald-700">Safe Clearance (&gt; 2.80m)</span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono text-sandstone-muted">
              <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span>Static Penetration Push Force:</span>
                <strong className={`font-bold ${staticPushActive ? 'text-earth-terracotta text-sm' : 'text-emerald-700'}`}>
                  {staticPushActive ? `+${pushForce} m/s² PUSH` : '0.00 m/s² (Nominal)'}
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span>Assigned 3D Echelon Layer:</span>
                <strong className="text-earth-forest font-bold">Altitude Layer Z = 4.60m</strong>
              </div>
            </div>
          </div>

          {/* Mathematical Proof Card */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-canvas-raised border border-sandstone-border font-mono text-xs space-y-4">
            <div className="text-earth-forest font-bold text-sm border-b border-sandstone-border pb-2 flex items-center justify-between">
              <span>ORCA 3D MATHEMATICAL FORMULATION</span>
              <span className="text-[11px] text-earth-sage font-bold">C² CONTINUOUS</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-sandstone-border space-y-1">
              <div className="text-sandstone-muted text-[10px]">1. Static Normal Push:</div>
              <div className="text-earth-forest font-bold text-xs">
                u = n̂ · v_push - v_rel  (whenever d &lt; 2.80m)
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-sandstone-border space-y-1">
              <div className="text-sandstone-muted text-[10px]">2. Control Barrier Function (CBF):</div>
              <div className="text-earth-forest font-bold text-xs">
                h(x) = ||p_i - p_j||² - R_safe² ≥ 0
              </div>
            </div>

            <p className="text-sandstone-muted text-[11px] leading-relaxed font-sans font-medium">
              Eliminates the standard ORCA parallel velocity bug where v_rel ≈ 0 causes 0 repulsion. SUTRA guarantees dynamic clearance of 3.80m–7.44m across 5 drones during simultaneous ring crossings.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
