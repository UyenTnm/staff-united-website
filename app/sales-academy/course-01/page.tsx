"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

/* -------------------------------------------------------------------- */
/* Shared bits                                                          */
/* -------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type Variant = "dark" | "light";

function AltSection({
  variant,
  className = "",
  children,
}: {
  variant: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`relative w-full ${
        variant === "dark"
          ? "bg-[#0a1b33] text-white"
          : "bg-white text-[#0a1b33]"
      }`}
    >
      <div
        className={`relative z-10 mx-auto max-w-[92vw] 2xl:max-w-[1400px] px-5 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

function Eyebrow({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: Variant;
}) {
  return (
    <p
      className={`flex items-center gap-3 uppercase font-medium text-xs sm:text-sm tracking-[0.2em] ${
        variant === "dark" ? "text-[#7fb2e0]" : "text-[#2a6ea3]"
      }`}
    >
      <span
        className={`h-px w-8 shrink-0 ${
          variant === "dark" ? "bg-[#7fb2e0]" : "bg-[#2a6ea3]"
        }`}
      />

      {children}
    </p>
  );
}

/* -------------------------------------------------------------------- */
/* Course Login Button                                                  */
/* -------------------------------------------------------------------- */

function GridHoverButton({ dark = false }: { dark?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="https://academy.staffunitedgroup.com/login"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative inline-flex items-center gap-2 rounded-full
        font-semibold transition-all duration-300 overflow-hidden
        hover:-translate-y-0.5 active:scale-[0.98]
        text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4
        ${dark ? "bg-[#0a1b33] text-white" : "bg-[#4f8dc9] text-[#0b1b33]"}
      `}
    >
      <motion.span
        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
        }}
        initial={{ x: "-80px" }}
        animate={hovered ? { x: "260px" } : { x: "-80px" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      <span className="relative z-10 flex items-center gap-2">
        Enter&nbsp;the&nbsp;Course →
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------- */
/* Section 1: Now Launching · Course 01 (LIGHT)                         */
/* -------------------------------------------------------------------- */

function NowLaunching() {
  return (
    <AltSection variant="light" className="pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow variant="light">Now Launching · Course 01</Eyebrow>

        <h1 className="mt-4 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Targeted Sales Fundamentals
        </h1>

        <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-[#4a596e] leading-relaxed">
          A three-day certification program for every STAFF United Business
          Growth Representative — built to teach how we identify opportunities,
          understand clients, represent our 5-Core Support Ecosystem™
          accurately, and begin the right long-term relationships.
        </p>

        <div className="mt-8 max-w-2xl rounded-r-xl border-l-4 border-[#4f8dc9] bg-[#eaf2fa] p-6 sm:p-8">
          <p className="text-base sm:text-lg md:text-xl text-[#0a1b33] leading-relaxed italic">
            &ldquo;The purpose of sales is not simply to win a client. The
            purpose of sales is to begin the right long-term business
            relationship.&rdquo;
          </p>
        </div>
      </motion.div>
    </AltSection>
  );
}

/* -------------------------------------------------------------------- */
/* Section 2: Learning Cycle (DARK)                                     */
/* -------------------------------------------------------------------- */

const LEARNING_CYCLE = [
  { step: "01", label: "Core Lesson" },
  { step: "02", label: "Examples & Standards" },
  { step: "03", label: "Discussion" },
  { step: "04", label: "Practical Activity" },
  { step: "05", label: "8-Question Quiz" },
  { step: "06", label: "Confidence Check" },
];

function LearningCycle() {
  return (
    <AltSection variant="dark">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow variant="dark">Learning Cycle</Eyebrow>

        <h2 className="mt-4 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl">
          The same rhythm, every single time.
        </h2>

        <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#7fb2e0]">
          Preview → Instructor-Led Learning → Practice → Review → Examination
        </p>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#d5dadf]">
          That five-stage rhythm shapes the entire three-day program. Inside
          every single module, the same discipline repeats in six smaller steps:
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {LEARNING_CYCLE.map((item, idx) => (
          <motion.div
            key={item.step}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="flex flex-col rounded-xl border border-white/10 bg-[#132a4a] p-4 sm:p-5 min-h-[104px] sm:min-h-[112px]"
          >
            <span className="text-xs font-bold text-[#7fb2e0]">
              {item.step}
            </span>

            <p className="mt-2 font-semibold text-white text-sm sm:text-base leading-snug">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </AltSection>
  );
}

/* -------------------------------------------------------------------- */
/* Section 3: Curriculum (LIGHT)                                       */
/* -------------------------------------------------------------------- */

type CurriculumModule = {
  num: string;
  title: string;
  description: string;
};

type CurriculumDay = {
  label: string;
  intro: string;
  modules: CurriculumModule[];
};

const CURRICULUM: CurriculumDay[] = [
  {
    label: "Day 1 — Foundations",
    intro:
      "Baseline assessment, the Northstar Construction Group scenario, and the four modules that establish how we show up with every client.",
    modules: [
      {
        num: "01",
        title: "Sales Philosophy & Professional Standards",
        description:
          "The purpose of sales, professional standards, confidence without arrogance, and sales ethics.",
      },
      {
        num: "02",
        title: "Relationships, First Impressions & Client Experience",
        description:
          "How trust and first impressions shape every buying decision.",
      },
      {
        num: "03",
        title: "Listening & Understanding Clients",
        description:
          "Active listening, curiosity, and asking better questions.",
      },
      {
        num: "04",
        title: "Understanding & Representing STAFF United",
        description:
          "Positioning, the 5-Core Support Ecosystem™, and approved terminology.",
      },
    ],
  },

  {
    label: "Day 2 — Finding Opportunities",
    intro:
      "Prospecting, qualification, and running the discovery meetings that turn interest into a real opportunity.",
    modules: [
      {
        num: "05",
        title: "Prospecting, Outreach, Research & Preparation",
        description:
          "Finding the right companies and preparing for the first conversation.",
      },
      {
        num: "06",
        title: "Qualification, Stakeholders & the Client Decision Process",
        description:
          "Confirming whether an opportunity is real, suitable, and worth pursuing.",
      },
      {
        num: "07",
        title: "Discovery Meetings & Client Video Calls",
        description:
          "Running a professional discovery call and ending with a clear next step.",
      },
    ],
  },

  {
    label: "Day 3 — Moving the Sale Forward",
    intro:
      "Recommendations, objection handling, closing, and everything that happens after the sale is won.",
    modules: [
      {
        num: "08",
        title: "Recommendations, Proposals & Presentations",
        description:
          "Turning client information into a relevant recommendation and proposal.",
      },
      {
        num: "09",
        title: "Objections, Negotiation & Closing",
        description:
          "Responding to concerns, negotiating professionally, and asking for a decision.",
      },
      {
        num: "10",
        title: "Follow-Up, Pipeline, Complaints, Handover & Growth",
        description:
          "Managing opportunities after the meeting and supporting long-term client relationships.",
      },
    ],
  },
];

function Curriculum() {
  const [activeDay, setActiveDay] = useState(0);
  const day = CURRICULUM[activeDay];

  return (
    <AltSection variant="light">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow variant="light">The Curriculum</Eyebrow>

        <h2 className="mt-4 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          10 modules, delivered across three focused days.
        </h2>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-b border-[#d5dadf]">
        {CURRICULUM.map((d, idx) => (
          <button
            key={d.label}
            onClick={() => setActiveDay(idx)}
            className={`pb-3 text-sm sm:text-base font-semibold transition-colors cursor-pointer ${
              idx === activeDay
                ? "text-[#0a1b33] border-b-2 border-[#4f8dc9]"
                : "text-[#4a596e]/60 hover:text-[#4a596e]"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <p className="mt-6 max-w-2xl text-sm sm:text-base text-[#4a596e]">
        {day.intro}
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {day.modules.map((m) => (
          <div
            key={m.num}
            className="flex items-start gap-4 rounded-xl border border-[#d5dadf] bg-[#f7f9fb] p-5 sm:p-6"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#4f8dc9]/15 text-sm font-bold text-[#2a6ea3]">
              {m.num}
            </span>

            <div>
              <h3 className="font-bold text-[#0a1b33] text-sm sm:text-base">
                {m.title}
              </h3>

              <p className="mt-1 text-xs sm:text-sm text-[#4a596e] leading-relaxed">
                {m.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AltSection>
  );
}

/* -------------------------------------------------------------------- */
/* Section 4: Certification Outcomes (DARK)                             */
/* -------------------------------------------------------------------- */

type Outcome = {
  label: string;
  title: string;
  points: string[];
  accent: string;
};

const OUTCOMES: Outcome[] = [
  {
    label: "Outcome",
    title: "Certified",
    points: [
      "All 10 modules complete",
      "All daily exams passed",
      "80%+ on practical assessment",
      "No critical failures",
    ],
    accent: "#3fae6a",
  },

  {
    label: "Outcome",
    title: "Provisionally Certified",
    points: [
      "Meets the knowledge standard",
      "Needs coaching in one area",
      "30-day follow-up review",
      "Supervised client activity",
    ],
    accent: "#4f8dc9",
  },

  {
    label: "Outcome",
    title: "Not Yet Certified",
    points: [
      "Score not yet met",
      "Or a critical failure occurred",
      "Further training required",
      "Re-attempt after review",
    ],
    accent: "#c9504f",
  },
];

function CertificationOutcomes() {
  return (
    <AltSection variant="dark">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow variant="dark">Certification Outcomes</Eyebrow>

        <h2 className="mt-4 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Certification is earned, not assumed.
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-[#d5dadf]">
          Completing the lessons alone does not result in certification. Every
          representative is measured against the same standard.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
      >
        {OUTCOMES.map((o) => (
          <motion.div
            key={o.title}
            variants={fadeUp}
            className="rounded-2xl border-t-4 bg-[#132a4a] p-6 sm:p-7"
            style={{ borderTopColor: o.accent }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              {o.label}
            </span>

            <h3 className="mt-2 font-bold text-white text-lg sm:text-xl">
              {o.title}
            </h3>

            <ul className="mt-4 space-y-2">
              {o.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm text-white/70"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#7fb2e0]" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </AltSection>
  );
}

/* -------------------------------------------------------------------- */
/* Section 5: Final CTA (LIGHT page bg, dark card for contrast)         */
/* -------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <AltSection variant="light">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-[#0a1b33] px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center"
      >
        <p className="flex items-center justify-center gap-3 uppercase font-medium text-[#7fb2e0] text-xs sm:text-sm tracking-[0.2em]">
          <span className="h-px w-8 bg-[#7fb2e0] shrink-0" />
          For STAFF United Team Members
          <span className="h-px w-8 bg-[#7fb2e0] shrink-0" />
        </p>

        <h2 className="mt-5 font-bold leading-tight text-white text-xl sm:text-3xl md:text-4xl max-w-3xl mx-auto">
          Your cohort, your progress, your certification — all in one place.
        </h2>

        <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base text-[#d5dadf]">
          Log in to pick up where you left off, review the Northstar
          Construction Group scenario, and track your path to certification.
        </p>

        <div className="mt-8 flex justify-center">
          <GridHoverButton />
        </div>
      </motion.div>
    </AltSection>
  );
}

/* -------------------------------------------------------------------- */
/* Course 01 Page                                                       */
/* -------------------------------------------------------------------- */

export default function Course01Page() {
  return (
    <main className="min-h-screen">
      {/* -------------------------------------------------------------- */}
      {/* Course 01 Header                                               */}
      {/* -------------------------------------------------------------- */}

      {/* <section className="relative overflow-hidden bg-[#0a1b33] text-white">
        <div
          className="
            relative z-10 mx-auto
            max-w-[92vw] 2xl:max-w-[1400px]
            px-5 sm:px-6 md:px-10
            py-6 sm:py-8
          "
        >
          <Link
            href="/sales-academy"
            className="
              inline-flex items-center gap-2
              text-xs sm:text-sm
              font-semibold uppercase
              tracking-[0.15em]
              text-[#7fb2e0]
              transition-colors
              hover:text-white
            "
          >
            ← Back to Academy
          </Link>
        </div>
      </section> */}

      {/* -------------------------------------------------------------- */}
      {/* Course Content                                                 */}
      {/* -------------------------------------------------------------- */}

      <NowLaunching />

      <LearningCycle />

      <Curriculum />

      <CertificationOutcomes />

      <FinalCTA />
    </main>
  );
}
