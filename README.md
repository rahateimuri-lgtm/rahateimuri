# Raha Teimuri Portfolio

Fast, static portfolio for **Raha Teimuri**, Social Media Lead. Built with Astro + Tailwind, deployed on Vercel.

Proof-first, video-native: every case study plays on the page. Design follows the locked **"Sticker Editorial"** system in [`design-system/`](./design-system/) (cobalt on warm paper, hard zero-blur offset shadows, Bricolage Grotesque / Space Grotesk / Space Mono).

## Stack

- **Astro** (static output) · content collections for case studies (MDX)
- **Tailwind v4** bridged to the design-system tokens
- Self-hosted fonts, optimized images (`astro:assets` → webp), lazy muted video loops
- Sitemap, JSON-LD `Person`, OG/Twitter cards, `prefers-reduced-motion` honored

Lighthouse (mobile): Performance ≥95, Accessibility 100, Best-Practices 100, SEO 100.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # → dist/
pnpm preview
```

## Assets

Source assets are pulled from the v1 site and compressed locally (not committed as masters):

```bash
bash scripts/fetch-assets.sh     # images / videos / logos → public/
bash scripts/compress-video.sh   # raw masters → muted 720p loops + posters
```

The CV PDF lives at `public/raha-teimuri-cv.pdf`; its first page is rendered to `public/img/cv-preview.png`.

## Content

Case studies are MDX under `src/content/projects/`. Edit frontmatter (stat, summary, video, gallery, links) and body (Context → What I did → Result) without touching layout.

## Deploy

Pushes to `main` auto-deploy on Vercel (project `raha`). Build command `astro build`, output `dist`.
