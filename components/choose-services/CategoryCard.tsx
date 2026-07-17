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
  const isSelected = selected;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#D5E3F2] bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 transition"
      >
        <div>
          <div className="flex items-center gap-3">
            <div
              className={`
w-6
h-6
rounded-full
flex
items-center
justify-center
text-xs
font-bold

${isSelected ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}
`}
            >
              {isSelected ? "✓" : ""}
            </div>

            <h4 className="text-lg font-semibold text-secondary">
              {category.title}
            </h4>
          </div>
        </div>
      </button>
    </div>
  );
}
