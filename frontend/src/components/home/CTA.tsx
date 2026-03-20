import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden bg-[#FFCC00] rounded-[4rem] shadow-2xl p-12 md:p-24 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0047AB] opacity-10 rounded-full -mr-20 -mt-20"></div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0047AB] mb-8 uppercase tracking-tighter leading-tight relative z-10">
            Le futur de votre enfant <br /> commence au <span className="underline decoration-white underline-offset-8 text-white">Jourdain</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link to="/admission" className="bg-[#0047AB] text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition shadow-xl">DÉPOSER UN DOSSIER</Link>
            <Link to="/contact" className="bg-white text-[#0047AB] px-12 py-5 rounded-2xl font-black text-lg border-2 border-transparent hover:border-[#0047AB] hover:bg-transparent transition shadow-xl">NOUS CONTACTER</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;