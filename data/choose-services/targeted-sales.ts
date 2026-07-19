import { ServiceDefinition } from "@/types/choose-services";

export const targetedSales: ServiceDefinition = {
  id: "targeted-sales",

  title: "Targeted Sales",

  subtitle: "Lead generation, outreach & sales support",

  question: "What sales support do you need?",

  categories: [
    {
      id: "lead-management",
      title: "Lead Management",
      description: "Organizing and qualifying the leads you already have",

      tasks: [
        {
          id: "lead-list-organization",
          title: "Lead List Organization",
        },
        {
          id: "lead-qualification-support",
          title: "Lead Qualification Support",
        },
        {
          id: "crm-lead-entry",
          title: "CRM Lead Entry",
        },
        {
          id: "lead-tagging-and-segmentation",
          title: "Lead Tagging and Segmentation",
        },
        {
          id: "prospect-research",
          title: "Prospect Research",
        },
        {
          id: "contact-information-verification",
          title: "Contact Information Verification",
        },
        {
          id: "pipeline-data-cleanup",
          title: "Pipeline Data Cleanup",
        },
      ],

      question: {
        title: "New leads per month",
        type: "select",
        options: [
          "Please select",
          "Fewer than 20",
          "20-50",
          "50-150",
          "150-500",
          "500+",
        ],
      },
    },

    {
      id: "sales-outreach-support",
      title: "Sales Outreach Support",
      description: "Reaching out to prospects by email, LinkedIn, or phone",

      tasks: [
        {
          id: "email-outreach-support",
          title: "Email Outreach Support",
        },
        {
          id: "linkedin-outreach-support",
          title: "LinkedIn Outreach Support",
        },
        {
          id: "follow-up-message-preparation",
          title: "Follow-up Message Preparation",
        },
        {
          id: "sales-sequence-support",
          title: "Sales Sequence Support",
        },
        {
          id: "appointment-setting-support",
          title: "Appointment-Setting Support",
        },
        {
          id: "cold-outreach-administration",
          title: "Cold Outreach Administration",
        },
        {
          id: "call-list-preparation",
          title: "Call List Preparation",
        },
      ],

      question: {
        title: "Outreach contacts targeted per week",
        type: "select",
        options: [
          "Please select",
          "Fewer than 10",
          "10-30",
          "30-100",
          "100-300",
          "300+",
        ],
      },
    },

    {
      id: "crm-pipeline-support",
      title: "CRM & Pipeline Support",
      description: "Setting up and maintaining your sales tracking system",

      tasks: [
        {
          id: "crm-setup-support",
          title: "CRM Setup Support",
        },
        {
          id: "crm-updates",
          title: "CRM Updates",
        },
        {
          id: "pipeline-tracking",
          title: "Pipeline Tracking",
        },
        {
          id: "deal-stage-updates",
          title: "Deal Stage Updates",
        },
        {
          id: "follow-up-reminders",
          title: "Follow-up Reminders",
        },
        {
          id: "sales-activity-reporting",
          title: "Sales Activity Reporting",
        },
        {
          id: "opportunity-tracking",
          title: "Opportunity Tracking",
        },
        {
          id: "lost-lead-tracking",
          title: "Lost Lead Tracking",
        },
        {
          id: "crm-hygiene-support",
          title: "CRM Hygiene Support",
        },
      ],

      question: {
        title: "Open deals/opportunities in pipeline",
        type: "select",
        options: [
          "Please select",
          "Fewer than 10",
          "10-30",
          "30-75",
          "75-150",
          "150+",
        ],
      },
    },

    {
      id: "proposal-quote-support",
      title: "Proposal & Quote Support",
      description: "Preparing and formatting proposals, quotes, and contracts",

      tasks: [
        {
          id: "proposal-preparation-support",
          title: "Proposal Preparation Support",
        },
        {
          id: "quote-formatting",
          title: "Quote Formatting",
        },
        {
          id: "sales-deck-organization",
          title: "Sales Deck Organization",
        },
        {
          id: "client-presentation-support",
          title: "Client Presentation Support",
        },
        {
          id: "contract-handoff-coordination",
          title: "Contract Handoff Coordination",
        },
        {
          id: "sales-document-management",
          title: "Sales Document Management",
        },
      ],

      question: {
        title: "Proposals/quotes sent per month",
        type: "select",
        options: ["Please select", "Fewer than 5", "5-15", "15-30", "30+"],
      },
    },

    {
      id: "client-relationship-support",
      title: "Client Relationship Support",
      description: "Staying on top of follow-ups and renewals with clients",

      tasks: [
        {
          id: "follow-up-scheduling",
          title: "Follow-up Scheduling",
        },
        {
          id: "client-check-in-coordination",
          title: "Client Check-in Coordination",
        },
        {
          id: "renewal-reminder-tracking",
          title: "Renewal Reminder Tracking",
        },
        {
          id: "upsell-cross-sell-opportunity-tracking",
          title: "Upsell & Cross-sell Opportunity Tracking",
        },
        {
          id: "customer-account-notes",
          title: "Customer Account Notes",
        },
        {
          id: "sales-meeting-preparation",
          title: "Sales Meeting Preparation",
        },
      ],

      question: {
        title: "Active client accounts managed",
        type: "select",
        options: [
          "Please select",
          "Fewer than 10",
          "10-30",
          "30-75",
          "75-200",
          "200+",
        ],
      },
    },

    {
      id: "sales-reporting",
      title: "Sales Reporting",
      description: "Turning your sales activity into clear reports",

      tasks: [
        {
          id: "weekly-sales-activity-reports",
          title: "Weekly Sales Activity Reports",
        },
        {
          id: "pipeline-reports",
          title: "Pipeline Reports",
        },
        {
          id: "lead-source-reports",
          title: "Lead Source Reports",
        },
        {
          id: "conversion-tracking",
          title: "Conversion Tracking",
        },
        {
          id: "outreach-performance-reports",
          title: "Outreach Performance Reports",
        },
        {
          id: "crm-hygiene-reports",
          title: "CRM Hygiene Reports",
        },
      ],

      question: {
        title: "How are sales reports currently produced?",
        type: "select",
        options: [
          "Please select",
          "Not being produced at all",
          "Manually — very time consuming",
          "Partially automated",
          "Already automated — just need review",
        ],
      },
    },

    {
      id: "not-sure-yet",
      title: "Not Sure Yet",

      description:
        "Not sure which service fits? Tell us about your business goals and challenges, and we'll recommend the best solution.",

      isNotSure: true,

      placeholder:
        "Describe your business, current challenges, or the type of support you're looking for...",

      allowVoice: true,

      allowFileUpload: false,

      allowAiSuggestion: true,
    },

    
  ],

  // secondQuestion: {
  //   title: "Do you currently use a CRM system?",
  //   options: [
  //     {
  //       id: "yes",
  //       title: "Yes",
  //     },
  //     {
  //       id: "no",
  //       title: "No",
  //     },
  //     {
  //       id: "not-sure",
  //       title: "Not sure",
  //     },
  //   ],

  //   additionalQuestion: {
  //     enabled: true,

  //     title: "Tell us more about your current sales process",

  //     placeholder:
  //       "Share any additional details that will help us understand your current setup.",

  //     allowVoice: true,
  //   },
  // },
};
