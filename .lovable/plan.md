## 1. About Me → scroll-driven instead of timed

Today the three "statement-card" texts auto-rotate every 4.6s. I'll switch this to a scroll-driven stage, similar in feel to the sticky What-I-Do block.

**Behavior**
- Wrap the About section in a tall "scroll stage" (≈300vh tall) with a sticky inner frame pinned to the viewport.
- As the user scrolls through that range, progress (0 → 1) is divided into 3 equal segments → activates card 1, 2, 3.
- A small vertical progress indicator (3 dots/ticks on the side) shows which "chapter" is active and is clickable to jump.
- The "Read my CV" pill stays anchored to card 3 (last chapter), as today.
- Respect `prefers-reduced-motion`: fall back to all three cards stacked vertically (no pinning), no auto-rotation.
- Mobile (<720px): no pinning; cards stack and each fades in via IntersectionObserver. CV pill stays under the last one.

**Files**
- `public/css/styles.css` + mirror in `src/site/...` if needed — add `.statement-stage--scroll` + sticky/track styles + side progress dots.
- `public/js/main.js` — remove the `setInterval` rotation; add a scroll handler (rAF-throttled) that reads the stage's bounding rect and toggles `.active` on the matching card and progress dot. Add click handlers on dots to scroll to that segment.
- `public/index.html` + `src/site/index.html` — add the wrapper element + 3 progress dots markup; no copy changes.

## 2. Recurring CV + Contact CTAs (subtle, landing-page style)

Goal: keep the CV and Contact actions reachable without feeling pushy. Two layers:

**A. Persistent floating action cluster (bottom-right)**
- A small pill cluster, appears after the user scrolls past the hero, hides again near the footer (where the real contact block lives).
- Two compact buttons: `CV ↗` (opens the existing Adobe CV link in a new tab) and `Contact` (smooth-scroll to `#contact`).
- Translucent background, low-contrast border, slight backdrop blur — matches the existing `nav-pill` aesthetic so it doesn't shout.
- Hidden on `prefers-reduced-motion` users only for the slide-in animation, not for visibility.
- Hidden on case-study pages (only shown on the main `index.html`) to keep deeper pages clean.

**B. Inline section-end CTA strips (1 line, no card)**
Light, text-link style "→" CTAs placed at natural breakpoints, NOT as big buttons:
- After **Projects** section: `Want the full story? Read my CV ↗ · or get in touch →`
- After **Stack** section: `Curious how I'd apply this? Let's talk →`
- The existing CV pill inside the About card 3 stays as-is (primary CV entry point).
- The existing Contact section in the footer stays unchanged (final destination).

This gives 1 always-visible floating reminder + 2 inline nudges + the original in-content placements — enough repetition for a landing-page feel without being aggressive.

**Files**
- `public/css/styles.css` — new `.floating-actions`, `.inline-cta` styles (tokens from existing palette, no new colors).
- `public/index.html` + `src/site/index.html` — add the floating cluster near `</main>` and two inline CTA lines after the Projects and Stack sections.
- `public/js/main.js` — small visibility controller: show floating cluster when `window.scrollY > hero.bottom`, hide when contact section is in view (IntersectionObserver).

## Technical notes
- All scroll logic uses `requestAnimationFrame` and `IntersectionObserver`; no layout-thrash.
- No new dependencies, no JS framework added — pure vanilla, matching the existing site.
- The CV link reused everywhere: the same Adobe URL already in About card 3.
- Both `public/` and `src/site/` copies updated in lockstep (mirrored as in prior changes).

## Open question
For the floating cluster, do you want:
- (a) **Both** buttons (CV + Contact) side by side, or
- (b) **Just Contact** floating, and keep CV only inline (less repetition, cleaner)?

I'll default to (a) unless you say otherwise.
