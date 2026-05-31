import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { getProject, projects, type Project } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Raha Teimuri` : "Project — Raha Teimuri";
    const description = p?.description ?? "Case study.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <p>Project not found. <Link to="/projects" className="underline">Back</Link></p>
    </div>
  ),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[color:var(--navy-soft)] text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav accent="navy" />

      <main className="px-6 md:px-12 pb-24 max-w-5xl mx-auto">
        <Link
          to="/projects"
          className="inline-block font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-70 hover:opacity-100 mb-8"
        >
          ← All projects
        </Link>

        <article className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <div className="overflow-hidden border border-[color:var(--navy)]/15 bg-[color:var(--navy)]/5">
              <img
                src={project.image}
                alt={`${project.title} campaign visual`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5 space-y-5">
            <div className="font-[var(--font-mono)] text-[9px] uppercase tracking-widest opacity-60">
              {project.year}
            </div>
            <h1 className="font-[var(--font-body)] font-bold leading-none tracking-tight text-3xl md:text-4xl">
              {project.title}
              <span className="block italic font-normal text-xl md:text-2xl mt-1.5 opacity-70">
                {project.subtitle}
              </span>
            </h1>

            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-70">
              {project.role}
            </p>

            <p className="text-sm md:text-[15px] leading-relaxed opacity-85">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-[color:var(--navy)]/15">
              {project.stats.map(([n, label]) => (
                <div key={label}>
                  <p className="font-[var(--font-body)] font-bold text-base md:text-lg leading-tight">
                    {n}
                  </p>
                  <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-widest opacity-70 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {project.links.length > 0 && (
              <div className="pt-5 border-t border-[color:var(--navy)]/15">
                <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-widest opacity-60 mb-3">
                  Linked Accounts
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-full border border-[color:var(--navy)]/30 text-[10px] font-[var(--font-mono)] uppercase tracking-widest hover:bg-[color:var(--navy)] hover:text-white transition-colors"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        <div className="mt-20 pt-6 border-t border-[color:var(--navy)]/15 flex items-center justify-between">
          <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60">
            Next
          </span>
          <Link
            to="/projects/$projectId"
            params={{ projectId: next.id }}
            className="font-[var(--font-body)] italic text-lg md:text-xl hover:opacity-70"
          >
            {next.title} →
          </Link>
        </div>
      </main>
    </div>
  );
}