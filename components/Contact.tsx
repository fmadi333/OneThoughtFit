import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your feedback! I'll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                    <p className="text-lg text-gray-600">
                        Have a suggestion for a new feature? Found a bug? Or just want to share your success story? 
                        I read every email personally.
                    </p>
                </div>

                <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                    <div className="flex items-start gap-4">
                        <MessageSquare className="w-6 h-6 text-brand-600 mt-1" />
                        <div>
                            <h4 className="font-bold text-gray-900">Community Feedback</h4>
                            <p className="text-gray-600">
                                "The Calories of Now helped me lose 15lbs without stressing about tomorrow. Thank you!"
                                <br/>
                                <span className="text-sm font-semibold text-brand-600 mt-2 block">- Sarah J.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                            placeholder="How can I help you?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-600 text-white py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                    >
                        Send Message <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};
