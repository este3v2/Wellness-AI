import React from 'react';
import { Section } from '../ui/Section';
import { Video, HeartHandshake, BookOpen, Package } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const cards = [
    {
      icon: <Video size={32} />,
      title: "Session → Content",
      desc: "Upload a Zoom call and get: 2–3 emails, 5–10 posts, and 1 mini-lesson summary ready to share."
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Lead → Nurture Journey",
      desc: "Turn your PDFs, FAQs, and founder stories into a gentle 5–7 email nurture sequence that builds trust."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Client Onboarding",
      desc: "Create welcome sequences, reflection prompts, and session summaries automatically for every new client."
    },
    {
      icon: <Package size={32} />,
      title: "Offer Packaging",
      desc: "Turn scattered ideas into clear program outlines, sales page copy, and launch emails effortlessly."
    }
  ];

  return (
    <Section bg="white" id="capabilities">
      <h2 className="text-3xl font-bold text-center mb-16 text-stone-900">What your factory can do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-xl flex items-center justify-center mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">{card.title}</h3>
            <p className="text-stone-600 leading-relaxed text-sm">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};