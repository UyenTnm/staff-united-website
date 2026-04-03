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
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#0f766e] text-white py-20 px-6">
        <h1 className="text-4xl font-bold mb-4 max-w-3xl">
          Join STAFF United today and keep maximizing your potential.
        </h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Work with the best talents, on successful brands, across global
          projects.
        </p>
      </section>

      {/* JOB LIST */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Current Openings</h2>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.slug}
              className="border rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>

                <div className="flex gap-2 text-sm text-gray-500 mt-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold">
                    {job.department}
                  </span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>

              <Link
                href={`/careers/${job.slug}`}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
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
