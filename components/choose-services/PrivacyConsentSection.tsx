interface PrivacyConsentSectionProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function PrivacyConsentSection({
  checked,
  onChange,
}: PrivacyConsentSectionProps) {
  return (
    // <section className="rounded-2xl border border-[#D5E3F2] bg-white p-8">
    <section className="mt-10 flex justify-left">
      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#0b1b33]/90 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 shrink-0 rounded border-gray-300"
        />
        <span className="text-sm leading-6 text-gray-700">
          I have read and agree to the Privacy Policy.
        </span>
        {/* <span className="text-sm leading-6 text-gray-700">
          I have read and agree to the{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-4"
          >
            Privacy Policy
          </a>
          . <span className="text-red-500">*</span>
        </span> */}
      </label>
    </section>
  );
}
