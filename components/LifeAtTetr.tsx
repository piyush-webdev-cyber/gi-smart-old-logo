'use client'

import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { useState } from 'react'

const LifeAtTetr = () => {
  const [activeTab, setActiveTab] = useState('academic')
  const [activeAcademicTab, setActiveAcademicTab] = useState('masterclass')
  const [selectedLocation, setSelectedLocation] = useState('Dubai')

  const academicSpeakers = {
    masterclass: [
      { name: 'Sven Herzing', title: 'CTO, Talabat', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Nishant Sukumaran', title: 'Marketing Head, Dabur International', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Jeff Strachen', title: 'VP, Dubai\'s Department of Economy and Tourism', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Cherian Varghese', title: 'Senior VP-AI, Oracle EMEA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ],
    mentorship: [
      { name: 'John Smith', title: 'CEO, Tech Corp', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Sarah Johnson', title: 'CFO, Finance Inc', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Michael Chen', title: 'CTO, StartupXYZ', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Emily Davis', title: 'VP Marketing, BrandCo', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ],
    fireside: [
      { name: 'David Wilson', title: 'Founder, Innovation Labs', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Lisa Anderson', title: 'Executive Director, Global Ventures', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Robert Taylor', title: 'Managing Partner, VC Fund', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { name: 'Jennifer Brown', title: 'Chief Strategy Officer, Enterprise Co', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ],
  }

  return (
    <>
      {/* Main Title Section */}
      <section className="py-24 bg-[#f0f8f0] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-2 w-full h-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-sm" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Life at GI-SMART: Real-World Learning in <span className="font-extrabold italic">Action</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Academic Immersions Section */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] to-[#1a2332] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Immersions</h3>
            <p className="text-lg text-white/90 max-w-3xl">
              Solve real-world problems through regular mentorship sessions and masterclasses with CXOs and Industry leaders.
            </p>
          </motion.div>

          {/* Academic Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 mb-8 flex-wrap"
          >
            {['masterclass', 'mentorship', 'fireside'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveAcademicTab(tab)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                  activeAcademicTab === tab
                    ? 'bg-[#ffd700] text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tab === 'masterclass' && 'Masterclass'}
                {tab === 'mentorship' && 'Mentorship Roundtable'}
                {tab === 'fireside' && 'Fireside'}
              </motion.button>
            ))}
          </motion.div>

          {/* Speaker Grid */}
          <motion.div
            key={activeAcademicTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {academicSpeakers[activeAcademicTab as keyof typeof academicSpeakers].map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h4 className="text-white font-bold text-lg mb-1">{speaker.name}</h4>
                  <p className="text-white/80 text-sm">{speaker.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Business Immersions Section */}
      <section className="py-24 bg-[#f0f8f0] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-2 w-full h-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-sm" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Explore GI-SMART's Immersions</p>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Business Immersions</h3>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-300 rounded-lg px-6 py-2 pr-10 font-semibold text-gray-900 cursor-pointer hover:border-[#8b1538] transition-colors focus:outline-none focus:border-[#8b1538]"
                >
                  <option value="Dubai">Dubai</option>
                  <option value="India">India</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Ghana">Ghana</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gitex Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Gitex</h4>
            <p className="text-lg text-gray-700 mb-4 max-w-4xl">
              Visit the World's Biggest Tech Expo, meet founders and investors from across the world. Explore the latest innovations shaping industries worldwide - from cutting-edge AI to groundbreaking robotics.
            </p>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-[#8b1538] font-semibold hover:text-[#0a1628] transition-colors"
            >
              Watch the video
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Business Immersions Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Students working together"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-lg relative group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Students at event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-[#ffd700] rounded-full flex items-center justify-center"
                >
                  <FaPlay className="text-2xl text-black ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Immersions Section */}
      <section className="py-24 bg-[#f0f8f0] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-2 w-full h-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-sm" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Explore GI-SMART's Immersions</p>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Cultural Immersions</h3>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-300 rounded-lg px-6 py-2 pr-10 font-semibold text-gray-900 cursor-pointer hover:border-[#8b1538] transition-colors focus:outline-none focus:border-[#8b1538]"
                >
                  <option value="Dubai">Dubai</option>
                  <option value="India">India</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Ghana">Ghana</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cultural Immersions Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Gold Souq' },
              { image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Desert Safari' },
              { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Cultural Festival' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default LifeAtTetr

