import React from 'react'
import type { Metadata } from 'next'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
