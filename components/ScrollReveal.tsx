"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).dataset.visible = "";
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
