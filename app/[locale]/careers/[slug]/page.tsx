// "use client";

// import { useParams } from "next/navigation";
import Link from "next/link";
// import { jobs } from "@/data/jobs";
import { getJobBySlug } from "@/lib/sanity";
import { ArrowLeft } from "lucide-react";

const headings = [
  "Design Distinctive Travel Experiences",
  "Develop Premium Travel Packages",
  "Content & Presentation",
  "Structure & Systems",
  "Collaboration",
  "Continuous Improvement",
  "Website Development",
  "Performance & Optimization",
  "Maintenance & Improvement",
  "Tenant Communication",
  "Leasing & Application Management",
  "Property Operations",
  "Digital Marketing",
  "Systems & Organization",
  "Core Skills",
  "Mindset",
  "Nice to Have",
];

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = await getJobBySlug(slug);

  if (!job) {
    return <div className="p-6">Job not found</div>;
  }

  return (
    <div className="px-4 sm:px-6 pt-28 md:pt-32 lg:pt-36 pb-12">
      <div className="max-w-3xl mx-auto">
        {/* BACK */}
        <Link
          href="/careers"
          className="
            group inline-flex items-center gap-2
            px-4 py-2 mb-8
            rounded-full
            bg-white/80 backdrop-blur-sm
            border border-gray-200
            text-[#0b1b33]
            text-sm font-medium
            transition-all duration-300
            hover:bg-white
            hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
          "
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back
        </Link>

        {/* HEADER */}
        <div className="mb-10 sm:mb-12 pb-6 border-b border-gray-200/60">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#0b1b33] leading-tight">
            {job.title}
          </h1>

          {/* META */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <span className="bg-[#4f8fcb]/10 text-[#4f8fcb] px-3 py-1 rounded-full text-xs font-semibold">
              {job.department}
            </span>

            <span className="opacity-40">•</span>
            <span>{job.location}</span>

            <span className="opacity-40">•</span>
            <span>{job.type}</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8">
          {/* DESCRIPTION */}
          <p className="text-[#0b1b33]/80 leading-relaxed text-sm sm:text-base">
            {job.description}
          </p>

          {/* SECTIONS */}
          {job.sections?.map(
            (section: { title: string; content: string[] }, index: number) => (
              <Section
                key={index}
                title={section.title}
                items={section.content}
              />
            ),
          )}

          {/* APPLY */}
          <div className="pt-6 flex justify-center">
            <Link
              href={`/join?job=${job.slug}`}
              className="
                group relative overflow-hidden
                inline-flex items-center justify-center
                px-6 py-3 rounded-full
                bg-[#4f8fcb] text-white
                font-medium
                transition-all duration-300 w-full sm:w-auto
                hover:scale-105
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>

              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-xl p-5 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 text-[#0b1b33]">
        {title}
      </h2>

      <ul className="space-y-2 text-[#0b1b33]/80">
        {items.map((item, index) => {
          const isHeading = item.startsWith("## ");

          return isHeading ? (
            <li
              key={index}
              className="
        list-none
        font-semibold
        text-[#0b1b33]
        mt-4
        mb-1
      "
            >
              {item.replace("## ", "")}
            </li>
          ) : (
            <li key={index} className="list-disc ml-4 marker:text-[#4f8fcb]">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
