import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjetEducatif = () => {
  const pillars = [
    {
      title: "Bilinguisme Intégré",
      subtitle: "Préparer des citoyens du monde",
      desc: "Dès le préscolaire, nos élèves sont immergés dans un environnement franco-anglais. L'objectif n'est pas seulement d'apprendre une langue, mais de penser, de rêver et de résoudre des problèmes dans une perspective internationale.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000",
      icon: "🌍"
    },
    {
      title: "Culture Numérique",
      subtitle: "Le code est le nouveau langage",
      desc: "Laboratoires informatiques, initiation au codage et utilisation responsable de l'Intelligence Artificielle. Nos élèves ne sont pas de simples consommateurs de technologie, ils apprennent à la créer et à la maîtriser.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
      icon: "💻"
    },
    {
      title: "Suivi Personnalisé",
      subtitle: "Aucun talent laissé pour compte",
      desc: "Chaque enfant évolue à son rythme. Grâce à nos effectifs réduits, nos enseignants identifient rapidement les forces et les axes d'amélioration de chaque élève pour un accompagnement sur-mesure (soutien, tutorat).",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000",
      icon: "🎯"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-gray-50 py-24 text-center border-b border-gray-200">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-6">
          <span className="text-[#0047AB] font-black tracking-widest uppercase text-xs mb-4 block">Notre Pédagogie</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#0047AB] uppercase tracking-tighter mb-6">
            Le Projet <span className="text-[#FFCC00]">Éducatif</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">
            Une approche innovante qui place l'enfant au centre de son apprentissage pour en faire un adulte accompli.
          </p>
        </motion.div>
      </section>

      {/* --- BLOCS ALTERNÉS --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl space-y-32">
          {pillars.map((pillar, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              
              {/* Image Block */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className={`absolute inset-0 bg-[#FFCC00] rounded-[3rem] ${index % 2 !== 0 ? '-rotate-3 group-hover:-rotate-6' : 'rotate-3 group-hover:rotate-6'} transition-transform duration-500 -z-10`}></div>
                <img src={pillar.img} alt={pillar.title} className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover border-4 border-white" />
                <div className={`absolute ${index % 2 !== 0 ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} w-20 h-20 bg-[#0047AB] text-white rounded-2xl flex items-center justify-center text-4xl shadow-xl border-4 border-white`}>
                  {pillar.icon}
                </div>
              </motion.div>

              {/* Text Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h4 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs mb-2">{pillar.subtitle}</h4>
                <h2 className="text-3xl md:text-5xl font-black text-[#0047AB] uppercase mb-6 leading-tight tracking-tight">
                  {pillar.title}
                </h2>
                <div className="h-1.5 w-16 bg-[#0047AB] mb-6 rounded-full"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="py-20 bg-[#0047AB] text-center px-6">
        <h2 className="text-3xl font-black text-white uppercase mb-8">Convaincu par notre méthode ?</h2>
        <Link to="/admission" className="inline-block bg-[#FFCC00] text-[#0047AB] px-10 py-4 rounded-xl font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-2xl uppercase tracking-widest">
          Inscrire mon enfant
        </Link>
      </section>

    </div>
  );
};

export default ProjetEducatif;