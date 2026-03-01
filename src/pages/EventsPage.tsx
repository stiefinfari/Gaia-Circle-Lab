import React from 'react';
import { motion } from 'framer-motion';
import { Speaker, Zap, PartyPopper, Disc, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white/30 selection:text-white cursor-none">
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold tracking-wider uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-white to-neon-purple">
              Eventi & Experience
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Creiamo esperienze immersive che uniscono tecnologia, suono e visual.
              Dalla direzione artistica alla realizzazione tecnica completa.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-neon-pink/50 transition-all">
               <Speaker className="w-10 h-10 text-neon-pink mb-4" />
               <h3 className="text-xl font-bold mb-2">Service Audio Pro</h3>
               <p className="text-sm text-gray-400">Impianti audio ad alta fedeltà e potenza per ogni tipo di venue, indoor e outdoor.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all">
               <Zap className="w-10 h-10 text-neon-blue mb-4" />
               <h3 className="text-xl font-bold mb-2">Lighting Design</h3>
               <p className="text-sm text-gray-400">Impianti di illuminazione intelligenti, teste mobili, laser show e architetturale.</p>
            </div>
             <div className="glass p-6 rounded-2xl border border-white/10 hover:border-neon-purple/50 transition-all">
               <Disc className="w-10 h-10 text-neon-purple mb-4" />
               <h3 className="text-xl font-bold mb-2">LED Wall & Visual</h3>
               <p className="text-sm text-gray-400">Schermi LED ad alta definizione e regia video live per contenuti visivi impattanti.</p>
            </div>
             <div className="glass p-6 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all">
               <PartyPopper className="w-10 h-10 text-yellow-400 mb-4" />
               <h3 className="text-xl font-bold mb-2">FX & Pyrotecnics</h3>
               <p className="text-sm text-gray-400">Effetti speciali atmosferici, CO2, fiamme e pyrotecnica indoor/outdoor sicura.</p>
            </div>
          </div>

          {/* Event Description Section - Clean & Minimal */}
          <div className="mb-24">
             <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                <div className="flex-1">
                   <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6 leading-tight">
                      Eventi <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Live</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">Aziendali</span>
                   </h2>
                   <div className="h-1 w-24 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue mb-8 rounded-full" />
                   <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light max-w-2xl">
                      Trasformiamo ogni occasione in un'esperienza memorabile. Dai grandi festival musicali alle convention aziendali esclusive, curiamo ogni dettaglio tecnico e artistico.
                   </p>
                   <p className="text-gray-400 leading-relaxed font-light mb-8 max-w-2xl">
                      La nostra expertise spazia dalla progettazione di stage design innovativi alla gestione di flussi complessi, garantendo un impatto visivo e sonoro senza compromessi.
                   </p>
                   <a href="/contatti" className="inline-flex items-center gap-2 text-neon-pink font-bold uppercase tracking-widest hover:text-white transition-colors group border border-neon-pink/30 px-6 py-3 rounded-full hover:bg-neon-pink hover:border-neon-pink">
                      Organizza il tuo evento <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                   </a>
                </div>
             </div>

             {/* Minimalist Grid Gallery */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/480509466_1070456714882423_4197761933177541546_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/517523506_1171959758065451_5595984191108445288_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/480139772_1068581185069976_2085063776050691870_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/557639140_1243179194276840_3170250884911756544_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/481121365_1073229627938465_1380842504657561076_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/481214384_1073777521217009_2482162418667892354_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/510213924_1158054516122642_9049527818117417479_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden group">
                   <img src={`${import.meta.env.BASE_URL}assets/events/534428902_1201084128486347_1565425045900569010_n.jpg`} alt="Event" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
             </div>
          </div>

          {/* Formats Section - Redesigned */}
          <div className="mb-24">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4 tracking-wider">I Nostri Format</h2>
               <p className="text-gray-400 font-light max-w-2xl mx-auto">Brand di intrattenimento proprietari, pronti per essere portati nel tuo locale o evento.</p>
            </div>
            
            <div className="flex flex-col gap-12">
               {/* Limonando - Full Width Hero Card */}
               <a href="https://www.limonando.com" target="_blank" rel="noopener noreferrer" className="group relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-400/50 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-700 block">
                  <div className="absolute inset-0 z-0">
                     <img src={`${import.meta.env.BASE_URL}assets/limonando-bg.jpg`} alt="Limonando Background" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
                  
                  <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 z-20 max-w-2xl">
                     <div className="transform translate-x-0 group-hover:translate-x-4 transition-transform duration-700">
                        <img src={`${import.meta.env.BASE_URL}assets/partners/limonando.png`} alt="Limonando Logo" className="h-24 md:h-32 w-auto object-contain mb-8 drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]" />
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wide leading-none">
                           The Fresh <span className="text-yellow-400">Summer</span> Vibe
                        </h3>
                        <p className="text-lg text-gray-200 font-light mb-8 max-w-lg opacity-90 leading-relaxed">
                           Il format più fresco dell'estate. Musica, colori e vibrazioni positive che trasformano ogni serata in un festival di energia pura.
                        </p>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 hover:text-black transition-all">
                           Scopri il Tour <ArrowRight size={16} />
                        </div>
                     </div>
                  </div>
               </a>

               {/* Split Grid for LUAU and TMH */}
               <div className="grid md:grid-cols-2 gap-8">
                  {/* LUAU */}
                  <div className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 hover:border-neon-pink/50 shadow-xl hover:shadow-neon-pink/20 transition-all duration-500">
                     <div className="absolute inset-0 z-0">
                        <img src={`${import.meta.env.BASE_URL}assets/luau-bg.jpg`} alt="LUAU Background" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                     
                     <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <img src={`${import.meta.env.BASE_URL}assets/partners/luau-esso.webp`} alt="LUAU Logo" className="h-20 w-auto object-contain mb-6" />
                           <p className="text-gray-200 font-light opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed">
                              Exotic vibes e atmosfere tropicali per notti indimenticabili. Un viaggio sensoriale tra ritmi tribali e scenografie esotiche.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Tech My House */}
                  <div className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 hover:border-neon-blue/50 shadow-xl hover:shadow-neon-blue/20 transition-all duration-500">
                     <div className="absolute inset-0 z-0">
                        <img src={`${import.meta.env.BASE_URL}assets/techmyhouse-bg.jpg`} alt="Tech My House Background" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                     
                     <div className="absolute inset-0 flex flex-col justify-end p-10 z-20">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <img src={`${import.meta.env.BASE_URL}assets/partners/tmh.png`} alt="Tech My House Logo" className="h-20 w-auto object-contain mb-6" />
                           <p className="text-gray-200 font-light opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed">
                              Il meglio della musica Tech House in un format energico. Bassi potenti, laser show e un'atmosfera underground.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Partners */}
          <div className="text-center mb-16">
             <p className="text-gray-500 uppercase tracking-widest text-sm mb-8">Main Technical Partner</p>
             <div className="flex justify-center">
                <img src={`${import.meta.env.BASE_URL}assets/partners/sound-light.png`} alt="Sound & Light" className="h-20 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
             </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/contatti" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-neon-pink hover:text-white transition-all duration-300">
              Organizza il tuo evento <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;