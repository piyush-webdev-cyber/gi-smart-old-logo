'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MScStrategicCurriculumSection = () => {
  const [activeTerm, setActiveTerm] = useState<number | null>(1)

  const terms = [
    {
      id: 1,
      term: 'Term 1',
      courses: [
        'Advanced Strategic Analysis',
        'Managerial Economics for Decision Makers',
        'Quantitative Methods & Business Statistics'
      ]
    },
    {
      id: 2,
      term: 'Term 2',
      courses: [
        'Financial Strategy & Value Creation',
        'Data Analytics for Strategic Management',
        'Organizational Behavior & Leadership'
      ]
    },
    {
      id: 3,
      term: 'Term 3',
      courses: [
        'AI & Digital Transformation Strategy',
        'Competitive Intelligence & Market Foresight',
        'Ethics, Governance & Risk Management'
      ]
    },
    {
      id: 4,
      term: 'Term 4',
      courses: [
        'Advanced Decision Intelligence Systems',
        'Innovation & Corporate Entrepreneurship',
        'Public Policy & Geostrategic Analysis'
      ]
    },
    {
      id: 5,
      term: 'Term 5',
      courses: [
        'Specialization Elective I',
        'Specialization Elective II',
        'Strategic Consulting Methods'
      ]
    },
    {
      id: 6,
      term: 'Term 6',
      courses: [
        'Master\'s Thesis / Strategic Capstone Project',
        'Professional Integration Seminar'
      ]
    }
  ]

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Program Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Full Term-by-Term Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-[#f0f8f0] rounded-lg p-6">
              <div className="text-3xl font-bold text-[#8b1538] mb-2">18 Months</div>
              <div className="text-gray-700">Program Duration</div>
            </div>
            <div className="bg-[#f0f8f0] rounded-lg p-6">
              <div className="text-3xl font-bold text-[#8b1538] mb-2">6 Terms</div>
              <div className="text-gray-700">Academic Terms</div>
            </div>
            <div className="bg-[#f0f8f0] rounded-lg p-6">
              <div className="text-3xl font-bold text-[#8b1538] mb-2">Master's</div>
              <div className="text-gray-700">Degree Level</div>
            </div>
          </div>
        </motion.div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {terms.map((term) => (
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
                <span className="text-white/80 text-sm">
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
                        <p className="text-white text-sm leading-tight">{course}</p>
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

        {/* Program Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] rounded-lg p-8 md:p-12 text-white"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">Program Highlights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-3 text-[#ffd700]">Core Focus Areas</h5>
              <ul className="space-y-2 text-white/90">
                <li>• Advanced Strategic Analysis</li>
                <li>• Intelligent Decision Systems</li>
                <li>• AI & Digital Transformation</li>
                <li>• Strategic Consulting Methods</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h5 className="text-lg font-semibold mb-3 text-[#ffd700]">Capstone Deliverables</h5>
              <ul className="space-y-2 text-white/90">
                <li>• Master's Thesis</li>
                <li>• Strategic Capstone Project</li>
                <li>• Professional Integration</li>
                <li>• Specialization Electives</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MScStrategicCurriculumSection

