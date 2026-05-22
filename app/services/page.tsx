"use client";
import AnimatedSection from "@/components/AnimatedSection";
import HowWeExecuteSection from "@/components/HowWeExecuteSection";
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
      desc: "Sales & Customer Support",
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
      desc: "Accounting & Financial Services",
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
      desc: "Marketing Execution, Brand & Media Production",
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
      desc: "Business Setup & Market Entry Coordition",
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
    const cards = Array.from(
      document.querySelectorAll(".service-card"),
    ) as HTMLElement[];

    // Reset chiều cao cũ
    cards.forEach((card) => {
      card.style.minHeight = "";
    });

    const detailBlocks = Array.from(
      document.querySelectorAll(".service-card.is-active .service-details"),
    ) as HTMLElement[];

    // Reset chiều cao chi tiết
    detailBlocks.forEach((detail) => {
      detail.style.minHeight = "";
    });

    // Gom card theo từng hàng
    const rows = new Map<number, HTMLElement[]>();

    cards.forEach((card) => {
      const top = Math.round(card.getBoundingClientRect().top);

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

    // Đồng bộ chiều cao phần chi tiết của các card active cùng hàng
    rows.forEach((rowCards) => {
      const activeCards = rowCards.filter((card) =>
        card.classList.contains("is-active"),
      );

      if (activeCards.length < 2) return;

      const activeDetails = activeCards
        .map(
          (card) =>
            card.querySelector(".service-details") as HTMLElement | null,
        )
        .filter(Boolean) as HTMLElement[];

      if (activeDetails.length < 2) return;

      // Tìm chiều cao lớn nhất của phần chi tiết
      const maxDetailHeight = Math.max(
        ...activeDetails.map((detail) => detail.scrollHeight),
      );

      // Ép tất cả phần chi tiết bằng nhau
      activeDetails.forEach((detail) => {
        detail.style.minHeight = `${maxDetailHeight}px`;
      });
    });
  }, [activeIndexes]);

  return (
    <main className="bg-white">
      {/* STAFF — HOW WE EXECUTE */}
      <AnimatedSection>
        <section
          className="
      pt-40
      py-12
      space-y-6
      px-6 md:px-10
      bg-gradient-to-b
      from-[#06172d]
      via-[#0a1b33]
      to-[#103663]
    "
        >
          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto">
            {/* BADGE */}
            <div className="flex justify-center">
              <span
                className="
            inline-block
            text-xs sm:text-sm
            px-5 py-2
            rounded-full
            font-semibold
            tracking-[0.18em]
            text-[#8FD3FF]
            bg-white/10
            backdrop-blur-md
            border border-white/10
            shadow-[0_4px_20px_rgba(79,141,201,0.15)]
          "
              >
                OUR SERVICES
              </span>
            </div>

            {/* LOGO */}
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
            <div className="mt-4 mb-10 text-center">
              <p
                className="
      text-[#8FD3FF] font-semibold text-lg sm:text-xl tracking-[0.04em] -mt-6 md:-mt-7"
              >
                5-Core Support™ Ecosystem
              </p>

              <p
                className="
      mt-2
      text-white
      text-sm sm:text-base
      leading-relaxed
    "
              >
                One scalable support system.
              </p>
            </div>
          </div>

          {/* EXECUTION PRINCIPLES — 5 PREMIUM CARDS */}
          <div className="pt-2">
            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
              {[
                {
                  letter: "S",
                  title: "Structure Operations",
                  desc: "Administrative & Business Operations.",
                },
                {
                  letter: "T",
                  title: "Targeted Sales",
                  desc: "Sales & Customer Support.",
                },
                {
                  letter: "A",
                  title: "Accounting & Finance",
                  desc: "Accounting & Financial Services.",
                },
                {
                  letter: "F",
                  title: "Focused Marketing",
                  desc: "Marketing Execution, Brand & Media Production.",
                },
                {
                  letter: "F",
                  title: "Future Expansion",
                  desc: "Business Setup & Market Entry Coordition.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              group
              relative
              overflow-hidden
              bg-white/8
              backdrop-blur-xl
              border border-white/15
              rounded-[28px]
              px-6 py-8
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              transition-all duration-500
              hover:-translate-y-2
              hover:bg-white/12
              cursor-pointer
              hover:border-[#7fc4ff]/45
              hover:shadow-[0_30px_80px_rgba(79,141,201,0.22)]
              flex flex-col
              text-center
              min-h-[320px]
            "
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
                  <h3
                    className="
                text-xl md:text-2xl
                font-semibold
                text-white
                mb-4
                leading-snug
                min-h-[56px]
                md:min-h-[72px]
                flex items-center justify-center
                text-center
              "
                  >
                    {item.title}
                  </h3>

                  {/* ACCENT LINE */}
                  <div className="w-12 h-[2px] bg-[#7fc4ff] mx-auto mb-6 rounded-full"></div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                text-sm md:text-base
                leading-relaxed
                text-white/75
                flex-1
                min-h-[48px]
                md:min-h-[80px]
                flex items-start justify-center
                text-center
              "
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CARDS */}
      <div
        className="
    grid grid-cols-1
    md:grid-cols-1
    lg:grid-cols-2
    gap-6
    items-start
    pt-24
    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10 2xl:px-12
  "
      >
        {/* <div className="grid lg:grid-cols-3 gap-6 items-stretch"> */}
        {services.map((item, index) => {
          const isActive = activeIndexes.includes(index);
          const Icon = item.icon;

          const subtitles = [
            "Clarity & control",
            "Structure & efficiency",
            "Customers & revenue",
            "Visibility & brand",
            "Setup & expansion",
          ];

          const serviceImages = [
            "/services/structured-operations.webp",
            "/services/targeted-sales.webp",
            "/services/accounting-finance.webp",
            "/services/focus-mkt.webp",
            "/services/future-expansion.webp",
          ];

          return (
            <article
              key={index}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`
        service-card 
        ${isActive ? "is-active" : ""}
        group
        relative
        overflow-hidden
        rounded-[36px]
        bg-white
        border border-[#dfe7f2]
        shadow-[0_20px_60px_rgba(11,27,51,0.08)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(79,141,201,0.14)]
        flex flex-col
        ${index % 2 === 0 ? "slide-left active" : "slide-right active"}
      `}
            >
              {/* TOP IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={serviceImages[index]}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* BOTTOM PANEL */}
              <div className="bg-[#0A2348] text-white flex flex-col flex-1">
                {/* COLLAPSED HEADER */}
                <button
                  type="button"
                  onClick={() => toggleCard(index)}
                  className="
    w-full
    px-5 sm:px-6
    py-5
    text-left
  "
                >
                  {/* ROW 1 */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* NUMBER */}
                    <div className="text-[#6F8DB8] text-sm font-semibold tracking-[0.18em] flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* LETTER CIRCLE */}
                    <div
                      className="
        w-12 h-12
        rounded-full
        bg-[#2C6BB2]
        flex items-center justify-center
        text-white
        text-2xl
        font-semibold
        flex-shrink-0
        transition-all duration-500
group-hover:scale-110
group-hover:shadow-[0_10px_30px_rgba(121,185,255,0.28)]
      "
                    >
                      {item.title.charAt(0)}
                    </div>

                    {/* TITLE + DESC */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-white/55 text-sm sm:text-base mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div
                      className={`
        flex-shrink-0
        flex items-center justify-center
        text-[#79B9FF]
        transition-transform duration-300
        ${isActive ? "rotate-180" : ""}
      `}
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  {/* ROW 2 - BADGE */}
                  <div className="mt-4 ml-[4.25rem]">
                    <span
                      className="
        inline-flex
        px-4 py-1.5
        rounded-full
        bg-[#214D82]
        text-[#79B9FF]
        text-sm
        font-semibold
        whitespace-nowrap
        transition-all duration-500
group-hover:bg-[#2A67A8]
group-hover:text-white
      "
                    >
                      {subtitles[index]}
                    </span>
                  </div>
                </button>

                {/* EXPANDED CONTENT */}
                <div
                  className={`
            overflow-hidden
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isActive ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                  {/* <div className="px-8 pb-8 h-full flex flex-col"> */}
                  <div
                    className={`
    px-8 pb-8 h-full
    flex flex-col service-details
  `}
                  >
                    {/* IMPACT */}
                    <p className="text-white/75 italic text-lg leading-8 mb-8">
                      {item.impact}
                    </p>

                    {/* DIVIDER */}
                    <div className="border-t border-white/10 mb-6" />

                    {/* LABEL */}
                    <p className="text-[#6F8DB8] text-xs font-semibold tracking-[0.28em] uppercase mb-6">
                      Services Included
                    </p>

                    {/* SERVICES GRID */}
                    <ul className="grid md:grid-cols-3 gap-x-8 gap-y-4">
                      {item.items.map((service, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-white/85 text-base leading-7"
                        >
                          <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#79B9FF] flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    {/* NOTE */}
                    {/* {item.note && (
                      <p className="mt-8 text-sm leading-7 text-white/60 italic">
                        {item.note}
                      </p>
                    )} */}

                    <div className="flex-1" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* CTA CARD WRAPPER */}
        <div
          className="
    lg:col-start-2
    h-full
  "
        >
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

      h-full
    "
          >
            {/* CONTENT */}
            <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col">
              <div className="w-[64px] h-[64px] rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                <MessageCircle className="w-7 h-7 text-white stroke-[1.8]" />
              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.20em] font-semibold text-white/70">
                LET&apos;S TALK
              </p>

              <h3 className="mt-3 text-2xl md:text-3xl lg:text-5xl leading-tight font-semibold">
                Book a Free Consultation
              </h3>

              <p className="mt-5 text-lg md:text-xl text-white/80">
                Let&apos;s discuss your needs
              </p>

              <p className="mt-8 text-base md:text-lg leading-8 text-white/90 max-w-xl">
                Not sure which services fit your business? Share your goals and
                we&apos;ll recommend the right support structure.
              </p>

              {/* Đẩy button xuống đáy */}
              <div className="flex-1" />
            </div>

            {/* CTA BUTTON */}
            <a
              href="/request-support"
              className="
        block
        w-full
        px-6
        py-5
        border-t
        border-white/10
        text-xl
        font-semibold
        tracking-[-0.02em]
        hover:bg-white/5
        transition-colors
        duration-300
        text-center
      "
            >
              Book a Free Consultation
            </a>
          </article>
        </div>
      </div>

      <HowWeExecuteSection />

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

      flex flex-col
      items-center
      justify-center text-center
      gap-6 md:gap-8

      shadow-[0_-20px_60px_rgba(0,0,0,0.35)]
    "
        >
          {/* TEXT */}
          <AnimatedSection>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight text-center">
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
