import { CAL_LINK, EMAIL, SOCIAL_LINKS } from "@/config/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-20 md:py-24 pb-28 md:pb-32 border-t border-border text-center relative overflow-hidden"
    >
      {/* Glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.03) 0%, transparent 65%)",
        }}
      />

      <div className="section-label text-primary relative">// Let's work</div>
      <h2
        className="section-heading leading-[0.95] mb-8 relative"
        style={{ fontSize: "clamp(40px, 8vw, 96px)", letterSpacing: "-0.03em" }}
      >
        Got a project?
        <br />
        <span className="text-primary">Let's talk.</span>
      </h2>
      <p className="text-[15px] text-muted-foreground mb-12 relative">
        Open to freelance, consulting and part-time collabs.
        <br />
        Based in Gurgaon, works globally.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="cta-btn">
          Book a 30-min call →
        </a>
        <a href={`mailto:${EMAIL}`} className="cta-btn-outline">
          {EMAIL}
        </a>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono tracking-[0.08em]" style={{ color: "#333" }}>
        <span>© {new Date().getFullYear()} SHIVANSHU TRIPATHI</span>
        <span className="text-primary">SHIVANSHU.DEV</span>
        <div className="flex gap-6">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">LINKEDIN</a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">YOUTUBE</a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">TWITTER</a>
        </div>
      </div>
    </section>
  );
}
