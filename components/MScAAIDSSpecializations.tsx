'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const MScAAIDSSpecializations = () => {
  const [activeStream, setActiveStream] = useState(1)

  const streams = [
    {
      id: 1,
      name: 'Intelligent Robotics & Autonomous Systems',
      color: 'from-blue-500 to-cyan-500',
      description: 'Focus on designing and deploying robotic systems with AI capabilities for automation and autonomous operations.',
      focus: [
        'Robotic systems design and control',
        'Autonomous navigation and path planning',
        'Human-robot interaction',
        'Industrial automation with AI'
      ]
    },
    {
      id: 2,
      name: 'Data Analytics, Cloud & Cyber-Intelligence',
      color: 'from-purple-500 to-pink-500',
      description: 'Advanced data engineering, cloud infrastructure, and cybersecurity intelligence using AI and machine learning.',
      focus: [
        'Big data analytics and processing',
        'Cloud-native AI systems',
        'Cybersecurity and threat intelligence',
        'Data governance and compliance'
      ]
    },
    {
      id: 3,
      name: 'Human-Centered AI & Immersive Systems',
      color: 'from-green-500 to-teal-500',
      description: 'Designing AI systems that enhance human experiences through AR/VR, affective computing, and immersive technologies.',
      focus: [
        'Extended Reality (XR) development',
        'Affective computing and emotion AI',
        'Natural language interaction',
        'Human-AI collaboration design'
      ]
    },
    {
      id: 4,
      name: 'AI for Sustainability & Smart Cities',
      color: 'from-orange-500 to-red-500',
      description: 'Leveraging AI for sustainable development, smart city infrastructure, and environmental solutions.',
      focus: [
        'Smart city data analytics',
        'Environmental monitoring systems',
        'Sustainable AI deployment',
        'IoT for urban solutions'
      ]
    }
  ]

  const activeStreamData = streams.find(s => s.id === activeStream) || streams[0]

  return (
    <section id="specializations" className="py-24 bg-gradient-to-b from-white to-[#f0f8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Specialization Streams
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from four specialized tracks to align your Master's journey with your career goals and interests.
          </p>
        </motion.div>

        {/* Stream Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {streams.map((stream) => (
            <button
              key={stream.id}
              onClick={() => setActiveStream(stream.id)}
              className={`relative p-6 rounded-lg text-left transition-all ${
                activeStream === stream.id
                  ? 'ring-4 ring-[#8b1538] shadow-xl scale-105 bg-white'
                  : 'bg-white hover:shadow-md'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${stream.color} rounded-t-lg`}></div>
              <div className="mt-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stream.color} flex items-center justify-center text-white font-bold text-lg mb-3`}>
                  {stream.id}
                </div>
                <h3 className={`font-bold text-base mb-2 leading-tight ${
                  activeStream === stream.id ? 'text-[#8b1538]' : 'text-gray-900'
                }`}>
                  {stream.name}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Active Stream Details */}
        <motion.div
          key={activeStream}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl p-8 md:p-12"
        >
          <div className={`h-2 bg-gradient-to-r ${activeStreamData.color} rounded-t-xl -mt-8 -mx-8 md:-mx-12 mb-8`}></div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${activeStreamData.color} flex items-center justify-center text-white font-bold text-2xl`}>
              {activeStream}
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Specialization Stream {activeStream}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {activeStreamData.name}
              </h3>
            </div>
          </div>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {activeStreamData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <h4 className="text-xl font-bold text-gray-900 col-span-full mb-4">Key Focus Areas:</h4>
            {activeStreamData.focus.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f0f8f0] rounded-lg p-5 border-l-4 border-[#8b1538]"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${activeStreamData.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {idx + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#8b1538] text-white rounded-lg p-6">
            <p className="font-semibold text-lg mb-2">Career Opportunities</p>
            <p className="text-white/90 text-sm">
              This specialization prepares you for roles in {activeStreamData.name.toLowerCase()} across industries including technology, manufacturing, healthcare, and smart city development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MScAAIDSSpecializations

