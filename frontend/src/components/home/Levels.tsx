import { Link } from 'react-router-dom';

const Levels = () => {
  const levels = [
    { l: 'Préscolaire', i: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500', d: 'Éveil et créativité.' },
    { l: 'Primaire', i: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=500', d: 'Bases solides du savoir.' },
    { l: 'Secondaire', i: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=500', d: 'Rigueur et Excellence.' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-black text-[#0047AB] uppercase">Nos Niveaux d'Enseignement</h2>
        <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {levels.map((item, idx) => (
          <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all">
            <div className="h-48 overflow-hidden relative">
              <img src={item.i} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0047AB]/40 group-hover:bg-transparent transition-colors"></div>
              <h3 className="absolute bottom-4 left-6 text-white text-2xl font-black uppercase">{item.l}</h3>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-500 italic mb-6">{item.d}</p>
              <Link to="/admission" className="text-[#0047AB] font-black border-b-2 border-[#FFCC00]">S'INSCRIRE</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Levels;