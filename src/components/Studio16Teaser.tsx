import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Mic2, Video } from 'lucide-react';

const Studio16Teaser: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900/30 border-y border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-neon-purple"></span>
              <span className="text-neon-purple font-bold uppercase tracking-widest text-sm">New Opening</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider uppercase mb-6 text-white">
              Studio 16
            </h2>
            
            <p className="text-xl text-gray-300 font-light mb-8 leading-relaxed">
              Il nuovo hub creativo a Moruzzo (UD). Uno spazio professionale dedicato alla musica, 
              alla registrazione e alle dirette streaming.
            </p>

            <div className="flex gap-4 mb-10 text-gray-400">
              <div className="flex items-center gap-2">
                <Music size={18} className="text-neon-blue" />
                <span className="text-sm uppercase tracking-wide">DJ Set</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic2 size={18} className="text-neon-pink" />
                <span className="text-sm uppercase tracking-wide">Recording</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={18} className="text-neon-purple" />
                <span className="text-sm uppercase tracking-wide">Streaming</span>
              </div>
            </div>

            <Link 
              to="/studio16" 
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-display font-bold uppercase tracking-wide hover:bg-neon-purple hover:text-white hover:shadow-[0_0_20px_rgba(188,19,254,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Scopri lo spazio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Visual/Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
              {/* Placeholder Gradient representing the studio vibe */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-zinc-900 to-black" />
              
              {/* Animated Glow Lines */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent animate-pulse-slow" />
                <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent animate-pulse-slow delay-700" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-neon-pink to-transparent animate-pulse-slow delay-1000" />
              </div>

              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-6xl font-display font-bold text-white/5 uppercase tracking-tighter group-hover:text-white/10 transition-colors duration-500">
                  Studio 16
                </h3>
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative box behind */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-neon-purple/20 rounded-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Studio16Teaser;
