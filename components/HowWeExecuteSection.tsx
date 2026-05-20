"use client";

const executionPrinciples = [
  {
    letter: "S",
    title: "Structure",
    description:
      "Organized workflows and scalable processes for consistency and continuity.",
  },
  {
    letter: "T",
    title: "Technology",
    description:
      "AI, automation, and software-driven workflows that improve efficiency.",
  },
  {
    letter: "A",
    title: "Accountability",
    description:
      "Clear ownership, disciplined execution, and strong communication.",
  },
  {
    letter: "F",
    title: "Flexibility",
    description:
      "The ability to adapt to changing priorities and business needs.",
  },
  {
    letter: "F",
    title: "Foresight",
    description:
      "Anticipating future operational needs and growth opportunities.",
  },
];

export default function HowWeExecuteSection() {
  return (
    <section
      className="
        pt-10
        px-6 md:px-10
        py-20
        bg-gradient-to-b
        from-[#06172d]
        via-[#0a1b33]
        to-[#103663]
        mt-20
      "
    >
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light my-6 text-white tracking-wide">
          STAFF — How We Execute
        </h2>

        <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full" />

        <p className="mt-8 text-lg md:text-xl font-medium text-[#7fc4ff] tracking-wide">
          Structure. Technology. Accountability. Flexibility. Foresight.
        </p>

        <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed">
          At STAFF United, we believe execution is just as important as the
          people behind our brand and the services we provide.
        </p>

        <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
          This is the operational philosophy behind how we deliver support
          consistently, efficiently, and at scale through our structured{" "}
          <span className="text-[#7fc4ff] font-semibold">
            “5-Core Support”™ Ecosystem
          </span>
          .
        </p>
      </div>

      {/* Cards */}
      <div className="pt-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          {executionPrinciples.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-white/8
                backdrop-blur-xl
                border
                border-white/15
                rounded-[28px]
                px-6
                py-8
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/12
                cursor-pointer
                hover:border-[#7fc4ff]/35
                hover:shadow-[0_30px_80px_rgba(79,141,201,0.22)]
                flex
                flex-col
                text-center
                min-h-[320px]
              "
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#7fc4ff]/60" />

              {/* Letter Circle */}
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border border-[#7fc4ff]/25 scale-125" />
                <div className="absolute inset-0 rounded-full bg-[#4f8fcb]/20 blur-xl scale-150" />

                <div
                  className="
                    relative
                    w-24
                    h-24
                    rounded-full
                    bg-gradient-to-br
                    from-[#67b4ff]
                    to-[#2f6ea9]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-5xl
                    font-semibold
                    shadow-[0_20px_50px_rgba(79,143,203,0.35)]
                    ring-1
                    ring-white/20
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                >
                  {item.letter}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-[#7fc4ff] mx-auto mb-6 rounded-full" />

              {/* Description */}
              <p className="text-base leading-relaxed text-white/75 flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="max-w-4xl mx-auto pt-10 text-center">
        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
          Together, these five execution principles shape how STAFF United
          delivers operational support with structure, accountability, and
          scalability.
        </p>
      </div>
    </section>
  );
}
