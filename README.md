# Rishabh Aggarwal — Portfolio

Modern, fast personal portfolio showcasing projects, experience, and skills. Built with Next.js, Tailwind CSS, and tasteful animations.

## 🚀 Live
- **Website:** <your-domain.com>
- **Resume (PDF):** /public/resume.pdf

## ✨ Features
- Blazing-fast Next.js (App Router) with image optimization
- Responsive, accessible UI (keyboard & screen-reader friendly)
- Dark, cosmic black-green theme with subtle motion
- SEO + Open Graph tags, sitemap & robots
- Projects & content driven by simple TS/JSON files
- One-click deploy to Vercel

## 🧰 Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **UI:** shadcn/ui, Radix Primitives, lucide-react
- **Tooling:** ESLint, Prettier
- **Deploy:** Vercel

## 📂 Project Structure
```
.
├─ app/
│  ├─ (site)/
│  │  ├─ page.tsx               # Home
│  │  ├─ projects/page.tsx
│  │  ├─ experience/page.tsx
│  │  └─ contact/page.tsx
│  ├─ api/                      # Contact form (optional)
│  └─ layout.tsx
├─ components/                  # Reusable UI
├─ lib/                         # Utils (seo, analytics)
├─ public/                      # Static assets (og.png, favicon, resume.pdf)
├─ styles/                      # globals.css, tailwind.css
└─ src/data/                    # Content sources
   ├─ profile.ts
   ├─ projects.ts
   └─ socials.ts
```

## 🛠️ Getting Started
### Prerequisites
- Node.js ≥ 18
- pnpm (recommended) or npm/yarn

### Setup
```bash
pnpm install
cp .env.example .env.local   # if present; optional
pnpm dev                     # http://localhost:3000
```

### Production
```bash
pnpm build && pnpm start
```

### Useful Scripts
```bash
pnpm lint
pnpm format
```

## ⚙️ Configuration
- **Theme:** Tailwind tokens in `styles/*` and `tailwind.config.*`
- **SEO:** Update `lib/seo.ts` (site name, description, og image) and `<head>` metadata in `app/layout.tsx`
- **Analytics (optional):** Add `NEXT_PUBLIC_GTAG_ID` or other IDs in `.env.local`, wire in `lib/analytics.ts`
- **Contact form (optional):** Configure `/app/api/contact` with a mail provider (e.g., Resend). Add keys to `.env.local`

## 🧩 Content Editing
Update your info in `src/data`:

- `profile.ts` – name, headline, location, about
- `socials.ts` – GitHub, LinkedIn, email
- `projects.ts` – add items like:
```ts
{
  title: "MediVerse",
  tagline: "AI health chat, report scanner, wearables sync",
  stack: ["Spring Boot", "React", "MongoDB"],
  highlights: [
    "AI chat with safety guardrails",
    "Report OCR + insights + diet plan",
    "JWT auth, responsive UI"
  ],
  links: { demo: "https://...", repo: "https://..." },
  cover: "/images/projects/mediverse.png"
}
```
Add your other flagship projects too: **CodeRealm**, **LangSpace**.

## 🧪 Accessibility & Quality
- Meets WCAG AA color contrast for dark theme
- Keyboard & focus states for nav, buttons, dialogs
- Run `pnpm lint` before commits

## ☁️ Deploy (Vercel)
1. Push to GitHub
2. Import repo on Vercel
3. Set environment variables (if any)
4. Deploy — Vercel will build with `next build`

## 🖼️ Assets Checklist
- `/public/og.png` – Open Graph image (1200×630)
- `/public/favicon.*` – favicons + `site.webmanifest`
- `/public/resume.pdf` – up-to-date resume
- Project cover images under `/public/images/projects/`

## 🧭 Roadmap (optional)
- Blog with MDX
- Lighthouse 95+ across the board
- i18n (English → Hindi)

## 📬 Contact
- **Name:** Rishabh Aggarwal
- **GitHub:** https://github.com/RishabhAggarwal613
- **LinkedIn:** <your-linkedin-url>
- **Email:** <your-email>

## 📄 License
MIT © Rishabh Aggarwal
