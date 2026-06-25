# Raha Teimuri — Design System ("Sticker Editorial")

A tasteful-loud **Y2K / retro-web** system. Palette **locked: Cobalt**.
Drops straight into the Astro + Tailwind build.

## Start here
1. **Open `style-guide.html` in a browser** — the living visual reference (palette, type, shapes, motion, components).
2. **Read `raha-design-system.md`** — the full spec (tokens, type scale, motion, every component).

## The files
- `tokens.css` — **source of truth.** All tokens as CSS variables. Import first, never redefine.
- `motion.css` — keyframes + the `prefers-reduced-motion` contract.
- `cursor-trail.js` — sparkle cursor trail (vanilla, reduced-motion aware). `<script src defer>`.
- `tailwind.config.cjs` — bridges tokens → Tailwind utilities so they never drift.
- `components/ProjectCard.html` — fully-built reference (grid + featured). Match exactly.
- `components/VideoLoop.html` — fully-built reference (lazy autoplay loop → links to source).

## Wire-up (30 seconds)
```html
<!-- 1. tokens first, then motion -->
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="motion.css">

<!-- 2. fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

<!-- 3. cursor trail, once site-wide -->
<script src="cursor-trail.js" defer></script>
```

## The one-line summary
Cobalt accent on warm paper · chunky `--ink` outlines · **hard zero-blur offset shadows** (the "sticker" move) · Bricolage Grotesque display + Space Grotesk body + Space Mono labels · her real content is the imagery, **no stock 3D primitives**.

— Locked palette: `--accent #2C3BF5`. Swap by editing the four color tokens at the top of `tokens.css`; everything inherits.
