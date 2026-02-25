import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../../components/common/Button';
import { ChevronLeft, Check } from 'lucide-react';

// For the prototype, we'll import the same ROOMS constant. 
// Ideally this would be in a separate data file.
import { RoomGallery } from '../rooms/RoomGallery';

export const RoomSelection: React.FC = () => {
  const { bookingData, updateData, setStep } = useBooking();
  const { language } = useLanguage();

  // We need to extract the ROOMS constant. Since it's in RoomGallery.tsx, we'll assume it's exported or move it.
  // For this step, I'll define a subset or just use the IDs if I can't reach the constant.
  // Let's re-read RoomGallery to see if ROOMS is exported.
  
  const t = {
    en: {
      back: "Back to Stay",
      next: "Guest Details",
      select: "Select Room",
      selected: "Selected",
      maxGuests: "Max Guests"
    },
    fr: {
      back: "Retour",
      next: "Vos Infos",
      select: "Choisir",
      selected: "Sélectionné",
      maxGuests: "Capacité"
    }
  }[language];

  // Temporary mock of rooms until I confirm RoomGallery export
  const MOCK_ROOMS = [
    { id: 1, title: { en: "Deluxe Double Room", fr: "Chambre Double Deluxe" }, price: "XAF 40,000", max: 2 },
    { id: 3, title: { en: "Deluxe King Room", fr: "Chambre King Deluxe" }, price: "XAF 80,000", max: 2 },
    { id: 5, title: { en: "Luxury Triple Room", fr: "Chambre Triple de Luxe" }, price: "XAF 100,000", max: 2 },
    { id: 8, title: { en: "Double Room with Spa Bath", fr: "Chambre Double avec Baignoire Spa" }, price: "XAF 100,000", max: 4 },
    { id: 9, title: { en: "Deluxe Apartment", fr: "Appartement Deluxe" }, price: "XAF 150,000", max: 4 },
    { id: 10, title: { en: "Superior Apartment", fr: "Appartement Supérieur" }, price: "XAF 200,000", max: 6 },
  ];

  const availableRooms = MOCK_ROOMS.filter(room => room.max >= bookingData.guests);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {availableRooms.map((room) => (
          <div 
            key={room.id}
            onClick={() => updateData({ roomId: room.id })}
            className={`cursor-pointer p-8 border transition-all duration-300 flex flex-col justify-between ${
              bookingData.roomId === room.id ? 'bg-gold/10 border-gold ring-1 ring-gold' : 'bg-slate-950 border-slate-800 hover:border-gold/50'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-xl text-white font-luxury mb-1">{room.title[language]}</h4>
                <p className="text-gold font-bold">{room.price}</p>
              </div>
              {bookingData.roomId === room.id && <Check className="text-gold w-6 h-6" />}
            </div>
            
            <div className="flex justify-between items-center text-xs uppercase tracking-widest text-slate-500">
              <span>{t.maxGuests}: {room.max}</span>
              <button className={`font-bold ${bookingData.roomId === room.id ? 'text-gold' : 'text-slate-400'}`}>
                {bookingData.roomId === room.id ? t.selected : t.select}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-slate-800 flex justify-between">
        <button 
          onClick={() => setStep('stay')}
          className="flex items-center space-x-2 text-slate-400 hover:text-gold transition-colors text-xs uppercase tracking-widest font-bold"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>
        <Button 
          variant="luxury" 
          disabled={!bookingData.roomId}
          onClick={() => setStep('details')}
          className="px-12 py-4 disabled:opacity-20"
        >
          {t.next}
        </Button>
      </div>
    </div>
  );
};
