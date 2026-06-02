## Was im Upload steckt

Das ZIP `portfolio_clean_room_rebuild_v3_max` ist eine **Referenz-Codebase** (statisches HTML/CSS/JS + ein React-Template + Docs + Daten-JSONs). Es enthält keine fertigen TanStack-Komponenten zum Reinkopieren, sondern:

- `docs/LOVABLE_MASTER_PROMPT.md` – Designrichtung (warm off-white, editorial, pill nav, glass cards, parallax shapes), Seitenliste, Interaktionsliste, Home-Section-Reihenfolge
- `docs/IMPLEMENTATION_MAP.md`, `REPLACEMENT_CHECKLIST.md`, `SENSITIVE_CONTENT_BOUNDARY.md` – Struktur-Notizen, alles anonymisiert (`hello@example.com`, „Portfolio Studio")
- `css/tokens.css` + `base/layout/components/animations/responsive.css` – Token- und Komponenten-Stil
- `js/site.js` – Reveal-on-scroll, Parallax, Magnetic Buttons, Tilt-Cards, Ticker, Mobile-Drawer, Copy-Email
- `data/site-content.json`, `projects.json`, `testimonials.json`, `navigation.json` – Platzhalter-Content (12 Services, 6 Projekte, 4 Testimonials, Stack-Liste, FAQ)
- `react-template/` – minimaler Vite/React-Starter (nicht TanStack)

## Was bereits im Projekt steht (nicht überschreiben)

`src/lib/projects-data.ts` enthält **echte Projekte** (David Bowie / Warner Chappell × Yousician, Paul McCartney, Carpe Diem, How I Use AI, Monetization …) mit Videos, Galerien, Account-Tabellen. Routes existieren für `index`, `me`, `projects`, `projects.$projectId`, `services`, `process`, `contact`.

## Vorgehen

1. **Design-Tokens & Animationen übernehmen** aus `css/tokens.css` + `animations.css` → in `src/styles.css` als oklch-Tokens (bone `#f7efe3`, cream `#fff9ef`, ink `#201a16`, soft grain, rounded cards, motion keyframes). Reduced-motion-Guard beibehalten.
2. **Interaktionen** aus `js/site.js` als kleine React-Hooks/Components nachbauen, da das Original Vanilla-DOM ist:
   - `useRevealOnScroll` (IntersectionObserver)
   - `useParallaxShapes`
   - `MagneticButton`, `TiltCard` Komponenten
   - `CopyEmailButton` (gibt's evtl. schon — prüfen)
   - Mobile Drawer im Header
   - Scroll-Progress-Bar im `__root`
3. **Section-Reihenfolge auf Home** an Master-Prompt angleichen: Hero → capability ticker → About-Preview → Selected work → Services → Process → Stack → Testimonials → Contact banner → Footer. Echte Projektdaten aus `projects-data.ts` einspeisen, **keine Platzhalter-Projekte aus dem ZIP einsetzen**.
4. **Services-/Process-Seiten** mit dem strukturierten Content aus `data/site-content.json` anreichern (12 Service-Karten, FAQ, Stack-Liste) — als ergänzende Platzhalter dort wo aktuell generischer Text steht. Mit `placeholder`-Markierung wo nötig.
5. **Testimonials-Carousel** auf Home + Über-Seite, Quellen aus dem JSON (anonymisiert übernehmen).
6. **Sensitive content boundary respektieren**: Kontakt bleibt `hello@example.com`, keine fiktiven Namen/Logos. Echte Projektnamen (Bowie, McCartney) bleiben unangetastet, weil das deine echten Inhalte sind.
7. **Nicht verwendet**: das beiliegende `react-template/`, statische HTML-Dateien, SVG-Placeholder-Cover (wir haben echte Cover). Diese Dateien werden nicht ins Repo kopiert.

## Offene Frage

Bevor ich anfange: Möchtest du, dass ich primär **(A) nur Design-System + Motion** aus dem Upload übernehme (Look & Feel) und alle echten Inhalte exakt so lasse, oder **(B) zusätzlich Services-, Process-, FAQ- und Testimonial-Texte** aus den JSON-Platzhaltern in die entsprechenden Seiten einsetze (als Lückenfüller, klar als placeholder markiert)?
