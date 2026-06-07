type FormSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function FormSection({
  eyebrow,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10">
      <span
        className="
          uppercase
          tracking-[0.2em]
          text-xs
          text-[#4F8DC9]
          font-semibold
        "
      >
        {eyebrow}
      </span>

      <h2
        className="
          mt-4
          text-3xl
          lg:text-4xl
          font-semibold
          text-[#06172d]
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-slate-600
          leading-relaxed
          max-w-3xl
        "
      >
        {description}
      </p>

      <div className="mt-10">{children}</div>
    </section>
  );
}
