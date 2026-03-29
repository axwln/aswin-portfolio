'use client'
import { motion } from 'framer-motion'

const words = ['EDITING', 'STORYTELLING', 'CINEMATIC', 'VIRAL CONTENT', 'COLOR GRADING', 'MOTION DESIGN', 'REELS', 'YOUTUBE']

export default function ScrollStrip() {
  const repeated = [...words, ...words]

  return (
    <div className="relative py-5 overflow-hidden border-y border-white/5 bg-[#0a0a0a]">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
      >
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center gap-12 text-sm tracking-[0.3em] font-medium">
            <span className="text-white/20">{word}</span>
            <span className="text-gold text-xs">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
