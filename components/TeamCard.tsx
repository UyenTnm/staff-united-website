import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;

  isLead: boolean;

  departmentId: string;
  departmentName: string;

  color: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-[36px] bg-[#F3F5F8] group">
      {/* Badge */}
      <div
        className={`
          absolute
          top-4
          left-4
          z-20

          w-[195px]
          h-9

          flex
          items-center
          justify-center

          rounded-full

          text-[10px]
          font-bold
          tracking-[0.08em]
          uppercase

          shadow-md

          ${
            member.isLead
              ? "bg-[#4F8DC9]/90 text-white"
              : "bg-white/95 text-[#4F8DC9] border border-[#4F8DC9]/40 backdrop-blur-md"
          }
        `}
      >
        {member.isLead
          ? `Lead • ${member.departmentName}`
          : member.departmentName}
      </div>

      {/* Image */}

      <div className="absolute inset-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="
            object-cover
            object-[center_10%]

            transition-all
            duration-500

            group-hover:scale-105
          "
        />
      </div>

      {/* Bio */}

      <div
        className={`
          absolute
          left-3
          right-3
          bottom-3
          p-4

          bg-white/95
          backdrop-blur-md
          overflow-hidden

          rounded-[28px]
          shadow-xl

          transition-all
          duration-500

          h-[85px]
          md:h-[100px]

          group-hover:h-[150px]
          md:group-hover:h-[175px]
          xl:group-hover:h-[175px]

          group-hover:-translate-y-2

          ${member.isLead ? "ring-1 ring-[#4F8DC9]/50" : ""}
        `}
      >
        <div
          className="
            flex
            justify-between
            items-start

            transition-all
            duration-500
            ease-out

            group-hover:-translate-y-1
          "
        >
          <div
            className="
              flex
              flex-col
              justify-center

              h-[75px]
              md:h-[85px]
            "
          >
            <h3
              className="
                text-xl
                font-semibold
                text-[#0B1B33]
              "
            >
              {member.name}
            </h3>

            <p
              className="
                mt-1

                text-sm

                text-[#0B1B33]/70

                h-[44px]
                md:h-[40px]

                leading-5
              "
            >
              {member.title}
            </p>
          </div>
        </div>

        {member.bio && (
          <div
            className="
              -mt-4

              opacity-0
              translate-y-4

              transition-all
              duration-300

              group-hover:opacity-100
              group-hover:delay-75

              group-hover:translate-y-0
            "
          >
            <p
              className="
                text-sm
                text-[#0B1B33]/70
                leading-relaxed
                line-clamp-3
              "
            >
              {member.bio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
