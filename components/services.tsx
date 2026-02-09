export default function Services() {
  const services = [
    {
      title: 'Staffing Solutions',
      description:
        'We provide carefully vetted professionals across multiple industries. Every candidate undergoes thorough evaluation to ensure alignment with your requirements, values, and operational standards. Our placement success rate reflects our commitment to long-term partnerships and mutual growth.',
      points: [
        'Industry-specific talent acquisition',
        'Background verification and assessments',
        'Ongoing support and performance monitoring',
        'Replacement guarantee for placement issues',
      ],
    },
    {
      title: 'Business Process Optimization',
      description:
        'Transform your operations with structured workflows and clear procedures. We analyze existing processes, identify inefficiencies, and implement sustainable improvements that increase productivity without sacrificing quality. Our systematic approach ensures measurable results.',
      points: [
        'Process audit and documentation',
        'Workflow redesign and implementation',
        'Team training and adoption support',
        'Performance metrics and reporting',
      ],
    },
    {
      title: 'Quality Assurance Services',
      description:
        'Maintain consistent quality standards across all operations. Our QA systems combine human expertise with modern tooling to catch issues before they reach customers. We establish clear benchmarks, implement verification procedures, and provide detailed reporting on quality metrics.',
      points: [
        'Quality standard definition',
        'Testing and verification procedures',
        'AI-assisted initial review with human oversight',
        'Detailed quality reports and recommendations',
      ],
    },
    {
      title: 'Team Development Programs',
      description:
        'Build stronger teams through structured development. We create customized training programs that address skill gaps, improve communication, and establish clear expectations. Our approach focuses on sustainable growth and long-term team effectiveness.',
      points: [
        'Skills assessment and gap analysis',
        'Customized training curriculum',
        'Leadership development programs',
        'Performance coaching and feedback',
      ],
    },
    {
      title: 'Management Consulting',
      description:
        'Strategic guidance from experienced professionals who understand operational challenges. We work alongside your leadership team to develop strategies, solve complex problems, and implement solutions that align with your vision and values. Clear communication and documented recommendations drive lasting change.',
      points: [
        'Strategic planning and goal setting',
        'Operational efficiency improvement',
        'Change management and implementation',
        'Leadership coaching and mentoring',
      ],
    },
    {
      title: 'Administrative Support',
      description:
        'Offload routine administrative work to capable professionals. From document management to scheduling, our team handles the details so your leadership can focus on strategic priorities. We maintain organized systems that scale with your growth.',
      points: [
        'Document and records management',
        'Scheduling and coordination',
        'Data entry and processing',
        'General office administration',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Comprehensive Solutions for Professional Growth
          </h2>
          <p className="text-lg text-foreground max-w-3xl leading-relaxed">
            Each service is built on the same foundation: clear standards, transparent communication, and unwavering commitment to results. We don't just provide services—we become an extension of your team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-muted rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>

              {/* Service Description */}
              <p className="text-foreground leading-relaxed mb-6">{service.description}</p>

              {/* Key Points */}
              <div className="space-y-3 border-t border-muted pt-6">
                <p className="text-sm font-semibold text-secondary">Key Offerings:</p>
                <ul className="space-y-2">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More */}
              <a
                href="#contact"
                className="inline-block mt-6 text-primary font-semibold text-sm hover:text-accent transition-colors"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Don't See Your Specific Need?
          </h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Our team is equipped to handle specialized requests and custom solutions. Contact us today to discuss your unique requirements and how we can help.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded font-semibold hover:bg-accent hover:text-primary transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
