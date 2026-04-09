'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProgramCareers = () => {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Group Photo Section */}
        <div className="mb-24">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] bg-gray-200 relative">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
            </div>
          </div>
        </div>

        {/* Career Labs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Left - White Box */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Career Labs at <span className="font-extrabold italic">GI-SMART</span>
            </h2>
          </div>

          {/* Right - Green Background with Subsections */}
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg p-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-pink-500 rounded-sm mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Shadow Top CXOs & Teams
                </h3>
                <p className="text-white/90 text-sm">
                  In each country, actually work with business leaders and companies while enriching your resume.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-blue-500 rounded-sm mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Work on Real Life Assignments
                </h3>
                <p className="text-white/90 text-sm">
                  From EV mobility to large real estate deals, witness the world change firsthand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-purple-500 rounded-sm mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Not Just in the Summer
                </h3>
                <p className="text-white/90 text-sm">
                  Get the opportunity to intern during the term in the evenings and weekends.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* In Term Internships Section */}
        <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg p-12 mb-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-yellow-400 opacity-20 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-400 opacity-20 rounded-lg"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                In Term <span className="font-extrabold italic">Internships</span>
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Internships go beyond the job title. Students collaborate with cross-functional teams in areas like marketing, finance, product management, and business development, gaining a well-rounded understanding of how businesses thrive.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    131,760+
                  </div>
                  <div className="text-white/80 text-sm">
                    USD
                  </div>
                  <div className="text-white/70 text-xs">
                    Cumulative Stipend (in the first year)
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    110+
                  </div>
                  <div className="text-white/80 text-sm">
                    Internships
                  </div>
                  <div className="text-white/70 text-xs">
                    (in the first year)
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    15+
                  </div>
                  <div className="text-white/80 text-sm">
                    Countries
                  </div>
                </div>
              </div>

              <button className="bg-[#ffd700] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ffed4e] transition-colors flex items-center gap-2">
                VIEW CAREER LAB REPORT
                <FaExternalLinkAlt />
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 opacity-30 rounded-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 opacity-30 rounded-lg"></div>
              <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
                <div className="aspect-[4/5] bg-gray-200">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiters and Hiring Partners */}
        <div className="mt-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Access 100+ <span className="font-extrabold italic">Eminent</span> Recruiters and Hiring Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Company Logos */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20 w-full">
              <div className="text-gray-400 font-bold text-sm">McKinsey</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20 w-full">
              <div className="text-gray-400 font-bold text-sm">Google</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20 w-full">
              <div className="text-gray-400 font-bold text-sm">Microsoft</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20 w-full">
              <div className="text-gray-400 font-bold text-sm">PEPSI</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20 w-full">
              <div className="text-gray-400 font-bold text-sm">Nestlé</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-20 w-full">
              <div className="text-gray-400 font-bold text-sm">Goldman Sachs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramCareers

