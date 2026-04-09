'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const LearningInAction = () => {
  const projects = [
    {
      title: '8 BILLIONPROJECT',
      handle: '@8.billionproject',
      category: 'Apparel',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'pink'
    },
    {
      title: 'SERVE',
      handle: '@serveclub_co',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'pink'
    },
    {
      title: 'MAISON&CO',
      handle: '@maisonandcoofficial',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'blue'
    },
  ]

  const categories = [
    { name: 'Kickstarter', subtitle: 'Founded in Term 3' },
    { name: 'D2C Companies', subtitle: 'Founded in Term 2' },
    { name: 'Dropshipping Companies', subtitle: 'Founded in Term 1' },
    { name: 'Creator Fellows', subtitle: 'Progress in Term 1' },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Learning by Doing. <span className="font-extrabold italic">In Action.</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white/10 text-white px-6 py-3 rounded-lg">
              <div className="font-bold">{cat.name}</div>
              <div className="text-sm text-white/70">{cat.subtitle}</div>
            </div>
          ))}
          <div className="flex items-center gap-2 text-[#ffd700]">
            <button className="text-2xl">←</button>
            <button className="text-2xl">→</button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Batch Card */}
          <div className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg p-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="text-[#8b1538] font-bold text-sm mb-2">BATCH 2028</div>
              <div className="text-[#8b1538] font-semibold">Review Cohort 1 Progress</div>
            </div>
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
              <FaExternalLinkAlt />
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-video relative">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className={`absolute bottom-2 right-2 w-8 h-8 rounded flex items-center justify-center text-white font-bold ${
                  project.color === 'pink' ? 'bg-pink-500' : 'bg-blue-500'
                }`}>
                  <FaExternalLinkAlt />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.handle} • {project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="bg-white rounded-lg p-12 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-[#8b1538] mb-4">
            Learn. Apply. Reflect. <span className="font-extrabold italic">Repeat.</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hands-on courses and workshops designed to build real businesses— because real learning comes from real applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LearningInAction
