import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { LanguageProvider } from './context/LanguageContext'
import { BookingProvider } from './context/BookingContext'
import { HelmetProvider } from 'react-helmet-async'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BookingProvider>
          <App />
        </BookingProvider>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
