import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Awards from './components/Awards';
import Resume from './components/Resume';
import Work from './components/Work';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';
import './index.css';

function App() {
  useScrollAnimations();

  useEffect(() => {
    // Simple fade-in effect on mount to mimic original
    const wrap = document.getElementById('wrap');
    if (wrap) {
      setTimeout(() => {
        wrap.classList.add('open');
      }, 100);
    }
  }, []);

  return (
    <main id="wrap">
      <Header />
      <Hero />
      <About />
      <Awards />
      <Resume />
      <Work />
      <Footer />
    </main>
  );
}

export default App;
