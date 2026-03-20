import React from 'react';
// @ts-ignore
import Slider from 'react-slick';

// IMPORTATION DES STYLES
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    parent: "Mme Yao Marie-Laure",
    role: "Mère d'un élève en CM2",
    text: "Depuis que mon fils a rejoint Le Jourdain, j'ai vu une transformation incroyable. Son niveau scolaire a grimpé et il a repris confiance en lui.",
    stars: 5
  },
  {
    id: 2,
    parent: "M. Kouassi Jean-Paul",
    role: "Père d'une élève en Terminale",
    text: "La rigueur et l'encadrement au secondaire sont exemplaires. Ma fille se sent prête pour ses examens et pour son futur parcours.",
    stars: 5
  },
  {
    id: 3,
    parent: "Mme Bamba Fatoumata",
    role: "Mère d'un enfant au Préscolaire",
    text: "L'éveil des tout-petits est au cœur des préoccupations. Ma fille s'épanouit chaque jour. Je recommande cette école à tous.",
    stars: 5
  },
  {
    id: 4,
    parent: "M. Sidiki Koné",
    role: "Père d'un ancien élève",
    text: "Une base solide pour l'avenir ! Mon fils est aujourd'hui ingénieur, merci au Jourdain pour l'excellence de son enseignement.",
    stars: 5
  }
];

const TestimonialCard = ({ parent, role, text, stars }: any) => (
  <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-300 mx-4 h-full flex flex-col group min-h-[350px]">
    <div className="flex gap-1 mb-6 text-[#FFCC00]">
      {[...Array(stars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-600 italic text-lg leading-relaxed mb-6 flex-grow">
      "{text}"
    </p>
    <div className="w-10 h-1 bg-[#FFCC00] mb-6 rounded-full group-hover:w-20 transition-all duration-500"></div>
    <div className="flex items-center gap-4 mt-auto">
      <div className="w-12 h-12 bg-[#0047AB] text-[#FFCC00] rounded-full flex items-center justify-center font-black text-lg shadow-md">
        {parent.charAt(0)}
      </div>
      <div>
        <h4 className="text-[#0047AB] font-black text-sm uppercase tracking-wider">{parent}</h4>
        <p className="text-gray-400 text-xs font-bold">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  // --- CORRECTIF VITE / ESM ---
  // Si Slider est un objet (module), on prend Slider.default, sinon on utilise Slider tel quel.
  const SlickSlider = Slider.default ? Slider.default : Slider;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ],
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FFCC00] font-black tracking-[0.3em] uppercase text-xs mb-3 block">
            La Voix de notre Communauté
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0047AB] uppercase tracking-tighter">
            Ils nous font <span className="text-[#FFCC00]">Confiance</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto mt-6 rounded-full shadow-md"></div>
        </div>

        <div className="testimonial-slider-container">
          <SlickSlider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="py-10">
                <TestimonialCard {...item} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;