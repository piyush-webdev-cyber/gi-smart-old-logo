import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BachelorAIHero from '@/components/BachelorAIHero'
import ProgramOverview from '@/components/ProgramOverview'
import AICurriculumSection from '@/components/AICurriculumSection'
import AIDegreeAccreditation from '@/components/AIDegreeAccreditation'
import AIProgramSpecializations from '@/components/AIProgramSpecializations'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import LivingCosts from '@/components/LivingCosts'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BachelorScienceAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BachelorAIHero />
      <ProgramOverview
        duration="3 Years"
        format="9 Terms (3 per Year)"
      />
      <AICurriculumSection />
      <AIDegreeAccreditation />
      <AIProgramSpecializations />
      <AdmissionsProcess />
      <LivingCosts />
      <ProgramScholarships />
      <ProgramCareers />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

