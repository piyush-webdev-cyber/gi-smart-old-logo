import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FourCampuses from '@/components/FourCampuses'
import { FaGlobe, FaHandshake, FaGraduationCap } from 'react-icons/fa'

export default function InternationalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-[177px] pb-16 bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            International Experience
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Study at our campus in Paris, France and build a truly international network
          </p>
        </div>
      </section>

      <FourCampuses />
      
      {/* Global Mobility Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Global Learning Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At GI-SMART, your education transcends borders. Experience diverse cultures, global business practices, and build an international professional network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f0f8f0] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <FaGlobe className="text-5xl text-[#8b1538]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Campus in Paris</h3>
              <p className="text-gray-700">
                Study at our campus in Paris, France — the creative capital of Europe
              </p>
            </div>
            
            <div className="bg-[#f0f8f0] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-5xl text-[#8b1538]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Network</h3>
              <p className="text-gray-700">
                Connect with students and professionals from over 50 countries worldwide
              </p>
            </div>
            
            <div className="bg-[#f0f8f0] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <FaGraduationCap className="text-5xl text-[#8b1538]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Immersion</h3>
              <p className="text-gray-700">
                Gain deep cultural understanding and global business perspectives
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

