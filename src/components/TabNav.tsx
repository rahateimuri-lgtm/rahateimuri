import { Link } from "@tanstack/react-router";

type Variant = "pink" | "navy" | "blue";

const variants: Record<Variant, { border: string; active: string; text: string }> = {
  pink: {
    border: "border-[color:var(--pink)] text-[color:var(--pink)]",
    active: "bg-[color:var(--pink)] text-white",
    text: "text-[color:var(--pink)]",
  },
  navy: {
    border: "border-[color:var(--navy)] text-[color:var(--navy)]",
    active: "bg-[color:var(--navy)] text-white",
    text: "text-[color:var(--navy)]",
  },
  blue: {
    border: "border-[color:var(--blue)] text-[color:var(--blue)]",
    active: "bg-[color:var(--blue)] text-white",
    text: "text-[color:var(--blue)]",
  },
};

const tabs = [
  { to: "/", label: "Me" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function TabNav({ variant }: { variant: Variant }) {
  const v = variants[variant];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center backdrop-blur-md bg-background/70">
      <Link to="/" className={`font-[var(--font-mono)] text-xs uppercase tracking-tighter ${v.text}`}>
        RT—26
      </Link>
      <div className="flex gap-2 md:gap-3">
        {tabs.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            activeOptions={{ exact: true }}
            className={`px-4 md:px-6 py-2 rounded-full border-2 ${v.border} font-[var(--font-mono)] text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all hover:scale-105`}
            activeProps={{ className: `px-4 md:px-6 py-2 rounded-full border-2 ${v.border} ${v.active} font-[var(--font-mono)] text-[10px] md:text-xs uppercase tracking-[0.2em]` }}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}