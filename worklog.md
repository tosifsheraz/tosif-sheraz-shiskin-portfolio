# Worklog — Tosif Sheraz Portfolio (Next.js 16 + TS + Tailwind 4 + shadcn/ui)

---
Task ID: 1-4
Agent: Z.ai Code (orchestrator)
Task: Project audit, assets, design system, content data, core layout (layout/hero/navbar/footer/section-heading)

Work Log:
- Audited project: Next.js 16 App Router, Tailwind 4, full shadcn/ui set, framer-motion, next-themes, Prisma+SQLite (DATABASE_URL=file:/home/z/my-project/db/custom.db), sonner, zod, react-hook-form available.
- Verified 3 uploaded photos and copied to public/images: tosif-portrait.png (formal suit portrait), tosif-working.jpg (desk working shot), tosif-founder.png (navy blazer on black bg).
- Rewrote src/app/globals.css: warm stone light theme + warm charcoal dark theme, amber/gold primary (oklch), font tokens (--font-inter, --font-sora), utilities: .text-gradient-gold, .bg-grid-faint, .thin-scrollbar, .card-sheen. scroll-padding-top: 5.5rem for anchor offset.
- Created src/lib/portfolio.ts — SINGLE SOURCE OF TRUTH for all copy/data (profile, socials, stats, navLinks, about, company, services[7], projects[6] + projectCategories, freelancing, education, skillGroups, experience, educationHistory, inquiryTypes, contactChannels, footer). Strict no-invention policy: no fake testimonials/clients/metrics; LinkedIn handle is inferred (verify flag).
- src/app/layout.tsx: Inter + Sora (display) + Geist Mono fonts, full SEO metadata (title/description/keywords/OG/Twitter using profile.portrait), ThemeProvider (default dark), Toaster.
- Components created in src/components/portfolio/: section-heading.tsx (SectionHeading: eyebrow/title/description, motion fade-up, align left|center), navbar.tsx (fixed, blur on scroll, scroll-spy IntersectionObserver, ThemeToggle, Sheet mobile menu, skip-link), hero.tsx (#home: grid+glow backdrop, badge, name w/ gold gradient, headline/intro, 2 CTAs, socials, location, portrait w/ offset frame + 2 floating cards, 4-stat stats band), footer.tsx (mt-auto sticky-bottom compliant, brand/explore/business columns, socials).

Stage Summary:
- DESIGN LANGUAGE (subagents MUST follow): shadcn tokens only (bg-card, text-muted-foreground, border, bg-primary/text-primary-foreground, text-primary accents). font-display for headings. Sections: py-20 md:py-28, container `mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8`. Motion: initial {opacity:0,y:24}, whileInView, viewport {once:true, margin:"-80px"}, duration .55. Icons: lucide-react, gold accent = text-primary. Cards: rounded-2xl border bg-card p-6, hover:border-primary/40 transition. NO emojis, NO blue/indigo, NO fake content. Dark-mode-first design that must also look good in light mode.
- All content data lives in src/lib/portfolio.ts — import from there, do NOT hardcode copy.
- Page sections use ids: home, about, company, services, projects, freelancing, education, skills, experience, contact.
- Images: /images/tosif-portrait.png, /images/tosif-working.jpg, /images/tosif-founder.png (use next/image).
- Remaining: 5-a backend (contact), 5-b content sections, contact UI, page.tsx wiring, verification.

---
Task ID: 5-b
Agent: frontend-styling-expert
Task: 8 content sections (about, company, services, projects, freelancing, education, skills, experience)

Work Log:
- Read worklog 1-4 design language, portfolio.ts (full data audit), section-heading.tsx, hero.tsx, globals.css, ui/button.tsx (asChild), tsconfig (strict), and image dimensions (working 960x1280, founder 1145x1374, portrait 1024x1536).
- Verified lucide-react 0.525 exports before use: CheckCircle2/LineChart DO NOT exist in this version -> used CircleCheckBig and Compass instead; avoided LucideIcon type (not re-exported) in favor of `ComponentType<{ className?: string }>`.
- Created 8 client components in src/components/portfolio/, all importing copy/data from @/lib/portfolio (zero hardcoded content beyond spec-mandated section headings/labels/microcopy):
  - about.tsx (BANDED): lg:grid-cols-[0.9fr_1.1fr]; working shot in offset-frame card-sheen card + floating "On the job" chip; SectionHeading + 3 staggered paragraphs + 2x2 value cards (Hammer/Users/ShieldCheck/Globe).
  - company.tsx (plain): founder shot (black bg preserved, subtle border) with gold glow; heading w/ positioning description; "What I lead" CircleCheckBig list; company-services chip sub-card; primary CTA Button asChild -> company.website (target/_blank noopener) + legalName; italic transparencyNote.
  - services.tsx (plain): 7 cards (sm:2 lg:3), per-id icon map (Cloud/Container/Workflow/Wrench/Globe/Compass/GraduationCap), "The problem" label + value + 3-item Check deliverables + tag chips + "Best for" footer; badges: personal ? "Delivered personally" (bg-primary/10 text-primary) : "via Core Elite Experts" (bg-secondary).
  - projects.tsx (BANDED): useState<Category> filter chips from projectCategories (All default, aria-pressed); md:2 lg:3 grid with AnimatePresence mode="popLayout" + layout motion cards; category chip, summary, Challenge/Approach/Outcome DetailRows, User-icon role line, font-mono stack chips; centered projectsNote.
  - freelancing.tsx (plain): full-width card-sheen Fiverr featured card (badge from socials.find(label==="Fiverr"), fiverrTitle, fiverrAbout, CTA -> href); "What clients hire me for" 2-col checklist card; numbered 4-card "How I work" grid; platformNote line (Upwork).
  - education.tsx (BANDED): 4 focusArea cards (Rocket/Linkedin/Bot/Map) + rounded-3xl card-sheen community panel with eyebrow, title (word "ecosystem" via text-gradient-gold through a data-driven GoldWord splitter), 2x2 community points (Users/Mountain/Building2/HeartHandshake).
  - skills.tsx (plain): 6 skillGroups cards (Cloud/ServerCog/Briefcase/Handshake/GraduationCap/Languages), wrapped rounded-lg bg-muted/50 chips.
  - experience.tsx (BANDED): lg:grid-cols-[1.2fr_0.8fr]; semantic <ol> timeline (border-l-2 + pl-6, dots precisely centered at -left-[33px] on the 2px line), org + type badge + period chip + bullet points; right rail = educationHistory card, languages mini-card (profile.languages join " · "), gold-tinted "Want the full story?" CTA -> #contact.
- Motion: all sections use initial {opacity:0,y:24} / whileInView / viewport {once:true,margin:"-80px"} / duration .55 / ease [0.21,0.47,0.32,0.98] (typed as explicit tuple) with 0.06*i stagger (mod row length on grids).
- Verified: bun run lint -> clean (no findings project-wide); bun x tsc --noEmit -> zero errors under src/ (only pre-existing baseline errors in sandbox examples/ and skills/ dirs).

Stage Summary:
- Files created (exactly 8): src/components/portfolio/{about,company,services,projects,freelancing,education,skills,experience}.tsx. No other files touched (portfolio.ts, section-heading, hero, navbar, footer, layout, page, globals.css untouched).
- Anchors: about, company, services, projects, freelancing, education, skills, experience — match navLinks for scroll-spy.
- Data-shape notes: all expected fields existed in portfolio.ts; only gaps were the spec-anticipated missing eyebrow/title for services/projects/skills/experience headings (hardcoded per spec) and lucide naming drift (CheckCircle2->CircleCheckBig, LineChart->ChartLine/Compass). socials.find used for Fiverr with null-safe conditional render. platformNote imported (it is a top-level export, not freelancing.platformNote).
- Caveats for wiring agent (5-c/page.tsx): import named exports {About}, {Company}, {Services}, {Projects}, {Freelancing}, {Education}, {Skills}, {Experience} and render in navLinks order; services.tsx imports `services` as Service[] (mutable-annotated but as const data) — treat as readonly; projects filter chips render from projectCategories tuple.
- Lint: PASS. tsc: PASS for src/. Dark + light mode safe (tokens only, no blue/indigo, no emojis).

---
Task ID: 5-a
Agent: full-stack-developer
Task: Contact backend — Prisma ContactMessage model + /api/contact route

Work Log:
- Rewrote prisma/schema.prisma: removed scaffold User/Post models, kept generator/datasource blocks untouched, added single ContactMessage model (id cuid PK, name, email, inquiryType, message, read default false, createdAt default now()).
- Ran `bun run db:push` from /home/z/my-project — success ("Your database is now in sync... Done in 11ms", Prisma Client v6.19.2 regenerated). Verified via bun:sqlite that the ContactMessage table exists with all 7 columns (id TEXT PK, name, email, inquiryType, message TEXT NOT NULL, read BOOLEAN default false, createdAt DATETIME default CURRENT_TIMESTAMP); old User/Post tables no longer present.
- Created src/app/api/contact/route.ts (App Router route handler, `export const runtime = "nodejs"`): zod v4 schema (name trim/min2/max80, email trim/max120/.email(), inquiryType via z.enum(inquiryTypes) — works directly with the readonly `as const` tuple from portfolio.ts, no cast needed; message trim/min10/max2000), POST with safeParse → 400 { ok:false, error, issues: z.flattenError(...) } | 201 { ok:true, id, message } on db.contactMessage.create | 500 on unexpected DB error (wrapped in try/catch, logged via console.error); GET returns { ok:true, message:"Contact API operational" } 200; malformed JSON body → 400.
- In-memory rate limit: module-level Map<string, number[]> keyed by first hop of x-forwarded-for (fallback "unknown"), sliding 10-minute window, max 5 valid submissions; timestamps recorded only after validation passes (invalid attempts don't burn quota); 429 { ok:false, error:"Too many messages sent. Please try again in a few minutes." }; map self-prunes per check plus global sweep when size > 500.
- Verified against the running dev server (did not start/restart it): GET /api/contact → 200 health JSON, route compiled cleanly in dev log; POST invalid → 400 with per-field flattened issues; POST malformed JSON → 400; POST valid → 201 with cuid id; rate-limit live test: 5th valid POST in window → 429, 6th → 429.
- `bun run lint` — clean (no errors, no warnings). `bun x tsc --noEmit` — zero errors from my files; 4 PRE-EXISTING errors all in non-src scaffold dirs (examples/websocket/frontend.tsx + server.ts: missing socket.io type deps; skills/image-edit/scripts/image-edit.ts; skills/stock-analysis-skill/src/analyzer.ts).
- Deleted all smoke-test rows from ContactMessage after verification (table is empty, 0 rows) so the live demo starts clean. Note: the in-memory "unknown" rate bucket from my curl tests expires within 10 minutes and only affects keyless direct localhost calls; real browser traffic through Caddy carries x-forwarded-for and is unaffected.

Stage Summary:
- Backend complete: ContactMessage table live in db/custom.db; POST /api/contact persists contact form submissions; response contract for the contact form (agent 5-b / page wiring):
  - Success: HTTP 201 → { "ok": true, "id": "<cuid>", "message": "Message received — Tosif will get back to you soon." }
  - Validation error: HTTP 400 → { "ok": false, "error": "Please check the form fields.", "issues": { "formErrors": string[], "fieldErrors": { [field]: string[] | undefined } } } (fieldErrors keys: name, email, inquiryType, message)
  - Rate limited: HTTP 429 → { "ok": false, "error": "Too many messages sent. Please try again in a few minutes." }
  - Server error: HTTP 500 → { "ok": false, "error": "Something went wrong on our side. Please try LinkedIn or Fiverr instead." }
  - Malformed JSON: HTTP 400 → { "ok": false, "error": "Invalid request body. Expected JSON." }
- Frontend should POST JSON { name, email, inquiryType, message } (inquiryType must exactly match one of the 6 strings in inquiryTypes from @/lib/portfolio); check res.ok / body.ok and surface body.message on success, body.error on failure; per-field messages available at issues.fieldErrors.<field>[0].
- Nothing else modified: portfolio.ts, db.ts, components, page.tsx, layout.tsx, globals.css untouched.

---
Task ID: 6-10
Agent: Z.ai Code (orchestrator)
Task: Contact section UI, page wiring, SEO/JSON-LD, lint, browser verification, final report

Work Log:
- Built src/components/portfolio/contact.tsx: 2-col layout (info cards + profiles | form card), client-side validation mirroring API rules, character counter, POST /api/contact wiring per 5-a response contract, success panel + inline error/field errors, motion stagger.
- Wired src/app/page.tsx: Navbar, Hero, About, Company, Services, Projects, Freelancing, Education, Skills, Experience, Contact, Footer; Person JSON-LD (name, jobTitle, worksFor Core Elite Experts, alumniOf VU Pakistan, sameAs verified links).
- layout.tsx: added metadataBase (placeholder https://tosifsheraz.com — flagged for owner update at deployment).
- Fixed icon mismatches: CheckCircle2 → CircleCheckBig in contact.tsx; removed invalid FiverrIconPlaceholder import from hero.tsx.
- Fixed Radix a11y warning by adding sr-only SheetDescription to navbar mobile sheet.
- Polished Fiverr "fi." glyph contrast in hero/footer socials.
- Agent Browser verification (desktop 1440 + mobile 390): all sections render; scroll-spy highlights; project filters (Web→1, DevOps→2, All→6); theme toggle both directions; mobile sheet nav → #contact works; contact form golden path → POST 201 → success UI → SQLite row confirmed, test row purged afterward; client validation messages render; footer bottom == body height (sticky-bottom compliant, no gap, no overlap); zero horizontal overflow; zero console errors/page errors.
- bun run lint: clean. dev.log: no runtime errors.

Stage Summary:
- Site complete and browser-verified end-to-end. DB contact_messages table left EMPTY for production use.
- Owner input still needed: confirm LinkedIn profile URL (inferred), Upwork profile URL, public email, optional CV file, real testimonials, real project screenshots/links, final production domain for metadataBase.
