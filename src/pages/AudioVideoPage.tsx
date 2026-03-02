import React from 'react';
import { motion } from 'framer-motion';
import { Video, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AudioVideoPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-7xl font-display font-bold tracking-wider uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
              Produzione Audio/Video
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Dalla composizione musicale su misura alla produzione video cinematografica. 
              Raccontiamo la tua storia attraverso suoni e immagini che lasciano il segno.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Audio Section */}
            <div className="glass p-8 rounded-3xl border border-neon-pink/20 hover:shadow-[0_0_30px_rgba(255,0,85,0.2)] transition-all duration-500">
              <div className="mb-6 bg-neon-pink/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Music className="w-8 h-8 text-neon-pink" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Sound Design & Composizione</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Produzione musicale originale su commissione per ogni tipo di esigenza:
                colonne sonore, jingle pubblicitari, sound branding e arrangiamenti.
                Il suono non è solo un accompagnamento, è l'anima del tuo progetto.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-pink rounded-full"/> Produzione Beat & Strumentali</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-pink rounded-full"/> Mix & Mastering Professionale</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-pink rounded-full"/> Sound FX & Foley</li>
              </ul>
            </div>

            {/* Video Section */}
            <div className="glass p-8 rounded-3xl border border-neon-blue/20 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all duration-500">
              <div className="mb-6 bg-neon-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Video className="w-8 h-8 text-neon-blue" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Video Production</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Servizio di video making in loco per aziende ed eventi.
                Catturiamo l'essenza del momento con attrezzatura cinematografica e
                una visione registica unica. Include post-produzione completa.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-blue rounded-full"/> Corporate & Brand Storytelling</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-blue rounded-full"/> Eventi & Aftermovie</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neon-blue rounded-full"/> Color Grading & Editing Avanzato</li>
              </ul>
            </div>
          </div>
          
          {/* Gallery Placeholder */}
          <div className="mb-24">
             <div className="text-center mb-10">
                <h3 className="text-2xl font-display font-bold mb-2 uppercase">Mix di Musica e Video Produzione</h3>
                <p className="text-gray-400 font-light text-sm tracking-widest uppercase">
                   Musiche prodotte da <a href="https://www.lysachain.com" target="_blank" rel="noopener noreferrer" className="text-neon-pink font-bold hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(255,0,85,0.5)]">Lysa Chain</a>
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/10 hover:border-neon-pink/50 transition-all shadow-lg hover:shadow-neon-pink/20">
                   <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/pS_J7SskoII" 
                      title="God Rest Ye Merry Gentlemen - Lysa Chain"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                   ></iframe>
                </div>
                <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/10 hover:border-neon-purple/50 transition-all shadow-lg hover:shadow-neon-purple/20">
                   <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/LIaSmJEsUNw" 
                      title="Halloween DJ Set with AI Visuals"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                   ></iframe>
                </div>
                <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/10 hover:border-neon-blue/50 transition-all shadow-lg hover:shadow-neon-blue/20">
                   <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/4-tkst7B00w" 
                      title="Skating & Live Music: Lysa Chain & Lucrezia Gennaro"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                   ></iframe>
                </div>
             </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contatti" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-neon-purple hover:text-white transition-all duration-300">
              Richiedi Preventivo <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AudioVideoPage;