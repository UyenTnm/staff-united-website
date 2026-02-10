import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Jena Truong",
      title: "Video Editor",
      responsibility: "...",
      initial: "JT",
      image: "/team/jena.png",
    },
    {
      name: "Martha Nguyen",
      title: "Video Editor",
      responsibility: "...",
      initial: "MA",
      image: "/team/martha.jpeg",
    },
    {
      name: "Betty Van",
      title: "Video Editor",
      responsibility: "...",
      initial: "BE",
      image: "/team/betty.jpeg",
    },
    {
      name: "Alice Truong",
      title: "Website Developer",
      responsibility: "...",
      initial: "AL",
      image: "/team/alicetr.png",
    },
  ];

  return (
    <section id="team" className="py-12 lg:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
            Experienced Professionals Committed to Excellence
          </h2>
          <p className="text-lg text-foreground max-w-3xl leading-relaxed">
            Our team brings together decades of combined experience across
            staffing, operations, consulting, and business development. Each
            member is selected for their expertise, professionalism, and
            commitment to our standards. They're not just employees—they're
            representatives of our values.
          </p>
        </div>

        {/* Team Grid */}
        {/* Team Grid – redesigned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
        bg-white
        border border-[#d1d5db]
        rounded-xl
        px-6 pt-8 pb-6
        text-center
        shadow-sm
        hover:shadow-md
        transition
      "
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-[#d1d5db]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#0b1b33]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#4f8fcb] mt-1">{member.title}</p>

              {/* Optional responsibility – rất nhẹ */}
              <p className="text-sm text-[#0b1b33]/70 mt-3 leading-relaxed">
                {member.responsibility}
              </p>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white border border-muted rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-secondary mb-8">
            What Makes Our Team Different
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m7 8a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary">
                  Proven Track Record
                </h4>
                <p className="text-foreground text-sm mt-2">
                  Average team tenure of 8+ years with consistent performance
                  excellence across all roles.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary">
                  Continuous Development
                </h4>
                <p className="text-foreground text-sm mt-2">
                  Regular training, skills development, and professional
                  certifications keep our team current.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary">
                  Client-Focused
                </h4>
                <p className="text-foreground text-sm mt-2">
                  Success metrics aligned with client outcomes. We win when you
                  win.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary">
                  Industry Expert
                </h4>
                <p className="text-foreground text-sm mt-2">
                  Collective experience spanning staffing, operations,
                  consulting, and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Growing Our Team
          </h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented, professional individuals who
            share our commitment to excellence. If you're interested in joining
            STAFF UNITED, we'd like to hear from you.
          </p>
          <a
            href="mailto:careers@staffunited.com"
            className="inline-block text-primary font-semibold hover:text-accent transition-colors"
          >
            View Career Opportunities →
          </a>
        </div>
      </div>
    </section>
  );
}
