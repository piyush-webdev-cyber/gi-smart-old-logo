'use client'

import { motion } from 'framer-motion'

const timelineData = [
  { country: 'USA', term: 'Fall Term', months: 'Sep - Dec' },
  { country: 'UK', term: 'Spring Term', months: 'Jan - Apr' },
  { country: 'Singapore', term: 'Summer Term', months: 'May - Aug' },
  { country: 'Germany', term: 'Fall Term', months: 'Sep - Dec' },
]

const Timeline = () => {
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
            <span className="text-gradient">Global Learning</span>
            <br />
            <span className="text-white">Timeline</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Experience education across multiple continents and cultures
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary/30 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-gradient">{item.country}</span>
                    <div className="w-3 h-3 bg-primary rounded-full glow-effect group-hover:scale-150 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.term}</h3>
                  <p className="text-white/60 text-sm">{item.months}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

