'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: '🎬',
    title: 'Reels Editing',
    desc: 'Hook-driven short-form content engineered for maximum retention and shares. Trending transitions, sync cuts, and viral pacing.',
    tags: ['Instagram', 'TikTok', 'Shorts'],
  },
  {
    icon: '▶️',
    title: 'YouTube Content',
    desc: 'Long-form storytelling with cinematic color grades, dynamic pacing, and chapter-optimized structure to boost watch time.',
    tags: ['Long-form', 'Vlogs', 'Tutorials'],
  },
  {
    icon: '📣',
    title: 'Ads & Promos',
    desc: 'High-converting commercial edits with motion graphics, brand-aligned color, and persuasive narrative flow.',
    tags: ['Brand Films', 'Product', 'Social Ads'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="py-28 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">What I Do</p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
          SERVICES
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            data-hover
            className="glass rounded-2xl p-8 group relative overflow-hidden"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl" />

            <span className="text-4xl mb-6 block">{s.icon}</span>
            <h3 className="text-white font-semibold text-xl mb-3">{s.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>

            <div className="flex flex-wrap gap-2">
              {s.tags.map(tag => (
                <span key={tag} className="text-xs text-gold/70 border border-gold/20 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
