import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '../../components/common/SectionContainer';

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
  }
];

const RoomGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Reveal Animation
        gsap.fromTo(card,
          { 
            y: 60, 
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <SectionContainer id="rooms" className="bg-slate-900">
      <div ref={sectionRef}>
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">Accommodation</h2>
          <h3 className="text-5xl md:text-6xl luxury-heading text-white">Our Signature Rooms</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ROOMS.map((room, index) => (
            <article 
              key={room.id}
              ref={el => cardsRef.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="group relative overflow-hidden bg-slate-950 border border-slate-800 hover:border-gold/40 transition-colors duration-500 luxury-shadow cursor-pointer"
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
    </SectionContainer>
  );
};

export default RoomGallery;
