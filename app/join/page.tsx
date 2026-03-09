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
    "UI/UX Designer",
    "Video Editor",
    "Motion Designer",

    "Virtual Assistant",
    "Executive Assistant",
    "Operations Support",
    "CRM & Data Support",
    "Customer Support",
    "Research Assistant",

    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
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

  const techTools = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
    "Git / GitHub",
  ];

  const isCreative =
    role.includes("Designer") ||
    role.includes("Editor") ||
    role.includes("Content") ||
    role.includes("Social") ||
    role.includes("Video");

  const isTech =
    role.includes("Developer") ||
    role.includes("Engineer") ||
    role.includes("Frontend") ||
    role.includes("Backend") ||
    role.includes("Full Stack") ||
    role.includes("QA");

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

              await fetch(
                "https://script.google.com/macros/s/AKfycbzybHfmkVYdBr8Dcu57vZKnfVn2VIrbqVyY1Sxoy1eOhx_ErEvHqZMSCSmLUm_QCLt7/exec",
                {
                  method: "POST",
                  mode: "no-cors",
                  body: formData,
                },
              );

              // vì no-cors nên không đọc được response, cứ coi là thành công
              setSuccess(true);
              form.reset();
              setRole("");

              setIsSubmitting(false);

              setSuccess(true);

              form.reset();
              setRole("");

              // if (response.ok) {
              //   setSuccess(true);
              //   form.reset();
              //   setRole("");
              // } else {
              //   alert("Something went wrong. Please try again.");
              // }
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

            {/* PROFESSIONAL PROFILE */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Professional Profile
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <select
                name="specialization"
                required
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Area of Specialization</option>
                <option>Software Development</option>
                <option>Marketing</option>
                <option>Design</option>
                <option>Operations</option>
                <option>Customer Support</option>
              </select>

              <input
                name="expected_role"
                required
                placeholder="Current / Expected Role (e.g. Senior UX Designer)"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <textarea
                name="strength_summary"
                required
                rows={3}
                placeholder="Brief strengths summary (short professional bio)"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />
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

                {/* Skills */}
                <div className="grid md:grid-cols-2 gap-2 text-sm text-[#0b1b33]/80">
                  {(isCreative
                    ? creativeTools
                    : isTech
                      ? techTools
                      : adminTools
                  ).map((tool) => (
                    <label key={tool} className="flex items-center gap-2">
                      <input type="checkbox" name="tools" value={tool} />
                      {tool}
                    </label>
                  ))}
                </div>

                {/* Experience years */}
                <input
                  name="experience_years"
                  type="number"
                  min="0"
                  required
                  placeholder="Years of professional experience (e.g. 3)"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />

                {/* Portfolio */}
                <input
                  name="portfolio_link"
                  required
                  type="url"
                  placeholder="Portfolio / Work samples (Google Drive / Behance / GitHub / Website)"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />

                {/* Experience summary */}
                <textarea
                  name="experience_summary"
                  required
                  rows={4}
                  placeholder="Briefly describe your key experience, industries you worked in, and main responsibilities."
                  className="w-full border border-[#d1d5db] rounded px-3 py-2"
                />
              </section>
            )}

            {/* QUALIFICATIONS */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Qualifications
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <select
                name="english_level"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">English Level</option>
                <option>Native</option>
                <option>C1 - Advanced</option>
                <option>B2 - Intermediate</option>
                <option>B1 - Basic</option>
              </select>

              <input
                name="english_cert"
                placeholder="English certification (IELTS / TOEFL if any)"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />
            </section>

            {/* AVAILABILITY & LOGISTICS */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Availability & Logistics
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <select
                name="availability_start"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Current Availability</option>
                <option>Immediate</option>
                <option>2 weeks</option>
                <option>1 month</option>
                <option>3 months</option>
              </select>

              <select
                name="employment_type"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Employment Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
              </select>

              <select
                name="currently_employed"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              >
                <option value="">Currently Employed?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <input
                name="notice_period"
                placeholder="Notice period (e.g. 30 days)"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <input
                name="preferred_hours"
                placeholder="Preferred working hours (e.g. 9AM–5PM EST)"
                className="w-full border border-[#d1d5db] rounded px-3 py-2"
              />

              <label className="flex items-center gap-2 text-sm text-[#0b1b33]/80">
                <input type="checkbox" name="night_shift" required />
                Available for night shift (international clients)
              </label>
            </section>

            {/* COMPENSATION */}
            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Compensation
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    name="current_salary_million"
                    type="number"
                    required
                    min="1"
                    max="99"
                    placeholder="Current Salary VND"
                    onInput={(e: any) => {
                      if (e.target.value.length > 2) {
                        e.target.value = e.target.value.slice(0, 2);
                      }
                    }}
                    className="w-full border border-[#d1d5db] rounded px-3 py-2 pr-28"
                  />

                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#0b1b33]/60">
                    million VND
                  </span>
                </div>

                {/* Expected Salary */}
                <div className="relative">
                  <input
                    name="expected_salary_million"
                    type="number"
                    required
                    min="1"
                    placeholder="Expected Salary VND"
                    onInput={(e: any) => {
                      if (e.target.value.length > 2) {
                        e.target.value = e.target.value.slice(0, 2);
                      }
                    }}
                    className="w-full border border-[#d1d5db] rounded px-3 py-2 pr-28"
                  />

                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#0b1b33]/60">
                    million VND
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#0b1b33]/60">
                Please enter monthly salary in Vietnamese Dong (VND).
              </p>
            </section>

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
