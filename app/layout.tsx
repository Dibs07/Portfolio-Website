import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Press_Start_2P } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-press-start",
})

export const metadata: Metadata = {
  title: "Dibakar Banerjee - Portfolio",
  description: "Modern gamified portfolio showcasing full-stack development skills",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${orbitron.variable} ${pressStart2P.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
