'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MScAAIDSCurriculumSection = () => {
  const [activeYear, setActiveYear] = useState(1)
  const [activeTerm, setActiveTerm] = useState<number | null>(1)

  const programStructure = {
    year1: {
      year: 1,
      title: 'Foundations & Applied Systems',
      ects: 60,
      terms: [
        {
          id: 1,
          term: 'Term 1 (Fall)',
          courses: [
            { name: 'Foundations of AI', credits: 'Core' },
            { name: 'Python for AI', credits: 'Core' },
            { name: 'Mathematics for ML', credits: 'Core' },
            { name: 'AI Ethics & Governance', credits: 'Core' },
          ]
        },
        {
          id: 2,
          term: 'Term 2 (Winter)',
          courses: [
            { name: 'Data Systems & Cloud Infrastructure', credits: 'Core' },
            { name: 'Robotics & Mechatronics', credits: 'Core' },
            { name: 'Automation & Industrial AI', credits: 'Core' },
            { name: 'Data Visualization', credits: 'Core' },
          ]
        },
        {
          id: 3,
          term: 'Term 3 (Spring/Summer)',
          courses: [
            { name: 'Machine Vision', credits: 'Core' },
            { name: 'IoT & Edge AI', credits: 'Core' },
            { name: 'Systems Integration', credits: 'Core' },
            { name: 'Professional Seminar', credits: 'Core' },
          ]
        }
      ]
    },
    year2: {
      year: 2,
      title: 'Specialization, Research & Capstone',
      ects: 60,
      terms: [
        {
          id: 4,
          term: 'Term 4 (Fall)',
          courses: [
            { name: 'Research Methods', credits: 'Core' },
            { name: 'Specialization I', credits: 'Specialization' },
            { name: 'Innovation & IP Strategy', credits: 'Core' },
            { name: 'Elective', credits: 'Elective' },
          ]
        },
        {
          id: 5,
          term: 'Term 5 (Winter)',
          courses: [
            { name: 'Specialization II', credits: 'Specialization' },
            { name: 'Applied Project', credits: 'Project' },
            { name: 'Leadership and Professional Development', credits: 'Core' },
          ]
        },
        {
          id: 6,
          term: 'Term 6 (Spring/Summer)',
          courses: [
            { name: 'Capstone Project', credits: 'Capstone' },
            { name: 'Internship', credits: 'Practical' },
            { name: 'Thesis', credits: 'Research' },
            { name: 'Portfolio', credits: 'Professional' },
          ]
        }
      ]
    }
  }

  const currentYearData = programStructure[`year${activeYear}` as keyof typeof programStructure]

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Program Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f0f8f0] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To produce globally competent innovators and leaders in AI, data systems, and robotics who shape a sustainable and human-centered digital future.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To provide interdisciplinary education integrating AI, data science, and design to address industrial, social, and environmental challenges worldwide.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Program Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Dubai-first global program with European equivalence',
              '3-term structure allowing 3 intakes per year',
              'Fully modular and interdisciplinary',
              'Embedded AI assistant (GiGi) for multilingual learning',
              'Integration of applied research, robotics, and sustainability',
              'Paris mobility option'
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border-2 border-[#8b1538] rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ffd700] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Year Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2].map((year) => (
            <button
              key={year}
              onClick={() => {
                setActiveYear(year)
                setActiveTerm(null)
              }}
              className={`px-6 py-3 rounded-lg font-semibold text-base transition-all ${
                activeYear === year
                  ? 'bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Year {year} ({programStructure[`year${year}` as keyof typeof programStructure].ects} ECTS)
            </button>
          ))}
        </div>

        {/* Year Title */}
        <motion.div
          key={activeYear}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {currentYearData.title}
          </h3>
          <p className="text-gray-600">
            {currentYearData.terms.length} Terms (Fall, Winter, Spring/Summer)
          </p>
        </motion.div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentYearData.terms.map((term) => (
            <motion.div
              key={term.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: term.id * 0.1 }}
              onClick={() => setActiveTerm(activeTerm === term.id ? null : term.id)}
              className={`bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                activeTerm === term.id ? 'ring-4 ring-[#ffd700]' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-bold text-lg">{term.term}</h4>
                <span className="text-white/80 text-xs">
                  {term.courses.length} Courses
                </span>
              </div>
              
              <AnimatePresence>
                {activeTerm === term.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 pt-4 border-t border-white/20 space-y-3"
                  >
                    {term.courses.map((course, idx) => (
                      <div key={idx} className="bg-white/10 rounded p-3">
                        <div className="flex items-start justify-between mb-1">
                          <span className={`text-xs px-2 py-1 rounded ${
                            course.credits === 'Core' ? 'bg-blue-500/30 text-blue-200' :
                            course.credits === 'Specialization' ? 'bg-purple-500/30 text-purple-200' :
                            course.credits === 'Capstone' ? 'bg-[#ffd700]/30 text-[#ffd700]' :
                            'bg-gray-500/30 text-gray-200'
                          }`}>
                            {course.credits}
                          </span>
                        </div>
                        <p className="text-white text-sm leading-tight mt-2">{course.name}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {activeTerm !== term.id && (
                <div className="text-white/70 text-sm mt-2">
                  Click to view courses →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Program Model Info */}
        <div className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] rounded-lg p-8 text-white">
          <h4 className="text-2xl font-bold mb-4 text-center">Program Delivery</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-lg font-semibold mb-2">Hybrid Model</p>
              <p className="text-white/80">Dubai-based with Paris mobility option</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Total Credits</p>
              <p className="text-white/80">120 ECTS (≈36 UAE Credits / 60 NA Credits)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MScAAIDSCurriculumSection

