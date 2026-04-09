'use client'

import { motion } from 'framer-motion'
import { FaPlay, FaBriefcase, FaGlobe } from 'react-icons/fa'

const EducationTetrWay = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Education The GI-SMART Way
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')] bg-cover bg-center" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#ffd700] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <FaPlay className="text-2xl text-black ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-12">
            {/* First Feature */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-1 h-full bg-[#ff69b4] ml-2" />
                <div className="w-12 h-12 bg-[#ff69b4] rounded-lg flex items-center justify-center -mt-6">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
              </div>
              <div className="flex-1 text-white">
                <div className="text-[#ffd700] text-sm font-semibold mb-2 uppercase tracking-wide">
                  Hands-On Pedagogy
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Learn Business by Doing Business
                </h3>
                <p className="text-white/80 leading-relaxed">
                  From <strong>Dropshipping in Dubai</strong> to building an <strong>AI start-up in the USA</strong>, our students learn business by actually building a business.
                </p>
              </div>
            </motion.div>

            {/* Second Feature */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-1 h-full bg-[#ff69b4] ml-2" />
                <div className="w-12 h-12 bg-[#ff69b4] rounded-lg flex items-center justify-center -mt-6">
                  <FaGlobe className="text-2xl text-white" />
                </div>
              </div>
              <div className="flex-1 text-white">
                <div className="text-[#ffd700] text-sm font-semibold mb-2 uppercase tracking-wide">
                  Learning in Action
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Learn Through Immersive Experiences
                </h3>
                <p className="text-white/80 leading-relaxed">
                  From <strong>Emirates HQ</strong> in Dubai to the <strong>Ferrari Museum</strong> in Italy, <strong>Googleplex</strong> in San Francisco to <strong>Zomato</strong> in India, our students learn from the world's best businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationTetrWay

