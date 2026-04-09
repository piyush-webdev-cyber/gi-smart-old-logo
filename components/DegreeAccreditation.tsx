'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const DegreeAccreditation = () => {
  const [expandedSection, setExpandedSection] = useState('recognized')

  return (
    <section id="accreditation" className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="bg-[#d4af37] text-[#0a1628] px-3 py-1 rounded inline-block text-xs font-semibold mb-6">
              DEGREE & ACCREDITATION
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Graduate with a <span className="font-extrabold">Bachelor's of Science (Honours) Degree</span> from an <span className="font-extrabold">Accredited UK University</span>
              <FaExternalLinkAlt className="text-[#ffd700] ml-2" />
            </h2>
            
            <p className="text-xl text-white/90 mb-12">
              Complete the first 6 terms with <span className="font-bold">GI-SMART</span> & the final 2 terms at <span className="font-bold">UBI campus in Europe.</span>
            </p>

            {/* Accordion Sections */}
            <div className="space-y-4">
              {/* A Globally Recognized School of Business */}
              <div className="bg-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'recognized' ? '' : 'recognized')}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-white">A Globally Recognized School of Business</h3>
                  <span className="text-white text-2xl">
                    {expandedSection === 'recognized' ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSection === 'recognized' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-3">
                        <p className="text-white/90">
                          Option to major in <span className="font-bold">International Business, Management & AI/ML</span>
                        </p>
                        <p className="text-white/90">
                          Ranked <span className="font-bold">top 30</span> worldwide by <span className="font-bold">QS Ranking</span>
                        </p>
                        <p className="text-white/90">
                          Ranked <span className="font-bold">#1</span> by QS in Career outcomes
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Best in Class Placement */}
              <div className="bg-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'placement' ? '' : 'placement')}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-white">Best in Class Placement and Career Stats</h3>
                  <span className="text-white text-2xl">
                    {expandedSection === 'placement' ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSection === 'placement' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/90">Content will be added here</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Campuses */}
              <div className="bg-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'campuses' ? '' : 'campuses')}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-white">Campuses Across 4 Global Cities</h3>
                  <span className="text-white text-2xl">
                    {expandedSection === 'campuses' ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSection === 'campuses' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/90">Content will be added here</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Academic Partners & Immersions */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Academic Partners</h4>
                <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center">
                  <span className="text-white font-bold">UBI BUSINESS SCHOOL</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Immersions</h4>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-white font-bold">INSEAD</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-white font-bold">IIT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="sticky top-[177px] h-fit">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/5] bg-gray-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DegreeAccreditation

