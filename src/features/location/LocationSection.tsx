import React, { useState } from 'react';
import { SectionContainer } from '../../components/common/SectionContainer';
import { Button } from '../../components/common/Button';
import { MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <SectionContainer id="location" className="bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">Location</h2>
          <h3 className="text-5xl md:text-6xl luxury-heading text-white mb-8">Where Luxury Meets Convenience</h3>
          <p className="text-slate-400 text-lg mb-8 font-light leading-relaxed">
            Situated in the prime district of Buea, Apart Hotel Amelia offers a 5-star experience just 4 km from the city centre. We provide a complimentary shuttle service for our guests, and are conveniently located near the Tiko Golf Club (17 km) and Botanic Garden (31 km).
          </p>
          <div className="flex items-start space-x-4 mb-12">
            <MapPin className="text-gold w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-lg">Amelia Heights</p>
              <p className="text-slate-500 italic">Street 12, Buea, South West Region, Cameroon</p>
            </div>
          </div>
          <Button 
            onClick={() => setShowMap(!showMap)}
            className="w-full md:w-auto"
          >
            {showMap ? 'Hide Map' : 'Find Our Location'}
          </Button>
        </div>

        <div className="relative aspect-square md:aspect-video bg-slate-900 border border-slate-800 luxury-shadow overflow-hidden group">
          {!showMap ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 grayscale group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gold uppercase tracking-[0.2em] font-semibold text-sm">Click the button to load interactive map</p>
              </div>
            </div>
          ) : (
            <div data-testid="map-container" className="w-full h-full">
              {/* Using an iframe for the prototype map */}
              <iframe
                title="Hotel Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Buea,Cameroon"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};
