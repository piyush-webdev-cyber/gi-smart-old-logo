'use client'

import { motion } from 'framer-motion'

const LessonsFromBest = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Mr. Sefa Bicer',
      title: 'Regional Sales Manager, Geidea',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Ms. Jinane Abou Mrad',
      title: 'Consultant, Choucair Group SAL',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Ms. Jolandi Uys',
      title: 'Former Training and Development Specialist, Bloomberg',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Mr. Carl Rodrigues',
      title: 'Founder, CNR Digital',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Mr. Jaap Bastiaansen',
      title: 'Partner & COO, Nexus Climate',
      image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Mr. Jason Thomas',
      title: 'Managing Partner & CFO, RTC global',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      name: 'Dr. Bart Jaworski',
      title: 'Senior Product Manager, The Stepstone Group',
      image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      name: 'Mr. Manuel Vicente Vivo',
      title: 'Staff Android Engineer, Bumble Inc',
      image: 'https://images.unsplash.com/photo-1542204625-de293a06df48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      name: 'Mr. Patrick Ward',
      title: 'Vice President of Marketing, Formula.Monks',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      name: 'Mr. Aditya Bhattacharya',
      title: 'Explainable AI Researcher, KU Leuven',
      image: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 11,
      name: 'Mr. Haaris Hasnain',
      title: 'Director New Venture, Majid Al Futtaim',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      name: 'Mr. Peter Ndiforchu',
      title: 'Data Analyst, RBC Capital Markets',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 13,
      name: 'Mr. Raja Sekhar Thota',
      title: 'CTO & Co-Founder, AuditOne GmbH',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 14,
      name: 'Ms. Archana Sinha',
      title: 'Former Senior Director, Salesforce',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 15,
      name: 'Mr. Sameer Ranjan',
      title: 'Chief Technology Officer and Director, Catenate',
      image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="py-24 bg-white relative">
      {/* Decorative geometric patterns on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-10">
        <div className="absolute top-20 left-4 w-16 h-16 bg-[#d4af37]/30 rounded rotate-12"></div>
        <div className="absolute top-40 left-8 w-12 h-12 bg-[#d4af37]/30 rounded rotate-45"></div>
        <div className="absolute bottom-40 left-4 w-20 h-20 bg-[#d4af37]/30 rounded rotate-12"></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-10">
        <div className="absolute top-32 right-4 w-16 h-16 bg-[#d4af37]/30 rounded rotate-12"></div>
        <div className="absolute top-60 right-8 w-12 h-12 bg-[#d4af37]/30 rounded rotate-45"></div>
        <div className="absolute bottom-32 right-4 w-20 h-20 bg-[#d4af37]/30 rounded rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Lessons From the <span className="font-extrabold italic">Best in the Business</span>
        </h2>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#d4af37]/30 rounded-lg overflow-hidden relative">
                {/* Subtle geometric pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-2 left-2 w-8 h-8 bg-[#8b1538] rounded rotate-12"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#8b1538] rounded rotate-45"></div>
                </div>
                
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-gray-900 text-white">
                  <h3 className="text-sm font-bold mb-1">{member.name}</h3>
                  <p className="text-xs text-gray-300">{member.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LessonsFromBest

