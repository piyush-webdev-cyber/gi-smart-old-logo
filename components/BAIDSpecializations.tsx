'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const BAIDSpecializations = () => {
  const [activeTrack, setActiveTrack] = useState(1)

  const tracks = [
    {
      id: 1,
      name: 'Creative AI & Generative Design',
      color: 'from-purple-500 to-pink-500',
      courses: [
        'Generative Visual Art & Computational Aesthetics',
        'Creative Coding with AI',
        'Generative Sound, Music, and Audio Design',
        'AI and the Future of Storytelling'
      ]
    },
    {
      id: 2,
      name: 'AI for Smart Environments & Sustainability',
      color: 'from-green-500 to-teal-500',
      courses: [
        'AI for Sustainable Design & Architecture',
        'IoT for Smart Cities',
        'Predictive Environmental Modeling',
        'Circular Economy and Design Automation'
      ]
    },
    {
      id: 3,
      name: 'AI for Health, Wellness, and Accessibility',
      color: 'from-blue-500 to-cyan-500',
      courses: [
        'AI in Healthcare Design',
        'NeuroDesign: Brain, Behavior, and Interface',
        'Accessibility by Design',
        'Wearable Tech & Human Sensing Systems'
      ]
    },
    {
      id: 4,
      name: 'Game Design, Simulation & Virtual Worlds',
      color: 'from-orange-500 to-red-500',
      courses: [
        'Game AI & Procedural Content Generation',
        'Virtual & Augmented Reality Systems',
        'AI in Entertainment and Metaverse Design',
        'Simulation Systems & Autonomous Agents'
      ]
    },
    {
      id: 5,
      name: 'Ethical AI, Policy & Human-Centric Systems',
      color: 'from-indigo-500 to-purple-500',
      courses: [
        'AI Governance & Global Regulation',
        'Human Rights in the Age of AI',
        'Philosophy of Consciousness and Machine Mind',
        'Ethical Product Design'
      ]
    },
    {
      id: 6,
      name: 'AI Entrepreneurship & Innovation',
      color: 'from-yellow-500 to-amber-500',
      courses: [
        'AI Startup Launch Lab',
        'AI Product Management & Growth Strategy',
        'Financing Innovation & Venture Design',
        'Legal and Ethical Issues in AI Business'
      ]
    }
  ]

  const activeTrackData = tracks.find(t => t.id === activeTrack) || tracks[0]

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
            Specialization Tracks
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Students choose one specialization at the end of Year 2, completing 4 electives (12 credits) aligned with their chosen track.
          </p>
        </motion.div>

        {/* Track Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(track.id)}
              className={`relative p-6 rounded-lg text-left transition-all ${
                activeTrack === track.id
                  ? 'ring-4 ring-[#8b1538] shadow-xl scale-105'
                  : 'bg-white hover:shadow-md'
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.color} rounded-t-lg`}></div>
              <div className="mt-2">
                <h3 className={`font-bold text-lg mb-2 ${
                  activeTrack === track.id ? 'text-[#8b1538]' : 'text-gray-900'
                }`}>
                  Track {track.id}
                </h3>
                <p className={`text-sm leading-tight ${
                  activeTrack === track.id ? 'text-gray-700' : 'text-gray-600'
                }`}>
                  {track.name}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Track Details */}
        <motion.div
          key={activeTrack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl p-8 md:p-12"
        >
          <div className={`h-2 bg-gradient-to-r ${activeTrackData.color} rounded-t-xl -mt-8 -mx-8 md:-mx-12 mb-8`}></div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${activeTrackData.color} flex items-center justify-center text-white font-bold text-xl`}>
              {activeTrack}
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Track {activeTrack}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {activeTrackData.name}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTrackData.courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f0f8f0] rounded-lg p-5 border-l-4 border-[#8b1538]"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${activeTrackData.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {idx + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{course}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-[#8b1538] text-white rounded-lg p-4 text-center">
              <p className="font-semibold">
                Total Credits: <span className="text-[#ffd700]">12 Credits</span> (4 Electives)
              </p>
              <p className="text-sm text-white/80 mt-1">
                Selected at the end of Year 2
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BAIDSpecializations

