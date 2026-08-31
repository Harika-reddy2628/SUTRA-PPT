import React from 'react';
import { PresentationDeck } from './components/PresentationDeck';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans flex items-center justify-center p-0 select-none">
      <PresentationDeck />
    </div>
  );
};

export default App;
