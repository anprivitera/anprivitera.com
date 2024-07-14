import React from 'react'
import type { Metadata } from 'next'
import Navbar from './navbar'
import Footer from './footer'
import './global.scss'
import Theme from './theme'
import '@fontsource/rubik'
import '@fontsource/fira-mono'
import '@fontsource/karla'

export const metadata: Metadata = {
  title: 'Andrea Privitera',
  description: 'Vancouver-based Full Stack Web Developer. I talk about Tech, Personal Knowledge Management, Obsidianmd, GTD and Tabletop Gaming',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Theme>
      <html lang="en">
        <body suppressHydrationWarning>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Theme>
  )
}
