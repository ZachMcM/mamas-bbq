"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToSchedule = () => {
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background image — swap src with actual brand photo */}
      <Image
        src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1920&q=85&auto=format&fit=crop"
        alt="Sizzling BBQ skewers on a charcoal grill"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ember via-ember/65 to-ember/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ember/50 via-transparent to-ember/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="font-body text-amber text-xs tracking-[0.4em] uppercase mb-6"
          style={{ animation: "fadeUp 0.9s 0.2s ease both" }}
        >
          Orange County&apos;s Favorite Food Truck
        </p>

        <h1
          className="font-display italic text-warm-white leading-[0.9] mb-6"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            animation: "fadeUp 0.9s 0.4s ease both",
          }}
        >
          Straight From<br />
          <span className="text-amber">Mama&apos;s</span> Kitchen
        </h1>

        <p
          className="font-body text-muted italic text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed"
          style={{ animation: "fadeUp 0.9s 0.6s ease both" }}
        >
          One skewer. One family. One flavor you&apos;ll never forget.
        </p>

        <button
          onClick={scrollToSchedule}
          className="font-body font-semibold text-xs tracking-[0.3em] uppercase bg-amber text-ember px-12 py-4 hover:bg-gold transition-colors duration-300"
          style={{ animation: "fadeUp 0.9s 0.8s ease both" }}
        >
          Find Our Truck ↓
        </button>
      </div>

      {/* Bottom bleed into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ember to-transparent" />
    </section>
  );
}
