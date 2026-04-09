'use client'

import { motion } from 'framer-motion'
import { FaCheck, FaPlay } from 'react-icons/fa'

const CareerLabsStudentLife = () => {
  return (
    <section className="py-24 bg-[#f0f8f0] relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-2 w-full h-full">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#8b1538] rounded-sm" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Career Labs at <span className="font-extrabold italic">GI-SMART</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Get hands-on experience with real companies, build your portfolio, and launch your career before you graduate.
            </p>
            <ul className="space-y-4">
              {[
                'Work with top companies on real projects',
                'Build a portfolio of professional work',
                'Network with industry leaders',
                'Secure job offers before graduation',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-6 h-6 bg-[#8b1538] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <FaCheck className="text-white text-sm font-bold" />
                  </motion.div>
                  <motion.span
                    className="text-gray-700 text-lg group-hover:text-[#8b1538] transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: 'spring',
              stiffness: 100
            }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-[#0a1628] to-[#8b1538] rounded-lg flex items-center justify-center overflow-hidden relative group">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                  className="w-20 h-20 bg-[#ffd700] rounded-full flex items-center justify-center cursor-pointer shadow-lg relative z-10"
                >
                  <motion.span
                    className="text-3xl text-black ml-1"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <FaPlay />
                  </motion.span>
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-[#00ff88]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CareerLabsStudentLife

