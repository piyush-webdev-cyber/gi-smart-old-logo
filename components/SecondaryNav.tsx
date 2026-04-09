'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const SecondaryNav = () => {
  const [activeSection, setActiveSection] = useState<string>('curriculum')
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const secondaryNavLinks = [
    { id: 'curriculum', label: 'CURRICULUM' },
    { id: 'accreditation', label: 'ACCREDITATION' },
    { id: 'week-at-GI-SMART', label: 'A WEEK AT GI-SMART' },
    { id: 'courses', label: 'COURSES' },
    { id: 'faculty', label: 'FACULTY' },
    { id: 'admissions', label: 'ADMISSIONS' },
    { id: 'careers', label: 'CAREERS' },
  ]

  useEffect(() => {
    // Get all section elements
    secondaryNavLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      sectionRefs.current[link.id] = element
    })

    // Create IntersectionObserver for each section
    const observers: IntersectionObserver[] = []

    secondaryNavLinks.forEach((link) => {
      const element = sectionRefs.current[link.id]
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActiveSection(link.id)
          }
        },
        {
          threshold: [0, 0.2, 0.5, 1],
          rootMargin: '-180px 0px -60% 0px',
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    // Handle scroll to update active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Account for fixed nav

      for (let i = secondaryNavLinks.length - 1; i >= 0; i--) {
        const link = secondaryNavLinks[i]
        const element = sectionRefs.current[link.id]
        if (element) {
          const offsetTop = element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(link.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      observers.forEach((observer) => observer.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 180 // Account for fixed navbar + secondary nav
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="fixed top-[125px] left-0 right-0 z-40 bg-gradient-to-r from-[#0a1628] to-[#1a2332] border-t border-[#d4af37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6 overflow-x-auto">
            {secondaryNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors duration-300 text-sm font-medium uppercase tracking-wide whitespace-nowrap ${
                  activeSection === link.id
                    ? 'text-[#ffd700]'
                    : 'text-white hover:text-[#ffd700]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <Link href="/admissions">
            <button className="bg-[#ffd700] text-black px-4 py-2 rounded font-semibold text-sm hover:bg-[#ffed4e] transition-colors flex items-center gap-1 whitespace-nowrap">
              APPLY NOW
              <FaExternalLinkAlt className="text-xs" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default SecondaryNav

