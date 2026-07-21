import { SERVICE_MAP } from "@/data/choose-services/service-map";
import ServiceQuestionSection from "./ServiceQuestionSection";
import { useState } from "react";
import ContactInformationSection from "./ContactInformationSection";
import BusinessProfileSection from "./BusinessProfileSection";
import EngagementSection from "./EngagementSection";
import ProjectGoalsSection from "./ProjectGoalsSection";
import PrivacyConsentSection from "./PrivacyConsentSection";
import SubmitSection from "./SubmitSection";
import { validateQuoteForm } from "@/lib/validation/quote-form";
import { ServiceResponse } from "@/types/choose-services";
import { supabase } from "@/lib/supabase";

interface DynamicServiceSectionProps {
  selectedServices: string[];
}

export default function DynamicServiceSection({
  selectedServices,
}: DynamicServiceSectionProps) {
  const [contactInformation, setContactInformation] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    phone: "",
  });
  const [businessProfile, setBusinessProfile] = useState({
    industry: "",
    otherIndustry: "",
    teamSize: "",
  });
  const [engagement, setEngagement] = useState({
    engagementType: "",
    startTimeline: "",
  });
  const [projectGoals, setProjectGoals] = useState({
    primaryGoal: "",
    additionalInformation: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serviceResponses, setServiceResponses] = useState<
    Record<string, ServiceResponse>
  >({});
  const [goalVoiceRecording, setGoalVoiceRecording] = useState<{
    blob: Blob;
    previewUrl: string;
  } | null>(null);

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");

  const uploadVoiceNote = async (blob: Blob) => {
    const fileName = `${Date.now()}.webm`;

    const { error } = await supabase.storage
      .from("candidate-files")
      .upload(`quote-voice/${fileName}`, blob);

    if (error) {
      console.error("SUPABASE QUOTE VOICE ERROR:", error);
      throw error;
    }

    const { data } = supabase.storage
      .from("candidate-files")
      .getPublicUrl(`quote-voice/${fileName}`);

    return data.publicUrl;
  };

  const uploadAllVoiceNotes = async (
    responses: Record<string, ServiceResponse>,
  ) => {
    const cloned: Record<string, ServiceResponse> = JSON.parse(
      JSON.stringify(responses, (key, value) =>
        key === "voice" ? undefined : value,
      ),
    );

    for (const serviceId of Object.keys(responses)) {
      const categories = responses[serviceId].categories;

      for (const categoryId of Object.keys(categories)) {
        const category = categories[categoryId];

        if (category.voice?.blob) {
          const url = await uploadVoiceNote(category.voice.blob);

          cloned[serviceId].categories[categoryId] = {
            ...cloned[serviceId].categories[categoryId],
            voice: { url },
          };
        }
      }
    }

    return cloned;
  };

  const updateContactInformation = (field: string, value: string) => {
    setContactInformation((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const updateBusinessProfile = (field: string, value: string) => {
    setBusinessProfile((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const updateEngagement = (field: string, value: string) => {
    setEngagement((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const updateProjectGoals = (field: string, value: string) => {
    setProjectGoals((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  const handleSubmit = async () => {
    const validation = validateQuoteForm({
      contactInformation,
      businessProfile,
      selectedServices,
      engagement,
      projectGoals,
      // acceptedPrivacy,
    });

    if (!validation.valid) {
      setErrors(validation.errors);

      const firstErrorField = Object.keys(validation.errors)[0];

      const element = document.getElementById(firstErrorField);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => {
          element.focus();
        }, 300);
      }

      return;
    }

    setErrors({});

    // if (!privacyAccepted) {
    //   alert("Please accept the Privacy Policy.");
    //   return;
    // }

    setLoading(true);

    try {
      const uploadedServiceResponses =
        await uploadAllVoiceNotes(serviceResponses);

      let goalVoiceUrl = "";
      if (goalVoiceRecording?.blob) {
        goalVoiceUrl = await uploadVoiceNote(goalVoiceRecording.blob);
      }

      const formData = new FormData();

      formData.append("first_name", contactInformation.firstName);
      formData.append("last_name", contactInformation.lastName);
      formData.append("company_name", contactInformation.companyName);
      formData.append("work_email", contactInformation.workEmail);
      formData.append("phone", contactInformation.phone);

      formData.append("industry", businessProfile.industry);
      formData.append("team_size", businessProfile.teamSize);

      formData.append("engagement_type", engagement.engagementType);
      formData.append("start_timeline", engagement.startTimeline);

      formData.append("primary_goal", projectGoals.primaryGoal);
      formData.append(
        "additional_information",
        projectGoals.additionalInformation || "",
      );

      formData.append("voice_url", goalVoiceUrl);

      formData.append("selected_services", JSON.stringify(selectedServices));

      formData.append(
        "service_details",
        JSON.stringify(uploadedServiceResponses),
      );

      const body = new URLSearchParams();

      formData.forEach((value, key) => {
        body.append(key, String(value));
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzSN5KsE3hBuho7Vz_Mhqm3mfwNqKenMFltwceE9kO6YQaDX_kcjrwY0m-l58MehD-xXw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body,
        },
      );

      const text = await response.text();

      const result = JSON.parse(text);

      if (result.success) {
        setLeadId(result.leadId);
        setSubmitSuccess(true);
      } else {
        alert(result.error || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  console.log("Selected Services:", selectedServices);
  const SERVICE_ORDER = [
    "strategic-operations",
    "targeted-sales",
    "accounting-legal",
    "focused-marketing",
    "future-expansion",
  ];

  return (
    <section className="mt-20">
      {/* <div className="rounded-3xl border border-[#D5E3F2] bg-white p-10 shadow-sm"> */}
      <div className="space-y-8">
        {Object.keys(errors).length > 0 && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14A2 2 0 003.82 21h16.36a2 2 0 001.71-3.14l-8.18-14a2 2 0 00-3.42 0z"
                />
              </svg>

              <div>
                <p className="font-semibold text-red-700">
                  Please review your submission.
                </p>

                <p className="mt-1 text-sm text-red-600">
                  Some required fields are missing or contain invalid
                  information. Please correct the highlighted fields below.
                </p>
              </div>
            </div>
          </div>
        )}

        <ContactInformationSection
          formData={contactInformation}
          errors={errors}
          onChange={updateContactInformation}
        />

        <BusinessProfileSection
          formData={businessProfile}
          errors={errors}
          onChange={updateBusinessProfile}
        />

        {selectedServices.length > 0 && (
          <div className="space-y-8">
            {SERVICE_ORDER.filter((id) => selectedServices.includes(id)).map(
              (serviceId) => {
                const service = SERVICE_MAP[serviceId];
                if (!service) return null;

                return (
                  <ServiceQuestionSection
                    key={service.id}
                    service={service}
                    value={serviceResponses[service.id]}
                    onChange={(response) => {
                      setServiceResponses((prev) => ({
                        ...prev,
                        [service.id]: response,
                      }));
                    }}
                  />
                );
              },
            )}
          </div>
        )}

        <EngagementSection
          formData={engagement}
          errors={errors}
          onChange={updateEngagement}
        />

        <ProjectGoalsSection
          formData={projectGoals}
          errors={errors}
          onChange={updateProjectGoals}
          onVoiceChange={setGoalVoiceRecording}
        />

        {/* <PrivacyConsentSection
          checked={privacyAccepted}
          onChange={setPrivacyAccepted}
        /> */}
        <SubmitSection
          // disabled={!privacyAccepted}
          disabled={false}
          loading={loading}
          onSubmit={handleSubmit}
        />
      </div>

      {submitSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-center text-3xl font-bold text-[#0B4F8C]">
              Thank You!
            </h2>

            <p className="mt-4 text-center text-gray-600">
              Your request has been successfully submitted.
            </p>

            <div className="mt-6 rounded-xl bg-blue-50 p-4 text-center">
              <p className="text-sm text-gray-500">Lead Reference</p>

              <p className="mt-2 text-xl font-bold text-[#0B4F8C]">{leadId}</p>
            </div>

            <p className="mt-6 text-center text-gray-600">
              A confirmation email will be sent shortly.
            </p>

            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-8 w-full rounded-xl bg-[#0B4F8C] py-3 font-semibold text-white hover:bg-[#083a67]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
