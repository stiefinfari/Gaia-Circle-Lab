import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Users, Zap, Rocket, Globe, Hammer, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StrategyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-blue/30 selection:text-white">
      <Header />
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="pt-24 container mx-auto px-6 relative z-10 pb-24">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-display font-bold uppercase mb-6 text-glow"
                >
                    Strategia & Implementazione
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
                >
                    Un approccio integrato per trasformare la tua visione in realtà misurabile.
                </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16"
            >
                {/* Step 1 */}
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-neon-blue/30 transition-colors group">
                    <div className="bg-neon-blue/10 p-4 rounded-xl h-fit shrink-0 group-hover:bg-neon-blue/20 transition-colors">
                        <Search className="text-neon-blue w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold uppercase mb-3 text-neon-blue">1. Audit Tecnologico-Finanziario</h4>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                            Analizziamo il tuo attuale ecosistema digitale e identifichiamo le aree di miglioramento (AI Integration, Immersive Media, efficientamento workflow). Parallelamente, mappiamo i bandi attivi (CCIAA, Regionali, Transizione 5.0) compatibili con il tuo profilo aziendale.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-neon-purple/30 transition-colors group">
                    <div className="bg-neon-purple/10 p-4 rounded-xl h-fit shrink-0 group-hover:bg-neon-purple/20 transition-colors">
                        <PenTool className="text-neon-purple w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold uppercase mb-3 text-neon-purple">2. Progettazione Tailor-Made</h4>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                            Non vendiamo pacchetti chiusi. Sviluppiamo un progetto tecnico che rispetti i parametri necessari per l'ottenimento del contributo.
                            <span className="block mt-4 text-xs text-white/60 bg-white/5 p-3 rounded border-l-2 border-neon-purple">
                                Focus: Digitalizzazione processi, hardware per VR/AR, installazioni interattive o infrastrutture AI-driven.
                            </span>
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-neon-pink/30 transition-colors group">
                    <div className="bg-neon-pink/10 p-4 rounded-xl h-fit shrink-0 group-hover:bg-neon-pink/20 transition-colors">
                        <Users className="text-neon-pink w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold uppercase mb-3 text-neon-pink">3. Gestione Pratica e Partnership</h4>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                            Collaboriamo con consulenti finanziari specializzati per la presentazione della domanda. Ci occupiamo della fornitura tecnica e della documentazione necessaria per la rendicontazione, garantendo la conformità agli standard richiesti dall'ente erogatore.
                        </p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-400/30 transition-colors group">
                    <div className="bg-green-500/10 p-4 rounded-xl h-fit shrink-0 group-hover:bg-green-500/20 transition-colors">
                        <Zap className="text-green-400 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold uppercase mb-3 text-green-400">4. Implementazione e Training</h4>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed opacity-80">
                            A bando approvato o avviato, procediamo con il deployment tecnologico. Forniamo formazione interna al tuo team per garantire che l'investimento diventi immediatamente produttivo e integrato nel business model.
                        </p>
                    </div>
                </div>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center text-xs text-gray-500 font-mono mb-16 italic max-w-2xl mx-auto bg-white/5 p-4 rounded-lg border border-white/10"
            >
                * Nota: I contributi sono erogati a rimborso. Il cliente anticipa l'investimento e riceve il contributo direttamente dall'ente erogatore.
            </motion.p>

            {/* Bandi Attivi Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-3xl p-8 md:p-12 mb-16 border border-white/10 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-neon-blue/10 to-transparent pointer-events-none" />
                
                <h4 className="text-2xl font-bold uppercase mb-10 text-center tracking-wider text-white">Opportunità Attive FVG</h4>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Bando 1 */}
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-blue/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0 border border-neon-blue/20 group-hover:bg-neon-blue/20 transition-colors">
                                <Rocket className="w-6 h-6 text-neon-blue" />
                            </div>
                            <h5 className="font-bold text-white uppercase text-lg tracking-wide">Start-up Giovanili</h5>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-light">Per nuove imprese o costituite da meno di 5 anni (Under 40).</p>
                        <ul className="space-y-3 text-sm text-gray-300 font-mono">
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-neon-blue font-bold">50%</span>
                                <span>A fondo perduto</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-neon-blue font-bold">Focus</span>
                                <span>E-commerce, Branding, Tech</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bando 2 */}
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-purple/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center shrink-0 border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-colors">
                                <Globe className="w-6 h-6 text-neon-purple" />
                            </div>
                            <h5 className="font-bold text-white uppercase text-lg tracking-wide">Internazionalizzazione</h5>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-light">Per PMI Manifatturiere e Servizi che puntano all'estero.</p>
                        <ul className="space-y-3 text-sm text-gray-300 font-mono">
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-neon-purple font-bold">50%</span>
                                <span>Fino a 100k erogabili</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-neon-purple font-bold">Focus</span>
                                <span>Portali B2B, Fiere Virtuali</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bando 3 */}
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-neon-pink/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-pink/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center shrink-0 border border-neon-pink/20 group-hover:bg-neon-pink/20 transition-colors">
                                <Hammer className="w-6 h-6 text-neon-pink" />
                            </div>
                            <h5 className="font-bold text-white uppercase text-lg tracking-wide">Artigianato (CATA)</h5>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-light">Digitalizzazione per Imprese Artigiane.</p>
                        <ul className="space-y-3 text-sm text-gray-300 font-mono">
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-neon-pink font-bold">30-45%</span>
                                <span>Contributo a fondo perduto</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-neon-pink font-bold">Focus</span>
                                <span>Web App, Gestionali, Automazione</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bando 4 */}
                    <div className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-green-400/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                                <ShoppingBag className="w-6 h-6 text-green-400" />
                            </div>
                            <h5 className="font-bold text-white uppercase text-lg tracking-wide">Terziario (CATT)</h5>
                        </div>
                        <p className="text-sm text-gray-400 mb-4 font-light">Per Commercio, Turismo e Servizi.</p>
                        <ul className="space-y-3 text-sm text-gray-300 font-mono">
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-green-400 font-bold">45%</span>
                                <span>A fondo perduto</span>
                            </li>
                            <li className="flex items-center gap-3 bg-white/5 p-2 rounded">
                                <span className="text-green-400 font-bold">Focus</span>
                                <span>E-commerce, Social, Strategy</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CTA */}
            <div className="text-center">
                 <Link 
                    to="/contatti" 
                    className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-wide hover:bg-gray-200 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-lg"
                 >
                    <span>Prenota un check-up gratuito</span>
                    <ArrowRight size={24} />
                 </Link>
                 <p className="mt-6 text-gray-500 text-sm">
                    Analisi di fattibilità senza impegno.
                 </p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StrategyPage;
