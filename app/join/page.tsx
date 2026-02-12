"use client";

import { useState } from "react";

const vietnamProvinces = [
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Định",
  "Bình Dương",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cần Thơ",
  "Cao Bằng",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
  "Hồ Chí Minh",
].sort((a, b) => a.localeCompare(b, "vi"));

export default function JoinPage() {
  const [role, setRole] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleList = [
    "Content Writer",
    "Content Editor",
    "Social Media Executive",
    "Graphic Designer",
    "Web Designer",
    "Video Editor",
    "Motion Designer",
    "UI/UX Designer",
    "Virtual Assistant (VA)",
    "Virtual Assistant",
    "Executive Assistant",
    "Operations Support",
    "CRM & Data Support",
    "Customer Support",
  ];

  const creativeTools = [
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "After Effects",
    "CapCut",
    "Figma",
    "Meta Business Suite",
    "Google Analytics",
  ];

  const adminTools = [
    "Google Workspace",
    "Notion",
    "Monday.com",
    "Slack",
    "HubSpot",
    "CRM Systems",
    "Excel / Google Sheets",
  ];

  const isCreative =
    role.includes("Designer") ||
    role.includes("Editor") ||
    role.includes("Content") ||
    role.includes("Social") ||
    role.includes("Video");

  return (
    <main className="min-h-screen bg-[#f2f4f7]">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#0b1b33]">
            Join the Team
          </h1>
          <div className="w-12 h-[3px] bg-[#4f8fcb] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#0b1b33]/80 leading-relaxed mt-4">
            STAFF United is built by women who take execution seriously.
            <br />
            If you value standards, discipline, and growth, apply below.
          </p>
        </div>

        {success ? (
          <div className="bg-white border border-[#4f8fcb]/40 rounded-lg p-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#4f8fcb]/10 flex items-center justify-center">
              <span className="text-2xl text-[#4f8fcb]">✓</span>
            </div>
            <h2 className="text-xl font-semibold text-[#0b1b33]">
              Application Submitted
            </h2>
            <p className="text-[#0b1b33]/70">
              Thank you for applying. If shortlisted, we’ll be in touch.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 px-6 py-2 bg-[#0b1b33] text-white rounded hover:bg-[#0b1b33]/90 transition"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);

              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);

              const response = await fetch("https://formspree.io/f/mbdadpee", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
              });

              setIsSubmitting(false);

              if (response.ok) {
                setSuccess(true);
                form.reset();
                setRole("");
              } else {
                alert("Something went wrong. Please try again.");
              }
            }}
            className="bg-white border border-[#d1d5db] rounded-lg p-8 space-y-10"
          >
            {/* BASIC INFO */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Basic Information
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="first_name"
                  required
                  placeholder="First Name"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />
                <input
                  name="last_name"
                  required
                  placeholder="Last Name"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />
              </div>

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <select
                name="location"
                required
                className="w-full border  border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Select Your Province / City</option>
                {vietnamProvinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </section>

            {/* ROLE */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Role & Availability
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <select
                name="role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Select Role</option>
                {roleList.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              <select
                name="availability"
                required
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Availability</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Freelance</option>
              </select>

              <div>
                <label className="text-sm text-[#0b1b33]">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  name="start_date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />
              </div>
            </section>

            {/* SKILLS */}
            {role && (
              <section className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#0b1b33]">
                    Skills & Experience
                  </h3>
                  <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-2 text-sm text-[#0b1b33]/80">
                  {(isCreative ? creativeTools : adminTools).map((tool) => (
                    <label key={tool} className="flex items-center gap-2">
                      <input type="checkbox" name="tools" value={tool} />
                      {tool}
                    </label>
                  ))}
                </div>

                <input
                  name="experience_years"
                  type="number"
                  min="0"
                  required
                  placeholder="Years of experience (e.g. 3)"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />

                <input
                  name="portfolio_link"
                  type="url"
                  placeholder="Portfolio link (Google Drive / Behance / GitHub / Website)"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />

                <textarea
                  name="experience_summary"
                  rows={4}
                  placeholder="Brief summary of your professional experience..."
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />
              </section>
            )}

            {/* CULTURE */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Culture Fit
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <textarea
                name="why_staff_united"
                rows={4}
                placeholder="Why would you like to join STAFF United?"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <label className="flex items-start gap-2 text-sm text-[#0b1b33]/80">
                <input type="checkbox" name="consent" required />I consent to
                having my information reviewed for recruitment purposes.
              </label>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0b1b33] text-white py-3 rounded font-medium hover:bg-[#0b1b33]/90 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
