'use client'

import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const students = [
  { name: 'Brandon', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  { name: 'Colby', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
  { name: 'Diya', country: 'INDIA', flag: '🇮🇳', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  { name: 'Fathiyya', country: 'INDONESIA', flag: '🇮🇩', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
  { name: 'Isaac', country: 'USA', flag: '🇺🇸', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
]

const MeetTheTribe = () => {
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
            Meet the <span className="italic font-bold">Tribe</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-[#ffd700] hover:bg-[#ffed4e] rounded-lg flex items-center justify-center text-black transition-colors"
            >
              →
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-3"
                whileHover={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${student.image})` }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.span
                      className="text-2xl text-black ml-1"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <FaPlay className="text-xl" />
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-center"
              >
                <div className="text-white font-semibold mb-1 group-hover:text-[#ffd700] transition-colors">{student.name}</div>
                <div className="text-white/80 text-sm flex items-center justify-center gap-1">
                  {student.flag} {student.country}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2"
        >
          {[1, 2, 3, 4, 5].map((dot, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.5 }}
              className={`h-2 rounded-full transition-all ${
                index === 0 ? 'bg-[#ffd700] w-8' : 'bg-white/30 w-2'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MeetTheTribe

