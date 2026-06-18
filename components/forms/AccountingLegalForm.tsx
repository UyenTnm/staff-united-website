"use client";

import { useState } from "react";
import FormSection from "./FormSection";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AccountingLegalForm() {
  const [serviceAreas, setServiceAreas] = useState<string[]>([]);

  const [engagementType, setEngagementType] = useState("");
  const [startTimeline, setStartTimeline] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

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
  // BOOKKEEPING SUPPORT

  const [bookkeepingTasks, setBookkeepingTasks] = useState<string[]>([]);

  const [accountsToReconcile, setAccountsToReconcile] = useState("");

  const [monthlyTransactions, setMonthlyTransactions] = useState("");

  const [bookkeepingStatus, setBookkeepingStatus] = useState("");

  // FINANCIAL REPORTING

  const [financialReports, setFinancialReports] = useState<string[]>([]);

  const [reportRecipients, setReportRecipients] = useState("");

  // BILLING & PAYMENT

  const [billingTasks, setBillingTasks] = useState<string[]>([]);

  const [monthlyInvoices, setMonthlyInvoices] = useState("");

  // PAYROLL ADMINISTRATION

  const [payrollTasks, setPayrollTasks] = useState<string[]>([]);

  const [payrollProcess, setPayrollProcess] = useState("");

  const [payrollHeadcount, setPayrollHeadcount] = useState("");

  // TAX SUPPORT

  const [taxTasks, setTaxTasks] = useState<string[]>([]);

  const [taxRelationship, setTaxRelationship] = useState("");

  const [taxDeadlines, setTaxDeadlines] = useState("");

  // AUDIT & REVIEW PREPARATION

  const [auditTasks, setAuditTasks] = useState<string[]>([]);

  const [auditStatus, setAuditStatus] = useState("");

  const [auditDeadline, setAuditDeadline] = useState("");

  // DOCUMENT MANAGEMENT

  const [documentTasks, setDocumentTasks] = useState<string[]>([]);

  const [documentVolume, setDocumentVolume] = useState("");

  // CONTRACT ADMINISTRATION

  const [contractTasks, setContractTasks] = useState<string[]>([]);

  const [activeContracts, setActiveContracts] = useState("");

  // COMPLIANCE ADMINISTRATION

  const [complianceTasks, setComplianceTasks] = useState<string[]>([]);

  const [complianceRequirements, setComplianceRequirements] = useState("");

  // LEGAL OPERATIONS

  const [legalOpsTasks, setLegalOpsTasks] = useState<string[]>([]);

  const [outsideCounsel, setOutsideCounsel] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "Bookkeeping Support",
    "Financial Reporting Support",
    "Billing & Payment Administration",
    "Payroll Administration Support",
    "Tax Support",
    "Audit & Review Preparation Support",

    "Document Management",
    "Contract Administration Support",
    "Compliance Administration",
    "Legal Operations Support",
  ];

  const toggleServiceArea = (value: string) => {
    setServiceAreas((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };
  const toggleBookkeepingTask = (value: string) => {
    setBookkeepingTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleFinancialReport = (value: string) => {
    setFinancialReports((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleBillingTask = (value: string) => {
    setBillingTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const togglePayrollTask = (value: string) => {
    setPayrollTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleTaxTask = (value: string) => {
    setTaxTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleAuditTask = (value: string) => {
    setAuditTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleDocumentTask = (value: string) => {
    setDocumentTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleContractTask = (value: string) => {
    setContractTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleComplianceTask = (value: string) => {
    setComplianceTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleLegalOpsTask = (value: string) => {
    setLegalOpsTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleSelectAllServices = () => {
    const allServices = [
      // Accounting & Finance
      "Bookkeeping Support",
      "Financial Reporting Support",
      "Billing & Payment Administration",
      "Payroll Administration Support",
      "Tax Support",
      "Audit & Review Preparation Support",

      // Legal Administration
      "Document Management",
      "Contract Administration Support",
      "Compliance Administration",
      "Legal Operations Support",
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

    // BOOKKEEPING

    if (
      serviceAreas.includes("Bookkeeping Support") &&
      bookkeepingTasks.length === 0
    ) {
      newErrors.bookkeepingTasks =
        "Please select at least one bookkeeping activity";
    }

    if (serviceAreas.includes("Bookkeeping Support") && !accountsToReconcile) {
      newErrors.accountsToReconcile = "Please select number of accounts";
    }

    if (serviceAreas.includes("Bookkeeping Support") && !monthlyTransactions) {
      newErrors.monthlyTransactions = "Please select transaction volume";
    }

    if (serviceAreas.includes("Bookkeeping Support") && !bookkeepingStatus) {
      newErrors.bookkeepingStatus = "Please select bookkeeping status";
    }

    // FINANCIAL REPORTING

    if (
      serviceAreas.includes("Financial Reporting Support") &&
      financialReports.length === 0
    ) {
      newErrors.financialReports = "Please select at least one report";
    }

    if (
      serviceAreas.includes("Financial Reporting Support") &&
      !reportRecipients
    ) {
      newErrors.reportRecipients = "Please select report recipients";
    }

    // BILLING & PAYMENT

    if (
      serviceAreas.includes("Billing & Payment Administration") &&
      billingTasks.length === 0
    ) {
      newErrors.billingTasks = "Please select at least one billing activity";
    }

    if (
      serviceAreas.includes("Billing & Payment Administration") &&
      !monthlyInvoices
    ) {
      newErrors.monthlyInvoices = "Please select invoice volume";
    }

    // PAYROLL ADMINISTRATION

    if (
      serviceAreas.includes("Payroll Administration Support") &&
      payrollTasks.length === 0
    ) {
      newErrors.payrollTasks = "Please select at least one payroll activity";
    }

    if (
      serviceAreas.includes("Payroll Administration Support") &&
      !payrollProcess
    ) {
      newErrors.payrollProcess = "Please select payroll process";
    }

    if (
      serviceAreas.includes("Payroll Administration Support") &&
      !payrollHeadcount
    ) {
      newErrors.payrollHeadcount = "Please select payroll volume";
    }

    // TAX SUPPORT

    if (serviceAreas.includes("Tax Support") && taxTasks.length === 0) {
      newErrors.taxTasks = "Please select at least one tax activity";
    }

    if (serviceAreas.includes("Tax Support") && !taxRelationship) {
      newErrors.taxRelationship = "Please select tax preparation process";
    }

    // AUDIT & REVIEW

    if (
      serviceAreas.includes("Audit & Review Preparation Support") &&
      auditTasks.length === 0
    ) {
      newErrors.auditTasks = "Please select at least one audit activity";
    }

    if (
      serviceAreas.includes("Audit & Review Preparation Support") &&
      !auditStatus
    ) {
      newErrors.auditStatus = "Please select audit status";
    }

    // DOCUMENT MANAGEMENT

    if (
      serviceAreas.includes("Document Management") &&
      documentTasks.length === 0
    ) {
      newErrors.documentTasks = "Please select at least one document activity";
    }

    if (serviceAreas.includes("Document Management") && !documentVolume) {
      newErrors.documentVolume = "Please select document volume";
    }

    // CONTRACT ADMINISTRATION

    if (
      serviceAreas.includes("Contract Administration Support") &&
      contractTasks.length === 0
    ) {
      newErrors.contractTasks = "Please select at least one contract activity";
    }

    if (
      serviceAreas.includes("Contract Administration Support") &&
      !activeContracts
    ) {
      newErrors.activeContracts = "Please select contract volume";
    }

    // COMPLIANCE ADMINISTRATION

    if (
      serviceAreas.includes("Compliance Administration") &&
      complianceTasks.length === 0
    ) {
      newErrors.complianceTasks =
        "Please select at least one compliance activity";
    }

    // LEGAL OPERATIONS

    if (
      serviceAreas.includes("Legal Operations Support") &&
      legalOpsTasks.length === 0
    ) {
      newErrors.legalOpsTasks =
        "Please select at least one legal operations activity";
    }

    if (serviceAreas.includes("Legal Operations Support") && !outsideCounsel) {
      newErrors.outsideCounsel = "Please select an option";
    }

    // GOALS

    if (!desiredOutcome.trim()) {
      newErrors.desiredOutcome = "Please describe your desired outcome";
    }

    if (!currentChallenges.trim()) {
      newErrors.currentChallenges = "Please describe your current challenges";
    }

    if (!engagementType) {
      newErrors.engagementType = "Please select an engagement type";
    }

    if (!startTimeline) {
      newErrors.startTimeline = "Please select a timeline";
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

        bookkeepingTasks,
        accountsToReconcile,
        monthlyTransactions,
        bookkeepingStatus,
        financialReports,
        reportRecipients,
        billingTasks,
        monthlyInvoices,
        payrollTasks,
        payrollProcess,
        payrollHeadcount,
        taxTasks,
        taxRelationship,
        taxDeadlines,
        auditTasks,
        auditStatus,
        auditDeadline,
        documentTasks,
        documentVolume,
        contractTasks,
        activeContracts,
        complianceTasks,
        complianceRequirements,
        legalOpsTasks,
        outsideCounsel,

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
        serviceType: "Accounting & Legal",

        ...formData,

        submittedAt: new Date().toISOString(),
      };

      console.log("CRM PAYLOAD", crmPayload);

      await fetch(
        "https://script.google.com/macros/s/AKfycbyGpETG-i3qXRPfEJz1klmNsBXXP4mR32KJulNTh1tNc1TWqx98FVhUwHZr5acXS_3C/exec",
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
            Your Accounting & Legal request has been received.
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
                How many employees or contractors does your business have?{" "}
              </label>

              <div className="grid md:grid-cols-3 gap-4">
                {["Just Me", "2–5 ", "6–15 ", "16–50 ", "50+ "].map((item) => (
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
          </div>
        </FormSection>

        {/* SERVICES REQUIMENT */}
        <FormSection
          eyebrow="Service Requirements"
          title="Which Accounting & Legal Support Areas Do You Need?"
          description="Select all areas where you would like support. This helps us understand your requirements and prepare a tailored proposal."
        >
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Select All Services",
                description: "Select all Accounting & Legal support services.",
                isSelectAll: true,
              },

              {
                title: "Bookkeeping Support",
                description:
                  "Transaction categorization, reconciliations, accounts payable/receivable support, expense tracking, and bookkeeping administration.",
              },
              {
                title: "Financial Reporting Support",
                description:
                  "Monthly reports, profit & loss statements, balance sheets, KPI reporting, and financial dashboards.",
              },
              {
                title: "Billing & Payment Administration",
                description:
                  "Invoice preparation, payment tracking, vendor bill organization, and billing workflows.",
              },
              {
                title: "Payroll Administration Support",
                description:
                  "Payroll preparation, timesheet collection, reimbursement tracking, and payroll administration.",
              },
              {
                title: "Tax Support",
                description:
                  "Tax document organization, tax-ready bookkeeping, workpaper preparation, and tax support administration.",
              },
              {
                title: "Audit & Review Preparation Support",
                description:
                  "Audit readiness, document collection, reconciliation schedules, and auditor coordination support.",
              },
              {
                title: "Document Management",
                description:
                  "Legal document organization, contract file management, deadline tracking, and version control.",
              },
              {
                title: "Contract Administration Support",
                description:
                  "Contract intake, obligation tracking, renewal reminders, and contract organization.",
              },
              {
                title: "Compliance Administration",
                description:
                  "Compliance calendars, permit tracking, corporate records, and policy management.",
              },
              {
                title: "Legal Operations Support",
                description:
                  "Legal task tracking, matter organization, outside counsel coordination, and legal administration.",
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

        {/* Bookking Support */}
        {serviceAreas.includes("Bookkeeping Support") && (
          <FormSection
            eyebrow="Bookkeeping Support"
            title="Bookkeeping Requirements"
            description="Help us understand your bookkeeping support needs."
          >
            <div className="space-y-12">
              {/* Question 6 */}
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which bookkeeping activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Transaction categorization",
                    "Bank reconciliations",
                    "Accounts payable support",
                    "Accounts receivable support",
                    "Expense tracking",
                    "Month-end bookkeeping",
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
                  bookkeepingTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={bookkeepingTasks.includes(item)}
                          onChange={() => toggleBookkeepingTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* Question 7 */}
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How many accounts require regular reconciliation?
                </label>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "1–2 accounts",
                    "3–5 accounts",
                    "6–10 accounts",
                    "10+ accounts",
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
            accountsToReconcile === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="accountsToReconcile"
                          checked={accountsToReconcile === item}
                          onChange={() => setAccountsToReconcile(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* Question 8 */}
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many transactions occur each month?
                </label>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    "0–100",
                    "101–500",
                    "501–1,000",
                    "1,000–5,000",
                    "5,000+",
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
            monthlyTransactions === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="monthlyTransactions"
                          checked={monthlyTransactions === item}
                          onChange={() => setMonthlyTransactions(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* Question 9 */}
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What best describes your bookkeeping today?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Bookkeeping is fully up to date",
                    "Mostly current but behind occasionally",
                    "Several months behind",
                    "Need a complete clean-up",
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
            bookkeepingStatus === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="bookkeepingStatus"
                          checked={bookkeepingStatus === item}
                          onChange={() => setBookkeepingStatus(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </FormSection>
        )}

        {/* Financial Reporting Support */}
        {serviceAreas.includes("Financial Reporting Support") && (
          <FormSection
            eyebrow="Financial Reporting"
            title="Financial Reporting Requirements"
            description="Help us understand your reporting and financial visibility needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which financial reports do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Profit & Loss Statements",
                    "Balance Sheets",
                    "Cash Flow Reports",
                    "Budget vs Actual Reporting",
                    "KPI Dashboards",
                    "Custom Financial Reports",
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
            financialReports.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={financialReports.includes(item)}
                          onChange={() => toggleFinancialReport(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.financialReports && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.financialReports}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Who are these reports typically prepared for?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Business Owner",
                    "Management Team",
                    "Board / Investors",
                    "External Accountant",
                    "Multiple Stakeholders",
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
            reportRecipients === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="reportRecipients"
                          checked={reportRecipients === item}
                          onChange={() => setReportRecipients(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.reportRecipients && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.reportRecipients}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}
        {/* Billing & payment Administration */}
        {serviceAreas.includes("Billing & Payment Administration") && (
          <FormSection
            eyebrow="Billing & Payment"
            title="Billing & Payment Requirements"
            description="Help us understand your invoicing and payment administration needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which billing and payment activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Invoice preparation",
                    "Invoice tracking",
                    "Accounts receivable follow-up",
                    "Vendor bill management",
                    "Payment scheduling",
                    "Payment reconciliation",
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
            billingTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={billingTasks.includes(item)}
                          onChange={() => toggleBillingTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.billingTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.billingTasks}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many invoices are processed each month?
                </label>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {["0–25", "26–100", "101–250", "251–500", "500+"].map(
                    (item) => (
                      <label
                        key={item}
                        className={`
          cursor-pointer
          rounded-2xl
          border
          p-5
          transition-all

          ${
            monthlyInvoices === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="monthlyInvoices"
                            checked={monthlyInvoices === item}
                            onChange={() => setMonthlyInvoices(item)}
                            className="w-4 h-4"
                          />

                          <span className="font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      </label>
                    ),
                  )}
                </div>

                {errors.monthlyInvoices && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.monthlyInvoices}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Payroll Administration Support */}
        {serviceAreas.includes("Payroll Administration Support") && (
          <FormSection
            eyebrow="Payroll Administration"
            title="Payroll Administration Requirements"
            description="Help us understand your payroll administration needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which payroll administration activities do you need support
                  with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Timesheet collection",
                    "Payroll preparation",
                    "Leave tracking",
                    "Employee reimbursement tracking",
                    "Payroll record maintenance",
                    "Payroll reporting support",
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
            payrollTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={payrollTasks.includes(item)}
                          onChange={() => togglePayrollTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.payrollTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.payrollTasks}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How is payroll currently managed?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Managed internally",
                    "Managed by external accountant",
                    "Combination of both",
                    "No formal payroll process",
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
            payrollProcess === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payrollProcess"
                          checked={payrollProcess === item}
                          onChange={() => setPayrollProcess(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.payrollProcess && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.payrollProcess}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many employees or contractors are paid each
                  cycle?
                </label>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {["1–5", "6–15", "16–50", "51–100", "100+"].map((item) => (
                    <label
                      key={item}
                      className={`
          cursor-pointer
          rounded-2xl
          border
          p-5
          transition-all

          ${
            payrollHeadcount === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payrollHeadcount"
                          checked={payrollHeadcount === item}
                          onChange={() => setPayrollHeadcount(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.payrollHeadcount && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.payrollHeadcount}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Tax Support */}
        {serviceAreas.includes("Tax Support") && (
          <FormSection
            eyebrow="Tax Support"
            title="Tax Support Requirements"
            description="Help us understand your tax administration and preparation needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which tax-related activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Tax document collection",
                    "Tax-ready bookkeeping",
                    "Workpaper preparation",
                    "Tax filing coordination",
                    "Tax deadline tracking",
                    "Communication with accountant",
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
            taxTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={taxTasks.includes(item)}
                          onChange={() => toggleTaxTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.taxTasks && (
                  <p className="mt-3 text-sm text-red-500">{errors.taxTasks}</p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How is tax preparation currently handled?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Internal team",
                    "External accountant",
                    "Combination of both",
                    "No formal process",
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
            taxRelationship === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="taxRelationship"
                          checked={taxRelationship === item}
                          onChange={() => setTaxRelationship(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.taxRelationship && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.taxRelationship}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Are there any upcoming tax deadlines we should be aware of?
                </label>

                <textarea
                  value={taxDeadlines}
                  onChange={(e) => setTaxDeadlines(e.target.value)}
                  rows={4}
                  placeholder="Optional. Share any important tax filing dates, deadlines, or upcoming requirements."
                  className="
      w-full
      rounded-2xl
      border
      border-slate-200
      px-5
      py-4
      outline-none
      resize-none
    "
                />
              </div>
            </div>
          </FormSection>
        )}

        {/* Audit & Review Preparation Support */}
        {serviceAreas.includes("Audit & Review Preparation Support") && (
          <FormSection
            eyebrow="Audit & Review"
            title="Audit & Review Preparation Requirements"
            description="Help us understand your audit preparation and review support needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which audit preparation activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Document collection",
                    "Supporting schedules",
                    "Account reconciliations",
                    "Audit request tracking",
                    "Auditor coordination",
                    "Review preparation support",
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
            auditTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={auditTasks.includes(item)}
                          onChange={() => toggleAuditTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.auditTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.auditTasks}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What best describes your current audit or review status?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Audit currently underway",
                    "Audit scheduled soon",
                    "Annual review approaching",
                    "Preparing for future audit",
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
            auditStatus === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="auditStatus"
                          checked={auditStatus === item}
                          onChange={() => setAuditStatus(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.auditStatus && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.auditStatus}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Are there any upcoming audit or review deadlines?
                </label>

                <textarea
                  value={auditDeadline}
                  onChange={(e) => setAuditDeadline(e.target.value)}
                  rows={4}
                  placeholder="Optional. Share any upcoming audit, review, compliance, or reporting deadlines."
                  className="
      w-full
      rounded-2xl
      border
      border-slate-200
      px-5
      py-4
      outline-none
      resize-none
    "
                />
              </div>
            </div>
          </FormSection>
        )}

        {/* Document Management */}
        {serviceAreas.includes("Document Management") && (
          <FormSection
            eyebrow="Document Management"
            title="Document Management Requirements"
            description="Help us understand your document organization and legal records management needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which document management activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Document organization",
                    "File naming & indexing",
                    "Version control",
                    "Document retrieval support",
                    "Digital filing systems",
                    "Document retention tracking",
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
            documentTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={documentTasks.includes(item)}
                          onChange={() => toggleDocumentTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.documentTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.documentTasks}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many documents require ongoing management?
                </label>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    "0–100",
                    "101–500",
                    "501–1,000",
                    "1,001–5,000",
                    "5,000+",
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
            documentVolume === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="documentVolume"
                          checked={documentVolume === item}
                          onChange={() => setDocumentVolume(item)}
                          className="w-4 h-4"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.documentVolume && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.documentVolume}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Contract Administration Support */}
        {serviceAreas.includes("Contract Administration Support") && (
          <FormSection
            eyebrow="Contract Administration"
            title="Contract Administration Requirements"
            description="Help us understand your contract administration and tracking needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which contract administration activities do you need support
                  with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Contract intake & organization",
                    "Renewal tracking",
                    "Obligation tracking",
                    "Contract repository maintenance",
                    "Contract metadata updates",
                    "Contract reporting",
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
            contractTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={contractTasks.includes(item)}
                          onChange={() => toggleContractTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.contractTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.contractTasks}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many active contracts are currently managed?
                </label>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {["1–25", "26–100", "101–500", "501–1,000", "1,000+"].map(
                    (item) => (
                      <label
                        key={item}
                        className={`
          cursor-pointer
          rounded-2xl
          border
          p-5
          transition-all

          ${
            activeContracts === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="activeContracts"
                            checked={activeContracts === item}
                            onChange={() => setActiveContracts(item)}
                            className="w-4 h-4"
                          />

                          <span className="font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      </label>
                    ),
                  )}
                </div>

                {errors.activeContracts && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.activeContracts}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Compliance Administration */}
        {serviceAreas.includes("Compliance Administration") && (
          <FormSection
            eyebrow="Compliance Administration"
            title="Compliance Administration Requirements"
            description="Help us understand your compliance tracking and administrative support needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which compliance administration activities do you need support
                  with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Compliance calendar management",
                    "Permit & license tracking",
                    "Corporate record maintenance",
                    "Policy documentation",
                    "Compliance reporting support",
                    "Deadline monitoring",
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
            complianceTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={complianceTasks.includes(item)}
                          onChange={() => toggleComplianceTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.complianceTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.complianceTasks}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Are there any specific compliance requirements or obligations
                  we should be aware of?
                </label>

                <textarea
                  value={complianceRequirements}
                  onChange={(e) => setComplianceRequirements(e.target.value)}
                  rows={4}
                  placeholder="Optional. Share any industry regulations, licensing requirements, compliance obligations, or important deadlines."
                  className="
      w-full
      rounded-2xl
      border
      border-slate-200
      px-5
      py-4
      outline-none
      resize-none
    "
                />
              </div>
            </div>
          </FormSection>
        )}

        {/* Legal Operations Support */}
        {serviceAreas.includes("Legal Operations Support") && (
          <FormSection
            eyebrow="Legal Operations"
            title="Legal Operations Requirements"
            description="Help us understand your legal operations and coordination needs."
          >
            <div className="space-y-12">
              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which legal operations activities do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Matter tracking",
                    "Legal request intake",
                    "Outside counsel coordination",
                    "Legal reporting",
                    "Legal task management",
                    "Legal workflow administration",
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
            legalOpsTasks.includes(item)
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={legalOpsTasks.includes(item)}
                          onChange={() => toggleLegalOpsTask(item)}
                          className="w-5 h-5 accent-[#4F8DC9]"
                        />

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.legalOpsTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.legalOpsTasks}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you currently work with outside legal counsel?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {["Yes, regularly", "Occasionally", "Rarely", "No"].map(
                    (item) => (
                      <label
                        key={item}
                        className={`
          cursor-pointer
          rounded-2xl
          border
          p-5
          transition-all

          ${
            outsideCounsel === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="outsideCounsel"
                            checked={outsideCounsel === item}
                            onChange={() => setOutsideCounsel(item)}
                            className="w-4 h-4"
                          />

                          <span className="font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      </label>
                    ),
                  )}
                </div>

                {errors.outsideCounsel && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.outsideCounsel}
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

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "One-time project (defined scope & end date)",
                  "Ongoing monthly retainer",
                  "Project + retainer (setup then ongoing)",
                  "Not sure — need your recommendation",
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
          engagementType === item
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        type="radio"
                        name="engagementType"
                        checked={engagementType === item}
                        onChange={() => setEngagementType(item)}
                        className="w-4 h-4 accent-[#4F8DC9]"
                      />

                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  </label>
                ))}
              </div>

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

              <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                {[
                  "ASAP",
                  "Within 2 weeks",
                  "Within 1 month",
                  "1–3 months",
                  "Just exploring",
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
          startTimeline === item
            ? "border-[#4F8DC9] bg-[#F8FBFF]"
            : "border-slate-200 hover:border-[#4F8DC9]"
        }
      `}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <input
                        type="radio"
                        name="startTimeline"
                        checked={startTimeline === item}
                        onChange={() => setStartTimeline(item)}
                        className="w-4 h-4 accent-[#4F8DC9]"
                      />

                      <span
                        className="
            font-medium whitespace-nowrap
            text-slate-700
            text-sm
            lg:text-base
          "
                      >
                        {item}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

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
                What is the #1 outcome you want from this engagement?{" "}
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                e.g. Improve financial visibility, streamline bookkeeping, stay
                audit-ready, improve compliance processes...
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
                e.g. Financial records are disorganized, reporting takes too
                long, compliance deadlines are difficult to track...
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
              STAFF United — Accounting & Legal
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
                : "Submit Accounting & Legal Request"}
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
