import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <Footer />
    </main>
  )
}

