import { ServiceDefinition } from "@/types/choose-services";
import CategoryCard from "./CategoryCard";

interface ServiceQuestionSectionProps {
  service: ServiceDefinition;
}

export default function ServiceQuestionSection({
  service,
}: ServiceQuestionSectionProps) {
  return (
    <div className="rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Selected Service
        </p>
      </div>

      <h3 className="text-2xl font-bold text-secondary">{service.title}</h3>

      <p className="mt-2 text-foreground/70">{service.subtitle}</p>

      <div className="mt-8 space-y-5">
        {service.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
