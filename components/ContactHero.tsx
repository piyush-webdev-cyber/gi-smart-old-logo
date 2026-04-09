'use client'

import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative squares pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-20 gap-2 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.01, duration: 0.3 }}
              className="w-2 h-2 bg-[#8b1538] rounded-sm"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Its time to <span className="italic">get out there.</span>
          </motion.h2>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
