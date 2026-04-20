"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  speed?: number;       // 0–1, how fast relative to scroll (0.2 = subtle, 0.5 = strong)
  opacity?: number;
  blendMode?: string;
  className?: string;
}

export default function ParallaxTexture({
  src,
  speed = 0.25,
  opacity = 0.07,
  blendMode = "multiply",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const offset = -rect.top * speed;
      el.style.transform = `translateY(${offset}px)`;
    };

    // initial position
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [speed]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute pointer-events-none will-change-transform ${className}`}
      style={{
        inset: "-50%",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity,
        mixBlendMode: blendMode as React.CSSProperties["mixBlendMode"],
      }}
    />
  );
}
