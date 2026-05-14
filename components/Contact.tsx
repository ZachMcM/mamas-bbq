"use client";
import { useState } from "react";

const inputBase =
  "w-full bg-white border border-mango/40 text-ink font-body text-sm px-4 py-3 placeholder:text-ink-muted focus:outline-none focus:border-orange transition-colors duration-200";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to an email service or API route
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-cream-card py-24 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-orange text-xs tracking-[0.4em] uppercase text-center mb-4">
          Catering &amp; Private Events
        </p>
        <h2
          className="font-display italic text-ink-strong text-center mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          Book Us
        </h2>
        <p className="font-body text-ink-muted text-center mb-16 max-w-xl mx-auto text-sm leading-relaxed">
          Planning a party, corporate event, or wedding? We&apos;d love to bring Mama&apos;s BBQ
          to you. Drop us a line — we&apos;ll get back to you within 24 hours.
        </p>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
          {/* Form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 border border-mango/40 bg-white text-center">
              <p className="font-display italic text-orange text-4xl mb-3">Thank you!</p>
              <p className="font-body text-ink-muted text-sm">
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
                  className={`${inputBase} scheme-light`}
                  aria-label="Event date"
                />
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className={`${inputBase} bg-white`}
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
              <button
                type="submit"
                className="w-full bg-orange text-white font-body font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-orange-hover transition-colors duration-300"
              >
                Send Inquiry
              </button>
            </form>
          )}

          {/* Contact details */}
          <div className="space-y-10">
            {[
              { label: "Email", value: "nickhito05@gmail.com" },
              { label: "Phone", value: "(562) 217-1245" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-orange mb-2">
                  {label}
                </p>
                <p className="font-display italic text-ink-strong text-2xl">{value}</p>
              </div>
            ))}

            <div className="border-t border-mango/40 pt-8">
              <p className="font-body text-ink-muted text-sm leading-relaxed">
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
