'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const BachelorProgramHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-[177px] pb-16 bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')] bg-cover bg-center" />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              A global <span className="font-extrabold">Bachelor's Program in Management & Technology</span>, where you live and learn across 7 countries
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-base md:text-lg flex items-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
                >
                  APPLY NOW | DEADLINE: 16TH FEB
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
              <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')] bg-cover bg-center" />
              </div>
            </div>
            
            {/* Award Badge */}
            <div className="absolute -right-4 top-4 bg-gradient-to-br from-[#0a1628] to-[#1a2332] border-2 border-[#ffd700] text-white p-3 rounded-lg shadow-lg max-w-[200px]">
              <div className="text-xs font-bold mb-1 text-[#ffd700]">QS GOLD WINNER</div>
              <div className="text-xs leading-tight">Most Innovative Business School of 2025</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BachelorProgramHero

