import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Film, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GraphicDesignPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-7xl font-display font-bold tracking-wider uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              Graphic & Motion
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Dall'identità visiva statica al movimento dinamico. 
              Creiamo linguaggi visivi che definiscono il brand e catturano l'attenzione.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
             {/* Graphic Design */}
             <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                   <PenTool className="text-neon-blue" /> Graphic Design
                </h2>
                <p className="text-gray-400 leading-relaxed">
                   Progettazione di loghi, brand identity complete, materiale editoriale e packaging.
                   Ogni elemento è studiato per comunicare i valori del brand con chiarezza ed estetica.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square bg-zinc-900 rounded-xl border border-white/5 hover:border-neon-blue/50 transition-colors duration-500 overflow-hidden group">
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black p-4 flex items-end">
                         <span className="text-sm font-bold opacity-50 group-hover:opacity-100 transition-opacity">Brand Identity</span>
                      </div>
                   </div>
                   <div className="aspect-square bg-zinc-900 rounded-xl border border-white/5 hover:border-neon-blue/50 transition-colors duration-500 overflow-hidden group">
                       <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black p-4 flex items-end">
                         <span className="text-sm font-bold opacity-50 group-hover:opacity-100 transition-opacity">Editorial</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Motion Graphics */}
             <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                   <Film className="text-neon-pink" /> Motion Graphics
                </h2>
                <p className="text-gray-400 leading-relaxed">
                   Animazioni 2D e 3D, titolazioni, explainer video e contenuti social dinamici.
                   Il movimento aggiunge una nuova dimensione alla comunicazione visiva.
                </p>
                <div className="aspect-video bg-zinc-900 rounded-xl border border-white/5 hover:border-neon-pink/50 transition-colors duration-500 overflow-hidden relative group">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                       </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                       <span className="text-sm font-bold">Showreel 2025</span>
                    </div>
                </div>
             </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="/contatti" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-neon-purple hover:text-white transition-all duration-300">
              Inizia un progetto <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GraphicDesignPage;