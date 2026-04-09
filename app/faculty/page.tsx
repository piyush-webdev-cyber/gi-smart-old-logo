import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FacultyHero from '@/components/FacultyHero'
import FacultySection from '@/components/FacultySection'
import FacultyMentors from '@/components/FacultyMentors'
import FacultyMentorship from '@/components/FacultyMentorship'
import LessonsFromBest from '@/components/LessonsFromBest'

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FacultyHero />
      <FacultySection />
      <FacultyMentors />
      <FacultyMentorship />
      <LessonsFromBest />
      <Footer />
    </main>
  )
}

