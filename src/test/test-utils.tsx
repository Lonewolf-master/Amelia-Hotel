import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { BookingProvider } from '../context/BookingContext';
import { HelmetProvider } from 'react-helmet-async';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BookingProvider>
          {children}
        </BookingProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
