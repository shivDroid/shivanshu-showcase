// =============================================
// PORTFOLIO CONFIGURATION
// Edit these arrays/objects to customize content
// =============================================

export const NAV_LINKS = ["Work", "About", "Services", "Contact"];

// ── Work Categories ──
export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ugc", label: "UGC Videos" },
  { id: "medical", label: "Medical Channels" },
  { id: "ads", label: "Ad Creatives" },
  { id: "music", label: "Music Channels" },
];

// ── Work Items ──
export interface WorkItem {
  id: number;
  category: string;
  title: string;
  sub: string;
  tag: string;
  color: string;
  bg: string;
  aspect: string;
  wide: boolean;
  videoUrl?: string;
  thumbnailUrl?: string;
  externalUrl?: string;
  hoverText?: string;
}

// Order: All 9:16 UGC grouped → Medical → Ad Creatives → Music
export const WORK_ITEMS: WorkItem[] = [
  // ── UGC Videos (all 9:16 grouped) ──
  {
    id: 6,
    category: "ugc",
    title: "Student UGC – Making Money IRL",
    sub: "Talking head · authentic",
    tag: "UGC",
    color: "#FF3CAC",
    bg: "#0f0a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "https://www.youtube.com/embed/_mSnbvMXM7o",
    thumbnailUrl: "",
  },
  {
    id: 7,
    category: "ugc",
    title: "Face Fat UGC",
    sub: "Hook-first · short-form",
    tag: "UGC",
    color: "#FF3CAC",
    bg: "#0f0a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "https://www.youtube.com/embed/YHnjDHbUtYs",
    thumbnailUrl: "",
  },
  {
    id: 10,
    category: "ugc",
    title: "Look Maxxing Ad",
    sub: "Short-form · transformation",
    tag: "UGC",
    color: "#FF3CAC",
    bg: "#0f0a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "https://www.youtube.com/embed/ogcqyYLxpMI",
    thumbnailUrl: "",
  },
  {
    id: 11,
    category: "ugc",
    title: "Toothpaste Ad",
    sub: "Short-form · product spot",
    tag: "UGC",
    color: "#FF3CAC",
    bg: "#0f0a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "https://www.youtube.com/embed/lyWGH6IVmcU",
    thumbnailUrl: "",
  },
  {
    id: 12,
    category: "ugc",
    title: "Panic Attack Relief Ad",
    sub: "Short-form · wellness",
    tag: "UGC",
    color: "#FF3CAC",
    bg: "#0f0a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "https://www.youtube.com/embed/kQflYXLSKMI",
    thumbnailUrl: "",
  },
  {
    id: 5,
    category: "ugc",
    title: "Clipping UGC Video",
    sub: "Short-form clipping style",
    tag: "UGC",
    color: "#FF3CAC",
    bg: "#0f0a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "https://www.youtube.com/embed/9MRdboXMUFc",
    thumbnailUrl: "",
  },

  // ── Medical Channel ──
  {
    id: 4,
    category: "medical",
    title: "Medical Education Channel",
    sub: "Faceless medical explainers",
    tag: "Medical Channel",
    color: "#7B61FF",
    bg: "#0a0a14",
    aspect: "16/9",
    wide: true,
    videoUrl: "",
    thumbnailUrl: "https://img.youtube.com/vi/IEIHoqIGzDo/hqdefault.jpg",
    externalUrl: "https://www.youtube.com/channel/UC7FGrszVcL7LVz8cB6ZcvLA",
    hoverText: "Experience the quality of AI-generated voiceovers in medical education content",
  },

  // ── Ad Creatives (16:9) ──
  {
    id: 8,
    category: "ads",
    title: "Medical Animation Demo",
    sub: "16:9 · educational style",
    tag: "Ad Creative",
    color: "#FFD600",
    bg: "#0f0f0a",
    aspect: "16/9",
    wide: true,
    videoUrl: "https://www.youtube.com/embed/tyawTjdyXNc",
    thumbnailUrl: "",
  },
  {
    id: 9,
    category: "ads",
    title: "Lavender Shampoo UGC Ad",
    sub: "16:9 · product spot",
    tag: "Ad Creative",
    color: "#FFD600",
    bg: "#0f0f0a",
    aspect: "16/9",
    wide: false,
    videoUrl: "https://www.youtube.com/embed/baixoerN9uE",
    thumbnailUrl: "",
  },

  // ── Music Channels (lowest priority) ──
  {
    id: 1,
    category: "music",
    title: "Anime Music Zone",
    sub: "Faceless anime music channel",
    tag: "Music Channel",
    color: "#0FF",
    bg: "#0a0a0f",
    aspect: "16/9",
    wide: true,
    videoUrl: "",
    thumbnailUrl: "https://img.youtube.com/vi/_xEDmgVscdc/hqdefault.jpg",
    externalUrl: "https://www.youtube.com/@anime-music-zone/videos",
    hoverText: "AI-curated music with custom thumbnails — built for traction and views",
  },
  {
    id: 2,
    category: "music",
    title: "Music Channel #2",
    sub: "Faceless music curation",
    tag: "Music Channel",
    color: "#0FF",
    bg: "#0a0a0f",
    aspect: "16/9",
    wide: false,
    videoUrl: "",
    thumbnailUrl: "https://img.youtube.com/vi/4mHaVabDmI4/hqdefault.jpg",
    externalUrl: "https://www.youtube.com/channel/UCKriIFsJkw3L1__p5VMcGLQ",
    hoverText: "AI-curated music with custom thumbnails — built for traction and views",
  },
  {
    id: 3,
    category: "music",
    title: "Music Channel #3",
    sub: "Faceless music curation",
    tag: "Music Channel",
    color: "#0FF",
    bg: "#0a0a0f",
    aspect: "16/9",
    wide: false,
    videoUrl: "",
    thumbnailUrl: "https://img.youtube.com/vi/GcbkY-GRNVI/hqdefault.jpg",
    externalUrl: "https://www.youtube.com/channel/UCMIKiS8fI9Wu3t6qkZYoGhA",
    hoverText: "AI-curated music with custom thumbnails — built for traction and views",
  },
];

