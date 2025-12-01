import React from 'react';
import { Header } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Capabilities } from './components/sections/Capabilities';
import { Process } from './components/sections/Process';
import { FitCheck } from './components/sections/FitCheck';
import { About } from './components/sections/About';
import { Outcomes } from './components/sections/Outcomes';
import { SocialProof } from './components/sections/SocialProof';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 selection:bg-teal-100 selection:text-teal-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Capabilities />
        <Process />
        <FitCheck />
        <About />
        <Outcomes />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;