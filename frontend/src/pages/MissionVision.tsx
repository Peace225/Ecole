import { motion } from 'framer-motion';

const MissionVision = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-gray-50">
      
      {/* --- HERO TITLE --- */}
      <section className="bg-[#0047AB] py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Mission <span className="text-[#FFCC00]">&</span> Vision
        </h1>
        <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto mt-6 rounded-full"></div>
      </section>

      {/* --- CARDS CONTENT --- */}
      <section className="py-24 -mt-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            
            {/* LA MISSION */}
            <motion.div variants={item} className="bg-white p-12 rounded-[3rem] shadow-2xl border-t-8 border-[#0047AB] relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0F5FF] rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-[#0047AB] text-[#FFCC00] rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-4xl font-black text-[#0047AB] uppercase mb-6 tracking-tight">Notre Mission</h2>
              <h3 className="text-xl font-bold text-gray-800 mb-6 leading-snug">
                "Offrir une éducation intégrale de classe mondiale à Bouaké."
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Notre mission quotidienne est de fournir un environnement d'apprentissage stimulant, sécuritaire et inclusif. Nous nous engageons à cultiver l'excellence académique tout en développant le caractère, la créativité et le sens des responsabilités de chaque élève, de la maternelle jusqu'au baccalauréat.
              </p>
            </motion.div>

            {/* LA VISION */}
            <motion.div variants={item} className="bg-white p-12 rounded-[3rem] shadow-2xl border-t-8 border-[#FFCC00] relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-[#FFCC00] text-[#0047AB] rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h2 className="text-4xl font-black text-[#0047AB] uppercase mb-6 tracking-tight">Notre Vision</h2>
              <h3 className="text-xl font-bold text-gray-800 mb-6 leading-snug">
                "Devenir l'institution de référence en Afrique de l'Ouest."
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Nous aspirons à être reconnus au-delà de nos frontières comme le creuset des futurs leaders africains. Une institution pionnière dans l'intégration du numérique, du bilinguisme et du développement durable, où chaque élève diplômé est prêt à briller dans les meilleures universités du monde.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default MissionVision;