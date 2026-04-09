"use client";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    const el = document.querySelector(".fade-up");
    if (el) el.classList.add("active");
  }, []);

  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-10 ">
        {/* INTRO HERO */}
        <section
          className="
  relative pt-[90px]
  w-screen
h-[70vh] md:h-[75vh]
  left-1/2
  -translate-x-1/2
  overflow-hidden -mt-[80px]
"
        >
          <img
            src="/team/hero-banner-team.webp"
            alt="About STAFF United"
            className="absolute inset-0 w-full h-full object-cover "
          />

          <div className="absolute inset-0 bg-[#0a1b33]/60"></div>

          <div className="relative z-10 h-full flex items-center justify-center text-center px-6 ">
            <h1 className="text-4xl md:text-6xl text-white font-light fade-up">
              About Us
            </h1>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-5 md:space-y-6 fade-up active order-2 md:order-1">
              {/* SMALL LABEL */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 md:w-10 h-[2px] bg-[#4f8dc9]"></div>

                <p
                  className="
      text-xs sm:text-sm md:text-base
      text-[#4f8dc9]
      font-medium
      tracking-wide
    "
                >
                  Our Story
                </p>
              </div>

              {/* TITLE */}
              <h2
                className="
      text-xl sm:text-2xl md:text-3xl lg:text-4xl
      font-medium
      text-[#103663]
      leading-snug md:leading-tight
    "
              >
                Built by women who set a new standard
              </h2>

              {/* TEXT */}
              <div
                className="
      space-y-3 md:space-y-4
      text-sm sm:text-base md:text-base
      text-[#0b1b33]/80
      leading-relaxed
    "
              >
                <p>
                  STAFF United was built in Vietnam by women who understood what
                  it means to work hard without always being seen.
                </p>

                <p>
                  We saw talented women carrying responsibility while balancing
                  work, family, and expectation — often without access to stable
                  opportunities, fair systems, or long-term growth.
                </p>

                <p>
                  This company was created to change that. Not through charity.
                  Not through shortcuts. But through real work, clear standards,
                  and shared accountability.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="slide-right active order-1 md:order-2">
              <div className="w-full md:max-w-[520px] ml-auto h-[420px] md:h-[520px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/about-us/women-team-working.avif"
                  alt="Women working together"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

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
                <div className="px-5 py-4 flex items-center">
                  <p className="text-[#0b1b33] text-base">
                    <span className="font-semibold">{item.title}</span>
                    <span className="mx-1">-</span>
                    <span className="text-[#0b1b33]/70">{item.desc}</span>
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
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">Shared Standards</p>
              <p className="text-base text-[#0b1b33]/70 leading-relaxed mt-1">
                Process defines how we work. Every team member operates under
                the same expectations.
              </p>
            </div>

            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">
                Shared Responsibility
              </p>
              <p className="text-base text-[#0b1b33]/70 leading-relaxed mt-1">
                Accountability is collective. Delivery is not isolated to
                individuals.
              </p>
            </div>

            <div className="border-l-2 border-[#4f8fcb] pl-4">
              <p className="font-semibold text-[#0b1b33]">
                Collective Delivery
              </p>
              <p className="text-base text-[#0b1b33]/70 leading-relaxed mt-1">
                We operate as one unit—aligned, coordinated, and consistent.
              </p>
            </div>
          </div>
        </section>

        {/* IN PRACTICE */}
        {/* <section className="pt-12 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
                IN PRACTICE
              </h2>
            </div>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

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

            <div className="text-center pt-6">
              <p className="text-lg text-[#4f8fcb] font-bold">
                Standards Protect Our Clients and Our People.
              </p>
            </div>
          </section> */}
      </section>
    </main>
  );
}
