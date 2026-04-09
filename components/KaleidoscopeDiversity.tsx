'use client'

import { motion } from 'framer-motion'

const KaleidoscopeDiversity = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-10 right-10 grid grid-cols-4 gap-1 opacity-5">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-[#8b1538]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            A Kaleidoscope of <span className="font-extrabold italic">Diversity</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At GI-SMART, diversity isn't just a word—it's our reality. Our students come from over 50 countries, bringing unique perspectives, cultures, and experiences that enrich our global community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '50+', label: 'Countries Represented' },
            { number: '100+', label: 'Languages Spoken' },
            { number: '1000+', label: 'Global Alumni Network' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="text-center p-8 bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#8b1538]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                className="text-6xl font-bold text-[#8b1538] mb-3 relative z-10"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-800 font-semibold text-lg relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KaleidoscopeDiversity

