# Plan — Hosted CV + embedded viewer + button system

You uploaded one CV (`Raha Teimuri — CV.pdf`). I'll wire it up now and design the system so additional CVs can drop in later without refactoring.

## 1. Host the PDF
- Upload `Raha_Teimuri_-_CV.pdf` to the Lovable CDN via `lovable-assets` → produces a stable URL like `/__l5e/assets-v1/<id>/Raha_Teimuri_-_CV.pdf`.
- Store a small registry in `public/js/main.js`:
  ```js
  const CVS = [
    { id: 'main', label: 'CV', file: '<cdn-url>' }
    // future: { id: 'design', label: 'CV — Design', file: '...' }
  ];
  ```
- When more CVs are added later, the UI auto-switches from single button → tabbed selector.

## 2. New `#cv` section (embedded viewer)
- Add a dedicated section under About / before Contact:
  - Title: *Curriculum Vitae* (matches site's Public Sans + Instrument Serif italic emphasis on "Vitae")
  - One-line intro
  - **Tab strip** (hidden when only 1 CV) to switch CVs
  - **Embedded viewer**: `<iframe>` with the CV PDF, ~80vh tall, rounded border matching site tokens, lazy-loaded
  - Fallback note + link for browsers that block inline PDFs (iOS Safari)
- All existing CTAs (`floating-cta`, `inline-cta`, About card 3 pill) repoint from the Adobe Acrobat URL to `#cv` (smooth-scroll to the viewer) instead of opening external.

## 3. Fitting buttons (your ask)
Three button styles, each with a clear job — no duplication of intent:

| Placement | Label | Style | Action |
|---|---|---|---|
| About card 3 (primary pill, existing) | **Read my CV →** | Filled pill, accent | Scroll to `#cv` |
| Inside `#cv` viewer toolbar | **Open in new tab ↗** · **Download PDF ↓** | Two ghost buttons side by side | `target=_blank` / `download` attr |
| Floating cluster (bottom-right, existing) | **CV** · **Contact** | Compact, translucent | Scroll to `#cv` / `#contact` |
| Inline CTAs after Projects + Stack (existing) | *"Curious about my background? → Read the CV"* | Quiet text-link | Scroll to `#cv` |
| Footer / Contact section (new) | **View CV** secondary, **Get in touch** primary | Paired buttons | Scroll to `#cv` / mailto |

All buttons reuse existing CSS tokens — no new color decisions. Labels are short, action-led, and each placement has a distinct visual weight so the page doesn't feel button-spammed.

## 4. Files to touch
- `lovable-assets create` → `src/assets/raha-cv.pdf.asset.json` (new pointer)
- `public/index.html` + `src/site/index.html` — add `<section id="cv">` with viewer + toolbar buttons; add paired buttons in Contact section; update all `href`s on existing CTAs to `#cv`
- `public/css/styles.css` — `.cv-section`, `.cv-tabs`, `.cv-viewer` (iframe wrapper), `.cv-toolbar` ghost button variant, `.contact-actions` paired button row
- `public/js/main.js` — `CVS` registry, render tabs, swap iframe `src` on tab click, smooth-scroll handlers
- Cache-bust CSS/JS query string

## 5. Open question
You mentioned *"multiple CVs in English"* but only one PDF is attached. I'll build the system to support N CVs and wire up this one now. **Upload the others when ready** (with a short label for each — e.g. "General", "Design", "Engineering") and I'll add them to the registry — no code restructure needed.
