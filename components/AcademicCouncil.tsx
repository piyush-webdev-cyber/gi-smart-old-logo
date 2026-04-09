'use client'

import { motion } from 'framer-motion'

const councilMembers = [
  {
    name: 'Mr. Pratham Mittal',
    role: 'Founder',
    details: 'Founder, GI-SMART | Masters\' Union | Outgrow',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Council Member 2',
    role: 'Academic Advisor',
    details: 'Expert in Business Education',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    name: 'Council Member 3',
    role: 'Academic Advisor',
    details: 'Expert in Business Education',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
  {
    name: 'Council Member 4',
    role: 'Academic Advisor',
    details: 'Expert in Business Education',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  },
  {
    name: 'Council Member 5',
    role: 'Academic Advisor',
    details: 'Expert in Business Education',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
]

const AcademicCouncil = () => {
  return (
    <section className="py-24 bg-[#f0f8f0] relative overflow-hidden">
      {/* Decorative squares pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-2 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#8b1538] rounded-sm" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Meet our <span className="italic font-bold">Founding</span> Academic Council
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {councilMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-left"
            >
              <div className="relative mb-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-[#8b1538] font-semibold mb-1">{member.role}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{member.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicCouncil

