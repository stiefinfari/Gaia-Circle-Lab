import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Mic, Monitor, Users, Camera, Briefcase, Wifi, Layout, Zap, Headphones, Clock, Calendar as CalendarIcon, Video } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Studio16Page: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const targets = [
    {
      title: 'Podcasting & Vodcasting',
      description: 'Registrazione audio multitraccia e video multicamera professionale.',
      icon: <Mic className="w-6 h-6 text-neon-pink" />
    },
    {
      title: 'Shooting Fotografici',
      description: 'Spazio attrezzato per servizi fotografici professionali, ritratti e still life.',
      icon: <Camera className="w-6 h-6 text-neon-blue" />
    },
    {
      title: 'Content Creation',
      description: 'Set ideale per registrare reel, tutorial, unboxing o videocorsi con illuminazione controllata.',
      icon: <Video className="w-6 h-6 text-neon-purple" />
    },
    {
      title: 'Studio & Coworking',
      description: 'Un ambiente tranquillo e professionale dove concentrarsi, studiare o lavorare ai propri progetti.',
      icon: <Monitor className="w-6 h-6 text-neon-pink" />
    },
    {
      title: 'Masterclass & Workshop',
      description: 'Spazio ideale per lezioni private, corsi di formazione o workshop (Max 4-5 persone).',
      icon: <Users className="w-6 h-6 text-neon-blue" />
    },
    {
      title: 'Riunioni High-End',
      description: 'Coworking temporaneo per call critiche dove la qualità A/V fa la differenza.',
      icon: <Briefcase className="w-6 h-6 text-neon-purple" />
    }
  ];

  const features = [
    {
      title: 'Connettività',
      description: 'Rete LAN cablata + Wi-Fi ospiti.',
      icon: <Wifi className="w-8 h-8 text-white" />
    },
    {
      title: 'Spazio',
      description: 'Due stanze attrezzate + servizi igienici.',
      icon: <Layout className="w-8 h-8 text-white" />
    },
    {
      title: 'A/V Ready',
      description: 'Hai bisogno di attrezzatura? Mettiamo a disposizione la nostra strumentazione professionale su richiesta.',
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: 'Tech Support',
      description: 'Tecnico A/V disponibile su richiesta per gestione OBS, vMix, recording multitraccia.',
      icon: <Headphones className="w-8 h-8 text-white" />
    }
  ];

  const pricing = [
    {
      title: 'Orario',
      duration: '1 Ora',
      priceDry: '€ 45',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Mezza Giornata',
      duration: '4 ore',
      priceDry: '€ 160',
      icon: <CalendarIcon className="w-6 h-6" />
    },
    {
      title: 'Giornata Intera',
      duration: '8 ore',
      priceDry: '€ 280',
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-white/30 selection:text-white">
      <SEO 
        title="Studio 16" 
        description="Il tuo hub creativo a Moruzzo. Spazio ibrido plug-and-play per Podcast, Shooting Fotografici, Content Creation e Coworking. Prenota ora."
        keywords="Studio 16, Moruzzo, Podcast Studio, Sala Posa, Coworking, Udine, Affitto Studio, Sala Registrazione"
        canonical="/studio16"
      />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="pt-24">
        <section className="py-12 md:py-24 bg-transparent text-white relative overflow-hidden">
          {/* Background Elements */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black opacity-40 z-0" /> */}
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-7xl font-display font-bold tracking-wider uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink drop-shadow-lg">
                Studio 16
              </h2>
              <p className="text-xl md:text-3xl text-white font-light max-w-4xl mx-auto mb-6 leading-relaxed">
                Il tuo hub creativo a Moruzzo. <span className="text-neon-blue font-medium">Plug & Play</span>, <span className="text-neon-purple font-medium">ready to use</span>, <span className="text-neon-pink font-medium">massima resa</span>.
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Spazio ibrido plug-and-play per A/V, creatività digitale e lavoro in remoto.
                <br />Via Centa 16, Moruzzo.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl hover:border-neon-blue/30 transition-all hover:bg-white/10 group"
                >
                  <div className="mb-4 p-3 bg-black/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm font-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Use Cases / Targets */}
            <div className="mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <h3 className="text-3xl font-display font-bold uppercase mb-4">Cosa puoi fare qui</h3>
                <div className="h-0.5 w-24 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {targets.map((target, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 p-6 rounded-2xl glass-card hover:border-neon-purple/30 transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-white/5">
                        {target.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white">{target.title}</h4>
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {target.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Showcase Section */}
            <div className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-3xl font-display font-bold uppercase mb-4">Showcase</h3>
                <p className="text-gray-400 font-light">Un esempio di produzione realizzata nel nostro studio.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(138,43,226,0.2)]"
              >
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kWyDbb4j4Jc" 
                  title="Studio 16 Session Example" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>

            {/* Pricing Section */}
            <div className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-3xl font-display font-bold uppercase mb-4">Listino Prezzi</h3>
                <p className="text-gray-400 font-light">Scegli la modalità più adatta alle tue esigenze.</p>
              </motion.div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                      <th className="py-4 px-6">Tipologia</th>
                      <th className="py-4 px-6">Durata</th>
                      <th className="py-4 px-6 text-neon-blue">Prezzo Consigliato</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {pricing.map((item, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-6 px-6 font-bold flex items-center gap-3">
                          <div className="text-neon-purple">{item.icon}</div>
                          {item.title}
                        </td>
                        <td className="py-6 px-6 text-gray-300 whitespace-nowrap">{item.duration}</td>
                        <td className="py-6 px-6 text-xl font-bold text-neon-blue whitespace-nowrap">{item.priceDry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add-ons Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-xl bg-gradient-to-br from-neon-blue/10 to-transparent border border-neon-blue/20">
                  <h4 className="text-lg font-bold text-white mb-2">Pacchetto "Resident"</h4>
                  <p className="text-2xl font-bold text-neon-blue mb-2">950 € <span className="text-sm font-normal text-gray-400">/ mese</span></p>
                  <p className="text-sm text-gray-300">10 ingressi/mese (o 80h). Desk dedicato + Storage.</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-neon-purple/10 to-transparent border border-neon-purple/20">
                  <h4 className="text-lg font-bold text-white mb-2">Post-Produzione</h4>
                  <p className="text-2xl font-bold text-neon-purple mb-2">da 50 € <span className="text-sm font-normal text-gray-400">/ progetto</span></p>
                  <p className="text-sm text-gray-300">Consegna del mixato audio/video editato. Prezzo da preventivare.</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-neon-pink/10 to-transparent border border-neon-pink/20">
                  <h4 className="text-lg font-bold text-white mb-2">Storage & Backup</h4>
                  <p className="text-2xl font-bold text-neon-pink mb-2">Incluso</p>
                  <p className="text-sm text-gray-300">Consegna file raw su Cloud a fine sessione. Backup garantito 7 giorni.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
              
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 relative z-10">
                Pronto per andare in onda?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 font-light relative z-10">
                Che tu debba registrare un podcast, scattare foto o fare una diretta streaming, Studio 16 è pronto per te.
                Ambiente professionale, attrezzato e versatile per ogni tua esigenza creativa.
              </p>
              <a 
                href="https://woolkye.com/tour/studio16-moruzzo" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] relative z-10"
              >
                Prenota ora
              </a>
            </motion.div>

          </div>
        </section>
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Studio16Page;
