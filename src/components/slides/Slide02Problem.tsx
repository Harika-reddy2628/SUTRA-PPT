import React from 'react';
import { Compass, Radio, Mountain, Users } from 'lucide-react';

export const Slide02Problem: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#09090B] font-sans flex flex-col justify-between p-7 lg:p-11 select-none overflow-hidden border border-[#E4E4E7]">
      
      {/* Hallmark Tactical Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Top Header */}
        <header className="flex justify-between items-center pb-3 border-b border-[#E4E4E7]">
          <div className="flex items-center gap-3.5">
            <div className="w-1.5 h-6 bg-red-600 rounded-sm"></div>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#09090B]">
              THE PROBLEM — 4 SUBSYSTEM FAILURE VOIDS
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-200 bg-red-50 text-[10.5px] font-bold uppercase tracking-[0.18em] text-red-800 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>FIELD BOTTLENECKS</span>
            </div>
          </div>
        </header>

        {/* Main Headline & Quick Failure Metrics */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pt-1 gap-2">
          <div className="max-w-4xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[33px] font-bold text-[#09090B] tracking-tight leading-tight">
              Traditional Search &amp; Rescue Fails Across <span className="text-red-600">4 Critical Voids</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10.5px] text-slate-700">
            <span className="px-2.5 py-1 rounded-md bg-red-50 border border-red-200 text-red-800 font-bold">70% CANOPY CRASHES</span>
            <span className="px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E4E4E7]">15-30m GEO ERROR</span>
            <span className="px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E4E4E7]">2-3 HOURS DELAY</span>
            <span className="px-2.5 py-1 rounded-md bg-red-50 border border-red-200 text-red-800 font-bold">₹40L+ MILITARY AIRFRAMES</span>
          </div>
        </div>

        {/* 4-Column Subsystem Problem Void Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch my-auto">
          
          {/* Column 1: Subsystem A Void (GNC & Navigation) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-red-400 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-red-800 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  GPS MULTI-PATH
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM A // GNC</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  Canopy GPS Drift &amp; Crashes
                </h3>
              </div>

              {/* Problem Mechanism Box */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">CORE FAILURE MECHANISM:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">Dense foliage blocks satellite GNSS signals</div>
              </div>

              {/* Failure Impact */}
              <div className="p-2 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-800 uppercase">OPERATIONAL IMPACT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Commercial flight controllers lose position lock, drifting into tree canopies and causing catastrophic rotor loss.
                </p>
              </div>

              {/* Empirical Failure Spec */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-red-700">70% Loss</div>
                  <div className="text-[8px] text-slate-500">Canopy Sorties</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">0 Hold</div>
                  <div className="text-[8px] text-slate-500">Non-GPS Stability</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>TARGET: PX4 &amp; 3D ORCA</span>
              <span className="text-red-700 font-bold">LEAD: NIKHIL</span>
            </div>
            <div className="h-1 w-full bg-red-500 absolute bottom-0 left-0"></div>
          </div>

          {/* Column 2: Subsystem B Void (Wireless Communications) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-red-400 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700">
                  <Radio className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-red-800 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  DIGITAL CLIFF
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM B // COMMS</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  Mountain Ravine RF Blackout
                </h3>
              </div>

              {/* Problem Mechanism Box */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">CORE FAILURE MECHANISM:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">Ridgelines sever direct line-of-sight RF</div>
              </div>

              {/* Failure Impact */}
              <div className="p-2 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-800 uppercase">OPERATIONAL IMPACT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Conventional H.264 digital video completely cuts out below 5dB SNR, plunging base operators into total blindness.
                </p>
              </div>

              {/* Empirical Failure Spec */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-red-700">&lt;5dB SNR</div>
                  <div className="text-[8px] text-slate-500">Video Blackout</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">0 Relay</div>
                  <div className="text-[8px] text-slate-500">Single-Drone Link</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>TARGET: DEEP JSCC MESH</span>
              <span className="text-red-700 font-bold">LEAD: NIKHIL</span>
            </div>
            <div className="h-1 w-full bg-red-500 absolute bottom-0 left-0"></div>
          </div>

          {/* Column 3: Subsystem C Void (AI Perception & Geolocation) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-red-400 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700">
                  <Mountain className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-red-800 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  35% FALSE ALARMS
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM C // VISION</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  Flat-Earth Elevation Drift
                </h3>
              </div>

              {/* Problem Mechanism Box */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">CORE FAILURE MECHANISM:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">2D raycasts assume flat zero-elevation ground</div>
              </div>

              {/* Failure Impact */}
              <div className="p-2.5 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-800 uppercase">OPERATIONAL IMPACT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Sloping terrains produce 15–30m calculated coordinate errors, routing emergency ground teams to empty ravines.
                </p>
              </div>

              {/* Empirical Failure Spec */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-red-700">15–30m</div>
                  <div className="text-[8px] text-slate-500">Location Drift</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">35%</div>
                  <div className="text-[8px] text-slate-500">False Alarm Rate</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>TARGET: 3D DEM RAYCAST</span>
              <span className="text-red-700 font-bold">LEAD: VEDANTH</span>
            </div>
            <div className="h-1 w-full bg-red-500 absolute bottom-0 left-0"></div>
          </div>

          {/* Column 4: Subsystem D Void (Tactical C2 & Operations) */}
          <div className="flex flex-col justify-between p-4 lg:p-5 rounded-2xl border border-[#E4E4E7] bg-white hover:border-red-400 hover:shadow-md transition-all group relative overflow-hidden space-y-3 shadow-sm">
            <div className="space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E4E4E7]">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-700">
                  <Users className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9.5px] font-bold text-red-800 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                  15-25 CREW LOAD
                </span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">SUBSYSTEM D // C2 GCS</span>
                <h3 className="text-base lg:text-lg font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                  Central Pilot Bottleneck
                </h3>
              </div>

              {/* Problem Mechanism Box */}
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <div className="text-[8.5px] font-mono font-bold text-red-700 uppercase">CORE FAILURE MECHANISM:</div>
                <div className="text-[10.5px] font-semibold text-slate-900 leading-tight mt-0.5">1-pilot-per-drone manual radio control</div>
              </div>

              {/* Failure Impact */}
              <div className="p-2.5 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-800 uppercase">OPERATIONAL IMPACT:</div>
                <p className="text-[11.5px] text-slate-600 font-mono leading-relaxed">
                  Requires 15–25 field personnel and 45–90 min setup; sortie collapses immediately if the single pilot link drops.
                </p>
              </div>

              {/* Empirical Failure Spec */}
              <div className="grid grid-cols-2 gap-1.5 text-center font-mono">
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-red-700">2–3 Hrs</div>
                  <div className="text-[8px] text-slate-500">Search Time / mi²</div>
                </div>
                <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                  <div className="text-[11px] font-bold text-[#09090B]">₹12.5L</div>
                  <div className="text-[8px] text-slate-500">Cost / Deployment</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#E4E4E7] flex items-center justify-between text-[9.5px] font-mono text-slate-400">
              <span>TARGET: WEBGPU ATAK GCS</span>
              <span className="text-red-700 font-bold">LEAD: SIVA</span>
            </div>
            <div className="h-1 w-full bg-red-500 absolute bottom-0 left-0"></div>
          </div>

        </main>

        {/* Disaster Field Audit & Verification Citations (Bottom Row) */}
        <footer className="pt-2.5 border-t border-[#E4E4E7] flex flex-col gap-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">FIELD EVIDENCE</span>
              <span className="text-xs font-bold text-[#09090B]">Wayanad Landslide Audit</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">AUDIT FINDING</span>
              <span className="text-xs font-bold text-red-700">70% RF/GPS Disconnect</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">COST PENALTY</span>
              <span className="text-xs font-bold text-[#09090B]">₹40L Military Airframes</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">SURVIVOR RISK</span>
              <span className="text-xs font-bold text-red-700">412% Disaster Surge</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-xs text-slate-500">
            <div>PAGE 02</div>
            <div className="font-semibold uppercase tracking-wider text-[#09090B]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};
