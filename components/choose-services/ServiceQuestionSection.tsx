import {
  CategoryResponse,
  ServiceDefinition,
  ServiceResponse,
} from "@/types/choose-services";
import CategoryCard from "./CategoryCard";
import React, { useEffect, useState } from "react";
import { useCategorySelection } from "@/hooks/useCategorySelection";
import CategoryPanel from "./CategoryPanel";

interface ServiceQuestionSectionProps {
  service: ServiceDefinition;
  value?: ServiceResponse;
  onChange: (response: ServiceResponse) => void;
}

export default function ServiceQuestionSection({
  service,
  value,
  onChange,
}: ServiceQuestionSectionProps) {
  const {
    actualCategories,
    selectedCategories,
    selectedCount,
    toggleCategory,
  } = useCategorySelection(service);

  // const [selectedTasks, setSelectedTasks] = useState<Record<string, string[]>>(
  //   {},
  // );

  // const [selectedQuestions, setSelectedQuestions] = useState<
  //   Record<string, string>
  // >({});

  const [response, setResponse] = useState<ServiceResponse>(() => {
    return (
      value ?? {
        categories: {},
      }
    );
  });

  const updateVoice = (categoryId: string, blob: Blob, previewUrl: string) => {
    updateCategory(categoryId, (current) => ({
      ...current,
      voice: {
        blob,
        previewUrl,
      },
    }));
  };

  const toggleTask = (categoryId: string, taskId: string) => {
    updateCategory(categoryId, (current) => {
      const tasks = current.selectedTasks ?? [];

      const exists = tasks.includes(taskId);

      return {
        ...current,
        selectedTasks: exists
          ? tasks.filter((t) => t !== taskId)
          : [...tasks, taskId],
      };
    });
  };

  const updateQuestion = (categoryId: string, question: string) => {
    updateCategory(categoryId, (current) => ({
      ...current,
      selectedQuestion: question,
    }));
  };

  const updateCategory = (
    categoryId: string,
    updater: (
      current: NonNullable<ServiceResponse["categories"][string]>,
    ) => NonNullable<ServiceResponse["categories"][string]>,
  ) => {
    setResponse((prev) => {
      const current: CategoryResponse = prev.categories[categoryId] ?? {
        selected: true,
        selectedTasks: [],
        selectedQuestion: "",
        note: "",
      };

      const updatedCategory = updater(current);

      return {
        ...prev,
        categories: {
          ...prev.categories,
          [categoryId]: updatedCategory,
        },
      };
    });
  };

  const handleToggleCategory = (categoryId: string) => {
    toggleCategory(categoryId);

    if (categoryId === "all") {
      return;
    }

    setResponse((prev) => {
      const exists = prev.categories[categoryId];

      if (exists) {
        const updated = { ...prev };
        delete updated.categories[categoryId];
        return updated;
      }

      return {
        ...prev,
        categories: {
          ...prev.categories,
          [categoryId]: {
            selected: true,
            selectedTasks: [],
            selectedQuestion: "",
            note: "",
          },
        },
      };
    });
  };

  useEffect(() => {
    if (value) {
      setResponse(value);
    }
  }, [value]);

  useEffect(() => {
    onChange(response);
  }, [response, onChange]);

  return (
    <div className="rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Selected Service
        </p>
      </div>

      <h3 className="text-2xl font-bold text-secondary">{service.title}</h3>

      <p className="mt-2 text-foreground/70">{service.subtitle}</p>

      {selectedCount === 0 && (
        <p className="mt-4 text-sm text-gray-500">
          Please select one or more service categories.
        </p>
      )}

      <div className="mt-8 space-y-3">
        <button
          type="button"
          onClick={() => handleToggleCategory("all")}
          className="w-full rounded-xl border border-dashed border-[#D5E3F2] bg-white px-4 py-3 text-left text-sm font-semibold text-primary hover:bg-[#F5FAFF]"
        >
          Select All Areas
        </button>

        {service.categories
          .filter((category) => category.id !== "all")
          .map((category) => {
            const isSelected =
              selectedCategories[category.id] ||
              !!response.categories[category.id];
            return (
              <div key={category.id} className="space-y-3">
                <CategoryCard
                  category={category}
                  selected={isSelected}
                  onToggle={() => handleToggleCategory(category.id)}
                />

                {isSelected && (
                  <CategoryPanel
                    tasks={category.tasks}
                    question={category.question}
                    isNotSure={category.isNotSure}
                    placeholder={category.placeholder}
                    allowVoice={category.allowVoice}
                    allowAiSuggestion={category.allowAiSuggestion}
                    selectedTasks={
                      response.categories[category.id]?.selectedTasks ?? []
                    }
                    selectedQuestion={
                      response.categories[category.id]?.selectedQuestion ?? ""
                    }
                    voice={response.categories[category.id]?.voice}
                    onToggleTask={(task) => toggleTask(category.id, task)}
                    onQuestionChange={(value) =>
                      updateQuestion(category.id, value)
                    }
                    onVoiceReady={(blob, previewUrl) =>
                      updateVoice(category.id, blob, previewUrl)
                    }
                  />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
