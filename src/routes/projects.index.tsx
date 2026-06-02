import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TabNav } from "@/components/TabNav";
import { projects, type Project } from "@/lib/projects-data";
import { SiteFooter } from "@/routes/index";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects/")({
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

const CATEGORIES = ["All", "Campaigns", "Social", "Video", "Systems", "AI", "Monetization"] as const;
type Category = typeof CATEGORIES[number];

const CATEGORY_MAP: Record<string, Category[]> = {
  bowie: ["Campaigns"],
  mccartney: ["Campaigns"],
  pages: ["Social", "Systems"],
  "viral-videos": ["Video"],
  ai: ["AI", "Systems"],
  monetization: ["Monetization", "Systems"],
};

function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  return (
    <div className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)]">
      <TabNav />
      <main className="pt-32 md:pt-40 px-5 md:px-12 max-w-[1400px] mx-auto pb-24">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
            ✶ Projects
          </p>
          <h1 className="font-[var(--font-body)] font-bold tracking-[-0.02em] leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-[18ch]">
            Selected work, <span className="italic font-normal text-[color:var(--accent)]">in order.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-[58ch] text-[color:var(--ink-soft)]">
            Six case studies — celebrity campaigns, organic social growth, viral short-form, and the systems behind them. Filter the grid without losing the running order.
          </p>
        </Reveal>

        {/* Filter chips */}
        <div className="mt-12 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className="px-4 py-2 rounded-full font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] transition-colors border"
                style={
                  isActive
                    ? { backgroundColor: "var(--ink)", color: "var(--cream)", borderColor: "var(--ink)" }
                    : { backgroundColor: "var(--cream)", color: "var(--ink)", borderColor: "var(--line)" }
                }
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid — base order preserved; non-matching tiles dim */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {projects.map((p, i) => {
            const matches = active === "All" || (CATEGORY_MAP[p.id] ?? []).includes(active);
            return (
              <Reveal key={p.id} delay={i * 60}>
                <ProjectCard project={p} dim={!matches} />
              </Reveal>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectCard({ project, dim }: { project: Project; dim: boolean }) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: project.id }}
      className={`group block tilt-card rounded-[28px] border border-[color:var(--line)] bg-[color:var(--cream)] overflow-hidden transition-opacity ${dim ? "opacity-40 hover:opacity-70" : "opacity-100"}`}
    >
      <div
        className="aspect-[16/10] relative overflow-hidden"
        style={{ backgroundColor: project.bg }}
      >
        {project.placeholderTile ? (
          <div className="absolute inset-0 grid place-items-center p-8 text-center">
            <span
              className="font-[var(--font-mono)] uppercase tracking-[0.2em] text-2xl md:text-3xl leading-tight"
              style={{ color: project.tagBg }}
            >
              {project.shortTitle ?? project.title}
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} cover`}
            loading="lazy"
            style={{
              objectPosition: project.focalPoint
                ? `${project.focalPoint.x}% ${project.focalPoint.y}%`
                : "center",
            }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="p-5 md:p-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)] mb-1">
            {project.year} · {project.tag}
          </p>
          <h2 className="font-[var(--font-body)] font-bold text-xl md:text-2xl tracking-tight">
            {project.shortTitle ?? project.title}
          </h2>
          <p className="text-sm text-[color:var(--ink-soft)] mt-1">{project.subtitle}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 mt-1 text-[color:var(--ink)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}