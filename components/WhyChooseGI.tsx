'use client'

import { motion } from 'framer-motion'
import { FaBullseye, FaGlobe, FaBriefcase, FaHandshake, FaRocket, FaMapMarkerAlt, FaCompass, FaUsers } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const WhyChooseGI = () => {
  const reasons = [
    {
      icon: FaBullseye,
      title: '21st-Century Curriculum',
      description: 'AI, design, data, and innovation — aligned with the industries of tomorrow'
    },
    {
      icon: FaGlobe,
      title: 'Global Recognition',
      description: 'Built on Bologna and RNCP frameworks for European and international mobility'
    },
    {
      icon: FaBriefcase,
      title: 'Employability-Driven Learning',
      description: 'Each course mapped to high-demand career pathways'
    },
    {
      icon: FaHandshake,
      title: 'Multinational Cohorts',
      description: 'Experience an environment where collaboration crosses languages and borders'
    },
    {
      icon: FaRocket,
      title: 'Professional & Life Opportunities',
      description: 'Build international networks that extend far beyond graduation'
    },
    {
      icon: FaUsers,
      title: 'Expert Mentorship',
      description: 'Learn from industry leaders and academic experts who guide your journey to success'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose GI-SMART?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Education is evolving — and so must you. At GI-SMART, you don't just learn how to adapt to the future; you become the one designing it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#f0f8f0] to-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-[#8b1538]/20 hover:border-[#8b1538] transition-all duration-300"
            >
              <div className="mb-3 sm:mb-4">
                {reason.icon && <reason.icon className="text-3xl sm:text-4xl md:text-5xl text-[#8b1538]" />}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-white text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <FaRocket className="text-3xl sm:text-4xl text-[#ffd700]" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Your Future Starts Here
            </h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Whether your ambition is to create, innovate, lead, or explore, our programs are your launchpad to a world without boundaries.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-semibold">
            <div className="flex items-center justify-center gap-2">
              <FaStar className="text-base sm:text-lg md:text-xl text-[#ffd700]" />
              <span>Applications Now Open</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaGlobe className="text-base sm:text-lg md:text-xl text-[#ffd700]" />
              <span>Choose Your Anchor Campus</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-base sm:text-lg md:text-xl text-[#ffd700]" />
              <span>Study Across Four Continents</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCompass className="text-base sm:text-lg md:text-xl text-[#ffd700]" />
              <span>Shape the Future of AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseGI

