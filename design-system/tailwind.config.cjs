/* =====================================================================
   RAHA DESIGN SYSTEM — Tailwind config bridge
   Wires the canonical tokens (tokens.css) into Tailwind so utilities and
   the raw CSS variables never drift. tokens.css stays the source of truth;
   this file just exposes the variables to Tailwind's utility names.

   In tailwind.config.cjs (Astro: `astro add tailwind` then merge this):
   ===================================================================== */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:       'var(--bg)',
        surface:  'var(--surface)',
        ink:      'var(--ink)',
        accent:   'var(--accent)',
        'accent-2': 'var(--accent-2)',
        lime:     'var(--lime)',
        pink:     'var(--pink)',
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        body:    ['Space Grotesk', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
      },
      borderWidth: { 3: '3px' },
      borderRadius: {
        pill:  '999px',
        card:  '24px',
        badge: '14px',
      },
      boxShadow: {
        // hard, zero-blur "sticker" shadows
        sticker:    '5px 5px 0 var(--ink)',
        'sticker-sm': '4px 4px 0 var(--ink)',
        'sticker-lg': '8px 8px 0 var(--ink)',
        'sticker-accent': '5px 5px 0 var(--accent)',
        'sticker-press': '2px 2px 0 var(--ink)',
      },
      transitionTimingFunction: {
        pop: 'cubic-bezier(.2,.9,.25,1.1)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        floatA: { '0%,100%': { transform: 'translate(0,0) rotate(0deg)' }, '50%': { transform: 'translate(0,-22px) rotate(10deg)' } },
        breathe: { '0%,100%': { transform: 'rotate(-1.5deg)' }, '50%': { transform: 'rotate(1.5deg)' } },
        popIn: { '0%': { transform: 'translateY(22px) scale(.96)', opacity: '.2' }, '60%': { transform: 'translateY(-4px) scale(1.01)' }, '100%': { transform: 'translateY(0) scale(1)', opacity: '1' } },
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        'marquee-rev': 'marquee 18s linear infinite reverse',
        floatA: 'floatA 7s ease-in-out infinite',
        breathe: 'breathe 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
