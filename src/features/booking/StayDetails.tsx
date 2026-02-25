import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/common/Button';
import { Calendar, Users } from 'lucide-react';

export const StayDetails: React.FC = () => {
  const { bookingData, updateData, setStep } = useBooking();
  const { language } = useLanguage();
  const [localErrors, setLocalErrors] = useState<{ checkIn?: string; checkOut?: string }>({});

  const t = {
    en: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests",
      next: "Select Room",
      errorDates: "Check-out must be after check-in",
      errorRequired: "Date is required"
    },
    fr: {
      checkIn: "Arrivée",
      checkOut: "Départ",
      guests: "Voyageurs",
      next: "Choisir Chambre",
      errorDates: "Le départ doit être après l'arrivée",
      errorRequired: "Date requise"
    }
  }[language];

  const handleNext = () => {
    const errors: { checkIn?: string; checkOut?: string } = {};
    if (!bookingData.checkIn) errors.checkIn = t.errorRequired;
    if (!bookingData.checkOut) errors.checkOut = t.errorRequired;
    
    if (bookingData.checkIn && bookingData.checkOut) {
      if (new Date(bookingData.checkOut) <= new Date(bookingData.checkIn)) {
        errors.checkOut = t.errorDates;
      }
    }

    if (Object.keys(errors).length > 0) {
      setLocalErrors(errors);
      return;
    }

    setStep('rooms');
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <label className="flex items-center space-x-3 text-xs uppercase tracking-widest text-gold font-bold">
            <Calendar className="w-4 h-4" />
            <span>{t.checkIn}</span>
          </label>
          <input 
            type="date"
            value={bookingData.checkIn}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => updateData({ checkIn: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-gold outline-none transition-colors"
          />
          {localErrors.checkIn && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{localErrors.checkIn}</p>}
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3 text-xs uppercase tracking-widest text-gold font-bold">
            <Calendar className="w-4 h-4" />
            <span>{t.checkOut}</span>
          </label>
          <input 
            type="date"
            value={bookingData.checkOut}
            min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
            onChange={(e) => updateData({ checkOut: e.target.value })}
            className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-gold outline-none transition-colors"
          />
          {localErrors.checkOut && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{localErrors.checkOut}</p>}
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3 text-xs uppercase tracking-widest text-gold font-bold">
            <Users className="w-4 h-4" />
            <span>{t.guests}</span>
          </label>
          <select 
            value={bookingData.guests}
            onChange={(e) => updateData({ guests: parseInt(e.target.value) })}
            className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-gold outline-none transition-colors appearance-none cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n} {language === 'en' ? (n === 1 ? 'Guest' : 'Guests') : (n === 1 ? 'Voyageur' : 'Voyageurs')}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex justify-end">
        <Button 
          variant="luxury" 
          onClick={handleNext}
          className="px-12 py-4"
        >
          {t.next}
        </Button>
      </div>
    </div>
  );
};
