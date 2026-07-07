# SoulHeartDatingApp

A premium, animated Indian dating/chat landing site built with Next.js 15 (App Router), Tailwind CSS, and Framer Motion.

## Pages
- `/` — Animated hero landing page with floating hearts, language selector, "Start Something Epic" CTA
- `/profiles` — Searchable, paginated grid of profile cards (24 per page, 5 pages of mock data)
- `/profiles/[id]` — Individual profile detail page
- `/how-to-call` — Two-option "how it works" explainer page

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Notes
- Profile data is generated deterministically in `lib/profiles.js` (no database needed) — swap this out for a real API/database when you're ready to launch.
- Photos are currently placeholders ("Photo Coming Soon") — drop real images into `/public` and wire them into `ProfileCard.js` and the profile detail page.
- Styling uses CSS variables defined in `app/globals.css` (HSL-based theme) plus Tailwind utility classes — easy to re-theme by changing the variables.
- `app/api/[[...path]]/route.js` is a placeholder catch-all API route — replace with real endpoints (auth, chat, payments, etc.) as needed.
