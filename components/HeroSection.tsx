"use client"

import { motion, MotionValue } from "framer-motion"
import { ChevronDown, Code, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  name: string
  surname: string
  title: string
  description: string
  initializingText: string
  scrollToSection: (sectionId: string) => void
  y: MotionValue<string>
}

export default function HeroSection({
  name,
  surname,
  title,
  description,
  initializingText,
  scrollToSection,
  y,
}: HeroSectionProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative">
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <div className="w-full h-full bg-gradient-to-br from-green-900/20 to-blue-900/20" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <motion.div
              className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center pixel-border"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="w-20 h-20 text-green-400" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Trophy className="w-4 h-4 text-black" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-sans glitch-effect"
        >
          <span className="neon-text">{name}</span> {surname}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono text-green-400 text-lg mb-4"
        >
          {initializingText}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-sans"
        >
          {title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
        >
          {description}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.0 }}>
          <Button
            onClick={() => scrollToSection("experiences")}
            className="bg-green-500 text-black hover:bg-green-400 text-lg px-8 py-3 font-mono pixel-button"
          >
            START GAME
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
