'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const FacultyMentors = () => {
  const [activeTab, setActiveTab] = useState('career')

  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Real Strategy Solutions Support Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900">Real</h2>
            <div className="h-1 w-32 bg-[#ffd700]"></div>
            <div className="flex flex-col text-gray-600 text-2xl md:text-3xl font-semibold">
              <span>Strategy</span>
              <span>Solutions</span>
              <span>Support</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('career')}
            className={`pb-4 text-lg font-semibold transition-colors ${
              activeTab === 'career'
                ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Career Mentors
          </button>
          <button
            onClick={() => setActiveTab('domain')}
            className={`pb-4 text-lg font-semibold transition-colors ${
              activeTab === 'domain'
                ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Domain Mentors
          </button>
          <button
            onClick={() => setActiveTab('startup')}
            className={`pb-4 text-lg font-semibold transition-colors ${
              activeTab === 'startup'
                ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Startup Coaches
          </button>
        </div>

        {/* Career Mentors Content */}
        {activeTab === 'career' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Career Mentors"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#8b1538] p-8 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(165, 214, 167, 0.1) 10px, rgba(165, 214, 167, 0.1) 20px)`
                }}></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Go further with a Career Coach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Design a compelling resume and personal pitch</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Ace interviews with 100+ top recruiters</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Strategize your way to senior management and leadership-level roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Domain Mentors Content */}
        {activeTab === 'domain' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Domain Mentors"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#8b1538] p-8 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(165, 214, 167, 0.1) 10px, rgba(165, 214, 167, 0.1) 20px)`
                }}></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Go Deep with Domain Mentors</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Connect with industry leaders across diverse domains</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Develop a distinctive voice and online presence with expert tips</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Gain the insights and leadership skills needed to stand out in your chosen domain</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Startup Coaches Content */}
        {activeTab === 'startup' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Startup Coaches"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#8b1538] p-8 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(165, 214, 167, 0.1) 10px, rgba(165, 214, 167, 0.1) 20px)`
                }}></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Start strong with a StartUp Coach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Identify business opportunities, create business plans, and develop your go-to market strategy</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Network with VCs and angels, and secure $50-$100K seed funding for your startup</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <div className="w-2 h-2 bg-gradient-to-br from-[#d4af37]/20 to-white mt-2 flex-shrink-0"></div>
                    <span>Acquire your first 1000 customers, accelerate growth, and establish your market presence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FacultyMentors

