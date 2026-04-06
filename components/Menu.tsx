import Image from "next/image";

export default function Menu() {
  return (
    <section id="menu" className="bg-ember py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <p className="font-body text-amber text-xs tracking-[0.4em] uppercase text-center mb-4">
          The Menu
        </p>
        <p className="font-display italic text-muted text-center mb-20"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
          We make one thing.
        </p>

        {/* Single item card */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 border border-ash overflow-hidden">
          {/* Image side */}
          <div className="relative min-h-80 md:min-h-full">
            {/* Swap with actual skewer photo */}
            <Image
              src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=900&q=85&auto=format&fit=crop"
              alt="The Signature Filipino BBQ Pork Skewer"
              fill
              className="object-cover"
            />
          </div>

          {/* Details side */}
          <div className="bg-char p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="font-body text-xs tracking-[0.3em] uppercase bg-red-accent text-warm-white px-3 py-1">
                  The Original
                </span>
              </div>

              <h2 className="font-display italic text-warm-white leading-tight mb-5"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                The Signature Filipino BBQ Pork Skewer
              </h2>

              <div className="w-10 h-px bg-amber mb-6" />

              <p className="font-body text-muted leading-relaxed mb-8 text-sm">
                Tender pork marinated for 24 hours in Chef Jo&apos;s heirloom blend of soy, banana
                ketchup, garlic, calamansi, and brown sugar — then grilled over live fire until
                the edges char and the center stays impossibly juicy. Served hot off the skewer.{" "}
                <em>There&apos;s nothing else like it.</em>
              </p>

              <ul className="space-y-2.5 font-body text-sm text-muted">
                {[
                  "24-hour heirloom marinade",
                  "Grilled over live charcoal fire",
                  "Generations-old Filipino family recipe",
                ].map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="text-amber text-xs">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-ash flex items-end justify-between">
              <div>
                <span className="font-display italic text-amber"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                  $5
                </span>
              </div>
              <span className="font-body text-xs text-muted tracking-widest uppercase mb-2">
                Per skewer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
