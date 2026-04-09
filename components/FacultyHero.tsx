'use client'

import { motion } from 'framer-motion'

const FacultyHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-[125px] bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4af37]/30 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#d4af37]/30 rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-[#d4af37]/30 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-[#d4af37]/30 rounded-lg rotate-45"></div>
        <div className="absolute top-60 left-1/2 w-36 h-36 bg-[#d4af37]/30 rounded-lg rotate-12"></div>
        <div className="absolute bottom-60 right-1/4 w-32 h-32 bg-[#d4af37]/30 rounded-lg rotate-45"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-[#d4af37]/30 rounded-lg rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#d4af37]/30 rounded-lg rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Learn from the finest <span className="font-extrabold italic">Minds in business</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From MDs, CEOs and CTOs of leading unicorns to Ivy League professors, our faculty brings knowledge that blends theory with real-world impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
            >
              MEET THE MASTERS
              <span className="text-xl">↓</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Faculty Portraits Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Top Left - Person with dark skin, white t-shirt */}
              <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Faculty member"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right - Woman with red top, play button overlay */}
              <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Faculty member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Left - Middle-aged person with glasses, green polo */}
              <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Faculty member"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right - Person with blue collar shirt and gray sweater */}
              <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Faculty member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FacultyHero

