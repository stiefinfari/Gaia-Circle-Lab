import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music, Mic2, Video, ArrowRight } from 'lucide-react';

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
              Il tuo hub creativo a Moruzzo. <span className="text-neon-blue font-medium">Plug & Play</span>, <span className="text-neon-purple font-medium">ready to use</span>, <span className="text-neon-pink font-medium">massima resa</span>.
              Spazio ibrido per A/V, creatività digitale e lavoro in remoto.
            </p>

            <div className="flex gap-4 mb-10 text-gray-400 flex-wrap">
              <div className="flex items-center gap-2">
                <Music size={18} className="text-neon-blue" />
                <span className="text-sm uppercase tracking-wide">DJ Set</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic2 size={18} className="text-neon-pink" />
                <span className="text-sm uppercase tracking-wide">Podcast</span>
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
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group bg-black/50 backdrop-blur-sm">
              {/* Background with noise and gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black opacity-90" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
              
              {/* Center Icon/Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/studio16.svg`}
                  alt="Studio 16" 
                  className="w-full max-w-[280px] md:max-w-[360px] h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
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
