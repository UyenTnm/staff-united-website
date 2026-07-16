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
import { useState } from "react";
import { SERVICES } from "@/data/choose-services/services";
import { DynamicServerError } from "next/dist/client/components/hooks-server-context";
import DynamicServiceSection from "@/components/choose-services/DynamicServiceSection";

const services = [
  {
    id: "strategic-operations",
    title: "Strategic Operations",
    // description: "Day-to-day ops, admin, and process support",
    description: "Day-to-day ops, admin, and process\u00A0support",
    icon: Settings,
    // href: "/services/strategic-operations",
    href: "/services/strategic-operations#quote-section",
  },
  {
    id: "targeted-sales",
    title: "Targeted Sales",
    description: "Lead generation and outreach campaigns",
    icon: Target,
    // href: "/services/targeted-sales",
    href: "/services/targeted-sales#quote-section",
  },
  {
    id: "accouting-and-legal",
    title: "Accounting and Legal",
    description: "Bookkeeping, compliance, and legal admin",
    icon: Scale,
    // href: "/services/accounting-legal",
    href: "/services/accounting-legal#quote-section",
  },

  {
    id: "focused-marketing",
    title: "Focused Marketing",
    description: "Content, brand, and social execution",
    icon: Megaphone,
    // href: "/services/focused-marketing",
    href: "/services/focused-marketing#quote-section",
  },
  {
    id: "future-expansion",
    title: "Future Expansion",
    description: "New market entry and growth planning",
    icon: Globe,
    // href: "/services/future-expansion",
    href: "/services/future-expansion#quote-section",
  },
  {
    id: "all",
    isCTA: true,
    title: "Not sure which one fits?",
    description: "Guidance to the right service.",
    icon: Compass,
    href: "/client-fast-track",
  },
];

export default function ChooseYourServicePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    if (serviceId === "all") {
      const allServiceIds = services
        .filter((service) => !service.isCTA)
        .map((service) => service.id);

      const isAllSelected = allServiceIds.every((id) =>
        selectedServices.includes(id),
      );

      setSelectedServices(isAllSelected ? [] : allServiceIds);
      return;
    }

    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

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

              const isSelected = service.isCTA
                ? services
                    .filter((service) => !service.isCTA)
                    .every((service) => selectedServices.includes(service.id))
                : selectedServices.includes(service.id);

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`
group

relative
overflow-hidden

rounded-3xl

bg-gradient-to-b
from-white
to-[#F7FBFF]

border
${
  service.isCTA
    ? "border-dashed border-primary/40"
    : "border-solid border-[#D5E3F2]"
}

p-8

flex
flex-col
h-full

shadow-[0_6px_24px_rgba(15,23,42,0.05)]

transition-all
duration-500

hover:-translate-y-2
hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
${isSelected ? "border-primary bg-primary/5" : "border-[#D5E3F2]"}
`}
                >
                  <div
                    className="
w-16
h-16

rounded-2xl

bg-[#4F8DC9]/10

ring-1
ring-[#4F8DC9]/20

flex
items-center
justify-center

mb-8

transition-all
duration-500

group-hover:bg-[#4F8DC9]/15
group-hover:ring-[#4F8DC9]/35
group-hover:scale-110
"
                  >
                    <Icon className="w-8 h-8 text-[#4F8DC9]" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold text-secondary mb-3">
                    {service.title}
                  </h3>

                  {/* <p className="text-foreground/70">{service.description}</p> */}
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8">
                    <span className="inline-flex items-center font-semibold text-primary">
                      {service.isCTA
                        ? isSelected
                          ? "All Services Selected"
                          : "Choose All Services"
                        : isSelected
                          ? "Selected ✓"
                          : "Select This Service"}

                      <span
                        className="
      ml-2
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
                      >
                        →
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <DynamicServiceSection selectedServices={selectedServices} />
        </div>
      </section>
    </main>
  );
}
