import { ServiceDefinition } from "@/types/choose-services";
import CategoryCard from "./CategoryCard";
import { useState } from "react";
// import SelectionProgress from "./SelectionProgress";
import { useCategorySelection } from "@/hooks/useCategorySelection";
import ServiceDropdown from "./ServiceDropdown";
import SelectQuestion from "./SelectQuestion";
import AdditionalQuestion from "./AdditionalQuestion";

interface ServiceQuestionSectionProps {
  service: ServiceDefinition;
}

type SelectedCategories = Record<string, boolean>;

const createInitialCategorySelection = (service: ServiceDefinition) => {
  return service.categories.reduce(
    (acc, category) => ({
      ...acc,
      [category.id]: false,
    }),
    {} as SelectedCategories,
  );
};
export default function ServiceQuestionSection({
  service,
}: ServiceQuestionSectionProps) {
  const {
    actualCategories,
    selectedCategories,
    selectedCount,
    toggleCategory,
  } = useCategorySelection(service);

  const [selectedSecondAnswer, setSelectedSecondAnswer] = useState("");

  const selectedOption = service.secondQuestion?.options.find(
    (option) => option.id === selectedSecondAnswer,
  );

  return (
    <div className="rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Selected Service
        </p>
      </div>

      <h3 className="text-2xl font-bold text-secondary">{service.title}</h3>

      <p className="mt-2 text-foreground/70">{service.subtitle}</p>

      {/* <SelectionProgress
        selectedCount={selectedCount}
        total={actualCategories.length}
      /> */}

      {selectedCount === 0 && (
        <p className="mt-4 text-sm text-gray-500">
          Please select one or more service categories.
        </p>
      )}

      {/* <div className="mt-8 space-y-4">
        {service.categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            selected={selectedCategories[category.id]}
            onToggle={() => toggleCategory(category.id)}
          />
        ))}
      </div> */}
      <ServiceDropdown
        title={service.question}
        categories={service.categories}
        selected={selectedCategories}
        onToggle={toggleCategory}
        multi
      />

      <ServiceDropdown
        title={service.secondQuestion!.title}
        options={service.secondQuestion!.options}
        multi={false}
        value={selectedSecondAnswer}
        onChange={setSelectedSecondAnswer}
      />

      {/* <p className="mt-4 text-red-500">Selected: {selectedSecondAnswer}</p> */}

      {/* {selectedSecondAnswer === "not-sure" &&
        service.secondQuestion?.additionalQuestion && (
          <AdditionalQuestion
            config={service.secondQuestion.additionalQuestion}
          />
        )} */}
      {selectedOption?.showAdditionalQuestion && (
        <AdditionalQuestion config={selectedOption} />
      )}

      {/* <pre>{JSON.stringify(selectedCategories, null, 2)}</pre> */}
    </div>
  );
}
