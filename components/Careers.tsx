import React from "react";
import Link from "next/link";
import { Job } from "@/data/jobs";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

// Mock data (sau này thay bằng API/CMS)
// const jobs = [
//   {
//     slug: "senior-ads-specialist",
//     title: "Senior Ads Solutions Specialist",
//     department: "Marketing",
//     location: "Ho Chi Minh",
//     type: "Full-time",
//   },
//   {
//     slug: "creative-content-specialist",
//     title: "Creative Content Specialist",
//     department: "Marketing",
//     location: "Ho Chi Minh",
//     type: "Full-time",
//   },
// ];

export default function Careers({ jobs }: { jobs: Job[] }) {
  return (
    <div>
      {/* HERO */}

      <section className="relative w-full h-[520px] sm:h-[560px] md:h-[600px] overflow-hidden">
        {/* MOBILE + TABLET */}
        <Image
          src="/careers/hero-banner-mobile.jpeg"
          alt="Careers Hero"
          fill
          priority
          className="object-cover object-center block md:hidden"
        />

        {/* DESKTOP */}
        <Image
          src="/careers/hero-banner.jpeg"
          alt="Careers Hero"
          fill
          priority
          className="object-cover object-center hidden md:block"
        />

        {/* OVERLAY */}
        {/* <div className="absolute inset-0 bg-[#0a1b33]/60"></div> */}

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center text-center text-white space-y-5 sm:space-y-6 fade-up active">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light leading-[1.2] tracking-tight md:tracking-[-0.02em]">
            Join{" "}
            <span className="font-medium">
              <span className="text-[#6ea8de] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                STA
              </span>
              FF
            </span>{" "}
            United today <br />
            and keep maximizing your potential.
          </h1>

          <p className="text-sm sm:text-base md:text-2xl text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Work with the best talents, on successful brands,{" "}
            <span className="whitespace-nowrap">across global projects.</span>
          </p>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="px-4 sm:px-6 pt-16 pb-16 max-w-5xl mx-auto">
        <AnimatedSection direction="up">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">
            Current Openings
          </h2>
        </AnimatedSection>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <AnimatedSection key={job.slug} direction="up" delay={i * 0.05}>
              <Link
                href={`/careers/${job.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
  group relative
  bg-white/80 backdrop-blur-sm
  border border-gray-200
  rounded-2xl p-5
  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4

  transition-all duration-300
  hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]
  hover:-translate-y-1

  before:absolute before:inset-0
  before:rounded-2xl
  before:border before:border-[#4f8fcb]/0
  before:transition-all before:duration-300

  hover:before:border-[#4f8fcb]/40
  hover:before:shadow-[0_0_20px_rgba(79,143,203,0.4)]
"
              >
                {/* LEFT */}
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mt-2">
                    <span className="bg-[#4f8fcb]/10 text-[#4f8fcb] px-2.5 py-1 rounded-full text-xs font-semibold">
                      {job.department}
                    </span>

                    <span className="hidden sm:inline">•</span>
                    <span>{job.location}</span>

                    <span className="hidden sm:inline">•</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="relative overflow-hidden w-full sm:w-auto text-center px-4 py-2 rounded-full text-sm sm:text-base bg-[#0b1b33] text-white transition-all duration-300 group-hover:scale-105">
                  <span className="relative z-10">Read more →</span>

                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
