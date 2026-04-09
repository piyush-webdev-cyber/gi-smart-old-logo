'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TuitionPathwayPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-[125px] pb-8 sm:pb-12 md:pb-16 bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
              GI-SMART Program Investment Overview
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto px-4">
              A progressive academic pathway that empowers learners to develop the skills, mindset, and global perspective required to thrive in the era of AI, Data Analytics, and Intelligent Systems Design.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16 text-center"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            The Global Institute for Strategic Management and Advanced Research Technologies (GI‑SMART) offers a progressive academic pathway that empowers learners to develop the skills, mindset, and global perspective required to thrive in the era of Artificial Intelligence, Data Analytics, and Intelligent Systems Design. Each program tier is structured for maximum flexibility, career alignment, and international opportunity.
          </p>
        </motion.div>

        {/* Undergraduate Pathway */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-[#f0f8f0] rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              1️⃣ Undergraduate Pathway — Bachelor of Artificial Intelligence Design (BAID)
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#8b1538] mb-4 sm:mb-6">
              A Modular Learning Journey — Tailored to Your Ambition
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8">
              Every learner's journey is unique. GI‑SMART offers a progressive pathway structure that allows students to begin at the level that best matches their goals and resources.
            </p>

            {/* Table */}
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-[#8b1538] text-white">
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Tier</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Duration</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Award</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Tuition (€)</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Certificate</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">1 Year</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">Certificate in Artificial Intelligence Design Foundations</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-[#8b1538] text-xs sm:text-sm md:text-base">€15,000</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">Ideal for entry-level learners seeking a foundation in AI Design and creative technologies. Credits fully transferable toward the Diploma or Degree.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Diploma</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">2 Years</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">Diploma in Applied Artificial Intelligence Design</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-[#8b1538] text-xs sm:text-sm md:text-base">€25,000</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">A comprehensive 2-year qualification focusing on practical applications of AI in design and innovation.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-[#f0f8f0]">
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Degree</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">3 Years (France)</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">Bachelor of Artificial Intelligence Design</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-[#8b1538] text-xs sm:text-sm md:text-base">€40,000</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">A globally recognized three-year degree in France integrating technology, design, and strategy for the AI-driven world.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 bg-[#ffd700]/20 border-l-4 border-[#ffd700] p-3 sm:p-4 rounded">
              <p className="text-xs sm:text-sm md:text-base text-gray-800">
                <span className="font-bold">💡 Students may begin with the Certificate or Diploma and later "stack" their learning toward the full BAID degree</span> — maintaining credit continuity and academic momentum.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Graduate Pathway */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-br from-[#8b1538] to-[#8b1538] rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              2️⃣ Graduate Pathway — Master of Science in Data Analytics & Intelligent Systems Design
            </h2>

            {/* Table */}
            <div className="overflow-x-auto mt-6 sm:mt-8 -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="w-full bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-white/20">
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Track</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Duration</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Tuition (€)</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Eligibility & Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/20">
                    <tr className="hover:bg-white/10">
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base">Standard Track</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base">18 Months</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-[#ffd700] text-xs sm:text-sm md:text-base">€30,000</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base">Open to graduates from any recognized undergraduate program. Comprehensive MSc covering Data Analytics, Machine Learning, and AI-driven strategic design.</td>
                    </tr>
                    <tr className="hover:bg-white/10">
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-sm md:text-base">Accelerated Track</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base">12–14 Months</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-[#ffd700] text-xs sm:text-sm md:text-base">€20,000</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base">Exclusive to BAID graduates. Recognizes prior coursework and professional competencies developed during BAID for faster completion and reduced tuition.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-white/10 border-l-4 border-[#ffd700] p-4 sm:p-5 md:p-6 rounded">
              <p className="text-base sm:text-lg md:text-xl font-bold mb-2">🎓 Dual-Enrollment Advantage:</p>
              <p className="text-sm sm:text-base text-white/90">
                Enroll simultaneously in both the BAID and MSc programs and benefit from a combined tuition of <span className="font-bold text-[#ffd700]">€55,000</span> (instead of €60,000).
              </p>
            </div>
          </div>
        </motion.section>

        {/* Comprehensive Study Packages */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-white border-2 border-[#8b1538] rounded-xl p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              3️⃣ Comprehensive Study Packages (Tuition + Accommodation)
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#8b1538] text-white">
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Package</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Duration</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Includes</th>
                      <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-left font-bold text-xs sm:text-sm md:text-base">Total (€)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-gray-900 text-xs sm:text-sm md:text-base">BAID + MSc Integrated Experience</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">5.5 Years</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">Tuition, premium student accommodation, campus access, and academic support</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-[#8b1538] text-base sm:text-lg md:text-xl">€120,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Full BAID Residential Package</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">4 Years</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-gray-700 text-xs sm:text-sm md:text-base">Tuition + accommodation for all four years</td>
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 font-bold text-[#8b1538] text-base sm:text-lg md:text-xl">€90,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 bg-gray-100 p-3 sm:p-4 rounded">
              <p className="text-xs sm:text-sm md:text-base text-gray-700">
                <span className="font-bold">💬 Tuition fees do not include travel or personal expenses.</span> All accommodation options are safe, modern, and located near each GI‑SMART campus.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-r from-[#8b1538] to-[#8b1538] rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Highlights for Students
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#ffd700]">Global Mobility & Multi-Campus Experience</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90">Anchor in one city, explore the others.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#ffd700]">Financial Flexibility & Tiered Pathways</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90">Start with a Certificate and advance seamlessly.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#ffd700]">Career ROI</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90">Each tier aligned with high-demand roles in AI, ML, Data Science, and Creative Technology.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#ffd700]">Immigration Pathways</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90">Graduates may explore post-study career opportunities in their anchor campus region.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#ffd700]">Personalized Learning</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90">Small cohorts (40–50 early years, 30–35 advanced years) ensure interactive mentorship.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  )
}

