'use client'

import { motion } from 'framer-motion'

interface ProgramOverviewProps {
  duration?: string
  location?: string
  eligibility?: string
  format?: string
  startDate?: string
}

const ProgramOverview = ({ 
  duration = '4 Years',
  location = '7 Countries',
  eligibility = 'Grade XII',
  format = 'Full Time',
  startDate = 'Sept 2026'
}: ProgramOverviewProps) => {
  const overviewItems = [
    { label: 'DURATION', value: duration },
    { label: 'LOCATION', value: location },
    { label: 'ELIGIBILITY', value: eligibility },
    { label: 'FORMAT', value: format },
    { label: 'START DATE', value: startDate },
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {overviewItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                {item.label}
              </div>
              <div className="text-xl md:text-2xl font-bold text-[#8b1538]">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview

