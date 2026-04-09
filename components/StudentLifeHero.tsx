'use client'

import { motion } from 'framer-motion'

const StudentLifeHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-[125px] bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#d4af37]/30 rounded-lg"
          animate={{ 
            opacity: [0.3, 1, 0.5, 1],
            scale: [0.8, 1, 1.1, 1],
            rotate: [0, 12, 45, 12]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-[#d4af37]/30 rounded-lg"
          animate={{ 
            opacity: [0.3, 1, 0.5, 1],
            scale: [0.8, 1, 1.1, 1],
            rotate: [0, 45, 12, 45]
          }}
          transition={{
            duration: 4,
            delay: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 bg-[#d4af37]/30 rounded-lg"
          animate={{ 
            opacity: [0.3, 1, 0.5, 1],
            scale: [0.8, 1, 1.1, 1],
            rotate: [0, 12, 45, 12]
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-40 w-28 h-28 bg-[#d4af37]/30 rounded-lg"
          animate={{ 
            opacity: [0.3, 1, 0.5, 1],
            scale: [0.8, 1, 1.1, 1],
            rotate: [0, 45, 12, 45]
          }}
          transition={{
            duration: 4,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-60 left-1/2 w-36 h-36 bg-[#d4af37]/30 rounded-lg"
          animate={{ 
            opacity: [0.3, 1, 0.5, 1],
            scale: [0.8, 1, 1.1, 1],
            rotate: [0, 12, 45, 12]
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white inline-block"
            >
              Student
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#00ff88] inline-block"
            >
              Life
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto font-medium"
          >
            Experience a vibrant community beyond the classroom
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default StudentLifeHero

