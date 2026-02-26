import React from 'react';
import { Mail, Instagram, Facebook, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
       
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-wider uppercase mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Pronto a creare l'impossibile?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          Ogni grande progetto inizia con un dialogo. Raccontaci la tua visione.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:info@gaiacirclelab.com" 
            className="group w-full md:w-auto justify-center inline-flex items-center gap-3 bg-white text-black px-6 md:px-10 py-5 rounded-full font-display font-bold uppercase tracking-wide hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail size={20} />
            Invia Email
          </a>
          
          <a 
            href="https://wa.me/393409490109" 
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-auto justify-center inline-flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 md:px-10 py-5 rounded-full font-display font-bold uppercase tracking-wide hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <Phone size={20} />
            WhatsApp
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center">
             <p className="text-gray-500 mb-2">Moruzzo, Via Centa 16, 33030 UD</p>
             <p className="text-gray-500">+39 340 949 0109</p>
        </div>

        <div className="mt-12 flex justify-center space-x-12">
          <a href="https://www.instagram.com/gaiacirclelab/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-pink hover:drop-shadow-[0_0_8px_rgba(255,0,85,0.8)] transition-all duration-300 transform hover:scale-110">
            <Instagram size={28} />
          </a>
          <a href="https://www.facebook.com/gaiacirclelab" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-blue hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] transition-all duration-300 transform hover:scale-110">
            <Facebook size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
