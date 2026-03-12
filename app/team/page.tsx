import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Yuko Furuta",
      title: "Quality & Standards Manager",
      responsibility:
        "Ensures every deliverable meets our defined standards before it reaches the client.",
      image: "/team/yuko.jpeg",
    },
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
    {
      name: "Annie Nguyen",
      title: "UIUX",
      responsibility: "Designs intuitive and user-friendly interfaces.",
      image: "/team/annie.png",
    },
  ];

  return (
    <main className="bg-white">
      {/* max-w-6xl mx-auto px-6 py-16 space-y-20 */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">
          {/* INTRO */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#0b1b33] leading-tight">
              Our Team
            </h1>
            <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto rounded-full"></div>

            <p className="text-lg md:text-xl text-[#0b1b33]/80 leading-relaxed max-w-3xl mx-auto">
              We Operate as One Unit Under One Shared Standard.
              <br className="hidden md:block" />
              Roles Differ. Responsibility Is Collective.
            </p>

            <p className="text-base md:text-lg font-semibold text-[#4f8fcb] tracking-wide pt-2">
              All Women. All Business.
            </p>
          </div>

          {/* TEAM GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group [perspective:1200px]">
                <div className="relative w-full h-[420px] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:shadow-xl cursor-pointer">
                  {/* FRONT */}
                  <div className="absolute inset-0 bg-white rounded-lg shadow-md overflow-hidden [backface-visibility:hidden]">
                    {/* IMAGE */}
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="p-4 text-center flex gap-2 flex-col justify-center items-center h-[120px]">
                      <h3 className="text-[#0b1b33] font-semibold">
                        {member.name}
                      </h3>

                      <p className="text-base text-[#4f8fcb]">{member.title}</p>
                      {/* <p className="text-sm text-[#0b1b33]">
                        {member.responsibility}
                      </p> */}
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-[#0b1b33] text-white rounded-lg shadow-md flex items-center justify-center p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-sm leading-relaxed">
                      {member.responsibility}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/join"
              className="inline-block px-6 py-3 bg-[#4f8fcb] text-white text-base md:text-lg font-medium rounded hover:bg-[#0b1b33]/90 transition"
            >
              Join the Team
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
