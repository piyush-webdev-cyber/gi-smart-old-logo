'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const AIDegreeAccreditation = () => {
  const [expandedSection, setExpandedSection] = useState<string>('experiences')

  return (
    <section id="accreditation" className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="bg-[#d4af37] text-[#0a1628] text-xs font-bold px-3 py-1 rounded uppercase">
            DEGREE & ACCREDITATION
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Graduate with a <span className="font-extrabold italic">Bachelor of Science in Artificial Intelligence</span> from Illinois Institute of Technology
          <FaExternalLinkAlt className="text-[#ffd700] inline ml-1" />
        </h2>

        <div className="space-y-4 mb-12">
          {/* Accordion Section 1 */}
          <div className="bg-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === 'experiences' ? '' : 'experiences')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl font-bold text-white">
                Unparalleled Real-World Experiences and Career Opportunities
              </h3>
              <span className="text-white text-2xl">{expandedSection === 'experiences' ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedSection === 'experiences' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-3">
                    <p className="text-white/90">$75,921: avg. US salary for an Illinois Tech graduates in 2023</p>
                    <p className="text-white/90">99% placement in US with employers including Boeing, Amazon and JP Morgan</p>
                    <p className="text-white/90">Students go on to attend NYU, MIT, Carnegie Mellon, Brown etc for Graduate School</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Accordion Section 2 */}
          <div className="bg-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === 'prestigious' ? '' : 'prestigious')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl font-bold text-white">
                Prestigious US Degree from Illinois Tech, Chicago's Leading Tech University
              </h3>
              <span className="text-white text-2xl">{expandedSection === 'prestigious' ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedSection === 'prestigious' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/90">Content for prestigious degree section...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Accordion Section 3 */}
          <div className="bg-white/10 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === 'innovation' ? '' : 'innovation')}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-xl font-bold text-white">
                Innovation Hub for Aspiring Entrepreneurs
              </h3>
              <span className="text-white text-2xl">{expandedSection === 'innovation' ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
              {expandedSection === 'innovation' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/90">Content for innovation hub section...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Academic Partners & Immersions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Academic Partners</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-6 py-4 rounded-lg">
                <div className="text-gray-400 font-bold text-sm">UBI BUSINESS SCHOOL</div>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg">
                <div className="text-gray-400 font-bold text-sm">ILLINOIS TECH</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Immersions</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-6 py-4 rounded-lg">
                <div className="text-gray-400 font-bold text-sm">INSEAD</div>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg">
                <div className="text-gray-400 font-bold text-sm">IIT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIDegreeAccreditation

