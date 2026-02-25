import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { BookingProvider } from '../context/BookingContext';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <BookingProvider>
        {children}
      </BookingProvider>
    </LanguageProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
