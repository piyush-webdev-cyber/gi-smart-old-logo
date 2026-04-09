import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BachelorAIDHero from '@/components/BachelorAIDHero'
import ProgramOverview from '@/components/ProgramOverview'
import BAIDCurriculumSection from '@/components/BAIDCurriculumSection'
import BAIDSpecializations from '@/components/BAIDSpecializations'
import BAIDCampusMobility from '@/components/BAIDCampusMobility'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import LivingCosts from '@/components/LivingCosts'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BachelorAIDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BachelorAIDHero />
      <ProgramOverview 
        duration="3 Years (France)"
        location="Hybrid (Online + In-Lab + Studio)"
        eligibility="Grade XII"
        format="Trimester System"
        startDate="Fall 2026"
      />
      <BAIDCurriculumSection />
      <BAIDCampusMobility />
      <BAIDSpecializations />
      <AIDegreeAccreditation />
      <AdmissionsProcess />
      <LivingCosts />
      <ProgramScholarships />
      <ProgramCareers />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

