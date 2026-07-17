import { ServiceDefinition } from "@/types/choose-services";

export const accountingLegal: ServiceDefinition = {
  id: "accounting-legal",

  title: "Accounting & Legal",

  subtitle: "Bookkeeping, compliance & admin",

  question: "Which support areas?",

  categories: [
    {
      id: "bookkeeping",
      title: "Bookkeeping",
    },
    {
      id: "financial-reporting",
      title: "Financial Reporting",
    },
    {
      id: "billing-payroll",
      title: "Billing & Payroll",
    },
    {
      id: "tax-audit",
      title: "Tax & Audit",
    },
    {
      id: "legal-compliance",
      title: "Legal & Compliance",
    },
    {
      id: "all",
      title: "All Accounting & Legal Services",
    },
  ],

  secondQuestion: {
    title: "Current bookkeeping method?",

    options: [
      {
        id: "spreadsheets",
        title: "Spreadsheets",
      },
      {
        id: "accounting-software",
        title: "Accounting software",
      },
      {
        id: "no-system",
        title: "No system yet",
      },
      {
        id: "not-sure",
        title: "Not sure",

        showAdditionalQuestion: true,

        additionalTitle: "Tell us more about your current bookkeeping process",

        additionalPlaceholder:
          "Share any additional details about how you currently manage your bookkeeping.",

        allowVoice: true,
      },
    ],
  },
};
