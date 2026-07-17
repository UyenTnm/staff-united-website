"use client";

import {
  AdditionalQuestion as AdditionalQuestionConfig,
  SelectOption,
} from "@/types/choose-services";

interface AdditionalQuestionProps {
  config: SelectOption;
}

export default function AdditionalQuestion({
  config,
}: AdditionalQuestionProps) {
  return (
    <div className="mt-6 rounded-xl border border-[#D5E3F2] bg-white p-6">
      <h4 className="text-lg font-semibold text-secondary">{config.title}</h4>

      <textarea
        placeholder={config.additionalPlaceholder}
        className="mt-4 min-h-[120px] w-full rounded-xl border border-[#D5E3F2] p-4 outline-none focus:border-primary"
      />

      {config.allowVoice && (
        <button
          type="button"
          className="mt-4 rounded-lg border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition"
        >
          🎤 Record Voice
        </button>
      )}
    </div>
  );
}
