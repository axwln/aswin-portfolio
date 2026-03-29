'use client'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import ScrollStrip from '@/components/ScrollStrip'
import FeaturedVideo from '@/components/FeaturedVideo'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Results from '@/components/Results'
import CTA from '@/components/CTA'

// Cursor is client-only (needs window/mouse events)
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })

export default function Home() {
  return (
    <main className="relative bg-[#050505]">
      <Cursor />
      <Hero />
      <ScrollStrip />
      <FeaturedVideo />
      <ScrollStrip />
      <Portfolio />
      <Services />
      <Results />
      <CTA />
    </main>
  )
}
