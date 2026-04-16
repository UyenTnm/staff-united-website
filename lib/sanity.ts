import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getInsights() {
  return client.fetch(`
    *[_type == "insight"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      subtitle,
      thumbnail
    }
  `);
}

export async function getInsightBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "insight" && slug.current == $slug][0]{
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
    `*[_type == "insight"]{ "slug": slug.current }`,
  );

  return slugs;
}

const builder = createImageUrlBuilder(client);

export function getImageUrl(source: any) {
  return builder.image(source);
}
