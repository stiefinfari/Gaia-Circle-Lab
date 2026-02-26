import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Strategy from '../components/Strategy';
import Projects from '../components/Projects';
import Studio16Teaser from '../components/Studio16Teaser';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white cursor-none">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Strategy />
        <Projects />
        <Studio16Teaser />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
