import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    
    if (href.startsWith('#')) {
      // If we are on the home page, just scroll
      if (location.pathname === '/' || location.pathname === '') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we are on another page, navigate to home then scroll
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Normal navigation
      navigate(href);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Filosofia', href: '#philosophy' },
    { name: 'Servizi', href: '#services' },
    { name: 'Strategia', href: '#strategy' },
    { name: 'Progetti', href: '#projects' },
    { name: 'Studio 16', href: '/studio16' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <>
      <motion.header 
        className="fixed left-1/2 z-50 flex items-center justify-between"
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ 
          y: 0, 
          opacity: 1,
          x: "-50%",
          top: scrolled ? "1rem" : "2rem",
          width: scrolled ? "90%" : "95%",
          maxWidth: "80rem",
          height: scrolled ? "3.5rem" : "4.5rem",
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.7)" : "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          borderRadius: "9999px",
          padding: "0 1.5rem",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none"
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Link to="/" onClick={(e) => handleNavClick(e as any, '/')} className="flex items-center gap-3 group">
          <img 
            src={`${import.meta.env.BASE_URL}assets/logo-solo.png`}
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
             <a 
               key={link.name} 
               href={link.href}
               onClick={(e) => handleNavClick(e, link.href)}
               className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
             >
               {link.name}
             </a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            title="Richiedi un preventivo"
          >
            <MessageSquare size={14} />
            Preventivo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
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
      </motion.header>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 w-[90%] max-w-md bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 transition-all text-center cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
