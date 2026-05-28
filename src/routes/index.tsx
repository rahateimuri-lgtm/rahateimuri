import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait-raha.jpg";
import { TabNav } from "@/components/TabNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Me — Raha Teimuri" },
      { name: "description", content: "Raha Teimuri — Berlin-based Social Media Lead, Systems Builder & Creative Strategist." },
      { property: "og:title", content: "Me — Raha Teimuri" },
      { property: "og:description", content: "Berlin-based Social Media Lead, Systems Builder & Creative Strategist." },
    ],
  }),
  component: MePage,
});

function MePage() {
  return (
    <div className="min-h-screen bg-[color:var(--pink-soft)] text-[color:var(--navy)] font-[var(--font-body)]">
      <TabNav variant="pink" />
      <main className="px-6 md:px-12 pt-32 pb-24 max-w-5xl mx-auto flex flex-col items-center text-center">
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[color:var(--pink)] mb-10">
          § Berlin · Social Media Lead
        </p>

        <div className="relative mb-12">
          <div className="absolute inset-0 rounded-full bg-[color:var(--pink)] blur-2xl opacity-40 scale-110" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[color:var(--pink)] ring-8 ring-[color:var(--pink)]/30">
            <img
              src={portrait}
              alt="Raha Teimuri portrait"
              width={768}
              height={768}
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>

        <h1 className="font-[var(--font-display)] font-extrabold tracking-[-0.03em] leading-[0.85] text-5xl md:text-7xl text-[color:var(--pink)] mb-8">
          Raha <span className="italic font-normal">Teimuri</span>
        </h1>

        <p className="text-xl md:text-2xl leading-snug max-w-2xl text-[color:var(--pink)] mb-6">
          A strategic creative directing major celebrity partnerships, building infrastructure that scales, leading creative teams across countries — and measuring the business impact.
        </p>

        <p className="text-base md:text-lg leading-relaxed max-w-2xl text-[color:var(--pink)]/80 mb-12">
          Currently Social Media Lead at Yousician. Previously scaled Carpe Diem Tours from zero to over a million followers across Rome, Florence, London, Barcelona and Lisbon. BBA, Università di Roma Tor Vergata.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            ["English", "C1"],
            ["Farsi", "Native"],
            ["Italian", "B2"],
          ].map(([lang, level]) => (
            <span
              key={lang}
              className="px-4 py-2 rounded-full border-2 border-[color:var(--pink)] text-[color:var(--pink)] font-[var(--font-mono)] text-[10px] uppercase tracking-widest"
            >
              {lang} · {level}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
