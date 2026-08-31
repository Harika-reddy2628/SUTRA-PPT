import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2,
  Layers,
  HelpCircle,
  FileText
} from 'lucide-react';
import { Slide01Title } from './slides/Slide01Title';
import { Slide02Problem } from './slides/Slide02Problem';
import { Slide03FSD } from './slides/Slide03FSD';
import { Slide04DeepJSCC } from './slides/Slide04DeepJSCC';
import { Slide05Perception } from './slides/Slide05Perception';
import { Slide06GCS } from './slides/Slide06GCS';
import { Slide07Scorecard } from './slides/Slide07Scorecard';

interface SlideConfig {
  id: string;
  title: string;
  category: string;
  component: React.ReactNode;
}

export const PresentationDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const slides: SlideConfig[] = [
    {
      id: 'title',
      title: '01. Master Mission Architecture',
      category: 'Overview',
      component: <Slide01Title />,
    },
    {
      id: 'problem',
      title: '02. Disaster Search Bottlenecks',
      category: 'Problem Statement',
      component: <Slide02Problem />,
    },
    {
      id: 'fsd',
      title: '03. SUTRA-FSD & ORCA 3D Autopilot',
      category: 'Subsystem A (GNC)',
      component: <Slide03FSD />,
    },
    {
      id: 'deep-jscc',
      title: '04. Deep JSCC Neural Video Comms',
      category: 'Subsystem B (Comms)',
      component: <Slide04DeepJSCC />,
    },
    {
      id: 'perception',
      title: '05. Tri-Modal Edge AI & DEM Raycast',
      category: 'Subsystem C (Perception)',
      component: <Slide05Perception />,
    },
    {
      id: 'gcs',
      title: '06. Pegasus 3D WebGPU GCS & ATAK',
      category: 'Subsystem D (GCS)',
      component: <Slide06GCS />,
    },
    {
      id: 'scorecard',
      title: '07. Empirical Scorecard & Hardware',
      category: 'Verification & Cost',
      component: <Slide07Scorecard />,
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'Home') {
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        setCurrentSlide(totalSlides - 1);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'o') {
        setShowDrawer(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, totalSlides]);

  return (
    <div className="presentation-viewport select-none">
      
      {/* 16:9 Slide Canvas (Light Sandstone & Sovereign Forest) */}
      <div className="slide-canvas-light">
        <div className="grid-overlay-light"></div>
        <div className="ambient-glow"></div>
        
        {slides[currentSlide].component}
      </div>

      {/* FLOATING CONTROLS HUD (Light Elegant Glass) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sandstone-border backdrop-blur-xl shadow-card-hover transition-all duration-200 opacity-40 hover:opacity-100">
        
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-1.5 rounded-full hover:bg-canvas-raised disabled:opacity-30 disabled:hover:bg-transparent text-earth-forest transition-colors"
          title="Previous Slide (← / PageUp)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button 
          onClick={() => setShowDrawer(prev => !prev)}
          className="font-mono text-xs font-bold text-earth-forest px-2.5 py-0.5 rounded-full bg-canvas-raised border border-sandstone-border hover:bg-canvas-hover transition-colors flex items-center gap-1.5"
          title="Toggle Slide Menu (O)"
        >
          <Layers className="w-3.5 h-3.5 text-earth-forest" />
          <span><span className="text-earth-forest">{currentSlide + 1}</span> / {totalSlides}</span>
        </button>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-1.5 rounded-full hover:bg-canvas-raised disabled:opacity-30 disabled:hover:bg-transparent text-earth-forest transition-colors"
          title="Next Slide (→ / Space / PageDown)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-3.5 bg-sandstone-border mx-0.5"></div>

        <button 
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full hover:bg-canvas-raised text-earth-forest transition-colors"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

      </div>

      {/* QUICK DRAWER */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 bg-[#183A2B]/20 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setShowDrawer(false)}>
          <div className="bg-white border border-sandstone-border rounded-2xl p-6 max-w-lg w-full shadow-card-hover" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center pb-3 border-b border-sandstone-border mb-4">
              <div className="flex items-center gap-2 font-mono text-sm font-bold text-earth-forest">
                <Layers className="w-4 h-4 text-earth-forest" />
                <span>DECK NAVIGATION &amp; SHORTCUTS</span>
              </div>
              <button onClick={() => setShowDrawer(false)} className="text-xs text-sandstone-muted hover:text-earth-forest font-semibold">✕ Close</button>
            </div>

            <div className="space-y-2 mb-4 max-h-[60vh] overflow-y-auto pr-1">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => { setCurrentSlide(idx); setShowDrawer(false); }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${idx === currentSlide ? 'bg-earth-forest text-white shadow-md' : 'bg-canvas-raised border border-sandstone-border text-earth-forest hover:bg-canvas-hover'}`}
                >
                  <span className="font-semibold text-sm">{s.title}</span>
                  <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${idx === currentSlide ? 'bg-white/20 text-white' : 'bg-white text-sandstone-muted border border-sandstone-border'}`}>{s.category}</span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-sandstone-border text-xs font-mono text-sandstone-muted flex items-center justify-between">
              <div className="flex items-center gap-1.5"><HelpCircle className="w-3.5 h-3.5 text-sandstone-faint" /> Space / Arrows: Nav</div>
              <div className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-sandstone-faint" /> F: Fullscreen | O: Menu</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
