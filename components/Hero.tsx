"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-cream-bg overflow-hidden min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* Text content — second on mobile, first on desktop */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pb-16 pt-8 lg:py-20">
          {/* <p
            className="font-body text-orange text-xs tracking-[0.4em] uppercase mb-6"
            style={{ animation: "fadeUp 0.9s 0.3s ease both" }}
          >
            Orange County&apos;s Favorite Stand
          </p> */}

          <h1
            className="font-display italic text-ink-strong leading-[0.9] mb-6"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              animation: "fadeUp 0.9s 0.5s ease both",
            }}
          >
            Mama&apos;s BBQ<br />
            <span className="text-orange">Pork Skewers</span>
          </h1>

          <p
            className="font-body text-ink-muted text-lg mb-10 leading-relaxed max-w-sm"
            style={{ animation: "fadeUp 0.9s 0.7s ease both" }}
          >
            30 hours of love. One unforgettable bite.
          </p>

          <div style={{ animation: "fadeUp 0.9s 0.9s ease both" }}>
            <button
              onClick={scrollToContact}
              className="font-body font-semibold text-xs tracking-[0.3em] uppercase bg-orange text-white px-12 py-4 hover:bg-orange-hover transition-colors duration-300"
            >
              Book Us
            </button>
          </div>
        </div>

        {/* Pork skewer image — appears FIRST on mobile (order-1) */}
        <div
          className="order-1 lg:order-2 relative h-72 sm:h-96 lg:h-auto"
          style={{ animation: "fadeIn 1s 0.2s ease both" }}
        >
          <Image
            src="/hero.jpeg"
            alt="Mama's BBQ pork skewers"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Logo placeholder — bottom left */}
      <div
        className="absolute bottom-8 left-8 z-10"
        style={{ animation: "fadeIn 1s 1.1s ease both" }}
      >
        <Image
          src="/logo-placeholder.svg"
          alt="Mama's BBQ logo"
          width={72}
          height={72}
        />
      </div>
    </section>
  );
}
