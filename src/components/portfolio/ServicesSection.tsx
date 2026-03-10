import { SERVICES } from "@/config/portfolio";

function Tag({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="tool-tag"
      style={{ color, border: `1px solid ${color}33` }}
    >
      {children}
    </span>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 md:px-10 py-20 md:py-24 border-t border-border">
      <div className="section-label" style={{ color: "#FF3CAC" }}>
        // Services
      </div>
      <h2
        className="section-heading mb-16"
        style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
      >
        What I Build
      </h2>

      {SERVICES.map((s) => (
        <div key={s.no} className="service-row">
          <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_auto] items-start md:items-center gap-4 md:gap-8">
            <span className="font-mono text-[11px] tracking-[0.1em] hidden md:block" style={{ color: "#333" }}>
              {s.no}
            </span>
            <div className="font-heading font-bold text-xl tracking-tight">
              <span className="font-mono text-[11px] text-muted-foreground mr-3 md:hidden">{s.no}</span>
              {s.title}
            </div>
            <p className="text-[13px] leading-[1.6]" style={{ color: "#666" }}>
              {s.desc}
            </p>
            <div className="flex gap-1.5 flex-wrap md:justify-end items-center">
              {s.tools.map((t) => (
                <Tag key={t} color={s.color}>{t}</Tag>
              ))}
              {s.ctaLink && (
                <a
                  href={s.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono tracking-[0.1em] ml-2 transition-colors hover:text-primary"
                  style={{ color: s.color }}
                >
                  → Enquire
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
