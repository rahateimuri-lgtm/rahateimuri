import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait-raha.jpg";
import { TabNav } from "@/components/TabNav";
import { SiteFooter } from "@/routes/index";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/me")({
  head: () => ({
    meta: [
      { title: "Me — Raha Teimuri" },
      { name: "description", content: "About Raha Teimuri — Berlin-based Social Media Lead, Systems Builder & Creative Strategist." },
      { property: "og:title", content: "Me — Raha Teimuri" },
      { property: "og:description", content: "Berlin-based Social Media Lead, Systems Builder & Creative Strategist." },
    ],
  }),
  component: MePage,
});

const TIMELINE = [
  ["2025 → Now", "Social Media Lead", "Yousician · Bowie, McCartney, Warner partnerships."],
  ["2022 – 2025", "Social Lead", "Carpe Diem Tours · 13 accounts, 1M+ organic followers."],
  ["2020 – 2022", "Creator & Director", "Short-form video that drove €40K+ in direct bookings."],
];

function MePage() {
  return (
    <div className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)]">
      <TabNav />
      <main className="pt-32 md:pt-40 px-5 md:px-12 max-w-[1280px] mx-auto pb-24">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
            ✶ Me
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <h1 className="font-[var(--font-body)] font-bold tracking-[-0.02em] leading-[0.95] text-5xl md:text-7xl lg:text-8xl">
                Raha <span className="italic font-normal text-[color:var(--accent)]">Teimuri.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-[58ch]">
                I'm a Social Media Lead, Systems Builder and Creative Strategist based in Berlin — directing celebrity partnerships, building infrastructure that scales, and measuring real business impact.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-[color:var(--ink-soft)] max-w-[58ch]">
                Currently Social Media Lead at Yousician — campaigns with David Bowie, Paul McCartney and Warner Music. Previously scaled Carpe Diem Tours from zero to 1M+ followers across Rome, Florence, London, Barcelona and Lisbon.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  ["English", "C1"],
                  ["Farsi", "Native"],
                  ["Italian", "B2"],
                ].map(([lang, level]) => (
                  <span
                    key={lang}
                    className="px-3.5 py-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--cream)] font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
                  >
                    {lang} · {level}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto md:ml-auto md:mr-0 rounded-[44px] overflow-hidden border border-[color:var(--line)] bg-[color:var(--accent-soft)]">
              <img
                src={portrait}
                alt="Raha Teimuri portrait"
                className="w-full h-full object-cover mix-blend-multiply opacity-95"
              />
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <section className="mt-24 md:mt-32">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
              ✶ Where I've been
            </p>
            <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-5xl tracking-tight mb-10">
              A short <span className="italic font-normal">timeline.</span>
            </h2>
          </Reveal>
          <ul className="border-t border-[color:var(--line)]">
            {TIMELINE.map(([when, what, where]) => (
              <li key={when} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-[color:var(--line)]">
                <span className="md:col-span-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)] pt-1">
                  {when}
                </span>
                <span className="md:col-span-4 font-[var(--font-body)] font-bold text-xl md:text-2xl tracking-tight">
                  {what}
                </span>
                <span className="md:col-span-5 text-base text-[color:var(--ink-soft)] leading-relaxed">
                  {where}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.22em] hover:bg-[color:var(--accent)] transition-colors"
          >
            Work with me →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}