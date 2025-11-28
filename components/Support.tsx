import React, { useState } from 'react';
import { Coffee, Heart } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Support: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const amounts = [5, 10, 20, 50];

  return (
    <section id="donate" className="py-20 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading title="Support the Project" subtitle="These apps are free forever. If they've helped you, consider supporting further development." />

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-100">
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-brand-600 fill-brand-600" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8">Leave a Tip</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {amounts.map((amount) => (
                    <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-4 rounded-xl text-lg font-bold border-2 transition-all ${
                            selectedAmount === amount
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-gray-200 hover:border-brand-300 text-gray-700'
                        }`}
                    >
                        ${amount}
                    </button>
                ))}
            </div>

            <button className="w-full sm:w-auto px-12 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 mx-auto">
                <Coffee className="w-5 h-5" /> 
                {selectedAmount ? `Tip $${selectedAmount}` : 'Make a Donation'}
            </button>
            <p className="mt-4 text-sm text-gray-500">Secure payment processing provided by Stripe.</p>
        </div>
      </div>
    </section>
  );
};
