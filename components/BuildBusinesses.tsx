'use client'

import { motion } from 'framer-motion'

const businesses = [
  {
    title: 'E-Commerce',
    location: 'Dubai',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
  },
  {
    title: 'FMCG Brand',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad',
  },
  {
    title: 'Kickstarter',
    location: 'Singapore & Malaysia',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
]

const BuildBusinesses = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Learn by Building <span className="italic font-bold">7 Businesses in 7 Countries</span>
            </h2>
            <p className="text-xl text-gray-600">
              Build an e-commerce business in Dubai, launch a social venture in Ghana and explore the ins and outs of 30+ industries.
            </p>
          </motion.div>
          <div className="hidden lg:flex gap-4">
            <button className="w-12 h-12 bg-white border-2 border-gray-300 hover:bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 transition-colors">
              ←
            </button>
            <button className="w-12 h-12 bg-[#ffd700] hover:bg-[#ffed4e] rounded-lg flex items-center justify-center text-black transition-colors">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${business.image})` }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{business.title}</h3>
              <p className="text-gray-600">{business.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuildBusinesses

