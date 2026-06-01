import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { getProject, projects, type Project } from "@/lib/projects-data";
import { Instagram, Music2, Youtube, Facebook } from "lucide-react";
import romeLogo from "@/assets/rome-italy-travel.png.asset.json";
import guitarTunaLogo from "@/assets/guitartuna.png.asset.json";
import yousicianLogoAsset from "@/assets/yousician.png.asset.json";

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

  if (project.id === "pages") {
    return <PagesDarkLayout next={next} />;
  }

  return (
    <div className="min-h-screen bg-[color:var(--pink-soft)] text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav accent="navy" />

      <main className="px-4 md:px-8 pt-4 md:pt-6 pb-12 max-w-[1400px] mx-auto">
       <div className="bg-white px-6 md:px-12 pt-10 md:pt-14 pb-20 md:pb-24">
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
              <div className="px-5 md:px-8 pt-3 pb-5 md:pb-7">
                <p className="font-[var(--font-gt)] italic leading-[0.82] tracking-[-0.03em] text-[13vw] md:text-[9vw] lg:text-[7rem] text-[color:var(--pink-soft)]">
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

// ─────────────────────────────────────────────────────────────────────────────
// Dark editorial layout — only for the "pages" project (social management)
// ─────────────────────────────────────────────────────────────────────────────

const PLATFORM_ICONS: Record<string, typeof Instagram> = {
  Instagram: Instagram,
  TikTok: Music2,
  YouTube: Youtube,
  Facebook: Facebook,
};

function PlatformIcon({ name, className }: { name: string; className?: string }) {
  const Icon = PLATFORM_ICONS[name] ?? Instagram;
  return <Icon className={className} strokeWidth={1.75} />;
}

// Minimal-chic palette
// Oatly-inspired chalkboard palette
const INK = "#0a0a0a";           // page background — chalkboard black
const PAPER = "#ffffff";         // card surface — white
const CHALK = "#f4f1ea";         // off-white chalky text on black
const ACCENT = "#9a9488";        // muted chalk accent
const SAND = "#ECE8E1";          // soft bone for inner blocks
const SAND_DEEP = "#D4CCBC";
const MINT = "#FF3B30";          // hot pop accent (chalkboard red)
const YOUSICIAN_GREEN = "#5BC68F";
const GUITARTUNA_LIME = "#D7EA63";

// Chalkboard noise — subtle SVG grain layered over the black background
const CHALK_NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")";

// Tiny inline sparkle, used as decorative accent (Oatly-style)
function Sparkle({ className = "", color = PAPER }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden>
      <path d="M12 0c.6 5 2 6.4 7 7-5 .6-6.4 2-7 7-.6-5-2-6.4-7-7 5-.6 6.4-2 7-7z" />
    </svg>
  );
}

