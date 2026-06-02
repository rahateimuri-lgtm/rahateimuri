import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// Legacy accent prop kept so old call-sites compile; the new pill nav is fixed-color.
export type Accent = "pink" | "navy" | "blue" | "ink";

const NAME = "RAHA TEIMURI";

const tabs = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function TabNav(_props: { accent?: Accent } = {}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Floating pill — desktop */}
      <nav
        aria-label="Primary"
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all"
        style={{
          backgroundColor: scrolled ? "rgba(255,249,239,0.92)" : "rgba(255,249,239,0.7)",
          border: "1px solid var(--line)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: scrolled ? "0 10px 40px -20px rgba(32,26,22,0.25)" : "none",
        }}
      >
        <Link
          to="/"
          activeOptions={{ exact: true }}
          className="px-3 py-1.5 rounded-full text-[13px] font-[var(--font-mono)] uppercase tracking-[0.2em] text-[color:var(--ink)] hover:bg-[color:var(--accent-soft)] transition-colors"
        >
          RAHA TEIMURI
        </Link>
        <span className="w-px h-4 bg-[color:var(--line)] mx-1" aria-hidden />
        {tabs.map((t) => (
          <a
            key={t.href}
            href={t.href}
            className="px-4 py-1.5 rounded-full text-[13px] font-[var(--font-body)] text-[color:var(--ink)] hover:bg-[color:var(--accent-soft)] transition-colors"
          >
            {t.label}
          </a>
        ))}
      </nav>

      {/* Mobile floating pill — logo + burger */}
      <nav
        aria-label="Primary mobile"
        className="fixed top-3 left-3 right-3 z-50 md:hidden flex items-center justify-between px-3 py-2 rounded-full"
        style={{
          backgroundColor: "rgba(255,249,239,0.92)",
          border: "1px solid var(--line)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <Link
          to="/"
          className="px-2 py-1 text-[12px] font-[var(--font-mono)] uppercase tracking-[0.2em] text-[color:var(--ink)]"
        >
          {NAME}
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-full hover:bg-[color:var(--accent-soft)]"
        >
          <Menu className="w-5 h-5 text-[color:var(--ink)]" strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden flex flex-col"
          style={{ backgroundColor: "var(--cream)" }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[color:var(--line)]">
            <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[color:var(--ink)]">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-full hover:bg-[color:var(--accent-soft)]"
            >
              <X className="w-5 h-5 text-[color:var(--ink)]" strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 flex flex-col px-6 py-8 gap-2">
            {tabs.map((t) => (
              <a
                key={t.href}
                href={t.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-[var(--font-body)] tracking-tight text-[color:var(--ink)] py-3 border-b border-[color:var(--line)]"
              >
                {t.label}
              </a>
            ))}
          </div>
          <div className="px-6 py-6 border-t border-[color:var(--line)] flex justify-between text-[11px] font-[var(--font-mono)] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
          <span>Placeholder, EU</span>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-[color:var(--ink)]">Book a call</a>
          </div>
        </div>
      )}
    </>
  );
}