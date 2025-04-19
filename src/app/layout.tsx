import '@/styles/globals.css'
import { Inter, Lexend } from 'next/font/google'
import React from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata = {
  title: 'Location Analysis | Deal Screening',
  description: 'Analyze location data for real estate deal screening',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        <script src="/fallback.js" defer></script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
} 