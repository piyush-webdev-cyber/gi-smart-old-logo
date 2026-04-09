'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const TetrLaunchpad = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              GI-SMART Launchpad
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              A <strong>$10 million</strong> fund backing the next generation of bold innovators. From capital, mentorship to global connections we help you turn game-changing ideas into reality.
            </p>
            <Link href="/launchpad">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffd700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg flex items-center justify-center lg:justify-start gap-2 hover:bg-[#ffed4e] transition-colors"
              >
                LEARN MORE
                <FaExternalLinkAlt />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd')] bg-cover bg-center" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg"
                >
                  <FaPlay className="text-2xl text-black ml-1" />
                </motion.div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ffd700] opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TetrLaunchpad

