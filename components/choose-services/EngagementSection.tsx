import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EngagementSectionProps {
  formData: {
    engagementType: string;
    startTimeline: string;
  };
  errors: Record<string, string>;

  onChange: (field: string, value: string) => void;
}

export default function EngagementSection({
  formData,
  errors,
  onChange,
}: EngagementSectionProps) {
  return (
    <section className="mt-10 rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0B1B33]">Engagement</h3>
          <div className="mt-2 h-[2px] w-10 rounded-full bg-[#4F8DC9]" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Engagement Type */}
        <div>
          <Select
            value={formData.engagementType}
            onValueChange={(value) => onChange("engagementType", value)}
          >
            <SelectTrigger
              id="engagementType"
              className={`h-14 rounded-xl px-5 text-base ${
                errors.engagementType
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#D5E3F2]"
              }`}
            >
              <SelectValue placeholder="Engagement Type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="One-Time Project">One-Time Project</SelectItem>

              <SelectItem value="Ongoing Support">Ongoing Support</SelectItem>

              <SelectItem value="Not Sure Yet">Not Sure Yet</SelectItem>
            </SelectContent>
          </Select>
          {errors.engagementType && (
            <p className="mt-2 text-sm text-red-600">{errors.engagementType}</p>
          )}
        </div>

        {/* Timeline */}
        <div>
          <Select
            value={formData.startTimeline}
            onValueChange={(value) => onChange("startTimeline", value)}
          >
            <SelectTrigger
              id="startTimeline"
              className={`h-14 rounded-xl px-5 text-base ${
                errors.startTimeline
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#D5E3F2]"
              }`}
            >
              <SelectValue placeholder="Preferred Start Timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Immediately">Immediately</SelectItem>

              <SelectItem value="Within 2 Weeks">Within 2 Weeks</SelectItem>

              <SelectItem value="Within 1 Month">Within 1 Month</SelectItem>

              <SelectItem value="1–3 Months">1–3 Months</SelectItem>

              <SelectItem value="Just Exploring">Just Exploring</SelectItem>
            </SelectContent>
          </Select>
          {errors.startTimeline && (
            <p className="mt-2 text-sm text-red-600">{errors.startTimeline}</p>
          )}
        </div>
      </div>
    </section>
  );
}
