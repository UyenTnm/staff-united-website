import { ServiceDefinition } from "@/types/choose-services";

export const focusedMarketing: ServiceDefinition = {
  id: "focused-marketing",

  title: "Focused Marketing",

  subtitle: "Content, brand & social execution",

  question: "Which areas?",

  categories: [
    {
      id: "content-creation",
      title: "Content Creation",
    },
    {
      id: "social-media-management",
      title: "Social Media Management",
    },
    {
      id: "brand-strategy",
      title: "Brand Strategy",
    },
    {
      id: "paid-campaigns",
      title: "Paid Campaigns",
    },
    {
      id: "all",
      title: "All Focused Marketing Services",
    },
  ],

  secondQuestion: {
    title: "Current marketing presence?",

    options: [
      {
        id: "none-yet",
        title: "None yet",
      },
      {
        id: "basic-presence",
        title: "Basic presence",
      },
      {
        id: "active-inconsistent",
        title: "Active but inconsistent",
      },
      {
        id: "established",
        title: "Established",
      },
    ],
  },
};
