import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Rocket } from 'lucide-react';

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 border border-neon-pink/20 rotate-45 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-6 md:p-16 rounded-3xl border border-white/10 shadow-neon-blue relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-neon-purple/20 to-transparent pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wider uppercase mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              Non un costo, <br />ma un investimento
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Trasformiamo l'innovazione in opportunità. Sfruttiamo la leva finanziaria per far crescere il tuo business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] group-hover:bg-neon-blue/10 transition-colors">
                <TrendingUp className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-neon-blue transition-colors">Leva Finanziaria</h3>
              <p className="text-sm text-gray-400 font-light">
                Supporto strategico per accedere a bandi regionali e contributi a fondo perduto (fino al 55%).
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-purple/30 shadow-[0_0_15px_rgba(188,19,254,0.2)] group-hover:bg-neon-purple/10 transition-colors">
                <ShieldCheck className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-neon-purple transition-colors">Sicurezza</h3>
              <p className="text-sm text-gray-400 font-light">
                Analisi preliminare e gestione delle pratiche per l'ammodernamento tecnologico e l'e-commerce.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-pink/30 shadow-[0_0_15px_rgba(255,0,85,0.2)] group-hover:bg-neon-pink/10 transition-colors">
                <Rocket className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-neon-pink transition-colors">Crescita</h3>
              <p className="text-sm text-gray-400 font-light">
                Startup artigiane e PMI del Triveneto: vi portiamo nel futuro digitale mantenendo le radici nel territorio.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Strategy;
