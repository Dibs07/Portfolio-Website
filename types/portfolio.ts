export interface Experience {
  title: string
  company: string
  period: string
  description: string
  level: string
  xp: number
}

export interface Project {
  title: string
  description: string
  tech: string[]
  rarity: string
  power: number
  githubUrl: string
  demoUrl: string
}

export interface Skill {
  name: string
  level: number
  category: string
  icon: string
}

export interface Contact {
  teamUpTitle: string
  teamUpDescription: string
  email: string
  github: string
  linkedin: string
}

export interface Footer {
  copyright: string
  builtWith: string
  status: string
}

export interface PortfolioData {
  name: string
  surname: string
  title: string
  description: string
  initializingText: string
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
  contact: Contact
  footer: Footer
}
