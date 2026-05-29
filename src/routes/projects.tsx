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
  // Bowie hero — big landscape
  hero: "col-span-2 md:col-span-4 row-span-2 md:row-span-3",
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
      className={`${tileClass[project.tile]} group relative block overflow-hidden border border-[color:var(--navy)]/20 bg-[color:var(--navy)]/5`}
    >
      <img
        src={project.image}
        alt={`${project.title} cover`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex items-end justify-between gap-2 text-white">
        <div className="min-w-0">
          <p className="font-[var(--font-body)] font-semibold text-sm md:text-base leading-tight truncate">
            {project.title}
          </p>
          <p className="opacity-80 text-[11px] md:text-xs italic truncate">{project.subtitle}</p>
        </div>
        <span className="shrink-0 font-[var(--font-mono)] uppercase tracking-widest text-[9px] md:text-[10px] px-2 py-1 bg-white text-[color:var(--navy)]">
          {project.tag}
        </span>
      </div>
    </Link>
  );
}