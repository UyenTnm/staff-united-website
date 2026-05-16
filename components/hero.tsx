"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const rotatingServices = [
  "Finance.",
  "Operations.",
  "Sales.",
  "Marketing.",
  "Growth",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingServices.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#0a1b33] via-[#0a1b33] to-[#103663] text-muted overflow-hidden">
      {/* ===== CONTENT ===== */}
      <div className="relative mt-4 z-10 pb-14 pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[150px] md:pb-20 px-5 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Your execution{" "}
          <span className="bg-[#4f8dc9] text-white px-3 py-1 inline-block rotate-2">
            engine
          </span>
          {/* Giữ "for" và chữ chạy cùng hàng ở mọi thiết bị */}
          <span className="inline-flex items-baseline whitespace-nowrap">
            {/* Khoảng cách nhỏ giữa "for" và chữ chạy */}
            <span
              className="
        ml-1
        sm:ml-2
        md:ml-12
        lg:ml-[175px]
        mr-2
        sm:mr-4
        inline-block

        translate-y-[0.04em]
    sm:translate-y-[0.06em]
    md:translate-y-[0.10em]
    lg:translate-y-[0.09em]
    xl:translate-y-[0.09em]
    2xl:translate-y-[0.09em]
      "
            >
              for
            </span>

            {/* Rotating text */}
            <span
              className="
    relative
    inline-block
    align-baseline

    /* Mobile */
    translate-y-[0.06em]

    /* Tablet */
    sm:translate-y-[0.08em]

    /* Laptop */
    md:translate-y-[0.12em]

    /* Desktop & 4K */
    lg:translate-y-[0.10em]
    xl:translate-y-[0.10em]
    2xl:translate-y-[0.10em]

    h-[1.15em]
    sm:h-[1.2em]

    leading-[1.15]
    sm:leading-[1.2]

    overflow-hidden
    whitespace-nowrap
    text-[#4f8dc9]

    min-w-[8ch]
    sm:min-w-[10ch]
    md:min-w-[11ch]
    lg:min-w-[12ch]
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
              transition-all
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                isActive
                  ? "translate-y-0 opacity-100 rotate-0"
                  : "translate-y-full opacity-0 rotate-2"
              }
            `}
                  >
                    {service}
                  </span>
                );
              })}

              {/* Invisible text để giữ chiều rộng ổn định */}
              <span className="invisible whitespace-nowrap">Operations</span>
            </span>
          </span>
        </h1>

        <p className="text-white mt-6 text-lg max-w-2xl mx-auto">
          <span className="text-[#4f8dc9] mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Women-Powered Offshore Team | Based in Vietnam
          </span>
          <br />
          Supporting global businesses with disciplined, high-performance
          results
        </p>
      </div>

      <div className="relative w-full">
        {/* ===== IMAGE ===== */}

        <div className="relative z-0 h-[200px] sm:h-[260px] md:h-[420px] lg:h-[520px] flex items-end justify-center pointer-events-none ">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          {/* IMAGE */}
          <Image
            src="/home/hero-banner-home.webp"
            alt="STAFF UNITED execution team"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="
    relative z-0
    w-[140%]
    sm:w-[120%]
    md:w-[110%]
    lg:w-[100%]
    xl:w-[100%]
    2xl:w-[55%]
    max-w-none
    object-contain
    pointer-events-none
  "
          />
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
