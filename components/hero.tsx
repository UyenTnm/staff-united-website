"use client";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a1b33] via-[#0a1b33] to-[#103663] text-white overflow-hidden">
      {/* ===== CONTENT ===== */}
      <div className="relative z-10 pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 px-5 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Your execution{" "}
          <span className="bg-[#4f8dc9] text-white px-3 py-1 inline-block rotate-2">
            engine
          </span>
          <br />
          for scalable growth.
        </h1>

        <p className="text-white mt-6 text-lg max-w-2xl mx-auto">
          <span className="text-[#4f8dc9] mt-5 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed ">
            Women-Powered Offshore Team | Based in Vietnam{" "}
          </span>{" "}
          <br />
          Supporting global businesses with disciplined, high-performance
          results
        </p>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 flex justify-center relative z-[999]">
          <a
            href="/request-support"
            className="group relative inline-flex items-center justify-center gap-2 w-full  sm:w-auto max-w-[240px] rounded-full bg-[#4f8dc9] text-white overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4"
          >
            {/* TEXT */}
            <span className="relative z-10">REQUEST SUPPORT</span>

            {/* ICON */}
            <span
              className="
      relative z-10
      flex items-center justify-center w-5 h-5
      transition-all duration-300
      group-hover:translate-x-1
    "
            >
              →
            </span>

            {/* DIVIDER SLIDE */}
            <span
              className="
      absolute
      top-0 right-0
      h-full w-[7px]
      bg-black
      translate-x-full
      group-hover:-translate-x-[42px]
      transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      pointer-events-none
    "
            />
          </a>
        </div>
      </div>

      {/* ===== MARQUEE (BACKGROUND) ===== */}
      {/* <div className="relative w-full py-2 z-0 mb-0">
        <div className="marquee-track flex whitespace-nowrap gap-20 text-white text-4xl sm:text-6xl md:text-8xl px-6">
          <span>All Women. All Business.</span>
          <span>One Standard. One Team.</span>

          <span>All Women. All Business.</span>
          <span>One Standard. One Team.</span>

          <span>All Women. All Business.</span>
          <span>One Standard. One Team.</span>
        </div>
      </div> */}

      <div className="relative w-full">
        {/* <div className="relative overflow-hidden w-full ">
          <div className="flex whitespace-nowrap gap-20 marquee-track text-4xl sm:text-6xl md:text-8xl px-6">
            <div className="flex gap-20">
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
            </div>

            <div className="flex gap-20">
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
            </div>
          </div>
        </div> */}
        <div className="absolute top-[20%] sm:top-[8%] md:top-[10%] lg:top-[10%] left-0 w-full overflow-hidden z-0 text-4xl sm:text-6xl md:text-8xl px-6">
          <div className="flex whitespace-nowrap gap-20 marquee-track text-4xl sm:text-6xl md:text-8xl px-6">
            <div className="flex gap-20">
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
            </div>

            <div className="flex gap-20">
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
              <span>All Women. All Business.</span>
              <span>One Standard. One Team.</span>
            </div>
          </div>
        </div>

        {/* ===== IMAGE ===== */}

        <div className="relative z-0 h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] flex items-end justify-center pointer-events-none -mt-6 sm:-mt-14 md:mt-0 -translate-y-6 sm:-translate-y-2 md:translate-y-0">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          {/* IMAGE */}
          <img
            src="/home/hero-banner-home.png"
            className="
            relative z-0
            w-[140%] sm:w-[120%] md:w-[110%] lg:w-[100%]
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
          <p className="text-white font-semibold text-lg leading-tight">
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
                <img
                  key={i}
                  src={src}
                  className="
              w-10 h-10 rounded-full
              border-2 border-black
              object-cover
            "
                />
              ))}
            </div>

            {/* RATING */}
            <div className="flex flex-col items-end">
              <div className="flex  text-base">⭐⭐⭐⭐⭐</div>
              <span className="text-white/70 text-sm">200+ reviews</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
