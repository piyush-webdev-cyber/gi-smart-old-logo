'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

const ScholarshipsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left - Image (2/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-cover bg-center" />
            </div>
          </motion.div>

          {/* Right - Text and CTA (1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 lg:p-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 mb-8 leading-relaxed">
              GI-SMART scholarships cover up to <strong className="font-bold">the full tuition fee</strong> for undergraduate and postgraduate candidates.
            </p>
            <Link href="/admissions#scholarships">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffd700] text-black px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-[#ffed4e] transition-colors"
              >
                APPLY NOW
                <FaExternalLinkAlt className="text-xs" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ScholarshipsSection

