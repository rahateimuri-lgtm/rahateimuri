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
    <div className="min-h-screen bg-[color:var(--pink-soft)] text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav accent="navy" />

      <main className="px-4 md:px-8 pt-4 md:pt-6 pb-12 max-w-[1400px] mx-auto">
       <div className="bg-white p-4 md:p-6">
        {pickerOn && (
          <div className="mb-3 text-xs font-mono bg-yellow-200 text-black px-3 py-2 rounded">
            Focal picker ON — click any tile to set its focal point. Copy the printed
            <code className="mx-1">focalPoint</code> value into <code>src/lib/projects-data.ts</code>.
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-end p-2 md:p-6 max-w-[1100px] mx-auto">
          {/* Left column: Bowie on top, Paul + Pages row beneath */}
          <div className="flex flex-col gap-6 min-w-0">
            {projects.filter(p => p.tile === "bowie").map(p => (
              <div key={p.id} className="aspect-video w-full"><ProjectTile project={p} pickerOn={pickerOn} /></div>
            ))}
            <div className="grid grid-cols-[16fr_9fr] gap-6 items-start">
              {projects.filter(p => p.tile === "paul").map(p => (
                <div key={p.id} className="aspect-video"><ProjectTile project={p} pickerOn={pickerOn} /></div>
              ))}
              {projects.filter(p => p.tile === "pages").map(p => (
                <div key={p.id} className="aspect-square"><ProjectTile project={p} pickerOn={pickerOn} /></div>
              ))}
            </div>
          </div>
          {/* Right column: Viral video — 9:16 phone, bottom-aligned, shorter than full column */}
          <div className="min-w-0 flex items-end justify-center">
            {projects.filter(p => p.tile === "viral").map(p => (
              <div key={p.id} className="aspect-[9/16] h-[95%]"><ProjectTile project={p} pickerOn={pickerOn} /></div>
            ))}
          </div>
        </div>
       </div>
      </main>
    </div>
  );
}

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
      className="group relative flex flex-col overflow-hidden h-full w-full"
    >
      <div
        onClick={handlePick}
        className="relative overflow-hidden flex-1 min-h-0 border border-black/80"
        style={{ backgroundColor: project.bg }}
      >
        <img
          src={project.image}
          alt={`${project.title} cover`}
          loading="lazy"
          style={{ objectPosition: `${focal.x}% ${focal.y}%` }}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
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
      <div className="gap-2 px-3 py-1.5 flex items-center justify-between bg-white border border-black/80 border-t-0 shrink-0">
        <p className="font-[var(--font-mono)] text-[11px] md:text-xs text-black truncate">
          {project.shortTitle ?? project.title}
        </p>
        {project.tile === "viral" && (
          <span className="shrink-0 font-[var(--font-mono)] uppercase tracking-widest text-[9px] px-1.5 py-0.5 text-black border border-black/80">
            {project.tag}
          </span>
        )}
      </div>
    </Link>
  );
}