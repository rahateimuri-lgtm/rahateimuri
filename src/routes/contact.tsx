import { createFileRoute } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Raha Teimuri" },
      { name: "description", content: "Get in touch with Raha Teimuri — email, phone, LinkedIn." },
      { property: "og:title", content: "Contact — Raha Teimuri" },
      { property: "og:description", content: "Get in touch — Berlin." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-[color:var(--blue-soft)] text-[color:var(--blue)] font-[var(--font-body)]">
      <TabNav variant="blue" />

      <main className="px-6 md:px-12 pt-32 pb-24 max-w-6xl mx-auto">
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] mb-8 opacity-70">
          § Let's talk · Berlin
        </p>

        <h1 className="font-[var(--font-display)] font-extrabold tracking-[-0.03em] leading-[0.85] text-6xl md:text-8xl mb-16">
          Get in <span className="italic font-normal">touch</span>.
        </h1>

        <div className="grid md:grid-cols-2 gap-16 md:gap-12">
          {/* Left — direct contact */}
          <div className="space-y-10">
            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60 mb-2">
                Email
              </p>
              <a
                href="mailto:rahateimuri@gmail.com"
                className="block text-2xl md:text-3xl italic underline decoration-2 underline-offset-8 hover:opacity-70 transition-opacity break-all"
              >
                rahateimuri@gmail.com
              </a>
            </div>

            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60 mb-2">
                Phone
              </p>
              <a
                href="tel:+393895617848"
                className="block text-2xl md:text-3xl hover:opacity-70 transition-opacity"
              >
                +39 389 561 7848
              </a>
            </div>

            <div>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60 mb-2">
                Based in
              </p>
              <p className="text-2xl md:text-3xl">Berlin, Germany</p>
            </div>
          </div>

          {/* Right — social */}
          <div className="space-y-6 md:border-l-2 md:border-[color:var(--blue)]/20 md:pl-12">
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60 mb-6">
              Follow / Connect
            </p>

            {[
              { label: "LinkedIn", handle: "/in/rahateimuri", href: "https://linkedin.com/in/rahateimuri" },
              { label: "Instagram", handle: "@raha.teimuri", href: "https://instagram.com/raha.teimuri" },
              { label: "Email", handle: "rahateimuri@gmail.com", href: "mailto:rahateimuri@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between border-b-2 border-[color:var(--blue)]/20 py-4 hover:border-[color:var(--blue)] transition-colors group"
              >
                <span className="font-[var(--font-display)] font-bold text-2xl md:text-3xl group-hover:italic transition-all">
                  {s.label}
                </span>
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100">
                  {s.handle} ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-[color:var(--blue)]/20 font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-50">
          RT — Archive © 2026
        </footer>
      </main>
    </div>
  );
}