import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Strategy from '../components/Strategy';
import Projects from '../components/Projects';
import Studio16Teaser from '../components/Studio16Teaser';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo;
      let attempts = 0;
      const maxAttempts = 20; // 2 seconds total with 100ms interval
      
      const intervalId = setInterval(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to avoid re-scrolling on manual reload/navigation if state persists
          window.history.replaceState({}, document.title);
          clearInterval(intervalId);
        }
        
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(intervalId);
        }
      }, 100);

      // Cleanup on unmount
      return () => clearInterval(intervalId);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white/30 selection:text-white cursor-none">
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;
