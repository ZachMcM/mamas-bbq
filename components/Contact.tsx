"use client";
import { useState } from "react";

const inputBase =
  "w-full bg-smoke border border-ash text-cream font-body text-sm px-4 py-3 placeholder:text-muted focus:outline-none focus:border-amber transition-colors duration-200";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-ember py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-amber text-xs tracking-[0.4em] uppercase text-center mb-4">
          Catering &amp; Private Events
        </p>
        <h2
          className="font-display italic text-warm-white text-center mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Book Us
        </h2>
        <p className="font-body text-muted text-center mb-16 max-w-xl mx-auto text-sm leading-relaxed">
          Planning a party, corporate event, or wedding? We&apos;d love to bring Mama&apos;s BBQ
          to you. Drop us a line — we&apos;ll get back to you within 24 hours.
        </p>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
          {/* Form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 border border-ash text-center">
              <p className="font-display italic text-amber text-4xl mb-3">Thank you!</p>
              <p className="font-body text-muted text-sm">
                We&apos;ve received your inquiry and will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputBase}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className={inputBase}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`${inputBase} [color-scheme:dark]`}
                  aria-label="Event date"
                />
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className={`${inputBase} bg-smoke`}
                  aria-label="Event type"
                >
                  <option value="" disabled>
                    Event Type
                  </option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your event — estimated guest count, location, and any other details..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={inputBase}
              />
              {error && (
                <p className="font-body text-red-accent text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber text-ember font-body font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Inquiry"}
              </button>
            </form>
          )}

          {/* Contact details */}
          <div className="space-y-10">
            {[
              { label: "Email", value: "hello@mamasbbq.com" },
              { label: "Phone", value: "(714) 555-0182" },
              { label: "Instagram & TikTok", value: "@mamasbbq_oc" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-amber mb-2">
                  {label}
                </p>
                <p className="font-display italic text-cream text-2xl">{value}</p>
              </div>
            ))}

            <div className="border-t border-ash pt-8">
              <p className="font-body text-muted text-sm leading-relaxed">
                We typically book catering 4–6 weeks in advance. The more notice you can give
                us, the better — Mama likes to plan ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
