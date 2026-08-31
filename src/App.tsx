import React, { useState } from 'react';
import { DroneMeshCanvasBackground } from './components/landing/DroneMeshCanvasBackground';
import { HeroSection } from './components/landing/HeroSection';
import { ProblemSection } from './components/landing/ProblemSection';
import { FsdSection } from './components/landing/FsdSection';
import { DeepJsccSection } from './components/landing/DeepJsccSection';
import { PerceptionSection } from './components/landing/PerceptionSection';
import { GcsSection } from './components/landing/GcsSection';
import { ScorecardSection } from './components/landing/ScorecardSection';
import { TeamSection } from './components/landing/TeamSection';
import { Footer } from './components/landing/Footer';
import { PresentationDeck } from './components/PresentationDeck';
import { ArrowLeft, Presentation } from 'lucide-react';

export const App: React.FC = () => {
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#183A2B] font-sans relative selection:bg-[#183A2B]/15 selection:text-[#183A2B]">
      
      {isPresentationMode ? (
        <div className="relative">
          {/* Back to Landing Page floating button */}
          <button
            onClick={() => setIsPresentationMode(false)}
            className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-sandstone-border font-mono text-xs font-bold text-earth-forest hover:bg-canvas-raised shadow-card-hover transition-all opacity-60 hover:opacity-100 backdrop-blur-md"
            title="Return to Landing Page"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Exit to Landing Page</span>
          </button>
          
          <PresentationDeck />
        </div>
      ) : (
        <div className="relative">
          {/* Animated Canvas Mesh Background */}
          <DroneMeshCanvasBackground />

          {/* Discreet Floating Deck Mode Switcher (Bottom-Right) */}
          <button
            onClick={() => setIsPresentationMode(true)}
            className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-sandstone-border font-mono text-xs font-bold text-earth-forest hover:bg-earth-forest hover:text-white shadow-card-hover transition-all group"
            title="Switch to 16:9 Presentation Slides"
          >
            <Presentation className="w-4 h-4 text-earth-terracotta group-hover:text-white transition-colors" />
            <span>Presentation Deck</span>
          </button>

          {/* Main Landing Page Sections - Open & Spacious */}
          <main>
            <HeroSection />
            <ProblemSection />
            <FsdSection />
            <DeepJsccSection />
            <PerceptionSection />
            <GcsSection />
            <ScorecardSection />
            <TeamSection />
          </main>

          {/* Footer with Downloads & GitHub links */}
          <Footer onOpenDeck={() => setIsPresentationMode(true)} />
        </div>
      )}

    </div>
  );
};

export default App;
