import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-smoke py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="font-body text-amber text-xs tracking-[0.4em] uppercase text-center mb-20">
          Our Story
        </p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* ── Left: Image + pull quote ── */}
          <div className="relative pb-10 pr-10">
            <div className="relative aspect-[3/4] border border-ash overflow-hidden">
              {/* Swap with actual Chef Jo photo */}
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&auto=format&fit=crop"
                alt="Chef Jo Ito at the grill"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember/50 to-transparent" />
            </div>

            {/* Pull quote — overlaps bottom-right of photo */}
            <div className="absolute bottom-0 right-0 bg-amber p-6 max-w-[260px]">
              <p className="font-display text-lg italic text-ember leading-snug">
                &ldquo;You need to sell these.&rdquo;
              </p>
              <p className="font-body text-xs tracking-widest uppercase text-ember/60 mt-2">
                — What everyone always said
              </p>
            </div>
          </div>

          {/* ── Right: Copy ── */}
          <div className="lg:pt-4">
            <h2 className="font-display italic text-warm-white leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Some things are too good<br className="hidden lg:block" /> to keep to yourself.
            </h2>

            <div className="space-y-5 font-body text-muted leading-relaxed">
              <p>
                For years, Chef Jo Ito&apos;s Filipino BBQ pork skewers were the stuff of local
                legend — a secret that traveled from neighbor to neighbor, whispered at birthday
                parties and passed around at backyard gatherings like a precious heirloom. The
                moment those skewers hit the grill, everything else stopped. Conversations paused.
                Eyes closed. Grown men went back for thirds before finishing their firsts.
              </p>

              <p>
                Her marinade is built from a lifetime of memory — handed down through generations
                of Filipino kitchens. A slow-building sweetness. The deep soy kiss of banana
                ketchup and garlic. Bright with calamansi. Then that char: the smoky, caramelized
                finish that comes only from the patient hand of someone who has been doing this
                their whole life.
              </p>

              <p>
                Jo&apos;s son Nick watched it happen at gathering after gathering. He&apos;d see
                his friends&apos; eyes light up. He&apos;d hear the same words, every time:{" "}
                <em className="text-cream">&ldquo;You need to sell these.&rdquo;</em>
              </p>

              <p>Eventually, they listened.</p>

              <p className="text-cream">
                <strong className="font-semibold">Mama&apos;s BBQ</strong> was born not from a
                business plan, but from a belief — that the food we share with the people we love
                should reach everyone it can. That the flavors Chef Jo carried from her heritage
                deserve a stage beyond the backyard fence. That a single, perfect thing, made with
                total care, is worth everything.
              </p>

              {/* Closing pull quote */}
              <blockquote className="border-l-2 border-amber pl-5 mt-8">
                <p className="font-display text-xl italic text-cream leading-relaxed">
                  Every skewer we hand you is a piece of that story. Made by Mama. Brought to
                  you by her son. Made, above all else, with love.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
