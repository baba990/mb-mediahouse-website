# MB Media House — Site Build Prompt (kopyala-yapıştır)

Aşağıdaki metni başka bir agent'a / site yapıcıya olduğu gibi ver.

---

## PROMPT

Build a complete, production-ready website for **MB Media House**, a London-based digital marketing & media agency. Build both the front end and the back end. Everything below is the specification.

### 1. Tech stack
- Next.js 14+ (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (Radix) + lucide-react icons
- next-themes (dark default, light toggle), Inter font
- Deploy target: Vercel (use server features, NOT `output: 'export'`)
- react-hook-form + zod for forms

### 2. Brand & design
- Primary purple gradient: `linear-gradient(135deg, #4B0082 0%, #A379F2 100%)` (`mbpurple.dark #4B0082`, `mbpurple.light #A379F2`)
- Logo text "MB Media House" with purple gradient text; create a real logo/favicon/og-image in `/public`
- Sticky transparent navbar, becomes blurred/solid on scroll; mobile hamburger menu
- Cards: hover lift (`translateY(-5px)` + purple shadow); portfolio items: hover scale 1.02 + dark purple overlay with "View Project"
- Animations: fadeIn / slideUp on hero
- Fully responsive, WCAG AA contrast

### 3. Pages & content
**Navbar:** Home, Services, Portfolio, About, Contact + Instagram, Facebook icons, phone `+44 7379 966855` (visible on lg), theme toggle. Mobile menu also shows hello@mbmediahouse.co.uk.

**Home (`/`)**
1. Hero (gradient): H1 "Transform Your Digital Presence"; sub "London's premier digital marketing and media agency delivering creative solutions that drive results."; buttons "Our Services" and "Get in Touch"; large hero image on the right.
2. Services preview (6 cards with icon, text, "Learn more" → `/services#id`): Web Design, Social Media Management, Digital Marketing, Content Writing, Video Production, Google Ads & SEO.
3. Featured Work (3 portfolio cards) + "View All Projects".
4. Instagram section: badge `@mb.mediahouse`, "Follow Us on Instagram", grid of latest 6 posts, "View All Posts" → `/instagram`.
5. Testimonials (3 cards, quote icon).
6. CTA gradient section "Ready to Transform Your Digital Presence?" → "Get Started Today" → `/contact`.

**Services (`/services`):** hero; six alternating image/text sections with anchor ids `web-design`, `social-media`, `digital-marketing`, `content-writing`, `video-production`, `seo`, each with description + feature bullet list; "Our Process" 4 steps (Discovery, Strategy, Implementation, Optimization); CTA "Ready to Get Started?".

**Portfolio (`/portfolio`):** hero "Our Portfolio"; grid of 6 projects (title, category, image, overlay); "Trusted by Leading Brands" logo strip; CTA "Ready to Start Your Project?". Make projects data-driven (CMS or JSON/DB) with a detail page `/portfolio/[slug]`.

**About (`/about`):** "About MB Media House" story + image; Our Values (Innovation, Excellence, Integrity, Collaboration, Results-Driven, Adaptability); Meet Our Team (photo, name, role); "Why Choose MB Media House?"; CTA "Ready to Work With Us?".

**Contact (`/contact`):** form (name, email, phone, subject, message); contact info: phone +44 7379 966855, email hello@mbmediahouse.co.uk, address (use the REAL address — placeholder currently "123 Media Street, London, UK"), hours Mon–Fri 9:00–18:00, Sat–Sun closed; social buttons with REAL working links; FAQ accordion (e.g. pricing, timelines, reporting/KPIs); CTA.

**Instagram (`/instagram`):** full feed grid of the account `@mb.mediahouse`.

**Footer:** logo + short blurb, social icons (Facebook `https://www.facebook.com/profile.php?id=61572211623969`, Instagram `https://www.instagram.com/mb.mediahouse`, plus LinkedIn/X only if real accounts exist), Quick Links, Services links, Contact info, © year, links to Privacy Policy, Cookie Policy, Terms.

**Language:** the live site is served under `/en`. Implement i18n routing (`/en`, and `/tr` as a second language if wanted) with `next-intl`; all copy in message files.

### 4. Back end (must actually work)
- **Contact form API** (`POST /api/contact`): zod validation, honeypot + rate limiting (and Cloudflare Turnstile / reCAPTCHA), send email to hello@mbmediahouse.co.uk via Resend/Nodemailer, send auto-reply to the sender, store the lead in a database (Postgres/Supabase/Prisma), show success/error toasts. NO fake `setTimeout` submissions.
- **Instagram feed:** Instagram Graph API via `GET /api/instagram?limit=n` with ISR caching (revalidate ~1h), automatic long-lived token refresh via a Vercel cron (`/api/instagram/refresh-token`, every ~50 days), graceful fallback if env vars are missing. Env: `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_APP_SECRET`, `INSTAGRAM_USER_ID`.
- **Admin (optional but preferred):** password-protected `/admin` to manage portfolio projects, testimonials, and view contact leads.
- Env vars via `.env.local` + `.env.example`; no secrets in the repo.

### 5. SEO, legal, performance
- Per-page `metadata` (title/description/OpenGraph/Twitter), `sitemap.xml`, `robots.txt`, canonical + hreflang, JSON-LD `LocalBusiness`/`Organization`
- Privacy Policy, Cookie Policy + cookie consent banner (UK GDPR/PECR), Terms
- Google Analytics 4 loaded only after consent
- `next/image` optimization, Lighthouse ≥ 90, accessible (aria labels, alt text, keyboard nav)
- Custom 404 page

### 6. Content rules
- Do NOT invent clients, testimonials or statistics (e.g. "200% increase in leads"). Use clearly marked placeholders or leave sections hidden until real content is supplied.
- Use my own photos/logo if provided, otherwise neutral placeholders (not misleading stock presented as client work).

### 7. Deliverables
Working repo, README with setup/deploy steps, `.env.example`, seed data, and a short checklist of what I must supply (real address, real testimonials, real portfolio items, API keys, domain DNS).

---

## Notlar (agent'a değil, sana)
- Bu prompt depodaki mevcut kodun (`app/`, `components/`, `lib/instagram.ts`) birebir yapısından çıkarıldı; mevcut hatalar (sahte form, sahte yorumlar, `output: 'export'` ile Instagram API çakışması, SEO/yasal sayfa eksikleri) prompt'ta düzeltilmiş olarak istendi.
- Canlı site (`mbmediahouse.co.uk/en`) bu ortamdan görülemedi; canlıda farklı/ek içerik varsa prompt'a ekle.
