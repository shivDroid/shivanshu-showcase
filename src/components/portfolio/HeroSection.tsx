import { useRef, useState, useCallback } from "react";
import heroSilhouette from "@/assets/hero-silhouette.png";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -999, y: -999, active: false });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse((prev) => ({ ...prev, active: false }));
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
          className="h-[85vh] w-auto object-contain opacity-70 select-none"
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
          background: `radial-gradient(circle 200px at ${mouse.x}px ${mouse.y}px, hsl(180 100% 50% / 0.06) 0%, transparent 100%)`,
        }}
      />

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
      <div className="relative z-[3] text-center flex flex-col items-center mt-[20vh]">
        <h1
          className="font-heading font-extrabold leading-[1.15] tracking-tight mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          <span className="hero-word" style={{ animationDelay: "0.1s" }}>Shivanshu.</span>
          <br />
          <span className="hero-word text-muted-foreground font-light" style={{ animationDelay: "0.3s", fontSize: "clamp(20px, 3vw, 38px)" }}>
            AI Content & Systems for those
          </span>
          <br />
          <span className="hero-word text-muted-foreground font-light" style={{ animationDelay: "0.5s", fontSize: "clamp(20px, 3vw, 38px)" }}>
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
