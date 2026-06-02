import caseBowie from "@/assets/bowie-mosaic.png";
import caseMcCartney from "@/assets/case-mccartney.jpg";
import caseCarpeDiem from "@/assets/case-carpediem.jpg";
import bowieGuitarTuna from "@/assets/bowie-guitartuna-carousel.png";
import bowieYousician from "@/assets/bowie-yousician-carousel.png";
import yousicianLogo from "@/assets/yousician-logo.png";

export type Project = {
  id: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  year: string;
  role: string;
  image: string;
  description: string;
  /** Optional long-form body, rendered as paragraphs */
  body?: string[];
  /** Optional bullet highlights — concise, scannable */
  bullets?: string[];
  /** Optional embedded videos / reels */
  videos?: { title: string; href: string; embed?: string; poster?: string; platform?: "tiktok" | "instagram" }[];
  /** Optional gallery of supporting visuals */
  gallery?: { src: string; alt: string; caption?: string }[];
  /** Optional social-account table (platform, reach, link) */
  accounts?: {
    name: string;
    platform: string;
    followers: string;
    href: string;
    brand?: string;
    /** Optional brand logo (used in the "Now managing" cards) */
    logo?: string;
    /** Group label — e.g. "current" for pages I'm running now, "built" for ones I built from scratch */
    group?: "current" | "built";
  }[];
  /** Hide the cover image on the detail page (for projects where the cover is just a placeholder) */
  hideCover?: boolean;
  stats: [string, string][];
  links: { label: string; href: string }[];
  /** Tile size on the mosaic grid */
  tile: "bowie" | "paul" | "viral" | "pages" | "ai" | "money";
  /** Render a text-only placeholder tile (no cover image) on the mosaic grid */
  placeholderTile?: boolean;
  tag: string;
  /** Background color behind the cover image */
  bg: string;
  /** Pill tag background color */
  tagBg: string;
  /** Focal point for object-position (0-100). Defaults to center (50/50). */
  focalPoint?: { x: number; y: number };
};

