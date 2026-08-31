import React from 'react';
import { MonitorPlay, Layers, Shield, FileCode2 } from 'lucide-react';

export const Slide06GCS: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14 text-earth-forest">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-sandstone-border/80">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-elemental-skySoft border border-elemental-sky/25 text-elemental-sky">
            SUBSYSTEM D · 3D GIS GROUND CONTROL STATION
          </span>
          <span className="font-mono text-xs text-sandstone-muted font-medium">
            PEGASUS-GRADE REACT 18 + WEBGPU 60 FPS + MIL-STD-2525 ATAK COT XML
          </span>
        </div>
        <div className="font-mono text-xs text-sandstone-faint font-semibold">SECTION 05 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left 6 cols */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-elemental-sky uppercase tracking-wider mb-1">
              Military Common Operating Picture (COP)
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-earth-forest uppercase tracking-tight">
              Pegasus 3D GIS Tactical GCS
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-sandstone-muted">
            
            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-elemental-skySoft flex items-center justify-center text-elemental-sky shrink-0 mt-0.5">
                <MonitorPlay className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">Decoupled WebGPU 60.0 FPS Video Engine</strong>
                Decouples high-bandwidth binary WebSocket frame streams from React state reconciliation, blitting decoded textures directly into WebGPU canvas buffers without frame drops.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-sageSoft flex items-center justify-center text-earth-sage shrink-0 mt-0.5">
                <FileCode2 className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">MIL-STD-2525 Cursor-on-Target (CoT) XML</strong>
                Auto-generates standard military CoT packets broadcast over UDP port 4242, enabling seamless drop-in integration with soldier ATAK / WinTAK tablets.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-earth-terracottaSoft flex items-center justify-center text-earth-terracotta shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-earth-forest font-bold block mb-0.5">1-Click Emergency Swarm RTL Failsafe</strong>
                Instant swarm-wide Return-to-Launch command broadcasts synchronized rendezvous waypoints with staggered return altitudes to avoid airspace clustering.
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 cols */}
        <div className="col-span-6">
          <div className="p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-hover">
            <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-4">
              <div className="font-mono text-xs font-bold text-earth-forest uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-elemental-sky" />
                GCS FRONTEND ARCHITECTURE &amp; PERFORMANCE
              </div>
              <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-sageSoft px-2.5 py-0.5 rounded-full border border-earth-sage/30">
                60.0 FPS LOCKED
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted font-medium">Mapbox GL JS 3D Terrain Rendering</span>
                <span className="text-earth-forest font-bold">500k Triangles @ 60 FPS</span>
              </div>

              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted font-medium">Simultaneous Multi-UAV Video Feeds</span>
                <span className="text-earth-forest font-bold">5 Feeds @ 1080p WebGPU</span>
              </div>

              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted font-medium">ATAK / WinTAK UDP Broadcast Latency</span>
                <span className="text-earth-forest font-bold">&lt; 1.2 ms Packet Delay</span>
              </div>

              <div className="p-3 rounded-lg bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted font-medium">Tactical Telemetry Heartbeat Stream</span>
                <span className="text-elemental-sky font-bold">50 Hz WebSocket Binary</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sandstone-border text-center font-mono text-xs text-sandstone-muted font-medium">
              Built on React 18, Mapbox GL JS, Lucide &amp; Tailwind CSS
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex justify-between items-center font-mono text-xs text-sandstone-muted">
        <div>Lead Architect: <strong className="text-earth-forest">Siva Kesava (3D GIS Lead)</strong> • Source: <code className="text-elemental-sky font-bold">sutra_ws/src/sutra_gcs/</code></div>
        <div className="text-earth-forest font-bold">Production React Build Verified • Zero Frame Drops</div>
      </footer>

    </div>
  );
};
