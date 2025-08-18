"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const sections = ["about", "experiences", "projects", "skills", "contact"]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-green-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="text-xl font-bold font-mono neon-text glitch-effect" whileHover={{ scale: 1.05 }}>
            <Gamepad2 className="inline-block w-6 h-6 mr-2" />
            PORTFOLIO.EXE
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors font-mono text-sm pixel-button ${
                  activeSection === section ? "text-green-400 neon-text" : "text-gray-400 hover:text-green-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                &gt; {section.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
