import { useEffect } from "react";
import type { WorkItem } from "@/config/portfolio";
import { X } from "lucide-react";

interface VideoModalProps {
  item: WorkItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.9)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <div
        className="w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={item.videoUrl}
          className="w-full h-full rounded"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={item.title}
        />
      </div>
    </div>
  );
}
