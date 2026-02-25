import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface RatingCategory {
  label: Record<'en' | 'fr', string>;
  score: number;
}

const CATEGORIES: RatingCategory[] = [
  { label: { en: "Staff", fr: "Personnel" }, score: 9.1 },
  { label: { en: "Facilities", fr: "Installations" }, score: 9.3 },
  { label: { en: "Cleanliness", fr: "Propreté" }, score: 9.0 },
  { label: { en: "Comfort", fr: "Confort" }, score: 9.3 },
  { label: { en: "Value for money", fr: "Rapport qualité-prix" }, score: 8.8 },
  { label: { en: "Location", fr: "Emplacement" }, score: 9.0 },
];

export const TrustScore: React.FC = () => {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const t = {
    en: {
      fabulous: "Fabulous",
      reviews: "based on 23 reviews",
    },
    fr: {
      fabulous: "Fabuleux",
      reviews: "basé sur 23 avis",
    }
  }[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.score-bar', {
        width: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 luxury-shadow">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex items-center justify-center w-24 h-24 bg-gold text-slate-950 text-4xl font-bold rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          8.7
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-3xl text-white font-luxury tracking-wide">{t.fabulous}</h4>
          <p className="text-slate-500 uppercase tracking-widest text-xs mt-2">{t.reviews}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {CATEGORIES.map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between text-xs uppercase tracking-widest">
              <span className="text-slate-300">{cat.label[language]}</span>
              <span className="text-gold font-bold">{cat.score}</span>
            </div>
            <div className="h-1 bg-slate-800 w-full overflow-hidden">
              <div 
                className="score-bar h-full bg-gold" 
                style={{ width: `${(cat.score / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
