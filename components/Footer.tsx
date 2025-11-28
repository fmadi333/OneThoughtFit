import React from 'react';
import { Dumbbell, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2 text-white font-bold text-xl">
             <Dumbbell className="w-6 h-6 text-brand-500" />
             <span>Mindful Fitness</span>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} Mindful Fitness Apps. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-brand-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
            <p>Disclaimer: Always consult a physician before starting any diet or exercise program.</p>
        </div>
      </div>
    </footer>
  );
};
