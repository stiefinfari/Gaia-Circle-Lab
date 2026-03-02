import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white flex flex-col">
      <SEO title="Pagina Non Trovata - 404" description="La pagina che stai cercando non esiste." />
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">
        <div className="text-center z-10">
          <h1 className="text-8xl md:text-9xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse-slow">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 text-white">
            Pagina Non Trovata
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg mx-auto">
            Sembra che tu sia finito in una dimensione sconosciuta. 
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-3 rounded-full border border-white/20 hover:border-neon-purple/50 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-white font-medium tracking-wide group"
          >
            <span>Torna alla Home</span>
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        {/* Background Ambient Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
             <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
             <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/5 rounded-full blur-[150px]" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
