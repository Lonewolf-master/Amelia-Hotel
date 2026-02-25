import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main className="pt-32 min-h-[80vh] flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl luxury-heading text-center">
          Apart Hotel Amelia
        </h1>
      </main>

      <Footer />
    </div>
  )
}

export default App

