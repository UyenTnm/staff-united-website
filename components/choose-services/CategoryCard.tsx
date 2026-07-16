"use client";

import { useState } from "react";
import { ServiceCategory } from "@/types/choose-services";

interface CategoryCardProps {
  category: ServiceCategory;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-[#D5E3F2] overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left hover:bg-gray-50 transition"
      >
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold text-secondary">
              {category.title}
            </h4>

            {category.description && (
              <p className="mt-2 text-sm text-foreground/70">
                {category.description}
              </p>
            )}
          </div>

          <span
            className={`text-xl transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-[#D5E3F2] bg-gray-50 p-6">
          <p className="text-sm text-gray-500">Tasks will appear here...</p>
        </div>
      )}
    </div>
  );
}
