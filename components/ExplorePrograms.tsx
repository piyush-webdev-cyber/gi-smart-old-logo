'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const programs = [
  {
    id: 1,
    title: 'Bachelor of Artificial Intelligence Design (BAID)',
    tags: ['3 Years (France)', '9 Terms', 'Hybrid Model'],
    partner: 'PEARSON HIGHER EDUCATION',
    partnerText: 'Anchor Publisher: Pearson Higher Education',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    link: '/programs/bachelor-ai-design',
  },
  {
    id: 2,
    title: 'MSc in Applied AI & Data Systems',
    tags: ['2 Years', '6 Terms', 'Hybrid Model'],
    partner: 'RNCP LEVEL 7 / UAE NQF 9',
    partnerText: 'Dubai-first global program with Paris mobility',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/master-applied-ai-data-systems',
  },
  {
    id: 3,
    title: 'BBA in Tourism & Hospitality Innovation',
    tags: ['3 Years', '9 Terms', 'Global Service'],
    partner: 'GI-SMART',
    partnerText: 'Smart tourism, luxury experiences & sustainable hospitality',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/bachelor-tourism-hospitality',
  },
  {
    id: 4,
    title: 'BSc in Strategic Management',
    tags: ['3 Years', '9 Terms', 'Global Leadership'],
    partner: 'GI-SMART',
    partnerText: 'Strategic analysis, financial literacy & technological innovation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/programs/bachelor-strategic-management',
  },
]

const ExplorePrograms = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  // Create infinite loop by duplicating programs
  const infinitePrograms = [...programs, ...programs, ...programs]

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const containerWidth = container.offsetWidth
      const cardWidth = (containerWidth - 48) / 3 // 3 cards visible, 2 gaps (24px each)
      const gap = 24
      const scrollPosition = index * (cardWidth + gap)
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
    setCurrentIndex(index % programs.length)
  }

  // Auto-scroll functionality - infinite loop (A,B,C -> B,C,D -> C,D,A -> D,A,B)
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % programs.length
          if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const containerWidth = container.offsetWidth
            const cardWidth = (containerWidth - 48) / 3
            const gap = 24
            const scrollPosition = next * (cardWidth + gap)
            container.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            })
          }
          return next
        })
      }, 3000) // Auto-scroll every 2 seconds
    }

    startAutoScroll()

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [])

  return (
    <section id="explore-programs" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Explore Programs
          </h2>
        </motion.div>

        {/* Mobile View - Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg overflow-hidden group cursor-pointer border border-[#d4af37]/20 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
              </div>

              <div className="p-5 md:p-6 text-white flex flex-col flex-1 h-full">
                <h3 className="text-lg md:text-xl font-bold mb-4 line-clamp-2 min-h-[3rem]">{program.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 text-white text-xs px-3 py-1 rounded whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-4 flex-shrink-0 min-h-[4rem]">
                  <div className="text-xs font-semibold mb-1">{program.partner}</div>
                  <div className="text-xs text-white/80 line-clamp-2">{program.partnerText}</div>
                </div>

                <div className="mb-4 flex-shrink-0">
                  <p className="text-sm text-white/80">Round 1 Deadline: 16th Feb 2026</p>
                </div>

                <div className="mt-auto pt-4 flex-shrink-0">
                  <Link href={program.link || `/programs/${program.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#ffd700] text-black py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-[#ffed4e] transition-colors text-sm"
                    >
                      LEARN MORE
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Carousel Container */}
        <div className="relative hidden md:block">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {infinitePrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg overflow-hidden group cursor-pointer border border-[#d4af37]/20 flex flex-col flex-shrink-0"
                style={{ 
                  width: 'calc((100% - 3rem) / 3)',
                  height: '650px'
                }}
              >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />
              </div>

              <div className="p-5 md:p-6 text-white flex flex-col flex-1 h-full">
                <h3 className="text-lg md:text-xl font-bold mb-4 line-clamp-2 min-h-[3rem]">{program.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/20 text-white text-xs px-3 py-1 rounded whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-4 flex-shrink-0 min-h-[4rem]">
                  <div className="text-xs font-semibold mb-1">{program.partner}</div>
                  <div className="text-xs text-white/80 line-clamp-2">{program.partnerText}</div>
                </div>

                <div className="mb-4 flex-shrink-0">
                  <p className="text-sm text-white/80">Round 1 Deadline: 16th Feb 2026</p>
                </div>

                <div className="mt-auto pt-4 flex-shrink-0">
                  <Link href={program.link || `/programs/${program.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#ffd700] text-black py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-[#ffed4e] transition-colors text-sm"
                    >
                      LEARN MORE
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.button>
                  </Link>
                </div>
              </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator - Desktop Only */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-8">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-[#ffd700]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExplorePrograms

