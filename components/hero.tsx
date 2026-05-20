"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const rotatingServices = [
  "Structured Operations",
  "Targeted Sales",
  "Accounting & Finance",
  "Focused Marketing",
  "Future Expansion",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
    relative overflow-hidden

    /* Chiều cao toàn bộ Hero (giảm lại cho phù hợp với video) */
    min-h-[480px]      /* Mobile S / M / L */
    sm:min-h-[620px]   /* Mobile lớn */
    md:min-h-[700px]   /* Tablet */
    lg:min-h-[760px]   /* Desktop */
    xl:min-h-[820px]   /* Màn hình lớn */
    2xl:min-h-[900px]  /* 4K / màn hình rất lớn */

    bg-[#06172d]
    text-white
  "
    >
      {/* ===== FULL HERO VIDEO BACKGROUND ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
    absolute inset-0
    w-full h-full
    object-cover

    /* Mobile: ưu tiên phần bên trái của video */
    object-[25%_center]

    /* Tablet */
    md:object-[30%_center]

    /* Desktop */
    lg:object-center
  "
      >
        <source src="/videos/home/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#06172d]/65" />

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06172d]/35 via-[#06172d]/55 to-black/80" />

      {/* ===== CONTENT ===== */}
      <div
        className="
  relative z-10

  /* Mobile S / M / L */
  min-h-[480px]

  /* Mobile lớn */
  sm:min-h-[520px]

  /* Tablet */
  md:min-h-[700px]

  /* Desktop */
  lg:min-h-[760px]

  /* Large Desktop */
  xl:min-h-[820px]

  /* 4K */
  2xl:min-h-[900px]

  flex items-center
  px-5 sm:px-6

  /* BỎ padding-right trên mobile S/M/L */
    pr-0
    sm:pr-0

    /* Từ tablet trở lên dùng padding mặc định */
    md:pr-6
"
      >
        <div
          className="
    w-full
    max-w-4xl
    lg:max-w-3xl
    mx-auto
    text-left
    md:text-left
    md:mx-0
md:ml-3
  "
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {/* Line 1 */}
            <span className="block">Your execution engine</span>

            {/* Line 2: chỉ có "for" và chữ chạy */}
            <span className="mt-1 inline-flex items-baseline whitespace-nowrap">
              <span className="mr-2 md:mr-4">for</span>

              <span
                className="
        relative
        inline-block
        text-[#4f8dc9]
        overflow-hidden
        whitespace-nowrap
        align-baseline

        /* Fine-tune baseline */
        translate-y-0
        lg:-translate-y-[8px]
        xl:-translate-y-[3.8px]
        2xl:-translate-y-[3px]

        /* Không cắt các ký tự như g, p, q */
        leading-[1.2]
        h-[1.25em]
        sm:h-[1.3em]

        /* Đủ rộng cho cụm dài nhất nhưng không ảnh hưởng line 1 */
        min-w-[20ch]
      "
              >
                {rotatingServices.map((service, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <span
                      key={service}
                      className={`
        absolute
        inset-0
        flex
        items-center
        justify-start
        whitespace-nowrap
        leading-[1.2]

        transition-[transform,opacity]
        duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        will-change-transform

        ${isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
                    >
                      {service}
                    </span>
                  );
                })}

                {/* Invisible text dài nhất để giữ đủ width */}
                <span className="invisible whitespace-nowrap leading-[1.2]">
                  Accounting & Finance
                </span>
              </span>
            </span>
          </h1>

          <p
            className="
    text-white
    mt-6
    text-lg
    max-w-2xl
    mx-auto
    md:mx-0
    text-left
    md:text-left
    leading-relaxed
    pr-0
  "
          >
            <span
              className="
      text-[#4f8dc9]
      text-sm
      sm:text-base
      md:text-lg
      leading-relaxed
      block
      mb-1
    "
            >
              Women-Powered Offshore Team | Based&nbsp;in&nbsp;Vietnam
            </span>
            Supporting global businesses with disciplined,{" "}
            high-performance&nbsp;results
          </p>
        </div>
      </div>

      {/* <div className="relative w-full">
        <div className="relative z-0 h-[200px] sm:h-[260px] md:h-[420px] lg:h-[520px] flex items-end justify-center pointer-events-none ">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          <Image
            src="/home/hero-banner-home.webp"
            alt="STAFF UNITED execution team"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="relative z-0 w-[140%] sm:w-[120%] md:w-[110%] lg:w-[100%] xl:w-[100%] 2xl:w-[55%] max-w-none object-contain pointer-events-none"
          />
        </div>
      </div> */}

      {/* ===== FLOATING CARD ===== */}
      {/* ===== TECHNOLOGY MARQUEE ===== */}
      {/* ===== TECHNOLOGY MARQUEE ===== */}
      {/* ===== TECHNOLOGY MARQUEE ===== */}
      {/* ===== TECHNOLOGY MARQUEE ===== */}
      <div
        className="
    absolute
    z-30
    pointer-events-none
    overflow-hidden

    /* Mobile: chạy toàn màn hình */
    left-0
    right-0
    bottom-8

    /* Desktop trở lên: bắt đầu sau floating card */
    md:left-[394px]
    md:right-0
    md:bottom-24
  "
      >
        <div
          className="
      flex
      w-max
      animate-[marquee_35s_linear_infinite]

      gap-6
      sm:gap-8
      md:gap-10

      px-4
      sm:px-6
    "
        >
          {[
            "QuickBooks",
            "HubSpot",
            "Xero",
            "Salesforce",
            "Zoho",
            "Shopify",
            "Asana",
            "ClickUp",
            "Slack",
            "Google Workspace",

            // Duplicate để chạy liên tục
            "QuickBooks",
            "HubSpot",
            "Xero",
            "Salesforce",
            "Zoho",
            "Shopify",
            "Asana",
            "ClickUp",
            "Slack",
            "Google Workspace",
          ].map((tech, i) => (
            <span
              key={i}
              className="
          whitespace-nowrap
          font-semibold
          uppercase
          text-white/65

          text-[10px]
          sm:text-xs
          md:text-sm

          tracking-[0.14em]
          sm:tracking-[0.16em]
          md:tracking-[0.18em]
        "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ===== FLOATING CARD ===== */}

      <div className="absolute bottom-10 left-9 hidden md:block z-40">
        <a
          href="https://www.google.com/search?q=staff+united+group+review"
          target="_blank"
          rel="noopener noreferrer"
          className="
      group
      block
      w-[350px]
      rounded-[24px]
      border border-white/20
      bg-white/10
      backdrop-blur-xl
      p-5
      transition-all duration-300
      hover:scale-[1.03]
      hover:bg-white/15
      hover:border-white/40
      cursor-pointer
    "
        >
          {/* TITLE */}
          <p className="text-muted font-semibold text-lg leading-tight">
            STAFF UNITED COMPANY LIMITED
          </p>

          {/* LINE */}
          <div className="w-full h-[1px] bg-white/20 my-3" />

          {/* CONTENT */}
          <div className="flex items-center justify-between">
            {/* AVATAR */}
            <div className="flex -space-x-3">
              {[
                "../logo-client/masx-logo.png",
                "../logo-client/masx.jpg",
                "../logo-client/SANITIZE-SQUAD-Logo.png",
                "../logo-client/modern-architecture.png",
                "../logo-client/bloom-spa.png",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src.replace("../", "/")}
                  alt="Client logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-black object-cover"
                  loading="lazy"
                />
              ))}
            </div>

            {/* RATING */}
            <div className="flex flex-col items-end">
              <div className="flex  text-base">⭐⭐⭐⭐⭐</div>
              <span className="text-muted/70 text-sm">200+ reviews</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
