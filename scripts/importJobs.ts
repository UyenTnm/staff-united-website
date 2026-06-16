import dotenv from "dotenv";

import { createClient } from "@sanity/client";
import { jobs } from "../data/jobs";

dotenv.config({
  path: ".env.local",
});

console.log("PROJECT:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("TOKEN:", !!process.env.SANITY_API_TOKEN);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",

  token: process.env.SANITY_API_TOKEN,

  useCdn: false,
});

async function importJobs() {
  for (const job of jobs) {
    const doc = {
      _type: "job",

      title: job.title,

      slug: {
        _type: "slug",
        current: job.slug,
      },

      publishAt: job.publishedAt,

      department: job.department,

      location: job.location,

      employmentType: job.type,

      description: job.description,

      active: true,

      featured: job.featured || false,

      sections:
        job.sections?.map((section) => ({
          title: section.title,

          content: section.content.map((item) => {
            const headingKeywords = [
              "Core Skills",
              "Mindset",
              "Nice to Have",
              "Tenant Communication",
              "Leasing & Application Management",
              "Property Operations",
              "Digital Marketing",
              "Systems & Organization",
              "Website Development",
              "Performance & Optimization",
              "Maintenance & Improvement",
              "Design Distinctive Travel Experiences",
              "Develop Premium Travel Packages",
              "Content & Presentation",
              "Structure & Systems",
              "Collaboration",
              "Continuous Improvement",
            ];

            if (headingKeywords.includes(item)) {
              return `## ${item}`;
            }

            return item;
          }),
        })) || [],
    };

    await client.create(doc);

    console.log(`✅ Imported: ${job.title}`);
  }

  console.log("🎉 All jobs imported");
}

importJobs().catch(console.error);
