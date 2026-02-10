"use client";

import { useState } from "react";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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

        {/* Confirmation */}
        {submitted ? (
          <div className="bg-white border border-[#d1d5db] rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-[#0b1b33] mb-2">
              Thank you for applying
            </h2>
            <p className="text-[#0b1b33]/70">
              If shortlisted, we’ll be in touch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#d1d5db] rounded-lg p-6 space-y-8"
          >
            {/* Basic Info */}
            <section className="space-y-4">
              <h3 className="font-semibold text-[#0b1b33]">
                Basic Information
              </h3>

              <input
                required
                placeholder="Full Name"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
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
                placeholder="Role Interest"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <select className="w-full border border-[#d1d5db] rounded px-3 py-2">
                <option>English Level</option>
                <option>Basic</option>
                <option>Intermediate</option>
                <option>Fluent</option>
                <option>Native</option>
              </select>

              <input
                placeholder="Availability"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
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
                placeholder="Skills"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                placeholder="Tools"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <textarea
                rows={4}
                placeholder="Experience Summary"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                placeholder="Portfolio Link"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                type="file"
                accept=".pdf"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />
            </section>

            {/* Culture Fit */}
            <section className="space-y-4">
              <h3 className="font-semibold text-[#0b1b33]">Culture Fit</h3>

              <textarea
                rows={4}
                placeholder="Why STAFF United?"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <label className="flex items-start gap-2 text-sm text-[#0b1b33]/80">
                <input type="checkbox" required />I consent to having my
                information reviewed for recruitment purposes.
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
        )}
      </div>
    </main>
  );
}
