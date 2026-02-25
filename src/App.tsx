import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './features/hero/Hero'
import RoomGallery from './features/rooms/RoomGallery'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main>
        <Hero />
        <RoomGallery />
      </main>

      <Footer />
    </div>
  )
}

export default App



