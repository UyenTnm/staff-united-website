import { ServiceDefinition } from "@/types/choose-services";

export const futureExpansion: ServiceDefinition = {
  id: "future-expansion",

  title: "Future Expansion",

  subtitle: "New market entry and growth planning",

  question: "Which areas?",

  categories: [
    {
      id: "market-expansion-support",
      title: "Market Expansion Support",
      description: "Researching a new city, country, or market to enter",

      tasks: [
        { id: "country-or-city-research", title: "Country/City Research" },
        { id: "competitor-mapping", title: "Competitor Mapping (New Market)" },
        {
          id: "market-entry-research",
          title: "Market Entry Strategy Research",
        },
        { id: "pricing-research", title: "Local Pricing Research" },
        {
          id: "expansion-opportunity-reports",
          title: "Market Opportunity Summary Report",
        },
      ],

      question: {
        title: "How developed is your expansion plan?",
        type: "select",
        options: [
          "Just an idea — no research done yet",
          "Early research — exploring options",
          "Plan in progress — need support to complete",
          "Plan ready — need execution support",
        ],
      },
    },

    {
      id: "partnership-vendor-research",
      title: "Partnership & Vendor Research",
      description:
        "Finding and comparing potential partners, vendors, or suppliers",

      tasks: [
        {
          id: "potential-partner-research",
          title: "Potential Partner Identification",
        },
        { id: "vendor-sourcing", title: "Vendor Sourcing" },
        { id: "distributor-research", title: "Distributor Research" },
        {
          id: "strategic-contact-list-building",
          title: "Strategic Contact List Building",
        },
        {
          id: "partnership-outreach-preparation",
          title: "Partnership Outreach Preparation (Intro Messages, Materials)",
        },
        {
          id: "vendor-comparison-reports",
          title: "Vendor/Partner Comparison Report",
        },
      ],

      question: {
        title: "Partners/vendors to research",
        type: "select",
        options: ["5-10", "10-25", "25-50", "50-100", "100+"],
      },
    },

    {
      id: "new-product-service-launch-support",
      title: "New Product or Service Launch Support",
      description: "Planning and organizing the launch of something new",

      tasks: [
        { id: "launch-checklist-support", title: "Launch Checklist Support" },
        {
          id: "product-service-positioning-research",
          title: "Product/Service Positioning Research",
        },
        {
          id: "competitive-analysis",
          title: "Competitive Analysis (Launch-Specific)",
        },
        { id: "rollout-planning-support", title: "Rollout Planning Support" },
        {
          id: "launch-timeline-coordination",
          title: "Launch Timeline Coordination",
        },
        {
          id: "launch-documentation-support",
          title: "Launch Documentation Support (Briefs, Runbooks)",
        },
      ],

      question: {
        title: "Planned launch timeline",
        type: "select",
        options: [
          "Within 1 month",
          "1-3 months",
          "3-6 months",
          "6-12 months",
          "Not yet defined",
        ],
      },
    },

    {
      id: "business-development-research",
      title: "Business Development Research",
      description: "Researching new opportunities, leads, or funding sources",

      tasks: [
        {
          id: "industry-opportunity-research",
          title: "Industry Opportunity Research",
        },
        { id: "target-account-research", title: "Target Account Research" },
        {
          id: "investor-grant-research-support",
          title: "Investor & Grant Research Support",
        },
        {
          id: "franchise-licensing-research",
          title: "Franchise and Licensing Research",
        },
        {
          id: "event-conference-opportunity-research",
          title: "Event and Conference Opportunity Research",
        },
      ],

      question: {
        title: "Seeking investment or external funding?",
        type: "select",
        options: [
          "Yes — actively seeking now",
          "Yes — planning to in next 6 months",
          "Possibly — still evaluating",
          "No — bootstrapped/self-funded",
        ],
      },
    },

    {
      id: "expansion-project-coordination",
      title: "Expansion Project Coordination",
      description: "Keeping expansion projects on track and organized",

      tasks: [
        { id: "expansion-task-tracking", title: "Expansion Task Tracking" },
        { id: "milestone-tracking", title: "Milestone Tracking" },
        { id: "project-documentation", title: "Project Status Documentation" },
        {
          id: "cross-border-coordination-support",
          title: "Cross-border Coordination Support",
        },
        { id: "partner-follow-up", title: "Partner Follow-up & Communication" },
        {
          id: "expansion-file-organization",
          title: "Expansion File Organization",
        },
      ],

      question: {
        title: "Active expansion projects right now",
        type: "select",
        options: [
          "None yet — planning phase",
          "1 initiative",
          "2-3 initiatives",
          "4+ initiatives",
        ],
      },
    },

    {
      id: "strategic-planning-support",
      title: "Strategic Planning Support",
      description: "Research and documents to support your business planning",

      tasks: [
        { id: "business-plan-support", title: "Business Plan Support" },
        { id: "feasibility-study-support", title: "Feasibility Study Support" },
        { id: "swot-research-support", title: "SWOT Research Support" },
        {
          id: "opportunity-assessment-support",
          title: "Opportunity Assessment Support",
        },
        {
          id: "presentation-deck-support",
          title: "Board/Investor Presentation Deck Support",
        },
      ],

      question: {
        title: "Existing business plan or growth document?",
        type: "select",
        options: [
          "No — starting from scratch",
          "Basic notes/ideas only",
          "Draft exists — needs development",
          "Yes — complete and current",
          "Yes — but outdated",
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
};
