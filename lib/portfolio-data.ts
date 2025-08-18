import { PortfolioData } from "@/types/portfolio"

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const response = await fetch('/portfolio.json')
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio data')
    }
    return await response.json()
  } catch (error) {
    console.error('Error loading portfolio data:', error)
    // Return default data if fetch fails
    return {
      name: "DIBAKAR",
      surname: "DEVELOPER",
      title: "Full-Stack Developer & Digital Architect",
      description: "Crafting legendary digital experiences with cutting-edge technologies.",
      initializingText: "> INITIALIZING PORTFOLIO...",
      experiences: [],
      projects: [],
      skills: [],
      contact: {
        teamUpTitle: "Let's Team Up",
        teamUpDescription: "Ready to embark on an epic development quest?",
        email: "contact@example.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      footer: {
        copyright: "© 2025 PORTFOLIO.EXE",
        builtWith: "BUILT_WITH: Next.js + TypeScript + Framer_Motion",
        status: "STATUS: ONLINE"
      }
    }
  }
}
