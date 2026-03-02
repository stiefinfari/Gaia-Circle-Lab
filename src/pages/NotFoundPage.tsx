import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  const [glitchText, setGlitchText] = useState('404');
  
  // Glitch effect logic
  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#';
    let interval: ReturnType<typeof setInterval>;
    
    const glitch = () => {
      let iteration = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        setGlitchText(prev => 
          prev
            .split('')
            .map((_, index) => {
              if (index < iteration) {
                return '404'[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
        
        if (iteration >= 3) {
          clearInterval(interval);
          setGlitchText('404');
        }
        
        iteration += 1 / 3;
      }, 50);
    };

    const randomGlitch = setInterval(() => {
      if (Math.random() > 0.7) glitch();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(randomGlitch);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-pink/30 selection:text-white flex flex-col relative overflow-hidden">
      <SEO title="404 - Reality Not Found" description="The dimension you are looking for has collapsed." />
      <Header />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.03),transparent_70%)]" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-blue/5 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4">
        <div className="relative">
          {/* Glitch 404 */}
          <h1 className="text-[120px] md:text-[200px] font-display font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 relative select-none">
            <span className="relative inline-block">
              {glitchText}
              <span className="absolute top-0 left-0 -ml-1 text-neon-blue/50 opacity-70 animate-pulse mix-blend-screen">{glitchText}</span>
              <span className="absolute top-0 left-0 ml-1 text-neon-pink/50 opacity-70 animate-pulse delay-75 mix-blend-screen">{glitchText}</span>
            </span>
          </h1>
          
          {/* Decorative Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-px w-full bg-gradient-to-r from-transparent via-neon-blue to-transparent my-8 opacity-50"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-white/90">
            Realtà <span className="text-neon-pink font-medium">Non Trovata</span>
          </h2>
          
          <p className="text-gray-400 font-sans text-lg leading-relaxed">
            La coordinata spaziale che stai cercando sembra essere collassata in una singolarità digitale.
            <br className="hidden md:block" />
            Torna al sicuro prima che il sistema si riavvii.
          </p>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              to="/" 
              className="group relative px-8 py-3 overflow-hidden rounded-none border border-white/20 hover:border-neon-blue/50 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-neon-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center font-display tracking-widest text-sm uppercase">
                <span className="mr-2 text-neon-blue">&lt;</span>
                Ritorna alla Base
                <span className="ml-2 text-neon-blue">/&gt;</span>
              </span>
            </Link>

            <Link 
              to="/contatti" 
              className="group relative px-8 py-3 overflow-hidden rounded-none border border-white/20 hover:border-neon-purple/50 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-neon-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center font-display tracking-widest text-sm uppercase">
                Segnala Errore
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 select-none font-mono text-xs text-neon-blue/40">
           <motion.div 
             className="absolute top-1/4 left-10"
             animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 4, repeat: Infinity }}
           >
             0xERR_DIMENSION_NULL
           </motion.div>
           <motion.div 
             className="absolute bottom-1/3 right-10"
             animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 5, repeat: Infinity, delay: 1 }}
           >
             SYSTEM.HALT(404)
           </motion.div>
           <motion.div 
             className="absolute top-1/2 right-1/4"
             animate={{ x: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 6, repeat: Infinity, delay: 2 }}
           >
             {`{ void: true }`}
           </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
