"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect } from 'react'
import { initParticles } from '../../public/particles'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  useEffect(() => {
    initParticles();
  }, [])

  return (
    <html>
      <body>
        <div id="particle-container"></div>
        {children}
      </body>
    </html>
  )
}
