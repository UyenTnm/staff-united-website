import { SERVICE_MAP } from "@/data/choose-services/service-map";
import ServiceQuestionSection from "./ServiceQuestionSection";
import { useState } from "react";
import ContactInformationSection from "./ContactInformationSection";
import BusinessProfileSection from "./BusinessProfileSection";
import EngagementSection from "./EngagementSection";
import ProjectGoalsSection from "./ProjectGoalsSection";
import PrivacyConsentSection from "./PrivacyConsentSection";
import SubmitSection from "./SubmitSection";

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

  const updateContactInformation = (field: string, value: string) => {
    setContactInformation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateBusinessProfile = (field: string, value: string) => {
    setBusinessProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateEngagement = (field: string, value: string) => {
    setEngagement((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const updateProjectGoals = (field: string, value: string) => {
    setProjectGoals((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!privacyAccepted) {
      alert("Please accept the Privacy Policy.");
      return;
    }

    setLoading(true);

    try {
      console.log("Ready to submit...");
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

  // if (selectedServices.length === 0) {
  //   return null;
  // }

  return (
    <section className="mt-20">
      <div className="rounded-3xl border border-[#D5E3F2] bg-white p-10 shadow-sm">
        <ContactInformationSection
          formData={contactInformation}
          onChange={updateContactInformation}
        />

        <BusinessProfileSection
          formData={businessProfile}
          onChange={updateBusinessProfile}
        />

        {selectedServices.length > 0 && (
          <div className="space-y-8">
            {SERVICE_ORDER.filter((id) => selectedServices.includes(id)).map(
              (serviceId) => {
                const service = SERVICE_MAP[serviceId];
                if (!service) return null;

                return (
                  <ServiceQuestionSection key={service.id} service={service} />
                );
              },
            )}
          </div>
        )}

        <EngagementSection formData={engagement} onChange={updateEngagement} />
        <ProjectGoalsSection
          formData={projectGoals}
          onChange={updateProjectGoals}
        />

        <PrivacyConsentSection
          checked={privacyAccepted}
          onChange={setPrivacyAccepted}
        />
        <SubmitSection
          disabled={!privacyAccepted}
          loading={loading}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
