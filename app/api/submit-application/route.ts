import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const NOTIFICATION_TO = 'jasmeet@landmarkglobal.co.in'

const INTAKE_LABELS: Record<string, string> = {
  'fall-2026': 'Fall 2026 (September 2026)',
  'spring-2027': 'Spring 2027',
  'fall-2027': 'Fall 2027',
}
const PROGRAM_LABELS: Record<string, string> = {
  bba: 'BBA – Bachelor of Business Administration',
  bcis: 'BCIS – Bachelor of Computer Information Systems',
  baid: 'BAID – Bachelor of Artificial Intelligence Design',
}
const CAMPUS_LABELS: Record<string, string> = {
  paris: 'Paris, France',
  karlsruhe: 'Karlsruhe, Germany',
  bucharest: 'Bucharest, Romania',
  dubai: 'Dubai',
}

const LABELS: Record<string, string> = {
  firstName: 'First Name',
  lastName: 'Last Name',
  dateOfBirth: 'Date of Birth',
  gender: 'Gender',
  nationality: 'Nationality',
  passportNumber: 'Passport Number',
  passportExpiryDate: 'Passport Expiry',
  email: 'Email',
  phone: 'Phone',
  address: 'Address',
  city: 'City',
  country: 'Country',
  zipCode: 'Zip Code',
  programOfInterest: 'Program of Interest',
  intake: 'Intake',
  previousEducationLevel: 'Previous Education',
  institutionName: 'Institution Name',
  graduationYear: 'Graduation Year',
  gpaPercentage: 'GPA / %',
  englishProficiencyTest: 'English Test',
  testScore: 'Test Score',
  workExperience: 'Work Experience',
  campusRankFirst: 'Campus (1st)',
  programRankFirst: 'Program (1st choice)',
  programRankSecond: 'Program (2nd choice)',
  programRankThird: 'Program (3rd choice)',
  interestTwoPlusTwo: '2+2 Option (Canada)',
  additionalInformation: 'Additional Info',
  cvResume: 'CV/Resume',
  passport: 'Passport',
  academicTranscripts: 'Transcripts',
  academicCertificates: 'Certificates',
  englishTestCertificate: 'English Certificate',
}

function row(label: string, value: string) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;width:40%;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:13px;">${escapeHtml(value)}</td>
    </tr>`
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function sectionTitle(title: string) {
  return `<tr><td colspan="2" style="padding:12px 12px 8px;color:#0a1628;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;">${escapeHtml(title)}</td></tr>`
}

function buildHtmlEmail(data: Record<string, unknown>): string {
  const docKeys = ['cvResume', 'passport', 'academicTranscripts', 'academicCertificates', 'englishTestCertificate']
  const getVal = (key: string): string => {
    const v = data[key]
    if (docKeys.includes(key)) {
      const o = v as { name?: string } | null
      return o?.name ? o.name : '(not uploaded)'
    }
    if (v === null || v === undefined || v === '') return ''
    if (typeof v === 'boolean') return v ? 'Yes' : 'No'
    if (key === 'intake' && typeof v === 'string') return INTAKE_LABELS[v] || v
    if (key === 'programOfInterest' && typeof v === 'string') return PROGRAM_LABELS[v] || v
    if (key === 'campusRankFirst' && typeof v === 'string') return CAMPUS_LABELS[v] || v
    if (key.startsWith('programRank') && typeof v === 'string') return PROGRAM_LABELS[v] || v
    if (typeof v === 'object') return String(v)
    return String(v)
  }
  const getLabel = (key: string) => LABELS[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim()

  const personal = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'nationality', 'passportNumber', 'passportExpiryDate']
  const contact = ['email', 'phone', 'address', 'city', 'country', 'zipCode']
  const academic = ['programOfInterest', 'intake', 'previousEducationLevel', 'institutionName', 'graduationYear', 'gpaPercentage', 'englishProficiencyTest', 'testScore', 'workExperience']
  const preferences = ['campusRankFirst', 'programRankFirst', 'programRankSecond', 'programRankThird', 'interestTwoPlusTwo']
  const documents = docKeys
  const extra = ['additionalInformation']

  let rows = ''
  const addSection = (title: string, keys: string[]) => {
    rows += sectionTitle(title)
    keys.forEach((k) => { rows += row(getLabel(k), getVal(k)) })
  }
  addSection('Personal Information', personal)
  addSection('Contact Information', contact)
  addSection('Academic Information', academic)
  addSection('Campus & Program Preferences', preferences)
  addSection('Documents (uploaded)', documents)
  addSection('Additional Information', extra)

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
    <div style="background:linear-gradient(135deg,#0a1628 0%,#1a2332 100%);padding:24px 24px 20px;text-align:center;">
      <div style="color:#ffd700;font-size:11px;letter-spacing:2px;margin-bottom:4px;">ADMISSIONS</div>
      <h1 style="color:#fff;font-size:24px;font-weight:700;margin:0;">GI-SMART</h1>
      <p style="color:rgba(255,255,255,0.85);font-size:13px;margin:8px 0 0;">New application received</p>
    </div>
    <div style="padding:0 0 24px;">
      <table style="width:100%;border-collapse:collapse;">
        ${rows}
      </table>
    </div>
    <div style="background:#f9fafb;padding:16px 24px;text-align:center;border-top:1px solid #e5e7eb;">
      <p style="margin:0;color:#6b7280;font-size:12px;">This is an automated notification from the GI-SMART admissions form.</p>
    </div>
  </div>
</body>
</html>`
}