function PagesDarkLayout({ next }: { next: Project }) {
  return (
    <div
      className="min-h-screen font-[var(--font-body)] relative"
      style={{ backgroundColor: INK, color: CHALK, backgroundImage: CHALK_NOISE }}
    >
      <TabNav accent="navy" />

      {/* Decorative chalk accents on the dark canvas */}
      <Sparkle className="hidden md:block absolute top-24 right-10 h-10 w-10 opacity-80" />
      <Sparkle className="hidden md:block absolute top-[55%] left-6 h-6 w-6 opacity-60" />
      <Sparkle className="hidden md:block absolute bottom-32 right-16 h-8 w-8 opacity-70" />

      <main className="px-4 md:px-8 pt-4 md:pt-6 pb-12 max-w-[1400px] mx-auto relative">
        {/* White-framed card — the signature Oatly "poster inside a poster" */}
        <div
          className="relative px-6 md:px-12 pt-10 md:pt-14 pb-16 md:pb-20"
          style={{
            backgroundColor: PAPER,
            color: "#0a0a0a",
            border: "10px solid #ffffff",
            outline: "1px solid #0a0a0a10",
          }}
        >
          <Link
            to="/projects"
            className="inline-block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.25em] opacity-70 hover:opacity-100 mb-10"
          >
            ← All projects
          </Link>

          {/* PAGE HEADER */}
          <header className="mb-14 md:mb-20 flex flex-col gap-3 relative">
            <span
              className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-2"
              style={{ color: "#0a0a0a" }}
            >
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: MINT }} />
              Social Media Management · 2022 → Now
            </span>
            <h1
              className="font-[var(--font-display)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-6xl md:text-[8.5rem]"
              style={{ color: "#0a0a0a" }}
            >
              Pages,<br />built &amp; <span style={{ color: MINT }}>managed.</span>
            </h1>
            <Sparkle className="absolute -top-4 right-2 h-8 w-8" color="#0a0a0a" />
          </header>

          {/* ───── SECTION 1 — BUILT FROM SCRATCH ───── */}
          <section className="mb-16 md:mb-24">
            <SectionHead
              kicker="01"
              title="Built from Scratch"
              sub="One brand · many cities · all organic · 2022 — 2025"
            />

            <BuiltFromScratchHero />
          </section>

          {/* ───── SECTION 2 — CURRENTLY MANAGING ───── */}
          <section className="mb-16 md:mb-24">
            <SectionHead
              kicker="02 / Currently Managing"
              title="Currently Managing"
              sub="Live · 2025 → Now"
            />

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <ManageCard
                logo={yousicianLogoAsset.url}
                bg={YOUSICIAN_GREEN}
                title="Yousician"
                role="Social Media Lead"
                stat="2.1M+ followers"
                statLabel="Combined reach"
                channels={[
                  { p: "Instagram", href: "https://www.instagram.com/yousician/" },
                  { p: "TikTok", href: "https://www.tiktok.com/@yousician" },
                  { p: "YouTube", href: "https://www.youtube.com/@yousician" },
                ]}
              />
              <ManageCard
                logo={guitarTunaLogo.url}
                bg={GUITARTUNA_LIME}
                title="GuitarTuna"
                role="Social Media Strategist"
                stat="450K+ followers"
                statLabel="Combined reach"
                channels={[
                  { p: "Instagram", href: "https://www.instagram.com/guitartuna" },
                ]}
              />
            </div>
          </section>

          {/* ───── SECTION 3 — HOW I SCALE ───── */}
          <section className="mb-12 md:mb-16">
            <SectionHead
              kicker="03 / How I Scale"
              title="How I Scale"
              sub="Building partnerships that grow"
            />

            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {[
                "Built a system connecting brands with 50+ vetted influencers.",
                "Manage freelancer workflows across multiple parallel campaigns.",
                "Scaled account growth through strategic partnerships, not paid follows.",
              ].map((line, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 md:p-7 flex flex-col gap-4 min-h-[180px]"
                  style={{ backgroundColor: SAND }}
                >
                  <span
                    className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] tabular-nums"
                    style={{ color: ACCENT }}
                  >
                    0{i + 1}
                  </span>
                  <p className="font-[var(--font-body)] text-base md:text-lg leading-snug">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* NEXT */}
          <div
            className="mt-12 pt-6 border-t flex items-center justify-between"
            style={{ borderColor: "#1d1d1b20" }}
          >
            <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] opacity-50">
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
        </div>
      </main>
    </div>
  );
}

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return (
    <div className="mb-8 md:mb-10 flex flex-col gap-2 relative">
      <span
        className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-2"
        style={{ color: "#0a0a0a" }}
      >
        <span className="inline-block h-1.5 w-6" style={{ background: MINT }} />
        {kicker}
      </span>
      <h2
        className="font-[var(--font-display)] font-black uppercase text-4xl md:text-[58px] leading-[0.9] tracking-[-0.02em]"
        style={{ color: "#0a0a0a" }}
      >
        {title}
      </h2>
      <p className="opacity-70 text-sm md:text-base">{sub}</p>
    </div>
  );
}

