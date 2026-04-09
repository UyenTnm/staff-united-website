"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ArrowUpRight,
  ClipboardCheck,
  Headphones,
  Layers,
  Link2,
  Rocket,
  ShieldCheck,
  Smile,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Hero from "@/components/hero";
import { useInView } from "react-intersection-observer";
import CountUp from "@/components/CountUp";
import test from "node:test";

export default function Home() {
  const testimonials = [
    {
      content: `We’re currently working with STAFF UNITED and it’s been a great experience...`,
      name: "Wesley Anton",
      role: "CEO of MASX World Entertainment",
      avatar: "/logo-client/masx-logo.png",
    },
    {
      content: `Their team is highly skilled across key marketing areas...`,
      name: "Seth Foster",
      role: "President of InnPro USA",
      avatar: "/logo-client/innprousa.png",
    },
    {
      content: `STAFF United Team has been an invaluable partner for our business...`,
      name: "Melissa K.",
      role: "Owner of Bloom Beauty Spa",
      avatar: "/logo-client/bloom-spa.png",
    },
    {
      content: `Their collaborative approach, attention to detail...`,
      name: "Ryan Johnson",
      role: "Project Manager of Modern Architecture",
      avatar: "/logo-client/modern-architecture.png",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <main className="bg-white w-full">
      {/* SECTION 1 — HERO (VISUAL ENHANCED) */}

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      {/* SECTION 2 — POSITIONING (FULL GREY) */}

      <AnimatedSection>
        <section className="bg-[#f3f4f6] py-16 sm:py-20 md:py-32" ref={ref}>
          <div className="max-w-8xl mx-auto px-6">
            {/* MAIN GRID */}
            <div className="grid xl:grid-cols-2 gap-10 md:gap-20 items-center">
              {/* IMAGE  */}
              <div className="grid grid-cols-[1.5fr_1fr] gap-4 items-center">
                {/* COLUMN 1 - BIG IMAGE */}
                <div className="rounded-[10px] overflow-hidden group h-full">
                  <img
                    src="../home/design-to-scale-1.jpeg"
                    className="w-full h-full object-cover object-[center_top] transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* COLUMN 2 - 2 SMALL IMAGES */}
                <div className="grid grid-rows-2 gap-4 h-full">
                  {/* IMAGE 2 */}
                  <div className="rounded-[10px] overflow-hidden group">
                    <img
                      src="../home/design-to-scale-2.jpeg"
                      className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* IMAGE 3 */}
                  <div className="rounded-[10px] overflow-hidden group">
                    <img
                      src="../home/design-to-scale-3.jpeg"
                      className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="space-y-6">
                {/* HEADING */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#0b1b33]">
                  Built for{" "}
                  <span className="text-[#4f8fcb]">
                    Execution. Designed to Scale.{" "}
                  </span>
                </h2>

                {/* PARAGRAPH */}
                {/* <p className="text-[#0b1b33] leading-7 text-sm sm:text-[15px] max-w-lg">
                  STAFF United integrates directly into your operations,
                  delivering structured offshore execution across administrative
                  support, operations, and core business functions. <br />
                  Our work is guided by clear standards, disciplined workflows,
                  and shared accountability - ensuring consistent, high-quality
                  outcomes as your business grows.
                </p> */}
                <div className="space-y-3 sm:space-y-4 w-full">
                  <p className="text-[#0b1b33] leading-7 text-sm sm:text-[15px]  md:text-[17px]">
                    STAFF United integrates directly into your operations,
                    delivering structured offshore execution across
                    administrative support, operations, and core business
                    functions.
                  </p>

                  <p className="text-[#0b1b33] leading-7 text-sm sm:text-[15px] md:text-[17px]">
                    Our work is guided by clear standards, disciplined
                    workflows, and shared accountability - ensuring consistent,
                    high-quality outcomes as your business grows.
                  </p>
                </div>

                {/* STATS */}
                {/* <div className="grid grid-cols-3 gap-10 pt-6"> */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 pt-4 md:pt-6 text-center md:text-left">
                  {[
                    { number: 15, suffix: "+", label: "Years Experience" },
                    { number: 10, suffix: "+", label: "Projects Completed" },
                    {
                      number: 100,
                      suffix: "%",
                      label: "Client Satisfaction",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="opacity-0 animate-fadeUp"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <p className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#0b1b33]">
                        <CountUp end={item.number} start={inView} />
                        {item.suffix}
                      </p>

                      <p className="text-xs sm:text-sm text-[#0b1b33]/60 mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 4 — WHAT WE DELIVER (WHITE) */}
      <AnimatedSection>
        <section className="bg-white py-16 sm:py-20 md:py-32">
          <div className="max-w-8xl mx-auto px-5 md:px-8 xl:px-12">
            <div
              className="
      grid
      grid-cols-1
      lg:grid-cols-[auto_1fr_auto]
      lg:grid-rows-[auto_auto_auto]

      gap-x-10 gap-y-6
      text-center lg:text-left
    "
            >
              {/* SERVICES */}
              <div
                className="
    lg:col-start-1 lg:row-start-1
    flex justify-center lg:block
  "
              >
                <span
                  className="
      inline-block
      text-[11px] sm:text-xs
      px-4 py-1.5
      rounded-full

      font-semibold tracking-wide

      text-[#4f8fcb]

      bg-white/70
      backdrop-blur-md
      border border-[#0b1b33]/10
      shadow-[0_4px_20px_rgba(79,143,203,0.15)]
    "
                >
                  SERVICES
                </span>
              </div>

              {/* H2 */}
              <h2
                className="
        lg:col-start-2 lg:row-start-1
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        font-semibold
        text-[#0b1b33]
        leading-tight

        mx-auto lg:mx-0
        max-w-2xl
      "
              >
                Structured Offshore Support for Growing Businesses
              </h2>

              {/* PARAGRAPH */}
              <p
                className="
        lg:col-start-2 lg:row-start-2
        text-[#0b1b33]
        leading-7
        text-sm sm:text-[15px] md:text-base

        mx-auto lg:mx-0
        max-w-xl
      "
              >
                We provide reliable support across finance, administration,
                customer operations, and marketing execution — so you can focus
                on growth.
              </p>

              {/* BUTTON */}
              <div
                className="
        lg:col-start-3 lg:row-start-3
        flex justify-center lg:justify-end
        mt-2 lg:mt-0
      "
              >
                <a
                  href="/services"
                  className="
          group
          inline-flex items-center gap-2
          px-5 sm:px-6 py-2.5 sm:py-3
          rounded-full
          bg-[#4f8fcb]
          text-[#0b1b33]
          text-sm sm:text-base
          font-medium

          transition-all duration-700
          hover:bg-[#103663]
          hover:text-white
        "
                >
                  VIEW ALL SERVICES
                  <span
                    className="
            rotate-[-45deg]
            transition-transform duration-700 ease-out
            group-hover:rotate-0
          "
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-8xl mx-auto px-6">
            {[
              {
                title: "Finance & Bookkeeping Support",
                desc: "Reliable financial operations support to keep your books accurate, organized, and up to date.",
                icon: "💰",
                href: "/services",
              },
              {
                title: "Executive Admin & Business Support",
                desc: "Day-to-day operational and administrative support to help founders and teams stay focused on growth.",
                icon: "📋",
                href: "/services",
              },
              {
                title: "Social Marketing & Sales Support",
                desc: "Execution-focused support to keep your marketing and sales processes running consistently.",
                icon: "📢",
                href: "/services",
              },
              {
                title: "Customer Support & Back-Office Operations",
                desc: "Consistent, professional support for your customers and internal processes.",
                icon: "🗂️",
                href: "/services",
              },
            ].map((item, i) => (
              <a
                href={item.href}
                key={i}
                className="
        group
        rounded-2xl
        p-6 sm:p-8

        bg-[#f8fafc]
        border border-[#0b1b33]/10

        transition-all duration-300
        hover:border-[#4f8fcb]/40
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] cursor-pointer
      "
              >
                {/* ICON */}
                <div
                  className="
        w-10 h-10
        rounded-lg
        bg-[#4f8fcb]/10
        flex items-center justify-center
        mb-6
      "
                >
                  <span className="text-[#4f8fcb] text-lg">{item.icon}</span>
                </div>

                {/* TITLE */}
                <h3
                  className="
        text-lg sm:text-xl
        font-semibold
        text-[#0b1b33]
        transition-colors
      "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
        text-[#0b1b33]
        mt-3
        text-base
        leading-relaxed
      "
                >
                  {item.desc}
                </p>

                {/* CTA */}
                {/* <div className="mt-6 text-sm font-medium flex items-center gap-2 text-[#4f8dc9]/70 group-hover:text-[#4f8fcb] transition-colors">
                  Learn More
                  <span className="rotate-[-45deg]">→</span>
                </div> */}

                <div className="mt-6 flex items-center gap-2.5 ">
                  {/* TEXT */}
                  <span
                    className="
    text-xs tracking-wider font-medium uppercase
    text-[#0b1b33]
    transition-colors duration-700
    group-hover:text-[#4f8fcb]
  "
                  >
                    LEARN MORE
                  </span>

                  {/* ICON */}
                  <div
                    className="
    w-7 h-7 rounded-full
    border border-[#0b1b33]/30
    text-[#0b1b33]

    flex items-center justify-center

    transition-all duration-300 ease-out

    group-hover:bg-[#4f8fcb]
    group-hover:border-[#4f8fcb]
    group-hover:text-white
  "
                  >
                    {/* <span
                      className="
      flex items-center justify-center
      leading-none

      rotate-[-45deg]
      transition-transform duration-300 ease-out
      group-hover:rotate-0
    "
                    >
                      →
                    </span> */}

                    <ArrowUpRight
                      size={14}
                      className="
    transition-transform duration-300
    -rotate-95 group-hover:rotate-45
  "
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 5 — HOW CLIENTS WORK WITH US (LIGHT GREY) ->> BRANDS COLLABORATIONS */}
      <AnimatedSection>
        <section className="bg-gradient-to-b from-[#0a1b33] via-[#0a1b33] to-[#103663] py-24 text-white overflow-hidden">
          <div className="max-w-8xl mx-auto px-6 space-y-16">
            {/* HEADER */}
            <div className="text-center space-y-4">
              <span
                className="
          inline-block
          text-xs px-4 py-1.5 font-semibold
          rounded-full
          bg-white/5 backdrop-blur-md
          border border-white/10
          text-[#4f8fcb]
        "
              >
                BRANDS COLLABORATIONS
              </span>

              <h2 className="text-3xl md:text-5xl font-semibold">
                Brands that trust us
              </h2>
            </div>

            {/* LOGO MARQUEE */}
            <div className="relative overflow-hidden">
              <div className="flex gap-6 marquee-track">
                {[...Array(2)].map((_, loop) => (
                  <div key={loop} className="flex gap-6">
                    {[
                      "bloom-spa.png",
                      "color-studio.png",
                      "masx.jpg",
                      "innpro.png",
                      "masx-logo.png",
                      "modern-architecture.png",
                      "SANITIZE-SQUAD-Logo.png",
                      "true-flow.png",
                    ].map((logo, i) => (
                      <div
                        key={i}
                        className="
                    flex items-center justify-center
                    px-8 py-4
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    backdrop-blur-md
                    min-w-[160px]
                  "
                      >
                        <img
                          src={`/logo-client/${logo}`}
                          className="h-8 sm:h-10 max-w-[120px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* TESTIMONIALS */}
            <div className="relative h-[400px] overflow-hidden">
              {/* WRAPPER CONTROL WIDTH */}
              <div className="max-w-2xl mx-auto px-4 sm:px-0">
                <div className="testimonial-wrapper">
                  <div className="flex flex-col testimonial-scroll">
                    {/* <div className="flex flex-col gap-6 testimonial-scroll"> */}
                    {[...testimonials, ...testimonials].map((item, i) => (
                      <div
                        key={i}
                        className="p-6 mb-6 rounded-2xl testimonial-item min-h-[140px] bg-white/5 border border-[#4a596e]/30 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                      >
                        {/* STAR */}
                        <div className="text-[#4f8fcb] text-xl mb-2">★★★★★</div>

                        {/* CONTENT */}
                        <p className="text-sm text-white/80 leading-relaxed">
                          {item.content}
                        </p>

                        {/* USER */}
                        <div className="flex items-center gap-3 mt-4">
                          <img
                            src={item.avatar}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-white/50">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-16 space-y-10">
              {/* 3 CARDS */}
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Proven Track Record",
                    desc: "We have built a reputation as a trusted and reliable partner in achieving business success.",
                    icon: Rocket,
                  },
                  {
                    title: "Tailored Solutions",
                    desc: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
                    icon: Link2,
                  },
                  {
                    title: "Client-Centric Focus",
                    desc: "Your success is our priority. We prioritize understanding your business goals.",
                    icon: Target,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="
            group
            p-6 rounded-2xl

            bg-white/5
            border border-[#4a596e]/30
            backdrop-blur-md

           
             text-center items-center
          "
                    >
                      {/* ICON */}
                      <div
                        className="
              w-10 h-10 mb-5
              rounded-xl 
              flex items-center justify-center
              bg-[#4f8dc9]/10
              text-[#4f8dc9] border
              border-[#4f8dc9] mx-auto"
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p className="text-sm text-white/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* TAGS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3">
                {[
                  {
                    label: "Continuous Innovation",
                    icon: Sparkles,
                  },
                  {
                    label: "Dedicated Support",
                    icon: Headphones,
                  },
                  {
                    label: "Positive Client Experiences",
                    icon: Smile,
                  },
                  {
                    label: "Commitment to Excellence",
                    icon: ShieldCheck,
                  },
                ].map((tag, i) => {
                  const Icon = tag.icon;

                  return (
                    <span
                      key={i}
                      className="
          flex items-center justify-center gap-2

          text-xs
          px-4 py-2
          rounded-full

          bg-white/5
          border border-[#4a596e]/30
          backdrop-blur-md

          text-white

          transition-all duration-300

          
        "
                    >
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                      {tag.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 6 — WHY WE BUILT THIS */}
      <AnimatedSection>
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            {/* TITLE */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
                Why We Built This
              </h2>

              <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* TEXT */}
              <div className="space-y-4 text-lg text-[#0b1b33]/80 leading-relaxed text-left max-w-xl mx-auto">
                <p>
                  STAFF United was built in Vietnam by women who understood what
                  it means to work hard without always being seen.
                </p>

                <p>
                  We saw talented women carrying responsibility balancing work,
                  family, and expectation often without access to stable
                  opportunities, fair systems, or long-term growth.
                </p>

                <p>
                  This company exists to change that. Not through charity. Not
                  through shortcuts. But through real work, clear standards, and
                  shared accountability.
                </p>

                <p>
                  By supporting international businesses with disciplined
                  execution, we create professional, long-term opportunities for
                  women - while delivering reliability our clients can trust.
                </p>

                <p>
                  Supporting women is not separate from how we work. It is built
                  into the standard.
                </p>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-md aspect-square overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/team/why-we-built.webp"
                    alt="Women working together"
                    className="rounded-xl object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 7 — THE STANDARD (LIGHT GREY) */}
      <AnimatedSection>
        <section className="bg-[#f8f9fb] py-24">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
                The Standard
              </h2>
              <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-[#0b1b33]/80 leading-relaxed">
              <p>Anyone can promise quality. Very few can enforce it.</p>

              <p>
                We define a standard and apply it across people, tasks, and
                timelines. That is how we deliver consistent outcomes - and how
                we scale without drift.
              </p>

              <p>
                Being based in Vietnam allows us to operate efficiently and
                offer competitive pricing, while maintaining the level of
                quality expected by international businesses.
              </p>
            </div>

            <div className="pt-4 text-center">
              <a
                href="/the-standard"
                className="inline-block px-6 py-3 bg-[#0b1b33] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition text-center"
              >
                View The Standard
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 8 — HOW IT WORKS (WHITE) */}
      <AnimatedSection>
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
                How It Works
              </h2>
              <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 mb-4 rounded-full"></div>
            </div>

            <div className="relative">
              {/* Horizontal line - desktop only */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-[#d1d5db]" />

              <div className="grid md:grid-cols-3 gap-12 relative">
                {/* STEP 1 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#4f8fcb] flex items-center justify-center text-[#4f8fcb] font-semibold text-sm bg-white">
                      01
                    </div>
                    <div className="h-px bg-[#d1d5db] flex-1 md:hidden" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#0b1b33]">
                    Request
                  </h3>

                  <p className="text-[#0b1b33]/75 text-lg leading-relaxed">
                    Tell us what you need, when you need it, and what success
                    looks like.
                  </p>
                </div>

                {/* STEP 2 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#4f8fcb] flex items-center justify-center text-[#4f8fcb] font-semibold text-sm bg-white">
                      02
                    </div>
                    <div className="h-px bg-[#d1d5db] flex-1 md:hidden" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#0b1b33]">
                    Scope + Assign
                  </h3>

                  <p className="text-[#0b1b33]/75 text-lg leading-relaxed">
                    We confirm deliverables and timelines, then assign the right
                    team under one shared standard.
                  </p>
                </div>

                {/* STEP 3 */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#4f8fcb] flex items-center justify-center text-[#4f8fcb] font-semibold text-sm bg-white">
                      03
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#0b1b33]">
                    Deliver + Review
                  </h3>

                  <p className="text-[#0b1b33]/75 text-lg leading-relaxed">
                    Work is delivered with internal review, clear communication,
                    and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SECTION 9 — MODERN SYSTEMS (LIGHT GREY) */}
      <AnimatedSection>
        <section className="bg-[#f8f9fb] py-24">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
                Modern Systems
              </h2>
              <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
            </div>

            <p className="text-[#0b1b33]/80 text-lg leading-relaxed">
              We use structured workflows and modern tooling - including
              AI-assisted drafting and quality support - to improve speed and
              consistency. Final delivery is always reviewed by people and
              delivered under one shared standard.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* TRUSTED BY */}
      {/* <AnimatedSection>
        <section className="py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
                Trusted by
              </h2>
              <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex gap-16 marquee whitespace-nowrap items-center">
                {[...clientLogos, ...clientLogos].map((client, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center w-48 h-20"
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain max-h-full w-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* SECTION 10 — CTA STRIP (FULL WIDTH STRIP) */}
      <AnimatedSection>
        <section className="bg-[#f8f9fb] py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div>
              <Image
                src="/team/team-square.webp"
                alt="Women team working"
                width={500}
                height={500}
                className="rounded-xl shadow-md object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

            {/* TEXT */}
            <div className="space-y-6 text-center md:text-center">
              <p className="text-lg md:text-2xl font-medium text-[#0b1b33]">
                Whether You’re Building a Dedicated Team or Need Flexible
                Support, Send a Request and We’ll Confirm Next Steps.
              </p>

              <a
                href="/request-support"
                className="inline-block px-6 py-3 bg-[#0b1b33] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition"
              >
                Request Support
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
