"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { useEffect } from "react";
// Thêm vào đầu file
import { Building2, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  useEffect(() => {
    const el = document.querySelector(".fade-up");
    if (el) el.classList.add("active");
  }, []);

  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-10 ">
        {/* INTRO HERO */}
        <section
          className="
  relative pt-[90px]
  w-screen
h-[70vh] md:h-[75vh]
  left-1/2
  -translate-x-1/2
  overflow-hidden -mt-[80px]
"
        >
          <Image
            src="/team/hero-banner-team.webp"
            alt="About STAFF United"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#0a1b33]/60"></div>

          <div className="relative z-10 h-full flex items-center justify-center text-center px-6 ">
            <h1 className="text-4xl md:text-6xl text-white font-light fade-up">
              About Us
            </h1>
          </div>
        </section>

        {/* OUR STORY */}
        {/* OUR STORY */}
        {/* OUR STORY */}
        {/* OUR STORY */}
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {" "}
            {/* LEFT CONTENT */}
            {/* LEFT CONTENT */}
            <div className="space-y-5 md:space-y-6 fade-up active order-2 md:order-1">
              {/* SMALL LABEL */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 md:w-10 h-[2px] bg-[#4f8dc9]"></div>

                <p className="text-xs sm:text-sm md:text-base text-[#4f8dc9] font-medium tracking-wide">
                  Our Story
                </p>
              </div>

              {/* TITLE */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#103663] leading-snug md:leading-tight">
                Built to help businesses scale and women thrive
              </h2>

              {/* THAY TOÀN BỘ PHẦN TEXT CŨ BẰNG ĐOẠN NÀY */}
              <div className="space-y-4 md:space-y-5">
                {[
                  {
                    icon: Building2,
                    text: "STAFF United was created to help businesses scale efficiently across Finance, Operations, Sales, and Marketing.",
                  },
                  {
                    icon: Users,
                    text: "We saw talented women with exceptional capabilities who deserved structured opportunities and long-term growth.",
                  },
                  {
                    icon: TrendingUp,
                    text: (
                      <>
                        Today, we help businesses grow through our structured{" "}
                        <span className="text-[#4f8dc9] font-semibold">
                          “5-Core Support”™ Ecosystem
                        </span>{" "}
                        while creating meaningful careers for women.
                      </>
                    ),
                  },
                  {
                    icon: ShieldCheck,
                    text: "STAFF is built on structure, accountability, and continuity.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-4 border-b border-[#103663]/10 last:border-b-0 last:pb-0"
                    >
                      {/* ICON CIRCLE */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4f8dc9]/10 flex items-center justify-center">
                        <Icon
                          className="w-6 h-6 text-[#4f8dc9]"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* TEXT */}
                      <p className="flex-1 text-sm sm:text-base text-[#0b1b33]/80 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* RIGHT IMAGE */}
            <div className="slide-right active order-1 md:order-2">
              <div className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden shadow-lg">
                {" "}
                <Image
                  src="/about-us/women-team-working.avif"
                  alt="Women working together"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STAFF VALUES — Who We Are */}
        {/* STAFF VALUES — Who We Are */}
        <section className="space-y-6">
          {/* Title */}
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
                STAFF — Who We Are
              </h2>

              {/* BLUE DASH */}
              <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-5 rounded-full"></div>

              {/* SUBTITLE */}
              <p className="mt-5 text-sm sm:text-base text-[#0b1b33]/70 leading-relaxed">
                The women behind STAFF United and the values that shape our
                culture, mindset, professionalism, discipline, and approach to
                operational support.
              </p>
            </div>

            {/* STAFF LIST */}
            <div className="max-w-1xl mx-auto space-y-4 pt-8">
              {[
                {
                  letter: "S",
                  title: "Strong",
                  desc: "Resilient, reliable, and driven under pressure.",
                },
                {
                  letter: "T",
                  title: "Talented",
                  desc: "Skilled professionals delivering high standards of execution and support.",
                },
                {
                  letter: "A",
                  title: "Ambitious",
                  desc: "Growth-minded individuals committed to continuous improvement and long-term development.",
                },
                {
                  letter: "F",
                  title: "Focused",
                  desc: "Disciplined execution with strong attention to detail, coordination, and consistency.",
                },
                {
                  letter: "F",
                  title: "Female",
                  desc: "A women-powered operational ecosystem built around meaningful opportunities and professional growth.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
        flex items-stretch
        bg-white
        border border-[#0b1b33]/10
        rounded-2xl
        overflow-hidden
        transition-all duration-300
        hover:shadow-sm
        hover:border-[#4f8fcb]/40
        min-h-[112px] md:min-h-[120px]
      "
                >
                  {/* LETTER COLUMN - Same width and same height for all rows */}
                  <div
                    className="
          flex-shrink-0
          w-16 md:w-18
          bg-[#4f8fcb]
          flex items-center justify-center
          text-white
          font-semibold
          text-2xl md:text-3xl
          self-stretch
        "
                  >
                    {item.letter}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 px-6 py-5 flex items-center">
                    <p className="text-[#0b1b33] text-base md:text-lg leading-relaxed">
                      <span className="font-semibold">{item.title}</span>
                      <span className="mx-2">–</span>
                      <span className="text-[#0b1b33]/70">{item.desc}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* UNITED */}
        <AnimatedSection>
          <section className="pt-10 space-y-6">
            {/* SECTION HEADER */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] tracking-wide">
                Why UNITED Matters
              </h2>

              <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-5 rounded-full"></div>

              {/* <p className="mt-8 text-sm sm:text-base text-[#0b1b33]/70 leading-relaxed">
                UNITED reflects the shared standards, accountability, and
                alignment that allow our team to operate as one coordinated
                execution ecosystem.
              </p> */}
            </div>

            {/* VISUAL CARDS */}
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              {[
                {
                  number: "01",
                  title: "Shared Standards",
                  desc: "Every team member operates under the same expectations for quality, communication, accountability, and delivery.",
                  icon: "◈",
                },
                {
                  number: "02",
                  title: "Shared Responsibility",
                  desc: "Operational excellence is built around coordinated execution and collective accountability.",
                  icon: "◎",
                },
                {
                  number: "03",
                  title: "Collective Execution",
                  desc: "We operate as one aligned ecosystem focused on helping businesses move forward with confidence.",
                  icon: "▲",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
            relative
            bg-white
            border border-[#0b1b33]/10
            rounded-2xl
            p-6 md:p-8
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg
            hover:border-[#4f8fcb]/30
          "
                >
                  {/* NUMBER */}
                  <div className="absolute top-4 right-5 text-4xl font-light text-[#4f8fcb]/10">
                    {item.number}
                  </div>

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-[#4f8fcb]/10 flex items-center justify-center text-2xl text-[#4f8fcb] font-semibold mb-5">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[#0b1b33] mb-3">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-base text-[#0b1b33]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </section>
    </main>
  );
}
