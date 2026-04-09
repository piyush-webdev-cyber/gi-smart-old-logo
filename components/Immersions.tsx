'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const locations = ['Dubai', 'India', 'Singapore', 'Ghana', 'United States', 'Argentina', 'Europe']

const immersions = {
  business: {
    title: 'Yummex Food Exhibition, Middle East (September 2024)',
    description: 'Get a taste of the global sweet, confectionery, bakery, and snack food industry.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
  },
  cultural: {
    title: 'Dubai Gold Souk',
    description: 'Bargain for gold jewelry, learn about goldsmithing at the largest gold market...',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
  },
}

const Immersions = () => {
  const [activeLocation, setActiveLocation] = useState('Dubai')

  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Learn by Immersing Yourself, Across the World
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From global trade shows to local bazaars, from conglomerates to startups - witness how businesses unfold. First hand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Locations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {locations.map((location, index) => (
              <button
                key={location}
                onClick={() => setActiveLocation(location)}
                className={`w-full text-left p-4 rounded-lg transition-colors flex items-center gap-3 ${
                  activeLocation === location
                    ? 'bg-[#ffd700] text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="w-2 h-2 bg-current rounded-full" />
                <span className="font-semibold">{location}</span>
              </button>
            ))}
          </motion.div>

          {/* Middle - Business Immersions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-[#ffd700] text-sm font-semibold uppercase tracking-wide mb-4">
              Business Immersions
            </div>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${immersions.business.image})` }}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{immersions.business.title}</h3>
            <p className="text-white/80">{immersions.business.description}</p>
          </motion.div>

          {/* Right - Cultural Immersions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="text-[#ffd700] text-sm font-semibold uppercase tracking-wide mb-4">
              Cultural Immersions
            </div>
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${immersions.cultural.image})` }}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{immersions.cultural.title}</h3>
            <p className="text-white/80">{immersions.cultural.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Immersions

