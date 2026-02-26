import React from 'react';
import { motion } from 'framer-motion';
import { Music, Video, Users, Calendar, Radio } from 'lucide-react';

const Studio16: React.FC = () => {
  const services = [
    {
      title: 'Sala DJ',
      description: 'Spazio attrezzato per prove e registrazioni. Ideale per DJ set professionali.',
      price: '25€/h',
      details: ['80€ / 4 ore', '180€ / 10 ore'],
      icon: <Music className="w-6 h-6" />,
      color: 'border-neon-blue/20 hover:shadow-neon-blue',
      glow: 'from-neon-blue/20'
    },
    {
      title: 'Sala Live & Streaming',
      description: 'Perfetta per dirette, streaming e creazione di contenuti video di alta qualità.',
      price: '40€/h',
      details: ['120€ / 3 ore'],
      icon: <Radio className="w-6 h-6" />,
      color: 'border-neon-purple/20 hover:shadow-neon-purple',
      glow: 'from-neon-purple/20'
    },
    {
      title: 'Live Session Completa',
      description: 'Pacchetto completo per la registrazione e produzione della tua performance.',
      price: 'da 150€',
      details: ['Video + Audio', 'Post-produzione'],
      icon: <Video className="w-6 h-6" />,
      color: 'border-neon-pink/20 hover:shadow-neon-pink',
      glow: 'from-neon-pink/20'
    }
  ];

  const phases = [
    {
      phase: 'Fase 1',
      title: 'Attivazione',
      items: ['Creazione identità visiva', 'Preparazione studio']
    },
    {
      phase: 'Fase 2',
      title: 'Avvio',
      items: ['Promozione locale/online', 'Attivazione prenotazioni']
    },
    {
      phase: 'Fase 3',
      title: 'Sviluppo',
      items: ['Live session periodiche', 'Espansione collaborazioni']
    }
  ];

  return (
    <section id="studio16" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black opacity-40 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wider uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink drop-shadow-lg">
            Studio 16
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-8">
            Il tuo spazio creativo a Moruzzo (UD).
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Situato in Via Centa 16 a Moruzzo (UD), Studio 16 nasce con l'obiettivo di offrire un ambiente moderno, attrezzato e accessibile ad artisti, DJ, creator e professionisti.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {[
            "Spazio professionale per DJ e artisti",
            "Registrazione live session e contenuti",
            "Punto di riferimento creativo locale",
            "Crescita artistica e professionale"
          ].map((goal, i) => (
            <div key={i} className="p-5 md:p-6 rounded-xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-colors text-center">
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue font-bold">
                {i + 1}
              </div>
              <p className="text-gray-300 font-light">{goal}</p>
            </div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-6 md:p-8 rounded-2xl bg-zinc-900/50 border ${service.color} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} to-transparent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold uppercase">{service.title}</h3>
              </div>
              
              <div className="text-3xl font-bold mb-2 text-white">{service.price}</div>
              <ul className="space-y-2 mb-6 text-gray-400 text-sm">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    {detail}
                  </li>
                ))}
              </ul>
              
              <p className="text-gray-400 text-sm border-t border-white/5 pt-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Targets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold uppercase mb-8 flex items-center gap-3">
              <Users className="text-neon-blue" />
              Per Chi è Studio 16?
            </h3>
            <ul className="space-y-4">
              {['DJ emergenti e professionisti', 'Musicisti e Producer', 'Creator digitali', 'Aziende e professionisti'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-colors">
                  <span className="text-neon-blue">0{i + 1}</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Program Phases */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold uppercase mb-8 flex items-center gap-3">
              <Calendar className="text-neon-purple" />
              Programma Operativo
            </h3>
            <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:h-full before:w-0.5 before:bg-white/10">
              {phases.map((phase, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border border-neon-purple/50 flex items-center justify-center text-xs font-bold text-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.3)]">
                    {i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{phase.phase} - {phase.title}</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {phase.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
            <span className="font-bold text-white">STUDIO 16</span> rappresenta un'opportunità concreta per valorizzare uno spazio già esistente, 
            trasformandolo in un <span className="text-neon-blue">centro creativo moderno</span> e produttivo, 
            capace di generare valore artistico ed economico.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Studio16;
