import { client } from "@/lib/sanity";

export default async function sitemap() {
  const posts = await client.fetch(`
    *[_type == "insight"]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const baseUrl = "https://www.staffunitedgroup.com/";

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post._updatedAt,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
