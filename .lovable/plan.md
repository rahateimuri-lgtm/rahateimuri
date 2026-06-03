## Ziel
Die hochgeladene statische Site (`site-2.zip` / `site.zip`) 1:1 als Basis verwenden, alle personenbezogenen Inhalte von Rishani durch Raha-Platzhalter ersetzen, Struktur/CSS/JS/Animationen unverändert lassen.

## Schritte

1. **Archiv prüfen & nach `public/` kopieren**
   - `/mnt/user-uploads/site-2.zip` nach `/tmp/site/` entpacken
   - Sicherstellen: kein `.git`, kein `__MACOSX`
   - Inhalt nach `public/` spiegeln: `index.html`, `404.html`, `favicon.svg`, `css/`, `js/`, `assets/`, alle Unterseiten-Ordner (projects-2/, makler-vermittler-podcast/, impressum-datenschutzerklaerung/ etc.)

2. **React-Layer minimieren**
   - Alle Custom-Routes/Komponenten entfernen, die mit der alten Hero/Services/Projects-Version zu tun haben (`TabNav.tsx`, `HeroShapes*`, `SiteFooter`, `services.tsx`, `contact.tsx`, `me.tsx`, `process.tsx`, `projects.*.tsx`, `projects-data.ts`, `assets/*.asset.json`)
   - `src/routes/index.tsx`: liefert die statische `public/index.html` aus (Redirect via `<meta http-equiv="refresh">` oder server route `GET /` → HTML)
   - `src/routes/$.tsx` Catch-all → 404 der statischen Seite
   - `__root.tsx` bleibt minimal (kein eigenes Layout über die HTML-Datei)

3. **Inhaltliche Platzhalter in HTML** (nur HTML, CSS/JS unberührt)
   - `Rishani Jeyaseelan` → `[RAHA FULL NAME]`
   - `Rishani` → `Raha`
   - Headline/Role → `[RAHA ROLE / POSITIONING]`
   - About-Texte → `[SHORT RAHA INTRODUCTION]`, `[RAHA SPECIALIZATION]`, `[RAHA APPROACH]`
   - E-Mail → `[RAHA EMAIL]`, CV-Link → `[RAHA CV LINK]`
   - Socials → `[RAHA LINKEDIN URL]`, `[RAHA INSTAGRAM URL]`, `[RAHA TIKTOK URL]`
   - Services 01–10 → `[RAHA SERVICE 0X TITLE/SHORT/DETAIL]`
   - Projects → `[PROJECT 0X TITLE/CATEGORY/DESCRIPTION/CASE STUDY COPY]` (Bilder bleiben als visuelle Platzhalter)
   - Testimonials → `[CLIENT NAME/ROLE/QUOTE]`
   - SEO-Meta → Raha-Versionen mit Platzhaltern
   - Framer/Template-Hinweise entfernen

4. **Services-Sektion**: technisch unverändert (Sticky-Stage, 01–10, Scroll-Number-Swap aus `css/styles.css` + `js/main.js`) — nur Text-Slots ersetzen

5. **QA**
   - Build error-free
   - Console clean, alle Assets 200
   - Viewports 390×667 / 393×852 / 768×1024 / 1280×720 / 1280×900: kein H-Scroll, Services lesbar, Entry/Exit + Nummern-Delay funktional
   - Keine verbliebenen `Rishani`-Tokens, keine echten Mails/CV-Links

## Technische Notiz
Das Projekt ist TanStack Start. Die statische Site wird aus `public/` ausgeliefert; die React-Routen werden auf einen minimalen Passthrough für `/` und Unterseiten reduziert, damit Original-Datei-/Klassen-/Animations-Struktur unverändert greift.
