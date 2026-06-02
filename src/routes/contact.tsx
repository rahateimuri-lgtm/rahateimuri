import { createFileRoute } from "@tanstack/react-router";
import { TabNav } from "@/components/TabNav";
import { SiteFooter } from "@/routes/index";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Raha Teimuri" },
      { name: "description", content: "Get in touch with Raha Teimuri — Berlin-based Social Media Lead." },
      { property: "og:title", content: "Contact — Raha Teimuri" },
      { property: "og:description", content: "Get in touch — Berlin." },
    ],
  }),
  component: ContactPage,
});

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/rahateimuri" },
  { label: "Instagram", href: "https://instagram.com/raha.teimuri" },
  { label: "Telegram", href: "https://t.me/rahateimuri" },
  { label: "Behance", href: "https://behance.net/rahateimuri" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-[color:var(--bone)] text-[color:var(--ink)] font-[var(--font-body)] flex flex-col">
      <TabNav />
      <main className="flex-1 pt-32 md:pt-40 px-5 md:px-12 max-w-[1280px] mx-auto pb-24 w-full">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] mb-4">
            ✶ Contact
          </p>
          <h1 className="font-[var(--font-body)] font-bold tracking-[-0.02em] leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-[14ch]">
            Let's bring nice ideas <span className="italic font-normal text-[color:var(--accent)]">to life.</span>
          </h1>
        </Reveal>

        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7 space-y-6">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
              Email
            </p>
            <a
              href="mailto:hello@example.com"
              className="block font-[var(--font-body)] italic font-normal tracking-tight text-3xl md:text-5xl underline decoration-1 underline-offset-[8px] hover:text-[color:var(--accent)] transition-colors break-all"
            >
              hello@example.com
            </a>
            <CopyEmailInline />
          </div>

          <div className="md:col-span-5 space-y-5">
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
              Elsewhere
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--cream)] font-[var(--font-body)] text-base hover:bg-[color:var(--accent-soft)] transition-colors flex items-center justify-between"
                >
                  <span>{s.label}</span>
                  <span className="font-[var(--font-mono)] text-xs text-[color:var(--ink-soft)]">↗</span>
                </a>
              ))}
            </div>
            <p className="pt-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
              ◉ Berlin, DE + Worldwide
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function CopyEmailInline() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText("hello@example.com");
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {}
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] transition-colors magnetic"
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}