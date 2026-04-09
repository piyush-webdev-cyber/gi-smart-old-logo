'use client'

import { motion } from 'framer-motion'

const VisionMission = () => {
  return (
    <section className="py-24 bg-dark-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">Our Vision</h2>
            <p className="text-white/70 leading-relaxed">
              To be the world's leading institution for transformative business education,
              empowering future leaders to create positive global impact through innovation,
              ethical leadership, and cross-cultural understanding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">Our Mission</h2>
            <p className="text-white/70 leading-relaxed">
              To deliver exceptional business education through innovative programs,
              world-class faculty, and global partnerships that prepare students for
              leadership roles in an interconnected business world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

