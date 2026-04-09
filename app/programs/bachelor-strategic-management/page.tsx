import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BScStrategicHero from '@/components/BScStrategicHero'
import ProgramOverview from '@/components/ProgramOverview'
import BScStrategicCurriculumSection from '@/components/BScStrategicCurriculumSection'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BScStrategicManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BScStrategicHero />
      <ProgramOverview 
        duration="3 Years"
        location="Multi-Campus Global"
        eligibility="Grade XII"
        format="9 Terms (3 per Year)"
        startDate="Fall 2026"
      />
      <BScStrategicCurriculumSection />
      <AIDegreeAccreditation />
      <AdmissionsProcess />
      <ProgramScholarships />
      <ProgramCareers />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

