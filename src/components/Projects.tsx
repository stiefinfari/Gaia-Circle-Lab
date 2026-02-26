import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    { 
      title: 'God Rest Ye Merry Gentlemen', 
      category: 'Videoclip Musicale', 
      year: '2024',
      description: 'Una rilettura oscura di un classico natalizio. Regia e produzione video per Lysa Chain, unendo narrazione leggendaria e atmosfere gotiche.',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2000&auto=format&fit=crop',
      link: 'https://youtu.be/pS_J7SskoII',
      color: 'hover:shadow-neon-pink border-neon-pink/20',
      glow: 'from-neon-pink/20 to-transparent'
    },
    { 
      title: 'Lysa Chain Website', 
      category: 'Web Design & Branding', 
      year: '2024',
      description: 'Sito ufficiale per la DJ e producer internazionale. Un portale immersivo che riflette la sua identità sonora tra techno e melodia.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
      link: 'https://www.lysachain.com',
      color: 'hover:shadow-neon-purple border-neon-purple/20',
      glow: 'from-neon-purple/20 to-transparent'
    },
    { 
      title: 'Limonando', 
      category: 'E-commerce & Eventi', 
      year: '2023',
      description: 'Piattaforma digitale per il format di eventi "Limonando". Design fresco, UX intuitiva e gestione integrata di biglietteria e merchandising.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
      link: 'https://www.limonando.com',
      color: 'hover:shadow-neon-blue border-neon-blue/20',
      glow: 'from-neon-blue/20 to-transparent'
    },
    { 
      title: 'Live Set @ Passo Giau', 
      category: 'Produzione Video Immersiva', 
      year: '2023',
      description: 'Riprese mozzafiato sulle Dolomiti. Un set ibrido tra elettronica e violino dal vivo, dove la natura diventa scenografia spettacolare.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
      link: 'https://www.youtube.com/watch?v=9-2Z40145iU',
      color: 'hover:shadow-neon-blue border-neon-blue/20',
      glow: 'from-neon-blue/20 to-transparent'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Progetti Recenti</h2>
            <p className="text-gray-400 max-w-lg font-light">
              Idee, persone e brand che hanno intrecciato la loro visione alla nostra.
            </p>
          </div>
          <a href="https://www.gaiacirclelab.com/" target="_blank" rel="noopener noreferrer" className="group text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-neon-blue hover:border-white/80 transition-all flex items-center gap-2">
            Vedi tutti i lavori
            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target={project.link !== '#' ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative aspect-video bg-zinc-900 overflow-hidden rounded-xl cursor-pointer border border-white/5 hover:border-white/20 hover:shadow-neon transition-all duration-500 ${project.color}`}
            >
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8`}>
                <h3 className="text-3xl font-display font-bold uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{project.title}</h3>
                <p className="text-sm text-gray-300 uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{project.category} — {project.year}</p>
              </div>
              
              {/* Initial State Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-4xl font-display font-bold uppercase text-white/10 group-hover:opacity-0 transition-opacity duration-300 tracking-tighter">
                  {project.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
