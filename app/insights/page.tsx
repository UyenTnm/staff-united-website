import Link from "next/link";

export default function InsightsPage() {
  const insights = [
    {
      title: "Execution Without Drift",
      description:
        "Why standards matter more than speed—and how disciplined execution prevents long-term operational erosion.",
    },
    {
      title: "Scaling Support the Right Way",
      description:
        "How structured workflows enable businesses to scale without sacrificing clarity, accountability, or quality.",
    },
    {
      title: "Why Review Processes Protect Growth",
      description:
        "Internal review systems are not friction—they are protection against inconsistency and reputation risk.",
    },
    {
      title: "Women-Powered Execution Models",
      description:
        "How disciplined, women-led distributed teams create reliable, long-term operational capacity.",
    },
  ];

  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* INTRO */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33]">
            Insights
          </h1>
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          <p className="text-lg text-[#0b1b33]/80 leading-relaxed max-w-3xl mx-auto">
            Practical thinking on execution, standards,
            <br className="hidden md:block" />
            and building reliable support systems for modern businesses.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {insights.map((item, i) => (
            <div
              key={i}
              className="
                group
                border border-[#0b1b33]/10
                rounded-xl
                p-8
                transition-all duration-300
                hover:border-[#4f8fcb]/40
                hover:shadow-md
                hover:-translate-y-1
              "
            >
              <h3 className="text-xl font-semibold text-[#0b1b33] group-hover:text-[#4f8fcb] transition-colors">
                {item.title}
              </h3>

              <p className="text-lg text-[#0b1b33]/75 leading-relaxed mt-4">
                {item.description}
              </p>

              <div className="mt-6">
                <span className="text-base font-medium text-[#4f8fcb] group-hover:underline">
                  Read →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* SUBTLE CTA */}
        <div className="text-center pt-6">
          <p className="text-xl text-[#0b1b33]/60">
            More insights coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
