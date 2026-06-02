import { createFileRoute } from "@tanstack/react-router";
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

function HeroShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute top-[12%] right-[8%] w-[120px] md:w-[170px] float-shape" style={{ animationDelay: "0s" }} viewBox="0 0 100 100" data-parallax="0.05">
        <defs>
          <linearGradient id="g-orange" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#ff8a5b" />
            <stop offset="1" stopColor="#c4452a" />
          </linearGradient>
        </defs>
        <polygon points="50,8 92,88 8,88" fill="url(#g-orange)" />
        <polygon points="50,8 92,88 50,72" fill="#000" opacity="0.18" />
      </svg>
      <svg className="absolute top-[55%] right-[14%] w-[110px] md:w-[150px] float-shape" style={{ animationDelay: "1.2s" }} viewBox="0 0 100 100" data-parallax="-0.08">
        <defs>
          <radialGradient id="g-purple" cx="35%" cy="30%" r="70%">
            <stop offset="0" stopColor="#d6c3ff" />
            <stop offset="0.6" stopColor="#7d5cd1" />
            <stop offset="1" stopColor="#3b2570" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#g-purple)" />
      </svg>
      <svg className="absolute top-[28%] left-[6%] w-[100px] md:w-[140px] float-shape" style={{ animationDelay: "0.6s" }} viewBox="0 0 100 120" data-parallax="0.06">
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
      <svg className="absolute bottom-[14%] left-[12%] w-[100px] md:w-[140px] float-shape" style={{ animationDelay: "1.8s" }} viewBox="0 0 100 100" data-parallax="-0.05">
        <defs>
          <linearGradient id="g-turq" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#9ff0e3" />
            <stop offset="1" stopColor="#2aa39a" />
          </linearGradient>
        </defs>
        <polygon points="50,4 61,38 96,38 67,59 78,94 50,72 22,94 33,59 4,38 39,38" fill="url(#g-turq)" />
      </svg>
      <svg className="absolute bottom-[28%] right-[40%] w-[90px] md:w-[120px] float-shape" style={{ animationDelay: "2.4s" }} viewBox="0 0 100 100" data-parallax="0.04">
        <defs>
          <radialGradient id="g-green" cx="50%" cy="50%" r="50%">
            <stop offset="0.55" stopColor="transparent" />
            <stop offset="0.6" stopColor="#88c47c" />
            <stop offset="1" stopColor="#3e7a3a" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#g-green)" />
      </svg>
      <svg className="absolute top-[6%] left-[38%] w-[80px] md:w-[110px] float-shape" style={{ animationDelay: "3s" }} viewBox="0 0 100 100" data-parallax="-0.06">
        <polygon points="50,10 88,30 88,72 50,92 12,72 12,30" fill="#f7c948" />
        <polygon points="50,10 88,30 50,50 12,30" fill="#fbe08c" />
        <polygon points="50,50 88,30 88,72 50,92" fill="#c69a2c" />
      </svg>
    </div>
  );
}

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)] overflow-x-hidden">
      <TabNav />
      <ScrollProgress />

      {/* HERO */}
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

      {/* ABOUT */}
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
            <p>I specialize in social media, video editing, and visual design, helping brands communicate clearly, stand out, and connect with their audience.</p>
            <p>My approach combines creativity and strategy to create content that doesn't just look good, but actually drives impact.</p>
          </div>
        </Reveal>

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
                    <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mt-1">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
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

      {/* SERVICES */}
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
            <li key={n} className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-6 md:py-8 border-b border-[color:var(--line)] transition-colors hover:bg-[color:var(--cream)]">
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--accent)] w-10">{n}</span>
              <span className="font-[var(--font-body)] font-bold text-2xl md:text-4xl tracking-tight">{label}</span>
              <ArrowUpRight className="w-5 h-5 text-[color:var(--ink-soft)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]" />
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS */}
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
                  <div className="aspect-[4/3] relative grid place-items-center p-6 text-center" style={{ backgroundColor: p.c }}>
                    <span className="font-[var(--font-mono)] uppercase tracking-[0.2em] text-[11px] text-[color:var(--ink)]/60">
                      Placeholder image
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-[var(--font-body)] font-bold text-xl tracking-tight leading-tight">{p.t}</h3>
                    <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">{p.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 md:px-12 max-w-[1400px] mx-auto py-24 md:py-32 scroll-mt-28">
        <div className="relative rounded-[44px] overflow-hidden bg-[color:var(--ink)] text-[color:var(--cream)] p-10 md:p-20 grain">
          <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 80% 20%, var(--accent), transparent 60%)" }} />
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
          <span className="font-[var(--font-body)] font-bold text-lg md:text-xl tracking-tight text-center">{name}</span>
        </div>
        <div className="flip-card-face flip-card-back bg-[color:var(--ink)] text-[color:var(--cream)] p-4">
          <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-center">{note}</span>
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
      <input required placeholder="Your name" className="w-full px-5 py-4 rounded-full bg-[color:var(--cream)]/10 border border-[color:var(--cream)]/30 text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/50 font-[var(--font-body)] focus:outline-none focus:border-[color:var(--cream)]" />
      <input required type="email" placeholder="Your email" className="w-full px-5 py-4 rounded-full bg-[color:var(--cream)]/10 border border-[color:var(--cream)]/30 text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/50 font-[var(--font-body)] focus:outline-none focus:border-[color:var(--cream)]" />
      <textarea required rows={4} placeholder="Tell me about your project…" className="w-full px-5 py-4 rounded-[28px] bg-[color:var(--cream)]/10 border border-[color:var(--cream)]/30 text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/50 font-[var(--font-body)] focus:outline-none focus:border-[color:var(--cream)] resize-none" />
      <div className="flex justify-center mt-2">
        <button type="submit" className="magnetic inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.24em] hover:bg-[color:var(--accent-soft)] transition-colors">
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
      <div id="scroll-progress-bar" className="h-full bg-[color:var(--accent)] transition-[width] duration-100" style={{ width: "0%" }} />
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
                <a href={l.href} className="font-[var(--font-body)] text-base hover:text-[color:var(--accent)] transition-colors">{l.label}</a>
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