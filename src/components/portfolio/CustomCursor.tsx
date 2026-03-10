import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        background: "hsl(var(--primary))",
        transform: "translate(-50%,-50%)",
        mixBlendMode: "difference",
        transition: "transform 0.1s",
      }}
    />
  );
}
