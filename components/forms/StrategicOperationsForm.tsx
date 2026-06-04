"use client";

import { useState } from "react";
import FormSection from "./FormSection";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import { FormSection } from "/FormSection";

export default function StrategicOperationsForm() {
  const [serviceAreas, setServiceAreas] = useState<string[]>([]);

  const [industry, setIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");

  const [adminTasks, setAdminTasks] = useState<string[]>([]);
  const [adminHours, setAdminHours] = useState("");
  const [businessOpsTasks, setBusinessOpsTasks] = useState<string[]>([]);
  const [businessOpsNotes, setBusinessOpsNotes] = useState("");

  const [sopStatus, setSopStatus] = useState("");
  const [processCount, setProcessCount] = useState("");
  const [sopTasks, setSopTasks] = useState<string[]>([]);
  const [sopNotes, setSopNotes] = useState("");

  const [hrTasks, setHrTasks] = useState<string[]>([]);
  const [employeeCount, setEmployeeCount] = useState("");
  const [hiringStatus, setHiringStatus] = useState("");
  const [hrNotes, setHrNotes] = useState("");

  const [clientSupportTasks, setClientSupportTasks] = useState<string[]>([]);
  const [activeClients, setActiveClients] = useState("");
  const [clientSupportNotes, setClientSupportNotes] = useState("");

  const [currentTools, setCurrentTools] = useState("");
  const [toolChallenges, setToolChallenges] = useState("");
  const [newToolsPreference, setNewToolsPreference] = useState("");

  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [currentChallenges, setCurrentChallenges] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [operationsStaff, setOperationsStaff] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "Administrative Support",
    "Business Operations Support",
    "SOP & Process Support",
    "HR Administration Support",
    "Client Support Administration",
  ];

  const toggleServiceArea = (value: string) => {
    setServiceAreas((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleAdminTask = (value: string) => {
    setAdminTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleSelectAll = () => {
    if (serviceAreas.length === serviceOptions.length) {
      setServiceAreas([]);
    } else {
      setServiceAreas(serviceOptions);
    }
  };

  const handleSelectAllServices = () => {
    const allServices = [
      "Administrative Support",
      "Business Operations Support",
      "SOP & Process Support",
      "HR Administration Support",
      "Client Support Administration",
    ];

    if (serviceAreas.length === allServices.length) {
      setServiceAreas([]);
    } else {
      setServiceAreas(allServices);
    }
  };

  const toggleBusinessOpsTask = (value: string) => {
    setBusinessOpsTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleSopTask = (value: string) => {
    setSopTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleHrTask = (value: string) => {
    setHrTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleClientSupportTask = (value: string) => {
    setClientSupportTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // CONTACT

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Business email is required";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");

      if (digitsOnly.length < 8) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!country.trim()) {
      newErrors.country = "Country is required";
    }

    // BUSINESS

    if (!industry) {
      newErrors.industry = "Please select an industry";
    }

    if (industry === "Other" && !otherIndustry.trim()) {
      newErrors.otherIndustry = "Please specify your industry";
    }

    if (!teamSize) {
      newErrors.teamSize = "Please select your team size";
    }

    if (!operationsStaff) {
      newErrors.operationsStaff = "Please select your current operations setup";
    }

    // SERVICES

    if (serviceAreas.length === 0) {
      newErrors.serviceAreas = "Select at least one service";
    }

    // ADMIN

    if (serviceAreas.includes("Administrative Support")) {
      if (adminTasks.length === 0) {
        newErrors.adminTasks = "Select at least one administrative task";
      }

      if (!adminHours) {
        newErrors.adminHours = "Please select estimated hours";
      }
    }

    // BUSINESS OPS

    if (serviceAreas.includes("Business Operations Support")) {
      if (businessOpsTasks.length === 0) {
        newErrors.businessOpsTasks = "Select at least one operational activity";
      }

      if (!businessOpsNotes.trim()) {
        newErrors.businessOpsNotes =
          "Please describe your operational challenges";
      }
    }

    // SOP

    if (serviceAreas.includes("SOP & Process Support")) {
      if (!sopStatus) {
        newErrors.sopStatus = "Select SOP documentation status";
      }

      if (!processCount) {
        newErrors.processCount = "Select process count";
      }

      if (sopTasks.length === 0) {
        newErrors.sopTasks = "Select at least one SOP support area";
      }

      if (!sopNotes.trim()) {
        newErrors.sopNotes = "Please provide additional details";
      }
    }

    // HR

    if (serviceAreas.includes("HR Administration Support")) {
      if (hrTasks.length === 0) {
        newErrors.hrTasks = "Select at least one HR service";
      }

      if (!employeeCount) {
        newErrors.employeeCount = "Select employee count";
      }

      if (!hiringStatus) {
        newErrors.hiringStatus = "Select hiring status";
      }
    }

    // CLIENT SUPPORT

    if (serviceAreas.includes("Client Support Administration")) {
      if (clientSupportTasks.length === 0) {
        newErrors.clientSupportTasks =
          "Select at least one client support activity";
      }

      if (!activeClients) {
        newErrors.activeClients = "Select active client volume";
      }
    }

    // GOALS

    if (!desiredOutcome.trim()) {
      newErrors.desiredOutcome = "Please describe your desired outcome";
    }

    if (!currentChallenges.trim()) {
      newErrors.currentChallenges = "Please describe your current challenges";
    }

    // TOOLS & SETUP

    if (!currentTools.trim()) {
      newErrors.currentTools = "Please tell us which tools you currently use";
    }

    if (!toolChallenges.trim()) {
      newErrors.toolChallenges = "Please describe your current challenges";
    }

    if (!newToolsPreference) {
      newErrors.newToolsPreference = "Please select an option";
    }

    if (!desiredOutcome.trim()) {
      newErrors.desiredOutcome = "Please describe your desired outcome";
    }

    if (!currentChallenges.trim()) {
      newErrors.currentChallenges = "Please describe your current challenges";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = document.querySelector(".border-red-500");

      firstError?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    try {
      setIsSubmitting(true);

      console.log("READY TO SEND");
      // turn on 2 line below when need test
      //   await new Promise((resolve) => setTimeout(resolve, 1000));
      //   setIsSubmitted(true);

      // App Script sẽ đặt ở đây
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div
            className="
            w-20
            h-20
            rounded-full
            bg-green-100
            mx-auto
            flex
            items-center
            justify-center
            mb-8
          "
          >
            ✓
          </div>

          <h2 className="text-4xl font-bold text-[#06172d] mb-4">Thank You</h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Your Strategic Operations request has been received.
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mt-3">
            Our team will review your submission and prepare a tailored proposal
            within 2 business days.
          </p>
        </div>
      </section>
    );
  }
  return (
    <form
      id="quote-section"
      className="bg-[#F6F8FB] py-28"
      onSubmit={handleSubmit}
    >
      {" "}
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        <FormSection
          eyebrow="Contact Information"
          title="Tell Us About Your Business"
          description="Please provide your contact information so our team can prepare a tailored proposal and follow up regarding your enquiry."
        >
          {/* ROW 1 */}

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <input
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`
          w-full
          h-14
          rounded-2xl
          border
          px-5
          outline-none

          ${errors.fullName ? "border-red-500 bg-red-50" : "border-slate-200"}
        `}
              />

              {errors.fullName && (
                <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Business Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`
          w-full
          h-14
          rounded-2xl
          border
          px-5
          outline-none

          ${errors.email ? "border-red-500 bg-red-50" : "border-slate-200"}
        `}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* ROW 2 */}

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <PhoneInput
                country={"us"}
                enableSearch
                value={phone}
                onChange={(value) => setPhone(value)}
                placeholder="Phone Number"
                inputClass="!w-full !h-14 !rounded-2xl"
                containerClass="!w-full"
                buttonClass="!rounded-l-2xl"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Company Name *"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={`
          w-full
          h-14
          rounded-2xl
          border
          px-5
          outline-none

          ${
            errors.companyName ? "border-red-500 bg-red-50" : "border-slate-200"
          }
        `}
              />

              {errors.companyName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          {/* ROW 3 */}

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <input
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="
          w-full
          h-14
          rounded-2xl
          border
          border-slate-200
          px-5
          outline-none
        "
              />
            </div>

            <div>
              <input
                placeholder="Country *"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={`
          w-full
          h-14
          rounded-2xl
          border
          px-5
          outline-none

          ${errors.country ? "border-red-500 bg-red-50" : "border-slate-200"}
        `}
              />

              {errors.country && (
                <p className="mt-2 text-sm text-red-500">{errors.country}</p>
              )}
            </div>
          </div>
        </FormSection>

        <FormSection
          eyebrow="About Your Business"
          title="Understanding Your Organization"
          description="This helps us understand the size, structure, and operational environment of your business."
        >
          <div className="space-y-12">
            {/* INDUSTRY */}
            <div>
              <label
                className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
              >
                What industry are you in?
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "E-commerce / Retail",
                  "Professional Services",
                  "Healthcare / Wellness",
                  "Real Estate",
                  "Tech / SaaS",
                  "Education / Coaching",
                  "Finance / Accounting",
                  "Other",
                ].map((item) => (
                  <label
                    key={item}
                    className={`
        cursor-pointer
        rounded-2xl
        border
        p-5

        transition-all
        duration-300

        flex
        items-center
        gap-3

        ${
          industry === item
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                  >
                    <input
                      type="radio"
                      name="industry"
                      value={item}
                      checked={industry === item}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-4 h-4"
                    />

                    <span className="text-slate-700 font-medium">{item}</span>
                  </label>
                ))}
              </div>
              {errors.industry && (
                <p className="mt-4 text-sm text-red-500">{errors.industry}</p>
              )}

              {industry === "Other" && (
                <div
                  className="
      mt-6
      rounded-2xl
      border
      border-[#4F8DC9]/20
      bg-[#F8FBFF]
      p-5
    "
                >
                  <label
                    className="
        block
        text-sm
        font-medium
        text-[#06172d]
        mb-3
      "
                  >
                    Please specify your industry
                  </label>

                  <input
                    type="text"
                    value={otherIndustry}
                    onChange={(e) => setOtherIndustry(e.target.value)}
                    placeholder="e.g. Manufacturing, Logistics, Construction..."
                    className="
        w-full
        h-14
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        outline-none

        focus:border-[#4F8DC9]
        transition-all
      "
                  />
                  {errors.otherIndustry && (
                    <p className="mt-3 text-sm text-red-500">
                      {errors.otherIndustry}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* TEAM SIZE */}
            <div>
              <label
                className="
      block
      text-lg
      font-semibold
      text-[#06172d]
      mb-5
    "
              >
                How many people are currently in your team?
              </label>

              <div className="grid md:grid-cols-3 gap-4">
                {["Just Me", "2–5", "6–15", "16–50", "50+"].map((item) => (
                  <label
                    key={item}
                    className={`
          cursor-pointer
          rounded-2xl
          border
          p-5

          transition-all
          duration-300

          flex
          items-center
          gap-3

          ${
            teamSize === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : errors.teamSize
                ? "border-red-300"
                : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                  >
                    <input
                      type="radio"
                      name="teamSize"
                      checked={teamSize === item}
                      onChange={() => setTeamSize(item)}
                      className="w-4 h-4"
                    />

                    <span className="font-medium text-slate-700">{item}</span>
                  </label>
                ))}
              </div>

              {errors.teamSize && (
                <p className="mt-4 text-sm text-red-500">{errors.teamSize}</p>
              )}
            </div>

            {/* OPERATIONS STAFF */}
            <div>
              <label
                className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
              >
                Do you currently have any dedicated operations or admin staff?
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Founder Handles Everything",
                    desc: "No dedicated operations support currently.",
                  },
                  {
                    title: "Part-Time Contractor",
                    desc: "Some operational support is outsourced.",
                  },
                  {
                    title: "1 Full-Time Person",
                    desc: "A dedicated operations or admin resource exists.",
                  },
                  {
                    title: "Small Operations Team",
                    desc: "Multiple people currently support operations.",
                  },
                ].map((item) => (
                  <label
                    key={item.title}
                    className={`
    cursor-pointer
    rounded-2xl
    border
    p-6

    transition-all
    duration-300

    flex
    items-start
    gap-5

    ${
      operationsStaff === item.title
        ? "border-[#4F8DC9] bg-[#F8FBFF]"
        : errors.operationsStaff
          ? "border-red-300"
          : "border-slate-200 hover:border-[#4F8DC9]"
    }
  `}
                  >
                    <input
                      type="radio"
                      name="operationsStaff"
                      checked={operationsStaff === item.title}
                      onChange={() => setOperationsStaff(item.title)}
                      className="mt-1 w-4 h-4"
                    />

                    <div>
                      <div
                        className="
                font-semibold
                text-[#06172d]
              "
                      >
                        {item.title}
                      </div>

                      <p
                        className="
                mt-2
                text-sm
                leading-relaxed
                text-slate-500
              "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
              {errors.operationsStaff && (
                <p className="mt-4 text-sm text-red-500">
                  {errors.operationsStaff}
                </p>
              )}
            </div>
          </div>
        </FormSection>

        <FormSection
          eyebrow="Service Requirements"
          title="What Support Do You Need?"
          description="Select all areas where you would like support. This helps us understand your requirements and prepare a tailored proposal."
        >
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Administrative Support",
                description:
                  "Executive assistance, scheduling, inbox management, reporting, and administrative coordination.",
              },

              {
                title: "Business Operations Support",
                description:
                  "Workflow coordination, process tracking, vendor follow-up, and operational execution.",
              },

              {
                title: "SOP & Process Support",
                description:
                  "Process documentation, SOP creation, workflow mapping, and standardization.",
              },

              {
                title: "HR Administration Support",
                description:
                  "Recruitment coordination, onboarding, records management, and HR administration.",
              },

              {
                title: "Client Support Administration",
                description:
                  "Client onboarding, ticket coordination, inquiry routing, and customer administration.",
              },

              {
                title: "Not Sure Yet",
                description:
                  "I'm not sure which service areas I need. Please review my situation and provide recommendations.",
                isSelectAll: true,
              },
            ].map((item) => (
              <label
                key={item.title}
                className={`
      cursor-pointer
      rounded-3xl
      border
      p-6

      transition-all
      duration-300

      ${
        item.isSelectAll
          ? serviceAreas.length === serviceOptions.length
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
          : serviceAreas.includes(item.title)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
      }
    `}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={
                      item.isSelectAll
                        ? serviceAreas.length === serviceOptions.length
                        : serviceAreas.includes(item.title)
                    }
                    onChange={() => {
                      if (item.isSelectAll) {
                        handleSelectAllServices();
                        return;
                      }

                      toggleServiceArea(item.title);
                    }}
                    className="
          mt-1
          w-5
          h-5
          accent-[#4F8DC9]
        "
                  />

                  <div>
                    <h3
                      className="
            text-lg
            font-semibold
            text-[#06172d]
          "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
            mt-3
            text-slate-500
            leading-relaxed
          "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>
          {errors.serviceAreas && (
            <p className="mt-4 text-sm text-red-500">{errors.serviceAreas}</p>
          )}
        </FormSection>

        {/* Administrative Support
         */}
        {serviceAreas.includes("Administrative Support") && (
          <FormSection
            eyebrow="Administrative Support"
            title="Administrative Support Requirements"
            description="Help us understand the administrative support your business requires."
          >
            <div className="space-y-12">
              {/* TASKS */}
              <div>
                <label
                  className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
                >
                  Which administrative tasks do you need handled?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Executive Assistant Support",
                    "Virtual Assistant Support",
                    "Calendar Management",
                    "Email Inbox Management",
                    "Meeting Scheduling",
                    "Travel Coordination",
                    "Data Entry",
                    "File Organization",
                    "Document Formatting",
                    "Internal Communication Support",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            transition-all
            duration-300

            ${
              adminTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={adminTasks.includes(item)}
                          onChange={() => toggleAdminTask(item)}
                          className="
                w-5
                h-5
                accent-[#4F8DC9]
              "
                        />

                        <span
                          className="
                font-medium
                text-slate-700
              "
                        >
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.adminTasks && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.adminTasks}
                  </p>
                )}
              </div>

              {/* HOURS */}
              <div>
                <label
                  className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
                >
                  How many hours per week do you estimate needing admin support?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "1–5 hrs/week",
                    "5–10 hrs/week",
                    "10–20 hrs/week",
                    "20+ hrs/week",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            transition-all
            duration-300

            ${
              adminHours === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="adminHours"
                          checked={adminHours === item}
                          onChange={() => setAdminHours(item)}
                          className="
                w-4
                h-4
                accent-[#4F8DC9]
              "
                        />

                        <span
                          className="
                font-medium
                text-slate-700
              "
                        >
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.adminHours && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.adminHours}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* BUSINESS OPERATIONS */}
        {serviceAreas.includes("Business Operations Support") && (
          <FormSection
            eyebrow="Business Operations"
            title="Business Operations Requirements"
            description="Tell us about the operational processes and business activities you need support with."
          >
            <div className="space-y-12">
              {/* TASKS */}
              <div>
                <label
                  className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
                >
                  Which operational activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Workflow Coordination",
                    "Project Coordination",
                    "Vendor Management",
                    "Reporting & KPI Tracking",
                    "Process Monitoring",
                    "Task Management",
                    "Operations Documentation",
                    "Internal Team Coordination",
                    "Cross-Department Communication",
                    "General Operations Support",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            transition-all
            duration-300

            ${
              businessOpsTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={businessOpsTasks.includes(item)}
                          onChange={() => toggleBusinessOpsTask(item)}
                          className="
                w-5
                h-5
                accent-[#4F8DC9]
              "
                        />

                        <span
                          className="
                font-medium
                text-slate-700
              "
                        >
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.businessOpsTasks && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.businessOpsTasks}
                  </p>
                )}
              </div>

              {/* NOTES */}
              <div>
                <label
                  className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
                >
                  Tell us more about your operational challenges
                </label>

                <textarea
                  rows={6}
                  value={businessOpsNotes}
                  onChange={(e) => setBusinessOpsNotes(e.target.value)}
                  placeholder="Describe your current bottlenecks, workflow challenges, reporting issues, team coordination problems, or operational pain points..."
                  className={`
        w-full
        rounded-2xl
        border
        border-slate-200
        p-5

        resize-none
        outline-none

        focus:border-[#4F8DC9]
        transition-all
        ${
          errors.businessOpsNotes
            ? "border-red-500 bg-red-50"
            : "border-slate-200"
        }
        `}
                />

                {errors.businessOpsNotes && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.businessOpsNotes}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* SOP */}
        {serviceAreas.includes("SOP & Process Support") && (
          <FormSection
            eyebrow="SOP & Process Support"
            title="Process Documentation & SOP Requirements"
            description="Understanding your current documentation maturity helps us estimate project scope and implementation requirements."
          >
            <div className="space-y-12">
              {/* CURRENT SOP STATUS */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  What best describes your current SOP documentation?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "No documented SOPs",
                    "A few SOPs exist",
                    "Most processes documented",
                    "Fully documented system",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                transition-all

                ${
                  sopStatus === item
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="sopStatus"
                          checked={sopStatus === item}
                          onChange={() => setSopStatus(item)}
                          className="w-4 h-4 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.sopStatus && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.sopStatus}
                  </p>
                )}
              </div>

              {/* PROCESS COUNT */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  Approximately how many processes need documentation or
                  improvement?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "1–5 Processes",
                    "6–10 Processes",
                    "11–20 Processes",
                    "20+ Processes",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                transition-all

                ${
                  processCount === item
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="processCount"
                          checked={processCount === item}
                          onChange={() => setProcessCount(item)}
                          className="w-4 h-4 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.processCount && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.processCount}
                  </p>
                )}
              </div>

              {/* SUPPORT NEEDED */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  What support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "SOP Creation",
                    "Workflow Mapping",
                    "Process Optimization",
                    "Documentation Review",
                    "Training Materials",
                    "Process Auditing",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                transition-all

                ${
                  sopTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={sopTasks.includes(item)}
                          onChange={() => toggleSopTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.sopTasks && (
                  <p className="mt-4 text-sm text-red-500">{errors.sopTasks}</p>
                )}
              </div>

              {/* NOTES */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  Tell us more about your current processes
                </label>

                <textarea
                  rows={6}
                  value={sopNotes}
                  onChange={(e) => setSopNotes(e.target.value)}
                  placeholder="Describe your current workflows, bottlenecks, documentation challenges, or process improvement goals..."
                  className={`
  w-full
  rounded-2xl
  border
  p-5

  resize-none
  outline-none

  focus:border-[#4F8DC9]

  ${errors.sopNotes ? "border-red-500 bg-red-50" : "border-slate-200"}
`}
                />
                {errors.sopNotes && (
                  <p className="mt-4 text-sm text-red-500">{errors.sopNotes}</p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* HR  */}
        {serviceAreas.includes("HR Administration Support") && (
          <FormSection
            eyebrow="HR Administration"
            title="HR Administration Requirements"
            description="Help us understand your HR administration, onboarding, and recruitment support needs."
          >
            <div className="space-y-12">
              {/* HR TASKS */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  What HR support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Recruitment Coordination",
                    "Interview Scheduling",
                    "Candidate Screening",
                    "Onboarding Administration",
                    "Employee Records Management",
                    "HR Documentation",
                    "Leave Management",
                    "Performance Review Coordination",
                    "Offboarding Support",
                    "General HR Administration",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                transition-all

                ${
                  hrTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={hrTasks.includes(item)}
                          onChange={() => toggleHrTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.hrTasks && (
                  <p className="mt-4 text-sm text-red-500">{errors.hrTasks}</p>
                )}
              </div>

              {/* EMPLOYEE COUNT */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  How many employees do you currently have?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "1–10 Employees",
                    "11–25 Employees",
                    "26–50 Employees",
                    "50+ Employees",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                transition-all

                ${
                  employeeCount === item
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="employeeCount"
                          checked={employeeCount === item}
                          onChange={() => setEmployeeCount(item)}
                          className="w-4 h-4 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.employeeCount && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.employeeCount}
                  </p>
                )}
              </div>

              {/* HIRING STATUS */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  Are you currently hiring?
                </label>

                <div className="grid md:grid-cols-3 gap-4">
                  {["Yes", "No", "Planning Soon"].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                transition-all

                ${
                  hiringStatus === item
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="hiringStatus"
                          checked={hiringStatus === item}
                          onChange={() => setHiringStatus(item)}
                          className="w-4 h-4 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.hiringStatus && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.hiringStatus}
                  </p>
                )}
              </div>

              {/* NOTES */}
              <div>
                <label
                  className="
            block
            text-lg
            font-semibold
            text-[#06172d]
            mb-5
          "
                >
                  Additional HR information
                </label>

                <textarea
                  rows={6}
                  value={hrNotes}
                  onChange={(e) => setHrNotes(e.target.value)}
                  placeholder="Tell us more about your HR structure, hiring plans, onboarding challenges, or administration needs..."
                  className="
            w-full
            rounded-2xl
            border
            border-slate-200
            p-5

            resize-none
            outline-none

            focus:border-[#4F8DC9]
          "
                />
              </div>
            </div>
          </FormSection>
        )}

        {/* Client Support Admin */}
        {serviceAreas.includes("Client Support Administration") && (
          <FormSection
            eyebrow="Client Support"
            title="Client Support Administration"
            description="Help us understand your client support, onboarding, and customer administration requirements."
          >
            <div className="space-y-12">
              {/* SUPPORT TASKS */}
              <div>
                <label
                  className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
                >
                  What client support activities do you need help with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Client Onboarding",
                    "Client Offboarding",
                    "Customer Follow-Up",
                    "Support Ticket Coordination",
                    "Appointment Scheduling",
                    "Client Database Management",
                    "CRM Updates",
                    "Account Administration",
                    "Client Communications",
                    "General Client Support",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            transition-all

            ${
              clientSupportTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={clientSupportTasks.includes(item)}
                          onChange={() => toggleClientSupportTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.clientSupportTasks && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.clientSupportTasks}
                  </p>
                )}
              </div>

              {/* ACTIVE CLIENTS */}
              <div>
                <label
                  className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
                >
                  Approximately how many active clients do you currently manage?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "1–10 Clients",
                    "11–50 Clients",
                    "51–100 Clients",
                    "100+ Clients",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            transition-all

            ${
              activeClients === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="activeClients"
                          checked={activeClients === item}
                          onChange={() => setActiveClients(item)}
                          className="w-4 h-4 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.activeClients && (
                  <p className="mt-4 text-sm text-red-500">
                    {errors.activeClients}
                  </p>
                )}
              </div>

              {/* NOTES */}
              <div>
                <label
                  className="
        block
        text-lg
        font-semibold
        text-[#06172d]
        mb-5
      "
                >
                  Tell us more about your client support needs
                </label>

                <textarea
                  rows={6}
                  value={clientSupportNotes}
                  onChange={(e) => setClientSupportNotes(e.target.value)}
                  placeholder="Describe your customer journey, onboarding process, support workflow, or client administration challenges..."
                  className="
        w-full
        rounded-2xl
        border
        border-slate-200
        p-5

        resize-none
        outline-none

        focus:border-[#4F8DC9]
      "
                />
              </div>
            </div>
          </FormSection>
        )}

        {/* Tools & Setups */}
        <FormSection
          eyebrow="Tools & Setup"
          title="Current Systems & Technology"
          description="Tell us about the tools, software, and systems your team currently uses."
        >
          <div className="space-y-12">
            <div>
              <label
                className="
      block
      text-lg
      font-semibold
      text-[#06172d]
      mb-5
    "
              >
                What tools are you currently using?
              </label>

              <textarea
                rows={6}
                value={currentTools}
                onChange={(e) => setCurrentTools(e.target.value)}
                placeholder="Examples: Google Workspace, Microsoft 365, Slack, Notion, HubSpot, ClickUp, Monday.com, Asana..."
                className={`
    w-full
    rounded-2xl
    border
    p-5

    resize-none
    outline-none

    focus:border-[#4F8DC9]

    ${errors.currentTools ? "border-red-500 bg-red-50" : "border-slate-200"}
  `}
              />
              {errors.currentTools && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.currentTools}
                </p>
              )}
            </div>

            <div>
              <label
                className="
      block
      text-lg
      font-semibold
      text-[#06172d]
      mb-5
    "
              >
                Are there any challenges with your current tools?
              </label>

              <textarea
                rows={5}
                value={toolChallenges}
                onChange={(e) => setToolChallenges(e.target.value)}
                placeholder="Tell us about any limitations, manual processes, integration issues, or inefficiencies..."
                className={`
    w-full
    rounded-2xl
    border
    p-5

    resize-none
    outline-none

    focus:border-[#4F8DC9]

    ${errors.toolChallenges ? "border-red-500 bg-red-50" : "border-slate-200"}
  `}
              />
              {errors.toolChallenges && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.toolChallenges}
                </p>
              )}
            </div>

            <div>
              <label
                className="
      block
      text-lg
      font-semibold
      text-[#06172d]
      mb-5
    "
              >
                Are you open to implementing new tools or systems?
              </label>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Yes, open to anything",
                  "yes, prefer free/low cost",
                  "Prefer to stick with existing tools",
                  "Not sure yet",
                ].map((item) => (
                  <label
                    key={item}
                    className={`
          cursor-pointer
          rounded-2xl
          border
          p-5

          transition-all

          ${
            newToolsPreference === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : errors.newToolsPreference
                ? "border-red-300"
                : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="newToolsPreference"
                        checked={newToolsPreference === item}
                        onChange={() => setNewToolsPreference(item)}
                        className="
              w-4
              h-4
              accent-[#4F8DC9]
            "
                      />

                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.newToolsPreference && (
                <p className="mt-4 text-sm text-red-500">
                  {errors.newToolsPreference}
                </p>
              )}
            </div>
          </div>
        </FormSection>

        {/* Goals & Context */}
        <FormSection
          eyebrow="Goals & Context"
          title="Context & Goals"
          description="Help us understand your objectives, challenges, and any important context for this engagement."
        >
          <div className="space-y-12">
            {/* QUESTION 21 */}
            <div>
              <label
                className="
      block
      text-lg
      font-semibold
      text-[#06172d]
      mb-2
    "
              >
                What is the primary outcome you want from this engagement?
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                e.g. Free up 10 hrs/week for the founder, get onboarding
                documented, reduce client complaints...
              </p>

              <textarea
                rows={6}
                value={desiredOutcome}
                onChange={(e) => setDesiredOutcome(e.target.value)}
                placeholder="Tell us about the result you want to achieve..."
                className={`
  w-full
  rounded-2xl
  border
  p-5

  resize-none
  outline-none

  ${errors.desiredOutcome ? "border-red-500 bg-red-50" : "border-slate-200"}
`}
              />
              {errors.desiredOutcome && (
                <p className="mt-4 text-sm text-red-500">
                  {errors.desiredOutcome}
                </p>
              )}
            </div>

            {/* QUESTION 22 */}
            <div>
              <label
                className="
      block
      text-lg
      font-semibold
      text-[#06172d]
      mb-2
    "
              >
                What has stopped you from solving this problem already?
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                e.g. No time to train someone, tried hiring but it didn't work,
                don't know where to start...
              </p>

              <textarea
                rows={6}
                value={currentChallenges}
                onChange={(e) => setCurrentChallenges(e.target.value)}
                placeholder="Describe the obstacles preventing progress..."
                className={`
  w-full
  rounded-2xl
  border
  p-5

  resize-none
  outline-none

  ${errors.currentChallenges ? "border-red-500 bg-red-50" : "border-slate-200"}
`}
              />
              {errors.currentChallenges && (
                <p className="mt-4 text-sm text-red-500">
                  {errors.currentChallenges}
                </p>
              )}
            </div>

            {/* QUESTION 23 */}
            <div>
              <label
                className="
      block
      text-lg
      font-semibold
      text-[#06172d]
      mb-2
    "
              >
                Anything else we should know to prepare your proposal?
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                Special requirements, deadlines, preferred working style,
                sensitivities...
              </p>

              <textarea
                rows={6}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Provide any additional information that would help us prepare the right proposal..."
                className={`
  w-full
  rounded-2xl
  border
  p-5

  resize-none
  outline-none
  transition-all

  focus:border-[#4F8DC9]

  ${errors.additionalNotes ? "border-red-500 bg-red-50" : "border-slate-200"}
`}
              />
              {errors.additionalNotes && (
                <p className="mt-4 text-sm text-red-500">
                  {errors.additionalNotes}
                </p>
              )}
            </div>
          </div>
        </FormSection>

        {/* FORM FOOTER */}

        <div
          className="
    mt-12
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-8
  "
        >
          <div className="text-center">
            <h3
              className="
        text-xl
        font-semibold
        text-[#06172d]
      "
            >
              STAFF United — Strategic Operations
            </h3>

            <p
              className="
        mt-4
        max-w-3xl
        mx-auto
        text-slate-500
        leading-relaxed
      "
            >
              Thank you for completing this form. We will review your answers
              and prepare a tailored proposal within 2 business days.
            </p>
          </div>

          {/* Submit Button */}

          {Object.keys(errors).length > 0 && (
            <div
              className="
      mb-8
      rounded-2xl
      border
      border-red-200
      bg-red-50
      p-5
    "
            >
              <p className="font-semibold text-red-700">
                Please complete all required fields.
              </p>
            </div>
          )}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
      px-10
      py-4

      rounded-2xl

      text-white
      font-semibold

      transition-all
      duration-300

      shadow-lg

      ${
        isSubmitting
          ? "bg-slate-400 cursor-not-allowed shadow-none"
          : "bg-[#4F8DC9] hover:bg-[#3E7DBA] shadow-[#4F8DC9]/20"
      }
    `}
            >
              {isSubmitting
                ? "Submitting Request..."
                : "Submit Strategic Operations Request"}
            </button>
          </div>

          {/* Privacy Note */}

          <p
            className="
      mt-6
      text-center
      text-sm
      text-slate-400
    "
          >
            Your information will be used solely for proposal preparation and
            service consultation purposes.
          </p>
        </div>
      </div>
    </form>
  );
}
