import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- IMPORTS DES IMAGES (Utilisez vos vraies images) ---
import news1 from '../assets/news1.jpeg'; 
import hero1 from '../assets/hero1.jpg';
import hero3 from '../assets/hero3.jpg';

const Actualites = () => {
  // --- DONNÉES FICTIVES DES ARTICLES ---
  const featuredArticle = {
    id: 1,
    title: "Résultats Exceptionnels : 100% de réussite au Baccalauréat !",
    excerpt: "Une fois de plus, nos élèves de Terminale ont fait briller les couleurs du Jourdain avec un taux de réussite parfait et de nombreuses mentions Très Bien.",
    category: "Excellence",
    date: "15 Juillet 2026",
    image: news1
  };

  const articles = [
    {
      id: 2,
      title: "Inauguration du nouveau laboratoire de Robotique",
      excerpt: "Pour préparer nos élèves aux défis de demain, nous avons ouvert un espace 100% dédié à la programmation et à l'Intelligence Artificielle.",
      category: "Innovation",
      date: "02 Mars 2026",
      image: hero3
    },
    {
      id: 3,
      title: "Semaine Culturelle : Nos élèves célèbrent la diversité",
      excerpt: "Théâtre, danse traditionnelle et gastronomie étaient au rendez-vous pour cette semaine dédiée aux cultures de notre beau pays.",
      category: "Événement",
      date: "18 Février 2026",
      image: hero1
    },
    {
      id: 4,
      title: "Journée Sportive inter-classes : L'esprit d'équipe à l'honneur",
      excerpt: "Découvrez les grands vainqueurs de notre tournoi annuel de football et de basketball au sein de notre complexe sportif.",
      category: "Sport",
      date: "25 Janvier 2026",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000" // Image web en attendant
    }
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-[#FFCC00] font-black tracking-widest uppercase text-xs mb-4 block">
            Vie de l'école
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Nos <span className="text-[#FFCC00]">Actualités</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-24 -mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* --- ARTICLE À LA UNE (FEATURED) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 group cursor-pointer"
          >
            <Link to={`/actualites/${featuredArticle.id}`} className="block relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row h-auto md:h-[450px]">
              
              {/* Image Une */}
              <div className="md:w-3/5 h-64 md:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0047AB]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-6 left-6 z-20 bg-[#FFCC00] text-[#0047AB] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                  À la Une
                </span>
              </div>

              {/* Texte Une */}
              <div className="md:w-2/5 p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#0047AB] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{featuredArticle.category}</span>
                  <span className="text-gray-400 text-sm font-medium">{featuredArticle.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0047AB] uppercase leading-tight mb-6 group-hover:text-[#FFCC00] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <div className="inline-flex items-center font-black text-[#0047AB] uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
                  Lire l'article <span className="ml-2 text-xl">→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* --- GRILLE DES AUTRES ARTICLES --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Link to={`/actualites/${article.id}`} className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-all duration-300">
                  
                  <div className="relative h-60 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0047AB] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-gray-400 text-xs font-bold mb-3">{article.date}</span>
                    <h3 className="text-xl font-black text-[#0047AB] uppercase leading-snug mb-4 group-hover:text-[#FFCC00] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto inline-flex items-center font-bold text-[#0047AB] text-sm group-hover:translate-x-2 transition-transform">
                      Lire la suite <span className="ml-2">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Actualites;