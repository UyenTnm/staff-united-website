import { SERVICE_MAP } from "@/data/choose-services/service-map";
import ServiceQuestionSection from "./ServiceQuestionSection";

interface DynamicServiceSectionProps {
  selectedServices: string[];
}

export default function DynamicServiceSection({
  selectedServices,
}: DynamicServiceSectionProps) {
  console.log("Selected Services:", selectedServices);

  if (selectedServices.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <div className="rounded-3xl border border-[#D5E3F2] bg-white p-10 shadow-sm">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Request Information
        </h2>

        <p className="text-foreground/70 mb-10">
          Complete the information below and we'll prepare a proposal tailored
          to your business.
        </p>

        <div className="space-y-8">
          {selectedServices.map((serviceId) => {
            console.log("serviceId:", serviceId);
            const service = SERVICE_MAP[serviceId];
            if (!service) return null;

            return (
              <ServiceQuestionSection key={service.id} service={service} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
