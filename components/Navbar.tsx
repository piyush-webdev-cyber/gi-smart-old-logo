'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOverHero, setIsOverHero] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)

  useEffect(() => {
    const checkIfOverDarkBackground = () => {
      const navbarHeight = 64
      const scrollPosition = window.scrollY
      const navbarBottom = scrollPosition + navbarHeight
      
      const darkSections = document.querySelectorAll('section[class*="bg-gradient-to-b"], section[class*="bg-[#0a1628]"], section[class*="bg-[#0a0a0a]"]')
      
      let isOverDark = false
      
      darkSections.forEach((section) => {
        const element = section as HTMLElement
        const sectionTop = element.offsetTop
        const sectionBottom = sectionTop + element.offsetHeight
        
        if (navbarBottom >= sectionTop && scrollPosition < sectionBottom) {
          isOverDark = true
        }
      })
      
      setIsOverHero(isOverDark)
    }

    checkIfOverDarkBackground()
    
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkIfOverDarkBackground()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    window.addEventListener('resize', throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      window.removeEventListener('resize', throttledHandleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.programs-dropdown')) {
        setIsProgramsDropdownOpen(false)
      }
    }

    if (isProgramsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isProgramsDropdownOpen])

  // Reset mobile programs dropdown when mobile menu closes and lock body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Lock body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      // Unlock body scroll when menu is closed
      document.body.style.overflow = ''
      setMobileProgramsOpen(false)
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const programsMenuItems = [
    { href: '/programs/bachelor-ai-design', label: 'Bachelor of Artificial Intelligence Design (BAID)' },
    { href: '/programs/master-applied-ai-data-systems', label: 'MSc in Applied AI & Data Systems' },
    { href: '/programs/bachelor-tourism-hospitality', label: 'BBA in Tourism & Hospitality Innovation' },
    { href: '/programs/bachelor-strategic-management', label: 'BSc in Strategic Management' },
  ]

  const overviewMenuItems = [
    { href: '/programs/curriculum', label: 'Curriculum' },
    { href: '/programs/accreditation', label: 'Accreditation' },
    { href: '/programs/week-at-GI-SMART', label: 'Week at GI-SMART' },
    { href: '/programs/courses', label: 'Courses' },
    { href: '/programs/faculty', label: 'Faculty' },
    { href: '/programs/admission', label: 'Admission' },
  ]

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/programs', label: 'PROGRAMS', hasDropdown: true },
    { href: '/admissions', label: 'ADMISSIONS' },
    { href: '/international', label: 'INTERNATIONAL' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isOverHero 
            ? 'bg-white/60 backdrop-blur-md shadow-md' 
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            {/* <Link href="/" className="flex items-center gap-3">
              <img 
                src="/gi-france-removebg-preview.png" 
                alt="GI-SMART Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link> */}
            <Link href="/" className="flex items-center">
  <img 
    src="/gi-france-removebg-preview.png" 
    alt="GI-SMART Logo" 
    className="h-24 w-auto m-0 p-0 object-contain"
  />
</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative programs-dropdown">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                        className="transition-colors duration-300 font-medium text-sm uppercase tracking-wide flex items-center gap-1 text-black hover:text-[#8b1538]"
                      >
                        {link.label}
                      </button>
                      <AnimatePresence>
                        {isProgramsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-[90vw] max-w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-6">
                              {/* Left Column - Programs */}
                              <div>
                                {programsMenuItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsProgramsDropdownOpen(false)}
                                    className="block py-2 text-gray-900 font-bold hover:text-[#8b1538] transition-colors text-sm"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                              
                              {/* Right Column - Undergraduate Overview */}
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <div className="w-2 h-2 bg-purple-600"></div>
                                  <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">
                                    UNDERGRADUATE OVERVIEW
                                  </h3>
                                </div>
                                {overviewMenuItems.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsProgramsDropdownOpen(false)}
                                    className="block py-2 text-gray-900 font-bold hover:text-[#8b1538] transition-colors text-sm"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-colors duration-300 font-medium text-sm uppercase tracking-wide text-black hover:text-[#8b1538]"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffd700] text-black px-6 py-2 rounded font-semibold text-sm hover:bg-[#ffed4e] transition-colors"
                >
                  APPLY NOW
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 py-2 rounded font-semibold text-sm border-2 border-[#ffd700] hover:bg-gray-50 transition-colors"
                >
                  CONTACT US
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="md:hidden p-2 transition-colors duration-300 relative z-50 text-black"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 transition-all duration-300 bg-black ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 bg-black ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 bg-black ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Outside nav element */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden"
              style={{ position: 'fixed' }}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full bg-white z-[9999] shadow-2xl md:hidden flex flex-col"
              style={{ position: 'fixed' }}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white flex-shrink-0">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <img 
                      src="/gi-france-removebg-preview.png" 
                      alt="GI-SMART Logo" 
                      className="h-20 sm:h-20 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-800 hover:text-gray-600 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="px-0 py-2 flex-1 overflow-y-auto">
                  {navLinks.map((link) => (
                    <div key={link.href} className="border-b border-gray-100 last:border-b-0">
                      {link.hasDropdown ? (
                        <div className="w-full">
                          {/* Programs Accordion Header */}
                          <button
                            type="button"
                            onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                            className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-50 transition-colors bg-white"
                          >
                            <span className="text-gray-900 font-bold text-base uppercase tracking-wide">
                              {link.label}
                            </span>
                            <motion.svg
                              animate={{ rotate: mobileProgramsOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="w-5 h-5 text-gray-600 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </button>
                          
                          {/* Programs Accordion Content */}
                          {mobileProgramsOpen && (
                            <div className="w-full px-4 pb-4 space-y-2 bg-gray-50 border-t border-gray-100">
                              {/* Programs Section */}
                              <div className="pt-4 pb-3">
                                <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4 px-2">
                                  Programs
                                </h4>
                                <div className="space-y-2">
                                  {programsMenuItems.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setMobileProgramsOpen(false)
                                      }}
                                      className="block px-4 py-3 rounded-lg text-gray-800 hover:bg-[#8b1538] hover:text-white transition-all duration-200 text-sm font-semibold bg-white shadow-sm"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Divider */}
                              <div className="border-t border-gray-300 my-4"></div>
                              
                              {/* Overview Section */}
                              <div className="pt-2 pb-2">
                                <div className="flex items-center gap-2 mb-4 px-2">
                                  <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                                  <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                                    Overview
                                  </h4>
                                </div>
                                <div className="space-y-2">
                                  {overviewMenuItems.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setMobileProgramsOpen(false)
                                      }}
                                      className="block px-4 py-3 rounded-lg text-gray-800 hover:bg-[#0a1628] hover:text-white transition-all duration-200 text-sm font-semibold bg-white shadow-sm"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-bold text-base uppercase tracking-wide"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* CTA Buttons */}
                  <div className="px-4 pt-6 pb-6 space-y-3 bg-white flex-shrink-0 border-t border-gray-200 mt-auto">
                    <Link href="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 bg-[#ffd700] text-black rounded-lg font-bold text-sm shadow-md hover:bg-[#ffed4e] transition-all duration-200"
                      >
                        APPLY NOW
                      </motion.button>
                    </Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 bg-white text-black rounded-lg font-bold text-sm border-2 border-[#ffd700] hover:bg-[#ffd700]/10 transition-all duration-200"
                      >
                        CONTACT US
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </>
  )
}

export default Navbar

