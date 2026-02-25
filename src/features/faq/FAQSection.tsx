import React, { useState } from 'react';
import { SectionContainer } from '../../components/common/SectionContainer';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, Info, Clock, Shield, Heart } from 'lucide-react';

interface FAQ {
  id: number;
  question: Record<'en' | 'fr', string>;
  answer: Record<'en' | 'fr', string>;
}

const FAQS: FAQ[] = [
  {
    id: 1,
    question: { en: "Does Amelia Aparthotel have a pool?", fr: "L'Amelia Aparthotel dispose-t-il d'une piscine?" },
    answer: {
      en: "Yes, this hotel has a pool. Our stunning outdoor swimming pool is located on the rooftop, offering panoramic views and is open all year round for our guests.",
      fr: "Oui, cet hôtel dispose d'une piscine. Notre superbe piscine extérieure est située sur le toit, offrant des vues panoramiques et est ouverte toute l'année pour nos clients."
    }
  },
  {
    id: 2,
    question: { en: "What type of room can I book at Amelia Aparthotel?", fr: "Quel type de chambre puis-je réserver à l'Amelia Aparthotel?" },
    answer: {
      en: "Room options at Amelia Aparthotel include: Double, Twin, Studio, Apartment, and Triple rooms. Each category is designed with luxury and comfort in mind.",
      fr: "Les options de chambres à l'Amelia Aparthotel comprennent: des chambres doubles, lits jumeaux, studios, appartements et triples. Chaque catégorie est conçue dans un souci de luxe et de confort."
    }
  },
  {
    id: 3,
    question: { en: "What are the check-in and check-out times?", fr: "Quelles sont les heures d'arrivée et de départ?" },
    answer: {
      en: "Check-in at Amelia Aparthotel is from 13:00 to 14:00, and check-out is available 24 hours until 11:00. Special requests can be made during the booking process.",
      fr: "L'enregistrement à l'Amelia Aparthotel s'effectue de 13h00 à 14h00 et le départ est possible 24h/24 jusqu'à 11h00. Des demandes spéciales peuvent être faites lors de la réservation."
    }
  },
  {
    id: 4,
    question: { en: "Is there a restaurant on site?", fr: "Y a-t-il un restaurant sur place?" },
    answer: {
      en: "Yes, Amelia Aparthotel has a signature restaurant serving African and American cuisines. Guests can enjoy continental, buffet, and à la carte breakfast options.",
      fr: "Oui, l'Amelia Aparthotel dispose d'un restaurant signature servant une cuisine africaine et américaine. Les clients peuvent profiter d'options de petit-déjeuner continental, buffet et à la carte."
    }
  },
  {
    id: 5,
    question: { en: "How far is the hotel from the centre of Buea?", fr: "À quelle distance se trouve l'hôtel du centre de Buea?" },
    answer: {
      en: "Amelia Aparthotel is located approximately 4 km from the centre of Buea, providing a perfect balance of central access and tranquil retreat.",
      fr: "L'Amelia Aparthotel est situé à environ 4 km du centre de Buea, offrant un équilibre parfait entre accès central et retraite tranquille."
    }
  },
  {
    id: 6,
    question: { en: "Is there a hot tub for guests?", fr: "Y a-t-il un bain à remous pour les clients?" },
    answer: {
      en: "Yes, we provide a hot tub/jacuzzi as part of our wellness facilities, along with a sauna and fitness centre.",
      fr: "Oui, nous proposons un bain à remous/jacuzzi dans le cadre de nos installations de bien-être, ainsi qu'un sauna et un centre de remise en forme."
    }
  }
];

export const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(null);

  const t = {
    en: {
      subheading: "Helpful Info",
      heading: "Frequently Asked",
      rulesHeading: "House Rules",
      timing: "Timing",
      pets: "Pets",
      policies: "Policies",
      help: "Need Help?",
      helpText: "For special requests or further assistance, please contact our 24-hour concierge.",
      checkIn: "Check-in: 13:00 - 14:00",
      checkOut: "Check-out: Until 11:00 (24h available)",
      petText: "Pets are welcome on request. No extra charges apply.",
      policyText1: "Children of all ages are welcome.",
      policyText2: "Parties and events are not allowed."
    },
    fr: {
      subheading: "Infos Utiles",
      heading: "Questions Fréquentes",
      rulesHeading: "Règles de la Maison",
      timing: "Horaires",
      pets: "Animaux",
      policies: "Politiques",
      help: "Besoin d'aide?",
      helpText: "Pour des demandes spéciales ou une assistance supplémentaire, veuillez contacter notre concierge 24h/24.",
      checkIn: "Arrivée: 13:00 - 14:00",
      checkOut: "Départ: Jusqu'à 11:00 (24h disponible)",
      petText: "Les animaux sont acceptés sur demande. Sans frais supplémentaires.",
      policyText1: "Les enfants de tous âges sont les bienvenus.",
      policyText2: "Les fêtes et événements ne sont pas autorisés."
    }
  }[language];

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionContainer id="faq" className="bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium text-left">{t.subheading}</h2>
            <h3 className="text-4xl md:text-6xl luxury-heading text-white">{t.heading}</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div 
                key={faq.id}
                className="border border-slate-800 bg-slate-900 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 md:p-6 text-left flex justify-between items-center group"
                >
                  <span className="text-base md:text-lg text-slate-200 font-luxury tracking-wide group-hover:text-gold transition-colors">
                    {faq.question[language]}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-500 flex-shrink-0 ml-4 ${openId === faq.id ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-5 md:p-6 pt-0 text-slate-400 text-sm md:text-base font-light leading-relaxed italic border-t border-slate-800/50 mt-4 mx-5 md:mx-6">
                    {faq.answer[language]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-8 md:p-12 border border-gold/10 luxury-shadow self-start">
          <div className="flex items-center space-x-4 mb-8 md:mb-12">
            <Shield className="text-gold w-6 h-6 md:w-8 md:h-8" />
            <h3 className="text-2xl md:text-3xl text-white font-luxury">{t.rulesHeading}</h3>
          </div>

          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start space-x-4 md:space-x-6">
              <Clock className="text-gold w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold uppercase tracking-widest text-[10px] md:text-xs mb-2">{t.timing}</h4>
                <p className="text-slate-400 text-xs md:sm">{t.checkIn}</p>
                <p className="text-slate-400 text-xs md:sm">{t.checkOut}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 md:space-x-6">
              <Heart className="text-gold w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold uppercase tracking-widest text-[10px] md:text-xs mb-2">{t.pets}</h4>
                <p className="text-slate-400 text-xs md:sm italic">{t.petText}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 md:space-x-6">
              <Info className="text-gold w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold uppercase tracking-widest text-[10px] md:text-xs mb-2">{t.policies}</h4>
                <p className="text-slate-400 text-xs md:sm">{t.policyText1}</p>
                <p className="text-slate-400 text-xs md:sm">{t.policyText2}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 p-5 md:p-6 border border-slate-800 bg-slate-950/50">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">{t.help}</p>
            <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">
              {t.helpText}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
