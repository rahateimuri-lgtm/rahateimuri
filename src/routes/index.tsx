import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TabNav } from "@/components/TabNav";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishani Jeyaseelan — Social Media Strategy (placeholder)" },
      { name: "description", content: "Clean-room portfolio placeholder: social media strategy, content creation and visual design." },
      { property: "og:title", content: "Rishani Jeyaseelan — Social Media Strategy" },
      { property: "og:description", content: "Placeholder portfolio site — social media, video editing, visual design." },
    ],
  }),
  component: HomePage,
});

/* ─────────────────────────── DATA (placeholders) ─────────────────────────── */

const NAME = "Rishani Jeyaseelan"; // placeholder

const TESTIMONIALS = [
  {
    quote:
      "Working together felt effortless. The strategy made our content sharper and our weekly cadence finally feels sustainable.",
    name: "Placeholder Name A",
    role: "Founder · Placeholder Studio",
  },
  {
    quote:
      "Real taste, real systems. The new social presence reads consistent without losing the personal voice we wanted.",
    name: "Placeholder Name B",
    role: "Marketing Lead · Placeholder Co.",
  },
  {
    quote:
      "Patient, organised, and quietly ambitious. The visuals and the strategy now feel like they belong to the same brand.",
    name: "Placeholder Name C",
    role: "Creative Director · Placeholder Agency",
  },
];

const STACK = [
  { name: "Framer", note: "Web design & motion" },
  { name: "Adobe Creative Cloud", note: "Ps · Pr · Ai · Ae" },
  { name: "Notion", note: "Content ops & calendars" },
  { name: "Canva", note: "Quick decks & templates" },
  { name: "Microsoft Office", note: "Docs · Sheets · Decks" },
  { name: "LinkedIn", note: "Strategy & engagement" },
  { name: "Instagram", note: "Reels · carousels · stories" },
  { name: "TikTok", note: "Short-form formats" },
  { name: "WordPress", note: "Publishing & SEO basics" },
  { name: "CapCut", note: "Mobile video editing" },
  { name: "DaVinci Resolve", note: "Color & finishing (placeholder)" },
  { name: "Buffer", note: "Scheduling (placeholder)" },
];

const SERVICES = [
  ["01", "Strategy & Content Planning"],
  ["02", "Content Creation"],
  ["03", "Posting & Scheduling"],
  ["04", "Community Management"],
  ["05", "Analytics & Optimization"],
  ["06", "Paid Social (Meta Ads)"],
  ["07", "Brand Identity Design"],
  ["08", "Long-Form Video Editing & Thumbnails"],
  ["09", "Website Design & Management"],
  ["10", "Visual Design"],
] as const;

const PROJECTS = [
  { t: "Community Event Hamburg", d: "Identity, signage and recap reel for a placeholder community meetup.", c: "#efd9c8" },
  { t: "LinkedIn Community Management & Engagement Strategy", d: "Voice, cadence and weekly engagement system for a placeholder B2B account.", c: "#dbe5d4" },
  { t: "Social Media Management & Content Creation", d: "End-to-end social ownership for a placeholder lifestyle brand.", c: "#f4d6cc" },
  { t: "Podcast Visual Branding & Thumbnail Design", d: "Cover art, thumbnail system and episode templates for a placeholder podcast.", c: "#e6dcf5" },
  { t: "Long-Form Video Editing for Exclusive Guests", d: "Pacing, color and graphics for a placeholder interview series.", c: "#fce6c4" },
  { t: "Short-Form Content & Performance Video Editing", d: "Hooks, captions and cut-downs for placeholder paid social tests.", c: "#d8e6ec" },
  { t: "Creative Teaservideo for New Podcast Format Launch", d: "Concept, script and edit for a launch teaser (placeholder).", c: "#f2e2d2" },
  { t: "Graphic Design", d: "Print and digital collateral for placeholder events and campaigns.", c: "#e8e2d4" },
  { t: "Short-Form Content (Reels & Carousels)", d: "Templates and recurring formats for a placeholder creator account.", c: "#f6dcd2" },
  { t: "UGC Video", d: "Casting, briefing and edit for placeholder UGC product spots.", c: "#e0dbcc" },
];

const USEFUL_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Behance", href: "#" },
];

/* ─────────────────────────── 3D SHAPES ─────────────────────────── */

