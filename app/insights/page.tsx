import Link from "next/link";
import { insights } from "./data";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

type Props = {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
};

export default async function InsightsPage({ searchParams }: Props) {
  const params = await searchParams;

  const page = Number(params?.page || 1);
  const category = params?.category ? Number(params.category) : undefined;

  const displayPosts = insights;
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

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {displayPosts.map((post: any, index: number) => {
              const featuredImage =
                post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                post.thumbnail;

              return (
                <Link
                  key={post.id || `${post.slug}-${index}`}
                  href={`/insights/${post.slug}`}
                  className="block"
                >
                  <div className="group border border-[#0b1b33]/10 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:border-[#4f8fcb]/40 hover:shadow-md hover:-translate-y-1">
                    {featuredImage && (
                      <div className="w-full h-full overflow-hidden bg-[#0b1b33]">
                        <Image
                          src={featuredImage}
                          alt={post.title?.rendered || post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col h-full">
                      {/* TITLE */}
                      <h3
                        className="text-xl font-semibold text-[#0b1b33] group-hover:text-[#4f8fcb] transition-colors"
                        dangerouslySetInnerHTML={{
                          __html: post.title?.rendered || post.title,
                        }}
                      />

                      {/* EXCERPT */}
                      <p className="text-[#0b1b33]/80 leading-relaxed">
                        {post.excerpt?.rendered
                          ? post.excerpt.rendered.replace(/<[^>]+>/g, "")
                          : post.description}
                      </p>

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
