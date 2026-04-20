"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/gallery/BENJAMIN_F200_0490_2.webp",              w: 750, h: 505  },
  { src: "/gallery/BENJAMIN_F200_0499_18.webp",             w: 750, h: 1114 },
  { src: "/gallery/dblack+2024-11-13+133758.311.webp",      w: 750, h: 523  },
  { src: "/gallery/dblack+2024-11-13+140443.553+copy.webp", w: 750, h: 482  },
  { src: "/gallery/BENJAMIN_F200_0490_22.webp",             w: 750, h: 513  },
  { src: "/gallery/BENJAMIN_F200_0499_23.webp",             w: 750, h: 505  },
  { src: "/gallery/dblack+2024-11-13+140359.223.webp",      w: 750, h: 523  },
  { src: "/gallery/BENJAMIN_F200_0499_27.webp",             w: 750, h: 505  },
];

// Split alternating + repeat to fill scroll depth
const raw1 = IMAGES.filter((_, i) => i % 2 === 0);
const raw2 = IMAGES.filter((_, i) => i % 2 === 1);
const col1 = [...raw1, ...raw1, ...raw1];
const col2 = [...raw2, ...raw2, ...raw2];

export default function GalleryColumns() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      if (col1Ref.current) col1Ref.current.style.transform = `translateY(${y * 0.12}px)`;
      if (col2Ref.current) col2Ref.current.style.transform = `translateY(${-y * 0.12}px)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="bg-dusk min-h-screen pt-16">
      <div className="flex gap-1 px-1 items-start">
        {/* Column 1 — moves down on scroll */}
        <div ref={col1Ref} className="w-1/2 flex flex-col gap-1 will-change-transform">
          {col1.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt="Estudio Novena"
              width={img.w}
              height={img.h}
              sizes="50vw"
              className="w-full h-auto block"
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* Column 2 — offset start + moves up on scroll */}
        <div
          ref={col2Ref}
          className="w-1/2 flex flex-col gap-1 will-change-transform"
          style={{ marginTop: "80px" }}
        >
          {col2.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt="Estudio Novena"
              width={img.w}
              height={img.h}
              sizes="50vw"
              className="w-full h-auto block"
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
