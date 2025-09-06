# Dark Current  — Agentic Portfolio

# URL TO THE WEBSITE : "https://future-pe-02-portfolio-website.vercel.app/"

> An ocean-inspired portfolio built with React, TypeScript, and modern UI components

[![Live Site](https://img.shields.io/badge/Live-Site-blue?style=for-the-badge)](https://ocean-current-ai.lovable.app/#contact)
[![Lovable](https://img.shields.io/badge/Built%20with-Lovable-purple?style=for-the-badge)](https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275)

##  Overview

A production-ready personal portfolio that showcases work with an elegant, minimal aesthetic and ocean vibe. The design language emphasizes soft gradients, sea-glass surfaces, and fluid motion inspired by currents and tides.

### ✨ Key Features

- **Dark Theme**: Deep blues/teals, glassy surfaces, subtle caustic gradients
- **Fluid Animations**: GSAP-powered transitions, scroll reveals, and micro-interactions
- **Accessible Components**: Focus states and ARIA-friendly primitives via shadcn/Radix
- **Mobile-First**: Responsive across breakpoints with well-tuned spacing and type scales
- **Lovable Workflow**: Prompt changes, auto-commit to GitHub, publish with a click

### 🎯 What's Included

- Hero + Selected Work sections with smooth GSAP reveals
- Reusable shadcn components (cards, buttons, dialogs, sheets, tabs, etc.)
- Responsive, accessible UI with Tailwind and Radix primitives
- Contact section with clear calls to action
- Organized codebase for easy iteration and future pages (Work, About, Blog, Labs)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Dev server & bundler |
| **React 18** | UI library |
| **TypeScript** | Type safety & DX |
| **shadcn/ui** | Headless, accessible components |
| **Tailwind CSS** | Utility-first styling & tokens |
| **GSAP** | High-performance animations |
| **lucide-react** | Icon set |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                # shadcn components (alert, dialog, card, button, tabs, etc.)
│   └── ...                # site-specific components (hero, gallery, nav, etc.)
├── pages/                 # page entries (e.g., index.tsx)
└── styles/                # tailwind and global styles (if present)
public/
└── ...                    # static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Your preferred package manager (npm, pnpm, or yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   # Choose one based on your lockfile:
   npm i
   # or
   pnpm i
   # or
   yarn
   ```

3. **Start development server**
   ```bash
   npm run dev
   # Open the printed localhost URL (usually http://localhost:5173 or :3000)
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `dev` | Start local dev server |
| `build` | Production build |
| `preview` | Preview the production build locally |
| `lint` | Run lints (if configured) |

## ✏️ Development Workflow

### Option A: Edit with Lovable (Recommended)

1. Open the [Lovable project](https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275)
2. Prompt your changes
3. Share → Publish to deploy
4. Changes are auto-committed back to this repo

### Option B: Local Development

1. Clone the repo and run `npm run dev`
2. Make changes in your IDE
3. Commit & push changes
4. Pushed changes appear in Lovable and can be published from there

### Option C: GitHub Direct Edit

1. Use the pencil icon on any file
2. Commit to a branch
3. Open a PR and merge to main

### Option D: GitHub Codespaces

1. Launch a Codespace from the Code menu
2. Edit → commit → push

## 🎨 Theming & Animations

- **Tailwind tokens** define the ocean palette and elevation
- **shadcn components** are themed via Tailwind classes and CSS vars
- **GSAP** powers fluid transitions (fade/translate reveals, subtle parallax, FLIP for grids)
- **Accessibility**: Respects `prefers-reduced-motion`; falls back to simple fades

> **Tip**: Search the codebase for `gsap` to explore animation hooks and timelines.

## 📦 Deployment

### Deploy via Lovable (Recommended)

1. Open the [Lovable project](https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275)
2. Share → Publish
3. Your live site updates automatically: https://ocean-current-ai.lovable.app/#contact

### Deploy Elsewhere (Optional)

You can also deploy this repo to Vercel/Netlify:

- **Build**: `npm run build`
- **Preview**: `npm run preview`
- Configure the output directory according to your framework settings

## 🤝 Contributing

1. Create a feature branch:
   ```bash
   git checkout -b feat/your-change
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: describe your change"
   ```

3. Push and create a PR:
   ```bash
   git push -u origin feat/your-change
   ```

4. Review → merge to main → publish via Lovable

## 🔗 Links

- **Live Site**: https://ocean-current-ai.lovable.app/#contact
- **Lovable Project**: https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275

## 📜 License


This project is provided as-is for personal portfolio use. If you reuse components/styles, keep original attributions where applicable (shadcn/ui, Radix, lucide, etc.).

