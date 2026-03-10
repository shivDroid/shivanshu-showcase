// =============================================
// PORTFOLIO CONFIGURATION
// Edit these arrays/objects to customize content
// =============================================

export const NAV_LINKS = ["Work", "About", "Services", "Contact"];

// ── Hero Stats ──
export const STATS = [
  { n: "50K+", l: "YouTube Views" },
  { n: "4+", l: "AI Tools Mastered" },
  { n: "∞", l: "Automation Flows Built" },
  { n: "2", l: "Faceless Channels" },
];

// ── Work Categories ──
export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "faceless", label: "Faceless YouTube" },
  { id: "ugc", label: "UGC Videos" },
  { id: "ads", label: "Ad Creatives" },
  { id: "automations", label: "AI Automations" },
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
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 1,
    category: "faceless",
    title: "AI Explained – Channel #1",
    sub: "50K views · 200 Subs",
    tag: "Faceless YT",
    color: "#0FF",
    bg: "#0a0a0f",
    aspect: "16/9",
    wide: true,
    videoUrl: "",
    thumbnailUrl: "",
  },
  {
    id: 2,
    category: "ugc",
    title: "UGC Ad – SaaS Product",
    sub: "Hook-first · 60s cut",
    tag: "UGC",
    color: "#FF3CAC",
    bg: "#0f0a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "",
    thumbnailUrl: "",
  },
  {
    id: 3,
    category: "ads",
    title: "AI-Generated Ad Creative",
    sub: "Runway · ElevenLabs · Captions",
    tag: "Ad Creative",
    color: "#FFD600",
    bg: "#0f0f0a",
    aspect: "1/1",
    wide: false,
    videoUrl: "",
    thumbnailUrl: "",
  },
  {
    id: 4,
    category: "automations",
    title: "n8n Lead Gen Pipeline",
    sub: "500+ leads automated / week",
    tag: "Automation",
    color: "#7B61FF",
    bg: "#0a0a14",
    aspect: "16/9",
    wide: true,
    videoUrl: "",
    thumbnailUrl: "",
  },
  {
    id: 5,
    category: "ads",
    title: "Voice-Cloned Product Spot",
    sub: "ElevenLabs · CapCut · Sora",
    tag: "Ad Creative",
    color: "#FF3CAC",
    bg: "#120a0f",
    aspect: "9/16",
    wide: false,
    videoUrl: "",
    thumbnailUrl: "",
  },
  {
    id: 6,
    category: "faceless",
    title: "Tech Channel #2 Pilot",
    sub: "AI script → voice → video",
    tag: "Faceless YT",
    color: "#0FF",
    bg: "#030d0d",
    aspect: "16/9",
    wide: false,
    videoUrl: "",
    thumbnailUrl: "",
  },
  {
    id: 7,
    category: "ugc",
    title: "Talking Head – Health App",
    sub: "Raw → edited → captioned",
    tag: "UGC",
    color: "#39FF14",
    bg: "#03100a",
    aspect: "9/16",
    wide: false,
    videoUrl: "",
    thumbnailUrl: "",
  },
  {
    id: 8,
    category: "automations",
    title: "AI Content Calendar Bot",
    sub: "Claude + Make + Notion",
    tag: "Automation",
    color: "#7B61FF",
    bg: "#06030f",
    aspect: "1/1",
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
