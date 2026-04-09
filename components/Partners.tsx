'use client'

import { motion } from 'framer-motion'

const partners = [
  'Partner 1', 'Partner 2', 'Partner 3', 'Partner 4',
  'Partner 5', 'Partner 6', 'Partner 7', 'Partner 8',
]

const Partners = () => {
  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Partners</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Trusted by leading organizations worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center justify-center hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-white/60 font-medium text-sm">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

