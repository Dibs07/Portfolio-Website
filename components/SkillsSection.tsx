"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Skill } from "@/types/portfolio"

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 font-sans"
        >
          <Star className="inline-block w-8 h-8 mr-3 text-purple-500" />
          SKILL TREE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-green-400 font-mono mb-16"
        >
          &gt; MASTERY LEVELS ACHIEVED
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-3 p-4 bg-gray-900/30 rounded-lg pixel-border border-purple-500/30 hover:border-purple-500/60 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <span className="text-lg font-medium text-white font-sans">{skill.name}</span>
                    <div className="text-xs font-mono text-purple-400">{skill.category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-mono font-bold">LVL {Math.floor(skill.level / 10)}</div>
                  <div className="text-gray-400 font-mono text-sm">{skill.level}%</div>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="gaming-progress h-3 rounded-full relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
