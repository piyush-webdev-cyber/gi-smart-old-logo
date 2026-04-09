'use client'

const FacultyMentorship = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Access Real-Time Mentorship from <span className="font-extrabold">100+ Experts</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              From cybersecurity to generative AI, our mentors span a wide range of industries from across the globe.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-4 h-4 bg-pink-400 rounded mt-1 flex-shrink-0"></div>
                <span className="text-white">
                  Whether you're building a startup or exploring jobs, our mentors provide <span className="font-bold">tailored 1:1 mentorship</span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-4 h-4 bg-blue-400 rounded mt-1 flex-shrink-0"></div>
                <span className="text-white">
                  Mentors can assist with <span className="font-bold">last-minute assignments</span>, interview prep or even emotional support
                </span>
              </li>
            </ul>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-4 rounded-lg border-4 border-[#8b1538] shadow-2xl">
              <div className="w-64 h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] p-4 text-white text-center">
                  <div className="text-2xl font-bold">GI-SMART</div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="bg-white p-4 rounded shadow">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacultyMentorship

