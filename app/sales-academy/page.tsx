export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="max-w-7xl mx-auto px-6 pt-40 pb-32 text-center">
        <p className="uppercase tracking-[0.3em] text-[#4f8dc9]">
          STAFF United Academy
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          Build World-Class
          <br />
          Sales Professionals
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-white/70 text-lg">
          A structured internal training program designed to equip every STAFF
          United team member with the knowledge, confidence and communication
          skills needed to represent our company with excellence.
        </p>

        <div className="mt-12">
          <a
            href="/academy/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#4f8dc9] px-8 py-4 font-medium text-[#0a1b33] transition hover:bg-white"
          >
            Employee Login →
          </a>
        </div>
      </section>
    </main>
  );
}
