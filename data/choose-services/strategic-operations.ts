import { ServiceDefinition } from "@/types/choose-services";

export const strategicOperations: ServiceDefinition = {
  id: "strategic-operations",

  title: "Strategic Operations",

  subtitle: "Admin, HR & day-to-day processes",
  question: "Which areas do you need?",
  categories: [
    {
      id: "administrative-support",

      title: "Administrative Support",
    },

    {
      id: "business-operations-support",

      title: "Business Operations Support",
    },

    {
      id: "sop-process-support",

      title: "SOP & Process Support",
    },

    {
      id: "hr-administration-support",

      title: "HR Administration Support",
    },

    {
      id: "all",
      title: "All Strategic Operations Services",
    },
  ],
  secondQuestion: {
    title: "Do you have dedicated ops/admin staff?",
    options: [
      {
        id: "dedicated",
        title: "Yes, we have a dedicated team",
      },
      {
        id: "part-time",
        title: "Yes, part-time",
      },
      {
        id: "partial",
        title: "Partially",
      },
      {
        id: "adhoc",
        title: "No, we handle ad hoc",
      },
      {
        id: "none",
        title: "No staff at all",
      },
    ],
  },
};
