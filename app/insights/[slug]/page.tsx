import { notFound } from "next/navigation";
// import { insights } from "../data";
import { client, getInsightBySlug } from "@/lib/sanity";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getImageUrl } from "@/lib/image";

type Props = {
  params: {
    slug: string;
  };
};

// STATIC ROUTES
// export function generateStaticParams() {
//   return insights.map((item) => ({
//     slug: item.slug,
//   }));
// }

const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = getImageUrl(value);

      return (
        <div className="my-10">
          <div className="rounded-xl overflow-hidden">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={value.alt || "Blog image"}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            )}
          </div>

          {value.caption && (
            <p className="text-sm text-center text-gray-500 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "insight"]{ "slug": slug.current }
  `);

  return slugs;
}

// PAGE
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const blog = await getInsightBySlug(slug);

  if (!blog) return notFound();

  return (
    <main className="bg-white">
      <ReadingProgress />
      <BackToTop />
      <article
        id="reading-content"
        className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 lg:pt-36 pb-16 space-y-12"
      >
        {/* BACK */}
        <a
          href="/insights"
          className="
          group inline-flex items-center gap-2
          px-4 py-2
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
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Insights
        </a>

        {/* HEADER */}
        <div className="space-y-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-[#0b1b33] leading-tight">
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="text-lg md:text-xl text-[#0b1b33]/70 leading-relaxed max-w-2xl mx-auto">
              {blog.subtitle}
            </p>
          )}
        </div>

        {/* IMAGE */}
        {blog.thumbnail && (
          <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Image
              src={getImageUrl(blog.thumbnail) as string}
              alt={blog.title}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="max-w-2xl mx-auto space-y-6 text-[#0b1b33]/80 text-[16px] md:text-[18px] leading-relaxed">
          {/* {Array.isArray(blog.content) &&
            blog.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-xl md:text-2xl font-semibold text-[#0b1b33] pt-4"
                  >
                    {block.value}
                  </h2>
                );
              }

              if (block.type === "h3") {
                return (
                  <h3
                    key={i}
                    className="text-lg md:text-xl font-semibold text-[#0b1b33] pt-4"
                  >
                    {block.value}
                  </h3>
                );
              }

              if (block.type === "text") {
                return (
                  <p
                    key={i}
                    className="
                    leading-7
                    text-justify
                    hyphens-auto
                  "
                  >
                    {block.value}
                  </p>
                );
              }

              if (block.type === "highlight") {
                return (
                  <p
                    key={i}
                    className="
                    text-lg md:text-xl
                    font-medium
                    text-[#4f8fcb]
                    pt-8
                  "
                  >
                    {block.value}
                  </p>
                );
              }

              return null;
            })} */}
          <PortableText value={blog.content} components={components} />
        </div>
      </article>
    </main>
  );
}
