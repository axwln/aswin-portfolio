import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aswin Reji — Cinematic Video Editor',
  description: 'Crafting viral visuals & storytelling. Reels, YouTube, Ads & Promos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">{children}</body>
    </html>
  )
}
