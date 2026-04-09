'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BScStrategicCurriculumSection = () => {
  const [activeYear, setActiveYear] = useState(1)
  const [activeTerm, setActiveTerm] = useState<number | null>(1)

  const programStructure = {
    year1: {
      year: 1,
      title: 'Strategic Foundations',
      terms: [
        {
          id: 1,
          term: 'Term 1',
          courses: [
            'Principles of Management & Organizational Theory',
            'Microeconomics for Decision-Makers',
            'Business Communication & Academic Writing'
          ]
        },
        {
          id: 2,
          term: 'Term 2',
          courses: [
            'Quantitative Methods & Statistics',
            'Introduction to Strategic Thinking',
            'Leadership Psychology & Team Dynamics'
          ]
        },
        {
          id: 3,
          term: 'Term 3',
          courses: [
            'Foundation Courses Continuation',
            'Strategic Thinking Workshops',
            'Leadership Development'
          ]
        }
      ]
    },
    year2: {
      year: 2,
      title: 'Analytical & Financial Strategy',
      terms: [
        {
          id: 4,
          term: 'Term 4',
          courses: [
            'Financial Accounting & Analysis',
            'Managerial Finance',
            'Business Intelligence & Data Analytics'
          ]
        },
        {
          id: 5,
          term: 'Term 5',
          courses: [
            'Marketing Strategy in the Digital Era',
            'Operations & Supply Chain Strategy',
            'Strategic Decision-Making Simulations'
          ]
        },
        {
          id: 6,
          term: 'Term 6',
          courses: [
            'Advanced Financial Analysis',
            'Data Analytics Projects',
            'Industry Internship I'
          ]
        }
      ]
    },
    year3: {
      year: 3,
      title: 'Global Strategy & Innovation',
      terms: [
        {
          id: 7,
          term: 'Term 7',
          courses: [
            'Global Economics & Geopolitical Analysis',
            'Strategic Innovation & Change Management',
            'Corporate Governance & Ethics'
          ]
        },
        {
          id: 8,
          term: 'Term 8',
          courses: [
            'Digital Transformation Strategy',
            'Sustainability & ESG Leadership',
            'Industry Consulting Project I'
          ]
        },
        {
          id: 9,
          term: 'Term 9',
          courses: [
            'Global Strategy Focus',
            'Innovation Lab',
            'Industry Internship II'
          ]
        }
      ]
    },
    year4: {
      year: 4,
      title: 'Advanced Strategic Leadership',
      terms: [
        {
          id: 10,
          term: 'Term 10',
          courses: [
            'Competitive Strategy in the AI Economy',
            'Advanced Data-Driven Decision Systems',
            'Strategic Risk & Crisis Management'
          ]
        },
        {
          id: 11,
          term: 'Term 11',
          courses: [
            'Entrepreneurship, Venture Creation & Funding',
            'Capstone Strategy Simulation',
            'Industry Consulting Project II (Thesis-Equivalent)'
          ]
        },
        {
          id: 12,
          term: 'Term 12',
          courses: [
            'Final Capstone Presentation',
            'Strategic Leadership Portfolio',
            'Professional Development'
          ]
        }
      ]
    }
  }

  const currentYearData = programStructure[`year${activeYear}` as keyof typeof programStructure]

  const yearDescriptions: { [key: number]: string } = {
    1: 'Build strong strategic foundations with management principles, economics, and leadership psychology.',
    2: 'Develop analytical skills in finance, data analytics, and strategic decision-making.',
    3: 'Master global strategy, innovation management, and digital transformation.',
    4: 'Lead strategic initiatives, manage risks, and deliver impactful consulting projects.'
  }

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
            Program Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-[#f0f8f0] rounded-lg p-6">
              <div className="text-3xl font-bold text-[#8b1538] mb-2">3 Years</div>
              <div className="text-gray-700">Program Duration</div>
            </div>
            <div className="bg-[#f0f8f0] rounded-lg p-6">
              <div className="text-3xl font-bold text-[#8b1538] mb-2">9 Terms</div>
              <div className="text-gray-700">3 Terms per Year</div>
            </div>
            <div className="bg-[#f0f8f0] rounded-lg p-6">
              <div className="text-3xl font-bold text-[#8b1538] mb-2">13 Weeks</div>
              <div className="text-gray-700">Per Term</div>
            </div>
          </div>
        </motion.div>

        {/* Year Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3].map((year) => (
            <button
              key={year}
              onClick={() => {
                setActiveYear(year)
                setActiveTerm(null)
              }}
              className={`px-6 py-3 rounded-lg font-semibold text-base transition-all ${
                activeYear === year
                  ? 'bg-[#8b1538] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Year {year}
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
          <p className="text-gray-600 max-w-3xl mx-auto">
            {yearDescriptions[activeYear]}
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
              className={`bg-[#8b1538] rounded-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
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

        {/* Graduate Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#8b1538] to-[#8b1538] rounded-lg p-8 md:p-12 text-white"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">Graduate Outcomes</h4>
          <p className="text-lg text-white/90 mb-6 text-center max-w-3xl mx-auto">
            Graduates will be equipped for roles such as Strategy Analyst, Business Consultant, Operations Manager, Innovation Specialist, or Entrepreneur. The program's global design ensures career mobility and adaptability.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {['Strategy Analyst', 'Business Consultant', 'Operations Manager', 'Innovation Specialist', 'Entrepreneur'].map((outcome, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-white font-semibold text-sm">{outcome}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BScStrategicCurriculumSection

