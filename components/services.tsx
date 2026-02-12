export default function ServicesPage() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        {/* Header */}
        <section className="text-center max-w-2xl mx-auto space-y-2">
          <h1 className="text-3xl font-semibold text-[#0b1b33]">
            Two Service Lanes. One Execution Model.
          </h1>
          <p className="text-[#0b1b33]/80 leading-relaxed">
            Delivered Through Dedicated or Flexible Support Under One Shared
            Standard.
          </p>
        </section>

        {/* Value line */}
        <section className="text-center">
          <p className="text-base font-medium text-[#0b1b33]">
            Dedicated teams without the overhead of local hiring.
          </p>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-20 h-px bg-[#d1d5db]" />
        </div>

        {/* Services */}
        <section className="grid md:grid-cols-2 gap-4">
          {/* Creative */}
          <div className="border border-[#d1d5db] rounded-lg p-5 shadow-sm min-h-[190px] flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-[#0b1b33]">
                Creative & Content Production
              </h2>
              <p className="text-sm text-[#0b1b33]/80 leading-relaxed">
                Publish-ready creative work delivered through structured
                workflow and review. Every deliverable is checked before handoff
                to protect quality and timelines.
              </p>
            </div>

            <a
              href="/request-support"
              className="
    w-full
    text-center
    px-4 py-2
    bg-[#0b1b33]
    text-white
    border border-[#0b1b33]
    rounded
    text-sm font-medium
    transition-colors
    hover:bg-[#4f8fcb]
    hover:border-[#4f8fcb]
  "
            >
              Request Creative Support
            </a>
          </div>

          {/* Admin */}
          <div className="border border-[#d1d5db] rounded-lg p-5 shadow-sm min-h-[190px] flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-[#0b1b33]">
                Administration & Business Support
              </h2>
              <p className="text-sm text-[#0b1b33]/80 leading-relaxed">
                Reliable support across day-to-day business operations. Work is
                structured, tracked, and accountable.
              </p>
            </div>

            <a
              href="/request-support"
              className="
    w-full
    text-center
    px-4 py-2
    bg-[#0b1b33]
    text-white
    border border-[#0b1b33]
    rounded
    text-sm font-medium
    transition-colors
    hover:bg-[#4f8fcb]
    hover:border-[#4f8fcb]
  "
            >
              Request Business Support
            </a>
          </div>
        </section>

        {/* Closing */}
        <p className="text-center text-sm text-[#0b1b33]/70 max-w-xl mx-auto leading-relaxed">
          Both Models Operate Under the Same Workflows, Review Process, and
          Quality Expectations.
          <br />
          <span className="font-medium text-[#0b1b33]">
            One Standard. One Team.
          </span>
        </p>
      </div>
    </main>
  );
}
