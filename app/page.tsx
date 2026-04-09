import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Curriculum from '@/components/Curriculum'
import ExplorePrograms from '@/components/ExplorePrograms'
import FourCampuses from '@/components/FourCampuses'
import WhyChooseGI from '@/components/WhyChooseGI'
import AllInOneJourney from '@/components/AllInOneJourney'
import EventsAtTetr from '@/components/EventsAtTetr'
import ScholarshipsSection from '@/components/ScholarshipsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden max-w-full">
      <Navbar />
      <Hero />
      <Curriculum />
      <ExplorePrograms />
      <FourCampuses />
      <WhyChooseGI />
      <AllInOneJourney />
      <EventsAtTetr />
      <ScholarshipsSection />
      <Footer />
    </main>
  )
}
