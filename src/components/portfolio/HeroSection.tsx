import { useRef, useState, useCallback } from "react";
import heroSilhouette from "@/assets/hero-silhouette.png";
import { WORK_ITEMS } from "@/config/portfolio";

// Extract YouTube video IDs for thumbnails from actual UGC content
const UGC_THUMBNAILS = WORK_ITEMS
  .filter((item) => item.videoUrl?.includes("youtube.com/embed/"))
  .slice(0, 9)
  .map((item) => {
    const id = item.videoUrl!.split("/embed/")[1];
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  });

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -999, y: -999, active: false });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    setMouse({ x: mx, y: my, active: true });
    // Move image opposite to cursor
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setParallax({
      x: -((mx - cx) / cx) * 18,
      y: -((my - cy) / cy) * 18,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse((prev) => ({ ...prev, active: false }));
    setParallax({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at center, transparent 30%, hsl(var(--background)) 100%)",
          zIndex: 2,
        }}
      />

      {/* Central silhouette */}
      <div className="absolute inset-0 flex items-center justify-center z-[1]">
        <img
          src={heroSilhouette}
          alt=""
          className="h-[85vh] w-auto object-contain opacity-70 select-none transition-transform duration-300 ease-out"
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
          draggable={false}
          width={1024}
          height={1024}
        />
      </div>

      {/* Torch cursor glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          opacity: mouse.active ? 1 : 0,
          background: `radial-gradient(circle 220px at ${mouse.x}px ${mouse.y}px, hsl(180 100% 50% / 0.12) 0%, hsl(180 100% 50% / 0.04) 40%, transparent 100%)`,
        }}
      />

      {/* Torch content preview images */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] transition-opacity duration-300"
        style={{
          opacity: mouse.active ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, black 0%, transparent 100%)`,
        }}
      >
        <div className="w-full h-full grid grid-cols-3 gap-4 p-16 opacity-40 blur-[3px]">
          {UGC_THUMBNAILS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-full h-full object-cover rounded-lg"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Corner markers */}
      <div className="hero-corner hero-corner--tl" />
      <div className="hero-corner hero-corner--tr" />
      <div className="hero-corner hero-corner--bl" />
      <div className="hero-corner hero-corner--br" />

      {/* Get in touch — bottom left */}
      <button
        className="absolute bottom-8 left-8 z-10 cta-btn-outline text-[11px] px-5 py-3"
        onClick={() => scrollTo("contact")}
      >
        Get in touch →
      </button>

      {/* Center text */}
      <div className="relative z-[3] text-center flex flex-col items-center mt-[22vh]">
        <h1
          className="font-heading font-extrabold leading-[1.15] tracking-tight mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          <span className="hero-word" style={{ animationDelay: "0.1s" }}>
            AI Content & Systems for those
          </span>
          <br />
          <span className="hero-word" style={{ animationDelay: "0.3s" }}>
            who refuse to settle.
          </span>
        </h1>
      </div>

      {/* 2024 — Future */}
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-heading text-[13px] tracking-[0.15em] text-muted-foreground hero-word" style={{ animationDelay: "0.7s" }}>
        2024 — Future
      </span>

      {/* Available badge — bottom right */}
      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#39FF14", boxShadow: "0 0 8px #39FF14" }}
        />
        <span className="text-[10px] tracking-[0.12em] uppercase font-mono" style={{ color: "#39FF14" }}>
          Available
        </span>
      </div>
    </section>
  );
}
