import caseBowie from "@/assets/bowie-mosaic.png";
import caseMcCartney from "@/assets/case-mccartney.jpg";
import caseCarpeDiem from "@/assets/case-carpediem.jpg";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  image: string;
  description: string;
  stats: [string, string][];
  links: { label: string; href: string }[];
  /** Tile size on the mosaic grid */
  tile: "hero" | "wide" | "portrait" | "square";
  tag: string;
  /** Background color behind the cover image */
  bg: string;
  /** Pill tag background color */
  tagBg: string;
};

export const projects: Project[] = [
  {
    id: "bowie",
    title: "David Bowie / warner music chappell",
    subtitle: "× Yousician",
    year: "Nov 2025",
    role: "Art Direction · Brand Concept · Social Lead",
    image: caseBowie,
    description:
      "Brand concept and art direction inside the creative team for a campaign with the David Bowie Estate and Warner Music. Social rollout co-published with @davidbowie and Warner Chappell — every post approved by the estate.",
    stats: [
      ["Co-publish", "@davidbowie"],
      ["Partner", "Warner Chappell"],
      ["Approval", "Estate-cleared"],
    ],
    links: [
      { label: "@davidbowie", href: "https://instagram.com/davidbowie" },
      { label: "@yousician", href: "https://instagram.com/yousician" },
    ],
    tile: "hero",
    tag: "Campaign",
    bg: "#000000",
    tagBg: "#00E676",
  },
  {
    id: "mccartney",
    title: "Paul McCartney",
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
    tile: "wide",
    tag: "Campaign",
    bg: "#1E1E1E",
    tagBg: "#FF6B3D",
  },
  {
    id: "carpediem",
    title: "Carpe Diem Tours",
    subtitle: "0 → 1M+",
    year: "2020 – 2025",
    role: "Social Lead · Team Manager · Systems Builder",
    image: caseCarpeDiem,
    description:
      "Built and scaled a multi-account social presence from zero across Rome, Florence, London, Barcelona and Lisbon. Directed 500+ videos, led 4 social managers, designed the workflow stack on Monday & Miro.",
    stats: [
      ["1M+", "Followers, organic"],
      ["50M", "Cross-platform views"],
      ["€80K", "Attributed bookings"],
    ],
    links: [
      { label: "@carpediemtours", href: "https://instagram.com/carpediemtours" },
      { label: "TikTok", href: "https://tiktok.com/@carpediemtours" },
    ],
    tile: "portrait",
    tag: "Growth",
    bg: "#FF5A36",
    tagBg: "#FFFFFF",
  },
  {
    id: "reels-rome",
    title: "Rome Reels",
    subtitle: "Short-form series",
    year: "2024",
    role: "Concept · Direction · Edit",
    image: caseCarpeDiem,
    description:
      "Vertical short-form series shot across Rome — concepted, directed and edited for TikTok and Instagram Reels. Drove the bulk of organic growth for the Rome account.",
    stats: [
      ["120+", "Reels shipped"],
      ["18M", "Views"],
      ["9.2%", "Avg. engagement"],
    ],
    links: [
      { label: "TikTok", href: "https://tiktok.com/@carpediemtours" },
    ],
    tile: "portrait",
    tag: "Reels",
    bg: "#C9B8FF",
    tagBg: "#FFE9F1",
  },
  {
    id: "tiktok-florence",
    title: "Florence on TikTok",
    subtitle: "Account from 0 → 220k",
    year: "2023",
    role: "Social Lead",
    image: caseCarpeDiem,
    description:
      "Built the Florence TikTok account from a cold start to 220k followers in 11 months through a tight content cadence and a repeatable hook system.",
    stats: [
      ["220k", "Followers"],
      ["11 mo", "0 → 220k"],
      ["Daily", "Cadence"],
    ],
    links: [
      { label: "TikTok", href: "https://tiktok.com/@carpediemtours" },
    ],
    tile: "portrait",
    tag: "TikTok",
    bg: "#0F1B2E",
    tagBg: "#7DFFB0",
  },
  {
    id: "systems",
    title: "Workflow Stack",
    subtitle: "Monday × Miro × Notion",
    year: "2022 – 2025",
    role: "Systems Builder",
    image: caseMcCartney,
    description:
      "Designed the operations stack that lets a small social team ship hundreds of videos a month without dropping the ball — pipelines on Monday, briefs on Miro, knowledge on Notion.",
    stats: [
      ["4", "Social managers"],
      ["500+", "Videos / yr"],
      ["1", "Source of truth"],
    ],
    links: [],
    tile: "square",
    tag: "Ops",
    bg: "#E8F0E4",
    tagBg: "#1E1E1E",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);