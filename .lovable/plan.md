# Plan — Custom in-page PDF reader (PDF.js)

Right now the CV section uses a plain `<iframe>` pointing at the PDF, which delegates to the browser's built-in PDF viewer. That looks foreign on iOS Safari (won't render inline at all), Firefox (its own dark UI), and Chrome (Google's grey chrome). Replacing it with **PDF.js** gives a real internal reader that matches your site.

## What changes

Replace the `<iframe>` inside `#cv` with a PDF.js-powered reader rendered into `<canvas>` elements, wrapped in custom UI styled with your existing tokens (Public Sans, accent `#1E5BFF`, rounded soft surfaces).

### Reader UI
```text
┌────────────────────────────────────────────────────┐
│  [◀ Prev]   Page  3 / 4   [Next ▶]   ⊖  100%  ⊕  ↗ │  ← toolbar
├────────────────────────────────────────────────────┤
│                                                    │
│           [ rendered PDF page canvas ]             │  ← scrollable page stack
│                                                    │
│           [ rendered PDF page canvas ]             │
│                                                    │
└────────────────────────────────────────────────────┘
```

- **Continuous scroll** of all pages (one canvas per page), like Apple's Preview — feels native to the site, not a popup.
- **Toolbar**: Prev / Next, page indicator (`3 / 4`), zoom −/+, "Open in new tab ↗" and "Download ↓" (existing buttons absorbed into the toolbar).
- **Active-page tracking** via `IntersectionObserver` — the page number updates as you scroll.
- **Keyboard**: ← / → page nav, `+` / `−` zoom (only when the reader is focused).
- **Loading state**: skeleton blocks while pages render.
- **Mobile**: pinch-zoom uses native gesture (canvas scales via CSS); toolbar collapses to icon-only.
- **Multiple CVs**: the existing `CVS` registry stays; switching tabs re-loads the document into the same reader.

### Technical approach
- Load `pdfjs-dist` via ESM CDN (`https://cdn.jsdelivr.net/npm/pdfjs-dist@4/+esm`) using a dynamic `import()` so the ~300KB library only loads when the user scrolls near `#cv` (IntersectionObserver trigger). No bundler changes needed since the site is plain HTML/CSS/JS.
- Render each page with `page.render({ canvasContext, viewport })` at devicePixelRatio for crispness.
- Re-render on zoom change (debounced) and on container resize (debounced via ResizeObserver).
- Text layer overlay (PDF.js `TextLayer`) so the CV stays **selectable + searchable** (Cmd/Ctrl-F via browser find works on the visible text).
- Graceful fallback: if PDF.js fails to load (offline, CSP), fall back to the current `<iframe>` + download link.

### Files to touch
- `public/index.html` + `src/site/index.html` — replace the `<iframe>` block inside `#cv` with the new toolbar + `<div data-cv-pages>` container; keep `[data-cv-open]` / `[data-cv-download]` (move them into the toolbar).
- `public/css/styles.css` — add `.cv-reader`, `.cv-reader-toolbar`, `.cv-page`, `.cv-page canvas`, `.cv-text-layer`, loading/skeleton styles, mobile collapse rules. Reuse `.cv-btn` variants.
- `public/js/main.js` — new self-contained IIFE that:
  1. Lazy-loads `pdfjs-dist` on `#cv` near-viewport
  2. Renders all pages of the active CV into the container
  3. Wires toolbar buttons, keyboard, IntersectionObserver page tracking
  4. Re-renders on tab switch (multi-CV future-proof)
- Bump cache-bust query to `v=20260611-cv2`.

## Out of scope
- Annotations, signing, printing UI (the browser's print still works).
- A library/sidebar for switching between CVs beyond the existing tab strip.
- Dark mode for the PDF (rendered as-is).

## Open question
None — going with continuous scroll + zoom + page indicator (the standard Preview-style reader). If you want a single-page-at-a-time mode instead, say so before I build and I'll swap the layout.
