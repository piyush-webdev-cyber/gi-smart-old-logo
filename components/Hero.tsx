'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-[125px] pb-12 sm:pb-16 md:pb-24 bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            <div className="mb-4 sm:mb-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#ffd700] font-semibold mb-2">Welcome to the Future of Education</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                Where Intelligence Meets Imagination
              </h1>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 sm:mb-4">
              GI-SMART – The Global Institute for Strategic Management & Advanced Research Technologies
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
              In an age defined by artificial intelligence, data systems, and digital transformation, GI-SMART is more than an academic institution — it's a global innovation ecosystem. We are cultivating a new generation of thinkers, designers, and strategists who will lead the industries of the 21st century.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('explore-programs')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffd700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
              >
                EXPLORE CURRICULUM
                <FaExternalLinkAlt />
              </motion.button>
            </div>

            <p className="text-white/80 text-xs sm:text-sm">
              Round 1 Deadline: 16th Feb 2026
            </p>
          </motion.div>

          {/* Right Content - Video/Screen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-white/20">
              <div className="aspect-video bg-gray-900 rounded relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ffd700] mb-2 sm:mb-4">
                      Letter to my 'Classmates'
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-white/80">
                      A celebration of what is to come and who will be with us in each of those moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
