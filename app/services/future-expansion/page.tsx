"use client";

import FutureExpansionForm from "@/components/forms/FutureExpansionForm";
import { Building2, Handshake, Rocket, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function FocusedMarketingPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
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
      <section
        className="
    relative
    overflow-hidden
    text-white

    bg-[#06172D]
  "
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          className={`
    absolute
    inset-0
    h-full
    w-full
    object-cover

    transition-opacity
    duration-700

    ${videoLoaded ? "opacity-100" : "opacity-0"}
  `}
        >
          <source
            src="/videos/services/future-expansion-hero.mp4"
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
            Future Expansion
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
            Business Setup & Market Entry Coordination
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
            ))}
          </div>

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
                icon: Rocket,
                title: "Faster Market Entry",
                desc: "Reduce setup delays through structured coordination and local support.",
              },
              {
                icon: Building2,
                title: "Operational Readiness",
                desc: "Establish the business infrastructure required for launch and growth.",
              },
              {
                icon: Handshake,
                title: "Local Market Support",
                desc: "Access coordination resources and trusted local partner networks.",
              },
              {
                icon: TrendingUp,
                title: "Expansion Confidence",
                desc: "Move forward with greater clarity and confidence during expansion.",
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

                  {/* <h3
                    className="
          text-xl
          font-semibold
          min-h-[56px]
          text-[#06172d]
        "
                  >
                    {item.title}
                  </h3> */}
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
      <FutureExpansionForm />
    </main>
  );
}
