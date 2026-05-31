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
    <div className="min-h-screen bg-[color:var(--pink-soft)] text-[color:var(--blue)] font-[var(--font-body)] flex flex-col">
      <TabNav accent="blue" />

      <main className="flex-1 px-4 md:px-8 pt-4 md:pt-6 pb-12 max-w-[1400px] mx-auto w-full">
       <div className="bg-white px-6 md:px-12 pt-12 md:pt-20 pb-16 grid md:grid-cols-2 gap-16 md:gap-12 items-center">
        {/* Left — headline + email */}
        <div className="space-y-8">
          <h1 className="font-[var(--font-body)] italic font-normal tracking-tight leading-[1] text-4xl md:text-5xl">
            Let's bring<br />
            nice ideas<br />
            to life
          </h1>

          <a
            href="mailto:rahateimuri@gmail.com"
            className="inline-block italic text-base md:text-lg underline decoration-1 underline-offset-[6px] hover:opacity-70 transition-opacity break-all"
          >
            rahateimuri@gmail.com
          </a>
        </div>

        {/* Right — social grid (2 columns) */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 md:justify-self-end md:pl-12">
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
              className="text-base md:text-lg font-[var(--font-body)] hover:italic transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
       </div>
      </main>

      {/* Footer ribbon */}
      <footer className="px-6 md:px-12 pb-6">
        <div className="border-t border-[color:var(--blue)]/30 pt-4 flex flex-wrap justify-between gap-3 font-[var(--font-body)] text-xs md:text-sm">
          <span>◉ Berlin, DE + Worldwide</span>
          <span className="italic">Let's bring nice ideas to life</span>
          <span>♡ Get in touch</span>
          <span>© 2026 Raha Teimuri</span>
        </div>
      </footer>
    </div>
  );
}