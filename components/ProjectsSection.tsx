"use client"

import { motion } from "framer-motion"
import { Code, Github, ExternalLink, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Project } from "@/types/portfolio"

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 font-sans"
        >
          <Code className="inline-block w-8 h-8 mr-3 text-blue-500" />
          LEGENDARY BUILDS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-green-400 font-mono mb-16"
        >
          &gt; SHOWCASING EPIC CREATIONS
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-blue-500/30 hover:border-blue-500 transition-all duration-300 h-full pixel-border">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <Code className="w-12 h-12 text-blue-400 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white font-sans">{project.title}</h3>
                    <Badge
                      variant="outline"
                      className={`font-mono text-xs ${
                        project.rarity === "LEGENDARY"
                          ? "text-yellow-400 border-yellow-500"
                          : project.rarity === "EPIC"
                            ? "text-purple-400 border-purple-500"
                            : "text-blue-400 border-blue-500"
                      }`}
                    >
                      {project.rarity}
                    </Badge>
                  </div>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-mono text-yellow-400">POWER: {project.power}</span>
                    <div className="flex-1 h-1 bg-gray-800 rounded">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.power}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-600 text-green-400 hover:bg-green-900/20 bg-transparent font-mono pixel-button"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      CODE
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-600 text-blue-400 hover:bg-blue-900/20 bg-transparent font-mono pixel-button"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      DEMO
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
