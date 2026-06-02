"use client";

export default function FocusedMarketingPage() {
  const serviceGroups = [
    {
      title: "Business Setup",
      items: [
        "Virtual Office Setup",
        "Business Address Setup",
        "Operational Setup Coordination",
        "Banking Setup Support",
      ],
    },

    {
      title: "Documentation & Administration",
      items: [
        "Administrative Follow-Ups",
        "Translation & Documentation Support",
        "Required Document Preparation",
        "Government Filing Assistance",
      ],
    },

    {
      title: "Local Coordination",
      items: [
        "Local Operations Coordination",
        "Local Legal Partner Introductions",
      ],
    },

    {
      title: "Market Entry Support",
      items: [
        "Vietnam Business Registration Coordination",
        "Vietnam Market Entry Coordination",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-[#06172d] text-white pt-40 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <span
            className="
              text-[#79B9FF]
              uppercase
              tracking-[0.25em]
              text-xs
              font-medium
            "
          >
            Service Line
          </span>

          <h1
            className="
              mt-4
              text-5xl
              lg:text-7xl
              font-semibold
              leading-tight
            "
          >
            Future Expansion
          </h1>

          <p
            className="
              mt-6
              text-xl
              lg:text-2xl
              text-white/70
              max-w-2xl
            "
          >
            Business Setup & Market Entry Coordination{" "}
          </p>

          <p
            className="
              mt-8
              max-w-3xl
              text-white/60
              text-lg
              leading-relaxed
            "
          >
            Helping businesses establish the operational foundation, local
            coordination, and support required to enter new markets and pursue
            growth opportunities with confidence.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Market Entry",
              "Business Expansion",
              "Operational Readiness",
            ].map((item) => (
              <div
                key={item}
                className="
        px-4 py-2
        rounded-full

        border border-white/10
        bg-white/[0.05]

        text-sm
        text-white/80
      "
              >
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document.getElementById("quote-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
    mt-10
    px-7 py-4
    rounded-full

    bg-[#4F8DC9]
    hover:bg-[#79B9FF]

    text-white
    font-medium

    transition-all duration-300
  "
          >
            Request a Quote
          </button>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span
            className="
              uppercase
              tracking-[0.2em]
              text-xs
              text-[#4F8DC9]
              font-semibold
            "
          >
            Why It Matters
          </span>

          <h2
            className="
              mt-4
              text-4xl
              lg:text-5xl
              font-semibold
              text-[#06172d]
            "
          >
            Expand into New Markets with Confidence{" "}
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            Expanding into a new market requires more than a business idea. It
            requires coordination, documentation, local support, and operational
            readiness. Future Expansion helps businesses navigate the practical
            steps involved in establishing a presence, coordinating setup
            activities, and building the infrastructure needed for sustainable
            growth.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F6F8FB] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span
            className="
        uppercase
        tracking-[0.2em]
        text-xs
        text-[#4F8DC9]
        font-semibold
      "
          >
            How It Works
          </span>

          <h2
            className="
        mt-4
        text-4xl
        lg:text-5xl
        font-semibold
        text-[#06172d]
      "
          >
            From Request to Launch
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                step: "01",
                title: "Request a Quote",
                desc: "Tell us about your business and support requirements.",
              },
              {
                step: "02",
                title: "Review Requirements",
                desc: "Our team reviews your needs and evaluates the best approach.",
              },
              {
                step: "03",
                title: "Receive Proposal",
                desc: "We prepare a tailored scope, timeline, and pricing proposal.",
              },
              {
                step: "04",
                title: "Launch Service",
                desc: "Once approved, onboarding and service delivery begin.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="
            bg-white
            rounded-3xl
            border border-slate-200
            p-6
          "
              >
                <div
                  className="
              text-[#4F8DC9]
              text-sm
              font-semibold
              tracking-[0.15em]
            "
                >
                  {item.step}
                </div>

                <h3
                  className="
              mt-4
              text-xl
              font-semibold
              text-[#06172d]
            "
                >
                  {item.title}
                </h3>

                <p
                  className="
              mt-4
              text-slate-600
              leading-relaxed
            "
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06172d] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span
            className="
        uppercase
        tracking-[0.2em]
        text-xs
        text-[#79B9FF]
        font-semibold
      "
          >
            Future Expansion Services
          </span>

          <h2
            className="
        mt-4
        text-4xl
        lg:text-5xl
        font-semibold
      "
          >
            What We Support
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mt-14">
            {serviceGroups.map((group) => (
              <div
                key={group.title}
                className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-8 flex flex-col
          "
              >
                <h3
                  className="
              text-2xl
              font-semibold
              mb-6
            "
                >
                  {group.title}
                </h3>

                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className="
                    w-2 h-2
                    rounded-full
                    bg-[#79B9FF]
                    mt-2
                  "
                      />

                      <span className="text-white/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <span
            className="
        uppercase
        tracking-[0.2em]
        text-xs
        text-[#4F8DC9]
        font-semibold
      "
          >
            Expected Outcomes
          </span>

          <h2
            className="
        mt-4
        text-4xl
        lg:text-5xl
        font-semibold
        text-[#06172d]
      "
          >
            What Success Looks Like
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              {
                title: "Faster Market Entry",
                desc: "Reduce setup delays through structured coordination and local support.",
              },

              {
                title: "Operational Readiness",
                desc: "Establish the business infrastructure required for launch and growth.",
              },

              {
                title: "Local Market Support",
                desc: "Access coordination resources and trusted local partner networks.",
              },

              {
                title: "Expansion Confidence",
                desc: "Move forward with greater clarity and confidence during expansion.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
            rounded-3xl flex flex-col
            border border-slate-200
            p-6 h-full
          "
              >
                <h3
                  className="
              text-xl font-semibold min-h-[56px]
              text-[#06172d] flex items-start
            "
                >
                  {item.title}
                </h3>

                <p
                  className="
              mt-4
              text-slate-600
              leading-relaxed 
            "
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      {/* <section className="bg-[#FFF8ED] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
        rounded-3xl
        border border-[#F4D8A6]
        bg-white
        p-8
      "
          >
            <span
              className="
          uppercase
          tracking-[0.2em]
          text-xs
          font-semibold
          text-[#C98A2E]
        "
            >
              Important Note
            </span>

            <h3
              className="
          mt-4
          text-2xl min-h-[72px] mb-6
          font-semibold
          text-[#06172d]
        "
            >
              Coordination & Support Services
            </h3>

            <p
              className="
          mt-4
          text-slate-600
          leading-relaxed
        "
            >
              Future Expansion services focus on operational coordination,
              business setup support, and market entry assistance. Legal, tax,
              and licensing advice is provided through qualified local partners
              where required.
            </p>
          </div>
        </div>
      </section> */}

      {/* REQUEST A QUOTE */}
      <section id="quote-section" className="bg-[#F6F8FB] py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="
              bg-white
              rounded-3xl

              border border-slate-200

              p-8
              lg:p-12

              shadow-xl
            "
          >
            <span
              className="
                uppercase
                tracking-[0.2em]
                text-xs
                text-[#4F8DC9]
                font-semibold
              "
            >
              Request a Quote
            </span>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                text-[#06172d]
              "
            >
              Let's Explore Your Expansion Plans
            </h2>

            <p
              className="
                mt-6
                text-slate-600
                text-lg
                leading-relaxed
              "
            >
              Tell us about your expansion goals, target market, and operational
              requirements. Our team will review your needs and prepare a
              tailored proposal with recommended scope, timeline, pricing, and
              next steps.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              <input
                placeholder="First Name"
                className="
      h-14
      rounded-2xl
      border border-slate-200
      px-5
      outline-none
    "
              />

              <input
                placeholder="Last Name"
                className="
      h-14
      rounded-2xl
      border border-slate-200
      px-5
      outline-none
    "
              />
            </div>

            <input
              placeholder="Company Name"
              className="
    mt-5
    w-full
    h-14
    rounded-2xl
    border border-slate-200
    px-5
    outline-none
  "
            />

            <input
              placeholder="Business Email"
              className="
    mt-5
    w-full
    h-14
    rounded-2xl
    border border-slate-200
    px-5
    outline-none
  "
            />

            <textarea
              placeholder="Tell us about your business and support requirements..."
              className="
    mt-5
    w-full
    min-h-[140px]
    rounded-2xl
    border border-slate-200
    px-5
    py-4
    outline-none
  "
            />

            <select
              className="
    mt-5
    w-full
    h-14
    rounded-2xl
    border border-slate-200
    px-5
    outline-none
  "
            >
              <option>Preferred Timeline</option>
              <option>Immediately</option>
              <option>Within 30 Days</option>
              <option>Within 60 Days</option>
              <option>Exploring Options</option>
            </select>

            <button
              className="
    mt-6

    px-7 py-4
    rounded-full

    bg-[#4F8DC9]
    hover:bg-[#79B9FF]

    text-white
    font-medium

    transition-all duration-300
  "
            >
              Submit Request
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
