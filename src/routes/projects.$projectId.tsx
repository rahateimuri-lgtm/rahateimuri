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
    <div className="min-h-screen bg-background text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav accent="navy" />

      <main className="px-6 md:px-12 pb-24 max-w-6xl mx-auto">
        <Link
          to="/projects"
          className="inline-block font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-70 hover:opacity-100 mb-8"
        >
          ← All projects
        </Link>

        {/* HERO */}
        <header className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <div className="md:col-span-7 space-y-4">
            <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-60 flex items-center gap-3">
              <span>{project.year}</span>
              <span className="h-px w-8 bg-[color:var(--navy)]/30" />
              <span>{project.tag}</span>
            </div>
            <h1 className="font-[var(--font-body)] font-bold leading-[0.95] tracking-tight text-5xl md:text-7xl">
              {project.title}
            </h1>
            <p className="italic font-normal text-2xl md:text-3xl opacity-70">
              {project.subtitle}
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-60 mb-2">
              Role
            </p>
            <p className="text-base md:text-lg leading-snug">{project.role}</p>
          </div>
        </header>

        {/* COVER */}
        <div className="overflow-hidden border border-[color:var(--navy)]/15 bg-[color:var(--navy)]/5 mb-12 md:mb-16">
          <img
            src={project.image}
            alt={`${project.title} campaign visual`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* OVERVIEW + STATS */}
        <section className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-7">
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-60 mb-4">
              Overview
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              {project.description}
            </p>

            {project.bullets && project.bullets.length > 0 && (
              <ul className="mt-8 space-y-3.5">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4 text-[15px] md:text-base leading-relaxed">
                    <span
                      aria-hidden
                      className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-[color:var(--navy)]"
                    />
                    <span className="opacity-90">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <aside className="md:col-span-5 space-y-8 md:pl-6 md:border-l border-[color:var(--navy)]/15">
            <div className="grid grid-cols-3 gap-4">
              {project.stats.map(([n, label]) => (
                <div key={label}>
                  <p className="font-[var(--font-body)] font-bold text-lg md:text-xl leading-tight">
                    {n}
                  </p>
                  <p className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] opacity-70 mt-1.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {project.links.length > 0 && (
              <div>
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-60 mb-3">
                  Links
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-full border border-[color:var(--navy)]/30 text-[10px] font-[var(--font-mono)] uppercase tracking-[0.18em] hover:bg-[color:var(--navy)] hover:text-white transition-colors"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </section>

        {/* VIDEOS */}
        {project.videos && project.videos.length > 0 && (
          <section className="mb-16 md:mb-24">
            <div className="flex items-end justify-between mb-6">
              <h2 className="font-[var(--font-body)] font-bold text-2xl md:text-3xl tracking-tight">
                Watch the work
              </h2>
              <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-60">
                {String(project.videos.length).padStart(2, "0")} pieces
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {project.videos.map((v) => (
                <figure key={v.href} className="group">
                  <div className="relative bg-black border border-[color:var(--navy)]/15 overflow-hidden aspect-[9/14]">
                    {v.embed ? (
                      <iframe
                        src={v.embed}
                        title={v.title}
                        loading="lazy"
                        allow="encrypted-media"
                        scrolling="no"
                        className="absolute inset-0 w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/60 font-[var(--font-mono)] text-xs uppercase tracking-widest">
                        Video coming soon
                      </div>
                    )}
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-sm opacity-85">{v.title}</span>
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-70 hover:opacity-100 underline-offset-4 hover:underline"
                    >
                      Open ↗
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* GALLERY */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-16 md:mb-24">
            <h2 className="font-[var(--font-body)] font-bold text-2xl md:text-3xl tracking-tight mb-6">
              Selected assets
            </h2>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {project.gallery.map((g) => (
                <figure key={g.src} className="space-y-2">
                  <div className="overflow-hidden border border-[color:var(--navy)]/15 bg-black aspect-[16/9] flex items-center justify-center">
                    <img src={g.src} alt={g.alt} className="w-full h-full object-contain" />
                  </div>
                  {g.caption && (
                    <figcaption className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-60">
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 pt-6 border-t border-[color:var(--navy)]/15 flex items-center justify-between">
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