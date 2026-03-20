import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assurez-vous du bon chemin

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- LISTE DES RÉSEAUX SOCIAUX AVEC VRAIS LIENS ET ICÔNES SVG ---
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/groupe-scolaire-le-jourdain', // <-- À remplacer par votre vrai lien
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/lejourdain_bouake', // <-- À remplacer par votre vrai lien
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/school/lejourdain', // <-- À remplacer par votre vrai lien
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@lejourdain', // <-- À remplacer par votre vrai lien
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#003366] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* --- GRILLE PRINCIPALE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : LOGO & MISSION */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-16 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-black leading-tight">GS LE JOURDAIN</span>
                <span className="text-[10px] text-[#FFCC00] uppercase tracking-[0.2em] font-bold">L'Excellence à Bouaké</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed italic">
              "Former les leaders de demain dans un cadre d'excellence, de rigueur et d'innovation pédagogique."
            </p>
            
            {/* RÉSEAUX SOCIAUX DYNAMIQUES */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Visitez notre page ${social.name}`}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#0047AB] transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLONNE 2 : LIENS RAPIDES */}
          <div>
            <h4 className="text-[#FFCC00] font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4 text-gray-300 font-medium text-sm">
              <li><Link to="/qui-sommes-nous" className="hover:text-[#FFCC00] transition">Qui sommes-nous</Link></li>
              <li><Link to="/ecole" className="hover:text-[#FFCC00] transition">L'Établissement</Link></li>
              <li><Link to="/programmes" className="hover:text-[#FFCC00] transition">Nos Programmes</Link></li>
              <li><Link to="/actualites" className="hover:text-[#FFCC00] transition">Actualités</Link></li>
              <li><Link to="/courses" className="text-[#FFCC00] font-bold">Cours en ligne</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : ADMISSIONS */}
          <div>
            <h4 className="text-[#FFCC00] font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-4">
              Admissions
            </h4>
            <ul className="flex flex-col gap-4 text-gray-300 font-medium text-sm">
              <li><Link to="/admission" className="hover:text-[#FFCC00] transition">Dossier d'inscription</Link></li>
              <li><Link to="/tarifs" className="hover:text-[#FFCC00] transition">Frais de scolarité</Link></li>
              <li><Link to="/reglement-interieur" className="hover:text-[#FFCC00] transition">Règlement intérieur</Link></li>
              <li><Link to="/faq" className="hover:text-[#FFCC00] transition">Questions fréquentes</Link></li>
            </ul>
          </div>

          {/* COLONNE 4 : CONTACTS */}
          <div>
            <h4 className="text-[#FFCC00] font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-4">
              Nous Contacter
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#FFCC00] p-2 rounded-lg text-[#003366]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <p className="text-sm text-gray-300 leading-snug">
                  Quartier Kennedy, <br /> Bouaké, Côte d'Ivoire
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#FFCC00] p-2 rounded-lg text-[#003366]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div className="text-sm text-gray-300 font-bold">
                  +225 07 00 00 00 00 <br /> +225 05 00 00 00 00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BARRE DE COPYRIGHT --- */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-medium">
            © {currentYear} <span className="text-white font-bold">Groupe Scolaire Le Jourdain</span>. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <Link to="/mentions" className="hover:text-[#FFCC00] transition">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-[#FFCC00] transition">Politique de confidentialité</Link>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;