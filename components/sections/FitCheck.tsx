import React from 'react';
import { Section } from '../ui/Section';
import { Check, X } from 'lucide-react';

export const FitCheck: React.FC = () => {
  return (
    <Section bg="white">
      <h2 className="text-3xl font-bold text-center mb-16 text-stone-900">Who is this for?</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Fit */}
        <div className="bg-teal-50/50 p-8 rounded-2xl border border-teal-100">
          <h3 className="text-xl font-bold text-teal-900 mb-6 flex items-center gap-2">
            <div className="bg-teal-200 p-1 rounded-full">
              <Check size={16} className="text-teal-800" />
            </div>
            A great fit if...
          </h3>
          <ul className="space-y-4">
            {[
              "You have at least one proven offer or regular classes.",
              "You care about client experience and ethical marketing.",
              "You're open to AI but don't want to manage tech yourself.",
              "You have existing content (recordings, blogs, notes)."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-700">
                <Check className="text-teal-600 shrink-0 mt-1" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Fit */}
        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
          <h3 className="text-xl font-bold text-stone-500 mb-6 flex items-center gap-2">
            <div className="bg-stone-200 p-1 rounded-full">
              <X size={16} className="text-stone-500" />
            </div>
            Probably not a fit if...
          </h3>
          <ul className="space-y-4">
            {[
              "You don't yet know who you serve or what you sell.",
              "You just want generic content volume without depth.",
              "You expect 'set and forget' magic without review.",
              "You want the cheapest possible generic solution."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-500">
                <X className="text-stone-400 shrink-0 mt-1" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};