import React from 'react';
import { Section } from '../ui/Section';
import { Briefcase, Heart, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section bg="stone">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <div className="shrink-0">
             {/* Placeholder for Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-stone-50 shadow-inner">
                <img 
                    src="https://picsum.photos/id/64/400/400" 
                    alt="Founder" 
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Hi, I'm Alex.</h3>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                I bridge the gap between soulful wellness practices and scalable systems. With a background in both business operations and breathwork coaching, I understand the unique tension between needing to market and wanting to stay grounded.
              </p>
              <p>
                I don't believe in automating away your humanity. I build "AI Factories" that protect your energy so you can show up fully for the clients who need you most.
              </p>
            </div>
          </div>
        </div>

        {/* Credibility Markers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-stone-100">
            <div className="flex items-center gap-4 md:block md:text-center">
                <div className="bg-teal-50 p-3 rounded-xl text-teal-700 inline-block md:mb-3">
                    <Briefcase size={24} />
                </div>
                <div>
                    <div className="font-bold text-stone-800">Ex-COO</div>
                    <div className="text-sm text-stone-500">Scaling wellness brands</div>
                </div>
            </div>
            <div className="flex items-center gap-4 md:block md:text-center">
                <div className="bg-teal-50 p-3 rounded-xl text-teal-700 inline-block md:mb-3">
                    <Heart size={24} />
                </div>
                <div>
                    <div className="font-bold text-stone-800">Certified Coach</div>
                    <div className="text-sm text-stone-500">Trauma-informed breathwork</div>
                </div>
            </div>
             <div className="flex items-center gap-4 md:block md:text-center">
                <div className="bg-teal-50 p-3 rounded-xl text-teal-700 inline-block md:mb-3">
                    <Award size={24} />
                </div>
                <div>
                    <div className="font-bold text-stone-800">50+ AI Systems</div>
                    <div className="text-sm text-stone-500">Built for private practice</div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};