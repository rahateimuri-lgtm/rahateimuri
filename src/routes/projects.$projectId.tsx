import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { getProject, projects, type Project } from "@/lib/projects-data";

// Platform color tokens — used for the accounts table & featured brand cards
const PLATFORM_COLORS: Record<string, string> = {
  Instagram: "#E1306C",
  TikTok: "#FE2C55",
  YouTube: "#FF0000",
  Facebook: "#1877F2",
};
const platformColor = (p: string) => PLATFORM_COLORS[p] ?? "#0F1B2E";

// Parse "311K", "1.7K", "1M+" into a number for sorting/aggregation
const parseFollowers = (s: string): number => {
  const cleaned = s.replace(/[^\d.kKmM]/g, "");
  const num = parseFloat(cleaned);
  if (isNaN(num)) return 0;
  if (/m/i.test(cleaned)) return num * 1_000_000;
  if (/k/i.test(cleaned)) return num * 1_000;
  return num;
};
const formatK = (n: number) =>
  n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : `${Math.round(n / 1_000)}K`;

type Brand = {
  brand: string;
  total: number;
  platforms: { platform: string; followers: string; href: string }[];
};
const groupByBrand = (accounts: NonNullable<Project["accounts"]>): Brand[] => {
  const map = new Map<string, Brand>();
  for (const a of accounts) {
    const key = a.brand ?? a.name;
    const entry = map.get(key) ?? { brand: key, total: 0, platforms: [] };
    entry.total += parseFollowers(a.followers);
    entry.platforms.push({ platform: a.platform, followers: a.followers, href: a.href });
    map.set(key, entry);
  }
  return Array.from(map.values()).sort((x, y) => y.total - x.total);
};

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

        {/* COVER — hidden when the project flags no real cover */}
        {!project.hideCover && (
          <div className="overflow-hidden border border-[color:var(--navy)]/15 bg-[color:var(--navy)]/5 mb-12 md:mb-16">
            <img
              src={project.image}
              alt={`${project.title} campaign visual`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* HERO STAT SLAB — for stat-driven projects (e.g. Pages Built) */}
        {project.hideCover && (
          <section className="mb-12 md:mb-16">
            {/* Eye-catching hero moment: oversized headline stat */}
            <div className="relative bg-[color:var(--navy)] text-[color:var(--pink-soft)] overflow-hidden">
              {/* Big mono ticker across the top */}
              <div className="flex items-center justify-between gap-4 px-5 md:px-8 pt-5 md:pt-6 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] opacity-70">
                <span>Combined organic reach</span>
                <span>2022 → Now</span>
              </div>
              {/* The number */}
              <div className="px-3 md:px-6 pt-2 pb-4 md:pb-6">
                <p
                  className="font-[var(--font-gt)] italic leading-[0.78] tracking-[-0.04em] text-[28vw] md:text-[22vw] lg:text-[18rem] text-[color:var(--pink-soft)]"
                  style={{ WebkitTextStroke: "0" }}
                >
                  {project.stats[0]?.[0] ?? "1M+"}
                </p>
              </div>
              {/* Footer label + supporting stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[color:var(--pink-soft)]/20">
                <div className="px-5 md:px-8 py-4 md:py-5 md:border-r border-[color:var(--pink-soft)]/20">
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-70">
                    {project.stats[0]?.[1] ?? "Followers"}
                  </p>
                </div>
                {project.stats.slice(1).map(([n, label]) => (
                  <div
                    key={label}
                    className="px-5 md:px-8 py-4 md:py-5 md:border-r last:md:border-r-0 border-[color:var(--pink-soft)]/20 flex items-baseline gap-3"
                  >
                    <span className="font-[var(--font-body)] font-bold text-3xl md:text-4xl leading-none">
                      {n}
                    </span>
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-70">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
            {!project.hideCover && (
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
            )}

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

        {/* ACCOUNTS */}
        {project.accounts && project.accounts.length > 0 && (
          <AccountsSection accounts={project.accounts} />
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

function AccountsSection({ accounts }: { accounts: NonNullable<Project["accounts"]> }) {
  const current = accounts.filter((a) => a.group === "current");
  const built = accounts.filter((a) => a.group !== "current");
  const builtBrands = groupByBrand(built);
  const featured = builtBrands.slice(0, 3);
  const builtTotal = builtBrands.reduce((sum, b) => sum + b.total, 0);

  // Group current accounts by brand so multi-platform brands collapse into one card.
  const currentBrands = Array.from(
    current.reduce((map, a) => {
      const key = a.brand ?? a.name;
      const entry = map.get(key) ?? {
        brand: key,
        logo: a.logo,
        channels: [] as { platform: string; href: string }[],
      };
      if (!entry.logo && a.logo) entry.logo = a.logo;
      entry.channels.push({ platform: a.platform, href: a.href });
      map.set(key, entry);
      return map;
    }, new Map<string, { brand: string; logo?: string; channels: { platform: string; href: string }[] }>()).values()
  );

  return (
    <section className="space-y-16 md:space-y-24 mb-16 md:mb-24">
      {/* NOW MANAGING */}
      {current.length > 0 && (
        <div>
          <div className="flex items-end justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--pink)] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--pink)]" />
              </span>
              <h2 className="font-[var(--font-body)] font-bold text-2xl md:text-3xl tracking-tight">
                Now managing
              </h2>
            </div>
            <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-60">
              Live · {current.length} pages
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {currentBrands.map((b) => (
              <article
                key={b.brand}
                className="relative overflow-hidden border-2 border-[color:var(--navy)] bg-[color:var(--pink-soft)] p-6 md:p-7 flex flex-col gap-5"
                style={{ boxShadow: "6px 6px 0 0 var(--navy)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="px-2 py-1 bg-[color:var(--navy)] text-[color:var(--pink-soft)] font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em]">
                    Now @ Yousician
                  </span>
                  {b.logo && (
                    <img
                      src={b.logo}
                      alt={`${b.brand} logo`}
                      className="h-14 w-14 md:h-16 md:w-16 object-contain shrink-0"
                    />
                  )}
                </div>
                <h3 className="font-[var(--font-body)] font-bold leading-[0.92] tracking-tight text-4xl md:text-5xl">
                  {b.brand}
                </h3>
                <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-70">
                  Social Media Lead · 2025 → Now
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {b.channels.map((c) => {
                    const accent = platformColor(c.platform);
                    return (
                      <a
                        key={c.platform + c.href}
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border-2 hover:bg-[color:var(--navy)] hover:text-[color:var(--pink-soft)] hover:border-[color:var(--navy)] transition-colors"
                        style={{ borderColor: accent, color: accent }}
                      >
                        {c.platform} ↗
                      </a>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* BUILT FROM SCRATCH */}
      {built.length > 0 && (
        <div>
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-60 mb-1">
                Carpe Diem Tours · 2022 – 2025
              </p>
              <h2 className="font-[var(--font-body)] font-bold text-2xl md:text-3xl tracking-tight">
                Built from scratch
              </h2>
            </div>
            <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-60">
              {formatK(builtTotal)} combined
            </span>
          </div>

          {/* Top 3 brand cards */}
          {featured.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-10">
              {featured.map((b, i) => {
                const accent = platformColor(b.platforms[0]?.platform ?? "Instagram");
                return (
                  <article
                    key={b.brand}
                    className="relative overflow-hidden border border-[color:var(--navy)] bg-white flex flex-col"
                    style={{ borderTop: `6px solid ${accent}` }}
                  >
                    <div className="p-5 md:p-6 flex-1 flex flex-col gap-4">
                      <div className="flex items-center justify-between font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-70">
                        <span>0{i + 1} / Brand</span>
                        <span>
                          {b.platforms.length} {b.platforms.length === 1 ? "channel" : "channels"}
                        </span>
                      </div>
                      <h3 className="font-[var(--font-body)] font-bold text-xl md:text-2xl leading-tight">
                        {b.brand}
                      </h3>
                      <p
                        className="font-[var(--font-gt)] italic leading-[0.85] tracking-[-0.03em] text-6xl md:text-7xl"
                        style={{ color: accent }}
                      >
                        {formatK(b.total)}
                      </p>
                      <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-60 -mt-2">
                        Followers, organic
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {b.platforms.map((p) => (
                          <a
                            key={p.platform + p.href}
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] px-2 py-1 border hover:bg-[color:var(--navy)] hover:text-white hover:border-[color:var(--navy)] transition-colors"
                            style={{ borderColor: accent, color: accent }}
                          >
                            {p.platform} · {p.followers}
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Full list */}
          <div className="flex items-end justify-between mb-4">
            <h3 className="font-[var(--font-body)] font-bold text-lg md:text-xl tracking-tight opacity-80">
              Every account
            </h3>
            <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-60">
              {String(built.length).padStart(2, "0")} pages
            </span>
          </div>
          <ul className="border-t-2 border-[color:var(--navy)]">
            {built.map((a, i) => {
              const accent = platformColor(a.platform);
              return (
                <li
                  key={`${a.name}-${a.platform}-${i}`}
                  className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1.4fr_1fr_auto_auto] gap-x-4 md:gap-x-6 items-center px-1 py-4 border-b border-[color:var(--navy)]/15 hover:bg-[color:var(--navy)]/[0.03] transition-colors"
                >
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="font-[var(--font-body)] font-semibold text-base md:text-lg truncate">
                    {a.brand ?? a.name}
                  </span>
                  <span
                    className="hidden md:inline font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: accent }}
                  >
                    {a.platform}
                  </span>
                  <span className="font-[var(--font-body)] font-bold tabular-nums text-xl md:text-2xl text-[color:var(--navy)] justify-self-end">
                    {a.followers}
                  </span>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${a.brand ?? a.name} on ${a.platform}`}
                    className="col-span-3 md:col-span-1 justify-self-end font-[var(--font-mono)] text-[10px] uppercase tracking-[0.22em] opacity-60 group-hover:opacity-100 underline-offset-4 hover:underline"
                  >
                    <span className="md:hidden">{a.platform} · </span>Visit ↗
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}