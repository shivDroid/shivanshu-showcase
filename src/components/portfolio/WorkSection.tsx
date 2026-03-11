import { useState } from "react";
import { CATEGORIES, WORK_ITEMS, type WorkItem } from "@/config/portfolio";
import { useIsMobile } from "@/hooks/use-mobile";
import VideoModal from "./VideoModal";

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

function getYouTubeThumbnail(videoUrl?: string): string | null {
  if (!videoUrl) return null;
  const match = videoUrl.match(/\/embed\/([a-zA-Z0-9_-]+)/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

function WorkCard({ item, onClick, isMobile }: { item: WorkItem; onClick: () => void; isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);
  const thumbnail = item.thumbnailUrl || getYouTubeThumbnail(item.videoUrl);
  const showHoverText = item.hoverText && (hovered || isMobile);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        gridColumn: isMobile ? "span 1" : item.wide ? "span 2" : "span 1",
        background: item.bg,
        border: `1px solid ${hovered ? item.color + "55" : "hsl(var(--border))"}`,
        borderRadius: 4,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Thumbnail */}
      <div
        className="flex items-center justify-center relative overflow-hidden"
        style={{
          aspectRatio: isMobile ? "16/9" : (item.wide ? "16/7" : item.aspect),
          background: thumbnail
            ? `url(${thumbnail}) center/cover`
            : `linear-gradient(135deg, ${item.color}11 0%, #000 100%)`,
        }}
      >
        {/* Decorative grid */}
        {!thumbnail && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${item.color}08 1px, transparent 1px), linear-gradient(90deg, ${item.color}08 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        )}

        {/* Hover overlay with text */}
        {item.hoverText && (
          <div
            className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300"
            style={{
              background: "rgba(0,0,0,0.7)",
              opacity: hovered ? 1 : 0,
              pointerEvents: "none",
            }}
          >
            <p className="text-center text-[13px] font-mono tracking-wide" style={{ color: item.color }}>
              {item.hoverText}
            </p>
          </div>
        )}

        {/* Play button */}
        {!item.hoverText || !hovered ? (
          <div
            className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: 48,
              height: 48,
              border: `1.5px solid ${item.color}`,
              opacity: hovered ? 1 : 0.3,
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderLeft: `12px solid ${item.color}`,
                marginLeft: 4,
              }}
            />
          </div>
        ) : null}

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <Tag color={item.color}>{item.tag}</Tag>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 px-5 pb-5">
        <div className="font-heading font-semibold text-[15px] tracking-tight mb-1" style={{ color: "#f0f0f0" }}>
          {item.title}
        </div>
        <div className="text-[11px] font-mono tracking-[0.08em]" style={{ color: "#666" }}>
          {item.sub}
        </div>
        {/* Show hover text as subtext on mobile */}
        {isMobile && item.hoverText && (
          <div className="text-[11px] font-mono tracking-[0.04em] mt-2" style={{ color: item.color + "99" }}>
            {item.hoverText}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const isMobile = useIsMobile();

  const filtered = WORK_ITEMS.filter(
    (w) => activeCategory === "all" || w.category === activeCategory
  );

  return (
    <>
      <section id="work" className="px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between mb-12 gap-6">
          <div>
            <div className="section-label text-primary">// Work</div>
            <h2 className="section-heading" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
              Work
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`cat-btn ${activeCategory === c.id ? "active" : ""}`}
                onClick={() => setActiveCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {filtered.map((item) => (
            <WorkCard
              key={item.id}
              item={item}
              isMobile={isMobile}
              onClick={() => {
                if (item.videoUrl) {
                  setSelectedItem(item);
                } else if (item.externalUrl) {
                  const a = document.createElement("a");
                  a.href = item.externalUrl;
                  a.target = "_blank";
                  a.rel = "noopener noreferrer";
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }
              }}
            />
          ))}
        </div>
      </section>

      {selectedItem && (
        <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