function HeroShapes() {
  // 6 abstract shapes placed around the hero. Decorative only.
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orange pyramid */}
      <svg
        className="absolute top-[12%] right-[8%] w-[120px] md:w-[170px] float-shape"
        style={{ animationDelay: "0s" }}
        viewBox="0 0 100 100"
        data-parallax="0.05"
      >
        <defs>
          <linearGradient id="g-orange" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#ff8a5b" />
            <stop offset="1" stopColor="#c4452a" />
          </linearGradient>
        </defs>
        <polygon points="50,8 92,88 8,88" fill="url(#g-orange)" />
        <polygon points="50,8 92,88 50,72" fill="#000" opacity="0.18" />
      </svg>

      {/* Purple sphere */}
      <svg
        className="absolute top-[55%] right-[14%] w-[110px] md:w-[150px] float-shape"
        style={{ animationDelay: "1.2s" }}
        viewBox="0 0 100 100"
        data-parallax="-0.08"
      >
        <defs>
          <radialGradient id="g-purple" cx="35%" cy="30%" r="70%">
            <stop offset="0" stopColor="#d6c3ff" />
            <stop offset="0.6" stopColor="#7d5cd1" />
            <stop offset="1" stopColor="#3b2570" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#g-purple)" />
      </svg>

      {/* Blue cylinder */}
      <svg
        className="absolute top-[28%] left-[6%] w-[100px] md:w-[140px] float-shape"
        style={{ animationDelay: "0.6s" }}
        viewBox="0 0 100 120"
        data-parallax="0.06"
      >
        <defs>
          <linearGradient id="g-blue" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#3b6fc2" />
            <stop offset="0.5" stopColor="#7fb2ee" />
            <stop offset="1" stopColor="#2a4a85" />
          </linearGradient>
        </defs>
        <rect x="10" y="20" width="80" height="80" fill="url(#g-blue)" />
        <ellipse cx="50" cy="20" rx="40" ry="12" fill="#a9cef5" />
        <ellipse cx="50" cy="100" rx="40" ry="12" fill="#1f3a6b" />
      </svg>

      {/* Turquoise star */}
      <svg
        className="absolute bottom-[14%] left-[12%] w-[100px] md:w-[140px] float-shape"
        style={{ animationDelay: "1.8s" }}
        viewBox="0 0 100 100"
        data-parallax="-0.05"
      >
        <defs>
          <linearGradient id="g-turq" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#9ff0e3" />
            <stop offset="1" stopColor="#2aa39a" />
          </linearGradient>
        </defs>
        <polygon
          points="50,4 61,38 96,38 67,59 78,94 50,72 22,94 33,59 4,38 39,38"
          fill="url(#g-turq)"
        />
      </svg>

      {/* Green element (torus-ish) */}
      <svg
        className="absolute bottom-[28%] right-[40%] w-[90px] md:w-[120px] float-shape"
        style={{ animationDelay: "2.4s" }}
        viewBox="0 0 100 100"
        data-parallax="0.04"
      >
        <defs>
          <radialGradient id="g-green" cx="50%" cy="50%" r="50%">
            <stop offset="0.55" stopColor="transparent" />
            <stop offset="0.6" stopColor="#88c47c" />
            <stop offset="1" stopColor="#3e7a3a" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#g-green)" />
      </svg>

      {/* Yellow cube */}
      <svg
        className="absolute top-[6%] left-[38%] w-[80px] md:w-[110px] float-shape"
        style={{ animationDelay: "3s" }}
        viewBox="0 0 100 100"
        data-parallax="-0.06"
      >
        <polygon points="50,10 88,30 88,72 50,92 12,72 12,30" fill="#f7c948" />
        <polygon points="50,10 88,30 50,50 12,30" fill="#fbe08c" />
        <polygon points="50,50 88,30 88,72 50,92" fill="#c69a2c" />
      </svg>
    </div>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)] overflow-x-hidden">
      <TabNav />
      <ScrollProgress />

      {/* ───── HERO ───── */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-5 md:px-12 max-w-[1400px] mx-auto grain">
        <HeroShapes />

        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--cream)] font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[color:var(--ink)] mb-10">
            ✦ {NAME.toUpperCase()} ✦
          </div>

          <h1 className="font-[var(--font-body)] font-bold tracking-[-0.02em] leading-[0.92] text-[14vw] md:text-[9vw] lg:text-[8.5rem] mx-auto max-w-[14ch]">
            Great People,<br />
            <span className="italic font-normal text-[color:var(--accent)]">Great Projects</span>
          </h1>

          <p className="mt-10 text-2xl md:text-3xl font-[var(--font-body)] italic text-[color:var(--ink)]">
            Hi, I'm {NAME.split(" ")[0]}!
          </p>
          <p className="mt-3 font-[var(--font-mono)] text-[12px] uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
            Social Media Strategy
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="magnetic inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.24em] hover:bg-[color:var(--accent)] transition-colors"
            >
              Let's Work Together! <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-16 md:mt-24 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[color:var(--ink-soft)]">
            ✦ Scroll down ✦ and know me better
          </div>
        </div>
      </section>

      {/* ───── ABOUT ───── */}
      <section id="about" className="px-5 md:px-12 max-w-[1280px] mx-auto py-24 md:py-32 scroll-mt-28">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4 text-center">
            ✶ About Me
          </p>
          <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight leading-[1] text-center max-w-[20ch] mx-auto">
            Turning ideas into <span className="italic font-normal text-[color:var(--accent)]">engaging content.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 max-w-[64ch] mx-auto space-y-5 text-lg md:text-xl leading-relaxed text-[color:var(--ink)]">
            <p>Hi, I'm {NAME.split(" ")[0]}. I am passionate about turning ideas into engaging digital content.</p>
            <p>
              I specialize in social media, video editing, and visual design, helping brands communicate clearly, stand out, and connect with their audience.
            </p>
            <p>
              My approach combines creativity and strategy to create content that doesn't just look good, but actually drives impact.
            </p>
          </div>
        </Reveal>

        {/* Kind words */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4 text-center">
              ✶ Kind Words
            </p>
            <h3 className="font-[var(--font-body)] font-bold text-3xl md:text-5xl tracking-tight text-center max-w-[20ch] mx-auto">
              What people <span className="italic font-normal">say.</span>
            </h3>
            <p className="mt-3 text-center text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
              (anonymized placeholders)
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5 md:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="h-full p-7 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--cream)] tilt-card flex flex-col gap-5">
                  <span aria-hidden className="font-[var(--font-body)] italic text-5xl leading-none text-[color:var(--accent)]">"</span>
                  <blockquote className="text-base md:text-lg leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="mt-auto">
                    <div className="font-[var(--font-body)] font-bold text-base">{t.name}</div>
                    <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mt-1">
                      {t.role}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── STACK ───── */}
      <section id="stack" className="bg-[color:var(--cream)] border-y border-[color:var(--line)] py-24 md:py-32 scroll-mt-28">
        <div className="px-5 md:px-12 max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4 text-center">
              ✶ My Stack
            </p>
            <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight text-center max-w-[20ch] mx-auto">
              Tools I <span className="italic font-normal text-[color:var(--accent)]">work with.</span>
            </h2>
            <p className="mt-3 text-center text-xs font-[var(--font-mono)] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
              Tap or hover to flip
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {STACK.map((s, i) => (
              <Reveal key={s.name} delay={i * 40}>
                <FlipTile name={s.name} note={s.note} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section id="services" className="px-5 md:px-12 max-w-[1400px] mx-auto py-24 md:py-32 scroll-mt-28">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4 text-center">
            ✶ Services
          </p>
          <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight text-center max-w-[22ch] mx-auto">
            Everything you need, <span className="italic font-normal text-[color:var(--accent)]">in one place.</span>
          </h2>
        </Reveal>

        <ul className="mt-14 border-t border-[color:var(--line)]">
          {SERVICES.map(([n, label]) => (
            <li
              key={n}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-6 md:py-8 border-b border-[color:var(--line)] transition-colors hover:bg-[color:var(--cream)]"
            >
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--accent)] w-10">
                {n}
              </span>
              <span className="font-[var(--font-body)] font-bold text-2xl md:text-4xl tracking-tight">
                {label}
              </span>
              <ArrowUpRight className="w-5 h-5 text-[color:var(--ink-soft)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]" />
            </li>
          ))}
        </ul>
      </section>

      {/* ───── PROJECTS ───── */}
      <section id="projects" className="bg-[color:var(--cream)] border-y border-[color:var(--line)] py-24 md:py-32 scroll-mt-28">
        <div className="px-5 md:px-12 max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4 text-center">
              ✶ Projects
            </p>
            <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight text-center max-w-[20ch] mx-auto">
              Selected <span className="italic font-normal text-[color:var(--accent)]">work.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 80}>
                <article className="tilt-card h-full rounded-[28px] border border-[color:var(--line)] bg-[color:var(--bone)] overflow-hidden flex flex-col">
                  <div
                    className="aspect-[4/3] relative grid place-items-center p-6 text-center"
                    style={{ backgroundColor: p.c }}
                  >
                    <span className="font-[var(--font-mono)] uppercase tracking-[0.2em] text-[11px] text-[color:var(--ink)]/60">
                      Placeholder image
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-[var(--font-body)] font-bold text-xl tracking-tight leading-tight">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                      {p.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CONTACT ───── */}
      <section id="contact" className="px-5 md:px-12 max-w-[1400px] mx-auto py-24 md:py-32 scroll-mt-28">
        <div className="relative rounded-[44px] overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)] p-10 md:p-20 grain">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(circle at 80% 20%, var(--accent), transparent 60%)" }}
          />
          <div className="relative max-w-[1000px] mx-auto text-center">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] opacity-70 mb-4">
              ✶ Contact
            </p>
            <h2 className="font-[var(--font-body)] font-bold tracking-tight leading-[0.98] text-5xl md:text-7xl max-w-[16ch] mx-auto">
              Need something <span className="italic font-normal text-[color:var(--accent-soft)]">more?</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-[52ch] mx-auto opacity-90">
              I craft custom plans to fit your specific needs. Contact me for a quote!
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function FlipTile({ name, note }: { name: string; note: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className={`flip-card block w-full h-[140px] md:h-[160px] text-left ${flipped ? "is-flipped" : ""}`}
      aria-label={`${name} — ${note}`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-face bg-[color:var(--bone)] border border-[color:var(--line)] p-4">
          <span className="font-[var(--font-body)] font-bold text-lg md:text-xl tracking-tight text-center">
            {name}
          </span>
        </div>
        <div className="flip-card-face flip-card-back bg-[color:var(--ink)] text-[color:var(--cream)] p-4">
          <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-center">
            {note}
          </span>
        </div>
      </div>
    </button>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
      }}
      className="mt-10 grid gap-3 md:gap-4 max-w-[560px] mx-auto text-left"
    >
      <input
        required
        placeholder="Your name"
        className="w-full px-5 py-4 rounded-full bg-[color:var(--cream)]/10 border border-[color:var(--cream)]/30 text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/50 font-[var(--font-body)] focus:outline-none focus:border-[color:var(--cream)]"
      />
      <input
        required
        type="email"
        placeholder="Your email"
        className="w-full px-5 py-4 rounded-full bg-[color:var(--cream)]/10 border border-[color:var(--cream)]/30 text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/50 font-[var(--font-body)] focus:outline-none focus:border-[color:var(--cream)]"
      />
      <textarea
        required
        rows={4}
        placeholder="Tell me about your project…"
        className="w-full px-5 py-4 rounded-[28px] bg-[color:var(--cream)]/10 border border-[color:var(--cream)]/30 text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/50 font-[var(--font-body)] focus:outline-none focus:border-[color:var(--cream)] resize-none"
      />
      <div className="flex justify-center mt-2">
        <button
          type="submit"
          className="magnetic inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.24em] hover:bg-[color:var(--accent-soft)] transition-colors"
        >
          {sent ? "Thanks ✓ I'll be in touch" : "Book a Call →"}
        </button>
      </div>
      <p className="text-center text-[10px] font-[var(--font-mono)] uppercase tracking-[0.22em] opacity-60 mt-2">
        (Placeholder form — not wired to a backend)
      </p>
    </form>
  );
}

