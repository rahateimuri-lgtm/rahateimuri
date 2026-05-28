import { createFileRoute } from "@tanstack/react-router";
import caseBowie from "@/assets/case-bowie.jpg";
import caseMcCartney from "@/assets/case-mccartney.jpg";
import caseCarpeDiem from "@/assets/case-carpediem.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raha Teimuri — Social Media Lead & Creative Strategist, Berlin" },
      { name: "description", content: "Portfolio of Raha Teimuri: Social Media Lead at Yousician, creative direction for David Bowie & Paul McCartney campaigns, 1M+ follower growth at Carpe Diem Tours." },
      { property: "og:title", content: "Raha Teimuri — Portfolio" },
      { property: "og:description", content: "Berlin-based Social Media Lead, Systems Builder & Creative Strategist." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[var(--font-body)] px-6 py-12 md:px-20 lg:px-32 selection:bg-marker selection:text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center z-50 bg-background/85 backdrop-blur-md md:px-20 lg:px-32 border-b-2 border-foreground/10">
        <a href="#top" className="font-[var(--font-mono)] text-xs uppercase tracking-tighter bg-foreground text-background px-2 py-1">RT—26</a>
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-[var(--font-mono)]">
          <a href="#work" className="hover:text-marker transition-colors">Index</a>
          <a href="#me" className="hover:text-marker transition-colors">About</a>
          <a href="#contact" className="hover:text-marker transition-colors">Talk</a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="mt-32 mb-48">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-foreground/30" />
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] opacity-70">Berlin — Creative Strategist & Systems Builder</p>
          </div>
          <h1 className="font-[var(--font-display)] font-extrabold tracking-[-0.04em] leading-[0.8] mb-12 text-balance text-7xl md:text-[10rem]">
            RAHA<br />
            <span className="text-marker italic">TEIMURI</span>
          </h1>
          <div className="max-w-2xl">
            <p className="text-2xl md:text-4xl leading-[1.1] tracking-tight text-pretty">
              Designing architectures for{" "}
              <span className="relative inline-block">
                human attention
                <span className="absolute -bottom-1 left-0 h-2 w-full bg-marker/25" />
              </span>{" "}
              in the age of digital excess.
            </p>
          </div>
        </div>
      </header>

      {/* About / Me */}
      <section id="me" className="mb-56 grid md:grid-cols-12 gap-12 pt-16 border-t-4 border-foreground scroll-mt-24">
        <div className="md:col-span-4">
          <h2 className="font-[var(--font-display)] font-extrabold text-3xl uppercase leading-none">
            The<br />Philosophy
          </h2>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-50 mt-6">§ 01 / Me</p>
        </div>
        <div className="md:col-span-8 space-y-10">
          <p className="text-2xl md:text-3xl leading-snug">
            I bridge messy creative energy and <span className="italic font-medium">rigorous systems</span>. Currently Social Media Lead at Yousician — building teams, studios, and brand voice from zero, while directing campaigns for the biggest names in music.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl opacity-80">
            Before Berlin: five years scaling Carpe Diem Tours from zero to over a million followers across Europe, leading a team of four across Rome, Florence, London, Barcelona and Lisbon. BBA in Business & Economics, Università di Roma Tor Vergata.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {[
              ["English", "C1"],
              ["Farsi", "Native"],
              ["Italian", "B2"],
            ].map(([lang, level]) => (
              <div
                key={lang}
                className="px-4 py-3 rounded-full border-2 border-foreground hover:bg-marker hover:text-white hover:border-marker transition-all"
              >
                <span className="font-[var(--font-mono)] text-xs uppercase">
                  {lang} / {level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mb-56 space-y-40 scroll-mt-24">
        <div className="flex justify-between items-baseline border-b-4 border-foreground pb-4">
          <h2 className="font-[var(--font-display)] font-extrabold text-5xl md:text-6xl uppercase">Work</h2>
          <span className="font-[var(--font-mono)] text-xs opacity-50">Selected (03)</span>
        </div>

        {/* Case 01 — Bowie */}
        <article className="grid md:grid-cols-12 gap-10 items-end group">
          <div className="md:col-span-6 space-y-6 pb-8">
            <div className="font-[var(--font-mono)] text-[10px] tracking-widest text-marker font-bold">01 / MUSIC LEGACY · NOV 2025</div>
            <h3 className="font-[var(--font-display)] font-extrabold tracking-tighter leading-none text-5xl md:text-7xl group-hover:italic transition-all">
              DAVID BOWIE<br />
              <span className="font-[var(--font-body)] font-normal italic text-3xl md:text-4xl lowercase">× Yousician</span>
            </h3>
            <p className="text-lg leading-relaxed max-w-md opacity-80">
              Brand concept and art direction inside the creative team for a campaign with the David Bowie Estate and Warner Music. Social rollout co-published with @davidbowie and Warner Chappell — every post approved by the estate.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Art Direction", "Brand Concept", "Social Lead"].map((tag) => (
                <span key={tag} className="border-2 border-foreground px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="border-4 border-foreground rounded-2xl overflow-hidden">
              <img
                src={caseBowie}
                alt="David Bowie x Yousician campaign visual"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </article>

        {/* Case 02 — McCartney */}
        <article className="grid md:grid-cols-12 gap-10 items-start group">
          <div className="md:col-span-6 md:order-last space-y-6 pt-8">
            <div className="font-[var(--font-mono)] text-[10px] tracking-widest text-marker font-bold">02 / GLOBAL ICON · NOV 2025</div>
            <h3 className="font-[var(--font-display)] font-extrabold tracking-tighter leading-none text-5xl md:text-7xl group-hover:italic transition-all">
              PAUL McCARTNEY<br />
              <span className="font-[var(--font-body)] font-normal italic text-3xl md:text-4xl lowercase">& Wings × Yousician</span>
            </h3>
            <p className="text-lg leading-relaxed max-w-md opacity-80">
              Creative direction and social lead for a partnership with Paul McCartney, MPL and the Wings Estate. One of the largest celebrity collaborations in music-learning history.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Creative Direction", "Social Lead", "Partnership"].map((tag) => (
                <span key={tag} className="border-2 border-foreground px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="border-4 border-foreground rounded-2xl overflow-hidden">
              <img
                src={caseMcCartney}
                alt="Paul McCartney x Yousician campaign visual"
                width={1280}
                height={1280}
                loading="lazy"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </article>

        {/* Case 03 — Carpe Diem big-numbers block */}
        <article className="bg-marker text-white p-10 md:p-20 rounded-3xl space-y-16 relative overflow-hidden border-4 border-foreground">
          <div className="relative z-10">
            <div className="font-[var(--font-mono)] text-[10px] tracking-widest font-bold opacity-80 mb-6">03 / SCALE FROM ZERO · 2022 – 2025</div>
            <h3 className="font-[var(--font-display)] font-extrabold tracking-tighter mb-4 leading-[0.8] text-6xl md:text-9xl">
              CARPE<br />DIEM
            </h3>
            <p className="text-lg md:text-xl max-w-2xl opacity-90 mb-12">
              Built and scaled a multi-account social presence from zero across Rome, Florence, London, Barcelona and Lisbon. Directed 500+ videos, led 4 social managers, designed the workflow stack on Monday & Miro.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t-2 border-white/30 pt-10">
              {[
                ["1M+", "Followers, 100% organic"],
                ["50M", "Cross-platform views"],
                ["€80K", "Attributed bookings (GA4)"],
              ].map(([n, label]) => (
                <div key={n} className="space-y-1">
                  <p className="font-[var(--font-display)] font-extrabold text-5xl md:text-6xl">{n}</p>
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest opacity-80">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t-2 border-white/30 pt-8">
              <img
                src={caseCarpeDiem}
                alt="Rome rooftops at golden hour"
                width={1280}
                height={720}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover rounded-xl border-2 border-white/40"
              />
            </div>
          </div>
          <div className="absolute -bottom-24 -right-10 text-[18rem] md:text-[25rem] font-[var(--font-display)] font-extrabold opacity-10 pointer-events-none select-none tracking-tighter leading-none">
            DATA
          </div>
        </article>
      </section>

      {/* Contact */}
      <footer id="contact" className="pb-32 scroll-mt-24">
        <div className="border-t-4 border-foreground pt-16 flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="space-y-10">
            <h2 className="font-[var(--font-display)] font-extrabold tracking-tighter leading-none text-5xl md:text-7xl">
              LET'S TALK<br />IN <span className="text-marker italic">BERLIN</span>.
            </h2>
            <a
              href="mailto:rahateimuri@gmail.com"
              className="inline-block text-2xl md:text-4xl italic underline decoration-marker decoration-4 underline-offset-8 hover:text-marker transition-colors"
            >
              rahateimuri@gmail.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em]">
            <div className="space-y-2">
              <p className="opacity-50 mb-4">Social</p>
              <a href="https://linkedin.com/in/rahateimuri" target="_blank" rel="noreferrer" className="block hover:text-marker">LinkedIn ↗</a>
            </div>
            <div className="space-y-2">
              <p className="opacity-50 mb-4">Direct</p>
              <a href="tel:+393895617848" className="block hover:text-marker">+39 389 561 7848</a>
              <p className="block opacity-70">Berlin, DE</p>
            </div>
            <div className="col-span-2 pt-12 opacity-50">RT — ARCHIVE © 2026</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
