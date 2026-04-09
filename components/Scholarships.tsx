'use client'

import { motion } from 'framer-motion'

const scholarships = [
  {
    title: 'Merit Scholarship',
    amount: 'Up to 50%',
    description: 'For outstanding academic achievements',
  },
  {
    title: 'Need-Based Aid',
    amount: 'Up to 75%',
    description: 'Financial assistance for deserving students',
  },
  {
    title: 'Global Leader',
    amount: 'Full Tuition',
    description: 'For exceptional leadership potential',
  },
]

const Scholarships = () => {
  return (
    <section id="scholarships" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Scholarships</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Financial support to make your education accessible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{scholarship.amount}</div>
              <h3 className="text-xl font-bold text-white mb-3">{scholarship.title}</h3>
              <p className="text-white/70">{scholarship.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Scholarships

