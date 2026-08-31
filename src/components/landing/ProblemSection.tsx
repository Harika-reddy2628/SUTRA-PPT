import React, { useState } from 'react';
import { 
  WifiOff, 
  MapPinOff, 
  DollarSign, 
  XCircle, 
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rf' | 'gps' | 'cost'>('rf');

  return (
    <section id="problem" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-terracottaSoft border border-earth-terracotta/25 text-earth-terracotta">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>THE OPERATIONAL CRISIS</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-earth-forest uppercase tracking-tight">
          Why Standard Drones Fail in Mountain Disasters
        </h2>
        <p className="text-sandstone-muted text-base sm:text-lg font-serif italic">
          High-altitude gorges, dense foliage, and multi-path RF scattering break conventional consumer and military drones within minutes.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex justify-center gap-3 mb-12">
        <button
          onClick={() => setActiveTab('rf')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all ${activeTab === 'rf' ? 'bg-earth-forest text-white shadow-md' : 'bg-white border border-sandstone-border text-sandstone-muted hover:text-earth-forest hover:bg-canvas-raised'}`}
        >
          <WifiOff className="w-4 h-4" />
          <span>01. THE DIGITAL CLIFF</span>
        </button>

        <button
          onClick={() => setActiveTab('gps')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all ${activeTab === 'gps' ? 'bg-earth-forest text-white shadow-md' : 'bg-white border border-sandstone-border text-sandstone-muted hover:text-earth-forest hover:bg-canvas-raised'}`}
        >
          <MapPinOff className="w-4 h-4" />
          <span>02. GPS DENIAL &amp; CANOPY</span>
        </button>

        <button
          onClick={() => setActiveTab('cost')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold transition-all ${activeTab === 'cost' ? 'bg-earth-forest text-white shadow-md' : 'bg-white border border-sandstone-border text-sandstone-muted hover:text-earth-forest hover:bg-canvas-raised'}`}
        >
          <DollarSign className="w-4 h-4" />
          <span>03. $100K+ CENTRAL FAILURE</span>
        </button>
      </div>

      {/* Tab 1: The Digital Cliff */}
      {activeTab === 'rf' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Legacy Failure */}
          <div className="p-8 rounded-3xl bg-white border border-sandstone-border shadow-card-light flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sandstone-border mb-6">
                <div className="flex items-center gap-2 text-earth-terracotta font-mono font-bold text-xs uppercase">
                  <XCircle className="w-4 h-4" />
                  <span>CONVENTIONAL DIGITAL STREAMING (H.264 / RTSP)</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-earth-terracotta bg-earth-terracottaSoft px-2.5 py-0.5 rounded-full">
                  FATAL FLAW
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
                Sudden Blackouts at &gt;5% Packet Loss
              </h3>
              <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
                Digital encoding creates brittle NAL packet headers. In deep mountain gorges, RF multi-pathing drops keyframes, causing video player decoders to instantly freeze into black screens right when operators are searching for survivors.
              </p>
              
              <div className="p-4 rounded-xl bg-canvas-raised border border-sandstone-border font-mono text-xs text-sandstone-muted space-y-2">
                <div className="flex justify-between"><span>Frame Loss Threshold:</span><strong className="text-earth-terracotta">&gt; 5% Drops Stream</strong></div>
                <div className="flex justify-between"><span>RF Jamming Tolerance:</span><strong className="text-earth-terracotta">0 dB (Complete Blackout)</strong></div>
                <div className="flex justify-between"><span>Decoded Bandwidth:</span><strong className="text-sandstone-muted">512 KB / Frame (Uncompressed)</strong></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sandstone-border font-mono text-xs text-earth-terracotta font-bold">
              Result: Search teams lose eye-in-the-sky in critical moments
            </div>
          </div>

          {/* SUTRA Solution */}
          <div className="p-8 rounded-3xl bg-white border border-earth-sage/40 shadow-card-hover flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-earth-sage to-earth-forest"></div>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sandstone-border mb-6">
                <div className="flex items-center gap-2 text-emerald-700 font-mono font-bold text-xs uppercase">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>SUTRA DEEP JSCC NEURAL AUTOENCODER</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-sageSoft px-2.5 py-0.5 rounded-full">
                  THE SUTRA BREAKTHROUGH
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
                Graceful Analog Blur Down to -5.0 dB SNR
              </h3>
              <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
                Directly maps RGB &amp; FLIR thermal features to analog channel constellations. In extreme -5 dB jamming, SUTRA transmits soft analog blur, guaranteeing human body heat signatures remain unmistakably visible.
              </p>
              
              <div className="p-4 rounded-xl bg-earth-sageSoft/40 border border-earth-sage/30 font-mono text-xs text-earth-forest space-y-2">
                <div className="flex justify-between"><span>Latent Compression:</span><strong className="text-earth-forest font-bold">96.9% (512KB → 16KB)</strong></div>
                <div className="flex justify-between"><span>RF Jamming Tolerance:</span><strong className="text-earth-forest font-bold">-5.0 dB SNR (41.8 dB PSNR)</strong></div>
                <div className="flex justify-between"><span>Recovery Mode:</span><strong className="text-earth-forest font-bold">Instant Zero-Buffering Reconnect</strong></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sandstone-border font-mono text-xs text-emerald-800 font-bold">
              Result: Uninterrupted thermal survivor detection through mountain ridges
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: GPS Denial */}
      {activeTab === 'gps' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="p-8 rounded-3xl bg-white border border-sandstone-border shadow-card-light flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sandstone-border mb-6">
                <div className="flex items-center gap-2 text-earth-terracotta font-mono font-bold text-xs uppercase">
                  <XCircle className="w-4 h-4" />
                  <span>STANDARD WAYPOINT AUTOPILOT (PX4/ARDUPILOT DEFAULT)</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-earth-terracotta bg-earth-terracottaSoft px-2.5 py-0.5 rounded-full">
                  FATAL FLAW
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
                Unbounded Drift &amp; Canopy Tree Collisions
              </h3>
              <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
                Standard autopilots assume clear GNSS satellite reception. Under dense pine canopies or in Kedarnath river valleys, GPS multipath causes position jumps of 10–30 meters, resulting in violent mid-air branch collisions.
              </p>
              
              <div className="p-4 rounded-xl bg-canvas-raised border border-sandstone-border font-mono text-xs text-sandstone-muted space-y-2">
                <div className="flex justify-between"><span>GPS-Denied Drift:</span><strong className="text-earth-terracotta">&gt; 12.5m / minute</strong></div>
                <div className="flex justify-between"><span>Avoidance Resolution:</span><strong className="text-earth-terracotta">2D Point Distance (Blind to 3D Obstacles)</strong></div>
                <div className="flex justify-between"><span>Parallel Flight:</span><strong className="text-earth-terracotta">ORCA Zero-Repulsion Singularity</strong></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sandstone-border font-mono text-xs text-earth-terracotta font-bold">
              Result: Drones collide with pine canopies and disappear into valleys
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-earth-sage/40 shadow-card-hover flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-earth-sage to-earth-forest"></div>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sandstone-border mb-6">
                <div className="flex items-center gap-2 text-emerald-700 font-mono font-bold text-xs uppercase">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>SUTRA-FSD 3D OCCUPANCY + ORCA 3D</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-sageSoft px-2.5 py-0.5 rounded-full">
                  THE SUTRA BREAKTHROUGH
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
                32×32×16 Voxel Cost-Volume &amp; CBF Hard Safety Shield
              </h3>
              <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
                Constructs a local spatio-temporal 3D occupancy grid with temporal decay (λ=0.92) and plans smooth 5th-order quintic splines. Our ORCA 3D solver injects static penetration push, guaranteeing zero collisions across 5 intersecting drones.
              </p>
              
              <div className="p-4 rounded-xl bg-earth-sageSoft/40 border border-earth-sage/30 font-mono text-xs text-earth-forest space-y-2">
                <div className="flex justify-between"><span>VIO Odometry Fusion:</span><strong className="text-earth-forest font-bold">Stereo VIO + IMU 6-DOF (&lt;0.05m drift)</strong></div>
                <div className="flex justify-between"><span>Dynamic Clearance:</span><strong className="text-earth-forest font-bold">3.80m – 7.44m Guaranteed Clearance</strong></div>
                <div className="flex justify-between"><span>Crosswind Rejection:</span><strong className="text-earth-forest font-bold">18.0 m/s Gusts (0.04ms NeuroFlight)</strong></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sandstone-border font-mono text-xs text-emerald-800 font-bold">
              Result: Flawless autonomous flight through dense canopy clutter
            </div>
          </div>

        </div>
      )}

      {/* Tab 3: Cost & Central Failure */}
      {activeTab === 'cost' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="p-8 rounded-3xl bg-white border border-sandstone-border shadow-card-light flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sandstone-border mb-6">
                <div className="flex items-center gap-2 text-earth-terracotta font-mono font-bold text-xs uppercase">
                  <XCircle className="w-4 h-4" />
                  <span>COMMERCIAL DEFENSE PLATFORMS (TELEDYNE / SKYDIO MIL)</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-earth-terracotta bg-earth-terracottaSoft px-2.5 py-0.5 rounded-full">
                  FATAL FLAW
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
                $50,000–$250,000 / Unit &amp; Centralized GCS Failure
              </h3>
              <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
                High unit cost prevents deploying wide-area multi-drone swarms. If the single high-power ground transmitter loses line-of-sight behind a mountain spur, all drones fail simultaneously.
              </p>
              
              <div className="p-4 rounded-xl bg-canvas-raised border border-sandstone-border font-mono text-xs text-sandstone-muted space-y-2">
                <div className="flex justify-between"><span>Unit Airframe Cost:</span><strong className="text-earth-terracotta">$50,000 – $250,000</strong></div>
                <div className="flex justify-between"><span>Topology:</span><strong className="text-earth-terracotta">Star Network (Single Point of Failure)</strong></div>
                <div className="flex justify-between"><span>Leader Crash Behavior:</span><strong className="text-earth-terracotta">Total Swarm Disorientation</strong></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sandstone-border font-mono text-xs text-earth-terracotta font-bold">
              Result: Disaster response teams can only deploy 1-2 expensive drones
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-earth-sage/40 shadow-card-hover flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-earth-sage to-earth-forest"></div>
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sandstone-border mb-6">
                <div className="flex items-center gap-2 text-emerald-700 font-mono font-bold text-xs uppercase">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>SUTRA OPEN HARDWARE &amp; SWARMRAFT MESH</span>
                </div>
                <span className="font-mono text-[11px] font-bold text-earth-forest bg-earth-sageSoft px-2.5 py-0.5 rounded-full">
                  THE SUTRA BREAKTHROUGH
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-earth-forest mb-3">
                $145 – $269 / Unit with &lt;50ms Leader Failover
              </h3>
              <p className="text-sandstone-muted text-sm leading-relaxed mb-6">
                Runs on open-source PX4, Raspberry Pi/Jetson companions, and ESP32-S3 micro swarms. SwarmRAFT quorum consensus automatically re-elects a new leader drone in &lt;50ms if the front scout crashes.
              </p>
              
              <div className="p-4 rounded-xl bg-earth-sageSoft/40 border border-earth-sage/30 font-mono text-xs text-earth-forest space-y-2">
                <div className="flex justify-between"><span>Micro Swarm Airframe:</span><strong className="text-earth-forest font-bold">$145 / UAV (ESP32-S3 Flow)</strong></div>
                <div className="flex justify-between"><span>Full Tactical Airframe:</span><strong className="text-earth-forest font-bold">$269 / UAV (F450 Thermal Rig)</strong></div>
                <div className="flex justify-between"><span>Swarm Scaling:</span><strong className="text-earth-forest font-bold">100X Cost Advantage (50 Swarms for Price of 1)</strong></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sandstone-border font-mono text-xs text-emerald-800 font-bold">
              Result: Massive, disposable multi-agent swarm blankets entire mountain sectors
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
