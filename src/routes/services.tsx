import { createFileRoute, Link } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { SiteFooter } from "@/routes/index";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Raha Teimuri" },
      { name: "description", content: "Social strategy, creative direction, organic growth systems and AI-augmented content operations." },
      { property: "og:title", content: "Services — Raha Teimuri" },
      { property: "og:description", content: "Strategy, creative direction, growth systems and AI-augmented ops." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    n: "01",
    title: "Social Strategy",
    blurb: "Voice, cadence and platform-fit playbooks built for the team that will execute them.",
    deliverables: [
      "Audit + opportunity map",
      "Quarterly content pillars",
      "Channel-by-channel cadence",
      "Editorial calendar template",
    ],
    fit: "Brands ready to stop posting and start publishing.",
  },
  {
    n: "02",
    title: "Creative Direction",
    blurb: "From first hook to final cut — campaigns, reels, celebrity collaborations and rollout plans.",
    deliverables: [
      "Concept + visual direction",
      "Designer & creator briefs",
      "Approval-ready rollouts",
      "Always-on creative oversight",
    ],
    fit: "Teams shipping work that needs taste at the wheel.",
  },
  {
    n: "03",
    title: "Growth Systems",
    blurb: "Organic-only frameworks that compound. Built on what actually moved 1M+ followers without paid acquisition.",
    deliverables: [
      "Hook library + format playbook",
      "Trend-watch + sound radar",
      "Repurposing pipeline",
      "Weekly performance review",
    ],
    fit: "Founders who refuse to rent their audience.",
  },
  {
    n: "04",
    title: "AI-augmented Ops",
    blurb: "Briefs, drafts and repurposing workflows that multiply output without losing the brand voice.",
    deliverables: [
      "Prompt + brief templates",
      "Tool-stack recommendation",
      "Human-in-the-loop guardrails",
      "Team training session",
    ],
    fit: "Teams who want to ship 3× without becoming generic.",
  },
] as const;

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)]">
      <TabNav />
      <main className="pt-32 md:pt-40 px-5 md:px-12 max-w-[1280px] mx-auto pb-24">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
            ✶ Services
          </p>
          <h1 className="font-[var(--font-body)] font-bold tracking-[-0.02em] leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-[18ch]">
            What I do, <span className="italic font-normal text-[color:var(--accent)]">end to end.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-[58ch] text-[color:var(--ink-soft)]">
            Four overlapping practices. Pick one, stack a few, or hand me the whole rollout. Everything is anonymized below — happy to walk through real outcomes on a call.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-5 md:gap-7">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="h-full p-7 md:p-10 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--cream)] tilt-card flex flex-col gap-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--accent)]">
                    {s.n}
                  </span>
                  <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
                    Practice
                  </span>
                </div>
                <h2 className="font-[var(--font-body)] font-bold text-3xl md:text-4xl tracking-tight leading-[1.02]">
                  {s.title}
                </h2>
                <p className="text-base leading-relaxed text-[color:var(--ink)]">{s.blurb}</p>
                <div>
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-2.5">
                    Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-[15px]">
                        <span aria-hidden className="mt-2 h-1 w-1 rounded-full bg-[color:var(--accent)] shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-auto pt-4 border-t border-[color:var(--line)] text-sm italic text-[color:var(--ink-soft)]">
                  Good fit for: {s.fit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 md:mt-20 rounded-[44px] bg-[color:var(--ink)] text-[color:var(--cream)] p-10 md:p-16 grain">
          <h2 className="font-[var(--font-body)] font-bold text-3xl md:text-5xl tracking-tight max-w-[18ch]">
            Not sure which one? <span className="italic font-normal text-[color:var(--accent-soft)]">Start with a call.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] font-[var(--font-mono)] text-[12px] uppercase tracking-[0.22em] hover:bg-[color:var(--accent-soft)] transition-colors"
          >
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}