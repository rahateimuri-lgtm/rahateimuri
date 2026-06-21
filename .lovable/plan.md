## Goal
Tone down the giant "About me" heading and clean up the About slides so they (a) blend into the page palette instead of floating white-on-cream, and (b) only show one card at a time on desktop instead of the neighboring card peeking in.

## Changes — `public/css/styles.css` (and mirror to `src/site/index.html` via the existing build mirror)

### 1. Smaller "About me" heading
`.about-heading`
- font-size: `clamp(36px, 4.2vw, 56px)` (was `clamp(54px, 8vw, 96px)`)

Mobile override `@media (max-width: 720px)`
- `.about-heading { font-size: clamp(32px, 9vw, 44px); }`

### 2. Make the slide card match the page palette
`.about-slide`
- Remove the near-white 18px border (`border: 18px solid rgba(247,245,255,0.85)`) — replace with `border: 1px solid var(--line)` so it sits on bone/cream cleanly.
- Background: `var(--cream)` instead of `rgba(255,255,255,0.95)` so it blends with the warm editorial palette used elsewhere.
- Keep `box-shadow: var(--shadow)` but soften with a subtler shadow if it still looks heavy.
- Reduce `border-radius` to `28px` (smaller than 40 now that the chunky border is gone).

Mobile override: drop the `border-width: 12px` line — single 1px border is fine at all sizes; keep the smaller padding.

### 3. Stop the second card from peeking in on wide screens
Currently `.about-track` is full-bleed (`margin-inline: calc(50% - 50vw)`) and each `.about-slide` is `flex: 0 0 min(92vw, 1080px)`, so on screens >~1175px the next slide is visible to the right.

- `.about-track`: remove `margin-inline: calc(50% - 50vw)` so the track is constrained to the section container.
- `.about-track`: change `scroll-padding-inline` and `padding` to a simple `padding: 8px 0 36px`.
- `.about-slide`: change basis to `flex: 0 0 100%` so exactly one card fills the visible track at any width. Cap visual width via `max-width: 1080px; margin-inline: auto;` inside if needed.

This keeps the swipe/scroll-snap behavior identical (still 3 chapters, dots still work) but the desktop view shows one card cleanly with no neighbor bleed.

## Out of scope
- No JS changes (`public/js/main.js` slider logic is unaffected).
- No changes to Projects section.
- No changes to dots (already shrunk last turn).
