import React from 'react';

const Partners: React.FC = () => {
  // Placeholder for partners. 
  // In a real scenario, we would use the actual file names provided by the user 
  // or ask them to place them in the public folder.
  const partners = [
    { name: 'Dj Maxwell', logo: `${import.meta.env.BASE_URL}assets/partners/dj-maxwell.png` },
    { name: 'LUAU', logo: `${import.meta.env.BASE_URL}assets/partners/luau-esso.webp` },
    { name: 'Limonando', logo: `${import.meta.env.BASE_URL}assets/partners/limonando.png` },
    { name: 'TMH', logo: `${import.meta.env.BASE_URL}assets/partners/tmh.png` },
    { name: 'Cine Disco', logo: `${import.meta.env.BASE_URL}assets/partners/cine-disco.webp` },
    { name: 'Sound & Light', logo: `${import.meta.env.BASE_URL}assets/partners/sound-light.png` },
    { name: 'Phari', logo: `${import.meta.env.BASE_URL}assets/partners/phari.png` },
    { name: 'Lysa Chain', logo: `${import.meta.env.BASE_URL}assets/partners/lysachain.png` },
    { name: 'WC + Riscaldamento', logo: `${import.meta.env.BASE_URL}assets/partners/wc-riscaldamento.webp` },
  ];

  return (
    <section className="py-16 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="text-xl md:text-2xl font-display uppercase tracking-widest text-gray-400">
          Partner & Collaborazioni
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-24 items-center min-w-full">
          {/* Double the list for seamless loop - enough for 4k screens */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
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
      </div>
      
    </section>
  );
};

export default Partners;
