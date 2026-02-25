import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { LanguageProvider } from './context/LanguageContext'
import { BookingProvider } from './context/BookingContext'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BookingProvider>
        <App />
      </BookingProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
