'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa'

const Startups = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553028826-f4804a6dba3b')] bg-cover bg-center" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#ffd700] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform border-4 border-black">
                  <FaPlay className="text-2xl text-black ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-32 bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded" />
            <div className="flex gap-2 mt-4 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-3 h-3 bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-full" />
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white p-12 rounded-lg"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projects <span className="italic font-bold">StartUps</span> at <span className="italic font-bold">GI-SMART</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              From idea to <strong>execution</strong>, a sneak peek into the businesses incubated at GI-SMART.
            </p>
            <Link href="/startups">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-lg border-2 border-black flex items-center gap-2 hover:bg-[#ffed4e] transition-colors"
              >
                HEAR THEIR STORY
                <FaExternalLinkAlt className="transform rotate-[-45deg]" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Startups