// ── Services ──
export interface ServiceItem {
  no: string;
  title: string;
  desc: string;
  tools: string[];
  color: string;
  ctaLink?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    no: "01",
    title: "AI Video Production",
    desc: "End-to-end AI video — scriptwriting, voice cloning, video generation, editing and captions. Ads, explainers, faceless content.",
    tools: ["Runway", "ElevenLabs", "Sora", "CapCut"],
    color: "#0FF",
    ctaLink: "",
  },
  {
    no: "02",
    title: "Faceless YouTube Channels",
    desc: "Full channel setup, niche research, content pipeline, SEO and thumbnail strategy. Proven with 50K+ views.",
    tools: ["ChatGPT", "Invideo", "TubeBuddy"],
    color: "#FF3CAC",
    ctaLink: "",
  },
  {
    no: "03",
    title: "UGC & Ad Creatives",
    desc: "Scroll-stopping UGC-style video ads — hook, story, CTA. Built for Meta, TikTok and YouTube pre-roll.",
    tools: ["CapCut", "Captions", "Descript"],
    color: "#FFD600",
    ctaLink: "",
  },
];

// ── About ──
export const ABOUT_SKILLS = ["n8n", "Runway", "ElevenLabs", "Claude API", "Python", "Make.com"];

// Set to a real image URL to replace the ST initials placeholder
export const AVATAR_URL = "";

// ── Contact ──
export const CAL_LINK = "https://calendly.com/tshivanshu29/30min";
export const EMAIL = "tshivanshu29@gmail.com";

// ── Social Links ──
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  twitter: "https://twitter.com",
};
