'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const categories = [
  { id: 'pitch', label: 'Pitch Please', subtitle: '(Reality Show)', active: true },
  { id: 'brand', label: 'Brand Wars', subtitle: '(D2C Challenge)', active: false },
  { id: 'tank', label: 'GI-SMART Tank', subtitle: '(Dropshipping Challenge)', active: false },
]

const videos = [
  {
    id: 1,
    title: 'Trailer: The World\'s Youngest Founders',
    description: 'Watch founders from 45 nations hustle, adapt, and pitch their way to D2C success in India.',
    category: 'pitch',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    badge: 'CO-CREATED BY GI-SMART & WTF',
    badgeText: 'PITCH PLEASE',
  },
  {
    id: 2,
    title: 'Episode 1: 17-Year-Old Founders Enter India\'s Toughest Market',
    description: 'Watch these student founders build their D2C businesses from scratch in India, navigating challenges',
    category: 'pitch',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
    badge: '$320,000 in the First Year of College?',
    badgeText: 'Pitch Please Ep 1',
  },
  {
    id: 3,
    title: 'Episode 2: The Startups Are Under Pressure',
    description: 'Watch student founders face scaling challenges, team conflicts, and critical decisions that could make or break',
    category: 'pitch',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
    badge: '₹1 Lakh in just 8 hours?',
    badgeText: 'This Brand Did It! | Pitch Please Ep. 2',
  },
]

const DemoDays = () => {
  const [activeCategory, setActiveCategory] = useState('pitch')

  return (
    <section className="py-24 bg-gray-100 relative">
      {/* Decorative squares */}
      <div className="absolute top-10 right-10 grid grid-cols-2 gap-1 opacity-20">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-gradient-to-br from-[#0a1628] to-[#1a2332]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Dorm Rooms to <span className="font-bold">Demo Days</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            At the end of each term, students pitch to real VCs and raise funds. Watch the boldest ideas attract the biggest investments.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-8 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="text-left group"
              >
                <div className="text-gray-900 text-xl font-semibold mb-1">
                  <span className={activeCategory === category.id ? 'underline decoration-[#ffd700] decoration-4' : ''}>
                    {category.label}
                  </span>
                </div>
                <div className="text-gray-600 text-sm">{category.subtitle}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Videos Grid */}
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
                <div className="absolute top-4 left-4 bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white px-3 py-1 rounded text-xs font-semibold">
                  {video.badge}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaPlay className="text-xl text-black ml-1" />
                  </motion.div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DemoDays

