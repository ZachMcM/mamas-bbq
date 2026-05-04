"use client";
import { useEffect, useState } from "react";

const QUICK_LINKS = [
  { id: "about", label: "Our Story" },
  { id: "schedule", label: "Find Us" },
  { id: "contact", label: "Book Us" },
];

const LOCATIONS = [
  "Irvine Farmers Market",
  "Anaheim Night Market",
  "Newport Beach Food Fest",
  "Huntington Beach Pier Market",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <footer className="bg-ink-strong border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display italic text-white text-3xl mb-2">
              Mama&apos;s <span className="text-orange">BBQ</span>
            </p>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              An Orange County family tradition.<br />
              Filipino BBQ pork skewers — made with love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-orange mb-5">
              Navigation
            </p>
            <nav className="space-y-2.5">
              {QUICK_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Locations */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-orange mb-5">
              Locations
            </p>
            <ul className="space-y-2">
              {LOCATIONS.map((loc) => (
                <li key={loc} className="font-body text-sm text-white/60">
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-xs">
            © 2026 Mama&apos;s BBQ. All rights reserved.
          </p>
          <p className="font-body text-white/40 text-xs">
            Made with love in Orange County, CA
          </p>
        </div>
      </footer>

      {/* Back-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-orange text-white flex items-center justify-center text-lg font-semibold hover:bg-orange-hover transition-all duration-300 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </>
  );
}
