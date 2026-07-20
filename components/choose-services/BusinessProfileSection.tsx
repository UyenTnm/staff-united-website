import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BusinessProfileSectionProps {
  formData: {
    industry: string;
    otherIndustry: string;
    teamSize: string;
  };
  errors: Record<string, string>;

  onChange: (field: string, value: string) => void;
}

export default function BusinessProfileSection({
  formData,
  errors,
  onChange,
}: BusinessProfileSectionProps) {
  return (
    <section className="mb-10 rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0B1B33]">
            Business Profile
          </h3>
          <div className="mt-2 h-[2px] w-10 rounded-full bg-[#4F8DC9]" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Industry */}
        <div>
          <Select
            value={formData.industry}
            onValueChange={(value) => onChange("industry", value)}
          >
            <SelectTrigger
              id="industry"
              className={`h-14 rounded-xl px-5 text-base ${
                errors.industry
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#D5E3F2]"
              }`}
            >
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Accounting">Accounting</SelectItem>
              <SelectItem value="Construction">Construction</SelectItem>
              <SelectItem value="Consulting">Consulting</SelectItem>
              <SelectItem value="E-commerce">E-commerce</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Hospitality">Hospitality</SelectItem>
              <SelectItem value="Legal">Legal</SelectItem>
              <SelectItem value="Manufacturing">Manufacturing</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Non-profit">Non-profit</SelectItem>
              <SelectItem value="Professional Services">
                Professional Services
              </SelectItem>
              <SelectItem value="Real Estate">Real Estate</SelectItem>
              <SelectItem value="Retail">Retail</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.industry && (
            <p className="mt-2 text-sm text-red-600">{errors.industry}</p>
          )}

          {formData.industry === "Other" && (
            <input
              type="text"
              value={formData.otherIndustry}
              onChange={(e) => onChange("otherIndustry", e.target.value)}
              placeholder="Please specify your industry"
              className={`mt-4 h-14 w-full rounded-xl bg-white px-5 text-base outline-none transition ${
                errors.otherIndustry
                  ? "border border-red-500 focus:border-red-500"
                  : "border border-[#D5E3F2] focus:border-primary"
              }`}
            />
          )}
          {errors.otherIndustry && (
            <p className="mt-2 text-sm text-red-600">{errors.otherIndustry}</p>
          )}
        </div>
        {/* Team Size */}
        <div>
          <Select
            value={formData.teamSize}
            onValueChange={(value) => onChange("teamSize", value)}
          >
            <SelectTrigger
              id="teamSize"
              className={`h-14 rounded-xl px-5 text-base ${
                errors.teamSize
                  ? "border-red-500 focus:border-red-500"
                  : "border-[#D5E3F2]"
              }`}
            >
              <SelectValue placeholder="Team Size" />
            </SelectTrigger>
            {errors.teamSize && (
              <p className="mt-2 text-sm text-red-600">{errors.teamSize}</p>
            )}

            <SelectContent>
              <SelectItem value="1 - 5">1 - 5</SelectItem>
              <SelectItem value="6 - 10">6 - 10</SelectItem>
              <SelectItem value="11 - 25">11 - 25</SelectItem>
              <SelectItem value="26 - 50">26 - 50</SelectItem>
              <SelectItem value="51 - 100">51 - 100</SelectItem>
              <SelectItem value="100+">100+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
