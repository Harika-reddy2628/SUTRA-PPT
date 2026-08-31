import React, { useState, useEffect } from 'react';
import { Compass, Radio, Mountain, Users } from 'lucide-react';

interface SubsystemVoidData {
  subsysTag: string;
  title: string;
  badge: string;
  evidenceTag: string;
  fieldCase: string;
  fieldSource: string;
  images: string[];
  mechanism: string;
  impact: string;
  spec1Val: string;
  spec1Lbl: string;
  spec2Val: string;
  spec2Lbl: string;
  target: string;
  lead: string;
  icon: React.ReactNode;
}

const SUBSYSTEM_VOIDS: SubsystemVoidData[] = [
  {
    subsysTag: 'SUBSYSTEM A // GNC',
    title: 'Canopy GPS Drift & Crashes',
    badge: 'GPS MULTI-PATH',
    evidenceTag: 'EVIDENCE 01',
    fieldCase: 'Wayanad Canopy Crash',
    fieldSource: 'NDMA Official Review',
    images: ['assets/illustrations/gps_canopy_shadow.jpg', 'assets/disaster/wayanad_rescue.jpg'],
    mechanism: 'Dense foliage blocks satellite GNSS signals',
    impact: 'Commercial drones lose position lock, drifting into tree canopies and causing rotor loss.',
    spec1Val: '70% Loss',
    spec1Lbl: 'Canopy Sorties',
    spec2Val: '0 Hold',
    spec2Lbl: 'Non-GPS Stability',
    target: 'TARGET: PX4 & 3D ORCA',
    lead: 'LEAD: NIKHIL',
    icon: <Compass className="w-3.5 h-3.5" />,
  },
  {
    subsysTag: 'SUBSYSTEM B // COMMS',
    title: 'Mountain Ravine RF Blackout',
    badge: 'DIGITAL CLIFF',
    evidenceTag: 'EVIDENCE 02',
    fieldCase: 'Chamoli Gorge RF Cut',
    fieldSource: 'NDRF Field Incident Report',
    images: ['assets/illustrations/rf_mountain_shadow.jpg', 'assets/disaster/disaster_rescue_1.jpg'],
    mechanism: 'Ridgelines sever direct line-of-sight RF',
    impact: 'Conventional H.264 digital video completely cuts out below 5dB SNR, causing total blindness.',
    spec1Val: '<5dB SNR',
    spec1Lbl: 'Video Blackout',
    spec2Val: '0 Relay',
    spec2Lbl: 'Single-Drone Link',
    target: 'TARGET: DEEP JSCC MESH',
    lead: 'LEAD: NIKHIL',
    icon: <Radio className="w-3.5 h-3.5" />,
  },
  {
    subsysTag: 'SUBSYSTEM C // VISION',
    title: 'Flat-Earth Elevation Drift',
    badge: '35% FALSE ALARM',
    evidenceTag: 'EVIDENCE 03',
    fieldCase: 'Sikkim Slope Geo Error',
    fieldSource: 'CAG Disaster Audit',
    images: ['assets/disaster/disaster_rescue_2.jpg', 'assets/disaster/disaster_rescue_3.jpg'],
    mechanism: '2D raycasts assume flat zero-elevation ground',
    impact: 'Sloping terrains produce 15–30m coordinate errors, routing ground teams to empty ravines.',
    spec1Val: '15–30m',
    spec1Lbl: 'Location Drift',
    spec2Val: '35%',
    spec2Lbl: 'False Alarm Rate',
    target: 'TARGET: 3D DEM RAYCAST',
    lead: 'LEAD: VEDANTH',
    icon: <Mountain className="w-3.5 h-3.5" />,
  },
  {
    subsysTag: 'SUBSYSTEM D // C2 GCS',
    title: 'Central Pilot Bottleneck',
    badge: '15-25 CREW LOAD',
    evidenceTag: 'EVIDENCE 04',
    fieldCase: 'Central Link Abort',
    fieldSource: 'Field Bottleneck Report',
    images: ['assets/illustrations/single_link_loss.jpg', 'assets/disaster/disaster_rescue_5.jpg'],
    mechanism: '1-pilot-per-drone manual radio control',
    impact: 'Requires 15–25 personnel and 45–90 min setup; sortie aborts if the single pilot link drops.',
    spec1Val: '2–3 Hrs',
    spec1Lbl: 'Search Time / mi²',
    spec2Val: '₹12.5L',
    spec2Lbl: 'Cost / Deployment',
    target: 'TARGET: WEBGPU ATAK GCS',
    lead: 'LEAD: SIVA',
    icon: <Users className="w-3.5 h-3.5" />,
  },
];

