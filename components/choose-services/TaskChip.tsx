"use client";

interface TaskChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function TaskChip({ label, selected, onClick }: TaskChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
        transition-all

        ${
          selected
            ? "border-primary bg-primary text-white"
            : "border-[#D5E3F2] bg-white text-secondary hover:border-primary hover:bg-[#F5FAFF]"
        }
      `}
    >
      {label}
    </button>
  );
}
