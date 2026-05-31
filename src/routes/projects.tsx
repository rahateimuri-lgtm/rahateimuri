import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, type MouseEvent } from "react";
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
  const [pickerOn, setPickerOn] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPickerOn(new URLSearchParams(window.location.search).has("focal"));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav accent="navy" />

      <main className="px-4 md:px-8 pt-4 md:pt-6 pb-24 max-w-[1400px] mx-auto">
        {pickerOn && (
          <div className="mb-3 text-xs font-mono bg-yellow-200 text-black px-3 py-2 rounded">
            Focal picker ON — click any tile to set its focal point. Copy the printed
            <code className="mx-1">focalPoint</code> value into <code>src/lib/projects-data.ts</code>.
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[140px] md:auto-rows-[180px] gap-3 md:gap-4">
          {projects.map((p) => (
            <ProjectTile key={p.id} project={p} pickerOn={pickerOn} />
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

function ProjectTile({ project, pickerOn }: { project: Project; pickerOn: boolean }) {
  const [focal, setFocal] = useState(project.focalPoint ?? { x: 50, y: 50 });

  const handlePick = (e: MouseEvent<HTMLDivElement>) => {
    if (!pickerOn) return;
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setFocal({ x, y });
    // eslint-disable-next-line no-console
    console.log(`[${project.id}] focalPoint: { x: ${x}, y: ${y} }`);
  };

  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: project.id }}
      className={`${tileClass[project.tile]} group relative flex flex-col overflow-hidden`}
    >
      <div
        onClick={handlePick}
        className={`relative overflow-hidden ${project.tile === "hero" ? "aspect-[1920/561]" : "flex-1"}`}
        style={{ backgroundColor: project.bg }}
      >
        <img
          src={project.image}
          alt={`${project.title} cover`}
          loading="lazy"
          style={{ objectPosition: `${focal.x}% ${focal.y}%` }}
          className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
            project.tile === "hero" ? "object-contain" : "object-cover mix-blend-multiply"
          }`}
        />
        {pickerOn && (
          <>
            <div
              className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-500 pointer-events-none shadow-lg"
              style={{ left: `${focal.x}%`, top: `${focal.y}%` }}
            />
            <div className="absolute bottom-1 left-1 text-[10px] font-mono bg-black/80 text-white px-1.5 py-0.5 rounded pointer-events-none">
              {focal.x},{focal.y}
            </div>
          </>
        )}
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