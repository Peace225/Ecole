import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileMenuOpen(null);
  };

  const toggleMobileMenu = (menu: string) => {
    setMobileMenuOpen(mobileMenuOpen === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      
      {/* --- TOP BAR (Couleur Bleu Logo : #003399 approximatif avec Tailwind) --- */}
      <div className="bg-[#0047AB] text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex space-x-6">
            <Link to="/parents" className="hover:text-[#FFCC00] transition">Espace Parents</Link>
            <Link to="/faq" className="hover:text-[#FFCC00] transition">FAQ</Link>
            <Link to="/contact" className="hover:text-[#FFCC00] transition">Contact</Link>
          </div>
          <div className="flex justify-end w-full md:w-auto">
            <Link 
              to="/login" 
              className="bg-[#FFCC00] hover:bg-yellow-400 text-[#0047AB] px-5 py-1.5 rounded-full font-bold transition shadow-sm"
            >
              Connexion Espace Numérique
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo de l'école et Texte */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Logo Groupe Scolaire Le Jourdain" 
            className="h-16 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#0047AB] leading-tight tracking-wider">
              GROUPE SCOLAIRE
            </span>
            <span className="text-2xl font-black text-[#0047AB] leading-tight uppercase">
              Le Jourdain
            </span>
          </div>
        </Link>

        {/* Menu Bureau */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-800 font-bold">
          <Link to="/qui-sommes-nous" className="hover:text-[#0047AB] transition relative group">
            Qui sommes-nous
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
          </Link>

          {/* DROPDOWN : L'Établissement */}
          <div className="relative group">
            <button className="flex items-center hover:text-[#0047AB] transition py-2 relative">
              L'Établissement
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
            </button>
            <div className="absolute left-0 top-full mt-0 w-56 bg-white border-t-4 border-[#0047AB] shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <Link to="/mot-du-directeur" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB] border-b border-gray-100">Mot du directeur</Link>
              <Link to="/ecole" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB] border-b border-gray-100">L'École</Link>
              <Link to="/mission-vision" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB] border-b border-gray-100">Mission & Vision</Link>
              <Link to="/projet-educatif" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB]">Projet éducatif</Link>
            </div>
          </div>

          {/* DROPDOWN : Programmes */}
          <div className="relative group">
            <button className="flex items-center hover:text-[#0047AB] transition py-2 relative">
              Programmes
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
            </button>
            <div className="absolute left-0 top-full mt-0 w-56 bg-white border-t-4 border-[#0047AB] shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <Link to="/prescolaire" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB] border-b border-gray-100">Préscolaire</Link>
              <Link to="/primaire" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB] border-b border-gray-100">Primaire</Link>
              <Link to="/secondaire" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB] border-b border-gray-100">Secondaire</Link>
              <Link to="/reglement-interieur" className="block px-4 py-3 hover:bg-[#F0F5FF] hover:text-[#0047AB]">Règlement intérieur</Link>
            </div>
          </div>

          <Link to="/admission" className="hover:text-[#0047AB] transition relative group">
            Admissions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/actualites" className="hover:text-[#0047AB] transition relative group">
            Actualités
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFCC00] transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/courses" className="bg-[#FFCC00] text-[#0047AB] px-4 py-2 rounded-lg hover:bg-yellow-400 transition shadow-sm">
            Cours d'Informatique
          </Link>
        </div>

        {/* Bouton Hamburger pour Mobile */}
        <button
          className="lg:hidden text-[#0047AB] hover:text-[#FFCC00] focus:outline-none p-2 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* --- MENU MOBILE --- */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t-4 border-[#FFCC00] shadow-2xl absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-6 py-4 text-[#0047AB] font-bold text-lg">
            <Link to="/qui-sommes-nous" onClick={closeMenu} className="py-3 border-b border-gray-100 hover:text-[#FFCC00]">Qui sommes-nous</Link>
            
            <div className="border-b border-gray-100">
              <button 
                onClick={() => toggleMobileMenu('etablissement')}
                className="flex justify-between items-center w-full py-3 hover:text-[#FFCC00] text-left"
              >
                L'Établissement
                <svg className={`w-5 h-5 transform transition-transform ${mobileMenuOpen === 'etablissement' ? 'rotate-180 text-[#FFCC00]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileMenuOpen === 'etablissement' && (
                <div className="bg-[#F0F5FF] pl-4 py-2 flex flex-col space-y-4 text-base rounded-md mb-2 text-gray-700">
                  <Link to="/mot-du-directeur" onClick={closeMenu} className="hover:text-[#0047AB]">Mot du directeur</Link>
                  <Link to="/ecole" onClick={closeMenu} className="hover:text-[#0047AB]">L'École</Link>
                  <Link to="/mission-vision" onClick={closeMenu} className="hover:text-[#0047AB]">Mission & Vision</Link>
                  <Link to="/projet-educatif" onClick={closeMenu} className="hover:text-[#0047AB]">Projet éducatif</Link>
                </div>
              )}
            </div>

            <div className="border-b border-gray-100">
              <button 
                onClick={() => toggleMobileMenu('programmes')}
                className="flex justify-between items-center w-full py-3 hover:text-[#FFCC00] text-left"
              >
                Programmes
                <svg className={`w-5 h-5 transform transition-transform ${mobileMenuOpen === 'programmes' ? 'rotate-180 text-[#FFCC00]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileMenuOpen === 'programmes' && (
                <div className="bg-[#F0F5FF] pl-4 py-2 flex flex-col space-y-4 text-base rounded-md mb-2 text-gray-700">
                  <Link to="/prescolaire" onClick={closeMenu} className="hover:text-[#0047AB]">Préscolaire</Link>
                  <Link to="/primaire" onClick={closeMenu} className="hover:text-[#0047AB]">Primaire</Link>
                  <Link to="/secondaire" onClick={closeMenu} className="hover:text-[#0047AB]">Secondaire</Link>
                  <Link to="/reglement-interieur" onClick={closeMenu} className="hover:text-[#0047AB]">Règlement intérieur</Link>
                </div>
              )}
            </div>

            <Link to="/admission" onClick={closeMenu} className="py-3 border-b border-gray-100 hover:text-[#FFCC00]">Admissions</Link>
            <Link to="/actualites" onClick={closeMenu} className="py-3 border-b border-gray-100 hover:text-[#FFCC00]">Actualités</Link>
            <Link to="/courses" onClick={closeMenu} className="py-4 mt-2 text-center bg-[#FFCC00] text-[#0047AB] rounded-xl font-black">Accéder aux Cours d'Informatique</Link>
            
            <div className="pt-6 pb-2 mt-4 flex flex-col space-y-4 text-sm text-gray-500 text-center font-medium">
              <Link to="/parents" onClick={closeMenu} className="hover:text-[#0047AB]">Espace Parents</Link>
              <Link to="/faq" onClick={closeMenu} className="hover:text-[#0047AB]">Foire Aux Questions (FAQ)</Link>
              <Link to="/contact" onClick={closeMenu} className="hover:text-[#0047AB]">Nous Contacter</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;