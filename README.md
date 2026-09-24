# Portfolio — Matee Ur Rehman

Personal developer portfolio. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config — design tokens live in `src/app/globals.css`)
- **Fonts**: Geist (display/UI), Geist Mono (technical accents), Inter (body text)

## Project Structure

```
src/
  app/                # Routes, layout, global styles
  components/
    ui/                # Small reusable primitives (button, tag, card, etc.)
    layout/            # Structural pieces (nav, footer)
    sections/          # Page sections (hero, about, projects, etc.)
  data/                # Content as data (e.g. projects.ts)
  types/               # Shared TypeScript types
  lib/                 # Utilities/helpers
```

Content-heavy, repeatable sections (like Projects) are driven by typed data files
in `src/data/`, so new entries can be added without touching layout code.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
