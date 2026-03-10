export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-20 relative overflow-hidden"
    >
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* BG grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(180 100% 50% / 0.02) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50% / 0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(256 100% 69% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Available badge */}
      <div className="flex items-center gap-2 mb-8 relative">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#39FF14", boxShadow: "0 0 8px #39FF14" }}
        />
        <span className="text-[11px] tracking-[0.15em] uppercase font-mono" style={{ color: "#39FF14" }}>
          Available for freelance & consulting
        </span>
      </div>

      {/* Big headline with stagger */}
      <div className="relative max-w-[900px]">
        <h1
          className="font-heading font-extrabold leading-[0.95] tracking-tighter mb-8"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          <span className="hero-word" style={{ animationDelay: "0.1s" }}>AI Content.</span>
          <br />
          <span
            className="hero-word"
            style={{
              animationDelay: "0.3s",
              color: "transparent",
              WebkitTextStroke: "1px hsl(var(--primary))",
            }}
          >
            Systems.
          </span>
          <br />
          <span className="hero-word" style={{ animationDelay: "0.5s" }}>That Scale.</span>
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <p className="text-[15px] text-muted-foreground max-w-[420px] leading-[1.7] font-light">
            I'm Shivanshu — I build AI-powered video pipelines, faceless channels, and automation systems that generate attention and revenue without a team.
          </p>
          <div className="flex gap-3">
            <button className="cta-btn" onClick={() => scrollTo("work")}>
              See My Work
            </button>
            <button className="cta-btn-outline" onClick={() => scrollTo("contact")}>
              Book a Call
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-border relative">
        {STATS.map((s) => (
          <div key={s.l}>
            <div className="font-heading font-extrabold text-[28px] tracking-tight">
              {s.n}
            </div>
            <div className="text-[11px] text-muted-foreground tracking-[0.1em] uppercase font-mono">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
