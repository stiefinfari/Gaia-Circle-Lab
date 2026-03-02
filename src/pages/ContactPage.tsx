import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Navigation } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const mapLinks = [
    {
      name: 'Google Maps',
      url: 'https://www.google.com/maps/search/?api=1&query=Via+Centa+15+Moruzzo+UD',
      icon: <MapPin size={18} />,
      color: 'hover:bg-green-500 hover:border-green-500'
    },
    {
      name: 'Apple Maps',
      url: 'http://maps.apple.com/?q=Via+Centa+15,Moruzzo',
      icon: <Navigation size={18} />,
      color: 'hover:bg-gray-500 hover:border-gray-500'
    },
    {
      name: 'Waze',
      url: 'https://waze.com/ul?q=Via+Centa+15+Moruzzo',
      icon: <Navigation size={18} className="fill-current" />,
      color: 'hover:bg-blue-400 hover:border-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-blue/30 selection:text-white cursor-none">
      <Header />
      
      {/* Background Elements - Subtler */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />
      </div>

      <main className="pt-32 pb-20 relative z-10">
        <section className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
             {/* Left Column: Info & Maps */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="lg:col-span-5 space-y-12"
             >
                <div>
                   <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6 tracking-wider">
                      Contatti
                   </h1>
                   <p className="text-gray-400 text-lg font-light leading-relaxed">
                      Siamo sempre alla ricerca di nuove sfide. Raccontaci la tua idea o vieni a trovarci in studio.
                   </p>
                </div>

                <div className="space-y-8">
                   {/* Address Card */}
                   <div className="group">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                         <MapPin size={14} className="text-neon-pink" /> Sede Operativa
                      </h3>
                      <div className="pl-6 border-l border-white/10 group-hover:border-neon-pink/50 transition-colors duration-300">
                         <p className="text-xl text-white font-light">Via Centa 15</p>
                         <p className="text-xl text-white font-light mb-4">33030 Moruzzo (UD)</p>
                         
                         <div className="flex flex-wrap gap-3">
                            {mapLinks.map((link) => (
                               <a 
                                 key={link.name}
                                 href={link.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium transition-all duration-300 hover:text-white ${link.color}`}
                               >
                                  {link.icon} {link.name}
                               </a>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Email Card */}
                   <div className="group">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                         <Mail size={14} className="text-neon-blue" /> Email
                      </h3>
                      <div className="pl-6 border-l border-white/10 group-hover:border-neon-blue/50 transition-colors duration-300">
                         <a href="mailto:info@gaiacirclelab.com" className="text-xl text-white font-light hover:text-neon-blue transition-colors">
                            info@gaiacirclelab.com
                         </a>
                      </div>
                   </div>

                   {/* Phone Card */}
                   <div className="group">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                         <Phone size={14} className="text-neon-purple" /> Telefono
                      </h3>
                      <div className="pl-6 border-l border-white/10 group-hover:border-neon-purple/50 transition-colors duration-300">
                         <a href="tel:+393409490109" className="text-xl text-white font-light hover:text-neon-purple transition-colors block mb-2">
                            +39 340 949 0109
                         </a>
                         <a href="https://wa.me/393409490109" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                            WhatsApp Disponibile <ArrowRight size={12} />
                         </a>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Right Column: Form */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="lg:col-span-7"
             >
                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12">
                   {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center h-[400px] text-center">
                         <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                            <CheckCircle size={32} />
                         </div>
                         <h3 className="text-2xl font-bold uppercase mb-4">Messaggio Inviato</h3>
                         <p className="text-gray-400 mb-8 max-w-sm">
                            Grazie per averci scritto. Il nostro team ti risponderà entro 24 ore.
                         </p>
                         <button 
                            onClick={() => setIsSubmitted(false)}
                            className="text-sm text-white border-b border-white/30 hover:border-white transition-all pb-1 uppercase tracking-widest"
                         >
                            Nuovo Messaggio
                         </button>
                      </div>
                   ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                         <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                               <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome</label>
                               <input 
                                 type="text" 
                                 id="name" 
                                 name="name" 
                                 required
                                 value={formState.name}
                                 onChange={handleChange}
                                 className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder:text-gray-700"
                                 placeholder="Il tuo nome"
                               />
                            </div>
                            <div className="space-y-2">
                               <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                               <input 
                                 type="email" 
                                 id="email" 
                                 name="email" 
                                 required
                                 value={formState.email}
                                 onChange={handleChange}
                                 className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder:text-gray-700"
                                 placeholder="tua@email.com"
                               />
                            </div>
                         </div>

                         <div className="space-y-2">
                            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-gray-500">Oggetto</label>
                            <select 
                               id="subject" 
                               name="subject" 
                               required
                               value={formState.subject}
                               onChange={handleChange}
                               className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer"
                            >
                               <option value="" disabled className="bg-black">Seleziona un motivo</option>
                               <option value="preventivo" className="bg-black">Richiesta Preventivo</option>
                               <option value="collaborazione" className="bg-black">Collaborazione</option>
                               <option value="info" className="bg-black">Informazioni Generali</option>
                               <option value="privacy" className="bg-black">Privacy / GDPR</option>
                            </select>
                         </div>

                         <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Messaggio</label>
                            <textarea 
                               id="message" 
                               name="message" 
                               required
                               value={formState.message}
                               onChange={handleChange}
                               rows={4}
                               className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder:text-gray-700 resize-none"
                               placeholder="Scrivi qui il tuo messaggio..."
                            ></textarea>
                         </div>

                         <div className="pt-4">
                            <button 
                               type="submit" 
                               disabled={isSubmitting}
                               className="bg-white text-black font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-neon-blue hover:text-white transition-all duration-300 flex items-center gap-3 disabled:opacity-50"
                            >
                               {isSubmitting ? 'Invio...' : 'Invia Messaggio'} <ArrowRight size={18} />
                            </button>
                         </div>
                      </form>
                   )}
                </div>
             </motion.div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
