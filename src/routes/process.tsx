import { createFileRoute, Link } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { SiteFooter } from "@/routes/index";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Raha Teimuri" },
      { name: "description", content: "How I work — listen, map, make, measure. A calm, accountable rhythm for social and content programs." },
      { property: "og:title", content: "Process — Raha Teimuri" },
      { property: "og:description", content: "Listen, map, make, measure — how I run social programs." },
    ],
  }),
  component: ProcessPage,
});

const STEPS = [
  {
    n: "01",
    name: "Listen",
    when: "Week 1",
    blurb: "Audit current voice, audience signals and competitor whitespace. Talk to the people who actually do the work.",
    bullets: ["Stakeholder interviews", "Account + comments audit", "Trend & sound scan", "What's working / what's noise"],
  },
  {
    n: "02",
    name: "Map",
    when: "Week 2",
    blurb: "Translate findings into a content map and cadence the team can actually keep — pillars, formats, owners.",
    bullets: ["Content pillars", "Channel cadence", "Roles & approvals", "First 30/60/90 plan"],
  },
  {
    n: "03",
    name: "Make",
    when: "Week 3 → ongoing",
    blurb: "Direct the work. Brief creators, brief designers, brief AI. Edit hard, ship on time, defend the voice.",
    bullets: ["Concept + hook libraries", "Creator & designer briefs", "Approval-ready rollouts", "Human edit on every output"],
  },
  {
    n: "04",
    name: "Measure",
    when: "Always",
    blurb: "Weekly review against the numbers that matter — reach, retention, action. Cut what's not earning its slot.",
    bullets: ["Weekly KPI snapshot", "Monthly creative review", "Quarterly strategy reset", "Honest stop-doing list"],
  },
] as const;

function ProcessPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)]">
      <TabNav />
      <main className="pt-32 md:pt-40 px-5 md:px-12 max-w-[1280px] mx-auto pb-24">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
            ✶ Process
          </p>
          <h1 className="font-[var(--font-body)] font-bold tracking-[-0.02em] leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-[16ch]">
            Slow at the start, <span className="italic font-normal text-[color:var(--accent)]">fast at the finish.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-[58ch] text-[color:var(--ink-soft)]">
            A calm, accountable rhythm. Four steps, repeated. No theatrics, no surprise invoices, no shipping work the team can't defend.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 space-y-5 md:space-y-7">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--cream)] p-7 md:p-10 grid md:grid-cols-12 gap-6 md:gap-10 tilt-card">
                <div className="md:col-span-3 flex flex-col gap-2">
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--accent)]">
                    {s.n} · {s.when}
                  </span>
                  <h2 className="font-[var(--font-body)] font-bold text-4xl md:text-5xl tracking-tight leading-[0.95]">
                    {s.name}
                  </h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-base md:text-lg leading-relaxed">{s.blurb}</p>
                </div>
                <ul className="md:col-span-4 space-y-2 md:border-l md:border-[color:var(--line)] md:pl-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px]">
                      <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[color:var(--accent)] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-20 rounded-[44px] bg-[color:var(--ink)] text-[color:var(--cream)] p-10 md:p-16 grain">
          <h2 className="font-[var(--font-body)] font-bold text-3xl md:text-5xl tracking-tight max-w-[18ch]">
            Want this rhythm <span className="italic font-normal text-[color:var(--accent-soft)]">running your social?</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.22em] hover:bg-[color:var(--accent-soft)] transition-colors"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}