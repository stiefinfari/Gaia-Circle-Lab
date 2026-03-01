import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setIsServicesOpen(false); // Close dropdown on click
    
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      // If we are on the home page, just scroll
      if (location.pathname === '/' || location.pathname === '') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we are on another page, navigate to home then scroll
        navigate('/', { state: { scrollTo: targetId } });
      }
    } else {
      // Normal navigation
      if (location.pathname === href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(href);
      }
    }
  };

  const servicesLinks = [
    { name: 'Produzione A/V', href: '/servizi/audio-video' },
    { name: 'Web Design', href: '/servizi/web-design' },
    { name: 'Graphic Design', href: '/servizi/graphic-design' },
    { name: 'Eventi', href: '/servizi/eventi' },
  ];

  return (
    <>
      <motion.header 
        className={`fixed left-1/2 z-50 flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "glass-heavy shadow-lg shadow-black/50" 
            : "bg-black/10 backdrop-blur-xl border border-white/10"
        }`}
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ 
          y: 0, 
          opacity: 1,
          x: "-50%",
          top: scrolled ? "1rem" : "1.5rem",
          width: scrolled ? "90%" : "95%", 
          maxWidth: "80rem",
          height: "4rem",
          borderRadius: "9999px",
          padding: "0 2rem",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Link to="/" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group relative">
          <div className="absolute inset-0 bg-neon-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo-solo.png`}
            alt="Gaia Circle Lab Logo" 
            className="h-9 w-auto relative z-10 transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="hidden lg:block font-sans text-lg tracking-[0.2em] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
            GCL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {['Home', 'Filosofia'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)} 
              className="relative px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 group cursor-pointer"
            >
              {item}
            </a>
          ))}
          
          {/* Services Dropdown */}
          <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="flex items-center gap-1 px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer"
            >
              Servizi <ChevronDown size={12} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-neon-blue' : ''}`} />
            </a>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl py-2"
                >
                  {servicesLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-6 py-3 text-xs font-sans font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-center"
                    >
                      {link.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/gaia-x-ia" onClick={(e) => handleNavClick(e, '/gaia-x-ia')} className="relative px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-neon-purple/20 hover:shadow-[0_0_15px_rgba(157,0,255,0.3)] transition-all duration-300 group cursor-pointer">
            Gaia x IA
          </a>
          <a href="#strategy" onClick={(e) => handleNavClick(e, '#strategy')} className="relative px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-neon-pink/20 hover:shadow-[0_0_15px_rgba(255,0,85,0.3)] transition-all duration-300 group cursor-pointer">
            Strategia
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="relative px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-neon-blue/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 group cursor-pointer">
            Progetti
          </a>
          <a href="/studio16" onClick={(e) => handleNavClick(e, '/studio16')} className="relative px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-neon-purple/20 hover:shadow-[0_0_15px_rgba(157,0,255,0.3)] transition-all duration-300 group cursor-pointer">
            Studio 16
          </a>
          
          <div className="w-px h-4 bg-white/10 mx-2" />
          <a 
            href="/contatti"
            onClick={(e) => handleNavClick(e, '/contatti')}
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-sans uppercase tracking-widest font-bold hover:bg-neon-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer duration-300"
            title="Richiedi un preventivo"
          >
            <MessageSquare size={14} />
            Preventivo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <a 
            href="/contatti"
            onClick={(e) => handleNavClick(e, '/contatti')}
            className="text-white hover:text-neon-blue transition-colors focus:outline-none"
            title="Richiedi un preventivo"
          >
            <MessageSquare size={20} />
          </a>
          <button 
            className="text-white focus:outline-none bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors border border-white/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 w-[90%] max-w-md glass-heavy rounded-2xl shadow-2xl overflow-hidden z-40 max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col p-4 space-y-2">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block px-6 py-4 text-2xl font-sans font-bold uppercase tracking-widest text-white hover:text-neon-blue transition-colors text-center">Home</a>
              <a href="#filosofia" onClick={(e) => handleNavClick(e, '#filosofia')} className="block px-6 py-4 text-2xl font-sans font-bold uppercase tracking-widest text-white hover:text-neon-blue transition-colors text-center">Filosofia</a>
              
              <div className="border-y border-white/5 py-2 my-2 bg-white/5 rounded-xl">
                <p className="px-4 py-2 text-xs font-sans font-bold uppercase tracking-widest text-gray-400 text-center mb-1">Servizi</p>
                {servicesLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-3 rounded-xl text-sm font-sans font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 transition-all text-center"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <a href="/gaia-x-ia" onClick={(e) => handleNavClick(e, '/gaia-x-ia')} className="block px-6 py-4 text-2xl font-sans font-bold uppercase tracking-widest text-white hover:text-neon-blue transition-colors text-center">Gaia x IA</a>
              <a href="#strategy" onClick={(e) => handleNavClick(e, '#strategy')} className="block px-6 py-4 text-2xl font-sans font-bold uppercase tracking-widest text-white hover:text-neon-blue transition-colors text-center">Strategia</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="block px-6 py-4 text-2xl font-sans font-bold uppercase tracking-widest text-white hover:text-neon-blue transition-colors text-center">Progetti</a>
              <a href="/studio16" onClick={(e) => handleNavClick(e, '/studio16')} className="block px-6 py-4 text-2xl font-sans font-bold uppercase tracking-widest text-white hover:text-neon-blue transition-colors text-center">Studio 16</a>
              <a href="/contatti" onClick={(e) => handleNavClick(e, '/contatti')} className="block px-6 py-4 text-2xl font-sans font-bold uppercase tracking-widest text-white hover:text-neon-blue transition-colors text-center">Contatti</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          @apply px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer;
        }
        .mobile-nav-link {
          @apply block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 transition-all text-center cursor-pointer;
        }
      `}</style>
    </>
  );
};

export default Header;