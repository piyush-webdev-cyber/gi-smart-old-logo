'use client'

import Link from 'next/link'
import { FaExternalLinkAlt, FaInstagram, FaPlay, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a1628] to-[#0a0a0a] text-white border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="mb-8 sm:mb-10 md:mb-12">
          {/* Logo and CTA */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img 
                src="/logo-footer.png" 
               
                className="h-16 sm:h-18 md:h-18 w-auto object-contain"
              />
              {/* <span className="text-white font-bold text-base sm:text-lg md:text-xl">GI-SMART</span> */}
            </div>
            <Link href="/admissions">
              <button className="bg-[#ffd700] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#ffed4e] transition-colors mb-6 sm:mb-8">
                APPLY NOW
                <FaExternalLinkAlt className="text-xs sm:text-sm" />
              </button>
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end gap-4 sm:gap-6">
            <div className="flex flex-col gap-3 sm:gap-4 items-start sm:items-end">
              <div className="flex gap-2 sm:gap-3">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <FaInstagram className="text-white text-base sm:text-xl" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <FaPlay className="text-white text-base sm:text-xl" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <FaLinkedin className="text-white text-base sm:text-xl" />
                </a>
              </div>
              <div className="text-white/80 text-xs sm:text-sm">
                Email: info@gismart.com
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 mb-4 sm:mb-6"></div>

        {/* Bottom Footer */}
        <div className="pt-4 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-white/70 text-xs sm:text-sm">
              <Link href="/contact" className="hover:text-white transition-colors uppercase">CONTACT US</Link>
              <Link href="/tuition-pathway" className="hover:text-white transition-colors uppercase">TUITION PATHWAY</Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors uppercase">REFUND POLICY</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors uppercase">PRIVACY POLICY</Link>
              <Link href="/terms" className="hover:text-white transition-colors uppercase">TERMS & CONDITIONS</Link>
            </div>
            <div className="text-white/60 text-[10px] sm:text-xs">
              Copyright© {new Date().getFullYear()} GI-SMART. All rights reserved.
            </div>
          </div>
          <div className="text-white/60 text-[10px] sm:text-xs mb-2 sm:mb-4 leading-relaxed">
            * GI-SMART reserves the right to adjust the program location for this term due to prevailing visa restrictions. Participants will be notified accordingly.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


