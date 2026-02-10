export default function Hero() {
  return (
    <section
      id="home"
      className="py-16 lg:py-14 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#4f8fcb] font-semibold text-sm tracking-wide uppercase">
                Professional Solutions Since 2026
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#0b1b33] leading-tight tracking-tight">
                Clear Standards. Reliable Service. Transparent Operations.
              </h1>
            </div>

            <p className="text-lg text-[#0b1b33]/80 leading-relaxed max-w-md">
              STAFF UNITED delivers professional business solutions backed by
              structured workflows, experienced teams, and a commitment to
              excellence that doesn't compromise on clarity or consistency.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Request Support */}
              <a
                href="/request-support"
                className="
                  px-8 py-4
                  bg-[#0b1b33]
                  text-white
                  rounded
                  font-semibold
                  text-center
                  transition
                  hover:bg-[#0b1b33]/90
                  hover:shadow-md
                "
              >
                Request Support
              </a>

              {/* Learn Standards */}
              <a
                href="/join"
                className="
                  px-8 py-4
                  bg-white
                  text-[#0b1b33]
                  border-2 border-[#0b1b33]
                  rounded
                  font-semibold
                  text-center
                  transition
                  hover:bg-[#f2f4f7]
                  hover:text-[#0b1b33]
                "
              >
                Join the Team
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-[#0b1b33]">98%</p>
                <p className="text-sm text-[#0b1b33]/60">Client Satisfaction</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-[#0b1b33]">500+</p>
                <p className="text-sm text-[#0b1b33]/60">Successful Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-[#0b1b33]">24/7</p>
                <p className="text-sm text-[#0b1b33]/60">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-[#f2f4f7] rounded-lg border border-[#d1d5db] flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0b1b33]/10 rounded-lg">
                  <svg
                    className="w-10 h-10 text-[#0b1b33]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0b1b33] font-semibold text-lg">
                    Professional Standards
                  </p>
                  <p className="text-sm text-[#0b1b33]/60 mt-2">
                    Built on clarity, consistency, and commitment to excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
