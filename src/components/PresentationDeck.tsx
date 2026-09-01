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
import { Slide03Benchmark } from './slides/Slide03Benchmark';
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
  const [slide2Index, setSlide2Index] = useState(0);
  const [slide3Index, setSlide3Index] = useState(0);
  const [slide4Index, setSlide4Index] = useState(0);
  const [slide5Index, setSlide5Index] = useState(0);
  const [slide6Index, setSlide6Index] = useState(0);
  const [slide7Index, setSlide7Index] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const totalSlides = 8;

  const nextSlide = useCallback(() => {
    // If on Slide 2 (Problem Statement) and not at last card (index 3), step gallery first
    if (currentSlide === 1 && slide2Index < 3) {
      setSlide2Index((prev) => prev + 1);
      return;
    }

    // If on Slide 3 (The Solution Moats) and not at last card (index 3), step gallery first
    if (currentSlide === 2 && slide3Index < 3) {
      setSlide3Index((prev) => prev + 1);
      return;
    }

    // If on Slide 4 (Subsystem A GNC) and not at last card (index 3), step gallery first
    if (currentSlide === 3 && slide4Index < 3) {
      setSlide4Index((prev) => prev + 1);
      return;
    }

    // If on Slide 5 (Subsystem B Comms) and not at last card (index 3), step gallery first
    if (currentSlide === 4 && slide5Index < 3) {
      setSlide5Index((prev) => prev + 1);
      return;
    }

    // If on Slide 6 (Subsystem C Perception) and not at last card (index 3), step gallery first
    if (currentSlide === 5 && slide6Index < 3) {
      setSlide6Index((prev) => prev + 1);
      return;
    }

    // If on Slide 7 (Subsystem D GCS) and not at last card (index 3), step gallery first
    if (currentSlide === 6 && slide7Index < 3) {
      setSlide7Index((prev) => prev + 1);
      return;
    }

    setCurrentSlide((prev) => {
      const next = prev < totalSlides - 1 ? prev + 1 : prev;
      if (next === 1) setSlide2Index(0); // Reset Slide 2 gallery when entering
      if (next === 2) setSlide3Index(0); // Reset Slide 3 gallery when entering
      if (next === 3) setSlide4Index(0); // Reset Slide 4 gallery when entering
      if (next === 4) setSlide5Index(0); // Reset Slide 5 gallery when entering
      if (next === 5) setSlide6Index(0); // Reset Slide 6 gallery when entering
      if (next === 6) setSlide7Index(0); // Reset Slide 7 gallery when entering
      return next;
    });
  }, [currentSlide, slide2Index, slide3Index, slide4Index, slide5Index, slide6Index, slide7Index, totalSlides]);

  const prevSlide = useCallback(() => {
    // If on Slide 2 (Problem Statement) and not at first card (index 0), step gallery back
    if (currentSlide === 1 && slide2Index > 0) {
      setSlide2Index((prev) => prev - 1);
      return;
    }

    // If on Slide 3 (The Solution Moats) and not at first card (index 0), step gallery back
    if (currentSlide === 2 && slide3Index > 0) {
      setSlide3Index((prev) => prev - 1);
      return;
    }

    // If on Slide 4 (Subsystem A GNC) and not at first card (index 0), step gallery back
    if (currentSlide === 3 && slide4Index > 0) {
      setSlide4Index((prev) => prev - 1);
      return;
    }

    // If on Slide 5 (Subsystem B Comms) and not at first card (index 0), step gallery back
    if (currentSlide === 4 && slide5Index > 0) {
      setSlide5Index((prev) => prev - 1);
      return;
    }

    // If on Slide 6 (Subsystem C Perception) and not at first card (index 0), step gallery back
    if (currentSlide === 5 && slide6Index > 0) {
      setSlide6Index((prev) => prev - 1);
      return;
    }

    // If on Slide 7 (Subsystem D GCS) and not at first card (index 0), step gallery back
    if (currentSlide === 6 && slide7Index > 0) {
      setSlide7Index((prev) => prev - 1);
      return;
    }

    setCurrentSlide((prev) => {
      const prevIdx = prev > 0 ? prev - 1 : prev;
      if (prevIdx === 1) setSlide2Index(3); // Set to end of gallery when going backwards into slide 2
      if (prevIdx === 2) setSlide3Index(3); // Set to end of gallery when going backwards into slide 3
      if (prevIdx === 3) setSlide4Index(3); // Set to end of gallery when going backwards into slide 4
      if (prevIdx === 4) setSlide5Index(3); // Set to end of gallery when going backwards into slide 5
      if (prevIdx === 5) setSlide6Index(3); // Set to end of gallery when going backwards into slide 6
      if (prevIdx === 6) setSlide7Index(3); // Set to end of gallery when going backwards into slide 7
      return prevIdx;
    });
  }, [currentSlide, slide2Index, slide3Index, slide4Index, slide5Index, slide6Index, slide7Index]);

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
      component: <Slide02Problem activeIndex={slide2Index} onActiveChange={setSlide2Index} />,
    },
    {
      id: 'benchmark',
      title: '03. Swarm Search Benchmark',
      category: 'The Solution',
      component: <Slide03Benchmark activeIndex={slide3Index} onActiveChange={setSlide3Index} />,
    },
    {
      id: 'fsd',
      title: '04. SUTRA-FSD & ORCA 3D Autopilot',
      category: 'Subsystem A (GNC)',
      component: <Slide03FSD activeIndex={slide4Index} onActiveChange={setSlide4Index} />,
    },
    {
      id: 'deep-jscc',
      title: '05. Deep JSCC Neural Video Comms',
      category: 'Subsystem B (Comms)',
      component: <Slide04DeepJSCC activeIndex={slide5Index} onActiveChange={setSlide5Index} />,
    },
    {
      id: 'perception',
      title: '06. Tri-Modal Edge AI & DEM Raycast',
      category: 'Subsystem C (Perception)',
      component: <Slide05Perception activeIndex={slide6Index} onActiveChange={setSlide6Index} />,
    },
    {
      id: 'gcs',
      title: '07. Pegasus 3D WebGPU GCS & ATAK',
      category: 'Subsystem D (GCS)',
      component: <Slide06GCS activeIndex={slide7Index} onActiveChange={setSlide7Index} />,
    },
    {
      id: 'scorecard',
      title: '08. Empirical Scorecard & Hardware',
      category: 'Verification & Economics',
      component: <Slide07Scorecard />,
    },
  ];

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

      {/* Main Full-Viewport Presentation Stage */}
      <div className="flex-1 w-full h-full p-2 sm:p-3 lg:p-4 flex items-stretch justify-center relative overflow-hidden">
        <div className="w-full h-full bg-[#FFFFFF] rounded-2xl border border-[#E6E0DA] shadow-2xl overflow-hidden relative flex flex-col">
          {slides[currentSlide].component}
        </div>
      </div>

      {/* Bottom Minimal Navigation Bar */}
      <div className="h-14 border-t border-[#E6E0DA] bg-[#FFFFFF] px-6 flex items-center justify-between z-30 font-mono text-xs">
        
        {/* Slide Counter & Dynamic Gallery Step Indicators */}
        <div className="flex items-center gap-3">
          <span className="text-[#7A7576]">SLIDE</span>
          <span className="font-bold text-[#191516] tracking-widest">
            0{currentSlide + 1} <span className="text-[#CCC6C2]">/</span> 0{totalSlides}
          </span>
          <span className="hidden sm:inline text-[#7A7576]">({slides[currentSlide].category})</span>
          
          {/* Slide 2 Step Indicator */}
          {currentSlide === 1 && (
            <div className="hidden lg:flex items-center gap-1.5 ml-2 pl-3 border-l border-[#E6E0DA]">
              <span className="text-[10px] text-red-600 font-bold tracking-wider">GALLERY:</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      slide2Index === i ? 'bg-red-600 w-4' : 'bg-slate-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Slide 3 Step Indicator */}
          {currentSlide === 2 && (
            <div className="hidden lg:flex items-center gap-1.5 ml-2 pl-3 border-l border-[#E6E0DA]">
              <span className="text-[10px] text-emerald-600 font-bold tracking-wider">MOATS:</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      slide3Index === i ? 'bg-emerald-600 w-4' : 'bg-slate-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Slide 4 Step Indicator */}
          {currentSlide === 3 && (
            <div className="hidden lg:flex items-center gap-1.5 ml-2 pl-3 border-l border-[#E6E0DA]">
              <span className="text-[10px] text-emerald-600 font-bold tracking-wider">GNC:</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      slide4Index === i ? 'bg-emerald-600 w-4' : 'bg-slate-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Slide 5 Step Indicator */}
          {currentSlide === 4 && (
            <div className="hidden lg:flex items-center gap-1.5 ml-2 pl-3 border-l border-[#E6E0DA]">
              <span className="text-[10px] text-emerald-600 font-bold tracking-wider">COMMS:</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      slide5Index === i ? 'bg-emerald-600 w-4' : 'bg-slate-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Slide 6 Step Indicator */}
          {currentSlide === 5 && (
            <div className="hidden lg:flex items-center gap-1.5 ml-2 pl-3 border-l border-[#E6E0DA]">
              <span className="text-[10px] text-emerald-600 font-bold tracking-wider">PERCEPTION:</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      slide6Index === i ? 'bg-emerald-600 w-4' : 'bg-slate-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Slide 7 Step Indicator */}
          {currentSlide === 6 && (
            <div className="hidden lg:flex items-center gap-1.5 ml-2 pl-3 border-l border-[#E6E0DA]">
              <span className="text-[10px] text-emerald-600 font-bold tracking-wider">GCS:</span>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      slide7Index === i ? 'bg-emerald-600 w-4' : 'bg-slate-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
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
