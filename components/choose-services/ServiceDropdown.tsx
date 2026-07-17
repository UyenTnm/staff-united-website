"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SelectOption, ServiceCategory } from "@/types/choose-services";

interface ServiceDropdownProps {
  title: string;

  multi?: boolean;

  // Multi Select
  categories?: ServiceCategory[];
  selected?: Record<string, boolean>;
  onToggle?: (id: string) => void;

  options?: SelectOption[];

  // Single Select
  value?: string;
  onChange?: (value: string) => void;
}

export default function ServiceDropdown({
  title,
  multi = true,
  categories = [],
  selected = {},
  onToggle,
  value = "",
  onChange,
  options = [],
}: ServiceDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-[#D5E3F2] bg-white px-5 py-4 text-left transition hover:border-primary"
      >
        <div className="flex flex-col text-left">
          <span className="text-base font-semibold text-secondary">
            {title}
          </span>

          <span className="mt-1 text-sm text-gray-500">
            {multi
              ? "Select one or more services"
              : value
                ? options.find((o) => o.id === value)?.title
                : "Please select one option"}
          </span>
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="mt-2
    overflow-hidden
    rounded-xl
    border
    border-[#D5E3F2]
    bg-white
    shadow-sm"
        >
          {multi
            ? categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => onToggle?.(category.id)}
                  
                  className="cursor-pointer flex items-center gap-3 border-b last:border-b-0 px-5 py-4 hover:bg-slate-50"
                >
                  <div
                    className={`h-5 w-5 rounded border flex items-center justify-center ${
                      selected[category.id]
                        ? "bg-primary border-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {selected[category.id] ? "✓" : ""}
                  </div>

                  <span>{category.title}</span>
                </div>
              ))
            : options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => {
                    onChange?.(option.id);
                    setOpen(false);
                  }}
                  className="cursor-pointer
        flex items-center gap-3 border-b last:border-b-0 px-5 py-4
        hover:bg-slate-50 transition-colors"
                >
                  <div
                    className={`
        h-5
        w-5
        rounded-full
        border-2
        flex
        items-center
        justify-center
        transition-all
        ${value === option.id ? "border-primary" : "border-gray-300"}
      `}
                  >
                    {value === option.id && (
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    )}
                  </div>

                  <span className="text-base font-medium text-secondary">
                    {option.title}
                  </span>
                </div>
              ))}

          <div className="border-t border-[#D5E3F2] p-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full rounded-lg bg-primary py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Done Selecting ✓
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
