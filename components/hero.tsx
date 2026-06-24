"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const rotatingServices = [
  "Strategic Operations",
  "Targeted Sales",
  "Accounting & Legal",
  "Focused Marketing",
  "Future Expansion",
];

const marqueeItems = [
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
  "OpenAI",
  "Zapier",
  "Notion",
  "Monday.com",
  "Stripe",
];
const repeatedItems = Array(6).fill(marqueeItems).flat();

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

    min-h-[480px]      /* Mobile S / M / L */
    sm:min-h-[620px]   /* Mobile lớn */
    md:min-h-[700px]   /* Tablet */
    lg:min-h-[760px]   /* Desktop */
    xl:min-h-[820px]   /* Màn hình lớn */
    2xl:min-h-[820px]  /* 4K / màn hình rất lớn */

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
        preload="metadata"
        className="
    absolute inset-0
    w-full h-full
    object-cover

    object-[25%_center]

    md:object-[30%_center]

    lg:object-center
  "
      >
        <source src="/videos/home/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#06172d]/50" />

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06172d]/35 via-[#06172d]/55 to-black/80" />

      {/* ===== CONTENT ===== */}
      <div
        className="relative z-10 min-h-[480px] sm:min-h-[520px] md:min-h-[700px]
  lg:min-h-[760px] xl:min-h-[820px] 2xl:min-h-[820px] flex items-center pt-28 md:pt-32 pb-56 lg:pt-48 md:pb-52 px-5 sm:px-6 pr-0 sm:pr-0 md:pr-6"
      >
        <div
          className="
    w-full
    max-w-5xl
    lg:max-w-5xl
    mx-auto
    text-left
    md:text-left
    md:mx-0
md:ml-3
  "
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {/* Line 1 */}
            <span className="block ">
              Your{" "}
              <span style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>
                24/7
              </span>{" "}
              Execution Engine
            </span>

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

        translate-y-0
        lg:-translate-y-[8px]
        xl:-translate-y-[3.8px]
        2xl:-translate-y-[3px]

        leading-[1.2]
        h-[1.25em]
        sm:h-[1.3em]

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
                  Accounting & Legal
                </span>
              </span>
            </span>
          </h1>

          <p
            className="
    text-white
    mt-6
    text-lg
    max-w-4xl
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
            Supporting global businesses with disciplined, continuous{" "}
            <span>24/7</span> <span>high-performance results.</span>
          </p>
        </div>
      </div>

      {/* ===== FLOATING CARD ===== */}
      <div className="absolute z-40 left-1/2 -translate-x-1/2 bottom-20 sm:bottom-20 md:left-9 md:translate-x-0 md:bottom-22 lg:bottom-20 xl:bottom-28 2xl:bottom-22">
        <a
          href="https://maps.app.goo.gl/Rg6R1UCux7tWsjGZ7?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="
      group
      block w-[72vw] max-w-[350px]
      rounded-[24px]
      border border-white/20
      bg-white/10
      backdrop-blur-sm
      p-3 sm:p-4 md:p-5
      transition-transform duration-300
      hover:scale-[1.01]
      hover:bg-white/15
      hover:border-white/40
      cursor-pointer
    "
        >
          {/* TITLE */}
          <p className="text-muted font-semibold text-sm sm:text-base md:text-lg leading-tight">
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
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full order-2 border-black object-cover"
                  loading="lazy"
                />
              ))}
            </div>

            {/* RATING */}
            <div className="flex flex-col items-end">
              <div className="flex  text-sx sm:text-sm md:text-base">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-muted/70 text-sm">5⭐ reviews</span>
            </div>
          </div>
        </a>
      </div>

      {/* ===== TECHNOLOGY MARQUEE ===== */}
      <div className="absolute z-30 pointer-events-none overflow-hidden left-0 right-0 bottom-5 md:left-[0] md:right-0 md:bottom-10">
        <div className="marquee-track gap-10 sm:gap-14 md:gap-20 px-4 sm:px-6">
          {[...repeatedItems, ...repeatedItems].map((tech, i) => (
            <span
              key={i}
              className="shrink-0 whitespace-nowrap font-semibold text-white/90 text-sx sm:text-sm md:text-[15px] tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
