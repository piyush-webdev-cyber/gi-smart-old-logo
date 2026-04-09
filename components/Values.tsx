'use client'

import { motion } from 'framer-motion'

const values = [
  { title: 'Excellence', description: 'Commitment to highest standards' },
  { title: 'Innovation', description: 'Embracing cutting-edge approaches' },
  { title: 'Integrity', description: 'Ethical leadership and transparency' },
  { title: 'Global Mindset', description: 'Cross-cultural understanding' },
]

const Values = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-3 hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values

