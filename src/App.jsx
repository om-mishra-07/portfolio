import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import WaterBottleAnimation from './components/WaterBottleAnimation';

export default function App() {
  // Smooth scrolling polyfill awareness
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <WaterBottleAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
