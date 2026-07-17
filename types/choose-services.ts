import { LucideIcon } from "lucide-react";

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isChooseAll?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
}

export interface ExtraProfileField {
  label: string;
  options: string[];
}

export interface ServiceDefinition {
  id: string;

  title: string;

  subtitle: string;
  question: string;

  extraProfile?: ExtraProfileField;
  secondQuestion?: SelectQuestion;

  categories: ServiceCategory[];
}

export interface CategoryResponse {
  selected: boolean;
}

export interface ServiceResponse {
  categories: Record<string, CategoryResponse>;
}

export interface ChooseServiceForm {
  selectedServices: string[];

  services: Record<string, ServiceResponse>;
}

export interface SelectOption {
  id: string;
  title: string;
  showAdditionalQuestion?: boolean;

  additionalTitle?: string;

  additionalPlaceholder?: string;

  allowVoice?: boolean;
}

export interface SelectQuestion {
  title: string;
  options: SelectOption[];
  additionalQuestion?: AdditionalQuestion;
}

export interface AdditionalQuestion {
  enabled?: boolean;

  title?: string;

  placeholder?: string;

  allowVoice?: boolean;
}
