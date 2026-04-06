"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "about", label: "Our Story" },
  { id: "menu", label: "Menu" },
  { id: "schedule", label: "Schedule" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ember/95 backdrop-blur-sm border-b border-ash"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl italic text-cream hover:text-amber transition-colors"
          >
            Mama&apos;s <span className="not-italic text-amber">BBQ</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-body text-xs tracking-[0.25em] uppercase text-muted">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-cream transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:block bg-amber text-ember font-body font-semibold text-xs tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-gold transition-colors"
          >
            Book Us
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-cream"
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
        className={`md:hidden fixed inset-0 z-40 bg-ember flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="font-display text-4xl italic text-cream mb-2">
          Mama&apos;s <span className="not-italic text-amber">BBQ</span>
        </p>
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => { scrollTo(id); setMenuOpen(false); }}
            className="font-display text-3xl italic text-muted hover:text-amber transition-colors"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
          className="mt-4 bg-amber text-ember font-body font-semibold text-xs tracking-[0.2em] uppercase px-10 py-3 hover:bg-gold transition-colors"
        >
          Book Us
        </button>
      </div>
    </>
  );
}
