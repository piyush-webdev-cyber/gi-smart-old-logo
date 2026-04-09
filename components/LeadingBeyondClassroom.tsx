'use client'

import { motion } from 'framer-motion'
import { FaBullseye, FaRocket, FaGlobe } from 'react-icons/fa'

const LeadingBeyondClassroom = () => {
  const items = [
    { title: 'Student-Led Initiatives', description: 'Organize events, workshops, and community projects', icon: FaBullseye },
    { title: 'Startup Launches', description: 'Build and launch real businesses during your studies', icon: FaRocket },
    { title: 'Global Impact', description: 'Create solutions for real-world problems across continents', icon: FaGlobe },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Leading Beyond the <span className="font-extrabold italic">Classroom</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our students don't just learn—they lead. From organizing global events to launching startups, GI-SMART students are making their mark on the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#8b1538]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                className="mb-4 relative z-10 flex justify-center"
              >
                {item.icon && <item.icon className="text-6xl text-[#8b1538]" />}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
              <p className="text-gray-700 relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadingBeyondClassroom

