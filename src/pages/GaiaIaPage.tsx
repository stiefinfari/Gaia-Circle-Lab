import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, BrainCircuit, Zap, Music, Video, Palette, PartyPopper, Bot, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GaiaIaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-neon-purple/30 selection:text-white cursor-none overflow-x-hidden">
      <Header />
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-neon-purple/50 bg-neon-purple/10 backdrop-blur-md">
               <Sparkles size={14} className="text-neon-purple" />
               <span className="text-neon-purple text-xs font-bold uppercase tracking-widest">Amplifica la Creatività Ora</span>
             </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight uppercase mb-8 text-white leading-tight">
              Gaia <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">x</span> IA
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              L'intelligenza artificiale è una nuova forma di linguaggio. 
              <span className="text-white font-medium"> Non la consideriamo un sostituto della creatività, ma uno strumento capace di amplificarla.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300 group">
                <Bot className="w-8 h-8 text-neon-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">Ispirazione</h3>
                <p className="text-sm text-gray-400">L'IA non prende decisioni: le ispira. Esploriamo territori impossibili per gli strumenti tradizionali.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300 group">
                <BrainCircuit className="w-8 h-8 text-neon-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">Simbiosi</h3>
                <p className="text-sm text-gray-400">Non ci interessa il risultato automatico, ma il dialogo continuo tra intuito umano e calcolo artificiale.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-pink/30 transition-all duration-300 group">
                <Cpu className="w-8 h-8 text-neon-pink mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold mb-2">Etica</h3>
                <p className="text-sm text-gray-400">Uso consapevole e progettuale. Ogni output nasce da un concept manuale e viene raffinato dall'uomo.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Efficiency Section (Minimal) */}
        <section className="container mx-auto px-6 mb-24">
           <div className="border-y border-white/10 py-12">
             <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center shrink-0 border border-neon-green/20 mt-2">
                   <Zap className="w-8 h-8 text-neon-green" />
                </div>
                <div className="space-y-6">
                   <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                         Dalle settimane ai giorni.
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                         Non si tratta solo di velocità, ma di <span className="text-white font-medium">libertà progettuale</span>. 
                         L'integrazione dell'IA nel nostro workflow abbatte i tempi tecnici di coding e rendering, eliminando i colli di bottiglia della produzione tradizionale.
                      </p>
                   </div>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                         <h4 className="text-neon-green font-bold uppercase tracking-wider text-xs mb-2">Sviluppo</h4>
                         <p className="text-gray-400 text-sm">
                            Automazione di task ripetitivi e generazione istantanea di prototipi funzionanti. 
                            Ciò che prima richiedeva giorni di scrittura codice, ora è immediato.
                         </p>
                      </div>
                      <div>
                         <h4 className="text-neon-green font-bold uppercase tracking-wider text-xs mb-2">Produzione</h4>
                         <p className="text-gray-400 text-sm">
                            Creazione rapida di asset visivi e sonori complessi. 
                            Possiamo esplorare centinaia di variazioni stilistiche in poche ore per trovare quella perfetta.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* Applications Grid (Tech Minimal Redesign) */}
        <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ambiti di Applicazione</h2>
               <p className="text-gray-400 max-w-xl">
                 L'intelligenza artificiale non è un genere, ma uno strumento trasversale.
                 Ecco dove la applichiamo.
               </p>
            </div>
            <div className="hidden md:block h-px flex-grow bg-white/10 ml-8 relative top-[-10px]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
               {
                 icon: <Globe className="w-5 h-5 text-cyan-400" />,
                 title: "Web & E-commerce",
                 desc: "Codice ottimizzato, performance estreme. L'IA genera strutture solide e interazioni fluide in una frazione del tempo."
               },
              {
                icon: <Music className="w-5 h-5 text-neon-pink" />,
                title: "Musica & Sound",
                desc: "Sound design generativo, mastering assistito e creazione di texture sonore impossibili con strumenti analogici."
              },
              {
                icon: <Video className="w-5 h-5 text-neon-blue" />,
                title: "Video Production",
                desc: "Set extension, morphing e visual effects reattivi. Ambienti virtuali che si fondono con il girato reale."
              },
              {
                icon: <Palette className="w-5 h-5 text-neon-purple" />,
                title: "Visual Design",
                desc: "Composizioni grafiche complesse, pattern frattali e restyling visivi esplorati in centinaia di varianti."
              },
              {
                icon: <PartyPopper className="w-5 h-5 text-yellow-400" />,
                title: "Live Events",
                desc: "Installazioni interattive che reagiscono in tempo reale ai dati ambientali e al pubblico."
              },
              {
                 icon: <Bot className="w-5 h-5 text-green-400" />,
                 title: "Custom AI Models",
                 desc: "Addestramento di piccoli modelli su dataset specifici del cliente per mantenere coerenza di brand."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-start"
              >
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-neon-purple transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy/Conclusion */}
        <section className="container mx-auto px-6">
          <div className="glass p-8 md:p-20 rounded-3xl border border-white/10 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />
             
             <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 relative z-10">
               Tecnologia Poetica
             </h3>
             <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-0 relative z-10 leading-relaxed font-light">
                "Per noi l’IA non è un trucco, ma una forma di amplificazione della mente. 
                Ci aiuta a superare i limiti del possibile, a visualizzare emozioni prima di costruirle, a immaginare futuri che non esistono ancora.
                <br /><br />
                Eppure, nessun risultato è mai definitivo finché non passa attraverso lo sguardo umano — quello che decide, interpreta e dà significato.
                Crediamo in una tecnologia che non cancella l’errore ma lo trasforma in linguaggio. 
                <br /><br />
                È in questo equilibrio che si riconosce Gaia Circle Lab: nel punto esatto in cui la precisione diventa istinto e il codice si fa emozione."
             </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default GaiaIaPage;