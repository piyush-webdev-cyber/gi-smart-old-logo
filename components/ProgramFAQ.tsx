'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    id: 'process',
    question: 'How long does the GI-SMART application process take?',
    answer: 'The initial registration is a quick 30 minute process, followed by The GI-SMART Trial lasting approximately 75 minutes. The final interview, which is an essential part of the process, typically lasts around 30 minutes.',
  },
  {
    id: 'prepare',
    question: 'Do I need to prepare for something before starting the application process?',
    answer: 'You should have your academic transcripts, standardized test scores (if applicable), a personal statement, and letters of recommendation ready. We also recommend researching our program structure and global locations.',
  },
  {
    id: 'internships',
    question: 'Are there opportunities for internships or work experience during the program?',
    answer: 'Yes! GI-SMART offers extensive internship opportunities through our Career Labs program. Students can intern during terms (evenings and weekends) and during summer breaks, gaining real-world experience across multiple countries.',
  },
  {
    id: 'host-countries',
    question: 'How are host countries selected?',
    answer: 'Host countries are selected based on their business ecosystems, cultural diversity, and learning opportunities. Our program rotates through 7 countries including Dubai, India, Singapore, Malaysia, and others, providing a truly global experience.',
  },
  {
    id: 'financial',
    question: 'Does GI-SMART provide financial assistance?',
    answer: 'Yes, GI-SMART offers multiple scholarship programs covering up to 100% of tuition fees. These include merit-based scholarships, need-based aid, and specialized scholarships for entrepreneurs, community leaders, and exceptional talents.',
  },
  {
    id: 'job-support',
    question: 'What kind of job support does GI-SMART provide?',
    answer: 'GI-SMART provides comprehensive career support including resume building, interview preparation, networking opportunities with 100+ hiring partners, career counseling, and access to exclusive job postings from top companies worldwide.',
  },
  {
    id: 'faculty-travel',
    question: 'Will faculty travel with students to different countries?',
    answer: 'Yes, our faculty members travel with students to provide continuous support and maintain academic consistency across all locations. This ensures a seamless learning experience regardless of which country you are studying in.',
  },
]

const ProgramFAQ = () => {
  const [expandedId, setExpandedId] = useState<string>('')

  return (
    <section className="py-24 bg-white relative">
      {/* Decorative squares */}
      <div className="absolute top-8 right-8 w-8 h-8 grid grid-cols-2 gap-1 opacity-20">
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
        <div className="w-3 h-3 bg-[#8b1538]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Any <span className="font-extrabold italic">Questions?</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id
            return (
              <div
                key={faq.id}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : faq.id)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-[#8b1538] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-2xl font-bold text-gray-400 flex-shrink-0">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pb-4 pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProgramFAQ

