import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './features/hero/Hero'
import { RoomGallery } from './features/rooms/RoomGallery'
import { LocationSection } from './features/location/LocationSection'
import { AmenitiesShowcase } from './features/amenities/AmenitiesShowcase'
import { TestimonialsSlider } from './features/testimonials/TestimonialsSlider'
import { ContactForm } from './features/contact/ContactForm'
import { WhatsAppButton } from './components/common/WhatsAppButton'

export function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main>
        <Hero />
        <RoomGallery />
        <AmenitiesShowcase />
        <TestimonialsSlider />
        <LocationSection />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
