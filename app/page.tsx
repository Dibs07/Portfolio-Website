"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { PortfolioData } from "@/types/portfolio"
import { getPortfolioData } from "@/lib/portfolio-data"
import XPLevel from "@/components/XPLevel"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import ExperiencesSection from "@/components/ExperiencesSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null)
  const [activeSection, setActiveSection] = useState("about")
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    async function loadData() {
      const data = await getPortfolioData()
      setPortfolioData(data)
    }
    loadData()
  }, [])

  useEffect(() => {
    const updateXP = () => {
      const scrollPercent = Math.floor(scrollYProgress.get() * 100)
      setXp(scrollPercent)
      setLevel(Math.floor(scrollPercent / 20) + 1)
    }

    const unsubscribe = scrollYProgress.onChange(updateXP)
    return unsubscribe
  }, [scrollYProgress])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experiences", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="text-green-400 font-mono text-lg mb-4">
            &gt; LOADING PORTFOLIO DATA...
          </div>
          <div className="w-32 h-2 bg-gray-800 rounded mx-auto">
            <motion.div
              className="h-full gaming-progress rounded"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden retro-grid">
      <XPLevel level={level} xp={xp} />
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <HeroSection
        name={portfolioData.name}
        surname={portfolioData.surname}
        title={portfolioData.title}
        description={portfolioData.description}
        initializingText={portfolioData.initializingText}
        scrollToSection={scrollToSection}
        y={y}
      />

      <ExperiencesSection experiences={portfolioData.experiences} />
      <ProjectsSection projects={portfolioData.projects} />
      <SkillsSection skills={portfolioData.skills} />
      <ContactSection contact={portfolioData.contact} />
      <Footer footer={portfolioData.footer} />
    </div>
  )
}
