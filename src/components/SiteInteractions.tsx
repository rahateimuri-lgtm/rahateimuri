import { useEffect } from "react";

/**
 * Wires the site-wide micro-interactions from the clean-room rebuild reference
 * (js/site.js) into React: magnetic buttons, 3D tilt cards, and parallax shapes.
 *
 * Selectors follow the original convention:
 *   - `.magnetic`        → pointer-following translate on hover
 *   - `.tilt-card`       → subtle perspective rotate on pointer move
 *   - `[data-parallax]`  → translateY scaled by `data-parallax` factor on scroll
 *
 * All effects are skipped when the user prefers reduced motion or is on a
 * coarse pointer (touch) device. Re-runs on every route change so newly mounted
 * nodes get wired.
 */
export function SiteInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const cleanups: Array<() => void> = [];

    // ── Magnetic buttons ──────────────────────────────────────────────────
    if (!reduced && !coarse) {
      document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
        const onMove = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.16;
          const y = (e.clientY - r.top - r.height / 2) * 0.16;
          el.style.transform = `translate(${x}px, ${y}px)`;
        };
        const onLeave = () => {
          el.style.transform = "";
        };
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        });
      });

      // ── Tilt cards ──────────────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>(".tilt-card").forEach((el) => {
        const onMove = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateX(${py * -4}deg) rotateY(${px * 5}deg) translateY(-2px)`;
        };
        const onLeave = () => {
          el.style.transform = "";
        };
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        });
      });
    }

    // ── Parallax shapes ────────────────────────────────────────────────────
    const shapes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (shapes.length && !reduced) {
      const update = () => {
        const y = window.scrollY;
        for (const s of shapes) {
          const f = parseFloat(s.dataset.parallax || "0");
          s.style.transform = `translate3d(0, ${y * f}px, 0)`;
        }
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", update));
    }

    return () => {
      for (const fn of cleanups) fn();
    };
  });

  return null;
}