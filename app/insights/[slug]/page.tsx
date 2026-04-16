import { notFound } from "next/navigation";
// import { insights } from "../data";
import { client, getInsightBySlug } from "@/lib/sanity";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getImageUrl, urlFor } from "@/lib/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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

  marks: {
    strong: ({ children }: any) => (
      <span className="font-semibold text-[#0b1b33]">{children}</span>
    ),

    underline: ({ children }: any) => (
      <span className="underline underline-offset-4">{children}</span>
    ),
  },

  block: {
    normal: ({ children }: any) => (
      <p className="text-[16px] md:text-[18px] leading-7 text-[#0b1b33]/80 mb-4">
        {children}
      </p>
    ),

    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1b33] mt-10 mb-4">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-[#0b1b33] mt-6 mb-2">
        {children}
      </h3>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#0b1b33] pl-4 italic text-[#0b1b33]/70 my-6">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>
    ),

    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 space-y-2 my-4">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-7 text-[#0b1b33]/80">{children}</li>
    ),

    number: ({ children }: any) => (
      <li className="leading-7 text-[#0b1b33]/80">{children}</li>
    ),
  },
};

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "insight"]{ "slug": slug.current }
  `);

  return slugs;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const blog = await getInsightBySlug(resolvedParams.slug);

  if (!blog) return {};

  const mainTitle = blog.title.split("–")[0].trim();
  const seoTitle = `${mainTitle} | Staff United`;

  const seoDescription = blog.subtitle?.replace(/\n/g, " ");

  return {
    title: seoTitle,
    description: seoDescription,

    openGraph: {
      title: seoTitle,
      description: seoDescription,
      images: blog.thumbnail
        ? [
            {
              url: urlFor(blog.thumbnail)
                .width(1200)
                .height(630)
                .auto("format")
                .quality(70)
                .url(),
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: blog.thumbnail
        ? [urlFor(blog.thumbnail).width(1200).height(630).url()]
        : [],
    },
  };
}

// PAGE
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;

  const blog = await getInsightBySlug(resolvedParams.slug);

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
        <Link
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
        </Link>

        {/* HEADER */}
        <div className="space-y-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-[#0b1b33] leading-tight">
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="text-lg md:text-xl text-[#0b1b33] leading-relaxed max-w-2xl mx-auto">
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
        <div className="max-w-2xl mx-auto space-y-4 text-[#0b1b33] text-[16px] md:text-[18px] leading-relaxed">
          <PortableText value={blog.content} components={components} />
        </div>
      </article>
    </main>
  );
}
