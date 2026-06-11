## Goal
Make the "Social Media Growth" title and intro line on `/social-media-growth/` match the homepage hero typography (Public Sans for the headline, PT Serif italic for emphasis, same weights/sizing rhythm).

## Changes

### 1. CSS — `public/css/styles.css`
Add a scoped override so only this case page is affected, leaving other case pages (Viral Videos, etc.) untouched:

- `.case-page-original .case-original-title` on the SMG page → match `.hero h1` (font-weight 600, line-height 0.98, same clamp sizing scale).
- Add support for an `<em>` inside the title using PT Serif italic, matching `.hero h1 em` (mirrors the homepage hero look).
- `.case-page-original .case-original-lead` → align with the homepage lead paragraph style (Public Sans, lighter weight, muted color), keep centered alignment.

Because both SMG and Viral Videos share `.case-page-original`, scope the override with an additional selector on `body` via a new class (e.g. add `case-page-smg` to the SMG page `<body>`) so only SMG picks up the homepage-hero treatment.

### 2. HTML — `public/social-media-growth/index.html` and `src/site/social-media-growth/index.html`
- Add `case-page-smg` to the `<body>` class list.
- Optionally wrap the word "Growth" in `<em>Growth</em>` inside the H1 so the PT Serif italic emphasis (the hero's signature touch) appears.

No changes to Viral Videos or other pages.

## Files touched
- `public/css/styles.css`
- `public/social-media-growth/index.html`
- `src/site/social-media-growth/index.html`

## Open question
Should I italicize one word in the title (e.g. *Growth*) to mirror the hero's serif-italic accent, or keep the whole title in Public Sans with no italic word?