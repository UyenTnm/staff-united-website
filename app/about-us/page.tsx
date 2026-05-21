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
      {/* <section className="max-w-5xl mx-auto px-6 py-10 space-y-10 "> */}
      <section className="w-full py-10 space-y-10">
        {/* INTRO HERO */}
        <section
          className="
  relative
  w-screen
  h-[72vh] md:h-[78vh]
  min-h-[620px]
  left-1/2
  -translate-x-1/2
  overflow-hidden
  -mt-[80px]
  pt-[90px]
"
        >
          {/* Background Image */}
          <Image
            src="/team/hero-banner-team.webp"
            alt="STAFF United Group Team"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0A1B33]/65 z-[1]" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08172b]/80 via-[#0a1b33]/55 to-[#0a1b33]/25 z-[2]" />

          {/* Content */}
          <div className="absolute inset-0 z-[10] flex items-center">
            {/* Giảm max-width và tăng padding trái để nội dung dịch sang trái giống Home */}
            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 xl:px-24">
              {/* Giảm max-width của khối text để không nằm quá giữa */}
              <div className="max-w-5xl text-left">
                {/* Eyebrow */}
                <div className="flex items-center gap-4 md:gap-6 mb-6">
                  <span
                    className="
            text-[#5EA2FF]
            text-2xl md:text-4xl lg:text-4xl
            font-light
            tracking-tight
          "
                    style={{ fontFamily: "var(--font-cormorant, serif)" }}
                  >
                    Our Story
                  </span>

                  <span className="h-[2px] w-20 md:w-36 bg-[#5EA2FF] rounded-full" />
                </div>

                {/* Main Heading */}
                <h1
                  className="
          text-white
          font-bold
          leading-[1.05]
          tracking-[-0.03em]
          text-2xl sm:text-4xl md:text-6xl lg:text-5xl
          mb-6
        "
                >
                  All Women. All Business.
                </h1>

                {/* Subtitle */}
                <p
                  className="
          text-white/95
          font-light
          leading-tight
          max-w-5xl
          text-lg sm:text-base md:text-lg lg:text-2xl
        "
                >
                  A women-powered offshore execution engine — built for
                  businesses
                  <br className="hidden md:block" />
                  that need to scale with structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-10">
            {/* TOP: LEFT CONTENT + RIGHT IMAGE */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              {/* LEFT CONTENT */}
              <div className="fade-up active h-full flex flex-col justify-between">
                <div>
                  {/* SECTION LABEL */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-[2px] bg-[#4f8dc9]" />
                    <span
                      className="text-[#4f8dc9] text-2xl md:text-3xl font-light"
                      style={{ fontFamily: "var(--font-cormorant, serif)" }}
                    >
                      Our Story
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2
                    className="
          text-[#103663]
          text-3xl md:text-4xl lg:text-5xl
          font-medium
          leading-[1.12]
          tracking-[-0.02em]
          mb-6
        "
                    style={{ fontFamily: "var(--font-cormorant, serif)" }}
                  >
                    Built to help businesses scale
                    <br />— and women thrive.
                  </h2>

                  {/* BLUE CALLOUT */}
                  <div className="border-l-[3px] border-[#4f8dc9] pl-4 mb-6">
                    <p className="text-[#4f8dc9] text-xl md:text-2xl font-light">
                      All Women. All Business.
                    </p>
                  </div>

                  {/* BODY CONTENT */}
                  <div className="space-y-9 text-base md:text-lg text-[#0b1b33]/85 leading-relaxed">
                    <p>
                      STAFF United was born out of a simple but important
                      reality:
                    </p>

                    <p>
                      Businesses worldwide face mounting pressure to scale
                      faster and operate leaner — across Finance, Operations,
                      Sales, and Marketing — often without the infrastructure or
                      support capacity to do so sustainably.
                    </p>

                    <p className="max-w-[720px] text-base md:text-lg text-[#0b1b33]/85 leading-8">
                      At the same time, we saw something equally clear: highly
                      capable women were already doing the work that keeps
                      businesses moving — coordinating operations, managing
                      workflows, driving execution behind the scenes — yet often
                      without structured pathways for long-term
                      professional&nbsp;growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="slide-right active h-full">
                <div
                  className="
        relative
        w-full
        h-full
        min-h-[620px]
        overflow-hidden
        rounded-[2.5rem]
        shadow-[0_20px_60px_rgba(11,27,51,0.08)]
      "
                >
                  <Image
                    src="/about-us/our-story.jpeg"
                    alt="Women working together"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* QUOTE BOX */}
            <div className="mt-12 md:mt-14">
              <div
                className="
          relative
          bg-[#E7EDF5]
          rounded-3xl
          px-6 md:px-10
          py-6 md:py-8
        "
              >
                {/* LEFT ACCENT BAR */}
                <div className="absolute left-0 top-5 bottom-5 w-[3px] bg-[#4f8dc9] rounded-full" />

                <p className="text-[#0b1b33] text-base md:text-xl leading-snug italic font-medium">
                  Strong businesses and strong teams both depend on the same
                  foundation: structure, continuity, accountability, and
                  coordinated execution.
                </p>
              </div>
            </div>

            {/* INSIGHT PARAGRAPH */}
            <div className="mt-10">
              <p className="text-base md:text-lg text-[#0b1b33]/85 leading-relaxed">
                That insight became the foundation of STAFF United — a
                women-powered offshore execution engine helping global
                businesses grow through our structured{" "}
                <span className="font-semibold text-[#103663]">
                  “5-Core Support”™ Ecosystem
                </span>
                , while creating meaningful, long-term careers for talented
                women.
              </p>
            </div>

            {/* MORE THAN A NAME */}
            <div className="text-center mt-10">
              <h3 className="text-[#4f8dc9] text-2xl md:text-3xl font-light uppercase tracking-wide">
                More Than a Name
              </h3>
            </div>

            {/* FINAL PARAGRAPH */}
            <div className="mt-8">
              <p className="text-base md:text-lg text-[#0b1b33]/85 leading-relaxed">
                STAFF evolved into more than our name — it became a connected
                operational framework representing who we are, what we provide,
                and how we execute across every part of our organization.
              </p>
            </div>
          </div>
        </section>

        {/* STAFF VALUES — Who We Are */}
        <section className="space-y-6 bg-[#F3F6FA] pt-20 md:pt-20">
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
            {/* STAFF LIST */}
            {/* STAFF LIST */}
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 pt-6 md:pt-8 px-4 sm:px-6 md:px-8">
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
        rounded-xl sm:rounded-2xl
        overflow-hidden
        transition-all duration-300
        hover:shadow-sm
        hover:border-[#4f8fcb]/40
        min-h-[88px]
        sm:min-h-[100px]
        md:min-h-[120px]
      "
                >
                  {/* LETTER COLUMN */}
                  <div
                    className="
          flex-shrink-0
          w-12
          sm:w-14
          md:w-16
          lg:w-[72px]
          bg-[#4f8fcb]
          flex items-center justify-center
          text-white
          font-semibold
          text-xl
          sm:text-2xl
          md:text-3xl
          self-stretch
        "
                  >
                    {item.letter}
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
          flex-1
          px-4 py-4
          sm:px-5 sm:py-4
          md:px-6 md:py-5
          flex items-center
        "
                  >
                    <p
                      className="
            text-[#0b1b33]
            text-sm
            sm:text-base
            md:text-lg
            leading-6
            sm:leading-7
            md:leading-relaxed
          "
                    >
                      <span className="font-semibold">{item.title}</span>
                      <span className="mx-1.5 sm:mx-2">–</span>
                      <span className="text-[#0b1b33]/70">{item.desc}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BY THE NUMBERS */}
            {/* BY THE NUMBERS — FULL WIDTH */}
            {/* BY THE NUMBERS — FULL WIDTH */}
            <section className="w-screen relative left-1/2 -translate-x-1/2 mt-16 md:mt-20">
              <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10 space-y-5 md:space-y-6">
                  {/* Section Label */}
                  <p
                    className="
          text-[#4f8fcb]
          text-xs sm:text-sm md:text-base
          font-semibold
          tracking-[0.18em] md:tracking-[0.22em]
          uppercase
        "
                  >
                    By the Numbers
                  </p>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {[
                      {
                        value: "100%",
                        label: "Women-led delivery teams",
                      },
                      {
                        value: "5-Core",
                        label: "Support™ Ecosystem pillars",
                      },
                      {
                        value: "5",
                        label: "Verticals covered",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
              bg-[#07244A]
              text-white
              rounded-xl md:rounded-2xl
              px-5 sm:px-6 md:px-8
              py-5 sm:py-6 md:py-7
            "
                      >
                        <div
                          className="
                text-2xl sm:text-3xl md:text-4xl
                font-semibold
                leading-none
                mb-2 md:mb-3
              "
                        >
                          {item.value}
                        </div>

                        <p
                          className="
                text-white/80
                text-sm sm:text-base md:text-lg
                leading-snug
              "
                        >
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Founder Quote — FULL WIDTH */}
                  <section className="w-screen relative left-1/2 -translate-x-1/2">
                    <div
                      className="
            relative
            overflow-hidden
            bg-[#254A82]
            px-5 sm:px-6 md:px-10 lg:px-16
            py-10 sm:py-12 md:py-16 lg:py-20
          "
                    >
                      {/* Left Accent Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] md:w-[4px] bg-[#6CB6FF]" />

                      {/* Subtle Background Pattern */}
                      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
                        <div
                          className="
                absolute inset-0
                flex items-center justify-center
                text-[8rem] sm:text-[12rem] md:text-[20rem] lg:text-[28rem]
                font-bold
                text-white
                whitespace-nowrap
              "
                        >
                          STAFF
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-10">
                        <div className="max-w-6xl mx-auto">
                          <blockquote
                            className="
                  text-white
                  italic
                  font-medium
                  leading-snug md:leading-tight
                  text-base sm:text-base md:text-2xl lg:text-2xl
                "
                          >
                            “We didn’t just build a business — we built a home
                            for talented women to grow, lead, and deliver
                            world-class work.”
                          </blockquote>

                          <p
                            className="
                  mt-5 sm:mt-6 md:mt-8
                  text-[#6CB6FF]
                  uppercase
                  tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.18em]
                  text-sm sm:text-base md:text-xl lg:text-xl
                  font-medium
                "
                          >
                            — The STAFF United Founding Team.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
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
            </div>

            {/* VISUAL CARDS */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 px-6 sm:px-6 md:px-8">
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
