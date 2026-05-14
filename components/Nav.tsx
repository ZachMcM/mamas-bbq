"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { id: "about", label: "Our Story" },
  { id: "schedule", label: "Find Us" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-bg/95 backdrop-blur-sm border-b border-mango/30 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/mamaslogo.png"
              alt="Mama's BBQ"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-body text-xs tracking-[0.25em] uppercase text-ink-muted">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-ink transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:block bg-orange text-white font-body font-semibold text-xs tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-orange-hover transition-colors"
          >
            Book Us
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-ink-strong"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-cream-bg flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Image
          src="/mamaslogo.png"
          alt="Mama's BBQ"
          width={160}
          height={64}
          className="h-16 w-auto mb-2"
        />
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => { scrollTo(id); setMenuOpen(false); }}
            className="font-display text-3xl italic text-ink-muted hover:text-orange transition-colors"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
          className="mt-4 bg-orange text-white font-body font-semibold text-xs tracking-[0.2em] uppercase px-10 py-3 hover:bg-orange-hover transition-colors"
        >
          Book Us
        </button>
      </div>
    </>
  );
}
