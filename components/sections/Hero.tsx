import React from 'react';
import { ArrowRight, CheckCircle, Play, FileText, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export const Hero: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWorkflows = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] mb-6">
              Turn your wellness sessions into a steady stream of clients.
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              I build a private <span className="text-teal-700 font-semibold">AI Factory</span> for your wellness business that turns calls, classes, and ideas into ready-to-use content, emails, and client journeys.
            </p>
            
            <ul className="space-y-3 mb-10">
              {[
                "From one session to a month of content",
                "On-brand, ethical and aligned with your voice",
                "Simple tools your team can use in a few clicks"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle className="text-teal-600 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToBooking}>
                Book a 20-minute fit call
              </Button>
              <Button variant="ghost" size="lg" className="group" onClick={scrollToWorkflows}>
                See how it works <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual - Abstract Dashboard representation */}
          <div className="relative hidden lg:block h-[500px]">
             {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-50/50 rounded-full blur-3xl -z-10"></div>
            
            {/* Main Card */}
            <div className="absolute top-10 left-10 right-10 bottom-10 bg-white rounded-2xl shadow-xl border border-stone-100 p-8 flex flex-col relative z-10">
              <div className="flex items-center justify-between mb-8 border-b border-stone-100 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-mono text-stone-400 uppercase tracking-widest">AI Workflow Active</div>
              </div>

              {/* Animation Flow Representation */}
              <div className="flex-1 flex flex-col justify-center items-center gap-6">
                
                {/* Input */}
                <div className="w-full bg-stone-50 rounded-xl p-4 border border-stone-100 flex items-center gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg text-teal-800">
                        <Play size={24} fill="currentColor" />
                    </div>
                    <div>
                        <div className="font-semibold text-stone-800">Zoom Recording: Breathwork 101</div>
                        <div className="text-xs text-stone-500">60 mins • Uploaded just now</div>
                    </div>
                </div>

                {/* Processing Arrow */}
                <div className="h-12 w-0.5 bg-gradient-to-b from-stone-200 to-teal-500 relative">
                    <div className="absolute -bottom-1 -left-1.5 w-4 h-4 rounded-full border-2 border-white bg-teal-500 animate-pulse"></div>
                </div>

                {/* Outputs Grid */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col gap-2 hover:border-teal-300 transition-colors cursor-default">
                        <Mail className="text-teal-600" size={20} />
                        <span className="text-sm font-medium">3 Nurture Emails</span>
                    </div>
                     <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col gap-2 hover:border-teal-300 transition-colors cursor-default">
                        <FileText className="text-teal-600" size={20} />
                        <span className="text-sm font-medium">Blog Post Summary</span>
                    </div>
                     <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col gap-2 hover:border-teal-300 transition-colors cursor-default">
                        <MessageSquare className="text-teal-600" size={20} />
                        <span className="text-sm font-medium">5 Social Captions</span>
                    </div>
                     <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col gap-2 hover:border-teal-300 transition-colors cursor-default">
                        <CheckCircle className="text-teal-600" size={20} />
                        <span className="text-sm font-medium">Client Checklist</span>
                    </div>
                </div>

              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -right-4 top-20 bg-white p-4 rounded-lg shadow-lg border border-stone-100 flex items-center gap-3 z-20 animate-[bounce_3s_infinite]">
                 <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle size={16} className="text-green-600" />
                 </div>
                 <span className="text-sm font-medium text-stone-700">Assets Generated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};