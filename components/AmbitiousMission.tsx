'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const AmbitiousMission = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#f0f8f0] relative overflow-hidden">
      {/* Decorative squares pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-2 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#8b1538] rounded-sm" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              An ambitious mission needs <span className="font-bold">ambitious</span> people.
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
              If you resonate with our mission, share your resume along with a brief note about you.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center" />
            </div>

            {/* Overlapping Boxes */}
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/careers">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#ffd700] text-[#8b1538] p-4 sm:p-5 md:p-6 rounded-lg cursor-pointer relative min-w-[150px] sm:min-w-[200px]"
                >
                  <FaExternalLinkAlt className="absolute top-2 sm:top-3 right-2 sm:right-3 text-[#8b1538] text-base sm:text-lg" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">Careers at GI-SMART</h3>
                </motion.div>
              </Link>
              <Link href="mailto:recruitment@GI-SMART.org">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#8b1538] text-white p-4 sm:p-5 md:p-6 rounded-lg cursor-pointer relative min-w-[150px] sm:min-w-[200px]"
                >
                  <FaExternalLinkAlt className="absolute top-2 sm:top-3 right-2 sm:right-3 text-white text-base sm:text-lg" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">Write to Us</h3>
                  <p className="text-xs sm:text-sm text-white/80 break-all">recruitment@GI-SMART.org</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AmbitiousMission

