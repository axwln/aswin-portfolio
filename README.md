# Aswin Reji — Cinematic Portfolio

A premium, cinematic video editor portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Adding Your Videos

Place your MP4 files (H.264, optimized) in the `/public/videos/` folder:

| File | Used In |
|------|---------|
| `bg.mp4` | Hero section background (blurred, looping) |
| `showreel.mp4` | Featured video player |
| `project1.mp4` – `project6.mp4` | Portfolio grid hover previews |

### Video Optimization Tips
- Use **H.264** codec for maximum browser compatibility
- Keep `bg.mp4` under **10MB** (it's blurred anyway — low quality is fine)
- Keep portfolio previews under **5MB** each (they're muted previews)
- Use [HandBrake](https://handbrake.fr/) or `ffmpeg` to compress:

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast -an output.mp4
```

---

## Customization

### Contact Links — `components/CTA.tsx`
```ts
const WHATSAPP = 'https://wa.me/91XXXXXXXXXX?text=...'
const EMAIL = 'mailto:your@email.com'
```

### Portfolio Projects — `components/Portfolio.tsx`
Edit the `projects` array to update titles, categories, and video sources.

### Services — `components/Services.tsx`
Edit the `services` array to update icons, titles, descriptions, and tags.

### Metrics — `components/Results.tsx`
Edit the `metrics` array to update your real numbers.

---

## Project Structure

```
aswin-portfolio/
├── app/
│   ├── globals.css       # Global styles, custom cursor hide, scrollbar
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all components)
├── components/
│   ├── Cursor.tsx        # Custom animated cursor (spring physics)
│   ├── Hero.tsx          # Fullscreen hero + video BG + parallax
│   ├── ScrollStrip.tsx   # Infinite horizontal marquee
│   ├── FeaturedVideo.tsx # Cinematic showreel player
│   ├── Portfolio.tsx     # 3-col grid, hover-to-play
│   ├── Services.tsx      # Glassmorphism service cards
│   ├── Results.tsx       # Metrics + highlights
│   └── CTA.tsx           # Call to action + footer
└── public/
    └── videos/           # ← Put your MP4 files here
```

---

## Tech Stack

- **Next.js 14** — App Router, dynamic imports, SSR-safe cursor
- **Tailwind CSS** — Utility-first styling with custom gold theme
- **Framer Motion** — Spring cursor, scroll animations, stagger reveals
- **Google Fonts** — Inter + Bebas Neue (loaded via CSS `@import`)
