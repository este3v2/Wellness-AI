import React from 'react';
import { Section } from '../ui/Section';
import { Mic, FileText, Lightbulb, Cog, Mail, Instagram, PenTool, ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <Section bg="stone" className="text-center">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Meet your AI Factory</h2>
        <p className="text-lg text-stone-600">
          This isn't a generic chatbot. It's a tailored system trained on your voice, materials, and methodology. 
          You get a simple interface; I handle the complex engineering behind the scenes.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Inputs */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
             <div className="font-semibold text-stone-500 uppercase tracking-widest text-sm mb-2">Inputs</div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3 w-64 mx-auto md:mx-0">
                <Mic className="text-teal-600" />
                <span className="font-medium">Zoom Sessions</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3 w-64 mx-auto md:mx-0">
                <FileText className="text-teal-600" />
                <span className="font-medium">Voice Notes</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3 w-64 mx-auto md:mx-0">
                <Lightbulb className="text-teal-600" />
                <span className="font-medium">Rough Ideas</span>
             </div>
          </div>

          {/* The Factory */}
          <div className="flex-1 px-4 flex flex-col items-center">
             <div className="hidden md:flex w-full h-0.5 bg-stone-300 relative items-center justify-center">
                <div className="absolute right-0 -top-1.5 w-3 h-3 border-r-2 border-t-2 border-stone-300 rotate-45"></div>
             </div>
             
             <div className="bg-teal-700 text-white p-8 rounded-2xl shadow-xl my-6 md:my-0 relative z-10 w-full max-w-xs">
                <Cog className="mx-auto mb-4 animate-[spin_10s_linear_infinite]" size={48} />
                <h3 className="text-xl font-bold mb-2">The AI Factory</h3>
                <p className="text-teal-100 text-sm">
                    Custom-built pipelines that process your unique inputs into polished assets.
                </p>
             </div>

             <div className="hidden md:flex w-full h-0.5 bg-stone-300 relative items-center justify-center">
                 <div className="absolute right-0 -top-1.5 w-3 h-3 border-r-2 border-t-2 border-stone-300 rotate-45"></div>
             </div>
          </div>

          {/* Outputs */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
             <div className="font-semibold text-stone-500 uppercase tracking-widest text-sm mb-2">Outputs</div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3 w-64 mx-auto md:mx-0">
                <Mail className="text-teal-600" />
                <span className="font-medium">Client Emails</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3 w-64 mx-auto md:mx-0">
                <Instagram className="text-teal-600" />
                <span className="font-medium">Social Posts</span>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center gap-3 w-64 mx-auto md:mx-0">
                <PenTool className="text-teal-600" />
                <span className="font-medium">Launch Assets</span>
             </div>
          </div>

        </div>

        {/* Mobile Connector Lines (vertical) */}
        <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -z-10 -translate-x-1/2"></div>
      </div>
    </Section>
  );
};