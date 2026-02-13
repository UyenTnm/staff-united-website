import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white w-full">
      {/* SECTION 1 — HERO (WHITE) */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-[1.1] tracking-tight">
              Women - Powered <br /> Offshore Execution Partner <br />
              Based in Vietnam
            </h1>

            <p className="text-lg md:text-2xl text-[#0b1b33]/80 max-w-2xl mx-auto">
              Supports International Businesses Through a Distributed Team of
              Women Across Asia Operating Under One Shared Standard
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="/request-support"
                className="px-6 py-3 bg-[#0b1b33] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition"
              >
                Request Support
              </a>

              <a
                href="/join"
                className="px-6 py-3 border border-[#0b1b33] text-[#0b1b33] text-base md:text-lg font-medium rounded hover:bg-[#f2f4f7] transition"
              >
                Join the Team
              </a>
            </div>

            <div className="text-base md:text-lg font-semibold text-[#4f8fcb] tracking-wide pt-2 space-y-1">
              <p>All Females. All Business.</p>
              <p>One Standard. One team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — POSITIONING (FULL GREY) */}
      <section className="bg-[#f3f4f6] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0b1b33]">
              Built for Execution - Designed to Scale.
            </h2>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 text-left">
            {/* Block 1 */}
            <div className="space-y-5 max-w-xs mx-auto">
              <h3 className="text-xl font-semibold text-[#0b1b33]">
                Integrated Delivery
              </h3>

              <p className="text-[15px] text-[#0b1b33]/75 leading-7">
                STAFF United integrates directly into your operations and takes
                <span className="font-semibold text-[#0b1b33]">
                  {" "}
                  responsibility for delivery
                </span>
                .
              </p>
            </div>

            {/* Block 2 */}
            <div className="space-y-5 max-w-xs mx-auto">
              <h3 className="text-xl font-semibold text-[#0b1b33]">
                Structured Execution
              </h3>

              <p className="text-[15px] text-[#0b1b33]/75 leading-7">
                Our work is guided by
                <span className="font-semibold text-[#0b1b33]">
                  {" "}
                  defined standards and structured workflows
                </span>
                , with shared accountability - ensuring
                <span className="font-semibold text-[#0b1b33]">
                  {" "}
                  consistent outcomes as you grow
                </span>
                .
              </p>
            </div>

            {/* Block 3 */}
            <div className="space-y-5 max-w-xs mx-auto">
              <h3 className="text-xl font-semibold text-[#0b1b33]">
                Scalable Support
              </h3>

              <p className="text-[15px] text-[#0b1b33]/75 leading-7">
                This
                <span className="font-semibold text-[#0b1b33]">
                  {" "}
                  execution-first model
                </span>{" "}
                allows companies to scale support with
                <span className="font-semibold text-[#0b1b33]">
                  {" "}
                  confidence, clarity, and control
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT WE DELIVER (WHITE) */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* TITLE */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
              What We Deliver
            </h2>

            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

            <p className="text-lg text-[#0b1b33]/70 max-w-2xl mx-auto leading-relaxed">
              Dedicated Teams Supporting Execution Across Marketing, Operations,
              and Business Workflows — Without the Overhead of Local Hiring.
            </p>
          </div>

          {/* SERVICES OVERVIEW */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div
              className="
          group
          border border-[#0b1b33]/10
          rounded-xl
          p-8
          bg-[#f8fafc]
          transition-all duration-300
          hover:border-[#4f8fcb]/40
          hover:shadow-md
        "
            >
              <h3 className="text-xl font-semibold text-[#0b1b33] group-hover:text-[#4f8fcb]">
                Creative & Content Production
              </h3>

              <p className="text-[#0b1b33]/70 mt-3 leading-relaxed">
                Structured content execution for blogs, social media, and
                digital assets — delivered through defined workflows and
                internal review.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="
          group
          border border-[#0b1b33]/10
          rounded-xl
          p-8
          bg-[#f8fafc]
          transition-all duration-300
          hover:border-[#4f8fcb]/40
          hover:shadow-md
        "
            >
              <h3 className="text-xl font-semibold text-[#0b1b33] group-hover:text-[#4f8fcb]">
                Administration & Business Support
              </h3>

              <p className="text-[#0b1b33]/70 mt-3 leading-relaxed">
                Reliable operational support handled through structured
                processes, clear ownership, and consistent execution standards.
              </p>
            </div>

            {/* CARD 3 */}
            {/* <div
              className="
          group
          border border-[#0b1b33]/10
          rounded-xl
          p-8
          bg-[#f8fafc]
          transition-all duration-300
          hover:border-[#4f8fcb]/40
          hover:shadow-md
        "
            >
              <h3 className="text-xl font-semibold text-[#0b1b33] group-hover:text-[#4f8fcb]">
                Marketing Execution
              </h3>

              <p className="text-[#0b1b33]/70 mt-3 leading-relaxed">
                Ongoing support for campaign execution, content distribution,
                and performance tracking — aligned with clear workflows.
              </p>
            </div> */}

            {/* CARD 4 */}
            {/* <div
              className="
          group
          border border-[#0b1b33]/10
          rounded-xl
          p-8
          bg-[#f8fafc]
          transition-all duration-300
          hover:border-[#4f8fcb]/40
          hover:shadow-md
        "
            >
              <h3 className="text-xl font-semibold text-[#0b1b33] group-hover:text-[#4f8fcb]">
                Process & Workflow Support
              </h3>

              <p className="text-[#0b1b33]/70 mt-3 leading-relaxed">
                Documentation, task tracking, and structured workflows that
                ensure clarity, consistency, and accountability across teams.
              </p>
            </div> */}
          </div>

          {/* CTA */}

          <div className="pt-4 text-center">
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-[#0b1b33] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition text-center"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW CLIENTS WORK WITH US (LIGHT GREY) */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
              How Clients Work with Us
            </h2>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Dedicated */}
            <div className="space-y-4">
              <h3 className="text-2xl text-center md:text-3xl font-semibold text-[#0b1b33]">
                Dedicated Team Members
              </h3>
              <p className="text-[#0b1b33]/80 text-lg text-center leading-relaxed">
                Build long-term capacity by hiring full-time team members
                through STAFF United. This model supports continuity, deeper
                integration, and ownership within your business.
              </p>
            </div>

            {/* Flexible */}
            <div className="space-y-4">
              <h3 className="text-2xl text-center md:text-3xl font-semibold text-[#0b1b33]">
                Flexible Support
              </h3>
              <p className="text-[#0b1b33]/80 text-lg text-center leading-relaxed">
                Use part-time or as-needed support to fill gaps, manage workload
                spikes, or support specific functions without long-term
                commitment.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#d1d5db]">
            <p className="text-[#0b1b33]/80 text-center text-lg leading-relaxed">
              Both Models Operate Under the Same Workflows, Review Process, and
              Quality Expectations.
            </p>
            <p className="text-base text-center md:text-lg font-semibold text-[#4f8fcb] tracking-wide pt-2 space-y-1">
              One Standard. One Team.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY WE BUILT THIS (WHITE) */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
              Why We Built This
            </h2>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4 text-lg text-[#0b1b33]/80 leading-relaxed">
            <p>
              STAFF United was built in Vietnam by women who understood what it
              means to work hard without always being seen.
            </p>

            <p>
              We saw talented women carrying responsibility—balancing work,
              family, and expectation - often without access to stable
              opportunities, fair systems, or long-term growth.
            </p>

            <p>
              This company exists to change that. Not through charity. Not
              through shortcuts. But through real work, clear standards, and
              shared accountability.
            </p>

            <p>
              By supporting international businesses with disciplined execution,
              we create professional, long-term opportunities for women - while
              delivering reliability our clients can trust.
            </p>
            <p>
              Supporting women is not separate from how we work. It is built
              into the standard.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — THE STANDARD (LIGHT GREY) */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
              The Standard
            </h2>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4 text-lg text-[#0b1b33]/80 leading-relaxed">
            <p>Anyone can promise quality. Very few can enforce it.</p>

            <p>
              We define a standard and apply it across people, tasks, and
              timelines. That is how we deliver consistent outcomes - and how we
              scale without drift.
            </p>

            <p>
              Being based in Vietnam allows us to operate efficiently and offer
              competitive pricing, while maintaining the level of quality
              expected by international businesses.
            </p>
          </div>

          <div className="pt-4 text-center">
            <a
              href="/the-standard"
              className="inline-block px-6 py-3 bg-[#0b1b33] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition text-center"
            >
              View The Standard
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW IT WORKS (WHITE) */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
              How It Works
            </h2>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 mb-4 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Horizontal line - desktop only */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-[#d1d5db]" />

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* STEP 1 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#4f8fcb] flex items-center justify-center text-[#4f8fcb] font-semibold text-sm bg-white">
                    01
                  </div>
                  <div className="h-px bg-[#d1d5db] flex-1 md:hidden" />
                </div>

                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Request
                </h3>

                <p className="text-[#0b1b33]/75 text-lg leading-relaxed">
                  Tell us what you need, when you need it, and what success
                  looks like.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#4f8fcb] flex items-center justify-center text-[#4f8fcb] font-semibold text-sm bg-white">
                    02
                  </div>
                  <div className="h-px bg-[#d1d5db] flex-1 md:hidden" />
                </div>

                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Scope + Assign
                </h3>

                <p className="text-[#0b1b33]/75 text-lg leading-relaxed">
                  We confirm deliverables and timelines, then assign the right
                  team under one shared standard.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#4f8fcb] flex items-center justify-center text-[#4f8fcb] font-semibold text-sm bg-white">
                    03
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Deliver + Review
                </h3>

                <p className="text-[#0b1b33]/75 text-lg leading-relaxed">
                  Work is delivered with internal review, clear communication,
                  and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — MODERN SYSTEMS (LIGHT GREY) */}
      <section className="bg-[#f8f9fb] py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
              Modern Systems
            </h2>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
          </div>

          <p className="text-[#0b1b33]/80 text-lg leading-relaxed">
            We use structured workflows and modern tooling - including
            AI-assisted drafting and quality support - to improve speed and
            consistency. Final delivery is always reviewed by people and
            delivered under one shared standard.
          </p>
        </div>
      </section>

      {/* SECTION 10 — CTA STRIP (FULL WIDTH STRIP) */}
      <section className="bg-[#eef2f7] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-lg md:text-2xl font-medium text-[#0b1b33]">
            Whether You’re Building a Dedicated Team or Need Flexible Support,
            Send a Request and We’ll Confirm Next Steps.
          </p>

          <a
            href="/request-support"
            className="inline-block px-6 py-3 bg-[#0b1b33] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition"
          >
            Request Support
          </a>
        </div>
      </section>
    </main>
  );
}
