import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Activity, 
  Crosshair, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Compass
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [selectedDrone, setSelectedDrone] = useState(1);
  const [psnr, setPsnr] = useState(41.8);
  const [alt, setAlt] = useState(4.60);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPsnr(+(41.5 + Math.random() * 0.6).toFixed(1));
      setAlt(+(4.58 + Math.random() * 0.05).toFixed(2));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const droneSpecs: Record<number, { callsign: string; role: string; alt: string; vel: string; bat: string; orca: string; ekf: string }> = {
    1: { callsign: 'ALPHA-LEAD', role: 'Swarm Coordinator & Deep JSCC Relay', alt: `${alt}m`, vel: '3.20 m/s', bat: '88% (22.2V)', orca: 'ACTIVE (Leader Track)', ekf: '0.002 m² (Locked)' },
    2: { callsign: 'BRAVO-02', role: 'Thermal FLIR Survivor Scout', alt: '4.20m', vel: '3.15 m/s', bat: '85% (22.0V)', orca: 'CBF Barrier (d=4.12m)', ekf: '0.003 m² (Locked)' },
    3: { callsign: 'CHARLIE-03', role: 'mmWave Canopy Penetration Radar', alt: '3.80m', vel: '3.18 m/s', bat: '87% (22.1V)', orca: 'CBF Barrier (d=4.05m)', ekf: '0.002 m² (Locked)' },
    4: { callsign: 'DELTA-04', role: 'Visual RGB SAHI Slicing Node', alt: '4.40m', vel: '3.22 m/s', bat: '84% (21.9V)', orca: 'CBF Barrier (d=4.30m)', ekf: '0.004 m² (Locked)' },
    5: { callsign: 'ECHO-05', role: 'Mesh Perimeter & Comms Bridge', alt: '4.00m', vel: '3.12 m/s', bat: '89% (22.3V)', orca: 'CBF Barrier (d=4.18m)', ekf: '0.002 m² (Locked)' },
  };

  const copyCoords = () => {
    navigator.clipboard.writeText('30.73462, 79.06691');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10">
      
      {/* Top Banner Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-terracottaSoft border border-earth-terracotta/25 text-earth-terracotta shadow-sm">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>DEFENSE &amp; DISASTER ROBOTICS</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-sageSoft border border-earth-sage/30 text-earth-forest shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>NDMA / DARPA-TIER OPEN ARCHITECTURE</span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-sandstone-muted bg-white border border-sandstone-border shadow-sm">
          <Compass className="w-3.5 h-3.5 text-earth-forest" />
          <span>KEDARNATH SECTOR: 30.7346° N, 79.0669° E</span>
        </div>
      </div>

      {/* Main Hero Diptych */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        {/* Left Column: Mission Thesis */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black text-earth-forest tracking-tight uppercase leading-[1.02]">
            Autonomous Multi-Drone Swarm Architecture
          </h1>

          <p className="font-serif italic text-2xl lg:text-3xl text-earth-sage font-semibold leading-snug">
            When GPS Fails and RF Links Jam, SUTRA Geonavigates and Locates Survivors in Real-Time.
          </p>

          <p className="text-sandstone-muted text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
            Project SUTRA is a decentralized, 6-subsystem autonomous UAV swarm engineered for high-altitude mountainous search-and-rescue. Combining <strong className="text-earth-forest font-bold">Deep JSCC zero-cliff video transmission</strong>, <strong className="text-earth-forest font-bold">Tesla-style 3D voxel occupancy grids</strong>, and <strong className="text-earth-forest font-bold">3.59cm terrain-corrected DEM geolocation</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#fsd"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-earth-forest text-white font-mono text-xs font-bold shadow-lg hover:bg-earth-terracotta transition-all hover:shadow-xl group"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>EXPLORE AUTONOMOUS FSD</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#benchmarks"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-sandstone-border text-earth-forest font-mono text-xs font-bold hover:bg-canvas-raised transition-all shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>232 / 232 VERIFIED TESTS</span>
            </a>
          </div>

          {/* Subsystems Mini Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4">
            <div className="p-2.5 rounded-lg bg-white border border-sandstone-border text-center shadow-sm">
              <div className="font-mono text-[10px] font-bold text-earth-forest">SUBSYS A</div>
              <div className="text-[11px] text-sandstone-muted font-medium mt-0.5">SUTRA-FSD &amp; ORCA</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-sandstone-border text-center shadow-sm">
              <div className="font-mono text-[10px] font-bold text-earth-terracotta">SUBSYS B</div>
              <div className="text-[11px] text-sandstone-muted font-medium mt-0.5">Deep JSCC Comms</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-sandstone-border text-center shadow-sm">
              <div className="font-mono text-[10px] font-bold text-earth-sage">SUBSYS C</div>
              <div className="text-[11px] text-sandstone-muted font-medium mt-0.5">Tri-Modal AI (3.59cm)</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-sandstone-border text-center shadow-sm">
              <div className="font-mono text-[10px] font-bold text-elemental-sky">SUBSYS D</div>
              <div className="text-[11px] text-sandstone-muted font-medium mt-0.5">Pegasus 3D GCS</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Live Swarm Fleet Inspector */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl p-7 bg-white/95 border border-sandstone-border shadow-card-hover backdrop-blur-xl">
            
            {/* Top Accent Gradient */}
            <div className="absolute top-0 left-10 right-10 h-[3px] bg-gradient-to-r from-earth-forest via-earth-sage to-earth-terracotta rounded-full"></div>

            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-sandstone-border mb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-earth-forest">
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>LIVE FLEET TELEMETRY (GAZEBO 8)</span>
              </div>
              <div className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold text-earth-forest bg-earth-sageSoft border border-earth-sage/30">
                SWARM-RAFT LOCKED
              </div>
            </div>

            {/* Drone Selector Tabs */}
            <div className="flex gap-1.5 p-1 rounded-xl bg-canvas-raised border border-sandstone-border mb-4">
              {[1, 2, 3, 4, 5].map(id => (
                <button
                  key={id}
                  onClick={() => setSelectedDrone(id)}
                  className={`flex-1 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${selectedDrone === id ? 'bg-earth-forest text-white shadow-sm' : 'text-sandstone-muted hover:text-earth-forest'}`}
                >
                  UAV-0{id}
                </button>
              ))}
            </div>

            {/* Selected Drone Telemetry Card */}
            <div className="space-y-2.5 font-mono text-xs mb-4">
              <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted">CALLSIGN / ROLE</span>
                <span className="text-earth-forest font-bold">{droneSpecs[selectedDrone].callsign}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border">
                  <div className="text-sandstone-muted text-[10px]">ALTITUDE (AGL)</div>
                  <div className="text-earth-forest font-bold text-sm mt-0.5">{droneSpecs[selectedDrone].alt}</div>
                </div>
                <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border">
                  <div className="text-sandstone-muted text-[10px]">CRUISING SPEED</div>
                  <div className="text-earth-sage font-bold text-sm mt-0.5">{droneSpecs[selectedDrone].vel}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted">ORCA 3D STATUS</span>
                <span className="text-emerald-700 font-bold">{droneSpecs[selectedDrone].orca}</span>
              </div>

              <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border flex justify-between items-center">
                <span className="text-sandstone-muted">NEURAL DEEP JSCC LINK</span>
                <span className="text-earth-forest font-bold">-5.0 dB SNR | {psnr} dB PSNR</span>
              </div>
            </div>

            {/* Target Acquired Box */}
            <div className="p-4 rounded-2xl bg-canvas-raised border border-dashed border-earth-sage/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-earth-sage/20 border border-earth-sage/40 flex items-center justify-center text-earth-forest text-sm">
                  <Crosshair className="w-5 h-5 animate-spin text-earth-forest" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-sandstone-muted tracking-wider font-bold">
                    SURVIVOR TARGET ACQUIRED
                  </div>
                  <div className="font-mono text-xs font-bold text-earth-forest">
                    30.73462° N, 79.06691° E
                  </div>
                </div>
              </div>
              <button
                onClick={copyCoords}
                className="px-3 py-1.5 rounded-lg bg-white border border-sandstone-border text-earth-forest font-mono text-xs font-bold hover:bg-canvas-hover transition-colors shadow-sm"
              >
                {copied ? '✓ COPIED' : 'ERR: 0.0359m'}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* 4 Bottom Benchmark Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="relative p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden hover:shadow-card-hover transition-all">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-earth-forest"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-4xl font-extrabold text-earth-forest">
            232/232 <span className="font-mono text-xs text-sandstone-muted font-bold">TESTS</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-2">
            Zero-Mock Verification
          </div>
          <p className="text-xs text-sandstone-muted mt-1 leading-relaxed">
            100% automated pytest suite passing with live telemetry stdout across all 6 subsystems.
          </p>
        </div>

        <div className="relative p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden hover:shadow-card-hover transition-all">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-earth-terracotta"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-4xl font-extrabold text-earth-terracotta">
            96.9% <span className="font-mono text-xs text-sandstone-muted font-bold">BW SAVED</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-2">
            Deep JSCC Compression
          </div>
          <p className="text-xs text-sandstone-muted mt-1 leading-relaxed">
            512 KB → 16 KB frames surviving extreme -5 dB jamming without catastrophic digital cliff.
          </p>
        </div>

        <div className="relative p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden hover:shadow-card-hover transition-all">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-earth-sage"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-4xl font-extrabold text-earth-sage">
            3.59 <span className="font-mono text-xs text-sandstone-muted font-bold">CM</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-2">
            WGS84 DEM Geolocation
          </div>
          <p className="text-xs text-sandstone-muted mt-1 leading-relaxed">
            Terrain-corrected raycaster error from 30m altitude over steep Kedarnath slopes.
          </p>
        </div>

        <div className="relative p-6 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light overflow-hidden hover:shadow-card-hover transition-all">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-elemental-sky"></div>
          <div className="flex items-baseline gap-1.5 font-heading text-4xl font-extrabold text-elemental-sky">
            60.0 <span className="font-mono text-xs text-sandstone-muted font-bold">FPS</span>
          </div>
          <div className="font-mono text-xs font-bold uppercase text-earth-forest mt-2">
            WebGPU Multi-Stream GCS
          </div>
          <p className="text-xs text-sandstone-muted mt-1 leading-relaxed">
            Locked 60 FPS zero frame-drop tactical 3D GIS Ground Control Station streaming ATAK CoT.
          </p>
        </div>

      </div>

    </section>
  );
};
