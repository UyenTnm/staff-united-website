"use client";
import AnimatedSection from "@/components/AnimatedSection";
import StaffUnitedFiveDiagram from "@/components/StaffUnitedFiveDiagram";
import {
  Calculator,
  Handshake,
  Headphones,
  Megaphone,
  MessageCircle,
  Network,
  Rocket,
  Settings,
  Sparkle,
  Target,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Sales",
      desc: "Customer Support & Sales Operations",
      icon: Handshake,
      items: [
        "Lead Research & List Building",
        "CRM Cleanup & Maintenance",
        "Pipeline & Follow-Up Tracking",
        "Proposal & Document Formatting",
        "Appointment Scheduling",
        "Sales Administration Support",
        "Email Customer Support",
        "Live Chat Support",
        "Helpdesk & Ticket Handling",
        "Order Processing Support",
        "Returns & Refund Coordination",
        "Customer Follow-Up Support",
        "CRM Case Logging & Updates",
        "After-Sales Support",
      ],
      impact:
        "When your sales and customer support operations are consistent and responsive, businesses build stronger customer relationships, improve retention, and create more opportunities for growth.",
    },

    {
      title: "Growth",
      desc: "Business Setup & Market Entry Support",
      icon: Rocket,
      items: [
        "Virtual Office Setup",
        "Business Address Setup",
        "Administrative Follow-Ups",
        "Operational Setup Coordination",
        "Translation & Documentation Support",
        "Local Operations Coordination",
        "Vietnam Business Registration Coordination",
        "Local Legal Partner Introductions",
        "Government Filing Assistance",
        "Required Document Preparation",
        "Banking Setup Support",
        "Vietnam Market Entry Coordination",
      ],
      impact:
        "When businesses are ready to grow into new opportunities and markets, we help provide the operational coordination, local support, and business infrastructure needed to move forward with confidence.",
      note: "Services are coordination and support-based. Legal, tax, and licensing advice is provided through qualified local partners where required.",
    },

    {
      title: "Finance",
      desc: "Accounting & Financial Operations",
      icon: Calculator,
      items: [
        "Monthly Bookkeeping",
        "Bank & Credit Card Reconciliation",
        "Accounts Payable (AP) Support",
        "Accounts Receivable (AR) Support",
        "Invoicing & Billing Support",
        "Expense Coding & Categorization",
        "Month-End Close Support",
        "Catch-Up & Cleanup Bookkeeping",
        "Payroll Administration Support",
        "Financial Data Entry & Maintenance",
        "Management Reporting Support",
      ],
      impact:
        "When your financial operations are organized, you gain the clarity and confidence to make stronger business decisions and scale more effectively.",
    },

    {
      title: "Operations",
      desc: "Administrative & Business Operations",
      icon: Settings,
      items: [
        "Executive Assistant Support",
        "Calendar & Inbox Management",
        "Meeting Scheduling & Coordination",
        "Document Formatting & Preparation",
        "CRM Updates & Data Management",
        "Research & Information Gathering",
        "Internal Follow-Ups & Task Tracking",
        "File & System Organization",
        "Reporting & Administrative Coordination",
        "Vendor & Payment Coordination",
        "Administrative Workflow Support",
        "SOP Documentation",
        "Workflow & Systems Coordination",
        "Operational Documentation & Process Mapping",
        "Internal Process Optimization Support",
        "Operational Reporting & Tracking",
        "Business Process Standardization",
        "Information & File Management Systems",
        "Business Continuity Planning Support",
        "Compliance & Administrative Coordination",
        "Operational Risk Coordination Support",
        "Internal Security Procedure Coordination",
      ],
      impact:
        "When your operations are supported by strong systems, reliable coordination, and organized processes, your business runs more efficiently and becomes better prepared to scale sustainably.",
    },

    {
      title: "Marketing",
      desc: "Marketing Execution, Brand & Media Support",
      icon: Megaphone,
      items: [
        "Social Media Strategic Planning",
        "Email Campaign Setup",
        "Campaign Coordination",
        "Marketing Content Coordination",
        "Brand Communication Support",
        "Graphic & Visual Asset Coordination",
        "Reporting & Dashboard Support",
        "Marketing Administration Support",
        "Website Development & Optimization",
        "Digital Brochure & Company Profile Design",
        "Corporate Presentation & Pitch Deck Design",
        "Brand Communication & Visual Assets",
        "Video Editing & Media Production",
        "Animated, Lyrical & Promotional Video Production",
        "YouTube Content Optimization & Publishing",
        "On-Site Media Production (Vietnam)",
      ],
      impact:
        "Execution-focused marketing support designed to help businesses maintain visibility, consistency, and a professional brand presence across channels.",
    },
  ];

  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setActiveIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // đóng card
          : [...prev, index], // mở thêm card mới
    );
  };

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .slide-left, .slide-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      {/* SERVICES */}
      <section className="pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 relative overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="hidden md:block absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#4f8dc9_0%,transparent_70%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center fade-up active">
            {/* BADGE */}
            <div className="flex justify-center lg:block">
              <span
                className="
        inline-block
        text-[11px] sm:text-xs
        px-4 py-1.5
        rounded-full
        font-semibold
        tracking-wide

        text-[#4f8dc9]

        bg-white/70
        backdrop-blur-md
        border border-[#0b1b33]/10

        shadow-[0_4px_20px_rgba(79,141,201,0.15)]
      "
              >
                OUR SERVICES
              </span>
            </div>

            {/* LOGO IMAGE */}
            <div className="mt-2 flex justify-center">
              <Image
                src="/services/5taff-logo-services.webp"
                alt="5TAFF United"
                width={320}
                height={120}
                className="
        w-auto
        h-auto
        max-w-[220px]
        sm:max-w-[280px]
        md:max-w-[320px]
      "
                priority
              />
            </div>

            {/* SUBTITLE */}
            <p className="mt-2 max-w-4xl mx-auto text-[#0a1b33] leading-relaxed">
              Five core business functions. One scalable support ecosystem.
            </p>
          </div>

          <StaffUnitedFiveDiagram />

          {/* CARDS */}
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {services.map((item, index) => {
              const isActive = activeIndexes.includes(index);
              const Icon = item.icon;
              const previewTags = item.items.slice(0, 4);

              const subtitles = [
                "Clarity & control",
                "Structure & efficiency",
                "Customers & revenue",
                "Visibility & brand",
                "Setup & expansion",
                "One complete solution",
              ];

              return (
                <article
                  key={index}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className={`
          group
          relative
          overflow-hidden
          rounded-[28px]
          bg-white
          border border-[#dfe7f2]
          shadow-[0_12px_40px_rgba(11,27,51,0.06)]
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:-translate-y-1
          hover:shadow-[0_24px_60px_rgba(79,141,201,0.14)]
          hover:border-[#c9d8ee]
          flex flex-col
          ${index % 2 === 0 ? "slide-left active" : "slide-right active"}
        `}
                >
                  {/* HEADER */}
                  <div className="p-6">
                    <div className="flex flex-col items-start gap-4">
                      {/* ICON */}
                      <div
                        className="
                w-[64px] h-[64px]
                rounded-3xl
                flex items-center justify-center
                bg-[#edf4fd]
                border border-[#d7e6f8]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
              "
                      >
                        <Icon
                          className="
                  w-7 h-7
                  text-[#4f8dc9]
                  stroke-[1.8]
                  transition-transform duration-500
                  group-hover:scale-110
                "
                        />
                      </div>

                      {/* TEXT */}
                      <div className="w-full">
                        <p
                          className="
                  text-[11px]
                  uppercase
                  tracking-[0.20em]
                  font-semibold
                  text-[#7b8ba8]
                "
                        >
                          {String(index + 1).padStart(2, "0")} — {item.title}
                        </p>

                        <h3
                          className="
                  mt-2
                  text-xl
                  leading-tight
                  font-semibold
                  text-[#0b1b33]
                  min-h-[88px]
                "
                        >
                          {item.desc}
                        </h3>

                        <p className="mt-2 text-sm text-[#6f7f9b]">
                          {subtitles[index]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="border-t border-[#e8edf5]" />

                  {/* BODY */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* IMPACT */}
                    <p
                      className="
              text-sm
              leading-7
              text-[#6f7f9b]
              line-clamp-6
              min-h-[170px]
            "
                    >
                      {item.impact}
                    </p>

                    {/* TAGS */}
                    <div
                      className="
              mt-5
              flex flex-wrap gap-2
              min-h-[110px]
              content-start
            "
                    >
                      {previewTags.map((tag, i) => (
                        <span
                          key={i}
                          className="
                  px-3 py-1
                  rounded-full
                  text-xs font-medium
                  text-[#24324d]
                  bg-[#f8f7f2]
                  border border-[#e5e1d8]
                "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* SINGLE BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggleCard(index)}
                    className="
    mt-auto
    w-full
    flex items-center justify-center
    gap-3
    px-6 py-4
    border-t border-[#e8edf5]
    text-[#0b1b33]
    font-medium
    text-lg
    transition-colors duration-300
    hover:bg-[#f8fbff]
  "
                  >
                    {/* Arrow Icon */}
                    <span
                      className={`
      flex items-center justify-center
      w-7 h-7
      rounded-full
      bg-[#edf4fd]
      border border-[#d7e6f8]
      text-[#4f8dc9]
      shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
      transition-all duration-300 ease-out
      group-hover:scale-110
      ${isActive ? "rotate-180 bg-[#4f8dc9] border-[#4f8dc9]" : ""}
    `}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>

                    {/* Button Label */}
                    <span className="font-semibold tracking-[-0.02em]">
                      View all services
                    </span>
                  </button>

                  {/* EXPANDED CONTENT */}
                  <div
                    className={`
            overflow-hidden
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isActive ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}
          `}
                  >
                    <div className="px-6 pb-6 border-t border-[#eef3fa] bg-[#fbfdff]">
                      <ul className="mt-5 grid gap-3">
                        {item.items.map((service, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-6 text-[#0b1b33]"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4f8dc9]" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>

                      {/* {item.note && (
                        <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">
                            Important Note
                          </p>
                          <p className="text-sm leading-relaxed text-amber-800">
                            {item.note}
                          </p>
                        </div>
                      )} */}
                    </div>
                  </div>
                </article>
              );
            })}

            {/* CTA CARD */}
            <div className="lg:col-start-3 lg:row-start-2">
              <article
                className="
    group 
    relative
    overflow-hidden
    rounded-[28px]
    bg-gradient-to-br from-[#4f8dc9] to-[#0b1b33]
    text-white
    shadow-[0_20px_60px_rgba(79,141,201,0.25)]
    transition-all duration-500
    hover:-translate-y-1
    hover:shadow-[0_30px_80px_rgba(79,141,201,0.35)]
    flex flex-col min-h-[700px]"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div
                    className="
        w-[64px] h-[64px]
        rounded-3xl
        bg-white/10
        border border-white/20
        flex items-center justify-center
        backdrop-blur-md
      "
                  >
                    <MessageCircle className="w-7 h-7 text-white stroke-[1.8]" />
                  </div>

                  <p className="mt-6 text-[11px] uppercase tracking-[0.20em] font-semibold text-white/70">
                    LET&apos;S TALK
                  </p>

                  <h3
                    className="
        mt-2
        text-3xl
        leading-tight
        font-semibold
        min-h-[88px]
      "
                  >
                    Book a Free Consultation
                  </h3>

                  <p className="mt-2 text-white/80 min-h-[28px]">
                    Let&apos;s discuss your needs
                  </p>

                  <p
                    className="
        mt-8
        leading-8
        text-white/90
        line-clamp-6
        min-h-[170px]
      "
                  >
                    Not sure which services fit your business? Share your goals
                    and we&apos;ll recommend the right support structure.
                  </p>

                  <div
                    className="
        mt-5
        flex flex-wrap gap-2
        min-h-[110px]
        content-start
      "
                  >
                    {[
                      "Free consultation",
                      "Tailored recommendations",
                      "Fast response",
                      "No obligation",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="
            px-3 py-1
            rounded-full
            text-xs font-medium
            bg-white/10
            border border-white/20
          "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chỉ là link, KHÔNG có expanded content */}
                <a
                  href="/request-support"
                  className="
      mt-auto
      block
      w-full
      px-6 py-4
      border-t border-white/10
      text-lg
      font-semibold
      tracking-[-0.02em]
      hover:bg-white/5
      transition-colors duration-300
      text-center
    "
                >
                  Book a Free Consultation
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 max-w-5xl mx-auto text-center">
        <p className="text-lg md:text-xl text-[#4f8dc9] font-medium">
          Finance. Operations. Sale. Marketing. Growth
        </p>

        <p className="mt-4 text-[#0a1b33] leading-relaxed">
          A scalable operational support ecosystem designed around the five core
          functions every business needs to operate efficiently, support
          customers effectively, strengthen its brand, build operational
          resilience, and grow with confidence.
        </p>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16 fade-up active">
            <div className="flex justify-center lg:block">
              <span
                className="
      inline-block
      text-[11px] sm:text-xs
      px-4 py-1.5
      rounded-full
      font-semibold
      tracking-wide

      text-[#4f8dc9]

      bg-white/70
      backdrop-blur-md
      border border-[#0b1b33]/10

      shadow-[0_4px_20px_rgba(79,141,201,0.15)]
    "
              >
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl text-[#0b1b33] mt-4 font-light">
              Why we are your best <br /> choice
            </h2>
          </div>

          {/* GRID */}
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Proven Track Record",
                  desc: "We have built a reputation as a trusted and reliable partner in achieving business success.",
                  icon: Rocket,
                },
                {
                  title: "Tailored Solutions",
                  desc: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
                  icon: Network,
                },
                {
                  title: "Client-Centric Focus",
                  desc: "Your success is our priority. We prioritize understanding your business goals.",
                  icon: Target,
                },
                {
                  title: "Transparent Communication",
                  desc: "We believe in open and honest communication every step of the way.",
                  icon: MessageCircle,
                },
                {
                  title: "Dedicated Support",
                  desc: "Your success is our priority, and we're here to support you every step of the way.",
                  icon: Headphones,
                },
                {
                  title: "Expertise Across Industries",
                  desc: "Our team has extensive experience working across various industries.",
                  icon: Sparkle,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
            group
            rounded-2xl
            p-8
            text-center

            border border-[#e5e7eb]
            bg-white

            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            transition-all duration-500 active
${index % 2 === 0 ? "slide-left" : "slide-right"}
            hover:-translate-y-2
            hover:border-[#4f8dc9]
            hover:shadow-[0_20px_50px_rgba(79,141,201,0.15)]`}
                >
                  {/* ICON */}
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl border border-[#4f8dc9]/30 flex items-center justify-center group-hover:border-[#4f8dc9] transition">
                    {(() => {
                      const Icon = item.icon;
                      return (
                        <Icon
                          className="
          w-6 h-6 stroke-[1.5]
          text-[#4f8dc9]
          transition-all duration-300
          group-hover:scale-110
          group-hover:text-[#0b1b33]
        "
                        />
                      );
                    })()}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#0a1b33] text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-[#0b1b33] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-15">
        <div
          className="
        bg-gradient-to-b from-[#4f8dc9] to-[#0b1b33]
          text-white

          px-6 md:px-12
          py-6 md:py-8

          flex flex-col md:flex-row
          items-center
          justify-between
          gap-4

          rounded-t-2xl
          shadow-[0_-10px_40px_rgba(0,0,0,0.3)]
      "
        >
          {/* TEXT */}
          <AnimatedSection>
            <h3 className="text-lg md:text-2xl font-light">
              Ready to grow your business?
            </h3>
          </AnimatedSection>

          {/* BUTTON */}
          <AnimatedSection>
            <a
              href="/request-support"
              className="
          px-6 py-2.5 
          rounded-full
          border border-white/80

          text-sm md:text-base
          font-medium

          transition-all duration-700

          hover:bg-white
          hover:text-[#3f6fb5]
        "
            >
              Request Support
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
