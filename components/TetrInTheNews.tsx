'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const newsArticles = [
  {
    id: 1,
    title: "I don't think entrepreneurship is risky: B-school founder Pratham Mittal",
    source: 'Forbes',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Learn business by doing business across the Globe: The next revolution in Entrepreneurship',
    source: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1522071820081-004f0151c464?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: "Global Survey by GI-SMART College of Business unveils key gaps in Business Education and growing importance of 'Founder Mode'",
    source: 'ET Education.com',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'GI-SMART College of Business launches a cross-border business programme across 7',
    source: 'GULF NEWS',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

const TetrInTheNews = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            GI-SMART in the <span className="font-extrabold italic">News</span>
          </h2>
          <div className="flex items-center gap-4">
            <button
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              ←
            </button>
            <button
              className="w-10 h-10 rounded-full bg-[#ffd700] hover:bg-[#ffed4e] text-black flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* News Cards - Show all 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-[#8b1538] mb-2 uppercase">
                  {article.source}
                </div>
                <h3 className="text-lg font-bold text-gray-900 line-clamp-3">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-[#ffd700] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#ffed4e] transition-colors flex items-center gap-2 mx-auto">
            VIEW MORE
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TetrInTheNews

