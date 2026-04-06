import Image from "next/image";

// Placeholder social posts — swap with actual brand photos
const POSTS = [
  {
    id: "photo-1544025162-d76694265947",
    caption: "Nothing beats the smell of these coming off the grill. 🔥",
  },
  {
    id: "photo-1528712306091-ed0763094c98",
    caption: "Mama's at it again. This woman never stops. ❤️",
  },
  {
    id: "photo-1555243896-c709bfa0b564",
    caption: "The char on these... there are no words.",
  },
  {
    id: "photo-1603360946369-dc9bb6258143",
    caption: "Night market vibes. Find us at Anaheim this Friday!",
  },
  {
    id: "photo-1567620832903-9fc6debc209f",
    caption: "24 hours of marinating. 10 minutes on the grill. Pure magic.",
  },
  {
    id: "photo-1561626423-a51b45aef0a1",
    caption: "Family operation. Every single skewer. 🙏",
  },
];

export default function Social() {
  return (
    <section id="social" className="bg-ember py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-body text-amber text-xs tracking-[0.4em] uppercase text-center mb-4">
          @mamasbbq_oc
        </p>
        <h2
          className="font-display italic text-warm-white text-center mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Follow the Journey
        </h2>
        <p className="font-body text-muted text-center mb-16 max-w-lg mx-auto text-sm leading-relaxed">
          We&apos;re on the road and behind the grill. Follow us for drop announcements,
          behind-the-scenes moments, and the occasional peek at what Mama&apos;s cooking up next.
        </p>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 mb-14">
          {POSTS.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={`https://images.unsplash.com/${post.id}?w=600&q=80&auto=format&fit=crop`}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Caption overlay on hover */}
              <div className="absolute inset-0 bg-ember/0 group-hover:bg-ember/80 transition-all duration-400 flex items-center justify-center p-5">
                <p className="font-body text-cream text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com/mamasbbq_oc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-xs tracking-[0.25em] uppercase bg-amber text-ember px-12 py-4 text-center hover:bg-gold transition-colors duration-300"
          >
            Instagram @mamasbbq_oc
          </a>
          <a
            href="https://tiktok.com/@mamasbbq_oc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-xs tracking-[0.25em] uppercase border border-amber text-amber px-12 py-4 text-center hover:bg-amber hover:text-ember transition-colors duration-300"
          >
            TikTok @mamasbbq_oc
          </a>
        </div>
      </div>
    </section>
  );
}
