Ocean Current AI — Agentic Portfolio (Ocean Theme)

Live site: https://ocean-current-ai.lovable.app/#contact

Lovable project: https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275

An agentic, ocean-inspired portfolio built with React + TypeScript, shadcn/ui, Tailwind CSS, and GSAP. Authored and deployed via Lovable (prompt → commit → publish).

Table of Contents

Overview

Features

Tech Stack

Architecture & Structure

Getting Started

Ways to Edit

Build & Deploy

Contributing Workflow

Links

License

Overview

Ocean Current AI is a minimal, elegant portfolio with an ocean vibe—deep blues, teal accents, sea-glass surfaces, and fluid, tide-like animations. It showcases selected work, motion craft, and a polished contact flow.

Features

🐚 Ocean theme with soft gradients and glassy surfaces

🌊 GSAP animations (enter/scroll reveals, subtle parallax, FLIP for grids)

♿ Accessible UI via shadcn/ui + Radix primitives

📱 Responsive across all breakpoints

⚡ Lovable integration: prompt changes, auto-commit, one-click publish

Tech Stack

Vite — dev server & bundler

React 18 — UI library

TypeScript — types & DX

shadcn/ui — headless, accessible components

Tailwind CSS — utility-first styling & design tokens

GSAP — high-performance animations

lucide-react — icon set

Architecture & Structure
src/
  components/
    ui/                # shadcn components (alert, dialog, card, button, tabs, etc.)
    hero/              # hero + wave/caustics bits (if applicable)
    layout/            # nav, footer, shells
    sections/          # home sections: selected work, stats, testimonials
  pages/
    index.tsx          # homepage entry
  styles/
    globals.css        # tailwind base + tokens
public/
  placeholder.svg


Styling: Tailwind tokens define the ocean palette/elevation.

Animations: GSAP timelines/hooks per section, honoring prefers-reduced-motion.

Components: shadcn/ui themed via Tailwind & CSS variables.

Getting Started

You’ll need Node.js 18+ and a package manager.

1) Clone
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

2) Install deps
# pick one based on your lockfile
npm i
# or
pnpm i
# or
yarn

3) Run locally
npm run dev


Open the printed URL (e.g., http://localhost:5173).

4) Build & preview
npm run build
npm run preview

Ways to Edit
A) Lovable (recommended)

Open the project, prompt your changes, Share → Publish.
Edits are auto-committed to this repo.

B) Local IDE

Edit in VS Code (or similar), commit, and push—Lovable will reflect changes.

C) GitHub Web

Use the pencil icon on a file → commit to a branch → PR → merge.

D) Codespaces

Launch a Codespace from the Code menu → edit → commit → push.

Build & Deploy
Lovable

Open the project in Lovable.

Share → Publish.

Live site updates at https://ocean-current-ai.lovable.app/#contact
.

Other hosts (optional)

Vercel/Netlify supported; use:

npm run build
npm run preview


Configure framework/adapter as needed.

Contributing Workflow
git checkout -b feat/your-change
# edit files
git add .
git commit -m "feat: describe your change"
git push -u origin feat/your-change
# open a PR → review → merge to main → publish (Lovable)

Links

Live: https://ocean-current-ai.lovable.app/#contact

Lovable: https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275

License

This project is provided for personal portfolio use.
Please retain attributions for shadcn/ui, Radix, lucide, etc., where applicable.
