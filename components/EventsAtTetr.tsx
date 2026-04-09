'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa'

const events = [
  {
    location: 'Katy, Texas, USA',
    time: '4:00-6:00 PM CT (Central Time, USA)',
    date: '10th January, 2026',
    title: 'GI-SMART Connect: Katy, Texas Edition',
    description: 'Spend a day discovering what life at GI-SMART feels like. Engage with our team, explore our immersive 7-country curriculum, and experience how learning by doing shapes...',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    fullDate: 'Sat, Jan 10, 2026',
    fullTime: '04:00 PM - 06:00 PM (CST)',
  },
  {
    location: 'Bali, Indonesia',
    time: '2:00-4:00 PM WITA (UTC+8)',
    date: '10th January, 2026',
    title: 'GI-SMART Connect: Bali, Indonesia Edition',
    description: 'Spend a day discovering what life at GI-SMART feels like. Engage with our team, explore our immersive 7-country curriculum, and experience how learning by doing shapes...',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    fullDate: 'Sat, Jan 10, 2026',
    fullTime: '02:00 PM - 04:00 PM (WITA)',
  },
  {
    location: 'Bengaluru, India',
    time: '03:00 PM - 05:00 PM (IST)',
    date: '10th January, 2026',
    title: 'GI-SMART Connect: Bengaluru, India Edition',
    description: 'Spend a day discovering what life at GI-SMART feels like. Engage with our team, explore our immersive 7-country curriculum, and experience how learning by doing shapes...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    fullDate: 'Sat, Jan 10, 2026',
    fullTime: '03:00 PM - 05:00 PM (IST)',
  },
]

const EventsAtTetr = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            Events at GI-SMART
          </motion.h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors">
              ←
            </button>
            <button className="w-12 h-12 bg-[#ffd700] hover:bg-[#ffed4e] rounded-lg flex items-center justify-center text-black transition-colors">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Top Green Box */}
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white p-6">
                <div className="text-xs font-semibold mb-2">GI-SMART CONNECT</div>
                <div className="text-xs sm:text-sm mb-4">Step Into a Day at GI-SMART</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-sm" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-sm" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-sm" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded flex items-center justify-center">
                  <FaExternalLinkAlt className="text-black text-xs" />
                </div>
              </div>

              {/* Bottom White Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-sm" />
                    <span>{event.fullDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-sm" />
                    <span>{event.fullTime}</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-semibold">
                    UPCOMING EVENT
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsAtTetr

