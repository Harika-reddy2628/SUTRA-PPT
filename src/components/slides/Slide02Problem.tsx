import React from 'react';
import { AlertOctagon, WifiOff, MapPinOff, DollarSign } from 'lucide-react';

export const Slide02Problem: React.FC = () => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-12 lg:p-14">
      
      {/* Header */}
      <header className="flex justify-between items-center pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 border border-rose-500/30 text-rose-400">
            TACTICAL BOTTLENECKS
          </span>
          <span className="font-mono text-xs text-slate-400">
            CRITICAL FAILURE MODES IN MOUNTAINOUS SEARCH & RESCUE
          </span>
        </div>
        <div className="font-mono text-xs text-slate-500">SECTION 01 / 07</div>
      </header>

      {/* Main Content */}
      <main className="my-auto">
        <div className="max-w-3xl mb-8">
          <div className="font-mono text-xs font-bold tracking-widest text-rose-400 uppercase mb-2">
            The Operational Reality
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Why Conventional Drones Fail in Disaster Zones
          </h2>
          <p className="text-slate-300 text-base mt-2">
            Catastrophic terrain like Kedarnath flash floods and Wayanad landslides impose three fatal physical barriers that cripple single-drone commercial autopilots.
          </p>
        </div>

        {/* 3 Bottlenecks Grid */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="relative p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 transition-all flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-500"></div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                <WifiOff className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
                Bottleneck 01
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                The Digital Cliff & RF Blackout
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Standard digital video streams (H.264/H.265 over Wi-Fi/OFDM) fail completely when packet loss exceeds <strong className="text-slate-200">5%</strong> due to mountain ridges and multi-path fading, freezing operator feeds instantly.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 font-mono text-[11px] text-rose-300">
              Impact: Total loss of situational awareness
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500"></div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <MapPinOff className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                Bottleneck 02
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                GPS Denial & Canopy Occlusion
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Deep river gorges block satellite GNSS reception, while dense forest canopies cause severe multi-pathing. Standard waypoint navigation drifts exponentially, resulting in blind tree collisions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 font-mono text-[11px] text-amber-300">
              Impact: Catastrophic drone loss in blind valleys
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500"></div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                Bottleneck 03
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                $100K+ Cost & Central Failure
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Military-grade reconnaissance drones cost upwards of <strong className="text-slate-200">$50,000–$250,000</strong> per airframe and rely on centralized command hubs. A single link drop aborts the entire mission.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 font-mono text-[11px] text-cyan-300">
              Impact: Cannot scale to multi-sq-km mass searches
            </div>
          </div>

        </div>
      </main>

      {/* Footer Banner */}
      <footer className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 flex justify-between items-center font-mono text-xs">
        <div className="flex items-center gap-2 text-cyan-400 font-bold">
          <AlertOctagon className="w-4 h-4 text-rose-500" />
          <span>SUTRA THESIS: REVISE AVIONICS & COMMS FROM FIRST PRINCIPLES</span>
        </div>
        <div className="text-slate-400">
          Decentralized Swarm • Analog-Deep Semantic Comms • 3D Voxel Autopilot
        </div>
      </footer>

    </div>
  );
};
