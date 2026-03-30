'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FeaturedVideo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

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
        <div className="relative aspect-video bg-black">
          <video
            ref={videoRef}
            playsInline
            controls={playing}
            className="w-full h-full object-cover"
            onEnded={() => setPlaying(false)}
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
          </video>

          {/* Click to play overlay */}
          {!playing && (
            <div
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center backdrop-blur-sm bg-black/40"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-gold border-b-[10px] border-b-transparent ml-1" />
              </motion.div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end pointer-events-none">
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
