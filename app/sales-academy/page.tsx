"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/* -------------------------------------------------------------------- */
/* Shared bits                                                            */
/* -------------------------------------------------------------------- */
function FallingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.4 + 0.15,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    let raf: number;
    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(79, 141, 201, ${p.opacity})`;
        ctx!.fill();
        p.y += p.speed;
        if (p.y > height) {
          p.y = -5;
          p.x = Math.random() * width;
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    function handleResize() {
      width = canvas!.width = canvas!.offsetWidth;
      height = canvas!.height = canvas!.offsetHeight;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-60"
    />
  );
}

function GridHoverButton({ dark = false }: { dark?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="https://academy.staffunitedgroup.com/login"
      target="_blank"
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
        Enter&nbsp;the&nbsp;Academy →
      </span>
    </Link>
  );
}

/** variant "dark" = navy background, white text. "light" = white background, navy text. */
type Variant = "dark" | "light";

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

/** Wraps a section in full-bleed background, alternating light/dark. */
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

/* -------------------------------------------------------------------- */
/* Section 1: Why This Exists (LIGHT)                                    */
/* -------------------------------------------------------------------- */
function WhyThisExists() {
  return (
    <AltSection variant="light">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow variant="light">Why This Exists</Eyebrow>
        <h2 className="mt-4 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Where careers start.
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm sm:text-base md:text-lg text-[#4a596e] leading-relaxed">
          <p>
            The purpose of the STAFF United Training Academy is to help young
            women develop the{" "}
            <strong className="text-[#0a1b33]">
              practical skills, professional confidence, and international
              business knowledge
            </strong>{" "}
            they need to succeed in today&apos;s global workplace.
          </p>
          <p>
            Through structured training, real-world application, and continuous
            development, the Academy strengthens employee performance while
            creating meaningful opportunities for women in Vietnam to grow their
            careers, expand their capabilities, and prepare for future
            leadership.
          </p>
        </div>
      </motion.div>
    </AltSection>
  );
}

/* -------------------------------------------------------------------- */
/* Section 2: Five courses. One roadmap. (DARK)                          */
/* -------------------------------------------------------------------- */
type CourseCard = {
  courseLabel: string;
  tag: string;
  title: string;
  description: string;
  status: "available" | "soon";
};

const COURSES: CourseCard[] = [
  {
    courseLabel: "Course 01",
    tag: "Targeted Sales",
    title: "Targeted Sales Fundamentals",
    description:
      "Identify opportunities, understand clients, represent STAFF United accurately, and begin the right long-term relationships. 3 days · 10 modules · certification.",
    status: "available",
  },
  {
    courseLabel: "Course 02",
    tag: "Strategic Operations",
    title: "Strategic Operations & Project Execution",
    description:
      "Running operations and projects with the same structure and accountability we promise every client.",
    status: "soon",
  },
  {
    courseLabel: "Course 03",
    tag: "Focused Marketing",
    title: "Focused Marketing & Digital Business",
    description:
      "Building brand, content, and digital presence for STAFF United and the clients we support.",
    status: "soon",
  },
  {
    courseLabel: "Course 04",
    tag: "",
    title: "Leadership & Team Performance",
    description:
      "Developing the next generation of STAFF United team leads and future managers.",
    status: "soon",
  },
  {
    courseLabel: "Course 05",
    tag: "",
    title: "Information Security & Data Protection",
    description:
      "Protecting client, company, and personal data across every offshore engagement.",
    status: "soon",
  },
];

function CourseGrid() {
  return (
    <AltSection variant="dark">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow variant="dark">The Academy</Eyebrow>
        <h2 className="mt-4 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Five courses. One roadmap.
        </h2>
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-[#d5dadf]">
          We&apos;re building the Academy one course at a time — starting with
          the skill every STAFF United team member relies on first.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        {COURSES.map((course) => {
          const available = course.status === "available";
          return (
            <motion.div
              key={course.courseLabel}
              variants={fadeUp}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col ${
                available
                  ? "bg-white text-[#0a1b33] border-2 border-[#4f8dc9]"
                  : "bg-[#132a4a] border border-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-widest ${
                    available ? "text-[#2a6ea3]" : "text-white/40"
                  }`}
                >
                  {course.courseLabel}
                </span>
                {course.tag && (
                  <span
                    className={`text-[10px] uppercase tracking-widest ${
                      available ? "text-[#4a596e]" : "text-white/30"
                    }`}
                  >
                    {course.tag}
                  </span>
                )}
              </div>

              <h3
                className={`mt-3 font-bold text-lg sm:text-xl text-balance ${
                  available ? "text-[#0a1b33]" : "text-white"
                }`}
              >
                {course.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-relaxed flex-1 ${
                  available ? "text-[#4a596e]" : "text-white/70"
                }`}
              >
                {course.description}
              </p>

              <div className="mt-6">
                {available ? (
                  <Link
                    href="https://academy.staffunitedgroup.com/login"
                    target="_blank"
                    className="inline-block rounded-full bg-[#4f8dc9] px-5 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:opacity-90"
                  >
                    Available Now →
                  </Link>
                ) : (
                  <span className="inline-block rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-widest text-white/40">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </AltSection>
  );
}

/* -------------------------------------------------------------------- */
/* Section 3: Now Launching · Course 01 (LIGHT)                          */
/* -------------------------------------------------------------------- */
function NowLaunching() {
  return (
    <AltSection variant="light">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <Eyebrow variant="light">Now Launching · Course 01</Eyebrow>
        <h2 className="mt-4 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Targeted Sales Fundamentals
        </h2>
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
/* Section 4: Learning Cycle (DARK)                                      */
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
/* Section 5: Curriculum (LIGHT)                                         */
/* -------------------------------------------------------------------- */
type CurriculumModule = { num: string; title: string; description: string };
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
/* Section 6: Certification Outcomes (DARK)                              */
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
/* Section 7: Final CTA (LIGHT page bg, dark card for contrast)          */
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
/* Main page                                                             */
/* -------------------------------------------------------------------- */
export default function AcademyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero — dark, keeps particles + rings */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0b1b33 0%, #0d2140 35%, #103663 60%, #0b1b33 100%)",
        }}
      >
        <FallingParticles />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full border border-[#4a596e]/30 hidden sm:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -right-64 top-40 h-[600px] w-[600px] rounded-full border border-[#4a596e]/15 hidden sm:block"
        />

        <div
          className="
            relative z-10 mx-auto
            max-w-[92vw] 2xl:max-w-[1800px]
            px-5 sm:px-6 md:px-10
            pt-24 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-44 2xl:pt-48
            pb-16 sm:pb-20 md:pb-24
          "
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 uppercase font-medium text-[#4f8dc9] text-xs sm:text-sm md:text-base tracking-[0.2em]"
          >
            <span className="h-px w-8 bg-[#4f8dc9] shrink-0" />
            Staff United Sales Academy
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-bold leading-tight max-w-7xl text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Every client relationship</span>
            <span className="block">starts with</span>
            <span className="block text-[#4f8dc9]">the right foundation.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-white leading-relaxed max-w-2xl text-sm sm:text-base md:text-lg"
          >
            A three-day certification program for every STAFF United Business
            Growth Representative — built to teach how we identify
            opportunities, understand clients, represent our 5-Core Support
            Ecosystem™ accurately, and begin the right long-term relationships.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <GridHoverButton />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
            className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 border-t border-[#4a596e]/40"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.12 }}
            className="mt-8 sm:mt-10 md:mt-12 mx-auto max-w-xl sm:max-w-none grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8 sm:gap-x-10 md:gap-x-16 items-start text-center"
          >
            <Stat number={3} label="Training days" />
            <Stat number={10} label="Core modules" />
            <Stat number="80%+" label="To certify" />
            <Stat number="30-Day" label="Follow-up review" />
          </motion.div>
        </div>
      </section>

      {/* Alternating light/dark sections */}
      <WhyThisExists />
      <CourseGrid />
      <NowLaunching />
      <LearningCycle />
      <Curriculum />
      <CertificationOutcomes />
      <FinalCTA />
    </main>
  );
}

function Stat({ number, label }: { number: string | number; label: string }) {
  const isNumeric = typeof number === "number";
  const [display, setDisplay] = useState(isNumeric ? 0 : number);

  useEffect(() => {
    if (!isNumeric) return;
    const target = number as number;
    const duration = 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isNumeric, number]);

  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center">
      <p className="font-bold text-white leading-none text-2xl sm:text-3xl md:text-4xl">
        {display}
      </p>
      <p className="mt-2 uppercase text-[#d5dadf]/50 font-mono leading-none text-[11px] sm:text-xs tracking-[0.15em] whitespace-nowrap">
        {label}
      </p>
    </motion.div>
  );
}
