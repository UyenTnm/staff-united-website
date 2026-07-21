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
// import { DynamicServerError } from "next/dist/client/components/hooks-server-context";
import DynamicServiceSection from "@/components/choose-services/DynamicServiceSection";

const services = [
  {
    id: "strategic-operations",
    title: "Strategic Operations",
    description: "Admin & process support",
    icon: Settings,
    href: "/services/strategic-operations#quote-section",
  },
  {
    id: "targeted-sales",
    title: "Targeted Sales",
    description: "Lead generation & outreach",
    icon: Target,
    href: "/services/targeted-sales#quote-section",
  },
  {
    id: "accounting-legal",
    title: "Accounting and Legal",
    description: "Bookkeeping & legal admin",
    icon: Scale,
    href: "/services/accounting-legal#quote-section",
  },
  {
    id: "focused-marketing",
    title: "Focused Marketing",
    description: "Content & social media",
    icon: Megaphone,
    href: "/services/focused-marketing#quote-section",
  },
  {
    id: "future-expansion",
    title: "Future Expansion",
    description: "Market entry & growth",
    icon: Globe,
    href: "/services/future-expansion#quote-section",
  },
  {
    id: "all",
    isCTA: true,
    title: "Choose All Services",
    description: "Select every service in one click",
    icon: Compass,
  },
];

export default function ChooseYourServicePage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const realServiceIds = services
    .filter((service) => !service.isCTA)
    .map((service) => service.id);

  const toggleService = (serviceId: string) => {
    if (serviceId === "all") {
      const isAllSelected = realServiceIds.every((id) =>
        selectedServices.includes(id),
      );
      setSelectedServices(isAllSelected ? [] : realServiceIds);
      return;
    }

    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const selectedCount = realServiceIds.filter((id) =>
    selectedServices.includes(id),
  ).length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="pt-28 md:pt-36 pb-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight mb-5">
                Request a Quote
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl mx-auto">
                Select the services you need. Each one expands to let you
                specify exactly what's involved.
              </p>

              {/* Live status + instruction — tells the user this grid is interactive */}
              <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#D5E3F2] bg-white px-4 py-2 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
                <span
                  className={`h-2 w-2 rounded-full transition-colors ${
                    selectedCount > 0 ? "bg-primary" : "bg-foreground/25"
                  }`}
                />
                <span className="text-sm font-semibold text-secondary">
                  {selectedCount === 0
                    ? "Tap a card to select a service"
                    : `${selectedCount} of ${realServiceIds.length} services selected`}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Service Cards */}
          <div className="mt-14 grid gap-5 lg:gap-6 lg:p-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              const isSelected = service.isCTA
                ? realServiceIds.every((id) => selectedServices.includes(id))
                : selectedServices.includes(service.id);

              if (service.isCTA) {
                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    aria-pressed={isSelected}
                    className={`
                      group relative overflow-hidden rounded-xl p-6 flex flex-col h-full
                      border-2 border-dashed
                      transition-all duration-500 hover:-translate-y-2
                      ${
                        isSelected
                          ? "border-primary bg-gradient-to-br from-primary to-[#3D75AC] shadow-[0_18px_45px_rgba(79,141,201,0.35)]"
                          : "border-primary/40 bg-gradient-to-br from-[#EAF3FC] to-white hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                      }
                    `}
                  >
                    <div
                      className={`mx-auto w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 ${
                        isSelected
                          ? "bg-white/20"
                          : "bg-primary/10 ring-1 ring-primary/25"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${isSelected ? "text-white" : "text-primary"}`}
                        strokeWidth={2}
                      />
                    </div>

                    <h3
                      className={`text-xl font-bold mb-2 ${isSelected ? "text-white" : "text-secondary"}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-6 ${isSelected ? "text-white/80" : "text-foreground/70"}`}
                    >
                      {service.description}
                    </p>
                  </button>
                );
              }

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  aria-pressed={isSelected}
                  className={`
                    group relative overflow-hidden rounded-xl p-6 flex flex-col h-full
                    border bg-gradient-to-b
                    transition-all duration-500 hover:-translate-y-2
                    ${
                      isSelected
                        ? "border-primary from-[#EAF3FC] to-white shadow-[0_18px_45px_rgba(79,141,201,0.18)] ring-2 ring-primary/30"
                        : "border-[#D5E3F2] from-white to-[#F7FBFF] shadow-[0_6px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                    }
                  `}
                >
                  <div
                    className={`
                      mx-auto w-12 h-12 rounded-2xl flex items-center justify-center mb-5
                      ring-1 transition-all duration-500 group-hover:scale-110
                      ${
                        isSelected
                          ? "bg-primary ring-primary/40"
                          : "bg-[#4F8DC9]/10 ring-[#4F8DC9]/20 group-hover:bg-[#4F8DC9]/15 group-hover:ring-[#4F8DC9]/35"
                      }
                    `}
                  >
                    <Icon
                      className={`w-7 h-7 ${isSelected ? "text-white" : "text-[#4F8DC9]"}`}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-6">
                    {service.description}
                  </p>
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
