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
        publishAt <= now
      )
    ] | order(publishAt desc) [$start...$end] {
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

// export async function getInsightBySlug(slug: string) {
//   return client.fetch(
//     `
//     *[_type == "insight" && slug.current == $slug][0]{
//       title,
//       subtitle,
//       "slug": slug.current,
//       thumbnail,
//       content
//     }
//     `,
//     { slug },
//   );
// }

export async function getInsightBySlug(slug: string) {
  return client.fetch(
    `
    *[
      _type == "insight" &&
      slug.current == $slug &&
      (
        !defined(publishAt) ||
        publishAt <= now
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
    `*[_type == "insight" && ( !defined(publishAt) || publishAt <= now )]{ "slug": slug.current }`,
  );

  return slugs;
}

const builder = createImageUrlBuilder(client);

export function getImageUrl(source: any) {
  return builder.image(source);
}

export async function getInsightsCount() {
  return client.fetch(
    `count(*[_type == "insight" && (!defined(publishAt) || publishAt <= now)])`,
  );
}
