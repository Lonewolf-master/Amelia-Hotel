import React from 'react';
import { render, screen, act } from '../test-utils';
import { BookingProvider, useBooking } from '../../context/BookingContext';

const TestComponent = () => {
  const { currentStep, setStep } = useBooking();
  return (
    <div>
      <span data-testid="current-step">{currentStep}</span>
      <button onClick={() => setStep('rooms')}>Go to Rooms</button>
    </div>
  );
};

describe('BookingContext', () => {
  it('initializes with stay step', () => {
    render(
      <BookingProvider>
        <TestComponent />
      </BookingProvider>
    );
    expect(screen.getByTestId('current-step')).toHaveTextContent('stay');
  });

  it('updates current step correctly', async () => {
    render(
      <BookingProvider>
        <TestComponent />
      </BookingProvider>
    );
    
    act(() => {
      screen.getByText('Go to Rooms').click();
    });
    
    expect(screen.getByTestId('current-step')).toHaveTextContent('rooms');
  });
});
