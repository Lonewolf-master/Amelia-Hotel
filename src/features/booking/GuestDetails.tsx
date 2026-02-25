import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/common/Button';
import { ChevronLeft, User, Mail, MessageSquare } from 'lucide-react';

export const GuestDetails: React.FC = () => {
  const { bookingData, updateData, setStep } = useBooking();
  const { language } = useLanguage();
  const [errors, setErrors] = useState<{ guestName?: string; guestEmail?: string }>({});

  const t = {
    en: {
      back: "Back to Rooms",
      next: "Confirm Reservation",
      name: "Full Name",
      email: "Email Address",
      requests: "Special Requests (Optional)",
      placeholderName: "Enter your full name",
      placeholderEmail: "Enter your email",
      placeholderRequests: "Any specific needs or requests?",
      errorRequired: "is required",
      errorInvalid: "is invalid"
    },
    fr: {
      back: "Retour",
      next: "Confirmer la Réservation",
      name: "Nom Complet",
      email: "Adresse E-mail",
      requests: "Demandes Spéciales (Optionnel)",
      placeholderName: "Entrez votre nom complet",
      placeholderEmail: "Entrez votre e-mail",
      placeholderRequests: "Des besoins spécifiques ?",
      errorRequired: "est requis",
      errorInvalid: "est invalide"
    }
  }[language];

  const handleNext = () => {
    const newErrors: { guestName?: string; guestEmail?: string } = {};
    if (!bookingData.guestName) newErrors.guestName = `${t.name} ${t.errorRequired}`;
    if (!bookingData.guestEmail) {
      newErrors.guestEmail = `${t.email} ${t.errorRequired}`;
    } else if (!/\S+@\S+\.\S+/.test(bookingData.guestEmail)) {
      newErrors.guestEmail = `${t.email} ${t.errorInvalid}`;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStep('confirm');
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-10">
        <div className="space-y-4">
          <label className="flex items-center space-x-3 text-xs uppercase tracking-widest text-gold font-bold">
            <User className="w-4 h-4" />
            <span>{t.name}</span>
          </label>
          <input 
            type="text"
            value={bookingData.guestName}
            onChange={(e) => updateData({ guestName: e.target.value })}
            placeholder={t.placeholderName}
            className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-gold outline-none transition-colors"
          />
          {errors.guestName && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{errors.guestName}</p>}
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3 text-xs uppercase tracking-widest text-gold font-bold">
            <Mail className="w-4 h-4" />
            <span>{t.email}</span>
          </label>
          <input 
            type="email"
            value={bookingData.guestEmail}
            onChange={(e) => updateData({ guestEmail: e.target.value })}
            placeholder={t.placeholderEmail}
            className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-gold outline-none transition-colors"
          />
          {errors.guestEmail && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{errors.guestEmail}</p>}
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3 text-xs uppercase tracking-widest text-gold font-bold">
            <MessageSquare className="w-4 h-4" />
            <span>{t.requests}</span>
          </label>
          <textarea 
            rows={4}
            value={bookingData.specialRequests}
            onChange={(e) => updateData({ specialRequests: e.target.value })}
            placeholder={t.placeholderRequests}
            className="w-full bg-slate-950 border border-slate-800 p-5 text-white focus:border-gold outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex justify-between">
        <button 
          onClick={() => setStep('rooms')}
          className="flex items-center space-x-2 text-slate-400 hover:text-gold transition-colors text-xs uppercase tracking-widest font-bold"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>
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
