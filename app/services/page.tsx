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
    // Structured Operations
    {
      title: "Structured Operations",
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
    // Targeted Sales
    {
      title: "Targeted Sales",
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
    // Accounting & Finance
    {
      title: "Accounting & Finance",
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
    // Focused Marketing
    {
      title: "Focused Marketing",
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
    // Future Expansion
    {
      title: "Future Expansion",
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
  ];

  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
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

  useEffect(() => {
    // Lấy tất cả card services (không bao gồm CTA card)
    const cards = Array.from(
      document.querySelectorAll(".service-card"),
    ) as HTMLElement[];

    // Reset chiều cao cũ
    cards.forEach((card) => {
      card.style.minHeight = "";
    });

    // Chia card theo từng hàng dựa trên vị trí top
    const rows = new Map<number, HTMLElement[]>();

    cards.forEach((card) => {
      const top = Math.round(card.getBoundingClientRect().top);

      // Gom các phần tử có cùng top vào một hàng
      let rowKey = top;
      for (const key of rows.keys()) {
        if (Math.abs(key - top) < 5) {
          rowKey = key;
          break;
        }
      }

      if (!rows.has(rowKey)) {
        rows.set(rowKey, []);
      }

      rows.get(rowKey)!.push(card);
    });

    // Với mỗi hàng:
    rows.forEach((rowCards) => {
      // Chỉ lấy các card đang active
      const activeCards = rowCards.filter((card) =>
        card.classList.contains("is-active"),
      );

      // Chỉ đồng bộ khi có ít nhất 2 card active
      if (activeCards.length < 2) return;

      // Tìm chiều cao lớn nhất
      const maxHeight = Math.max(
        ...activeCards.map((card) => card.scrollHeight),
      );

      // Gán minHeight cho các card active
      activeCards.forEach((card) => {
        card.style.minHeight = `${maxHeight}px`;
      });
    });
  }, [activeIndexes]);

  return (
    <main className="bg-white">
      {/* SERVICES */}
      <StaffUnitedFiveDiagram />

      {/* CARDS */}
      <div className="grid lg:grid-cols-3 gap-6 items-start pt-24 px-10">
        {/* <div className="grid lg:grid-cols-3 gap-6 items-stretch"> */}
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
                    service-card
                    ${isActive ? "is-active" : ""}
          group service-card
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
    text-base md:text-lg
    uppercase
    font-bold
    text-[#4f8dc9]
    drop-shadow-[0_1px_2px_rgba(79,141,201,0.15)]
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
              <div className="p-6 flex-1 flex flex-col min-h-0">
                {/* IMPACT */}
                <p className="service-impact text-sm leading-7 text-[#0b1b33] line-clamp-6">
                  {item.impact}
                </p>
              </div>

              {/* EXPANDED CONTENT */}

              {isActive && (
                <div
                  className={`
    overflow-hidden
    transition-[max-height]
    will-change-[max-height]
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isActive ? "max-h-[3000px]" : "max-h-0"}
  `}
                >
                  <div
                    className={`
      px-6 pb-6 border-t border-[#eef3fa] bg-[#fbfdff] service-expanded
      ${isActive ? "opacity-100" : "opacity-0"}
    `}
                  >
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
                  </div>
                </div>
              )}

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

      flex flex-col

      /* Chiều cao mới để cân bằng với các card services */
      h-[560px]
      md:h-[560px]
      lg:h-[560px]
    "
          >
            <div className="p-6 flex-1 flex flex-col min-h-0">
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
                Not sure which services fit your business? Share your goals and
                we&apos;ll recommend the right support structure.
              </p>
            </div>

            {/* CTA BUTTON */}
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

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <p
          className="
      text-lg md:text-2xl
      leading-relaxed md:leading-loose
      font-light
      tracking-[-0.01em]
      text-[#0b1b33]
      max-w-4xl mx-auto
      text-balance
    "
        >
          <span className="font-semibold text-[#4f8dc9]">
            A scalable operational support ecosystem
          </span>{" "}
          designed around the five core functions every business needs to
          operate efficiently, support customers effectively, strengthen its
          brand, build operational resilience, and grow with confidence.
        </p>
      </div>

      {/* STAFF — HOW WE EXECUTE */}
      <AnimatedSection>
        <section
          className="pt-10 space-y-6 px-6 md:px-10 py-12 bg-gradient-to-b
      from-[#06172d]
      via-[#0a1b33]
      to-[#103663]"
        >
          {/* SECTION HEADER */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light my-6 text-white tracking-wide">
              STAFF — How We Execute
            </h2>

            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>

            <p className="mt-8 text-lg md:text-xl font-medium text-[#7fc4ff] tracking-wide">
              Structure. Technology. Accountability. Flexibility. Foresight.
            </p>

            <p className="mt-6 text-sm sm:text-base text-white/80 leading-relaxed">
              At STAFF United, we believe execution is just as important as the
              people behind our brand and the services we provide.
            </p>

            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
              This is the operational philosophy behind how we deliver support
              consistently, efficiently, and at scale through our structured{" "}
              <span className="text-[#7fc4ff] font-semibold">
                “5-Core Support”™ Ecosystem
              </span>
              .
            </p>
          </div>

          {/* EXECUTION PRINCIPLES — 5 PREMIUM CARDS */}
          <div className="pt-10">
            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
              {[
                {
                  letter: "S",
                  title: "Structure",
                  desc: "Organized workflows and scalable processes for consistency and continuity.",
                },
                {
                  letter: "T",
                  title: "Technology",
                  desc: "AI, automation, and software-driven workflows that improve efficiency.",
                },
                {
                  letter: "A",
                  title: "Accountability",
                  desc: "Clear ownership, disciplined execution, and strong communication.",
                },
                {
                  letter: "F",
                  title: "Flexibility",
                  desc: "The ability to adapt to changing priorities and business needs.",
                },
                {
                  letter: "F",
                  title: "Foresight",
                  desc: "Anticipating future operational needs and growth opportunities.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 rounded-[28px] px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          transition-all duration-500 hover:-translate-y-2 hover:bg-white/12 cursor-pointer
          hover:border-[#7fc4ff]/35 hover:shadow-[0_30px_80px_rgba(79,141,201,0.22)] flex flex-col text-center min-h-[320px]"
                >
                  {/* TOP GLOW */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#7fc4ff]/60"></div>

                  {/* LETTER ORB */}
                  <div className="relative mx-auto mb-6">
                    {/* OUTER RING */}
                    <div className="absolute inset-0 rounded-full border border-[#7fc4ff]/25 scale-125"></div>

                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-full bg-[#4f8fcb]/20 blur-xl scale-150"></div>

                    {/* INNER CIRCLE */}
                    <div
                      className="
              relative
              w-24 h-24
              rounded-full
              bg-gradient-to-br
              from-[#67b4ff]
              to-[#2f6ea9]

              text-white
              flex items-center justify-center
              text-5xl
              font-semibold

              shadow-[0_20px_50px_rgba(79,143,203,0.35)]
              ring-1 ring-white/20

              transition-all duration-500
              group-hover:scale-110
            "
                    >
                      {item.letter}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>

                  {/* ACCENT LINE */}
                  <div className="w-12 h-[2px] bg-[#7fc4ff] mx-auto mb-6 rounded-full"></div>

                  {/* DESCRIPTION */}
                  <p className="text-base leading-relaxed text-white/75 flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CLOSING STATEMENT */}
          <div className="max-w-4xl mx-auto pt-4 text-center">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Together, these five execution principles shape how STAFF United
              delivers operational support with structure, accountability, and
              scalability.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* WHY CHOOSE US */}
      <section
        className="
    py-16 md:py-24 lg:py-24
    relative
    overflow-hidden
    bg-white
    text-[#0b1b33]
  "
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16 fade-up active">
            <div className="flex justify-center">
              <span
                className="
            inline-block
            text-[11px] sm:text-xs
            px-4 py-1.5
            rounded-full
            font-semibold
            tracking-wide
            uppercase
            text-[#4f8dc9]
            bg-[#4f8dc9]/10
            border border-[#4f8dc9]/15
            shadow-[0_4px_20px_rgba(79,141,201,0.08)]
          "
              >
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl text-[#0b1b33] mt-6 font-light">
              Why we are your best choice
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
                  className={`group
              relative
              overflow-hidden
              rounded-[28px]
              p-8
              text-center

              bg-white
              border border-[#0b1b33]/8

              shadow-[0_12px_40px_rgba(11,27,51,0.06)]

              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${index % 2 === 0 ? "slide-left active" : "slide-right active"}

              hover:-translate-y-2
              hover:scale-[1.01]
              hover:border-[#4f8dc9]/25
              hover:shadow-[0_28px_70px_rgba(79,141,201,0.14)]

              flex flex-col
            `}
                >
                  {/* ICON */}
                  <div
                    className="
                w-14 h-14
                mx-auto mb-6
                rounded-xl
                bg-[#4f8dc9]/10
                border border-[#4f8dc9]/20
                flex items-center justify-center
                transition-all duration-300
                group-hover:bg-[#4f8dc9]/15
                group-hover:border-[#4f8dc9]/35
              "
                  >
                    {(() => {
                      const Icon = item.icon;
                      return (
                        <Icon
                          className="
                      w-6 h-6
                      stroke-[1.5]
                      text-[#4f8dc9]
                      transition-all duration-300
                      group-hover:scale-110
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
                  <p className="text-[#0b1b33]/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="">
        <div
          className="
      bg-gradient-to-b
      from-[#4f8dc9]
      to-[#0b1b33]
      text-white

      px-8 md:px-16 lg:px-20
      py-10 md:py-14 lg:py-16

      flex flex-col md:flex-row
      items-center
      justify-between
      gap-6 md:gap-8

      shadow-[0_-20px_60px_rgba(0,0,0,0.35)]
    "
        >
          {/* TEXT */}
          <AnimatedSection>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight text-center md:text-left">
              Ready to grow your business?
            </h3>
          </AnimatedSection>

          {/* BUTTON */}
          {/* BUTTON */}
          <AnimatedSection>
            <a
              href="/request-support"
              className="
      px-7 md:px-8
      py-3 md:py-3.5
      rounded-full
      border border-white/80

      text-sm md:text-base lg:text-lg
      font-medium
      whitespace-nowrap

      transition-all duration-700

      hover:bg-white
      hover:text-[#3f6fb5]
      hover:shadow-lg
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
