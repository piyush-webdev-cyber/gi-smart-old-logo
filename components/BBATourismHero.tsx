'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const BBATourismHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-[177px] pb-16 bg-gradient-to-b from-[#0a0a0a] to-[#0a1628]">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bachelor of Business Administration in <span className="font-extrabold">Tourism and Hospitality Innovation</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              3 Years • 9 Academic Terms • Global Service Ecosystems
            </p>
            <p className="text-base md:text-lg mb-8 text-white/80 leading-relaxed">
              Prepare for the next generation of smart tourism, luxury experiences, and sustainable hospitality management. Learn how to integrate innovation, digital systems, and sustainability into global service ecosystems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-base md:text-lg flex items-center gap-2 hover:bg-[#ffed4e] transition-all duration-300"
                >
                  APPLY NOW
                  <FaExternalLinkAlt className="text-sm" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                DOWNLOAD BROCHURE
                <FaExternalLinkAlt className="text-sm" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[4/5] bg-gray-900 rounded-lg relative overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              </div>
            </div>
            
            {/* Program Details Badge */}
            <div className="absolute -right-4 bottom-4 bg-gradient-to-br from-[#0a1628] to-[#1a2332] border-2 border-[#ffd700] text-white p-4 rounded-lg shadow-lg max-w-[220px]">
              <div className="text-xs font-bold mb-2 text-[#ffd700]">PROGRAM STRUCTURE</div>
              <div className="text-xs leading-tight space-y-1">
                <div>13 Weeks per Term</div>
                <div>3 Terms per Year</div>
                <div>Multi-Campus Exposure</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BBATourismHero

