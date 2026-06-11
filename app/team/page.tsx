"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";

export default function TeamPage() {
  const [openDepartment, setOpenDepartment] = useState<string | null>(
    "strategic-operations",
  );
  const [activeDepartment, setActiveDepartment] = useState("all");

  const [videoLoaded, setVideoLoaded] = useState(false);

  const departments = [
    // Strategic Operations
    {
      id: "strategic-operations",
      number: "01",
      name: "Strategic Operations",
      description:
        "Helping businesses build stronger systems, improve coordination, and create scalable operational processes that support long-term growth.",
      color: "#1E3D6E",

      lead: {
        name: "Martha Nguyen",
        title: "Lead Strategic Operations",
        image: "/team/martha.jpeg",
        bio: "Leads operational strategy, team coordination, and process improvement initiatives.",
      },

      members: [
        {
          name: "Khue Vu",
          title: "Operations Coordinator",
          image: "/team/khue-vu.webp",
          bio: "Supports operational efficiency through coordination and execution.",
        },

        {
          name: "Elly Le",
          title: "Customer Support Specialist",
          image: "/team/linh-le.webp",
          bio: "Coordinates daily operations and supports workflow execution.",
        },
        {
          name: "Jessica Tran",
          title: "Executive Assistant",
          image: "/team/8.webp",
          bio: "Coordinates schedules, documentation, and team support.",
        },
        {
          name: "Hannah Nguyen",
          title: "Project Coordinator",
          image: "/team/9.webp",
          bio: "Coordinates project timelines, deliverables, and communication.",
        },
        {
          name: "Olivia Le",
          title: "Administrative Specialist",
          image: "/team/10.webp",
          bio: "Provides administrative support and ensures operational consistency.",
        },
        {
          name: "Vivian Ho",
          title: "Process Improvement Associate",
          image: "/team/11.webp",
          bio: "Provides customer support and service coordination.",
        },
      ],
    },
    // Targeted Sales
    {
      id: "targeted-sales",
      number: "02",
      name: "Targeted Sales",
      description:
        "Helping businesses strengthen customer relationships, improve sales consistency, and create sustainable revenue growth through structured sales and customer support operations.",
      color: "#4F8DC9",

      lead: {
        name: "Grace Tran",
        title: "Lead Targeted Sales",
        image: "/team/13.webp",
        bio: "Builds prospect databases and supports business development efforts.",
      },

      members: [
        {
          name: "Natalie Pham",
          title: "Business Growth Representatives",
          image: "/team/12.webp",
          bio: "Supports prospecting and outbound sales activities.",
        },

        {
          name: "Levi Le",
          title: "Marketing & Project Coordinator",
          image: "/team/levi.webp",
          bio: "Supports lead generation and sales outreach.",
        },
        {
          name: "Emma Vo",
          title: "CRM Coordinator",
          image: "/team/14.webp",
          bio: "Maintains CRM accuracy and supports customer relationship management.",
        },
        {
          name: "Ruby Nguyen",
          title: "Business Growth Representatives",
          image: "/team/15.webp",
          bio: "Supports client relationships and ensures positive customer experiences.",
        },
        {
          name: "Chloe Dang",
          title: "Sales Support Specialist",
          image: "/team/16.webp",
          bio: "Assists sales teams with documentation, reporting, and coordination.",
        },
      ],
    },
    // Accouting & Legal
    {
      id: "accounting-legal",
      number: "03",
      name: "Accounting & Legal",
      description:
        "Helping businesses maintain accurate financial records, improve operational compliance, and gain greater visibility into the financial performance of their organisation.",
      color: "#C07838",

      lead: {
        name: "Lucia Truong",
        title: "Lead Accounting & Legal",
        image: "/team/6.webp",
        bio: "Accounting and legal support services.",
      },

      members: [
        {
          name: "Jessica Tran",
          title: "Bookkeeper",
          image: "/team/17.webp",
          bio: "Supports bookkeeping activities, reconciliations, and financial reporting.",
        },
        {
          name: "Amy Le",
          title: "Accounts Coordinator",
          image: "/team/18.webp",
          bio: "Manages invoices, accounts payable, and administrative finance tasks.",
        },
        {
          name: "Nicole Vu",
          title: "Compliance Assistant",
          image: "/team/19.webp",
          bio: "Supports compliance and documentation processes.",
        },
      ],
    },
    // Focused Mkt
    {
      id: "focused-marketing",
      number: "04",
      name: "Focused Marketing",
      description:
        "Helping businesses maintain visibility, strengthen brand presence, and deliver consistent marketing execution across digital, visual, and media channels.",
      color: "#2E7D62",
      lead: {
        name: "Yuko Furuta",
        title: "Lead Focused Marketing",
        image: "/team/yuko.webp",
        bio: "Delivers market insights and reporting to support strategic decisions.",
      },

      members: [
        {
          name: "Trang Ngoc Bao Tran",
          title: "Marketing & SEO Content",
          image: "/team/trang-tran.webp",
          bio: "Develops SEO content and marketing materials to support business growth.",
        },

        {
          name: "Jena Truong",
          title: "Video Editor",
          image: "/team/jena.webp",
          bio: "Edits video content and visual assets for digital marketing campaigns.",
        },
        {
          name: "Trang Phuong",
          title: "Growth Marketing Specialist",
          image: "/team/trang-phuong.webp",
          bio: "Leads marketing strategy and growth initiatives.",
        },

        {
          name: "Betty Van",
          title: "Video Editor",
          image: "/team/betty.jpeg",
          bio: "Edits video content for digital campaigns.",
        },

        {
          name: "Tiffany",
          title: "Graphic Designer",
          image: "/team/7.webp",
          bio: "Creates visual assets and brand materials to support marketing initiatives.",
        },
        {
          name: "Sarah Nguyen",
          title: "SEO Specialist",
          image: "/team/20.webp",
          bio: "Improves search visibility through keyword strategy and content optimization.",
        },
        {
          name: "Mia Pham",
          title: "Content Strategist",
          image: "/team/21.webp",
          bio: "Develops content plans aligned with business goals and audience engagement.",
        },
        {
          name: "Ella Tran",
          title: "Social Media Coordinator",
          image: "/team/22.webp",
          bio: "Manages social media scheduling, engagement, and campaign execution.",
        },
      ],
    },
    // Future Expansion
    {
      id: "future-expansion",
      number: "05",
      name: "Future Expansion",
      description:
        "Helping businesses establish the operational foundation, local coordination, and support required to enter new markets and pursue growth opportunities with confidence.",
      color: "#4A5568",

      lead: {
        name: "Ava Hoang",
        title: "Lead Future Expansion",
        image: "/team/23.webp",
        bio: "Drives project execution, team coordination, and operational success.",
      },

      members: [
        {
          name: "Alice Truong",
          title: "Software Engineer",
          image: "/team/alicetr.webp",
          bio: "Builds scalable web applications and delivers modern software solutions.",
        },
        {
          name: "Mel Vu",
          title: "Software Engineer",
          image: "/team/mel-vu.webp",
          bio: "Builds scalable software solutions that support business growth.",
        },

        {
          name: "Annie Nguyen",
          title: "UIUX Designer",
          image: "/team/annie.webp",
          bio: "Creates user-centered designs that enhance digital experiences.",
        },

        {
          name: "Lily Nguyen",
          title: "Business Analyst",
          image: "/team/24.webp",
          bio: "Analyzes business requirements and identifies growth opportunities.",
        },
        {
          name: "Sophia Vu",
          title: "Innovation Research Associate",
          image: "/team/25.webp",
          bio: "Conducts research and supports strategic initiatives.",
        },
      ],
    },
  ];

  const leaders = departments.map((department) => ({
    ...department.lead,
    color: department.color,
    departmentId: department.id,
    isLead: true,
  }));

  const teamMembers = departments.flatMap((department) =>
    department.members.map((member) => ({
      ...member,
      color: department.color,
      departmentId: department.id,
      isLead: false,
    })),
  );

  const allMembers = [...leaders, ...teamMembers];

  // console.table(allMembers);

  return (
    <>
      <main className="bg-[#f5f8fc] overflow-hidden">
        {/* Hero */}
        {/* Hero */}
        {/* Hero */}
        <section
          className="
    relative
    overflow-hidden

    text-white

    bg-[#06172D]
  "
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            className={`
      absolute
      inset-0

      h-full
      w-full

      object-cover

      transition-opacity
      duration-700

      ${videoLoaded ? "opacity-100" : "opacity-0"}
    `}
          >
            <source src="/videos/teams/hero.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div
            className="
      absolute
      inset-0

      bg-[#06172D]/20
    "
          />

          {/* Gradient Overlay */}
          <div
            className="
      absolute
      inset-0

      bg-gradient-to-b
      from-black/20
      via-[#06172D]/40
      to-[#06172D]/90
    "
          />

          {/* Hero Content */}
          <AnimatedSection direction="up" delay={0}>
            <div
              className="
        relative
        z-10

        max-w-5xl
        mx-auto

        text-center

        px-6

        pt-40
        pb-24
      "
            >
              <div className="flex justify-center">
                <span
                  className="
            inline-block
            uppercase

            text-xs
            sm:text-sm

            px-5
            py-2

            rounded-full

            font-semibold

            tracking-[0.18em]

            text-[#8FD3FF]

            bg-white/10

            backdrop-blur-md

            border
            border-white/10

            shadow-[0_4px_20px_rgba(79,141,201,0.15)]
          "
                >
                  Our Team
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl md:text-5xl mt-6 font-light">
                Meet the All-Women Team
                <br />
                Powering Your Business Execution
              </h1>

              <p className="max-w-4xl mx-auto mt-6 text-white/70 text-lg">
                Every person on our team is selected, trained, and structured
                within a specific department.
              </p>

              <div
                className="
    mt-8

    inline-flex

    rounded-full

    border
    border-[#79B9FF]/30

    bg-[#79B9FF]/10

    px-4
    sm:px-6

    py-3

    text-xs
    sm:text-sm

    whitespace-nowrap
  "
              >
                Organized through our 5-Core Support Ecosystem™
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className="pt-20 pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-[#0a1b33] mb-6">
              How Our Team Is Structured
            </h2>

            <p className="text-lg text-[#0a1b33]/70 leading-relaxed">
              STAFF United is not just a list of talented women. It is a
              structured offshore execution team organized by departments
              through our 5-Core Support Ecosystem™.
            </p>
          </div>

          <div
            className="
    mt-10

    grid
    grid-cols-2

    lg:grid-cols-6

    gap-3

    max-w-7xl
    mx-auto
  "
          >
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
    h-12
    w-full

    rounded-full

    text-xs xl:text-sm
    font-medium

    flex
    items-center
    justify-center

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

        {/* Department Description */}
        <section className="pb-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="
        uppercase font-semibold
        text-[#0a1b33]
        text-xl
       
      "
            >
              {activeDepartment === "all"
                ? "OUR TEAM"
                : departments.find(
                    (department) => department.id === activeDepartment,
                  )?.name}
            </p>

            <p
              className="
    mt-2

    text-base
    sm:text-lg

    text-[#0B1B33]/65

    leading-relaxed

    max-w-3xl
    mx-auto

    text-balance
  "
            >
              {activeDepartment === "all"
                ? "Our team is organized through five specialized departments, delivering consistent support across Strategic Operations, Targed Sales, Accounting & Legal, Focused marketing, Future Expansion."
                : departments.find(
                    (department) => department.id === activeDepartment,
                  )?.description}
            </p>
          </div>
        </section>

        {/* List Team */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDepartment}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
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
                    {member.isLead && (
                      <div
                        className="
  absolute top-5 left-5 md:top-5 md:left-5 z-20 px-2.5 py-1 md:px-4 md:py-2 rounded-full bg-[#4F8DC9] text-white text-[9px] md:text-[11px] font-semibold tracking-[0.1em] md:tracking-[0.15em] uppercase shadow-lg bg-[#4F8DC9]/90 backdrop-blur-md"
                      >
                        Team Lead
                      </div>
                    )}
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
                      className={`
    absolute
    left-5
    right-5
    bottom-5

    bg-white/95
    backdrop-blur-md overflow-hidden

    rounded-[28px]

    p-6

    shadow-xl

    transition-all
    duration-500

    h-[120px]


group-hover:h-[185px]  
md:group-hover:h-[175px]
xl:group-hover:h-[175px] group-hover:-translate-y-2

    ${member.isLead ? "ring-1 ring-[#4F8DC9]/50" : ""}
  `}
                    >
                      <div className="flex justify-between items-start transition-all duration-500 ease-out group-hover:-translate-y-1">
                        <div>
                          <h3
                            className="
        text-2xl
        font-semibold
        text-[#0B1B33]
      "
                          >
                            {member.name}
                          </h3>

                          <p
                            className="
        mt-1
        text-base
        text-[#0B1B33]/70
      "
                          >
                            {member.title}
                          </p>
                        </div>
                      </div>

                      {member.bio && (
                        <div
                          className="
      mt-4

      opacity-0
      translate-y-4

      transition-all
      duration-300

      group-hover:opacity-100 group-hover:delay-75
      group-hover:translate-y-0
    "
                        >
                          <p
                            className="
        text-sm
        text-[#0B1B33]/70
        leading-relaxed
        line-clamp-3
      "
                          >
                            {member.bio}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* One Standard */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="max-w-4xl mb-16 mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[#4F8DC9] shrink-0" />

                <span
                  className="
      text-[#4F8DC9]
      font-medium
      text-center

      text-xs
      sm:text-sm

      tracking-[0.12em]
      sm:tracking-[0.18em]
      md:tracking-[0.25em]
    "
                >
                  <span className="block sm:inline">One Standard.</span>
                  <span className="block sm:inline sm:ml-2">
                    Five Departments.
                  </span>
                </span>

                <div className="w-8 opacity-0 shrink-0" />
              </div>

              <h2
                className="
          text-3xl
          md:text-5xl
          font-semibold
          text-[#0B1B33]
          leading-tight
        "
              >
                United in Execution.
                <br />
                Consistent in Delivery.
              </h2>

              <p
                className="
          mt-6 mx-auto
          text-lg
          text-[#0B1B33]/65
          leading-relaxed
          max-w-3xl
        "
              >
                Regardless of departments, every STAFF United team member
                operates under the same shared standards — ensuring your
                business always receives consistent, accountable, and
                professional support.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div
                className="
          bg-[#F8FAFC]
          border border-[#E7EDF5]
          rounded-3xl
          p-8
          hover:shadow-lg
          transition-all
          duration-300
        "
              >
                <div
                  className="
            w-14 h-14
            rounded-2xl
            bg-[#EAF2FB]
            flex items-center justify-center
            text-2xl
            mb-6
          "
                >
                  🎯
                </div>

                <h3 className="text-2xl font-semibold text-[#0B1B33] mb-4">
                  Shared Standards
                </h3>

                <p className="text-[#0B1B33]/65 leading-relaxed">
                  Every team member operates under the same expectations for
                  quality, communication, accountability, and delivery — across
                  every department and every client.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="
          bg-[#F8FAFC]
          border border-[#E7EDF5]
          rounded-3xl
          p-8
          hover:shadow-lg
          transition-all
          duration-300
        "
              >
                <div
                  className="
            w-14 h-14
            rounded-2xl
            bg-[#EAF2FB]
            flex items-center justify-center
            text-2xl
            mb-6
          "
                >
                  🤝
                </div>

                <h3 className="text-2xl font-semibold text-[#0B1B33] mb-4">
                  Shared Responsibility
                </h3>

                <p className="text-[#0B1B33]/65 leading-relaxed">
                  Operational excellence is built around coordinated execution
                  and collective accountability — no silos, no gaps, no dropped
                  balls.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="
          bg-[#F8FAFC]
          border border-[#E7EDF5]
          rounded-3xl
          p-8
          hover:shadow-lg
          transition-all
          duration-300
        "
              >
                <div
                  className="
            w-14 h-14
            rounded-2xl
            bg-[#EAF2FB]
            flex items-center justify-center
            text-2xl
            mb-6
          "
                >
                  ⚡
                </div>

                <h3 className="text-2xl font-semibold text-[#0B1B33] mb-4">
                  Collective Execution
                </h3>

                <p className="text-[#0B1B33]/65 leading-relaxed">
                  We operate as one aligned ecosystem — five departments, one
                  direction — focused on helping your business move forward with
                  confidence and momentum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Team Page */}
        <section
          className="
    relative
    overflow-hidden

    bg-[#081F4D]

    py-24
    md:py-32

    px-6
  "
        >
          {/* WATERMARK */}
          {/* <div
            className="
      absolute
      inset-0

      flex
      items-center
      justify-center

      pointer-events-none
    "
          >
            <div
              className="
    text-white/[0.03]
    font-black
    uppercase
    select-none
    text-center

    flex
    flex-col
    items-center
  "
            >
              <div
                className="
    tracking-[0.15em]

    text-[60px]
    md:text-[120px]
    xl:text-[180px]

    -mb-2
    md:-mb-4
    xl:-mb-6

    -translate-y-3
    md:-translate-y-5
  "
              >
                STAFF UNITED
              </div>

              <div
                className="
    tracking-[0.35em]

    text-[40px]
    md:text-[80px]
    xl:text-[120px]

    translate-y-3
    md:translate-y-5
  "
              >
                GROUP
              </div>
            </div>
          </div> */}

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* TOP LABEL */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#5EA6F4]" />

              <span
                className="
    text-[#5EA6F4]

    uppercase

    text-[10px]
    sm:text-xs
    md:text-sm

    tracking-[0.12em]
    sm:tracking-[0.18em]
    md:tracking-[0.25em]

    whitespace-nowrap
  "
              >
                Ready To Work With Us?
              </span>

              <div className="w-12 h-[1px] bg-[#5EA6F4]" />
            </div>

            {/* HEADING */}
            <h2
              className="
        text-white

        text-4xl
        md:text-5xl
        xl:text-6xl

        font-semibold

        leading-tight
      "
            >
              Let's build your support
              <br />
              structure together.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
        mt-8

        text-white/75

        text-lg

        leading-relaxed

        max-w-3xl
        mx-auto
      "
            >
              Whether you need one department or all five, STAFF United has the
              structured team and execution capability to support your business
              at every stage of growth.
            </p>

            {/* TRUST BADGES */}
            <div
              className="
        flex
        flex-wrap
        justify-center

        gap-4

        mt-10
      "
            >
              {[
                "✓ All women. All business.",
                "✓ Vietnam-based. Globally delivered.",
                "✓ Structured for scale.",
              ].map((item) => (
                <div
                  key={item}
                  className="
            px-6
            py-3

            rounded-full

            border
            border-[#2B4E86]

            bg-[#0E2A5D]

            text-white/90
            text-sm
          "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              className="
        flex
        flex-col
        sm:flex-row

        justify-center

        gap-4

        mt-12
      "
            >
              <Link
                href="/request-support"
                className="
          px-10
          py-4

          rounded-xl

          bg-[#5EA6F4]

          text-white

          font-medium

          hover:scale-105

          transition-all
        "
              >
                Request Support
              </Link>

              <Link
                href="/join"
                className="
          px-10
          py-4

          rounded-xl

          border

          border-white/20

          text-white

          hover:bg-white/10

          transition-all
        "
              >
                Join the Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
