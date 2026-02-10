export default function Insights() {
  const articles = [
    {
      title:
        "Building Operational Excellence: The Role of Standardized Procedures",
      excerpt:
        "How standardized procedures eliminate inconsistency, reduce errors, and enable scalable execution.",
      date: "February 2025",
      category: "Operations",
      readTime: "8 min read",
    },
    {
      title:
        "Quality Assurance in the Age of AI: Why Human Review Still Matters",
      excerpt:
        "AI can accelerate work, but consistent quality still depends on human review and accountability.",
      date: "January 2025",
      category: "Quality & Technology",
      readTime: "10 min read",
    },
    {
      title: "Transparent Communication: The Foundation of Client Trust",
      excerpt:
        "Clear communication, accurate reporting, and expectation management build long-term client trust.",
      date: "January 2025",
      category: "Client Relations",
      readTime: "7 min read",
    },
  ];

  return (
    <section id="insights" className="py-12 lg:py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1b33] mb-4">
            Insights
          </h2>
          <p className="text-[#0b1b33]/80 leading-relaxed">
            Practical thinking on execution, standards, and building reliable
            support systems for modern businesses.
          </p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="
                border border-[#d1d5db]
                rounded-lg
                p-6
                hover:border-[#4f8fcb]
                transition
              "
            >
              <span className="text-xs font-medium text-[#4f8fcb] uppercase">
                {article.category}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-[#0b1b33] leading-snug">
                {article.title}
              </h3>

              <p className="mt-3 text-sm text-[#0b1b33]/75 leading-relaxed">
                {article.excerpt}
              </p>

              {/* <div className="mt-6 flex justify-between text-xs text-[#0b1b33]/60">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
