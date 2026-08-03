# Nexora Solutions — Digital Agency Website

A premium, modern digital agency website for **Nexora Solutions**, built with Next.js 15 App Router, React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + CSS keyframes
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Main page — assembles all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav (transparent → white on scroll)
│   │   └── Footer.tsx    # Dark navy footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx          # Full-viewport hero with laptop mockup
│   │   ├── TrustBar.tsx      # Trust indicators row
│   │   ├── About.tsx         # Why choose Nexora + metrics panel
│   │   ├── Services.tsx      # 10-service card grid
│   │   ├── Features.tsx      # Performance visual + checklist
│   │   ├── Projects.tsx      # Portfolio with category filters
│   │   ├── Process.tsx       # 7-step timeline
│   │   ├── Testimonials.tsx  # Client testimonials grid
│   │   ├── Stats.tsx         # Animated counter stats
│   │   ├── CTA.tsx           # Call-to-action banner
│   │   └── Contact.tsx       # Contact form + info
│   │
│   └── ui/
│       ├── Button.tsx          # Reusable button (primary/outline/ghost)
│       ├── SectionLabel.tsx    # Eyebrow label component
│       ├── ScrollReveal.tsx    # Framer Motion scroll animation wrapper
│       └── AnimatedCounter.tsx # Intersection-observer counter
│
├── lib/
│   ├── data.ts    # ⭐ ALL site content lives here — easy to edit
│   └── utils.ts   # cn() helper + scrollToSection()
│
└── types/
    └── index.ts   # TypeScript types for all data shapes
```

---

## ✏️ Customizing Content

**All text, projects, services, and testimonials are in one file:**

```
src/lib/data.ts
```

### Adding a new project

```ts
// In src/lib/data.ts → PROJECTS array:
{
  id: "my-new-project",
  title: "My New Project",
  industry: "Healthcare",
  category: "healthcare",           // matches filter button
  description: "What it does...",
  stack: ["React", "Node.js"],
  features: ["Feature 1", "Feature 2"],
  status: "Live",
  color: "from-rose-900 to-pink-700", // Tailwind gradient
  githubUrl: "https://github.com/...",
  liveUrl: "https://myproject.com",
}
```

### Adding a new project category

1. Add to `ProjectCategory` type in `src/types/index.ts`
2. Add a filter button in `src/components/sections/Projects.tsx` → `CATEGORIES` array

---

## Color Palette

| Name | Hex |
|---|---|
| Navy (primary) | `#0B1F3A` |
| Blue (secondary) | `#1E5EFF` |
| Accent | `#3B82F6` |
| Background | `#FFFFFF` |
| Light BG | `#F7F9FC` |
| Text | `#111827` |
| Muted Text | `#6B7280` |
| Border | `#E5E7EB` |

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Other platforms

```bash
npm run build
# Upload .next/ + package.json to your server
npm start
```

---

## Contact Form

The form in `Contact.tsx` currently shows a success state on submit.  
To wire it to a real backend, replace the `handleSubmit` function with a `fetch` call to:
- [Resend](https://resend.com) — for email (you're already using it in HiveBliss)
- [Formspree](https://formspree.io) — no-backend option
- Your own Next.js API route at `src/app/api/contact/route.ts`

---

Built with ❤️ by Nexora Solutions — Sri Lanka
