import { useState } from "react";
import { ServiceDefinition } from "@/types/choose-services";

export type SelectedCategories = Record<string, boolean>;

export function useCategorySelection(service: ServiceDefinition) {
  const actualCategories = service.categories.filter(
    (category) => category.id !== "all",
  );

  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategories>(() =>
      service.categories.reduce(
        (acc, category) => ({
          ...acc,
          [category.id]: false,
        }),
        {} as SelectedCategories,
      ),
    );

  const selectedCount = actualCategories.filter(
    (category) => selectedCategories[category.id],
  ).length;

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const next = { ...prev };

      if (categoryId === "all") {
        const selectAll = !prev.all;

        service.categories.forEach((category) => {
          next[category.id] = selectAll;
        });

        return next;
      }

      next[categoryId] = !prev[categoryId];

      next.all = actualCategories.every((category) => next[category.id]);

      return next;
    });
  };

  return {
    actualCategories,
  };
}
