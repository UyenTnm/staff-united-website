export default function TheStandard() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* INTRO */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-tight">
            The Standard
          </h1>
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          <p className="text-lg text-[#0b1b33]/80 leading-relaxed max-w-3xl mx-auto">
            Staff Is Not Just a Name. It Is the Standard We Operate Under—Shared
            Across the Team and Enforced Through Process.
          </p>

          <p className="text-base md:text-lg font-semibold text-[#4f8fcb] tracking-wide pt-2">
            One Standard. One Team.
          </p>
        </div>

        {/* STAFF VALUES */}
        {/* <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
              STAFF
            </h2>
          </div>
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

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
                <div className="flex items-center justify-center w-14 bg-[#4f8fcb] text-white font-semibold text-lg rounded-l-xl">
                  {item.letter}
                </div>

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
        </section> */}

        {/* STAFF VALUES */}
        <section className="space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
              STAFF
            </h2>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-3 rounded-full"></div>
          </div>

          {/* STAFF LIST */}
          <div className="max-w-xl mx-auto space-y-3">
            {[
              {
                letter: "S",
                title: "Strong",
                desc: "Responsibility for Outcomes",
              },
              {
                letter: "T",
                title: "Talented",
                desc: "Skill and Quality",
              },
              {
                letter: "A",
                title: "Ambitious",
                desc: "Growth Expected",
              },
              {
                letter: "F",
                title: "Focused",
                desc: "Discipline and Consistency",
              },
              {
                letter: "F",
                title: "Female",
                desc: "Women-Powered Execution",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
          flex items-stretch
          bg-white
          border border-[#0b1b33]/10
          rounded-xl
          overflow-hidden
          transition-all duration-300
          hover:shadow-sm
          hover:border-[#4f8fcb]/40
        "
              >
                {/* Letter (fixed width for consistency) */}
                <div className="flex items-center justify-center w-14 bg-[#4f8fcb] text-white font-semibold text-lg">
                  {item.letter}
                </div>

                {/* Content */}
                <div className="px-5 py-4 flex flex-col justify-center">
                  <p className="text-[#0b1b33] font-semibold text-base">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#0b1b33]/70 mt-1">{item.desc}</p>
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
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">Shared Standards</p>
              <p className="text-sm text-[#0b1b33]/70 leading-relaxed mt-1">
                Process defines how we work. Every team member operates under
                the same expectations.
              </p>
            </div>

            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">
                Shared Responsibility
              </p>
              <p className="text-sm text-[#0b1b33]/70 leading-relaxed mt-1">
                Accountability is collective. Delivery is not isolated to
                individuals.
              </p>
            </div>

            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">
                Collective Delivery
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
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          {/* Structured grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 pt-4">
            {[
              "Clear Scope",
              "Defined Ownership",
              "Documented Workflows",
              "Trackable Communication",
              "Internal Review",
              "Quality Checks",
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
            <p className="text-lg text-[#4f8fcb] font-bold">
              Standards Protect Our Clients and Our People.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
