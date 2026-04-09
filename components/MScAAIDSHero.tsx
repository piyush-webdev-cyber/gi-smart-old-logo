'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const MScAAIDSHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-[177px] pb-16 bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master of Science in <span className="font-extrabold">Applied Artificial Intelligence & Data Systems</span>
            </h1>
            <p className="text-lg md:text-xl mb-4 text-white/90">
              2 Years • 6 Terms • Hybrid Model (Dubai-based with Paris mobility)
            </p>
            <p className="text-base md:text-lg mb-2 text-white/80">
              <span className="font-semibold">120 ECTS</span> • RNCP Level 7 (France) / UAE NQF Level 9
            </p>
            <p className="text-sm md:text-base mb-8 text-white/70">
              Dubai-first global program with European equivalence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-base md:text-lg flex items-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
                >
                  APPLY NOW
                  <FaExternalLinkAlt className="text-sm" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                DOWNLOAD BROCHURE
                <FaExternalLinkAlt className="text-sm" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/5] bg-gray-900 rounded-lg relative overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              </div>
            </div>
            
            {/* Program Details Badge */}
            <div className="absolute -right-4 bottom-4 bg-gradient-to-br from-[#0a1628] to-[#1a2332] border-2 border-[#ffd700] text-white p-4 rounded-lg shadow-lg max-w-[240px]">
              <div className="text-xs font-bold mb-2 text-[#ffd700]">PROGRAM HIGHLIGHTS</div>
              <div className="text-xs leading-tight space-y-1">
                <div>3 Intakes per Year</div>
                <div>Paris Mobility Option</div>
                <div>Q1 2026 Launch</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MScAAIDSHero

