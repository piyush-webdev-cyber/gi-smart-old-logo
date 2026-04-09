'use client'

import { motion } from 'framer-motion'

const NasContentFellowship = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="NAS Content Fellowship"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0a1628]/95 to-[#1a2332]/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              The NAS Content Fellowship
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Led by creator Nuseir Yassin (Nas Daily), the 'Mastering Digital Storytelling' Fellowship empowers students to unlock their potential in storytelling, filming, editing, and harnessing AI to innovate in content creation.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#ffd700]/20 rounded-full blur-2xl opacity-50 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#00ff88]/20 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default NasContentFellowship

