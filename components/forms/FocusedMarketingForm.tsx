"use client";

import { useState } from "react";
import FormSection from "./FormSection";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function FocusedMarketingForm() {
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
  const [marketingPresence, setMarketingPresence] = useState("");
  const [marketingTeam, setMarketingTeam] = useState("");
  const [marketingTools, setMarketingTools] = useState("");
  const [contentTasks, setContentTasks] = useState<string[]>([]);
  const [contentVolume, setContentVolume] = useState("");
  const [contentCalendar, setContentCalendar] = useState("");
  const [brandVoice, setBrandVoice] = useState("");
  const [socialPlatforms, setSocialPlatforms] = useState<string[]>([]);
  const [socialTasks, setSocialTasks] = useState<string[]>([]);
  const [socialPostVolume, setSocialPostVolume] = useState("");
  const [socialActivity, setSocialActivity] = useState("");
  const [campaignTasks, setCampaignTasks] = useState<string[]>([]);
  const [campaignVolume, setCampaignVolume] = useState("");
  const [campaignTypes, setCampaignTypes] = useState<string[]>([]);
  const [creativeTasks, setCreativeTasks] = useState<string[]>([]);
  const [brandIdentity, setBrandIdentity] = useState("");
  const [designTools, setDesignTools] = useState<string[]>([]);
  const [researchTasks, setResearchTasks] = useState<string[]>([]);
  const [audienceDefinition, setAudienceDefinition] = useState("");
  const [competitorVolume, setCompetitorVolume] = useState("");
  const [reportingTasks, setReportingTasks] = useState<string[]>([]);
  const [trackingStatus, setTrackingStatus] = useState("");
  const [reportRecipients, setReportRecipients] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    "Content Support",
    "Social Media Management Support",
    "Campaign Support",
    "Brand & Creative Support",
    "Market & Competitor Research",
    "Marketing Reporting",
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

    if (serviceAreas.includes("Content Support") && contentTasks.length === 0) {
      newErrors.contentTasks =
        "Please select at least one content support task";
    }

    if (serviceAreas.includes("Content Support") && !contentVolume) {
      newErrors.contentVolume = "Please select content volume";
    }

    if (
      serviceAreas.includes("Social Media Management Support") &&
      socialPlatforms.length === 0
    ) {
      newErrors.socialPlatforms = "Please select at least one social platform";
    }

    if (
      serviceAreas.includes("Social Media Management Support") &&
      !socialPostVolume
    ) {
      newErrors.socialPostVolume = "Please select post volume";
    }

    if (
      serviceAreas.includes("Campaign Support") &&
      campaignTasks.length === 0
    ) {
      newErrors.campaignTasks = "Please select at least one campaign task";
    }

    if (serviceAreas.includes("Campaign Support") && !campaignVolume) {
      newErrors.campaignVolume = "Please select campaign volume";
    }

    if (
      serviceAreas.includes("Brand & Creative Support") &&
      creativeTasks.length === 0
    ) {
      newErrors.creativeTasks =
        "Please select at least one creative requirement";
    }

    if (serviceAreas.includes("Brand & Creative Support") && !brandIdentity) {
      newErrors.brandIdentity = "Please select your brand status";
    }

    if (
      serviceAreas.includes("Market & Competitor Research") &&
      researchTasks.length === 0
    ) {
      newErrors.researchTasks =
        "Please select at least one research requirement";
    }

    if (
      serviceAreas.includes("Market & Competitor Research") &&
      !audienceDefinition
    ) {
      newErrors.audienceDefinition = "Please select audience status";
    }

    if (serviceAreas.includes("Marketing Reporting") && !trackingStatus) {
      newErrors.trackingStatus = "Please select tracking status";
    }
    if (
      serviceAreas.includes("Marketing Reporting") &&
      reportingTasks.length === 0
    ) {
      newErrors.reportingTasks =
        "Please select at least one reporting requirement";
    }

    // BUSINESS

    if (!industry) {
      newErrors.industry = "Please select an industry";
    }

    if (industry === "Other" && !otherIndustry.trim()) {
      newErrors.otherIndustry = "Please specify your industry";
    }

    if (!marketingPresence) {
      newErrors.marketingPresence = "Please select your marketing presence";
    }

    if (!marketingTeam) {
      newErrors.marketingTeam = "Please select your marketing team status";
    }

    if (!marketingTools.trim()) {
      newErrors.marketingTools = "Please tell us which marketing tools you use";
    }

    // SERVICES

    if (serviceAreas.length === 0) {
      newErrors.serviceAreas = "Select at least one service";
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

        marketingPresence,
        marketingTeam,
        marketingTools,

        // Service Selection
        serviceAreas,

        // Engagement
        engagementType,
        startTimeline,
        specialRequests,

        contentTasks,
        contentVolume,
        contentCalendar,
        brandVoice,

        socialPlatforms,
        socialTasks,
        socialPostVolume,
        socialActivity,

        campaignTasks,
        campaignVolume,
        campaignTypes,

        creativeTasks,
        brandIdentity,
        designTools,

        researchTasks,
        audienceDefinition,
        competitorVolume,

        reportingTasks,
        trackingStatus,
        reportRecipients,

        // Goals
        desiredOutcome,
        currentChallenges,
        additionalNotes,
      };

      console.log(formData);

      const crmPayload = {
        serviceType: "Focused Marketing",
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      console.log("CRM PAYLOAD", crmPayload);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzQMV0r0lhpYflclEflbenBX0esIe1zsivVRJ_xh5erVJWd8kmEoClIhJWb_W_Ptun1/exec",
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
            Your Focused Marketing request has been received.
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
      id="quote-section service-form"
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
                How would you describe your current marketing presence?
              </label>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Very minimal — little to no presence",
                  "Some presence but inconsistent",
                  "Active but needs more structure",
                  "Strong — just need execution support",
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
            marketingPresence === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : errors.marketingPresence
                ? "border-red-300"
                : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                  >
                    <input
                      type="radio"
                      name="marketingPresence"
                      checked={marketingPresence === item}
                      onChange={() => setMarketingPresence(item)}
                      className="w-4 h-4"
                    />

                    <span className="font-medium text-slate-700">{item}</span>
                  </label>
                ))}
              </div>

              {errors.marketingPresence && (
                <p className="mt-4 text-sm text-red-500">
                  {errors.marketingPresence}
                </p>
              )}
            </div>

            {/* MARKETING TEAM */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                Do you currently have a dedicated marketing person or team?
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "No — founder handles everything",
                  "Part-time / contractor",
                  "Yes, 1 full-time person",
                  "Yes, a marketing team",
                ].map((item) => (
                  <label
                    key={item}
                    className={`
          cursor-pointer
          rounded-2xl
          border
          p-5

          ${
            marketingTeam === item
              ? "border-[#4F8DC9] bg-[#F8FBFF]"
              : "border-slate-200 hover:border-[#4F8DC9]"
          }
        `}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={marketingTeam === item}
                        onChange={() => setMarketingTeam(item)}
                        className="w-4 h-4"
                      />

                      <span>{item}</span>
                    </div>
                  </label>
                ))}
              </div>

              {errors.marketingTeam && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.marketingTeam}
                </p>
              )}
            </div>

            {/* MARKETING TOOLS */}

            <div>
              <label className="block text-lg font-semibold text-[#06172d] mb-5">
                What marketing tools or platforms are you currently using?
              </label>

              <textarea
                rows={5}
                value={marketingTools}
                onChange={(e) => setMarketingTools(e.target.value)}
                placeholder="Mailchimp, HubSpot, Canva, Buffer, Hootsuite, WordPress, Shopify, Meta Ads..."
                className={`
      w-full
      rounded-2xl
      border
      p-5
      resize-none
      outline-none

      ${errors.marketingTools ? "border-red-500 bg-red-50" : "border-slate-200"}
    `}
              />

              {errors.marketingTools && (
                <p className="mt-3 text-sm text-red-500">
                  {errors.marketingTools}
                </p>
              )}
            </div>
          </div>
        </FormSection>

        <FormSection
          eyebrow="Service Requirements"
          title="Which Marketing Support Areas Do You Need?"
          description="Select all areas where you would like support. This helps us understand your requirements and prepare a tailored proposal."
        >
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Select All Services",
                description: "Select all Focused Marketing support services.",
                isSelectAll: true,
              },
              {
                title: "Content Support",
                description:
                  "Content creation, planning and publishing support.",
              },

              {
                title: "Social Media Management Support",
                description:
                  "Scheduling, monitoring and social media coordination.",
              },

              {
                title: "Campaign Support",
                description: "Marketing campaign setup and coordination.",
              },

              {
                title: "Brand & Creative Support",
                description: "Design, branding and creative asset support.",
              },

              {
                title: "Market & Competitor Research",
                description: "Research and market intelligence support.",
              },

              {
                title: "Marketing Reporting",
                description: "Performance reporting and marketing insights.",
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

        {/* CONTENT SUPPORT */}

        {serviceAreas.includes("Content Support") && (
          <FormSection
            eyebrow="Content Support"
            title="Content Requirements"
            description="Tell us about your content support needs."
          >
            <div className="space-y-12">
              {/* QUESTION 6 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What content support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Blog Articles",
                    "Website Content",
                    "Email Content",
                    "Social Media Content",
                    "SEO Content",
                    "Content Planning",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              contentTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={contentTasks.includes(item)}
                          onChange={() => {
                            if (contentTasks.includes(item)) {
                              setContentTasks(
                                contentTasks.filter((task) => task !== item),
                              );
                            } else {
                              setContentTasks([...contentTasks, item]);
                            }
                          }}
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.contentTasks && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.contentTasks}
                  </p>
                )}
              </div>

              {/* QUESTION 7 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How much content do you need per month?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "1-5 pieces",
                    "6-10 pieces",
                    "11-20 pieces",
                    "20+ pieces",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              contentVolume === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <input
                        type="radio"
                        checked={contentVolume === item}
                        onChange={() => setContentVolume(item)}
                      />

                      <span className="ml-3">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 8 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you currently use a content calendar?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Yes — actively maintained",
                    "Yes — but inconsistent",
                    "Planning to create one",
                    "No content calendar",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              contentCalendar === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <input
                        type="radio"
                        checked={contentCalendar === item}
                        onChange={() => setContentCalendar(item)}
                      />

                      <span className="ml-3">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 9 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Describe your brand voice and content style
                </label>

                <textarea
                  rows={5}
                  value={brandVoice}
                  onChange={(e) => setBrandVoice(e.target.value)}
                  placeholder="Professional, conversational, technical, friendly, luxury..."
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
        )}

        {/* SOCIAL MEDIA */}

        {serviceAreas.includes("Social Media Management Support") && (
          <FormSection
            eyebrow="Social Media Support"
            title="Social Media Requirements"
            description="Help us understand your social media management needs."
          >
            <div className="space-y-12">
              {/* QUESTION 10 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which platforms do you need support with?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Facebook",
                    "Instagram",
                    "LinkedIn",
                    "TikTok",
                    "YouTube",
                    "X (Twitter)",
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
              socialPlatforms.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={socialPlatforms.includes(item)}
                          onChange={() => {
                            if (socialPlatforms.includes(item)) {
                              setSocialPlatforms(
                                socialPlatforms.filter((p) => p !== item),
                              );
                            } else {
                              setSocialPlatforms([...socialPlatforms, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {errors.socialPlatforms && (
                  <p className="mt-3 text-sm text-red-500">
                    {errors.socialPlatforms}
                  </p>
                )}
              </div>

              {/* QUESTION 11 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Content Scheduling",
                    "Community Management",
                    "Comment Monitoring",
                    "DM Monitoring",
                    "Content Publishing",
                    "Performance Tracking",
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
              socialTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={socialTasks.includes(item)}
                          onChange={() => {
                            if (socialTasks.includes(item)) {
                              setSocialTasks(
                                socialTasks.filter((p) => p !== item),
                              );
                            } else {
                              setSocialTasks([...socialTasks, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 12 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Approximately how many posts per month do you need?
                </label>

                <div className="grid md:grid-cols-3 gap-4">
                  {["1-10", "11-20", "21-40", "40+"].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              socialPostVolume === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={socialPostVolume === item}
                          onChange={() => setSocialPostVolume(item)}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 13 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Describe your current social media activity
                </label>

                <textarea
                  rows={5}
                  value={socialActivity}
                  onChange={(e) => setSocialActivity(e.target.value)}
                  placeholder="Tell us about your current posting frequency, engagement levels, audience growth, and any challenges..."
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

        {serviceAreas.includes("Campaign Support") && (
          <FormSection
            eyebrow="Campaign Support"
            title="Campaign Requirements"
            description="Help us understand your marketing campaign requirements."
          >
            <div className="space-y-12">
              {/* QUESTION 14 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What type of campaign support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Campaign Planning",
                    "Campaign Setup",
                    "Campaign Coordination",
                    "Email Campaigns",
                    "Lead Generation Campaigns",
                    "Promotional Campaigns",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              campaignTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={campaignTasks.includes(item)}
                          onChange={() => {
                            if (campaignTasks.includes(item)) {
                              setCampaignTasks(
                                campaignTasks.filter((task) => task !== item),
                              );
                            } else {
                              setCampaignTasks([...campaignTasks, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 15 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How many campaigns do you typically run?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "1-2 per month",
                    "3-5 per month",
                    "6-10 per month",
                    "10+ per month",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              campaignVolume === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={campaignVolume === item}
                          onChange={() => setCampaignVolume(item)}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 16 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What campaign types are most important to you?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Email Marketing",
                    "Social Media Campaigns",
                    "Product Launches",
                    "Lead Generation",
                    "Brand Awareness",
                    "Event Promotion",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              campaignTypes.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={campaignTypes.includes(item)}
                          onChange={() => {
                            if (campaignTypes.includes(item)) {
                              setCampaignTypes(
                                campaignTypes.filter((type) => type !== item),
                              );
                            } else {
                              setCampaignTypes([...campaignTypes, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </FormSection>
        )}

        {serviceAreas.includes("Brand & Creative Support") && (
          <FormSection
            eyebrow="Brand & Creative Support"
            title="Brand & Creative Requirements"
            description="Help us understand your branding and creative support needs."
          >
            <div className="space-y-12">
              {/* QUESTION 17 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What creative support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Graphic Design",
                    "Social Media Graphics",
                    "Presentation Design",
                    "Marketing Materials",
                    "Website Graphics",
                    "Brand Assets",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              creativeTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={creativeTasks.includes(item)}
                          onChange={() => {
                            if (creativeTasks.includes(item)) {
                              setCreativeTasks(
                                creativeTasks.filter((task) => task !== item),
                              );
                            } else {
                              setCreativeTasks([...creativeTasks, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 18 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you already have established brand guidelines?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Yes — comprehensive brand guidelines",
                    "Partial brand guidelines",
                    "Basic logo and colors only",
                    "No brand guidelines yet",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              brandIdentity === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={brandIdentity === item}
                          onChange={() => setBrandIdentity(item)}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 19 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Which design tools do you currently use?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Canva",
                    "Adobe Creative Suite",
                    "Figma",
                    "Sketch",
                    "No Design Tools",
                    "Other",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              designTools.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={designTools.includes(item)}
                          onChange={() => {
                            if (designTools.includes(item)) {
                              setDesignTools(
                                designTools.filter((tool) => tool !== item),
                              );
                            } else {
                              setDesignTools([...designTools, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </FormSection>
        )}

        {serviceAreas.includes("Market & Competitor Research") && (
          <FormSection
            eyebrow="Market & Competitor Research"
            title="Research Requirements"
            description="Help us understand your market research and competitor analysis needs."
          >
            <div className="space-y-12">
              {/* QUESTION 20 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What type of research support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Competitor Research",
                    "Industry Research",
                    "Market Trends Analysis",
                    "Customer Research",
                    "Audience Segmentation",
                    "Product Research",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              researchTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={researchTasks.includes(item)}
                          onChange={() => {
                            if (researchTasks.includes(item)) {
                              setResearchTasks(
                                researchTasks.filter((task) => task !== item),
                              );
                            } else {
                              setResearchTasks([...researchTasks, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 21 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you have a clearly defined target audience?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Yes — well defined",
                    "Somewhat defined",
                    "Still developing",
                    "Not defined yet",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              audienceDefinition === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={audienceDefinition === item}
                          onChange={() => setAudienceDefinition(item)}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 22 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  How many competitors would you like analyzed?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "1-3 competitors",
                    "4-6 competitors",
                    "7-10 competitors",
                    "10+ competitors",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              competitorVolume === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={competitorVolume === item}
                          onChange={() => setCompetitorVolume(item)}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </FormSection>
        )}

        {serviceAreas.includes("Marketing Reporting") && (
          <FormSection
            eyebrow="Marketing Reporting"
            title="Reporting Requirements"
            description="Help us understand your reporting and performance tracking needs."
          >
            <div className="space-y-12">
              {/* QUESTION 23 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  What reporting support do you need?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Performance Reporting",
                    "Campaign Reporting",
                    "Executive Dashboards",
                    "KPI Tracking",
                    "Monthly Reports",
                    "Custom Reports",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              reportingTasks.includes(item)
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={reportingTasks.includes(item)}
                          onChange={() => {
                            if (reportingTasks.includes(item)) {
                              setReportingTasks(
                                reportingTasks.filter((task) => task !== item),
                              );
                            } else {
                              setReportingTasks([...reportingTasks, item]);
                            }
                          }}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 24 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Do you currently track marketing performance?
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Yes — consistently",
                    "Sometimes",
                    "Very limited tracking",
                    "No tracking currently",
                  ].map((item) => (
                    <label
                      key={item}
                      className={`
            cursor-pointer
            rounded-2xl
            border
            p-5

            ${
              trackingStatus === item
                ? "border-[#4F8DC9] bg-[#F8FBFF]"
                : "border-slate-200 hover:border-[#4F8DC9]"
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={trackingStatus === item}
                          onChange={() => setTrackingStatus(item)}
                          className="w-4 h-4"
                        />

                        <span>{item}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* QUESTION 25 */}

              <div>
                <label className="block text-lg font-semibold text-[#06172d] mb-5">
                  Who will typically receive the reports?
                </label>

                <textarea
                  rows={4}
                  value={reportRecipients}
                  onChange={(e) => setReportRecipients(e.target.value)}
                  placeholder="Business owner, marketing manager, leadership team, external stakeholders..."
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
                What is the #1 marketing outcome you want from this engagement?
              </label>

              <p
                className="
      text-sm
      italic
      text-slate-500
      mb-4
    "
              >
                Post consistently on social media Launch a newsletter Build
                brand awareness Run a campaign for an upcoming launch
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
                No time to create content No clear strategy Inconsistent posting
                Previous agency didn't deliver
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
              STAFF United — Focused Marketing
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
                : "Submit Focused Marketing Request"}
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
