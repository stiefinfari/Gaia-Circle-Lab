import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShieldCheck, Rocket, X, Search, PenTool, Users, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const Strategy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] group-hover:bg-neon-blue/10 transition-colors box-glow-blue">
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
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-purple/30 shadow-[0_0_15px_rgba(188,19,254,0.2)] group-hover:bg-neon-purple/10 transition-colors box-glow-purple">
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
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-neon-pink/30 shadow-[0_0_15px_rgba(255,0,85,0.2)] group-hover:bg-neon-pink/10 transition-colors box-glow-pink">
                <Rocket className="w-8 h-8 text-neon-pink" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider group-hover:text-neon-pink transition-colors">Crescita</h3>
              <p className="text-sm text-gray-400 font-light">
                Startup artigiane e PMI del Triveneto: vi portiamo nel futuro digitale mantenendo le radici nel territorio.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center relative z-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer box-glow"
            >
              <span className="font-display uppercase tracking-wider text-sm">Scopri di più</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glass-heavy rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-12 relative shadow-2xl shadow-neon-blue/20"
              onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-10"
                >
                    <X size={24} />
                </button>

                <div className="relative z-10">
                    <h3 className="text-2xl md:text-4xl font-display font-bold uppercase mb-4 text-center">
                        Strategia & Implementazione
                    </h3>
                    <p className="text-center text-gray-400 mb-12 font-light max-w-2xl mx-auto">
                        Un approccio integrato per trasformare la tua visione in realtà misurabile.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                        {/* Step 1 */}
                        <div className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-blue/30 transition-colors group">
                            <div className="bg-neon-blue/10 p-3 rounded-lg h-fit shrink-0 group-hover:bg-neon-blue/20 transition-colors">
                                <Search className="text-neon-blue w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-2 text-neon-blue">1. Audit Tecnologico-Finanziario</h4>
                                <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                                    Analizziamo il tuo attuale ecosistema digitale e identifichiamo le aree di miglioramento (AI Integration, Immersive Media, efficientamento workflow). Parallelamente, mappiamo i bandi attivi (CCIAA, Regionali, Transizione 5.0) compatibili con il tuo profilo aziendale.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-purple/30 transition-colors group">
                            <div className="bg-neon-purple/10 p-3 rounded-lg h-fit shrink-0 group-hover:bg-neon-purple/20 transition-colors">
                                <PenTool className="text-neon-purple w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-2 text-neon-purple">2. Progettazione Tailor-Made</h4>
                                <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                                    Non vendiamo pacchetti chiusi. Sviluppiamo un progetto tecnico che rispetti i parametri necessari per l'ottenimento del contributo.
                                    <span className="block mt-3 text-xs text-white/60 bg-white/5 p-2 rounded border-l-2 border-neon-purple">
                                        Focus: Digitalizzazione processi, hardware per VR/AR, installazioni interattive o infrastrutture AI-driven.
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-pink/30 transition-colors group">
                            <div className="bg-neon-pink/10 p-3 rounded-lg h-fit shrink-0 group-hover:bg-neon-pink/20 transition-colors">
                                <Users className="text-neon-pink w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-2 text-neon-pink">3. Gestione Pratica e Partnership</h4>
                                <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                                    Collaboriamo con consulenti finanziari specializzati per la presentazione della domanda. Ci occupiamo della fornitura tecnica e della documentazione necessaria per la rendicontazione, garantendo la conformità agli standard richiesti dall'ente erogatore.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-400/30 transition-colors group">
                            <div className="bg-green-500/10 p-3 rounded-lg h-fit shrink-0 group-hover:bg-green-500/20 transition-colors">
                                <Zap className="text-green-400 w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold uppercase mb-2 text-green-400">4. Implementazione e Training</h4>
                                <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                                    A bando approvato o avviato, procediamo con il deployment tecnologico. Forniamo formazione interna al tuo team per garantire che l'investimento diventi immediatamente produttivo e integrato nel business model.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Selling Points */}
                    <div className="bg-white/5 rounded-2xl p-8 mb-10 border border-white/10">
                        <h4 className="text-xl font-bold uppercase mb-8 text-center tracking-wider text-white">Perché Sceglierci</h4>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center group">
                                <div className="w-12 h-12 mx-auto bg-neon-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-neon-blue" />
                                </div>
                                <h5 className="font-bold text-white mb-2 uppercase text-sm tracking-wide">Riduzione del CAPEX</h5>
                                <p className="text-xs text-gray-400 font-mono leading-relaxed">Accesso a contributi a fondo perduto (fino al 55%) e crediti d'imposta.</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-12 h-12 mx-auto bg-neon-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-neon-purple" />
                                </div>
                                <h5 className="font-bold text-white mb-2 uppercase text-sm tracking-wide">Vantaggio Competitivo</h5>
                                <p className="text-xs text-gray-400 font-mono leading-relaxed">Soluzioni AI e Immersive che i competitor spesso ignorano.</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-12 h-12 mx-auto bg-neon-pink/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-neon-pink" />
                                </div>
                                <h5 className="font-bold text-white mb-2 uppercase text-sm tracking-wide">Zero Pensieri</h5>
                                <p className="text-xs text-gray-400 font-mono leading-relaxed">Gestiamo l'intero ciclo, dal concept tecnico alla messa in opera.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center pb-4">
                         <a 
                            href="/contatti" 
                            onClick={() => setIsModalOpen(false)}
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-200 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                         >
                            <span>Prenota un check-up gratuito</span>
                            <ArrowRight size={20} />
                         </a>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Strategy;
