import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Sparkles, Mic2, PenTool, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Produzione Audio/Video',
      description: 'Dalla composizione musicale su misura alla produzione video cinematografica. Raccontiamo la tua storia attraverso suoni e immagini che lasciano il segno.',
      icon: <Mic2 className="w-8 h-8 text-white group-hover:text-neon-pink group-hover:drop-shadow-[0_0_10px_rgba(255,0,85,0.8)] transition-all duration-300" />,
      color: 'glass-neon-pink',
      glow: 'from-neon-pink/20 to-transparent',
      link: '/servizi/audio-video',
      benefits: ['• Sound Design & Composizione', '• Video Making & Editing', '• Post-Produzione Completa']
    },
    {
      title: 'Web Design',
      description: 'Architetture digitali moderne. Sviluppiamo siti web performanti, e-commerce headless e piattaforme su misura ottimizzate per la massima conversione.',
      icon: <Monitor className="w-8 h-8 text-white group-hover:text-neon-blue group-hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all duration-300" />,
      color: 'glass-neon-blue',
      glow: 'from-neon-blue/20 to-transparent',
      link: '/servizi/web-design',
      benefits: ['• Sviluppo Headless & PWA', '• UI/UX Design Avanzato', '• Integrazione AI & SEO']
    },
    {
      title: 'Graphic Design',
      description: 'Dall\'identità visiva al motion design. Creiamo linguaggi visivi coerenti e dinamici che definiscono il brand e catturano l\'attenzione del pubblico.',
      icon: <PenTool className="w-8 h-8 text-white group-hover:text-neon-purple group-hover:drop-shadow-[0_0_10px_rgba(188,19,254,0.8)] transition-all duration-300" />,
      color: 'glass-neon-purple',
      glow: 'from-neon-purple/20 to-transparent',
      link: '/servizi/graphic-design',
      benefits: ['• Brand Identity & Logo', '• Motion Graphics 2D/3D', '• Social Media Kit']
    },
    {
      title: 'Eventi & Experience',
      description: 'Curiamo la direzione artistica e tecnica dei tuoi eventi. Service audio/luci, LED wall e format di intrattenimento per esperienze immersive.',
      icon: <Sparkles className="w-8 h-8 text-white group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all duration-300" />,
      color: 'glass-card border-yellow-400/20 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]',
      glow: 'from-yellow-400/20 to-transparent',
      link: '/servizi/eventi',
      benefits: ['• Service Audio & Luci Pro', '• Regia Video & LED Wall', '• Format Esclusivi']
    },
  ];

  return (
    <section id="services" className="py-16 bg-transparent text-white relative overflow-hidden">
      {/* Background glow - More subtle */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 animate-pulse-slow mix-blend-screen" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-wider uppercase mb-4 text-glow">I Nostri Servizi</h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto mb-6 box-glow" />
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            Soluzioni creative e tecniche per ogni dimensione del tuo brand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 md:p-10 rounded-2xl group flex flex-col relative overflow-hidden h-full ${service.color}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="bg-white/5 p-4 rounded-xl group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/20 box-glow">
                    {service.icon}
                  </div>
                  <div className="bg-white/5 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0 duration-300">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-wider group-hover:text-white transition-all relative z-10">{service.title}</h3>
                
                <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors relative z-10 mb-8 flex-grow text-sm md:text-base">
                  {service.description}
                </p>

                <div className="mt-auto relative z-10 pt-6 border-t border-white/5 group-hover:border-white/20 transition-colors">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 group-hover:text-gray-300">Include:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                     {service.benefits.map((benefit, i) => (
                       <li key={i} className="flex items-center gap-2 group-hover:text-gray-300 transition-colors">
                         <span className="w-1 h-1 bg-white/50 rounded-full" />
                         {benefit.replace('• ', '')}
                       </li>
                     ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;