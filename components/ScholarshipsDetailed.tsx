'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const undergraduateScholarships = [
  {
    id: 1,
    title: 'The Outliers Scholarship',
    description: "Celebrating exceptional talents beyond academics. If you're leading in fields like dance, space science, or robotics, this scholarship is designed to propel your unique journey forward at GI-SMART.",
    eligibility: 'Recognized in the top 1% in any field.',
    expanded: true,
  },
  {
    id: 2,
    title: 'The Community Leaders Scholarship',
    description: '',
    eligibility: '',
    expanded: false,
  },
  {
    id: 3,
    title: 'The Entrepreneur & Innovation Scholarship',
    description: '',
    eligibility: '',
    expanded: false,
  },
  {
    id: 4,
    title: 'The SAT Merit Scholarship',
    description: '',
    eligibility: '',
    expanded: false,
  },
  {
    id: 5,
    title: 'The Pathfinders Scholarship',
    description: '',
    eligibility: '',
    expanded: false,
  },
  {
    id: 6,
    title: 'The Transfer Students Scholarship',
    description: '',
    eligibility: '',
    expanded: false,
  },
  {
    id: 7,
    title: 'The Aspire Grant',
    description: '',
    eligibility: '',
    expanded: false,
  },
]

const ScholarshipsDetailed = () => {
  const [activeTab, setActiveTab] = useState<'undergraduate' | 'postgraduate'>('undergraduate')
  const [expandedScholarships, setExpandedScholarships] = useState<number[]>([1])

  const toggleScholarship = (id: number) => {
    setExpandedScholarships(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Scholarship List */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Scholarships
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              At GI-SMART, we believe financial barriers should never limit access to exceptional education. To support your journey, we offer 8 merit-based scholarships that recognize your achievements, ensuring your ambitions are fully realized without the burden of financial constraints. Scholarships can cover up to 100% of the tuition fee.
            </motion.p>

            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <motion.button
                onClick={() => setActiveTab('undergraduate')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'undergraduate'
                    ? 'bg-[#ffd700] text-black'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                UNDERGRADUATE
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('postgraduate')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'postgraduate'
                    ? 'bg-[#ffd700] text-black'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                POSTGRADUATE
              </motion.button>
            </div>

            {/* Scholarship Accordion */}
            <div className="space-y-2">
              {undergraduateScholarships.map((scholarship, index) => {
                const isExpanded = expandedScholarships.includes(scholarship.id)
                return (
                  <motion.div
                    key={scholarship.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#f0f8f0] rounded-lg overflow-hidden border border-gray-200"
                  >
                    <button
                      onClick={() => toggleScholarship(scholarship.id)}
                      className="w-full p-5 text-left flex items-center justify-between hover:bg-[#e8f5e8] transition-colors group"
                    >
                      <h3 className="text-lg font-bold text-gray-900">{scholarship.title}</h3>
                      <span className="text-2xl text-gray-600 group-hover:text-[#8b1538] transition-colors">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && scholarship.description && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2">
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {scholarship.description}
                            </p>
                            {scholarship.eligibility && (
                              <div className="flex items-start gap-2">
                                <span className="text-[#8b1538] font-bold mt-1">■</span>
                                <p className="text-gray-700">
                                  <span className="font-semibold">Eligibility Criteria:</span>{' '}
                                  {scholarship.eligibility}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            {/* Decorative pattern */}
            <div className="mb-4 grid grid-cols-3 gap-2 w-24">
              {Array.from({ length: 9 }).map((_, i) => {
                if (i === 0 || i === 2 || i === 7) return null // Skip top-left, top-right, bottom-center
                return (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded"
                  />
                )
              })}
            </div>

            {/* Person Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ScholarshipsDetailed

