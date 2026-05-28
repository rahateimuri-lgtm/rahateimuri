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
    <div className="min-h-screen bg-background text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav accent="navy" />

      <main className="px-6 md:px-12 pb-24 max-w-6xl mx-auto">
        {/* Sub-tabs (project filters) */}
        <div className="flex flex-wrap justify-start md:justify-between gap-x-8 gap-y-4 mb-16 border-b border-[color:var(--navy)]/20 pb-6">
          {projects.map((p) => {
            const isActive = p.id === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`font-[var(--font-body)] text-lg md:text-xl pb-1 transition-all ${
                  isActive
                    ? "border-b-2 border-[color:var(--navy)] font-semibold"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        <article className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <div className="rounded-2xl overflow-hidden border-2 border-[color:var(--navy)]/15 bg-[color:var(--navy)]/5">
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
            <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-70">
              {current.year}
            </div>
            <h2 className="font-[var(--font-body)] font-bold leading-none tracking-tight text-4xl md:text-5xl">
              {current.title}
              <span className="block italic font-normal text-2xl md:text-3xl mt-2 opacity-70">
                {current.subtitle}
              </span>
            </h2>

            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-widest opacity-80">
              {current.role}
            </p>

            <p className="text-base md:text-lg leading-relaxed opacity-90">{current.description}</p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[color:var(--navy)]/20">
              {current.stats.map(([n, label]) => (
                <div key={label}>
                  <p className="font-[var(--font-body)] font-bold text-xl md:text-2xl leading-tight">{n}</p>
                  <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-widest opacity-70 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[color:var(--navy)]/20">
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-70 mb-3">
                Linked Accounts
              </p>
              <div className="flex flex-wrap gap-2">
                {current.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-full border border-[color:var(--navy)]/40 text-xs font-[var(--font-mono)] uppercase tracking-widest hover:bg-[color:var(--navy)] hover:text-white transition-colors"
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