'use client'

import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const videos = [
  {
    id: 1,
    title: "Parents' Message to the GI-SMART Tribe",
    description: "Meet the proud Parents of GI-SMART's first landmark cohort.",
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  },
  {
    id: 2,
    title: "GI-SMART Talks Ep 2: Sabeer Bhatia, Inventor of Email",
    description: "Sabeer Bhatia shares his insights on entrepreneurship, Silicon Valley and AI's future.",
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
  },
  {
    id: 3,
    title: "Meet the GI-SMART Tribe: Class of 2028",
    description: "Our diverse cohort of 120 exceptional achievers come from 45 nations.",
    image: 'https://images.unsplash.com/photo-1518600506278-4e8ef466b810',
  },
]

const TetrTalks = () => {
  return (
    <section className="py-24 bg-[#f0f8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TetrTalks