function ScrollProgress() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-40 pointer-events-none">
      <div
        id="scroll-progress-bar"
        className="h-full bg-[color:var(--accent)] transition-[width] duration-100"
        style={{ width: "0%" }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var b=document.getElementById('scroll-progress-bar');function u(){var h=document.documentElement;var s=h.scrollTop||document.body.scrollTop;var m=(h.scrollHeight-h.clientHeight)||1;b&&(b.style.width=(s/m*100)+'%');}window.addEventListener('scroll',u,{passive:true});u();})();`,
        }}
      />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--bone)]">
      <div className="px-5 md:px-12 max-w-[1400px] mx-auto py-14 md:py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[color:var(--ink)] mb-3">
            ✦ {NAME.toUpperCase()}
          </div>
          <p className="text-sm text-[color:var(--ink-soft)] max-w-[36ch] leading-relaxed">
            Social media strategy, content creation and visual design. Placeholder portfolio site.
          </p>
        </div>

        <div>
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
            Useful Links
          </div>
          <ul className="space-y-2">
            {USEFUL_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-[var(--font-body)] text-base hover:text-[color:var(--accent)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
            Social
          </div>
          <ul className="space-y-2">
            {SOCIAL_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-[var(--font-body)] text-base hover:text-[color:var(--accent)] transition-colors inline-flex items-center gap-1">
                  {l.label} <span className="font-[var(--font-mono)] text-[10px] opacity-60">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)] px-5 md:px-12 max-w-[1400px] mx-auto py-6 flex flex-wrap items-center justify-between gap-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
        <span>© 2026 {NAME} · Placeholder</span>
        <span className="italic font-[var(--font-body)] normal-case tracking-normal text-sm">Clean-room rebuild</span>
      </div>
    </footer>
  );
}

const TICKER = [
  "Celebrity partnerships",
  "Organic growth",
  "Short-form video",
  "Creative direction",
  "AI-augmented workflows",
  "Team leadership",
  "Brand voice",
  "Monetization systems",
];

const SERVICES_PREVIEW = [
  { n: "01", t: "Social Strategy", d: "Voice, cadence and platform-fit playbooks that scale without burning out the team." },
  { n: "02", t: "Creative Direction", d: "From first hook to final cut — campaigns, reels and celebrity collabs." },
  { n: "03", t: "Growth Systems", d: "Organic-only frameworks. 1M+ followers built without paid acquisition." },
  { n: "04", t: "AI-augmented Ops", d: "Briefs, drafts and repurposing pipelines that multiply output without losing taste." },
];

const PROCESS_STRIP = [
  ["01", "Listen"],
  ["02", "Map"],
  ["03", "Make"],
  ["04", "Measure"],
];

const STACK = [
  "Research",
  "Positioning",
  "Messaging",
  "Figma",
  "Framer-style motion",
  "Conversion copy",
  "Content systems",
  "Responsive QA",
  "Launch planning",
  "Analytics notes",
  "SEO basics",
  "AI-augmented ops",
];

// Anonymized placeholder testimonials — replace with permission-cleared quotes.
const TESTIMONIALS = [
  {
    quote:
      "The new structure made the offer understandable in minutes. It feels polished without becoming cold or corporate.",
    role: "Anonymous founder · Creative services",
  },
  {
    quote:
      "The site now has a real narrative. Every section earns its place and the mobile experience finally feels intentional.",
    role: "Anonymous client · Brand studio",
  },
  {
    quote:
      "The process was calm, precise and strategic. The final system gave us pages, content prompts and reusable visual rules.",
    role: "Anonymous operator · Digital product",
  },
  {
    quote:
      "It captured the personal tone we wanted while removing the messy parts that made the old website feel unfocused.",
    role: "Anonymous consultant · Marketing advisory",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)] overflow-x-hidden">
      <TabNav />
      <ScrollProgress />

      {/* ───── HERO ───── */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-5 md:px-12 max-w-[1400px] mx-auto grain">
        {/* Floating shapes (parallax-light) */}
        <div
          aria-hidden
          className="absolute right-[-8%] top-24 w-[42vw] max-w-[520px] aspect-square rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle at 30% 30%, var(--accent-soft), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="absolute left-[-10%] bottom-0 w-[36vw] max-w-[420px] aspect-square rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, #ffe7d2, transparent 70%)" }}
        />

        <div className="relative">
          <div className="flex items-center gap-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)] animate-pulse" />
            Available · Berlin, DE + Worldwide
          </div>

          <h1 className="font-[var(--font-body)] font-bold tracking-[-0.02em] leading-[0.92] text-[14vw] md:text-[8.5vw] lg:text-[7.5rem] max-w-[14ch]">
            Building social,<br />
            <span className="italic font-normal text-[color:var(--accent)]">honestly.</span>
          </h1>

          <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-10">
            <p className="md:col-span-7 text-lg md:text-xl leading-relaxed max-w-[58ch] text-[color:var(--ink)]">
              I'm a Social Media Lead, Systems Builder and Creative Strategist based in Berlin — directing celebrity partnerships, building infrastructure that scales, and measuring real business impact.
            </p>
            <p className="md:col-span-5 text-base md:text-lg leading-relaxed text-[color:var(--ink-soft)] max-w-[48ch]">
              Currently Social Media Lead at Yousician — campaigns with David Bowie, Paul McCartney and Warner Music. Previously scaled Carpe Diem Tours from zero to 1M+ followers across Rome, Florence, London, Barcelona and Lisbon.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {[
              ["English", "C1"],
              ["Farsi", "Native"],
              ["Italian", "B2"],
            ].map(([lang, level]) => (
              <span
                key={lang}
                className="px-3.5 py-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--cream)] font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink)]"
              >
                {lang} · {level}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CAPABILITY TICKER ───── */}
      <section
        aria-label="Capabilities"
        className="border-y border-[color:var(--line)] bg-[color:var(--cream)] overflow-hidden py-5"
      >
        <div className="flex animate-ticker whitespace-nowrap">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="font-[var(--font-body)] italic text-3xl md:text-5xl mx-8 text-[color:var(--ink)]"
            >
              {item}
              <span className="mx-8 text-[color:var(--accent)]">✶</span>
            </span>
          ))}
        </div>
      </section>

      {/* ───── ABOUT PREVIEW ───── */}
      <section className="px-5 md:px-12 max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <Reveal className="md:col-span-7">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-3">
              ✶ About
            </p>
            <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight leading-[0.98]">
              Berlin-based,<br />
              <span className="italic font-normal text-[color:var(--accent)]">strategy-first.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-[58ch] text-[color:var(--ink-soft)]">
              I lead social for global music partners and grow audiences without paid acquisition. Calm process, sharp taste, no theatrics — and a workflow that treats AI as a draft assistant, never the editor.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <div className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--cream)] p-7 md:p-8 tilt-card">
              <ul className="space-y-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink)]">
                <li className="flex justify-between gap-4"><span>Now</span><span className="text-[color:var(--ink-soft)]">Social Media Lead, Yousician</span></li>
                <li className="flex justify-between gap-4"><span>Past</span><span className="text-[color:var(--ink-soft)]">Carpe Diem Tours · 0 → 1M+</span></li>
                <li className="flex justify-between gap-4"><span>Recent</span><span className="text-[color:var(--ink-soft)]">Bowie · McCartney · Warner</span></li>
                <li className="flex justify-between gap-4"><span>Base</span><span className="text-[color:var(--ink-soft)]">Berlin · Worldwide</span></li>
              </ul>
              <Link
                to="/me"
                className="mt-6 inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] transition-colors"
              >
                Read more <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── SELECTED WORK ───── */}
      <section className="px-5 md:px-12 max-w-[1400px] mx-auto py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-3">
                ✶ Selected work
              </p>
              <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight">
                Things I've made <span className="italic font-normal">well.</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] transition-colors"
            >
              All projects <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Link
                to="/projects/$projectId"
                params={{ projectId: p.id }}
                className="group block tilt-card rounded-[28px] border border-[color:var(--line)] bg-[color:var(--cream)] overflow-hidden"
              >
                <div
                  className="aspect-[16/10] relative overflow-hidden"
                  style={{ backgroundColor: p.bg }}
                >
                  {p.placeholderTile ? (
                    <div className="absolute inset-0 grid place-items-center p-8 text-center">
                      <span
                        className="font-[var(--font-mono)] uppercase tracking-[0.2em] text-2xl md:text-3xl leading-tight"
                        style={{ color: p.tagBg }}
                      >
                        {p.shortTitle ?? p.title}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={p.image}
                      alt={`${p.title} cover`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="p-5 md:p-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-1">
                      {p.year} · {p.tag}
                    </p>
                    <h3 className="font-[var(--font-body)] font-bold text-xl md:text-2xl tracking-tight">
                      {p.shortTitle ?? p.title}
                    </h3>
                    <p className="text-sm text-[color:var(--ink-soft)] mt-1">{p.subtitle}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 mt-1 text-[color:var(--ink)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 rounded-full border border-[color:var(--ink)] text-[color:var(--ink)]"
          >
            All projects <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ───── SERVICES PREVIEW ───── */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--line)] py-20 md:py-28">
        <div className="px-5 md:px-12 max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-3">
              ✶ What I do
            </p>
            <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight mb-12 md:mb-16 max-w-[14ch]">
              Strategy, taste & <span className="italic font-normal">systems.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {SERVICES_PREVIEW.map((s) => (
              <Reveal key={s.n}>
                <article className="h-full p-7 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--bone)] tilt-card">
                  <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[color:var(--accent)]">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-[var(--font-body)] font-bold text-2xl tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] transition-colors"
            >
              All services <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── PROCESS STRIP ───── */}
      <section className="px-5 md:px-12 max-w-[1400px] mx-auto py-20 md:py-28">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-3">
            ✶ Process
          </p>
          <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight mb-12 md:mb-16 max-w-[16ch]">
            Slow at the start, <span className="italic font-normal">fast at the finish.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--line)] border border-[color:var(--line)] rounded-[28px] overflow-hidden">
          {PROCESS_STRIP.map(([n, t]) => (
            <div key={n} className="bg-[color:var(--cream)] p-6 md:p-8 flex flex-col gap-4 min-h-[160px]">
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--accent)]">{n}</span>
              <span className="font-[var(--font-body)] font-bold text-3xl md:text-4xl">{t}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] transition-colors"
          >
            How I work <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ───── STACK ───── */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--line)] py-20 md:py-24">
        <div className="px-5 md:px-12 max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-3">
              ✶ Stack
            </p>
            <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight mb-10 md:mb-14 max-w-[18ch]">
              Tools & methods I <span className="italic font-normal">actually use.</span>
            </h2>
          </Reveal>
          <Reveal>
            <ul className="flex flex-wrap gap-2.5">
              {STACK.map((s) => (
                <li
                  key={s}
                  className="magnetic px-4 py-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bone)] font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="px-5 md:px-12 max-w-[1400px] mx-auto py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between mb-10 md:mb-14 gap-6 flex-wrap">
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-3">
                ✶ Words ·{" "}
                <span className="italic font-[var(--font-body)] normal-case tracking-normal text-[color:var(--ink-soft)]">
                  anonymized placeholders
                </span>
              </p>
              <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-6xl tracking-tight max-w-[20ch]">
                What collaborators <span className="italic font-normal">say.</span>
              </h2>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="h-full p-7 md:p-9 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--cream)] tilt-card flex flex-col gap-6">
                <span aria-hidden className="font-[var(--font-body)] italic text-5xl leading-none text-[color:var(--accent)]">"</span>
                <blockquote className="text-lg md:text-xl leading-relaxed text-[color:var(--ink)]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
                  — {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───── CONTACT CTA ───── */}
      <section className="px-5 md:px-12 max-w-[1400px] mx-auto pb-24 md:pb-32">
        <div className="relative rounded-[44px] overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)] p-10 md:p-20 grain">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(circle at 80% 20%, var(--accent), transparent 60%)" }}
          />
          <div className="relative">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] opacity-70 mb-4">
              ✶ Let's talk
            </p>
            <h2 className="font-[var(--font-body)] font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-[14ch]">
              Have a project<br />
              <span className="italic font-normal text-[color:var(--accent-soft)]">in mind?</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.22em] hover:bg-[color:var(--accent-soft)] transition-colors magnetic"
              >
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </Link>
              <CopyEmailButton />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ScrollProgress() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-40 pointer-events-none">
      <div
        id="scroll-progress-bar"
        className="h-full bg-[color:var(--accent)] transition-[width] duration-100"
        style={{ width: "0%" }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var b=document.getElementById('scroll-progress-bar');function u(){var h=document.documentElement;var s=h.scrollTop||document.body.scrollTop;var m=(h.scrollHeight-h.clientHeight)||1;b&&(b.style.width=(s/m*100)+'%');}window.addEventListener('scroll',u,{passive:true});u();})();`,
        }}
      />
    </div>
  );
}

function CopyEmailButton() {
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText("hello@example.com");
          const el = document.getElementById("copy-email-label");
          if (el) {
            el.textContent = "Copied ✓";
            setTimeout(() => { el.textContent = "Copy email"; }, 1600);
          }
        } catch {}
      }}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[color:var(--cream)]/40 text-[color:var(--cream)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.22em] hover:bg-[color:var(--cream)]/10 transition-colors magnetic"
    >
      <span id="copy-email-label">Copy email</span>
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--bone)]">
      <div className="px-5 md:px-12 max-w-[1400px] mx-auto py-8 flex flex-wrap items-center justify-between gap-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
        <span>◉ Berlin, DE</span>
        <span className="italic font-[var(--font-body)] normal-case tracking-normal text-sm">Let's bring nice ideas to life</span>
        <span>© 2026 Raha Teimuri</span>
      </div>
    </footer>
  );
}
