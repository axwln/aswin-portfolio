'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'blur(3px) brightness(0.35)' }}
        >
          {/* Replace src with your actual video file in /public/videos/ */}
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#050505]/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.p variants={item} className="text-gold tracking-[0.3em] text-xs uppercase mb-4 font-medium">
          Available for Projects
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(3rem,12vw,10rem)] leading-none tracking-wide text-white text-glow"
        >
          ASWIN REJI
        </motion.h1>

        <motion.div variants={item} className="w-16 h-px bg-gold mx-auto my-5" />

        <motion.p
          variants={item}
          className="text-white/70 text-base md:text-xl font-light max-w-xl mx-auto leading-relaxed px-2"
        >
          Cinematic Video Editor crafting{' '}
          <span className="text-gold font-medium">viral visuals</span> &amp; storytelling
        </motion.p>

        <motion.div variants={item} className="flex gap-3 justify-center mt-8 flex-wrap">
          <a
            href="#portfolio"
            data-hover
            className="px-6 py-3 bg-gold text-black font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            data-hover
            className="px-6 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
