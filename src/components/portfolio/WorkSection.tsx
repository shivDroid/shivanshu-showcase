import { useState } from "react";
import { CATEGORIES, WORK_ITEMS, type WorkItem } from "@/config/portfolio";
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

function WorkCard({ item, onClick }: { item: WorkItem; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        gridColumn: item.wide ? "span 2" : "span 1",
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
          aspectRatio: item.wide ? "16/7" : item.aspect,
          background: item.thumbnailUrl
            ? `url(${item.thumbnailUrl}) center/cover`
            : `linear-gradient(135deg, ${item.color}11 0%, #000 100%)`,
        }}
      >
        {/* Decorative grid */}
        {!item.thumbnailUrl && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${item.color}08 1px, transparent 1px), linear-gradient(90deg, ${item.color}08 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        )}
        {/* Play button */}
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
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <WorkCard
              key={item.id}
              item={item}
              onClick={() => item.videoUrl ? setSelectedItem(item) : null}
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
