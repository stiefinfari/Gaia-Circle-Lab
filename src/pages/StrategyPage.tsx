import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, FileText, Zap, Rocket, Globe, Hammer, ShoppingBag, ArrowRight, CheckCircle, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StrategyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-blue/30 selection:text-white overflow-x-hidden">
      <SEO 
        title="Strategia & Bandi" 
        description="Consulenza strategica per accedere ai bandi FVG. Digitalizzazione, Start-up, Internazionalizzazione. Supporto completo dalla domanda alla rendicontazione."
        keywords="Bandi FVG, Contributi Fondo Perduto, Start-up, Internazionalizzazione, Digitalizzazione, CATA, CATT, Udine"
        canonical="/servizi/strategy"
      />
      <Header />
      
      {/* Background Ambience - Simplified */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[150px] opacity-30" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="pt-32 md:pt-40 container mx-auto px-6 relative z-10 pb-24">
        <div className="max-w-7xl mx-auto">
            
            {/* Hero Section - Clean & Direct */}
            <div className="text-center mb-24">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-7xl font-display font-bold uppercase mb-6 tracking-tight leading-none"
                >
                    Strategia & <span className="text-neon-blue">Bandi FVG</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
                >
                    Trasformiamo la burocrazia in opportunità. Accedi ai fondi perduti per la tua crescita digitale.
                </motion.p>
            </div>

            {/* The Process - Simple 4-Step Grid */}
            <div className="mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Il Nostro Metodo</h2>
                    <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Step 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group h-full">
                        <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center mb-6 text-neon-blue group-hover:scale-110 transition-transform">
                            <span className="font-bold text-lg">01</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-2 break-words hyphens-auto">
                            <Search className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                            <span className="flex-1 min-w-0">Audit & Analisi</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 break-words">
                            Check-up tecnologico e screening dei bandi attivi (CCIAA, Regionali, Transizione 5.0).
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-neon-blue flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">Mappatura Gap</span></li>
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-neon-blue flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">Selezione Bandi</span></li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group h-full">
                        <div className="w-12 h-12 bg-neon-purple/20 rounded-xl flex items-center justify-center mb-6 text-neon-purple group-hover:scale-110 transition-transform">
                            <span className="font-bold text-lg">02</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-2 break-words hyphens-auto">
                            <PenTool className="w-5 h-5 text-neon-purple flex-shrink-0 mt-1" />
                            <span className="flex-1 min-w-0">Progettazione</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 break-words">
                            Sviluppo del progetto tecnico su misura per massimizzare il punteggio in graduatoria.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-neon-purple flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">Focus VR/AR/AI</span></li>
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-neon-purple flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">Digitalizzazione</span></li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group h-full">
                        <div className="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center mb-6 text-neon-pink group-hover:scale-110 transition-transform">
                            <span className="font-bold text-lg">03</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-2 break-words hyphens-auto">
                            <FileText className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                            <span className="flex-1 min-w-0">Gestione</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 break-words">
                            Gestione completa della pratica, dalla domanda alla rendicontazione finale.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-neon-pink flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">Burocrazia Zero</span></li>
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-neon-pink flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">Conformità Totale</span></li>
                        </ul>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group h-full">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                            <span className="font-bold text-lg">04</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-2 break-words hyphens-auto">
                            <Zap className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                            <span className="flex-1 min-w-0">Risultati</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 break-words">
                            Deployment delle soluzioni e formazione del team. Produttività immediata.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">ROI Misurabile</span></li>
                            <li className="flex items-start gap-2 break-words"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-1" /> <span className="flex-1 min-w-0">Training Team</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Note Section */}
            <div className="flex justify-center mb-24">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 max-w-2xl text-center">
                    <p className="text-gray-400 text-sm">
                        <span className="text-neon-blue font-bold mr-2">* NOTA:</span>
                        I contributi sono erogati a rimborso a progetto concluso.
                    </p>
                </div>
            </div>

            {/* Active Grants - Clean Cards */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Bandi Attivi</h2>
                    <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Start-up */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-6 rounded-3xl border border-white/10 hover:border-neon-blue/50 transition-all group relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-[50px] rounded-full -mr-10 -mt-10 group-hover:bg-neon-blue/20 transition-colors" />
                        <Rocket className="w-10 h-10 text-neon-blue mb-6 relative z-10 flex-shrink-0" />
                        <h4 className="text-xl font-bold text-white uppercase mb-2 relative z-10 break-words hyphens-auto">Start-up</h4>
                        <p className="text-sm text-gray-400 mb-6 min-h-[40px] relative z-10 break-words">Nuove imprese o &lt; 5 anni (Under 40).</p>
                        
                        <div className="space-y-4 relative z-10 pt-4 border-t border-white/10">
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Contributo</span>
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className="text-2xl font-bold text-white">50%</span>
                                    <span className="text-xs text-neon-blue font-bold">FONDO PERDUTO</span>
                                </div>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Focus</span>
                                <span className="text-sm text-gray-300 break-words">Tech & Innovation</span>
                            </div>
                        </div>
                    </div>

                    {/* Internazionalizzazione */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-6 rounded-3xl border border-white/10 hover:border-neon-purple/50 transition-all group relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-[50px] rounded-full -mr-10 -mt-10 group-hover:bg-neon-purple/20 transition-colors" />
                        <Globe className="w-10 h-10 text-neon-purple mb-6 relative z-10 flex-shrink-0" />
                        <h4 className="text-xl font-bold text-white uppercase mb-2 relative z-10 break-words hyphens-auto">Export</h4>
                        <p className="text-sm text-gray-400 mb-6 min-h-[40px] relative z-10 break-words">PMI Manifatturiere e Servizi.</p>
                        
                        <div className="space-y-4 relative z-10 pt-4 border-t border-white/10">
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Massimale</span>
                                <span className="text-2xl font-bold text-white">100k €</span>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Focus</span>
                                <span className="text-sm text-gray-300 break-words">Fiere & Digital Export</span>
                            </div>
                        </div>
                    </div>

                    {/* CATA */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-6 rounded-3xl border border-white/10 hover:border-neon-pink/50 transition-all group relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/10 blur-[50px] rounded-full -mr-10 -mt-10 group-hover:bg-neon-pink/20 transition-colors" />
                        <Hammer className="w-10 h-10 text-neon-pink mb-6 relative z-10 flex-shrink-0" />
                        <h4 className="text-xl font-bold text-white uppercase mb-2 relative z-10 break-words hyphens-auto">Artigianato</h4>
                        <p className="text-sm text-gray-400 mb-6 min-h-[40px] relative z-10 break-words">Digitalizzazione Imprese Artigiane.</p>
                        
                        <div className="space-y-4 relative z-10 pt-4 border-t border-white/10">
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Contributo</span>
                                <span className="text-2xl font-bold text-white">30-45%</span>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Focus</span>
                                <span className="text-sm text-gray-300 break-words">Software & Gestionali</span>
                            </div>
                        </div>
                    </div>

                    {/* CATT */}
                    <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-6 rounded-3xl border border-white/10 hover:border-green-400/50 transition-all group relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors" />
                        <ShoppingBag className="w-10 h-10 text-green-400 mb-6 relative z-10 flex-shrink-0" />
                        <h4 className="text-xl font-bold text-white uppercase mb-2 relative z-10 break-words hyphens-auto">Terziario</h4>
                        <p className="text-sm text-gray-400 mb-6 min-h-[40px] relative z-10 break-words">Commercio, Turismo e Servizi.</p>
                        
                        <div className="space-y-4 relative z-10 pt-4 border-t border-white/10">
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Contributo</span>
                                <span className="text-2xl font-bold text-white">45%</span>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 uppercase mb-1">Focus</span>
                                <span className="text-sm text-gray-300 break-words">E-commerce & Social</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section - Simplified */}
            <div className="text-center">
                <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                    <Link 
                        to="/contatti" 
                        className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                        <span>Prenota Check-up Gratuito</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
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
