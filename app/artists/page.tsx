export const metadata = { title: "Artists — Estudio Novena" };

export default function Artists() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">

      {/* Header */}
      <div className="mb-14 md:mb-20">
        <p
          className="text-[10px] tracking-[0.3em] uppercase text-dusk/30 mb-4"
          style={{ fontFamily: "var(--font-highway)" }}
        >
          Who we&apos;ve worked with
        </p>
        <h1
          className="text-[clamp(3rem,10vw,8rem)] uppercase leading-none tracking-tight text-dusk"
          style={{ fontFamily: "var(--font-highway-exp)" }}
        >
          Clients
        </h1>
      </div>

      <div className="grid md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_480px] gap-16 items-start">

        {/* Left copy */}
        <div>
          <p
            className="text-dusk/60 text-base leading-relaxed mb-10 max-w-md"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A selection of the artists and projects that have recorded, mixed, or
            produced at Estudio Novena. Below, a playlist of what&apos;s come out
            of our sessions.
          </p>

          {/* Artist list hint */}
          <ul className="space-y-3 border-t border-sand/60 pt-6">
            {["Benjamin Walker", "Los Bunkers", "Charli XCX", "Libre", "Noviembre"].map((name) => (
              <li
                key={name}
                className="flex items-center gap-3 text-dusk/50 text-sm pb-3 border-b border-sand/30"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <span className="w-1 h-1 rounded-full bg-flame shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Spotify — dark card */}
        <div className="bg-dusk p-1">
          <iframe
            title="Estudio Novena Friends"
            src="https://open.spotify.com/embed/playlist/5ie7WxjIdQ42qlFVFcUt1r?utm_source=generator&theme=0"
            width="100%"
            height="500"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ border: 0, display: "block" }}
          />
          <div className="px-3 py-3 flex items-center gap-2">
            <span
              className="text-[9px] tracking-[0.25em] uppercase text-ivory/25"
              style={{ fontFamily: "var(--font-highway)" }}
            >
              Estudio Novena Friends — Playlist
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
