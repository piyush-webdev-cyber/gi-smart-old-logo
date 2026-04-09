'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Fill out the',
    highlight: 'Application form',
    color: 'pink',
    borderColor: 'border-pink-500',
  },
  {
    number: 2,
    title: 'Attempt the',
    highlight: 'GI-SMART Trial, an AI-Powered Aptitude test',
    color: 'blue',
    borderColor: 'border-blue-500',
  },
  {
    number: 3,
    title: 'Interview with an',
    highlight: 'Industry Leader to assess fit',
    color: 'purple',
    borderColor: 'border-purple-500',
  },
]

const ThreeStepProcess = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-2 w-full h-full">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-sm" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 mb-2">A simple 3-step admission process</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#0a1628] to-[#8b1538] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className={`w-24 h-24 bg-white border-4 ${step.borderColor} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                >
                  <span className="text-4xl font-bold text-gray-900">{step.number}</span>
                </motion.div>
                <p className="text-gray-700 mb-1">
                  {step.title}{' '}
                  <span className="font-bold text-gray-900">{step.highlight}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeStepProcess

