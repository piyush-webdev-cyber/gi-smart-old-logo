'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const newsItems = [
  {
    source: 'Forbes',
    title: 'I don\'t think entrepreneurship is risky: B-school founder Pratham Mittal.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    source: 'Entrepreneur',
    title: 'Learn business by doing business across the Globe: The next revolution in Entrepreneurship.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
  {
    source: 'ET Education.com',
    title: 'Global Survey by GI-SMART College of Business unveils key gaps in Business Education and growing importance of \'Founder Mode\'.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
  },
  {
    source: 'GULF NEWS',
    title: 'GI-SMART College of Business launches a cross-border business programme across 7 continents',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094',
  },
]

const TetrNews = () => {
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
            GI-SMART in the News
          </motion.h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors">
              ←
            </button>
            <button className="w-12 h-12 bg-[#ffd700] hover:bg-[#ffed4e] rounded-lg flex items-center justify-center text-black transition-colors">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden border-2 border-black cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-black rounded flex items-center justify-center">
                  <FaExternalLinkAlt className="text-white text-sm" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-gray-600 mb-2">{item.source}</div>
                <h3 className="text-sm font-semibold text-gray-900 leading-tight">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 mx-auto hover:bg-[#ffed4e] transition-colors"
            >
              VIEW MORE
              <FaExternalLinkAlt />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TetrNews

