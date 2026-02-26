import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionContainer } from '../../components/common/SectionContainer';
import { useLanguage } from '../../context/LanguageContext';
import { Waves, Dumbbell, Coffee, Bath, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Amenity {
  id: number;
  title: Record<'en' | 'fr', string>;
  description: Record<'en' | 'fr', string>;
  icon: React.ReactNode;
  image: string;
}

const AMENITIES: Amenity[] = [
  {
    id: 1,
    title: { en: "Rooftop Pool", fr: "Piscine sur le Toit" },
    description: {
      en: "Experience the ultimate relaxation with panoramic views of Buea from our stunning rooftop pool. Equipped with sun loungers, beach chairs, and sun umbrellas for your comfort.",
      fr: "Vivez une relaxation ultime avec une vue panoramique sur Buea depuis notre superbe piscine sur le toit. Équipée de chaises longues et de parasols pour votre confort."
    },
    icon: <Waves className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: { en: "Fitness & Wellness", fr: "Fitness & Bien-être" },
    description: {
      en: "Keep up with your routine in our state-of-the-art gym, or rejuvenate in our tranquil sauna and hot tub facilities designed for pure luxury.",
      fr: "Poursuivez votre routine dans notre salle de sport ultramoderne, ou ressourcez-vous dans notre sauna tranquille et nos installations de spa."
    },
    icon: <Dumbbell className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: { en: "Safety & Security", fr: "Sûreté & Sécurité" },
    description: {
      en: "Your peace of mind is our priority. Our facility is equipped with smoke alarms, fire extinguishers, security alarms, and 24-hour gate security.",
      fr: "Votre tranquillité d'esprit est notre priorité. Notre établissement est équipé de détecteurs de fumée, d'extincteurs, d'alarmes de sécurité et d'une sécurité 24h/24."
    },
    icon: <Bath className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: { en: "Signature Dining", fr: "Restauration Signature" },
    description: {
      en: "Savor a fusion of African and American cuisines. We offer continental, buffet, and à la carte breakfast options to start your day perfectly.",
      fr: "Savourez une fusion de cuisines africaine et américaine. Nous proposons des options de petit-déjeuner continental, buffet et à la carte."
    },
    icon: <Coffee className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    title: { en: "24-Hour Concierge", fr: "Conciergerie 24h/24" },
    description: {
      en: "From car hire and pet bowls to local recommendations, our dedicated 24-hour front desk is here to ensure a seamless stay.",
      fr: "De la location de voiture aux bols pour animaux, notre réception dédiée 24h/24 est là pour garantir un séjour sans faille."
    },
    icon: <Clock className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  }
];

const AMENITIES_WITH_ICONS = (amenity: Amenity) => amenity;

export const AmenitiesShowcase: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const t = {
    en: {
      subheading: "Exceptional",
      heading: "Luxury Facilities",
      cta: "Discover Excellence"
    },
    fr: {
      subheading: "Exceptionnel",
      heading: "Installations de Luxe",
      cta: "Découvrez l'Excellence"
    }
  }[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(item,
          { 
            x: index % 2 === 0 ? -100 : 100, 
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionContainer id="amenities" className="bg-slate-950 overflow-hidden">
      <div ref={sectionRef}>
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">{t.subheading}</h2>
          <h3 className="text-5xl md:text-6xl luxury-heading text-white">{t.heading}</h3>
        </div>

        <div className="space-y-32">
          {AMENITIES.map((amenity, index) => (
            <div 
              key={amenity.id}
              ref={el => itemsRef.current[index] = el}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}
            >
              <div className="flex-1 relative group w-full">
                <div className="absolute -inset-4 border border-gold/10 group-hover:border-gold/30 transition-colors duration-700 pointer-events-none" />
                <div className="aspect-video overflow-hidden border border-slate-800">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title[language]}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="text-gold mb-4 flex justify-center md:justify-start">
                  {amenity.icon}
                </div>
                <h4 className="text-3xl md:text-4xl text-white font-luxury tracking-wide">{amenity.title[language]}</h4>
                <p className="text-slate-300 text-lg font-normal leading-relaxed max-w-xl mx-auto md:mx-0">
                  {amenity.description[language]}
                </p>
                <div className="pt-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">{t.cta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
