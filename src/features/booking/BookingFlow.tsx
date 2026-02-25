import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useBooking } from '../../context/BookingContext';
import { useLanguage } from '../../context/LanguageContext';
import { SectionContainer } from '../../components/common/SectionContainer';
import { StayDetails } from './StayDetails';
import { RoomSelection } from './RoomSelection';

export const BookingFlow: React.FC = () => {
  const { currentStep } = useBooking();
  const { language } = useLanguage();
  const stepContainerRef = useRef<HTMLDivElement>(null);

  const t = {
    en: {
      stay: "Stay Details",
      rooms: "Choose Room",
      details: "Your Info",
      confirm: "Success"
    },
    fr: {
      stay: "Détails",
      rooms: "Choisir Chambre",
      details: "Vos Infos",
      confirm: "Succès"
    }
  }[language];

  useEffect(() => {
    // Transition animation when step changes
    if (stepContainerRef.current) {
      gsap.fromTo(stepContainerRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [currentStep]);

  return (
    <SectionContainer id="book" className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -z-0" />
          {(['stay', 'rooms', 'details', 'confirm'] as const).map((step, idx) => (
            <div 
              key={step}
              className={`relative z-10 flex flex-col items-center gap-3`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                currentStep === step ? 'bg-gold border-gold text-slate-950 scale-110' : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}>
                {idx + 1}
              </div>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                currentStep === step ? 'text-gold' : 'text-slate-600'
              }`}>
                {t[step]}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div ref={stepContainerRef} className="bg-slate-900 border border-slate-800 p-8 md:p-16 luxury-shadow min-h-[400px]">
          {currentStep === 'stay' && <StayDetails />}
          {currentStep === 'rooms' && <RoomSelection />}
          {currentStep === 'details' && <div className="text-white">Guest Details Component (Pending)</div>}
          {currentStep === 'confirm' && <div className="text-white">Confirmation Component (Pending)</div>}
        </div>
      </div>
    </SectionContainer>
  );
};
