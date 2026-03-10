import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/config/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 h-16 transition-all duration-300"
      style={{
        background: scrolled ? "hsl(240 14% 2% / 0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "none",
      }}
    >
      {/* Logo */}
      <div className="font-heading font-extrabold text-base tracking-tight">
        SHI<span className="text-primary">VANSHU</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((l) => (
          <span key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>
            {l}
          </span>
        ))}
      </div>

      {/* Desktop CTA */}
      <button
        className="cta-btn hidden md:block"
        style={{ padding: "8px 20px", fontSize: 11 }}
        onClick={() => scrollTo("contact")}
      >
        Available Now
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 right-0 flex flex-col items-center gap-6 py-8 md:hidden"
          style={{
            background: "hsl(240 14% 2% / 0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid hsl(var(--border))",
          }}
        >
          {NAV_LINKS.map((l) => (
            <span key={l} className="nav-link text-lg" onClick={() => scrollTo(l.toLowerCase())}>
              {l}
            </span>
          ))}
          <button className="cta-btn" style={{ fontSize: 11 }} onClick={() => scrollTo("contact")}>
            Available Now
          </button>
        </div>
      )}
    </nav>
  );
}
