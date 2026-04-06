"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Do you do private catering?",
    a: "Absolutely. We love bringing Mama's BBQ to your event. Use the booking form above — we do birthdays, corporate events, weddings, neighborhood block parties, and everything in between.",
  },
  {
    q: "Do you sell anything besides pork skewers?",
    a: "Just the one. And we mean that as a promise: we've never needed to. One item, made perfectly, every single time.",
  },
  {
    q: "How can I track the truck?",
    a: "Follow us on Instagram and TikTok @mamasbbq_oc for real-time updates, pop-up announcements, and behind-the-scenes content. Our schedule page above is updated regularly too.",
  },
  {
    q: "What makes it Filipino-style?",
    a: "Our marinade is built from generations of Filipino flavor tradition: banana ketchup, soy sauce, calamansi, garlic, brown sugar, and a few secrets that belong to Chef Jo alone. The result is sweet, savory, tangy, and absolutely addictive.",
  },
  {
    q: "Is the pork halal, kosher, or available vegetarian?",
    a: "Our skewers are pork-based and not certified halal or kosher. We don't currently offer vegetarian options, but we love hearing from our community — never say never.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-smoke py-24 lg:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-body text-amber text-xs tracking-[0.4em] uppercase text-center mb-4">
          Questions
        </p>
        <h2
          className="font-display italic text-warm-white text-center mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          FAQ
        </h2>

        <div className="space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-ash overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left bg-char hover:bg-ash/40 transition-colors duration-200 group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display italic text-xl text-cream group-hover:text-amber transition-colors duration-200 pr-6">
                    {faq.q}
                  </span>
                  <span
                    className={`text-amber text-2xl leading-none flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <div className="bg-char/50 px-6 pb-6 pt-2">
                    <p className="font-body text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
