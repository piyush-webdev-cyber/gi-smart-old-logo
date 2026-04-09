'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const CurriculumSection = () => {
  const [activeTerm, setActiveTerm] = useState<number | string>(1)
  const [activeTab, setActiveTab] = useState('courses')

  const terms = [
    {
      id: 1,
      type: 'term',
      location: 'Dubai',
      badges: ['GI-SMART BASE CAMP'],
      termProject: 'Build an eCommerce dropshipping business selling globally sourced products to audiences in the Middle East. Target a revenue of $10,000.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'MAST 101: How to work effectively in teams',
        'MAST 201: How to build a global supply chain',
        'MAST 301: How to write a comprehensive business plan',
        'MAST 401: How to create a winning fundraising Deck',
        'MAST 501: How to network effortlessly',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      type: 'term',
      location: 'India',
      badges: ['GI-SMART BASE CAMP', 'FITT-IIT IMMERSION'],
      termProject: 'Launch a Consumer brand in food, clothing, or accessories catering to the suburban audiences in India. Target 5 SKUs, $25,000 in revenue & a margin of 30%.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'MAST 102: How to analyse markets & identify new business opportunities',
        'MAST 202: How to identify & track key business metrics',
        'MAST 302: How to manage & optimise inventory',
        'MAST 402: How to motivate your teams & give feedback',
        'SAMA 102: How to position your brand using consumer psychology & behavior',
      ],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
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
      termProject: 'Start a Kickstarter campaign to sell a hardware product that you\'ve designed to solve a critical problem identified using design thinking. Target to raise a minimum of $20,000 from a minimum of 100 backers.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'PRTC 203: How to use design thinking to build effective products & solutions',
        'AIML 103: How LLMs & AI actually work',
        'FIFI 203: How to innovate on monetisation techniques',
        'SAMA 303: How to build a personal brand',
        'COMM 103: How to find your voice',
      ],
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 4,
      type: 'term',
      location: 'Ghana',
      badges: ['GI-SMART BASE CAMP'],
      termProject: 'Pilot an NGO focused on addressing a local cause in Ghana, emphasising community engagement, and positive impact. Target to touch at least 200 local lives through partnerships, & fundraising.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'MAST 104: How a country\'s economy works',
        'MAST 204: How to bring innovation to public policies (Global Case Studies)',
        'MAST 304: How to manage social ventures',
        'MAST 404: How to build solutions for Global Problems (Large Systems Thinking)',
        'SAMA 104: How to fundraise capital for social projects',
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'summer2',
      type: 'summer',
      location: 'Teaching Fellowship or Internship',
    },
    {
      id: 5,
      type: 'term',
      location: 'United States*',
      badges: ['GI-SMART BASE CAMP', 'CORNELL UNIVERSITY IMMERSION'],
      termProject: 'Build a tech startup to solve a problem you identified during your travels – leveraging Silicon Valley ecosystem, network, and resources.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'MAST 105: How to never lose a customer',
        'MAST 205: How to use Game Theory for business and life',
        'MAST 305: How to use KPIs & KRAs to improve org. alignment',
        'SAMA 105: How to use marketing analytics to optimise conversion',
        'SAMA 205: How to leverage design to inspire trust',
      ],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 6,
      type: 'term',
      location: 'Argentina',
      badges: ['GI-SMART BASE CAMP'],
      termProject: 'Launch a green initiatives to further sustainable practices or products within the realm of renewables, electric vehicles, carbon credits, or wildlife conservation. Target to offset at least 1000 Kgs of CO2.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'MAST 106: How the carbon credits economy works',
        'MAST 206: How to conduct Environmental Impact Assessments',
        'MAST 306: How to build a Sustainability First Culture in your company',
        'MAST 406: How the renewable energy market works',
        'SAMA 106: How to measure brand asset value',
      ],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 7,
      type: 'term',
      location: 'Europe',
      badges: ['GI-SMART BASE CAMP', 'INSEAD IMMERSION'],
      termProject: 'Build a YouTube channel in a niche of your choice, create a loyal community, build creator partnerships and strike brand deals. Target at least 50 content pieces, 20,000 subscribers, & 2 brand deals.',
      cohortLink: 'REVIEW COHORT 1 PROGRESS',
      courses: [
        'MAST 107: How to protect your ideas using Intellectual Property Law',
        'MAST 207: How to use mathematical models for business optimisation',
        'MAST 307: How to build a business in manufacturing',
        'MAST 407: How to manage a crisis',
        'SAMA 107: How to craft compelling copy to maximise sales',
      ],
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 8,
      type: 'term',
      location: 'Internship',
      badges: [],
      termProject: 'Enrol in a full time paid internship in a large company. Ideally choose a sector that is closest to where you want to build a career & a company who\'s culture most closely matches your identity.\n\nOr students have an option to:\n• Do Capstone projects on-campus at UBI\n• Complete academic courses of their chosen track',
      cohortLink: '',
      courses: [],
      businessImmersions: [],
      culturalImmersions: [],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
  ]

  return (
    <section id="curriculum" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Terms */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12">
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
                    className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 hover:bg-[#d4af37]/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                      {term.type === 'term' && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#8b1538] rounded flex items-center justify-center text-white font-bold flex-shrink-0 text-sm sm:text-base">
                          {term.id}
                        </div>
                      )}
                      {term.type === 'summer' && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#8b1538] font-bold text-sm sm:text-base">S</span>
                        </div>
                      )}
                      <div className="text-left flex-1 min-w-0">
                        {term.type === 'summer' && (
                          <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">Summer: </span>
                        )}
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 inline break-words">
                          {term.location}
                        </h3>
                        {term.badges && term.badges.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                            {term.badges.map((badge, idx) => (
                              <span
                                key={idx}
                                className="bg-[#8b1538] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-semibold whitespace-nowrap"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    {term.type === 'term' && (
                      <span className="text-xl sm:text-2xl text-gray-600 font-light flex-shrink-0 ml-2">
                        {activeTerm === term.id ? '−' : '+'}
                      </span>
                    )}
                  </button>

                  {/* Term Content */}
                  <AnimatePresence>
                    {activeTerm === term.id && term.type === 'term' && term.termProject && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 bg-white border-t-2 border-[#8b1538]">
                          {/* Term Project */}
                          <div className="mt-4 sm:mt-5 md:mt-6">
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase mb-2">
                              TERM PROJECT
                            </h4>
                            <div className="text-sm sm:text-base text-gray-700 mb-4 whitespace-pre-line">
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

                          {/* Tabs - Only show if term has courses */}
                          {term.courses && term.courses.length > 0 && (
                            <>
                              <div className="flex gap-2 sm:gap-4 md:gap-6 mt-4 sm:mt-5 md:mt-6 border-b border-gray-200 overflow-x-auto">
                                <button
                                  onClick={() => setActiveTab('courses')}
                                  className={`pb-2 sm:pb-3 text-[10px] sm:text-xs md:text-sm font-semibold uppercase transition-colors whitespace-nowrap ${
                                    activeTab === 'courses'
                                      ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                                      : 'text-gray-500'
                                  }`}
                                >
                                  COURSES & WORKSHOPS
                                </button>
                                <button
                                  onClick={() => setActiveTab('business')}
                                  className={`pb-2 sm:pb-3 text-[10px] sm:text-xs md:text-sm font-semibold uppercase transition-colors whitespace-nowrap ${
                                    activeTab === 'business'
                                      ? 'text-[#8b1538] border-b-2 border-[#8b1538]'
                                      : 'text-gray-500'
                                  }`}
                                >
                                  BUSINESS IMMERSIONS
                                </button>
                                <button
                                  onClick={() => setActiveTab('cultural')}
                                  className={`pb-2 sm:pb-3 text-[10px] sm:text-xs md:text-sm font-semibold uppercase transition-colors whitespace-nowrap ${
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
                                <div className="mt-4 sm:mt-5 md:mt-6">
                                  <ul className="space-y-2 sm:space-y-3">
                                    {term.courses.map((course, idx) => (
                                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8b1538] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                        <span className="text-xs sm:text-sm md:text-base text-gray-700">{course}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <button className="mt-4 sm:mt-5 md:mt-6 text-[#8b1538] font-semibold text-xs sm:text-sm hover:underline flex items-center gap-1">
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

          {/* Right Column - Image */}
          <div className="hidden lg:block sticky top-[177px] h-fit">
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
                        terms.find(t => t.id === activeTerm && t.type === 'term')?.image || 
                        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                      })`
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumSection

