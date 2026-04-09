'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative squares pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-2 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-sm" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
            Its time to
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 italic">
            get out there
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Addresses */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514565131-fce0801e5785')] bg-cover bg-center opacity-20" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-3 h-3 bg-[#00ff88]"></span>
                  <h3 className="text-xl font-bold">REACH US</h3>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <div className="font-semibold mb-2">GI-SMART INC (USA):</div>
                    <div className="text-white/90 text-sm">
                      121 Stewart St Apt 803,<br />
                      Seattle, WA 98101
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">GI-SMART L.L.C-FZ (UAE):</div>
                    <div className="text-white/90 text-sm">
                      Meydan Grandstand,<br />
                      6th Floor, Meydan Road,<br />
                      NAD AL SHEBA, Dubai
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">GI-SMART (INDIA):</div>
                    <div className="text-white/90 text-sm">
                      383 Udyog Vihar Phase 3,<br />
                      Gurgaon, Haryana 122008
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">GI-SMART LIMITED (UK):</div>
                    <div className="text-white/90 text-sm">
                      3A Station Road, Amersham,<br />
                      Buckinghamshire HP7 OBQ
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="font-semibold mb-4">International (Toll-Free):</div>
                  <div className="space-y-2 text-sm mb-6">
                    <div>Bachelor's Program: <span className="font-semibold">+1 1833-298-4227</span></div>
                    <div>Master's Program: <span className="font-semibold">+1 1833-651-4749</span></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Operational Hours:</div>
                    <div className="text-sm">5 AM UTC - 9 PM UTC</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Forms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email Contacts */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-white/90 mb-2">For UG admission-related inquiries, please contact us at:</p>
                  <Link href="mailto:studentsupport-ug@GI-SMART.org" className="text-[#ffd700] underline">
                    studentsupport-ug@GI-SMART.org
                  </Link>
                </div>
                <div>
                  <p className="text-white/90 mb-2">For PG admission-related inquiries, please contact us at:</p>
                  <Link href="mailto:studentsupport-pg@GI-SMART.com" className="text-[#ffd700] underline">
                    studentsupport-pg@GI-SMART.com
                  </Link>
                </div>
                <div>
                  <p className="text-white/90 mb-2">For general inquiries, reach out to:</p>
                  <Link href="mailto:info@GI-SMART.com" className="text-[#ffd700] underline">
                    info@GI-SMART.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Consultation Booking */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white p-8 rounded-lg">
              <p className="text-white/90 mb-6">Book a Video Consultation with our:</p>
              <div className="space-y-4">
                <Link href="/consultation/bachelors">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 hover:bg-white/20 p-4 rounded-lg cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="text-lg font-semibold">Bachelor's Admissions Counsellor</span>
                    <FaExternalLinkAlt className="text-[#ffd700]" />
                  </motion.div>
                </Link>
                <Link href="/consultation/masters">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 hover:bg-white/20 p-4 rounded-lg cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="text-lg font-semibold">Master's Admissions Counsellor</span>
                    <FaExternalLinkAlt className="text-[#ffd700]" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

