import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../../context/LanguageContext';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  description: string;
  price: string;
  onBookNow: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  title,
  description,
  price,
  onBookNow
}) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const ctx = gsap.context(() => {
        gsap.fromTo(modalRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
        gsap.fromTo(contentRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power3.out' }
        );
      });
      return () => {
        ctx.revert();
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-12"
    >
      <button 
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-8 right-8 text-slate-400 hover:text-gold transition-colors p-2"
      >
        <X className="w-8 h-8" />
      </button>

      <div 
        ref={contentRef}
        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
      >
        {/* Image Slider */}
        <div className="lg:col-span-2 relative aspect-video bg-slate-900 border border-slate-800 overflow-hidden group">
          <img 
            src={images[currentIndex]} 
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-slate-950/50 text-white hover:text-gold transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-slate-950/50 text-white hover:text-gold transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1 transition-all duration-300 ${i === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gold text-xs uppercase tracking-[0.3em] font-bold">
              <Home className="w-4 h-4" />
              <span>Room Gallery</span>
            </div>
            <h3 className="text-4xl md:text-5xl luxury-heading text-white">{title}</h3>
            <p className="text-slate-400 text-lg font-light italic leading-relaxed">
              {description}
            </p>
          </div>

          <div className="pt-8 border-t border-slate-800 space-y-8">
            <div className="flex justify-between items-end">
              <span className="text-slate-500 uppercase tracking-widest text-xs">Starting from</span>
              <span className="text-gold text-3xl font-bold tracking-tighter">{price}</span>
            </div>
            
            <Button 
              variant="luxury" 
              onClick={onBookNow}
              className="w-full py-5 text-sm uppercase tracking-[0.2em]"
            >
              {language === 'en' ? 'Book This Room' : 'Réserver cette chambre'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
