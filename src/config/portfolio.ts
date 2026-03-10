// =============================================
// PORTFOLIO CONFIGURATION
// Edit these arrays/objects to customize content
// =============================================

export const NAV_LINKS = ["Work", "About", "Services", "Contact"];

// ── Work Categories ──
export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "music", label: "Music Channels" },
  { id: "medical", label: "Medical Channels" },
  { id: "ugc", label: "UGC Videos" },
  { id: "ads", label: "Ad Creatives" },
];

// ── Work Items ──
// Add videoUrl for embed playback, thumbnailUrl for static thumbnail
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
  videoUrl?: string;       // YouTube/Vimeo embed URL
  thumbnailUrl?: string;   // Static thumbnail image
  externalUrl?: string;    // Link to external channel/page
}

export const WORK_ITEMS: WorkItem[] = [
  // ── Music Channels (Faceless) ──
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
    videoUrl: "https://www.youtube.com/embed?listType=user_uploads&list=anime-music-zone",
    thumbnailUrl: "",
    externalUrl: "https://www.youtube.com/@anime-music-zone/videos",
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
    thumbnailUrl: "",
    externalUrl: "https://www.youtube.com/channel/UCKriIFsJkw3L1__p5VMcGLQ",
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
    thumbnailUrl: "",
    externalUrl: "https://www.youtube.com/channel/UCMIKiS8fI9Wu3t6qkZYoGhA",
  },

  // ── Medical Channels (Faceless) ──
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
    thumbnailUrl: "",
    externalUrl: "https://www.youtube.com/channel/UC7FGrszVcL7LVz8cB6ZcvLA",
  },

  // ── UGC Videos (9:16) ──
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

  // ── Ad Creatives / Demo Videos (16:9) ──
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
    videoUrl: "",
    thumbnailUrl: "",
  },
];

// ── Services ──
export interface ServiceItem {
  no: string;
  title: string;
  desc: string;
  tools: string[];
  color: string;
  ctaLink?: string; // Optional "→ Enquire" link
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
    title: "AI Automation Systems",
    desc: "Custom workflow automation using n8n, Make, and LLMs. Lead gen, content ops, CRM — built to run without you.",
    tools: ["n8n", "Make", "Claude API", "Zapier"],
    color: "#7B61FF",
    ctaLink: "",
  },
  {
    no: "04",
    title: "UGC & Ad Creatives",
    desc: "Scroll-stopping UGC-style video ads — hook, story, CTA. Built for Meta, TikTok and YouTube pre-roll.",
    tools: ["CapCut", "Captions", "Descript"],
    color: "#FFD600",
    ctaLink: "",
  },
];

// ── About ──
export const ABOUT_SKILLS = ["n8n", "Runway", "ElevenLabs", "Claude API", "Python", "Make.com"];

export const PROFILE_FACTS = [
  { l: "YouTube", v: "50K views" },
  { l: "IIT Madras", v: "Data Science" },
  { l: "Exp", v: "Founder's Office × 3" },
];

// Set to a real image URL to replace the ST initials placeholder
export const AVATAR_URL = "";

// ── Contact ──
export const CAL_LINK = "https://cal.com"; // Replace with real Cal.com or Calendly link
export const EMAIL = "tshivanshu29@gmail.com";

// ── Social Links ──
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  twitter: "https://twitter.com",
};
