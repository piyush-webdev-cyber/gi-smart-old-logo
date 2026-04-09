import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MasterManagementTechnologyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[125px] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Master in Management of Technology
          </h1>
          <p className="text-lg text-gray-600">
            Page content will be added here
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

