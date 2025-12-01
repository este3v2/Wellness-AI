import React from 'react';
import { Section } from '../ui/Section';
import { XCircle, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section bg="white">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl font-bold text-stone-900 mb-6">
            Does your marketing feel like a second full-time job?
          </h2>
          <div className="space-y-4 text-lg text-stone-600">
            <p>
              You started your practice to heal, teach, and guide—not to spend your evenings wrestling with Instagram captions or formatting emails.
            </p>
            <p>
              Yet, to grow, you know you need to show up. But the cycle of creating content from scratch, repeating the same explanations to every new lead, and improvising your launches is exhausting.
            </p>
            <p className="font-medium text-stone-800">
              It leaves you with no clear system, inconsistent income, and very little time for your own wellbeing.
            </p>
          </div>
        </div>

        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
          <h3 className="text-xl font-semibold mb-6 text-stone-800">You might recognize this:</h3>
          <ul className="space-y-4">
            {[
              "Staring at a blank screen trying to write a newsletter.",
              "Feeling guilty about 'ghosting' your list for weeks.",
              "Manually typing the same onboarding answers 5x a week.",
              "Having brilliant ideas during sessions that never get shared.",
              "Launch burnout: hustling hard, then crashing."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertCircle className="text-stone-400 shrink-0 mt-1" size={20} />
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};