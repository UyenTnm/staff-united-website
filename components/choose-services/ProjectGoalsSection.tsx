import { useState } from "react";
import VoiceRecorder from "../forms/VoiceRecorder";

interface ProjectGoalsSectionProps {
  formData: {
    primaryGoal: string;
    additionalInformation: string;
  };

  onChange: (field: string, value: string) => void;
}

export default function ProjectGoalsSection({
  formData,
  onChange,
}: ProjectGoalsSectionProps) {
  const textareaClass =
    "w-full rounded-xl border border-[#D5E3F2] bg-white px-5 py-4 text-base outline-none transition resize-none focus:border-primary";

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [voiceRecording, setVoiceRecording] = useState<{
    blob: Blob;
    previewUrl: string;
  } | null>(null);

  return (
    <section className="mt-10 rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0b1b33]">
            {" "}
            Project Goals
          </h3>
          <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-secondary">
            What's the #1 outcome you want, and qhat's stopped you from solving
            this already?
          </label>

          {/* <div className="pt-2">
            <label className="mb-2 block text-sm font-medium text-secondary">
              Voice Explanation (Optional)
            </label>
          </div> */}

          <textarea
            rows={5}
            placeholder="Tell us what you're trying to achieve..."
            value={formData.primaryGoal}
            onChange={(e) => onChange("primaryGoal", e.target.value)}
            className={textareaClass}
          />

          <VoiceRecorder
            onRecordingReady={(blob, previewUrl) => {
              setVoiceRecording({
                blob,
                previewUrl,
              });
            }}
          />
        </div>
      </div>
    </section>
  );
}
