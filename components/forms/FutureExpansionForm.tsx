"use client";

import { useState } from "react";
import FormSection from "./FormSection";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChevronDown } from "lucide-react";
import FormSelect from "./FormSelect";

// import { FormSection } from "/FormSection";

export default function FutureExpansionForm() {
  const [serviceAreas, setServiceAreas] = useState<string[]>([]);

  const [industry, setIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");

  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [futureVision, setFutureVision] = useState("");
  const [currentChallenges, setCurrentChallenges] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [businessAge, setBusinessAge] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const [businessStage, setBusinessStage] = useState("");
  const [expansionDriver, setExpansionDriver] = useState("");
  const [otherExpansionDriver, setOtherExpansionDriver] = useState("");

  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // Market Expansion Support

  const [marketExpansionTasks, setMarketExpansionTasks] = useState<string[]>(
    [],
  );
  const [expansionType, setExpansionType] = useState("");
  const [targetMarkets, setTargetMarkets] = useState("");
  const [expansionPlanStatus, setExpansionPlanStatus] = useState("");

  // Partnership & Vendor Research

  const [partnerResearchTasks, setPartnerResearchTasks] = useState<string[]>(
    [],
  );
  const [partnerTypes, setPartnerTypes] = useState<string[]>([]);
  const [partnerCriteria, setPartnerCriteria] = useState("");
  const [partnerVolume, setPartnerVolume] = useState("");

  // New Product / Service Launch

  const [launchTasks, setLaunchTasks] = useState<string[]>([]);
  const [launchStage, setLaunchStage] = useState("");
  const [launchTimeline, setLaunchTimeline] = useState("");
  const [launchDescription, setLaunchDescription] = useState("");

  // Business Development Research

  const [businessDevTasks, setBusinessDevTasks] = useState<string[]>([]);
  const [businessDevGoal, setBusinessDevGoal] = useState("");
  const [fundingStatus, setFundingStatus] = useState("");
  const [fundingTypes, setFundingTypes] = useState<string[]>([]);
  // Expansion Project Coordination

  const [coordinationTasks, setCoordinationTasks] = useState<string[]>([]);
  const [activeInitiatives, setActiveInitiatives] = useState("");
  const [projectTools, setProjectTools] = useState("");
  const [crossBorderProjects, setCrossBorderProjects] = useState("");
  // Strategic Planning Support

  const [planningTasks, setPlanningTasks] = useState<string[]>([]);
  const [existingPlan, setExistingPlan] = useState("");
  const [planningAudience, setPlanningAudience] = useState("");
  const [planningDeadlines, setPlanningDeadlines] = useState("");

  // Readiness & Resources

  const [readinessLevel, setReadinessLevel] = useState("");
  const [internalResources, setInternalResources] = useState("");
  const [biggestConcern, setBiggestConcern] = useState("");

  // Engagement Preferences

  const [engagementType, setEngagementType] = useState("");
  const [startTimeline, setStartTimeline] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "Market Expansion Support",
    "Partnership & Vendor Research",
    "New Product / Service Launch Support",
    "Business Development Research",
    "Expansion Project Coordination",
    "Strategic Planning Support",
  ];

  const toggleServiceArea = (value: string) => {
    setServiceAreas((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleSelectAllServices = () => {
    if (serviceAreas.length === serviceOptions.length) {
      setServiceAreas([]);
    } else {
      setServiceAreas(serviceOptions);
    }
  };

  const toggleMarketExpansionTask = (value: string) => {
    setMarketExpansionTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const togglePartnerResearchTask = (value: string) => {
    setPartnerResearchTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const togglePartnerType = (value: string) => {
    setPartnerTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleLaunchTask = (value: string) => {
    setLaunchTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleBusinessDevTask = (value: string) => {
    setBusinessDevTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleFundingType = (value: string) => {
    setFundingTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const toggleCoordinationTask = (value: string) => {
    setCoordinationTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const togglePlanningTask = (value: string) => {
    setPlanningTasks((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (website.trim() && !/^https?:\/\/.+/i.test(website)) {
      newErrors.website = "Please enter a valid website URL";
    }

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

    if (!businessAge) {
      newErrors.businessAge = "Please select business age";
    }

    if (!teamSize) {
      newErrors.teamSize = "Please select team size";
    }

    if (!businessStage) {
      newErrors.businessStage = "Please select business stage";
    }

    if (!expansionDriver) {
      newErrors.expansionDriver = "Please select expansion driver";
    }

    if (expansionDriver === "Other" && !otherExpansionDriver.trim()) {
      newErrors.otherExpansionDriver = "Please specify expansion driver";
    }

    // SERVICES

    if (serviceAreas.length === 0) {
      newErrors.serviceAreas = "Select at least one service";
    }

    if (
      serviceAreas.includes("Market Expansion Support") &&
      marketExpansionTasks.length === 0
    ) {
      newErrors.marketExpansionTasks =
        "Please select at least one market expansion requirement";
    }

    if (serviceAreas.includes("Market Expansion Support") && !expansionType) {
      newErrors.expansionType = "Please select expansion type";
    }

    if (
      serviceAreas.includes("Market Expansion Support") &&
      !targetMarkets.trim()
    ) {
      newErrors.targetMarkets = "Please enter your target markets";
    }

    if (
      serviceAreas.includes("Market Expansion Support") &&
      !expansionPlanStatus
    ) {
      newErrors.expansionPlanStatus = "Please select expansion planning status";
    }

    if (
      serviceAreas.includes("Partnership & Vendor Research") &&
      partnerResearchTasks.length === 0
    ) {
      newErrors.partnerResearchTasks =
        "Please select at least one research requirement";
    }

    if (
      serviceAreas.includes("Partnership & Vendor Research") &&
      partnerTypes.length === 0
    ) {
      newErrors.partnerTypes = "Please select at least one partner type";
    }

    if (
      serviceAreas.includes("Partnership & Vendor Research") &&
      !partnerCriteria.trim()
    ) {
      newErrors.partnerCriteria = "Please describe your partner criteria";
    }

    if (
      serviceAreas.includes("Partnership & Vendor Research") &&
      !partnerVolume
    ) {
      newErrors.partnerVolume = "Please select partner volume";
    }

    if (
      serviceAreas.includes("New Product / Service Launch Support") &&
      launchTasks.length === 0
    ) {
      newErrors.launchTasks = "Please select at least one launch requirement";
    }

    if (
      serviceAreas.includes("New Product / Service Launch Support") &&
      !launchStage
    ) {
      newErrors.launchStage = "Please select launch stage";
    }

    if (
      serviceAreas.includes("New Product / Service Launch Support") &&
      !launchTimeline
    ) {
      newErrors.launchTimeline = "Please select launch timeline";
    }

    if (
      serviceAreas.includes("New Product / Service Launch Support") &&
      !launchDescription.trim()
    ) {
      newErrors.launchDescription = "Please describe your launch";
    }

    if (
      serviceAreas.includes("Business Development Research") &&
      businessDevTasks.length === 0
    ) {
      newErrors.businessDevTasks =
        "Please select at least one business development requirement";
    }

    if (
      serviceAreas.includes("Business Development Research") &&
      !businessDevGoal.trim()
    ) {
      newErrors.businessDevGoal =
        "Please describe your business development goal";
    }

    if (
      serviceAreas.includes("Business Development Research") &&
      !fundingStatus
    ) {
      newErrors.fundingStatus = "Please select funding status";
    }

    if (
      serviceAreas.includes("Business Development Research") &&
      fundingStatus === "Seeking Funding" &&
      fundingTypes.length === 0
    ) {
      newErrors.fundingTypes = "Please select at least one funding type";
    }

    if (
      serviceAreas.includes("Expansion Project Coordination") &&
      coordinationTasks.length === 0
    ) {
      newErrors.coordinationTasks =
        "Please select at least one coordination requirement";
    }

    if (
      serviceAreas.includes("Expansion Project Coordination") &&
      !activeInitiatives.trim()
    ) {
      newErrors.activeInitiatives = "Please describe active initiatives";
    }

    if (
      serviceAreas.includes("Expansion Project Coordination") &&
      !projectTools.trim()
    ) {
      newErrors.projectTools = "Please describe project tools";
    }

    if (
      serviceAreas.includes("Expansion Project Coordination") &&
      !crossBorderProjects
    ) {
      newErrors.crossBorderProjects = "Please select an option";
    }

    if (
      serviceAreas.includes("Strategic Planning Support") &&
      planningTasks.length === 0
    ) {
      newErrors.planningTasks =
        "Please select at least one planning requirement";
    }

    if (serviceAreas.includes("Strategic Planning Support") && !existingPlan) {
      newErrors.existingPlan = "Please select planning status";
    }

    if (
      serviceAreas.includes("Strategic Planning Support") &&
      !planningAudience.trim()
    ) {
      newErrors.planningAudience = "Please describe who the plan is for";
    }

    if (
      serviceAreas.includes("Strategic Planning Support") &&
      !planningDeadlines.trim()
    ) {
      newErrors.planningDeadlines = "Please describe planning timelines";
    }

    // READINESS & RESOURCES

    if (!readinessLevel) {
      newErrors.readinessLevel = "Please select readiness level";
    }

    if (!internalResources.trim()) {
      newErrors.internalResources = "Please describe internal resources";
    }

    if (!biggestConcern.trim()) {
      newErrors.biggestConcern = "Please describe your biggest concern";
    }

    // ENGAGEMENT

    if (!engagementType) {
      newErrors.engagementType = "Please select engagement type";
    }

    if (!startTimeline) {
      newErrors.startTimeline = "Please select start timeline";
    }

    // GOALS & CONTEXT

    if (!desiredOutcome.trim()) {
      newErrors.desiredOutcome = "Please describe your desired outcome";
    }

    if (!futureVision.trim()) {
      newErrors.futureVision = "Please describe your future business vision";
    }

    if (!currentChallenges.trim()) {
      newErrors.currentChallenges = "Please describe your current challenges";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    if (!validateForm()) {
      const firstError = document.querySelector(".border-red-500");

      firstError?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    const formData = {
      // Contact Information
      fullName,
      email,
      phone,
      companyName,
      website,
      country,

      // Business Information
      industry: industry === "Other" ? otherIndustry : industry,
      businessAge,
      teamSize,
      businessStage,
      expansionDriver:
        expansionDriver === "Other" ? otherExpansionDriver : expansionDriver,

      // Service Selection
      serviceAreas,

      // Market Expansion Support
      marketExpansionTasks,
      expansionType,
      targetMarkets,
      expansionPlanStatus,

      // Partnership & Vendor Research
      partnerResearchTasks,
      partnerTypes,
      partnerCriteria,
      partnerVolume,

      // New Product / Service Launch Support
      launchTasks,
      launchStage,
      launchTimeline,
      launchDescription,

      // Business Development Research
      businessDevTasks,
      businessDevGoal,
      fundingStatus,
      fundingTypes,

      // Expansion Project Coordination
      coordinationTasks,
      activeInitiatives,
      projectTools,
      crossBorderProjects,

      // Strategic Planning Support
      planningTasks,
      existingPlan,
      planningAudience,
      planningDeadlines,

      // Readiness & Resources
      readinessLevel,
      internalResources,
      biggestConcern,

      // Engagement Preferences
      engagementType,
      startTimeline,
      specialRequests,

      // Goals & Context
      desiredOutcome,
      futureVision,
      currentChallenges,
      additionalNotes,
    };

    const crmPayload = {
      serviceType: "Future Expansion",

      ...formData,

      submittedAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);

      console.log("CRM PAYLOAD", crmPayload);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwu5rpNif5MihM5fiuIRAMzeZjIkIInlNKGqrMN9VQybyYtR8yz-Dc8Yvopxeo05MD_/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(crmPayload),
        },
      );

      console.log("SUBMITTED");

      setIsSubmitted(true);
    } catch (error) {
      console.error("SUBMIT ERROR:", error);
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
            Your Future Expansion request has been received.
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
          title="Tell Us About You"
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
                className={`
w-full
h-14
rounded-2xl
border
px-5
outline-none

${errors.website ? "border-red-500 bg-red-50" : "border-slate-200"}
`}
              />
              {errors.website && (
                <p className="mt-2 text-sm text-red-500">{errors.website}</p>
              )}
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

        {/* BUSINESS INFORMATION */}
        <FormSection
          eyebrow="Business Information"
          title="Tell Us About Your Business"
          description="Help us understand where your business is today and what is driving your expansion plans."
        >
          <div className="space-y-12">
            {/* INDUSTRY */}
            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What industry are you in?
              </label>

              <div className="relative">
                <FormSelect
                  value={industry}
                  onChange={setIndustry}
                  placeholder="Select Industry"
                  options={[
                    "E-commerce / Retail",
                    "Professional Services",
                    "Healthcare / Wellness",
                    "Real Estate",
                    "Tech / SaaS",
                    "Education / Coaching",
                    "Finance / Accounting",
                    "Manufacturing / Distribution",
                    "Other",
                  ]}
                  error={errors.industry}
                  disabled={false}
                  searchable={false}
                />
              </div>
              {errors.industry && (
                <p className="mt-3 text-sm text-red-500">{errors.industry}</p>
              )}

              {industry === "Other" && (
                <input
                  placeholder="Please specify your industry"
                  value={otherIndustry}
                  onChange={(e) => setOtherIndustry(e.target.value)}
                  className={`
        mt-4
        w-full
        h-14
        rounded-2xl
        border
        px-5
        outline-none

        ${
          errors.otherIndustry ? "border-red-500 bg-red-50" : "border-slate-200"
        }
      `}
                />
              )}
              {errors.otherIndustry && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.otherIndustry}
                </p>
              )}
            </div>

            {/* QUESTION 1 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                How long has your business been operating?
              </label>

              <div className="relative">
                {/* <select
                  value={businessAge}
                  onChange={(e) => setBusinessAge(e.target.value)}
                  className={`
      w-full
      h-14
      rounded-2xl
      border
      px-5
      pr-12
      appearance-none
      bg-white
      outline-none
      focus:border-[#4F8DC9]

      ${errors.businessAge ? "border-red-500 bg-red-50" : "border-slate-200"}
    `}
                >
                  <option value="">Select Business Age</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-7 years">3-7 years</option>
                  <option value="7+ years">7+ years</option>
                </select> */}
                <FormSelect
                  value={businessAge}
                  onChange={setBusinessAge}
                  placeholder="Select Business Age"
                  options={[
                    "Less than 1 year",
                    "1-3 years",
                    "3-7 years",
                    "7+ years",
                  ]}
                  error={errors.businessAge}
                />

                {errors.businessAge && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.businessAge}
                  </p>
                )}
              </div>

              {errors.businessAge && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.businessAge}
                </p>
              )}
            </div>

            {/* QUESTION 2 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What is your current team size?
              </label>

              <FormSelect
                value={teamSize}
                onChange={setTeamSize}
                placeholder="Select Your Team Size"
                options={["Just me", "2-5", "6-15", "16-50", "50+"]}
                error={errors.teamSize}
              />

              {errors.teamSize && (
                <p className="mt-3 text-sm text-red-500">{errors.teamSize}</p>
              )}
            </div>

            {/* QUESTION 3 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                Which best describes your current business stage?
              </label>

              <FormSelect
                value={businessStage}
                onChange={setBusinessStage}
                placeholder="Select Business Stage"
                options={[
                  "Early-stage — still building the foundation",
                  "Growth-stage — scaling quickly",
                  "Established — stable and profitable",
                  "Mature — optimizing and expanding",
                ]}
                error={errors.businessStage}
              />

              {errors.businessStage && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.businessStage}
                </p>
              )}
            </div>

            {/* QUESTION 4 */}
            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What is the primary driver of your expansion plans?
              </label>

              <FormSelect
                value={expansionDriver}
                onChange={setExpansionDriver}
                placeholder="Select Expansion Driver"
                options={[
                  "Entering a new geographic market",
                  "Launching a new product or service",
                  "Finding new partners or vendors",
                  "Securing investment or funding",
                  "Franchising or licensing the business",
                  "Exploring new industries or verticals",
                  "Other",
                ]}
                error={errors.expansionDriver}
              />

              {errors.expansionDriver && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.expansionDriver}{" "}
                </p>
              )}

              {expansionDriver === "Other" && (
                <div className="mt-5">
                  <input
                    placeholder="Please specify"
                    value={otherExpansionDriver}
                    onChange={(e) => setOtherExpansionDriver(e.target.value)}
                    className={`
w-full
h-14
rounded-2xl
border
px-5
outline-none

      ${
        errors.otherExpansionDriver
          ? "border-red-500 bg-red-50"
          : "border-slate-200"
      }
    `}
                  />

                  {errors.otherExpansionDriver && (
                    <p className="mt-3 text-sm text-red-500">
                      {errors.otherExpansionDriver}
                    </p>
                  )}
                </div>
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
                title: "Market Expansion Support",
                description:
                  "Research and planning support for entering new markets.",
              },

              {
                title: "Partnership & Vendor Research",
                description:
                  "Identify potential partners, suppliers, and strategic relationships.",
              },

              {
                title: "New Product / Service Launch Support",
                description:
                  "Planning, coordination, and launch preparation support.",
              },

              {
                title: "Business Development Research",
                description:
                  "Research opportunities, prospects, and growth pathways.",
              },

              {
                title: "Expansion Project Coordination",
                description:
                  "Coordinate expansion projects, timelines, and stakeholders.",
              },

              {
                title: "Strategic Planning Support",
                description: "Strategic planning and future growth support.",
              },

              {
                title: "All Services",
                description: "Select all Future Expansion service areas.",
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
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-[#4F8DC9] focus:ring-[#4F8DC9]"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-[#06172d]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-500 leading-relaxed">
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

        {/* market expansion support */}
        {serviceAreas.includes("Market Expansion Support") && (
          <FormSection
            eyebrow="Market Expansion"
            title="Market Expansion Support"
            description="Tell us about your market expansion goals and requirements."
          >
            <div className="space-y-12">
              {/* Q7 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What type of expansion support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Market Research",
                    "Competitor Analysis",
                    "Market Entry Strategy",
                    "Localization Research",
                    "Expansion Feasibility Assessment",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                ${
                  marketExpansionTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={marketExpansionTasks.includes(item)}
                          onChange={() => toggleMarketExpansionTask(item)}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.marketExpansionTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.marketExpansionTasks}
                  </p>
                )}
              </div>

              {/* Q8 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What type of expansion are you considering?
                </label>

                <FormSelect
                  value={expansionType}
                  onChange={setExpansionType}
                  placeholder="Select Expansion Type"
                  options={[
                    "Domestic Expansion",
                    "International Expansion",
                    "Both",
                  ]}
                  error={errors.expansionType}
                />

                {errors.expansionType && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.expansionType}
                  </p>
                )}
              </div>

              {/* Q9 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which markets are you interested in?
                </label>

                <textarea
                  rows={5}
                  value={targetMarkets}
                  onChange={(e) => setTargetMarkets(e.target.value)}
                  placeholder="Countries, regions, cities, industries..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.targetMarkets
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.targetMarkets && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.targetMarkets}
                  </p>
                )}
              </div>

              {/* Q10 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Have you already developed an expansion plan?
                </label>

                <FormSelect
                  value={expansionPlanStatus}
                  onChange={setExpansionPlanStatus}
                  placeholder="Select Current Planning Status"
                  options={[
                    "Yes — detailed plan exists",
                    "Partially — some planning completed",
                    "No — need support from scratch",
                  ]}
                  error={errors.expansionPlanStatus}
                />

                {errors.expansionPlanStatus && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.expansionPlanStatus}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Partnership & Vendor */}
        {serviceAreas.includes("Partnership & Vendor Research") && (
          <FormSection
            eyebrow="Partnership Research"
            title="Partnership & Vendor Research"
            description="Help us identify the right partners, suppliers, and strategic relationships."
          >
            <div className="space-y-12">
              {/* Q11 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What type of research support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Partner Research",
                    "Supplier Research",
                    "Vendor Evaluation",
                    "Strategic Alliance Research",
                    "Channel Partner Identification",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                ${
                  partnerResearchTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={partnerResearchTasks.includes(item)}
                          onChange={() => togglePartnerResearchTask(item)}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.partnerResearchTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.partnerResearchTasks}
                  </p>
                )}
              </div>

              {/* Q12 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What types of partners are you looking for?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Distributors",
                    "Resellers",
                    "Suppliers",
                    "Technology Partners",
                    "Strategic Partners",
                    "Investors",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                ${
                  partnerTypes.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={partnerTypes.includes(item)}
                          onChange={() => togglePartnerType(item)}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.partnerTypes && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.partnerTypes}
                  </p>
                )}
              </div>

              {/* Q13 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What criteria are most important?
                </label>

                <textarea
                  rows={5}
                  value={partnerCriteria}
                  onChange={(e) => setPartnerCriteria(e.target.value)}
                  placeholder="Industry expertise, geographic coverage, pricing, reputation..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.partnerCriteria
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.partnerCriteria && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.partnerCriteria}
                  </p>
                )}
              </div>

              {/* Q14 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many potential partners do you need
                  identified?
                </label>

                <FormSelect
                  value={partnerVolume}
                  onChange={setPartnerVolume}
                  placeholder="Select Expected Partner Volume"
                  options={["1-10", "11-25", "26-50", "50+"]}
                  error={errors.partnerVolume}
                />

                {errors.partnerVolume && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.partnerVolume}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* New Product / Service Launch Support */}
        {serviceAreas.includes("New Product / Service Launch Support") && (
          <FormSection
            eyebrow="Launch Support"
            title="New Product / Service Launch Support"
            description="Tell us about your upcoming launch and the support you need."
          >
            <div className="space-y-12">
              {/* Q15 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What launch support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Launch Planning",
                    "Go-To-Market Research",
                    "Competitor Review",
                    "Launch Coordination",
                    "Launch Documentation",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                ${
                  launchTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={launchTasks.includes(item)}
                          onChange={() => toggleLaunchTask(item)}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.launchTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.launchTasks}
                  </p>
                )}
              </div>

              {/* Q16 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What stage is the launch currently in?
                </label>

                <FormSelect
                  value={launchStage}
                  onChange={setLaunchStage}
                  placeholder="Select Launch Stage"
                  options={[
                    "Idea Stage",
                    "Development In Progress",
                    "Ready For Launch",
                    "Already Launched",
                  ]}
                  error={errors.launchStage}
                />

                {errors.launchStage && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.launchStage}
                  </p>
                )}
              </div>

              {/* Q17 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  When do you plan to launch?
                </label>

                <FormSelect
                  value={launchTimeline}
                  onChange={setLaunchTimeline}
                  placeholder="Please select..."
                  options={[
                    "Within 30 Days",
                    "1-3 Months",
                    "3-6 Months",
                    "6+ Months",
                  ]}
                  error={errors.launchTimeline}
                />

                {errors.launchTimeline && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.launchTimeline}
                  </p>
                )}
              </div>

              {/* Q18 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Briefly describe the product or service being launched
                </label>

                <textarea
                  rows={5}
                  value={launchDescription}
                  onChange={(e) => setLaunchDescription(e.target.value)}
                  placeholder="Tell us about the offering, audience, and goals..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.launchDescription
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.launchDescription && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.launchDescription}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Business Development Research */}
        {serviceAreas.includes("Business Development Research") && (
          <FormSection
            eyebrow="Business Development"
            title="Business Development Research"
            description="Help us understand your growth objectives and business development goals."
          >
            <div className="space-y-12">
              {/* Q19 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What type of business development support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Lead Generation Research",
                    "Prospect Identification",
                    "Market Opportunity Research",
                    "Investor Research",
                    "Business Expansion Research",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                ${
                  businessDevTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={businessDevTasks.includes(item)}
                          onChange={() => toggleBusinessDevTask(item)}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.businessDevTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.businessDevTasks}
                  </p>
                )}
              </div>

              {/* Q20 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What is your primary business development objective?
                </label>

                <textarea
                  rows={5}
                  value={businessDevGoal}
                  onChange={(e) => setBusinessDevGoal(e.target.value)}
                  placeholder="Generate more leads, enter new markets, secure investment..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.businessDevGoal
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.businessDevGoal && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.businessDevGoal}
                  </p>
                )}
              </div>

              {/* Q21 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Are you currently seeking funding or investment?
                </label>

                <FormSelect
                  value={fundingStatus}
                  onChange={setFundingStatus}
                  placeholder="Please select..."
                  options={[
                    "Seeking Funding",
                    "Not Seeking Funding",
                    "Considering Funding Options",
                  ]}
                  error={errors.fundingStatus}
                />

                {errors.fundingStatus && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.fundingStatus}
                  </p>
                )}
              </div>

              {/* Q22 */}

              {fundingStatus === "Seeking Funding" && (
                <div>
                  <label className="block text-lg font-semibold text-[#06172d] mb-5">
                    What types of funding are you interested in?
                  </label>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Angel Investors",
                      "Venture Capital",
                      "Private Equity",
                      "Strategic Investors",
                      "Business Loans",
                      "Government Grants",
                    ].map((item) => (
                      <label
                        key={item}
                        className={`
                  cursor-pointer
                  rounded-2xl
                  border
                  p-5

                  ${
                    fundingTypes.includes(item)
                      ? "border-[#4F8DC9] bg-[#F8FBFF]"
                      : "border-slate-200 hover:border-[#4F8DC9]"
                  }
                `}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={fundingTypes.includes(item)}
                            onChange={() => toggleFundingType(item)}
                          />

                          <span>{item}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {errors.fundingTypes && (
                    <p className="mt-3 text-sm text-red-500">
                      {errors.fundingTypes}
                    </p>
                  )}
                </div>
              )}
            </div>
          </FormSection>
        )}

        {/* Expansion Project Coordination */}
        {serviceAreas.includes("Expansion Project Coordination") && (
          <FormSection
            eyebrow="Project Coordination"
            title="Expansion Project Coordination"
            description="Help us understand your expansion initiatives and project coordination needs."
          >
            <div className="space-y-12">
              {/* Q23 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What coordination support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Project Tracking",
                    "Stakeholder Coordination",
                    "Timeline Management",
                    "Meeting Coordination",
                    "Progress Reporting",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                ${
                  coordinationTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={coordinationTasks.includes(item)}
                          onChange={() => toggleCoordinationTask(item)}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.coordinationTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.coordinationTasks}
                  </p>
                )}
              </div>

              {/* Q24 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What expansion initiatives are currently active?
                </label>

                <textarea
                  rows={5}
                  value={activeInitiatives}
                  onChange={(e) => setActiveInitiatives(e.target.value)}
                  placeholder="New market entry, partnerships, new product launches..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.activeInitiatives
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.activeInitiatives && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.activeInitiatives}
                  </p>
                )}
              </div>

              {/* Q25 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What project management tools are currently being used?
                </label>

                <textarea
                  rows={4}
                  value={projectTools}
                  onChange={(e) => setProjectTools(e.target.value)}
                  placeholder="Asana, ClickUp, Monday.com, Notion, Jira..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.projectTools
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.projectTools && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.projectTools}
                  </p>
                )}
              </div>

              {/* Q26 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Are any of these projects cross-border or international?
                </label>

                <FormSelect
                  value={crossBorderProjects}
                  onChange={setCrossBorderProjects}
                  placeholder="Please select..."
                  options={["Yes", "No", "Some are international"]}
                  error={errors.crossBorderProjects}
                />

                {errors.crossBorderProjects && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.crossBorderProjects}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Strategic Planning Support */}
        {serviceAreas.includes("Strategic Planning Support") && (
          <FormSection
            eyebrow="Strategic Planning"
            title="Strategic Planning Support"
            description="Help us understand your planning priorities and future growth objectives."
          >
            <div className="space-y-12">
              {/* Q27 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What strategic planning support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Business Growth Planning",
                    "Expansion Roadmap Development",
                    "Strategic Goal Setting",
                    "Market Positioning Strategy",
                    "Operational Scaling Planning",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
                cursor-pointer
                rounded-2xl
                border
                p-5

                ${
                  planningTasks.includes(item)
                    ? "border-[#4F8DC9] bg-[#F8FBFF]"
                    : "border-slate-200 hover:border-[#4F8DC9]"
                }
              `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={planningTasks.includes(item)}
                          onChange={() => togglePlanningTask(item)}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.planningTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.planningTasks}
                  </p>
                )}
              </div>

              {/* Q28 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you currently have a strategic plan?
                </label>

                <FormSelect
                  value={existingPlan}
                  onChange={setExistingPlan}
                  placeholder="Please select..."
                  options={[
                    "Yes — documented and active",
                    "Yes — needs updating",
                    "Partially documented",
                    "No strategic plan exists",
                  ]}
                  error={errors.existingPlan}
                />

                {errors.existingPlan && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.existingPlan}
                  </p>
                )}
              </div>

              {/* Q29 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Who will use this strategic plan?
                </label>

                <textarea
                  rows={4}
                  value={planningAudience}
                  onChange={(e) => setPlanningAudience(e.target.value)}
                  placeholder="Founder, leadership team, investors, department heads..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.planningAudience
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.planningAudience && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.planningAudience}
                  </p>
                )}
              </div>

              {/* Q30 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Are there any important planning deadlines or milestones?
                </label>

                <textarea
                  rows={4}
                  value={planningDeadlines}
                  onChange={(e) => setPlanningDeadlines(e.target.value)}
                  placeholder="Quarterly goals, investor meetings, expansion deadlines..."
                  className={`
            w-full
            rounded-2xl
            border
            p-5
            resize-none
            outline-none

            ${
              errors.planningDeadlines
                ? "border-red-500 bg-red-50"
                : "border-slate-200"
            }
          `}
                />

                {errors.planningDeadlines && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.planningDeadlines}
                  </p>
                )}
              </div>
            </div>
          </FormSection>
        )}

        {/* Readiness & Resource */}
        <FormSection
          eyebrow="Readiness & Resources"
          title="Expansion Readiness"
          description="Help us understand how prepared your business is for expansion."
        >
          <div className="space-y-12">
            {/* Q31 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                How prepared do you feel for expansion today?
              </label>

              <FormSelect
                value={readinessLevel}
                onChange={setReadinessLevel}
                placeholder="Please select..."
                options={[
                  "Very Prepared",
                  "Somewhat Prepared",
                  "Need Guidance",
                  "Just Exploring Options",
                ]}
                error={errors.readinessLevel}
              />

              {errors.readinessLevel && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.readinessLevel}
                </p>
              )}
            </div>

            {/* Q32 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What internal resources are available to support expansion?
              </label>

              <textarea
                rows={5}
                value={internalResources}
                onChange={(e) => setInternalResources(e.target.value)}
                placeholder="Team members, budget, systems, partners..."
                className={`
          w-full
          rounded-2xl
          border
          p-5
          resize-none
          outline-none

          ${
            errors.internalResources
              ? "border-red-500 bg-red-50"
              : "border-slate-200"
          }
        `}
              />

              {errors.internalResources && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.internalResources}
                </p>
              )}
            </div>

            {/* Q33 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What is your biggest concern about expansion?
              </label>

              <textarea
                rows={5}
                value={biggestConcern}
                onChange={(e) => setBiggestConcern(e.target.value)}
                placeholder="Budget, hiring, competition, compliance, execution..."
                className={`
          w-full
          rounded-2xl
          border
          p-5
          resize-none
          outline-none

          ${
            errors.biggestConcern
              ? "border-red-500 bg-red-50"
              : "border-slate-200"
          }
        `}
              />

              {errors.biggestConcern && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.biggestConcern}
                </p>
              )}
            </div>
          </div>
        </FormSection>

        {/* Engagement Preference */}
        <FormSection
          eyebrow="Engagement Preferences"
          title="How Would You Like To Work Together?"
          description="Help us understand your preferred engagement model and timing."
        >
          <div className="space-y-12">
            {/* Q34 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What type of engagement are you looking for?
              </label>

              <FormSelect
                value={engagementType}
                onChange={setEngagementType}
                placeholder="Please select..."
                options={[
                  "One-Time Project",
                  "Ongoing Monthly Support",
                  "Project-Based Retainer",
                  "Not Sure Yet",
                ]}
                error={errors.engagementType}
              />

              {errors.engagementType && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.engagementType}
                </p>
              )}
            </div>

            {/* Q35 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                When would you like to get started?
              </label>

              <FormSelect
                value={startTimeline}
                onChange={setStartTimeline}
                placeholder="Please select..."
                options={[
                  "Immediately",
                  "Within 30 Days",
                  "1-3 Months",
                  "Just Exploring",
                ]}
                error={errors.startTimeline}
              />

              {errors.startTimeline && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.startTimeline}
                </p>
              )}
            </div>

            {/* Q36 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                Any special requests or considerations?
              </label>

              <textarea
                rows={5}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Preferred communication style, deadlines, timezone requirements..."
                className="
          w-full
          rounded-2xl
          border
          border-slate-200
          p-5
          resize-none
          outline-none
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
                What is the #1 outcome you want from this engagement?
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                e.g. Enter a new market, launch a new product, secure strategic
                partnerships, increase revenue through expansion...
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

            {/* Q38 */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                Where would you like your business to be in the next 12–24
                months?
              </label>

              <textarea
                rows={5}
                value={futureVision}
                onChange={(e) => setFutureVision(e.target.value)}
                placeholder="Describe your growth goals, expansion plans, revenue targets, team growth, market presence..."
                className={`
      w-full
      rounded-2xl
      border
      p-5
      resize-none
      outline-none

      ${errors.futureVision ? "border-red-500 bg-red-50" : "border-slate-200"}
    `}
              />

              {errors.futureVision && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.futureVision}
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
                What has stopped you from moving forward on expansion already?
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                e.g. Limited resources, lack of market knowledge, difficulty
                finding partners, uncertainty about expansion strategy...
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
              STAFF United — Future Expansion
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

          {hasAttemptedSubmit && Object.keys(errors).length > 0 && (
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
                : "Submit Future Expansion Request"}
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
