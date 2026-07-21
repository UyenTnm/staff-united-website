import { ServiceDefinition } from "@/types/choose-services";

export const focusedMarketing: ServiceDefinition = {
  id: "focused-marketing",

  title: "Focused Marketing",

  subtitle: "Content, brand & social execution",

  question: "Which areas?",

  categories: [
    {
      id: "content-support",
      title: "Content Support",
      description: "Writing, video, and preparing posts, blogs & other content",

      tasks: [
        {
          id: "social-media-post-drafting",
          title: "Social Media Post Drafting",
        },
        { id: "blog-content-support", title: "Blog Content Support" },
        { id: "newsletter-support", title: "Newsletter Support" },
        { id: "content-calendar-support", title: "Content Calendar Support" },
        {
          id: "content-repurposing",
          title: "Repurposing Long-Form Text into Posts",
        },
        {
          id: "basic-copywriting-support",
          title: "Basic Copywriting Support (Ads, Emails, Web Snippets)",
        },
        { id: "website-content-updates", title: "Website Content Updates" },
        { id: "video-editing-support", title: "General Video Editing Support" },
        {
          id: "short-form-video-content",
          title: "Short-Form Video Content (Reels/TikTok)",
        },
        {
          id: "video-repurposing",
          title: "Repurposing Long-Form Video into Clips",
        },
      ],

      question: {
        title: "Pieces of content needed per week",
        type: "select",
        options: ["1-3 pieces", "4-7 pieces", "8-15 pieces", "15+ pieces"],
      },
    },

    {
      id: "social-media-management-support",
      title: "Social Media Management Support",
      description: "Scheduling posts and keeping up with comments and messages",

      tasks: [
        { id: "post-scheduling", title: "Post Scheduling" },
        {
          id: "community-engagement-support",
          title: "Community Engagement & Reply Support",
        },

        {
          id: "social-inbox-organization",
          title: "Social Inbox Organization & Routing",
        },
        { id: "hashtag-research", title: "Hashtag & Keyword Research" },
        {
          id: "competitor-content-monitoring",
          title: "Competitor Content Monitoring",
        },
      ],

      question: {
        title: "Posts per week across all platforms",
        type: "select",
        options: [
          "1-3 posts/week",
          "4-7 posts/week",
          "8-14 posts/week",
          "14+ posts/week",
        ],
      },
    },

    {
      id: "campaign-support",
      title: "Campaign Support",
      description: "Coordinating the moving pieces of a marketing campaign",

      tasks: [
        {
          id: "email-campaign-setup-support",
          title: "Email Campaign Setup Support",
        },

        {
          id: "marketing-task-coordination",
          title: "Cross-Channel Campaign Task Coordination",
        },
        {
          id: "landing-page-content-support",
          title: "Landing Page Content Support",
        },
        {
          id: "campaign-asset-organization",
          title: "Campaign Asset Organization",
        },
        { id: "promotion-tracking", title: "Promotion & Offer Tracking" },
        {
          id: "lead-magnet-support",
          title: "Lead Magnet Support (Setup & Delivery)",
        },
      ],

      question: {
        title: "Marketing campaigns run per month",
        type: "select",
        options: [
          "None currently",
          "1-2 campaigns",
          "3-5 campaigns",
          "5+ campaigns",
        ],
      },
    },

    {
      id: "brand-creative-support",
      title: "Brand & Creative Support",
      description: "Designs, templates, and visual assets for your brand",

      tasks: [
        {
          id: "presentation-design-support",
          title: "Presentation Design Support",
        },
        { id: "brand-asset-organization", title: "Brand Asset Organization" },
        {
          id: "template-creation",
          title: "Reusable Template Creation (Social, Docs, Slides)",
        },
        { id: "simple-graphics", title: "One-Off Graphics & Social Visuals" },

        { id: "pitch-deck-support", title: "Pitch Deck Support" },
        {
          id: "brochure-and-flyer-formatting",
          title: "Brochure and Flyer Formatting",
        },
        {
          id: "video-filming",
          title: "Video Filming (Vietnam-based)",
        },
      ],

      question: {
        title: "Established brand identity?",
        type: "select",
        options: [
          "No — brand is not defined yet",
          "Basic — logo only, no guidelines",
          "Partial — some assets but inconsistent",
          "Yes — full brand guidelines exist",
        ],
      },
    },

    {
      id: "market-competitor-research",
      title: "Market & Competitor Research",
      description: "Researching your market, competitors, and customers",

      tasks: [
        { id: "competitor-research", title: "Competitor Profile Research" },
        { id: "market-trend-research", title: "Market Trend Research" },
        { id: "customer-persona-research", title: "Customer Persona Research" },
        { id: "content-idea-research", title: "Content Idea & Topic Research" },
        {
          id: "industry-research-summaries",
          title: "Industry Research Summaries",
        },
      ],

      question: {
        title: "Competitors to monitor/research",
        type: "select",
        options: [
          "1-3 competitors",
          "4-7 competitors",
          "8-15 competitors",
          "15+ competitors",
        ],
      },
    },

    {
      id: "marketing-reporting",
      title: "Marketing Reporting",
      description: "Turning your marketing data into clear performance reports",

      tasks: [
        {
          id: "social-media-performance-reporting",
          title: "Social Media Performance Reporting",
        },
        {
          id: "campaign-performance-reports",
          title: "Campaign Performance Reports",
        },
        {
          id: "website-traffic-report-support",
          title: "Website Traffic Report Support",
        },
        {
          id: "email-marketing-report-support",
          title: "Email Marketing Report Support",
        },
        {
          id: "content-performance-tracking",
          title: "Content Performance Tracking",
        },
        {
          id: "monthly-marketing-summary-reports",
          title: "Monthly Marketing Summary Reports",
        },
      ],

      question: {
        title: "How are marketing results currently tracked?",
        type: "select",
        options: [
          "Not being tracked at all",
          "Manually — very time consuming",
          "Partially — some platforms tracked",
          "Fully tracked — just need presentation",
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
