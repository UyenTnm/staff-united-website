import { ServiceDefinition } from "@/types/choose-services";

export const targetedSales: ServiceDefinition = {
  id: "targeted-sales",

  title: "Targeted Sales",

  subtitle: "Lead generation, outreach & sales support",

  question: "What sales support do you need?",

  categories: [
    {
      id: "lead-generation",
      title: "Lead Generation",
    },
    {
      id: "outreach-campaigns",
      title: "Outreach Campaigns",
    },
    {
      id: "crm-pipeline-management",
      title: "CRM & Pipeline Management",
    },
    {
      id: "sales-enablement",
      title: "Sales Enablement",
    },
    {
      id: "all",
      title: "All Targeted Sales Services",
    },
  ],

  secondQuestion: {
    title: "Do you currently use a CRM system?",
    options: [
      {
        id: "yes",
        title: "Yes",
      },
      {
        id: "no",
        title: "No",
      },
      {
        id: "not-sure",
        title: "Not sure",
      },
    ],

    additionalQuestion: {
      enabled: true,

      title: "Tell us more about your current sales process",

      placeholder:
        "Share any additional details that will help us understand your current setup.",

      allowVoice: true,
    },
  },
};
