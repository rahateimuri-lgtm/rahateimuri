export const site = {
  name: 'Raha Teimuri',
  role: 'Social Media Lead',
  tagline: 'I build brands, teams and content engines that scale.',
  description:
    'Raha Teimuri, Social Media Lead. Grew a travel brand to 1M+ followers from zero, drove €80K+/yr in social-attributed bookings, and directs viral video at 50M+ views. Now heading social for Yousician & GuitarTuna.',
  email: 'rahateimuri@gmail.com',
  phoneDisplay: '+39 389 561 7848',
  phoneHref: 'tel:+393895617848',
  linkedin: 'https://www.linkedin.com/in/rahateimuri/',
  ogImage: '/img/og-cover.png',
  cv: '/raha-teimuri-cv.pdf',
} as const;

export const proofStats = [
  '1M+ organic followers from zero',
  '50M+ views',
  '€80K/yr social-attributed bookings',
  '5+ yrs leading social across Europe',
] as const;

export const proofBar = [
  { value: '1M+', label: 'organic followers, from zero', color: 'accent' },
  { value: '50M+', label: 'views', color: 'accent-2' },
  { value: '€80K', label: '/yr social-attributed bookings', color: 'ink' },
  { value: '5+ yrs', label: 'leading social across Europe', color: 'accent' },
] as const;

export const services = [
  {
    n: '01',
    title: 'Social Media Strategy',
    body:
      'Building multi-platform strategies that actually grow accounts, based on what the audience wants and a clear plan for what to post.',
  },
  {
    n: '02',
    title: 'Creative Direction',
    body:
      'Setting the creative line and directing every call (concept, look, hooks and edit) so output stays distinctive at volume instead of drifting.',
  },
  {
    n: '03',
    title: 'Production at Scale',
    body:
      'Standing up in-house studios and repeatable formats that triple output without diluting quality, blending staff, UGC and AI tooling.',
  },
  {
    n: '04',
    title: 'Viral Engineering',
    body:
      'Engineering short-form for the first second and the full retention curve, then re-shipping what works so a hit becomes a series, not a fluke.',
  },
  {
    n: '05',
    title: 'Influencer & UGC',
    body:
      'Designing creator systems end to end (sourcing, briefing, production and performance) so on-brand UGC ships predictably, month after month.',
  },
  {
    n: '06',
    title: 'Analytics & Reporting',
    body:
      'Closing the loop from content to revenue with promo codes, UTM, GA4 and booking data, and reporting in money, not just reach.',
  },
  {
    n: '07',
    title: 'Leadership',
    body:
      'Hiring, building and leading social teams from scratch: setting the standard, growing the people, and owning the outcomes.',
  },
] as const;

type Tool = { name: string; dot: string };

// Per design system: sticker pill = colored dot (2px ink) + tool name. No logos.
export const stack: Tool[] = [
  { name: 'Adobe CC', dot: 'var(--accent-2)' },
  { name: 'Figma', dot: 'var(--accent)' },
  { name: 'CapCut', dot: 'var(--ink)' },
  { name: 'GA4', dot: 'var(--lime)' },
  { name: 'Meta Ads', dot: 'var(--accent)' },
  { name: 'Superscale', dot: 'var(--pink)' },
  { name: 'Magnific', dot: 'var(--accent-2)' },
  { name: 'Claude', dot: 'var(--accent)' },
  { name: 'ChatGPT', dot: 'var(--ink)' },
  { name: 'Notion', dot: 'var(--lime)' },
];