function ManageCard({
  logo,
  bg,
  title,
  role,
  stat,
  statLabel,
  channels,
}: {
  logo?: string;
  bg: string;
  title: string;
  role: string;
  stat: string;
  statLabel: string;
  channels: { p: string; href: string }[];
}) {
  return (
    <article
      className="relative rounded-3xl p-7 md:p-9 flex flex-col gap-7 transition-transform hover:-translate-y-0.5 overflow-hidden"
      style={{ backgroundColor: bg, color: INK }}
    >
      {/* TOP — logo + title */}
      <div className="flex items-center gap-4">
        {logo && (
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-16 w-16 md:h-20 md:w-20 rounded-2xl object-cover shrink-0 bg-white/40"
          />
        )}
        <div className="min-w-0">
          <h3 className="font-[var(--font-body)] font-semibold text-3xl md:text-4xl tracking-tight leading-none">
            {title}
          </h3>
          <p className="mt-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] opacity-70">
            {role}
          </p>
        </div>
      </div>

      {/* MIDDLE — what I do */}
      <div>
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.28em] opacity-60">
          {statLabel}
        </p>
        <p className="mt-1.5 font-[var(--font-body)] text-lg md:text-xl">
          {stat}
        </p>
      </div>

      {/* BOTTOM — channels as filled pills inside the card */}
      <div className="mt-auto flex flex-wrap gap-2 pt-5 border-t" style={{ borderColor: "#1d1d1b20" }}>
        {channels.map((c) => (
          <a
            key={c.p}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} on ${c.p}`}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-[var(--font-mono)] uppercase tracking-[0.2em] transition-colors hover:bg-[#1d1d1b] hover:text-white"
            style={{ backgroundColor: "#ffffff80", color: INK }}
          >
            <PlatformIcon name={c.p} className="h-3.5 w-3.5" />
            {c.p}
          </a>
        ))}
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Built-from-scratch hero — Carpe Diem umbrella, scannable strengths
// ─────────────────────────────────────────────────────────────────────────────

const SUB_BRANDS: { name: string; reach: string; channels: string; logo?: string; tint: string; href: string }[] = [
  { name: "Rome Italy Travel", reach: "934K", channels: "IG · TT · YT · FB", logo: romeLogo.url, tint: "#1d1d1b", href: "https://www.instagram.com/romeitalytravel/" },
  { name: "Tipsy Tours", reach: "99K", channels: "IG · TT", tint: "#E07A5F", href: "https://www.instagram.com/tipsytours/" },
  { name: "London City Travels", reach: "33K", channels: "IG", tint: "#3D5A80", href: "https://www.instagram.com/londoncitytravels/" },
  { name: "Rome With Chef", reach: "17K", channels: "IG · TT", tint: "#9B7E4A", href: "https://www.instagram.com/romewithchef/" },
  { name: "Carpediem Tours", reach: "16K", channels: "IG · TT · YT", tint: "#5B8C5A", href: "https://www.instagram.com/carpediemtours/" },
  { name: "Barcelona Carpe Diem", reach: "12K", channels: "IG", tint: "#C44536", href: "https://www.instagram.com/barcelonacarpediem/" },
];

const STRENGTHS = [
  "Grew 1.1M+ followers across 6 accounts — 100% organic.",
  "€40K+ direct tour bookings from short-form video alone.",
  "Turned a niche tour brand into the city's biggest travel community.",
  "Led a team of 4 social managers across 4 cities.",
];

function BrandAvatar({ name, logo, tint }: { name: string; logo?: string; tint: string }) {
  const initial = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  if (logo) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-10 w-10 rounded-full object-cover shrink-0 ring-2 ring-white"
      />
    );
  }
  return (
    <div
      aria-label={`${name} placeholder logo`}
      className="h-10 w-10 rounded-full shrink-0 grid place-items-center text-white text-[11px] font-[var(--font-mono)] tracking-wider ring-2 ring-white"
      style={{ backgroundColor: tint }}
    >
      {initial}
    </div>
  );
}

function BuiltFromScratchHero() {
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{ backgroundColor: SAND, color: INK }}
    >
      {/* TOP — the headline split: big number ↔ strengths */}
      <div className="grid md:grid-cols-[1.15fr_1fr]">
        {/* LEFT — the number */}
        <div
          className="p-8 md:p-12 flex flex-col justify-center items-center md:items-start gap-5 border-b md:border-b-0 md:border-r text-center md:text-left"
          style={{ borderColor: "#1d1d1b15" }}
        >
          <span
            className="text-[11px] uppercase tracking-[0.32em]"
            style={{ color: ACCENT }}
          >
            Combined organic reach
          </span>
          {/* Circular badge holding the number */}
          <div
            className="relative aspect-square w-[78%] md:w-[88%] max-w-[360px] rounded-full grid place-items-center"
            style={{
              background: "#ffffff",
              boxShadow: "inset 0 0 0 1px #1d1d1b10",
            }}
          >
            <p
              className="font-[var(--font-display)] font-black leading-none tracking-[-0.06em] text-[20vw] md:text-[8.5vw] lg:text-[7.25rem]"
              style={{ color: INK }}
            >
              1.1M<span style={{ color: MINT }}>+</span>
            </p>
            {/* small follower caption inside circle */}
            <span
              className="absolute bottom-[14%] font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em]"
              style={{ color: ACCENT }}
            >
              followers
            </span>
          </div>
          <p className="text-base md:text-lg leading-snug opacity-85 max-w-[36ch]">
            Proof I can take an unknown brand and turn it into the <strong>#1 community in its niche</strong> — no ads, no shortcuts.
          </p>
          <span
            className="text-[11px] uppercase tracking-[0.3em]"
            style={{ color: ACCENT }}
          >
            2022 → 2025
          </span>
        </div>

        {/* RIGHT — year + strengths */}
        <div className="p-8 md:p-12 flex flex-col gap-6">
          <span
            className="text-[11px] uppercase tracking-[0.32em]"
            style={{ color: ACCENT }}
          >
            What I did
          </span>

          <ul className="flex flex-col gap-3.5">
            {STRENGTHS.map((s, i) => (
              <li key={i} className="flex gap-3.5 items-start">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: MINT }}
                />
                <span className="text-[15px] md:text-base leading-snug">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM — sub-brand chip grid with round logos */}
      <div
        className="px-5 md:px-8 py-5 md:py-6 border-t"
        style={{ borderColor: "#1d1d1b15", backgroundColor: "#E4EBDB" }}
      >
        <div className="flex items-center justify-between mb-3.5">
          <p className="text-[11px] uppercase tracking-[0.28em] opacity-55">
            6 sub-brands · contribution
          </p>
          <p className="text-[11px] uppercase tracking-[0.28em] opacity-40">
            Followers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {SUB_BRANDS.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${b.name}`}
              className="rounded-2xl px-3 py-2.5 flex items-center gap-3 transition-transform hover:-translate-y-0.5 hover:shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <BrandAvatar name={b.name} logo={b.logo} tint={b.tint} />
              <div className="flex flex-col leading-tight min-w-0 flex-1">
                <span className="text-[14px] truncate">{b.name}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] opacity-50 mt-0.5">
                  {b.channels}
                </span>
              </div>
              <span className="font-medium tabular-nums text-sm shrink-0">
                {b.reach}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}