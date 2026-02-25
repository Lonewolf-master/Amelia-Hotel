import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionContainer } from '../../components/common/SectionContainer';

gsap.registerPlugin(ScrollTrigger);

interface Room {
  id: number;
  title: string;
  type: string;
  image: string;
  price: string;
  description: string;
}

const ROOMS: Room[] = [
  {
    id: 1,
    title: "The Amelia Suite",
    type: "Presidential",
    price: "$450 / night",
    description: "Our most exclusive offering, featuring a panoramic view of the mountains.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Azure Vista",
    type: "Deluxe King",
    price: "$320 / night",
    description: "Modern comfort meets classic elegance with state-of-the-art amenities.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Golden Sanctuary",
    type: "Executive Suite",
    price: "$380 / night",
    description: "A serene retreat designed for the discerning traveler seeking peace.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Royal Penthouse",
    type: "Ultra Luxury",
    price: "$600 / night",
    description: "The height of opulence with private terrace and dedicated butler service.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Emerald Garden",
    type: "Garden View",
    price: "$280 / night",
    description: "Lush greenery meets sophisticated design in this tranquil garden escape.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Midnight Velvet",
    type: "Boutique Queen",
    price: "$250 / night",
    description: "A moody, atmospheric space for those who appreciate contemporary style.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800"
  }
];

export const RoomGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">Accommodation</h2>
            <h3 className="text-5xl md:text-6xl luxury-heading text-white">Our Signature Rooms</h3>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-4 border border-gold/20 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
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
                    alt={room.title}
                    className="room-image w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="room-overlay absolute inset-0 bg-slate-950/20 opacity-0 pointer-events-none transition-opacity duration-500" />
                </div>
                
                <div className="p-10 relative">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-3 block font-semibold">{room.type}</span>
                  <h4 className="text-2xl text-white mb-4 font-luxury tracking-wide">{room.title}</h4>
                  <p className="text-slate-400 text-sm mb-8 font-light leading-relaxed italic">
                    {room.description}
                  </p>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-800/50">
                    <span className="text-gold font-bold tracking-widest text-lg">{room.price}</span>
                    <button className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-gold transition-colors underline underline-offset-8 decoration-gold/30 hover:decoration-gold font-bold">
                      View Details
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
