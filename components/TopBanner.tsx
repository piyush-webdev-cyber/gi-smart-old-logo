'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const TopBanner = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-sm font-medium">Round 1 Deadline: 16th Feb 2026</span>
        <Link href="/admissions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffd700] text-black px-6 py-2 rounded font-semibold text-sm flex items-center gap-2 hover:bg-[#ffed4e] transition-colors"
          >
            APPLY NOW
            <FaExternalLinkAlt className="text-xs" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default TopBanner

