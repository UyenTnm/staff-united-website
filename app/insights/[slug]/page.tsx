import { calculateReadingTime } from "@/lib/readingTime";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  const res = await fetch(
    `https://orange-squid-688299.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } },
  );

  const data = await res.json();
  return data[0];
}

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;

  const res = await fetch(
    `https://orange-squid-688299.hostingersite.com/wp-json/wp/v2/posts?slug=${resolvedParams.slug}&_embed`,
  );

  const data = await res.json();
  const post = data[0];

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
      images: [featuredImage],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const resolvedParams = await params;

  const post = await getPost(resolvedParams.slug);

  if (!post) return notFound();

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // FIX domain cms lỗi
  const html = post.content.rendered.replace(
    /(cms\.)+orange-squid-688299\.hostingersite\.com/g,
    "orange-squid-688299.hostingersite.com",
  );

  const readingTime = calculateReadingTime(post.content.rendered);

  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* BACK */}
        <a href="/insights" className="text-[#4f8fcb] hover:underline">
          ← Back to Insights
        </a>

        {/* TITLE */}
        <h1
          className="text-4xl md:text-6xl text-center font-semibold text-[#0b1b33] mt-8 leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <p className="text-center text-[#0b1b33]/60 mt-4">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" • "}
          {readingTime} min read
          {" • "}
          {post._embedded?.author?.[0]?.name}
        </p>

        {/* FEATURED IMAGE */}
        {featuredImage && (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="rounded-xl w-full mt-10"
          />
        )}

        {/* CONTENT */}
        <div
          className="
    prose
    prose-lg
    max-w-none
    mt-10

    prose-p:text-[#0b1b33]/85
    prose-p:leading-relaxed
    prose-p:mb-6

    prose-h2:text-[#0b1b33]
    prose-h2:font-semibold
    prose-h2:mt-12
    prose-h2:mb-4

    prose-h3:text-[#0b1b33]
    prose-h3:font-semibold
    prose-h3:mt-10
    prose-h3:mb-3

    prose-h4:mt-8
    prose-h4:mb-2

    prose-strong:text-[#0b1b33]

    [&_img]:w-full
    [&_img]:rounded-xl
    [&_img]:mt-10
  "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
