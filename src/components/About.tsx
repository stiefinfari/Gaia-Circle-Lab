import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold tracking-wider uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Vision & Mission
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-[0_0_10px_rgba(255,255,255,0.5)] mx-auto" />
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              In Gaia Circle Lab crediamo che <span className="text-white font-medium drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">"la perfezione viva solo nell'imperfezione"</span>. 
              La nostra missione non è la produzione in serie, ma la creazione di esperienze digitali, visive e fisiche che lasciano il segno.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              La tecnologia oggi riproduce, ma non prova emozioni; noi ascoltiamo, sbagliamo, correggiamo e trasformiamo un'idea in un'emozione autentica. 
              Vogliamo colmare l'abisso tra la semplice creazione tecnica e il dare un senso profondo alla comunicazione.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden border-neon-purple/20"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-50" />
          
          <h3 className="text-2xl font-display font-bold mb-8 text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-2 h-2 bg-neon-white rounded-full shadow-[0_0_10px_white]" />
            Gaia X IA
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div className="space-y-4 group">
              <h4 className="text-white font-semibold group-hover:text-neon-blue transition-all">Amplificazione</h4>
              <p className="font-light text-sm leading-relaxed">L’intelligenza artificiale non sostituisce la creatività, la amplifica. Non prende decisioni: le ispira.</p>
            </div>
            <div className="space-y-4 group">
              <h4 className="text-white font-semibold group-hover:text-neon-purple transition-all">Tecnologia Poetica</h4>
              <p className="font-light text-sm leading-relaxed">Crediamo in una tecnologia che non cancella l’errore ma lo trasforma in linguaggio.</p>
            </div>
            <div className="space-y-4 group">
              <h4 className="text-white font-semibold group-hover:text-neon-pink transition-all">Tocco Umano</h4>
              <p className="font-light text-sm leading-relaxed">Nessun risultato è definitivo finché non passa attraverso lo sguardo umano che decide, interpreta e dà significato.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
