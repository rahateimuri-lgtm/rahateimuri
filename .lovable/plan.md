# Plan: Original-Static-Site übernehmen, Inhalte auf Raha umstellen

Du hast den vollständigen Framer-Export der bestehenden Rishani-Site hochgeladen (HTML + `css/styles.css` 2667 Zeilen + `js/main.js` 486 Zeilen + alle Assets + alle Projekt-Unterseiten). Der aktuelle Repo-Stand ist ein React/TanStack-Nachbau — den lasse ich für diese Aufgabe komplett beiseite, weil dein expliziter Wunsch ist: „HTML/CSS/JS-Struktur 1:1, keine neue Komponentenstruktur".

## Vorgehen

### 1. Static Site als Quelle einbinden
- Inhalt von `site.zip` (außer `__MACOSX`, `.local-server.pid`, `404/`) nach `public/` kopieren:
  - `public/index.html`, `public/404.html`, `public/favicon.svg`
  - `public/css/styles.css`, `public/js/main.js`
  - `public/assets/*` (alle Shapes, Service-Icons, Avatars, Stack-Logos, Project-Cover, profile.png)
  - alle Unterseiten-Ordner (`projects-2/...`, `makler-vermittler-podcast/`, `impressum-datenschutzerklärung/` etc.) bleiben mit ihrer originalen URL-Struktur erhalten.
- Den TanStack-Start-React-Stack so anpassen, dass `/` und alle Unterpfade direkt das statische `public/index.html` bzw. die jeweiligen Unterseiten ausliefern: alle Seiten-Routen unter `src/routes/` (außer `__root.tsx` und `api/*`) löschen; `__root.tsx` und `src/routes/index.tsx` so reduzieren, dass sie nichts mehr rendern bzw. ein bloßes Redirect/Stub auf die statische HTML sind. Konkret: `src/routes/index.tsx` wird zu einem Loader, der per `throw redirect` bzw. `Response`-Re-Export die statische `public/index.html` ausliefert (TanStack Start serviert `public/` automatisch; das Problem ist nur die `/`-Kollision — daher zusätzlich `vite.config.ts` so anpassen, dass `appType: "mpa"` bzw. eine kleine Server-Route `src/routes/api/...` nicht nötig ist und stattdessen das `index.tsx` als reine 302-Weiterleitung auf `/index.html` dient). Ergebnis aus User-Sicht: identische Original-Site.
- Alle nicht mehr benötigten React-Komponenten/Routen (`src/components/TabNav.tsx`, `HeroShapes`, `SiteFooter`, `routes/services.tsx`, `routes/contact.tsx`, `routes/me.tsx`, `routes/process.tsx`, `routes/projects.*.tsx`, `lib/projects-data.ts`, `assets/*.asset.json`) werden entfernt, damit der Build sauber bleibt.

### 2. Inhalte Rishani → Raha
Direkt in den kopierten HTML-Dateien (und nur dort) ersetzen, CSS/JS bleiben unangefasst:

| Original | Neu |
|---|---|
| `Rishani Jeyaseelan` | `[RAHA FULL NAME]` |
| `Rishani` (Standalone) | `Raha` |
| Headline-Rolle | `[RAHA ROLE / POSITIONING]` |
| About-Absätze | `[SHORT RAHA INTRODUCTION]`, `[RAHA SPECIALIZATION AND VALUE PROPOSITION]`, `[RAHA APPROACH / PHILOSOPHY]` |
| E-Mail | `[RAHA EMAIL]` |
| CV-Link `href` + Label | `[RAHA CV LINK]` |
| LinkedIn/Instagram/TikTok URLs | `[RAHA LINKEDIN URL]` / `[RAHA INSTAGRAM URL]` / `[RAHA TIKTOK URL]` |
| Services 01–10 Titel/Kurz/Detail | `[RAHA SERVICE 0X TITLE]` / `[… SHORT DESCRIPTION]` / `[… DETAIL DESCRIPTION]` |
| Projekte (Cards + Detailseiten) | `[PROJECT 0X TITLE]`, `[… CATEGORY]`, `[… DESCRIPTION]`, `[… CASE STUDY COPY]`; Bilder bleiben als Original-Asset als visueller Platzhalter |
| Testimonials | `[CLIENT NAME]`, `[CLIENT ROLE / COMPANY]`, `[CLIENT QUOTE]` |
| SEO `<title>`, `<meta description>`, `og:*`, `twitter:*` | Raha-Versionen mit Platzhaltern, wo nötig |
| `alt`-Texte | sinngemäß auf Raha umgeschrieben oder als `[… ALT TEXT]` |

Ersetzungen passieren pro Datei manuell überprüft (kein blindes sed), damit keine sichtbaren Framer-/Template-/Generator-/Demo-Hinweise zurückbleiben (`<meta name="generator">`, Framer-Badges, „Made with"-Footer etc. werden entfernt).

### 3. Services-Section
Bleibt technisch unverändert (Sticky-Stage, große blasse 01–10, scroll-getriggerter Nummernwechsel, Smooth Entry/Exit liegen alle in `css/styles.css` + `js/main.js`). Nur die Text-Slots werden auf die Raha-Platzhalter 01–10 gesetzt. Keine Dopplungen, keine zusätzliche Liste daneben.

### 4. Projekt-Unterseiten
Alle vorhandenen Detail-Ordner bleiben mit identischen Slugs erhalten und werden inhaltlich auf Platzhalter gesetzt. Falls einzelne Slugs zu konkret an alte Projekte gebunden sind, bleiben Pfad+Layout 1:1 — nur Texte/SEO werden ausgetauscht.

### 5. QA nach Umsetzung
- Build läuft fehlerfrei.
- Browser-Preview: `/` lädt die Original-Optik, Console ohne Errors, alle Assets vorhanden (Network 200).
- Viewports prüfen: 390×667, 393×852, 768×1024, 1280×720, 1280×900 — kein horizontaler Overflow, Services-Texte lesbar, Entry/Exit + verzögerter Nummernwechsel funktionieren.
- Suche nach Rest-Tokens: keine Treffer mehr auf `Rishani`, `Jeyaseelan`, `framer`, `lovable`, `Made in Framer`, alte E-Mail-Domain.

## Was NICHT passiert
- Kein neues Design, kein Re-Layout, keine neuen Animationen.
- Keine neuen Libraries.
- Keine erfundenen Raha-Daten — fehlende Infos bleiben sichtbare `[PLATZHALTER]`.
- Keine Änderungen an `css/styles.css` oder `js/main.js`.

## Technischer Hinweis
Das aktuelle Projekt ist als TanStack-Start-React-App angelegt; die Original-Site ist statisches HTML. Damit die Original-Site exakt 1:1 funktioniert, wird sie unter `public/` ausgeliefert und die React-Routen werden auf einen einzigen Redirect (`/` → `/index.html`) reduziert. Das ist die minimalste Änderung, die deinem Wunsch „1:1 dieselbe Seite" gerecht wird, ohne die Datei-/Klassen-/Animation-Struktur des Originals anzufassen.

Sag Bescheid wenn ich loslegen soll — oder ob du die Original-Site lieber in einem komplett frischen, leeren Repo (ohne TanStack-Start-Wrapper) haben willst.
