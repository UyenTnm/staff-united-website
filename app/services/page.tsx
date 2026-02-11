export default function Services() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-5 space-y-4">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-tight">
            Two service lanes. One execution model.
          </h1>

          <p className="text-lg text-[#0b1b33]/75">
            Delivered through dedicated or flexible support under one shared
            standard.
          </p>
        </div>

        {/* VALUE LINE */}
        <div className="text-center ">
          <p className="text-lg md:text-xl font-medium leading-snug">
            <span className="text-[#0b1b33]">Dedicated teams</span>{" "}
            <span className="text-[#0b1b33]/60">
              without the overhead of local hiring.
            </span>
          </p>
        </div>

        {/* CARDS */}
        {/* <div className="grid md:grid-cols-2 gap-8 pt-6"> */}
        {/* CARD 1 */}
        {/* <div className="group border border-[#d1d5db] rounded-xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
            <div className="space-y-6 flex-grow">
              <h2 className="text-xl font-semibold text-[#0b1b33]">
                Creative & Content Production
              </h2>

              <p className="text-[#0b1b33]/80 leading-relaxed">
                Publish-ready creative work delivered through structured
                workflow and review. Every deliverable is checked before handoff
                to protect quality and timelines.
              </p>
            </div>

            <a
              href="/request-support"
              className="mt-8 inline-flex justify-center items-center w-full md:w-auto min-w-[220px] h-11 px-6 bg-[#0b1b33] text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-[#0b1b33]/90 hover:shadow-md hover:-translate-y-[1px]"
            >
              Request Creative Support
            </a>
          </div> */}

        {/* CARD 2 */}
        {/* <div className="group border border-[#d1d5db] rounded-xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
            <div className="space-y-6 flex-grow">
              <h2 className="text-xl font-semibold text-[#0b1b33]">
                Administration & Business Support
              </h2>

              <p className="text-[#0b1b33]/80 leading-relaxed">
                Reliable support across day-to-day business operations. Work is
                structured, tracked, and accountable.
              </p>
            </div>

            <a
              href="/request-support"
              className="mt-8 inline-flex justify-center items-center w-full md:w-auto min-w-[220px] h-11 px-6 bg-[#0b1b33] text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-[#0b1b33]/90 hover:shadow-md hover:-translate-y-[1px]"
            >
              Request Business Support
            </a>
          </div> */}
        {/* </div> */}

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-5">
            <div className="grid md:grid-cols-2 gap-10">
              {/* CARD 1 */}
              <div className="flex flex-col bg-[#eef2f7] border border-[#4f8fcb]/40 rounded-xl p-8 transition-all duration-300 hover:border-[#4f8fcb] hover:shadow-lg">
                <div className="flex-grow space-y-6">
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src="/images/creative.png"
                      alt="Creative"
                      className="h-32 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0b1b33]">
                      Creative & Content Production
                    </h3>
                    <p className="text-[#0b1b33]/70 leading-relaxed">
                      Publish-ready creative output—delivered through structured
                      workflow and internal review.
                    </p>
                  </div>

                  {/* What we support */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#0b1b33]">
                      What we support
                    </h4>
                    <ul className="space-y-2 text-[#0b1b33]/80 text-sm">
                      {[
                        "Content editing & formatting",
                        "Social content production & repurposing",
                        "Design production support",
                        "Video support",
                        "Publishing support",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#4f8fcb]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How we deliver */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#0b1b33]">
                      How we deliver
                    </h4>
                    <ul className="space-y-2 text-[#0b1b33]/80 text-sm">
                      {[
                        "Clear scope + checklist execution",
                        "Internal review before delivery",
                        "Consistent quality and timelines",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#4f8fcb]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* BUTTON */}
                <a
                  href="/request-support"
                  className="mt-8 inline-flex justify-center items-center h-11 px-6 bg-[#0b1b33] text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-[#4f8fcb] hover:shadow-md"
                >
                  Request Creative Support
                </a>
              </div>

              {/* CARD 2 */}
              <div className="flex flex-col bg-[#eef2f7] border border-[#4f8fcb]/40 rounded-xl p-8 transition-all duration-300 hover:border-[#4f8fcb] hover:shadow-lg">
                <div className="flex-grow space-y-6">
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src="/images/admin.png"
                      alt="Admin"
                      className="h-32 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#0b1b33]">
                      Administration & Business Support
                    </h3>
                    <p className="text-[#0b1b33]/70 leading-relaxed">
                      Reliable operational support—handled with clear process
                      and accountability.
                    </p>
                  </div>

                  {/* What we support */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#0b1b33]">
                      What we support
                    </h4>
                    <ul className="space-y-2 text-[#0b1b33]/80 text-sm">
                      {[
                        "Inbox/calendar management",
                        "Meeting notes & tracking",
                        "CRM updates",
                        "Client coordination",
                        "Research & reporting",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#4f8fcb]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How we deliver */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#0b1b33]">
                      How we deliver
                    </h4>
                    <ul className="space-y-2 text-[#0b1b33]/80 text-sm">
                      {[
                        "Standard operating procedures",
                        "Structured workflows",
                        "Ownership for completion",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#4f8fcb]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* BUTTON */}
                <a
                  href="/request-support"
                  className="mt-8 inline-flex justify-center items-center h-11 px-6 bg-[#0b1b33] text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-[#4f8fcb] hover:shadow-md"
                >
                  Request Business Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
