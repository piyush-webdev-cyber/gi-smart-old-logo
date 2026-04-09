import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutTopHero from '@/components/AboutTopHero'
import AboutHero from '@/components/AboutHero'

import AmbitiousMission from '@/components/AmbitiousMission'
import ContactSection from '@/components/ContactSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutTopHero />
      <AboutHero />

      <AmbitiousMission />
      <ContactSection />
      <Footer />
    </main>
  )
}

