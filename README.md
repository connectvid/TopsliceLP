# Topslice HQ — Landing Page

Corporate presence page for Topslice HQ LLC, a New York City-based technology holding company.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Geist (via next/font)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx       # Root layout with Geist font + favicon
  page.tsx         # Main page composing all sections
  globals.css      # Tailwind imports + custom styles
components/
  Navbar.tsx       # Sticky nav with frosted glass blur
  Hero.tsx         # Hero section with dot-grid background
  WhatWeDo.tsx     # Two verticals: SaaS + Business Formation
  HowWeOperate.tsx # 3-step process: Identify → Build → Scale
  About.tsx        # Company overview + NYC badge
  Contact.tsx      # CTA with mailto link
  Footer.tsx       # Dark footer with white logo
public/
  logo.svg         # Full logo (dark, for light backgrounds)
  logo-white.svg   # Full logo (white, for dark backgrounds)
  favicon.svg      # Icon mark only
```
