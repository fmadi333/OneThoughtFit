import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import { AppInfo } from '../types';
import { Clock, TrendingUp, CheckCircle, Smartphone } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const apps: AppInfo[] = [
  {
    id: 'calories-now',
    name: 'The Calories of Now',
    tagline: 'Stop Overthinking. Maintain Pace.',
    description: "Designed to tell you how many calories you can have *now* to maintain your pace. Eliminate the anxiety of future meals and focus on the present balance.",
    features: ['Real-time Calorie Pacing', 'Anti-Anxiety Interface', 'Simple Maintenance Targets'],
    inspiration: "Inspired by 'The Power of Now'",
    image: 'https://picsum.photos/400/800?grayscale', // Placeholder
    downloadLink: '#',
    colorTheme: 'bg-orange-100',
  },
  {
    id: 'personal-best',
    name: 'A New Personal Best',
    tagline: 'Simple Progression for Lifters.',
    description: "A distraction-free tracker for progressive overload. Grow muscle and build strength by simply improving on your previous self.",
    features: ['Historical Best Tracking', 'Simple Rep/Set Logging', 'Growth Focused Metrics'],
    inspiration: "Inspired by 'A New Earth'",
    image: 'https://picsum.photos/400/801?grayscale', // Placeholder
    downloadLink: '#',
    colorTheme: 'bg-stone-100',
  }
];

export const AppsShowcase: React.FC = () => {
  return (
    <section id="apps" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
            title="Our Applications" 
            subtitle="Two distinct tools designed to simplify your journey to health and strength. Completely free."
        />

        <div className="space-y-32">
          {apps.map((app, index) => (
            <div key={app.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              
              {/* Phone Mockup */}
              <div className="w-full lg:w-1/2 flex justify-center transform hover:scale-[1.02] transition-transform duration-500">
                 <div className="relative">
                     {/* Decorative Blob */}
                     <div className={`absolute -inset-4 ${index % 2 === 0 ? 'bg-orange-100' : 'bg-stone-200'} rounded-full blur-3xl opacity-60`}></div>
                     <PhoneFrame src={app.image} alt={app.name} overlayText={app.name} />
                 </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold tracking-wide uppercase">
                  {app.inspiration}
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900">{app.name}</h3>
                <p className="text-xl text-brand-600 font-medium">{app.tagline}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{app.description}</p>
                
                <ul className="space-y-4">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                         <CheckCircle className="w-5 h-5" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                    <Smartphone className="w-5 h-5" /> Download for Free
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center sm:text-left">
                    *Available on iOS. No subscription fees.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
