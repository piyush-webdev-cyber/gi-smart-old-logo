'use client'

import { motion } from 'framer-motion'

const GlobalHomeAway = () => {
  const locations = [
    { city: 'Dubai', country: 'UAE', flag: '🇦🇪' },
    { city: 'Mumbai', country: 'India', flag: '🇮🇳' },
    { city: 'Singapore', country: 'Singapore', flag: '🇸🇬' },
    { city: 'Accra', country: 'Ghana', flag: '🇬🇭' },
    { city: 'Brussels', country: 'Belgium', flag: '🇧🇪' },
    { city: 'New York', country: 'USA', flag: '🇺🇸' },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0a0a0a] relative overflow-hidden">
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
            duration: 5,
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
            duration: 5,
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
            duration: 5,
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
            duration: 5,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
            Your Global Home Away From <span className="font-extrabold italic">Home</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Live and learn in 7 countries across 4 continents. Each location offers unique experiences, cultures, and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl group relative overflow-hidden"
            >
              {/* Hover effect gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                className="text-5xl mb-3 relative z-10"
              >
                {location.flag}
              </motion.div>
              <div className="text-white font-bold text-lg mb-1 relative z-10">{location.city}</div>
              <div className="text-white/80 text-sm relative z-10">{location.country}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlobalHomeAway

