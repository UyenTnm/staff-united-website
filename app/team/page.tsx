"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function TeamPage() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        window.matchMedia("(max-width: 1023px)").matches &&
        gridRef.current &&
        !gridRef.current.contains(e.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);
  const teamMembers = [
    {
      name: "Yuko Furuta",
      title: "Quality & Standards Manager",
      responsibility:
        "Ensures every deliverable meets our defined standards before it reaches the client.",
      image: "/team/yuko.webp",
    },
    {
      name: "Jena Truong",
      title: "Video Editor",
      responsibility:
        "Deliver high-quality video production and editing integrated with social media management.",
      image: "/team/jena.webp",
    },
    {
      name: "Martha Nguyen",
      title: "Video Editor",
      responsibility:
        "Drive video strategy and branding through expert editing, post-production support, and creative content oversight.",
      image: "/team/martha.jpeg",
    },
    {
      name: "Betty Van",
      title: "Video Editor",
      responsibility:
        "Produce and host interactive video content, ensuring top-tier quality and publishing standards.",
      image: "/team/betty.jpeg",
    },
    {
      name: "Alice Truong",
      title: "Website Developer",
      responsibility:
        "Execute high-quality web development specializing in Frontend and Fullstack support, utilizing WordPress, custom coding, and modern frameworks.",
      image: "/team/alicetr.webp",
    },

    {
      name: "Annie Nguyen",
      title: "UIUX",
      responsibility: "Designs intuitive and user-friendly interfaces.",
      image: "/team/annie.webp",
    },
    {
      name: "Trang Ngoc Bao Tran",
      title: "Marketing & SEO Content",
      responsibility:
        "Supports digital marketing initiatives through SEO-focused content, social media engagement and brand communication.",
      image: "/team/trang-tran.webp",
    },
    {
      name: "Elly Le",
      title: "Customer Support Specialist",
      responsibility:
        "Ensures smooth customer support and marketplace operations by managing inquiries, orders and fulfillment processes.",
      image: "/team/linh-le.webp",
    },
    {
      name: "Thao Tong",
      title: "Graphic Designer",
      responsibility:
        "2D Design, basic 3D modeling, editing video, content creation",
      image: "/team/thao-tong.webp",
    },
    {
      name: "Mel Vu",
      title: "Website Developer",
      responsibility:
        "Deliver scalable web solutions through clean coding, modern frameworks (Frontend/Fullstack), and Python-based technical support.",
      image: "/team/mel-vu.webp",
    },
    {
      name: "Trang Phuong",
      title: "Growth Marketing Specialist ",
      responsibility:
        "Manage end-to-end marketing strategies and budgets, from branding and creative direction to multi-channel execution (Paid Ads, Content, Social Media)",
      image: "/team/trang-phuong.webp",
    },
    {
      name: "Khue Vu",
      title: "Operations Coordinator ",
      responsibility:
        "Execute market research and Excel-based reporting to drive problem-solving, while facilitating cross-cultural communication within international teams.",
      image: "/team/khue-vu.webp",
    },
    {
      name: "Levi Le",
      title: "Marketing & Project Coordinator",
      responsibility:
        "Execute integrated marketing projects and social media campaigns through seamless cross-functional collaboration and strategic coordination.",
      image: "/team/levi.webp",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#f5f8fc]">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* TOP GLOW */}
        <div
          className="
      absolute
      top-[-250px]
      left-1/2
      -translate-x-1/2

      w-[1000px]
      h-[1000px]

      rounded-full
      bg-[#4f8dc9]/10

      blur-3xl
    "
        />

        {/* SIDE GLOW */}
        <div
          className="
      absolute
      bottom-[-200px]
      right-[-200px]

      w-[700px]
      h-[700px]

      rounded-full
      bg-[#79B9FF]/10

      blur-3xl
    "
        />
      </div>

      {/* <AnimatedSection> */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-16 space-y-16">
        {/* INTRO */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <AnimatedSection direction="up" delay={0}>
            <h1 className="text-3xl md:text-5xl text-[#4f8dc9] font-light">
              Our Team
            </h1>
          </AnimatedSection>

          <div className="w-16 h-[3px] bg-[#4f8fcb] mx-auto rounded-full" />

          <AnimatedSection direction="up" delay={0}>
            <p className="text-lg md:text-xl text-[#0b1b33]/70 leading-relaxed">
              We operate as one unit under one shared standard.{" "}
              <br className="hidden md:block" />
              Roles differ. Responsibility is collective.
            </p>

            <p className="text-sm md:text-base font-semibold text-[#4f8fcb] tracking-[0.2em] uppercase">
              All Women. All Business.
            </p>
          </AnimatedSection>
        </div>

        {/* TEAM GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {teamMembers.map((member, i) => {
            const row = Math.floor(i / 4);
            const direction = row % 2 === 0 ? "left" : "right";
            return (
              <AnimatedSection key={i} direction={direction} delay={i * 0.05}>
                <div className="group w-full max-w-[260px] sm:max-w-none mx-auto sm:mx-0 [perspective:1200px]">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();

                      if (window.matchMedia("(max-width: 1023px)").matches) {
                        setActiveIndex((prev) => (prev === i ? null : i));
                      }
                    }}
                    style={{
                      transform:
                        isMobile && activeIndex === i
                          ? "rotateY(180deg)"
                          : undefined,
                    }}
                    className={`relative w-full aspect-[3/4] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] cursor-pointer hover:shadow-[0_30px_80px_rgba(79,141,201,0.18)] hover:-translate-y-3
hover:scale-[1.02] lg:group-hover:[transform:rotateY(180deg)]  rounded-2xl`}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 bg-white/75 backdrop-blur-xl border border-white/50
    rounded-2xl shadow-[0_20px_60px_rgba(79,141,201,0.12)]
    overflow-hidden flex flex-col
    [backface-visibility:hidden]
    pointer-events-auto
          "
                    >
                      {/* IMAGE */}
                      <div className="relative w-full aspect-[3/4] overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          priority={i < 4}
                          className="object-cover object-top group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />{" "}
                      </div>

                      {/* INFO */}
                      <div className="p-4 text-center space-y-1">
                        <h3 className="text-[#0b1b33] font-semibold text-sm sm:text-base">
                          {member.name}
                        </h3>

                        <p className="text-[#4f8fcb] text-xs sm:text-sm font-medium">
                          {member.title}
                        </p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="
            absolute inset-0 
    bg-[#0b1b33]
    text-white 
    rounded-2xl
    shadow-xl
    flex items-center justify-center p-5 text-center
    [transform:rotateY(180deg)]
    [backface-visibility:hidden]
    pointer-events-none
          "
                    >
                      <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                        {member.responsibility}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/join"
            className="
      group relative inline-flex items-center gap-2
      px-6 py-3
      rounded-full
      bg-[#4f8fcb]
      text-white
      text-sm md:text-base font-medium
      overflow-hidden
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
    "
          >
            {/* LIQUID SHINE */}
            <span
              className="
        absolute inset-0
        bg-gradient-to-r from-white/0 via-white/30 to-white/0
        translate-x-[-120%]
        group-hover:translate-x-[120%]
        transition-transform duration-700 ease-out
      "
            />

            {/* TEXT */}
            <span className="relative z-10">Join the Team</span>

            {/* ICON */}
            <span
              className="
        relative z-10
        inline-block
        transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:rotate-[360deg]
      "
            >
              →
            </span>
          </Link>
        </div>
      </section>
      {/* </AnimatedSection> */}
    </main>
  );
}
