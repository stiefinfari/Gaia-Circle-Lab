import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    { 
      title: 'Lysa Chain Live set @ Passo Giau', 
      category: 'DJ Set & Live Performance', 
      year: '2024',
      description: 'Un\'esperienza unica al Passo Giau. DJ set di Lysa Chain con la violinista Deborah Lizzi, tra musica elettronica, suoni classici e panorami mozzafiato delle Dolomiti.',
      image: 'https://img.youtube.com/vi/9-2Z40145iU/maxresdefault.jpg',
      link: 'https://youtu.be/9-2Z40145iU?si=4k8MPpU5QPDPElWC',
      color: 'hover:shadow-neon-pink border-neon-pink/20',
      glow: 'from-neon-pink/20 to-transparent',
      isWebsite: false
    },
    { 
      title: 'Lysa Chain Website', 
      category: 'Web Design & Branding', 
      year: '2024',
      description: 'Sito ufficiale per la DJ e producer internazionale. Un portale immersivo che riflette la sua identità sonora tra techno e melodia.',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.lysachain.com?w=1200&h=3000',
      link: 'https://www.lysachain.com',
      color: 'hover:shadow-neon-purple border-neon-purple/20',
      glow: 'from-neon-purple/20 to-transparent',
      isWebsite: true
    },
    { 
      title: 'Limonando', 
      category: 'E-commerce & Eventi', 
      year: '2023',
      description: 'Piattaforma digitale per il format di eventi "Limonando". Design fresco, UX intuitiva e gestione integrata di biglietteria e merchandising.',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.limonando.com?w=1200&h=3000',
      link: 'https://www.limonando.com',
      color: 'hover:shadow-neon-blue border-neon-blue/20',
      glow: 'from-neon-blue/20 to-transparent',
      isWebsite: true
    },
    { 
      title: 'Walter Chittaro', 
      category: 'Portfolio & Personal Branding', 
      year: '2024',
      description: 'Sito personale per Walter Chittaro. Design minimalista e professionale per presentare il percorso artistico e professionale.',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.walterchittaro.it?w=1200&h=3000',
      link: 'https://www.walterchittaro.it',
      color: 'hover:shadow-neon-blue border-neon-blue/20',
      glow: 'from-neon-blue/20 to-transparent',
      isWebsite: true
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
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Alcuni dei nostri lavori</h2>
            <p className="text-gray-400 max-w-lg font-light">
              Idee, persone e brand che hanno intrecciato la loro visione alla nostra.
            </p>
          </div>
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
              {/* Background Image with Scrolling Effect */}
              <div className="absolute inset-0 overflow-hidden">
                {project.isWebsite ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[5000ms] ease-in-out opacity-60 group-hover:opacity-100"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6 md:p-8`}>
                <h3 className="text-xl md:text-3xl font-display font-bold uppercase translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{project.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 uppercase tracking-widest translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-200">{project.category}</p>
              </div>
              
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
