import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GI-SMART - Global Business Education Platform',
  description: 'Transform your future with world-class business education at GI-SMART',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
      <body className="overflow-x-hidden max-w-full">{children}</body>
    </html>
  )
}

