import React from 'react';
import { Calendar, Video, Clock, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Consulting: React.FC = () => {
  return (
    <section id="consulting" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-800/50 skew-x-12 transform origin-top translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Personalized Guidance<br/><span className="text-brand-500">Just for You.</span></h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Need help getting started? Stuck on a plateau? Book a 15-minute 1-on-1 video call with me, the developer. 
                    I'll guide you through the apps, help set your initial targets, or discuss your training philosophy.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-500/20 p-3 rounded-lg text-brand-500">
                            <Video className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl">1-on-1 Video Call</h4>
                            <p className="text-gray-400">Google Meet or Zoom</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-brand-500/20 p-3 rounded-lg text-brand-500">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl">15 Minutes</h4>
                            <p className="text-gray-400">Focused, high-impact advice.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white text-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 bg-brand-500 text-white px-6 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                    Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Consulting Session</h3>
                <p className="text-gray-500 mb-8">Single Session</p>
                
                <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-extrabold tracking-tight">$49.99</span>
                    <span className="ml-2 text-xl text-gray-500">/ 15 min</span>
                </div>

                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        <span>App Setup & Walkthrough</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        <span>Personalized Calorie Targets</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                        <span>Training Progression Advice</span>
                    </li>
                </ul>

                <button className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" /> Schedule Now
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};
