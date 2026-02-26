import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Filosofia', href: '/#philosophy' },
    { name: 'Servizi', href: '/#services' },
    { name: 'Strategia', href: '/#strategy' },
    { name: 'Progetti', href: '/#projects' },
    { name: 'Studio 16', href: '/studio16' },
    { name: 'Contatti', href: '/#contact' },
  ];



  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 print:hidden ${
        scrolled 
          ? 'top-4 w-[90%] max-w-5xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full py-2 px-6' 
          : 'top-6 w-[95%] max-w-6xl bg-transparent border border-transparent py-4 px-6'
      }`}
    >
      <div className={`flex justify-between items-center transition-all duration-500 ${!scrolled && 'bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-8 py-3'}`}>
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo-solo.png" 
            alt="Gaia Circle Lab Logo" 
            className="h-8 w-auto group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" 
          />
          <span className="hidden md:block font-display text-lg tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
            GCL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
             link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
              >
                {link.name}
              </a>
             ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
              >
                {link.name}
              </Link>
             )
          ))}
          <div className="w-px h-6 bg-white/10 mx-2" />
          <a 
            href="/#contact"
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all transform hover:scale-105 active:scale-95"
            title="Richiedi un preventivo"
          >
            <MessageSquare size={14} />
            Preventivo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="/#contact"
            className="text-white focus:outline-none"
            title="Richiedi un preventivo"
          >
            <MessageSquare size={20} />
          </a>
          <button 
            className="text-white focus:outline-none bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 mx-auto w-full bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
