'use client'

import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const videos = [
  {
    title: 'Global Students, Different Cultures, One Epic Holi Celebration!',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    title: 'International Students Try Indian Food',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
  {
    title: 'Cultural Immersion: The Many Colors of Amritsar',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
  },
  {
    title: 'How Emirates Changed Flying Forever',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    title: 'GI-SMART Tribe @ GITEX 2024 Dubai',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  },
]

const AllInOneJourney = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            All in One Journey
          </h2>
          <p className="text-xl text-gray-600">
            Press play to see how we turn the world into our classroom.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${video.image})` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaPlay className="text-xl text-black ml-1" />
                  </motion.div>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{video.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((dot, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === 0 ? 'bg-[#8b1538] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllInOneJourney

