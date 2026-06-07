"use client";

import TargetedSalesForm from "@/components/forms/TargetedSalesForm";
import {
  Eye,
  HeartHandshake,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export default function TargetedSalesPage() {
  const serviceGroups = [
    {
      title: "Sales Operations",
      items: [
        "Lead Research & List Building",
        "CRM Cleanup & Maintenance",
        "Pipeline & Follow-Up Tracking",
        "Proposal & Document Formatting",
        "Appointment Scheduling",
        "Sales Administration Support",
      ],
    },

    {
      title: "Customer Support",
      items: [
        "Email Customer Support",
        "Live Chat Support",
        "Helpdesk & Ticket Handling",
      ],
    },

    {
      title: "Order & Account Coordination",
      items: [
        "Order Processing Support",
        "Returns & Refund Coordination",
        "CRM Case Logging & Updates",
      ],
    },

    {
      title: "Customer Success & Retention",
      items: ["Customer Follow-Up Support", "After-Sales Support"],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        className="
    relative
    overflow-hidden
    text-white
  "
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
    "
        >
          <source
            src="/videos/services/targeted-sales-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}

        <div
          className="
      absolute
      inset-0
      bg-[#06172D]/20
    "
        />

        {/* Gradient Overlay */}

        <div
          className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black/20
      via-[#06172D]/40
      to-[#06172D]/90
    "
        />

        {/* Hero Content */}

        <div
          className="
      relative
      z-10
      max-w-6xl
      mx-auto
      px-6
      pt-40
      pb-28
    "
        >
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
            Targeted Sales
          </h1>

          <p
            className="
    mt-6
    text-xl
    lg:text-2xl
    text-white/80
    max-w-2xl
  "
          >
            Sales & Customer Support
          </p>

          <p
            className="
    mt-8
    max-w-3xl
    text-white/70
    text-lg
    leading-relaxed
  "
          >
            Helping businesses strengthen customer relationships, improve sales
            consistency, and create sustainable revenue growth through
            structured sales and customer support operations.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Revenue Growth", "Customer Retention", "Support Excellence"].map(
              (item) => (
                <div
                  key={item}
                  className="
        px-4
        py-2
        rounded-full
        border
        border-white/20
        bg-white/10
        backdrop-blur-sm
        text-sm
        text-white
      "
                >
                  {item}
                </div>
              ),
            )}
          </div>

          {/* <button
            onClick={() =>
              document.getElementById("quote-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
    mt-10
    px-7
    py-4
    rounded-full

    bg-[#4F8DC9]
    hover:bg-[#79B9FF]

    text-white
    font-medium

    transition-all
    duration-300
  "
          >
            Request a Quote
          </button> */}

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() =>
                document.getElementById("quote-section")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
      px-7
      py-4
      rounded-full

      bg-[#4F8DC9]
      hover:bg-[#79B9FF]

      text-white
      font-medium

      transition-all
      duration-300
    "
            >
              Request a Quote
            </button>

            <a
              href="/request-support"
              className="
    px-7
    py-4

    rounded-full

    border-2
    border-[#79B9FF]

    text-[#79B9FF]

    font-semibold

    hover:bg-[#79B9FF]
    hover:text-white

    transition-all
    duration-300
  "
            >
              Client Fast Track →
            </a>
          </div>
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
            Build Stronger Customer Relationships
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            Strong sales and customer support processes create better customer
            experiences, improve retention, and support sustainable revenue
            growth. By maintaining consistent follow-ups, organized pipelines,
            and responsive support channels, businesses can build trust,
            increase conversion opportunities, and strengthen long-term customer
            relationships.
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
            Targeted Sales Services
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
                icon: TrendingUp,
                title: "Revenue Growth",
                desc: "Create more qualified sales opportunities through organized sales processes.",
              },

              {
                icon: HeartHandshake,
                title: "Customer Satisfaction",
                desc: "Deliver consistent support and improve customer satisfaction.",
              },

              {
                icon: UserCheck,
                title: "Stronger Retention",
                desc: "Build lasting customer relationships through proactive engagement.",
              },

              {
                icon: Eye,
                title: "Operational Visibility",
                desc: "Maintain clear visibility across sales pipelines and customer interactions.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
        rounded-3xl
        flex flex-col
        border border-slate-200
        p-6
        h-full
      "
                >
                  <div
                    className="
          w-14 h-14
          rounded-2xl
          bg-[#EEF6FD]
          border border-[#D7EAFB]
          flex items-center justify-center
          mb-6
        "
                  >
                    <Icon
                      className="w-7 h-7 text-[#4F8DC9]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3
                    className="
          text-xl
          font-semibold
          text-[#06172d]
          leading-tight
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
              );
            })}
          </div>
        </div>
      </section>

      {/* REQUEST A QUOTE */}
      {/* <section id="quote-section" className="bg-[#F6F8FB] py-28">
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
              Let's Grow Your Sales Operations
            </h2>

            <p
              className="
                mt-6
                text-slate-600
                text-lg
                leading-relaxed
              "
            >
              Tell us about your sales goals, customer support needs, and
              current challenges. Our team will review your requirements and
              prepare a tailored proposal with recommended scope, timeline,
              pricing, and next steps.
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
              placeholder="Tell us about your sales goals, customer support needs, pipeline challenges, or growth objectives..."
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
      </section> */}
      <TargetedSalesForm />
    </main>
  );
}
