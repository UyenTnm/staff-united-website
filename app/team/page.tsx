import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Jena Truong",
      title: "Video Editor",
      responsibility: "Video production, editing, and final delivery.",
      image: "/team/jena.png",
    },
    {
      name: "Martha Nguyen",
      title: "Video Editor",
      responsibility: "Content editing and post-production support.",
      image: "/team/martha.jpeg",
    },
    {
      name: "Betty Van",
      title: "Video Editor",
      responsibility: "Publishing preparation and quality checks.",
      image: "/team/betty.jpeg",
    },
    {
      name: "Alice Truong",
      title: "Website Developer",
      responsibility: "System execution and technical delivery.",
      image: "/team/alicetr.png",
    },
  ];

  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* INTRO */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Title bigger */}
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0b1b33] tracking-tight">
            Our Team
          </h1>
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

          <p className="text-lg md:text-xl text-[#0b1b33]/80 leading-relaxed max-w-3xl mx-auto">
            We operate as one unit under one shared standard.
            <br className="hidden md:block" />
            Roles differ.{" "}
            <span className="text-[#0b1b33] font-medium">
              Responsibility is collective.
            </span>
          </p>

          {/* Brand line bigger */}
          <p className="text-base md:text-lg font-semibold text-[#4f8fcb] tracking-wide pt-2">
            All Females. All Business.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="
        group
        text-center
        transition-all duration-300
        hover:-translate-y-1
      "
            >
              {/* Portrait */}
              <div className="relative mx-auto mb-6">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full bg-[#4f8fcb]/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Image wrapper */}
                <div
                  className="
          relative
          w-40 h-40
          mx-auto
          rounded-full
          overflow-hidden
          border-4 border-white
          shadow-md
          ring-1 ring-[#4f8fcb]/30
          transition duration-300
          group-hover:ring-[#4f8fcb]
        "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#0b1b33]">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-sm font-medium text-[#4f8fcb] mt-1">
                {member.title}
              </p>

              {/* Responsibility */}
              <p className="text-sm text-[#0b1b33]/70 leading-relaxed mt-3 max-w-xs mx-auto">
                {member.responsibility}
              </p>
            </div>
          ))}
        </div>

        {/* GLOBAL CTA */}
        <div className="text-center">
          <Link
            href="/join"
            className="
              inline-block
              px-7 py-3
              bg-[#4f8fcb]
              text-white
              text-sm font-medium
              rounded-md
              transition
              hover:bg-[#0b1b33]
              hover:shadow-md
            "
          >
            Join the Team
          </Link>
        </div>
      </section>
    </main>
  );
}
