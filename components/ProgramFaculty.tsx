'use client'

import { FaExternalLinkAlt } from 'react-icons/fa'

const ProgramFaculty = () => {
  const faculty = [
    {
      name: 'Mr. Faverie Stephane',
      title: 'Executive Group President, Estee Lauder',
      interest: 'Global Markets and Customer Dynamics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Dr. Lan Ma',
      title: 'Academician Adjunct Professor of Business - New York University',
      interest: 'How to market strategically in the real world',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Dr. Edward Rogers',
      title: 'Former Chief Knowledge Officer, NASA',
      interest: 'How to Manage Complexities',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Dr. Zal Phiroz',
      title: 'Adjunct Professor, Harvard University',
      interest: 'How do companies manage supply chain to procure & ship globally',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Mr. Nitin Gaur',
      title: 'Former Advisory Board Member, Stanford University',
      interest: 'How to Innovate in Fintech',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Dr. Daniel Garett Van Der Vliet',
      title: 'Executive Director, Cornell University',
      interest: 'Leadership & Family Business',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Dr. Shad Morris',
      title: 'Former Faculty Fellow, MIT Sloan',
      interest: 'How to work effectively in teams',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Mr. Thomas Heinis',
      title: 'Professor, Imperial College London',
      interest: 'Data Storage and Management',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Ms. Kevyn Eva Norton',
      title: 'Product Lead, Easy Bites App',
      interest: 'How to do Product and UX Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
  ]

  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Faculty That <span className="font-extrabold italic">Inspire and Empower</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#d4af37]/20 to-white rounded-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                <p className="text-sm font-semibold text-gray-900">
                  {member.interest.includes('How') ? 'Teaching:' : 'Area of Interest:'} {member.interest}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#ffd700] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#ffed4e] transition-colors flex items-center gap-2 mx-auto">
            VIEW MORE
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProgramFaculty

