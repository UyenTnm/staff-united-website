"use client";

import { useSearchParams } from "next/navigation";

export default function RequestSupportPage() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  return (
    <main className="min-h-screen bg-[#f2f4f7]">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Intro */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-[#0b1b33] mb-4">
            Request Support
          </h1>
          <p className="text-[#0b1b33]/80 leading-relaxed">
            Tell us what you need and we’ll recommend the right setup.
            <br />
            Dedicated team members or flexible support—under one shared
            standard.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {success === "true" ? (
          <div className="bg-white border border-[#d1d5db] rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-[#0b1b33] mb-2">
              Thank you
            </h2>
            <p className="text-[#0b1b33]/70">
              Your request has been received. Our team will follow up shortly.
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xwvnvwjy"
            method="POST"
            encType="multipart/form-data"
            className="bg-white border border-[#d1d5db] rounded-lg p-6 space-y-8"
          >
            {/* Hidden redirect after submit */}
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/request-support?success=true"
            />

            {/* BASIC INFO */}
            <section className="space-y-4">
              <h3 className="font-semibold text-[#0b1b33]">
                Contact Information
              </h3>

              <input
                name="full_name"
                required
                placeholder="Full Name"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="company_name"
                required
                placeholder="Company Name"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="work_email"
                required
                type="email"
                placeholder="Work Email"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="phone"
                placeholder="Phone / WhatsApp"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="website"
                placeholder="Company Website"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />
            </section>

            {/* SUPPORT DETAILS */}
            <section className="space-y-4">
              <h3 className="font-semibold text-[#0b1b33]">Support Details</h3>

              <select
                name="support_type"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option>Support Type</option>
                <option>Creative</option>
                <option>Administration</option>
                <option>Both</option>
              </select>

              <select
                name="engagement_model"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option>Engagement Model</option>
                <option>Dedicated</option>
                <option>Flexible</option>
                <option>Not sure</option>
              </select>

              <textarea
                name="description"
                rows={4}
                placeholder="Description of Needs"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="start_timeline"
                placeholder="Start Timeline"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="hours_per_week"
                placeholder="Hours per Week"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="time_zone"
                placeholder="Time Zone"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="tools_used"
                placeholder="Tools Used"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="attachment"
                type="file"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <textarea
                name="additional_notes"
                rows={3}
                placeholder="Additional Notes"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />
            </section>

            {/* CONSENT */}
            <section className="space-y-4">
              <label className="flex items-start gap-2 text-sm text-[#0b1b33]/80">
                <input type="checkbox" required name="consent" />I consent to
                having my information reviewed for support purposes.
              </label>
            </section>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-[#0b1b33] text-white py-3 rounded font-medium hover:bg-[#0b1b33]/90 transition"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
