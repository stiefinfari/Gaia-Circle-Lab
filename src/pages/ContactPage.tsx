import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-7xl font-display font-bold tracking-wider uppercase mb-6 text-white">
              Contatti
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Hai un progetto in mente? Parliamone.
              <br />Siamo pronti a trasformare la tua visione in realtà.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24 max-w-5xl mx-auto">
             {/* Contact Info */}
             <div className="space-y-8">
                <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-blue/30 transition-all group">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/5 p-3 rounded-xl group-hover:bg-neon-blue/20 transition-colors">
                         <Mail className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide">Email</h3>
                   </div>
                   <a href="mailto:info@gaiacirclelab.com" className="text-lg text-gray-300 hover:text-white transition-colors block">
                      info@gaiacirclelab.com
                   </a>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-purple/30 transition-all group">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/5 p-3 rounded-xl group-hover:bg-neon-purple/20 transition-colors">
                         <Phone className="w-6 h-6 text-white group-hover:text-neon-purple transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide">Telefono</h3>
                   </div>
                   <a href="tel:+393409490109" className="text-lg text-gray-300 hover:text-white transition-colors block mb-2">
                      +39 340 949 0109
                   </a>
                   <a href="https://wa.me/393409490109" target="_blank" rel="noopener noreferrer" className="text-sm text-neon-purple hover:text-white transition-colors inline-flex items-center gap-1">
                      Scrivici su WhatsApp <ArrowRight size={14} />
                   </a>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/10 hover:border-neon-pink/30 transition-all group">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/5 p-3 rounded-xl group-hover:bg-neon-pink/20 transition-colors">
                         <MapPin className="w-6 h-6 text-white group-hover:text-neon-pink transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide">Sede</h3>
                   </div>
                   <p className="text-lg text-gray-300 mb-2">
                      Via Centa 16, 33030 Moruzzo (UD)
                   </p>
                   <p className="text-sm text-gray-500">
                      Riceviamo su appuntamento
                   </p>
                </div>
             </div>

             {/* Social & Map */}
             <div className="space-y-8 flex flex-col">
                <div className="glass p-8 rounded-3xl border border-white/10 flex-grow flex flex-col justify-center text-center">
                   <h3 className="text-2xl font-bold uppercase tracking-wide mb-8">Seguici</h3>
                   <div className="flex justify-center gap-8">
                      <a href="https://www.instagram.com/gaiacirclelab/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                         <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-600 transition-all duration-300">
                            <Instagram className="w-8 h-8 text-white" />
                         </div>
                         <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Instagram</span>
                      </a>
                      <a href="https://www.facebook.com/gaiacirclelab" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                         <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1877F2] transition-all duration-300">
                            <Facebook className="w-8 h-8 text-white" />
                         </div>
                         <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Facebook</span>
                      </a>
                   </div>
                </div>
                
                <div className="glass p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-neon-blue/10 to-transparent text-center">
                   <MessageSquare className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                   <h3 className="text-xl font-bold mb-2">Preventivo Rapido?</h3>
                   <p className="text-gray-400 text-sm mb-6">Raccontaci brevemente di cosa hai bisogno.</p>
                   <a href="mailto:info@gaiacirclelab.com?subject=Richiesta Preventivo" className="inline-block w-full bg-white text-black py-3 rounded-full font-bold uppercase tracking-wide hover:bg-neon-blue hover:text-white transition-all">
                      Invia Richiesta
                   </a>
                </div>
             </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;