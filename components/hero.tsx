export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                Professional Solutions Since 2015
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight tracking-tight">
                Clear Standards. Reliable Service. Transparent Operations.
              </h1>
            </div>

            <p className="text-lg text-foreground leading-relaxed max-w-md">
              STAFF UNITED delivers professional business solutions backed by structured workflows, experienced teams, and a commitment to excellence that doesn't compromise on clarity or consistency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-white rounded font-semibold hover:bg-accent hover:text-primary transition-all duration-200 text-center"
              >
                Request Support Today
              </a>
              <a
                href="#standard"
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded font-semibold hover:bg-primary hover:text-white transition-all duration-200 text-center"
              >
                Learn Our Standards
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Successful Projects</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-lg">
                  <svg
                    className="w-10 h-10 text-primary"
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
                  <p className="text-secondary font-semibold text-lg">Professional Standards</p>
                  <p className="text-sm text-muted-foreground mt-2">Built on clarity, consistency, and commitment to excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
