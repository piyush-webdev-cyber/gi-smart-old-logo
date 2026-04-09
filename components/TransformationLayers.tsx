'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const layers = [
  { id: 1, title: 'Skills', subtitle: 'Build Employability', color: 'bg-[#e8f5e9]' },
  { id: 2, title: 'Experiences', subtitle: 'Helps Internalization', color: 'bg-[#c8e6c9]' },
  { id: 3, title: 'Exposure', subtitle: 'Cultivates Perspective', color: 'bg-gradient-to-br from-[#d4af37]/20 to-white' },
  { id: 4, title: 'Values', subtitle: 'Nurtures Mindsets', color: 'bg-[#81c784]' },
]

const TransformationLayers = () => {
  const [activeLayer, setActiveLayer] = useState(1)

  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            GI-SMART Transformation Layers: Rooted in Science & First Principles
          </h2>
          <p className="text-xl text-white/80">
            Our curriculum is structured around four key tenets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Stacked Boxes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveLayer(layer.id)}
                className={`${layer.color} p-8 rounded-xl cursor-pointer transform transition-all hover:scale-[1.02] relative ${
                  activeLayer === layer.id ? 'ring-2 ring-[#ffd700] shadow-lg' : ''
                }`}
                style={{ 
                  marginLeft: `${index * 15}px`,
                  zIndex: layers.length - index
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#8b1538] mb-2">{layer.title}</h3>
                    <p className="text-[#8b1538] text-lg font-medium">{layer.subtitle}</p>
                  </div>
                  <div className="text-9xl font-bold text-[#8b1538]/15">{layer.id}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            {activeLayer === 1 && (
              <div>
                <div className="bg-[#d4af37] text-[#0a1628] px-3 py-1 rounded inline-block text-sm font-semibold mb-6">
                  SKILLS
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Focus on <span className="italic">applicable skills</span> instead of rote memorization
                </h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  GI-SMART's curriculum is rooted in <strong>Workshops</strong>, where students learn applied skills in a real world context from experienced practitioners.
                </p>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffd700] mt-1">•</span>
                    <span>Students enroll in gamified & engaging workshops, rather than long theoretical courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffd700] mt-1">•</span>
                    <span>Inspiring practitioners teach what they hire for and what they practice everyday</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffd700] mt-1">•</span>
                    <span>Learning is driven by real life applicability, rather than by an outdated syllabi & exams</span>
                  </li>
                </ul>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-white/10 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeLayer === 2 && (
              <div>
                <div className="bg-[#d4af37] text-[#0a1628] px-3 py-1 rounded inline-block text-sm font-semibold mb-6">
                  EXPERIENCES
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Learn through <span className="italic">real-world projects</span> across multiple terms
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    'Build a eCommerce business selling globally sourced products in Middle East [Term 1]',
                    'Launch a D2C brand in fashion accessories catering to rural markets in India [Term 2]',
                    'Build a Youtube channel in a niche like personal care or tech & build a loyal community [Term 7]',
                  ].map((project, idx) => (
                    <div key={idx} className="bg-white/10 p-5 rounded-lg border border-white/20">
                      <p className="text-white/90 leading-relaxed">{project}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeLayer === 3 && (
              <div>
                <div className="bg-[#d4af37] text-[#0a1628] px-3 py-1 rounded inline-block text-sm font-semibold mb-6">
                  EXPOSURE
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Cultivate a global perspective through exposure to 7 unique countries
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Anchor yourself to ground realities underlying everything, right from bazaars to large conglomerates, across developed and developing countries.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { 
                      title: 'Immerse yourself in the history and heritage of Singapore.', 
                      subtitle: 'Singapore National Museum',
                      image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454'
                    },
                    { 
                      title: 'Immerse into the business of Soccer at Flamengo, Brazil\'s most famous football club',
                      subtitle: '',
                      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952'
                    },
                    { 
                      title: 'Explore the business of high fashion at the Milan Fashion Week',
                      subtitle: '',
                      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
                    },
                  ].map((exp, idx) => (
                    <div key={idx} className="bg-white rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-900">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${exp.image})` }} />
                      </div>
                      <div className="p-4">
                        <p className="text-gray-900 text-sm leading-relaxed">{exp.title}</p>
                        {exp.subtitle && <p className="text-gray-600 text-xs mt-1">{exp.subtitle}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-4">
                  <button className="w-12 h-12 bg-[#ffd700] hover:bg-[#ffed4e] rounded-lg flex items-center justify-center text-black transition-colors">
                    →
                  </button>
                </div>
              </div>
            )}

            {activeLayer === 4 && (
              <div>
                <div className="bg-[#d4af37] text-[#0a1628] px-3 py-1 rounded inline-block text-sm font-semibold mb-6">
                  VALUES
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Go beyond skills - but <span className="italic">mindsets & value systems</span> too
                </h3>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Engage in deliberate inner engineering, manage your psychology and flex your mental muscles, just as much as your business muscles.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { 
                      title: 'Learn & practice proven', 
                      highlight: 'mental models', 
                      desc: 'to maximize performance and well being',
                      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773'
                    },
                    { 
                      title: 'Spend mandated time in group', 
                      highlight: 'reflection therapies & journaling', 
                      desc: 'to nurture self development',
                      image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71'
                    },
                    { 
                      title: 'From', 
                      highlight: 'Yoga to Tai Chi', 
                      desc: 'find the physical therapy that works the best for you',
                      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-200">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                      </div>
                      <div className="p-4">
                        <p className="text-gray-900 text-sm leading-relaxed">
                          {item.title} <strong className="font-bold">{item.highlight}</strong> {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TransformationLayers

