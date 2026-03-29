'use client'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 })

  const isHovering = useRef(false)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const onEnter = () => {
      isHovering.current = true
      ringRef.current?.classList.add('scale-150', 'border-gold')
    }
    const onLeave = () => {
      isHovering.current = false
      ringRef.current?.classList.remove('scale-150', 'border-gold')
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [mouseX, mouseY, dotX, dotY])

  return (
    <>
      {/* Outer ring — spring lag */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-9 h-9 rounded-full border border-white/50 transition-transform duration-200"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full bg-gold"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
