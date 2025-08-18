"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

interface XPLevelProps {
  level: number
  xp: number
}

export default function XPLevel({ level, xp }: XPLevelProps) {
  return (
    <motion.div
      className="fixed top-4 right-4 z-50 bg-black/90 border border-green-500 p-4 rounded-lg pixel-border"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-green-400 font-mono text-sm">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4" />
          <span>LEVEL {level}</span>
        </div>
        <div className="w-32 h-2 bg-gray-800 rounded">
          <motion.div
            className="h-full gaming-progress rounded"
            initial={{ width: 0 }}
            animate={{ width: `${xp}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-xs mt-1">XP: {xp}/100</div>
      </div>
    </motion.div>
  )
}
