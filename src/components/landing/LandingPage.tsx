import React from 'react';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { DroneMeshCanvasBackground } from './DroneMeshCanvasBackground';
import { ProblemSection } from './ProblemSection';
import { FsdSection } from './FsdSection';
import { DeepJsccSection } from './DeepJsccSection';
import { PerceptionSection } from './PerceptionSection';
import { GcsSection } from './GcsSection';
import { ScorecardSection } from './ScorecardSection';
import { TeamSection } from './TeamSection';
import { Footer } from './Footer';

interface LandingPageProps {
  onTogglePresentationMode: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onTogglePresentationMode }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#183A2B] font-sans relative overflow-x-hidden selection:bg-[#E8F5E9] selection:text-[#183A2B]">
      {/* Dynamic Animated Drone Mesh Background */}
      <DroneMeshCanvasBackground />

      {/* Navigation Header */}
      <Navbar 
        onTogglePresentationMode={onTogglePresentationMode} 
        isPresentationMode={false} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <FsdSection />
        <DeepJsccSection />
        <PerceptionSection />
        <GcsSection />
        <ScorecardSection />
        <TeamSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeck={onTogglePresentationMode} />
    </div>
  );
};
