import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './features/hero/Hero'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  )
}

export default App


