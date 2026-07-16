import {
  Compass,
  Globe,
  Megaphone,
  Scale,
  Settings,
  Target,
} from "lucide-react";

export const SERVICES = [
  {
    id: "strategic-operations",
    title: "Strategic Operations",
    description: "Admin, HR & day-to-day processes",
    icon: Settings,
  },
  {
    id: "targeted-sales",
    title: "Targeted Sales",
    description: "Leads, CRM, outreach & sales support",
    icon: Target,
  },
  {
    id: "accounting-legal",
    title: "Accounting & Legal",
    description: "Bookkeeping, billing, tax & legal admin",
    icon: Scale,
  },
  {
    id: "focused-marketing",
    title: "Focused Marketing",
    description: "Content, social, campaigns & design",
    icon: Megaphone,
  },
  {
    id: "future-expansion",
    title: "Future Expansion",
    description: "Market research, partners & growth planning",
    icon: Globe,
  },
  {
    id: "all",
    title: "Choose All Services",
    description: "Select every STAFF United service.",
    icon: Compass,
    isChooseAll: true,
  },
];
