import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProgramsHero from '@/components/ProgramsHero'
import Programs from '@/components/Programs'

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProgramsHero />
      <Programs />
      <Footer />
    </main>
  )
}

