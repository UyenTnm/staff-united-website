export default function TheStandard() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* INTRO */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-tight">
            The Standard
          </h1>

          <p className="text-lg text-[#0b1b33]/80 leading-relaxed max-w-3xl mx-auto">
            STAFF is not just a name. It is the standard we operate under—shared
            across the team and enforced through process.
          </p>

          <p className="text-base md:text-lg font-semibold text-[#4f8fcb] tracking-wide pt-2">
            One standard. One team.
          </p>
        </div>

        {/* STAFF VALUES */}
        <section className="space-y-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
              STAFF
            </h2>
          </div>

          {/* STAFF GRID */}
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                letter: "S",
                title: "Strong",
                desc: "Responsibility for outcomes",
              },
              { letter: "T", title: "Talented", desc: "Skill and quality" },
              { letter: "A", title: "Ambitious", desc: "Growth expected" },
              {
                letter: "F",
                title: "Focused",
                desc: "Discipline and consistency",
              },
              { letter: "F", title: "Female", desc: "Women-powered execution" },
            ].map((item, i) => (
              <div
                key={i}
                className="
          flex items-stretch
          bg-white
          border border-[#0b1b33]/10
          rounded-xl
          transition-all duration-300
          hover:shadow-sm
          hover:border-[#4f8fcb]/40
        "
              >
                {/* Letter */}
                <div className="flex items-center justify-center w-14 bg-[#4f8fcb] text-white font-semibold text-lg rounded-l-xl">
                  {item.letter}
                </div>

                {/* Content */}
                <div className="px-4 py-4 flex flex-col justify-center">
                  <p className="text-[#0b1b33] font-semibold text-base">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#0b1b33]/70 mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UNITED */}
        <section className="pt-10 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
              UNITED
            </h2>
          </div>

          <p className="text-center text-[#0b1b33]/80 leading-relaxed max-w-3xl mx-auto">
            Shared standards. Shared responsibility. Collective delivery.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">Shared standards</p>
              <p className="text-sm text-[#0b1b33]/70 leading-relaxed mt-1">
                Process defines how we work. Every team member operates under
                the same expectations.
              </p>
            </div>

            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">
                Shared responsibility
              </p>
              <p className="text-sm text-[#0b1b33]/70 leading-relaxed mt-1">
                Accountability is collective. Delivery is not isolated to
                individuals.
              </p>
            </div>

            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">
                Collective delivery
              </p>
              <p className="text-sm text-[#0b1b33]/70 leading-relaxed mt-1">
                We operate as one unit—aligned, coordinated, and consistent.
              </p>
            </div>
          </div>
        </section>

        {/* IN PRACTICE */}
        <section className="pt-12 space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
              IN PRACTICE
            </h2>
          </div>

          {/* Structured grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 pt-4">
            {[
              "Clear scope",
              "Internal review",
              "Documented workflows",
              "Trackable communication",
              "Quality checks",
            ].map((item, i) => (
              <div
                key={i}
                className="
          flex items-start gap-4
          border border-[#0b1b33]/10
          rounded-lg
          px-5 py-4
          bg-white
          transition-all duration-300
          hover:border-[#4f8fcb]/40
          hover:shadow-sm
        "
              >
                <div className="w-2 h-2 bg-[#4f8fcb] mt-2 rounded-full" />
                <p className="text-[#0b1b33]/80 leading-relaxed text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="text-center pt-6">
            <p className="text-lg font-medium text-[#0b1b33]">
              Standards protect our clients—and our people.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
