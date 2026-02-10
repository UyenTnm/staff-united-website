export default function Standard() {
  const standards = [
    {
      title: "Clarity and Transparency",
      description:
        "Every project, process, and decision is documented and communicated clearly. We avoid vague language and ensure all stakeholders understand expectations, timelines, and deliverables. Transparency builds trust.",
      icon: "📋",
    },
    {
      title: "Consistency in Execution",
      description:
        "Our systems ensure that work quality remains constant regardless of who performs it. Written procedures, checklists, and verification steps eliminate guesswork and reduce errors across all operations.",
      icon: "⚙️",
    },
    {
      title: "Human-Centered Approach",
      description:
        "While we leverage modern tools and AI-assisted processes, every decision is reviewed and approved by experienced professionals. Technology serves our team, not the other way around.",
      icon: "👥",
    },
    {
      title: "Continuous Improvement",
      description:
        "We measure performance regularly and adjust our processes based on results and feedback. Small, intentional improvements compound over time into significant operational gains.",
      icon: "📈",
    },
    {
      title: "Accountability and Results",
      description:
        "We take ownership of our work and results. Clear metrics define success, and we provide transparent reporting on performance against those metrics. No excuses, no surprises.",
      icon: "✓",
    },
    {
      title: "Professional Integrity",
      description:
        "We operate with honesty and ethical standards in every interaction. This means saying no when a solution isn't right for the client, admitting mistakes, and fixing them promptly.",
      icon: "🤝",
    },
  ];

  return (
    <section
      id="standard"
      className="py-12 lg:py-14 md:py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Foundation of Everything We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Our Standard of Excellence
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            STAFF UNITED was built on clear principles that guide every
            decision, project, and interaction. These standards aren't
            aspirational—they're operational. We've embedded them into our
            processes, training, and accountability systems. This is how we
            work.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="bg-white border border-muted rounded-lg p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{standard.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {standard.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {standard.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Explanation */}
        <div className="bg-white border border-muted rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-secondary mb-6">
            How We Implement These Standards
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-3">
                1. Documentation and Procedures
              </h4>
              <p className="text-foreground leading-relaxed mb-4">
                Every process is documented in writing. Our team members follow
                standardized procedures that have been tested and refined over
                time. This ensures consistency and makes onboarding new team
                members faster and more reliable.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
                <li>
                  Standard Operating Procedures (SOPs) for all major processes
                </li>
                <li>Checklists and verification steps built into workflows</li>
                <li>Regular review and updates based on performance data</li>
              </ul>
            </div>

            <div className="border-t border-muted pt-8">
              <h4 className="text-lg font-semibold text-secondary mb-3">
                2. Quality Assurance and Verification
              </h4>
              <p className="text-foreground leading-relaxed mb-4">
                All work undergoes verification before delivery. We use
                AI-assisted initial reviews for efficiency, but every piece of
                work is examined by a human professional before client delivery.
                This dual-layer approach catches errors while maintaining speed.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
                <li>Structured workflows supported by modern tooling</li>
                <li>AI-assisted quality checks with human review</li>
                <li>Clear quality metrics and performance tracking</li>
                <li>Regular quality audits and spot-checking</li>
              </ul>
            </div>

            <div className="border-t border-muted pt-8">
              <h4 className="text-lg font-semibold text-secondary mb-3">
                3. Transparent Communication
              </h4>
              <p className="text-foreground leading-relaxed mb-4">
                We communicate progress, challenges, and results regularly. No
                surprises. No vague updates. Clear, factual information
                delivered on schedule so you always know where things stand.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
                <li>Regular status updates and progress reporting</li>
                <li>Clear explanation of any issues or delays</li>
                <li>Direct access to project managers and team leads</li>
                <li>
                  Detailed documentation of all decisions and recommendations
                </li>
              </ul>
            </div>

            <div className="border-t border-muted pt-8">
              <h4 className="text-lg font-semibold text-secondary mb-3">
                4. Team Accountability
              </h4>
              <p className="text-foreground leading-relaxed mb-4">
                Our team members are held accountable for meeting standards.
                Performance is measured against clear metrics, and we address
                gaps quickly. This culture of accountability is what ensures
                consistency across all projects.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
                <li>Clear performance metrics for every role</li>
                <li>Regular feedback and development conversations</li>
                <li>Training and support to meet standards</li>
                <li>Consequences for consistent failures</li>
              </ul>
            </div>

            <div className="border-t border-muted pt-8">
              <h4 className="text-lg font-semibold text-secondary mb-3">
                5. Continuous Data and Improvement
              </h4>
              <p className="text-foreground leading-relaxed mb-4">
                We track performance data and use it to identify improvement
                opportunities. Decisions are made based on facts, not
                assumptions. Regular reviews ensure our processes stay current
                and effective.
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
                <li>Detailed metrics on all major processes</li>
                <li>Quarterly performance reviews</li>
                <li>Process improvements based on data analysis</li>
                <li>Annual standards review and updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-12 bg-primary/5 border-l-4 border-primary p-8 rounded">
          <p className="text-lg text-secondary leading-relaxed font-medium">
            "Our standard isn't just a document on a wall. It's built into how
            we hire, train, manage, and deliver. Every project, every
            interaction, and every decision reflects these principles. When you
            work with STAFF UNITED, you're working with a team that operates
            with discipline, clarity, and commitment to excellence."
          </p>
          <p className="text-foreground mt-4 text-sm">
            — Leadership Commitment
          </p>
        </div>
      </div>
    </section>
  );
}
