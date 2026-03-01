import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent py-16 text-center relative overflow-hidden">
      {/* Subtle top separator - just a gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background glow matching the theme */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-neon-blue/20 blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6 relative z-10">
        
        {/* Company Info */}
        <div className="text-gray-400 text-sm tracking-wide">
          <p className="font-bold text-white mb-2">GAIA CIRCLE LAB</p>
          <p>è di proprietà di GAIA di Elisa Chittaro <span className="text-neon-blue mx-2">|</span> P.IVA 03135250300</p>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs uppercase tracking-widest">
          <p>&copy; 2026 • GAIA CIRCLE LAB</p>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-3xl text-gray-600 text-[10px] leading-relaxed border-t border-white/5 pt-6 mt-2">
          <p>
            Tutto il materiale multimediale presente all'interno di questo sito web è coperto da copyright. 
            È fatto esplicito divieto l'utilizzo, a qualsiasi titolo, anche parziale dei suoi contenuti. 
            Ivi compreso per l'addestramento dei sistemi di intelligenza artificiale generativa e per il data e web scraping.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
