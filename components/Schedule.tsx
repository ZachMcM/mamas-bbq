const events = [
  {
    name: "Irvine Farmers Market",
    location: "Heritage Park, Irvine",
    date: "Sat, Apr 12, 2026",
    time: "8AM – 1PM",
  },
  {
    name: "Anaheim Night Market",
    location: "Center Street Promenade, Anaheim",
    date: "Fri, Apr 18, 2026",
    time: "5PM – 10PM",
  },
  {
    name: "Newport Beach Food Fest",
    location: "Fashion Island, Newport Beach",
    date: "Sat, Apr 26, 2026",
    time: "11AM – 8PM",
  },
  {
    name: "Huntington Beach Pier Market",
    location: "Pacific City, Huntington Beach",
    date: "Sun, May 4, 2026",
    time: "9AM – 3PM",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="bg-smoke py-24 lg:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-body text-amber text-xs tracking-[0.4em] uppercase text-center mb-4">
          Where To Find Us
        </p>
        <h2 className="font-display italic text-warm-white text-center mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
          Find Our Truck
        </h2>
        <p className="font-body text-muted text-center mb-16 text-sm">
          We&apos;re rolling through Orange County. Come say hi.
        </p>

        <div className="space-y-3">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-char border border-ash p-6 lg:p-7 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-center group hover:border-amber transition-colors duration-300"
            >
              <div>
                <h3 className="font-display italic text-warm-white text-2xl group-hover:text-amber transition-colors duration-300 mb-1.5">
                  {event.name}
                </h3>
                <p className="font-body text-sm text-muted flex items-center gap-2">
                  <span aria-hidden>📍</span>
                  {event.location}
                </p>
              </div>
              <div className="sm:text-right font-body">
                <p className="text-cream text-sm font-medium">{event.date}</p>
                <p className="text-amber text-sm mt-0.5">{event.time}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-muted text-xs text-center mt-10 leading-relaxed">
          Schedule updates regularly.{" "}
          <span className="text-amber">Follow @mamasbbq_oc</span> for last-minute pop-ups.
        </p>
      </div>
    </section>
  );
}
