interface EngagementSectionProps {
  formData: {
    engagementType: string;
    startTimeline: string;
  };

  onChange: (field: string, value: string) => void;
}

export default function EngagementSection({
  formData,
  onChange,
}: EngagementSectionProps) {
  const inputClass =
    "w-full rounded-xl border border-[#D5E3F2] bg-white px-5 py-4 text-base outline-none transition focus:border-primary";

  return (
    <section className="mt-10 rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0b1b33]">Engagement</h3>
          <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <select
          value={formData.engagementType}
          onChange={(e) => onChange("engagementType", e.target.value)}
          className={inputClass}
        >
          <option value="">Engagement Type</option>
          <option>One-Time Project</option>
          <option>Ongoing Support</option>
          <option>Not Sure Yet</option>
        </select>

        <select
          value={formData.startTimeline}
          onChange={(e) => onChange("startTimeline", e.target.value)}
          className={inputClass}
        >
          <option value="">Preferred Start Timeline</option>
          <option>Immediately</option>
          <option>Within 2 Weeks</option>
          <option>Within 1 Month</option>
          <option>1–3 Months</option>
          <option>Just Exploring</option>
        </select>
      </div>
    </section>
  );
}
