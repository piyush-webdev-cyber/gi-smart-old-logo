'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const AICurriculumSection = () => {
  const [activeTerm, setActiveTerm] = useState<number | string>(1)
  const [activeTab, setActiveTab] = useState('courses')

  const terms = [
    {
      id: 1,
      type: 'term',
      location: 'Dubai',
      badges: ['GI-SMART BASE CAMP'],
      termProject: 'Build a tech-driven ecommerce platform that integrates AI-powered product recommendations, virtual try-ons, and real-time inventory management. Target a revenue of $10,000 over at least 5 SKUs.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'CS 101: How to design intelligent systems for everyday life.',
        'CS 201: How to automate business workflows with OOP for startups and enterprises.',
        'MAT 101: How to optimize delivery routes with calculus for platforms like Amazon and FedEx.',
        'MAT 201: How to model population growth with integration techniques in environmental science.',
        'PHY 101: How to improve GPS accuracy for projects like NASA and SpaceX.',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      type: 'term',
      location: 'India',
      badges: ['GI-SMART BASE CAMP', 'FITT-IIT IMMERSION'],
      termProject: 'Develop a SaaS platform tailored for small retail stores to manage daily sales, expenses, and customer credits through a digital ledger and analytics dashboard. Aim to onboard 10 stores, achieve a 90% weekly user engagement rate.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'CS 102: How to build scalable software for platforms like Amazon and Shopify.',
        'CS 202: How to solve network optimization problems in telecom and transportation.',
        'MAT 102: How to model weather systems using multivariate calculus in meteorology.',
        'PHY 201: How to predict demand and reduce wastage in Indian retail stores.',
        'MAST 201: How to visualize data to inform decisions in healthcare and finance.',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'summer1',
      type: 'summer',
      location: 'Everest Base Camp Leadership Trek',
    },
    {
      id: 3,
      type: 'term',
      location: 'Singapore & Malaysia',
      badges: ['GI-SMART BASE CAMP'],
      termProject: 'Program a drone to navigate a simulated environment autonomously, using sensors for obstacle detection and path planning. The drone should be tested in 5+ realistic simulations.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'CS 103: How to optimize logistics operations for enterprises like FedEx and DHL.',
        'CS 203: How to optimize hardware performance in embedded systems for enterprises like Samsung.',
        'MAT 103: How to improve movie recommendations for platforms like Netflix and Disney+.',
        'PHY 103: How to develop next-generation AI microchips for companies like Intel and NVIDIA.',
        'MAST 103: How to protect software innovations for the tech industry.',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 4,
      type: 'term',
      location: 'Ghana',
      badges: ['GI-SMART BASE CAMP'],
      termProject: 'Develop an AI app that identifies and matches NGOs with donors based on shared goals and impact metrics. Onboard at least five NGOs and facilitate a 25% increase in donation amounts within the first quarter.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'CS 104: How to improve process management in operating systems for IT.',
        'CS 204: How to manage customer data for enterprises like JPMorgan and Bank of America.',
        'MAT 104: How to detect fraud for enterprises like PayPal and JPMorgan.',
        'PHY 104: How to design safer and more efficient aircraft for Boeing and Airbus.',
        'MAST 104: How to manage AI projects for enterprises like Google and IBM.',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'summer2',
      type: 'summer',
      location: 'Teaching Fellowship or Internship',
    },
    {
      id: 5,
      type: 'term',
      location: 'Europe',
      badges: ['GI-SMART BASE CAMP', 'INSEAD IMMERSION'],
      termProject: 'Develop an AI-driven platform to create engaging, localized content for diverse European markets and Integrate translation and localization tools. Generate content across 10+ European languages, ensuring 95% localization accuracy.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'CS 106: How to optimize software performance in high-performance computing.',
        'CS 206: How to design algorithms for platforms like Netflix and Spotify.',
        'MAT 106: How to solve engineering simulations in aerospace applications.',
        'MAT 206: How to enhance image compression for tech companies like Google and Adobe.',
        'PHY 106: How to optimize mechanical systems for industrial leaders like Siemens and Bosch.',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 6,
      type: 'term',
      location: 'United States',
      badges: ['GI-SMART BASE CAMP'],
      termProject: 'Build a tech startup to solve a problem you identified during your travels – leveraging Silicon Valley ecosystem, network, and resources.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'CS 107: How to address privacy and ethical challenges in artificial intelligence.',
        'CS 207: How to optimize memory management for platforms like AWS and Microsoft Azure.',
        'MAT 107: How to model electromagnetic fields in telecommunications systems.',
        'MAT 207: How to predict stock market trends for institutions like Goldman Sachs.',
        'PHY 107: How to enhance wireless power transmission for the electronics industry.',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
  ]

  const activeTermData = terms.find(t => t.id === activeTerm && t.type === 'term')

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="sticky top-[177px] h-fit">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/5] bg-gray-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTerm}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${
                        activeTermData?.image || 
                        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                      })`
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column - Terms */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              Dive into the <span className="font-extrabold italic">Hands-on Curriculum</span>
            </h2>

            <div className="space-y-3">
              {terms.map((term) => (
                <div
                  key={term.id}
                  className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg overflow-hidden"
                >
                  {/* Term Header */}
                  <button
                    onClick={() => {
                      if (term.type === 'term' && typeof term.id === 'number') {
                        setActiveTerm(activeTerm === term.id ? 0 : term.id)
                        setActiveTab('courses') // Reset tab when switching terms
                      }
                    }}
                    className="w-full flex items-center justify-between p-5 hover:bg-[#81c784] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {term.type === 'term' && (
                        <div className="w-10 h-10 bg-[#8b1538] rounded flex items-center justify-center text-white font-bold flex-shrink-0">
                          {term.id}
                        </div>
                      )}
                      {term.type === 'summer' && (
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#8b1538] font-bold">S</span>
                        </div>
                      )}
                      <div className="text-left">
                        {term.type === 'summer' && (
                          <span className="text-sm font-semibold text-gray-600 uppercase">Summer: </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 inline">
                          {term.location}
                        </h3>
                        {term.badges && term.badges.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {term.badges.map((badge, idx) => (
                              <span
                                key={idx}
                                className="bg-[#8b1538] text-white px-3 py-1 rounded text-xs font-semibold"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {term.type === 'term' && (
                      <span className="text-2xl text-gray-600 font-light">
                        {activeTerm === term.id ? '−' : '+'}
                      </span>
                    )}
                  </button>

                  {/* Term Content */}
                  <AnimatePresence>
                    {activeTerm === term.id && term.type === 'term' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 bg-white border-t-2 border-[#8b1538]">
                          {/* Term Project */}
                          {term.termProject && (
                            <div className="mt-6">
                              <h4 className="text-sm font-bold text-gray-900 uppercase mb-2">
                                TERM PROJECT
                              </h4>
                              <div className="text-gray-700 mb-4 whitespace-pre-line">
                                {term.termProject.split('\n').map((line, idx) => {
                                  if (line.startsWith('•')) {
                                    return (
                                      <div key={idx} className="flex items-start gap-2 mt-2">
                                        <span className="text-[#8b1538] mt-1">•</span>
                                        <span>{line.substring(1).trim()}</span>
                                      </div>
                                    )
                                  }
                                  return <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                                })}
                              </div>
                              {term.cohortLink && (
                                <a
                                  href="#"
                                  className="text-[#8b1538] font-semibold text-sm hover:underline flex items-center gap-1"
                                >
                                  {term.cohortLink}
                                  <FaExternalLinkAlt />
                                </a>
                              )}
                            </div>
                          )}

                          {/* Tabs - Only show if term has courses */}
                          {term.courses && term.courses.length > 0 && (
                            <>
                              <div className="flex gap-6 mt-6 border-b border-gray-200">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setActiveTab('courses')
                                  }}
                                  className={`pb-3 text-sm font-semibold uppercase transition-colors ${
                                    activeTab === 'courses'
                                      ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                                      : 'text-gray-500'
                                  }`}
                                >
                                  COURSES & WORKSHOPS
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setActiveTab('business')
                                  }}
                                  className={`pb-3 text-sm font-semibold uppercase transition-colors ${
                                    activeTab === 'business'
                                      ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                                      : 'text-gray-500'
                                  }`}
                                >
                                  BUSINESS IMMERSIONS
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setActiveTab('cultural')
                                  }}
                                  className={`pb-3 text-sm font-semibold uppercase transition-colors ${
                                    activeTab === 'cultural'
                                      ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                                      : 'text-gray-500'
                                  }`}
                                >
                                  CULTURAL IMMERSIONS
                                </button>
                              </div>

                              {/* Tab Content */}
                              {activeTab === 'courses' && term.courses && (
                                <div className="mt-6">
                                  <ul className="space-y-3">
                                    {term.courses.map((course, idx) => (
                                      <li key={idx} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#8b1538] rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{course}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <button className="mt-6 text-[#8b1538] font-semibold text-sm hover:underline flex items-center gap-1">
                                    + VIEW MORE
                                  </button>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AICurriculumSection

