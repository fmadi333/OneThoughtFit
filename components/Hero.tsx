import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
        setSubmitted(true);
        // Here you would integrate with your email service
        setTimeout(() => setSubmitted(false), 3000);
        setEmail('');
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-brand-200 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Fitness in the <span className="text-brand-200">Present Moment</span>.
            <br />
            Growth for the Future.
          </h1>
          <p className="text-lg md:text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Free tools inspired by the teachings of Eckhart Tolle.
            Simplify your nutrition and build strength without the noise.
          </p>

          {/* Email Capture */}
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl max-w-lg mx-auto border border-white/20 shadow-2xl">
            {submitted ? (
                 <div className="py-3 px-4 text-green-300 font-medium flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" /> Thanks! You're on the list.
                 </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    placeholder="Enter your email for updates & tips"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-300 transition-all"
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-colors flex items-center justify-center gap-2 group"
                >
                    Join Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </form>
            )}
          </div>
          <p className="mt-4 text-sm text-brand-200 opacity-80">
            Join our community to receive updates and mindful fitness guides.
          </p>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};
