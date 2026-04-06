"use client";
import { useEffect, useState } from "react";

const QUICK_LINKS = [
  { id: "about", label: "Our Story" },
  { id: "menu", label: "Menu" },
  { id: "schedule", label: "Schedule" },
  { id: "contact", label: "Book Us" },
  { id: "faq", label: "FAQ" },
  { id: "social", label: "Social" },
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
      <footer className="bg-char border-t border-ash py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display italic text-cream text-3xl mb-2">
              Mama&apos;s <span className="text-amber">BBQ</span>
            </p>
            <p className="font-body text-muted text-sm leading-relaxed">
              An Orange County family tradition.<br />
              Filipino BBQ pork skewers — made with love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-5">
              Navigation
            </p>
            <nav className="space-y-2.5">
              {QUICK_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block font-body text-sm text-muted hover:text-cream transition-colors duration-200"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact summary */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-5">
              Get In Touch
            </p>
            <div className="space-y-3 font-body text-sm text-muted">
              <p>hello@mamasbbq.com</p>
              <p>(714) 555-0182</p>
              <p>
                Instagram &amp; TikTok:{" "}
                <span className="text-amber">@mamasbbq_oc</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-ash flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-muted text-xs">
            © 2026 Mama&apos;s BBQ. All rights reserved.
          </p>
          <p className="font-body text-muted text-xs">
            Made with love in Orange County, CA 🍊
          </p>
        </div>
      </footer>

      {/* Back-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-amber text-ember flex items-center justify-center text-lg font-semibold hover:bg-gold transition-all duration-300 ${
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
