import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionContainer } from '../../components/common/SectionContainer';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface Room {
  id: number;
  title: Record<'en' | 'fr', string>;
  type: Record<'en' | 'fr', string>;
  image: string;
  price: string;
  description: Record<'en' | 'fr', string>;
  amenities: string[];
}

const ROOMS: Room[] = [
  {
    id: 1,
    title: { en: "Deluxe King Room", fr: "Chambre Deluxe King" },
    type: { en: "Extra-large double bed", fr: "Grand lit double XL" },
    price: "XAF 80,000 / night",
    description: { 
      en: "Featuring free toiletries and bathrobes, this double room includes a private bathroom with a bath, a shower and a bidet. Spacious with a dining area and flat-screen TV.",
      fr: "Dotée d'articles de toilette gratuits et de peignoirs, cette chambre double comprend une salle de bains privative avec baignoire, douche et bidet. Spacieuse avec un coin repas et une télévision à écran plat."
    },
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    amenities: ["AC", "Balcony", "Private Bath", "Flat-screen TV"]
  },
  {
    id: 2,
    title: { en: "Deluxe Double Room", fr: "Chambre Double Deluxe" },
    type: { en: "Large double bed", fr: "Grand lit double" },
    price: "XAF 40,000 / night",
    description: {
      en: "Providing free toiletries and bathrobes, this double room includes a private bathroom with a shower, a bidet and a hairdryer. Featuring a balcony and air conditioning.",
      fr: "Dotée d'articles de toilette et de peignoirs gratuits, cette chambre double comprend une salle de bains privative avec douche, bidet et sèche-cheveux. Dispose d'un balcon et de la climatisation."
    },
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    amenities: ["AC", "Balcony", "Free Toiletries", "Bidet"]
  },
  {
    id: 3,
    title: { en: "Luxury Triple Room", fr: "Chambre Triple de Luxe" },
    type: { en: "Extra-large double bed", fr: "Grand lit double XL" },
    price: "XAF 100,000 / night",
    description: {
      en: "Offering free toiletries and bathrobes, this triple room includes a private bathroom with a bath, a shower and a bidet. Features a tea/coffee maker and dining area.",
      fr: "Offrant des articles de toilette et des peignoirs gratuits, cette chambre triple comprend une salle de bains privative avec baignoire, douche et bidet. Comprend un plateau thé/café et un coin repas."
    },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    amenities: ["Spa Bath", "AC", "Tea/Coffee Maker", "Dining Area"]
  },
  {
    id: 4,
    title: { en: "Deluxe Apartment", fr: "Appartement Deluxe" },
    type: { en: "1 Extra-large & 1 Large double bed", fr: "1 XL & 1 Grand lit double" },
    price: "XAF 150,000 / night",
    description: {
      en: "The spacious apartment features 1 bedroom and 1 bathroom with a shower. Featuring a balcony, air conditioning, and a flat-screen TV.",
      fr: "Cet appartement spacieux comprend 1 chambre et 1 salle de bains avec douche. Doté d'un balcon, de la climatisation et d'une télévision à écran plat."
    },
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
    amenities: ["Living Area", "Balcony", "Kitchenette", "AC"]
  },
  {
    id: 5,
    title: { en: "Superior Apartment with Balcony", fr: "Appartement Supérieur avec Balcon" },
    type: { en: "2 Bedrooms & 3 Sofa beds", fr: "2 Chambres & 3 Canapés-lits" },
    price: "XAF 200,000 / night",
    description: {
      en: "Our most expansive accommodation, accommodating up to 6 guests. Features multiple bedrooms, a living room, and a private balcony with stunning views.",
      fr: "Notre hébergement le plus vaste, pouvant accueillir jusqu'à 6 personnes. Comprend plusieurs chambres, un salon et un balcon privé avec une vue imprenable."
    },
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
    amenities: ["6 Guests", "2 Bedrooms", "Large Balcony", "Rooftop View"]
  },
  {
    id: 6,
    title: { en: "Double Room with Spa Bath", fr: "Chambre Double avec Baignoire Spa" },
    type: { en: "2 Large double beds", fr: "2 Grands lits doubles" },
    price: "XAF 100,000 / night",
    description: {
      en: "A luxurious space for groups or families, featuring two double beds and a premium spa bath for the ultimate relaxation.",
      fr: "Un espace luxueux pour les groupes ou les familles, doté de deux lits doubles et d'une baignoire spa haut de gamme pour une détente ultime."
    },
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
    amenities: ["Spa Bath", "2 Double Beds", "Luxury Linens", "AC"]
  }
];

