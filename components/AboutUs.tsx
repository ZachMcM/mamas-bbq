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

        <div className="max-w-2xl mx-auto">
          <div>
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
