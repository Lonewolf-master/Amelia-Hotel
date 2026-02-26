import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionContainer } from '../../components/common/SectionContainer';
import { Lightbox } from '../../components/common/Lightbox';
import { useLanguage } from '../../context/LanguageContext';
import { useBooking } from '../../context/BookingContext';

gsap.registerPlugin(ScrollTrigger);

interface Room {
  id: number;
  title: Record<'en' | 'fr', string>;
  type: Record<'en' | 'fr', string>;
  images: string[];
  price: string;
  description: Record<'en' | 'fr', string>;
  amenities: string[];
}

const ROOMS: Room[] = [
  {
    id: 1,
    title: { en: "Deluxe Double Room", fr: "Chambre Double Deluxe" },
    type: { en: "1 Large double bed • 25m²", fr: "1 Grand lit double • 25m²" },
    price: "XAF 40,000 / night",
    description: {
      en: "Providing free toiletries and bathrobes, this double room includes a private bathroom with a shower, a bidet and a hairdryer. Featuring a balcony, air conditioning, and slippers. Continental breakfast included.",
      fr: "Dotée d'articles de toilette et de peignoirs gratuits, cette chambre double comprend une salle de bains privative avec douche, bidet et sèche-cheveux. Dispose d'un balcon, de la climatisation et de chaussons. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["AC", "Balcony", "Bidet", "Slippers"]
  },
  {
    id: 2,
    title: { en: "Deluxe Twin Room", fr: "Chambre Twin Deluxe" },
    type: { en: "1 Large double bed • 31m²", fr: "1 Grand lit double • 31m²" },
    price: "XAF 60,000 / night",
    description: {
      en: "The spacious twin room offers air conditioning, a tea and coffee maker, as well as a private bathroom featuring a shower, a bidet and bathrobes. Featuring a balcony and slippers. Continental breakfast included.",
      fr: "La chambre lits jumeaux spacieuse dispose de la climatisation, d'un plateau/bouilloire ainsi que d'une salle de bains privative avec douche, bidet et peignoirs. Dotée d'un balcon et de chaussons. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["AC", "Balcony", "Tea/Coffee Maker", "Bidet"]
  },
  {
    id: 3,
    title: { en: "Deluxe King Room", fr: "Chambre King Deluxe" },
    type: { en: "1 Extra-large double bed • 31m²", fr: "1 Grand lit double XL • 31m²" },
    price: "XAF 80,000 / night",
    description: { 
      en: "Featuring free toiletries, bathrobes, and slippers, this double room includes a private bathroom with a bath, a shower and a bidet. Spacious with a dining area, wardrobe, and flat-screen TV. Continental breakfast included.",
      fr: "Dotée d'articles de toilette gratuits, de peignoirs et de chaussons, cette chambre double comprend une salle de bains privative avec baignoire, douche et bidet. Spacieuse avec un coin repas, une armoire et une télévision à écran plat. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["AC", "Dining Table", "Wardrobe", "Bidet"]
  },
  {
    id: 4,
    title: { en: "Deluxe Studio", fr: "Studio Deluxe" },
    type: { en: "1 Extra-large double bed • 51m²", fr: "1 Grand lit double XL • 51m²" },
    price: "XAF 80,000 / night",
    description: {
      en: "Offering free toiletries and bathrobes, this studio includes a private bathroom with a bath, a shower and a bidet. Features a flat-screen TV and dining area. Continental breakfast included.",
      fr: "Offrant des articles de toilette et des peignoirs gratuits, ce studio comprend une salle de bains privative avec baignoire, douche et bidet. Dispose d'une télévision à écran plat et d'un coin repas. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["Spa Bath", "AC", "Kitchenette", "Dining Area"]
  },
  {
    id: 5,
    title: { en: "Luxury Triple Room", fr: "Chambre Triple de Luxe" },
    type: { en: "1 Extra-large double bed • 40m²", fr: "1 Grand lit double XL • 40m²" },
    price: "XAF 100,000 / night",
    description: {
      en: "Offering free toiletries and bathrobes, this triple room includes a private bathroom with a bath, a shower and a bidet. Features a tea/coffee maker and dining area. Continental breakfast included.",
      fr: "Offrant des articles de toilette et des peignoirs gratuits, cette chambre triple comprend une salle de bains privative avec baignoire, douche et bidet. Comprend un plateau thé/café et un coin repas. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["Spa Bath", "AC", "Tea/Coffee Maker", "Dining Area"]
  },
  {
    id: 6,
    title: { en: "Superior Studio", fr: "Studio Supérieur" },
    type: { en: "1 Extra-large double bed", fr: "1 Grand lit double XL" },
    price: "XAF 100,000 / night",
    description: {
      en: "Our superior studio offers ultimate comfort and privacy. Features premium bedding and modern amenities for a relaxing stay. Continental breakfast included.",
      fr: "Notre studio supérieur offre un confort et une intimité ultimes. Dispose d'une literie de qualité supérieure et d'équipements modernes pour un séjour relaxant. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["Spa Bath", "AC", "Modern Design", "Privacy"]
  },
  {
    id: 7,
    title: { en: "Superior Triple Room", fr: "Chambre Triple Supérieure" },
    type: { en: "3 Large double beds", fr: "3 Grands lits doubles" },
    price: "XAF 100,000 / night",
    description: {
      en: "Perfect for larger groups or families, this spacious room features three comfortable double beds. Continental breakfast included.",
      fr: "Parfaite pour les grands groupes ou les familles, cette chambre spacieuse dispose de trois lits doubles confortables. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["3 Beds", "AC", "Family Friendly", "Large Space"]
  },
  {
    id: 8,
    title: { en: "Double Room with Spa Bath", fr: "Chambre Double avec Baignoire Spa" },
    type: { en: "2 Large double beds", fr: "2 Grands lits doubles" },
    price: "XAF 100,000 / night",
    description: {
      en: "A luxurious space for groups or families, featuring two double beds and a premium spa bath for the ultimate relaxation. Continental breakfast included.",
      fr: "Un espace luxueux pour les groupes ou les familles, doté de deux lits doubles et d'une baignoire spa haut de gamme pour une détente ultime. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["Spa Bath", "2 Double Beds", "Luxury Linens", "AC"]
  },
  {
    id: 9,
    title: { en: "Deluxe Apartment", fr: "Appartement Deluxe" },
    type: { en: "1 Extra-large & 1 Large double bed • 105m²", fr: "1 XL & 1 Grand lit double • 105m²" },
    price: "XAF 150,000 / night",
    description: {
      en: "The spacious apartment features 1 bedroom and 1 bathroom with a shower. Featuring a balcony, air conditioning, and a flat-screen TV. Continental breakfast included.",
      fr: "Cet appartement spacieux comprend 1 chambre et 1 salle de bains avec douche. Doté d'un balcon, de la climatisation et d'une télévision à écran plat. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["Living Area", "Balcony", "Kitchenette", "AC"]
  },
  {
    id: 10,
    title: { en: "Superior Apartment with Balcony", fr: "Appartement Supérieur avec Balcon" },
    type: { en: "2 Bedrooms & 3 Sofa beds", fr: "2 Chambres & 3 Canapés-lits" },
    price: "XAF 200,000 / night",
    description: {
      en: "Our most expansive accommodation, accommodating up to 6 guests. Features multiple bedrooms, a living room, and a private balcony with stunning views. Continental breakfast included.",
      fr: "Notre hébergement le plus vaste, pouvant accueillir jusqu'à 6 personnes. Comprend plusieurs chambres, un salon et un balcon privé avec une vue imprenable. Petit-déjeuner continental inclus."
    },
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["6 Guests", "2 Bedrooms", "Large Balcony", "Rooftop View"]
  }
];

export const RoomGallery: React.FC = () => {
  const { language } = useLanguage();
  const { updateData, setStep } = useBooking();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
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
    const gap = 40; // match the gap-10 from tailwind
    
    gsap.to(sliderRef.current, {
      x: -(index * (cardWidth + gap)),
      duration: 1,
      ease: 'power4.inOut'
    });
  };

  const nextSlide = () => {
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
              aria-label="Previous rooms"
              className="p-4 border border-gold/20 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next rooms"
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
                onClick={() => setSelectedRoom(room)}
                className="min-w-full md:min-w-[calc(33.333%-1.7rem)] group relative overflow-hidden bg-slate-950 border border-slate-800 hover:border-gold/40 transition-colors duration-500 luxury-shadow cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={room.images[0]} 
                    alt={room.title[language]}
                    loading="lazy"
                    className="room-image w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="room-overlay absolute inset-0 bg-slate-950/20 opacity-0 pointer-events-none transition-opacity duration-500" />
                </div>
                
                <div className="p-10 relative">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold mb-3 block font-bold">{room.type[language]}</span>
                  <h4 className="text-2xl text-white mb-4 font-luxury tracking-wide">{room.title[language]}</h4>
                  <p className="text-slate-300 text-sm mb-6 font-normal leading-relaxed">
                    {room.description[language]}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.amenities.map((amenity, idx) => (
                      <span 
                        key={idx} 
                        className="text-[11px] uppercase tracking-widest px-3 py-1 bg-slate-900 border border-slate-800 text-slate-300 font-medium"
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

        {selectedRoom && (
          <Lightbox 
            isOpen={!!selectedRoom}
            onClose={() => setSelectedRoom(null)}
            images={selectedRoom.images}
            title={selectedRoom.title[language]}
            description={selectedRoom.description[language]}
            price={selectedRoom.price.replace('/ night', t.priceSuffix)}
            onBookNow={() => {
              updateData({ roomId: selectedRoom.id });
              setStep('stay');
              setSelectedRoom(null);
              document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}
      </div>
    </SectionContainer>
  );
};
