'use client'

import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const BAIDCampusMobility = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f0f8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Campus — Paris, France
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Study at our campus in Paris, France for an immersive, culture-rich learning experience in the heart of Europe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#8b1538]"
          >
            <h3 className="text-2xl font-bold text-[#8b1538] mb-4">Paris Campus Experience</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our campus in Paris, France is your academic base — the creative capital of Europe for design thinking, culture, and advanced AI research.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#ffd700] font-bold mt-1 flex-shrink-0" />
                <span>Deep immersion in Paris</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#ffd700] font-bold mt-1 flex-shrink-0" />
                <span>Build strong local and European networks</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#ffd700] font-bold mt-1 flex-shrink-0" />
                <span>Potential residency opportunities in France / EU</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#8b1538] rounded-xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Global Perspective</h3>
            <p className="text-white/90 mb-4 leading-relaxed">
              From our Paris campus, gain exposure to European industries, languages, and international professional networks.
            </p>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#ffd700] font-bold mt-1 flex-shrink-0" />
                <span>Exposure to diverse industries</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#ffd700] font-bold mt-1 flex-shrink-0" />
                <span>Language and cultural immersion in France</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-[#ffd700] font-bold mt-1 flex-shrink-0" />
                <span>International professional networks</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Intimate Learning Environments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f0f8f0] rounded-lg p-6">
              <h4 className="text-xl font-bold text-[#8b1538] mb-2">Years 1–2</h4>
              <p className="text-3xl font-bold text-gray-900 mb-2">40–50</p>
              <p className="text-gray-700">students per cohort</p>
              <p className="text-sm text-gray-600 mt-3">Fostering community, diversity, and collaboration</p>
            </div>
            <div className="bg-[#8b1538] rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Year 3</h4>
              <p className="text-3xl font-bold mb-2">30–35</p>
              <p className="text-white/90">students per class</p>
              <p className="text-sm text-white/80 mt-3">Emphasizing mentorship, specialization, and project mastery</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BAIDCampusMobility

