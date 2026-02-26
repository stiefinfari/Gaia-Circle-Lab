import React from 'react';

const Partners: React.FC = () => {
  // Placeholder for partners. 
  // In a real scenario, we would use the actual file names provided by the user 
  // or ask them to place them in the public folder.
  const partners = [
    { name: 'Dj Maxwell', logo: '/assets/partners/Dj Maxwell 2.png' },
    { name: 'LUAU', logo: '/assets/partners/LUAU+ESSO.webp' },
    { name: 'Limonando', logo: '/assets/partners/Limonando W.png' },
    { name: 'TMH', logo: '/assets/partners/TMH_LOGO_WHITE.png' },
    { name: 'Cine Disco', logo: '/assets/partners/cine+disco+logo.webp' },
    { name: 'Sound & Light', logo: '/assets/partners/soun&light-bianco.png' },
    { name: 'Phari', logo: '/assets/partners/LOGO PHARI NEW.png' },
    { name: 'Lysa Chain', logo: '/assets/partners/lysachain_white1080.png' },
    { name: 'WC + Riscaldamento', logo: '/assets/partners/wc+riscaldamento.webp' },
  ];

  return (
    <section className="py-20 bg-black overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-xl md:text-2xl font-display uppercase tracking-widest text-gray-500">
          Partner & Collaborazioni
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 items-center">
          {/* Double the list for seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
            >
              {/* If image fails to load, show text as fallback */}
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = partner.name;
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap gap-12 md:gap-24 items-center flex" aria-hidden="true">
           {[...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={`clone-${index}`} 
              className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                 onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = partner.name;
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient fade on sides */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
};

export default Partners;
