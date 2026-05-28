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
    <div className="min-h-screen bg-background text-[color:var(--pink)] font-[var(--font-body)]">
      <TabNav accent="pink" />
      <main className="px-6 md:px-12 pb-24 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Oval portrait */}
        <div
          className="relative w-[18rem] h-[22rem] md:w-[28rem] md:h-[34rem] overflow-hidden border-2 border-[color:var(--pink)] mb-16"
          style={{ borderRadius: "50%", backgroundColor: "var(--pink)" }}
        >
          <img
            src={portrait}
            alt="Raha Teimuri portrait"
            width={768}
            height={768}
            className="w-full h-full object-cover mix-blend-multiply opacity-90"
          />
        </div>

        <p className="font-[var(--font-body)] text-xl md:text-2xl leading-relaxed max-w-2xl mb-6">
          I'm a Social Media Lead, Systems Builder and Creative Strategist based in Berlin. A strategic creative who can direct major celebrity partnerships, build infrastructure that scales, lead creative teams across countries, and measure real business impact.
        </p>

        <p className="font-[var(--font-body)] text-lg md:text-xl leading-relaxed max-w-2xl mb-10 opacity-90">
          Currently Social Media Lead at Yousician — directing campaigns with David Bowie, Paul McCartney and Warner Music. Previously scaled Carpe Diem Tours from zero to over a million followers across Rome, Florence, London, Barcelona and Lisbon.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            ["English", "C1"],
            ["Farsi", "Native"],
            ["Italian", "B2"],
          ].map(([lang, level]) => (
            <span
              key={lang}
              className="px-4 py-2 rounded-full border-2 border-[color:var(--pink)] font-[var(--font-mono)] text-[10px] uppercase tracking-widest"
            >
              {lang} · {level}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
