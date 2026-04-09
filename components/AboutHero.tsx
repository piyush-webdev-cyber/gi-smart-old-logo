'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const principles = [
  { 
    id: 4, 
    title: 'Values', 
    subtitle: 'Nurtures Mindsets',
    color: 'bg-[#e5e7eb]',
    content: {
      label: 'VALUES',
      headline: 'Go beyond skills - but *mindsets & value systems* too',
      description: 'Engage in deliberate inner engineering, manage your psychology and flex your mental muscles, just as much as your business muscles.',
      bullets: [
        'Learn & practice proven mental models to maximize performance and well being',
        'Spend mandated time in group reflection therapies & journaling to nurture self development',
        'From Yoga to Tai Chi, find the physical therapy that works the best for you'
      ]
    }
  },
  { 
    id: 3, 
    title: 'Exposure', 
    subtitle: 'Cultivates Perspective',
    color: 'bg-[#e5e7eb]',
    content: {
      label: 'EXPOSURE',
      headline: 'Cultivate a global perspective through exposure to 7 unique countries',
      description: 'Anchor yourself to ground realities underlying everything, right from bazaars to large conglomerates, across developed and developing countries.',
      bullets: [
        'Immerse yourself in the history and heritage of Singapore',
        'Immerse into the business of Soccer at Flamengo, Brazil\'s most famous football club',
        'Explore the business of high fashion at the Milan Fashion Week'
      ]
    }
  },
  { 
    id: 2, 
    title: 'Experiences', 
    subtitle: 'Helps Internalization',
    color: 'bg-[#e5e7eb]',
    content: {
      label: 'EXPERIENCES',
      headline: 'Learn through *real-world projects* across multiple terms',
      description: 'Build businesses and projects that matter, gaining hands-on experience that transforms learning into lasting knowledge.',
      bullets: [
        'Build a eCommerce business selling globally sourced products in Middle East [Term 1]',
        'Launch a D2C brand in fashion accessories catering to rural markets in India [Term 2]',
        'Build a Youtube channel in a niche like personal care or tech & build a loyal community [Term 7]'
      ]
    }
  },
  { 
    id: 1, 
    title: 'Skills', 
    subtitle: 'Build Employability',
    color: 'bg-[#e5e7eb]',
    content: {
      label: 'SKILLS',
      headline: 'Focus on *applicable skills* instead of rote memorization',
      description: "GI-SMART's curriculum is rooted in **Workshops**, where students learn applied skills in a real world context from experienced practitioners.",
      bullets: [
        'Students enroll in gamified & engaging workshops, rather than long theoretical courses',
        'Inspiring practitioners teach what they hire for and what they practice everyday',
        'Learning is driven by real life applicability, rather than by an outdated syllabi & exams'
      ]
    }
  },
]

const AboutHero = () => {
  const [activeSection, setActiveSection] = useState(1)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Content sections are in reverse order: Skills(1), Experiences(2), Exposure(3), Values(4)
            // So index 0 = Skills (id 1), index 1 = Experiences (id 2), etc.
            const principleId = index + 1
            setActiveSection(principleId)
          }
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  const scrollToSection = (index: number) => {
    // Reverse the index to match the content order
    const contentIndex = principles.length - 1 - index
    const ref = sectionRefs.current[contentIndex]
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a1628] to-[#1a2332] pt-[125px] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4">
            Rooted in Science & First Principles
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90">
            Our curriculum is structured around four key tenets.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Stacked Boxes */}
          <div className="space-y-4 sticky top-32 h-fit max-w-md mx-auto lg:mx-0">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => scrollToSection(index)}
                className={`${principle.color} p-6 md:p-8 rounded-lg cursor-pointer transform transition-all duration-300 relative ${
                  activeSection === principle.id 
                    ? 'ring-4 ring-[#ffd700] shadow-2xl scale-[1.02]' 
                    : 'ring-0'
                }`}
                style={{ 
                  zIndex: index + 1
                }}
              >
                <div className="flex items-center justify-between relative">
                  <div className="flex-1 pr-4 z-10 relative">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8b1538] mb-1 md:mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-[#8b1538]/80 text-sm md:text-base lg:text-lg font-medium">
                      {principle.subtitle}
                    </p>
                  </div>
                  <div className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-gray-400/40 absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none select-none z-0">
                    {principle.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Scrollable Content Sections */}
          <div className="space-y-24 md:space-y-32">
            {principles.slice().reverse().map((principle, index) => {
              const originalIndex = principles.length - 1 - index
              return (
                <div
                  key={principle.id}
                  ref={(el) => {
                    sectionRefs.current[originalIndex] = el
                  }}
                  className="min-h-[60vh] flex flex-col justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-white"
                  >
                    {/* Label */}
                    <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white px-4 py-1.5 rounded-md inline-block text-xs md:text-sm font-semibold mb-6">
                      {principle.content.label}
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                      {principle.content.headline.includes('*') && !principle.content.headline.includes('**') ? (
                        principle.content.headline.split('*').map((part, i) => 
                          i % 2 === 1 ? (
                            <span key={i} className="italic">{part}</span>
                          ) : (
                            part
                          )
                        )
                      ) : principle.content.headline.includes('**') ? (
                        principle.content.headline.split('**').map((part, i) => 
                          i % 2 === 1 ? (
                            <span key={i} className="font-bold">{part}</span>
                          ) : (
                            part
                          )
                        )
                      ) : (
                        principle.content.headline
                      )}
                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg text-white mb-8 leading-relaxed">
                      {principle.content.description.includes('**') ? (
                        principle.content.description.split('**').map((part, i) => 
                          i % 2 === 1 ? (
                            <span key={i} className="font-bold">{part}</span>
                          ) : (
                            part
                          )
                        )
                      ) : (
                        principle.content.description
                      )}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 md:space-y-4 mb-8">
                      {principle.content.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <span className="text-white mt-1 text-lg md:text-xl flex-shrink-0">•</span>
                          <span className="text-white text-base md:text-lg leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Images */}
                    {principle.id === 1 && (
                      <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="aspect-square bg-white/10 rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')] bg-cover bg-center" />
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
