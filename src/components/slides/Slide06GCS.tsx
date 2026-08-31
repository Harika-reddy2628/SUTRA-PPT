import React from 'react';
import { MonitorPlay, Layers, Shield, FileCode2 } from 'lucide-react';

export const Slide06GCS: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 border border-sky-500/30 text-sky-400">
            SUBSYSTEM D · 3D GIS GROUND CONTROL STATION
          </span>
          <span className="font-mono text-xs text-slate-400">
            PEGASUS-GRADE REACT 18 + WEBGPU 60 FPS + MIL-STD-2525 ATAK COT XML
          </span>
        </div>
        <div className="font-mono text-xs text-slate-500">SECTION 05 / 07</div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left 6 cols */}
        <div className="col-span-6 flex flex-col gap-5">
          <div>
            <div className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
              Military Common Operating Picture (COP)
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight">
              Pegasus 3D GIS Tactical GCS
            </h2>
          </div>

          <div className="space-y-3 font-body text-xs lg:text-sm text-slate-300">
            
            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <MonitorPlay className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">Decoupled WebGPU 60.0 FPS Video Engine</strong>
                Decouples high-bandwidth binary WebSocket frame streams from React state reconciliation, blitting decoded textures directly into WebGPU canvas buffers without frame drops.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <FileCode2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">MIL-STD-2525 Cursor-on-Target (CoT) XML</strong>
                Auto-generates standard military CoT packets broadcast over UDP port 4242, enabling seamless drop-in integration with soldier ATAK / WinTAK tablets.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <Shield className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block mb-0.5">1-Click Emergency Swarm RTL Failsafe</strong>
                Instant swarm-wide Return-to-Launch command broadcasts synchronized rendezvous waypoints with staggered return altitudes to avoid airspace clustering.
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 cols */}
        <div className="col-span-6">
          <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
              <div className="font-mono text-xs font-bold text-slate-200 uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                GCS FRONTEND ARCHITECTURE &amp; PERFORMANCE
              </div>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                60.0 FPS LOCKED
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Mapbox GL JS 3D Terrain Rendering</span>
                <span className="text-emerald-400 font-bold">500k Triangles @ 60 FPS</span>
              </div>

              <div className="p-3 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Simultaneous Multi-UAV Video Feeds</span>
                <span className="text-cyan-400 font-bold">5 Feeds @ 1080p WebGPU</span>
              </div>

              <div className="p-3 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">ATAK / WinTAK UDP Broadcast Latency</span>
                <span className="text-emerald-400 font-bold">&lt; 1.2 ms Packet Delay</span>
              </div>

              <div className="p-3 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Tactical Telemetry Heartbeat Stream</span>
                <span className="text-sky-400 font-bold">50 Hz WebSocket Binary</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-center font-mono text-xs text-slate-400">
              Built on React 18, Mapbox GL JS, Lucide &amp; Tailwind CSS
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center font-mono text-xs text-slate-400">
        <div>Lead Architect: <strong className="text-white">Siva Kesava (3D GIS Lead)</strong> • Source: <code className="text-sky-400">sutra_ws/src/sutra_gcs/</code></div>
        <div className="text-emerald-400 font-bold">Production React Build Verified • Zero Frame Drops</div>
      </footer>

    </div>
  );
};
