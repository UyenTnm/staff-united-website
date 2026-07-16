import { ServiceDefinition } from "@/types/choose-services";

export const strategicOperations: ServiceDefinition = {
  id: "strategic-operations",

  title: "Strategic Operations",

  subtitle: "Admin, HR & day-to-day processes",

  categories: [
    {
      id: "administrative-support",

      title: "Administrative Support",

      description: "Day-to-day help like scheduling, email, and files",

      tasks: [
        {
          id: "executive-assistant",
          label: "Executive Assistant Support",
        },
        {
          id: "virtual-assistant",
          label: "Virtual Assistant Support",
        },
        {
          id: "calendar-management",
          label: "Calendar Management",
        },
        {
          id: "email-management",
          label: "Email Inbox Management",
        },
        {
          id: "meeting-scheduling",
          label: "Meeting Scheduling",
        },
        {
          id: "travel-coordination",
          label: "Travel Coordination",
        },
        {
          id: "data-entry",
          label: "Data Entry",
        },
        {
          id: "file-organization",
          label: "File Organization",
        },
        {
          id: "document-formatting",
          label: "Document Formatting",
        },
        {
          id: "internal-communication",
          label: "Internal Communication Support",
        },
      ],

      followUp: {
        label: "Hours per week needed",
        type: "select",
        options: [
          "1–5 hrs/week",
          "5–10 hrs/week",
          "10–20 hrs/week",
          "20+ hrs/week (near full-time)",
        ],
      },
    },

    {
      id: "business-operations-support",

      title: "Business Operations Support",

      description: "Keeping daily operations organized and on track",

      tasks: [],
    },

    {
      id: "sop-process-support",

      title: "SOP & Process Support",

      description: "Turning how you work into clear written processes",

      tasks: [],
    },

    {
      id: "hr-administration-support",

      title: "HR Administration Support",

      description: "Hiring, onboarding, and employee administration",

      tasks: [],
    },

    {
      id: "client-support-administration",

      title: "Client Support Administration",

      description: "Organizing customer requests and onboarding",

      tasks: [],
    },

    {
      id: "not-sure",

      title: "Not Sure Yet",

      description: "Need help deciding the right support.",

      tasks: [],
    },
  ],
};
