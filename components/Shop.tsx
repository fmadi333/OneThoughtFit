import React from 'react';
import { Product } from '../types';
import { ShoppingBag, BookOpen, Pill } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const products: Product[] = [
  {
    id: '1',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    price: 16.99,
    type: 'book',
    image: 'https://picsum.photos/300/450?random=1',
    description: "The spiritual guide that inspired 'The Calories of Now'."
  },
  {
    id: '2',
    title: 'A New Earth',
    author: 'Eckhart Tolle',
    price: 18.00,
    type: 'book',
    image: 'https://picsum.photos/300/450?random=2',
    description: "Discover your life's purpose. Inspiration for 'A New Personal Best'."
  },
  {
    id: '3',
    title: 'Premium Whey Protein',
    price: 34.99,
    type: 'supplement',
    image: 'https://picsum.photos/300/450?random=3',
    description: "High quality protein to support your muscle growth journey."
  },
  {
    id: '4',
    title: 'Focus Pre-Workout',
    price: 29.99,
    type: 'supplement',
    image: 'https://picsum.photos/300/450?random=4',
    description: "Energy and focus for your personal best attempts."
  }
];

export const Shop: React.FC = () => {
  return (
    <section id="shop" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Shop & Resources" subtitle="Fuel your body and your mind with our curated selection." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                    {product.type === 'book' ? <BookOpen className="w-5 h-5 text-gray-700"/> : <Pill className="w-5 h-5 text-brand-500"/>}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{product.title}</h3>
                </div>
                {product.author && <p className="text-sm text-gray-500 mb-2">by {product.author}</p>}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-brand-600">${product.price.toFixed(2)}</span>
                    <button className="p-3 bg-gray-900 text-white rounded-lg hover:bg-brand-500 transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="text-brand-600 font-semibold hover:text-brand-800 flex items-center justify-center gap-2 mx-auto">
                View All Products <span aria-hidden="true">&rarr;</span>
             </button>
        </div>
      </div>
    </section>
  );
};
