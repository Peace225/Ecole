import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- IMPORTS DES ASSETS ---
import aboutHero from '../assets/hero.jpg'; 
import directorImg from '../assets/news1.jpeg';
import hero1 from '../assets/hero1.jpg';
import hero3 from '../assets/hero3.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
      
      {/* --- SECTION 1: HERO (L'HÉRITAGE) --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0047AB]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0047AB]/90 to-transparent z-10"></div>
          <img src={aboutHero} alt="Le Jourdain 1989" className="w-full h-full object-cover" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span variants={itemVariants} className="text-[#FFCC00] font-black tracking-[0.5em] uppercase text-sm mb-4 block">
              Depuis 1989 à Bouaké
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Plus qu'une école, <br />
              <span className="text-[#FFCC00]">Une Institution.</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="h-2 w-32 bg-[#FFCC00] rounded-full"></motion.div>
          </motion.div>
        </div>
      </section>

     {/* --- SECTION 2: LA GÉNÈSE (L'HISTOIRE DÉVELOPPÉE) --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }} // <-- CORRECTION ICI : Se déclenche plus facilement
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="text-[#0047AB] font-black tracking-widest text-xs uppercase mb-4 block">
              Notre Genèse
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-[#0047AB] uppercase leading-tight mb-8">
              L'aventure a commencé <br /> 
              <span className="text-gray-300 text-3xl md:text-4xl italic">il y a plus de trois décennies</span>
            </motion.h2>
            
            {/* CORRECTION ICI : On groupe le texte dans une seule balise animée pour être 100% sûr qu'il s'affiche */}
            <motion.div variants={itemVariants} className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                En <strong>1989</strong>, au cœur d'une Côte d'Ivoire en pleine mutation, une vision audacieuse a pris racine à Bouaké. Le <strong>Groupe Scolaire Le Jourdain</strong> est né de la volonté de bâtir un sanctuaire du savoir où la rigueur morale s'allie à l'excellence académique.
              </p>
              <p>
                Le nom "Le Jourdain" n'a pas été choisi au hasard. Il symbolise le passage, la transition vers une terre promise de réussite et l'excellence qui purifie l'esprit. Dès ses premières années, l'école s'est distinguée par ses résultats exceptionnels, attirant les familles les plus exigeantes de la région.
              </p>
              <p className="bg-[#F0F5FF] p-6 rounded-2xl border-l-8 border-[#0047AB] font-medium italic text-[#0047AB] shadow-sm">
                "Nous avons commencé avec quelques classes et une poignée d'élèves. Aujourd'hui, nous formons les cadres qui dirigent les entreprises et les institutions de demain."
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} // Animation plus douce
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 bg-[#FFCC00] w-40 h-40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src={directorImg} 
              alt="Histoire du Jourdain" 
              className="rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] w-full h-[600px] object-cover border-8 border-white relative z-10" 
            />
            <div className="absolute bottom-10 -left-10 md:left-auto md:-right-10 bg-[#0047AB] text-white p-8 md:p-10 rounded-3xl shadow-2xl z-20">
              <p className="text-4xl md:text-5xl font-black text-[#FFCC00]">1989</p>
              <p className="uppercase font-bold tracking-widest text-[10px] md:text-xs mt-2">Année de Fondation</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- SECTION 3: NOS VALEURS (GRID PREMIUM) --- */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-[#0047AB] uppercase"
            >
              Nos Piliers de <span className="text-[#FFCC00]">Confiance</span>
            </motion.h2>
            <div className="h-2 w-24 bg-[#FFCC00] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { t: "Excellence", d: "Un standard de réussite maintenu depuis 1989.", i: "🏆" },
              { t: "Discipline", d: "La rigueur comme clé de la liberté intellectuelle.", i: "⚖️" },
              { t: "Innovation", d: "Des outils modernes pour des esprits visionnaires.", i: "🚀" },
              { t: "Intégrité", d: "L'éthique au centre de chaque réussite.", i: "🤝" }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-xl border-t-8 border-[#0047AB] hover:border-[#FFCC00] transition-all duration-500"
              >
                <div className="text-6xl mb-8">{v.i}</div>
                <h3 className="text-2xl font-black text-[#0047AB] uppercase mb-4">{v.t}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: IMMERSION MODERNE --- */}
      <section className="py-32 bg-[#0047AB] text-white overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            {/* C'EST ICI QUE SE TROUVAIT L'ERREUR : CORRIGÉ AVEC </motion.h2> */}
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black uppercase mb-10 leading-tight">
              Une éducation <br /> <span className="text-[#FFCC00]">sans frontières</span>
            </motion.h2>
            
            <div className="space-y-8">
              {[
                { t: "Héritage & Modernité", d: "L'expérience de 30 ans alliée au numérique." },
                { t: "Bouaké au Cœur", d: "Un ancrage local pour une ambition mondiale." }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#FFCC00] group-hover:bg-[#FFCC00] group-hover:text-[#0047AB] transition-all duration-500">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.848l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.848l-7-3zM14 11.595l-3.394 1.454a1 1 0 01-.788 0L6.406 11.595 10 13.137l3.606-1.542z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase">{item.t}</h4>
                    <p className="text-blue-200">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 relative">
             <motion.div 
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border-4 border-white/20"
             >
                <img src={hero1} className="w-full h-full object-cover" alt="Étudiant" />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: -100 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] mt-16 border-4 border-white/20"
             >
                <img src={hero3} className="w-full h-full object-cover" alt="Laboratoire" />
             </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;