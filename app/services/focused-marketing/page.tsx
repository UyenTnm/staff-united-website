"use client";

import FocusedMarketingForm from "@/components/forms/FocusedMarketingForm";

export default function FocusedMarketingPage() {
  const serviceGroups = [
    {
      title: "Marketing Strategy & Campaigns",
      items: [
        "Social Media Strategic Planning",
        "Email Campaign Setup",
        "Campaign Coordination",
        "Marketing Content Coordination",
      ],
    },

    {
      title: "Brand & Creative Assets",
      items: [
        "Brand Communication Support",
        "Graphic & Visual Asset Coordination",
        "Brand Communication & Visual Assets",
      ],
    },

    {
      title: "Business Marketing Materials",
      items: [
        "Website Development & Optimization",
        "Digital Brochure & Company Profile Design",
        "Corporate Presentation & Pitch Deck Design",
      ],
    },

    {
      title: "Media Production & Distribution",
      items: [
        "Video Editing & Media Production",
        "Animated, Lyrical & Promotional Video Production",
        "YouTube Content Optimization & Publishing",
        "On-Site Media Production (Vietnam)",
        "Reporting & Dashboard Support",
        "Marketing Administration Support",
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
            src="/videos/services/focused-marketing-hero.mp4"
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
            Focused Marketing
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
            Marketing, Brand & Media Production
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
            Helping businesses maintain visibility, strengthen brand presence,
            and deliver consistent marketing execution across digital, visual,
            and media channels.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Brand Visibility",
              "Marketing Execution",
              "Media Production",
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

          <button
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
            Build Visibility Through Consistent Execution
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            Strong marketing execution helps businesses maintain visibility,
            communicate consistently, and strengthen brand credibility. By
            coordinating campaigns, content, media, and brand assets,
            organizations can improve market presence, engage audiences more
            effectively, and support long-term business growth.
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
            Focused Marketing Services
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
                title: "Brand Visibility",
                desc: "Increase awareness and maintain a consistent presence across channels.",
              },
              {
                title: "Professional Brand Presence",
                desc: "Strengthen credibility through high-quality communication and assets.",
              },
              {
                title: "Audience Engagement",
                desc: "Connect with customers through targeted campaigns and media content.",
              },
              {
                title: "Marketing Consistency",
                desc: "Maintain organized execution, reporting, and campaign coordination.",
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

      {/* REQUEST A QUOTE */}

      <FocusedMarketingForm />
    </main>
  );
}
