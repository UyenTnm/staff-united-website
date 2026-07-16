"use client";

import { ServiceCard } from "@/types/choose-services";

interface ServiceSelectorProps {
  services: ServiceCard[];
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
  onToggleAll: () => void;
}

export default function ServiceSelector({
  services,
  selectedServices,
  onToggleService,
  onToggleAll,
}: ServiceSelectorProps) {
  return (
    <section className="mt-16">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          const isSelected = service.isChooseAll
            ? selectedServices.length ===
              services.filter((s) => !s.isChooseAll).length
            : selectedServices.includes(service.id);

          return (
            <button
              key={service.id}
              type="button"
              onClick={() =>
                service.isChooseAll
                  ? onToggleAll()
                  : onToggleService(service.id)
              }
              className={`
group
relative
overflow-hidden
rounded-3xl
border
p-8
text-left
transition-all
duration-300

${
  isSelected
    ? "border-primary bg-primary/5 shadow-xl"
    : "border-[#D5E3F2] bg-white hover:border-primary hover:-translate-y-1 hover:shadow-lg"
}
`}
            >
              {/* Icon */}

              <div
                className={`
w-16
h-16
rounded-2xl
flex
items-center
justify-center
mb-8
transition-all

${isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"}
`}
              >
                <Icon className="w-8 h-8" strokeWidth={2} />
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-secondary mb-3">
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                {service.description}
              </p>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between">
                <span className="font-semibold text-primary">
                  {isSelected ? "Selected" : "Select Service"}
                </span>

                <div
                  className={`
w-6
h-6
rounded-full
border-2
flex
items-center
justify-center
text-xs
font-bold

${isSelected ? "border-primary bg-primary text-white" : "border-gray-300"}
`}
                >
                  {isSelected ? "✓" : ""}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
