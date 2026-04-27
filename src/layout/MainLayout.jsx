import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Location from '../components/Location'
import MenuSection from '../components/Menu/MenuSection'
import Navbar from '../components/Navbar'
import Signature from '../components/Signature'
import Testimonial from '../components/Testimonial'
import { MessageCircle } from 'lucide-react'
import useGSAPAnimation from '../hooks/useGSAPAnimation'
import { WHATSAPP_LINK } from '../utils/constants'

function MainLayout() {
  useGSAPAnimation()

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Signature />
        <Gallery />
        <Location />
        <Testimonial />
        <CTA />
      </main>
      <Footer />

      <a
        className="floating-whatsapp-cta"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Reserve table via WhatsApp"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>Reserve via WhatsApp</span>
      </a>
    </div>
  )
}

export default MainLayout
