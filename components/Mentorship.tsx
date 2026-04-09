'use client'

import { motion } from 'framer-motion'
import { FaUsers } from 'react-icons/fa'

const Mentorship = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-0 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white pr-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Access Real-Time Mentorship from 100+ Experts
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              From <strong>cybersecurity</strong> to <strong>generative AI</strong>, our mentors span a wide range of industries from across the globe.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-4 h-4 bg-pink-500 rounded mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 leading-relaxed">
                    Whether you're building a startup or exploring jobs, our mentors provide <strong>tailored 1:1 mentorship</strong>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-4 h-4 bg-blue-400 rounded mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 leading-relaxed">
                    Mentors can assist with <strong>last-minute assignments</strong>, interview prep or even emotional support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-full bg-[#00ff88] mx-8" />

          {/* Right - Icon Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center pl-12"
          >
            <div className="bg-purple-500/20 rounded-full p-8 mb-4">
              <FaUsers className="text-purple-400 text-5xl" />
            </div>
            <p className="text-white text-lg font-semibold">Mentorship Platform</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mentorship

