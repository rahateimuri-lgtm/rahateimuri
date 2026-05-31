import caseBowie from "@/assets/bowie-mosaic.png";
import caseMcCartney from "@/assets/case-mccartney.jpg";
import caseCarpeDiem from "@/assets/case-carpediem.jpg";
import bowieGuitarTuna from "@/assets/bowie-guitartuna-carousel.png";
import bowieYousician from "@/assets/bowie-yousician-carousel.png";

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
  videos?: { title: string; href: string; embed?: string; poster?: string }[];
  /** Optional gallery of supporting visuals */
  gallery?: { src: string; alt: string; caption?: string }[];
  stats: [string, string][];
  links: { label: string; href: string }[];
  /** Tile size on the mosaic grid */
  tile: "bowie" | "paul" | "viral" | "pages";
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
      "Short-form series shot across Rome, Florence, London, Barcelona and Lisbon — concepted, directed and edited for TikTok and Instagram Reels.",
    stats: [
      ["500+", "Videos shipped"],
      ["50M", "Cross-platform views"],
      ["9.2%", "Avg. engagement"],
    ],
    links: [
      { label: "@carpediemtours", href: "https://instagram.com/carpediemtours" },
      { label: "TikTok", href: "https://tiktok.com/@carpediemtours" },
    ],
    tile: "viral",
    tag: "Reels",
    bg: "#0F1B2E",
    tagBg: "#7DFFB0",
  },
  {
    id: "pages",
    title: "Pages Built",
    shortTitle: "Social Pages",
    subtitle: "Multi-account growth",
    year: "2022 – 2025",
    role: "Social Lead · Team Manager",
    image: caseMcCartney,
    description:
      "Built and scaled a multi-account social presence from zero across five cities. Led 4 social managers and designed the workflow stack on Monday & Miro.",
    stats: [
      ["1M+", "Followers, organic"],
      ["5", "City accounts"],
      ["€80K", "Attributed bookings"],
    ],
    links: [],
    tile: "pages",
    tag: "Growth",
    bg: "#FF5A36",
    tagBg: "#FFFFFF",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);