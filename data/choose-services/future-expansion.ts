import { ServiceDefinition } from "@/types/choose-services";

export const futureExpansion: ServiceDefinition = {
  id: "future-expansion",

  title: "Future Expansion",

  subtitle: "New market entry and growth planning",

  question: "Which areas?",

  categories: [
    {
      id: "market-expansion",
      title: "Market Expansion",
    },
    {
      id: "partnership-research",
      title: "Partnership Research",
    },
    {
      id: "new-product-launch",
      title: "New Product Launch",
    },
    {
      id: "strategic-planning",
      title: "Strategic Planning",
    },
    {
      id: "all",
      title: "All Future Expansion Services",
    },
  ],

  secondQuestion: {
    title: "Primary driver?",

    options: [
      {
        id: "new-market-entry",
        title: "New market entry",
      },
      {
        id: "new-product-service",
        title: "New product/service",
      },
      {
        id: "scaling-operations",
        title: "Scaling operations",
      },
      {
        id: "exploring-partnership",
        title: "Exploring a partnership",
      },
    ],
  },
};
