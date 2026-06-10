"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function TeamPage() {
  const [openDepartment, setOpenDepartment] = useState<string | null>(
    "strategic-operations",
  );
  const [activeDepartment, setActiveDepartment] = useState("all");

  const departments = [
    {
      id: "strategic-operations",
      number: "01",
      name: "Strategic Operations",
      description:
        "Systems, workflows, admin coordination & business continuity",
      color: "#1E3D6E",

      lead: {
        name: "Martha Nguyen",
        title: "Video Editor",
        image: "/team/martha.jpeg",
        bio: "Create engaging video content and support multimedia production initiatives.",
      },

      members: [
        {
          name: "Khue Vu",
          title: "Operations Coordinator",
          image: "/team/khue-vu.webp",
          bio: "Support operational workflows, coordination and execution across internal and client-facing projects.",
        },

        // {
        //   name: "Martha Nguyen",
        //   title: "Video Editor",
        //   image: "/team/martha.jpeg",
        //   bio: "Create engaging video content and support multimedia production initiatives.",
        // },

        {
          name: "Elly Le",
          title: "Customer Support Specialist",
          image: "/team/linh-le.webp",
          bio: "Provide customer support and ensure smooth communication across service channels.",
        },
      ],
    },

    {
      id: "targeted-sales",
      number: "02",
      name: "Targeted Sales",
      description:
        "Customer support, outreach, CRM management & sales coordination",
      color: "#4F8DC9",

      lead: {
        name: "Levi Le",
        title: "Marketing & Project Coordinator",
        image: "/team/levi.webp",
        bio: "Execute integrated marketing projects and social media campaigns through seamless collaboration and coordination.",
      },

      members: [],
    },

    {
      id: "accounting-legal",
      number: "03",
      name: "Accounting & Legal",
      description: "Bookkeeping, reporting, invoicing & compliance support",
      color: "#C07838",

      lead: {
        name: "TBD",
        title: "Department Lead",
        image: "/placeholder.webp",
        bio: "Accounting and legal support services.",
      },

      members: [],
    },

    {
      id: "focused-marketing",
      number: "04",
      name: "Focused Marketing",
      description: "Content creation, social media, brand support & campaigns",
      color: "#2E7D62",
      lead: {
        name: "Yuko Furuta",
        title: "Quality & Standards Manager",
        image: "/team/yuko.webp",
        bio: "Execute market research and Excel-based reporting to drive problem-solving while facilitating cross-cultural communication within international teams.",
      },
      // lead: {
      //   name: "Trang Phuong",
      //   title: "Growth Marketing Specialist",
      //   image: "/team/trang-phuong.webp",
      //   bio: "Manage end-to-end marketing strategies, branding, content and paid advertising initiatives.",
      // },

      members: [
        {
          name: "Trang Ngoc Bao Tran",
          title: "Marketing & SEO Content",
          image: "/team/trang-tran.webp",
        },

        {
          name: "Jena Truong",
          title: "Video Editor",
          image: "/team/jena.webp",
        },
        {
          name: "Trang Phuong",
          title: "Growth Marketing Specialist",
          image: "/team/trang-phuong.webp",
          bio: "Manage end-to-end marketing strategies, branding, content and paid advertising initiatives.",
        },

        {
          name: "Betty Van",
          title: "Video Editor",
          image: "/team/betty.jpeg",
        },

        {
          name: "Thao Tong",
          title: "Graphic Designer",
          image: "/team/thao-tong.webp",
        },
      ],
    },

    {
      id: "future-expansion",
      number: "05",
      name: "Future Expansion",
      description:
        "Research, innovation, website development & growth initiatives",
      color: "#4A5568",

      lead: {
        name: "Alice Truong",
        title: "Website Developer",
        image: "/team/alicetr.webp",
        bio: "Execute high-quality web development specializing in Frontend and Fullstack support.",
      },

      members: [
        {
          name: "Mel Vu",
          title: "Website Developer",
          image: "/team/mel-vu.webp",
        },

        {
          name: "Annie Nguyen",
          title: "UIUX Designer",
          image: "/team/annie.webp",
        },
      ],
    },
  ];

  const allMembers = departments.flatMap((department) => [
    {
      ...department.lead,
      color: department.color,
      departmentId: department.id,
      isLead: true,
    },

    ...department.members.map((member) => ({
      ...member,
      color: department.color,
      departmentId: department.id,
      isLead: false,
    })),
  ]);

  console.table(allMembers);

  return (
    <>
      <main className="bg-[#f5f8fc] overflow-hidden">
        <section className="bg-[#0B1B33] text-white pt-40 pb-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="uppercase tracking-[0.3em] text-[#79B9FF] text-xs">
              Our Team
            </p>

            <h1 className="text-4xl md:text-6xl mt-6 font-light">
              Meet the All-Women Team
              <br />
              Powering Your Business Execution
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-white/70 text-lg">
              Every person on our team is selected, trained, and structured
              within a specific department.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-[#79B9FF]/30 bg-[#79B9FF]/10 px-6 py-3 text-sm">
              Organized through our 5-Core Support Ecosystem™
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-[#0B1B33] mb-6">
              How Our Team Is Structured
            </h2>

            <p className="text-lg text-[#0B1B33]/70 leading-relaxed">
              STAFF United is not just a list of talented women. It is a
              structured offshore execution team organized by department through
              our 5-Core Support Ecosystem™.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              {
                id: "all",
                label: "All Team",
              },

              {
                id: "strategic-operations",
                label: "Strategic Operations",
              },

              {
                id: "targeted-sales",
                label: "Targeted Sales",
              },

              {
                id: "accounting-legal",
                label: "Accounting & Legal",
              },

              {
                id: "focused-marketing",
                label: "Focused Marketing",
              },

              {
                id: "future-expansion",
                label: "Future Expansion",
              },
            ].map((department) => (
              <button
                key={department.id}
                onClick={() => setActiveDepartment(department.id)}
                className={`
        px-5 py-3
        rounded-full
        text-sm
        font-medium
        transition-all
        duration-300

        ${
          activeDepartment === department.id
            ? "bg-[#4f8fcb] text-white shadow-lg"
            : "bg-white text-[#0B1B33] border border-[#E5ECF5] hover:border-[#4f8fcb]"
        }
      `}
              >
                {department.label}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div
            className="
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-8
    "
          >
            {allMembers
              .filter((member) =>
                activeDepartment === "all"
                  ? true
                  : member.departmentId === activeDepartment,
              )
              .map((member) => (
                <div
                  key={`${member.departmentId}-${member.name}`}
                  className="relative h-[500px] overflow-hidden rounded-[36px] bg-[#F3F5F8] group"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110 cursor-pointer
              "
                    />
                  </div>

                  <div
                    className="
    absolute
    left-5
    right-5
    bottom-5

    bg-white/95
    backdrop-blur-md

    rounded-[28px]

    p-6

    shadow-xl

    transition-all
    duration-500

    h-[140px]

    group-hover:h-[240px]
  "
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3>{member.name}</h3>

                        <p>{member.title}</p>
                      </div>

                      <div
                        className="w-3 h-3 rounded-full mt-2"
                        style={{
                          backgroundColor: member.color,
                        }}
                      />
                    </div>

                    {member.bio && (
                      <p
                        className="
      mt-4
      text-[#0B1B33]/70
      leading-relaxed

      opacity-0
      max-h-0

      overflow-hidden

      transition-all
      duration-500

      group-hover:opacity-100
      group-hover:max-h-[120px]
    "
                      >
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
