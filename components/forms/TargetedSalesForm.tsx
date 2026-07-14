"use client";

import { useState } from "react";
import FormSection from "./FormSection";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormSelect from "./FormSelect";

export default function TargetedSalesForm() {
  const [serviceAreas, setServiceAreas] = useState<string[]>([]);

  const [leadManagementTasks, setLeadManagementTasks] = useState<string[]>([]);
  const [leadsPerMonth, setLeadsPerMonth] = useState("");
  const [leadSources, setLeadSources] = useState<string[]>([]);

  const [outreachTasks, setOutreachTasks] = useState<string[]>([]);
  const [outreachVolume, setOutreachVolume] = useState("");
  const [outreachScripts, setOutreachScripts] = useState("");

  const [crmTasks, setCrmTasks] = useState<string[]>([]);
  const [pipelineStatus, setPipelineStatus] = useState("");
  const [openDeals, setOpenDeals] = useState("");

  const [proposalTasks, setProposalTasks] = useState<string[]>([]);
  const [proposalsPerMonth, setProposalsPerMonth] = useState("");
  const [proposalTemplates, setProposalTemplates] = useState("");

  const [clientRelationshipTasks, setClientRelationshipTasks] = useState<
    string[]
  >([]);
  const [otherLeadSource, setOtherLeadSource] = useState("");
  const [crmStatus, setCrmStatus] = useState("");
  const [crmTools, setCrmTools] = useState("");

  const [engagementType, setEngagementType] = useState("");
  const [startTimeline, setStartTimeline] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const [activeAccounts, setActiveAccounts] = useState("");

  const [reportingTasks, setReportingTasks] = useState<string[]>([]);
  const [reportingMethod, setReportingMethod] = useState("");

  const [industry, setIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "Lead Management",
    "Sales Outreach Support",
    "CRM & Pipeline Support",
    "Proposal & Quote Support",
    "Client Relationship Support",
    "Sales Reporting",
  ];

  const toggleServiceArea = (value: string) => {
    setServiceAreas((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  //   const toggleAdminTask = (value: string) => {
  //     setAdminTasks((prev) =>
  //       prev.includes(value)
  //         ? prev.filter((item) => item !== value)
  //         : [...prev, value],
  //     );
  //   };

  const handleSelectAllServices = () => {
    const allServices = [
      "Lead Management",
      "Sales Outreach Support",
      "CRM & Pipeline Support",
      "Proposal & Quote Support",
      "Client Relationship Support",
      "Sales Reporting",
    ];

    if (serviceAreas.length === allServices.length) {
      setServiceAreas([]);
    } else {
      setServiceAreas(allServices);
    }
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

    // SERVICES

    if (serviceAreas.length === 0) {
      newErrors.serviceAreas = "Select at least one service";
    }
    if (!crmStatus) {
      newErrors.crmStatus = "Please select your CRM status";
    }

    if (!crmTools.trim()) {
      newErrors.crmTools = "Please tell us which CRM or sales tools you use";
    }

    // GOALS

    if (!desiredOutcome.trim()) {
      newErrors.desiredOutcome = "Please describe your desired outcome";
    }

    if (!currentChallenges.trim()) {
      newErrors.currentChallenges = "Please describe your current challenges";
    }

    // LEAD MANAGEMENT

    if (
      serviceAreas.includes("Lead Management") &&
      leadManagementTasks.length === 0
    ) {
      newErrors.leadManagementTasks =
        "Please select at least one lead management task";
    }

    if (serviceAreas.includes("Lead Management") && !leadsPerMonth) {
      newErrors.leadsPerMonth = "Please select your monthly lead volume";
    }

    if (serviceAreas.includes("Lead Management") && leadSources.length === 0) {
      newErrors.leadSources = "Please select at least one lead source";
    }

    if (
      serviceAreas.includes("Lead Management") &&
      leadSources.includes("Other") &&
      !otherLeadSource.trim()
    ) {
      newErrors.otherLeadSource = "Please specify your lead source";
    }

    // SALES OUTREACH

    if (
      serviceAreas.includes("Sales Outreach Support") &&
      outreachTasks.length === 0
    ) {
      newErrors.outreachTasks = "Please select at least one outreach task";
    }

    if (serviceAreas.includes("Sales Outreach Support") && !outreachVolume) {
      newErrors.outreachVolume = "Please select outreach volume";
    }

    if (serviceAreas.includes("Sales Outreach Support") && !outreachScripts) {
      newErrors.outreachScripts = "Please select an option";
    }

    // CRM & PIPELINE

    if (
      serviceAreas.includes("CRM & Pipeline Support") &&
      crmTasks.length === 0
    ) {
      newErrors.crmTasks = "Please select at least one CRM task";
    }

    if (serviceAreas.includes("CRM & Pipeline Support") && !pipelineStatus) {
      newErrors.pipelineStatus = "Please select your pipeline status";
    }

    if (serviceAreas.includes("CRM & Pipeline Support") && !openDeals) {
      newErrors.openDeals = "Please select open deals volume";
    }

    if (
      serviceAreas.includes("Client Relationship Support") &&
      clientRelationshipTasks.length === 0
    ) {
      newErrors.clientRelationshipTasks = "Please select at least one task";
    }

    if (
      serviceAreas.includes("Client Relationship Support") &&
      !activeAccounts
    ) {
      newErrors.activeAccounts = "Please select active account volume";
    }

    if (!engagementType) {
      newErrors.engagementType = "Please select an engagement type";
    }

    if (!startTimeline) {
      newErrors.startTimeline = "Please select a timeline";
    }

    // PROPOSAL & QUOTE

    if (
      serviceAreas.includes("Proposal & Quote Support") &&
      proposalTasks.length === 0
    ) {
      newErrors.proposalTasks = "Please select at least one proposal task";
    }

    if (
      serviceAreas.includes("Proposal & Quote Support") &&
      !proposalsPerMonth
    ) {
      newErrors.proposalsPerMonth = "Please select proposal volume";
    }

    if (
      serviceAreas.includes("Proposal & Quote Support") &&
      !proposalTemplates
    ) {
      newErrors.proposalTemplates = "Please select an option";
    }

    // CLIENT RELATIONSHIP

    // SALES REPORTING

    if (
      serviceAreas.includes("Sales Reporting") &&
      reportingTasks.length === 0
    ) {
      newErrors.reportingTasks =
        "Please select at least one reporting activity";
    }

    if (serviceAreas.includes("Sales Reporting") && !reportingMethod) {
      newErrors.reportingMethod = "Please select reporting method";
    }

    console.log("ERRORS:", newErrors);
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

      const formData = {
        // Contact
        fullName,
        email,
        phone,
        companyName,
        website,
        country,

        // Business
        industry: industry === "Other" ? otherIndustry : industry,

        teamSize,

        // Service Selection
        serviceAreas,

        // CRM
        crmStatus,
        crmTools,

        // Lead Management
        leadManagementTasks,
        leadsPerMonth,
        leadSources: leadSources.includes("Other")
          ? [
              ...leadSources.filter((item) => item !== "Other"),
              `Other: ${otherLeadSource}`,
            ]
          : leadSources,

        // Outreach
        outreachTasks,
        outreachVolume,
        outreachScripts,

        // CRM Pipeline
        crmTasks,
        pipelineStatus,
        openDeals,

        // Proposal
        proposalTasks,
        proposalsPerMonth,
        proposalTemplates,

        // Client Relationship
        clientRelationshipTasks,
        activeAccounts,

        // Reporting
        reportingTasks,
        reportingMethod,

        // Engagement
        engagementType,
        startTimeline,
        specialRequests,

        // Goals
        desiredOutcome,
        currentChallenges,
        additionalNotes,
      };

      const crmPayload = {
        serviceType: "Targeted Sales",

        ...formData,

        submittedAt: new Date().toISOString(),
      };

      console.log("CRM PAYLOAD", crmPayload);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwu5rpNif5MihM5fiuIRAMzeZjIkIInlNKGqrMN9VQybyYtR8yz-Dc8Yvopxeo05MD_/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(crmPayload),
        },
      );

      setIsSubmitted(true);

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
            Your Targeted Sales request has been received.
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
      <div className="max-w-5xl mx-auto px-6 space-y-8" id="service-form">
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
            <div className="relative">
              {(phone === "" || phone === "+1") && (
                <span
                  className="
        absolute
        left-[78px]
        top-1/2
        -translate-y-1/2
        text-[#9ca3af]
        pointer-events-none
        z-10
      "
                >
                  Phone Number *
                </span>
              )}

              <PhoneInput
                country={"us"}
                enableSearch
                value={phone}
                onChange={(value) => setPhone(value)}
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

              <FormSelect
                value={industry}
                onChange={setIndustry}
                placeholder="Please select..."
                options={[
                  "E-commerce / Retail",
                  "Professional Services",
                  "Healthcare / Wellness",
                  "Real Estate",
                  "Tech / SaaS",
                  "Education / Coaching",
                  "Finance / Accounting",
                  "Other",
                ]}
                error={errors.industry}
              />
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
                How many people are on your sales team (including yourself)?
              </label>

              <FormSelect
                value={teamSize}
                onChange={setTeamSize}
                placeholder="Please select..."
                options={[
                  "Just Me",
                  "2–3 People",
                  "4–10 People",
                  "11–25 People",
                  "25+ People",
                ]}
                error={errors.teamSize}
              />

              {errors.teamSize && (
                <p className="mt-4 text-sm text-red-500">{errors.teamSize}</p>
              )}
            </div>

            {/* CRM STATUS */}

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
                Do you currently use a CRM?
              </label>

              <FormSelect
                value={crmStatus}
                onChange={setCrmStatus}
                placeholder="Please select..."
                options={[
                  "No CRM — using spreadsheets/email",
                  "Yes — but it's messy or not maintained",
                  "Yes — maintained but could be better",
                  "Yes — well set up and actively used",
                ]}
                error={errors.crmStatus}
              />

              {errors.crmStatus && (
                <p className="mt-4 text-sm text-red-500">{errors.crmStatus}</p>
              )}
            </div>

            {/* CRM TOOLS */}

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
                Which CRM or sales tools are you currently using?
              </label>

              <textarea
                rows={5}
                value={crmTools}
                onChange={(e) => setCrmTools(e.target.value)}
                placeholder="HubSpot, Salesforce, Pipedrive, Zoho, spreadsheets, email tracking tools..."
                className={`
      w-full
      rounded-2xl
      border
      p-5

      resize-none
      outline-none

      focus:border-[#4F8DC9]

      ${errors.crmTools ? "border-red-500 bg-red-50" : "border-slate-200"}
    `}
              />

              {errors.crmTools && (
                <p className="mt-4 text-sm text-red-500">{errors.crmTools}</p>
              )}
            </div>
          </div>
        </FormSection>

        <FormSection
          eyebrow="Service Requirements"
          title="Which Sales Support Areas Do You Need?"
          description="Select all areas where you would like support. This helps us understand your requirements and prepare a tailored proposal."
        >
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Select All Services",
                description: "Select all Targeted Sales support services.",
                isSelectAll: true,
              },

              {
                title: "Lead Management",
                description:
                  "Lead organization, qualification, CRM entry, prospect research, and pipeline cleanup.",
              },

              {
                title: "Sales Outreach Support",
                description:
                  "Outbound outreach coordination, email campaigns, follow-up tracking, and prospect engagement.",
              },

              {
                title: "CRM & Pipeline Support",
                description:
                  "CRM updates, deal tracking, pipeline maintenance, and sales process administration.",
              },

              {
                title: "Proposal & Quote Support",
                description:
                  "Proposal preparation, quotation support, document coordination, and follow-up management.",
              },

              {
                title: "Client Relationship Support",
                description:
                  "Client communication support, account coordination, onboarding, and retention activities.",
              },

              {
                title: "Sales Reporting",
                description:
                  "Sales dashboards, KPI reporting, forecasting support, and performance tracking.",
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

        {/* =======================================
    LEAD MANAGEMENT DETAIL
======================================= */}

        {serviceAreas.includes("Lead Management") && (
          <FormSection
            eyebrow="Lead Management Detail"
            title="Lead Management Requirements"
            description="Help us understand your lead management support needs."
          >
            <div className="space-y-12">
              {/* Question 6 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which lead management tasks do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Lead list organization",
                    "Lead qualification support",
                    "CRM lead entry",
                    "Lead tagging and segmentation",
                    "Prospect research",
                    "Contact information verification",
                    "Pipeline data cleanup",
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
          leadManagementTasks.includes(item)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={leadManagementTasks.includes(item)}
                          onChange={() =>
                            setLeadManagementTasks((prev) =>
                              prev.includes(item)
                                ? prev.filter((x) => x !== item)
                                : [...prev, item],
                            )
                          }
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.leadManagementTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.leadManagementTasks}
                  </p>
                )}
              </div>

              {/* Question 7 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How many new leads does your business receive or generate per
                  month?
                </label>

                {/* <div className="grid md:grid-cols-5 gap-4"> */}
                <FormSelect
                  value={leadsPerMonth}
                  onChange={setLeadsPerMonth}
                  placeholder="Please select..."
                  options={[
                    "Fewer than 20",
                    "20–50",
                    "50–150",
                    "150–500",
                    "500+",
                  ]}
                  error={errors.leadsPerMonth}
                />

                {errors.leadsPerMonth && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.leadsPerMonth}
                  </p>
                )}
              </div>

              {/* Question 8 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Where do your leads currently come from?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Referrals",
                    "LinkedIn / social media",
                    "Cold outreach",
                    "Website / inbound",
                    "Paid ads",
                    "Events / networking",
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

        ${
          leadSources.includes(item)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={leadSources.includes(item)}
                          onChange={() =>
                            setLeadSources((prev) =>
                              prev.includes(item)
                                ? prev.filter((x) => x !== item)
                                : [...prev, item],
                            )
                          }
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.leadSources && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.leadSources}
                  </p>
                )}

                {leadSources.includes("Other") && (
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
                      Please specify your lead source
                    </label>

                    <input
                      type="text"
                      value={otherLeadSource}
                      onChange={(e) => setOtherLeadSource(e.target.value)}
                      placeholder="e.g. Partnerships, Affiliates, Community Groups..."
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

                    {errors.otherLeadSource && (
                      <p className="mt-3 text-sm text-red-500">
                        {errors.otherLeadSource}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* =======================================
    SALES OUTREACH DETAIL
======================================= */}

        {serviceAreas.includes("Sales Outreach Support") && (
          <FormSection
            eyebrow="Sales Outreach Detail"
            title="Sales Outreach Requirements"
            description="Tell us about your outreach activities and support requirements."
          >
            <div className="space-y-12">
              {/* Question 9 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which outreach tasks do you need help with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Email outreach support",
                    "LinkedIn outreach support",
                    "Follow-up message preparation",
                    "Sales sequence support",
                    "Appointment-setting support",
                    "Cold outreach administration",
                    "Call list preparation",
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
          outreachTasks.includes(item)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={outreachTasks.includes(item)}
                          onChange={() =>
                            setOutreachTasks((prev) =>
                              prev.includes(item)
                                ? prev.filter((x) => x !== item)
                                : [...prev, item],
                            )
                          }
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.outreachTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.outreachTasks}
                  </p>
                )}
              </div>

              {/* Question 10 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How many outreach contacts do you target per week?
                </label>

                <FormSelect
                  value={outreachVolume}
                  onChange={setOutreachVolume}
                  placeholder="Please select..."
                  options={[
                    "Fewer than 10",
                    "10–30",
                    "30–100",
                    "100–300",
                    "300+",
                  ]}
                  error={errors.outreachVolume}
                />
                {errors.outreachVolume && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.outreachVolume}
                  </p>
                )}
              </div>

              {/* Question 11 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you currently have outreach templates or scripts in place?
                </label>

                <FormSelect
                  value={outreachScripts}
                  onChange={setOutreachScripts}
                  placeholder="Please select..."
                  options={[
                    "No — starting from scratch",
                    "Partial — some drafts exist",
                    "Yes — but need improvement",
                    "Yes — well developed",
                  ]}
                  error={errors.outreachScripts}
                />

                {errors.outreachScripts && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.outreachScripts}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* =======================================
    CRM & PIPELINE DETAIL
======================================= */}

        {serviceAreas.includes("CRM & Pipeline Support") && (
          <FormSection
            eyebrow="CRM & Pipeline Detail"
            title="CRM & Pipeline Requirements"
            description="Help us understand your CRM and pipeline management needs."
          >
            <div className="space-y-12">
              {/* Question 12 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which CRM and pipeline tasks do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "CRM setup support",
                    "CRM updates",
                    "Pipeline tracking",
                    "Deal stage updates",
                    "Follow-up reminders",
                    "Sales activity reporting",
                    "Opportunity tracking",
                    "Lost lead tracking",
                    "CRM hygiene support",
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
          crmTasks.includes(item)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={crmTasks.includes(item)}
                          onChange={() =>
                            setCrmTasks((prev) =>
                              prev.includes(item)
                                ? prev.filter((x) => x !== item)
                                : [...prev, item],
                            )
                          }
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.crmTasks && (
                  <p className="mt-3 text-sm text-red-500">{errors.crmTasks}</p>
                )}
              </div>

              {/* Question 13 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which statement best describes your sales pipeline today?
                </label>
                <FormSelect
                  value={pipelineStatus}
                  onChange={setPipelineStatus}
                  placeholder="Please select..."
                  options={[
                    "No defined pipeline — all informal",
                    "Pipeline exists but rarely updated",
                    "Pipeline is active but disorganized",
                    "Pipeline is healthy and structured",
                  ]}
                  error={errors.pipelineStatus}
                />
                {errors.pipelineStatus && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.pipelineStatus}
                  </p>
                )}
              </div>

              {/* Question 14 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many open deals are currently in your
                  pipeline?
                </label>

                <FormSelect
                  value={openDeals}
                  onChange={setOpenDeals}
                  placeholder="Please select..."
                  options={[
                    "Fewer than 10",
                    "10–30",
                    "30–75",
                    "75–150",
                    "150+",
                  ]}
                  error={errors.openDeals}
                />
                {errors.openDeals && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.openDeals}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* =======================================
    PROPOSAL & QUOTE DETAIL
======================================= */}

        {serviceAreas.includes("Proposal & Quote Support") && (
          <FormSection
            eyebrow="Proposal & Quote Support"
            title="Proposal & Quote Requirements"
            description="Tell us about your proposal preparation and quote support needs."
          >
            <div className="space-y-12">
              {/* Question 15 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which proposal and quote tasks do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Proposal preparation support",
                    "Quote formatting",
                    "Sales deck organization",
                    "Client presentation support",
                    "Contract handoff coordination",
                    "Sales document management",
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
          proposalTasks.includes(item)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <input
                          type="checkbox"
                          checked={proposalTasks.includes(item)}
                          onChange={() =>
                            setProposalTasks((prev) =>
                              prev.includes(item)
                                ? prev.filter((x) => x !== item)
                                : [...prev, item],
                            )
                          }
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.proposalTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.proposalTasks}
                  </p>
                )}
              </div>

              {/* Question 16 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many proposals or quotes do you send each
                  month?
                </label>

                <FormSelect
                  value={proposalsPerMonth}
                  onChange={setProposalsPerMonth}
                  placeholder="Please select..."
                  options={["Fewer than 5", "5–15", "15–30", "30+"]}
                  error={errors.proposalsPerMonth}
                />

                {errors.proposalsPerMonth && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.proposalsPerMonth}
                  </p>
                )}
              </div>

              {/* Question 17 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you already have proposal templates available?
                </label>

                <FormSelect
                  value={proposalTemplates}
                  onChange={setProposalTemplates}
                  placeholder="Please select..."
                  options={[
                    "No — need to build from scratch",
                    "Basic templates — need improvement",
                    "Yes — just need someone to manage them",
                  ]}
                  error={errors.proposalTemplates}
                />
                {errors.proposalTemplates && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.proposalTemplates}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* =======================================
    CLIENT RELATIONSHIP DETAIL
======================================= */}

        {serviceAreas.includes("Client Relationship Support") && (
          <FormSection
            eyebrow="Client Relationship Detail"
            title="Client Relationship Requirements"
            description="Help us understand your account management and client support needs."
          >
            <div className="space-y-12">
              {/* Question 18 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which client relationship tasks do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Follow-up scheduling",
                    "Client check-in coordination",
                    "Renewal reminder tracking",
                    "Upsell & cross-sell opportunity tracking",
                    "Customer account notes",
                    "Sales meeting preparation",
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
          clientRelationshipTasks.includes(item)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <input
                          type="checkbox"
                          checked={clientRelationshipTasks.includes(item)}
                          onChange={() =>
                            setClientRelationshipTasks((prev) =>
                              prev.includes(item)
                                ? prev.filter((x) => x !== item)
                                : [...prev, item],
                            )
                          }
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.clientRelationshipTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.clientRelationshipTasks}
                  </p>
                )}
              </div>

              {/* Question 19 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many active client accounts do you currently
                  manage?
                </label>

                <FormSelect
                  value={activeAccounts}
                  onChange={setActiveAccounts}
                  placeholder="Please select..."
                  options={[
                    "Fewer than 10",
                    "10–30",
                    "30–75",
                    "75–200",
                    "200+",
                  ]}
                  error={errors.activeAccounts}
                />

                {errors.activeAccounts && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.activeAccounts}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* =======================================
    SALES REPORTING DETAIL
======================================= */}

        {serviceAreas.includes("Sales Reporting") && (
          <FormSection
            eyebrow="Sales Reporting Detail"
            title="Sales Reporting Requirements"
            description="Tell us about your reporting and KPI tracking requirements."
          >
            <div className="space-y-12">
              {/* Question 20 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which reporting activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Weekly sales activity reports",
                    "Pipeline reports",
                    "Lead source reports",
                    "Conversion tracking",
                    "Outreach performance reports",
                    "CRM hygiene reports",
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
          reportingTasks.includes(item)
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <input
                          type="checkbox"
                          checked={reportingTasks.includes(item)}
                          onChange={() =>
                            setReportingTasks((prev) =>
                              prev.includes(item)
                                ? prev.filter((x) => x !== item)
                                : [...prev, item],
                            )
                          }
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.reportingTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.reportingTasks}
                  </p>
                )}
              </div>

              {/* Question 21 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How are sales reports currently produced?
                </label>

                <FormSelect
                  value={reportingMethod}
                  onChange={setReportingMethod}
                  placeholder="Please select..."
                  options={[
                    "Not being produced at all",
                    "Manually — very time consuming",
                    "Partially automated",
                    "Already automated — just need review",
                  ]}
                  error={errors.reportingMethod}
                />

                {errors.reportingMethod && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.reportingMethod}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* =======================================
    ENGAGEMENT PREFERENCES
======================================= */}

        <FormSection
          eyebrow="Engagement Preferences"
          title="Project Timing & Engagement"
          description="Help us understand your preferred engagement model and timeline."
        >
          <div className="space-y-12">
            {/* Question 22 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What type of engagement are you looking for?
              </label>
              <FormSelect
                value={engagementType}
                onChange={setEngagementType}
                placeholder="Please select..."
                options={[
                  "One-time project (defined scope & end date)",
                  "Ongoing monthly retainer",
                  "Project + retainer (setup then ongoing)",
                  "Not sure — need your recommendation",
                ]}
                error={errors.engagementType}
              />

              {errors.engagementType && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.engagementType}
                </p>
              )}
            </div>

            {/* Question 23 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                When would you ideally like to get started?
              </label>

              <FormSelect
                value={startTimeline}
                onChange={setStartTimeline}
                placeholder="Please select..."
                options={[
                  "ASAP",
                  "Within 2 weeks",
                  "Within 1 month",
                  "1–3 months",
                  "Just exploring",
                ]}
                error={errors.startTimeline}
              />

              {errors.startTimeline && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.startTimeline}
                </p>
              )}
            </div>

            {/* Question 24 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-3">
                Any special requests, requirements, or additional information?
              </label>

              <p className="text-sm italic text-slate-500 mb-4">
                Optional. Tell us anything that would help us prepare the right
                proposal.
              </p>

              <textarea
                rows={6}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Preferred working hours, reporting requirements, internal processes, compliance needs, deadlines..."
                className="
    w-full
    rounded-2xl
    border
    border-slate-200
    p-5

    resize-none
    outline-none

    focus:border-[#4F8DC9]
    transition-all
  "
              />
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
                What is the #1 sales outcome you want from this engagement?
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                e.g. Book 10 qualified calls/month, clean up our CRM, never miss
                a follow-up, increase proposal conversion rate...
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
                e.g. No time to follow up consistently, sales team too busy, no
                clear pipeline process...
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
              STAFF United — Targeted Sales
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
                : "Submit Targeted Sales Request"}
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
