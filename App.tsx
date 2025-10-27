import React from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ProblemSolution } from './components/ProblemSolution';
import { Architecture } from './components/Architecture';
import { Platforms } from './components/Platforms';
import { Roadmap } from './components/Roadmap';
import { Pricing } from './components/Pricing';
import { GettingStarted } from './components/GettingStarted';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased relative overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#050505] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8 relative z-10">
        <div className="fade-in-section"><Hero /></div>
        <div className="fade-in-section"><ValueProposition /></div>
        <div className="fade-in-section"><ProblemSolution /></div>
        <div className="fade-in-section"><Architecture /></div>
        <div className="fade-in-section"><Platforms /></div>
        <div className="fade-in-section"><Roadmap /></div>
        <div className="fade-in-section"><Pricing /></div>
        <div className="fade-in-section"><GettingStarted /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;