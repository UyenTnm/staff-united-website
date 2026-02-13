import Link from "next/link";
import { insights } from "./data";

export default function InsightsPage() {
  return (
    <main className="bg-white">
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
          {insights.map((item, index) => (
            <Link
              key={`${item.slug}-${index}`}
              href={`/insights/${item.slug}`}
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
                {item.thumbnail && (
                  // w-full h-48 overflow-hidden bg-gray-100
                  <div className="w-full h-full object-contain">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0b1b33] group-hover:text-[#4f8fcb] transition-colors">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-lg text-[#0b1b33]/75 leading-relaxed mt-4">
                      {item.description}
                    </p>
                  )}

                  <div className="mt-6">
                    <span className="text-base font-medium text-[#4f8fcb] group-hover:underline">
                      Read →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <p className="text-xl text-[#4f8fcb] font-semibold animate-softBlink">
            More Insights Coming Soon.
          </p>
        </div>
      </section>
    </main>
  );
}
