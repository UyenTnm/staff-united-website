interface BusinessProfileSectionProps {
  formData: {
    industry: string;
    teamSize: string;
  };

  onChange: (field: string, value: string) => void;
}

export default function BusinessProfileSection({
  formData,
  onChange,
}: BusinessProfileSectionProps) {
  const inputClass =
    "w-full rounded-xl border border-[#D5E3F2] bg-white px-5 py-4 text-base outline-none transition focus:border-primary";

  return (
    <section className="mb-10 rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#0b1b33]">
            Business Profile
          </h3>
          <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <select
          value={formData.industry}
          onChange={(e) => onChange("industry", e.target.value)}
          className={inputClass}
        >
          <option value="">Select Industry</option>
          <option>Accounting</option>
          <option>Construction</option>
          <option>Consulting</option>
          <option>E-commerce</option>
          <option>Education</option>
          <option>Healthcare</option>
          <option>Hospitality</option>
          <option>Legal</option>
          <option>Manufacturing</option>
          <option>Marketing</option>
          <option>Non-profit</option>
          <option>Professional Services</option>
          <option>Real Estate</option>
          <option>Retail</option>
          <option>Technology</option>
          <option>Other</option>
        </select>

        <select
          value={formData.teamSize}
          onChange={(e) => onChange("teamSize", e.target.value)}
          className={inputClass}
        >
          <option value="">Team Size</option>
          <option>1 - 5</option>
          <option>6 - 10</option>
          <option>11 - 25</option>
          <option>26 - 50</option>
          <option>51 - 100</option>
          <option>100+</option>
        </select>
      </div>
    </section>
  );
}
