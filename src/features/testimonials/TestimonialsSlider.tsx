import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionContainer } from '../../components/common/SectionContainer';
import { useLanguage } from '../../context/LanguageContext';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  location: Record<'en' | 'fr', string>;
  date: string;
  score: string;
  content: Record<'en' | 'fr', string>;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Leyuga",
    location: { en: "France", fr: "France" },
    date: "2025-02-01",
    score: "10/10",
    content: {
      en: "The staffs were professional, kitchen staff, the reception staff, the security staff, the cleaners. I love every treatment they gave me, food, drinks were top. In fact, all was 100%.",
      fr: "Le personnel était professionnel, le personnel de cuisine, le personnel de réception, le personnel de sécurité, les nettoyeurs. J'ai adoré chaque traitement qu'ils m'ont donné, la nourriture, les boissons étaient au top. En fait, tout était à 100%."
    }
  },
  {
    id: 2,
    name: "Theresa",
    location: { en: "Ireland", fr: "Irlande" },
    date: "2024-12-20",
    score: "10/10",
    content: {
      en: "Really nice and spacious room. Everything you wanted was there. Very clean and brilliant price including exception choice at breakfast. Staff is very welcoming. Good value for money.",
      fr: "Chambre vraiment belle et spacieuse. Tout ce que vous vouliez était là. Très propre et prix brillant comprenant un choix exceptionnel au petit déjeuner. Le personnel est très accueillant. Bon rapport qualité prix."
    }
  },
  {
    id: 3,
    name: "Tabuwe",
    location: { en: "Cameroon", fr: "Cameroun" },
    date: "2024-12-20",
    score: "10/10",
    content: {
      en: "This place is top-notch luxury, very welcoming staff, good Internet. Rooms are large and clean. I was amazed with what we saw. Good value for the money, we will definitely stay there anytime we are in Buea.",
      fr: "Cet endroit est un luxe de premier ordre, un personnel très accueillant, un bon Internet. Les chambres sont grandes et propres. J'ai été étonné de ce que nous avons vu. Bon rapport qualité-prix, nous y reviendrons certainement chaque fois que nous serons à Buea."
    }
  },
  {
    id: 4,
    name: "Adewale",
    location: { en: "Nigeria", fr: "Nigéria" },
    date: "2025-02-23",
    score: "8.0",
    content: {
      en: "Excellent staff, clean rooms and very nice breakfast. The staff were very friendly and ready to accommodate my requests.",
      fr: "Excellent personnel, chambres propres et très bon petit déjeuner. Le personnel était très sympathique et prêt à répondre à mes demandes."
    }
  },
  {
    id: 5,
    name: "Bonaventure",
    location: { en: "United States", fr: "États-Unis" },
    date: "2024-12-18",
    score: "10/10",
    content: {
      en: "The staff was great. It was a pleasure to meet the owner who was down to earth and very hospitable. He went above and beyond to make sure we were comfortable.",
      fr: "Le personnel était super. C'était un plaisir de rencontrer le propriétaire qui était terre à terre et très hospitalier. Il s'est surpassé pour s'assurer que nous étions à l'aise."
    }
  }
];

export const TestimonialsSlider: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const t = {
    en: {
      subheading: "Testimonials",
      heading: "Guest Experiences",
    },
    fr: {
      subheading: "Témoignages",
      heading: "Expériences Clients",
    }
  }[language];

  const slide = (direction: 'next' | 'prev') => {
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= TESTIMONIALS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = TESTIMONIALS.length - 1;

    gsap.to(cardRef.current, {
      opacity: 0,
      x: direction === 'next' ? -50 : 50,
      duration: 0.4,
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.fromTo(cardRef.current, 
          { opacity: 0, x: direction === 'next' ? 50 : -50 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
        );
      }
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.testimonial-header', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });

      // Card Animation
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    // Force ScrollTrigger refresh after a short delay to handle reloads
    const timer = setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <SectionContainer id="testimonials" className="bg-slate-900 border-y border-gold/10">
      <div ref={containerRef} className="max-w-5xl mx-auto">
        <div className="testimonial-header text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">{t.subheading}</h2>
          <h3 className="text-5xl md:text-6xl luxury-heading text-white">{t.heading}</h3>
        </div>

        <div className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-center">
          <div 
            ref={cardRef}
            className="w-full bg-slate-950 p-8 md:p-20 border border-slate-800 luxury-shadow relative"
          >
            <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-10 h-10 md:w-16 md:h-16 text-gold/5 -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-1 text-gold mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-gold" />
                ))}
                <span className="ml-3 md:ml-4 text-white font-bold tracking-widest text-xs md:text-sm">{testimonial.score}</span>
              </div>

              <p className="text-xl md:text-3xl text-slate-200 font-light italic leading-relaxed mb-10 md:mb-12">
                "{testimonial.content[language]}"
              </p>

              <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-slate-800 pt-6 md:pt-8 gap-4 md:gap-6">
                <div>
                  <h4 className="text-lg md:text-xl text-gold font-luxury tracking-wide">{testimonial.name}</h4>
                  <p className="text-slate-500 uppercase tracking-widest text-[10px] md:text-xs mt-1">{testimonial.location[language]}</p>
                </div>
                <div className="text-slate-600 text-[10px] md:text-xs uppercase tracking-widest">
                  {new Date(testimonial.date).toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', { month: 'long', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <button 
              onClick={() => slide('prev')}
              aria-label="ChevronLeft"
              className="p-4 rounded-full border border-gold/20 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <button 
              onClick={() => slide('next')}
              aria-label="ChevronRight"
              className="p-4 rounded-full border border-gold/20 text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {TESTIMONIALS.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-500 ${i === currentIndex ? 'w-8 bg-gold' : 'w-4 bg-slate-800'}`}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
