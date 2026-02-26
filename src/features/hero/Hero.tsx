import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../../components/common/Button';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      welcome: "Welcome to",
      exquisite: "Exquisite",
      living: "Living",
      description: "Get the celebrity treatment with world-class service at Amelia Aparthotel.",
      details: [
        {
          title: "Elegant Accommodation",
          text: "Amelia Aparthotel in Buea offers a 5-star experience with a rooftop swimming pool, sauna, fitness centre, terrace, restaurant, bar, and free WiFi."
        },
        {
          title: "Comfortable Amenities",
          text: "Enjoy air-conditioning, balconies, bathrobes, spa baths, private bathrooms, tea/coffee makers, and 24-hour front desk services."
        },
        {
          title: "Prime Location",
          text: "Located 70 km from Douala Airport, near Tiko Golf Club (17 km) and Botanic Garden (31 km). Highly rated by guests."
        }
      ]
    },
    fr: {
      welcome: "Bienvenue à",
      exquisite: "Vie",
      living: "Exquise",
      description: "Bénéficiez d'un traitement de célébrité avec un service de classe mondiale à l'Amelia Aparthotel.",
      details: [
        {
          title: "Hébergement Élégant",
          text: "L'Amelia Aparthotel à Buea propose une expérience 5 étoiles avec piscine sur le toit, sauna, salle de sport, restaurant et WiFi gratuit."
        },
        {
          title: "Équipements Confortables",
          text: "Profitez de la climatisation, de balcons, de peignoirs, de baignoires spa et d'une réception ouverte 24h/24."
        },
        {
          title: "Emplacement Privilégié",
          text: "Situé à 70 km de l'aéroport de Douala, à proximité du club de golf de Tiko (17 km) et du jardin botanique (31 km)."
        }
      ]
    }
  };

  const t = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
      
      tl.fromTo(titleRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, delay: 0.5 }
      )
      .fromTo(subtitleRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1 }, 
        '-=1'
      )
      .fromTo('.hero-info-grid', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1 }, 
        '-=0.8'
      );

      gsap.to('.hero-bg-container', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Container */}
      <div className="hero-bg-container absolute inset-0 z-0 scale-110">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950 z-10" />
        
        <video 
          autoPlay
          loop 
          muted 
          playsInline
          poster="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-full object-cover"
        >
          <source 
            src="https://videos.pexels.com/video-files/3205736/3205736-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className="relative z-20 text-center px-8 max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-8xl mb-8 luxury-heading flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.6em] mb-6 text-gold font-sans font-medium">{t.welcome}</span>
          <span className="flex flex-wrap justify-center gap-x-6">
            <span>{t.exquisite}</span>
            <span className="text-white/90">{t.living}</span>
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-gold max-w-3xl mx-auto mb-16 text-lg md:text-2xl font-luxury italic tracking-wide"
        >
          {t.description}
        </p>

        <div className="hero-info-grid grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-gold/20 pt-12">
          {t.details.map((item, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-gold text-xs uppercase tracking-[0.3em] font-bold">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};
