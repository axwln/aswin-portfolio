'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  { title: 'Car Edit Vol.1', category: 'Reels Editing', src: '/videos/car1.mp4', duration: '0:30', banner: 'Vehicle Edits' },
  { title: 'Car Edit Vol.2', category: 'Reels Editing', src: '/videos/car2.mp4', duration: '0:30', banner: 'Vehicle Edits' },
  { title: 'Bus Reel',       category: 'Reels Editing', src: '/videos/bus1.mp4', duration: '0:30', banner: 'Vehicle Edits' },
  { title: 'Car Edit Vol.3', category: 'Reels Editing', src: '/videos/car3.mp4', duration: '0:30', banner: 'Vehicle Edits' },
]

const TABS = ['All', 'Reels Editing', 'YouTube Content', 'Ads & Promos']

function VideoModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl aspect-video"
          onClick={e => e.stopPropagation()}
        >
          <video
            autoPlay controls playsInline
            className="w-full h-full rounded-xl object-cover"
            muted={false}
          >
            <source src={project.src} type="video/mp4" />
          </video>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <p className="text-gold text-xs tracking-widest uppercase">{project.category}</p>
              <h3 className="text-white font-semibold text-lg">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              ✕ Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProjectCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)

  const handleEnter = () => {
    setHovered(true)
    videoRef.current?.play()
  }
  const handleLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
      data-hover
      className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#111]">
        <video
          ref={videoRef}
          muted loop playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={project.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
      </div>

      {/* Play icon on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-gold border-b-[8px] border-b-transparent ml-1" />
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5"
      >
        <span className="text-gold text-xs tracking-widest uppercase mb-1">{project.category}</span>
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <span className="text-white/40 text-xs mt-1">{project.duration}</span>
      </motion.div>

      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
      >
        <p className="text-white/80 text-sm font-medium">{project.title}</p>
      </motion.div>

      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold opacity-60" />
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState('All')
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null)

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab)

  // Group by banner
  const groups = filtered.reduce<{ banner: string; items: typeof projects }[]>((acc, p) => {
    const banner = p.banner ?? ''
    const existing = acc.find(g => g.banner === banner)
    if (existing) existing.items.push(p)
    else acc.push({ banner, items: [p] })
    return acc
  }, [])

  return (
    <section id="portfolio" ref={ref} className="py-28 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
      >
        <div>
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">Portfolio</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
            SELECTED WORK
          </h2>
        </div>
        <p className="text-white/40 text-sm max-w-xs">
          Click to watch. Each project crafted with precision and cinematic intent.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border ${
              activeTab === tab
                ? 'bg-gold text-black border-gold font-semibold'
                : 'border-white/20 text-white/50 hover:border-gold hover:text-gold'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        {groups.map(group => (
          <div key={group.banner} className="mb-12">
            {group.banner && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="flex items-center gap-3 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-full">
                  <span className="text-lg">🚗</span>
                  <span className="text-gold text-xs tracking-widest uppercase font-semibold">{group.banner}</span>
                </div>
                <div className="flex-1 h-px bg-gold/20" />
              </motion.div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} onClick={() => setModalProject(p)} />
              ))}
            </div>
          </div>
        ))}
      </AnimatePresence>

      {modalProject && (
        <VideoModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  )
}
