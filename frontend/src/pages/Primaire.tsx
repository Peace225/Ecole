import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Primaire = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-[#0047AB] py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#FFCC00] font-black tracking-widest uppercase text-xs mb-4 block">Du CP au CM2</motion.span>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-6xl font-black text-white uppercase mb-6">Le Cycle <span className="text-[#FFCC00]">Primaire</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-blue-100 max-w-2xl mx-auto text-lg">Bâtir des fondations solides en lecture, écriture, mathématiques et sciences.</motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border-t-8 border-[#FFCC00]">
            <h2 className="text-3xl font-black text-[#0047AB] uppercase mb-8">Maîtriser les fondamentaux</h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>Le cycle primaire est l'étape la plus cruciale de la scolarité. Au Groupe Scolaire Le Jourdain, nous appliquons une pédagogie rigoureuse qui garantit que 100% de nos élèves maîtrisent la lecture et le calcul dès le CE1.</p>
              <ul className="grid md:grid-cols-2 gap-4 mt-8">
                {["Anglais intensif dès le CP", "Informatique et codage", "Activités sportives obligatoires", "Soutien scolaire gratuit"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0047AB] text-[#FFCC00] flex items-center justify-center font-black">✓</span>
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Link to="/admission" className="bg-[#FFCC00] text-[#0047AB] px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 transition-all shadow-xl">Déposer un dossier</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Primaire;