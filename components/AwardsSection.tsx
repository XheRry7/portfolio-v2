const awards = [
  {
    title: "Excellence Award 2025",
    org: "Driven Properties",
    detail: "Company-wide recognition for outstanding contribution.",
  },
  {
    title: "Best Performer — September 2025",
    org: "Driven Properties",
    detail: "Growth and Innovation Technology Department.",
  },
  {
    title: "Best Performer — Q1 2023",
    org: "Cloudtek",
    detail: "Top performance for the first quarter of the year.",
  },
];

export function AwardsSection() {
  return (
    <section
      id="awards"
      className="px-4 py-16 lg:py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-800 md:text-5xl">
          Awards & recognition
        </h2>
        <p className="mb-10 text-center text-base text-gray-600">
          Highlights from recent performance cycles.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {awards.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/80 p-6 shadow-md"
            >
              <div className="mb-3 text-3xl" aria-hidden>
                🏆
              </div>
              <h3 className="text-lg font-bold text-gray-900">{a.title}</h3>
              <p className="mt-1 text-sm font-semibold text-indigo-700">
                {a.org}
              </p>
              <p className="mt-2 text-sm text-gray-600">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
