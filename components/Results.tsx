'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { value: '100K+', label: 'Views Generated', sub: 'Across all platforms' },
  { value: '95%', label: 'Retention Rate', sub: 'High-engagement edits' },
  { value: '50+', label: 'Projects Delivered', sub: 'Brands & creators' },
  { value: '3x', label: 'Avg. Growth', sub: 'Client channel growth' },
]

const highlights = [
  { icon: '🔥', text: 'Viral Content Strategy' },
  { icon: '🎯', text: 'Hook-First Editing' },
  { icon: '🎨', text: 'Cinematic Color Grading' },
  { icon: '⚡', text: 'Fast Turnaround' },
]

export default function Results() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">Impact</p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
          RESULTS THAT SPEAK
        </h2>
      </motion.div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-16">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#050505] p-10 text-center group hover:bg-[#0d0d0d] transition-colors duration-300"
          >
            <p className="font-display text-[clamp(2.5rem,5vw,4rem)] text-gold text-glow leading-none mb-2">
              {m.value}
            </p>
            <p className="text-white font-semibold text-sm mb-1">{m.label}</p>
            <p className="text-white/30 text-xs">{m.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.text}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="glass rounded-xl p-5 flex items-center gap-3"
          >
            <span className="text-2xl">{h.icon}</span>
            <span className="text-white/80 text-sm font-medium">{h.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
