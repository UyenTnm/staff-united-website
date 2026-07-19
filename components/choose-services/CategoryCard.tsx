"use client";

import { ServiceCategory } from "@/types/choose-services";

interface CategoryCardProps {
  category: ServiceCategory;
  selected: boolean;
  onToggle: () => void;
}

export default function CategoryCard({
  category,
  selected,
  onToggle,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`
        w-full
        rounded-xl
        border
        px-4
        py-4
        transition
        text-left
        flex
        items-start
        gap-3

        ${
          selected
            ? "border-primary bg-[#F5FAFF]"
            : "border-[#D5E3F2] bg-white hover:bg-gray-50"
        }
      `}
    >
      <div
        className={`
          mt-0.5
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded
          border
          text-xs
          font-bold

          ${
            selected
              ? "border-primary bg-primary text-white"
              : "border-gray-300"
          }
        `}
      >
        {selected ? "✓" : ""}
      </div>

      <div>
        <h4 className="font-semibold text-secondary">{category.title}</h4>

        {category.description && (
          <p className="mt-1 text-sm text-gray-500">{category.description}</p>
        )}
      </div>
    </button>
  );
}