export const Slide02Problem: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % 2);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#FFFFFF] text-[#09090B] font-sans flex flex-col justify-between p-6 lg:p-10 select-none overflow-hidden border border-[#E4E4E7]">
      
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
        <header className="flex justify-between items-center pb-2.5 border-b border-[#E4E4E7]">
          <div className="flex items-center gap-3.5">
            <div className="w-1.5 h-6 bg-red-600 rounded-sm"></div>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#09090B]">
              THE PROBLEM — 4 SUBSYSTEM FAILURE VOIDS
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-200 bg-red-50 text-[10.5px] font-bold uppercase tracking-[0.18em] text-red-800 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>FIELD DISASTER AUDIT</span>
            </div>
          </div>
        </header>

        {/* Main Headline & Quick Failure Metrics */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pt-1 gap-2">
          <div className="max-w-4xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#09090B] tracking-tight leading-tight">
              Traditional Search &amp; Rescue Collapses Across <span className="text-red-600">4 Critical Voids</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10.5px] text-slate-700">
            <span className="px-2.5 py-1 rounded-md bg-red-50 border border-red-200 text-red-800 font-bold">70% CANOPY CRASHES</span>
            <span className="px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E4E4E7]">15-30m GEO ERROR</span>
            <span className="px-2.5 py-1 rounded-md bg-[#F9FAFB] border border-[#E4E4E7]">2-3 HOURS DELAY</span>
            <span className="px-2.5 py-1 rounded-md bg-red-50 border border-red-200 text-red-800 font-bold">₹40L+ AIRFRAMES</span>
          </div>
        </div>

        {/* 4-Column Subsystem Problem Void Grid with Respective Image Carousels */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch my-auto">
          {SUBSYSTEM_VOIDS.map((subsys, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between p-3.5 lg:p-4 rounded-2xl border border-[#E4E4E7] bg-white hover:border-red-400 hover:shadow-md transition-all group relative overflow-hidden space-y-2.5 shadow-sm"
            >
              <div className="space-y-2">
                
                {/* Image Carousel Frame */}
                <div className="relative h-24 lg:h-28 w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group/img">
                  <img 
                    src={subsys.images[imageIndex]} 
                    alt={subsys.title} 
                    className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
                    <span className="text-[7.5px] font-mono font-bold text-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
                      {subsys.evidenceTag}
                    </span>
                    <span className="text-[7.5px] font-mono font-bold text-red-300 bg-black/60 px-1.5 py-0.5 rounded">
                      {subsys.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-1.5 left-2 right-2 z-10 text-white flex justify-between items-end">
                    <div>
                      <div className="text-[9.5px] font-bold font-heading leading-tight">{subsys.fieldCase}</div>
                      <div className="text-[7px] font-mono text-slate-300">{subsys.fieldSource}</div>
                    </div>
                    <div className="flex gap-1">
                      <span className={`w-3.5 h-1 rounded-full transition-all ${imageIndex === 0 ? 'bg-red-500' : 'bg-white/40'}`} />
                      <span className={`w-1.5 h-1 rounded-full transition-all ${imageIndex === 1 ? 'bg-red-500' : 'bg-white/40'}`} />
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest">{subsys.subsysTag}</span>
                  <h3 className="text-sm lg:text-base font-bold text-[#09090B] font-heading leading-snug mt-0.5">
                    {subsys.title}
                  </h3>
                </div>

                {/* Problem Mechanism Box */}
                <div className="p-1.5 rounded-lg bg-red-50 border border-red-200">
                  <div className="text-[7.5px] font-mono font-bold text-red-700 uppercase">CORE FAILURE MECHANISM:</div>
                  <div className="text-[9.5px] font-semibold text-slate-900 leading-tight mt-0.5">{subsys.mechanism}</div>
                </div>

                {/* Failure Impact */}
                <div className="p-1.5 rounded-lg bg-[#F9FAFB] border border-[#E4E4E7] space-y-0.5">
                  <div className="text-[8px] font-mono font-bold text-slate-800 uppercase">OPERATIONAL IMPACT:</div>
                  <p className="text-[10.5px] text-slate-600 font-mono leading-relaxed">
                    {subsys.impact}
                  </p>
                </div>

                {/* Empirical Failure Spec */}
                <div className="grid grid-cols-2 gap-1 text-center font-mono">
                  <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                    <div className="text-[10.5px] font-bold text-red-700">{subsys.spec1Val}</div>
                    <div className="text-[7px] text-slate-500">{subsys.spec1Lbl}</div>
                  </div>
                  <div className="p-1 rounded bg-[#F9FAFB] border border-[#E4E4E7]">
                    <div className="text-[10.5px] font-bold text-[#09090B]">{subsys.spec2Val}</div>
                    <div className="text-[7px] text-slate-500">{subsys.spec2Lbl}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E4E4E7] flex items-center justify-between text-[8.5px] font-mono text-slate-400">
                <span>{subsys.target}</span>
                <span className="text-red-700 font-bold">{subsys.lead}</span>
              </div>
              <div className="h-1 w-full bg-red-500 absolute bottom-0 left-0"></div>
            </div>
          ))}
        </main>

        {/* Disaster Field Audit & Verification Citations (Bottom Row) */}
        <footer className="pt-2 border-t border-[#E4E4E7] flex flex-col gap-1.5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
            <div className="p-1.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[8.5px] text-slate-500 uppercase">FIELD EVIDENCE</span>
              <span className="text-[11px] font-bold text-[#09090B]">Wayanad Landslide Audit</span>
            </div>
            <div className="p-1.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[8.5px] text-slate-500 uppercase">AUDIT FINDING</span>
              <span className="text-[11px] font-bold text-red-700">70% RF/GPS Disconnect</span>
            </div>
            <div className="p-1.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[8.5px] text-slate-500 uppercase">COST PENALTY</span>
              <span className="text-[11px] font-bold text-[#09090B]">₹40L Military Airframes</span>
            </div>
            <div className="p-1.5 rounded-xl bg-[#F9FAFB] border border-[#E4E4E7] flex justify-between items-center">
              <span className="text-[8.5px] text-slate-500 uppercase">SURVIVOR RISK</span>
              <span className="text-[11px] font-bold text-red-700">412% Disaster Surge</span>
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-[11px] text-slate-500">
            <div>PAGE 02</div>
            <div className="font-semibold uppercase tracking-wider text-[#09090B]">TEAM OFFGRID — PROJECT SUTRA</div>
          </div>
        </footer>

      </div>

    </div>
  );
};
