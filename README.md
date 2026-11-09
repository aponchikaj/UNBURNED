# UNBURNED

Static Next.js rebuild of https://unburned.live (originally a Shopify "Horizon" theme store).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Routes (same paths as the original)
- `/` home hero
- `/pages/about` about: hero, intro, 8-image slideshow, credits
- `/pages/partners` 12 partner logos
- `/policies/privacy-policy`
- `/collections/all` (the store currently has no products)

## Where things live
- `lib/site.ts` holds nav, social links, partners and slides
- `content/` holds scraped HTML (credits, privacy policy)
- `app/fonts/` holds the Inter 400/500/700 woff2 files served by the original site
- `public/images/` holds web-sized images (max 2560px)
- `scraped/originals/` holds full-resolution originals plus the raw Shopify JSON (products/pages/collections)

## Production / Vercel
- Static export (`output: "export"`), so every route is prerendered HTML.
- `vercel.json` sets security headers (HSTS, CSP, X-Frame-Options, and others) and caching for `/images`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Canonical URL: `NEXT_PUBLIC_SITE_URL` (see `.env.example`). If unset, Vercel's production URL is used.

### Deploy
1. Push to GitHub, then import the repo at vercel.com/new (framework: Next.js, no settings needed).
2. Every push to `main` deploys to production. Other branches get preview URLs.

### Custom domain
1. In the Vercel project, open Settings, then Domains, and add the domain. Apply the DNS records Vercel shows.
2. In Settings, then Environment Variables, set `NEXT_PUBLIC_SITE_URL=https://yourdomain` (Production), then redeploy.
