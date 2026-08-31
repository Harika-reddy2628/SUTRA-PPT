import React from 'react';
import { AlertOctagon, WifiOff, MapPinOff, DollarSign } from 'lucide-react';

export const Slide02Problem: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14 text-earth-forest">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-sandstone-border/80">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-earth-terracottaSoft border border-earth-terracotta/25 text-earth-terracotta">
            TACTICAL BOTTLENECKS
          </span>
          <span className="font-mono text-xs text-sandstone-muted font-medium">
            CRITICAL FAILURE MODES IN MOUNTAINOUS SEARCH &amp; RESCUE
          </span>
        </div>
        <div className="font-mono text-xs text-sandstone-faint font-semibold">SECTION 01 / 07</div>
      </header>

      {/* Main Content */}
      <main className="my-auto">
        <div className="max-w-3xl mb-8">
          <div className="font-mono text-xs font-bold tracking-widest text-earth-terracotta uppercase mb-2">
            The Operational Reality
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-earth-forest tracking-tight uppercase">
            Why Conventional Drones Fail in Disaster Zones
          </h2>
          <p className="text-sandstone-muted text-base mt-2">
            Catastrophic terrain like Kedarnath flash floods and Wayanad landslides impose three fatal physical barriers that cripple single-drone commercial autopilots.
          </p>
        </div>

        {/* 3 Bottlenecks Grid */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="relative p-7 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-earth-terracotta"></div>
            <div>
              <div className="w-11 h-11 rounded-xl bg-earth-terracottaSoft border border-earth-terracotta/20 flex items-center justify-center text-earth-terracotta mb-4">
                <WifiOff className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-earth-terracotta uppercase tracking-wider mb-1">
                Bottleneck 01
              </div>
              <h3 className="font-heading text-xl font-bold text-earth-forest mb-2">
                The Digital Cliff &amp; RF Blackout
              </h3>
              <p className="text-sandstone-muted text-xs leading-relaxed">
                Standard digital video streams (H.264/H.265 over Wi-Fi/OFDM) fail completely when packet loss exceeds <strong className="text-earth-forest">5%</strong> due to mountain ridges and multi-path fading, freezing operator feeds instantly.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sandstone-border/80 font-mono text-[11px] font-semibold text-earth-terracotta">
              Impact: Total loss of situational awareness
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative p-7 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-earth-ochre"></div>
            <div>
              <div className="w-11 h-11 rounded-xl bg-earth-ochreSoft border border-earth-ochre/25 flex items-center justify-center text-earth-ochre mb-4">
                <MapPinOff className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-earth-ochre uppercase tracking-wider mb-1">
                Bottleneck 02
              </div>
              <h3 className="font-heading text-xl font-bold text-earth-forest mb-2">
                GPS Denial &amp; Canopy Occlusion
              </h3>
              <p className="text-sandstone-muted text-xs leading-relaxed">
                Deep river gorges block satellite GNSS reception, while dense forest canopies cause severe multi-pathing. Standard waypoint navigation drifts exponentially, resulting in blind tree collisions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sandstone-border/80 font-mono text-[11px] font-semibold text-earth-ochre">
              Impact: Catastrophic drone loss in blind valleys
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative p-7 rounded-2xl bg-white/95 border border-sandstone-border shadow-card-light hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-earth-sage"></div>
            <div>
              <div className="w-11 h-11 rounded-xl bg-earth-sageSoft border border-earth-sage/25 flex items-center justify-center text-earth-sage mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-earth-sage uppercase tracking-wider mb-1">
                Bottleneck 03
              </div>
              <h3 className="font-heading text-xl font-bold text-earth-forest mb-2">
                $100K+ Cost &amp; Central Failure
              </h3>
              <p className="text-sandstone-muted text-xs leading-relaxed">
                Military-grade reconnaissance drones cost upwards of <strong className="text-earth-forest">$50,000–$250,000</strong> per airframe and rely on centralized command hubs. A single link drop aborts the entire mission.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sandstone-border/80 font-mono text-[11px] font-semibold text-earth-sage">
              Impact: Cannot scale to multi-sq-km mass searches
            </div>
          </div>

        </div>
      </main>

      {/* Footer Banner */}
      <footer className="p-4 rounded-xl bg-white/95 border border-sandstone-border shadow-card-light flex justify-between items-center font-mono text-xs">
        <div className="flex items-center gap-2 text-earth-forest font-bold">
          <AlertOctagon className="w-4 h-4 text-earth-terracotta" />
          <span>SUTRA THESIS: REVISE AVIONICS &amp; COMMS FROM FIRST PRINCIPLES</span>
        </div>
        <div className="text-sandstone-muted font-medium">
          Decentralized Swarm • Analog-Deep Semantic Comms • 3D Voxel Autopilot
        </div>
      </footer>

    </div>
  );
};
