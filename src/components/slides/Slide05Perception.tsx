import React from 'react';
import { Crosshair, MapPin, Scan, Cpu } from 'lucide-react';

export const Slide05Perception: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14 text-earth-forest">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-sandstone-border/80">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-earth-sageSoft border border-earth-sage/30 text-earth-forest">
            SUBSYSTEM C · EDGE AI PERCEPTION
          </span>
          <span className="font-mono text-xs text-sandstone-muted font-medium">
            TRI-MODAL FUSION + DEM WGS84 RAYCASTER (3.59 CM ACCURACY)
          </span>
        </div>
        <div className="font-mono text-xs text-sandstone-faint font-semibold">SECTION 04 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left 6 cols */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-earth-sage uppercase tracking-wider mb-1">
              Sub-Centimeter Tactical Geolocation
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-earth-forest uppercase tracking-tight">
              Tri-Modal Fusion &amp; DEM Raycaster
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-sandstone-muted">
            
            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-sageSoft flex items-center justify-center text-earth-sage shrink-0 mt-0.5">
                <Scan className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">Tri-Modal Cross-Attention Fusion</strong>
                Fuses Visual RGB (morphology), FLIR LWIR thermal (heat signatures), and mmWave radar point clouds (canopy penetration) into a unified target tensor.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-forestSoft flex items-center justify-center text-earth-forest shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">Terrain-Corrected DEM Raycasting (3.59 cm Error)</strong>
                Applies 3D rotation matrix <code className="text-earth-forest font-mono text-xs font-bold">R_b^w</code> to drone gimbal pitch/roll and intersects ray with local digital elevation models, cutting error from 2.5m down to 3.59cm.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-elemental-skySoft flex items-center justify-center text-elemental-sky shrink-0 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">YOLOv8-Nano + SAHI Slicing (14.2 ms Latency)</strong>
                Optimized TensorRT engine running on NVIDIA Jetson Orin Nano / RTX 3050 edge nodes detects partially occluded survivors at 30m AGL.
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 cols */}
        <div className="col-span-6">
          <div className="p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-hover">
            <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-4">
              <div className="font-mono text-xs font-bold text-earth-forest uppercase flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-earth-sage" />
                DEM RAYCASTER MATHEMATICAL RIGOR
              </div>
              <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-sageSoft px-2.5 py-0.5 rounded-full border border-earth-sage/30">
                WGS84 EPSG:4326
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-forest font-bold mb-1">1. Ray Vector in World Coordinates</div>
                <p className="text-earth-forest text-[11px] font-bold">
                  <code>v_world = R_b^w · [ (u - c_x)/f_x, (v - c_y)/f_y, 1 ]ᵀ</code>
                </p>
                <p className="text-sandstone-muted text-[10px] mt-1 font-sans font-medium">Transforms 2D pixel coordinates into true 3D unit ray in ENU space.</p>
              </div>

              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-sage font-bold mb-1">2. Mountain DEM Intersection</div>
                <p className="text-earth-forest text-[11px] font-bold">
                  <code>P_target = P_uav + s* · v_world, where Z(P_target) = DEM(x, y)</code>
                </p>
                <p className="text-sandstone-muted text-[10px] mt-1 font-sans font-medium">Binary search raymarch converges to exact mountain surface in &lt; 0.08ms.</p>
              </div>

              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border">
                <div className="text-earth-forest font-bold mb-1">3. Benchmark Geolocation Error vs Altitude</div>
                <div className="flex justify-between text-[11px] text-earth-forest mt-1 font-bold">
                  <span>Flat 2D IPM @ 30m: <span className="text-earth-terracotta">2.54 m</span></span>
                  <span>SUTRA DEM @ 30m: <span className="text-earth-forest">0.0359 m (3.59 cm)</span></span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sandstone-border text-center font-mono text-xs text-sandstone-muted font-medium">
              Verified on Kedarnath &amp; Wayanad 3D High-Res Elevation Tiles
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex justify-between items-center font-mono text-xs text-sandstone-muted">
        <div>Lead Architect: <strong className="text-earth-forest">Vedanth Sai Ram (Perception Lead)</strong> • Source: <code className="text-earth-sage font-bold">sutra_ws/src/sutra_perception/</code></div>
        <div className="text-earth-forest font-bold">14.2 ms Inference • 3.59 cm Verified Precision</div>
      </footer>

    </div>
  );
};
