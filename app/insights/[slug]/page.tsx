import { notFound } from "next/navigation";
import { insights } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

// STATIC ROUTES
export function generateStaticParams() {
  return insights.map((item) => ({
    slug: item.slug,
  }));
}

// PAGE
export default async function BlogDetail({ params }: Props) {
  const resolvedParams = await params;

  const blog = insights.find((item) => item.slug === resolvedParams.slug);

  if (!blog) return notFound();

  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        {/* BACK */}
        <a href="/insights" className="text-[#4f8fcb]">
          ← Back to Insights
        </a>

        {/* TITLE */}
        <h1 className="text-6xl text-center font-semibold text-[#0b1b33]">
          {blog.title}
        </h1>

        {/* SUBTITLE */}
        {blog.subtitle && (
          <p className="text-[17px] md:text-[18px] text-[#0b1b33]/75 text-justify hyphens-auto max-w-2xl mx-auto">
            {blog.subtitle}
          </p>
        )}

        {/* IMAGE */}
        {blog.image && <img src={blog.image} alt={blog.title} />}

        {/* CONTENT */}
        <div className="max-w-2xl mx-auto space-y-6 text-[#0b1b33]/85 text-[17px] md:text-[18px]">
          {Array.isArray(blog.content) &&
            blog.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-2xl md:text-3xl font-semibold text-[#0b1b33] pt-6"
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
              leading-6 md:leading-7
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
                    className="text-xl font-semibold text-[#4f8fcb] pt-8"
                  >
                    {block.value}
                  </p>
                );
              }

              return null;
            })}
        </div>
      </article>
    </main>
  );
}
