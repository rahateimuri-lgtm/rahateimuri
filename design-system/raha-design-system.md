# Raha Teimuri — Design System

**"Sticker Editorial"** · a tasteful-loud Y2K / retro-web system for a Gen-Z social & creative lead.
Palette **locked: Cobalt**. Built to drop straight into the Astro + Tailwind build (see `raha-portfolio-v2-prompt.md` §3).

> The personality: a restrained editorial grid that keeps doing something unexpected — chunky outlined "sticker" objects with hard offset shadows, kinetic display type, marquee tickers, and a sparkle cursor trail. Loud where it counts, clean everywhere else. Her own content is the texture; there are **no stock 3D primitives**.

---

## What's in this package

| File | What it is |
|---|---|
| `tokens.css` | **Source of truth.** All design tokens as CSS custom properties (locked palette, type scale, spacing, radii, borders, shadows, motion easings). Import first. |
| `motion.css` | Every `@keyframes` + the `prefers-reduced-motion` contract. |
| `cursor-trail.js` | The sparkle cursor trail (vanilla, reduced-motion aware, mouse-only). |
| `tailwind.config.cjs` | Bridges the tokens into Tailwind utility names so the two never drift. |
| `cursor-trail.js` | Drop-in trail; `<script src defer>`. |
| `components/ProjectCard.html` | Fully-built reference (grid + featured variants). Match exactly. |
| `components/VideoLoop.html` | Fully-built reference (lazy autoplay loop → links to source). |
| `style-guide.html` | **Open this in a browser** — a living visual reference of the whole system. |
| `raha-design-system.md` | This file — the full spec. |
| `README.md` | Quick start. |

---

## 1. Color — locked: Cobalt

One energetic accent (cobalt) on a warm paper base, with three supporting sticker fills used sparingly. Never spread all colors evenly — cobalt leads, the rest punctuate.

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F4F1E9` | Warm paper — page background |
| `--surface` | `#FFFFFF` | Cards, chips, nav |
| `--ink` | `#141318` | Near-black — text, **all borders & sticker outlines** |
| `--accent` | `#2C3BF5` | **Cobalt** — primary: links, key stats, active nav, CTA shadow |
| `--accent-2` | `#FF5A3C` | Coral — secondary stat / highlight |
| `--lime` | `#C8F23D` | Lime — hover fills, sparkles, ticker marks (`✦`) |
| `--pink` | `#FF8FB1` | Pink — tertiary sticker fill |

**Rules**
- Borders & outlines are **always `--ink`**, never a color.
- Body text is `--ink` on `--bg`/`--surface`. Don't set body text in an accent.
- Lime is the universal **hover** fill for neutral chips/links.
- Stat numbers rotate through `--accent` → `--accent-2` → `--ink` for rhythm.

---

## 2. Typography

Three families, loaded from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```
(In Astro, prefer Fontsource for self-hosting: `@fontsource-variable/bricolage-grotesque`, `@fontsource-variable/space-grotesk`, `@fontsource/space-mono`.)

| Family | Token | Use |
|---|---|---|
| **Bricolage Grotesque** | `--font-display` | Headings, the RAHA wordmark, stat numbers. Weights 700/800. Italic for the "Hi, I'm" eyebrow. |
| **Space Grotesk** | `--font-body` | Body copy & UI. 400–700. |
| **Space Mono** | `--font-mono` | Eyebrows, captions, chips, ticker text. UPPERCASE, `letter-spacing: .14em`. |

**Scale** (all fluid `clamp()`, see `tokens.css`)

| Token | Size | Where |
|---|---|---|
| `--t-wordmark` | 96 → 300px | Hero "RAHA" (800) |
| `--t-display` | 40 → 92px | Contact headline (800) |
| `--t-h2` | 40 → 76px | Section titles (800) |
| `--t-h2-alt` | 34 → 64px | Secondary sections (800) |
| `--t-stat` | 48 → 82px | Big stat numbers (800) |
| `--t-h3` | 20 → 30px | Card / service headings (700) |
| `--t-body-lg` | 18px | Lead paragraphs (1.6 leading) |
| `--t-body` | 16px | Body (1.55) |
| `--t-label` | 13px | Mono eyebrow — `.14em`, UPPER |

Headings: tight leading (`.8`–`1.0`). Body: generous (`1.5`–`1.6`). Use `text-wrap: balance` on headings, `pretty` on paragraphs.

---

## 3. Spacing, radii & borders

- **Sections:** `padding: 90px 6vw`. Content `max-width: 1180px`, centered.
- **Gaps:** chips `14px`, cards `24px`, two-column `48px`.
- **Radii:** pills/buttons/chips `999px`; large cards `24px`; grid cards `22px`; small badges/stat stickers `14px`.
- **Borders:** default `3px solid --ink`; small chips `2px`; ring shape `6px`.

---

## 4. Shadows — the sticker signature

Hard offset, **zero blur**, always in `--ink` (or `--accent` on ink buttons). This single move is what makes everything read as a "sticker."

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `4px 4px 0 var(--ink)` | chips, small stickers |
| `--shadow` | `5px 5px 0 var(--ink)` | cards, nav, buttons |
| `--shadow-lg` | `8px 8px 0 var(--ink)` | featured card, portrait |
| `--shadow-accent` | `5px 5px 0 var(--accent)` | dark/ink CTA buttons |

**Hover = "press in":** shadow shrinks to `2px 2px 0` **and** the element moves `translate(3px,3px)` — so the offset visually collapses. Transition `.12s ease`.

---

## 5. Sticker shapes — the motif (replaces v1's 3D primitives)

Flat geometric stickers: a fill, a `3px --ink` outline, a hard offset shadow. They drift ambiently behind the hero (and sparingly elsewhere). Never more than ~7 in view.

| Shape | How |
|---|---|
| Circle / dot | `border-radius:50%` + border + shadow |
| Ring | transparent center, `6px solid --accent` border |
| Pill | wide, `border-radius:999px` |
| Diamond | square, `transform:rotate(45deg)` |
| 5-point star | `clip-path: polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)` |
| 4-point sparkle | `clip-path: polygon(50% 0,58% 42%,100% 50%,58% 58%,50% 100%,42% 58%,0 50%,42% 42%)` |

Clip-path shapes can't take a CSS border — fake the outline with a stacked drop-shadow:
```css
filter: drop-shadow(2px 0 0 var(--ink)) drop-shadow(-2px 0 0 var(--ink))
        drop-shadow(0 2px 0 var(--ink)) drop-shadow(0 -2px 0 var(--ink));
