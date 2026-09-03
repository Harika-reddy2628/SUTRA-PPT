import React from 'react';
import { 
  Radio, 
  BatteryCharging, 
  ShieldCheck, 
  Sparkles, 
  OctagonAlert, 
  WifiOff, 
  Navigation
} from 'lucide-react';
import { SplitFlapText } from '../ui/SplitFlapText';

export const Slide09MasterExecutiveSummary: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FAFBFD] text-[#191C1E] font-sans flex flex-col justify-between p-4 sm:p-5 lg:p-6 select-none overflow-hidden">
      
      {/* Subtle Tactical Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between space-y-3">
        
        {/* TOP HEADER */}
        <header className="flex justify-between items-center pb-2.5 border-b border-[#E1E3E8]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-7 bg-[#006C4C] rounded-full shadow-xs"></div>
            <div>
              <div className="font-mono text-sm sm:text-base font-black uppercase tracking-[0.2em] text-[#191C1E] flex items-center gap-2">
                <span>PROJECT SUTRA // MASTER SYSTEM ARCHITECTURE</span>
                <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#006C4C] border border-[#C8E6C9] text-[10px] font-bold">
                  ALL-IN-ONE EXECUTIVE SUMMARY
                </span>
              </div>
              <div className="text-[11px] text-[#5B6066] font-medium">
                Autonomous Multi-UAV Swarm Platform for GPS-Denied, RF-Jammed Disaster Search & Rescue (SH-DST-05)
              </div>
            </div>
          </div>

          {/* Ticker & Badges */}
          <div className="flex items-center gap-3">
            <SplitFlapText
              words={["181 / 181 TESTS OK", "10-FACTOR RISK", "CONTINUOUS SAR", "99.6% COST MOAT"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              tileColor="#003824"
              textColor="#80E4B7"
              tileRadius={5}
              gap={3}
              fontSize={12}
              loop
              padTo={18}
            />
            <div className="flex items-center gap-1.5 font-mono text-xs font-black text-[#006C4C] bg-[#E8F5E9] px-3 py-1.5 rounded-full border border-[#C8E6C9]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TEAM ID: SHIH26-TID-361</span>
            </div>
          </div>
        </header>

        {/* 3-COLUMN CORE ARCHITECTURE MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 flex-1 min-h-0">
          
          {/* COLUMN 1: DISASTER INTEL & 10-FACTOR RISK ENGINE */}
          <div className="bg-white rounded-xl border border-[#E1E3E8] p-3.5 flex flex-col justify-between shadow-xs hover:border-[#006C4C]/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F2F5]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#006C4C]">
                  <Radio className="w-4 h-4 text-[#006C4C]" />
                  <span>1. INTEL &amp; PREDICTIVE RISK</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-[#E0F2FE] text-[#0369A1] font-mono text-[9px] font-bold">
                  SUBSYSTEM B / D
                </span>
              </div>

              {/* 10-Variable Risk Formula Card */}
              <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] space-y-1">
                <div className="text-[10px] font-bold text-[#0F172A] flex items-center justify-between">
                  <span>10-FACTOR RISK MATRIX</span>
                  <span className="text-[#006C4C]">R = &Sigma; (W_i &times; F_i) &plusmn; &sigma;</span>
                </div>
                <div className="text-[9px] text-[#64748B] leading-tight">
                  Evaluates Rainfall (15%), Flood (15%), Terrain (10%), Structure (10%), Wind (8%), Mesh Comms (8%), Battery Energy (10%), Airspace (6%), Population (10%), Road Access (8%).
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono pt-1 text-[#0369A1]">
                  <span>DATA CONFIDENCE: 94%</span>
                  <span>UNCERTAINTY: &plusmn;4.2 PTS</span>
                </div>
              </div>

              {/* Alert-to-Mission Synthesis */}
              <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] space-y-1">
                <div className="text-[10px] font-bold text-[#0F172A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>AUTONOMOUS MISSION SYNTHESIS</span>
                </div>
                <div className="text-[9px] text-[#475569] font-mono">
                  Alert &rarr; Risk (84.5) &rarr; Search Area &rarr; Fleet Sizing (N) &rarr; Energy Budget &rarr; Staging LZ
                </div>
                <div className="text-[9px] text-[#64748B]">
                  Guarantees +25% safe Return-to-Launch battery reserve margin under all terrain wind profiles.
                </div>
              </div>
            </div>

            {/* Offline Resilience Chip */}
            <div className="mt-2 p-2 bg-[#F1F5F9] rounded-lg border border-[#CBD5E1] flex items-center justify-between text-[9px] font-mono">
              <span className="flex items-center gap-1 text-[#334155] font-bold">
                <WifiOff className="w-3 h-3 text-[#64748B]" />
                <span>OFFLINE DISASTER MESH:</span>
              </span>
              <span className="text-[#006C4C] font-bold">802.11s + ONBOARD DEM</span>
            </div>
          </div>

          {/* COLUMN 2: AIRBORNE SWARM, GNC & EDGE AI PERCEPTION */}
          <div className="bg-white rounded-xl border border-[#E1E3E8] p-3.5 flex flex-col justify-between shadow-xs hover:border-[#006C4C]/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F2F5]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#006C4C]">
                  <Navigation className="w-4 h-4 text-[#006C4C]" />
                  <span>2. SWARM GNC &amp; EDGE AI</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] font-mono text-[9px] font-bold">
                  SUBSYSTEM A / C
                </span>
              </div>

              {/* 4-Tier Safety Envelope */}
              <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] space-y-1">
                <div className="text-[10px] font-bold text-[#0F172A] flex items-center justify-between">
                  <span>4-TIER COLLISION AVOIDANCE</span>
                  <span className="text-[#006C4C]">&ge; 3.8m ENVELOPE</span>
                </div>
                <div className="text-[9px] text-[#64748B] leading-tight font-mono">
                  Global Topological &rarr; ORCA 3D Local &rarr; 3.8m Ellipsoid Buffer &rarr; PX4 50Hz Failsafe
                </div>
                <div className="text-[9px] text-[#475569]">
                  Absorbs aerodynamic downwash, EKF2 covariance drift, and 10 m/s dynamic wind gusts.
                </div>
              </div>

              {/* Edge AI & DEM Raycasting */}
              <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] space-y-1">
                <div className="text-[10px] font-bold text-[#0F172A] flex items-center justify-between">
                  <span>TRI-MODAL AI &amp; GEOLOCATION</span>
                  <span className="text-[#006C4C]">&lt; 0.32m DEM ERROR</span>
                </div>
                <div className="text-[9px] text-[#64748B] leading-tight">
                  YOLOv8-Nano TensorRT (5.0ms) + Visual/Thermal/Radar cross-attention + SRTM 30m DEM Raycast.
                </div>
                <div className="text-[8.5px] text-[#94A3B8] italic">
                  *Median error under simulated DEM test conditions; physical field validation requires RTK-GNSS rover.
                </div>
              </div>
            </div>

            {/* Deep JSCC Neural Comms */}
            <div className="mt-2 p-2 bg-[#F1F5F9] rounded-lg border border-[#CBD5E1] flex items-center justify-between text-[9px] font-mono">
              <span className="text-[#334155] font-bold">DEEP JSCC (-5 dB SNR):</span>
              <span className="text-[#006C4C] font-bold">PSNR &gt; 38.0 dB (0 BLACKOUT)</span>
            </div>
          </div>

          {/* COLUMN 3: GCS HUD, ENERGY ROTATION & HUMAN SAFETY */}
          <div className="bg-white rounded-xl border border-[#E1E3E8] p-3.5 flex flex-col justify-between shadow-xs hover:border-[#006C4C]/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F2F5]">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#006C4C]">
                  <BatteryCharging className="w-4 h-4 text-[#006C4C]" />
                  <span>3. GCS &amp; CONTINUOUS ENERGY</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-[#EDE9FE] text-[#6D28D9] font-mono text-[9px] font-bold">
                  SUBSYSTEM D / E / F
                </span>
              </div>

              {/* Continuous Coverage Energy Management */}
              <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0] space-y-1">
                <div className="text-[10px] font-bold text-[#0F172A] flex items-center justify-between">
                  <span>CONTINUOUS ENERGY ROTATION</span>
                  <span className="text-[#006C4C]">ZERO SAR GAP</span>
                </div>
                <div className="text-[9px] text-[#64748B] leading-tight">
                  UAV-02 battery reaches 22% &rarr; Auto-reserves bay on 48V Solar Hybrid Hub &rarr; Standby UAV-03 dispatched to assume sector.
                </div>
                <div className="text-[9px] text-[#D97706] font-mono">
                  CONTINGENCY: 4/4 Bays Full &rarr; Safe Range Check &rarr; Alt Staging / Safe Landing
                </div>
              </div>

              {/* Human Safety Override */}
              <div className="bg-[#FEF2F2] p-2.5 rounded-lg border border-[#FECACA] space-y-1">
                <div className="text-[10px] font-bold text-[#991B1B] flex items-center gap-1.5">
                  <OctagonAlert className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>HUMAN SAFETY &amp; EMERGENCY ABORT</span>
                </div>
                <div className="text-[9px] text-[#7F1D1D] leading-tight">
                  Commander 1-click abort &rarr; Evaluates local 3D escape corridor &rarr; Obstacle-free transit altitude &rarr; Precautionary Auto-RTL.
                </div>
              </div>
            </div>

            {/* Pegasus GCS Performance */}
            <div className="mt-2 p-2 bg-[#F1F5F9] rounded-lg border border-[#CBD5E1] flex items-center justify-between text-[9px] font-mono">
              <span className="text-[#334155] font-bold">PEGASUS 3D GCS:</span>
              <span className="text-[#006C4C] font-bold">WebGPU 60 FPS + ATAK CoT XML</span>
            </div>
          </div>

        </div>

        {/* BOTTOM VERIFICATION & COST METRIC FOOTER */}
        <footer className="grid grid-cols-2 sm:grid-cols-6 gap-2 bg-[#F1F5F9] p-2 rounded-xl border border-[#CBD5E1] text-center font-mono">
          <div className="bg-white p-1.5 rounded-lg border border-[#E2E8F0]">
            <div className="text-[8px] text-[#64748B]">TEST MATRIX</div>
            <div className="text-xs font-black text-[#006C4C]">181 / 181 OK</div>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-[#E2E8F0]">
            <div className="text-[8px] text-[#64748B]">PX4 OFFBOARD</div>
            <div className="text-xs font-black text-[#0F172A]">50 Hz Rate</div>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-[#E2E8F0]">
            <div className="text-[8px] text-[#64748B]">RF RESILIENCE</div>
            <div className="text-xs font-black text-[#0F172A]">-5 dB SNR Deep JSCC</div>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-[#E2E8F0]">
            <div className="text-[8px] text-[#64748B]">LEADER FAILOVER</div>
            <div className="text-xs font-black text-[#0F172A]">&lt; 50 ms SwarmRAFT</div>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-[#E2E8F0]">
            <div className="text-[8px] text-[#64748B]">TARGET ACCURACY</div>
            <div className="text-xs font-black text-[#0F172A]">&lt; 0.32m DEM Raycast</div>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-[#E2E8F0]">
            <div className="text-[8px] text-[#64748B]">UNIT ECONOMICS</div>
            <div className="text-xs font-black text-[#006C4C]">₹42,850 / Drone</div>
          </div>
        </footer>

      </div>
    </div>
  );
};
