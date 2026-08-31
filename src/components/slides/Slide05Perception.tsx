import React from 'react';
import { Crosshair, MapPin, Scan, Cpu } from 'lucide-react';

export const Slide05Perception: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            SUBSYSTEM C · EDGE AI PERCEPTION
          </span>
          <span className="font-mono text-xs text-slate-400">
            TRI-MODAL FUSION + DEM WGS84 RAYCASTER (3.59 CM ACCURACY)
          </span>
        </div>
        <div className="font-mono text-xs text-slate-500">SECTION 04 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left 6 cols */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              Sub-Centimeter Tactical Geolocation
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
              Tri-Modal Fusion &amp; DEM Raycaster
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-slate-300">
            
            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Scan className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">Tri-Modal Cross-Attention Fusion</strong>
                Fuses Visual RGB (morphology), FLIR LWIR thermal (heat signatures), and mmWave radar point clouds (canopy penetration) into a unified target tensor.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">Terrain-Corrected DEM Raycasting (3.59 cm Error)</strong>
                Applies 3D rotation matrix <code className="text-cyan-400 font-mono text-xs">R_b^w</code> to drone gimbal pitch/roll and intersects ray with local digital elevation models, cutting error from 2.5m down to 3.59cm.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">YOLOv8-Nano + SAHI Slicing (14.2 ms Latency)</strong>
                Optimized TensorRT engine running on NVIDIA Jetson Orin Nano / RTX 3050 edge nodes detects partially occluded survivors at 30m AGL.
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 cols */}
        <div className="col-span-6">
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
              <div className="font-mono text-xs font-bold text-slate-200 uppercase flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-cyan-400" />
                DEM RAYCASTER MATHEMATICAL RIGOR
              </div>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                WGS84 EPSG:4326
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-cyan-400 font-bold mb-1">1. Ray Vector in World Coordinates</div>
                <p className="text-slate-300 text-[11px]">
                  <code className="text-emerald-400">v_world = R_b^w · [ (u - c_x)/f_x, (v - c_y)/f_y, 1 ]ᵀ</code>
                </p>
                <p className="text-slate-500 text-[10px] mt-1">Transforms 2D pixel coordinates into true 3D unit ray in ENU space.</p>
              </div>

              <div className="p-3 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-sky-400 font-bold mb-1">2. Mountain DEM Intersection</div>
                <p className="text-slate-300 text-[11px]">
                  <code className="text-emerald-400">P_target = P_uav + s* · v_world, where Z(P_target) = DEM(x, y)</code>
                </p>
                <p className="text-slate-500 text-[10px] mt-1">Binary search raymarch converges to exact mountain surface in &lt; 0.08ms.</p>
              </div>

              <div className="p-3 rounded bg-slate-950/70 border border-slate-800">
                <div className="text-emerald-400 font-bold mb-1">3. Benchmark Geolocation Error vs Altitude</div>
                <div className="flex justify-between text-[11px] text-slate-300 mt-1">
                  <span>Flat 2D IPM @ 30m: <strong className="text-rose-400">2.54 m</strong></span>
                  <span>SUTRA DEM @ 30m: <strong className="text-emerald-400">0.0359 m (3.59 cm)</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-center font-mono text-xs text-slate-400">
              Verified on Kedarnath &amp; Wayanad 3D High-Res Elevation Tiles
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center font-mono text-xs text-slate-400">
        <div>Lead Architect: <strong className="text-white">Vedanth Sai Ram (Perception Lead)</strong> • Source: <code className="text-cyan-400">sutra_ws/src/sutra_perception/</code></div>
        <div className="text-emerald-400 font-bold">14.2 ms Inference • 3.59 cm Verified Precision</div>
      </footer>

    </div>
  );
};
