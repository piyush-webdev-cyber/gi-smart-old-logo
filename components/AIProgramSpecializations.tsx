'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const AIProgramSpecializations = () => {
  const [activeSpecialization, setActiveSpecialization] = useState('CS')

  const specializations = [
    { id: 'CS', name: 'CS Computer Science', color: 'yellow' },
    { id: 'MAT', name: 'MAT Maths', color: 'purple' },
    { id: 'PHY', name: 'PHY Physics', color: 'pink' },
    { id: 'MAST', name: 'MAST Management & Strategy', color: 'light-blue' },
    { id: 'SAMA', name: 'SAMA Sales & Marketing', color: 'pink' },
    { id: 'FIFI', name: 'FIFI Finance', color: 'light-blue' },
    { id: 'COMM', name: 'COMM Communication Self Development', color: 'none' },
  ]

  const termCourses = [
    {
      term: 1,
      location: 'Dubai',
      courses: [
        'CS 101: How to design intelligent systems for everyday life',
        'CS 201: How to automate business workflows with OOP for startups and enterprises.',
      ],
    },
    {
      term: 2,
      location: 'India',
      courses: [
        'CS 102: How to build scalable software for platforms like Amazon and Shopify.',
        'CS 202: How to solve network optimization problems in telecom and transportation.',
      ],
    },
    {
      term: 3,
      location: 'Singapore & Malaysia',
      courses: [
        'CS 103: How to optimize logistics operations for enterprises like FedEx and DHL.',
        'CS 203: How to optimize hardware performance in embedded systems for enterprises like Samsung.',
      ],
    },
  ]

  const getColorClass = (color: string) => {
    switch (color) {
      case 'yellow':
        return 'bg-yellow-400'
      case 'purple':
        return 'bg-purple-500'
      case 'pink':
        return 'bg-pink-500'
      case 'light-blue':
        return 'bg-blue-400'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Learn. Apply. Reflect. <span className="font-extrabold italic">Repeat.</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Hands-on courses and workshops designed to build real businesses— because real learning comes from real applications.
        </p>

        {/* Specialization Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {specializations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveSpecialization(spec.id)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                activeSpecialization === spec.id
                  ? 'bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } flex items-center gap-2`}
            >
              <span
                className={`inline-block w-3 h-3 rounded-full ${getColorClass(spec.color)}`}
              ></span>
              {spec.name}
            </button>
          ))}
        </div>

        {/* Term Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {termCourses.map((term) => (
            <div key={term.term} className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">
                TERM {term.term} {term.location}
              </h3>
              <ul className="space-y-3">
                {term.courses.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#d4af37]/20 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
            ←
          </button>
          <button className="w-12 h-12 rounded-full bg-[#ffd700] hover:bg-[#ffed4e] flex items-center justify-center transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default AIProgramSpecializations

