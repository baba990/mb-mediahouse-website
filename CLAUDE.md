# MB Media House website

Marketing site for MB Media House, a London-based digital marketing and media agency.
The site owner writes in Turkish; reply in Turkish. Site copy is in English.

## Stack

- Next.js 13.5 (App Router), React 18, TypeScript
- Tailwind CSS 3 + shadcn/ui (Radix primitives in `components/ui/`), `lucide-react` icons
- `next-themes` for dark/light mode (default: dark)
- Forms: `react-hook-form` + `zod`

## Commands

- `npm install` — install dependencies
- `npm run dev` — dev server on port 3000
- `npm run build` — production build (static export to `out/`)
- `npm run lint` — ESLint (ignored during builds, so run it by hand)

There are no tests. Verify changes with `npm run build` and by viewing the page in a browser.

## Layout

- `app/layout.tsx` — root layout: theme provider, `Navbar`, `Footer`, site metadata
- `app/page.tsx` — home page
- `app/{about,services,portfolio,contact,instagram}/page.tsx` — the other pages
- `app/api/instagram/` — Instagram feed and token-refresh routes
- `components/navbar.tsx`, `components/footer.tsx`, `components/instagram-feed.tsx` — site components
- `components/ui/` — generated shadcn/ui components; add new ones with the shadcn CLI rather than hand-editing
- `lib/instagram.ts` — Instagram Graph API client with sample-post fallback
- `lib/utils.ts` — `cn()` class-name helper

## Things to know

- `next.config.js` sets `output: 'export'` and `images.unoptimized`. A static export has no server,
  so the `app/api/instagram/*` routes do not run on static hosting; keep that in mind before
  relying on them.
- Without `INSTAGRAM_ACCESS_TOKEN` / `INSTAGRAM_USER_ID` / `INSTAGRAM_APP_SECRET` (in `.env.local`,
  never committed) the Instagram feed shows sample posts. See `README.md` for setup.
- Use the `@/` import alias (maps to the repo root).
- For design work, use the `frontend-design` skill when it is available.
