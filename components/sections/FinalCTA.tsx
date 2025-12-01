import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <Section bg="stone" id="book-call" className="py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
          Ready to stop doing everything manually?
        </h2>
        <p className="text-lg text-stone-600 mb-10">
          Let’s see if an AI Factory is right for you. No jargon, no hard sell – just an honest look at how much time you could save.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 text-left">
          <h3 className="text-xl font-semibold mb-6 text-stone-800 text-center">Book a 20-minute fit call</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                placeholder="jane@wellness.com"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-stone-700 mb-1">Website / Instagram (Optional)</label>
              <input 
                type="text" 
                id="website" 
                className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                placeholder="@janedoewellness"
              />
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-stone-700 mb-1">Additional Questions or Notes</label>
              <textarea 
                id="notes" 
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-y"
                placeholder="Anything specific you'd like to discuss?"
              />
            </div>
            
            <div className="pt-2">
              <Button fullWidth size="lg">
                Book Call
              </Button>
            </div>
            <p className="text-xs text-center text-stone-400 mt-4">
              By booking, you agree to receive email confirmations. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};