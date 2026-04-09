'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const newsItems = [
  {
    source: 'Forbes',
    headline: "I don't think entrepreneurship is risky: B-school founder Pratham Mittal",
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logoColor: 'text-blue-600',
  },
  {
    source: 'Entrepreneur',
    headline: 'Learn business by doing business across the Globe: The next revolution in Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logoColor: 'text-[#8b1538]',
  },
  {
    source: 'FT Education.com',
    headline: "Global Survey by GI-SMART College of Business unveils key gaps in Business Education and growing importance of 'Founder Mode'",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logoColor: 'text-red-600',
  },
  {
    source: 'Gulf News',
    headline: 'GI-SMART College of Business launches a cross-border business programme across 7 countries',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logoColor: 'text-gray-800',
  },
]

const TetrInNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            GI-SMART in the <span className="italic font-bold">News</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#00ff88]/20 hover:bg-[#00ff88]/30 rounded flex items-center justify-center text-[#00ff88] transition-colors"
            >
              ←
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#ffd700] hover:bg-[#ffed4e] rounded flex items-center justify-center text-black transition-colors"
            >
              →
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.headline}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className={`text-sm font-bold mb-2 ${item.logoColor}`}>
                  {item.source}
                </h3>
                <p className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#8b1538] transition-colors">
                  {item.headline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffd700] text-white font-bold px-8 py-4 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#ffed4e] hover:text-black transition-all duration-300"
          >
            VIEW MORE
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default TetrInNews

