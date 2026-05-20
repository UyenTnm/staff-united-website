"use client";

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
import { useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Link from "next/link";
import StaffUnitedFiveDiagram from "@/components/StaffUnitedFiveDiagram";

export default function Home() {
  const testimonials = [
    {
      content: `We’re currently working with STAFF UNITED and it’s been a great experience...`,
      name: "Wes Anthony",
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

  const dateRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    const input = dateRef.current;
    if (!input) return;

    try {
      input.showPicker();
    } catch {
      input.click();
    }
  };

  const [phone, setPhone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .slide-left, .slide-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="bg-white w-full">
        {/* SECTION 1 — HERO (VISUAL ENHANCED) */}

        {/* <AnimatedSection> */}
        <Hero />
        {/* </AnimatedSection> */}

        <StaffUnitedFiveDiagram />

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
                    <Image
                      src="/home/design-to-scale-1.jpeg"
                      alt="Business operations and scaling"
                      width={900}
                      height={1200}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* COLUMN 2 - 2 SMALL IMAGES */}
                  <div className="grid grid-rows-2 gap-4 h-full">
                    {/* IMAGE 2 */}
                    <div className="rounded-[10px] overflow-hidden group">
                      <Image
                        src="/home/design-to-scale-2.jpeg"
                        alt="Business scaling and operations"
                        width={600}
                        height={800}
                        className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>

                    {/* IMAGE 3 */}
                    <div className="rounded-[10px] overflow-hidden group">
                      <Image
                        src="/home/design-to-scale-3.jpeg"
                        alt="Business scaling and operations"
                        width={600}
                        height={800}
                        className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-6">
                  {/* HEADING */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#0b1b33]">
                    Built for <span className="text-[#4f8fcb]">Execution</span>.
                    Designed to <span className="text-[#4f8fcb]">Scale</span>.
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
                      workflows, and shared accountability - ensuring
                      consistent, high-quality outcomes as your business grows.
                    </p>
                  </div>

                  {/* STATS */}
                  {/* <div className="grid grid-cols-3 gap-10 pt-6"> */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 pt-4 md:pt-6 text-center md:text-left">
                    {[
                      {
                        number: 50,
                        suffix: "+",
                        label: "Years of Combined Experience",
                      },
                      {
                        number: 5,
                        suffix: "+",
                        label: "Active Client Partnerships",
                      },
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

                        <p className="text-xs sm:text-sm text-[#0b1b33]/60 mt-1 leading-snug max-w-[140px] mx-auto md:mx-0">
                          {item.label.split(" ").length > 3 ? (
                            <>
                              {item.label.split(" ").slice(0, -1).join(" ")}{" "}
                              <br />
                              {item.label.split(" ").slice(-1)}
                            </>
                          ) : (
                            item.label
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* SECTION 4 — SERVICES */}
        <AnimatedSection>
          <section className="bg-white py-16 sm:py-20 md:py-32">
            <div className="max-w-8xl mx-auto px-5 md:px-8 xl:px-12">
              <div
                className="
      grid fade-up active
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
                  Specialized Business Support Services
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
                  From bookkeeping and executive assistance to customer service
                  and digital marketing, our dedicated offshore professionals
                  help your business scale with confidence.
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
            {/* SERVICES GRID - Visual & Minimal */}
            {/* SERVICES GRID - Highly Visual Version */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-8xl mx-auto px-6">
              {[
                {
                  title: "Structured Operations",
                  keywords: ["Systems", "Processes", "Admin"],
                  image:
                    "/home/services/business-setup-market-entry-support.jpeg",
                  href: "/services",
                },
                {
                  title: "Targeted Sales",
                  keywords: ["Clients", "Support", "Revenue"],
                  image:
                    "/home/services/customer-support-sales-operations.jpeg",
                  href: "/services",
                },
                {
                  title: "Accounting & Finance",
                  keywords: ["Bookkeeping", "Invoicing", "Reports"],
                  image: "/home/services/accounting-financial.jpeg",
                  href: "/services",
                },
                {
                  title: "Focused Marketing",
                  keywords: ["Brand", "Content", "Visibility"],
                  image: "/home/services/focus-marketing.jpeg",
                  href: "/services",
                },
                {
                  title: "Future Expansion",
                  keywords: ["Launch", "Growth", "Scale"],
                  image: "/home/services/structured-operations.jpeg",
                  href: "/services",
                },

                // CTA CARD
                {
                  title: "Ready to Scale?",
                  keywords: ["Request", "Support", "Grow"],
                  image: "/home/services/ready-to-scale.jpeg",
                  href: "/request-support",
                  isCTA: true,
                },
              ].map((item, i) => (
                <a
                  href={item.href}
                  key={i}
                  className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      min-h-[420px]
      border
      shadow-[0_10px_40px_rgba(11,27,51,0.08)]
      hover:-translate-y-2
      hover:shadow-[0_25px_60px_rgba(79,143,203,0.18)]
      transition-all duration-700
      flex flex-col justify-end
      ${
        item.isCTA
          ? `
            border-[#4f8fcb]/30
            bg-gradient-to-b
            from-[#06172d]
            via-[#0a1b33]
            to-[#103663]
          `
          : `
            border-[#0b1b33]/10
          `
      }
    `}
                >
                  {/* BACKGROUND IMAGE - only for normal cards */}
                  {/* BACKGROUND IMAGE - render for ALL cards, including CTA */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
    object-cover
    transition-transform duration-1000 ease-out
    group-hover:scale-110
  "
                  />

                  {/* OVERLAY */}
                  <div
                    className={`
    absolute inset-0
    ${
      item.isCTA
        ? `
          bg-gradient-to-b
          from-[#06172d]/85
          via-[#0a1b33]/80
          to-[#103663]/95
        `
        : `
          bg-gradient-to-t
          from-[#06172d]/95
          via-[#0a1b33]/55
          to-transparent
        `
    }
  `}
                  />

                  {/* EXTRA GLOW FOR CTA */}
                  {item.isCTA && (
                    <div
                      className="
      absolute inset-0
      bg-[radial-gradient(circle_at_center,rgba(79,143,203,0.18),transparent_70%)]
    "
                    />
                  )}

                  {/* CONTENT */}
                  <div className="relative z-10 p-6 sm:p-7">
                    {/* TITLE */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                      {item.title}
                    </h3>

                    {/* KEYWORDS */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="
              px-3 py-1.5
              rounded-full
              text-xs font-medium
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-white/90
            "
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {/* CTA TEXT */}
                    <div className="mt-6 flex items-center gap-2 text-[#8FD3FF] font-medium text-sm">
                      {item.isCTA ? "Request Support" : "Explore Service"}
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>

                  {/* GLOW EFFECT */}
                  <div
                    className="
        absolute -bottom-20 left-1/2 -translate-x-1/2
        w-56 h-56
        bg-[#4f8fcb]/20
        blur-[80px]
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-700
        pointer-events-none
      "
                  />
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
              <div className="text-center space-y-4 fade-up active">
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
                          <Image
                            src={`/logo-client/${logo}`}
                            alt={logo.replace(/\.[^.]+$/, "")}
                            width={120}
                            height={40}
                            className="h-8 sm:h-10 max-w-[120px] object-contain"
                            loading="lazy"
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
                          <div className="text-[#4f8fcb] text-xl mb-2">
                            ★★★★★
                          </div>

                          {/* CONTENT */}
                          <p className="text-sm text-white/80 leading-relaxed">
                            {item.content}
                          </p>

                          {/* USER */}
                          <div className="flex items-center gap-3 mt-4">
                            <Image
                              src={item.avatar}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full object-cover"
                              loading="lazy"
                            />
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-white/50">
                                {item.role}
                              </p>
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
                <div className="grid lg:grid-cols-3 gap-6 slide-right active">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 slide-left active">
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

        {/* SECTION 6 — WHY WE BUILT THIS -> ABOUT US */}
        <AnimatedSection>
          <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <Image
              src="/team/hero-banner-team.webp" // đổi lại ảnh giống hình bạn
              alt="Team meeting"
              fill
              className="object-cover"
              priority
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#0b1b33]/60"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-6xl mx-auto px-6 pb-12 w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
                {/* TEXT */}
                <h2
                  className="
  text-lg sm:text-lg md:text-2xl lg:text-3xl
  font-light fade-up
  text-white
  max-w-[320px] sm:max-w-none
  leading-[1.4]
  tracking-wide
"
                >
                  The Concept of an All Women {""}
                  <br className="block sm:hidden" />
                  Execution Team
                </h2>

                {/* BUTTON */}
                <Link
                  href="/our-story"
                  className="
            px-6 py-2 fade-up delay-1
            rounded-full
            border border-white
            text-white
            backdrop-blur-md
            hover:bg-white hover:text-[#0b1b33]
            transition-all duration-700
          "
                >
                  About Us
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* SECTION 7 — THE STANDARD (LIGHT GREY) -> STAFF UNITED's Execution Team*/}
        <AnimatedSection>
          <section className="bg-gradient-to-b from-[#0a1b33] via-[#0a1b33] to-[#103663] py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
                {/* IMAGE */}
                <div
                  className="
  slide-left
  w-full
  h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px]
  relative overflow-hidden rounded-xl
"
                >
                  <Image
                    src="/home/workspace.png"
                    alt="Workspace STAFF UNITED"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           50vw"
                  />
                </div>

                {/* CONTENT */}
                <div className="space-y-6 text-white fade-up mx-auto items-center text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
                    <span className="text-[#4f8dc9]">STA</span>FF United's
                    <span
                      className="
    block lg:text-left lg:mx-0
    mt-2 md:mt-3
    w-fit
    bg-[#4f8fcb]
    text-white
    px-2 py-1
    font-medium mx-auto items-center text-center 
  "
                    >
                      Execution Team
                    </span>
                  </h2>

                  <p className="text-white/70 leading-relaxed max-w-md">
                    STAFF United is built by women who take execution seriously.{" "}
                    <br />
                    <span className="font-medium text-white">
                      If you value standards, discipline, and growth, apply
                      below.
                    </span>
                  </p>

                  {/* BUTTON */}
                  <a
                    href="/join"
                    className="
              inline-block
              px-6 py-3
              rounded-full
              bg-[#4f8fcb]
              text-white
              font-medium

              hover:opacity-90
              transition-all duration-300
            "
                  >
                    Join Our Team
                  </a>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* SECTION 10 — CTA STRIP -> LEAD */}
        <AnimatedSection>
          <section className="bg-[#f8f9fb] py-24">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
              {/* LEFT */}
              <div className="space-y-6 slide-left">
                {/* TAG */}
                <span className="inline-block text-xs px-4 py-1 rounded-full border border-[#4f8dc9] text-[#4f8dc9]">
                  REQUEST SUPPORT
                </span>

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0a1b33]">
                  Let’s Talk <span className="text-[#4f8dc9]">Support</span>
                </h2>

                {/* DESC */}
                <p className="text-[#4a596e] leading-relaxed max-w-md">
                  Have a project in mind? Fill out the form and we’ll get in
                  touch within 24 hours to discuss your needs.
                </p>

                {/* IMAGE */}
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/team/team-square.webp"
                    alt="Team"
                    width={600}
                    height={400}
                    className="w-full h-[260px] object-cover"
                  />
                </div>

                {/* CONTACT */}
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  {/* PHONE */}
                  <a
                    href="tel:+84329426269"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4f8dc9] text-[#4f8dc9] group-hover:bg-[#4f8dc9] group-hover:text-white transition duration-700">
                      📞
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0a1b33]">
                        Call Us
                      </p>
                      <p className="text-sm text-[#4a596e]">+84 32 942 6269</p>
                    </div>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:info@staffunitedgroup.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4f8dc9] text-[#4f8dc9] group-hover:bg-[#4f8dc9] group-hover:text-white transition duration-700">
                      ✉️
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0a1b33]">
                        Email Us
                      </p>
                      <p className="text-sm text-[#4a596e]">
                        info@staffunitedgroup.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* RIGHT - FORM */}
              <div className="slide-right">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    if (isSubmitting) return;

                    setIsSubmitting(true);

                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    formData.append("form_type", "lite");

                    const body = new URLSearchParams();

                    formData.forEach((value, key) => {
                      body.append(key, String(value));
                    });

                    try {
                      const res = await fetch(
                        "https://script.google.com/macros/s/AKfycbwEfL2geCsZcl5waUihSrzKUJ31Dmo640pa0hA0GnyAYIq2yRY-EIHwV6wF9y8cQm82/exec",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                          },
                          body,
                        },
                      );

                      const text = await res.text();
                      console.log("LITE RESPONSE:", text);

                      // Track homepage lead
                      (window as any).gtag?.("event", "generate_lead", {
                        form_name: "request_support_home",
                      });

                      setSuccess(true);
                      // window.scrollTo({ top: 0, behavior: "smooth" });

                      form.reset();
                      setPhone("");
                    } catch (err) {
                      console.error(err);
                      alert("Something went wrong");
                    }

                    setIsSubmitting(false);
                  }}
                  className="relative overflow-hidden bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl rounded-2xl p-8
    border border-[#d5dadf]
    shadow-[0_10px_40px_rgba(0,0,0,0.25)]
    hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
    hover:-translate-y-1
    transition-all duration-500
  "
                >
                  {/* GLASS LIGHT LAYER */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* ánh sáng trắng */}
                    <div
                      className="
      absolute inset-0
      bg-gradient-to-br
      from-white/30 via-white/10 to-transparent
    "
                    ></div>

                    {/* glow xanh brand */}
                    <div
                      className="
      absolute -top-20 -left-20
      w-[300px] h-[300px]
      bg-[#4f8dc9]/20
      blur-[120px]
    "
                    ></div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 space-y-4">
                    {/* NAME */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        name="first_name"
                        placeholder="First Name *"
                        className="w-full px-4 py-2 rounded-lg border border-[#d5dadf] bg-white/60 backdrop-blur-md"
                        required
                      />
                      <input
                        name="last_name"
                        placeholder="Last Name *"
                        className="w-full px-4 py-2 rounded-lg border border-[#d5dadf] bg-white/60 backdrop-blur-md"
                        required
                      />
                    </div>

                    {/* COMPANY */}
                    <input
                      name="company_name"
                      placeholder="Company Name"
                      className="w-full px-4 py-2 rounded-lg border border-[#d5dadf] bg-white/60 backdrop-blur-md"
                    />

                    {/* EMAIL */}
                    <input
                      name="work_email"
                      type="email"
                      placeholder="Work Email *"
                      className="w-full px-4 py-2 rounded-lg border border-[#d5dadf] bg-white/60 backdrop-blur-md"
                      required
                    />

                    {/* PHONE */}
                    <div className="bg-white/60 backdrop-blur-md rounded-lg relative z-[9999]">
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={setPhone}
                        enableSearch
                        inputClass="!w-full !border-none !bg-transparent !py-2"
                      />
                      <input type="hidden" name="phone" value={phone} />
                    </div>

                    {/* START DATE */}
                    <div>
                      <label className="block text-sm font-medium text-[#0b1b33] mb-1">
                        Preferred Start Date
                      </label>
                      <div
                        onClick={openDatePicker}
                        className="w-full px-4 py-2 rounded-lg border border-[#d5dadf] bg-white/60 backdrop-blur-md cursor-pointer"
                      >
                        <input
                          ref={dateRef}
                          type="date"
                          name="start_timeline"
                          className="w-full bg-transparent outline-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <textarea
                      name="description"
                      rows={4}
                      placeholder="Describe your needs *"
                      className="w-full px-4 py-2 rounded-lg border border-[#d5dadf] bg-white/60 backdrop-blur-md"
                      required
                    />

                    {/* BUTTON */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
    group relative overflow-hidden

    w-full mt-4 px-6 py-3 rounded-full

    bg-[#0a1b33]
    text-white font-medium

    transition-all duration-500

    disabled:opacity-50
    disabled:cursor-not-allowed

    hover:bg-white/10
    hover:text-[#0a1b33]
    hover:backdrop-blur-xl
    hover:border hover:border-[#d5dadf]
    hover:shadow-[0_10px_40px_rgba(79,141,201,0.4)]
    hover:-translate-y-0.5
  "
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Request Support
                            <span className="transition-transform duration-300 group-hover:-rotate-45">
                              →
                            </span>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {success && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            <div
              className="
      relative
      bg-white
      rounded-2xl
      p-8
      max-w-md
      w-full
      text-center
      shadow-xl
    "
            >
              <h3 className="text-xl font-semibold mb-3 text-[#0b1b33]">
                🎉 Request Sent!
              </h3>

              <p className="text-[#0b1b33]/70 mb-6">
                We've received your request. Our team will contact you shortly.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2 rounded-full bg-[#0a1b33] text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      {/* <ChatBox /> */}
    </>
  );
}
