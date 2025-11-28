import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AppsShowcase } from './components/AppsShowcase';
import { Shop } from './components/Shop';
import { Consulting } from './components/Consulting';
import { Support } from './components/Support';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <AppsShowcase />
        <Shop />
        <Consulting />
        <Support />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
