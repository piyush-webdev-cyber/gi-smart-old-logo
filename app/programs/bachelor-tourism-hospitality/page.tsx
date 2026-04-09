import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BBATourismHero from '@/components/BBATourismHero'
import ProgramOverview from '@/components/ProgramOverview'
import BBATourismCurriculumSection from '@/components/BBATourismCurriculumSection'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BBATourismHospitalityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BBATourismHero />
      <ProgramOverview 
        duration="3 Years"
        location="Multi-Campus Global"
        eligibility="Grade XII"
        format="9 Terms (3 per Year)"
        startDate="Fall 2026"
      />
      <BBATourismCurriculumSection />
      <AIDegreeAccreditation />
      <AdmissionsProcess />
      <ProgramScholarships />
      <ProgramCareers />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

