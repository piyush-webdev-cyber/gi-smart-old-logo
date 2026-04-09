'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaVolumeUp } from 'react-icons/fa'

const creators = [
  {
    name: 'ANJALI CHHETRI',
    handle: '@anjalichh.127',
    country: '🇧🇹',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    name: 'ANUSKA SUBEDI',
    handle: '@anuska._.subedi',
    country: '🇳🇵',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
  },
  {
    name: 'Creator 3',
    handle: '@creator3',
    country: '🇮🇳',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
]

const StudentCreators = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Profile Pics */}
            <div className="flex gap-4 mb-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600" />
                </div>
              ))}
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              From GI-SMART to Trending: <span className="italic font-bold">Our Student Creators in Action</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Reels to real impact; these GI-SMART students are redefining what it means to build in public. Here's a glimpse of the Tribe sharing every win, pivot, and lesson - one post at a time.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 transition-colors">
                ←
              </button>
              <button className="w-12 h-12 bg-[#ffd700] hover:bg-[#ffed4e] rounded-lg flex items-center justify-center text-black transition-colors">
                →
              </button>
            </div>
          </motion.div>

          {/* Right - Creator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creators.map((creator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-3">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${creator.image})` }}
                  />
                  <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded flex items-center justify-center">
                    <FaVolumeUp className="text-white text-xs" />
                  </div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-black/50 rounded flex items-center justify-center">
                    <FaExternalLinkAlt className="text-white text-xs" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-900 font-semibold mb-1 flex items-center justify-center gap-1">
                    {creator.country} {creator.name}
                  </div>
                  <div className="text-gray-600 text-sm">{creator.handle}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentCreators

