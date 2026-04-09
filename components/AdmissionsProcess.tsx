'use client'

import { FaExternalLinkAlt } from 'react-icons/fa'

const AdmissionsProcess = () => {
  const steps = [
    {
      number: 1,
      title: 'Fill out the Application form',
      color: 'pink'
    },
    {
      number: 2,
      title: 'Attempt the **GI-SMART Trial**, a 75 minutes AI-Powered Aptitude test',
      color: 'blue'
    },
    {
      number: 3,
      title: 'Interview with an **Industry Leader** to assess fit',
      color: 'purple'
    },
  ]

  return (
    <section id="admissions" className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#ffd700] rounded"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-500 rounded"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Apply for our September 2026 batch. <span className="font-extrabold">Get Started</span>
            </h2>
            <button className="bg-[#ffd700] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffed4e] transition-colors flex items-center gap-2">
              APPLY NOW
              <FaExternalLinkAlt />
            </button>
          </div>

          {/* Right Side - Process Steps */}
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              A simple 3-step admission process
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex flex-col items-center flex-1">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#d4af37] border-4 border-white rounded-lg flex items-center justify-center text-[#0a1628] font-bold text-2xl mb-4">
                      {step.number}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/30">
                        <div className={`absolute top-1/2 left-1/2 w-3 h-3 rounded transform -translate-x-1/2 -translate-y-1/2 ${
                          step.color === 'pink' ? 'bg-pink-500' :
                          step.color === 'blue' ? 'bg-blue-400' :
                          step.color === 'purple' ? 'bg-purple-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                    )}
                  </div>
                  <p className="text-white text-center text-sm md:text-base">
                    {step.title.split('**').map((part, i) => 
                      i % 2 === 1 ? <span key={i} className="font-bold">{part}</span> : part
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdmissionsProcess

