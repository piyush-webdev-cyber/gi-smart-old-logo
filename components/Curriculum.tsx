'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const terms = [
  {
    id: 1,
    location: 'Dubai',
    tag: 'GI-SMART BASE CAMP',
    description: 'Build your own dropshipping business while learning team dynamics. Explore industry giants like Emaar and Emirates, attend business summits like GITEX, visit Dubai\'s iconic Gold Souk and experience the local culture with a Desert Safari and Dhow Cruise.',
    workshops: '18 WORKSHOPS',
    businessImmersions: '06 BUSINESS IMMERSIONS',
    culturalImmersions: '05 CULTURAL IMMERSIONS',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Dubai skyline with Burj Khalifa
  },
  {
    id: 2,
    location: 'India',
    tag: 'GI-SMART BASE CAMP',
    tag2: 'FITT-IIT IMMERSION',
    description: 'Launch a consumer brand in India while learning go-to-market strategies, mental models and budgeting. Visit leading companies like Zomato, Tata to study entrepreneurship and innovation first-hand.',
    workshops: '16 WORKSHOPS',
    businessImmersions: '06 BUSINESS IMMERSIONS',
    culturalImmersions: '05 CULTURAL IMMERSIONS',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Humayun's Tomb
  },
  {
    id: 3,
    location: 'Singapore & Malaysia',
    tag: 'GI-SMART BASE CAMP',
    description: 'Start a kickstarter campaign while immersing yourself in Singapore and Malaysia\'s vibrant culture. Experience the Monetary Authority\'s financial hub, explore global trade at the Port, celebrate grand parades, discover the vibrant Chinatown.',
    workshops: '16 WORKSHOPS',
    businessImmersions: '05 BUSINESS IMMERSIONS',
    culturalImmersions: '05 CULTURAL IMMERSIONS',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Singapore skyline
  },
  {
    id: 4,
    location: 'Ghana',
    tag: 'GI-SMART BASE CAMP',
    description: 'Build an NGO while developing skills in fundraising, rural marketing, machine learning, and gamification. Delve into African economics at the Ghana International Trade Fair, and witness grassroot bioenergy innovations.',
    workshops: '16 WORKSHOPS',
    businessImmersions: '05 BUSINESS IMMERSIONS',
    culturalImmersions: '03 CULTURAL IMMERSIONS',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Ghana
  },
  {
    id: 5,
    location: 'United States',
    tag: 'GI-SMART BASE CAMP',
    tag2: 'CORNELL UNIVERSITY IMMERSION',
    description: 'Build a SaaS or software MVP, pitch to VCs and secure your first angel cheque. Visit the Google office, attend the YC/TechStars demo day and connect with early-stage AI startups.',
    workshops: '18 WORKSHOPS',
    businessImmersions: '06 BUSINESS IMMERSIONS',
    culturalImmersions: '05 CULTURAL IMMERSIONS',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // NYC skyline
  },
  {
    id: 6,
    location: 'Argentina',
    tag: 'GI-SMART BASE CAMP',
    description: 'Launch a sustainability venture in renewable energy. Explore innovations at Los Grobo and YPF Luz, while immersing yourself in Buenos Aires\' entrepreneurial hubs and the vibrant culture of San Telmo and La Boca.',
    workshops: '16 WORKSHOPS',
    businessImmersions: '06 BUSINESS IMMERSIONS',
    culturalImmersions: '04 CULTURAL IMMERSIONS',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Argentina domed building
  },
  {
    id: 7,
    location: 'Europe',
    tag: 'GI-SMART BASE CAMP',
    tag2: 'INSEAD IMMERSION',
    description: 'Build a content channel around niches like travel, fashion, or careers. Explore La Nave Innovation Hub in Madrid, gain insights at Prada Headquarters in Milan, and immerse yourself in European culture at the Louvre and Prado Museum.',
    workshops: '15 WORKSHOPS',
    businessImmersions: '06 BUSINESS IMMERSIONS',
    culturalImmersions: '05 CULTURAL IMMERSIONS',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Florence dome
  },
  {
    id: 8,
    location: 'Internship',
    description: 'Enrol in a full time paid internship in a large company. Ideally choose a sector that is closest to where you want to build a career & a company who\'s culture most closely matches your identity.',
    workshops: '',
    businessImmersions: '',
    culturalImmersions: '',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Students working
  },
]

const Curriculum = () => {
  const [activeTerm, setActiveTerm] = useState<number>(1)

  const toggleTerm = (id: number) => {
    setActiveTerm(activeTerm === id ? 0 : id)
  }

  const activeTermData = terms.find(t => t.id === activeTerm) || terms[0]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Curriculum that Turns the World into <span className="italic font-bold">Your Classroom</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="h-full min-h-[600px] rounded-lg relative overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTerm}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activeTermData.image})`
                  }}
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right - Terms List */}
          <div className="space-y-2">
            {terms.map((term, index) => {
              const isExpanded = activeTerm === term.id
              return (
                <motion.div
                  key={term.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border-l-4 border-[#8b1538] rounded-r-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleTerm(term.id)}
                    className="w-full p-3 sm:p-4 md:p-5 text-left flex items-center justify-between hover:bg-[#f0f8f0] transition-colors group"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                      <span className="text-[#8b1538] font-bold text-base sm:text-lg md:text-xl flex-shrink-0">■</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 break-words">{term.location}</h3>
                          {term.tag && (
                            <span className="bg-[#8b1538] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded font-semibold whitespace-nowrap">
                              {term.tag}
                            </span>
                          )}
                          {term.tag2 && (
                            <span className="bg-[#8b1538] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded font-semibold whitespace-nowrap">
                              {term.tag2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-xl sm:text-2xl text-gray-600 font-light ml-2 sm:ml-4 flex-shrink-0 group-hover:text-[#8b1538] transition-colors">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && term.description && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 md:pb-6 pt-2">
                          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">{term.description}</p>
                          {term.workshops && term.businessImmersions && term.culturalImmersions && (
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                              <div className="text-center">
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8b1538] mb-1">{term.workshops}</div>
                              </div>
                              <div className="text-center">
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8b1538] mb-1">{term.businessImmersions}</div>
                              </div>
                              <div className="text-center">
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8b1538] mb-1">{term.culturalImmersions}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Curriculum

