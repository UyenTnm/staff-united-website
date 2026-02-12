export default function Services() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <section className="bg-white pt-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-[1.1] tracking-tight">
            Two service lanes. One execution model.
          </h1>
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          <p className="text-lg text-[#0b1b33]/75">
            Delivered through dedicated or flexible support under one shared
            standard.
          </p>

          <p className="text-lg md:text-xl font-medium leading-snug">
            <span className="text-[#4f8fcb] font-bold">Dedicated teams</span>{" "}
            <span className="text-[#0b1b33]/60">
              without the overhead of local hiring.
            </span>
          </p>
        </div>
      </section>

      {/* CARDS — GIỐNG HOME */}
      <section className="bg-white py-12">
        <div className="max-w-[1500px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-14">
            {/* CARD 1 */}
            <div className="flex flex-col bg-[#eef2f7] border border-[#4f8fcb]/40 rounded-xl p-6 xl:p-7 transition-all duration-300 hover:border-[#4f8fcb] hover:shadow-md">
              <div className="flex-grow">
                <div className="flex justify-center mb-5">
                  <img
                    src="/images/creative.png"
                    alt="Creative"
                    className="h-36 object-contain"
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

            {/* CARD 2 */}
            <div className="flex flex-col bg-[#eef2f7] border border-[#4f8fcb]/40 rounded-xl p-6 xl:p-7 transition-all duration-300 hover:border-[#4f8fcb] hover:shadow-md">
              <div className="flex-grow">
                <div className="flex justify-center mb-5">
                  <img
                    src="/images/admin.png"
                    alt="Admin"
                    className="h-36 object-contain"
                  />
                </div>

                <div className="text-center mb-5 space-y-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0b1b33]">
                    Administration & Business Support
                  </h3>

                  <p className="text-base text-[#0b1b33]/70 leading-relaxed">
                    Reliable operational support—handled with clear process and
                    accountability.
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
          </div>
        </div>
      </section>
    </main>
  );
}
