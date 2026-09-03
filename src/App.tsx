import React, { useState } from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { PresentationDeck } from './components/PresentationDeck';

export const App: React.FC = () => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  if (isPresentationMode) {
    return (
      <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans flex items-center justify-center p-0 select-none">
        <PresentationDeck onExitPresentation={() => setIsPresentationMode(false)} />
      </div>
    );
  }

  return (
    <LandingPage onTogglePresentationMode={() => setIsPresentationMode(true)} />
  );
};

export default App;
