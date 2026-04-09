import AnimatedSection from "@/components/AnimatedSection";

export default function Services() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      {/* <AnimatedSection>
        <section className="bg-white pt-16 ">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl py-10 font-semibold text-[#0b1b33] leading-[1.1] tracking-tight">
              Two Service Lanes. One Execution Model.
            </h1>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

            <p className="text-lg text-[#0b1b33]/75">
              Delivered Through Dedicated or Flexible Support Under One Shared
              Standard.
            </p>

            <p className="text-lg md:text-xl font-medium leading-snug">
              <span className="text-[#4f8fcb] font-bold">Dedicated Teams</span>{" "}
              <span className="text-[#0b1b33]/60">
                Without the Overhead of Local Hiring.
              </span>
            </p>
          </div>
        </section>
      </AnimatedSection> */}

      {/* CARDS — */}
      {/* <section className="bg-white py-12">
        <div className="max-w-[1500px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-14 ">
            <AnimatedSection>
              <div
                className="group relative flex flex-col bg-[#eef2f7] h-full border border-[#4f8fcb]/40 rounded-xl p-6 xl:p-7 transition-all duration-500 ease-out transform-gpu hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-[#4f8fcb]"
                style={{ perspective: "1000px" }}
              >
                <div className="flex-grow">
                  <div className="flex justify-center mb-5">
                    <img
                      src="/images/creative.webp"
                      alt="Creative"
                      className="h-36 object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                    />
                  </div>

                  <div className="text-center mb-5 space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0b1b33]">
                      Creative & Content Production
                    </h3>

                    <p className="text-base text-[#0b1b33]/70 leading-relaxed">
                      Publish-ready creative output—delivered through structured
                      workflow and internal review.
                    </p>
                  </div>

                  <div className="space-y-3 mb-5">
                    <h4 className="text-base font-semibold text-[#0b1b33]">
                      What we support
                    </h4>

                    <ul className="space-y-2 text-base text-[#0b1b33]/80">
                      {[
                        "Content editing & formatting (blogs, newsletters, long-form)",
                        "Social content production & repurposing",
                        "Design production support (templates, assets, deck formatting)",
                        "Video support (captions, subtitles, basic edits)",
                        "Publishing support (scheduling, uploads, QA checks)",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-[#4f8fcb] mt-[2px]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-base font-semibold text-[#0b1b33]">
                      How we deliver
                    </h4>

                    <ul className="space-y-2 text-base text-[#0b1b33]/80">
                      {[
                        "Clear scope + checklist-based execution",
                        "Internal review before delivery",
                        "Consistent quality and on-time output",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-[#4f8fcb] mt-[2px]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="/request-support"
                  className="mt-8 inline-flex justify-center items-center h-11 px-6 bg-[#0b1b33] text-white text-base font-medium rounded hover:bg-[#0b1b33]/90 transition"
                >
                  Request Creative Support
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div
                className="group relative flex flex-col h-full bg-[#eef2f7] border border-[#4f8fcb]/40 rounded-xl p-6 xl:p-7 transition-all duration-500 ease-out transform-gpu hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-[#4f8fcb]"
                style={{ perspective: "1000px" }}
              >
                <div className="flex-grow">
                  <div className="flex justify-center mb-5">
                    <img
                      src="/images/admin.webp"
                      alt="Admin"
                      className="h-36 object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                    />
                  </div>

                  <div className="text-center mb-5 space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0b1b33]">
                      Administration & Business Support
                    </h3>

                    <p className="text-base text-[#0b1b33]/70 leading-relaxed">
                      Reliable operational support—handled with clear process
                      and accountability.
                    </p>
                  </div>

                  <div className="space-y-3 mb-5">
                    <h4 className="text-base font-semibold text-[#0b1b33]">
                      What we support
                    </h4>

                    <ul className="space-y-2 text-base text-[#0b1b33]/80">
                      {[
                        "Inbox/calendar support & follow-ups",
                        "Meeting notes, action items, and tracking",
                        "CRM updates & data cleanup",
                        "Client/admin coordination & documentation",
                        "Research, reporting, and lightweight ops tasks",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-[#4f8fcb] mt-[2px]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-base font-semibold text-[#0b1b33]">
                      How we deliver
                    </h4>

                    <ul className="space-y-2 text-base text-[#0b1b33]/80">
                      {[
                        "Standard operating procedures (SOPs)",
                        "Structured workflows + handoff clarity",
                        "Ownership for completion—not just task handling",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="text-[#4f8fcb] mt-[2px]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="/request-support"
                  className="mt-8 inline-flex justify-center items-center h-11 px-6 bg-[#0b1b33] text-white text-base font-medium rounded hover:bg-[#0b1b33]/90 transition"
                >
                  Request Business Support
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      <section
        className="pt-28 md:pt-32 lg:pt-36
  pb-20 md:pb-24
  relative overflow-hidden"
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#4f8dc9_0%,transparent_70%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* TITLE */}
          <div className="text-center mb-16 fade-up active">
            <h2 className="text-3xl md:text-5xl text-[#4f8dc9] font-light">
              Discover <br /> Our Services
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD */}
            <div
              className="
        group slide-left active
        relative
        rounded-2xl
        p-10

        flex flex-col items-center text-center

        bg-white/5
        backdrop-blur-2xl
        border border-white/10

        shadow-[0_10px_40px_rgba(0,0,0,0.3)]
        transition-all duration-500

        hover:-translate-y-2
        hover:bg-white/10
        hover:shadow-[0_20px_80px_rgba(79,141,201,0.25)]
      "
            >
              {/* LIGHT EFFECT */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-40 pointer-events-none"></div>

              {/* IMAGE */}
              <img
                src="/services/icon-cal.png"
                alt="STAFF UNITED GROUP"
                className="
           w-24 h-24 md:w-28 md:h-28
  mb-6
  object-contain
  transition duration-500
  group-hover:scale-110
          "
              />

              {/* TITLE */}
              <h3 className="text-lg md:text-xl text-[#4f8dc9] font-medium mb-3">
                Finance & Bookkeeping Support
              </h3>

              {/* DESC */}
              <p
                className="text-[#0a1b33] flex flex-col items-center text-center
"
              >
                Reliable financial operations support to keep your books
                accurate, organized, and up to date.
              </p>

              {/* PLUS */}
              <div
                className="
          mt-6
          text-[#4f8dc9]
          text-xl
          opacity-60
          transition
          group-hover:opacity-100
          group-hover:translate-x-1 group-hover:-translate-y-1
        "
              >
                +
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
        group slide-right active
        relative
        rounded-2xl
        p-10

        flex flex-col items-center text-center

        bg-white/5
        backdrop-blur-2xl
        border border-white/10

        shadow-[0_10px_40px_rgba(0,0,0,0.3)]
        transition-all duration-500

        hover:-translate-y-2
        hover:bg-white/10
        hover:shadow-[0_20px_80px_rgba(79,141,201,0.25)]
      "
            >
              {/* LIGHT EFFECT */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-40 pointer-events-none"></div>

              {/* IMAGE */}
              <img
                src="/services/icon-cal.png"
                alt="STAFF UNITED GROUP"
                className="
             w-24 h-24 md:w-28 md:h-28
  mb-6
  object-contain
  transition duration-500
  group-hover:scale-110
          "
              />

              {/* TITLE */}
              <h3 className="text-lg md:text-xl text-[#4f8dc9] font-medium mb-3">
                Administration & Business Support
              </h3>

              {/* DESC */}
              <p className="text-[#0a1b33] flex flex-col items-center text-center">
                Structured support systems that help businesses operate
                efficiently and scale with clarity.
              </p>

              {/* PLUS */}
              <div
                className="
          mt-6
          text-[#4f8dc9]
          text-xl
          opacity-60
          transition
          group-hover:opacity-100
          group-hover:translate-x-1 group-hover:-translate-y-1
        "
              >
                +
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
