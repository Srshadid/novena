import Image from "next/image";
import Link from "next/link";
import ParallaxTexture from "@/components/ParallaxTexture";
import HalftoneImage from "@/components/HalftoneImage";

const marqueeItems = [
  { type: "text",  value: "Estudio Novena" },
  { type: "icon",  value: "araucana"       },
  { type: "text",  value: "Mexico City"    },
  { type: "icon",  value: "sun"            },
  { type: "icon",  value: "cactus"         },
  { type: "text",  value: "Recording"      },
  { type: "icon",  value: "pepper"         },
  { type: "text",  value: "Independent"    },
  { type: "icon",  value: "flower"         },
  { type: "icon",  value: "piramid"        },
  { type: "text",  value: "Estudio Novena" },
  { type: "icon",  value: "fork"           },
  { type: "text",  value: "Sessions"       },
  { type: "icon",  value: "yito"           },
] as const;

export default function Home() {
  return (
    <>

      {/* ─────────────────────────────────────────────────
          01  HERO — dark photo + texture01 painterly layer
      ───────────────────────────────────────────────── */}
      <section
        data-section="hero"
        data-theme="dark"
        className="relative h-[94svh] min-h-[520px] overflow-hidden"
      >
        <Image
          src="/gallery/BENJAMIN_F200_0499_18.webp"
          alt="Session at Estudio Novena"
          fill
          priority
          className="object-cover object-center hero-img"
          style={{ filter: "contrast(1.32) brightness(0.9) sepia(0.29) saturate(0.8)" }}
        />

        {/* Halftone dot grid — vintage newspaper feel */}
        <div className="halftone-dots" />

        {/* Texture overlay — araucaria halftone adds painterly grain */}
        <ParallaxTexture
          src="/textures/textures-trippy01.png"
          speed={0.3}
          opacity={0.28}
          blendMode="screen"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(26,26,24,0.65) 100%)" }} />

        {/* Content — centered editorial */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5 md:px-16"
             style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,26,24,0.45) 0%, transparent 100%)" }}
        >

          <h1
            className="text-ivory uppercase leading-[0.9] tracking-tight
                       text-[clamp(2rem,4vw,3.2rem)] max-w-3xl
                       opacity-0 animate-fade-up"
            style={{ fontFamily: "var(--font-highway-exp)", animationFillMode: "forwards" }}
          >
            El espacio donde abrazamos tu música
          </h1>

          <p
            className="mt-5 text-ivory/80 italic
                       text-[clamp(1.1rem,2.5vw,1.8rem)]
                       opacity-0 animate-fade-up delay-100"
            style={{ fontFamily: "var(--font-serif)", animationFillMode: "forwards" }}
          >
            De LATAM para el mundo
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2
                       rounded-full border border-ivory text-ivory px-7 py-3 text-[10px] tracking-[0.2em] uppercase
                       hover:bg-ivory hover:text-dusk transition-colors
                       opacity-0 animate-fade-up delay-200"
            style={{ fontFamily: "var(--font-highway)", animationFillMode: "forwards" }}
          >
            Book a session →
          </Link>

        </div>

        {/* Location tag — bottom left */}
        <p
          className="absolute bottom-6 left-5 md:left-10 z-10
                     text-ivory/30 text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-highway)" }}
        >
          Estudio · Mexico City
        </p>
      </section>

      {/* ─────────────────────────────────────────────────
          02  MARQUEE
      ───────────────────────────────────────────────── */}
      <div className="bg-dusk overflow-hidden py-5">
        <div className="flex items-center animate-marquee-left w-max gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              {item.type === "text" && (
                <span
                  className="text-ivory/70 uppercase text-2xl md:text-3xl tracking-[0.12em] leading-none"
                  style={{ fontFamily: "var(--font-highway-exp)" }}
                >
                  {item.value}
                </span>
              )}
              {item.type === "icon" && (
                <Image
                  src={`/icons/white-icon-${item.value}.png`}
                  alt=""
                  width={36}
                  height={36}
                  className="w-8 h-8 md:w-9 md:h-9 object-contain opacity-60"
                />
              )}
              <span className="ml-8 text-ivory/20 text-xl leading-none">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          03  EDITORIAL — 2-col: content left, photo right bleeds
      ───────────────────────────────────────────────── */}
      <section
        id="about"
        data-section="about"
        className="relative overflow-hidden"
      >
        <ParallaxTexture
          src="/textures/textures-trippy03.png"
          speed={0.45}
          opacity={0.14}
          blendMode="multiply"
        />

        <div className="relative z-10 grid md:grid-cols-[1fr_1fr] min-h-[600px] md:min-h-[700px] items-stretch">

          {/* LEFT — heading + body + CTA */}
          <div className="flex flex-col justify-center px-5 md:pl-12 lg:pl-20 py-16 md:py-24 pr-8 md:pr-12">

            <p
              className="text-[9px] tracking-[0.35em] uppercase text-dusk/30 mb-5"
              style={{ fontFamily: "var(--font-highway)" }}
            >
              01 — The Studio
            </p>

            <h2
              className="uppercase leading-[0.9] tracking-tight text-dusk mb-8
                         text-[clamp(2.8rem,5vw,4.5rem)]"
              style={{ fontFamily: "var(--font-highway-exp)" }}
            >
              The studio<br />behind<br />the sound
            </h2>

            <div
              className="space-y-5 text-dusk/60 leading-[1.75] max-w-[44ch] mb-10"
              style={{ fontFamily: "var(--font-highway)", fontSize: "clamp(0.9rem,1.3vw,1rem)" }}
            >
              <p>
                An independent recording studio in Mexico City&apos;s Colonia Cuauhtémoc —
                built for musicians who want to work with full creative freedom.
                No clock pressure, no corporate atmosphere.
              </p>
              <p>
                The name refers to the nine days of preparation that precede something
                meaningful. Every session is a focused, intentional commitment to the work.
              </p>
              <p>
                We&apos;ve worked with artists across Mexico, Chile, and beyond — from
                emerging acts to internationally recognized names, recording everything
                from intimate folk to sprawling psychedelic rock.
              </p>
            </div>

            <Link
              href="/contact"
              className="self-start inline-flex items-center gap-2
                         rounded-full border border-dusk text-dusk
                         px-7 py-3 text-[10px] tracking-[0.2em] uppercase
                         hover:bg-dusk hover:text-ivory transition-colors"
              style={{ fontFamily: "var(--font-highway)" }}
            >
              Book a session →
            </Link>

          </div>

          {/* RIGHT — single photo, bleeds to edge, no padding */}
          <HalftoneImage
            src="/gallery/BENJAMIN_F200_0490_2.webp"
            alt="Session at Estudio Novena"
            fill
            containerClassName="hidden md:block min-h-[600px] h-full"
            className="object-cover object-center"
          />

        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          04  FULL-BLEED PHOTO — texture02 split landscape
      ───────────────────────────────────────────────── */}
      <section
        data-section="photo"
        data-theme="dark"
        className="relative overflow-hidden"
        style={{ height: "min(65vw, 680px)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/gallery/dblack+2024-11-13+133758.311.webp"
            alt="Estudio Novena"
            fill
            className="object-cover object-center"
            style={{ filter: "contrast(1.32) brightness(0.9) sepia(0.29) saturate(0.8)" }}
          />
          <div className="halftone-dots" />
        </div>
        {/* Landscape split texture — screen blend adds a color-field effect */}
        <ParallaxTexture
          src="/textures/textures-trippy02.png"
          speed={0.55}
          opacity={0.22}
          blendMode="screen"
        />
      </section>

      {/* ─────────────────────────────────────────────────
          05  PILLARS — texture04 landscape on ivory
      ───────────────────────────────────────────────── */}
      <section
        data-section="pillars"
        className="relative overflow-hidden border-y border-sand/50"
      >
        <ParallaxTexture
          src="/textures/textures-trippy04.png"
          speed={0.4}
          opacity={0.12}
          blendMode="multiply"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-sand/50">
            {[
              { label: "Location",   value: "Mexico City" },
              { label: "Founded",    value: "Independent" },
              { label: "Discipline", value: "Recording"   },
            ].map(({ label, value }) => (
              <div key={label} className="py-8 px-4 md:px-8 first:pl-0 last:pr-0">
                <p
                  className="text-[8px] tracking-[0.3em] uppercase text-dusk/25 mb-2"
                  style={{ fontFamily: "var(--font-highway)" }}
                >
                  {label}
                </p>
                <p
                  className="text-dusk text-base md:text-lg uppercase leading-tight"
                  style={{ fontFamily: "var(--font-highway-exp)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


</>
  );
}
