"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Compass,
  Globe,
  Megaphone,
  Scale,
  Settings,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Strategic Operations",
    description: "Day-to-day ops, admin, and process support",
    icon: Settings,
    // href: "/services/strategic-operations",
    href: "/services/strategic-operations#quote-section",
  },
  {
    title: "Targeted Sales",
    description: "Lead generation and outreach campaigns",
    icon: Target,
    // href: "/services/targeted-sales",
    href: "/services/targeted-sales#quote-section",
  },
  {
    title: "Accounting and Legal",
    description: "Bookkeeping, compliance, and legal admin",
    icon: Scale,
    // href: "/services/accounting-legal",
    href: "/services/accounting-legal#quote-section",
  },

  {
    title: "Focused Marketing",
    description: "Content, brand, and social execution",
    icon: Megaphone,
    // href: "/services/focused-marketing",
    href: "/services/focused-marketing#quote-section",
  },
  {
    title: "Future Expansion",
    description: "New market entry and growth planning",
    icon: Globe,
    // href: "/services/future-expansion",
    href: "/services/future-expansion#quote-section",
  },
  {
    isCTA: true,
    title: "Not sure which one fits?",
    description:
      "Need help deciding? Let us recommend the best service for your business.",
    icon: Compass,
    href: "/client-fast-track",
  },
];

export default function ChooseYourServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="pt-28 md:pt-36 pb-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                REQUEST SUPPORT
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight mb-6">
                Choose Your Service
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                Already know what your business needs? Pick the service below
                and share the details — we'll come back with scope, timeline,
                and pricing tailored to you.
              </p>
            </div>
          </AnimatedSection>

          {/* Service Cards */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              if (service.isCTA) {
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    target="_blank"
                    className="
group
rounded-3xl
border-2
border-dashed
border-primary/30
bg-primary/5
p-10
flex
flex-col
justify-center
transition-all
duration-300
hover:bg-primary/10
"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#4F8DC9]/10 flex items-center justify-center mb-6">
                      <Icon
                        className="w-7 h-7 text-[#4F8DC9]"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xl font-bold text-secondary mb-3">
                      {service.title}
                    </p>

                    {/* <p className="text-foreground/70 mb-5">
                      {service.description}
                    </p> */}

                    <span className="font-semibold text-primary">
                      Try Client Fast Track →
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  target="_blank"
                  className="
        group
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-primary
      "
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#4F8DC9]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#4F8DC9]" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold text-secondary mb-3">
                    {service.title}
                  </h3>

                  {/* <p className="text-foreground/70">{service.description}</p> */}
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}

          {/* <div className="mt-14 flex justify-center">
            <div className="bg-white rounded-full border border-slate-200 px-8 py-4 shadow-sm">
              <span className="text-foreground/70">
                Not sure which one fits?
              </span>

              <Link
                href="/client-fast-track"
                className="ml-2 font-semibold text-primary hover:underline"
              >
                Try Client Fast Track →
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
