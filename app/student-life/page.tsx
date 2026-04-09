import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StudentLifeHero from '@/components/StudentLifeHero'
import KaleidoscopeDiversity from '@/components/KaleidoscopeDiversity'
import LifeAtTetr from '@/components/LifeAtTetr'
import LeadingBeyondClassroom from '@/components/LeadingBeyondClassroom'
import CareerLabsStudentLife from '@/components/CareerLabsStudentLife'
import MeetTheTribe from '@/components/MeetTheTribe'
import GlobalHomeAway from '@/components/GlobalHomeAway'
import NasContentFellowship from '@/components/NasContentFellowship'

export default function StudentLifePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <StudentLifeHero />
      <KaleidoscopeDiversity />
      <LifeAtTetr />
      <LeadingBeyondClassroom />
      <CareerLabsStudentLife />
      <MeetTheTribe />
      <GlobalHomeAway />
      <NasContentFellowship />
      <Footer />
    </main>
  )
}

