"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { joinSchema } from "@/lib/joinSchema";

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

const toolsList = [
  "Google Workspace",
  "Microsoft Office",
  "Canva",
  "Adobe Creative Suite",
  "Figma",
  "Notion",
  "Slack",
  "HubSpot",
  "Salesforce",
  "Trello",
  "Asana",
  "ClickUp",
  "Monday.com",
  "Zoom",
  "Google Analytics",
  "WordPress",
];

const roleList = [
  "Content Writer",
  "Content Editor",
  "Social Media Executive",
  "Graphic Designer",
  "Web Designer",
  "Video Editor",
  "Motion Designer",
  "UI/UX Designer",
  "Virtual Assistant",
  "Executive Assistant",
  "Operations Support",
  "CRM & Data Support",
  "Customer Support",
  "Project Coordinator",
];

export default function JoinPage() {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleIndustryChange = (e: any) => {
  //   const checked = document.querySelectorAll('input[name="industry"]:checked');

  //   if (checked.length > 3) {
  //     (e.target as HTMLInputElement).checked = false;
  //     alert("Please select up to 3 industries only");
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(joinSchema),
  });

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
            onSubmit={handleSubmit(async (data, e) => {
              console.log("FORM SUBMITTED", data);

              setIsSubmitting(true);

              const form = e?.target as HTMLFormElement;
              const formData = new FormData(form);

              await fetch(
                "https://script.google.com/macros/s/AKfycbxDkdI9haEWJ_-NlIbovPExFWPY-tvz2348Q8vfJ3Y0Pfm7i5TZoh8Tzzy4n7xC1J4w/exec",
                {
                  method: "POST",
                  mode: "no-cors",
                  body: formData,
                },
              );

              setSuccess(true);
              reset();
              setIsSubmitting(false);
            })}
            className="bg-white border border-[#d1d5db] rounded-lg p-8 space-y-10"
          >
            {/* BASIC INFORMATION */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Basic Information
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* FIRST NAME */}

                <div>
                  <label className="text-sm font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    {...register("first_name")}
                    className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                  />

                  {errors.first_name?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.first_name.message as string}
                    </p>
                  )}
                </div>

                {/* LAST NAME */}

                <div>
                  <label className="text-sm font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    {...register("last_name")}
                    className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                  />

                  {errors.last_name?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.last_name.message as string}
                    </p>
                  )}
                </div>
              </div>

              <div>
                {/* GENDER */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-[#0b1b33]">
                    Gender <span className="text-red-500">*</span>
                  </label>

                  <select
                    {...register("gender")}
                    className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                  >
                    <option value="">Select gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>

                  <p className="text-sm text-[#0b1b33]/60 mt-1">
                    (We currently hire female employees only, as this aligns
                    with our mission.)
                  </p>

                  {errors.gender?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gender.message as string}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email Address"
                    className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                  />

                  {errors.email?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Province / City <span className="text-red-500">*</span>
                </label>

                <select
                  {...register("location")}
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                >
                  <option value="">Select Province / City</option>

                  {vietnamProvinces.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>

                {errors.location?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  How did you hear about STAFF United?{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <select
                  {...register("referral_source")}
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                >
                  <option value="">Select an option</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Threads">Threads</option>
                  <option value="Friend / Referral">Friend / Referral</option>
                  <option value="Google Search">Google Search</option>
                </select>
              </div>
            </section>

            {/* PROFESSIONAL PROFILE */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Professional Profile
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              {/* CV Upload (Required) */}
              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  CV Upload <span className="text-red-500">*</span>
                </label>

                <input
                  type="url"
                  {...register("cv_upload")}
                  placeholder="Paste your Google Drive CV link"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />

                {errors.cv_upload?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cv_upload.message as string}
                  </p>
                )}

                <p className="text-sm text-[#0b1b33]/60 mt-1">
                  Upload your CV to Google Drive and paste the sharing link
                  here. Make sure the file access is set to "Anyone with the
                  link".
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Portfolio / Work Links{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  type="url"
                  placeholder="Portfolio website, LinkedIn, Google Drive, GitHub..."
                  {...register("portfolio")}
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />

                {errors.portfolio?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.portfolio.message as string}
                  </p>
                )}

                <p className="text-sm text-[#0b1b33]/60 mt-1">
                  Share links to your portfolio, LinkedIn profile, or work
                  samples.
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Professional Profile Photo{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  type="url"
                  {...register("profile_photo")}
                  placeholder="Paste Google Drive image link"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />

                <p className="text-sm text-[#0b1b33]/60 mt-1">
                  Upload your profile photo to Google Drive and paste the
                  sharing link here. Make sure the file access is set to "Anyone
                  with the link".
                </p>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-[#0b1b33]">
                  Current / Expected Industry
                  <span className="text-gray-400"> (Optional)</span>
                </label>

                <p className="text-sm text-[#0b1b33]/60">
                  You may select industries that best match your experience or
                  career goals.
                </p>

                <div className="grid md:grid-cols-2 gap-3 text-sm text-[#0b1b33]/80">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Accounting / Auditing"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Accounting / Auditing
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Architecture / Interior Design"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Architecture / Interior Design
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Art / Entertainment"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Art / Entertainment
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Banking"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Banking
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Construction"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Construction
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Consulting"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Consulting
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Design / Creative"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Design / Creative
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="E-commerce"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    E-commerce
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Education"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Education
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Finance / Investment"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Finance / Investment
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Healthcare"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Healthcare
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Human Resources"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Human Resources
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Information Technology"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Information Technology
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Logistics"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Logistics
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Laws and Property"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Laws and Property
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Manufacturing"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Manufacturing
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Marketing / Media"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Marketing / Media
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Retail"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Retail
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Telecommunications"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Telecommunications
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value="Transportation"
                      {...register("industry")}
                      className="h-4 w-4"
                    />
                    Transportation
                  </label>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-[#0b1b33]">
                  Current / Expected Role{" "}
                  <span className="text-red-500">*</span>
                </label>

                <p className="text-sm text-[#0b1b33]/60">
                  Select the role that best matches your experience.
                </p>

                <div className="grid md:grid-cols-2 gap-2 text-sm text-[#0b1b33]/80 mt-1">
                  {roleList.map((role) => (
                    <label key={role} className="flex items-center gap-2">
                      <input
                        type="radio"
                        value={role}
                        {...register("expected_role")}
                      />
                      {role}
                    </label>
                  ))}
                </div>

                {errors.expected_role?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.expected_role.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  Professional Headline <span className="text-red-500">*</span>
                </label>

                <input
                  {...register("professional_headline")}
                  placeholder="Example: Graphic Designer with 5 years of experience"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />

                {errors.professional_headline?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.professional_headline.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Career Summary <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={4}
                  {...register("career_summary")}
                  placeholder="Brief strengths summary + career goal (3–5 sentences)"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />

                {errors.career_summary?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.career_summary.message as string}
                  </p>
                )}
              </div>
            </section>

            {/* EXPERIENCE */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Experience & Qualifications
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              {/* <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Key Skills <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  {...register("skills")}
                  placeholder="List 3–5 key skills"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />
              </div> */}

              <div className="space-y-1">
                <label className="text-sm font-medium text-[#0b1b33]">
                  Tools / Software
                  <span className="text-gray-400"> (Optional)</span>
                </label>

                <p className="text-sm text-[#0b1b33]/60">
                  Select tools or software you are comfortable using.
                </p>

                <div className="grid md:grid-cols-2 gap-2 text-sm text-[#0b1b33]/80 mt-1">
                  {toolsList.map((tool) => (
                    <label key={tool} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={tool}
                        {...register("tools")}
                      />

                      {tool}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  English Level <span className="text-red-500">*</span>
                </label>

                <select
                  {...register("english_level")}
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                >
                  <option value="">Select English Level</option>
                  <option value="Native">Native</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>

                {errors.english_level?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.english_level.message as string}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  English Certification{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  {...register("english_cert")}
                  placeholder="English certification (IELTS / TOEFL if any)"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />
              </div>
            </section>

            {/* EDUCATION */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Education
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              {/* UNIVERSITY */}

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  University / College{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  {...register("university")}
                  placeholder="University / College"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />
              </div>

              {/* MAJOR */}

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Major <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  {...register("major")}
                  placeholder="Major"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />
              </div>

              {/* GPA */}

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  GPA <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  {...register("gpa")}
                  placeholder="Example: 3.5 / 4.0"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />
              </div>
            </section>

            {/* CURRENT WORK STATUS */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Current Work Status
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Work Status <span className="text-red-500">*</span>
                </label>

                <select
                  {...register("work_status")}
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                >
                  <option value="">Select your current work status</option>
                  <option value="Available to start immediately">
                    Available to start immediately
                  </option>

                  <option value="Employed – 30 days notice">
                    Employed – 30 days notice
                  </option>

                  <option value="Employed – 60 days notice">
                    Employed – 60 days notice
                  </option>

                  <option value="Flexible notice">Flexible notice</option>
                </select>

                {errors.work_status?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.work_status.message as string}
                  </p>
                )}
              </div>
            </section>

            {/* WORK PREFERENCE */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Work Preference
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              {/* EMPLOYMENT TYPE */}

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Employment Type{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <select
                  {...register("employment_type")}
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                >
                  <option value="">Select employment type</option>

                  <option value="Full-time">Full-time</option>

                  <option value="Part-time">Part-time</option>
                </select>
              </div>

              {/* NIGHT SHIFT */}

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#0b1b33]">
                  Open to Night Shift
                </label>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      value="Yes"
                      {...register("night_shift")}
                    />
                    Yes
                  </label>

                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      value="No"
                      {...register("night_shift")}
                    />
                    No
                  </label>
                </div>
              </div>
            </section>

            {/* COMPENSATION */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Compensation
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              {/* CURRENT SALARY */}
              {/* EXPECTED SALARY */}

              <div className="grid md:grid-cols-2 gap-4">
                {/* CURRENT SALARY */}

                <div>
                  <label className="text-sm font-medium text-[#0b1b33]">
                    Current Monthly Salary{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="number"
                      min="1"
                      max="99"
                      placeholder="Example: 12"
                      {...register("current_salary")}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.value.length > 2) {
                          target.value = target.value.slice(0, 2);
                        }
                      }}
                      className="w-full border border-[#d1d5db] rounded px-3 py-2 pr-14"
                    />

                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0b1b33]/60 text-sm">
                      VND
                    </span>
                  </div>

                  <p className="text-sm text-[#0b1b33]/60 mt-1">
                    Enter salary in millions (e.g., 12 = 12,000,000 VND)
                  </p>
                </div>

                {/* EXPECTED SALARY */}

                <div>
                  <label className="text-sm font-medium text-[#0b1b33]">
                    Expected Monthly Salary{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="number"
                      min="1"
                      max="99"
                      placeholder="Example: 12"
                      {...register("expected_salary")}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.value.length > 2) {
                          target.value = target.value.slice(0, 2);
                        }
                      }}
                      className="w-full border border-[#d1d5db] rounded px-3 py-2 pr-14"
                    />

                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0b1b33]/60 text-sm">
                      VND
                    </span>
                  </div>

                  {errors.expected_salary?.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.expected_salary.message as string}
                    </p>
                  )}

                  <p className="text-sm text-[#0b1b33]/60 mt-1">
                    Enter salary in millions (e.g., 12 = 12,000,000 VND)
                  </p>
                </div>
              </div>
            </section>

            {/* VOICE */}

            <section className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#0b1b33]">
                  Voice Introduction
                </h3>
                <div className="w-10 h-[2px] bg-[#4f8fcb] mt-2 rounded-full"></div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#0b1b33]">
                  Voice Introduction Link{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>

                <input
                  type="url"
                  {...register("voice_intro")}
                  placeholder="Google Drive or YouTube link"
                  className="w-full border border-[#d1d5db] rounded px-3 py-2 mt-1"
                />

                {errors.voice_intro?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.voice_intro.message as string}
                  </p>
                )}
              </div>

              <p className="text-sm text-[#0b1b33]/60">
                Upload your recording to Google Drive or YouTube and paste the
                link here. Please record a 1-minute introduction including your
                name, professional background, strengths, and the role you are
                seeking.
              </p>
            </section>

            {/* TERMS */}

            <section className="space-y-5">
              {/* Privacy Notice */}

              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...register("privacy_agreement")} />

                <span>
                  I have read and agree to the{" "}
                  <a
                    href="/privacy-notice"
                    className="underline text-[#4f8fcb]"
                  >
                    Privacy Notice
                  </a>
                </span>
              </label>

              {/* Recruitment Consent */}

              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" {...register("recruitment_consent")} />

                <span>
                  I consent to having my information reviewed for recruitment
                  purposes.
                </span>
              </label>

              {/* Website Profile Consent */}

              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  {...register("website_profile_consent")}
                />

                <span>
                  I agree that STAFF United may display my name, photo, and
                  professional profile information on the STAFF United website
                  so clients can review potential candidates.
                </span>
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
