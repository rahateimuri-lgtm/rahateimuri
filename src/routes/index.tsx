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
    <div className="min-h-screen bg-[color:var(--pink-soft)] text-[color:var(--pink)] font-[var(--font-body)]">
      <TabNav accent="pink" />
      <main className="px-4 md:px-8 pt-4 md:pt-6 pb-12 max-w-[1400px] mx-auto">
       <div className="bg-white px-6 md:px-12 pt-12 md:pt-20 pb-32 flex flex-col items-center text-center">
        {/* Oval portrait — refined scale */}
        <div
          className="relative w-44 h-56 md:w-56 md:h-72 overflow-hidden border border-[color:var(--pink)] mb-20 md:mb-24"
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

        <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed max-w-md mb-4">
          I'm a Social Media Lead, Systems Builder and Creative Strategist based in Berlin — directing celebrity partnerships, building infrastructure that scales, and measuring real business impact.
        </p>

        <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed max-w-md mb-12 opacity-80">
          Currently Social Media Lead at Yousician — campaigns with David Bowie, Paul McCartney and Warner Music. Previously scaled Carpe Diem Tours from zero to 1M+ followers across Rome, Florence, London, Barcelona and Lisbon.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {[
            ["English", "C1"],
            ["Farsi", "Native"],
            ["Italian", "B2"],
          ].map(([lang, level]) => (
            <span
              key={lang}
              className="px-3 py-1 rounded-full border border-[color:var(--pink)] font-[var(--font-mono)] text-[9px] uppercase tracking-widest"
            >
              {lang} · {level}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
