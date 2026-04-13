"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function TeamPage() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        window.innerWidth < 1024 &&
        gridRef.current &&
        !gridRef.current.contains(e.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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
    <main className="bg-white">
      {/* max-w-6xl mx-auto px-6 py-16 space-y-20 */}
      {/* <AnimatedSection> */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        {/* INTRO */}
        <div className="text-center py-10 space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-tight">
            Our Team
          </h1>
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          <p className="text-lg md:text-xl text-[#0b1b33]/80 leading-relaxed max-w-3xl mx-auto">
            We Operate as One Unit Under One Shared Standard.
            <br className="hidden md:block" />
            Roles Differ. Responsibility Is Collective.
          </p>

          <p className="text-base md:text-lg font-semibold text-[#4f8fcb] tracking-wide pt-2">
            All Women. All Business.
          </p>
        </div>

        {/* TEAM GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, i) => {
            return (
              <div
                key={i}
                className="group w-full max-w-[260px] sm:max-w-none mx-auto sm:mx-0 [perspective:1200px]"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();

                    if (window.innerWidth < 1024) {
                      setActiveIndex(activeIndex === i ? null : i);
                    }
                  }}
                  className={`
  relative w-full aspect-[3/4]
  transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
  [transform-style:preserve-3d]
  cursor-pointer
  hover:shadow-xl

  ${activeIndex === i ? "[transform:rotateY(180deg)]" : ""}

  lg:group-hover:[transform:rotateY(180deg)]
`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-white rounded-lg shadow-md overflow-hidden flex flex-col [backface-visibility:hidden]">
                    {/* IMAGE */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* INFO */}
                    <div className="p-4 text-center">
                      <h3 className="text-[#0b1b33] font-semibold text-sm sm:text-base">
                        {member.name}
                      </h3>

                      <p className="text-[#4f8fcb] text-xs sm:text-sm">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-[#0b1b33] text-white rounded-lg shadow-md flex items-center justify-center p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {member.responsibility}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/join"
            className="inline-block px-6 py-3 bg-[#4f8fcb] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition"
          >
            Join the Team
          </Link>
        </div>
      </section>
      {/* </AnimatedSection> */}
    </main>
  );
}
