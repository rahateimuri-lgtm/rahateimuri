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
    <nav className="w-full pt-8 pb-10 px-6 md:px-12 flex justify-center items-center gap-4 md:gap-8">
      {tabs.map((t) => (
        <Link
          key={t.to}
          to={t.to}
          activeOptions={{ exact: true }}
          className="group relative inline-flex items-center justify-center"
        >
          {({ isActive }) => (
            <span
              className="font-sans text-sm md:text-base px-5 md:px-6 py-1 rounded-full border transition-all hover:opacity-70"
              style={{
                color,
                borderColor: color,
                borderWidth: "0.5px",
                backgroundColor: "transparent",
                fontWeight: isActive ? 500 : 400,
                letterSpacing: "0.01em",
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