'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

const AboutTopHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[125px] bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655')] bg-cover bg-center" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[#ffd700] text-sm font-semibold uppercase tracking-wider">
                About GI-SMART
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Learn to Build.</span>
              <br />
              <span className="text-white italic">Build to Learn.</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              At GI-SMART, students learn business by building businesses while traveling across the world and getting mentored by top professors & practitioners.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/programs">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
                >
                  EXPLORE PROGRAMS
                  <FaExternalLinkAlt />
                </motion.button>
              </Link>
              
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                >
                  JOIN US
                  <span>→</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              {/* Main Image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7')] bg-cover bg-center" />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-lg" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white p-6 rounded-lg shadow-2xl border border-white/20"
            >
              <div className="text-xs font-bold mb-1 text-[#ffd700]">AWARD WINNER</div>
              <div className="text-sm font-semibold">QS Gold Winner: Most Innovative<br />Business School of 2025</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '50+', label: 'Startups Built' },
            { number: '15+', label: 'Countries Visited' },
            { number: '100+', label: 'Industry Mentors' },
            { number: '95%', label: 'Placement Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutTopHero

