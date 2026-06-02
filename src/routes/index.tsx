import { createFileRoute, Link } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { projects } from "@/lib/projects-data";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raha Teimuri — Social Media Lead & Creative Strategist" },
      { name: "description", content: "Berlin-based Social Media Lead, Systems Builder & Creative Strategist. Celebrity campaigns, organic growth, AI-augmented content systems." },
      { property: "og:title", content: "Raha Teimuri — Social Media Lead & Creative Strategist" },
      { property: "og:description", content: "Berlin-based Social Media Lead, Systems Builder & Creative Strategist." },
    ],
  }),
  component: HomePage,
});

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
