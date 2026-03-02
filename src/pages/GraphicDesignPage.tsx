import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PenTool, Film, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GraphicDesignPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic values based on scroll
  const glowColor = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["rgba(0,243,255,0.3)", "rgba(255,0,85,0.3)", "rgba(157,0,255,0.3)"]
  );
  
  const borderColor = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["rgba(0,243,255,0.5)", "rgba(255,0,85,0.5)", "rgba(157,0,255,0.5)"]
  );

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-blue/30 selection:text-white cursor-none">
      <Header />
      
      <main ref={containerRef} className="relative pt-24 pb-20">
        <section className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-12 relative">
             
             {/* Left Column: Content */}
             <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-24 py-6 lg:py-12">
                
                {/* Hero Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                   <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                      Graphic <br/> & Motion
                   </h1>
                   <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
                      Diamo forma alle idee. Dall'identità statica al movimento fluido, creiamo linguaggi visivi che lasciano il segno.
                   </p>
                </motion.div>

                {/* Mobile Video (Visible only on small screens) - Integrated in flow */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="lg:hidden w-full max-w-[300px] mx-auto aspect-[9/16] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl shadow-neon-blue/20 relative"
                >
                   <video 
                       className="w-full h-full object-cover" 
                       autoPlay
                       muted
                       loop
                       playsInline
                       src={`${import.meta.env.BASE_URL}assets/gaia-manifesto.mp4`}
                   />
                   <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
                   <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                      <span className="text-[10px] font-bold bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-md border border-white/10 uppercase tracking-widest">
                         Gaia Manifesto
                      </span>
                   </div>
                </motion.div>

                {/* Graphic Design Block - Card Style for Mobile */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group bg-white/5 lg:bg-transparent p-6 lg:p-0 rounded-3xl lg:rounded-none border border-white/10 lg:border-none hover:border-neon-blue/30 transition-all duration-500"
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-neon-blue/10 rounded-2xl border border-neon-blue/20 group-hover:bg-neon-blue/20 transition-colors">
                         <PenTool className="text-neon-blue w-8 h-8" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">Graphic Design</h2>
                   </div>
                   <p className="text-gray-300 leading-relaxed font-light text-lg mb-6 lg:pl-4 lg:border-l-2 lg:border-neon-blue/30">
                      Progettiamo sistemi visivi coerenti. Ogni logo, font e colore è scelto per raccontare la tua storia prima ancora di leggere una parola.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Brand Identity', 'Materiale Editoriale', 'Packaging', 'Typography'].map((item) => (
                         <div key={item} className="flex items-center gap-3 bg-black/40 lg:bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-neon-blue/30 transition-colors">
                            <CheckCircle2 size={18} className="text-neon-blue" />
                            <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                         </div>
                      ))}
                   </div>
                </motion.div>

                {/* Motion Graphics Block - Card Style for Mobile */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group bg-white/5 lg:bg-transparent p-6 lg:p-0 rounded-3xl lg:rounded-none border border-white/10 lg:border-none hover:border-neon-pink/30 transition-all duration-500"
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-neon-pink/10 rounded-2xl border border-neon-pink/20 group-hover:bg-neon-pink/20 transition-colors">
                         <Film className="text-neon-pink w-8 h-8" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">Motion Graphics</h2>
                   </div>
                   <p className="text-gray-300 leading-relaxed font-light text-lg mb-6 lg:pl-4 lg:border-l-2 lg:border-neon-pink/30">
                      Il movimento cattura l'attenzione. Diamo vita ai pixel con animazioni che guidano lo sguardo e emozionano l'utente.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Animazioni 2D/3D', 'Explainer Video', 'Social Content', 'VFX'].map((item) => (
                         <div key={item} className="flex items-center gap-3 bg-black/40 lg:bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-neon-pink/30 transition-colors">
                            <CheckCircle2 size={18} className="text-neon-pink" />
                            <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                         </div>
                      ))}
                   </div>
                </motion.div>

                {/* CTA */}
                <div className="pt-4 lg:pt-8 text-center lg:text-left">
                  <Link to="/contatti" className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-xl hover:shadow-neon-purple/20">
                    Inizia un progetto <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

             </div>

             {/* Right Column: Sticky Video (Desktop Only) */}
             <div className="hidden lg:block lg:col-span-5 relative">
                <div className="sticky top-32 flex justify-center">
                   <motion.div 
                     style={{ 
                       boxShadow: useTransform(glowColor, color => `0 0 60px ${color}`),
                       borderColor: borderColor
                     }}
                     className="relative w-full max-w-[400px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 bg-zinc-900 transition-colors duration-500"
                   >
                      <video 
                          className="w-full h-full object-cover" 
                          autoPlay
                          muted
                          loop
                          playsInline
                          src={`${import.meta.env.BASE_URL}assets/gaia-manifesto.mp4`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
                      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                         <span className="text-[10px] font-bold bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-md border border-white/10 uppercase tracking-widest">
                            Gaia Manifesto
                         </span>
                      </div>
                   </motion.div>
                </div>
             </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GraphicDesignPage;