export const projects: Project[] = [
  {
    id: "bowie",
    title: "David Bowie / warner music chappell",
    shortTitle: "David Bowie",
    subtitle: "× Yousician",
    year: "Nov 2025",
    role: "Art Direction · Brand Concept · Social Lead",
    image: caseBowie,
    description:
      "Brand concept and art direction inside the creative team for a campaign with the David Bowie Estate and Warner Music. Social rollout co-published with @davidbowie and Warner Chappell — every post approved by the estate.",
    bullets: [
      "Shaped the voice and visual direction inside the creative team — from first concept to final rollout.",
      "Built the master concept on a dedicated Figma board to align the team and pitch the campaign.",
      "Direction signed off by Warner Chappell Music before production.",
      "Led creative direction of both launch posts end-to-end — concept, designer brief, and creator brief.",
    ],
    videos: [
      {
        title: "Reel — Bowie × Yousician",
        href: "https://www.instagram.com/reel/DYCyUHgCamI/",
        embed: "https://www.instagram.com/reel/DYCyUHgCamI/embed",
      },
      {
        title: "Post — Warner collab",
        href: "https://www.instagram.com/p/DXoj0xtiKZM/",
        embed: "https://www.instagram.com/p/DXoj0xtiKZM/embed",
      },
    ],
    gallery: [
      {
        src: bowieYousician,
        alt: "Yousician × Bowie launch carousel",
        caption: "Yousician launch carousel",
      },
      {
        src: bowieGuitarTuna,
        alt: "GuitarTuna × Bowie carousel",
        caption: "GuitarTuna rollout — tabs & chords",
      },
    ],
    stats: [
      ["Co-publish", "@davidbowie"],
      ["Partner", "Warner Chappell"],
      ["Approval", "Estate-cleared"],
    ],
    links: [
      {
        label: "Figma board",
        href: "https://www.figma.com/board/Yc95CFx25XDiJPDGFlDrsb/David-Bowie?node-id=0-1",
      },
      { label: "@davidbowie", href: "https://instagram.com/davidbowie" },
      { label: "@yousician", href: "https://instagram.com/yousician" },
    ],
    tile: "bowie",
    tag: "Campaign",
    bg: "#000000",
    tagBg: "#00E676",
  },
  {
    id: "mccartney",
    title: "Paul McCartney",
    shortTitle: "Paul Maccartney",
    subtitle: "& Wings × Yousician",
    year: "Nov 2025",
    role: "Creative Direction · Social Lead · Partnership",
    image: caseMcCartney,
    description:
      "Creative direction and social lead for a partnership with Paul McCartney, MPL and the Wings Estate. One of the largest celebrity collaborations in music-learning history.",
    stats: [
      ["Partner", "MPL Communications"],
      ["Scope", "Global rollout"],
      ["Format", "Multi-platform"],
    ],
    links: [
      { label: "@paulmccartney", href: "https://instagram.com/paulmccartney" },
      { label: "@yousician", href: "https://instagram.com/yousician" },
    ],
    tile: "paul",
    tag: "Campaign",
    bg: "#1E1E1E",
    tagBg: "#FF6B3D",
  },
  {
    id: "viral-videos",
    title: "Viral Videos",
    shortTitle: "viral videos",
    subtitle: "Carpe Diem Tours · 50M+ views",
    year: "2020 – 2025",
    role: "Concept · Direction · Edit",
    image: caseCarpeDiem,
    description:
      "Short-form series across Rome, Florence, London, Barcelona and Lisbon — created, managed and creatively directed end-to-end. Today I run the same playbook by briefing freelancers, UGC creators and AI tools to superscale output without losing the hook.",
    bullets: [
      "Created, managed and creatively directed every viral piece — from first hook to final cut.",
      "Now I brief and orchestrate freelancers, UGC creators, apps and AI tools to superscale content output.",
      "Sharp on keywords, sounds and what's trending — I read the market in real time and adapt creative direction fast.",
      "Fluent with AI workflows (generation, editing, repurposing) to multiply output without losing the brand voice.",
      "Two standout TikToks alone drove €40K+ in attributable bookings within weeks of release.",
      "A single featured campaign crossed 50M reach / 24.77M views across TikTok and Instagram.",
    ],
    videos: [
      {
        title: "€17K booked · 2.5M views",
        href: "https://vm.tiktok.com/ZNdUxJ6bu/",
        embed: "https://www.tiktok.com/embed/v2/7208239503889255686",
        platform: "tiktok",
      },
      {
        title: "€23K booked · 3.1M views",
        href: "https://vm.tiktok.com/ZNdUx899b/",
        embed: "https://www.tiktok.com/embed/v2/7198937928385563910",
        platform: "tiktok",
      },
      {
        title: "Featured viral campaign · 50M+ reach · 24.77M views",
        href: "https://vm.tiktok.com/ZNdU9wsjN/",
        embed: "https://www.tiktok.com/embed/v2/7236791185115860251",
        platform: "tiktok",
      },
      {
        title: "Instagram reel — Carpe Diem",
        href: "https://www.instagram.com/reel/CwS4lv9sXMe/",
        embed: "https://www.instagram.com/reel/CwS4lv9sXMe/embed",
        platform: "instagram",
      },
      {
        title: "GuitarTuna · TikTok",
        href: "https://www.tiktok.com/@guitartuna/video/7558494856926989590",
        embed: "https://www.tiktok.com/embed/v2/7558494856926989590",
        platform: "tiktok",
      },
    ],
    stats: [
      ["50M+", "Cross-platform reach"],
      ["€40K+", "Direct bookings"],
      ["24.77M", "Views on featured"],
    ],
    links: [
      { label: "@carpediemtours", href: "https://instagram.com/carpediemtours" },
      { label: "TikTok", href: "https://tiktok.com/@carpediemtours" },
    ],
    tile: "viral",
    tag: "Reels",
    bg: "#0F1B2E",
    tagBg: "#7DFFB0",
    hideCover: true,
  },
  {
    id: "pages",
    title: "Pages Built",
    shortTitle: "Social Pages",
    subtitle: "Yousician · GuitarTuna · Carpe Diem Tours",
    year: "2022 – Now",
    role: "Social Lead · Team Manager",
    image: caseMcCartney,
    description:
      "Currently running social for Yousician and GuitarTuna at Yousician. Previously social lead at Carpe Diem Tours (2022–2025) — built and scaled a multi-brand, multi-city social presence from the ground up across 13 accounts on Instagram, TikTok, YouTube and Facebook, all grown organically.",
    bullets: [
      "Now: running Yousician and GuitarTuna social — strategy, voice and rollout.",
      "Carpe Diem: built 13 accounts from zero across 5 brands and 4 cities.",
      "Grew flagship Rome Italy Travel past 930K combined followers across IG, TikTok, YT and FB.",
      "Led a team of 4 social managers; designed the workflow stack on Monday & Miro.",
      "Every Carpe Diem account was scaled organically — no paid follower growth.",
    ],
    accounts: [
      // Currently managing — Yousician (multi-platform)
      { group: "current", name: "Yousician", brand: "Yousician", logo: yousicianLogo, platform: "Instagram", followers: "—", href: "https://www.instagram.com/yousician/" },
      { group: "current", name: "Yousician", brand: "Yousician", logo: yousicianLogo, platform: "TikTok", followers: "—", href: "https://www.tiktok.com/@yousician" },
      { group: "current", name: "Yousician", brand: "Yousician", logo: yousicianLogo, platform: "YouTube", followers: "—", href: "https://www.youtube.com/c/yousician" },
      // Currently managing — GuitarTuna
      { group: "current", name: "GuitarTuna", brand: "GuitarTuna", platform: "Instagram", followers: "—", href: "https://www.instagram.com/guitartuna" },
      // Built from scratch — Carpe Diem
      { group: "built", name: "Rome Italy Travel", brand: "Rome Italy Travel", platform: "Instagram", followers: "311K", href: "https://www.instagram.com/romeitalytravel" },
      { group: "built", name: "Rome Italy Travel", brand: "Rome Italy Travel", platform: "TikTok", followers: "447K", href: "https://www.tiktok.com/@romeitalytravel" },
      { group: "built", name: "Rome Italy Travel", brand: "Rome Italy Travel", platform: "YouTube", followers: "88.2K", href: "https://www.youtube.com/@romeitalytravel" },
      { group: "built", name: "Rome Italy Travel", brand: "Rome Italy Travel", platform: "Facebook", followers: "88.1K", href: "https://www.facebook.com/groups/romeitalytravel/" },
      { group: "built", name: "Carpediem Tours", brand: "Carpediem Tours", platform: "Instagram", followers: "11.6K", href: "https://www.instagram.com/carpediemtourss/" },
      { group: "built", name: "Carpediem Tours", brand: "Carpediem Tours", platform: "TikTok", followers: "2.7K", href: "https://www.tiktok.com/@carpediemtours" },
      { group: "built", name: "Carpediem Tours", brand: "Carpediem Tours", platform: "YouTube", followers: "1.7K", href: "https://www.youtube.com/@Carpediemtours" },
      { group: "built", name: "Tipsy Tours", brand: "Tipsy Tours", platform: "Instagram", followers: "64.3K", href: "https://www.instagram.com/thetipsytour" },
      { group: "built", name: "Tipsy Tours", brand: "Tipsy Tours", platform: "TikTok", followers: "34.9K", href: "https://www.tiktok.com/@thetipsytour" },
      { group: "built", name: "Rome With Chef", brand: "Rome With Chef", platform: "Instagram", followers: "12.8K", href: "https://www.instagram.com/romewithchef" },
      { group: "built", name: "Rome With Chef", brand: "Rome With Chef", platform: "TikTok", followers: "4.2K", href: "https://www.tiktok.com/@rome.withchef" },
      { group: "built", name: "Barcelona Carpe Diem", brand: "Barcelona", platform: "Instagram", followers: "11.9K", href: "https://www.instagram.com/barcelonacarpediem/" },
      { group: "built", name: "London City Travels", brand: "London", platform: "Instagram", followers: "32.8K", href: "https://www.instagram.com/londoncitytravels/" },
    ],
    stats: [
      ["1M+", "Followers, organic"],
      ["13", "Accounts built"],
      ["4", "Social managers led"],
    ],
    links: [],
    tile: "pages",
    tag: "Growth",
    bg: "#FF5A36",
    tagBg: "#FFFFFF",
    hideCover: true,
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);