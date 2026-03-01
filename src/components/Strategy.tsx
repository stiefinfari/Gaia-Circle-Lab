import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Strategy: React.FC = () => {

  return (
    <section id="strategy" className="py-16 bg-transparent text-white relative overflow-hidden">
      {/* Abstract Background - Cleaner */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black z-0" /> */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none mix-blend-screen" />
      <div className="absolute top-20 left-10 w-32 h-32 border border-neon-pink/30 rotate-45 pointer-events-none blur-xl mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-opaque p-6 md:p-16 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-neon-purple/10 to-transparent pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wider uppercase mb-6 text-glow">
              Non un costo, <br />ma un investimento
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Sfruttiamo i bandi della Regione FVG per finanziare la tua crescita digitale. 
              <br className="hidden md:block" />
              Recupera fino al 50% delle spese con il nostro supporto completo.
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
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] group-hover:bg-neon-blue/10 transition-colors box-glow-blue">
                <TrendingUp className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-neon-blue transition-colors">Bandi FVG</h3>
              <p className="text-sm text-gray-400 font-light">
                Contributi a fondo perduto per Startup, PMI, Artigiani e Commercio. Accedi ai fondi senza stress.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-purple/30 shadow-[0_0_15px_rgba(188,19,254,0.2)] group-hover:bg-neon-purple/10 transition-colors box-glow-purple">
                <ShieldCheck className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-neon-purple transition-colors">Zero Burocrazia</h3>
              <p className="text-sm text-gray-400 font-light">
                Gestiamo tutto noi: dallo studio di fattibilità alla rendicontazione finale. Nessuna sorpresa.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-pink/30 shadow-[0_0_15px_rgba(255,0,85,0.2)] group-hover:bg-neon-pink/10 transition-colors box-glow-pink">
                <Rocket className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-neon-pink transition-colors">Chiavi in Mano</h3>
              <p className="text-sm text-gray-400 font-light">
                Strategia, Sviluppo Tecnico e Contenuti Multimediali in un unico ecosistema integrato.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center relative z-10">
            <Link
              to="/servizi/strategy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer box-glow"
            >
              <span className="font-display uppercase tracking-wider text-sm">Scopri di più</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Strategy;
