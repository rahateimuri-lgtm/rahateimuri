import { createFileRoute, Link } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { projects, type Project } from "@/lib/projects-data";

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

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav accent="navy" />

      <main className="px-4 md:px-8 pt-4 md:pt-6 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[140px] md:auto-rows-[180px] gap-3 md:gap-4">
          {projects.map((p) => (
            <ProjectTile key={p.id} project={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

const tileClass: Record<Project["tile"], string> = {
  // Bowie hero — full-width wide landscape (matches 1920x561 source ratio)
  hero: "col-span-2 md:col-span-6 row-span-auto md:row-span-auto",
  // McCartney — wide
  wide: "col-span-2 md:col-span-2 row-span-2 md:row-span-3",
  // 9:16 reel
  portrait: "col-span-1 md:col-span-2 row-span-2 md:row-span-3",
  // square
  square: "col-span-1 md:col-span-2 row-span-2 md:row-span-2",
};

function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: project.id }}
      className={`${tileClass[project.tile]} group relative flex flex-col overflow-hidden`}
    >
      <div
        className={`relative overflow-hidden ${project.tile === "hero" ? "aspect-[1920/561]" : "flex-1"}`}
        style={{ backgroundColor: project.bg }}
      >
        <img
          src={project.image}
          alt={`${project.title} cover`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
            project.tile === "hero" ? "object-contain bg-slate-50 border-0" : "object-cover mix-blend-multiply"
          }`}
        />
      </div>
      <div
        className={`gap-2 px-3 md:px-4 py-1 md:py-1 flex items-center justify-between font-sans ${
          project.tile === "hero" ? "text-black" : "text-white"
        }`}
        style={{ backgroundColor: project.tile === "hero" ? "#ffffff" : project.bg }}
      >
        <div className="min-w-0">
          <p className="font-[var(--font-body)] font-semibold text-sm leading-tight truncate font-sans md:text-base">
            {project.title}
          </p>
          <p className="opacity-85 text-[11px] md:text-xs italic truncate">
            {project.subtitle}
          </p>
        </div>
        <span
          className="shrink-0 font-[var(--font-mono)] uppercase tracking-widest text-[9px] md:text-[10px] px-2 py-1 text-[color:var(--navy)]"
          style={{ backgroundColor: project.tagBg }}
        >
          {project.tag}
        </span>
      </div>
    </Link>
  );
}