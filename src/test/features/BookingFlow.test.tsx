import React from 'react';
import { render, screen, fireEvent, act } from '../test-utils';
import { BookingProvider, useBooking } from '../../context/BookingContext';
import { BookingFlow } from '../../features/booking/BookingFlow';

const TestComponent = () => {
  const { currentStep, setStep } = useBooking();
  return (
    <div>
      <span data-testid="current-step">{currentStep}</span>
      <button onClick={() => setStep('rooms')}>Go to Rooms</button>
    </div>
  );
};

describe('BookingFlow', () => {
  it('renders stay details initially', () => {
    render(<BookingFlow />);
    expect(screen.getByText(/Check-in/i)).toBeInTheDocument();
  });

  it('validates dates before moving to rooms', async () => {
    render(<BookingFlow />);
    const nextBtn = screen.getByText(/Select Room/i);
    fireEvent.click(nextBtn);
    
    // Should show error because dates are missing
    expect(screen.getAllByText(/Date is required/i).length).toBeGreaterThan(0);
  });
});

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
