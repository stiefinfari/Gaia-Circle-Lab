import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 pointer-events-none"
        >
          <source src="/assets/video-showreel-trimmed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Simple Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 mix-blend-overlay" />
      
      {/* Minimal Geometric Shapes (Slow Float) */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-10 md:top-20 left-4 md:left-20 w-48 h-48 md:w-64 md:h-64 border border-neon-blue/10 rounded-full blur-[1px] z-0 pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-64 h-64 md:w-80 md:h-80 border border-neon-purple/10 rounded-full blur-[1px] z-0 pointer-events-none dashed-border"
      />
      
      {/* Floating Elements (Simple 2D Float) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-12 h-12 border border-neon-pink/20 rotate-45 z-0 pointer-events-none"
      />
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/3 w-16 h-16 border border-neon-blue/10 rounded-xl z-0 pointer-events-none"
      />

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center h-full"
      >
        
        {/* Logo Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative group cursor-default flex flex-col items-center"
        >
          {/* Subtle Glow */}
          <div className="absolute -inset-20 bg-gradient-to-tr from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 blur-[100px] rounded-full opacity-40 animate-pulse-slow" />
          
          <img 
            src="/assets/logo-text.png" 
            alt="Gaia Circle Lab Text" 
            className="w-56 md:w-96 lg:w-[32rem] h-auto opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] mb-6 md:mb-10"
          />

          {/* Clean Subtitle */}
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="flex flex-wrap justify-center gap-3 md:gap-8 text-[10px] md:text-sm font-display tracking-[0.2em] uppercase text-gray-400"
          >
            <span className="hover:text-neon-blue transition-colors duration-300">Web Design</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-neon-purple transition-colors duration-300">Musica</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-neon-pink transition-colors duration-300">Video</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-neon-blue transition-colors duration-300">Eventi</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition-colors duration-300">Studio 16</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white/80 animate-scan-down" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
