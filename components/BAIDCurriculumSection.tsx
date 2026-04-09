'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BAIDCurriculumSection = () => {
  const [activeYear, setActiveYear] = useState(1)
  const [activeTerm, setActiveTerm] = useState<number | null>(1)

  const programStructure = {
    year1: {
      year: 1,
      title: 'Foundations of Intelligence & Design',
      terms: [
        {
          id: 1,
          term: 'Term 1 (Fall)',
          courses: [
            { code: 'AID 101', name: 'Introduction to Artificial Intelligence & Design', credits: 3 },
            { code: 'AID 102', name: 'Programming Foundations for AI (Python & JavaScript)', credits: 4 },
            { code: 'AID 103', name: 'Design Thinking & Creative Problem Solving', credits: 3 },
            { code: 'AID 104', name: 'Academic Writing & Digital Communication', credits: 2 },
          ]
        },
        {
          id: 2,
          term: 'Term 2 (Winter)',
          courses: [
            { code: 'AID 105', name: 'Principles of Effective AI Prompting I', credits: 3 },
            { code: 'AID 106', name: 'Mathematics for Intelligence Systems', credits: 4 },
            { code: 'AID 107', name: 'Digital Visualization & Design Software', credits: 3 },
            { code: 'AID 108', name: 'Cognitive Psychology & Human Behavior', credits: 3 },
          ]
        },
        {
          id: 3,
          term: 'Term 3 (Summer)',
          courses: [
            { code: 'AID 109', name: 'Data Structures & Algorithmic Thinking', credits: 3 },
            { code: 'AID 110', name: 'Ethics & Philosophy of Artificial Intelligence', credits: 3 },
            { code: 'AID 111', name: 'Design Studio I: AI-Assisted Creative Systems', credits: 4 },
            { code: 'AID 112', name: 'Portfolio Foundations', credits: 2 },
          ]
        }
      ]
    },
    year2: {
      year: 2,
      title: 'Designing Intelligence',
      terms: [
        {
          id: 4,
          term: 'Term 4 (Fall)',
          courses: [
            { code: 'AID 201', name: 'Machine Learning I: Supervised Learning', credits: 4 },
            { code: 'AID 202', name: 'Human–Computer Interaction & Experience Design', credits: 3 },
            { code: 'AID 203', name: 'Visual Communication & Information Design', credits: 3 },
            { code: 'AID 204', name: 'Principles of Effective AI Prompting II', credits: 3 },
          ]
        },
        {
          id: 5,
          term: 'Term 5 (Winter)',
          courses: [
            { code: 'AID 205', name: 'Machine Learning II: Deep & Reinforcement Learning', credits: 4 },
            { code: 'AID 206', name: 'UX/UI Design for AI Products', credits: 3 },
            { code: 'AID 207', name: 'Applied Statistics & Probability for AI', credits: 3 },
            { code: 'AID 208', name: 'Design Studio II: Prototyping Interactive Systems', credits: 4 },
          ]
        },
        {
          id: 6,
          term: 'Term 6 (Summer)',
          courses: [
            { code: 'AID 209', name: 'Natural Language Processing & Prompt Optimization', credits: 4 },
            { code: 'AID 210', name: 'Computational Creativity & Generative Art', credits: 3 },
            { code: 'AID 211', name: 'Internship I – Industry Exposure', credits: 2 },
            { code: 'AID 212', name: 'AI for Creative Industries Seminar', credits: 2 },
          ]
        }
      ]
    },
    year3: {
      year: 3,
      title: 'Applied Systems & Real-World Integration',
      terms: [
        {
          id: 7,
          term: 'Term 7 (Fall)',
          courses: [
            { code: 'AID 301', name: 'AI Systems Architecture & Cloud Integration', credits: 4 },
            { code: 'AID 302', name: 'AI & Robotics: Design for Movement', credits: 3 },
            { code: 'AID 303', name: 'Data Ethics Lab', credits: 3 },
            { code: 'AID 304', name: 'Design Studio III: Product AI Development', credits: 4 },
          ]
        },
        {
          id: 8,
          term: 'Term 8 (Winter)',
          courses: [
            { code: 'AID 305', name: 'Emotion-Aware & Adaptive AI Interfaces', credits: 3 },
            { code: 'AID 306', name: 'Human–AI Collaboration Studio', credits: 4 },
            { code: 'AID 307', name: 'Research Methods in AI Design', credits: 3 },
            { code: 'AID 308', name: 'Principles of Effective AI Prompting III', credits: 3 },
          ]
        },
        {
          id: 9,
          term: 'Term 9 (Summer)',
          courses: [
            { code: 'AID 309', name: 'AI Project Management & Entrepreneurship', credits: 3 },
            { code: 'AID 310', name: 'Elective I', credits: 3 },
            { code: 'AID 311', name: 'Internship II – Applied Research', credits: 3 },
            { code: 'AID 312', name: 'Capstone Preparation & Proposal', credits: 2 },
          ]
        }
      ]
    },
    year4: {
      year: 4,
      title: 'Integration, Strategy & Impact',
      terms: [
        {
          id: 10,
          term: 'Term 10 (Fall)',
          courses: [
            { code: 'AID 401', name: 'Capstone Project I – Design & Development', credits: 4 },
            { code: 'AID 402', name: 'Elective II', credits: 3 },
            { code: 'AID 403', name: 'AI Strategy & Policy', credits: 3 },
            { code: 'AID 404', name: 'Professional Ethics in Technology', credits: 2 },
          ]
        },
        {
          id: 11,
          term: 'Term 11 (Winter)',
          courses: [
            { code: 'AID 405', name: 'Capstone Project II – Implementation & Exhibition', credits: 4 },
            { code: 'AID 406', name: 'Elective III', credits: 3 },
            { code: 'AID 407', name: 'AI and Society: Global Implications', credits: 3 },
            { code: 'AID 408', name: 'Advanced Portfolio & Career Strategy', credits: 2 },
          ]
        },
        {
          id: 12,
          term: 'Term 12 (Summer)',
          courses: [
            { code: 'AID 409', name: 'Internship III – Global or Remote Placement', credits: 4 },
            { code: 'AID 410', name: 'Entrepreneurship Lab / Startup Incubator', credits: 3 },
            { code: 'AID 411', name: 'Seminar: The Future of Intelligence Design', credits: 2 },
          ]
        }
      ]
    }
  }

  const currentYearData = programStructure[`year${activeYear}` as keyof typeof programStructure]

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Program Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Program Vision
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            To educate the next generation of designers, engineers, and thinkers who can design, build, and ethically guide artificial intelligence that is beautiful, human-centered, and socially responsible.
          </p>
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
                  ? 'bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white shadow-lg'
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
          <p className="text-gray-600">
            {currentYearData.terms.length} Terms (Fall, Winter, Summer)
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
                <span className="text-white/80 text-sm">
                  {term.courses.reduce((sum, c) => sum + c.credits, 0)} Credits
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
                          <span className="text-[#ffd700] font-semibold text-sm">{course.code}</span>
                          <span className="text-white/70 text-xs">{course.credits} Cr</span>
                        </div>
                        <p className="text-white text-sm leading-tight">{course.name}</p>
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
        <div className="bg-[#f0f8f0] rounded-lg p-8 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Program Model</h4>
          <p className="text-gray-700 text-lg mb-4">
            <strong>Hybrid Model:</strong> Online + In-Lab + Studio
          </p>
          <p className="text-gray-600">
            Each term contains 3-4 courses, combining theoretical learning, applied labs, and design studios.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BAIDCurriculumSection