export const RoomGallery: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const t = {
    en: {
      category: "Accommodation",
      heading: "Our Signature Rooms",
      priceSuffix: "/ night",
      viewDetails: "View Details"
    },
    fr: {
      category: "Hébergement",
      heading: "Nos Chambres Signature",
      priceSuffix: "/ nuit",
      viewDetails: "Voir Détails"
    }
  }[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const slideTo = (index: number) => {
    if (index < 0 || index > ROOMS.length - 1) return;
    
    setCurrentIndex(index);
    const cardWidth = cardsRef.current[0]?.offsetWidth || 0;
    const gap = 40; // match the gap-10 from tailwind (2.5rem = 40px)
    
    gsap.to(sliderRef.current, {
      x: -(index * (cardWidth + gap)),
      duration: 1,
      ease: 'power4.inOut'
    });
  };

  const nextSlide = () => {
    // Show 3 cards at once on desktop, so we stop before the last few
    const visibleCards = window.innerWidth >= 768 ? 3 : 1;
    if (currentIndex < ROOMS.length - visibleCards) {
      slideTo(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    const card = cardsRef.current[index];
    if (card) {
      gsap.to(card.querySelector('.room-image'), {
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.out'
      });
      gsap.to(card.querySelector('.room-overlay'), {
        opacity: 1,
        duration: 0.4
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (card) {
      gsap.to(card.querySelector('.room-image'), {
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      });
      gsap.to(card.querySelector('.room-overlay'), {
        opacity: 0,
        duration: 0.4
      });
    }
  };

  return (
    <SectionContainer id="rooms" className="bg-slate-900 overflow-hidden">
      <div ref={sectionRef}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">{t.category}</h2>
            <h3 className="text-5xl md:text-6xl luxury-heading text-white">{t.heading}</h3>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="ChevronLeft"
              className="p-4 border border-gold/20 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="ChevronRight"
              className="p-4 border border-gold/20 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex gap-10 transition-none"
          >
            {ROOMS.map((room, index) => (
              <article 
                key={room.id}
                ref={el => cardsRef.current[index] = el}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="min-w-full md:min-w-[calc(33.333%-1.7rem)] group relative overflow-hidden bg-slate-950 border border-slate-800 hover:border-gold/40 transition-colors duration-500 luxury-shadow cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={room.image} 
                    alt={room.title[language]}
                    className="room-image w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="room-overlay absolute inset-0 bg-slate-950/20 opacity-0 pointer-events-none transition-opacity duration-500" />
                </div>
                
                <div className="p-10 relative">
                                  <span className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-3 block font-semibold">{room.type[language]}</span>
                                  <h4 className="text-2xl text-white mb-4 font-luxury tracking-wide">{room.title[language]}</h4>
                                  <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed italic">
                                    {room.description[language]}
                                  </p>
                                  
                                  <div className="flex flex-wrap gap-2 mb-8">
                                    {room.amenities.map((amenity, idx) => (
                                      <span 
                                        key={idx} 
                                        className="text-[10px] uppercase tracking-widest px-2 py-1 bg-slate-900 border border-slate-800 text-slate-400"
                                      >
                                        {amenity}
                                      </span>
                                    ))}
                                  </div>
                  
                                  <div className="flex flex-col space-y-6 pt-8 border-t border-slate-800/50">
                                    <span className="text-gold font-bold tracking-widest text-lg">{room.price.replace('/ night', t.priceSuffix)}</span>
                                    <button className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-gold transition-colors font-bold text-left">
                                      {t.viewDetails}
                                    </button>
                                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
