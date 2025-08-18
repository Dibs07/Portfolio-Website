"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Experience } from "@/types/portfolio"

interface ExperiencesSectionProps {
  experiences: Experience[]
}

export default function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  return (
    <section id="experiences" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 font-sans"
        >
          <Trophy className="inline-block w-8 h-8 mr-3 text-yellow-500" />
          ACHIEVEMENT TIMELINE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-green-400 font-mono mb-16"
        >
          &gt; CAREER PROGRESSION UNLOCKED
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-500 transition-all duration-300 pixel-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white font-sans">{exp.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-green-400 border-green-500 font-mono">
                        {exp.level}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300 border-gray-600 font-mono">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-green-400 font-medium mb-2 font-mono">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-green-400">XP:</span>
                    <div className="flex-1 h-2 bg-gray-800 rounded">
                      <motion.div
                        className="h-full gaming-progress rounded"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${exp.xp}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                    <span className="text-sm font-mono text-gray-400">{exp.xp}%</span>
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
