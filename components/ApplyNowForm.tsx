'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendar, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'

const PROGRAMS = [
  { value: 'bba', label: 'BBA – Bachelor of Business Administration' },
  { value: 'bcis', label: 'BCIS – Bachelor of Computer Information Systems' },
  { value: 'baid', label: 'BAID – Bachelor of Artificial Intelligence Design' },
] as const

const ApplyNowForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [preferenceError, setPreferenceError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitErrorMsg, setSubmitErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    passportNumber: '',
    passportExpiryDate: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    
    // Academic Information
    programOfInterest: '',
    intake: '',
    previousEducationLevel: '',
    institutionName: '',
    graduationYear: '',
    gpaPercentage: '',
    englishProficiencyTest: '',
    testScore: '',
    workExperience: '',
    
    // Campus & Program Preferences (Step 4) — only Paris for now
    campusRankFirst: 'paris',
    campusRankSecond: '',
    campusRankThird: '',
    campusRankFourth: '',
    programRankFirst: '',
    programRankSecond: '',
    programRankThird: '',
    interestTwoPlusTwo: false,
    acknowledgedFeesAndRefund: false,
    
    // Documents
    cvResume: null as File | null,
    passport: null as File | null,
    academicTranscripts: null as File | null,
    academicCertificates: null as File | null,
    englishTestCertificate: null as File | null,
    additionalInformation: '',
    
    agreeToPrivacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    // File inputs
    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null
      setFormData(prev => ({ ...prev, [name]: file }))
      return
    }

    if (name.startsWith('programRank')) {
      const programKeys = ['programRankFirst', 'programRankSecond', 'programRankThird']
      const idx = programKeys.indexOf(name)
      setFormData(prev => {
        const updated = { ...(prev as any), [name]: value } as any
        for (let j = idx + 1; j < programKeys.length; j++) {
          if (updated[programKeys[j]] === value) {
            updated[programKeys[j]] = ''
          }
        }
        return updated as any
      })
      return
    }

    // Default handler
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }))
  }

  const programRanks = [formData.programRankFirst, formData.programRankSecond, formData.programRankThird].filter(Boolean)
  const campusRanksUnique = true // Only Paris campus for now
  const programRanksUnique = new Set(programRanks).size === programRanks.length && programRanks.length === 3

  const nextStep = () => {
    if (currentStep === 4) {
      if (!campusRanksUnique || !programRanksUnique) {
        setPreferenceError('Please rank each program exactly once (no duplicates).')
        return
      }
      setPreferenceError('')
    }
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const previousStep = () => {
    if (currentStep > 1) {
      setPreferenceError('')
      setCurrentStep(currentStep - 1)
    }
  }

  const submitFormOnlyOnSubmitButton = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const sendApplication = async () => {
    setSubmitting(true)
    setSubmitStatus('idle')
    setSubmitErrorMsg('')
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    try {
      const formDataToSend = new FormData()
      const fileKeys = ['cvResume', 'passport', 'academicTranscripts', 'academicCertificates', 'englishTestCertificate']
      Object.entries(formData).forEach(([key, value]) => {
        if (fileKeys.includes(key)) {
          if (value instanceof File) formDataToSend.append(key, value)
        } else {
          formDataToSend.append(key, value === null || value === undefined ? '' : String(value))
        }
      })
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim()
      let submitUrl = '/api/submit-application'
      let useFormspree = false
      if (formspreeId) {
        submitUrl = `https://formspree.io/f/${formspreeId}`
        useFormspree = true
      } else if (typeof window !== 'undefined' && window.location?.hostname) {
        const host = window.location.hostname.toLowerCase()
        if (host !== 'localhost' && host !== '127.0.0.1') {
          submitUrl = window.location.origin + '/submit.php'
        } else if (process.env.NEXT_PUBLIC_SUBMIT_URL) {
          submitUrl = process.env.NEXT_PUBLIC_SUBMIT_URL
        }
      } else if (process.env.NEXT_PUBLIC_SUBMIT_URL) {
        submitUrl = process.env.NEXT_PUBLIC_SUBMIT_URL
      }
      if (typeof window !== 'undefined') console.log('[GI-SMART Form] Submitting to:', submitUrl)
      const controller = new AbortController()
      timeoutId = setTimeout(() => controller.abort(), 90000)
      const headers: HeadersInit = useFormspree ? { Accept: 'application/json' } : {}
      const res = await fetch(submitUrl, {
        method: 'POST',
        body: formDataToSend,
        signal: controller.signal,
        ...(Object.keys(headers).length ? { headers } : {}),
      })
      const data = await res.json().catch(() => ({}))
      const success = useFormspree ? res.ok && !(Array.isArray(data.errors) && data.errors.length) : (res.ok && !!data.success)
      if (success) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
        const msg = useFormspree && Array.isArray(data.errors)
          ? data.errors.map((e: { message?: string }) => e?.message).filter(Boolean).join(', ') || 'Submission failed.'
          : (typeof data?.message === 'string' ? data.message : '')
        setSubmitErrorMsg(msg || (res.ok ? 'Submission failed.' : `Server error (${res.status}). Please try again.`))
      }
    } catch (err) {
      setSubmitStatus('error')
      const isAbort = err instanceof Error && err.name === 'AbortError'
      setSubmitErrorMsg(isAbort ? 'Request took too long. Please try again.' : 'Network error. Please check your connection and try again.')
    } finally {
      if (timeoutId !== undefined) clearTimeout(timeoutId)
      setSubmitting(false)
    }
  }

  const handleSubmitButtonClick = () => {
    if (currentStep !== 5) return
    sendApplication()
  }

  const steps = [
    { number: 1, label: 'PERSONAL' },
    { number: 2, label: 'CONTACT' },
    { number: 3, label: 'ACADEMIC' },
    { number: 4, label: 'PREFERENCES' },
    { number: 5, label: 'DOCUMENTS' },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-[#0a1628] to-[#1a2332] rounded-none sm:rounded-lg shadow-xl overflow-hidden min-w-0">
      {/* Progress Indicator - compact on mobile, no clip */}
      <div className="bg-white px-3 sm:px-6 lg:px-8 py-3 sm:py-6 border-b border-gray-200 overflow-visible">
        <div className="flex items-center justify-between gap-1">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center w-full min-w-0">
                <div
                  className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shrink-0 ${
                    currentStep >= step.number
                      ? 'bg-gradient-to-br from-[#0a1628] to-[#1a2332] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-semibold mt-1 sm:mt-2 truncate w-full text-center block ${
                    currentStep >= step.number ? 'text-[#8b1538]' : 'text-gray-400'
                  }`}
                  title={step.label}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-0.5 sm:mx-2 min-w-2 transition-all duration-300 shrink ${
                    currentStep > step.number ? 'bg-gradient-to-br from-[#0a1628] to-[#1a2332]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={submitFormOnlyOnSubmitButton} className="p-4 min-[480px]:p-5 sm:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="firstName" className="block text-white/90 font-semibold mb-2">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter First Name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white/90 font-semibold mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Last Name"
                  />
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-white/90 font-semibold mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    />
                    <FaCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="gender" className="block text-white/90 font-semibold mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nationality" className="block text-white/90 font-semibold mb-2">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Nationality"
                  />
                </div>

                <div>
                  <label htmlFor="passportNumber" className="block text-white/90 font-semibold mb-2">
                    Passport Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Passport Number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="passportExpiryDate" className="block text-white/90 font-semibold mb-2">
                    Passport Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="passportExpiryDate"
                      name="passportExpiryDate"
                      value={formData.passportExpiryDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    />
                    <FaCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-white/90 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/90 font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-white/90 font-semibold mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Address"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-white/90 font-semibold mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter City"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-white/90 font-semibold mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Country"
                  />
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-white/90 font-semibold mb-2">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Zip/Postal Code"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Academic Information */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Academic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="programOfInterest" className="block text-white/90 font-semibold mb-2">
                    Program of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="programOfInterest"
                    name="programOfInterest"
                    value={formData.programOfInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select Program</option>
                    <option value="bba">BBA – Bachelor of Business Administration</option>
                    <option value="bcis">BCIS – Bachelor of Computer Information Systems</option>
                    <option value="baid">BAID – Bachelor of Artificial Intelligence Design</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="intake" className="block text-white/90 font-semibold mb-2">
                    Intake <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="intake"
                    name="intake"
                    value={formData.intake}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select Intake</option>
                    <option value="fall-2026">Fall 2026</option>
                    <option value="spring-2027">Spring 2027</option>
                    <option value="fall-2027">Fall 2027</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="previousEducationLevel" className="block text-white/90 font-semibold mb-2">
                    Previous Education Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="previousEducationLevel"
                    name="previousEducationLevel"
                    value={formData.previousEducationLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="high-school">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="institutionName" className="block text-white/90 font-semibold mb-2">
                    Institution Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="institutionName"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="Enter Institution Name"
                  />
                </div>

                <div>
                  <label htmlFor="graduationYear" className="block text-gray-700 font-semibold mb-2">
                    Graduation Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="e.g., 2024"
                  />
                </div>

                <div>
                  <label htmlFor="gpaPercentage" className="block text-white/90 font-semibold mb-2">
                    GPA / Percentage
                  </label>
                  <input
                    type="text"
                    id="gpaPercentage"
                    name="gpaPercentage"
                    value={formData.gpaPercentage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="e.g., 3.5 or 85%"
                  />
                </div>

                <div>
                  <label htmlFor="englishProficiencyTest" className="block text-white/90 font-semibold mb-2">
                    English Proficiency Test <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="englishProficiencyTest"
                    name="englishProficiencyTest"
                    value={formData.englishProficiencyTest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  >
                    <option value="">Select</option>
                    <option value="ielts">IELTS</option>
                    <option value="toefl">TOEFL</option>
                    <option value="duolingo">Duolingo</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="testScore" className="block text-white/90 font-semibold mb-2">
                    Test Score
                  </label>
                  <input
                    type="text"
                    id="testScore"
                    name="testScore"
                    value={formData.testScore}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                    placeholder="e.g., IELTS 5.5"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="workExperience" className="block text-white/90 font-semibold mb-2">
                    Work Experience (if any)
                  </label>
                  <textarea
                    id="workExperience"
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#8b1538] focus:ring-2 focus:ring-[#8b1538]/20 transition-all resize-y"
                    placeholder="Describe your work experience..."
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Campus & Program Preferences */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Campus & Program Preferences
              </h2>

              {/* Campus: only Paris, France for now */}
              <div className="mt-6 mb-6">
                <div className="bg-[#ffd700]/15 border-l-4 border-[#ffd700] p-4 mb-4 rounded">
                  <p className="text-sm text-white/95 leading-relaxed">
                    We are currently offering one campus: <strong>Paris, France</strong>.
                  </p>
                </div>
                <p className="text-white/90 font-semibold mb-2">Your campus</p>
                <div className="px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white font-medium">
                  Paris, France
                </div>
                <input type="hidden" name="campusRankFirst" value="paris" />
              </div>

              {/* 2+2 option */}
              <div className="mb-6">
                <p className="text-white/90 font-semibold mb-2">Study path option</p>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="interestTwoPlusTwo"
                    checked={formData.interestTwoPlusTwo}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-5 h-5 rounded border-gray-300 bg-white text-[#8b1538] focus:ring-[#8b1538]"
                  />
                  <span className="text-white/90 text-sm leading-relaxed">
                    I am interested in the <strong>2+2 option</strong>: 2 years at our Paris campus, then 2 years in Canada at the University of the Fraser Valley.
                  </span>
                </label>
                <p className="text-white/80 text-sm mt-2 ml-8">
                  After 2 years in Canada, students can apply for a 3-year work visa, with the possibility of then applying for Permanent Residency in Canada.
                </p>
              </div>

              {/* Program ranking explanation */}
              <p className="text-white/90 font-semibold mb-2">Rank programs (1 = highest preference)</p>
              <p className="text-white/70 text-sm mb-2">We offer: BBA, BCIS, and BAID. Select each program exactly once.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {(['First', 'Second', 'Third'] as const).map((order, i) => {
                  const key = `programRank${['First', 'Second', 'Third'][i]}` as 'programRankFirst' | 'programRankSecond' | 'programRankThird'
                  return (
                    <div key={key}>
                      <label htmlFor={key} className="block text-white/80 text-sm mb-1">{order} choice</label>
                      <select
                        id={key}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                      >
                        <option value="">Select</option>
                        {(() => {
                          const programKeys = ['programRankFirst', 'programRankSecond', 'programRankThird']
                          const index = ['First', 'Second', 'Third'].indexOf(order)
                          const excluded = programKeys.slice(0, index).map(k => (formData as any)[k]).filter(Boolean)
                          return PROGRAMS.filter(p => !excluded.includes(p.value)).map(p => (
                            <option key={p.value} value={p.value}>{p.label}</option>
                          ))
                        })()}
                      </select>
                    </div>
                  )
                })}
              </div>

              {/* Application fee disclosure */}
              <div className="bg-white/10 border border-white/20 p-4 mb-4 rounded-lg">
                <p className="text-white/95 text-sm leading-relaxed">
                  <strong>Application fee:</strong> €100. <strong>€50 is refundable</strong> if we cannot obtain a visa for you in France.
                </p>
              </div>

              {/* Program cost & refund disclosure */}
              <div className="bg-white/10 border border-white/20 p-4 mb-4 rounded-lg">
                <p className="text-white/95 text-sm leading-relaxed">
                  <strong>Program cost:</strong> €12,000 per year (approximately ₹12 Lakh per year). Before a visa application can be submitted, the full first-year amount must be deposited with us. <strong className="text-[#ffd700]">This amount is FULLY REFUNDABLE</strong> if we cannot obtain a visa for you in France.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acknowledgedFeesAndRefund"
                  name="acknowledgedFeesAndRefund"
                  checked={formData.acknowledgedFeesAndRefund}
                  onChange={handleCheckboxChange}
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 bg-white text-[#8b1538] focus:ring-[#8b1538]"
                />
                <label htmlFor="acknowledgedFeesAndRefund" className="text-white/90 text-sm leading-relaxed">
                  I have read and understood the application fee (€100, €50 refundable if no visa) and the program cost (€12,000/year, fully refundable if no visa in France).
                </label>
              </div>
            </motion.div>
          )}

          {/* Step 5: Required Documents */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2 pb-3 border-b-2 border-[#ffd700]">
                Required Documents
              </h2>

              <div className="bg-[#ffd700]/20 border-l-4 border-[#ffd700] p-4 mb-6 mt-6 rounded">
                <p className="text-sm text-white/90">
                  Please upload all required documents in PDF format (Max 5MB each)
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="cvResume" className="block text-white/90 font-semibold mb-2">
                    CV/Resume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="cvResume"
                    name="cvResume"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="passport" className="block text-white/90 font-semibold mb-2">
                    Passport (Front & Back) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="passport"
                    name="passport"
                    onChange={handleChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="academicTranscripts" className="block text-white/90 font-semibold mb-2">
                    Academic Transcripts <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="academicTranscripts"
                    name="academicTranscripts"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="academicCertificates" className="block text-white/90 font-semibold mb-2">
                    Academic Certificates <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="academicCertificates"
                    name="academicCertificates"
                    onChange={handleChange}
                    accept=".pdf"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="englishTestCertificate" className="block text-white/90 font-semibold mb-2">
                    English Proficiency Test Certificate
                  </label>
                  <input
                    type="file"
                    id="englishTestCertificate"
                    name="englishTestCertificate"
                    onChange={handleChange}
                    accept=".pdf"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInformation" className="block text-white/90 font-semibold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInformation"
                    name="additionalInformation"
                    value={formData.additionalInformation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#8b1538] focus:ring-2 focus:ring-[#8b1538]/20 transition-all resize-y"
                    placeholder="Any additional information you would like to share..."
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 mt-8">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleCheckboxChange}
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 bg-white text-[#8b1538] focus:ring-[#8b1538]"
                />
                <label htmlFor="agreeToPrivacy" className="text-white/90 text-sm leading-relaxed">
                  I agree to my details being processed in accordance with GI-SMART's{' '}
                  <a href="/privacy-policy" className="text-[#ffd700] hover:underline">
                    Privacy Policy
                  </a>
                  , and for GI-SMART and its affiliates to use my personal data to provide me with further information about its programs.
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {submitStatus === 'success' && (
          <div className="mt-6 p-4 rounded-lg bg-green-500/20 border border-green-400/50 text-green-200 text-center">
            Thank you! Your application has been submitted successfully. We will be in touch soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 rounded-lg bg-red-500/20 border border-red-400/50 text-red-200 text-center">
            {submitErrorMsg || 'Something went wrong. Please try again or contact us directly.'}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
          <button
            type="button"
            onClick={previousStep}
            disabled={currentStep === 1 || submitting}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentStep === 1 || submitting
                ? 'bg-white/20 text-white/50 cursor-not-allowed'
                : 'bg-white border-2 border-white text-[#8b1538] hover:bg-white/90'
            }`}
          >
            Previous
          </button>

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-b from-[#0a1628] to-[#8b1538] text-white hover:from-[#8b1538] hover:to-[#0a1628] transition-all duration-300 flex items-center gap-2"
            >
              Next Step
              <FaExternalLinkAlt />
            </button>
          ) : (
            <button
              type="button"
              disabled={submitting}
              onClick={handleSubmitButtonClick}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-b from-[#0a1628] to-[#8b1538] text-white hover:from-[#8b1538] hover:to-[#0a1628] transition-all duration-300 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
              <FaExternalLinkAlt />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default ApplyNowForm
