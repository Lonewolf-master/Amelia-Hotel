import React, { useState } from 'react';
import { SectionContainer } from '../../components/common/SectionContainer';
import { ChevronDown, Info, Clock, Shield, Heart } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    id: 1,
    question: "Does Amelia Aparthotel have a pool?",
    answer: "Yes, this hotel has a pool. Our stunning outdoor swimming pool is located on the rooftop, offering panoramic views and is open all year round for our guests."
  },
  {
    id: 2,
    question: "What are the check-in and check-out times?",
    answer: "Check-in at Amelia Aparthotel is from 13:00 to 14:00, and check-out is available 24 hours until 11:00. Special requests can be made during the booking process."
  },
  {
    id: 3,
    question: "Is there a restaurant on site?",
    answer: "Yes, Amelia Aparthotel has one signature restaurant serving a variety of African and European dishes, along with continental, buffet, and à la carte breakfast options."
  },
  {
    id: 4,
    question: "How far is the hotel from the centre of Buea?",
    answer: "Amelia Aparthotel is located approximately 4 km from the centre of Buea, providing a perfect balance of central access and tranquil retreat."
  },
  {
    id: 5,
    question: "Is there a hot tub for guests?",
    answer: "Yes, we provide a hot tub/jacuzzi as part of our wellness facilities, along with a sauna and fitness centre."
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionContainer id="faq" className="bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium text-left">Helpful Info</h2>
            <h3 className="text-4xl md:text-6xl luxury-heading text-white">Frequently Asked</h3>
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
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-500 flex-shrink-0 ml-4 ${openId === faq.id ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-5 md:p-6 pt-0 text-slate-400 text-sm md:text-base font-light leading-relaxed italic border-t border-slate-800/50 mt-4 mx-5 md:mx-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-8 md:p-12 border border-gold/10 luxury-shadow self-start">
          <div className="flex items-center space-x-4 mb-8 md:mb-12">
            <Shield className="text-gold w-6 h-6 md:w-8 md:h-8" />
            <h3 className="text-2xl md:text-3xl text-white font-luxury">House Rules</h3>
          </div>

          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start space-x-4 md:space-x-6">
              <Clock className="text-gold w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold uppercase tracking-widest text-[10px] md:text-xs mb-2">Timing</h4>
                <p className="text-slate-400 text-xs md:text-sm">Check-in: 13:00 - 14:00</p>
                <p className="text-slate-400 text-xs md:text-sm">Check-out: Until 11:00 (24h available)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 md:space-x-6">
              <Heart className="text-gold w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold uppercase tracking-widest text-[10px] md:text-xs mb-2">Pets</h4>
                <p className="text-slate-400 text-xs md:text-sm italic">Pets are welcome on request. No extra charges apply.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 md:space-x-6">
              <Info className="text-gold w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold uppercase tracking-widest text-[10px] md:text-xs mb-2">Policies</h4>
                <p className="text-slate-400 text-xs md:text-sm">Children of all ages are welcome.</p>
                <p className="text-slate-400 text-xs md:text-sm">Parties and events are not allowed.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 p-5 md:p-6 border border-slate-800 bg-slate-950/50">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2">Need Help?</p>
            <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">
              For special requests or further assistance, please contact our 24-hour concierge.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
