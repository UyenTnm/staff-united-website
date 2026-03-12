import Link from "next/link";
import { getCategories, getPosts } from "@/lib/wordpress";
import AnimatedSection from "@/components/AnimatedSection";
import { calculateReadingTime } from "@/lib/readingTime";
import ComingSoon from "@/components/ComingSoon";

type Props = {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
};

export const metadata = {
  title: "Insights | Staff United",
  description:
    "Insights and perspectives from Staff United on operational excellence and scalable support systems.",
  openGraph: {
    title: "Staff United Insights",
    description:
      "Practical thinking on execution standards and scalable support systems.",
    type: "website",
  },
};

const SHOW_INSIGHTS = false;

export default async function InsightsPage({ searchParams }: Props) {
  if (!SHOW_INSIGHTS) {
    return <ComingSoon />;
  }

  const params = await searchParams;

  const page = Number(params?.page || 1);
  const category = params?.category ? Number(params.category) : undefined;

  const categories = await getCategories();

  const { posts, totalPages } = await getPosts(page, category);

  return (
    <main className="bg-white">
      <AnimatedSection>
        <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
          {/* HEADER */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33]">
              Insights
            </h1>

            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

            <p className="text-lg text-[#0b1b33]/80 leading-relaxed">
              Practical Thinking on Execution, Standards,
              <br className="hidden md:block" />
              and Building Reliable Support Systems for Modern Businesses.
            </p>
          </div>

          <div className="flex justify-center gap-6 text-lg mt-10">
            <Link
              href="/insights"
              className={`font-medium ${
                !category
                  ? "text-[#4f8fcb]"
                  : "text-[#0b1b33]/70 hover:text-[#4f8fcb]"
              }`}
            >
              All
            </Link>

            {categories.map((cat: any) => (
              <Link
                key={cat.id}
                href={`/insights?category=${cat.id}`}
                className={`font-medium ${
                  category === cat.id
                    ? "text-[#4f8fcb]"
                    : "text-[#0b1b33]/70 hover:text-[#4f8fcb]"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post: any) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              const readingTime = Math.ceil(
                post.content.rendered.replace(/<[^>]+>/g, "").split(" ")
                  .length / 200,
              );

              return (
                <Link
                  key={post.id}
                  href={`/insights/${post.slug}`}
                  className="block"
                >
                  <div
                    className="
          group
          border border-[#0b1b33]/10
          rounded-xl
          overflow-hidden
          bg-white
          transition-all duration-300
          hover:border-[#4f8fcb]/40
          hover:shadow-md
          hover:-translate-y-1
        "
                  >
                    {/* IMAGE */}
                    {featuredImage && (
                      <div className="w-full aspect-[16/9] overflow-hidden bg-[#0b1b33]">
                        <img
                          src={featuredImage}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}

                    {/* CONTENT */}
                    <div className="p-6 space-y-4">
                      {/* TITLE */}
                      <h3
                        className="
              text-xl
              font-semibold
              text-[#0b1b33]
              group-hover:text-[#4f8fcb]
              transition-colors
            "
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />

                      {/* META */}
                      <p className="text-sm text-[#0b1b33]/60">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        • {readingTime} min read •{" "}
                        {post._embedded?.author?.[0]?.name}
                      </p>

                      {/* EXCERPT */}
                      <p className="text-[#0b1b33]/80 leading-relaxed">
                        {post.excerpt.rendered
                          .replace(/<[^>]+>/g, "")
                          .replace("[…]", "")}
                      </p>

                      {/* READ */}
                      <div className="mt-6">
                        <span className="text-[#4f8fcb] font-medium group-hover:underline">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 pt-10">
            {page > 1 && (
              <Link
                href={`/insights?page=${page - 1}`}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Previous
              </Link>
            )}

            <span className="px-4 py-2 text-[#0b1b33]/70">
              Page {page} / {totalPages}
            </span>

            {page < totalPages && (
              <Link
                href={`/insights?page=${page + 1}`}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Next
              </Link>
            )}
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <p className="text-xl text-[#4f8fcb] font-semibold animate-softBlink">
              More Insights Coming Soon.
            </p>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
