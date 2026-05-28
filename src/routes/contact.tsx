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
    <div className="min-h-screen bg-background text-[color:var(--blue)] font-[var(--font-body)] flex flex-col">
      <TabNav accent="blue" />

      <main className="flex-1 px-6 md:px-12 pb-12 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-12 items-center">
        {/* Left — headline + email */}
        <div className="space-y-10">
          <h1 className="font-[var(--font-body)] italic font-normal tracking-tight leading-[0.95] text-6xl md:text-8xl">
            Let's bring<br />
            nice ideas<br />
            to life
          </h1>

          <a
            href="mailto:rahateimuri@gmail.com"
            className="inline-block italic text-2xl md:text-4xl underline decoration-2 underline-offset-[10px] hover:opacity-70 transition-opacity break-all"
          >
            rahateimuri@gmail.com
          </a>
        </div>

        {/* Right — social grid (2 columns) */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:justify-self-end md:pl-12">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/rahateimuri" },
            { label: "Telegram", href: "https://t.me/rahateimuri" },
            { label: "Instagram", href: "https://instagram.com/raha.teimuri" },
            { label: "Phone", href: "tel:+393895617848" },
            { label: "Behance", href: "https://behance.net/rahateimuri" },
            { label: "Email", href: "mailto:rahateimuri@gmail.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-xl md:text-2xl font-[var(--font-body)] hover:italic transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
      </main>

      {/* Footer ribbon */}
      <footer className="px-6 md:px-12 pb-6">
        <div className="border-t-2 border-[color:var(--blue)]/40 pt-6 flex flex-wrap justify-between gap-4 font-[var(--font-body)] text-sm md:text-base">
          <span>◉ Berlin, DE + Worldwide</span>
          <span className="italic">Let's bring nice ideas to life</span>
          <span>♡ Get in touch</span>
          <span>© 2026 Raha Teimuri</span>
        </div>
      </footer>
    </div>
  );
}