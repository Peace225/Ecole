const Partners = () => {
  // Liste fictive des partenaires (à remplacer par vos vrais logos dans src/assets/)
  const partners = [
    { name: "Ministère de l'Éducation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logo_MENA.png/800px-Logo_MENA.png" },
    { name: "UNESCO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UNESCO_logo.svg/1200px-UNESCO_logo.svg.png" },
    { name: "Microsoft Education", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png" },
    { name: "CIE", logo: "https://www.cie.ci/images/logo-cie.png" },
    { name: "BNI", logo: "https://www.bni.ci/images/logo.png" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Titre discret et élégant */}
        <div className="text-center mb-12">
          <p className="text-[#0047AB] font-black tracking-[0.2em] uppercase text-[10px] mb-4">
            — Ils soutiennent notre excellence —
          </p>
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">
            Nos Partenaires Institutionnels
          </h2>
        </div>

        {/* Grille des Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 w-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;