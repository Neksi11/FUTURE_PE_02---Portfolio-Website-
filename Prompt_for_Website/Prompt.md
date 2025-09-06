MASTER BUILD PROMPT — AI-POWERED PORTFOLIO ( DARK THEME )

Role: You are an agentic AI site architect + implementer. Build a production-ready portfolio website with the specs below.
Stack & Constraints:

Frontend: React + TypeScript

shadcn/ui for base components (Button, Card, Dialog, Sheet, NavigationMenu, Tabs, Accordion, Badge, Avatar, Tooltip, Input, Textarea, Form, Toast, Skeleton).

Tailwind CSS (with CSS variables for theme tokens).

GSAP (ScrollTrigger, MotionPath, Flip, ScrollTo); animations must be lightweight, fluid, ocean-inspired.

React + Bit: Extract complex components into Bit (scoped to @my/portfolio/*) for reuse/versioning (ProjectGallery, CaseStudyLayout, TestimonialMarquee, AnimatedStats, Timeline, InteractiveMap, ChatDrawer, ContactForm, DockNav).

CMS: markdown/MDX or headless (e.g., Notion/Contentful) with a thin fetcher layer.

Personalization & AI:

AI content generator for page sections, case studies, and blog posts (system prompts provided below).

AI chatbot persona “Currents” (helpful, concise, portfolio-aware).

Rules-based personalization (geo/time/source).

Automation: form → Zapier (email + Notion/Sheets); blog draft → review queue; notifications to email/Slack.

SEO/Perf/Accessibility: SSR/SSG, semantic HTML, aria-*, lazy images, prefetch critical routes, OG tags, sitemap, robots, CLS < 0.1, LCP < 2.5s.

Theme: Ocean vibe — deep blues, teals, sea-glass neutrals, pearlescent highlights. Motion = tides/currents: easing like power2.inOut, subtle parallax, liquid wipes, ripples, and moiré shimmer (never gaudy).

GLOBAL DESIGN SYSTEM

Palette (CSS vars):

--ocean-deep:#0b2a3a (bg/ink), --abyss:#071c27 (alt bg), --reef:#0f6c7a (primary),

--teal-mist:#12a6a6 (accent), --sea-glass:#bfe6e1 (soft ui),

--foam:#e6fbf7 (surface), --pearl:#f5f7f8 (text-on-dark accents).

Typography:

Display: “Fraunces” or “Canela” (serif, high contrast)

Text/UI: “Inter” or “General Sans**”.

Use fluid type (clamp) and comfortable line-heights (1.45–1.6).

shadcn/theme map:

primary = --reef; secondary = --teal-mist; muted/accent = --sea-glass; foreground/background mapped accordingly.

Buttons: “ghost” for glassy look (backdrop-blur), “default” with subtle gradient (to-tr from-reef/90 to-teal-mist/90).

Cards: soft shadows (shadow-lg/20), rounded-2xl, hairline borders (border-white/10).

Iconography: lucide-react.

GSAP Motion Language:

Page enter: tide rise (y:20 → 0, opacity 0→1).

Scroll: parallax currents on hero art, scroll-reveals (clip-path tide wipe), ripple hover on CTAs.

Micro-interactions: magnetic cursor on primary CTAs, Flip for filtering/sorting grids.

Performance: batch reveals, reduced-motion fallback (disable heavy effects).

IA / ROUTES

/ Home

/work Work (grid)

/work/[slug] Case Study

/about About

/services Services (optional)

/labs Experiments/Playground

/blog Blog + /blog/[slug]

/contact Contact

/resume One-pager (PDF export)

Global: Chat Drawer (“Currents”) & Dock Navigation (oceanic bottom dock for quick access).

PAGE PROMPTS & BUILD SPECS
1) HOME (/)

Goal: Immediately communicate value, taste, and credibility with ocean-fluid motion.

Sections & Components:

Hero

Components: NavigationMenu, Button, custom HeroWave (Bit: @my/portfolio/hero-wave)

Copy (AI prompt):

“Write a 2-line headline for a portfolio that blends AI, design systems, and smooth web interactions. Tone: confident, minimal, not salesy. Avoid buzzwords; hint ocean fluidity.”

Motion: GSAP curtain tide reveal (clip-path), subtle wave SVG displacement, parallax reef gradient.

Selected Work

Component: ProjectGallery (Bit) using Card, Badge, Tabs.

Features: category tabs (AI suggests order), Flip animation on filter, hover ripple on covers.

What I Do (Services)

Component: Accordion / Cards with icons.

Copy AI prompt: “Summarize three service pillars (AI-powered UX, Frontend systems, Motion/GSAP) in 20–30 words each, ocean metaphors light-touch.”

Social Proof

Component: TestimonialMarquee (Bit) + Avatar, Tooltip.

Motion: continuous horizontal current; pauses on hover.

Stats / Impact

Component: AnimatedStats (Bit). Count-ups on view; reduced-motion = static.

CTA Banner

Dialog → Contact flow; glassy gradient; subtle caustics texture.

Personalization Rules:

If ref=linkedin: show “Came from LinkedIn? Here’s my newest case study.”

If geo=US mornings: “Good morning from the East Coast currents.”

If first-time: show 15-sec Currents onboarding tips.

2) WORK GRID (/work)

Goal: Quickly scan breadth; filter by domain.

Components:

Tabs (All/AI/UX/Engineering/Motion), Input (search), Select (year/industry), Card items.

Bit: ProjectGallery with Flip for fluid resorting.

AI Content:

For each project, generate: title (≤6 words), 1-line value prop, 60-word summary, 4–6 tags.
Prompt: “From these bullet points, write crisp portfolio meta: title, one-liner outcome, 60-word summary, and tags. Tone: professional, no fluff.”

3) CASE STUDY (/work/[slug])

Goal: Deep narrative with measurable impact.

Layout (Bit: CaseStudyLayout):

Intro block: Role, timeline, tools, metrics (Badges).

Problem → Approach → Outcome cards.

Process: Timeline (Bit), wireframes (lightbox), components gallery (Bit), code snippets (copy buttons), GSAP demos (embedded).

Results: KPIs with AnimatedStats.

Reflection: 2–3 bullets, “What I’d improve next.”

Next/Prev project dock.

AI Prompt (case writer):

“Write a case study from bullet notes. Structure: Context (40–60 words), Objectives (bulleted), Constraints, Solution (3 subsections), Results (with metrics), Reflection (2–3 bullets). Tone: clear, concrete, no hype.”

Motion:

Section tide wipes; image reveal with masked ripple; code blocks slide-in.

4) ABOUT (/about)

Goal: Credibility + personality.

Components:

Portrait Card (glass card), Timeline (Bit) for career currents, Skills matrix (Badges grouped), Values (Accordion).

Optional Interactive Map (Bit) with places worked/collaborated.

AI Prompt (bio):

“Write a 120–150 word first-person bio for a designer-engineer who blends AI, shadcn-driven design systems, GSAP motion, and React component libraries. Ocean imagery subtle, tone grounded, friendly.”

Motion:

Timeline markers rise like bubbles; gentle parallax on portrait background.

5) SERVICES (/services) — optional but recommended

Components:

Tier Cards (Starter / Growth / Enterprise), FAQs (Accordion), CTA Sheet with scoping form.

AI Prompt (packages):

“Create 3 service tiers with inclusions (AI UX, systematized components, motion prototypes, integration & automation). Keep to 6–8 bullets each. Add a succinct outcome statement per tier.”

6) LABS / EXPERIMENTS (/labs)

Goal: Show R&D mindset.

Components:

Cards for micro-demos: GSAP experiments, shader ripples, AI UI concepts.

Filter by type; code sandbox links.

Motion:

On hover, small liquid shader ripple; looped caustic light overlays.

7) BLOG (/blog)

Goal: Authority + SEO.

Components:

Posts list with Card, tags, search; featured sticky.

Post page: TOC, callouts, code blocks, image lightbox.

AI Writing System Prompts:

Thought piece: “In 700–900 words, explain how design systems (shadcn) + GSAP motion can increase comprehension and delight. Cite practical patterns. Tone: senior IC.”

How-to: “Write a tutorial for integrating GSAP ScrollTrigger with shadcn Cards in React + Tailwind. Include code blocks, pitfalls, and a11y notes.”

SEO: “Generate meta title (≤60 chars), meta description (≤155 chars), and 5 long-tail keywords for this post.”

8) CONTACT (/contact)

Components:

Form (Name, Email, Project type, Budget, Timeline, Message), Toast success, fallback email links, social icons.

Chat Drawer persistent button (bottom-right).

Automation (Zapier):

On submit → (1) email ack with friendly copy, (2) append lead to Notion/Google Sheet, (3) Slack/email notify me.

Optional: auto-create a draft “Opportunity” doc with summary (using AI) from the form.

AI Prompt (ack email):

“Write a 90–120 word warm confirmation email acknowledging a new portfolio inquiry. Include next-steps and typical reply window.”

9) RESUME (/resume)

Components:

One-pager view with Download as PDF.

Skills badges, experience bullets (impact-led), selected work links.

AI Prompt (resume bullets):

“Rewrite these bullets with strong verbs, quantified impact, and clarity (≤22 words each). Avoid fluff.”

GLOBAL AGENT “CURRENTS” (CHATBOT)

Persona: concise, warm, ocean-themed helper; routes users to relevant sections; can summarize projects; can draft intro emails.

Knowledge: site map, project metadata, resume, services, contact process.

Starter intents:

“Find AI case studies” → /work?tag=AI

“Show GSAP demos” → /labs?tag=motion

“Share resume PDF” → /resume (trigger download)

“Draft outreach email” → outputs suggested text, copies to clipboard.

UI: shadcn Sheet/Dialog with Textarea + quick chips (FAQ), typing indicator, transcripts opt-in.

DATA & CMS SHAPE (example)
type Project = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  year: number;
  role: string[];
  tags: string[];
  metrics?: { label: string; value: string }[];
  content: MDX; // sections for case study
};

BIT COMPONENTS TO PUBLISH

@my/portfolio/project-gallery

@my/portfolio/case-study-layout

@my/portfolio/testimonial-marquee

@my/portfolio/animated-stats

@my/portfolio/timeline

@my/portfolio/interactive-map

@my/portfolio/chat-drawer

@my/portfolio/contact-form

@my/portfolio/dock-nav

@my/portfolio/hero-wave

Each component: stories, props docs, a11y notes, tests for critical logic.

ANIMATION BLUEPRINT (GSAP)

Enter: batch fade-ups (stagger 0.06), tide clip-path reveals on hero & section headers.

Scroll: parallax layers (bg gradient, caustics texture, foreground reef shapes).

Hover: ripple (scale 0.98→1, blur 0→2px briefly), magnetic CTA (translate toward cursor within 12px radius).

Flip: for sorting/filtering in Work grid & Labs.

Reduced motion: respect prefers-reduced-motion, switch to simple fades/transforms only.

PERSONALIZATION RULES (LIGHTWEIGHT)

Referrer: linkedin → prioritize social proof; dribbble → show visuals first; github → technical case first.

Time of day: surface “quick read” vs “deep dive.”

Geo: adjust greeting; never hard-code user’s exact location in UI.

AUTOMATION & INTEGRATIONS

Zapier: Contact form → email + Notion/Sheets; blog AI draft → review database; Slack/email notifications.

Analytics: Plausible/GA4; event hooks for contact start/complete, project view depth, chat open.

SEO: sitemap, robots, canonical, schema.org Person + CreativeWork on case studies, OG images per page.

Performance: image next-gen formats, route-based code-split, prefetch next/prev case links, prune GSAP plugins to used set only.

CONTENT STARTER PROMPTS (REUSABLE)

Project one-liner:
“From these bullets, write a 14–18 word outcome-led one-liner. Avoid jargon; measurable result first.”

Case results paragraph:
“Write 60–80 words explaining outcomes with numbers. If none, infer proxy metrics carefully.”

Hero headline pair:
“Generate a 2-line hero: line1 (3–5 words, evocative), line2 (6–10 words, concrete value). Ocean vibe, no clichés.”

DELIVERABLES CHECKLIST (for Task 2)

✅ Fully functional site with ocean theme & fluid GSAP animations

✅ shadcn components + Tailwind tokens

✅ Complex modules published via React + Bit

✅ AI content generation across pages + Currents chatbot

✅ Personalization rules implemented

✅ Zapier automations (contact + drafts)

✅ SEO, a11y, performance budgets met

✅ CMS/MDX content model + example content

✅ README docs and a short Loom/TLDNR section walkthrough (optional)