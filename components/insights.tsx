export default function Insights() {
  const articles = [
    {
      title: 'Building Operational Excellence: The Role of Standardized Procedures',
      excerpt:
        'Learn how standardized procedures eliminate inconsistency, reduce errors, and create scalable operations that maintain quality regardless of team size or project complexity.',
      date: 'February 2025',
      category: 'Operations',
      readTime: '8 min read',
    },
    {
      title: 'Quality Assurance in the Age of AI: Human Review Remains Essential',
      excerpt:
        'Explore how AI-assisted processes accelerate work while human review ensures quality. We discuss the optimal balance and why both are necessary for professional standards.',
      date: 'January 2025',
      category: 'Quality & Technology',
      readTime: '10 min read',
    },
    {
      title: 'Transparent Communication: The Foundation of Client Trust',
      excerpt:
        'Discover why clear, factual communication builds stronger client relationships. We share our approach to status updates, issue reporting, and expectation management.',
      date: 'January 2025',
      category: 'Client Relations',
      readTime: '7 min read',
    },
    {
      title: 'Staffing for Consistency: Why Cultural Fit Matters More Than Credentials',
      excerpt:
        'Hiring the right people is about alignment with company values and operational standards. We discuss our candidate evaluation process and why consistency is critical.',
      date: 'December 2024',
      category: 'Staffing',
      readTime: '9 min read',
    },
    {
      title: 'Data-Driven Improvement: Measuring Performance to Identify Growth Opportunities',
      excerpt:
        'Performance metrics guide improvement efforts. Learn how we track key indicators, analyze results, and implement changes that create measurable operational gains.',
      date: 'December 2024',
      category: 'Business Strategy',
      readTime: '11 min read',
    },
    {
      title: 'Team Development Programs That Deliver Real Results',
      excerpt:
        'Effective training goes beyond workshops. We outline our approach to identifying skill gaps, creating targeted development programs, and measuring impact on team performance.',
      date: 'November 2024',
      category: 'Team Development',
      readTime: '9 min read',
    },
  ]

  return (
    <section id="insights" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Knowledge Center</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Industry Insights and Professional Development
          </h2>
          <p className="text-lg text-foreground max-w-3xl leading-relaxed">
            We share our expertise, research, and insights on staffing, operations, quality assurance, and team development. Stay informed about industry trends and best practices that drive business success.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
            <div className="md:col-span-2 space-y-4">
              <div className="inline-block">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                  Featured
                </span>
              </div>
              <h3 className="text-3xl font-bold text-secondary">
                The Complete Guide to Operational Excellence
              </h3>
              <p className="text-foreground leading-relaxed text-lg">
                A comprehensive exploration of how organizations achieve consistency, quality, and scalability through intentional systems, clear standards, and data-driven improvement. Learn the framework we use to help clients transform their operations.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm text-muted-foreground">March 2025</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">15 min read</span>
              </div>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-accent hover:text-primary transition-all"
              >
                Read Full Article
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-square bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-20 h-20 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001m0 0a8.987 8.987 0 0120 0m-18 0c2.318-4.002 6.5-8.001 10-8.001s7.682 3.999 10 8.001"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white border border-muted rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Category Tag */}
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-foreground text-sm leading-relaxed mb-4 flex-grow">{article.excerpt}</p>

              {/* Meta */}
              <div className="border-t border-muted pt-4 mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              {/* Read More */}
              <a
                href="#"
                className="mt-4 inline-block text-primary font-semibold text-sm group-hover:text-accent transition-colors"
              >
                Read Article →
              </a>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
              <p className="text-white/90 leading-relaxed">
                Subscribe to receive curated insights, industry trends, and best practices delivered directly to your inbox. No spam, only valuable content for business leaders.
              </p>
            </div>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-secondary font-semibold rounded hover:bg-white/90 transition-all"
              >
                Subscribe Now
              </button>
              <p className="text-xs text-white/70">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>

        {/* Resources Links */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-secondary mb-8">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#"
              className="p-6 bg-white border border-muted rounded-lg hover:shadow-lg hover:border-primary transition-all text-center group"
            >
              <p className="text-3xl mb-3">📊</p>
              <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                Case Studies
              </h4>
              <p className="text-xs text-muted-foreground">Real results from real clients</p>
            </a>

            <a
              href="#"
              className="p-6 bg-white border border-muted rounded-lg hover:shadow-lg hover:border-primary transition-all text-center group"
            >
              <p className="text-3xl mb-3">📋</p>
              <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                Whitepapers
              </h4>
              <p className="text-xs text-muted-foreground">In-depth industry analysis</p>
            </a>

            <a
              href="#"
              className="p-6 bg-white border border-muted rounded-lg hover:shadow-lg hover:border-primary transition-all text-center group"
            >
              <p className="text-3xl mb-3">🎯</p>
              <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                Checklists
              </h4>
              <p className="text-xs text-muted-foreground">Actionable templates and guides</p>
            </a>

            <a
              href="#"
              className="p-6 bg-white border border-muted rounded-lg hover:shadow-lg hover:border-primary transition-all text-center group"
            >
              <p className="text-3xl mb-3">🎥</p>
              <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                Webinars
              </h4>
              <p className="text-xs text-muted-foreground">Expert talks and training</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
