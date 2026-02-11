"use client";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#f2f4f7]">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Intro */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-[#0b1b33] mb-4">
            Join the Team
          </h1>
          <p className="text-[#0b1b33]/80 leading-relaxed">
            STAFF United is built by women who take execution seriously.
            <br />
            If you value standards, discipline, and growth, apply below.
          </p>
        </div>

        {/* FORM */}
        <form
          action="https://formspree.io/f/mbdadpee"
          method="POST"
          encType="multipart/form-data"
          className="bg-white border border-[#d1d5db] rounded-lg p-6 space-y-8"
        >
          {/* Basic Info */}
          <section className="space-y-4">
            <h3 className="font-semibold text-[#0b1b33]">Basic Information</h3>

            <input
              name="full_name"
              required
              placeholder="Full Name"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <input
              name="location"
              placeholder="Location"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />
          </section>

          {/* Role & Availability */}
          <section className="space-y-4">
            <h3 className="font-semibold text-[#0b1b33]">
              Role & Availability
            </h3>

            <input
              name="role_interest"
              placeholder="Role Interest"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <select
              name="english_level"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            >
              <option>English Level</option>
              <option>Basic</option>
              <option>Intermediate</option>
              <option>Fluent</option>
              <option>Native</option>
            </select>

            <input
              name="availability"
              placeholder="Availability"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <input
              name="start_timeline"
              placeholder="Start Timeline"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />
          </section>

          {/* Skills & Experience */}
          <section className="space-y-4">
            <h3 className="font-semibold text-[#0b1b33]">
              Skills & Experience
            </h3>

            <input
              name="skills"
              placeholder="Skills"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <input
              name="tools"
              placeholder="Tools"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <textarea
              name="experience_summary"
              rows={4}
              placeholder="Experience Summary"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <input
              name="portfolio_link"
              placeholder="Portfolio Link"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <input
              name="resume"
              type="file"
              accept=".pdf"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />
          </section>

          {/* Culture Fit */}
          <section className="space-y-4">
            <h3 className="font-semibold text-[#0b1b33]">Culture Fit</h3>

            <textarea
              name="why_staff_united"
              rows={4}
              placeholder="Why STAFF United?"
              className="w-full border border-[#d1d5db] rounded px-3 py-2"
            />

            <label className="flex items-start gap-2 text-sm text-[#0b1b33]/80">
              <input type="checkbox" name="consent" required />I consent to
              having my information reviewed for recruitment purposes.
            </label>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full
              bg-[#0b1b33]
              text-white
              py-3
              rounded
              font-medium
              hover:bg-[#0b1b33]/90
              transition
            "
          >
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}
