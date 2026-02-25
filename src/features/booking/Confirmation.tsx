import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useBooking } from '../../context/BookingContext';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/common/Button';
import { CheckCircle, Calendar, User, Home } from 'lucide-react';

export const Confirmation: React.FC = () => {
  const { bookingData, resetBooking } = useBooking();
  const { language } = useLanguage();
  const successRef = useRef<HTMLDivElement>(null);

  const t = {
    en: {
      heading: "Reservation Confirmed",
      subheading: "We look forward to welcoming you to Apart Hotel Amelia.",
      stay: "Stay Details",
      room: "Room",
      guest: "Guest",
      done: "Return to Home",
      summary: "A confirmation email has been sent to"
    },
    fr: {
      heading: "Réservation Confirmée",
      subheading: "Nous sommes impatients de vous accueillir à l'Apart Hôtel Amelia.",
      stay: "Détails du Séjour",
      room: "Chambre",
      guest: "Client",
      done: "Retour à l'Accueil",
      summary: "Un e-mail de confirmation a été envoyé à"
    }
  }[language];

  useEffect(() => {
    if (successRef.current) {
      gsap.fromTo(successRef.current.querySelectorAll('.animate-item'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }
      );
    }
  }, []);

  return (
    <div ref={successRef} className="text-center space-y-12">
      <div className="animate-item">
        <CheckCircle className="w-24 h-24 text-gold mx-auto mb-8" />
        <h3 className="text-4xl md:text-5xl luxury-heading text-white mb-4">{t.heading}</h3>
        <p className="text-slate-400 text-lg font-light italic">{t.subheading}</p>
      </div>

      <div className="animate-item grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-950 p-8 border border-slate-800 text-left">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gold text-xs uppercase tracking-widest font-bold">
            <Calendar className="w-3 h-3" />
            <span>{t.stay}</span>
          </div>
          <p className="text-white text-sm">{bookingData.checkIn} — {bookingData.checkOut}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gold text-xs uppercase tracking-widest font-bold">
            <Home className="w-3 h-3" />
            <span>{t.room}</span>
          </div>
          <p className="text-white text-sm">Room Category {bookingData.roomId}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gold text-xs uppercase tracking-widest font-bold">
            <User className="w-3 h-3" />
            <span>{t.guest}</span>
          </div>
          <p className="text-white text-sm">{bookingData.guestName}</p>
        </div>
      </div>

      <div className="animate-item pt-8 space-y-8">
        <p className="text-slate-500 text-sm italic">
          {t.summary} <span className="text-gold font-bold">{bookingData.guestEmail}</span>
        </p>
        <Button variant="luxury" onClick={resetBooking} className="px-12 py-4">
          {t.done}
        </Button>
      </div>
    </div>
  );
};
