import { useState } from 'react';
import { motion } from 'framer-motion';

const ReglementInterieur = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const rules = [
    {
      title: "1. Horaires et Ponctualité",
      content: "Les cours débutent à 7h30 précises. L'accès à l'établissement est fermé à 7h45. Tout retard doit être justifié par les parents au bureau de la vie scolaire avant que l'élève ne puisse intégrer la classe."
    },
    {
      title: "2. Tenue Vestimentaire (Uniforme)",
      content: "L'uniforme du Groupe Scolaire Le Jourdain est strictement obligatoire. Il doit être propre et repassé. Les coiffures fantaisistes, le maquillage et les bijoux ostentatoires sont formellement interdits."
    },
    {
      title: "3. Discipline et Comportement",
      content: "Le respect mutuel est la règle d'or. Toute forme de violence (physique ou verbale), de tricherie ou d'insolence envers le personnel entraînera des sanctions immédiates pouvant aller jusqu'à l'exclusion définitive."
    },
    {
      title: "4. Utilisation du Téléphone Portable",
      content: "Les téléphones portables et autres appareils électroniques personnels sont strictement interdits dans l'enceinte de l'école. En cas d'infraction, l'appareil sera confisqué jusqu'à la fin de l'année scolaire."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      
      <section className="bg-[#0047AB] py-24 text-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-black text-white uppercase mb-6">
            Règlement <span className="text-[#FFCC00]">Intérieur</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-24 -mt-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12">
            
            <p className="text-gray-600 mb-10 text-center font-medium italic">
              "L'excellence ne s'atteint que dans un cadre de vie ordonné et respectueux. Ce règlement a pour but de garantir la sécurité et la réussite de tous."
            </p>

            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className={`w-full text-left px-6 py-5 font-black uppercase tracking-wider flex justify-between items-center transition-colors ${openIndex === index ? 'bg-[#0047AB] text-[#FFCC00]' : 'bg-white text-[#0047AB] hover:bg-gray-50'}`}
                  >
                    {rule.title}
                    <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  
                  {/* Contenu de l'accordéon */}
                  {openIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: "auto" }} 
                      className="px-6 py-5 bg-white text-gray-600 font-medium leading-relaxed"
                    >
                      {rule.content}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center pt-8 border-t border-gray-100">
              <button className="bg-gray-100 text-[#0047AB] px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-3 mx-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Télécharger le PDF Complet
              </button>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ReglementInterieur;