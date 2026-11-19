# onlinepropfirm.com (starter)
Setup: `npm install && npm run dev`, then open http://localhost:3000. Deploy: push to Vercel (zero config).
Add a firm: add an object to `data/firms.ts` (a page at /reviews/<slug> is generated). Undefined fields are hidden.
Add a discount: edit `data/discounts.ts`. Replace every `[PLACEHOLDER]` (affiliate URLs, social links, dates, codes).
Logo: replace `components/Logo.tsx` with your uploaded PNG (public/logo.png).
Round 3 added: sitemap.xml, robots.txt, consent banner + analytics (opt-in; set NEXT_PUBLIC_PLAUSIBLE_DOMAIN or NEXT_PUBLIC_GA_ID), Organization and BreadcrumbList JSON-LD, home Latest Videos (data/videos.ts) and Featured Blog Posts. Optional `videoSummary` field on firms and posts shows a transcript/summary under a video. Copy .env.example to .env.local.

## Added in round 2
- Env vars (.env.local): `RESEND_API_KEY`, `CONTACT_FROM` (a sender verified in Resend, e.g. "Online Prop Firm <noreply@onlinepropfirm.com>"). The rate limit is in-memory; on Vercel swap in KV/Upstash for a shared limit.
- New blog post: add `content/blog/<slug>.mdx` with frontmatter (title, date as YYYY-MM-DD in quotes, dateLabel, author, category, excerpt, optional youtubeId/image). `##` headings feed the table of contents.
- News: edit `data/news.json` (add a week object; the newest week starting on or before today shows on top).
- Legal text lives in `data/legal.ts`. Run `npm install` again for the new dependencies.
