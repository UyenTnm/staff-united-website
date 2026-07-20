import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ContactInformationSectionProps {
  formData: {
    firstName: string;
    lastName: string;
    companyName: string;
    workEmail: string;
    phone: string;
  };
  errors: Record<string, string>;

  onChange: (field: string, value: string) => void;
}

export default function ContactInformationSection({
  formData,
  errors,
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
        <div>
          <input
            type="text"
            id="firstName"
            placeholder="First name *"
            value={formData.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={`${inputClass} ${
              errors.firstName ? "border-red-500 focus:border-red-500" : ""
            }`}
          />

          {errors.firstName && (
            <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            id="lastName"
            placeholder="Last name *"
            value={formData.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={`${inputClass} ${
              errors.lastName ? "border-red-500 focus:border-red-500" : ""
            }`}
          />

          {errors.lastName && (
            <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            id="companyName"
            placeholder="Company name *"
            value={formData.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            className={`${inputClass} ${
              errors.companyName ? "border-red-500 focus:border-red-500" : ""
            }`}
          />

          {errors.companyName && (
            <p className="mt-2 text-sm text-red-600">{errors.companyName}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            id="workEmail"
            placeholder="Work email *"
            value={formData.workEmail}
            onChange={(e) => onChange("workEmail", e.target.value)}
            className={`${inputClass} ${
              errors.workEmail ? "border-red-500 focus:border-red-500" : ""
            }`}
          />

          {errors.workEmail && (
            <p className="mt-2 text-sm text-red-600">{errors.workEmail}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <div className="relative w-full">
            {(formData.phone === "" || formData.phone === "1") && (
              <span
                className="
          absolute
          left-[75px]
          top-1/2
          -translate-y-1/2
          text-[#9ca3af]
          pointer-events-none
          z-10
        "
              >
                Phone Number <span className="text-grey-500">*</span>
              </span>
            )}

            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={(value) => onChange("phone", value)}
              enableSearch
              containerClass="w-full"
              inputClass={`
        !w-full
        !h-[58px]
        !rounded-xl
        !border
        ${errors.phone ? "!border-red-500" : "!border-[#D5E3F2]"}
        !pl-[52px]
      `}
              buttonClass="!border-[#D5E3F2] !rounded-l-xl"
            />
          </div>

          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>
    </section>
  );
}
