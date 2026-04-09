'use client'

import { motion } from 'framer-motion'

const MScAAIDSInfoSection = () => {
  const learningOutcomes = [
    'Design and deploy scalable AI and data systems',
    'Integrate robotics and mechatronic systems for automation',
    'Apply ethical and sustainable principles to AI deployment',
    'Conduct advanced applied research and lead innovation',
    'Build global-ready AI solutions for cross-sector challenges'
  ]

  const careerPathways = [
    'AI Engineer',
    'Robotics Developer',
    'Data Architect',
    'UX-AI Designer',
    'Cloud Engineer',
    'Smart City Analyst',
    'Innovation Manager',
    'Applied Researcher'
  ]

  const infrastructure = [
    {
      name: 'AI & ML Laboratory',
      details: 'GPU servers, deep learning frameworks'
    },
    {
      name: 'Robotics & Mechatronics Lab',
      details: 'Robotic arms, drones, ROS'
    },
    {
      name: 'Data Systems Lab',
      details: 'Cloud clusters, data governance tools'
    },
    {
      name: 'XR Innovation Studio',
      details: 'AR/VR systems and affective AI'
    },
    {
      name: 'Smart City Sandbox',
      details: 'IoT and urban simulation datasets'
    }
  ]

  const partnerships = [
    {
      name: 'Dubai Future Labs',
      type: 'Robotics collaboration and student internships'
    },
    {
      name: 'G42 Cloud, Etisalat Digital',
      type: 'Cloud infrastructure and AI implementation'
    },
    {
      name: 'Smart Dubai Office, DEWA, RTA',
      type: 'Smart City data and sustainability projects'
    },
    {
      name: 'Paris Campus',
      type: 'Research and student mobility programs'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Learning Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f0f8f0] rounded-lg p-6 border-l-4 border-[#8b1538]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Career Pathways
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careerPathways.map((career, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <p className="font-semibold">{career}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Faculty & Infrastructure Highlights
          </h2>
          <p className="text-center text-gray-600 mb-8">Dubai Campus</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-[#0a1628] to-[#8b1538] rounded-lg p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-white/80 text-sm">{item.details}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center bg-[#ffd700] rounded-lg p-6">
            <p className="text-gray-900 font-bold text-lg">
              Faculty: 80% PhD-level, 20% industry adjuncts
            </p>
          </div>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Industry & Academic Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-2 border-[#8b1538] rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#8b1538] mb-2">{partner.name}</h3>
                <p className="text-gray-700">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Implementation Timeline
          </h2>
          <div className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { quarter: 'Q1 2025', task: 'Infrastructure Design' },
                { quarter: 'Q2 2025', task: 'Accreditation Preparation' },
                { quarter: 'Q3 2025', task: 'Faculty Recruitment & Lab Setup' },
                { quarter: 'Q4 2025', task: 'Marketing & Admissions' },
                { quarter: 'Q1 2026', task: 'Program Launch (Dubai Campus)', highlight: true }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-lg ${
                    item.highlight
                      ? 'bg-[#ffd700] text-black'
                      : 'bg-white/10'
                  }`}
                >
                  <div className="font-bold text-lg mb-2">{item.quarter}</div>
                  <div className={item.highlight ? 'text-gray-900 font-semibold' : 'text-white/90'}>
                    {item.task}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MScAAIDSInfoSection

