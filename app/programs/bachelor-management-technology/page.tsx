import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BachelorProgramHero from '@/components/BachelorProgramHero'
import CurriculumSection from '@/components/CurriculumSection'
import DegreeAccreditation from '@/components/DegreeAccreditation'
import ProgramSpecializations from '@/components/ProgramSpecializations'
import AdmissionsProcess from '@/components/AdmissionsProcess'
import LivingCosts from '@/components/LivingCosts'
import ProgramScholarships from '@/components/ProgramScholarships'
import ProgramCareers from '@/components/ProgramCareers'
import ProgramFAQ from '@/components/ProgramFAQ'

export default function BachelorManagementTechnologyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BachelorProgramHero />
      <CurriculumSection />
      <DegreeAccreditation />
      <ProgramSpecializations />
      <AdmissionsProcess />
      <LivingCosts />
      <ProgramScholarships />
      <ProgramCareers />
      <ProgramFAQ />
      <Footer />
    </main>
  )
}

