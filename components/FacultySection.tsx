'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const FacultySection = () => {
  const [activeTab, setActiveTab] = useState('all')

  const facultyMembers = [
    {
      id: 1,
      name: 'Mr. Faverie Stephane',
      title: 'Executive Group President, Estee Lauder',
      teaching: 'Global Markets and Customer Dynamics',
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Dr. Lan Ma',
      title: 'Adjunct Professor of Business - New York University',
      teaching: 'How to market strategically in the real world',
      category: 'academician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Dr. Edward Rogers',
      title: 'Former Chief Knowledge Officer, NASA',
      teaching: 'How to Manage Complexities',
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Dr. Zal Phiroz',
      title: 'Adjunct Professor, Harvard University',
      teaching: 'How companies manage supply chains & how to procure & ship globally',
      category: 'academician',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Mr. Nitin Gaur',
      title: 'Former Advisory Board Member, Stanford University',
      teaching: 'How to Innovate in Fintech',
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Dr. Daniel Garett Van Der Vliet',
      title: 'Executive Director, Cornell University',
      teaching: '',
      category: 'academician',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      name: 'Mr. Thomas Heinis',
      title: 'Professor, Imperial College London',
      teaching: '',
      category: 'academician',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      name: 'Ms. Kevyn Eva Norton',
      title: 'Product Lead, Easy Bites App',
      teaching: '',
      category: 'industry',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      name: 'Dr. Shad Morris',
      title: 'Former Faculty Fellow, MIT Sloan',
      teaching: '',
      category: 'academician',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      name: 'Dr. Zvi Gilula',
      title: 'Professor, Chicago Booth',
      teaching: '',
      category: 'academician',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  const filteredFaculty =
    activeTab === 'all'
      ? facultyMembers
      : facultyMembers.filter((member) => member.category === activeTab)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Faculty that <span className="font-extrabold italic">Inspire and Empower</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-4 text-lg font-semibold transition-colors ${
              activeTab === 'all'
                ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('academician')}
            className={`pb-4 text-lg font-semibold transition-colors ${
              activeTab === 'academician'
                ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Academicians
          </button>
          <button
            onClick={() => setActiveTab('industry')}
            className={`pb-4 text-lg font-semibold transition-colors ${
              activeTab === 'industry'
                ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Industry Experts
          </button>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg overflow-hidden relative">
                {/* Subtle geometric pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-[#8b1538] rounded rotate-12"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#8b1538] rounded rotate-45"></div>
                </div>
                
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                  {member.teaching && (
                    <p className="text-gray-500 text-xs italic">{member.teaching}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacultySection

