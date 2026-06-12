import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function getInsights(page = 1, limit = 6) {
  const start = (page - 1) * limit;
  const end = start + limit;

  return client.fetch(
    `
    *[
      _type == "insight" &&
      (
        !defined(publishAt) ||
        dateTime(publishAt) <= dateTime(now())
      )
    ] | order(coalesce(publishAt, _createdAt) desc) [$start...$end] {
      _id,
      title,
      "slug": slug.current,
      subtitle,
      thumbnail,
      publishAt
    }
  `,
    { start, end },
  );
}

export async function getInsightBySlug(slug: string) {
  return client.fetch(
    `
    *[
      _type == "insight" &&
      slug.current == $slug &&
      (
        !defined(publishAt) ||
        dateTime(publishAt) <= dateTime(now())
      )
    ][0]{
      title,
      subtitle,
      "slug": slug.current,
      thumbnail,
      content
    }
    `,
    { slug },
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "insight" && ( !defined(publishAt) || dateTime(publishAt) <= dateTime(now()) )]{ "slug": slug.current }`,
  );

  return slugs;
}

const builder = createImageUrlBuilder(client);

export function getImageUrl(source: any) {
  return builder.image(source);
}

export async function getInsightsCount() {
  return client.fetch(
    `count(*[_type == "insight" && (!defined(publishAt) || dateTime(publishAt) <= dateTime(now()))])`,
  );
}

export async function getJobs() {
  return client.fetch(`
    *[
      _type == "job" &&
      active == true &&
      (
        !defined(expiryDate) ||
        dateTime(expiryDate) > dateTime(now())
      )
    ]
    | order(coalesce(publishAt, _createdAt) desc)
    {
      title,
      "slug": slug.current,
      department,
      location,
      "type": employmentType,
      publishAt,
      description
    }
  `);
}
