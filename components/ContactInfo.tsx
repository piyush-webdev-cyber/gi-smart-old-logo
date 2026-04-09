'use client'

import { motion } from 'framer-motion'

const ContactInfo = () => {
  const locations = [
    {
      name: 'GI-SMART INC (USA)',
      address: '121 Stewart St Apt 803, Seattle, WA 98101',
    },
    {
      name: 'GI-SMART L.L.C-FZ (UAE)',
      address: 'Meydan Grandstand, 6th Floor, Meydan Road, NAD AL SHEBA, Dubai',
    },
    {
      name: 'GI-SMART (INDIA)',
      address: '383 Udyog Vihar Phase 3, Gurgaon, Haryana 122008',
    },
    {
      name: 'GI-SMART LIMITED (UK)',
      address: '3A Station Road, Amersham, Buckinghamshire HP7 OBQ',
    },
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Addresses */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
                }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#1a2332]/80" />
            </div>
            <div className="relative z-10 p-8 md:p-10 text-white">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
              >
                <span className="text-[#00ff88]">■</span>
                REACH US
              </motion.h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="group cursor-pointer"
                  >
                    <h4 className="font-bold text-lg md:text-xl mb-2 group-hover:text-[#00ff88] transition-colors">
                      {location.name}
                    </h4>
                    <p className="text-white/90 leading-relaxed">{location.address}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 pt-8 border-t border-white/20"
              >
                <div className="flex items-center gap-2 mb-5">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#00ff88] font-bold text-xl"
                  >
                    ■
                  </motion.span>
                  <h4 className="font-bold text-lg">International (Toll-Free)</h4>
                </div>
                <div className="space-y-3 text-white/90">
                  <motion.p
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    Bachelor's Program:{' '}
                    <a href="tel:+118332984227" className="font-semibold text-[#00ff88] hover:underline">
                      +1 1833-298-4227
                    </a>
                  </motion.p>
                  <motion.p
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    Master's Program:{' '}
                    <a href="tel:+18336514749" className="font-semibold text-[#00ff88] hover:underline">
                      +1 833-651-4749
                    </a>
                  </motion.p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/90">
                    <span className="font-semibold">Operational Hours:</span>{' '}
                    <span className="text-[#00ff88]">5 AM UTC - 9 PM UTC</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Email & Consultation */}
          <div className="space-y-0">
            {/* Email Inquiries Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-8">For admission-related inquiries, please contact us at:</h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <p className="text-white/80 mb-2 text-sm">For admission-related inquiries, please contact us at:</p>
                  <a
                    href="mailto:studentsupport-ug@GI-SMART.org"
                    className="font-bold text-lg md:text-xl text-[#00ff88] hover:underline inline-block group-hover:text-[#00ff88] transition-colors"
                  >
                    Inquiries@gi-smart.com
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <p className="text-white/80 mb-2 text-sm">For PG admission-related inquiries, please contact us at:</p>
                  <a
                    href="mailto:studentsupport-pg@GI-SMART.com"
                    className="font-bold text-lg md:text-xl text-[#00ff88] hover:underline inline-block group-hover:text-[#00ff88] transition-colors"
                  >
                    studentsupport-@gi-smart.com
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <p className="text-white/80 mb-2 text-sm">For general inquiries, reach out to:</p>
                  <a
                    href="mailto:info@GI-SMART.com"
                    className="font-bold text-lg md:text-xl text-[#00ff88] hover:underline inline-block group-hover:text-[#00ff88] transition-colors"
                  >
                    info@gi-smart.com
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Video Consultation Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-xl p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 -mt-4"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-8">Book a Video Consultation with our:</h3>
              <div className="space-y-5">
                <motion.a
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center justify-between group cursor-pointer p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="font-bold text-lg md:text-xl">Bachelor's Admissions Counsellor</span>
                  <motion.span
                    className="text-2xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center justify-between group cursor-pointer p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="font-bold text-lg md:text-xl">Master's Admissions Counsellor</span>
                  <motion.span
                    className="text-2xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo

