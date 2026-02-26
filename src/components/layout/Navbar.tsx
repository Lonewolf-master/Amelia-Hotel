import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

gsap.registerPlugin(ScrollToPlugin);

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: targetId, offsetY: 80 },
      ease: 'power4.inOut'
    });
  };

  const navLinks = {
    en: [
      { label: 'Rooms', href: '#rooms' },
      { label: 'Location', href: '#location' },
      { label: 'Contact', href: '#contact' },
    ],
    fr: [
      { label: 'Chambres', href: '#rooms' },
      { label: 'Emplacement', href: '#location' },
      { label: 'Contact', href: '#contact' },
    ]
  };

  const currentLinks = navLinks[language];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-gold/20 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-2xl font-luxury tracking-[0.2em] text-gold uppercase cursor-pointer"
          onClick={(e) => handleNavClick(e as any, '#root')}
        >
          Amelia
        </div>
        
        <div className="hidden md:flex space-x-12 uppercase tracking-widest text-xs font-semibold text-slate-300">
          {currentLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center border-r border-gold/20 pr-6 mr-6 space-x-3 text-[10px] tracking-widest font-bold">
            <button 
              onClick={() => setLanguage('en')}
              className={`${language === 'en' ? 'text-gold' : 'text-slate-500'} transition-colors cursor-pointer`}
            >
              EN
            </button>
            <span className="text-slate-700">|</span>
            <button 
              onClick={() => setLanguage('fr')}
              className={`${language === 'fr' ? 'text-gold' : 'text-slate-500'} transition-colors cursor-pointer`}
            >
              FR
            </button>
          </div>
          <Button 
            onClick={(e) => handleNavClick(e as any, '#book')}
            className="!py-2 !px-6 text-xs"
          >
            {language === 'en' ? 'Book Now' : 'Réserver'}
          </Button>
        </div>
      </div>
    </nav>
  );
};
