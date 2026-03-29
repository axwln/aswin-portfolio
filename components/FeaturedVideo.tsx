'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FeaturedVideo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">Featured Work</p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
          SHOWREEL 2024
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden glow-gold"
      >
        {/* Aspect ratio wrapper */}
        <div className="relative aspect-video bg-black">
          <video
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          >
            {/* Replace with your showreel video */}
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>

          {/* Play button overlay (shown when video not playing) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/20">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
          <div>
            <p className="text-white font-semibold">Cinematic Showreel</p>
            <p className="text-white/50 text-sm">2024 — Best of Collection</p>
          </div>
          <span className="text-gold text-xs tracking-widest uppercase">4K · H.264</span>
        </div>
      </motion.div>
    </section>
  )
}
