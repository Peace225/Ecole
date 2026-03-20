import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

// --- COMPTEUR QUI S'ANIME À CHAQUE PASSAGE ---
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  
  // "once: false" permet de relancer l'animation à chaque fois qu'on scrolle
  // "amount: 0.5" signifie que l'animation commence quand 50% du chiffre est visible
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  
  // Configuration du ressort (stiffness: raideur, damping: rebond)
  const spring = useSpring(0, { stiffness: 50, damping: 30 });
  const displayValue = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue); // Compte jusqu'au chiffre cible
    } else {
      spring.set(0); // Revient à 0 quand on s'éloigne
    }
  }, [isInView, numericValue, spring]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      <span>{value.includes('%') ? '%' : value.includes('+') ? '+' : ''}</span>
    </span>
  );
};

const Stats = () => {
  const stats = [
    { v: "98%", t: "Taux de Réussite" },
    { v: "1500+", t: "Élèves Épanouis" },
    { v: "50+", t: "Enseignants Experts" },
    { v: "20+", t: "Activités & Clubs" }
  ];

  return (
    <section className="relative z-40 -mt-16 md:-mt-20 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }} // S'anime aussi à chaque scroll
        transition={{ duration: 0.6 }}
        className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,71,171,0.15)] border border-gray-50 p-10 md:p-14 overflow-hidden relative"
      >
        {/* Ligne décorative animée */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-2 bg-[#FFCC00]"
        ></motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center group">
              
              {/* Cercle de fond discret qui pulse au survol */}
              <div className="absolute -z-10 w-20 h-20 bg-[#F0F5FF] rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>

              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-6xl font-black text-[#0047AB] tracking-tighter mb-2">
                  <AnimatedNumber value={stat.v} />
                </h3>
                <div className="h-1 w-8 bg-[#FFCC00] mb-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
                <span className="text-gray-500 font-black uppercase text-[10px] tracking-[0.25em]">
                  {stat.t}
                </span>
              </div>

              {/* Séparateur (Desktop) */}
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-[-1.5rem] top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;