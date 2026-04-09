'use client'

import { useState } from 'react'

const ProgramSpecializations = () => {
  const [activeSpecialization, setActiveSpecialization] = useState('MAST')

  const specializations = [
    { id: 'MAST', name: 'MAST Management & Strategy', color: 'yellow' },
    { id: 'SAMA', name: 'SAMA Sales & Marketing', color: 'purple' },
    { id: 'FIFI', name: 'FIFI Finance & Fintech', color: 'pink' },
    { id: 'PRTC', name: 'PRTC Product & Tech', color: 'blue' },
    { id: 'AIML', name: 'AIML Artificial Intelligence & Machine Learning', color: 'purple' },
    { id: 'COMM', name: 'COMM Communication & Development', color: 'purple' },
  ]

  const termCourses = [
    {
      term: 1,
      location: 'Dubai',
      courses: [
        'MAST 101: How to work effectively in teams',
        'MAST 201: How to build a global supply chain',
        'MAST 301: How to write a comprehensive business plan',
        'MAST 401: How to create a winning fundraising Deck',
        'MAST 501: How to network effortlessly',
      ]
    },
    {
      term: 2,
      location: 'India',
      courses: [
        'MAST 102: How to analyse markets & identify new business opportunities',
        'MAST 202: How to identify & track key business metrics',
        'MAST 302: How to manage & optimise inventory',
        'MAST 402: How to motivate your teams & give feedback',
      ]
    },
    {
      term: 3,
      location: 'Singapore & Malaysia',
      courses: [
        'PRTC 203: How to use design thinking to build effective products & solutions',
        'AIML 103: How LLMs & AI actually work',
        'FIFI 203: How to innovate on monetisation techniques',
        'SAMA 303: How to build a personal brand',
        'COMM 103: How to find your voice',
      ]
    },
  ]

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Learn. Apply. Reflect. <span className="font-extrabold italic">Repeat.</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Hands-on courses and workshops designed to build real businesses—because real learning comes from real applications.
        </p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-4 mb-12">
          {specializations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveSpecialization(spec.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeSpecialization === spec.id
                  ? 'bg-[#ffd700] text-black'
                  : 'bg-white text-gray-900 border-2 border-gray-200'
              }`}
            >
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                spec.color === 'yellow' ? 'bg-yellow-500' :
                spec.color === 'purple' ? 'bg-purple-500' :
                spec.color === 'pink' ? 'bg-pink-500' :
                spec.color === 'blue' ? 'bg-blue-500' : 'bg-gray-500'
              }`}></span>
              {spec.name}
            </button>
          ))}
        </div>

        {/* Term Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {termCourses.map((term) => (
            <div key={term.term} className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">TERM {term.term} {term.location}</h3>
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
          <button className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center text-black font-bold">
            ←
          </button>
          <button className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center text-black font-bold">
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProgramSpecializations

