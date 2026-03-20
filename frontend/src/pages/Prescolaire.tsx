import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Prescolaire = () => {
  const features = [
    { title: "Éveil Sensoriel", desc: "Des ateliers pratiques pour développer les cinq sens.", icon: "🎨" },
    { title: "Bilinguisme Précoce", desc: "Initiation à l'anglais par le jeu et le chant.", icon: "🇬🇧" },
    { title: "Sécurité Maximale", desc: "Un espace clos, sécurisé et adapté aux tout-petits.", icon: "🛡️" },
    { title: "Motricité", desc: "Des aires de jeux conçues pour le développement physique.", icon: "🏃‍♂️" }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* HERO SECTION */}
      <section className="bg-[#0047AB] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#FFCC00] font-black tracking-widest uppercase text-xs mb-4 block">Maternelle & Crèche</motion.span>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-6xl font-black text-white uppercase mb-6">Le Cycle <span className="text-[#FFCC00]">Préscolaire</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-blue-100 max-w-2xl mx-auto text-lg">Le premier pas vers l'excellence commence ici, dans un environnement bienveillant et stimulant.</motion.p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0047AB] uppercase">Éveiller le <span className="text-[#FFCC00]">Génie</span> de votre enfant</h2>
            <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-gray-50 p-8 rounded-[2rem] text-center hover:bg-[#0047AB] hover:text-white transition-all duration-300 group shadow-lg">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-black uppercase mb-3">{f.title}</h3>
                <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FFCC00] text-center">
        <h2 className="text-3xl font-black text-[#0047AB] uppercase mb-8">Prêt pour sa première rentrée ?</h2>
        <Link to="/admission" className="bg-[#0047AB] text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-blue-900 transition-all shadow-xl">Inscrire mon enfant</Link>
      </section>
    </div>
  );
};

export default Prescolaire;