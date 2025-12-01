import React from 'react';
import { Section } from '../ui/Section';
import { Star, Users, ArrowRight } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <Section bg="white" id="social-proof">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Join the Wellness AI Pilot</h2>
        <p className="text-stone-600 text-lg">
          We are currently opening spots for a select group of wellness businesses to build their custom AI Factories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        {/* Pilot Status Card */}
        <div className="bg-teal-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Users size={180} />
            </div>
            
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-teal-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 text-teal-200 border border-teal-700/50">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Current Status: Open
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Q3 Pilot Access</h3>
                <p className="text-teal-100 mb-8 leading-relaxed">
                    We work deeply with each partner to ensure the system fits like a glove. To maintain quality during this pilot phase, we are capping intake at 5 new practices per month.
                </p>
                
                <div className="bg-teal-800/50 rounded-lg p-4 border border-teal-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full border-2 border-teal-800 bg-stone-200"></div>
                             <div className="w-8 h-8 rounded-full border-2 border-teal-800 bg-stone-300"></div>
                        </div>
                        <span className="text-sm font-medium text-teal-50">3 spots remaining</span>
                    </div>
                    <ArrowRight className="text-teal-400" size={20} />
                </div>
            </div>
        </div>

        {/* Testimonials / Early Feedback */}
        <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 shadow-sm relative">
                <div className="absolute top-6 right-6 text-stone-200">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                </div>
                <div className="flex gap-1 text-yellow-500 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-stone-700 italic mb-4 leading-relaxed relative z-10">
                    "Alex helped me organize my entire content library. I didn't realize how much value was sitting in my Google Drive gathering dust. Now it works for me 24/7."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden shrink-0">
                        <img src="https://picsum.photos/id/65/100/100" alt="Sarah J" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-stone-900 text-sm">Sarah Jenkins</div>
                        <div className="text-stone-500 text-xs">Yoga Studio Owner</div>
                    </div>
                </div>
            </div>

             {/* Testimonial 2 */}
             <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 shadow-sm relative">
                <div className="absolute top-6 right-6 text-stone-200">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                </div>
                <div className="flex gap-1 text-yellow-500 mb-3">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-stone-700 italic mb-4 leading-relaxed relative z-10">
                    "Finally, automation that doesn't feel robotic. My clients didn't even notice the difference, but I got my weekends back."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden shrink-0">
                        <img src="https://picsum.photos/id/66/100/100" alt="Mike T" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-stone-900 text-sm">Mike Thompson</div>
                        <div className="text-stone-500 text-xs">Functional Medicine</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};