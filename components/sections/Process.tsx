import React from 'react';
import { Section } from '../ui/Section';
import { Search, Hammer, Users } from 'lucide-react';
import { Button } from '../ui/Button';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search className="text-white" size={24} />,
      week: "Week 1",
      title: "Deep Dive Strategy",
      desc: "We map your offers, audience, voice, and best content sources. We select 1–2 high-impact workflows to automate first."
    },
    {
      icon: <Hammer className="text-white" size={24} />,
      week: "Week 2",
      title: "Build & Test",
      desc: "I configure your AI workspace and load your materials. We create and test your 'recipes' together, ensuring the output sounds like you."
    },
    {
      icon: <Users className="text-white" size={24} />,
      week: "Week 3",
      title: "Training & Handover",
      desc: "Live walkthrough with you or your team, plus video SOPs. Includes 2 weeks of asynchronous support for tweaks."
    }
  ];

  return (
    <Section bg="stone" id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">How it works</h2>
        <p className="text-stone-600 max-w-xl mx-auto">
          A structured 3-week sprint to get your system up and running.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-stone-300 -z-10"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-700 flex items-center justify-center border-4 border-stone-50 shadow-sm mb-6 z-10">
              {step.icon}
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm w-full h-full flex flex-col">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2">{step.week}</span>
              <h3 className="text-lg font-bold text-stone-900 mb-3">{step.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed flex-grow">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}>
          See if your business is a fit
        </Button>
      </div>
    </Section>
  );
};