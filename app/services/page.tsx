export default function Services() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-14">
        {/* HEADER */}
        <div className="text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-tight">
            Two service lanes. One execution model.
          </h1>

          <p className="text-lg text-[#0b1b33]/75">
            Delivered through dedicated or flexible support under one shared
            standard.
          </p>
        </div>

        {/* VALUE LINE */}
        <div className="text-center">
          <p className="text-xl font-medium">
            <span className="text-[#0b1b33]">Dedicated teams</span>{" "}
            <span className="text-[#0b1b33]/60">
              without the overhead of local hiring.
            </span>
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          {/* CARD 1 */}
          <div className="group border border-[#d1d5db] rounded-xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
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
          </div>

          {/* CARD 2 */}
          <div className="group border border-[#d1d5db] rounded-xl p-8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
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
          </div>
        </div>
      </section>
    </main>
  );
}
