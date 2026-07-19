interface SubmitSectionProps {
  disabled: boolean;
  loading?: boolean;
  onSubmit: () => void;
}

export default function SubmitSection({
  disabled,
  loading = false,
  onSubmit,
}: SubmitSectionProps) {
  return (
    <section className="mt-10">
      <button
        type="button"
        disabled={disabled || loading}
        onClick={onSubmit}
        className={`
          w-full
          rounded-2xl
          py-5
          text-lg
          font-semibold
          transition-all
          duration-300

          ${
            disabled || loading
              ? "cursor-not-allowed bg-gray-300 text-gray-500"
              : "bg-primary text-white hover:opacity-90 hover:shadow-lg"
          }
        `}
      >
        {loading ? "Submitting..." : "Submit Request"}
      </button>
    </section>
  );
}
