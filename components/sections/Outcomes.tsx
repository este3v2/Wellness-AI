import React from 'react';
import { Section } from '../ui/Section';
import { Zap, Clock, Smile, Layers } from 'lucide-react';

export const Outcomes: React.FC = () => {
  const benefits = [
    {
      icon: <Layers size={28} />,
      title: "Multiply Your Content",
      desc: "Get 2–4x more content from the same amount of effort. One session becomes a week's worth of value."
    },
    {
      icon: <Clock size={28} />,
      title: "Reclaim Your Time",
      desc: "Stop spending weekends writing captions. Free up 5-10 hours a week for deep work, clients, or rest."
    },
    {
      icon: <Zap size={28} />,
      title: "Consistent Journeys",
      desc: "No more leads falling through the cracks. Build clear, repeatable client journeys that run on autopilot."
    },
    {
      icon: <Smile size={28} />,
      title: "Ethical Alignment",
      desc: "Have confidence that AI is helping you amplify your message, not hijacking your voice or values."
    }
  ];

  return (
    <Section bg="teal" id="outcomes" className="bg-teal-900 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white">The Outcomes</h2>
        <p className="text-teal-100 max-w-2xl mx-auto">
          What happens when you stop fighting the algorithm and start building a system?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex gap-4 p-6 rounded-xl bg-teal-800/50 border border-teal-700/50">
            <div className="text-teal-300 shrink-0">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-teal-100 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};