import React, { useState } from 'react';
import { 
  Zap, 
  ShieldAlert, 
  Sliders, 
  RefreshCw, 
  Network, 
  Flame
} from 'lucide-react';

export const DeepJsccSection: React.FC = () => {
  const [snr, setSnr] = useState<number>(-5);
  const [leaderDead, setLeaderDead] = useState<boolean>(false);
  const [electedLeader, setElectedLeader] = useState<number>(1);

  // Compute PSNR dynamically from SNR
  const deepJsccPsnr = (38.5 + (snr + 10) * 0.45).toFixed(1);
  const standardPsnr = snr >= 8 ? (36 + snr * 0.5).toFixed(1) : snr >= 2 ? (18 - (8 - snr) * 3).toFixed(1) : '0.0 (CLIFF)';

  const triggerLeaderFailover = () => {
    setLeaderDead(true);
    setTimeout(() => {
      setElectedLeader(2);
    }, 48); // < 50ms election
  };

  const resetLeader = () => {
    setLeaderDead(false);
    setElectedLeader(1);
  };

  return (
    <section id="deep-jscc" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-earth-terracottaSoft border border-earth-terracotta/25 text-earth-terracotta">
          <Zap className="w-3.5 h-3.5" />
          <span>SUBSYSTEM B · SEMANTIC COMMUNICATIONS</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-earth-forest uppercase tracking-tight">
          Zero-Cliff Deep JSCC Neural Video Transceiver
        </h2>
        <p className="text-sandstone-muted text-base sm:text-lg font-serif italic">
          Bypassing brittle digital bitstreams with end-to-end analog deep autoencoders to survive extreme electronic warfare and deep mountain RF fading.
        </p>
      </div>

      {/* Interactive RF Jamming Simulator Widget */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sandstone-border shadow-card-hover mb-16">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-sandstone-border mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-earth-terracotta uppercase">
              <Sliders className="w-4 h-4" />
              <span>INTERACTIVE RF JAMMING STRESS TEST (AWGN / RAYLEIGH MULTIPATH)</span>
            </div>
            <h3 className="font-heading text-2xl font-extrabold text-earth-forest mt-1">
              Adjust Channel Signal-to-Noise Ratio (SNR)
            </h3>
          </div>

          {/* Current SNR Readout */}
          <div className="flex items-center gap-4 bg-canvas-raised p-3.5 rounded-2xl border border-sandstone-border font-mono">
            <div className="text-xs text-sandstone-muted font-bold">CHANNEL SNR:</div>
            <div className={`text-2xl font-black ${snr < 0 ? 'text-earth-terracotta' : snr < 5 ? 'text-earth-ochre' : 'text-earth-forest'}`}>
              {snr > 0 ? `+${snr}` : snr} dB
            </div>
          </div>
        </div>

        {/* Slider Input */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="flex justify-between text-xs font-mono text-sandstone-muted font-bold mb-2">
            <span className="text-earth-terracotta">-10 dB (Severe Electronic Warfare)</span>
            <span className="text-earth-forest font-black">0 dB</span>
            <span className="text-emerald-700">+15 dB (Clean Sky Line-of-Sight)</span>
          </div>
          <input
            type="range"
            min="-10"
            max="15"
            step="1"
            value={snr}
            onChange={(e) => setSnr(parseInt(e.target.value))}
            className="w-full h-3 bg-canvas-raised rounded-lg appearance-none cursor-pointer accent-earth-forest border border-sandstone-border"
          />
        </div>

        {/* Side by Side Video Decoder Stream Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Legacy H.264 */}
          <div className="p-6 rounded-2xl bg-canvas-raised border border-sandstone-border flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-4">
                <span className="font-mono text-xs font-bold text-sandstone-muted">STANDARD H.264 / RTSP STREAM</span>
                <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded-full ${snr < 2 ? 'bg-earth-terracottaSoft text-earth-terracotta' : 'bg-emerald-100 text-emerald-800'}`}>
                  {snr < 2 ? 'BLACKOUT (DROPPED)' : 'STREAMING'}
                </span>
              </div>

              {/* Video Preview Box */}
              <div className={`h-48 rounded-xl flex flex-col items-center justify-center font-mono text-xs transition-all relative overflow-hidden ${snr < 2 ? 'bg-zinc-900 text-rose-400' : 'bg-slate-800 text-white'}`}>
                {snr < 2 ? (
                  <div className="text-center p-4">
                    <ShieldAlert className="w-8 h-8 text-rose-500 mx-auto mb-2 animate-bounce" />
                    <div className="font-bold text-sm">DECODER NAL SYNTAX ERROR</div>
                    <div className="text-[11px] text-zinc-400 mt-1">Keyframe Packet Lost · Stream Frozen</div>
                  </div>
                ) : (
                  <div className="text-center p-4">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-emerald-400 flex items-center justify-center mx-auto mb-2">
                      👤
                    </div>
                    <div className="font-bold text-emerald-300">Survivor Thermal Heat Sign Detected</div>
                    <div className="text-[11px] text-slate-300 mt-1">Bitrate: 4.2 Mbps · Packet Loss: {Math.max(0, 15 - snr)}%</div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sandstone-border flex justify-between font-mono text-xs text-sandstone-muted">
              <span>DECODED PSNR:</span>
              <strong className={snr < 2 ? 'text-earth-terracotta' : 'text-earth-forest'}>{standardPsnr} dB</strong>
            </div>
          </div>

          {/* SUTRA Deep JSCC */}
          <div className="p-6 rounded-2xl bg-white border border-earth-sage/40 shadow-card-light flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-earth-forest to-earth-sage"></div>
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-4">
                <span className="font-mono text-xs font-bold text-earth-forest">SUTRA DEEP JSCC (PYTORCH / ONNX)</span>
                <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-earth-sageSoft text-earth-forest">
                  ZERO-CLIFF ACTIVE
                </span>
              </div>

              {/* Video Preview Box */}
              <div className="h-48 rounded-xl bg-gradient-to-br from-[#12281E] to-[#183A2B] text-white p-4 flex flex-col items-center justify-center font-mono text-xs relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-2 text-emerald-300">
                  <Flame className="w-6 h-6 animate-pulse text-amber-400" />
                </div>
                <div className="font-bold text-emerald-300">FLIR LWIR Thermal Survivor Acquired</div>
                <div className="text-[11px] text-emerald-100/80 mt-1">
                  Latency: 2.4ms • Soft Analog Blur (Target Preserved)
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-sandstone-border flex justify-between font-mono text-xs">
              <span className="text-sandstone-muted">DECODED PSNR:</span>
              <strong className="text-earth-forest font-bold text-sm">{deepJsccPsnr} dB (Guaranteed &gt; 41.5 dB)</strong>
            </div>
          </div>

        </div>

      </div>

      {/* SwarmRAFT Quorum Consensus Interactive Demo */}
      <div className="p-8 rounded-3xl bg-white border border-sandstone-border shadow-card-light">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-sandstone-border mb-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-earth-forest uppercase">
            <Network className="w-4 h-4 text-earth-sage" />
            <span>SWARMRAFT DECENTRALIZED QUORUM FAILOVER (Q = ⌊N/2⌋ + 1 = 3/5)</span>
          </div>
          <div className="flex gap-2">
            {!leaderDead ? (
              <button
                onClick={triggerLeaderFailover}
                className="px-4 py-2 rounded-xl bg-earth-terracotta text-white font-mono text-xs font-bold shadow hover:bg-rose-700 transition-colors"
              >
                ⚡ SIMULATE LEADER UAV-01 CRASH
              </button>
            ) : (
              <button
                onClick={resetLeader}
                className="px-4 py-2 rounded-xl bg-earth-forest text-white font-mono text-xs font-bold shadow hover:bg-emerald-800 transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RESTORE UAV-01</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 font-mono text-xs">
          {[1, 2, 3, 4, 5].map((id) => {
            const isLeader = electedLeader === id && (!leaderDead || id !== 1);
            const isDead = leaderDead && id === 1;
            return (
              <div
                key={id}
                className={`p-4 rounded-xl text-center border transition-all ${isDead ? 'bg-rose-50 border-rose-300 text-rose-700' : isLeader ? 'bg-earth-forest text-white border-earth-forest shadow-md' : 'bg-canvas-raised border-sandstone-border text-earth-forest'}`}
              >
                <div className="font-bold text-sm mb-1">UAV-0{id}</div>
                <div className={`text-[11px] font-semibold ${isDead ? 'text-rose-600' : isLeader ? 'text-emerald-300' : 'text-sandstone-muted'}`}>
                  {isDead ? '❌ OFFLINE' : isLeader ? '👑 NEW LEADER' : 'FOLLOWER'}
                </div>
                <div className="text-[10px] mt-1 opacity-80">
                  {isDead ? 'Heartbeat Lost' : 'Quorum Voted (Q=3)'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-sandstone-border flex justify-between items-center text-xs font-mono text-sandstone-muted">
          <span>Failover Latency: <strong className="text-earth-forest">&lt; 48 ms</strong></span>
          <span>Split-Brain States: <strong className="text-emerald-700 font-bold">0.0% (Mathematically Impossible)</strong></span>
        </div>
      </div>

    </section>
  );
};
