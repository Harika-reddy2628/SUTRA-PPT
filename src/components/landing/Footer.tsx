import React from 'react';
import { 
  Github, 
  Download, 
  Presentation, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  return (
    <footer className="bg-white border-t border-sandstone-border pt-16 pb-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-sandstone-border">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-earth-forest flex items-center justify-center text-white font-mono font-bold text-sm shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-earth-forest">
                PROJECT SUTRA
              </span>
            </div>

            <p className="text-sandstone-muted text-xs leading-relaxed max-w-md font-sans">
              Swarm Unified Tactical Reconnaissance Architecture — Autonomous decentralized multi-UAV swarm for mountain and canopy disaster survivor geolocation in GPS-denied &amp; RF-degraded zones.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 bg-earth-sageSoft px-3 py-1.5 rounded-full border border-earth-sage/30">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>NDMA / DARPA-TIER OPEN ARCHITECTURE STANDARD</span>
            </div>
          </div>

          {/* Quick Downloads & Deck Toggle */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-earth-forest uppercase tracking-wider">
              Presentation Formats
            </div>
            <div className="space-y-2 font-mono text-xs">
              <button
                onClick={onOpenDeck}
                className="w-full py-2.5 px-3 rounded-xl bg-earth-forest text-white font-bold flex items-center justify-between hover:bg-earth-terracotta transition-colors shadow-sm"
              >
                <span>16:9 Presentation Deck</span>
                <Presentation className="w-3.5 h-3.5" />
              </button>

              <a
                href="/slide_01.pdf"
                download="SUTRA_Master_Slide_01.pdf"
                className="w-full py-2.5 px-3 rounded-xl bg-canvas-raised border border-sandstone-border text-earth-forest font-bold flex items-center justify-between hover:bg-canvas-hover transition-colors"
              >
                <span>Download PDF Slide</span>
                <Download className="w-3.5 h-3.5" />
              </a>

              <a
                href="/sutra_pitch_deck.pptx"
                download="SUTRA_Pitch_Deck.pptx"
                className="w-full py-2.5 px-3 rounded-xl bg-canvas-raised border border-sandstone-border text-earth-forest font-bold flex items-center justify-between hover:bg-canvas-hover transition-colors"
              >
                <span>Download PowerPoint .pptx</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Repository Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-earth-forest uppercase tracking-wider">
              Open Source Repository
            </div>
            <div className="space-y-2 font-mono text-xs text-sandstone-muted">
              <a
                href="https://github.com/Harika-reddy2628/SUTRA-PPT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border flex items-center justify-between hover:bg-canvas-hover transition-colors text-earth-forest font-bold"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>Harika-reddy2628/SUTRA-PPT</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="p-3 rounded-xl bg-canvas-raised border border-sandstone-border text-[11px] leading-relaxed">
                Branch: <code className="text-earth-forest font-bold">main</code> • Open-Architecture Defense Protocol
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-sandstone-muted">
          <div>
            © 2026 Project SUTRA Architecture Team · MIT License.
          </div>

          <div className="flex items-center gap-2">
            <span>Crafted for Grand Finals 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-earth-terracotta"></span>
            <span>Nikhil, Vedanth, Siva, Harika, Rohith</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
