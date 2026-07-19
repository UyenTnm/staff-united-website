"use client";

import { useState } from "react";
import TaskChip from "./TaskChip";
import { CategoryQuestion, TaskOption } from "@/types/choose-services";
import VoiceRecorder from "../forms/VoiceRecorder";

interface CategoryPanelProps {
  tasks?: TaskOption[];

  question?: CategoryQuestion;

  isNotSure?: boolean;

  placeholder?: string;

  allowVoice?: boolean;

  allowAiSuggestion?: boolean;

  selectedTasks: string[];

  selectedQuestion?: string;

  voice?: {
    blob: Blob;
    previewUrl: string;
  };

  onVoiceReady?: (blob: Blob, previewUrl: string) => void;

  onToggleTask: (taskId: string) => void;

  onQuestionChange?: (value: string) => void;
}

export default function CategoryPanel({
  tasks = [],
  question,

  isNotSure = false,

  placeholder,

  allowVoice,

  allowAiSuggestion,

  selectedTasks,

  selectedQuestion,
  voice,
  onToggleTask,
  onQuestionChange,
  onVoiceReady,
}: CategoryPanelProps) {
  if (isNotSure) {
    return (
      <div className="mt-4 rounded-xl border border-[#D5E3F2] bg-[#FAFCFF] p-5">
        <h4 className="text-lg font-semibold text-secondary">Not Sure Yet</h4>

        <p className="mt-2 text-sm text-gray-600">
          Not sure which service fits? Tell us about your business goals and
          current challenges, and we'll help recommend the right solution.
        </p>

        <textarea
          placeholder={placeholder}
          value={selectedQuestion ?? ""}
          onChange={(e) => onQuestionChange?.(e.target.value)}
          rows={6}
          className="mt-5 w-full resize-none rounded-lg border border-[#D5E3F2] bg-white px-4 py-3 text-sm outline-none focus:border-primary"
        />
        <VoiceRecorder
          onRecordingReady={(blob, previewUrl) =>
            onVoiceReady?.(blob, previewUrl)
          }
        />

        {/* <div className="mt-5 flex flex-wrap gap-3">
          {allowVoice && (
            <div className="rounded-lg border border-dashed border-[#D5E3F2] px-4 py-2 text-sm text-gray-500">
              🎤 Voice Recording (Coming Soon)
            </div>
          )}

          {allowAiSuggestion && (
            <div className="rounded-lg border border-dashed border-[#D5E3F2] px-4 py-2 text-sm text-gray-500">
              🤖 AI Recommendation (Coming Soon)
            </div>
          )}
        </div> */}
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl border border-[#D5E3F2] bg-[#FAFCFF] p-5">
      <h4 className="text-sm font-semibold text-secondary">Specific Tasks</h4>

      <div className="mt-4 flex flex-wrap gap-3">
        {tasks.map((task) => (
          <TaskChip
            key={task.id}
            label={task.title}
            selected={selectedTasks.includes(task.id)}
            onClick={() => onToggleTask(task.id)}
          />
        ))}
      </div>

      {question && (
        <div className="mt-6">
          <label className="mb-2 block text-sm font-semibold text-secondary">
            {question.title}
          </label>

          <select
            value={selectedQuestion ?? ""}
            onChange={(e) => onQuestionChange?.(e.target.value)}
            className="w-full rounded-lg border border-[#D5E3F2] bg-white px-4 py-3 text-sm"
          >
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
