import React from "react";
import Link from "next/link";
import { Job } from "@/data/jobs";
import Image from "next/image";

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

      <section className="relative w-full h-[420px] md:h-[600px] overflow-hidden">
        {/* IMAGE */}
        <Image
          src="/careers/hero-banner.jpeg"
          alt="Careers Hero"
          fill
          priority
          className="object-cover object-[center_30%]"
        />

        {/* OVERLAY */}
        {/* <div className="absolute inset-0 bg-[#0b1b33]/70" /> */}

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-center text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
            Join STAFF United today <br />
            and keep maximizing your potential.
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
            Work with the best talents, on successful brands,{" "}
            <span className="whitespace-nowrap">across global projects.</span>
          </p>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="px-4 sm:px-6 py-10 sm:py-12 max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Current Openings</h2>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.slug}
              className="border rounded-xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:shadow-md transition"
            >
              {/* LEFT */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mt-2">
                  <span className="bg-[#4f8fcb]/10 text-[#0b1b33] px-2.5 py-1 rounded-full text-xs font-semibold">
                    {job.department}
                  </span>

                  <span className="hidden sm:inline">•</span>
                  <span>{job.location}</span>

                  <span className="hidden sm:inline">•</span>
                  <span>{job.type}</span>
                </div>
              </div>

              {/* RIGHT */}
              <Link
                href={`/careers/${job.slug}`}
                className="w-full sm:w-auto text-center bg-[#0b1b33]  text-white px-4 py-2 rounded-lg hover:bg-[#0b1b33]/90 transition text-sm sm:text-base"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
