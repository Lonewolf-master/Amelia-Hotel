import React, { createContext, useContext, useState, ReactNode } from 'react';

export type BookingStep = 'stay' | 'rooms' | 'details' | 'confirm';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: number | null;
  guestName: string;
  guestEmail: string;
  specialRequests: string;
}

interface BookingContextType {
  currentStep: BookingStep;
  bookingData: BookingData;
  setStep: (step: BookingStep) => void;
  updateData: (data: Partial<BookingData>) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('stay');
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomId: null,
    guestName: '',
    guestEmail: '',
    specialRequests: '',
  });

  const setStep = (step: BookingStep) => setCurrentStep(step);
  
  const updateData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setCurrentStep('stay');
    setBookingData({
      checkIn: '',
      checkOut: '',
      guests: 1,
      roomId: null,
      guestName: '',
      guestEmail: '',
      specialRequests: '',
    });
  };

  return (
    <BookingContext.Provider value={{ currentStep, bookingData, setStep, updateData, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
