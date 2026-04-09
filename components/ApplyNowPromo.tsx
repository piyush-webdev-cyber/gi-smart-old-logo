'use client'

import { motion } from 'framer-motion'

const promoImages = [
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Learn Business by Doing Business',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Learn from CXOs & Ivy League Professors',
  },
  {
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Study at Top Institutes',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Witness Business in Action - From HQs to Shop Floors',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Turn Ideas Into Reality With GI-SMART Launchpad',
  },
  {
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Immerse Yourself in Cultures Worldwide and Live Like a Local Wherever You Go',
  },
]

const ApplyNowPromo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Join GI-SMART Where The <span className="font-extrabold italic">World Is Your Classroom</span>
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {promoImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group cursor-pointer"
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-2 shadow-lg">
              <motion.img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-sm font-semibold text-gray-700 group-hover:text-[#8b1538] transition-colors">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ApplyNowPromo

