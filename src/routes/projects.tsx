import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import caseBowie from "@/assets/case-bowie.jpg";
import caseMcCartney from "@/assets/case-mccartney.jpg";
import caseCarpeDiem from "@/assets/case-carpediem.jpg";
import { TabNav } from "@/components/TabNav";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Raha Teimuri" },
      { name: "description", content: "Selected work: David Bowie x Yousician, Paul McCartney & Wings x Yousician, Carpe Diem Tours." },
      { property: "og:title", content: "Projects — Raha Teimuri" },
      { property: "og:description", content: "Selected work and case studies." },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  image: string;
  description: string;
  stats: [string, string][];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "bowie",
    title: "David Bowie",
    subtitle: "× Yousician",
    year: "Nov 2025",
    role: "Art Direction · Brand Concept · Social Lead",
    image: caseBowie,
    description:
      "Brand concept and art direction inside the creative team for a campaign with the David Bowie Estate and Warner Music. Social rollout co-published with @davidbowie and Warner Chappell — every post approved by the estate.",
    stats: [
      ["Co-publish", "@davidbowie"],
      ["Partner", "Warner Chappell"],
      ["Approval", "Estate-cleared"],
    ],
    links: [
      { label: "@davidbowie", href: "https://instagram.com/davidbowie" },
      { label: "@yousician", href: "https://instagram.com/yousician" },
    ],
  },
  {
    id: "mccartney",
    title: "Paul McCartney",
    subtitle: "& Wings × Yousician",
    year: "Nov 2025",
    role: "Creative Direction · Social Lead · Partnership",
    image: caseMcCartney,
    description:
      "Creative direction and social lead for a partnership with Paul McCartney, MPL and the Wings Estate. One of the largest celebrity collaborations in music-learning history.",
    stats: [
      ["Partner", "MPL Communications"],
      ["Scope", "Global rollout"],
      ["Format", "Multi-platform"],
    ],
    links: [
      { label: "@paulmccartney", href: "https://instagram.com/paulmccartney" },
      { label: "@yousician", href: "https://instagram.com/yousician" },
    ],
  },
  {
    id: "carpediem",
    title: "Carpe Diem Tours",
    subtitle: "0 → 1M+",
    year: "2020 – 2025",
    role: "Social Lead · Team Manager · Systems Builder",
    image: caseCarpeDiem,
    description:
      "Built and scaled a multi-account social presence from zero across Rome, Florence, London, Barcelona and Lisbon. Directed 500+ videos, led 4 social managers, designed the workflow stack on Monday & Miro.",
    stats: [
      ["1M+", "Followers, organic"],
      ["50M", "Cross-platform views"],
      ["€80K", "Attributed bookings"],
    ],
    links: [
      { label: "@carpediemtours", href: "https://instagram.com/carpediemtours" },
      { label: "TikTok", href: "https://tiktok.com/@carpediemtours" },
    ],
  },
];

function ProjectsPage() {
  const [active, setActive] = useState<string>(projects[0].id);
  const current = projects.find((p) => p.id === active)!;

  return (
    <div className="min-h-screen bg-[color:var(--navy)] text-white font-[var(--font-body)]">
      <TabNav variant="navy" />

      <main className="px-6 md:px-12 pt-32 pb-24 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-white/15 pb-6">
          <h1 className="font-[var(--font-display)] font-extrabold text-4xl md:text-6xl tracking-tight">
            Projects
          </h1>
          <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60">
            Selected · 03
          </span>
        </div>

        {/* Sub-tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {projects.map((p) => {
            const isActive = p.id === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-5 py-2 rounded-full border font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? "bg-white text-[color:var(--navy)] border-white"
                    : "border-white/30 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        <article className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5">
              <img
                src={current.image}
                alt={`${current.title} campaign visual`}
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60">
              {current.year}
            </div>
            <h2 className="font-[var(--font-display)] font-extrabold leading-none tracking-tighter text-4xl md:text-5xl">
              {current.title}
              <span className="block font-[var(--font-body)] italic font-normal text-2xl md:text-3xl mt-2 opacity-80">
                {current.subtitle}
              </span>
            </h2>

            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-widest opacity-70">
              {current.role}
            </p>

            <p className="text-base md:text-lg leading-relaxed opacity-90">{current.description}</p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
              {current.stats.map(([n, label]) => (
                <div key={label}>
                  <p className="font-[var(--font-display)] font-bold text-xl md:text-2xl leading-tight">{n}</p>
                  <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-widest opacity-60 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/15">
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60 mb-3">
                Linked Accounts
              </p>
              <div className="flex flex-wrap gap-2">
                {current.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-full border border-white/30 text-xs font-[var(--font-mono)] uppercase tracking-widest hover:bg-white hover:text-[color:var(--navy)] transition-colors"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}