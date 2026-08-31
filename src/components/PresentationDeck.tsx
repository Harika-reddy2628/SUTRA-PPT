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
      category: 'Verification & Economics',
      component: <Slide07Scorecard />,
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setShowDrawer(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-screen h-screen bg-[#F4F1ED] text-[#191516] flex flex-col justify-between overflow-hidden relative select-none">
      
      {/* Top HUD Bar */}
      <div className="h-12 border-b border-[#E6E0DA] bg-[#FFFFFF] px-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D71920] shadow-[0_0_6px_#D71920]"></div>
          <span className="font-mono text-xs font-bold tracking-widest text-[#191516]">
            PROJECT SUTRA <span className="text-[#A09A97]">/</span> {slides[currentSlide].title.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Slide List Drawer Toggle */}
          <button
            onClick={() => setShowDrawer((prev) => !prev)}
            className="p-1.5 rounded-lg bg-[#FAF8F5] border border-[#E6E0DA] text-[#7A7576] hover:text-[#191516] transition-colors"
            title="Slide Index"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-[#FAF8F5] border border-[#E6E0DA] text-[#7A7576] hover:text-[#191516] transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main 16:9 Presentation Stage */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-6 relative">
        <div className="w-full max-w-[1600px] aspect-[16/9] max-h-[88vh] bg-[#FFFFFF] rounded-2xl border border-[#E6E0DA] shadow-xl overflow-hidden relative flex flex-col">
          {slides[currentSlide].component}
        </div>
      </div>

      {/* Bottom Minimal Navigation Bar */}
      <div className="h-14 border-t border-[#E6E0DA] bg-[#FFFFFF] px-6 flex items-center justify-between z-30 font-mono text-xs">
        
        {/* Slide Counter */}
        <div className="flex items-center gap-3">
          <span className="text-[#7A7576]">SLIDE</span>
          <span className="font-bold text-[#191516] tracking-widest">
            0{currentSlide + 1} <span className="text-[#CCC6C2]">/</span> 0{totalSlides}
          </span>
          <span className="hidden sm:inline text-[#7A7576]">({slides[currentSlide].category})</span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E6E0DA] text-[#7A7576] hover:text-[#191516] hover:border-[#CCC6C2] disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">PREV</span>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-[#191516] text-white font-bold hover:bg-[#333333] disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Help / Downloads */}
        <div className="hidden md:flex items-center gap-4 text-[#7A7576]">
          <a href="/sutra_pitch_deck.pptx" download className="hover:text-[#191516] transition-colors flex items-center gap-1">
            <FileText className="w-3.5 h-3.5" />
            <span>.PPTX</span>
          </a>
          <span className="text-[#CCC6C2]">|</span>
          <span className="flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Use ← / → Keys</span>
          </span>
        </div>

      </div>

      {/* Slide Index Drawer */}
      {showDrawer && (
        <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
          <div className="w-80 h-full bg-[#050505] border-l border-neutral-800 p-6 space-y-4 font-mono text-xs overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
              <span className="font-bold text-white uppercase tracking-wider">SLIDE INDEX</span>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setShowDrawer(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-all ${currentSlide === idx ? 'bg-neutral-900 border border-neutral-700 text-white font-bold' : 'text-neutral-400 hover:bg-neutral-950 hover:text-neutral-200'}`}
                >
                  <div className="text-[11px] text-neutral-500">{s.category}</div>
                  <div className="text-xs text-white truncate">{s.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PresentationDeck;
