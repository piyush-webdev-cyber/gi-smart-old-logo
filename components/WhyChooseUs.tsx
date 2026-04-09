'use client'

import { motion } from 'framer-motion'
import { FaGlobe, FaGraduationCap, FaBriefcase, FaRocket, FaHandshake, FaTrophy } from 'react-icons/fa'

const features = [
  {
    icon: FaGlobe,
    title: 'Global Exposure',
    description: 'Study across multiple countries and experience diverse business cultures.',
  },
  {
    icon: FaGraduationCap,
    title: 'Expert Faculty',
    description: 'Learn from industry leaders and renowned academicians.',
  },
  {
    icon: FaBriefcase,
    title: 'Industry Partnerships',
    description: 'Direct connections with top companies for internships and placements.',
  },
  {
    icon: FaRocket,
    title: 'Innovation Focus',
    description: 'Cutting-edge curriculum aligned with future business needs.',
  },
  {
    icon: FaHandshake,
    title: 'Networking',
    description: 'Build lifelong connections with peers and professionals worldwide.',
  },
  {
    icon: FaTrophy,
    title: 'Accreditation',
    description: 'Recognized by leading international accreditation bodies.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-dark-light/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover what makes our programs unique and transformative
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon && <feature.icon className="text-5xl text-primary" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

