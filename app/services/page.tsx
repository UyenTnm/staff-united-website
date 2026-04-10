"use client";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Headphones,
  MessageCircle,
  Network,
  Rocket,
  Sparkle,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Finance & Bookkeeping Support",
      desc: "Reliable financial operations support to keep your books accurate, organized, and up to date.",
      icon: "/services/icon-finance.png",
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
        "Vendor & Payment Coordination",
      ],
    },
    {
      title: "Administration & Business Support",
      desc: "Day-to-day operational and administrative support to help founders and teams stay focused on growth.",
      icon: "/services/icon-admin.png",
      items: [
        "Executive Assistant Support",
        "Calendar & Inbox Management",
        "Meeting Scheduling & Coordination",
        "Document Formatting & Preparation",
        "CRM Updates & Data Management",
        "Research & Information Gathering",
        "Internal Follow-Ups & Task Tracking",
        "SOP Documentation Support",
        "File & System Organization",
        "Reporting & Administrative Support",
        "Vendor & Operations Coordination",
      ],
    },
    {
      title: "Customer Support & Back-Office Operations",
      desc: "Consistent, professional support for your customers and internal processes.",
      icon: "/services/icon-cs.png",
      items: [
        "Email Customer Support",
        "Live Chat Support",
        "Helpdesk & Ticket Handling",
        "Order Processing Support",
        "Returns & Refund Coordination",
        "Customer Follow-Up Support",
        "Appointment Scheduling",
        "CRM Case Logging & Updates",
        "After-Sales Support",
        "Data Entry & Back-Office Processing",
        "Internal Support Coordination",
      ],
    },
    {
      title: "Marketing & Sales Support",
      desc: "Execution-focused support to keep your marketing and sales processes running consistently.",
      icon: "/services/icon-mkt.png",
      items: [
        "Social Media Scheduling",
        "Content Upload & Publishing",
        "Website Content Updates",
        "Email Campaign Setup Support",
        "CRM Cleanup & Maintenance",
        "Lead Research & List Building",
        "Sales Admin Support",
        "Proposal & Document Formatting",
        "Pipeline & Follow-Up Tracking",
        "Reporting & Dashboard Support",
        "Campaign Coordination Support",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      <section
        className="pt-28 md:pt-32 lg:pt-36
  pb-20 md:pb-24
  relative overflow-hidden"
      >
        {/* BACKGROUND GLOW */}
        <div className="hidden md:block absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#4f8dc9_0%,transparent_70%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* TITLE */}
          <div className="text-center mb-16 fade-up active">
            <h2 className="text-3xl md:text-5xl text-[#4f8dc9] font-light">
              Discover <br /> Our Services
            </h2>
          </div>

          {/* CARDS */}

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {services.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className={`
  cursor-pointer
  group
  relative
  overflow-hidden

  rounded-2xl
  p-10
  flex flex-col items-center text-center

  bg-white/5
  backdrop-blur-2xl
  border border-white/10
  ${index % 2 === 0 ? "slide-left active" : "slide-right active"}

  shadow-[0_10px_40px_rgba(0,0,0,0.3)]

  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

  hover:-translate-y-2
  lg:hover:scale-[1.02]
  hover:bg-white/10
  hover:border-white/20
  hover:shadow-[0_30px_80px_rgba(79,141,201,0.35)]

  active:scale-[0.98]
`}
                >
                  {/* ICON */}
                  <div className="w-18 h-18 mb-6 rounded-full bg-[#0a1b33] flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="
      w-16 h-16
      object-contain
      transition duration-500
      group-hover:scale-110
    "
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg md:text-xl text-[#4f8dc9] font-medium min-h-[56px]">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-[#0a1b33] min-h-[72px] mb-4">
                    {item.desc}
                  </p>

                  {/* PLUS */}
                  <div
                    className={`
    mt-2
    text-[#4f8dc9]
    text-xl

    transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

    ${isActive ? "scale-125" : "group-hover:scale-125"}
  `}
                  >
                    {isActive ? "−" : "+"}
                  </div>

                  {/* EXPAND CONTENT */}
                  <div
                    className={`
                overflow-hidden transition-all duration-700
                ${
                  isActive
                    ? "max-h-[1000px] mt-6 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
                  >
                    <div className="text-left w-full">
                      <p className="text-[#4f8dc9] font-semibold mb-2">
                        Services:
                      </p>

                      <ul className="list-disc pl-5 space-y-1 text-[#0a1b33]">
                        {item.items.map((service, i) => (
                          <li key={i}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
