import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="filosofia" className="py-16 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden">
      {/* Glow Effect - Subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 mix-blend-screen" />

      {/* Clean Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold tracking-wider uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Vision & Mission
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-[0_0_10px_rgba(255,255,255,0.3)] mx-auto" />
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              In Gaia Circle Lab crediamo che <span className="text-white font-medium drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">"la perfezione viva solo nell'imperfezione"</span>. 
              La nostra missione non è la produzione in serie, ma la creazione di esperienze digitali, visive e fisiche che lasciano il segno.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              La tecnologia oggi riproduce, ma non prova emozioni; noi ascoltiamo, sbagliamo, correggiamo e trasformiamo un'idea in un'emozione autentica. 
              Vogliamo colmare l'abisso tra la semplice creazione tecnica e il dare un senso profondo alla comunicazione.
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default About;
