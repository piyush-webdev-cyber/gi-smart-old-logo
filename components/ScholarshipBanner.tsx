'use client'

import { motion } from 'framer-motion'
import { FaVolumeUp } from 'react-icons/fa'

const ScholarshipBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] py-4 px-6 rounded-lg mb-8"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-2xl"
        >
          <FaVolumeUp />
        </motion.div>
        <p className="text-white font-medium">
          GI-SMART scholarships cover up to 100% of the tuition fees for undergraduate and postgraduate candidates.
        </p>
      </div>
    </motion.div>
  )
}

export default ScholarshipBanner

