import Image from "next/image";

const BULLETS = [
  "Family recipe of traditional Filipino food Mama Jo Ito brought from the Philippines",
  "Pork, freshly chopped and sourced from a local butcher",
  "Pork marinated for 30 hours",
  "Grilled over fresh hot coals giving a smokey flavor and crispy edges",
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-cream-card py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-body text-orange text-xs tracking-[0.4em] uppercase text-center mb-20">
          Our Story
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left: Image + pull quote */}
          <div className="relative pb-10 pr-10">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&auto=format&fit=crop"
                alt="Mama Jo Ito at the grill"
                fill
                className="object-cover"
              />
            </div>

            {/* Pull quote — overlaps bottom-right */}
            <div className="absolute bottom-0 right-0 bg-orange p-6 max-w-[260px]">
              <p className="font-display text-lg italic text-white leading-snug">
                &ldquo;You need to sell these.&rdquo;
              </p>
              <p className="font-body text-xs tracking-widest uppercase text-white/70 mt-2">
                — What everyone always said
              </p>
            </div>
          </div>

          {/* Right: Copy + bullets */}
          <div className="lg:pt-4">
            <h2
              className="font-display italic text-ink-strong leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Some things are too good<br className="hidden lg:block" /> to keep to yourself.
            </h2>

            <p className="font-body text-ink-muted leading-relaxed mb-8">
              Mama Jo Ito&apos;s secret recipe started as a closely guarded family tradition,
              brought straight from the Philippines and passed around at backyard gatherings.
              Now everyone gets a taste.
            </p>

            <ul className="space-y-4">
              {BULLETS.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-orange flex-shrink-0" />
                  <p className="font-body text-ink leading-relaxed">{bullet}</p>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-orange pl-5 mt-10">
              <p className="font-display text-xl italic text-ink-strong leading-relaxed">
                Every skewer is made with Mama Jo Ito&apos;s secret recipe — the same way
                it always was, with the same love it always had.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