```
Animate with `floatA/B/C`, `spinSlow` (star), `twinkle` (sparkle).

---

## 6. Motion system (intensity ≈ 60/100)

Carried by ambient drift + marquees + the cursor trail; punctuated by reveals and hover. Full catalogue + durations in `motion.css`.

- **Ambient:** floating stickers (`floatA/B/C`, 6–9s), `spinSlow` star (16s), `twinkle` sparkles (3–4s).
- **Hero wordmark:** `breathe` (6s gentle rotate). *(No opacity-based entrance — keep the wordmark visible at rest.)*
- **Marquees:** proof bar `marquee` 24s; footer ticker 18s **reverse**. Pause on hover via `.marquee:hover`.
- **Reveal:** add `popIn .6s var(--ease-pop) both` via IntersectionObserver when `[data-reveal]` enters view (one-shot, then unobserve). Elements rest visible — if JS is off, nothing hides.
- **Hover press:** buttons & cards, `.12s ease`.
- **Cursor trail:** `cursor-trail.js` — sparkle dots, mouse-only, auto-disabled under reduced-motion.
- **Reduced motion:** the `@media (prefers-reduced-motion: reduce)` block kills all of the above; video loops fall back to posters.

---

## 7. Component specs

> `ProjectCard` and `VideoLoop` ship as full reference code in `components/`. The rest are specs.

**Nav** — Fixed pill, centered top (`top:18px`). `--surface`, `3px --ink` border, `--shadow`. Active item = `--accent` fill, white text. Hover (inactive) = `--lime` fill. Wraps on mobile.

**Hero** — Two locked variants (the live `heroStyle` tweak):
- *Kinetic (default):* mono eyebrow pill → italic "Hi, I'm" → giant **RAHA** wordmark, letters cycling accent/pink/lime/coral fills with a `4px --ink` text-stroke and `breathe` wobble → positioning line with one word in a lime highlight sticker → a row of three rotated stat-sticker cards (€80K / 1M+ / 50M+) → two CTAs. Floating stickers behind.
- *Stacked (editorial):* left = eyebrow + big headline (one word stroked) + lead + CTAs; right = one bold `--accent` stat card that `bob`s. Calmer, fewer shapes.

**ProofBar** — Full-bleed `--accent` band, `3px --ink` top & bottom. Single-row `marquee` of the four proof stats in display 800, white, separated by lime `✦`. Duplicate the run for a seamless loop; pause on hover.

**StackGrid** — Flex-wrap of sticker pill chips: a colored dot (`2px --ink`) + tool name, `3px --ink`, `--shadow-sm`. Hover → `--lime` fill. ~10 tools that signal level (Adobe CC, Figma, CapCut, GA4, Meta Ads, Superscale, Magnific, Claude, ChatGPT, Notion).

**Services** — Native `<details>/<summary>` accordion on an `--ink` background, text `--bg`. Lime two-digit index + display-700 title in the summary; body in `--font-body` at `.85` opacity. Bottom border `2px --bg`. No JS, fully accessible.

**CVBlock** — Tilted "document" preview card (skeleton lines, an accent + a coral bar) with a `PDF · 1 page` badge, beside a headline + a **real `<a href="/raha-teimuri-cv.pdf" download>`** primary button and a secondary "Get in touch". Works with JS disabled.

**Contact** — Centered. Display headline with one stroked word. Sticker link pills: `mailto:rahateimuri@gmail.com`, `tel:+393895617848`, LinkedIn (`target=_blank rel=noopener`). All live, zero `#` dead links.

**Footer** — `--lime` marquee ticker (reverse) → giant **RAHA** wordmark → "↑ Back to top" → copyright.

---

## 8. How to use (Astro + Tailwind)

1. Copy `tokens.css` + `motion.css` into `src/styles/` and import both in your global stylesheet (tokens first). They are the canonical layer — **do not redefine these values anywhere else.**
2. Merge `tailwind.config.cjs` into your generated config so `bg-accent`, `shadow-sticker`, `font-display`, etc. resolve to the tokens.
3. Load the three font families (Fontsource recommended for self-hosting / Lighthouse).
4. Add `<script src="/js/cursor-trail.js" defer></script>` once, site-wide.
5. Build sections to the specs above; lift `ProjectCard.html` / `VideoLoop.html` verbatim.
6. Keep `prefers-reduced-motion` honored and every image `alt`'d (§9 of the build prompt).

## 9. Do / Don't

**Do** — lead with cobalt; keep outlines `--ink`; use hard zero-blur shadows; let her real content be the imagery; keep ≤7 floating stickers; respect reduced motion.

**Don't** — reintroduce stock 3D blobs; add a second loud accent; use blurred/soft shadows; put body text in an accent color; animate the wordmark's opacity (keep it visible at rest); spread all four fills evenly.
