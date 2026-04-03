"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/data/jobs";
import { ArrowLeft } from "lucide-react";
import { Job } from "@/data/jobs";

const headings = [
  // Travel job
  "Design Distinctive Travel Experiences",
  "Develop Premium Travel Packages",
  "Content & Presentation",
  "Structure & Systems",
  "Collaboration",
  "Continuous Improvement",

  // Developer job
  "Website Development",
  "Performance & Optimization",
  "Maintenance & Improvement",

  // Operations job
  "Tenant Communication",
  "Leasing & Application Management",
  "Property Operations",
  "Digital Marketing",
  "Systems & Organization",

  // Shared
  "Core Skills",
  "Mindset",
  "Nice to Have",
];

export default function JobDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return <div className="p-6">Job not found</div>;
  }

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-12">
      {/* CONTAINER */}

      <div className="max-w-3xl mx-auto">
        {/* BACK BUTTON */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-4 transition"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        {/* HEADER */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {job.title}
          </h1>

          {/* META */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            {/* BADGE */}
            <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-semibold">
              {job.department}
            </span>

            <span className=" sm:inline">•</span>
            <span>{job.location}</span>

            <span className=" sm:inline">•</span>
            <span>{job.type}</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 sm:space-y-8">
          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {job.description}
          </p>

          {/* SECTIONS */}
          {job.sections?.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              items={section.content}
            />
          ))}
          {job.benefits && <Section title="Benefits" items={job.benefits} />}

          {/* APPLY BUTTON */}
          <Link
            href={`/join?job=${job.slug}`}
            className="block w-full sm:w-auto text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <ul className="space-y-2 text-gray-700">
        {items.map((item, index) => {
          const cleanItem = item.trim().toLowerCase();

          const isHeading = headings.some((h) => h.toLowerCase() === cleanItem);

          return isHeading ? (
            <li key={index} className="font-semibold mt-4">
              {item}
            </li>
          ) : (
            <li key={index} className="list-disc ml-5">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