function buildTextFallback(data: Record<string, unknown>): string {
  const lines: string[] = ['New admission form submission from GI-SMART website', '', '---', '']
  const docKeys = ['cvResume', 'passport', 'academicTranscripts', 'academicCertificates', 'englishTestCertificate']
  for (const [key, value] of Object.entries(data)) {
    const label = LABELS[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim()
    if (docKeys.includes(key)) {
      const v = value as { name?: string } | null
      lines.push(`${label}: ${v?.name ?? '(not uploaded)'}`)
      continue
    }
    if (value === null || value === undefined || value === '') continue
    if (typeof value === 'object' && value !== null && !(value instanceof Date)) continue
    lines.push(`${label}: ${String(value)}`)
  }
  return lines.join('\n')
}

const FILE_KEYS = ['cvResume', 'passport', 'academicTranscripts', 'academicCertificates', 'englishTestCertificate']

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const body: Record<string, unknown> = {}
    const attachments: { filename: string; content: Buffer }[] = []

    for (const [key, value] of Array.from(formData.entries())) {
      if (value instanceof Blob && value.size > 0) {
        const buf = Buffer.from(await value.arrayBuffer())
        if (FILE_KEYS.includes(key)) {
          const name = (value as File).name || `${key}.pdf`
          attachments.push({ filename: name, content: buf })
          body[key] = { name }
        }
      } else {
        const str = typeof value === 'string' ? value : ''
        if (key === 'interestTwoPlusTwo' || key === 'acknowledgedFeesAndRefund' || key === 'agreeToPrivacy') {
          body[key] = str === 'true'
        } else {
          body[key] = str
        }
      }
    }

    const firstName = body.firstName as string
    const lastName = body.lastName as string
    const email = body.email as string

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP_USER or SMTP_PASS not set in environment')
      return NextResponse.json(
        { success: false, message: 'Email not configured. Please set SMTP_USER and SMTP_PASS on the server.' },
        { status: 500 }
      )
    }

    const fromEmail = process.env.SMTP_FROM ?? process.env.SMTP_USER
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const applicationId = `GIS-${Date.now().toString().slice(-8)}`
    const subject = `GI-SMART Application [${applicationId}]: ${firstName || ''} ${lastName || ''} (${email || 'no email'})`
    const html = buildHtmlEmail(body)
    const text = buildTextFallback(body)

    await transporter.sendMail({
      from: `"GI-SMART Admissions" <${fromEmail}>`,
      to: NOTIFICATION_TO,
      subject,
      text,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    // Student confirmation email (best-effort)
    if (email && /\S+@\S+\.\S+/.test(email)) {
      const studentSubject = `GI-SMART Application Received (${applicationId})`
      const studentText = `Dear ${firstName || 'Applicant'},\n\nThank you for submitting your application to GI-SMART.\n\nApplication ID: ${applicationId}\nProgram: ${String(body.programOfInterest || '')}\nIntake: ${String(body.intake || '')}\n\nOur admissions team has received your details and will contact you shortly.\n\nRegards,\nGI-SMART Admissions`
      const studentHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;">
    <div style="background:linear-gradient(135deg,#0a1628 0%,#1a2332 100%);padding:24px;text-align:center;">
      <h1 style="color:#fff;font-size:22px;margin:0;">GI-SMART</h1>
      <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;">Application Received</p>
    </div>
    <div style="padding:24px;color:#111827;">
      <p>Dear ${escapeHtml(firstName || 'Applicant')},</p>
      <p>Thank you for submitting your application to GI-SMART.</p>
      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px;margin:14px 0;">
        <div style="font-size:13px;color:#6b7280;">Application ID</div>
        <div style="font-size:18px;font-weight:700;color:#0a1628;">${applicationId}</div>
      </div>
      <p>Our admissions team has received your details and will contact you shortly.</p>
      <p style="margin-top:24px;">Regards,<br/>GI-SMART Admissions</p>
    </div>
  </div>
</body>
</html>`

      try {
        await transporter.sendMail({
          from: `"GI-SMART Admissions" <${fromEmail}>`,
          to: email,
          subject: studentSubject,
          text: studentText,
          html: studentHtml,
        })
      } catch (confirmErr) {
        console.error('Student confirmation email failed:', confirmErr)
      }
    }

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' })
  } catch (err) {
    console.error('Submit application email error:', err)
    return NextResponse.json(
      { success: false, message: 'Failed to submit. Please try again or contact us.' },
      { status: 500 }
    )
  }
}
