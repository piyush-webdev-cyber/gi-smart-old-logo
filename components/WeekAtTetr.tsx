'use client'

const WeekAtTetr = () => {
  const weekSchedule = [
    {
      day: 'Monday',
      activities: [
        { title: 'Skill Shop: How to negotiate deals', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: '1:1 Coaching: Weekly check-in with a communication coach', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Business Immersion: Exploring the future of aviation with Emirates Ebdaa', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      ]
    },
    {
      day: 'Tuesday',
      activities: [
        { title: 'CXO Lesson: Mr. Sven Hering, CTO, Talbat', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Dropshipping Hours: Term Project', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Academic Immersion: How to develop a product mindset', image: 'https://images.unsplash.com/photo-1522542554221-31fd19f3e6a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Networking Dinner', image: null },
      ]
    },
    {
      day: 'Wednesday',
      activities: [
        { title: 'Dropshipping Hours: Term Project', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Skill Shop: How to run digital ads on Tik Tok & Meta', image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Networking Dinner', image: null },
      ]
    },
    {
      day: 'Thursday',
      activities: [
        { title: 'Personal Development: Meditation Sprint', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Personal Development: Weekly Reflection Seminar', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Dropshipping Hours: Term Project', image: null },
      ]
    },
    {
      day: 'Friday',
      activities: [
        { title: 'Academic Immersion: Consumer Behavior & Research', image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Personal Development: How to become a better leader', image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
        { title: 'Leaders Roundtable: Finance Professionals', image: null },
        { title: 'Networking Dinner', image: null },
      ]
    },
    {
      day: 'Saturday',
      activities: [
        { title: 'Business Immersion: Meet the Emaar leadership at their Global HQ', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      ]
    },
    {
      day: 'Sunday',
      activities: [
        { title: 'Explore Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      ]
    },
  ]

  return (
    <section id="week-at-GI-SMART" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What's a <span className="font-extrabold italic">Week at GI-SMART</span> Like?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Start your day with ambition and end it with impact. At GI-SMART, every week pushes boundaries.
        </p>

        {/* Weekly Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {weekSchedule.map((day) => (
            <div key={day.day} className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white font-bold text-center py-3 px-2">
                {day.day}
              </div>
              <div className="bg-white p-4 space-y-4">
                {day.activities.map((activity, idx) => (
                  <div key={idx} className="space-y-2">
                    {activity.image && (
                      <div className="aspect-video rounded overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${activity.image})` }}
                        />
                      </div>
                    )}
                    <p className="text-sm text-gray-700 font-medium">{activity.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeekAtTetr

