import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Discography } from './components/Discography';
import { TourDates } from './components/TourDates';
import { Press } from './components/Press';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="bg-sumi min-h-screen selection:bg-white/20 selection:text-white relative">
      {/* Global Film Grain Overlay */}
      <div className="bg-noise"></div>
      
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          
          <main className="relative z-0">
            <Hero />
            <About />
            <Philosophy />
            <Discography />
            <Press />
            <TourDates />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;