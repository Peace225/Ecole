import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import directorImg from '../assets/news1.jpeg'; // Remplacez par la vraie photo du fondateur/directeur

const MotDuDirecteur = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} className="text-[#FFCC00] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
            Gouvernance
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Le Mot du <span className="text-[#FFCC00]">Fondateur</span>
          </motion.h1>
          <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ duration: 1 }} className="h-1.5 bg-[#FFCC00] mx-auto rounded-full"></motion.div>
        </div>
      </section>

      {/* --- CONTENU DU MESSAGE (STYLE MAGAZINE) --- */}
      <section className="py-24 relative -mt-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100 grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Colonne Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute inset-0 bg-[#FFCC00] rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img 
                src={directorImg} 
                alt="Directeur Fondateur" 
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#0047AB] text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="font-black text-xl">M. Kouamé</p>
                <p className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mt-1">Directeur Général</p>
              </div>
            </motion.div>

            {/* Colonne Texte */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div variants={fadeUp} className="text-6xl text-[#FFCC00] font-serif leading-none">“</motion.div>
              
              <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-black text-[#0047AB] leading-tight uppercase">
                Bienvenue dans l'établissement qui transformera le potentiel de votre enfant en véritable talent.
              </motion.h3>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <motion.p variants={fadeUp}>
                  Chers parents, chers élèves,<br /><br />
                  C'est avec une immense fierté que je vous ouvre les portes du <strong>Groupe Scolaire Le Jourdain</strong>. Depuis notre création à Bouaké, notre ambition n'a jamais faibli : offrir à la jeunesse ivoirienne un cadre d'apprentissage qui rivalise avec les meilleurs standards internationaux.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Nous vivons dans un monde en perpétuelle mutation, où les compétences d'hier ne suffiront pas pour les défis de demain. C'est pourquoi notre approche pédagogique ne se limite pas à l'excellence académique. Nous formons des leaders éthiques, des innovateurs audacieux et des citoyens conscients de leur rôle dans la société.
                </motion.p>
                <motion.p variants={fadeUp}>
                  En confiant votre enfant au Jourdain, vous faites le choix de la rigueur, de la discipline, mais surtout de l'accompagnement personnalisé. Notre corps professoral dévoué veille à ce que chaque élève trouve sa voie et excelle.
                </motion.p>
                <motion.p variants={fadeUp} className="text-[#0047AB] font-bold italic border-l-4 border-[#FFCC00] pl-4">
                  "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde. Au Jourdain, nous forgeons cette arme chaque jour."
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="pt-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-16 opacity-30 mb-2" />
                <p className="font-black text-[#0047AB] text-xl uppercase tracking-wider">Le Fondateur</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MotDuDirecteur;