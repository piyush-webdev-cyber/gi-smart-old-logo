'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scholarships = [
  {
    id: 'outliers',
    title: 'The Outliers Scholarship',
    description: "Celebrating exceptional talents beyond academics. If you're leading in fields like dance, space science, or robotics, this scholarship is designed to propel your unique journey forward at GI-SMART.",
    eligibility: 'Recognized in the top 1% in any field.',
  },
  {
    id: 'community',
    title: 'The Community Leaders Scholarship',
    description: '',
    eligibility: '',
  },
  {
    id: 'entrepreneur',
    title: 'The Entrepreneur & Innovation Scholarship',
    description: '',
    eligibility: '',
  },
  {
    id: 'sat',
    title: 'The SAT Merit Scholarship',
    description: '',
    eligibility: '',
  },
  {
    id: 'pathfinders',
    title: 'The Pathfinders Scholarship',
    description: '',
    eligibility: '',
  },
  {
    id: 'transfer',
    title: 'The Transfer Students Scholarship',
    description: '',
    eligibility: '',
  },
  {
    id: 'aspire',
    title: 'The Aspire Grant',
    description: '',
    eligibility: '',
  },
]

const ProgramScholarships = () => {
  const [expandedId, setExpandedId] = useState<string>('outliers')

  return (
    <section className="py-24 bg-white relative">
      {/* Decorative squares */}
      <div className="absolute top-8 left-8 w-8 h-8 grid grid-cols-2 gap-1 opacity-20">
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
      </div>
      <div className="absolute top-8 right-8 w-8 h-8 grid grid-cols-2 gap-1 opacity-20">
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Empowering Dreams Through <span className="font-extrabold">Scholarships</span>
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center lg:text-left">
              At GI-SMART, we never let financial hardships stand in the way of quality education. Scholarships will cover up to 100% of the tuition for Bachelor's in Management & Technology.
            </p>

            <div className="space-y-4">
              {scholarships.map((scholarship) => {
                const isExpanded = expandedId === scholarship.id
                return (
                  <div
                    key={scholarship.id}
                    className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? '' : scholarship.id)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#81c784] transition-colors"
                    >
                      <h3 className="text-lg font-bold text-[#8b1538]">
                        {scholarship.title}
                      </h3>
                      <span className="text-[#8b1538] text-xl font-bold">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isExpanded && scholarship.description && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 space-y-3">
                            <p className="text-[#8b1538] text-sm">
                              {scholarship.description}
                            </p>
                            {scholarship.eligibility && (
                              <div>
                                <p className="text-[#8b1538] font-semibold text-sm mb-1">
                                  Eligibility Criteria:
                                </p>
                                <p className="text-[#8b1538] text-sm">
                                  {scholarship.eligibility}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative z-10">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[3/4] bg-gray-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramScholarships

