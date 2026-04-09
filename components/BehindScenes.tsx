'use client'

import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const BehindScenes = () => {
  return (
    <section className="py-24 bg-[#f0f8f0] relative overflow-hidden">
      {/* Decorative squares */}
      <div className="absolute top-10 left-10 grid grid-cols-4 gap-1 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-[#8b1538]" />
        ))}
      </div>
      <div className="absolute top-10 right-10 grid grid-cols-4 gap-1 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-[#8b1538]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Go Behind the Scenes at <span className="font-bold">GI-SMART</span>
            </h2>
            <p className="text-xl text-gray-700 mb-4 font-semibold">
              The story behind GI-SMART
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Leaders discuss how GI-SMART is redefining education through 'learning by doing'.
            </p>
          </motion.div>

          {/* Right - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg"
                >
                  <FaPlay className="text-2xl text-black ml-1" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BehindScenes

