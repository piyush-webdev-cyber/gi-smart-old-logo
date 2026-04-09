'use client'

interface AIFeeStructureProps {
  yearCount?: 3 | 4
}

const AIFeeStructure = ({ yearCount = 4 }: AIFeeStructureProps) => {
  const years = yearCount === 3 ? [1, 2, 3] : [1, 2, 3, 4]
  const sumUpToYears = (values: number[]) => values.slice(0, yearCount).reduce((sum, value) => sum + value, 0)
  const usd = (value: number) => `$${value.toLocaleString('en-US')}`

  const academicRows = [
    { label: 'Tuition', values: [45940, 45540, 40940, 30439] },
    { label: 'Academic Immersions', values: [12754, 11754, 11754, 9254] },
    { label: 'Local Business Immersions', values: [4000, 4000, 4000, 3000] },
  ]

  const adminRows = [
    { label: 'Program Management', values: [7778, 6578, 6778, 5577] },
    { label: 'Career Development', values: [820, 820, 820, 1640] },
  ]

  const yearTotals = years.map((_, index) =>
    [...academicRows, ...adminRows].reduce((sum, row) => sum + row.values[index], 0)
  )

  const totalAcademicByYear = years.map((_, index) => academicRows.reduce((sum, row) => sum + row.values[index], 0))
  const totalAdminByYear = years.map((_, index) => adminRows.reduce((sum, row) => sum + row.values[index], 0))

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Fee <span className="font-extrabold italic">Structure</span>
          </h2>
          <div className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white px-4 py-2 rounded text-sm font-semibold">
            CURRENCY IN USD
          </div>
        </div>

        {/* Academic Fees Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
                <th className="px-6 py-4 text-left">Academic Fees (Incl. Taxes)</th>
                {years.map((year) => (
                  <th key={year} className="px-6 py-4 text-center">Year {year}</th>
                ))}
                <th className="px-6 py-4 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {academicRows.map((row) => (
                <tr key={row.label} className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                  {years.map((year) => (
                    <td key={year} className="px-6 py-4 text-center text-gray-900">{usd(row.values[year - 1])}</td>
                  ))}
                  <td className="px-6 py-4 text-center font-bold text-gray-900">{usd(sumUpToYears(row.values))}</td>
                </tr>
              ))}
              <tr className="bg-gradient-to-br from-[#d4af37]/20 to-white">
                <td className="px-6 py-4 font-bold text-gray-900">Total Academic Fees (Incl. Taxes)</td>
                {totalAcademicByYear.map((value, index) => (
                  <td key={index} className="px-6 py-4 text-center font-bold text-gray-900">{usd(value)}</td>
                ))}
                <td className="px-6 py-4 text-center font-bold text-gray-900">{usd(totalAcademicByYear.reduce((a, b) => a + b, 0))}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Administration Fees Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
                <th className="px-6 py-4 text-left">Administration Fees (Incl. Taxes)</th>
                {years.map((year) => (
                  <th key={year} className="px-6 py-4 text-center">Year {year}</th>
                ))}
                <th className="px-6 py-4 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {adminRows.map((row) => (
                <tr key={row.label} className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                  {years.map((year) => (
                    <td key={year} className="px-6 py-4 text-center text-gray-900">{usd(row.values[year - 1])}</td>
                  ))}
                  <td className="px-6 py-4 text-center font-bold text-gray-900">{usd(sumUpToYears(row.values))}</td>
                </tr>
              ))}
              <tr className="bg-gradient-to-br from-[#d4af37]/20 to-white">
                <td className="px-6 py-4 font-bold text-gray-900">Total Admin Fees</td>
                {totalAdminByYear.map((value, index) => (
                  <td key={index} className="px-6 py-4 text-center font-bold text-gray-900">{usd(value)}</td>
                ))}
                <td className="px-6 py-4 text-center font-bold text-gray-900">{usd(totalAdminByYear.reduce((a, b) => a + b, 0))}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Fees */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
                <th className="px-6 py-4 text-left font-bold text-lg">Total Fees</th>
                {years.map((year) => (
                  <th key={year} className="px-6 py-4 text-center font-bold text-lg">Year {year}</th>
                ))}
                <th className="px-6 py-4 text-center font-bold text-lg">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gradient-to-r from-[#0a1628] to-[#8b1538] text-white">
                <td className="px-6 py-4 font-bold text-lg">Total Fees</td>
                {yearTotals.map((value, index) => (
                  <td key={index} className="px-6 py-4 text-center font-bold text-lg">{usd(value)}</td>
                ))}
                <td className="px-6 py-4 text-center font-bold text-lg">{usd(yearTotals.reduce((a, b) => a + b, 0))}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AIFeeStructure

