import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Sparkles, MapPin } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web & E-commerce Design',
      description: 'Sviluppo di architetture digitali sartoriali, dal recupero di siti offline alla creazione di e-commerce complessi (es. vendita a peso o abbonamenti). Creiamo esperienze di acquisto fluide e intuitive, progettate per convertire e fidelizzare, mantenendo l\'identità unica del brand.',
      icon: <Monitor className="w-8 h-8 text-white group-hover:text-neon-blue group-hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all duration-300" />,
      color: 'hover:shadow-neon-blue border-neon-blue/20',
      glow: 'from-neon-blue/20 to-transparent'
    },
    {
      title: 'Gaia x IA (Amplificazione Creativa)',
      description: 'Utilizziamo l\'Intelligenza Artificiale non per sostituire l\'uomo, ma per ispirare. Offriamo sound design spaziale, video con ambienti generati fusi a riprese reali e graphic design con pattern innovativi. L\'IA calcola, ma noi diamo l\'intuizione e l\'emozione.',
      icon: <Cpu className="w-8 h-8 text-white group-hover:text-neon-purple group-hover:drop-shadow-[0_0_10px_rgba(188,19,254,0.8)] transition-all duration-300" />,
      color: 'hover:shadow-neon-purple border-neon-purple/20',
      glow: 'from-neon-purple/20 to-transparent'
    },
    {
      title: 'Progettazione Eventi Immersivi',
      description: 'Non seguiamo format prestabiliti. Curiamo la direzione artistica, il concept visivo e la regia audio-video per creare eventi che uniscano luce, immagine e atmosfera, puntando a lasciare un ricordo e un legame reale con il pubblico.',
      icon: <Sparkles className="w-8 h-8 text-white group-hover:text-neon-pink group-hover:drop-shadow-[0_0_10px_rgba(255,0,85,0.8)] transition-all duration-300" />,
      color: 'hover:shadow-[0_0_20px_rgba(255,0,85,0.3)] border-neon-pink/20',
      glow: 'from-neon-pink/20 to-transparent'
    },
    {
      title: 'Rebranding Territoriale',
      description: 'Supporto strategico per l\'allineamento ai marchi di qualità regionali (es. "Io Sono Friuli Venezia Giulia"). Valorizziamo l\'eccellenza del Made in Italy attraverso un\'identità visiva che comunica autenticità, sostenibilità e innovazione.',
      icon: <MapPin className="w-8 h-8 text-white group-hover:text-neon-blue group-hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all duration-300" />,
      color: 'hover:shadow-neon-blue border-neon-blue/20',
      glow: 'from-neon-blue/20 to-transparent'
    },
  ];

  return (
    <section id="services" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-neon-blue/5 via-neon-purple/5 to-neon-pink/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      {/* Geometric Accents */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-96 h-96 border border-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold tracking-wider uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">L'Offerta Gaia Circle Lab</h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto mb-6 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Colmiamo l'abisso tra creazione tecnica ed emozione autentica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass p-10 rounded-2xl group hover:bg-white/5 transition-all duration-500 flex flex-col relative overflow-hidden h-full ${service.color}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="bg-white/5 p-4 rounded-xl group-hover:bg-white/10 transition-colors border border-white/5 group-hover:border-white/20">
                  {service.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs font-display tracking-widest uppercase text-gray-500">
                  Scopri di più
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-wider group-hover:text-white transition-all relative z-10">{service.title}</h3>
              
              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors relative z-10 mb-6">
                {service.description}
              </p>

              <div className="mt-auto relative z-10 pt-6 border-t border-white/5">
                <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">Benefici Chiave:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                   {index === 0 && (
                     <>
                       <li>• Esperienza utente fluida e intuitiva</li>
                       <li>• Ottimizzazione per conversioni e vendite</li>
                       <li>• Design sartoriale che rispecchia il brand</li>
                     </>
                   )}
                   {index === 1 && (
                     <>
                       <li>• Contenuti visivi unici e innovativi</li>
                       <li>• Esperienze sonore coinvolgenti</li>
                       <li>• Fusione tra reale e digitale</li>
                     </>
                   )}
                   {index === 2 && (
                     <>
                       <li>• Eventi memorabili ed emozionali</li>
                       <li>• Regia tecnica e artistica integrata</li>
                       <li>• Coinvolgimento attivo del pubblico</li>
                     </>
                   )}
                   {index === 3 && (
                     <>
                       <li>• Valorizzazione dell'identità locale</li>
                       <li>• Allineamento a standard di qualità</li>
                       <li>• Comunicazione efficace dei valori</li>
                     </>
                   )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
