import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, ArrowRight, Zap, Database, Globe, Rocket, ShoppingBag, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebDesignPage: React.FC = () => {
  const portfolio = [
    {
      name: 'Limonando',
      url: 'https://www.limonando.com',
      logo: `${import.meta.env.BASE_URL}assets/partners/limonando.png`,
      desc: 'E-commerce & Eventi',
      color: 'border-neon-blue/20 hover:border-neon-blue/50'
    },
    {
      name: 'Lysa Chain',
      url: 'https://www.lysachain.com',
      logo: `${import.meta.env.BASE_URL}assets/partners/lysachain.png`,
      desc: 'Official Artist Website',
      color: 'border-neon-purple/20 hover:border-neon-purple/50'
    },
    {
      name: 'Walter Chittaro',
      url: 'https://www.walterchittaro.it',
      logo: `${import.meta.env.BASE_URL}assets/partners/wc-riscaldamento.webp`,
      desc: 'Portfolio Personale',
      color: 'border-white/20 hover:border-white/50'
    }
  ];

  const packages = [
    {
      title: "ESSENTIAL",
      target: "PMI, Liberi Professionisti, Agenzie",
      stack: "Sito Ultra-Veloce, Gestione Autonoma",
      description: "Sito web veloce, sicuro e ottimizzato. Design pulito e professionale, facile da aggiornare.",
      icon: <Monitor className="w-8 h-8 text-neon-blue" />,
      color: "glass-neon-blue",
      glow: "shadow-neon-blue/20"
    },
    {
      title: "VISIONARY",
      target: "Brand Tech, Design, Eventi B2B",
      stack: "Grafica 3D, Intelligenza Artificiale",
      description: "Esperienza digitale ad alto impatto. Animazioni 3D fluide e Intelligenza Artificiale integrata.",
      icon: <Zap className="w-8 h-8 text-neon-purple" />,
      color: "glass-neon-purple",
      glow: "shadow-neon-purple/20"
    },
    {
      title: "ENTERPRISE",
      target: "E-commerce B2B/B2C, Web-App Gestionali",
      stack: "Shopify Avanzato, Database Dedicato",
      description: "Piattaforma e-commerce completa e scalabile. Gestione avanzata di ordini e clienti.",
      icon: <Database className="w-8 h-8 text-neon-pink" />,
      color: "glass-neon-pink",
      glow: "shadow-neon-pink/20"
    }
  ];

  const bandiPackages = [
    {
      title: "STARTUP",
      bando: "Bando Start-up Giovanili",
      target: "Start-up Giovanili (Under 40)",
      desc: "Tutto per lanciare la tua idea: e-commerce moderno, chatbot intelligente e video di presentazione.",
      icon: <Rocket className="w-6 h-6 text-yellow-400" />,
      color: "border-yellow-400/20 hover:border-yellow-400/50"
    },
    {
      title: "GLOBAL",
      bando: "Bando Internazionalizzazione",
      target: "PMI Manifattura/Servizi",
      desc: "Strumenti per l'export: sito multilingua, catalogo interattivo e presentazioni virtuali.",
      icon: <Globe className="w-6 h-6 text-green-400" />,
      color: "border-green-400/20 hover:border-green-400/50"
    },
    {
      title: "MAKER",
      bando: "CATA Artigianato",
      target: "Falegnamerie, Laboratori",
      desc: "Digitalizza la produzione: app gestionale su misura e video tutorial per formare il team.",
      icon: <Factory className="w-6 h-6 text-orange-400" />,
      color: "border-orange-400/20 hover:border-orange-400/50"
    },
    {
      title: "RETAIL",
      bando: "CATT FVG - Linea 4",
      target: "Terziario, Commercio, Turismo",
      desc: "Vendi ovunque: e-commerce indipendente, shooting prodotti e contenuti video per i social.",
      icon: <ShoppingBag className="w-6 h-6 text-cyan-400" />,
      color: "border-cyan-400/20 hover:border-cyan-400/50"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white/30 selection:text-white cursor-none">
      <SEO 
        title="Web Design & Development" 
        description="Realizzazione siti web, e-commerce e web app. Soluzioni digitali veloci, sicure e ottimizzate per i motori di ricerca."
        keywords="Web Design, Sviluppo Siti Web, E-commerce, SEO, Udine, FVG, Siti Veloci, React, Shopify"
        canonical="/servizi/web-design"
      />
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-7xl font-display font-bold tracking-wider uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-blue">
              Web Design & Development
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Architetture digitali moderne, veloci e scalabili. 
              Dal sito vetrina all'e-commerce headless, costruiamo il web del futuro.
            </p>
          </motion.div>

          {/* Direct Packages */}
          <div className="mb-24">
             <div className="text-center mb-12">
               <h3 className="text-3xl font-display font-bold uppercase mb-2">Soluzioni Dirette</h3>
               <p className="text-gray-400 font-light">Go-to-market rapido, senza burocrazia.</p>
             </div>
             <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-3xl ${pkg.color} flex flex-col`}
                >
                  <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 uppercase tracking-wide">{pkg.title}</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{pkg.target}</p>
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed font-light">{pkg.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <p className="text-sm font-bold text-gray-500 uppercase mb-2 flex items-center gap-2">
                      <Code size={14} /> Tecnologia
                    </p>
                    <p className="text-sm text-neon-blue font-mono">{pkg.stack}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bandi Packages */}
          <div className="mb-24">
             <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent pointer-events-none" />
               
               <div className="text-center mb-12 relative z-10">
                 <h3 className="text-3xl font-display font-bold uppercase mb-4">Soluzioni Agevolate</h3>
                 <p className="text-gray-300 max-w-2xl mx-auto font-light mb-2">
                   Ecosistemi integrati (Tech + A/V + Burocrazia) progettati per i bandi FVG.
                 </p>
                 <p className="text-xs text-neon-blue uppercase tracking-widest font-bold">
                   Recupero dal 30% al 50% dell'investimento
                 </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                  {bandiPackages.map((pkg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`glass-card p-6 rounded-2xl border ${pkg.color} hover:bg-white/5 transition-all`}
                    >
                       <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold uppercase tracking-wide">{pkg.title}</h4>
                          {pkg.icon}
                       </div>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{pkg.bando}</p>
                       <p className="text-xs text-gray-400 mb-4">{pkg.target}</p>
                       <p className="text-sm text-gray-300 leading-relaxed font-light border-t border-white/5 pt-4">
                         {pkg.desc}
                       </p>
                    </motion.div>
                  ))}
               </div>
             </div>
          </div>

          {/* Portfolio Section */}
          <div className="mb-24">
            <h3 className="text-2xl font-display font-bold mb-8 text-center uppercase tracking-widest text-gray-400">Siti Web Realizzati</h3>
            
            <div className="flex justify-center items-center gap-12 md:gap-24 flex-wrap">
              {portfolio.map((site, index) => (
                <a 
                  key={index} 
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer"
                  title={site.name}
                >
                  <img 
                    src={site.logo} 
                    alt={site.name} 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
             <Link to="/contatti" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-lg hover:shadow-neon-blue/50">
               Parla con noi <ArrowRight size={20} />
             </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDesignPage;