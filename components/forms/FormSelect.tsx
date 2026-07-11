"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FormSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  searchable?: boolean;
}

export default function FormSelect({
  value,
  onChange,
  options,
  placeholder = "Please Select",
  error,
  className = "",
}: FormSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`
          w-full
          h-14
          rounded-2xl
          border
          bg-white
          px-5
          flex
          items-center
          justify-between
          text-left
          transition-all
          duration-200
          ${
            error
              ? "border-red-500 bg-red-50"
              : "border-slate-200 hover:border-[#4F8DC9] focus:border-[#4F8DC9]"
          }
        `}
      >
        <span className={value ? "text-slate-900" : "text-slate-400"}>
          {value || placeholder}
        </span>

        <ChevronDown
          className={`
            w-5
            h-5
            text-[#4F8DC9]
            transition-transform
            duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            mt-2
            z-50
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-xl
            max-h-72
            overflow-y-auto
          "
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`
                w-full
                px-5
                py-3
                text-left
                transition-colors

                ${
                  value === option
                    ? "bg-[#F4F9FF] text-[#4F8DC9] font-medium"
                    : "hover:bg-slate-50"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
