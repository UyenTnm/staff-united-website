import { ServiceDefinition } from "@/types/choose-services";
import CategoryCard from "./CategoryCard";
import React, { useState } from "react";
import { useCategorySelection } from "@/hooks/useCategorySelection";
import CategoryPanel from "./CategoryPanel";

interface ServiceQuestionSectionProps {
  service: ServiceDefinition;
}

export default function ServiceQuestionSection({
  service,
}: ServiceQuestionSectionProps) {
  const {
    actualCategories,
    selectedCategories,
    selectedCount,
    toggleCategory,
  } = useCategorySelection(service);

  const [selectedTasks, setSelectedTasks] = useState<Record<string, string[]>>(
    {},
  );

  const [selectedQuestions, setSelectedQuestions] = useState<
    Record<string, string>
  >({});

  const [selectedVoices, setSelectedVoices] = useState<
    Record<
      string,
      {
        blob: Blob;
        previewUrl: string;
      }
    >
  >({});

  const updateQuestion = (categoryId: string, value: string) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      [categoryId]: value,
    }));
  };

  const updateVoice = (categoryId: string, blob: Blob, previewUrl: string) => {
    setSelectedVoices((prev) => ({
      ...prev,
      [categoryId]: {
        blob,
        previewUrl,
      },
    }));
  };

  const toggleTask = (categoryId: string, task: string) => {
    setSelectedTasks((prev) => {
      const currentTasks = prev[categoryId] || [];

      const updatedTasks = currentTasks.includes(task)
        ? currentTasks.filter((t) => t !== task)
        : [...currentTasks, task];

      return {
        ...prev,
        [categoryId]: updatedTasks,
      };
    });
  };

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
          onClick={() => toggleCategory("all")}
          className="w-full rounded-xl border border-dashed border-[#D5E3F2] bg-white px-4 py-3 text-left text-sm font-semibold text-primary hover:bg-[#F5FAFF]"
        >
          Select All Areas
        </button>

        {service.categories
          .filter((category) => category.id !== "all")
          .map((category) => {
            const isSelected = selectedCategories[category.id];
            return (
              <div key={category.id} className="space-y-3">
                <CategoryCard
                  category={category}
                  selected={isSelected}
                  onToggle={() => toggleCategory(category.id)}
                />

                {isSelected && (
                  <CategoryPanel
                    tasks={category.tasks}
                    question={category.question}
                    isNotSure={category.isNotSure}
                    placeholder={category.placeholder}
                    allowVoice={category.allowVoice}
                    allowAiSuggestion={category.allowAiSuggestion}
                    selectedTasks={selectedTasks[category.id] || []}
                    selectedQuestion={selectedQuestions[category.id] || ""}
                    onToggleTask={(task) => toggleTask(category.id, task)}
                    onQuestionChange={(value) =>
                      updateQuestion(category.id, value)
                    }
                    voice={selectedVoices[category.id]}
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
