'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Application', description: 'Submit your application online' },
  { number: '02', title: 'Review', description: 'Our team reviews your profile' },
  { number: '03', title: 'Interview', description: 'Virtual or in-person interview' },
  { number: '04', title: 'Decision', description: 'Receive admission decision' },
]

const AdmissionProcess = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#00ff88]">
            Admission Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple steps to join our global community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#00ff88]/50 transition-all duration-300">
                <div className="text-5xl font-bold text-[#00ff88] mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#00ff88]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdmissionProcess

