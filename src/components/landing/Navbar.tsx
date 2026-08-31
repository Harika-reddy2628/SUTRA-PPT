import React, { useState, useEffect } from 'react';
import { 
  Presentation, 
  Github, 
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  onTogglePresentationMode: () => void;
  isPresentationMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onTogglePresentationMode, 
  isPresentationMode 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FAF7F2]/92 backdrop-blur-md py-3.5 border-b border-sandstone-border shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand & Active Status Badge */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-earth-forest flex items-center justify-center text-white font-mono font-bold text-sm shadow-md group-hover:bg-earth-terracotta transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div>
              <div className="font-heading font-extrabold text-base tracking-tight text-earth-forest leading-none">
                PROJECT SUTRA
              </div>
              <div className="font-mono text-[10px] text-sandstone-muted font-semibold tracking-wider uppercase mt-0.5">
                Tactical Swarm Reconnaissance
              </div>
            </div>
          </a>

          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-earth-sageSoft border border-earth-sage/30 text-earth-forest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_6px_#059669] animate-pulse"></span>
            <span>5/5 SWARM NODES ACTIVE</span>
          </div>
        </div>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-sans text-xs font-bold text-sandstone-muted">
          <a href="#problem" className="hover:text-earth-forest transition-colors">The Crisis</a>
          <a href="#fsd" className="hover:text-earth-forest transition-colors">SUTRA-FSD</a>
          <a href="#deep-jscc" className="hover:text-earth-forest transition-colors">Deep JSCC</a>
          <a href="#perception" className="hover:text-earth-forest transition-colors">Perception</a>
          <a href="#gcs" className="hover:text-earth-forest transition-colors">3D GIS GCS</a>
          <a href="#benchmarks" className="hover:text-earth-forest transition-colors">Scorecard</a>
          <a href="#team" className="hover:text-earth-forest transition-colors">Team</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Toggle 16:9 Presentation Mode */}
          <button
            onClick={onTogglePresentationMode}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-sm ${isPresentationMode ? 'bg-earth-forest text-white shadow-md' : 'bg-white border border-sandstone-border text-earth-forest hover:bg-canvas-raised'}`}
            title="Switch to 16:9 Presentation Slides"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Deck Mode</span>
          </button>

          {/* GitHub Repo Link */}
          <a
            href="https://github.com/Harika-reddy2628/SUTRA-PPT"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white border border-sandstone-border text-earth-forest hover:bg-canvas-raised transition-colors shadow-sm"
            title="View Source on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-xl bg-white border border-sandstone-border text-earth-forest"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-sandstone-border px-6 py-4 space-y-3 font-semibold text-sm text-earth-forest shadow-md">
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="block py-1">The Crisis</a>
          <a href="#fsd" onClick={() => setMobileMenuOpen(false)} className="block py-1">SUTRA-FSD GNC</a>
          <a href="#deep-jscc" onClick={() => setMobileMenuOpen(false)} className="block py-1">Deep JSCC Comms</a>
          <a href="#perception" onClick={() => setMobileMenuOpen(false)} className="block py-1">Perception &amp; DEM Raycast</a>
          <a href="#gcs" onClick={() => setMobileMenuOpen(false)} className="block py-1">Pegasus 3D GIS GCS</a>
          <a href="#benchmarks" onClick={() => setMobileMenuOpen(false)} className="block py-1">Scorecard</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block py-1">Team &amp; Attribution</a>
        </div>
      )}
    </header>
  );
};
