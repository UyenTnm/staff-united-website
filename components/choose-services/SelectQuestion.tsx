"use client";

interface SelectQuestionProps {
  title: string;
  options: string[];
}

export default function SelectQuestion({
  title,
  options,
}: SelectQuestionProps) {
  return (
    <div className="mt-6">
      <label className="mb-2 block text-sm font-semibold text-secondary">
        {title}
      </label>

      <select className="w-full rounded-xl border border-[#D5E3F2] bg-white px-5 py-4 focus:border-primary focus:outline-none">
        <option value="">Please select</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
