import React from "react";
import Link from "next/link";
import { Job } from "@/data/jobs";

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
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#0f766e] text-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
            Join STAFF United today <br />
            and keep maximizing your potential.
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
            Work with the best talents, on successful brands, across global
            projects.
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
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">
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
                className="w-full sm:w-auto text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
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
