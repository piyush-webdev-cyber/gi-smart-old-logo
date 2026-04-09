import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApplyNowPromo from '@/components/ApplyNowPromo'
import ApplyNowForm from '@/components/ApplyNowForm'
import ThreeStepProcess from '@/components/ThreeStepProcess'
import MeetTheTribe from '@/components/MeetTheTribe'
import TetrInNews from '@/components/TetrInNews'
import ScholarshipsDetailed from '@/components/ScholarshipsDetailed'

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Apply Now Form Section - form full width on mobile */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="px-4 sm:px-0">
              <ApplyNowPromo />
            </div>
            <div className="w-full min-w-0">
              <ApplyNowForm />
            </div>
          </div>
        </div>
      </section>

      <ThreeStepProcess />
      <MeetTheTribe />
      <TetrInNews />
      <ScholarshipsDetailed />
      <Footer />
    </main>
  )
}

