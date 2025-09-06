Ocean Current AI — Agentic Portfolio (Dark Theme)

Live site: https://ocean-current-ai.lovable.app/#contact

An agentic, ocean-inspired portfolio built with React + TypeScript and a modern UI stack. The site uses shadcn/ui for accessible components, Tailwind CSS for design tokens and styling, and GSAP for fluid, tide-like animations. It’s authored and deployed through Lovable, so prompts/edits made in Lovable auto-commit to this GitHub repo and can be published with one click.

✨ What this project is

A production-ready personal portfolio that showcases work with an elegant, minimal aesthetic and ocean vibe. It includes:

Hero + Selected Work sections with smooth GSAP reveals

Reusable shadcn components (cards, buttons, dialogs, sheets, tabs, etc.)

Responsive, accessible UI with Tailwind and Radix primitives

Contact section with clear calls to action (link above jumps to it)

A codebase organized for easy iteration and future pages (Work, About, Blog, Labs)

The design language emphasizes soft gradients, sea-glass surfaces, and fluid motion inspired by currents and tides.

🧱 How it’s made (Architecture)

App Type: SPA powered by Vite (fast dev server + optimized builds)

Language: TypeScript for type-safe components and props

UI System: shadcn/ui on top of Radix UI primitives

Styling: Tailwind CSS with design tokens (ocean palette, radii, shadows)

Animations: GSAP (e.g., ScrollTrigger/Flip) for page/section transitions and micro-interactions

Icons: lucide-react for consistent, lightweight icons

Hosting/Authoring: Lovable (prompt → generate → commit → publish)

Typical structure (trimmed):

src/
  components/
    ui/                # shadcn components (alert, dialog, card, button, tabs, etc.)
    ...                # site-specific components (hero, gallery, nav, etc.)
  pages/               # page entries (e.g., index.tsx)
  styles/              # tailwind and global styles (if present)
public/
  ...                  # static assets

🧩 Key Features

Ocean theme: deep blues/teals, glassy surfaces, subtle caustic gradients

Fluid animations with GSAP (enter transitions, scroll reveals, card FLIP, gentle parallax)

Accessible components: focus states, ARIA-friendly primitives via shadcn/Radix

Mobile-first: responsive across breakpoints; well-tuned spacing and type scales

Lovable workflow: prompt changes, auto-commit to GitHub, publish with a click

🔗 Project links

Live site: https://ocean-current-ai.lovable.app/#contact

Lovable project: https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275

🛠️ Tech Stack

Vite — dev server & bundler

React 18 — UI library

TypeScript — types & DX

shadcn/ui — headless, accessible components

Tailwind CSS — utility-first styling & tokens

GSAP — high-performance animations

lucide-react — icon set

🚀 Getting started (local development)

You’ll need Node.js 18+ and your preferred package manager.

# 1) Clone
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2) Install deps
# pick one based on your lockfile:
npm i
# or
pnpm i
# or
yarn

# 3) Start dev server
npm run dev
# then open the printed localhost URL (usually http://localhost:5173 or :3000)


Common scripts (may vary by template):

dev – start local dev server

build – production build

preview – preview the production build locally

lint – run lints (if configured)

✏️ Ways to edit
A) Edit with Lovable

Open the project in Lovable, prompt your changes, and publish.
Changes are auto-committed back to this repo.

Project: https://lovable.dev/projects/fab58212-be7a-4fe3-8142-581139716275

Share → Publish to deploy.

B) Edit locally in your IDE

Clone the repo, run npm run dev, make changes, commit & push.
Pushed changes appear in Lovable and can be published from there.

C) Edit directly on GitHub

Use the pencil icon on any file, commit to a branch, open a PR, merge to main.

D) GitHub Codespaces

Launch a Codespace from the Code menu → edit → commit → push.

🌊 Theming & animations

Tailwind tokens define the ocean palette and elevation.

shadcn components are themed via Tailwind classes and CSS vars.

GSAP powers fluid transitions (fade/translate reveals, subtle parallax, FLIP for grids).

Respect prefers-reduced-motion; fall back to simple fades for accessibility.

Tip: search the codebase for gsap to explore animation hooks and timelines.

📦 Build & deploy
Deploy via Lovable (recommended)

Open the Lovable project

Share → Publish

Your live site updates automatically: https://ocean-current-ai.lovable.app/#contact

Deploy elsewhere (optional)

You can also push this repo to Vercel/Netlify. Use:

Build: npm run build

Preview: npm run preview

Configure the output directory according to your framework settings.

🤝 Contributing workflow (suggested)
git checkout -b feat/your-change
# edit files
git add .
git commit -m "feat: describe your change"
git push -u origin feat/your-change
# open a PR → review → merge to main → publish via Lovable

📜 License

This project is provided as-is for personal portfolio use.
If you reuse components/styles, keep original attributions where applicable (shadcn/ui, Radix, lucide, etc.).
