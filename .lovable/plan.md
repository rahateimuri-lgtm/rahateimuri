
# Plan — Make "About Me" a swipeable slider (like Projects)

## Why
Today `#about` uses a scroll-pinned chapter pattern: `min-height: 320vh` + `position: sticky` + dots that advance as you scroll. That's where the "extra white room" comes from — the section reserves 3+ viewport heights of scroll so the three statement cards can cross-fade. You want it to behave like `#projects`: a compact, swipeable slider with prev/next buttons, no extra vertical real estate.

## What changes

### Markup (`public/index.html` + `src/site/index.html`)
Replace the `<section class="about about--scroll">…</section>` block with a slider styled to match `.case-slider`:

```text
┌────────────────────────────────────────────────┐
│  [‹] [›]                            About me   │  ← head row (controls left, label right)
│                                     Swipe →    │
├────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐  │
│  │  Chapter 1 statement card                │  │  ← horizontal track, snap, swipe/drag
│  └──────────────────────────────────────────┘  │
│           ● ● ●                                │  ← dots become page indicator
└────────────────────────────────────────────────┘
```

- New container: `<section class="about about--slider section-pad" id="about">` with a `.case-slider`-style head (Prev / Next buttons + heading + "Swipe" hint), a horizontal `.about-track` of three `<article class="about-slide">` cards (same copy as today, including the "Read my CV →" pill on card 3), and the existing dots repurposed as a page indicator below the track.
- Drop `.about-sticky`, `.statement-stage`, `.statement-track`, `.statement-card`, and the decorative `about-purple-cube` / `about-blue-pyramid` shapes (they were positioned against the sticky stage; not used elsewhere on this section).

### CSS (`public/css/styles.css`)
- Remove the `.about.about--scroll`, `.about--scroll .about-sticky`, and related rules around lines 3544–3607 (including the mobile override block).
- Add `.about.about--slider` rules mirroring `.case-slider`: flex column, normal section padding (no `min-height: 320vh`, no sticky). Horizontal `.about-track` with `display: flex; gap; scroll-snap-type: x mandatory; overflow-x: auto; scrollbar hidden`. Each `.about-slide` is `flex: 0 0 100%` (one card per view), `scroll-snap-align: start`, with the existing card visual treatment (rounded surface, padding, typography) preserved from `.statement-card`.
- Keep `.about-dots` but restyle as a centered page indicator under the track; active dot reflects the current slide.
- Mobile: same horizontal-swipe pattern (no stacking); just smaller padding. This removes the vertical-stack fallback that lived in the `@media (max-width: 720px)` block.

### JS (`public/js/main.js`)
- Remove the scroll-driven chapter logic that watches `.about-sticky` scroll progress and toggles `.statement-card.active` + `.about-dots button.active`.
- Add a small slider controller (mirrors the projects `[data-case-slider]` controller): listen for click on `[data-about-prev]` / `[data-about-next]`, scroll the track by one slide width, update the active dot via `IntersectionObserver` on the slides, allow click on a dot to jump to that slide. Native touch-swipe is free via `overflow-x: auto` + scroll-snap.
- Keyboard: ← / → when the slider is focused (matches projects slider behavior).
- Bump cache-bust query to `v=20260614-about1` on the CSS/JS `<link>` / `<script>` tags.

## Out of scope
- No copy changes to the three chapters.
- No changes to the Projects slider.
- The decorative cube/pyramid PNGs stay in `/assets/` (not deleted) in case they're reused elsewhere; just unreferenced here.

## Open question
Should the slider auto-advance every few seconds, or stay manual-only (swipe / arrows / dots)? Projects is manual-only — I'll match that unless you say otherwise.
