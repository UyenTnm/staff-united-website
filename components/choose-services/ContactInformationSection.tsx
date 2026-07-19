interface ContactInformationSectionProps {
  formData: {
    firstName: string;
    lastName: string;
    companyName: string;
    workEmail: string;
    phone: string;
  };

  onChange: (field: string, value: string) => void;
}

export default function ContactInformationSection({
  formData,
  onChange,
}: ContactInformationSectionProps) {
  const inputClass =
    "w-full rounded-xl border border-[#D5E3F2] bg-white px-5 py-4 text-base outline-none transition focus:border-primary";

  return (
    <section className="mb-10 rounded-2xl border border-[#D5E3F2] bg-white p-8">
      <div className="mb-6">
        {/* <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500">
          Contact Information
          <span className="ml-2 normal-case tracking-normal text-gray-400">
            (always shown)
          </span>
        </h2> */}

        <div>
          <h3 className="text-lg font-semibold text-[#0b1b33]">
            Contact Information
          </h3>
          <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          placeholder="First name *"
          value={formData.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Last name *"
          value={formData.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
          className={inputClass}
        />

        <input
          type="text"
          placeholder="Company name *"
          value={formData.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          className={inputClass}
        />

        <input
          type="email"
          placeholder="Work email *"
          value={formData.workEmail}
          onChange={(e) => onChange("workEmail", e.target.value)}
          className={inputClass}
        />

        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Phone number *"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
    </section>
  );
}
