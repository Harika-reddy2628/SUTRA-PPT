import React, { useState } from 'react';
import { 
  MonitorPlay, 
  Layers, 
  Shield, 
  FileCode2, 
  Copy, 
  Check, 
  AlertOctagon
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const GcsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [rtlTriggered, setRtlTriggered] = useState(false);

  const cotXml = `<?xml version="1.0" standalone="yes"?>
<event version="2.0" uid="SUTRA-SURVIVOR-ALPHA-01" type="a-f-G-U-C" time="2026-08-31T11:22:19Z" start="2026-08-31T11:22:19Z" stale="2026-08-31T11:25:19Z" how="m-g">
  <point lat="30.734620" lon="79.066910" hae="3584.20" ce="0.0359" le="0.0512"/>
  <detail>
    <contact callsign="SURVIVOR-ALPHA" endpoint="239.2.3.1:4242"/>
    <remarks>FLIR LWIR Thermal Match: 37.1°C | SUTRA Swarm Mesh Node 02</remarks>
    <precisionlocation geopointsrc="SUTRA_DEM_RAYCASTER_V1"/>
  </detail>
</event>`;

  const copyCotXml = () => {
    navigator.clipboard.writeText(cotXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRtl = () => {
    setRtlTriggered(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#183A2B', '#4A7A58', '#9E4D34', '#B68637']
    });
    setTimeout(() => setRtlTriggered(false), 4000);
  };

  return (
    <section id="gcs" className="py-28 px-6 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-elemental-skySoft border border-elemental-sky/30 text-elemental-sky">
          <MonitorPlay className="w-3.5 h-3.5" />
          <span>SUBSYSTEM D · 3D GIS GROUND CONTROL STATION</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-earth-forest uppercase tracking-tight">
          Pegasus 3D GIS GCS &amp; Military ATAK Integration
        </h2>
        <p className="text-sandstone-muted text-base sm:text-lg font-serif italic">
          Zero-dropped-frame WebGPU video architecture running live 3D topography and broadcast-ready MIL-STD-2525 Cursor-on-Target XML.
        </p>
      </div>

      {/* Main 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* Left 6 cols: WebGPU Architecture & 1-Click RTL */}
        <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-sandstone-border shadow-card-hover flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-elemental-sky uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>DECOUPLED WEBGPU VIDEO BUFFER ENGINE</span>
            </div>
            <h3 className="font-heading text-2xl font-extrabold text-earth-forest mb-4">
              Locked 60.0 FPS Multi-Stream Telemetry
            </h3>
            <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
              Standard React state updates choke when decoding 5 simultaneous 1080p drone video feeds (dropping to 14 FPS). SUTRA bypasses DOM reconciliations by blitting raw binary WebSocket chunks straight into WebGPU canvas buffers.
            </p>

            <div className="space-y-3 font-mono text-xs mb-8">
              <div className="p-3.5 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted">Mapbox GL JS 3D Topography:</span>
                <strong className="text-earth-forest font-bold">500,000 Triangles @ 60 FPS</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted">Multi-UAV Video Streams:</span>
                <strong className="text-earth-forest font-bold">5 Simultaneous Feeds</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted">ATAK UDP Broadcast Delay:</span>
                <strong className="text-emerald-700 font-bold">&lt; 1.2 ms Packet Latency</strong>
              </div>
            </div>
          </div>

          {/* 1-Click Emergency Swarm RTL Demo */}
          <div className="p-5 rounded-2xl bg-canvas-raised border border-sandstone-border">
            <div className="flex justify-between items-center mb-3">
              <div className="font-mono text-xs font-bold text-earth-forest uppercase flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-earth-terracotta" />
                <span>SWARM EMERGENCY RTL FAILSAFE</span>
              </div>
              <span className="font-mono text-[10px] text-sandstone-muted">1-CLICK TRIGGER</span>
            </div>

            <button
              onClick={handleRtl}
              className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 ${rtlTriggered ? 'bg-emerald-700 text-white' : 'bg-earth-terracotta text-white hover:bg-rose-700'}`}
            >
              {rtlTriggered ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>SWARM RETURN-TO-LAUNCH INITIATED (STAGGERED ALTITUDES)</span>
                </>
              ) : (
                <>
                  <AlertOctagon className="w-4 h-4" />
                  <span>TRIGGER 1-CLICK SWARM EMERGENCY RTL</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right 6 cols: Live CoT XML Packet Inspector */}
        <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-sandstone-border shadow-card-hover flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-sandstone-border mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-earth-forest uppercase">
                <FileCode2 className="w-4 h-4 text-earth-sage" />
                <span>MIL-STD-2525 CURSOR-ON-TARGET (COT) XML PACKET</span>
              </div>
              <button
                onClick={copyCotXml}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-canvas-raised border border-sandstone-border text-earth-forest font-mono text-xs font-bold hover:bg-canvas-hover transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY XML'}</span>
              </button>
            </div>

            <p className="text-sandstone-muted text-xs leading-relaxed mb-4">
              Broadcasts over UDP port 4242 for direct drop-in integration with military/NDMA ATAK and WinTAK handheld soldier tablets with zero translation middleware.
            </p>

            {/* XML Code Viewer */}
            <pre className="p-4 rounded-2xl bg-[#0D1F17] text-[#A7F3D0] font-mono text-[11px] leading-relaxed overflow-x-auto border border-[#183A2B] shadow-inner max-h-72">
              <code>{cotXml}</code>
            </pre>
          </div>

          <div className="mt-6 pt-4 border-t border-sandstone-border flex justify-between items-center text-xs font-mono text-sandstone-muted">
            <span>ATAK Protocol Standard: <strong className="text-earth-forest">MIL-STD-2525 / CoT v2.0</strong></span>
            <span>Broadcast Port: <strong className="text-earth-forest">UDP 4242 Multicast</strong></span>
          </div>
        </div>

      </div>

    </section>
  );
};
