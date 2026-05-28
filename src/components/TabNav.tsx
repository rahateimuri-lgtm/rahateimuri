import { Link } from "@tanstack/react-router";

export type Accent = "pink" | "navy" | "blue";

const accentVar: Record<Accent, string> = {
  pink: "var(--pink)",
  navy: "var(--navy)",
  blue: "var(--blue)",
};

const tabs = [
  { to: "/", label: "Me" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function TabNav({ accent }: { accent: Accent }) {
  const color = accentVar[accent];
  return (
    <nav className="w-full pt-10 pb-12 px-6 md:px-12 flex justify-center items-center gap-10 md:gap-24">
      {tabs.map((t) => (
        <Link
          key={t.to}
          to={t.to}
          activeOptions={{ exact: true }}
          className="group relative inline-flex items-center justify-center"
        >
          {({ isActive }) => (
            <span
              className="font-[var(--font-body)] italic font-medium text-2xl md:text-3xl px-8 md:px-10 py-2 md:py-3 rounded-full border-2 transition-all"
              style={{
                color: isActive ? "#fff" : color,
                borderColor: color,
                backgroundColor: isActive ? color : "transparent",
              }}
            >
              {t.label}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}