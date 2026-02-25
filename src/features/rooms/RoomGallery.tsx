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
}

const ROOMS: Room[] = [
  {
    id: 1,
    title: "The Amelia Suite",
    type: "Presidential",
    price: "$450 / night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Azure Vista",
    type: "Deluxe King",
    price: "$320 / night",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Golden Sanctuary",
    type: "Executive Suite",
    price: "$380 / night",
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

  return (
    <SectionContainer id="rooms" className="bg-slate-900">
      <div ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">Accommodation</h2>
          <h3 className="text-5xl md:text-6xl luxury-heading text-white">Our Signature Rooms</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ROOMS.map((room, index) => (
            <article 
              key={room.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative overflow-hidden bg-slate-950 border border-slate-800 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-gold/80 mb-2 block">{room.type}</span>
                <h4 className="text-xl text-white mb-4 font-luxury tracking-wide">{room.title}</h4>
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <span className="text-gold font-semibold tracking-wider">{room.price}</span>
                  <button className="text-xs uppercase tracking-widest text-slate-400 hover:text-gold transition-colors underline underline-offset-8">
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
