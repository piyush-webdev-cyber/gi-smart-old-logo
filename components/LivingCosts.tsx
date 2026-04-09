'use client'

const LivingCosts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/5] bg-gray-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Living Costs at a <span className="font-extrabold italic">Glance</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Planning your finances is an important part of your academic journey. Here's a breakdown of living and immigration costs across the years to help you budget efficiently.
            </p>

            <div className="space-y-6">
              {/* Residential and Amenities */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-pink-500 rounded mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Residential and Amenities Costs</h3>
                  <p className="text-gray-700">
                    Annually: <span className="font-bold">$8,854</span> | Total (3 Years): <span className="font-bold">$26,562</span>
                  </p>
                </div>
              </div>

              {/* Immigration, Travel & Local Charges */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-blue-500 rounded mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Immigration, Travel & Local Charges</h3>
                  <p className="text-gray-700">
                    Annually: <span className="font-bold">$2,050</span> | Total (3 Years): <span className="font-bold">$6,150</span>
                  </p>
                </div>
              </div>

              {/* Total Living Expenses */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Total Living Expenses</h3>
                  <p className="text-gray-700">
                    Annually: <span className="font-bold">$10,904</span> | Total (3 Years): <span className="font-bold">$32,712</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8 italic">
              *The above mentioned costs are indicative, do not account for food and personal preferences. These costs are handled by GI-SMART and collected as part of the fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LivingCosts

